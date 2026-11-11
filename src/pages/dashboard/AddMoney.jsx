import { useState } from "react";
import { clsx } from "clsx";
import {
  Check,
  ChevronDown,
  ChevronRight,
  Percent,
  Equal,
  Zap,
  X,
  Building2,
} from "lucide-react";
import { toast } from "sonner";
import { toFlagEmoji } from "./Overview";
const WALLETS = {
  NGN: { code: "ng", name: "Nigerian Naira", balance: "₦0.00" },
  USD: { code: "us", name: "US Dollar", balance: "$0.00" },
  EUR: { code: "eu", name: "Euro", balance: "€0.00" },
  GBP: { code: "gb", name: "British Pound", balance: "£0.00" },
};
const currencySymbol = (currency) =>
  currency === "NGN"
    ? "₦"
    : currency === "USD"
      ? "$"
      : currency === "EUR"
        ? "€"
        : "£";
const WalletFlag = ({ code: code, size = "w-6 h-6", w: width = 40 }) => (
  <div
    className={clsx(
      size,
      "rounded-full overflow-hidden flex-shrink-0 bg-gray-100 shadow-sm border border-black/5 dark:border-white/10",
    )}
  >
    <span
      className="w-full h-full flex items-center justify-center leading-none"
      style={{ fontSize: width > 40 ? "1.4em" : "1em" }}
    >
      {toFlagEmoji(code)}
    </span>
  </div>
);
const WalletPicker = ({ value: value, onPick: onPick }) => (
  <div className="absolute top-[calc(100%+8px)] left-0 w-full z-50 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
    {Object.entries(WALLETS).map(([walletCode, wallet]) => (
      <button
        key={walletCode}
        onClick={() => onPick(walletCode)}
        className={clsx(
          "w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer text-left",
          value === walletCode && "bg-indigo-50/50 dark:bg-indigo-900/10",
        )}
      >
        <div className="flex items-center gap-3">
          <WalletFlag code={wallet.code} size="w-8 h-8" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {walletCode}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {wallet.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {wallet.balance}
          </span>
          {value === walletCode && (
            <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              <Check className="w-3.5 h-3.5" strokeWidth={3} />
            </div>
          )}
        </div>
      </button>
    ))}
  </div>
);
const SummaryRow = ({ Icon: Icon, label: label, value: value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
      </div>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {label}
      </span>
    </div>
    <span className="text-sm font-medium text-gray-900 dark:text-white">
      {value}
    </span>
  </div>
);
export const AddMoney = () => {
  const [amount, setAmount] = useState("2000");
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fromWallet, setFromWallet] = useState("NGN");
  const [toWallet, setToWallet] = useState("NGN");
  const handleAmountChange = (event) => {
    const cleaned = event.target.value.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");
    if (!(parts.length > 2 || parts[1]?.length > 2)) {
      setAmount(cleaned);
    }
  };
  const formattedAmount = amount
    ? Number(amount).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "0.00";
  return (
    <div className="max-w-[560px] mx-auto space-y-8 pb-12 pt-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Add money
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter the amount you want to add
        </p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            You are adding
          </label>
          <div className="relative">
            <div className="flex h-[60px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-shadow shadow-sm">
              <div
                className="flex items-center gap-2 px-4 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 w-[140px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                onClick={() => {
                  setIsFromOpen(!isFromOpen);
                  setIsToOpen(false);
                }}
              >
                <WalletFlag code={WALLETS[fromWallet].code} />
                <span className="font-semibold text-gray-900 dark:text-white">
                  {fromWallet}
                </span>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-gray-400 ml-auto transition-transform duration-200",
                    isFromOpen && "rotate-180",
                  )}
                />
              </div>
              <input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.00"
                className="flex-1 px-4 text-right text-lg font-medium text-gray-900 dark:text-white bg-transparent outline-none transition-colors"
              />
            </div>
            {isFromOpen && (
              <WalletPicker
                value={fromWallet}
                onPick={(code) => {
                  setFromWallet(code);
                  setIsFromOpen(false);
                }}
              />
            )}
          </div>
        </div>
        <div className="space-y-2 relative z-40">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Currency to pay with
          </label>
          <div
            className="flex items-center justify-between h-[60px] px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 cursor-pointer shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            onClick={() => {
              setIsToOpen(!isToOpen);
              setIsFromOpen(false);
            }}
          >
            <div className="flex items-center gap-3">
              <WalletFlag code={WALLETS[toWallet].code} />
              <span className="font-medium text-gray-900 dark:text-white">
                {WALLETS[toWallet].name}
              </span>
            </div>
            <ChevronDown
              className={clsx(
                "w-5 h-5 text-gray-400 transition-transform duration-200",
                isToOpen && "rotate-180",
              )}
            />
          </div>
          {isToOpen && (
            <WalletPicker
              value={toWallet}
              onPick={(code) => {
                setToWallet(code);
                setIsToOpen(false);
              }}
            />
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Paying with
          </label>
          <div className="flex items-center justify-between h-[60px] px-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 cursor-pointer shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <span className="font-medium text-gray-900 dark:text-white">
              Bank Transfer
            </span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-5 space-y-4 bg-white dark:bg-gray-900 shadow-sm">
          <SummaryRow
            Icon={Percent}
            label="Fee"
            value={`${currencySymbol(toWallet)}0.00`}
          />
          <SummaryRow
            Icon={Equal}
            label="Amount we'll add"
            value={`${currencySymbol(fromWallet)}${formattedAmount}`}
          />
          <SummaryRow Icon={Zap} label="Should arrive" value="in 30 seconds" />
        </div>
      </div>
      <div className="pt-4">
        <button
          onClick={() => setShowConfirm(true)}
          disabled={!amount || Number(amount) <= 0}
          className={clsx(
            "w-full py-3.5 rounded-xl font-medium text-base transition-colors mt-auto md:mt-8",
            amount && Number(amount) > 0
              ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer"
              : "bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed",
          )}
        >
          Continue
        </button>
      </div>
      {showConfirm && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between p-6 pb-2">
              <div
                className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setShowConfirm(false)}
              >
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </div>
            </div>
            <div className="px-6 pb-8">
              <div className="text-center mb-8">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                  Confirm amount
                </p>
                <h2 className="text-[40px] font-bold text-gray-900 dark:text-white leading-none">
                  {currencySymbol(fromWallet)}
                  {formattedAmount}
                </h2>
              </div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start justify-between border-b border-gray-100 dark:border-gray-800 pb-6">
                  <div className="flex items-center gap-3">
                    <WalletFlag
                      code={WALLETS[fromWallet].code}
                      size="w-10 h-10"
                      w={80}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Adding to
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {fromWallet} Account
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {currencySymbol(fromWallet)}
                    {formattedAmount}
                  </p>
                </div>
                <div className="flex items-start justify-between border-b border-gray-100 dark:border-gray-800 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Paying with
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {WALLETS[toWallet].name}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {currencySymbol(toWallet)}
                    {formattedAmount}
                  </p>
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Should arrive
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-base shadow-sm transition-colors cursor-pointer"
                onClick={() => {
                  setShowConfirm(false);
                  toast.success("Preview only: no money was moved.");
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
