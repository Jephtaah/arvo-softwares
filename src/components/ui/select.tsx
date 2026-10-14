import * as React from "react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectGroup,
  SelectLabel,
} from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

const SelectTriggerWrapper = React.forwardRef<
  React.ElementRef<typeof SelectTrigger>,
  React.ComponentPropsWithoutRef<typeof SelectTrigger> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SelectTrigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <SelectValue className="text-foreground" />
    {children}
  </SelectTrigger>
));
SelectTriggerWrapper.displayName = SelectTrigger.displayName;

const SelectContentWrapper = React.forwardRef<
  React.ElementRef<typeof SelectContent>,
  React.ComponentPropsWithoutRef<typeof SelectContent> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SelectContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-sm shadow-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  >
    {children}
  </SelectContent>
));
SelectContentWrapper.displayName = SelectContent.displayName;

const SelectItemWrapper = React.forwardRef<
  React.ElementRef<typeof SelectItem>,
  React.ComponentPropsWithoutRef<typeof SelectItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <SelectItem
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </SelectItem>
));
SelectItemWrapper.displayName = SelectItem.displayName;

const SelectSeparatorWrapper = React.forwardRef<
  React.ElementRef<typeof SelectSeparator>,
  React.ComponentPropsWithoutRef<typeof SelectSeparator>
>(({ className, ...props }, ref) => (
  <SelectSeparator
    ref={ref}
    className={cn("-mx-1 my-1 h-0.5 bg-muted", className)}
    {...props}
  />
));
SelectSeparatorWrapper.displayName = SelectSeparator.displayName;

const SelectScrollUpButtonWrapper = React.forwardRef<
  React.ElementRef<typeof SelectScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectScrollUpButton>
>(({ children, ...props }, ref) => (
  <SelectScrollUpButton {...props}>
    {children}
  </SelectScrollUpButton>
));
SelectScrollUpButtonWrapper.displayName = SelectScrollUpButton.displayName;

const SelectScrollDownButtonWrapper = React.forwardRef<
  React.ElementRef<typeof SelectScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectScrollDownButton>
>(({ children, ...props }, ref) => (
  <SelectScrollDownButton {...props}>
    {children}
  </SelectScrollDownButton>
));
SelectScrollDownButtonWrapper.displayName = SelectScrollDownButton.displayName;

const SelectGroupWrapper = React.forwardRef<
  React.ElementRef<typeof SelectGroup>,
  React.ComponentPropsWithoutRef<typeof SelectGroup>
>(({ className, ...props }, ref) => (
  <SelectGroup
    ref={ref}
    className={cn("px-1", className)}
    {...props}
  />
));
SelectGroupWrapper.displayName = SelectGroup.displayName;

const SelectLabelWrapper = React.forwardRef<
  React.ElementRef<typeof SelectLabel>,
  React.ComponentPropsWithoutRef<typeof SelectLabel>
>(({ className, ...props }, ref) => (
  <SelectLabel
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-medium", className)}
    {...props}
  />
));
SelectLabelWrapper.displayName = SelectLabel.displayName;

export const Select = Object.assign(Select, {
  Trigger: SelectTriggerWrapper,
  Value: SelectValue,
  Content: SelectContentWrapper,
  Item: SelectItemWrapper,
  Separator: SelectSeparatorWrapper,
  ScrollUpButton: SelectScrollUpButtonWrapper,
  ScrollDownButton: SelectScrollDownButtonWrapper,
  Group: SelectGroupWrapper,
  Label: SelectLabelWrapper,
});
