import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

interface OnboardingStepperProps {
  currentStep: number;
  totalSteps: number;
  steps: Array<{
    label: string;
    description?: string;
    completed?: boolean;
  }>;
  className?: string;
}

export const OnboardingStepper = React.forwardRef<
  HTMLDivElement,
  OnboardingStepperProps
>(({ currentStep, totalSteps, steps, className, ...props }, ref) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      ref={ref}
      className={cn("w-full space-y-6", className)}
      {...props}
    >
      <Card className="w-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">
            Onboarding Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full h-2.5 mb-4" />
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-3",
                  index < currentStep
                    ? "text-muted-foreground"
                    : index === currentStep
                    ? "text-primary"
                    : "text-muted-foreground/50"
                )}
              >
                <Checkbox
                  checked={index < currentStep}
                  aria-label={`${step.label} step`}
                />
                <div className="flex-1 space-y-1">
                  <p className="font-medium">{step.label}</p>
                  {step.description && (
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
});
OnboardingStepper.displayName = "OnboardingStepper";
