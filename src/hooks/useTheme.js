import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  let stored = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Storage can be unavailable (privacy mode, blocked site data).
  }
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Ignore: theme still applies for this visit.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
