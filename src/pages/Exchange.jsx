import { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRightLeft,
  RefreshCw,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Flag } from "./dashboard/Overview";
const CURRENCIES = [
  { code: "USD", name: "US Dollar", flag: "us" },
  { code: "EUR", name: "Euro", flag: "eu" },
  { code: "GBP", name: "British Pound", flag: "gb" },
  { code: "NGN", name: "Nigerian Naira", flag: "ng" },
  { code: "KES", name: "Kenyan Shilling", flag: "ke" },
  { code: "EGP", name: "Egyptian Pound", flag: "eg" },
  { code: "TZS", name: "Tanzanian Shilling", flag: "tz" },
  { code: "GHS", name: "Ghanaian Cedi", flag: "gh" },
  { code: "UGX", name: "Ugandan Shilling", flag: "ug" },
  { code: "ZAR", name: "South African Rand", flag: "za" },
  { code: "RWF", name: "Rwandan Franc", flag: "rw" },
  { code: "MXN", name: "Mexican Peso", flag: "mx" },
];
const RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  NGN: 1353.52,
  KES: 130.5,
  EGP: 47.39,
  TZS: 2550,
  GHS: 12.8,
  UGX: 3800,
  ZAR: 18.9,
  RWF: 1280,
  MXN: 16.7,
};
const popularPairs = [
  { from: "USD", to: "EGP" },
  { from: "USD", to: "NGN" },
  { from: "GBP", to: "MXN" },
  { from: "KES", to: "NGN" },
  { from: "TZS", to: "USD" },
  { from: "EUR", to: "KES" },
];
const flagFor = (code) => {
  return CURRENCIES.find((currency) => currency.code === code)?.flag || "un";
};
const CurrencySelect = ({ value: value, onChange: onChange }) => (
  <div className="flex items-center gap-2 ml-4 shrink-0">
    <Flag code={flagFor(value)} className="w-6 h-6 shadow-sm" />
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="bg-transparent font-bold text-lg cursor-pointer outline-none appearance-none pr-6 relative z-10"
      style={{ backgroundImage: "none" }}
    >
      {CURRENCIES.map((currency) => (
        <option
          key={currency.code}
          value={currency.code}
          className="text-black bg-white dark:bg-slate-800 dark:text-white"
        >
          {currency.code}
        </option>
      ))}
    </select>
    <ChevronDown className="w-4 h-4 text-slate-400 -ml-6 pointer-events-none" />
  </div>
);
const steps = [
  "Select your base currency",
  "Choose the currency you want to convert to",
  "Enter amount and get real-time conversion.",
];
export const Exchange = () => {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [rates, setRates] = useState(RATES);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isSwapping, setIsSwapping] = useState(false);
  useEffect(() => {
    const refreshRates = () => {
      const nextRates = { ...RATES };
      Object.keys(nextRates).forEach((item) => {
        if (item !== "USD") {
          nextRates[item] = RATES[item] * (1 + (Math.random() - 0.5) * 0.02);
        }
      });
      setRates(nextRates);
      setLastUpdated(new Date());
    };
    refreshRates();
    const intervalId = setInterval(refreshRates, 3e4);
    return () => clearInterval(intervalId);
  }, []);
  const handleSwap = () => {
    setIsSwapping(true);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setTimeout(() => setIsSwapping(false), 500);
  };
  const getRate = (from, to) => (1 / rates[from]) * rates[to];
  const convertedAmount = amount
    ? (parseFloat(amount) * getRate(fromCurrency, toCurrency)).toFixed(2)
    : "0.00";
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <Navbar />
      <main className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="text-center space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Global Currency Exchange
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
              Real-time exchange rates. Zero hidden fees. Instant transfers.
            </p>
          </div>
          <div className="w-full max-w-2xl bg-white dark:bg-[#151b2b] rounded-3xl shadow-2xl dark:shadow-blue-900/10 border border-slate-200 dark:border-slate-800 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center">
              <div className="bg-slate-50 dark:bg-[#1e2536] p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all focus-within:ring-2 focus-within:ring-blue-500">
                <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                  YOU SEND
                </label>
                <div className="flex items-center justify-between">
                  <input
                    type="number"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    className="bg-transparent text-2xl md:text-3xl font-bold outline-none w-full text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder="0.00"
                  />
                  <CurrencySelect
                    value={fromCurrency}
                    onChange={setFromCurrency}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleSwap}
                  className={`p-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 transition-all transform ${isSwapping ? "rotate-180" : ""} shadow-md border border-slate-200 dark:border-slate-700`}
                >
                  <ArrowRightLeft className="w-6 h-6" />
                </button>
              </div>
              <div className="bg-slate-50 dark:bg-[#1e2536] p-4 rounded-2xl border border-slate-200 dark:border-slate-700 transition-all">
                <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                  RECIPIENT GETS
                </label>
                <div className="flex items-center justify-between">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white overflow-hidden text-ellipsis whitespace-nowrap w-full">
                    {convertedAmount}
                  </div>
                  <CurrencySelect value={toCurrency} onChange={setToCurrency} />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
              <Link
                to="/signup"
                className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] text-center inline-block"
              >
                Convert now
              </Link>
              <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <RefreshCw className="w-3 h-3" />
                Last updated: {lastUpdated.toLocaleTimeString()}
              </div>
            </div>
          </div>
          <div className="w-full max-w-6xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                Live exchange rates on Mowitex
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Mowitex provides mid-market rates, updated in real time. We
                ensure there are no hidden fees, offering transparent and
                reliable currency conversion for users worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularPairs.map((popularPair, index) => {
                const pairRate = getRate(popularPair.from, popularPair.to);
                return (
                  <div
                    key={`${popularPair.from}-${popularPair.to}-${index}`}
                    className="group bg-white dark:bg-[#151b2b] p-6 rounded-2xl shadow-sm hover:shadow-xl dark:shadow-none border border-slate-200 dark:border-slate-800 transition-all hover:border-blue-500/30 dark:hover:border-blue-500/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center -space-x-3">
                        <Flag
                          code={flagFor(popularPair.from)}
                          className="w-10 h-10 border-2 border-white dark:border-[#151b2b] text-xl"
                        />
                        <Flag
                          code={flagFor(popularPair.to)}
                          className="w-10 h-10 border-2 border-white dark:border-[#151b2b] text-xl"
                        />
                      </div>
                      <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
                        Live
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        1 {popularPair.from} =
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {pairRate.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 4,
                        })}{" "}
                        {popularPair.to}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full max-w-4xl py-12 flex flex-col items-center text-center space-y-12">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
              Our App allows you to swap your base currency with any currency of
              your choice at a very cheap rate.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {["USD", "GBP", "NGN", "EUR"].map((item) => (
                <div
                  key={item}
                  className="bg-white dark:bg-[#151b2b] p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center space-y-3 w-32 transition-transform hover:-translate-y-1"
                >
                  <Flag
                    code={flagFor(item)}
                    className="w-12 h-12 text-2xl shadow-sm"
                  />
                  <span className="font-bold text-slate-900 dark:text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              And many more currencies supported
            </p>
          </div>
          <div className="w-full max-w-6xl py-12 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center max-w-2xl mx-auto leading-tight">
              How Mowitex currency conversion calculator works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="bg-slate-100 dark:bg-[#151b2b] rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group transition-all hover:shadow-lg dark:hover:shadow-blue-900/10"
                >
                  <div className="mb-6 relative z-10">
                    <p className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-2">
                      Step {["One", "Two", "Three"][index]}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {step}
                    </h3>
                  </div>
                  <div className="mt-auto flex justify-center items-end h-40 relative px-4">
                    {index === 0 && (
                      <div className="relative z-10 bg-white dark:bg-slate-800 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 mb-8 transform group-hover:-translate-y-2 transition-transform">
                        <Flag code="us" className="w-8 h-8 text-lg" />
                        <span className="font-bold text-slate-900 dark:text-white">
                          US Dollars
                        </span>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="flex items-end justify-center gap-4 mb-6">
                        {["eu", "gb", "ng"].map((item, idx) => (
                          <Flag
                            key={item}
                            code={item}
                            className={`${idx === 1 ? "w-12 h-12 mb-8" : "w-10 h-10"} text-xl shadow-lg border-2 border-white dark:border-slate-700 transition-transform duration-500 group-hover:-translate-y-2`}
                          />
                        ))}
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-full bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm mb-6 border border-slate-200 dark:border-slate-700 relative group-hover:scale-105 transition-transform">
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-xs font-bold text-slate-900 dark:text-white border border-slate-100 dark:border-slate-600">
                          £
                        </div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">
                          AMOUNT
                        </p>
                        <div className="flex items-center">
                          <span className="text-3xl font-bold text-slate-900 dark:text-white">
                            93.1
                          </span>
                          <div className="w-0.5 h-8 bg-blue-500 ml-1 animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
