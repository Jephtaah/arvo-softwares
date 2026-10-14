import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface RuleSummaryProps {
  className?: string;
  title: string;
  description?: string;
  status?: "default" | "active" | "inactive" | "warning" | "error";
  metadata?: Array<{
    label: string;
    value: string | number;
    type?: "text" | "number" | "percentage";
  }>;
}

export const RuleSummary = React.forwardRef<
  HTMLDivElement,
  RuleSummaryProps
>(({ className, title, description, status, metadata, ...props }, ref) => {
  // Determine badge variant based on status
  const getBadgeVariant = (status: string | undefined) => {
    switch (status) {
      case "active": return "secondary";
      case "inactive": return "default";
      case "warning": return "destructive";
      case "error": return "destructive";
      default: return "default";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold flex items-center justify-between">
            {title}
            {status && (
              <Badge variant={getBadgeVariant(status)}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {metadata && metadata.length > 0 && (
            <div className="space-y-1">
              {metadata.map((item, index) => {
                const formattedValue = 
                  item.type === "percentage" 
                    ? `${item.value}%` 
                    : String(item.value);
                
                return (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-mono">{formattedValue}</span>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
});
RuleSummary.displayName = "RuleSummary";
