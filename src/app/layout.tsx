import './globals.css';
import Nav from "@/components/layout/nav";

export const metadata = {
  title: 'Arvo Reach',
  description: 'Arvo Reach is a free web app that runs targeted outreach on autopilot',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Nav />
        <main className="flex min-h-[calc(100vh-3.5rem)] w-full flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}