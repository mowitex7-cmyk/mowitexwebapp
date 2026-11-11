import { format, subMonths, parseISO } from "date-fns";
import {
  LoaderCircle,
  Activity,
  TrendingUp,
  DollarSign,
  TrendingDown,
} from "lucide-react";
import {
  MonthlyBarChart,
  CategoryPieChart,
} from "../../components/analytics/Charts";
import { StatCard } from "../../components/analytics/StatCard";
import { useData } from "../../hooks/useData";
export const Analytics = () => {
  const { transactions: transactions, loading: loading } = useData();
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoaderCircle className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, item) => acc + Math.abs(item.amount), 0);
  const expensesByCategory = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, item) => {
      const rawCategory = item.category || "Other";
      const categoryName =
        rawCategory.charAt(0).toUpperCase() +
        rawCategory.slice(1).toLowerCase();
      acc[categoryName] = (acc[categoryName] || 0) + Math.abs(item.amount);
      return acc;
    }, {});
  const pieData = Object.keys(expensesByCategory).map((item) => ({
    name: item,
    value: expensesByCategory[item],
  }));
  const monthlyTotals = {};
  const months = [];
  for (let monthsAgo = 5; monthsAgo >= 0; monthsAgo--) {
    const monthLabel = format(subMonths(new Date(), monthsAgo), "MMM");
    months.push(monthLabel);
    monthlyTotals[monthLabel] = { income: 0, expense: 0 };
  }
  transactions.forEach((transaction) => {
    try {
      const monthLabel = format(parseISO(transaction.date), "MMM");
      if (monthlyTotals[monthLabel]) {
        if (transaction.amount > 0) {
          monthlyTotals[monthLabel].income += transaction.amount;
        } else {
          monthlyTotals[monthLabel].expense += Math.abs(transaction.amount);
        }
      }
    } catch {
      console.warn("Invalid date in transaction:", transaction);
    }
  });
  const barData = months.map((item) => ({
    name: item,
    income: monthlyTotals[item].income,
    expense: monthlyTotals[item].expense,
  }));
  let topCategory = "None";
  let topAmount = 0;
  Object.entries(expensesByCategory).forEach(([category, amount]) => {
    if (amount > topAmount) {
      topAmount = amount;
      topCategory = category;
    }
  });
  const netSavings = totalIncome - totalExpenses;
  const savingsRate =
    totalIncome > 0
      ? ((netSavings / totalIncome) * 100).toFixed(1) + "%"
      : "0%";
  const formatAmount = (value) =>
    value.toLocaleString(undefined, { maximumFractionDigits: 0 });
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500">
          Track your financial health and spending habits
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Spending"
          value={`$${formatAmount(totalExpenses)}`}
          trend="+5%"
          trendType="down"
          icon={Activity}
          iconColor="bg-orange-100 text-orange-600"
        />
        <StatCard
          title="Total Income"
          value={`$${formatAmount(totalIncome)}`}
          trend="+2%"
          trendType="up"
          icon={TrendingUp}
          iconColor="bg-green-100 text-green-600"
        />
        <StatCard
          title="Highest Category"
          value={topCategory.charAt(0).toUpperCase() + topCategory.slice(1)}
          trend={`$${formatAmount(topAmount)}`}
          trendType="neutral"
          icon={DollarSign}
          iconColor="bg-purple-100 text-purple-600"
        />
        <StatCard
          title="Net Savings"
          value={`$${formatAmount(netSavings)}`}
          trend={savingsRate}
          trendType="up"
          icon={TrendingDown}
          iconColor="bg-blue-100 text-blue-600"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <MonthlyBarChart data={barData} />
        </div>
        <div>
          <CategoryPieChart data={pieData} />
        </div>
      </div>
    </div>
  );
};
