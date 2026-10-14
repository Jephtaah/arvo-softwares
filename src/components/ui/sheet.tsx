import * as React from "react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const SheetTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof SheetTrigger>
>(({ className, children, ...props }, ref) => (
  <SheetTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </SheetTrigger>
));
SheetTriggerWrapper.displayName = SheetTrigger.displayName;

const SheetContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SheetContent> & {
    className?: string;
    forceMount?: boolean;
  }
>(({ className, forceMount, children, ...props }, ref) => (
  <SheetContent
    ref={ref}
    forceMount={forceMount}
    className={cn(
      "fixed bottom-0 left-0 right-0 border-t border-background bg-popover px-6 pt-0 pb-4 shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[state=closed]:slide-out-to-bottom-1 data-[state=open]:slide-in-from-bottom-1",
      className
    )}
    {...props}
  >
    {children}
  </SheetContent>
));
SheetContentWrapper.displayName = SheetContent.displayName;

const SheetHeaderWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SheetHeader>
>(({ className, children, ...props }, ref) => (
  <SheetHeader
    ref={ref}
    className={cn("flex flex-col space-y-2 pb-6", className)}
    {...props}
  >
    {children}
  </SheetHeader>
));
SheetHeaderWrapper.displayName = SheetHeader.displayName;

const SheetTitleWrapper = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof SheetTitle>
>(({ className, children, ...props }, ref) => (
  <SheetTitle
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </SheetTitle>
));
SheetTitleWrapper.displayName = SheetTitle.displayName;

const SheetDescriptionWrapper = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof SheetDescription>
>(({ className, children, ...props }, ref) => (
  <SheetDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  >
    {children}
  </SheetDescription>
));
SheetDescriptionWrapper.displayName = SheetDescription.displayName;

const SheetFooterWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SheetFooter>
>(({ className, children, ...props }, ref) => (
  <SheetFooter
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4", className)}
    {...props}
  >
    {children}
  </SheetFooter>
));
SheetFooterWrapper.displayName = SheetFooter.displayName;

export const Sheet = Object.assign(Sheet, {
  Trigger: SheetTriggerWrapper,
  Content: SheetContentWrapper,
  Header: SheetHeaderWrapper,
  Title: SheetTitleWrapper,
  Description: SheetDescriptionWrapper,
  Footer: SheetFooterWrapper,
});
