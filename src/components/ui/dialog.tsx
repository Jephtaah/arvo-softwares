import * as React from "react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const DialogTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DialogTrigger>
>(({ className, children, ...props }, ref) => (
  <DialogTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </DialogTrigger>
));
DialogTriggerWrapper.displayName = DialogTrigger.displayName;

const DialogContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogContent> & {
    className?: string;
    forceMount?: boolean;
  }
>(({ className, forceMount, children, ...props }, ref) => (
  <DialogContent
    ref={ref}
    forceMount={forceMount}
    className={cn(
      "fixed left-[50%] top-[50%] z-50 grid w-[91dhi] max-w-[25rem] max-h-[85vh] translate-x-[-50%] translate-y-[-50%] gap-4 border border-background bg-popover p-6 shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[state=closed]:slide-out-to-left-0 data-[state=closed]:slide-out-to-top-0",
      "data-[state=open]:slide-in-from-left-0 data-[state=open]:slide-in-from-top-0",
      className
    )}
    {...props}
  >
    {children}
  </DialogContent>
));
DialogContentWrapper.displayName = DialogContent.displayName;

const DialogHeaderWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogHeader>
>(({ className, children, ...props }, ref) => (
  <DialogHeader
    ref={ref}
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  >
    {children}
  </DialogHeader>
));
DialogHeaderWrapper.displayName = DialogHeader.displayName;

const DialogTitleWrapper = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof DialogTitle>
>(({ className, children, ...props }, ref) => (
  <DialogTitle
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </DialogTitle>
));
DialogTitleWrapper.displayName = DialogTitle.displayName;

const DialogDescriptionWrapper = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, children, ...props }, ref) => (
  <DialogDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  >
    {children}
  </DialogDescription>
));
DialogDescriptionWrapper.displayName = DialogDescription.displayName;

const DialogFooterWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogFooter>
>(({ className, children, ...props }, ref) => (
  <DialogFooter
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4", className)}
    {...props}
  >
    {children}
  </DialogFooter>
));
DialogFooterWrapper.displayName = DialogFooter.displayName;

export const Dialog = Object.assign(Dialog, {
  Trigger: DialogTriggerWrapper,
  Content: DialogContentWrapper,
  Header: DialogHeaderWrapper,
  Title: DialogTitleWrapper,
  Description: DialogDescriptionWrapper,
  Footer: DialogFooterWrapper,
});
