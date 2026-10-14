import * as React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const AccordionItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AccordionItem
    ref={ref}
    className={cn("border-b border-muted", className)}
    {...props}
  >
    {children}
  </AccordionItem>
));
AccordionItemWrapper.displayName = AccordionItem.displayName;

const AccordionTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AccordionTrigger> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <AccordionTrigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-border text-start font-medium hover:bg-accent/10",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "data-[state=open]:bg-accent/20",
      className
    )}
    {...props}
  >
    <span>{children}</span>
  </AccordionTrigger>
));
AccordionTriggerWrapper.displayName = AccordionTrigger.displayName;

const AccordionContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AccordionContent>
>(({ className, children, ...props }, ref) => (
  <AccordionContent
    ref={ref}
    className={cn(
      "h-[overflow] overflow-hidden text-sm text-muted-foreground",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:slide-out-to-bottom-0 data-[state=open]:slide-in-from-top-0",
      className
    )}
    {...props}
  >
    <div className="pb-1 pt-0">{children}</div>
  </AccordionContent>
));
AccordionContentWrapper.displayName = AccordionContent.displayName;

export const Accordion = Object.assign(Accordion, {
  Item: AccordionItemWrapper,
  Trigger: AccordionTriggerWrapper,
  Content: AccordionContentWrapper,
});
