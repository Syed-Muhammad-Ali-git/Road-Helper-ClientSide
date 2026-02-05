"use client";

import React from "react";
import {
  Title,
  Text,
  Paper,
  Group,
  Button,
  Badge,
  Avatar,
  Box,
  Divider,
  SimpleGrid,
  ThemeIcon,
  Timeline,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconMapPin,
  IconClock,
  IconPhone,
  IconMail,
  IconCar,
  IconCreditCard,
  IconCheck,
  IconUser,
  IconAlertCircle,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function RequestDetailPage() {
  const params = useParams();
  const requestId = params.id;

  // Mock Data for Detail View
  const requestData = {
    id: requestId,
    user: {
      name: "Ali Raza",
      phone: "+92 300 1234567",
      email: "ali@gmail.com",
      image: null,
    },
    helper: {
      name: "Ahmed Khan",
      phone: "+92 321 7654321",
      email: "ahmed@helper.com",
      rating: 4.8,
      image: null,
    },
    service: {
      type: "Towing Service",
      description:
        "Car broke down near Liberty Market, need towing to Johar Town.",
      status: "In Progress",
      startTime: "10:30 AM",
      estimatedEnd: "11:15 AM",
    },
    location: {
      address: "Gulberg III, Lahore, Pakistan",
      lat: 31.5204,
      lng: 74.3587,
    },
    payment: {
      total: 4500,
      platformFee: 900, // 20%
      status: "Paid",
      method: "Cash",
    },
  };

  return (
    <Box className="p-4 md:p-8 min-h-screen font-satoshi bg-brand-black text-white">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Group mb="lg">
          <Button
            component={Link}
            href="/admin/requests"
            variant="subtle"
            color="gray"
            leftSection={<IconArrowLeft size={18} />}
            className="hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            Back to Requests
          </Button>
        </Group>

        <Group justify="space-between" mb="xl" align="flex-start">
          <div>
            <Group gap="sm" mb="xs">
              <Title className="font-manrope text-3xl font-bold text-white">
                Request #{requestId}
              </Title>
              <Badge size="lg" variant="light" color="blue" className="ml-2">
                {requestData.service.status}
              </Badge>
            </Group>
            <Text className="text-gray-400">
              Created on Feb 12, 2026 at 10:30 AM
            </Text>
          </div>
          <Group>
            <Button
              variant="default"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10"
            >
              Cancel Request
            </Button>
            <Button className="bg-brand-red hover:bg-brand-dark-red text-white">
              Download Invoice
            </Button>
          </Group>
        </Group>

        <SimpleGrid cols={{ base: 1, lg: 3 }} spacing="lg">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* User & Helper Info */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
              <Paper
                p="lg"
                radius="xl"
                className="glass-dark border border-white/10"
              >
                <Group mb="md">
                  <IconUser className="text-brand-red" />
                  <Text fw={700} className="text-white">
                    Customer Details
                  </Text>
                </Group>
                <Group mb="md">
                  <Avatar size="lg" color="red" radius="xl">
                    {requestData.user.name[0]}
                  </Avatar>
                  <div>
                    <Text fw={600} className="text-white">
                      {requestData.user.name}
                    </Text>
                    <Text size="sm" className="text-gray-400">
                      Customer
                    </Text>
                  </div>
                </Group>
                <Divider color="dark.6" mb="md" />
                <div className="space-y-3">
                  <Group gap="sm">
                    <IconPhone size={16} className="text-gray-500" />
                    <Text size="sm" className="text-gray-300">
                      {requestData.user.phone}
                    </Text>
                  </Group>
                  <Group gap="sm">
                    <IconMail size={16} className="text-gray-500" />
                    <Text size="sm" className="text-gray-300">
                      {requestData.user.email}
                    </Text>
                  </Group>
                </div>
              </Paper>

              <Paper
                p="lg"
                radius="xl"
                className="glass-dark border border-white/10"
              >
                <Group mb="md">
                  <IconUser className="text-emerald-500" />
                  <Text fw={700} className="text-white">
                    Helper Details
                  </Text>
                </Group>
                <Group mb="md">
                  <Avatar size="lg" color="green" radius="xl">
                    {requestData.helper.name[0]}
                  </Avatar>
                  <div>
                    <Text fw={600} className="text-white">
                      {requestData.helper.name}
                    </Text>
                    <Group gap="xs">
                      <Text size="sm" className="text-gray-400">
                        Mechanic
                      </Text>
                      <Badge size="xs" color="yellow" variant="dot">
                        4.8 ★
                      </Badge>
                    </Group>
                  </div>
                </Group>
                <Divider color="dark.6" mb="md" />
                <div className="space-y-3">
                  <Group gap="sm">
                    <IconPhone size={16} className="text-gray-500" />
                    <Text size="sm" className="text-gray-300">
                      {requestData.helper.phone}
                    </Text>
                  </Group>
                  <Group gap="sm">
                    <IconMail size={16} className="text-gray-500" />
                    <Text size="sm" className="text-gray-300">
                      {requestData.helper.email}
                    </Text>
                  </Group>
                </div>
              </Paper>
            </SimpleGrid>

            {/* Service Details */}
            <Paper
              p="lg"
              radius="xl"
              className="glass-dark border border-white/10"
            >
              <Title order={4} className="text-white mb-6">
                Service Information
              </Title>
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                <div>
                  <Text
                    size="xs"
                    className="text-gray-500 uppercase font-bold mb-1"
                  >
                    Service Type
                  </Text>
                  <Group gap="xs" mb="md">
                    <IconCar size={20} className="text-blue-400" />
                    <Text className="text-white text-lg font-medium">
                      {requestData.service.type}
                    </Text>
                  </Group>

                  <Text
                    size="xs"
                    className="text-gray-500 uppercase font-bold mb-1"
                  >
                    Description
                  </Text>
                  <Text className="text-gray-300 mb-md">
                    {requestData.service.description}
                  </Text>
                </div>
                <div>
                  <Text
                    size="xs"
                    className="text-gray-500 uppercase font-bold mb-1"
                  >
                    Location
                  </Text>
                  <Group gap="xs" mb="lg">
                    <IconMapPin size={20} className="text-brand-red" />
                    <Text className="text-white">
                      {requestData.location.address}
                    </Text>
                  </Group>
                </div>
              </SimpleGrid>
            </Paper>
          </div>

          {/* Right Column: Timeline & Payment */}
          <div className="space-y-6">
            <Paper
              p="lg"
              radius="xl"
              className="glass-dark border border-white/10"
            >
              <Title order={4} className="text-white mb-6">
                Timeline
              </Title>
              <Timeline active={1} bulletSize={24} lineWidth={2} color="red">
                <Timeline.Item
                  bullet={<IconCheck size={12} />}
                  title="Request Created"
                >
                  <Text c="dimmed" size="xs">
                    10:30 AM
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconUser size={12} />}
                  title="Helper Assigned"
                >
                  <Text c="dimmed" size="xs">
                    10:35 AM
                  </Text>
                </Timeline.Item>
                <Timeline.Item
                  bullet={<IconCar size={12} />}
                  title="Helper Arrived"
                  lineVariant="dashed"
                >
                  <Text c="dimmed" size="xs">
                    10:50 AM
                  </Text>
                </Timeline.Item>
                <Timeline.Item title="Service Completed">
                  <Text c="dimmed" size="xs">
                    Estimated 11:15 AM
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Paper>

            <Paper
              p="lg"
              radius="xl"
              className="bg-gradient-to-br from-brand-charcoal to-brand-black border border-white/10"
            >
              <Title order={4} className="text-white mb-4">
                Payment Summary
              </Title>

              <Group justify="space-between" mb="xs">
                <Text className="text-gray-400">Service Fee</Text>
                <Text className="text-white font-medium">
                  Rs {requestData.payment.total}
                </Text>
              </Group>
              <Group justify="space-between" mb="md">
                <Text className="text-gray-400">Payment Method</Text>
                <Badge variant="outline" color="gray">
                  Cash
                </Badge>
              </Group>

              <Divider color="dark.6" mb="md" />

              <Paper
                p="md"
                radius="lg"
                className="bg-white/5 border border-emerald-500/20 mb-2"
              >
                <Group justify="space-between">
                  <Group gap="xs">
                    <IconAlertCircle size={16} className="text-emerald-400" />
                    <Text size="sm" className="text-emerald-400 font-bold">
                      Platform Fee (20%)
                    </Text>
                  </Group>
                  <Text className="text-emerald-300 font-bold">
                    Rs {requestData.payment.platformFee}
                  </Text>
                </Group>
              </Paper>
              <Text size="xs" className="text-center text-gray-500">
                Commission is deducted from Helper's wallet
              </Text>
            </Paper>
          </div>
        </SimpleGrid>
      </motion.div>
    </Box>
  );
}
