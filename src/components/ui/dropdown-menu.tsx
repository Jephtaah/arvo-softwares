import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@radix-ui/react-dropdown-menu";

import { cn } from "@/lib/utils";

const DropdownMenuTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuTrigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuTrigger>
));
DropdownMenuTriggerWrapper.displayName = DropdownMenuTrigger.displayName;

const DropdownMenuContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuContent> & {
    className?: string;
    sideOffset?: number;
    align?: "start" | "center" | "end";
  }
>(({ className, sideOffset = 4, align = "start", children, ...props }, ref) => (
  <DropdownMenuContent
    ref={ref}
    sideOffset={sideOffset}
    align={align}
    className={cn(
      "z-50 min-w-[8rem] max-w-[25rem] initial:w-[25rem] max-h-[25rem] overflow-hidden rounded-md border bg-popover p-1 text-sm shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuContent>
));
DropdownMenuContentWrapper.displayName = DropdownMenuContent.displayName;

const DropdownMenuItemWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <DropdownMenuItem
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuItem>
));
DropdownMenuItemWrapper.displayName = DropdownMenuItem.displayName;

const DropdownMenuCheckboxItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuCheckboxItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuCheckboxItem
    ref={ref}
    className={cn(
      "flex items-center cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="h-3 w-3 flex items-center justify-center rounded border-input bg-background" aria-hidden="true" />
    <span className="flex-1 pl-3">{children}</span>
  </DropdownMenuCheckboxItem>
));
DropdownMenuCheckboxItemWrapper.displayName = DropdownMenuCheckboxItem.displayName;

const DropdownMenuRadioGroupWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuRadioGroup>
>(({ className, ...props }, ref) => (
  <DropdownMenuRadioGroup
    ref={ref}
    className={cn("space-y-1", className)}
    {...props}
  />
));
DropdownMenuRadioGroupWrapper.displayName = DropdownMenuRadioGroup.displayName;

const DropdownMenuRadioItemWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuRadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuRadioItem
    ref={ref}
    className={cn(
      "flex items-center cursor-default select-none rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="h-3 w-3 flex items-center justify-center rounded border-input bg-background" aria-hidden="true" />
    <span className="flex-1 pl-3">{children}</span>
  </DropdownMenuRadioItem>
));
DropdownMenuRadioItemWrapper.displayName = DropdownMenuRadioItem.displayName;

const DropdownMenuLabelWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuLabel>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuLabel
    ref={ref}
    className={cn("flex items-center px-2 py-1.5 text-sm font-medium", className)}
    {...props}
  >
    {children}
  </DropdownMenuLabel>
));
DropdownMenuLabelWrapper.displayName = DropdownMenuLabel.displayName;

const DropdownMenuSeparatorWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSeparator>
>(({ className, ...props }, ref) => (
  <DropdownMenuSeparator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparatorWrapper.displayName = DropdownMenuSeparator.displayName;

const DropdownMenuShortcutWrapper = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuShortcut>
>(({ className, ...props }, ref) => (
  <DropdownMenuShortcut
    ref={ref}
    className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
    {...props}
  />
));
DropdownMenuShortcutWrapper.displayName = DropdownMenuShortcut.displayName;

const DropdownMenuGroupWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuGroup>
>(({ className, ...props }, ref) => (
  <DropdownMenuGroup
    ref={ref}
    className={cn("px-1", className)}
    {...props}
  />
));
DropdownMenuGroupWrapper.displayName = DropdownMenuGroup.displayName;

const DropdownMenuSubWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSub>
>(({ className, ...props }, ref) => (
  <DropdownMenuSub
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
DropdownMenuSubWrapper.displayName = DropdownMenuSub.displayName;

const DropdownMenuSubTriggerWrapper = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubTrigger>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuSubTrigger
    ref={ref}
    className={cn(
      "flex w-full items-center justify-between px-2 py-1.5 text-sm font-medium",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  >
    <span className="flex-auto">{children}</span>
  </DropdownMenuSubTrigger>
));
DropdownMenuSubTriggerWrapper.displayName = DropdownMenuSubTrigger.displayName;

const DropdownMenuSubContentWrapper = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DropdownMenuSubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuSubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] max-w-[25rem] initial:w-[25rem] max-h-[25rem] overflow-hidden rounded-md border bg-popover p-1 text-sm shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  >
    {children}
  </DropdownMenuSubContent>
));
DropdownMenuSubContentWrapper.displayName = DropdownMenuSubContent.displayName;

export const DropdownMenu = Object.assign(DropdownMenu, {
  Trigger: DropdownMenuTriggerWrapper,
  Content: DropdownMenuContentWrapper,
  Item: DropdownMenuItemWrapper,
  CheckboxItem: DropdownMenuCheckboxItemWrapper,
  RadioGroup: DropdownMenuRadioGroupWrapper,
  RadioItem: DropdownMenuRadioItemWrapper,
  Label: DropdownMenuLabelWrapper,
  Separator: DropdownMenuSeparatorWrapper,
  Shortcut: DropdownMenuShortcutWrapper,
  Group: DropdownMenuGroupWrapper,
  Sub: DropdownMenuSubWrapper,
  SubTrigger: DropdownMenuSubTriggerWrapper,
  SubContent: DropdownMenuSubContentWrapper,
});
