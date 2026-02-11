"use client";

import React, { useMemo } from "react";
import { Container, SimpleGrid, Box, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAppTheme } from "@/app/context/ThemeContext";

export const StatsSection = () => {
  const { dict } = useLanguage();
  const { theme } = useAppTheme();

  const stats = useMemo(
    () => [
      {
        value: "50k+",
        label: dict.stats.active_users,
        color: "from-brand-red to-orange-500",
      },
      {
        value: "15m",
        label: dict.stats.avg_arrival_time,
        color: "from-blue-500 to-indigo-500",
      },
      {
        value: "500+",
        label: dict.stats.verified_helpers,
        color: "from-green-500 to-emerald-500",
      },
      {
        value: "98%",
        label: dict.stats.success_rate,
        color: "from-purple-500 to-pink-500",
      },
    ],
    [dict],
  );

  const isDark = theme === "dark";

  return (
    <section
      className={`py-20 border-y ${isDark ? "border-white/5 bg-[#050505]" : "border-black/5 bg-gray-50"} transition-colors duration-300`}
    >
      <Container size="xl">
        <SimpleGrid cols={{ base: 2, md: 4 }} spacing={40}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <Box className="relative mb-4 inline-block">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${stat.color} opacity-50`}
                />
                <Title
                  className={`text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} tracking-tighter`}
                >
                  {stat.value}
                </Title>
              </Box>
              <Text
                className={`${isDark ? "text-gray-500" : "text-gray-400"} font-black uppercase tracking-[0.3em] text-xs`}
              >
                {stat.label}
              </Text>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};
