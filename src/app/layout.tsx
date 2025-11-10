import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Service Corp",
  description: "Website corporativo moderno e responsivo para uma empresa que atua nas áreas de seguros, organização de eventos e serviços empresariais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
