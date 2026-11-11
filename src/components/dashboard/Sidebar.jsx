import { useState } from "react";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  ArrowRightLeft,
  CreditCard,
  Wallet,
  Receipt,
  FileText,
  Users,
  Gift,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { useLocation, Link } from "react-router";
import { toast } from "sonner";
import { useAuth } from "../../context/AuthContext";
export const Sidebar = () => {
  const location = useLocation();
  const { signOut: signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleSignOut = async () => {
    await signOut();
    toast.success("Signed out successfully");
  };
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    {
      name: "Transactions",
      href: "/dashboard/transactions",
      icon: ArrowRightLeft,
    },
    { name: "Cards", href: "/dashboard/cards", icon: CreditCard },
    { name: "Payments", href: "#", icon: Wallet, hasDropdown: true },
    { name: "Pay bills", href: "/dashboard/pay-bills", icon: Receipt },
    { name: "Invoices", href: "#", icon: FileText },
    { name: "Accounts", href: "/dashboard/accounts", icon: Users },
    { name: "Rewards", href: "#", icon: Gift },
  ];
  return (
    <div className="flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 h-screen fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Mowitex
          </span>
        </div>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          const Component = item.icon;
          return item.hasDropdown ? (
            <div key={item.name}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                  "flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  isActive ||
                    (item.name === "Payments" &&
                      location.pathname.includes("/dashboard/payment-links"))
                    ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200",
                )}
              >
                <div className="flex items-center gap-3">
                  <Component
                    className={clsx(
                      "w-5 h-5",
                      isActive ||
                        (item.name === "Payments" &&
                          location.pathname.includes(
                            "/dashboard/payment-links",
                          ))
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-400 dark:text-gray-500",
                    )}
                  />
                  {item.name}
                </div>
                <ChevronDown
                  className={clsx(
                    "w-4 h-4 text-gray-400 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen && item.name === "Payments" && (
                <div className="mt-1 ml-4 pl-4 border-l border-gray-200 dark:border-gray-800 space-y-1">
                  <Link
                    to="/dashboard/payment-links"
                    className={clsx(
                      "block px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === "/dashboard/payment-links"
                        ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200",
                    )}
                  >
                    Payment link
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              to={item.href}
              className={clsx(
                "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                isActive
                  ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200",
              )}
            >
              <div className="flex items-center gap-3">
                <Component
                  className={clsx(
                    "w-5 h-5",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-400 dark:text-gray-500",
                  )}
                />
                {item.name}
              </div>
              {item.hasDropdown && (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={handleSignOut}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};
