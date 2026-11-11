import { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  Settings,
  ChevronDown,
  User,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
export const DashboardHeader = () => {
  const { user: user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const getInitial = () => {
    var metadata;
    return user
      ? (metadata = user.user_metadata) != null && metadata.full_name
        ? user.user_metadata.full_name
            .split(" ")
            .map((item) => item[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
        : user.email?.[0].toUpperCase() || "U"
      : "U";
  };
  return (
    <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 h-full">
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions, cards..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-transparent focus:bg-white focus:border-indigo-500 rounded-lg outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 ml-6">
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 p-1 rounded-lg transition-colors cursor-pointer outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-medium text-sm">
                {getInitial()}
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-1 z-50">
                <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {user?.user_metadata?.full_name || "User"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
                <div className="py-1">
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <User className="w-4 h-4" />
                    My Profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Settings className="w-4 h-4" />
                    Account setting
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    Messages
                  </button>
                </div>
                <div className="py-1 border-t border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
