import * as React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@radix-ui/react-pagination";

import { cn } from "@/lib/utils";

const PaginationContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PaginationContent>
>(({ className, children, ...props }, ref) => (
  <PaginationContent
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-md border bg-background text-sm font-medium",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  >
    {children}
  </PaginationContent>
));
PaginationContentWrapper.displayName = PaginationContent.displayName;

const PaginationItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof PaginationItem>
>(({ className, children, ...props }, ref) => (
  <PaginationItem
    ref={ref}
    className={cn("", className)}
    {...props}
  >
    {children}
  </PaginationItem>
));
PaginationItemWrapper.displayName = PaginationItem.displayName;

const PaginationLinkWrapper = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof PaginationLink> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <PaginationLink
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-center rounded-md px-3 py-2 text-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_[data-state=active]]:bg-primary [&_[data-state=active]]:text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </PaginationLink>
));
PaginationLinkWrapper.displayName = PaginationLink.displayName;

const PaginationNextWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof PaginationNext>
>(({ className, children, ...props }, ref) => (
  <PaginationNext
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-center rounded-md px-3 py-2 text-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_[data-state=active]]:bg-primary [&_[data-state=active]]:text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </PaginationNext>
));
PaginationNextWrapper.displayName = PaginationNext.displayName;

const PaginationPreviousWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof PaginationPrevious>
>(({ className, children, ...props }, ref) => (
  <PaginationPrevious
    ref={ref}
    className={cn(
      "flex flex-1 items-center justify-center rounded-md px-3 py-2 text-background",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "[&_[data-state=active]]:bg-primary [&_[data-state=active]]:text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </PaginationPrevious>
));
PaginationPreviousWrapper.displayName = PaginationPrevious.displayName;

export const Pagination = Object.assign(Pagination, {
  Content: PaginationContentWrapper,
  Item: PaginationItemWrapper,
  Link: PaginationLinkWrapper,
  Next: PaginationNextWrapper,
  Previous: PaginationPreviousWrapper,
});
