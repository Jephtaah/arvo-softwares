import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
