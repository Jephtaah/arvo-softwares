import * as React from "react";

import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement> {
  asChild?: boolean;
}

export const Form = React.forwardRef<
  HTMLFormElement,
  FormProps
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "form";
  return (
    <Comp
      className={cn("space-y-6", className)}
      ref={ref}
      {...props}
    />
  );
});
Form.displayName = "Form";
