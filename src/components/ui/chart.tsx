import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { cn } from "@/lib/utils";

type ChartProps = {
  data: any[];
  type?: "bar" | "line" | "area" | "pie";
  width?: number | string;
  height?: number | string;
  className?: string;
};

export const Chart = React.forwardRef<
  HTMLDivElement,
  ChartProps
>(({ data, type = "bar", width = "100%", height = 250, className, ...props }, ref) => {
  const BaseChart = ({
    data,
    type,
    width,
    height,
    ...rest
  }: ChartProps) => {
    if (type === "bar") {
      return (
        <ResponsiveContainer width={width} height={height}>
          <BarChart data={data} {...rest}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (type === "line") {
      return (
        <ResponsiveContainer width={width} height={height}>
          <ComposedChart data={data} {...rest}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={cn("text-primary")} />
          </ComposedChart>
        </ResponsiveContainer>
      );
    }

    if (type === "area") {
      return (
        <ResponsiveContainer width={width} height={height}>
          <ComposedChart data={data} {...rest}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="value" fill={cn("bg-primary/20")} stroke={cn("text-primary")} />
          </ComposedChart>
        </ResponsiveContainer>
      );
    }

    if (type === "pie") {
      return (
        <ResponsiveContainer width={width} height={height}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={cn(`hue-${(index * 30) % 360}`)} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      );
    }

    return null;
  };

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <BaseChart data={data} type={type} width={width} height={height} />
    </div>
  );
});
Chart.displayName = "Chart";
