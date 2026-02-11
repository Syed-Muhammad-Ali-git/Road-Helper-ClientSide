"use client";

import React from "react";
import {
  Container,
  Title,
  Text,
  Button,
  Box,
  SimpleGrid,
  Group,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconArrowRight,
  IconShieldCheck,
  IconClock,
  IconStar,
} from "@tabler/icons-react";
import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAppTheme } from "@/app/context/ThemeContext";

export const CTASection = () => {
  const { dict, isRTL } = useLanguage();
  const { theme } = useAppTheme();

  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? "bg-[#050505]" : "bg-white"}`}
    >
      <div
        className={`absolute inset-0 ${isDark ? "bg-brand-red/5" : "bg-brand-yellow/10"}`}
      />

      <Container size="xl">
        <Box
          className={`relative ${isDark ? "glass-dark border-brand-red/20" : "bg-white border-brand-gold/40"} p-12 md:p-24 rounded-[48px] border-2 shadow-3xl overflow-hidden`}
        >
          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className={`absolute top-[-20%] right-[-10%] w-[60%] h-[60%] ${isDark ? "bg-brand-red/30" : "bg-brand-yellow/40"} blur-[120px] rounded-full`}
          />

          <SimpleGrid
            cols={{ base: 1, lg: 2 }}
            spacing={60}
            className="items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={isRTL ? "text-right" : "text-left"}
            >
              <Text
                className={`font-black uppercase tracking-[0.4em] text-[10px] mb-6 ${isDark ? "text-brand-red" : "text-brand-gold"}`}
              >
                {dict.cta.take_control}
              </Text>
              <Title
                className={`text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-8 ${isDark ? "text-white" : "text-black"}`}
              >
                {dict.cta.ready_for} <br />
                <span
                  className={`text-transparent bg-clip-text ${isDark ? "bg-gradient-to-r from-brand-red to-orange-500" : "bg-gradient-to-r from-brand-yellow to-orange-500"}`}
                >
                  {dict.cta.peace_of_mind}
                </span>
              </Title>
              <Text
                className={`${isDark ? "text-gray-400" : "text-gray-600"} text-xl font-medium mb-12 max-w-lg leading-relaxed`}
              >
                {dict.cta.description}
              </Text>

              <Group
                gap="xl"
                className={isRTL ? "flex-row-reverse" : "flex-row"}
              >
                <Link href="/register?type=customer">
                  <Button
                    size="xl"
                    className={`${isDark ? "bg-brand-red hover:bg-brand-dark-red shadow-brand-red/30" : "bg-brand-yellow hover:bg-brand-gold shadow-brand-yellow/30 text-black"} h-18 px-10 rounded-2xl font-black text-lg transition-all shadow-2xl group`}
                    rightSection={
                      <IconArrowRight
                        className={`group-hover:translate-x-2 transition-transform ${isRTL ? "rotate-180" : ""}`}
                      />
                    }
                  >
                    {dict.cta.get_started}
                  </Button>
                </Link>
                <div
                  className={`flex ${isRTL ? "-space-x-reverse" : ""} -space-x-4`}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`w-12 h-12 rounded-full border-4 ${isDark ? "border-brand-black bg-gray-800" : "border-white bg-gray-100"} flex items-center justify-center overflow-hidden`}
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className={`w-12 h-12 rounded-full border-4 ${isDark ? "border-brand-black bg-brand-red" : "border-white bg-brand-yellow"} flex items-center justify-center text-xs font-bold ${isDark ? "text-white" : "text-black"}`}
                  >
                    +50k
                  </div>
                </div>
              </Group>
            </motion.div>

            <SimpleGrid
              cols={2}
              spacing={24}
              className={isRTL ? "text-right" : "text-left"}
            >
              {[
                {
                  icon: IconShieldCheck,
                  title: dict.cta.secure,
                  desc: dict.cta.secure_desc,
                },
                {
                  icon: IconClock,
                  title: dict.cta.fast,
                  desc: dict.cta.fast_desc,
                },
                {
                  icon: IconStar,
                  title: dict.cta.rated,
                  desc: dict.cta.rated_desc,
                },
                {
                  icon: IconArrowRight,
                  title: dict.cta.support,
                  desc: dict.cta.support_desc,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${isDark ? "glass-dark border-white/5 hover:border-brand-red/20" : "bg-gray-50 border-black/5 hover:border-brand-gold/40 shadow-sm"} p-6 rounded-3xl border transition-all group`}
                >
                  <item.icon
                    size={32}
                    className={`${isDark ? "text-brand-red" : "text-brand-gold"} mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <Title
                    order={4}
                    className={`${isDark ? "text-white" : "text-black"} text-lg font-black mb-1`}
                  >
                    {item.title}
                  </Title>
                  <Text
                    className={`${isDark ? "text-gray-500" : "text-gray-400"} text-xs font-bold uppercase tracking-widest`}
                  >
                    {item.desc}
                  </Text>
                </motion.div>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Box>
      </Container>
    </section>
  );
};
