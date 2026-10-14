import * as React from "react";
import { Sidebar } from "@/components/ui/sidebar";

export const AppShell = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar?: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex bg-background">
      {sidebar && <Sidebar className="w-64">{sidebar}</Sidebar>}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-primary/5 border-b border-muted px-6 py-4">
          <h1 className="text-xl font-semibold text-primary-foreground">
            Arvo Reach
          </h1>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};
