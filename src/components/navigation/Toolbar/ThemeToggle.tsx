"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { IconButton } from "@mui/material";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  const isDark = theme === "dark";

  return (
    <IconButton
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
    >
      {isDark ? (
        <Sun className="text-slate-300" size={22} />
      ) : (
        <Moon size={22} className="text-slate-900" />
      )}
    </IconButton>
  );
}
