import { useState } from "react";
import {
  Landmark,
  ChevronRight,
  Eye,
  EyeOff,
  Plus,
  Send,
  Repeat,
  Receipt,
  CreditCard,
  Zap,
  X,
  Building,
  Smartphone,
  Bitcoin,
} from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
export const toFlagEmoji = (countryCode) =>
  countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
export const Flag = ({ code: code, className = "w-6 h-6" }) => (
  <span
    className={`${className} inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden leading-none shrink-0`}
    style={{ fontSize: "1.1em" }}
    aria-label={`${code.toUpperCase()} flag`}
    role="img"
  >
    {toFlagEmoji(code)}
  </span>
);
const BalanceCard = ({
  flagCode: flagCode,
  currency: currency,
  balance: balance,
  actionText: actionText,
  isActiveAction = false,
  showBalances = true,
}) => (
  <div className="flex flex-col justify-between p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm h-40 transition-all hover:shadow-md">
    <div>
      <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-gray-100 dark:border-gray-800 shadow-sm mb-4 bg-gray-50">
        <Flag code={flagCode} className="w-full h-full" />
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          {currency}
          {showBalances ? balance : "****"}
        </span>
      </div>
    </div>
    <Link
      to="/signup"
      className="flex items-center gap-2 self-start px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40"
    >
      <Landmark className="w-3.5 h-3.5" />
      Get account
    </Link>
  </div>
);
const TransactionRow = ({
  date: date,
  amount: amount,
  type: type,
  desc: desc,
}) => (
  <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
    <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
      {date}
    </td>
    <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
      {amount}
    </td>
    <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
      {type}
    </td>
    <td className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300">
      {desc}
    </td>
    <td className="py-4 px-6">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        Completed
      </span>
    </td>
    <td className="py-4 px-6 text-right">
      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors ml-auto" />
    </td>
  </tr>
);
const QuickLink = ({ to: to, Icon: Icon, title: title, desc: desc }) => (
  <Link
    to={to}
    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer"
  >
    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-700 shadow-sm transition-colors">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
        {title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
    </div>
    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
  </Link>
);
export const Overview = () => {
  const { user: user } = useAuth();
  const firstName =
    user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Godwin";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12">
      <div className="pb-6 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Hi, {firstName}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            Total balance
          </p>
          <div className="flex items-center gap-3">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              ${showBalance ? "0.00" : "****"}
            </span>
            <button
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer"
              onClick={() => setShowBalance(!showBalance)}
            >
              {showBalance ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/dashboard/add-money"
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Add money
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-medium transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
          <Link
            to="/dashboard/convert"
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-xl text-sm font-medium transition-colors cursor-pointer"
          >
            <Repeat className="w-4 h-4" />
            Convert
          </Link>
        </div>
      </div>
      <div className="p-6 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            All accounts
          </h2>
          <Link
            to="/dashboard/accounts"
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            View all accounts
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BalanceCard
            flagCode="us"
            currency="$"
            balance="0.00"
            actionText="Get account"
            showBalances={showBalance}
          />
          <BalanceCard
            flagCode="ng"
            currency="₦"
            balance="0.097"
            actionText="1812299152"
            isActiveAction={true}
            showBalances={showBalance}
          />
          <BalanceCard
            flagCode="gb"
            currency="£"
            balance="0.00"
            actionText="Get account"
            showBalances={showBalance}
          />
          <BalanceCard
            flagCode="eu"
            currency="€"
            balance="0.00"
            actionText="Get account"
            showBalances={showBalance}
          />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-left p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4 text-blue-500">
              <Send className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
              Send Money
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Send money to 80+ countries instantly
            </p>
          </button>
          <Link
            to="/signup"
            className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center mb-4 text-purple-500">
              <Receipt className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
              Invoices
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Create and send multi-currency invoices to clients and employers
            </p>
          </Link>
          <Link
            to="/dashboard/cards"
            className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 bg-gray-900 dark:bg-gray-800 rounded-xl flex items-center justify-center mb-4 text-white">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
              Virtual card
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Shop, subscribe and pay bills securely online
            </p>
          </Link>
          <Link
            to="/dashboard/pay-bills"
            className="p-5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-4 text-orange-500">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1 group-hover:text-indigo-600 transition-colors">
              Pay Bills
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Pay for your internet, cable subscription and other utility bills
              all in one place
            </p>
          </Link>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Recent transactions
          </h2>
          <Link
            to="/signup"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            See all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50 border-y border-gray-100 dark:border-gray-800">
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="py-4 px-6 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="py-4 px-6" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              <TransactionRow
                date="13 March 2026, 19:26:57"
                amount="- $39.00"
                type="Withdraw"
                desc="Card deposit"
              />
              <TransactionRow
                date="13 March 2026, 19:26:26"
                amount="- ₦56,451.52"
                type="Swap"
                desc="NGN to USD"
              />
              <TransactionRow
                date="13 March 2026, 19:25:36"
                amount="+ ₦56,500.00"
                type="Deposit"
                desc="GODWIN"
              />
              <TransactionRow
                date="09 March 2026, 22:03:35"
                amount="- $9.00"
                type="Withdraw"
                desc="Card deposit"
              />
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 w-full max-w-[440px] rounded-3xl shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-6 pb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Send money
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 space-y-2">
              <QuickLink
                to="/dashboard/send/bank"
                Icon={Building}
                title="Send via bank transfer"
                desc="Send straight to recipient's bank account"
              />
              <QuickLink
                to="/dashboard/send/mobile"
                Icon={Smartphone}
                title="Send via Mobile Money"
                desc="Send straight to recipient's mobile money account"
              />
              <QuickLink
                to="/dashboard/send/crypto"
                Icon={Bitcoin}
                title="Send via crypto"
                desc="Send straight to recipient's crypto wallet"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
