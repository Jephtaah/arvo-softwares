import * as React from "react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";

import { cn } from "@/lib/utils";

export const CollapsibleRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Collapsible>
>(({ className, ...props }, ref) => (
  <Collapsible
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
CollapsibleRoot.displayName = Collapsible.displayName;

const CollapsibleTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof CollapsibleTrigger> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <CollapsibleTrigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between rounded-border text-left font-medium hover:bg-accent/10",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "data-[state=open]:bg-accent/20",
      className
    )}
    {...props}
  >
    <span className="flex-auto">{children}</span>
  </CollapsibleTrigger>
));
CollapsibleTriggerWrapper.displayName = CollapsibleTrigger.displayName;

const CollapsibleContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <CollapsibleContent
    ref={ref}
    className={cn(
      "overflow-hidden text-sm text-muted-foreground",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:slide-in-from-top-0",
      className
    )}
    {...props}
  >
    <div className="pb-1 pt-0">{children}</div>
  </CollapsibleContent>
));
CollapsibleContentWrapper.displayName = CollapsibleContent.displayName;

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTriggerWrapper,
  Content: CollapsibleContentWrapper,
});
