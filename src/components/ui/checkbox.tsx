import * as React from "react";

import {
  Checkbox,
  CheckboxIndicator,
} from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

export const CheckboxRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Checkbox>
>(({ className, ...props }, ref) => (
  <Checkbox
    ref={ref}
    className={cn(
      "flex h-9 w-9 items-center justify-center rounded border-input bg-background text-primary-foreground shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:bg-muted",
      className
    )}
    {...props}
  />
));
CheckboxRoot.displayName = Checkbox.displayName;

export const CheckboxIndicator = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof CheckboxIndicator>
>(({ className, ...props }, ref) => (
  <CheckboxIndicator
    ref={ref}
    className={cn(
      "flex h-4 w-4 items-center justify-center",
      className
    )}
    {...props}
  />
));
CheckboxIndicator.displayName = CheckboxIndicator.displayName;

export const Checkbox = Object.assign(CheckboxRoot, {
  Indicator: CheckboxIndicator,
});
