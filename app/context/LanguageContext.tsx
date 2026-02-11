"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "@/dictionaries/en.json";
import ur from "@/dictionaries/ur.json";

type Language = "en" | "ur";
type Dictionary = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Dictionary;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");
  const [dict, setDict] = useState<Dictionary>(en);

  useEffect(() => {
    const savedLang = localStorage.getItem("rh_lang") as Language;
    if (savedLang === "ur") {
      setLanguageState("ur");
      setDict(ur);
    } else {
      setLanguageState("en");
      setDict(en);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setDict(lang === "ur" ? ur : en);
    localStorage.setItem("rh_lang", lang);
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const isRTL = language === "ur";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dict, isRTL }}>
      <div className={isRTL ? "font-urdu" : "font-satoshi"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
