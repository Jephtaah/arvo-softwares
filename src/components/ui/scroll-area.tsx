import * as React from "react";

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollAreaRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollArea>
>(({ className, ...props }, ref) => (
  <ScrollArea
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
ScrollAreaRoot.displayName = ScrollArea.displayName;

const ScrollAreaViewport = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaViewport>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaViewport
    ref={ref}
    className={cn(
      "w-full h-full overflow-hidden",
      className
    )}
    {...props}
  >
    {children}
  </ScrollAreaViewport>
));
ScrollAreaViewport.displayName = ScrollAreaViewport.displayName;

const ScrollAreaScrollbar = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, ...props }, ref) => (
  <ScrollAreaScrollbar
    ref={ref}
    className={cn(
      "flex rounded-full bg-muted w-[4px]",
      className
    )}
    {...props}
  />
));
ScrollAreaScrollbar.displayName = ScrollAreaScrollbar.displayName;

const ScrollAreaThumb = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaThumb>
>(({ className, ...props }, ref) => (
  <ScrollAreaThumb
    ref={ref}
    className={cn(
      "flex-1 rounded-full bg-primary",
      className
    )}
    {...props}
  />
));
ScrollAreaThumb.displayName = ScrollAreaThumb.displayName;

const ScrollAreaCorner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ScrollAreaCorner>
>(({ className, ...props }, ref) => (
  <ScrollAreaCorner
    ref={ref}
    className={cn("bg-muted", className)}
    {...props}
  />
));
ScrollAreaCorner.displayName = ScrollAreaCorner.displayName;

export const ScrollArea = Object.assign(ScrollAreaRoot, {
  Viewport: ScrollAreaViewport,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Corner: ScrollAreaCorner,
});
