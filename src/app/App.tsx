"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { NavigationStoreProvider } from "@/providers/NavigationStoreProvider";
import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

function App({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <NavigationStoreProvider>
          <Navbar />
        </NavigationStoreProvider>
        <main className="grow pt-16">
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export default App;
