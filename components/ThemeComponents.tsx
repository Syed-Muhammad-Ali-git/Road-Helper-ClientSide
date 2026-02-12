"use client";

import React, { ReactNode, useEffect } from "react";
import { useAppTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { cn } from "@/lib/utils";

interface ThemeWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * ThemeWrapper Component
 * Ensures theme and language classes are applied to the nearest DOM container
 * Useful for pages that need theme-aware styling
 */
export const ThemeWrapper = ({ children, className }: ThemeWrapperProps) => {
  const { isDark } = useAppTheme();
  const { isRTL } = useLanguage();

  useEffect(() => {
    // Ensure HTML element has correct classes for Tailwind dark mode
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    // Ensure HTML element has correct direction
    const html = document.documentElement;
    html.dir = isRTL ? "rtl" : "ltr";
    if (isRTL) {
      html.classList.add("rtl");
      html.classList.remove("ltr");
    } else {
      html.classList.add("ltr");
      html.classList.remove("rtl");
    }
  }, [isRTL]);

  return (
    <div
      className={cn(
        isDark ? "dark" : "light",
        isRTL ? "rtl" : "ltr",
        "min-h-screen",
        className
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {children}
    </div>
  );
};

/**
 * Card Component with Theme Support
 * A simple card component that respects theme settings
 */
interface ThemeCardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export const ThemeCard = ({
  children,
  className,
  interactive = false,
}: ThemeCardProps) => {
  const { isDark } = useAppTheme();

  return (
    <div
      className={cn(
        "rounded-lg border p-4 transition-all duration-200",
        isDark
          ? "bg-gray-900 border-gray-800 hover:border-gray-700"
          : "bg-white border-gray-200 hover:border-gray-300",
        interactive && (isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"),
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Text Component with Theme Support
 */
interface ThemeTextProps {
  children: ReactNode;
  className?: string;
  secondary?: boolean;
}

export const ThemeText = ({
  children,
  className,
  secondary = false,
}: ThemeTextProps) => {
  const { isDark } = useAppTheme();

  return (
    <span
      className={cn(
        secondary
          ? isDark
            ? "text-gray-400"
            : "text-gray-600"
          : isDark
          ? "text-gray-100"
          : "text-gray-900",
        className
      )}
    >
      {children}
    </span>
  );
};

/**
 * Border Component with Theme Support
 */
interface ThemeBorderProps {
  className?: string;
  vertical?: boolean;
}

export const ThemeBorder = ({ className, vertical = false }: ThemeBorderProps) => {
  const { isDark } = useAppTheme();

  return (
    <div
      className={cn(
        vertical ? "w-px" : "h-px",
        isDark ? "bg-gray-800" : "bg-gray-200",
        className
      )}
    />
  );
};
