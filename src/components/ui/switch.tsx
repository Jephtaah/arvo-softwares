import * as React from "react";

import {
  Switch,
  SwitchThumb,
} from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

export const SwitchRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Switch>
>(({ className, ...props }, ref) => (
  <Switch
    ref={ref}
    className={cn(
      "flex h-[0.5rem] w-[1.125rem] items-center justify-center rounded-full border border-input bg-background cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
      className
    )}
    {...props}
  />
));
SwitchRoot.displayName = Switch.displayName;

export const SwitchThumb = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof SwitchThumb>
>(({ className, ...props }, ref) => (
  <SwitchThumb
    ref={ref}
    className={cn(
      "block h-[1.25rem] w-[1.25rem] rounded-full bg-background ring-offset-width-2 ring-offset-stroke ring-primary transition-transform",
      "data-[state=checked]:translate-x-full",
      className
    )}
    {...props}
  />
));
SwitchThumb.displayName = SwitchThumb.displayName;

export const Switch = Object.assign(SwitchRoot, {
  Thumb: SwitchThumb,
});
