"use client";

import React from "react";
import { Container, SimpleGrid, Box, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

const stats = [
  {
    value: "50k+",
    label: "ACTIVE USERS",
    color: "from-brand-red to-orange-500",
  },
  {
    value: "15m",
    label: "AVG ARRIVAL TIME",
    color: "from-blue-500 to-indigo-500",
  },
  {
    value: "500+",
    label: "VERIFIED HELPERS",
    color: "from-green-500 to-emerald-500",
  },
  { value: "98%", label: "SUCCESS RATE", color: "from-purple-500 to-pink-500" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-[#050505]">
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
              <Text className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs">
                {stat.label}
              </Text>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
};
