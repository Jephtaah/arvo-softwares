import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SettingsPage = ({
  title,
  description,
  children,
  onSave,
  onReset,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  onSave: () => void;
  onReset?: () => void;
}) => {
  return (
    <div className="space-y-8">
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
      <div className="flex justify-end space-x-3 mt-6">
        {onReset && (
          <Button variant="outline" onClick={onReset}>
            Reset to Defaults
          </Button>
        )}
        <Button onClick={onSave}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};
