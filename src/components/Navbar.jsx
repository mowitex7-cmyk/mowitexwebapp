import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";
import {
  Globe,
  ChevronDown,
  Check,
  Send,
  CreditCard,
  Download,
  ArrowLeftRight,
  BookOpen,
  Users,
  UserPlus,
  Gift,
  Building2,
  LifeBuoy,
  CircleHelp,
  Rocket,
  Sun,
  Moon,
  X,
  Menu,
} from "lucide-react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "./ThemeProvider";
import mowitexLogoImg from "../assets/8d794ae00286f4d1ef4c228766965351d81ecb09.png";
const COUNTRY_DATA =
  "Global|en|GLOBAL,Nigeria|en|NG,Ghana|en|GH,Kenya|sw|KE,South Africa|en|ZA,Egypt|ar|EG,Cameroon|fr|CM,Ivory Coast|fr|CI,Senegal|fr|SN,Rwanda|rw|RW,Uganda|en|UG,Tanzania|sw|TZ,Ethiopia|am|ET,Morocco|ar|MA,United Kingdom|en|GB,United States|en|US,Canada|en|CA,France|fr|FR,Germany|de|DE,Spain|es|ES,Italy|it|IT,Portugal|pt|PT,Netherlands|nl|NL,Brazil|pt|BR,China|zh-CN|CN,India|hi|IN,Japan|ja|JP,UAE|ar|AE,Saudi Arabia|ar|SA,Turkey|tr|TR";
const countries = COUNTRY_DATA.split(",").map((item) => {
  const [name, code, countryCode] = item.split("|");
  return { name: name, code: code, countryCode: countryCode };
});
const CountryFlag = ({ cc: cc, className: className }) =>
  cc === "GLOBAL" ? (
    <Globe className={className} />
  ) : (
    <span
      className={clsx(
        className,
        "inline-flex items-center justify-center rounded-full bg-blue-100 text-[8px] font-bold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
      )}
    >
      {cc}
    </span>
  );
const RegionSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);
  const dropdownRef = useRef(null);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const handleSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
    const translateSelect = document.querySelector(".goog-te-combo");
    if (translateSelect) {
      translateSelect.value = country.code;
      translateSelect.dispatchEvent(new Event("change"));
    }
  };
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-full px-2.5 py-1 transition-all duration-200 min-w-[140px]"
      >
        <CountryFlag
          cc={selected.countryCode}
          className="w-5 h-5 text-gray-700 dark:text-white"
        />
        <span className="text-xs font-medium text-gray-700 dark:text-white truncate flex-1 text-left">
          {selected.name}
        </span>
        <ChevronDown
          className={clsx(
            "w-3.5 h-3.5 text-gray-500 dark:text-white/70 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
          <div className="p-3 bg-gray-50 dark:bg-[#0f172a] border-b border-gray-100 dark:border-gray-700">
            <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              Select Your Region
            </p>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full text-xs px-3 py-2 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2 p-1.5 bg-white dark:bg-[#1e293b] border border-blue-100 dark:border-blue-900 rounded-lg shadow-sm">
              <CountryFlag
                cc={selected.countryCode}
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
              />
              <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                {selected.name}
              </span>
            </div>
          </div>
          <div className="max-h-[300px] overflow-y-auto p-1.5 grid grid-cols-1 gap-0.5">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item) => (
                <button
                  key={item.countryCode}
                  onClick={() => {
                    handleSelect(item);
                    setSearch("");
                  }}
                  className={clsx(
                    "flex items-center gap-2.5 px-2 py-2 rounded-lg transition-colors text-left",
                    selected.countryCode === item.countryCode
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                      : "hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200",
                  )}
                >
                  <CountryFlag
                    cc={item.countryCode}
                    className="w-5 h-5 shrink-0 text-gray-600 dark:text-gray-300"
                  />
                  <span className="text-xs font-medium flex-1 truncate">
                    {item.name}
                  </span>
                  {selected.countryCode === item.countryCode && (
                    <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  )}
                </button>
              ))
            ) : (
              <div className="p-4 text-center text-xs text-gray-500 dark:text-gray-400">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
const navMenus = [
  {
    name: "Products",
    items: [
      {
        to: "/send-money",
        Icon: Send,
        label: "Send Money",
        desc: "Global money transfer",
        c: "blue",
      },
      {
        to: "/cards",
        Icon: CreditCard,
        label: "Card",
        desc: "Virtual card",
        c: "purple",
      },
      {
        to: "/receive-money",
        Icon: Download,
        label: "Receive Money",
        desc: "Receive money anywhere you are",
        c: "green",
      },
      {
        to: "/exchange",
        Icon: ArrowLeftRight,
        label: "Currency Exchange",
        desc: "Real time rates for conversion",
        c: "orange",
      },
    ],
  },
  {
    name: "Learn",
    items: [
      {
        to: "/blog",
        Icon: BookOpen,
        label: "Blog",
        desc: "Why we are outstanding",
        c: "indigo",
      },
      {
        to: "/creators",
        Icon: Users,
        label: "Creator Club",
        desc: "Paid for promoting Mowitex",
        c: "pink",
      },
      {
        to: "/referral",
        Icon: UserPlus,
        label: "Referral",
        desc: "Share and earn",
        c: "cyan",
      },
      {
        to: "/rewards",
        Icon: Gift,
        label: "Rewards",
        desc: "Earn while you spend",
        c: "yellow",
      },
    ],
  },
  {
    name: "Company",
    items: [
      {
        to: "/about",
        Icon: Building2,
        label: "About Us",
        desc: "Learn more about our team",
        c: "rose",
      },
      {
        to: "/help",
        Icon: LifeBuoy,
        label: "Help Center",
        desc: "Our support Resource",
        c: "sky",
      },
      {
        to: "/faq",
        Icon: CircleHelp,
        label: "FAQ",
        desc: "Frequently Ask Question",
        c: "teal",
      },
      {
        to: "/careers",
        Icon: Rocket,
        label: "Career",
        desc: "Empower your dream",
        c: "fuchsia",
      },
    ],
  },
];
const iconTints = {
  blue: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-600",
  purple:
    "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover/item:bg-purple-600",
  green:
    "bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover/item:bg-green-600",
  orange:
    "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover/item:bg-orange-600",
  indigo:
    "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover/item:bg-indigo-600",
  pink: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover/item:bg-pink-600",
  cyan: "bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 group-hover/item:bg-cyan-600",
  yellow:
    "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 group-hover/item:bg-yellow-600",
  rose: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 group-hover/item:bg-rose-600",
  sky: "bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 group-hover/item:bg-sky-600",
  teal: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 group-hover/item:bg-teal-600",
  fuchsia:
    "bg-fuchsia-50 dark:bg-fuchsia-900/30 text-fuchsia-600 dark:text-fuchsia-400 group-hover/item:bg-fuchsia-600",
};
const NavDropdown = ({ name: name, items: items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-colors focus:outline-none py-2">
        {name}{" "}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute top-full left-0 mt-1 w-80 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-200 origin-top-left z-50 ${isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}`}
      >
        <div className="p-2 grid gap-1">
          {items.map(
            ({ to: to, Icon: Icon, label: label, desc: desc, c: color }) => (
              <Link
                key={to}
                to={to}
                className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 group/item transition-colors"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center group-hover/item:text-white transition-colors shrink-0 mt-0.5 ${iconTints[color]}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-gray-900 dark:group-hover/item:text-white">
                    {label}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 group-hover/item:text-gray-600 dark:group-hover/item:text-gray-300">
                    {desc}
                  </span>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { session: session } = useAuth();
  const { theme: theme, setTheme: setTheme } = useTheme();
  return (
    <header className="sticky top-0 w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={mowitexLogoImg}
                alt="Mowitex Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
                Mowitex
              </span>
            </Link>
            <div className="hidden md:block">
              <RegionSelector />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navMenus.map((navMenu) => (
              <NavDropdown
                key={navMenu.name}
                name={navMenu.name}
                items={navMenu.items}
              />
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            {session ? (
              <Link
                to="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20"
                >
                  Create an account
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 dark:text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#0B1120] border-b border-gray-200 dark:border-white/10 p-4 shadow-lg animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            <Link
              to="/send-money"
              className="text-base font-medium text-gray-900 dark:text-white"
            >
              Products
            </Link>
            <Link
              to="/blog"
              className="text-base font-medium text-gray-900 dark:text-white"
            >
              Learn
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-900 dark:text-white"
            >
              Company
            </Link>
            <hr className="border-gray-200 dark:border-white/20" />
            {session ? (
              <Link
                to="/dashboard"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center shadow-md"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-base font-medium text-gray-900 dark:text-white"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center shadow-md"
                >
                  Get started — it's free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
