import * as React from "react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const PopoverTriggerWrapper = React.forwardRef<
  React.ElementRef<typeof PopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof PopoverTrigger>
>(({ children, ...props }, ref) => (
  <PopoverTrigger ref={ref} {...props}>
    {children}
  </PopoverTrigger>
));
PopoverTriggerWrapper.displayName = PopoverTrigger.displayName;

const PopoverContentWrapper = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent> & {
    className?: string;
    sideOffset?: number;
  }
>(({ className, sideOffset = 4, ...props }, ref) => (
  <PopoverContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] max-w-[25rem] initial:w-[25rem] max-h-[25rem] overflow-hidden rounded-md border bg-popover px-3 py-2 text-sm shadow-lg",
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
PopoverContentWrapper.displayName = PopoverContent.displayName;

export const Popover = Object.assign(Popover, {
  Trigger: PopoverTriggerWrapper,
  Content: PopoverContentWrapper,
});
