import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const DetailView = ({
  title,
  description,
  children,
  actions,
  status,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  actions?: Array<{
    label: string;
    onClick: () => void;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  }>;
  status?: "default" | "primary" | "secondary" | "destructive";
}) => {
  return (
    <div className="space-y-8">
      <Card className="w-full">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-bold">{title}</CardTitle>
              {description && (
                <CardDescription className="text-muted-foreground mt-2">
                  {description}
                </CardDescription>
              )}
            </div>
            {status && (
              <Badge variant={status === "destructive" ? "destructive" : status === "primary" ? "primary" : "secondary"}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
      {actions && actions.length > 0 && (
        <div className="flex justify-end space-x-3 mt-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "default"}
              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
