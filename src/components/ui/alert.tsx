import * as React from "react";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@radix-ui/react-alert";

import { cn } from "@/lib/utils";

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Alert>
>(({ className, ...props }, ref) => (
  <Alert
    ref={ref}
    className={cn(
      "flex w-full items-center gap-4 rounded-border border p-4",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  />
));
AlertRoot.displayName = Alert.displayName;

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof AlertDescription>
>(({ className, ...props }, ref) => (
  <AlertDescription
    ref={ref}
    className={cn("text-sm [&_a]:underline [&_a]:underline-offset-4", className)}
    {...props}
  />
));
AlertDescription.displayName = AlertDescription.displayName;

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof AlertTitle>
>(({ className, ...props }, ref) => (
  <AlertTitle
    ref={ref}
    className={cn("text-sm font-medium", className)}
    {...props}
  />
));
AlertTitle.displayName = AlertTitle.displayName;

export const Alert = Object.assign(AlertRoot, {
  Description: AlertDescription,
  Title: AlertTitle,
});
