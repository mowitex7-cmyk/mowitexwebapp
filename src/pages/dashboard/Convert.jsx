import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { ChevronDown, Slash, ArrowLeftRight, Zap } from "lucide-react";
import { toast } from "sonner";
import { toFlagEmoji } from "./Overview";
const CURRENCIES = {
  USD: { code: "us", symbol: "$", rate: 1 },
  NGN: { code: "ng", symbol: "₦", rate: 1395 },
  EUR: { code: "eu", symbol: "€", rate: 0.92 },
  GBP: { code: "gb", symbol: "£", rate: 0.79 },
};
const CurrencySelect = ({ value: value, onChange: onChange }) => (
  <div className="relative border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 w-[140px]">
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
    >
      {Object.keys(CURRENCIES).map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
    <div className="flex items-center justify-between px-4 h-full pointer-events-none">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          <span className="w-full h-full flex items-center justify-center leading-none">
            {toFlagEmoji(CURRENCIES[value].code)}
          </span>
        </div>
        <span className="font-semibold text-gray-900 dark:text-white">
          {value}
        </span>
      </div>
      <ChevronDown className="w-4 h-4 text-gray-400" />
    </div>
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
export const Convert = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  useEffect(() => {
    if (!amount || isNaN(Number(amount))) {
      setConvertedAmount("");
      return;
    }
    const result =
      (Number(amount) / CURRENCIES[fromCurrency].rate) *
      CURRENCIES[toCurrency].rate;
    setConvertedAmount(
      result.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );
  }, [amount, fromCurrency, toCurrency]);
  const handleAmountChange = (event) => {
    const cleaned = event.target.value.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");
    if (!(parts.length > 2 || parts[1]?.length > 2)) {
      setAmount(cleaned);
    }
  };
  const rateText = `1 ${fromCurrency} = ${(CURRENCIES[toCurrency].rate / CURRENCIES[fromCurrency].rate).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 4 })} ${toCurrency}`;
  const fieldClass =
    "flex h-[60px] rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 transition-shadow shadow-sm";
  return (
    <div className="max-w-[560px] mx-auto space-y-8 pb-12 pt-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Convert
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter the amount you want to convert
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            You convert
          </label>
          <div className={fieldClass}>
            <CurrencySelect value={fromCurrency} onChange={setFromCurrency} />
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              className="flex-1 px-4 text-right text-lg font-medium text-gray-400 dark:text-gray-500 focus:text-gray-900 dark:focus:text-white bg-transparent outline-none transition-colors"
            />
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 dark:border-gray-800 p-5 space-y-4 bg-white dark:bg-gray-900 shadow-sm">
          <SummaryRow
            Icon={Slash}
            label="Fee"
            value={`${CURRENCIES[fromCurrency].symbol}0.00`}
          />
          <SummaryRow Icon={ArrowLeftRight} label="Rate" value={rateText} />
          <SummaryRow Icon={Zap} label="Should arrive" value="Instantly" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            You get
          </label>
          <div className={fieldClass}>
            <CurrencySelect value={toCurrency} onChange={setToCurrency} />
            <input
              type="text"
              value={convertedAmount}
              readOnly={true}
              placeholder="0.00"
              className="flex-1 px-4 text-right text-lg font-medium text-gray-400 dark:text-gray-500 bg-transparent outline-none cursor-not-allowed"
            />
          </div>
        </div>
      </div>
      <div className="pt-4">
        <button
          disabled={!amount || Number(amount) <= 0}
          onClick={() => toast.success("Preview only: no conversion was made.")}
          className={clsx(
            "w-full py-3.5 rounded-xl font-medium text-base transition-colors",
            amount && Number(amount) > 0
              ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm cursor-pointer"
              : "bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed",
          )}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
