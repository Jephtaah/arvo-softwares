import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface HealthMeterProps {
  className?: string;
  value: number; // 0-100
  label?: string;
  status?: "default" | "success" | "warning" | "error";
}

export const HealthMeter = React.forwardRef<
  HTMLDivElement,
  HealthMeterProps
>(({ className, value, label, status, ...props }, ref) => {
  // Determine status based on value if not provided
  const calculatedStatus = status || 
    (value >= 80 ? "success" : value >= 60 ? "warning" : "error");
  
  // Determine badge variant based on status
  const badgeVariant = 
    calculatedStatus === "success" ? "secondary" :
    calculatedStatus === "warning" ? "destructive" : // Using destructive for warning as it's more visible
    "default";

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium flex items-center justify-between">
            {label || "Health Meter"}
            <Badge variant={badgeVariant}>
              {value}%
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Progress 
            value={value} 
            className="w-full h-2.5"
          />
          <div className="text-xs text-muted-foreground">
            {value}% {label || ""}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
HealthMeter.displayName = "HealthMeter";
