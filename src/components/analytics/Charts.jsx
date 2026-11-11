import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];
export const CategoryPieChart = ({ data: data }) => (
  <div className="w-full h-80 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">
      Expenses by Category
    </h3>
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((dataItem, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);
export const MonthlyBarChart = ({ data: data }) => (
  <div className="w-full h-96 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">
      Monthly Overview
    </h3>
    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
            contentStyle={{
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Legend />
          <Bar
            dataKey="income"
            fill="#4f46e5"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
          <Bar
            dataKey="expense"
            fill="#f43f5e"
            radius={[4, 4, 0, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
