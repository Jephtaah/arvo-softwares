import * as React from "react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";

export const ToggleGroupRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ToggleGroup>
>(({ className, type = "single", ...props }, ref) => (
  <ToggleGroup
    ref={ref}
    type={type}
    className={cn(
      "flex gap-2",
      className
    )}
    {...props}
  />
));
ToggleGroupRoot.displayName = ToggleGroup.displayName;

export const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ToggleGroupItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <ToggleGroupItem
    ref={ref}
    className={cn(
      "flex items-center justify-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </ToggleGroupItem>
));
ToggleGroupItem.displayName = ToggleGroupItem.displayName;

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
});
