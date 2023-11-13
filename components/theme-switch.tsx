"use client";

import { useTheme } from "@/context/theme-context";
import { MoonIcon, SunIcon } from "./icons";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="rounded-full bg-transparent bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <MoonIcon className="w-4" />
      ) : (
        <SunIcon className="w-4" />
      )}
    </button>
  );
}
