"use client";

import React, { useState } from "react";
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
  LoadingOverlay,
  Paper,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { sendOTPAction, customerLoginAction } from "@/redux/actions/customer-action";
import { motion } from "framer-motion";

const phoneSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const otpSchema = z.object({
  otp: z.string().min(6, "OTP must be 6 digits"),
});

export default function ClientLoginPage() {
  const [otpSent, setOtpSent] = useState(false);
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.customer.loading);

  const phoneForm = useForm({
    initialValues: { phone: "" },
    validate: zodResolver(phoneSchema),
  });

  const otpForm = useForm({
    initialValues: { otp: "" },
    validate: zodResolver(otpSchema),
  });

  const handleSendOTP = async (values: typeof phoneForm.values) => {
    try {
      await dispatch(sendOTPAction(values.phone));
      setOtpSent(true);
      toast.success("OTP sent to your phone!");
    } catch (err: any) {
      toast.error(err.message || "Failed to send OTP");
    }
  };

  const handleConfirmOTP = async (values: typeof otpForm.values) => {
    try {
      await dispatch(customerLoginAction(values.otp));
      toast.success("Welcome! Login successful.");
      router.replace("/client/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Invalid OTP");
    }
  };

  return (
    <Box className="min-h-screen flex bg-slate-50">
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
            h="100%"
            w="100%"
            fit="cover"
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

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex items-center justify-center p-8 bg-white lg:rounded-l-[60px] shadow-2xl z-20 relative"
      >
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ blur: 2 }} />

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

          {!otpSent ? (
            <form onSubmit={phoneForm.onSubmit(handleSendOTP)}>
              <Stack gap="lg">
                <TextInput
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  required
                  size="lg"
                  radius="md"
                  {...phoneForm.getInputProps("phone")}
                />
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  radius="md"
                  className="bg-blue-600 h-14"
                >
                  Send OTP
                </Button>
              </Stack>
            </form>
          ) : (
            <form onSubmit={otpForm.onSubmit(handleConfirmOTP)}>
              <Stack gap="lg">
                <TextInput
                  label="OTP"
                  placeholder="Enter 6-digit OTP"
                  required
                  size="lg"
                  radius="md"
                  {...otpForm.getInputProps("otp")}
                />
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  radius="md"
                  className="bg-blue-600 h-14"
                >
                  Confirm OTP
                </Button>
                <Button
                  variant="subtle"
                  fullWidth
                  size="lg"
                  radius="md"
                  onClick={() => setOtpSent(false)}
                >
                  Resend OTP
                </Button>
              </Stack>
            </form>
          )}

          <Text
            ta="center"
            mt="xl"
            size="xs"
            c="dimmed"
            className="uppercase font-bold tracking-widest"
          >
            SECURE LOGGED-IN SESSION
          </Text>
          <div id="recaptcha-container"></div>
        </Container>
      </motion.div>
    </Box>
  );
}
