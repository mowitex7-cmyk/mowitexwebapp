import {
  Phone,
  Wifi,
  Receipt,
  Gift,
  CircleCheck,
  CircleX,
  Clock,
} from "lucide-react";
import { Link } from "react-router";
export const PayBills = () => {
  const billServices = [
    {
      title: "Buy Airtime",
      description:
        "Stay connected with your family and friends with instant top-ups",
      icon: Phone,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      wrapperBg:
        "bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent",
    },
    {
      title: "Buy Data",
      description:
        "Enjoy uninterrupted internet access with easy and convenient mobile data top-ups",
      icon: Wifi,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      wrapperBg:
        "bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/10 dark:to-transparent",
    },
    {
      title: "Pay Bills",
      description:
        "Pay for your internet, cable subscription and other utility bills all in one place",
      icon: Receipt,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-500/10",
      wrapperBg:
        "bg-gradient-to-br from-orange-50/50 to-transparent dark:from-orange-900/10 dark:to-transparent",
    },
    {
      title: "Gift Cards",
      description: "Buy gift cards for yourself or your loved ones",
      icon: Gift,
      iconColor: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-500/10",
      wrapperBg:
        "bg-gradient-to-br from-green-50/50 to-transparent dark:from-green-900/10 dark:to-transparent",
    },
  ];
  const billHistory = [
    {
      id: "TRX-839281",
      service: "MTN Airtime",
      date: "Oct 24, 2023 10:45 AM",
      amount: "₦2,000",
      status: "Successful",
      icon: Phone,
      bgColor: "bg-blue-50 dark:bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      id: "TRX-839282",
      service: "DSTV Premium",
      date: "Oct 22, 2023 02:15 PM",
      amount: "₦24,500",
      status: "Successful",
      icon: Receipt,
      bgColor: "bg-orange-50 dark:bg-orange-500/10",
      iconColor: "text-orange-500",
    },
    {
      id: "TRX-839283",
      service: "Spotify Gift Card",
      date: "Oct 20, 2023 11:20 AM",
      amount: "$10.00",
      status: "Pending",
      icon: Gift,
      bgColor: "bg-green-50 dark:bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      id: "TRX-839284",
      service: "Airtel Data 10GB",
      date: "Oct 18, 2023 09:30 AM",
      amount: "₦3,000",
      status: "Failed",
      icon: Wifi,
      bgColor: "bg-purple-50 dark:bg-purple-500/10",
      iconColor: "text-purple-500",
    },
  ];
  const renderStatus = (status) => {
    switch (status) {
      case "Successful":
        return (
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 dark:bg-green-500/10 text-green-700 dark:text-green-400 text-xs font-medium border border-green-200 dark:border-green-500/20">
            <CircleCheck className="w-3.5 h-3.5" />
            Successful
          </span>
        );
      case "Failed":
        return (
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 text-xs font-medium border border-red-200 dark:border-red-500/20">
            <CircleX className="w-3.5 h-3.5" />
            Failed
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-50 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 text-xs font-medium border border-yellow-200 dark:border-yellow-500/20">
            <Clock className="w-3.5 h-3.5" />
            Pending
          </span>
        );
    }
  };
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12 pt-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Pay Bills
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Manage all your utility bills, airtime, and gift cards in one place.
        </p>
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          {"Bills, Airtime & Gift Cards"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {billServices.map((item, index) => {
            const Component = item.icon;
            return (
              <Link
                key={index}
                to="/signup"
                className={`flex flex-col p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all hover:shadow-md group ${item.wrapperBg}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.bgColor}`}
                >
                  <Component className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Pay Bills History
          </h2>
          <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                <th className="pb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Service
                </th>
                <th className="pb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                  Reference
                </th>
                <th className="pb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider hidden md:table-cell">
                  Date
                </th>
                <th className="pb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right sm:text-left">
                  Amount
                </th>
                <th className="pb-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
              {billHistory.map((item, index) => {
                const Component = item.icon;
                return (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors group cursor-pointer"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}
                        >
                          <Component className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                        <span className="font-medium text-sm text-gray-900 dark:text-white">
                          {item.service}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 hidden sm:table-cell">
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                        {item.id}
                      </span>
                    </td>
                    <td className="py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.date}
                      </span>
                    </td>
                    <td className="py-4 text-right sm:text-left">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {item.amount}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <div className="flex justify-end">
                        {renderStatus(item.status)}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
