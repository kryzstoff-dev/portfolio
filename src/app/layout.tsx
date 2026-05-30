import type { Metadata } from "next";
import "./globals.css";
import App from "./App";
import ThemeRegistry from "@/components/layout/ThemeRegistry";

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "Showcasing my professional journey and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        <ThemeRegistry>
          <App>{children}</App>
        </ThemeRegistry>
      </body>
    </html>
  );
}
