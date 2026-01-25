"use client";

import React from "react";
import {
  TextInput,
  Button,
  Title,
  Text,
  Container,
  Group,
  Anchor,
  Stack,
  Box,
  Image,
  Paper,
  LoadingOverlay,
} from "@mantine/core";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientLoginPageUI() {
  return (
    <Box className="min-h-screen flex bg-slate-50">
      {/* Left Hero Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex flex-1 relative overflow-hidden bg-[#1a237e] items-center justify-center p-12"
      >
        <Box className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <Image
            src="/assets/images/ui-design.jpg"
            alt="Background"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Stack align="center" gap="xl" className="z-10 text-white text-center">
          <Title
            order={1}
            className="text-6xl font-black tracking-tight leading-tight"
          >
            Your Roadside <br /> <span className="text-blue-400">Guardian</span>
          </Title>
          <Text className="text-xl text-slate-300 max-w-md font-medium">
            Instant assistance for car and bike emergencies.
          </Text>
        </Stack>
      </motion.div>

      {/* Right Login Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-8 bg-white lg:rounded-l-[60px] shadow-2xl z-20 relative"
      >
        <Container size={420} className="w-full">
          <Box className="mb-8">
            <Group gap="xs" mb="lg">
              <Box className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Text fw={900} c="white">
                  RH
                </Text>
              </Box>
              <Text fw={900} size="xl" className="tracking-tighter">
                ROAD HELPER
              </Text>
            </Group>
            <Title
              order={2}
              className="text-3xl font-black text-slate-800 tracking-tight"
            >
              Client Login
            </Title>
          </Box>

          <Paper p="xs" radius="xl" bg="slate.0" mb="xl">
            <Text ta="center" fw={600} c="blue.6">
              Login with Phone Number
            </Text>
          </Paper>

          {/* Static Phone Input */}
          <Stack gap="lg">
            <TextInput
              label="Phone Number"
              placeholder="+92 300 0000000"
              size="lg"
              radius="md"
              disabled
            />
            <Button
              fullWidth
              size="lg"
              radius="md"
              className="bg-blue-600 h-14"
            >
              Send OTP
            </Button>
          </Stack>

          {/* OTP Input Section (Static) */}
          <Stack gap="lg" mt="xl">
            <TextInput
              label="OTP"
              placeholder="Enter 6-digit OTP"
              size="lg"
              radius="md"
              disabled
            />
            <Button
              fullWidth
              size="lg"
              radius="md"
              className="bg-blue-600 h-14"
            >
              Confirm OTP
            </Button>
            <Button variant="subtle" fullWidth size="lg" radius="md">
              Resend OTP
            </Button>
          </Stack>

          <Text ta="center" mt="md" size="sm">
            Are you a helper?{" "}
            <Anchor component={Link} href="/helper/login" fw={700}>
              Login as Helper
            </Anchor>
          </Text>

          <Text
            ta="center"
            mt="xl"
            size="xs"
            c="dimmed"
            className="uppercase font-bold tracking-widest"
          >
            SECURE LOGGED-IN SESSION
          </Text>
        </Container>
      </motion.div>
    </Box>
  );
}
