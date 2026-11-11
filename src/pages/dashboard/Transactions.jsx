import { useState } from "react";
import { clsx } from "clsx";
import { LoaderCircle, Funnel, Search } from "lucide-react";
import { TransactionList } from "../../components/transactions/TransactionList";
import { useData } from "../../hooks/useData";
export const Transactions = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const { transactions: transactions, loading: loading } = useData();
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <LoaderCircle className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesType =
      filter === "all"
        ? true
        : filter === "income"
          ? transaction.amount > 0
          : transaction.amount < 0;
    const matchesSearch =
      (transaction.description || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (transaction.category || "").toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Transactions</h1>
          <p className="text-gray-500">
            View and manage your transaction history
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Funnel className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm">
            Export CSV
          </button>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            {["all", "income", "expense"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={clsx(
                  "px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-all",
                  filter === item
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-500 rounded-lg outline-none transition-all"
            />
          </div>
        </div>
        <TransactionList transactions={filteredTransactions} />
      </div>
    </div>
  );
};
