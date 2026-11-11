import { clsx } from "clsx";
export const StatCard = ({
  title: title,
  value: value,
  trend: trend,
  trendType = "neutral",
  icon: Icon,
  iconColor = "text-gray-500",
  className: className,
}) => (
  <div
    className={clsx(
      "bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between h-full",
      className,
    )}
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      </div>
      {Icon && (
        <div className={clsx("p-2 rounded-lg bg-gray-50", iconColor)}>
          <Icon className="w-5 h-5" />
        </div>
      )}
    </div>
    {trend && (
      <div className="flex items-center text-sm">
        <span
          className={clsx(
            "font-medium",
            trendType === "up" && "text-green-600",
            trendType === "down" && "text-red-600",
            trendType === "neutral" && "text-gray-600",
          )}
        >
          {trend}
        </span>
        <span className="ml-2 text-gray-400">vs last month</span>
      </div>
    )}
  </div>
);
