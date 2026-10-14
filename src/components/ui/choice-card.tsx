import * as React from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface ChoiceCardProps<T> {
  value: T;
  onValueChange: (value: T) => void;
  options: Array<{
    value: T;
    label: string;
    description?: string;
  }>;
  className?: string;
}

export const ChoiceCard = React.forwardRef<
  HTMLDivElement,
  ChoiceCardProps<any>
>(({ value, onValueChange, options, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("w-full space-y-4", className)}
      {...props}
    >
      <Card className="w-full">
        <CardContent className="space-y-4">
          <RadioGroup
            value={value}
            onValueChange={onValueChange}
            className="space-y-3"
          >
            {options.map((option, index) => (
              <RadioGroupItem key={index} value={option.value}>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0">
                      {/* Radio button will be rendered by RadioGroupItem */}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{option.label}</p>
                      {option.description && (
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </RadioGroupItem>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
});
ChoiceCard.displayName = "ChoiceCard";
