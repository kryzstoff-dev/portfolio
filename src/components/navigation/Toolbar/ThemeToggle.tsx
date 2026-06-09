import { useTheme } from "next-themes";
import { IconButton } from "@mui/material";
import { Sun, Moon } from "lucide-react";
import { useEffect } from "react";

let didInit = false;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (!didInit) {
      didInit = true;
    }
  }, []);

  if (!didInit) {
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
