"use client";

import * as React from "react";
import { Toast, ToastAction, ToastDescription, ToastProvider, ToastTitle, Toaster } from "sonner";

import { cn } from "@/lib/utils";

const ToasterWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Toaster> & {
    className?: string;
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
  }
>(({ className, position = "top-right", children, ...props }, ref) => (
  <Toaster
    ref={ref}
    className={cn(
      "z-50 w-full max-w-xs inline-block",
      position === "top-left"
        ? "top-0 left-0"
        : position === "top-center"
        ? "top-0 left-1/2 -translate-x-1/2"
        : position === "top-right"
        ? "top-0 right-0"
        : position === "bottom-left"
        ? "bottom-0 left-0"
        : position === "bottom-center"
        ? "bottom-0 left-1/2 -translate-x-1/2"
        : position === "bottom-right"
        ? "bottom-0 right-0"
        : "",
      className
    )}
    {...props}
  >
    {children}
  </Toaster>
));
ToasterWrapper.displayName = "Toaster";

export const SonnerToast = Object.assign(Toast, {
  Description: ToastDescription,
  Action: ToastAction,
  Title: ToastTitle,
});

export const SonnerProvider = ToastProvider;

export const SonnerToaster = ToasterWrapper;
