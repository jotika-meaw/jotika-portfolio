"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function applyTheme(theme: Theme, persist = true) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage can be unavailable in private browsing modes
    }
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.setAttribute(
      "content",
      theme === "dark" ? "#060b16" : "#f4f7fc",
    );
  }

  window.dispatchEvent(new CustomEvent<Theme>("themechange", { detail: theme }));
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("light")
    ? "light"
    : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function subscribe(onStoreChange: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    if (event.newValue === "dark" || event.newValue === "light") {
      applyTheme(event.newValue, false);
    }
  };

  window.addEventListener("themechange", onStoreChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener("themechange", onStoreChange);
    window.removeEventListener("storage", onStorage);
  };
}

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

export default function ThemeToggle({
  className = "",
  compact = false,
}: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const nextTheme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} theme`;

  return (
    <button
      type="button"
      onClick={() => applyTheme(nextTheme)}
      aria-label={label}
      title={label}
      className={`flex shrink-0 items-center justify-center border border-border bg-surface/70 text-muted transition hover:border-primary/50 hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
        compact ? "h-9 w-9 rounded-lg" : "h-10 w-10 rounded-xl"
      } ${className}`}
    >
      <Sun className="hidden h-[18px] w-[18px] dark:block" />
      <Moon className="hidden h-[18px] w-[18px] light:block" />
    </button>
  );
}
