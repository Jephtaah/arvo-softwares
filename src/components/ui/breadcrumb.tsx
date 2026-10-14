import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbEllipsis,
  BreadcrumbPage,
} from "@radix-ui/react-breadcrumb";

import { cn } from "@/lib/utils";

const BreadcrumbItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BreadcrumbItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <BreadcrumbItem
    ref={ref}
    className={cn("flex items-center gap-1.5", className)}
    {...props}
  >
    {children}
  </BreadcrumbItem>
));
BreadcrumbItemWrapper.displayName = BreadcrumbItem.displayName;

const BreadcrumbLinkWrapper = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof BreadcrumbLink> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <BreadcrumbLink
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline",
      "data-[state=active]:text-foreground data-[state=active]:font-medium",
      className
    )}
    {...props}
  >
    {children}
  </BreadcrumbLink>
));
BreadcrumbLinkWrapper.displayName = BreadcrumbLink.displayName;

const BreadcrumbEllipsisWrapper = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof BreadcrumbEllipsis>
>(({ className, ...props }, ref) => (
  <BreadcrumbEllipsis
    ref={ref}
    className={cn("text-muted-foreground", className)}
    {...props}
  />
));
BreadcrumbEllipsisWrapper.displayName = BreadcrumbEllipsis.displayName;

const BreadcrumbPageWrapper = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof BreadcrumbPage> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <BreadcrumbPage
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline",
      "data-[state=active]:text-foreground data-[state=active]:font-medium",
      className
    )}
    {...props}
  >
    {children}
  </BreadcrumbPage>
));
BreadcrumbPageWrapper.displayName = BreadcrumbPage.displayName;

export const Breadcrumb = Object.assign(Breadcrumb, {
  Item: BreadcrumbItemWrapper,
  Link: BreadcrumbLinkWrapper,
  Ellipsis: BreadcrumbEllipsisWrapper,
  Page: BreadcrumbPageWrapper,
});
