import React from "react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const lineChartData = [
  { name: "Jan", Points: 12 },
  { name: "Feb", Points: 15 },
  { name: "Mar", Points: 8 },
  { name: "Apr", Points: 10 },
  { name: "May", Points: 18 },
  { name: "Jun", Points: 14 },
  { name: "Jul", Points: 18 },
  { name: "Aug", Points: 9 },
  { name: "Sep", Points: 18 },
  { name: "Oct", Points: 5 },
  { name: "Nov", Points: 18 },
  { name: "Dec", Points: 18 },
];
function LineAreaChart() {
  return (
    <AreaChart width={750} height={250} data={lineChartData}>
      <XAxis dataKey="name" tickLine={false} axisLine={false} />
      <YAxis tick={false} hide={false} axisLine={false} />
      <Area
        type="monotone"
        dataKey="Points"
        stroke=" #93C5FD"
        strokeWidth={3}
        fill="url(#linear-gradient)"
      />

      <defs>
        <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "rgba(147, 197, 253, 0.38)" }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "rgba(255, 255, 255, 0.38)" }}
          />
        </linearGradient>
      </defs>
      <Tooltip />
    </AreaChart>
  );
}

export default LineAreaChart;
