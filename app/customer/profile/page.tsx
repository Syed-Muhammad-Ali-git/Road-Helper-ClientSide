"use client";

import React from "react";
import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Avatar,
  TextInput,
  Button,
  Group,
  Divider,
} from "@mantine/core";

import { IconUser, IconPhone, IconMail, IconCamera } from "@tabler/icons-react";

export default function ProfilePage() {
  return (
    <Box className="p-4 md:p-8 max-w-2xl mx-auto">
      <Stack gap="xl">
        <Title order={1}>Your Profile</Title>

        <Paper p="xl" radius="xl" withBorder className="text-center shadow-sm">
          <Box className="relative inline-block mx-auto mb-lg">
            <Avatar size={120} radius="xl" color="blue">
              ali{" "}
            </Avatar>
            <Box className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 cursor-pointer">
              <IconCamera size={20} className="text-blue-600" />
            </Box>
          </Box>
          <Title order={2}>Ali Ahmed</Title>
          <Text c="dimmed">CUSTOMER</Text>
        </Paper>

        <Paper p="xl" radius="xl" withBorder shadow="sm">
          <Stack gap="md">
            <TextInput
              label="Full Name"
              value="Ali Ahmed"
              disabled
              leftSection={<IconUser size={18} />}
            />

            <TextInput
              label="Phone Number"
              value="03001234567"
              disabled
              leftSection={<IconPhone size={18} />}
            />

            <Divider my="md" label="Security" labelPosition="center" />

            <Button variant="light" color="blue" fullWidth h={48} radius="md">
              Change Password
            </Button>
            <Button variant="filled" color="blue" fullWidth h={48} radius="md">
              Update Profile
            </Button>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
