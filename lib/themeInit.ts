// This script runs BEFORE React to set theme correctly
export const initializeTheme = () => {
  if (typeof window === "undefined") return;

  const savedTheme = localStorage.getItem("rh_theme") || "dark";
  const savedLang = localStorage.getItem("rh_lang") || "en";

  // Apply theme to HTML and body IMMEDIATELY
  const html = document.documentElement;
  const body = document.body;

  html.setAttribute("data-theme", savedTheme);
  html.classList.remove("light", "dark");
  html.classList.add(savedTheme);

  if (savedTheme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }

  // Apply language direction
  html.dir = savedLang === "ur" ? "rtl" : "ltr";
  html.lang = savedLang;
};

// Run on script load
if (typeof window !== "undefined") {
  initializeTheme();
}
