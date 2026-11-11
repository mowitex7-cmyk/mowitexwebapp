import { useState } from "react";
import { clsx } from "clsx";
import { format } from "date-fns";
import {
  ShoppingBag,
  Truck,
  Smartphone,
  ArrowUpRight,
  ArrowDownLeft,
  CreditCard,
  Pen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { EditTransactionModal } from "./EditTransactionModal";
const getCategoryIcon = (category) => {
  switch (category) {
    case "shopping":
      return ShoppingBag;
    case "transport":
      return Truck;
    case "subscription":
      return Smartphone;
    case "transfer":
      return ArrowUpRight;
    case "income":
      return ArrowDownLeft;
    default:
      return CreditCard;
  }
};
const getCategoryColor = (category) => {
  switch (category) {
    case "shopping":
      return "bg-pink-100 text-pink-600";
    case "transport":
      return "bg-blue-100 text-blue-600";
    case "subscription":
      return "bg-purple-100 text-purple-600";
    case "transfer":
      return "bg-orange-100 text-orange-600";
    case "income":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};
export const TransactionList = ({
  transactions: transactions,
  limit: limit,
  enablePagination = false,
}) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  let visibleTransactions = transactions;
  if (limit) {
    visibleTransactions = transactions.slice(0, limit);
  } else if (enablePagination) {
    const startIndex = (currentPage - 1) * pageSize;
    visibleTransactions = transactions.slice(startIndex, startIndex + pageSize);
  }
  const totalPages = Math.ceil(transactions.length / pageSize);
  const goToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h3>
          {limit && (
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
              View All
            </button>
          )}
        </div>
        <div className="divide-y divide-gray-100">
          {visibleTransactions.map((item) => {
            const Component = getCategoryIcon(item.category);
            const isIncome = item.amount > 0;
            return (
              <div
                key={item.id}
                className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      getCategoryColor(item.category),
                    )}
                  >
                    <Component className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(item.date), "MMM d, yyyy")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p
                      className={clsx(
                        "font-semibold",
                        isIncome ? "text-green-600" : "text-gray-900",
                      )}
                    >
                      {isIncome ? "+" : ""}
                      {item.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                    <span
                      className={clsx(
                        "text-xs px-2 py-0.5 rounded-full capitalize",
                        item.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700",
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTransaction(item)}
                    className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-all"
                    title="Edit Transaction"
                  >
                    <Pen className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
          {visibleTransactions.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No transactions found.
            </div>
          )}
        </div>
        {enablePagination && totalPages > 1 && (
          <div className="p-4 border-t border-gray-100 flex items-center justify-between">
            <button
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <EditTransactionModal
        isOpen={!!selectedTransaction}
        onClose={() => setSelectedTransaction(null)}
        transaction={selectedTransaction}
      />
    </>
  );
};
