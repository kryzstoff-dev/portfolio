import type { Metadata } from "next";
import "./globals.css";
import App from "./App";
import ThemeRegistry from "@/components/layout/ThemeRegistry";

export const metadata: Metadata = {
  title: "Christopher Alonzo",
  description: "Showcasing my professional journey and projects",
  icons: {
    icon: "assets/images/profile.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col text-slate-900 dark:text-white bg-slate-100! dark:bg-slate-950!">
        <ThemeRegistry>
          <App>{children}</App>
        </ThemeRegistry>
      </body>
    </html>
  );
}
