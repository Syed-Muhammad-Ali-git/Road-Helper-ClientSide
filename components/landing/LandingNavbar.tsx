"use client";

import React, { useState, memo } from "react";
import {
  IconChevronRight,
  IconSun,
  IconMoon,
  IconLanguage,
} from "@tabler/icons-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAppTheme } from "@/app/context/ThemeContext";
import { ActionIcon } from "@mantine/core";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCallback } from "react";
import { Container, Group } from "@mantine/core";
import { Button } from "@mantine/core";
import { Image } from "@mantine/core";
import { Title } from "@mantine/core";
import { Text } from "@mantine/core";
import { Box } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

const LandingNavbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { dict, language, setLanguage, isRTL } = useLanguage();
  const { theme, toggleTheme } = useAppTheme();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const isDark = theme === "dark";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-black/90 backdrop-blur-xl py-3 shadow-lg shadow-brand-yellow/5"
            : "bg-white/90 backdrop-blur-xl py-3 shadow-lg shadow-black/5"
          : "bg-transparent py-6"
      }`}
    >
      <Container
        size="xl"
        className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* LOGO */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-xl shadow-lg shadow-brand-yellow/20 transition-transform group-hover:scale-110 bg-white p-1">
            <Image
              src="/assets/images/logo.png"
              alt="Road Helper Logo"
              className="object-contain"
            />
          </div>
          <span
            className={`font-satoshi font-bold text-xl tracking-tight transition-colors ${isDark ? "text-white" : "text-black"}`}
          >
            Road<span className="text-brand-yellow">Helper</span>
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <Group
          visibleFrom="sm"
          gap="xl"
          className={`hidden md:flex ${isRTL ? "flex-row-reverse" : "flex-row"}`}
        >
          <button
            onClick={() => scrollToSection("features")}
            className={`relative text-sm font-bold ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"} transition-colors cursor-pointer bg-transparent border-none group`}
          >
            <span className="relative z-10">{dict.navbar.features}</span>
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full`}
            ></span>
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className={`relative text-sm font-bold ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"} transition-colors cursor-pointer bg-transparent border-none group`}
          >
            <span className="relative z-10">{dict.navbar.how_it_works}</span>
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full`}
            ></span>
          </button>
          <Link
            href="/about"
            className={`relative text-sm font-bold ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"} transition-colors no-underline group`}
          >
            <span className="relative z-10">{dict.navbar.about}</span>
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full`}
            ></span>
          </Link>
        </Group>

        {/* CONTROLS & AUTH */}
        <Group className={isRTL ? "flex-row-reverse" : "flex-row"}>
          {/* Theme Toggle */}
          <ActionIcon
            variant="subtle"
            size="lg"
            radius="xl"
            onClick={toggleTheme}
            className={`${isDark ? "text-gray-300 hover:text-brand-yellow" : "text-gray-600 hover:text-brand-gold"} transition-colors`}
          >
            {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>

          {/* Language Toggle */}
          <ActionIcon
            variant="subtle"
            size="lg"
            radius="xl"
            onClick={() => setLanguage(language === "en" ? "ur" : "en")}
            className={`${isDark ? "text-gray-300 hover:text-brand-yellow" : "text-gray-600 hover:text-brand-gold"} transition-colors flex items-center gap-1`}
          >
            <IconLanguage size={20} />
            <span className="text-xs font-bold uppercase">
              {language === "en" ? "UR" : "EN"}
            </span>
          </ActionIcon>

          <Link href="/login">
            <Button
              variant="subtle"
              className={`font-manrope text-sm font-bold ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"} hover:bg-black/5 transition-all`}
              radius="xl"
            >
              {dict.navbar.login}
            </Button>
          </Link>
          <Link href="/register">
            <Button
              className="bg-brand-yellow hover:bg-brand-gold text-black transition-all shadow-lg shadow-brand-yellow/20 hover:scale-105 active:scale-95 font-bold"
              radius="xl"
              size="sm"
              rightSection={
                <IconChevronRight
                  size={16}
                  className={isRTL ? "rotate-180" : ""}
                />
              }
            >
              {dict.navbar.register}
            </Button>
          </Link>
        </Group>
      </Container>
    </motion.nav>
  );
};

export default memo(LandingNavbar);
