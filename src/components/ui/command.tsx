import * as React from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
} from "@radix-ui/react-command";

import { cn } from "@/lib/utils"; // This will need to be fixed

const CommandDialogWrapper = React.forwardRef<
  React.ElementRef<typeof CommandDialog>,
  React.ComponentPropsWithoutRef<typeof CommandDialog> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <CommandDialog
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 grid min-h-[16dvh] w-[25rem] max-w-[35rem] items-center justify-center px-4 py-2 sm:px-6 sm:h-full",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  >
    <div className="relative w-full max-h-[24rem] overflow-hidden rounded-md border bg-popover p-1 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col h-full">
        <CommandInput
          className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <CommandLoading className="flex h-10 w-full items-center justify-center text-muted-foreground" />
        <CommandSeparator className="-mx-1 my-1 h-px bg-muted" />
        <CommandEmpty className="flex h-full w-full items-center justify-center text-sm text-muted-foreground" />
        <CommandList className="flex h-[16rem] w-full flex-col overflow-y-space overflow-x-hidden p-1 space-y-1 text-sm" />
        <CommandSeparator className="-mx-1 my-1 h-px bg-muted" />
      </div>
    </div>
  </CommandDialog>
));
CommandDialogWrapper.displayName = CommandDialog.displayName;

const CommandItemWrapper = React.forwardRef<
  React.ElementRef<typeof CommandItem>,
  React.ComponentPropsWithoutRef<typeof CommandItem> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => (
  <CommandItem
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </CommandItem>
));
CommandItemWrapper.displayName = CommandItem.displayName;

const CommandGroupWrapper = React.forwardRef<
  React.ElementRef<typeof CommandGroup>,
  React.ComponentPropsWithoutRef<typeof CommandGroup>
>(({ className, ...props }, ref) => (
  <CommandGroup
    ref={ref}
    className={cn("px-1", className)}
    {...props}
  />
));
CommandGroupWrapper.displayName = CommandGroup.displayName;

const CommandSeparatorWrapper = React.forwardRef<
  React.ElementRef<typeof CommandSeparator>,
  React.ComponentPropsWithoutRef<typeof CommandSeparator>
>(({ className, ...props }, ref) => (
  <CommandSeparator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
CommandSeparatorWrapper.displayName = CommandSeparator.displayName;

const CommandShortcutWrapper = React.forwardRef<
  React.ElementRef<typeof CommandShortcut>,
  React.ComponentPropsWithoutRef<typeof CommandShortcut>
>(({ className, ...props }, ref) => (
  <CommandShortcut
    ref={ref}
    className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
    {...props}
  />
));
CommandShortcutWrapper.displayName = CommandShortcut.displayName;

export const Command = Object.assign(Command, {
  Dialog: CommandDialogWrapper,
  Empty: CommandEmpty,
  Group: CommandGroupWrapper,
  Input: CommandInput,
  Item: CommandItemWrapper,
  List: CommandList,
  Loading: CommandLoading,
  Separator: CommandSeparatorWrapper,
  Shortcut: CommandShortcutWrapper,
});
