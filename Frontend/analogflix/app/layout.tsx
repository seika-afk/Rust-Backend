import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liminal",
  description: "Visit To Liminal Horror",
  icons: {
    icon: "/ghost.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body
        style={{
          fontFamily: '"JetBrains Mono", monospace',
        }}
        className="min-h-full flex flex-col"
      >
        {children}
      </body>
    </html>
  );
}
