import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

// Keep in sync with the pre-paint script in index.html.
const STORAGE_KEY = "theme";
const THEME_COLOR: Record<Theme, string> = { dark: "#0c1623", light: "#f1faee" };
const LIGHT_QUERY = "(prefers-color-scheme: light)";

function systemTheme(): Theme {
  return window.matchMedia?.(LIGHT_QUERY).matches ? "light" : "dark";
}

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLOR[theme]);
}

function initialTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  return storedTheme() ?? systemTheme();
}

/**
 * Light/dark theme that defaults to the OS setting.
 * Toggling to the theme the OS already uses clears the saved choice, so the site goes back to
 * following the system; toggling away from it saves the choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Follow live OS changes for as long as the visitor hasn't picked a theme themselves.
  useEffect(() => {
    const query = window.matchMedia?.(LIGHT_QUERY);
    if (!query) return;
    const onChange = () => {
      if (!storedTheme()) setTheme(query.matches ? "light" : "dark");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    try {
      if (next === systemTheme()) localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }

    const commit = () => {
      applyTheme(next);
      flushSync(() => setTheme(next));
    };

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (document.startViewTransition && !reduceMotion) {
      document.startViewTransition(commit);
    } else {
      commit();
    }
  }, [theme]);

  return { theme, toggleTheme };
}
