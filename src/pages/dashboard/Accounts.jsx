import { useState } from "react";
import { clsx } from "clsx";
import {
  EyeOff,
  Eye,
  Plus,
  Info,
  ArrowUpRight,
  ArrowRightLeft,
} from "lucide-react";
import { Link } from "react-router";
import { Flag } from "./Overview";
export const Accounts = () => {
  const [selectedId, setSelectedId] = useState("NGN");
  const [showBalance, setShowBalance] = useState(true);
  const accounts = [
    {
      id: "NGN",
      label: "NGN",
      flagCode: "ng",
      isCrypto: false,
      symbol: "₦",
      available: "454.24",
      pending: "0.00",
    },
    {
      id: "GBP",
      label: "GBP",
      flagCode: "gb",
      isCrypto: false,
      symbol: "£",
      available: "0.00",
      pending: "0.00",
    },
    {
      id: "EUR",
      label: "EUR",
      flagCode: "eu",
      isCrypto: false,
      symbol: "€",
      available: "0.00",
      pending: "0.00",
    },
    {
      id: "USD",
      label: "USD",
      flagCode: "us",
      isCrypto: false,
      symbol: "$",
      available: "0.00",
      pending: "0.00",
    },
    {
      id: "USDC",
      label: "USDC",
      iconColor: "bg-blue-500",
      isCrypto: true,
      symbol: "USDC ",
      available: "0.00",
      pending: "0.00",
    },
    {
      id: "USDT",
      label: "USDT",
      iconColor: "bg-green-500",
      isCrypto: true,
      symbol: "USDT ",
      available: "0.00",
      pending: "0.00",
    },
  ];
  const selectedAccount =
    accounts.find((item) => item.id === selectedId) || accounts[0];
  const actionButtonClass =
    "flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all";
  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12 pt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            My Balances{" "}
            <span className="text-gray-500 text-sm font-medium">(6)</span>
          </h1>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-indigo-400 p-1 rounded-full border border-indigo-100 dark:border-indigo-900/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            {showBalance ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        </div>
        <Link
          to="/signup"
          className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Add new balance
          <Plus className="w-4 h-4 text-gray-400" />
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center p-1.5 bg-gray-50 dark:bg-gray-800/40 rounded-2xl border border-gray-100 dark:border-gray-800/60 shadow-inner overflow-x-auto max-w-full no-scrollbar">
            {accounts.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={clsx(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                  selectedId === item.id
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)]"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50",
                )}
              >
                {item.isCrypto ? (
                  <div
                    className={clsx(
                      "w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-bold shadow-sm",
                      item.iconColor,
                    )}
                  >
                    {item.id === "USDC" ? "C" : "T"}
                  </div>
                ) : (
                  <Flag
                    code={item.flagCode}
                    className="w-4 h-4 text-[10px] shadow-sm"
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12">
          <div className="text-center flex-1 md:flex-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
              Available {selectedAccount.id} balance
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              {selectedAccount.symbol}
              {showBalance ? selectedAccount.available : "****"}
            </div>
          </div>
          <div className="hidden md:block w-px h-20 bg-gray-100 dark:bg-gray-800" />
          <div className="text-center flex-1 md:flex-none flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
              Pending {selectedAccount.id} balance
              <Info className="w-4 h-4 text-gray-400" />
            </div>
            <div className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              {selectedAccount.symbol}
              {showBalance ? selectedAccount.pending : "****"}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Link to="/dashboard/add-money" className={actionButtonClass}>
            Add Money
            <Plus className="w-4 h-4 text-gray-500" />
          </Link>
          <Link to="/dashboard/transfer" className={actionButtonClass}>
            Send Money
            <ArrowUpRight className="w-4 h-4 text-gray-500" />
          </Link>
          <Link to="/dashboard/convert" className={actionButtonClass}>
            Convert Funds
            <ArrowRightLeft className="w-4 h-4 text-gray-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};
