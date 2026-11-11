import { Settings2, LinkIcon } from "lucide-react";
import { Link } from "react-router";
export const PaymentLinks = () => (
  <div className="max-w-7xl mx-auto space-y-8 pb-12">
    <div className="pb-6 border-b border-gray-100 dark:border-gray-800">
      <h1 className="text-xl font-bold text-gray-900 dark:text-white">
        Payment link
      </h1>
    </div>
    <div className="flex items-center gap-4 py-2">
      <button className="flex items-center gap-2 px-4 py-2 bg-indigo-50/50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition-colors">
        <Settings2 className="w-4 h-4" />
        Filter
      </button>
      <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />
      <span className="text-sm text-gray-500 dark:text-gray-400">
        No filters applied
      </span>
    </div>
    <div className="grid grid-cols-5 gap-4 py-4 border-b border-gray-100 dark:border-gray-800 text-sm font-semibold text-gray-900 dark:text-gray-100">
      <div>Date</div>
      <div>Amount</div>
      <div>Status</div>
      <div>Payment Method</div>
      <div>Description</div>
    </div>
    <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Manage your requests
      </h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-sm">
        Instantly create and send payment links to friends and clients
      </p>
      <div className="pt-4">
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition-colors"
        >
          <LinkIcon className="w-4 h-4" />
          Create your first payment link
        </Link>
      </div>
    </div>
  </div>
);
