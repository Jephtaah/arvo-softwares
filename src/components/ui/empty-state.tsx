import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface EmptyStateProps {
  className?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  showAction?: boolean;
}

export const EmptyState = React.forwardRef<
  HTMLDivElement,
  EmptyStateProps
>(({ className, title, description, actionLabel, onAction, showAction = true, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-6 text-center">
          <CardTitle className="text-lg font-medium text-muted-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          )}
          {showAction && actionLabel && onAction && (
            <Button
              variant="default"
              onClick={onAction}
              className="mt-4"
            >
              {actionLabel}
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
});
EmptyState.displayName = "EmptyState";
