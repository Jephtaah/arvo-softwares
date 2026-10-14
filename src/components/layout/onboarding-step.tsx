import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const OnboardingStep = ({
  title,
  description,
  children,
  showProgress = true,
  currentStep,
  totalSteps,
  onSkip,
  onNext,
  onBack,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  showProgress?: boolean;
  currentStep: number;
  totalSteps: number;
  onSkip?: () => void;
  onNext: () => void;
  onBack?: () => void;
}) => {
  return (
    <div className="space-y-8">
      {showProgress && (
        <div className="text-center text-sm text-muted-foreground">
          Step {currentStep} of {totalSteps}
        </div>
      )}
      <Card className="w-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {description && (
            <CardDescription className="text-muted-foreground mt-2">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent className="space-y-6">{children}</CardContent>
      </Card>
      <div className="flex justify-between items-center mt-6">
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        {onSkip && (
          <Button variant="ghost" onClick={onSkip}>
            Skip
          </Button>
        )}
        <Button onClick={onNext}>
          Next Step
        </Button>
      </div>
    </div>
  );
};
