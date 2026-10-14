import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface LeadCardProps {
  className?: string;
  title: string;
  description?: string;
  status?: "default" | "primary" | "secondary" | "destructive";
  metadata?: Array<{
    label: string;
    value: string;
  }>;
}

export const LeadCard = React.forwardRef<
  HTMLDivElement,
  LeadCardProps
>(({ className, title, description, status, metadata, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold">
            {title}
          </CardTitle>
          {status && (
            <Badge variant={status === "destructive" ? "destructive" : status === "primary" ? "primary" : "secondary"}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          )}
        </CardHeader>
        <CardContent className="space-y-3">
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {metadata && metadata.length > 0 && (
            <div className="space-y-1">
              {metadata.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className="font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
});
LeadCard.displayName = "LeadCard";
