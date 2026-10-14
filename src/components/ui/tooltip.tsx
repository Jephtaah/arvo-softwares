import * as React from "react";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <TooltipProvider>{children}</TooltipProvider>
);

TooltipProviderWrapper.displayName = "TooltipProvider";

const TooltipTriggerWrapper = React.forwardRef<
  React.ElementRef<typeof TooltipTrigger>,
  React.ComponentPropsWithoutRef<typeof TooltipTrigger>
>(({ children, ...props }, ref) => (
  <TooltipTrigger ref={ref} {...props}>
    {children}
  </TooltipTrigger>
));
TooltipTriggerWrapper.displayName = TooltipTrigger.displayName;

const TooltipContentWrapper = React.forwardRef<
  React.ElementRef<typeof TooltipContent>,
  React.ComponentPropsWithoutRef<typeof TooltipContent> & {
    sideOffset?: number;
  }
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipContent
    ref={ref}
    className={cn(
      "z-50 max-w-xs rounded-md border border-popover bg-popover px-3 py-2 text-sm text-popover-foreground shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    sideOffset={sideOffset}
    {...props}
  />
));
TooltipContentWrapper.displayName = TooltipContent.displayName;

export const Tooltip = Object.assign(TooltipProviderWrapper, {
  Trigger: TooltipTriggerWrapper,
  Content: TooltipContentWrapper,
});
