import * as React from "react";

import {
  Slider,
  SliderThumb,
  SliderTrack,
  SliderRange,
} from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

export const SliderRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Slider>
>(({ className, ...props }, ref) => (
  <Slider
    ref={ref}
    className={cn(
      "flex h-1.5 w-full items-center cursor-pointer rounded-full bg-background",
      className
    )}
    {...props}
  />
));
SliderRoot.displayName = Slider.displayName;

export const SliderTrack = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SliderTrack>
>(({ className, ...props }, ref) => (
  <SliderTrack
    ref={ref}
    className={cn(
      "h-1.5 w-full rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
SliderTrack.displayName = SliderTrack.displayName;

export const SliderRange = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SliderRange>
>(({ className, ...props }, ref) => (
  <SliderRange
    ref={ref}
    className={cn(
      "h-1.5 rounded-full bg-primary",
      className
    )}
    {...props}
  />
));
SliderRange.displayName = SliderRange.displayName;

export const SliderThumb = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof SliderThumb>
>(({ className, ...props }, ref) => (
  <SliderThumb
    ref={ref}
    className={cn(
      "h-4 w-4 rounded-full bg-primary ring-offset-background ring-2 ring-ring",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disable:pointer-events-none disable:opacity-50",
      className
    )}
    {...props}
  />
));
SliderThumb.displayName = SliderThumb.displayName;

export const Slider = Object.assign(SliderRoot, {
  Track: SliderTrack,
  Range: SliderRange,
  Thumb: SliderThumb,
});
