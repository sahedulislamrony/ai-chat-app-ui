"use client";

import { PanelLeft, Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function Header({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen?: boolean;
}) {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <header className="border-b border-foreground/20 bg-background px-3 sm:px-4 py-3 shrink-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shrink-0"
          >
            <PanelLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <h1
            className={cn(
              "text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-400 ",
              {
                "hidden sm:hidden lg:block": isSidebarOpen,
                block: !isSidebarOpen,
              }
            )}
          >
            SmartGPT
          </h1>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full shrink-0"
        >
          {isDarkMode ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-sky-500" />
          )}
        </Button>
      </div>
    </header>
  );
}
