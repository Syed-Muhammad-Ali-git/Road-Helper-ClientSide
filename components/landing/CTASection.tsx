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

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-red/5" />

      <Container size="xl">
        <Box className="relative glass-dark p-12 md:p-24 rounded-[48px] border-2 border-brand-red/20 shadow-3xl overflow-hidden">
          {/* Animated Background Gradients */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-red/30 blur-[120px] rounded-full"
          />

          <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={60} align="center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Text className="text-brand-red font-black uppercase tracking-[0.4em] text-[10px] mb-6">
                Take Control
              </Text>
              <Title className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-8">
                Ready for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">
                  Peace of Mind?
                </span>
              </Title>
              <Text className="text-gray-400 text-xl font-medium mb-12 max-w-lg leading-relaxed">
                Join 50,000+ drivers who rely on RoadHelper for instant,
                verified roadside assistance.
              </Text>

              <Group gap="xl">
                <Link href="/register?type=customer">
                  <Button
                    size="xl"
                    className="bg-brand-red hover:bg-brand-dark-red h-18 px-10 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-brand-red/30 group"
                    rightSection={
                      <IconArrowRight className="group-hover:translate-x-2 transition-transform" />
                    }
                  >
                    GET STARTED NOW
                  </Button>
                </Link>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-brand-black bg-gray-800 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="user"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-brand-black bg-brand-red flex items-center justify-center text-xs font-bold">
                    +50k
                  </div>
                </div>
              </Group>
            </motion.div>

            <SimpleGrid cols={2} spacing={24}>
              {[
                {
                  icon: IconShieldCheck,
                  title: "Secure",
                  desc: "Fully Verified Network",
                },
                { icon: IconClock, title: "Fast", desc: "15 Min Avg Arrival" },
                { icon: IconStar, title: "Rated", desc: "4.9/5 User Rating" },
                {
                  icon: IconArrowRight,
                  title: "Support",
                  desc: "24/7 Hotline",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-dark p-6 rounded-3xl border border-white/5 hover:border-brand-red/20 transition-all group"
                >
                  <item.icon
                    size={32}
                    className="text-brand-red mb-4 group-hover:scale-110 transition-transform"
                  />
                  <Title
                    order={4}
                    className="text-white text-lg font-black mb-1"
                  >
                    {item.title}
                  </Title>
                  <Text className="text-gray-500 text-xs font-bold uppercase tracking-widest">
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
