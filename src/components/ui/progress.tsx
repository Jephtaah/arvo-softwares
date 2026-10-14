import * as React from "react";

import { cn } from "@/lib/utils";

export const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    value?: number;
    className?: string;
  }
>(({ className, value = 0, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex h-2 w-0 bg-primary transition-width duration-200",
          "will-change-width"
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
});
Progress.displayName = "Progress";
