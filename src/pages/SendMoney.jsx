import { useState, useEffect } from "react";
import {
  ChevronDown,
  Download,
  ArrowLeft,
  LoaderCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  Check,
} from "lucide-react";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { ScrollArea } from "../components/ui/scroll-area";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import speedStopwatchImg from "../assets/99f267e4ac48c7c0875b6766eab09a1c34e3ef1a.png";
import globalNetworkConnectivityImg from "../assets/b5a5d117f74cfaa8e62d7a7f79c6fde83cf828a6.png";
const CURRENCIES = {
  EUR: { code: "EUR", symbol: "€", flag: "🇪🇺", name: "Euro" },
  USD: { code: "USD", symbol: "$", flag: "🇺🇸", name: "US Dollar" },
  GBP: { code: "GBP", symbol: "£", flag: "🇬🇧", name: "British Pound" },
  GHS: { code: "GHS", symbol: "₵", flag: "🇬🇭", name: "Ghanaian Cedi" },
  NGN: { code: "NGN", symbol: "₦", flag: "🇳🇬", name: "Nigerian Naira" },
  KES: { code: "KES", symbol: "KSh", flag: "🇰🇪", name: "Kenyan Shilling" },
  ZAR: { code: "ZAR", symbol: "R", flag: "🇿🇦", name: "South African Rand" },
};
const RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  GHS: 15.2,
  NGN: 1395,
  KES: 129,
  ZAR: 18.1,
};
const getRate = (from, to) => RATES[to] / RATES[from];
const popularRoutes = [
  { from: "USD", to: "EUR" },
  { from: "EUR", to: "GBP" },
  { from: "GBP", to: "NGN" },
  { from: "USD", to: "GHS" },
  { from: "EUR", to: "KES" },
  { from: "GBP", to: "ZAR" },
  { from: "USD", to: "NGN" },
  { from: "EUR", to: "USD" },
];
const supportedCurrencies = [
  ["US Dollar", "US"],
  ["Canadian Dollar", "CA"],
  ["Euro", "EU"],
  ["British Pound", "GB"],
  ["Kenyan Shilling", "KE"],
  ["Rwandan Franc", "RW"],
  ["Nigerian Naira", "NG"],
  ["South African Rand", "ZA"],
  ["Ghana Cedi", "GH"],
  ["UAE Dirham", "AE"],
  ["Tanzanian Shilling", "TZ"],
  ["Ugandan Shilling", "UG"],
  ["Swiss Franc", "CH"],
  ["Chinese Yuan", "CN"],
  ["Danish Krone", "DK"],
  ["Qatari Riyal", "QA"],
  ["Indian Rupee", "IN"],
  ["Australian Dollar", "AU"],
  ["Japanese Yen", "JP"],
  ["Singapore Dollar", "SG"],
  ["New Zealand Dollar", "NZ"],
  ["Swedish Krona", "SE"],
  ["Norwegian Krone", "NO"],
  ["Mexican Peso", "MX"],
  ["Brazilian Real", "BR"],
  ["Polish Zloty", "PL"],
  ["Czech Koruna", "CZ"],
  ["Hungarian Forint", "HU"],
  ["Romanian Leu", "RO"],
  ["Bulgarian Lev", "BG"],
  ["Turkish Lira", "TR"],
  ["Israeli Shekel", "IL"],
  ["Hong Kong Dollar", "HK"],
  ["South Korean Won", "KR"],
].map(([name, code]) => ({ name: name, code: code }));
const CurrencyFlag = ({ code: code, className: className }) => (
  <span
    className={`${className} inline-flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-[9px] font-bold text-blue-700 dark:text-blue-300`}
  >
    {code}
  </span>
);
const CurrencyPicker = ({
  value: value,
  onPick: onPick,
  open: open,
  setOpen: setOpen,
  tint: tint,
}) => (
  <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shrink-0"
    >
      <span
        className={`w-5 h-5 rounded-full ${tint} flex items-center justify-center text-xs`}
      >
        {CURRENCIES[value].flag}
      </span>
      {value}
      <ChevronDown className="w-4 h-4 text-gray-500" />
    </button>
    {open && (
      <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden py-1 z-50">
        {Object.entries(CURRENCIES).map(([currencyCode, currency]) => (
          <button
            key={currencyCode}
            onClick={() => {
              onPick(currencyCode);
              setOpen(false);
            }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-white/5 flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200"
          >
            <span>{currency.flag}</span>
            <span>{currencyCode}</span>
            <span className="text-xs text-gray-400 ml-auto">
              {currency.name}
            </span>
          </button>
        ))}
      </div>
    )}
  </div>
);
export const SendMoney = () => {
  const [sendAmount, setSendAmount] = useState("1000");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("GHS");
  const [rate, setRate] = useState(14);
  const fee = 1;
  const [loadingRate, setLoadingRate] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);
  const [liveRates, setLiveRates] = useState({});
  useEffect(() => {
    const updateRates = () => {
      setLiveRates((prevRates) => {
        const nextRates = {};
        popularRoutes.forEach(({ from: currentRate, to: to }) => {
          const pairKey = `${currentRate}-${to}`;
          const newRate =
            getRate(currentRate, to) * (1 + (Math.random() - 0.5) * 0.002);
          const previous = prevRates[pairKey];
          nextRates[pairKey] = {
            rate: newRate,
            lastUpdated: Date.now(),
            trend: previous
              ? newRate > previous.rate
                ? "up"
                : newRate < previous.rate
                  ? "down"
                  : previous.trend
              : Math.random() > 0.5
                ? "up"
                : "down",
          };
        });
        return nextRates;
      });
    };
    updateRates();
    const intervalId = setInterval(updateRates, 1e4);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    setLoadingRate(true);
    const timer = setTimeout(() => {
      setRate(getRate(fromCurrency, toCurrency));
      setLoadingRate(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [fromCurrency, toCurrency]);
  useEffect(() => {
    const parsedAmount = parseFloat(sendAmount);
    setReceiveAmount(
      !isNaN(parsedAmount) && rate ? (parsedAmount * rate).toFixed(2) : "0",
    );
  }, [sendAmount, rate]);
  const formatNumber = (value) => {
    const parsed = parseFloat(value);
    return isNaN(parsed)
      ? ""
      : new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
          parsed,
        );
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-white font-sans selection:bg-blue-500/30 transition-colors duration-300">
      <Navbar />
      <main className="pt-20 lg:pt-32 pb-16 relative overflow-hidden min-h-screen flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/50 dark:bg-purple-900/20 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full">
            <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
              <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4 block">
                Send money
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900 dark:text-white text-left">
                Move your money easily, anywhere, anytime
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Next-generation infrastructure. Built modern. Made global. Your
                payments, borderless and effortless.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2962FF] hover:bg-[#1e4bd1] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20 hover:scale-105 active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>Download app</span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="relative z-10 w-full max-w-md">
                <div className="bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 w-full min-h-[500px] flex flex-col justify-center transition-all duration-300">
                  {showDetails ? (
                    <div className="animate-in fade-in slide-in-from-right-10 duration-300 h-full flex flex-col">
                      <button
                        onClick={() => setShowDetails(false)}
                        className="self-start mb-6 flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm font-medium"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back to edit
                      </button>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Review your transfer
                      </h2>
                      <div className="flex-grow space-y-6">
                        <div className="bg-gray-50 dark:bg-[#0B1120] rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-500 dark:text-gray-400">
                              You send
                            </span>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                              {CURRENCIES[fromCurrency].symbol}
                              {formatNumber(sendAmount)} {fromCurrency}
                            </span>
                          </div>
                          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-gray-500 dark:text-gray-400">
                              Recipient gets
                            </span>
                            <span className="text-xl font-bold text-green-600 dark:text-green-400">
                              {CURRENCIES[toCurrency].symbol}
                              {formatNumber(receiveAmount)} {toCurrency}
                            </span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 dark:text-gray-400">
                              Total fees
                            </span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {CURRENCIES[toCurrency].symbol}
                              {fee.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full bg-[#2962FF] hover:bg-[#1e4bd1] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] mt-6">
                        {"Confirm & Send"}
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 relative z-20">
                        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">
                          How much do you want to send?
                        </label>
                        <div className="flex items-center bg-gray-50 dark:bg-[#0B1120] rounded-xl border border-gray-200 dark:border-gray-700 p-2 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                          <input
                            type="text"
                            value={formatNumber(sendAmount)}
                            onChange={(event) =>
                              setSendAmount(
                                event.target.value.replace(/[^0-9.]/g, ""),
                              )
                            }
                            className="bg-transparent border-none text-2xl font-bold text-gray-900 dark:text-white w-full focus:ring-0 p-2 outline-none"
                          />
                          <CurrencyPicker
                            value={fromCurrency}
                            onPick={setFromCurrency}
                            open={isFromOpen}
                            setOpen={setIsFromOpen}
                            tint="bg-blue-100"
                          />
                        </div>
                      </div>
                      <div className="mb-6 relative z-10">
                        <label className="block text-sm text-gray-500 dark:text-gray-400 mb-1.5">
                          Your recipient receives
                        </label>
                        <div className="flex items-center bg-gray-50 dark:bg-[#0B1120] rounded-xl border border-gray-200 dark:border-gray-700 p-2 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white pl-3 pr-1">
                            {CURRENCIES[toCurrency].symbol}
                          </span>
                          <div className="w-full flex items-center relative">
                            {loadingRate ? (
                              <div className="absolute inset-0 flex items-center">
                                <LoaderCircle className="w-5 h-5 animate-spin text-blue-600" />
                              </div>
                            ) : null}
                            <input
                              type="text"
                              value={
                                loadingRate ? "" : formatNumber(receiveAmount)
                              }
                              readOnly={true}
                              className={`bg-transparent border-none text-2xl font-bold text-gray-900 dark:text-white w-full focus:ring-0 p-2 outline-none cursor-default ${loadingRate ? "opacity-0" : "opacity-100"}`}
                            />
                          </div>
                          <CurrencyPicker
                            value={toCurrency}
                            onPick={setToCurrency}
                            open={isToOpen}
                            setOpen={setIsToOpen}
                            tint="bg-yellow-100"
                          />
                        </div>
                      </div>
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl py-3 mb-6 overflow-hidden border border-indigo-100 dark:border-indigo-800/30 relative group cursor-default">
                        <style>
                          {
                            "@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }"
                          }
                        </style>
                        <TooltipProvider>
                          <div
                            className="flex w-max hover:[animation-play-state:paused]"
                            style={{ animation: "marquee 40s linear infinite" }}
                          >
                            {[0, 1].map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-3 px-1.5"
                              >
                                {popularRoutes.map((popularRoute, index) => {
                                  const liveRate =
                                    liveRates[
                                      `${popularRoute.from}-${popularRoute.to}`
                                    ];
                                  const D = liveRate?.rate;
                                  const trend = liveRate?.trend || "neutral";
                                  const trendClass =
                                    trend === "up"
                                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                                      : trend === "down"
                                        ? "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                                        : "text-indigo-600 dark:text-indigo-300 bg-white dark:bg-indigo-950/40 border-indigo-100 dark:border-indigo-800/50";
                                  return (
                                    <Tooltip key={`${item}-${index}`}>
                                      <TooltipTrigger
                                        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 shadow-sm border shrink-0 transition-colors duration-300 ${trendClass}`}
                                      >
                                        <span className="text-sm">
                                          {CURRENCIES[popularRoute.from].flag}
                                        </span>
                                        <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                                          {popularRoute.from}
                                        </span>
                                        <span className="text-indigo-400 text-[10px]">
                                          →
                                        </span>
                                        <span className="text-sm">
                                          {CURRENCIES[popularRoute.to].flag}
                                        </span>
                                        <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">
                                          {popularRoute.to}
                                        </span>
                                        {D && (
                                          <>
                                            <span className="w-px h-3 bg-current opacity-20 mx-1" />
                                            <span className="text-xs font-mono font-medium flex items-center gap-1">
                                              {D.toFixed(4)}
                                              {trend === "up" && (
                                                <TrendingUp className="w-3 h-3" />
                                              )}
                                              {trend === "down" && (
                                                <TrendingDown className="w-3 h-3" />
                                              )}
                                              {trend === "neutral" && (
                                                <Minus className="w-3 h-3 opacity-50" />
                                              )}
                                            </span>
                                          </>
                                        )}
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>
                                          Last updated:{" "}
                                          {liveRate
                                            ? new Date(
                                                liveRate.lastUpdated,
                                              ).toLocaleTimeString()
                                            : "Loading..."}
                                        </p>
                                        <p className="text-xs opacity-70">
                                          {trend === "up"
                                            ? "Rate increased recently"
                                            : trend === "down"
                                              ? "Rate decreased recently"
                                              : "Rate stable"}
                                        </p>
                                      </TooltipContent>
                                    </Tooltip>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </TooltipProvider>
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-indigo-50 dark:from-[#131b2e] to-transparent pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-indigo-50 dark:from-[#131b2e] to-transparent pointer-events-none" />
                      </div>
                      <div className="space-y-3 mb-8 text-sm border-t border-gray-100 dark:border-gray-700 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 dark:text-gray-400">
                            Exchange rate
                          </span>
                          <span className="font-bold text-gray-900 dark:text-white">
                            1 {CURRENCIES[fromCurrency].symbol} ={" "}
                            {rate.toFixed(2)} {CURRENCIES[toCurrency].symbol}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-500 dark:text-gray-400">
                            Our fee
                          </span>
                          <span className="font-bold text-gray-900 dark:text-white">
                            {CURRENCIES[toCurrency].symbol}
                            {fee.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between items-start">
                          <span className="text-gray-500 dark:text-gray-400">
                            Estimated delivery time
                          </span>
                          <span className="font-bold text-gray-900 dark:text-white text-right">
                            Should arrive in 0-2 minutes
                          </span>
                        </div>
                      </div>
                      <Link
                        to="/signup"
                        className={`w-full bg-[#2962FF] hover:bg-[#1e4bd1] flex items-center justify-center text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] ${loadingRate || parseFloat(sendAmount) <= 0 ? "opacity-50 pointer-events-none" : ""}`}
                      >
                        Send money now
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="bg-[#172554] dark:bg-[#172554] rounded-[3rem] p-8 md:p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden relative shadow-2xl">
          <style>{`
            @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
            @keyframes pulse-subtle { 0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(219, 234, 254, 0.4); } 50% { transform: scale(1.05); box-shadow: 0 0 0 4px rgba(219, 234, 254, 0); } }
            @keyframes float-pill { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-5px); } }
          `}</style>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative z-10">
            <div
              className="relative"
              style={{ animation: "float 6s ease-in-out infinite" }}
            >
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <img
                src={speedStopwatchImg}
                alt="Speed Stopwatch"
                className="relative w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 text-white z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
              Global payouts. Instant. Transparent. Reliable.
            </h2>
            <p className="text-blue-50/80 text-lg mb-10 leading-relaxed">
              Powered by our extensively proven infrastructure, we enable your
              customers to move money seamlessly and with complete visibility —
              nearly anywhere on Earth.
            </p>
            <div className="space-y-6">
              {[
                "74% of payments land in <20 seconds",
                "96% complete in under 24 hours",
                "Always-on 24/7 processing",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div
                    className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      animation: `pulse-subtle 3s ease-in-out infinite ${index * 0.5}s`,
                    }}
                  >
                    <Check className="w-4 h-4 text-blue-900 stroke-[3]" />
                  </div>
                  <span className="text-lg text-white font-medium pt-0.5 border-b border-transparent group-hover:border-blue-400/50 transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
          <div className="w-full max-w-4xl mb-12 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/50 dark:bg-purple-900/10 rounded-full blur-[100px] -z-10" />
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center mb-10 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 uppercase drop-shadow-sm">
                With us you see the world
              </h2>
              <img
                src={globalNetworkConnectivityImg}
                alt="Global Network Connectivity"
                className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl animate-[spin_60s_linear_infinite]"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-3 max-w-5xl mx-auto">
            {supportedCurrencies.slice(0, 17).map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800/80 backdrop-blur-sm text-slate-600 dark:text-slate-300 px-4 py-2 rounded-full shadow-sm border border-slate-100 dark:border-slate-700/50 flex items-center gap-2.5 text-sm font-medium hover:scale-105 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-900/50 transition-all cursor-default"
                style={{
                  animation: `float-pill ${3 + index * 0.2}s ease-in-out infinite`,
                }}
              >
                <CurrencyFlag code={item.code} className="w-5 h-5" />
                <span>{item.name}</span>
              </div>
            ))}
            <Dialog>
              <DialogTrigger
                className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full shadow-sm border border-blue-100 dark:border-blue-800/50 flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-transform cursor-pointer"
                style={{ animation: "float-pill 4s ease-in-out infinite" }}
              >
                <span className="bg-white dark:bg-blue-800 text-xs px-1.5 py-0.5 rounded-md font-bold shadow-sm">
                  {supportedCurrencies.length}+
                </span>
                <span>and More</span>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md max-h-[80vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-center pb-4 border-b border-gray-100 dark:border-gray-800">
                    All Supported Currencies
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-500 dark:text-gray-400">
                    Choose from a wide range of currencies to send and receive
                    money.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 pr-4 -mr-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
                    {supportedCurrencies.map((supportedCurrency, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <CurrencyFlag
                          code={supportedCurrency.code}
                          className="w-8 h-8"
                        />
                        <span className="font-medium text-gray-700 dark:text-gray-200">
                          {supportedCurrency.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
