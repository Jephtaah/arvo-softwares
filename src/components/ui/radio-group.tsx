import * as React from "react";

import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupIndicator,
} from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";

export const RadioGroupRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadioGroup>
>(({ className, ...props }, ref) => (
  <RadioGroup
    ref={ref}
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
));
RadioGroupRoot.displayName = RadioGroup.displayName;

export const RadioGroupItem = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<typeof RadioGroupItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <RadioGroupItem
    ref={ref}
    className={cn(
      "flex items-center gap-2 rounded-border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <RadioGroupIndicator className="h-4 w-4 flex items-center justify-center" />
    <span className="flex flex-col space-y-0.5">
      <span className="text-foreground">{children}</span>
    </span>
  </RadioGroupItem>
));
RadioGroupItem.displayName = RadioGroupItem.displayName;

export const RadioGroupIndicator = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof RadioGroupIndicator>
>(({ className, ...props }, ref) => (
  <RadioGroupIndicator
    ref={ref}
    className={cn(
      "flex h-4 w-4 items-center justify-center",
      className
    )}
    {...props}
  />
));
RadioGroupIndicator.displayName = RadioGroupIndicator.displayName;

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
  Indicator: RadioGroupIndicator,
});
