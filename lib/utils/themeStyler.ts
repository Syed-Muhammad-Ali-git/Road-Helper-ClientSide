/**
 * Theme and Language Styling Utilities
 * Provides consistent theme-aware and language-aware styling across the app
 */

import { useAppTheme } from "@/app/context/ThemeContext";
import { useLanguage } from "@/app/context/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * Get background color class based on theme
 * @param darkClass - CSS class for dark mode
 * @param lightClass - CSS class for light mode (defaults to white/gray)
 */
export const getBgClass = (
  darkClass: string = "bg-gray-950",
  lightClass: string = "bg-white"
) => {
  return `dark:${darkClass} ${lightClass}`;
};

/**
 * Get text color class based on theme
 * @param darkClass - CSS class for dark mode
 * @param lightClass - CSS class for light mode
 */
export const getTextClass = (
  darkClass: string = "dark:text-white",
  lightClass: string = "text-gray-900"
) => {
  return `${darkClass} ${lightClass}`;
};

/**
 * Get border color class based on theme
 * @param darkClass - CSS class for dark mode
 * @param lightClass - CSS class for light mode
 */
export const getBorderClass = (
  darkClass: string = "dark:border-gray-700",
  lightClass: string = "border-gray-300"
) => {
  return `${darkClass} ${lightClass}`;
};

/**
 * Get card/paper styling based on theme
 */
export const getCardClass = () => {
  return cn(
    "rounded-lg border transition-all duration-200",
    "bg-white dark:bg-gray-900",
    "border-gray-200 dark:border-gray-800",
    "hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-gray-900/50"
  );
};

/**
 * Get button styling based on theme
 */
export const getButtonClass = (variant: "primary" | "secondary" | "outlined" = "primary") => {
  const baseClass = "px-4 py-2 rounded-lg font-semibold transition-all duration-200";
  
  switch (variant) {
    case "primary":
      return cn(baseClass, "bg-brand-red hover:bg-brand-dark-red text-white");
    case "secondary":
      return cn(
        baseClass,
        "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      );
    case "outlined":
      return cn(
        baseClass,
        "bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white"
      );
  }
};

/**
 * Get input styling based on theme
 */
export const getInputClass = () => {
  return cn(
    "w-full px-4 py-2 rounded-lg border-2 transition-all duration-200",
    "bg-white dark:bg-gray-900",
    "border-gray-300 dark:border-gray-700",
    "text-gray-900 dark:text-white",
    "placeholder:text-gray-500 dark:placeholder:text-gray-400",
    "focus:border-brand-red focus:ring-2 focus:ring-brand-red/20"
  );
};

/**
 * Hook to get theme-aware styling utilities
 */
export const useThemeStyles = () => {
  const { isDark } = useAppTheme();
  const { isRTL } = useLanguage();

  return {
    isDark,
    isRTL,
    bgClass: getBgClass,
    textClass: getTextClass,
    borderClass: getBorderClass,
    cardClass: getCardClass,
    buttonClass: getButtonClass,
    inputClass: getInputClass,
  };
};

/**
 * Create theme-aware className string
 * @param darkClasses - Classes for dark mode
 * @param lightClasses - Classes for light mode
 * @param isRTL - Whether RTL is enabled
 */
export const createThemeClass = (
  darkClasses: string,
  lightClasses: string,
  isRTL: boolean = false
): string => {
  const themeClass = `dark:${darkClasses.split(" ").join(" dark:")} ${lightClasses}`;
  const dirClass = isRTL ? "rtl" : "ltr";
  return cn(themeClass, dirClass);
};

/**
 * Create conditional theme value (for non-Tailwind styles)
 */
export const useThemeValue = <T,>(darkValue: T, lightValue: T): T => {
  const { isDark } = useAppTheme();
  return isDark ? darkValue : lightValue;
};

/**
 * Mantine paper/card theme aware styles
 */
export const getMantinePaperStyles = (isDark: boolean) => ({
  p: "lg",
  radius: "md",
  className: cn(
    "transition-all duration-200",
    isDark
      ? "bg-gray-900 border border-gray-800"
      : "bg-white border border-gray-200"
  ),
});

/**
 * Mantine text theme aware styles
 */
export const getMantineTextStyles = (isDark: boolean) => ({
  c: isDark ? "gray.100" : "gray.900",
});
