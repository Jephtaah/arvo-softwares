import * as React from "react";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";

const AlertDialogTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogTrigger>
>(({ className, children, ...props }, ref) => (
  <AlertDialogTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md border border-transparent bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </AlertDialogTrigger>
));
AlertDialogTriggerWrapper.displayName = AlertDialogTrigger.displayName;

const AlertDialogContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogContent> & {
    className?: string;
    forceMount?: boolean;
  }
>(({ className, forceMount, children, ...props }, ref) => (
  <AlertDialogContent
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
  </AlertDialogContent>
));
AlertDialogContentWrapper.displayName = AlertDialogContent.displayName;

const AlertDialogHeaderWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogHeader>
>(({ className, children, ...props }, ref) => (
  <AlertDialogHeader
    ref={ref}
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props}
  >
    {children}
  </AlertDialogHeader>
));
AlertDialogHeaderWrapper.displayName = AlertDialogHeader.displayName;

const AlertDialogTitleWrapper = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogTitle>
>(({ className, children, ...props }, ref) => (
  <AlertDialogTitle
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  >
    {children}
  </AlertDialogTitle>
));
AlertDialogTitleWrapper.displayName = AlertDialogTitle.displayName;

const AlertDialogDescriptionWrapper = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogDescription>
>(({ className, children, ...props }, ref) => (
  <AlertDialogDescription
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  >
    {children}
  </AlertDialogDescription>
));
AlertDialogDescriptionWrapper.displayName = AlertDialogDescription.displayName;

const AlertDialogFooterWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AlertDialogFooter>
>(({ className, children, ...props }, ref) => (
  <AlertDialogFooter
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4", className)}
    {...props}
  >
    {children}
  </AlertDialogFooter>
));
AlertDialogFooterWrapper.displayName = AlertDialogFooter.displayName;

export const AlertDialog = Object.assign(AlertDialog, {
  Trigger: AlertDialogTriggerWrapper,
  Content: AlertDialogContentWrapper,
  Header: AlertDialogHeaderWrapper,
  Title: AlertDialogTitleWrapper,
  Description: AlertDialogDescriptionWrapper,
  Footer: AlertDialogFooterWrapper,
});
