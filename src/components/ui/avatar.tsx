import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

export const AvatarRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ className, ...props }, ref) => {
  return (
    <Slot
      ref={ref}
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...props}
    />
  );
});
AvatarRoot.displayName = AvatarImage.displayName;

export const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof AvatarImage>
>(({ className, ...props }, ref) => {
  return (
    <AvatarImage
      ref={ref}
      className={cn(
        "aspect-square h-full w-full object-cover",
        className
      )}
      {...props}
    />
  );
});
AvatarImage.displayName = AvatarImage.displayName;

export const AvatarFallback = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof AvatarFallback>
>(({ className, ...props }, ref) => {
  return (
    <AvatarFallback
      ref={ref}
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});
AvatarFallback.displayName = AvatarFallback.displayName;

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
});
