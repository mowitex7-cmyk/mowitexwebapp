import { Play } from "lucide-react";
const AppleIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    className={`${className} fill-current`}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.68-.83 1.14-1.99.94-3.14-1.02.06-2.28.69-3.02 1.57-.64.76-1.21 1.98-1 3.05 1.14.09 2.3-.56 3.08-1.48z" />
  </svg>
);
export const AppStoreButton = ({ className = "" }) => (
  <button
    className={`bg-[#EBE9FE] hover:bg-[#dcd8fd] text-[#5B4DFF] dark:bg-indigo-900/30 dark:hover:bg-indigo-900/50 dark:text-indigo-300 font-semibold py-3.5 px-8 rounded-lg transition-colors flex items-center gap-3 text-sm ${className}`}
  >
    <div className="flex items-center gap-1">
      <AppleIcon />
      <Play className="w-3.5 h-3.5 fill-current" />
    </div>
    Download app
  </button>
);
