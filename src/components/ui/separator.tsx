import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export const Separator = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => {
  return (
    <Slot
      ref={ref}
      className={cn("flex h-0.5 flex-1 grow bg-background", className)}
      {...props}
    />
  );
});
Separator.displayName = "Separator";
