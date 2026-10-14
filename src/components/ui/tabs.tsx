import * as React from "react";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const TabsListWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof TabsList>
>(({ className, children, ...props }, ref) => (
  <TabsList
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md border bg-background p-1",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  >
    {children}
  </TabsList>
));
TabsListWrapper.displayName = TabsList.displayName;

const TabsTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof TabsTrigger> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <TabsTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus:z-10 focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
      className
    )}
    {...props}
  >
    {children}
  </TabsTrigger>
));
TabsTriggerWrapper.displayName = TabsTrigger.displayName;

const TabsContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof TabsContent>
>(({ className, children, ...props }, ref) => (
  <TabsContent
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  >
    <div className="pb-1">{children}</div>
  </TabsContent>
));
TabsContentWrapper.displayName = TabsContent.displayName;

export const Tabs = Object.assign(Tabs, {
  List: TabsListWrapper,
  Trigger: TabsTriggerWrapper,
  Content: TabsContentWrapper,
});
