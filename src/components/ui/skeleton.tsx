import * as React from "react";

import { cn } from "@/lib/utils";

export const Skeleton = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "animate-pulse bg-muted",
        className
      )}
      {...props}
    />
  );
});
Skeleton.displayName = "Skeleton";
