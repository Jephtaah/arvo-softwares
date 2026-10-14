import * as React from "react";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface ColorPickerProps {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  colors?: string[];
}

export const ColorPicker = React.forwardRef<
  HTMLDivElement,
  ColorPickerProps
>(({ value, onValueChange, className, colors, ...props }, ref) => {
  const defaultColors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFBE0B", "#FB5607",
    "#8338EC", "#3A86FF", "#06D6A0", "#118AB2", "#073B4C"
  ];
  
  const colorOptions = colors || defaultColors;

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      {...props}
    >
      <Popover>
        <PopoverTrigger asChild>
          <Card className="w-full cursor-pointer">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">
                Color Picker
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-10 items-center gap-3">
              <div
                className={cn(
                  "h-8 w-8 rounded border",
                  `bg-[${value}]`
                )}
              />
              <span className="text-sm text-muted-foreground">
                {value}
              </span>
            </CardContent>
          </Card>
        </PopoverTrigger>
        <PopoverContent className="w-56 p-4">
          <div className="space-y-4">
            <Input
              type="color"
              value={value}
              onChange={(e) => onValueChange(e.target.value)}
              className="h-10"
            />
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color, index) => (
                <ToggleGroupItem
                  key={index}
                  value={color}
                  onValueChange={onValueChange}
                  className={cn(
                    "aspect-square h-8 w-8 rounded border",
                    value === color ? "border-2 border-primary" : "border-transparent",
                    `bg-[${color}]`
                  )}
                />
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
});
ColorPicker.displayName = "ColorPicker";
