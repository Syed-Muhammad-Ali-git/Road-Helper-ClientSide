"use client";

import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
  Group,
  Anchor,
  Stack,
  Box,
  Image,
  LoadingOverlay,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { motion } from "framer-motion";

const helperSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function HelperLoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    initialValues: { email: "", password: "" },
    validate: zodResolver(helperSchema),
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      // Simulate login verification - in real app, verify with backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      // Mock user data for localStorage
      const userData = {
        uid: "mock-uid-" + Date.now(),
        email: values.email,
        role: "helper",
        fullName: "",
        serviceType: "",
        isOnline: false,
        rating: 0,
        totalJobs: 0,
        isVerified: false,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("auth-token", "mock-token-" + Date.now());

      toast.success("Helper login successful.");
      router.replace("/helper/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Invalid helper credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box className="min-h-screen flex bg-slate-50">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-8 bg-white lg:rounded-r-[60px] shadow-2xl z-20 relative order-2 lg:order-1"
      >
        <LoadingOverlay
          visible={loading}
          zIndex={1000}
          overlayProps={{ blur: 2 }}
        />

        <Container size={420} className="w-full">
          <Box className="mb-8">
            <Group gap="xs" mb="lg">
              <Box className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
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
              Helper Login
            </Title>
          </Box>

          <Paper p="xs" radius="xl" bg="slate.0" mb="xl">
            <Text ta="center" fw={600} c="indigo.6">
              Login with Email & Password
            </Text>
          </Paper>

          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="lg">
              <TextInput
                label="Email Address"
                placeholder="helper@example.com"
                required
                size="lg"
                radius="md"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="••••••••"
                required
                size="lg"
                radius="md"
                {...form.getInputProps("password")}
              />
              <Button
                type="submit"
                fullWidth
                size="lg"
                radius="md"
                className="bg-indigo-600 h-14"
              >
                Helper Sign In
              </Button>
              <Text size="sm" ta="center">
                New helper?{" "}
                <Anchor component={Link} href="/register" fw={700}>
                  Register Here
                </Anchor>
              </Text>
              <Text ta="center" mt="md" size="sm">
                Are you a client?{" "}
                <Anchor component={Link} href="/customer/login" fw={700}>
                  Login as Client
                </Anchor>
              </Text>
            </Stack>
          </form>

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

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex flex-1 relative overflow-hidden bg-[#1E293B] items-center justify-center p-12 order-1 lg:order-2"
      >
        <Box className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Image
            src="/assets/images/logo.jpg"
            alt="Background"
            h="100%"
            w="100%"
            fit="cover"
          />
        </Box>
        <Stack align="center" gap="xl" className="z-10 text-white text-center">
          <Title
            order={1}
            className="text-5xl font-black tracking-tight leading-tight"
          >
            Join Our <br />{" "}
            <span className="text-red-500">Service Network</span>
          </Title>
          <Text className="text-xl text-slate-300 max-w-md">
            Help travelers in need and grow your business with Road Helper.
          </Text>
        </Stack>
      </motion.div>
    </Box>
  );
}
