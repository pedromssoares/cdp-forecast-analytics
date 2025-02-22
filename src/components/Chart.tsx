import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

interface ChartProps {
  data: { date: string; value: number }[];
  title: string;
  color: string;
  unit?: string;
}

export default function Chart({ data, title, color, unit = "" }: ChartProps) {
  return (
    <div className="bg-gray-600 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-[600px] transition-colors duration-300">
      <h2 className="text-lg font-bold text-darkText text-center mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
          <XAxis dataKey="date" stroke="#ffffff" tick={{ fontSize: 14 }} tickLine={false} />
          <YAxis stroke="#ffffff" tick={{ fontSize: 14 }} tickLine={false} />
          <Tooltip
            formatter={(value) => `${value}${unit}`}
            contentStyle={{
              backgroundColor: "#1f2937",
              color: "#fff",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ fontWeight: "bold", color: color }}
            itemStyle={{ fontSize: "14px" }}
          />
          <Line type="monotone" dataKey="value" stroke={color} strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}