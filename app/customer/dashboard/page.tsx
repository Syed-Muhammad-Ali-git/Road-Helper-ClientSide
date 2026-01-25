"use client";

import React from "react";
import {
  Title,
  Text,
  SimpleGrid,
  Paper,
  Stack,
  Button,
  Box,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCar,
  IconBike,
  IconDroplet,
  IconTruck,
  IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";

const serviceCategories = [
  {
    title: "Car Mechanic",
    icon: IconCar,
    color: "blue",
    desc: "Breakdown, tire change, jump start",
    id: "car_mechanic",
  },
  {
    title: "Bike Mechanic",
    icon: IconBike,
    color: "orange",
    desc: "Puncture repair, chain help, etc.",
    id: "bike_mechanic",
  },
  {
    title: "Fuel Delivery",
    icon: IconDroplet,
    color: "red",
    desc: "Ran out of gas? We'll bring fuel.",
    id: "fuel_delivery",
  },
  {
    title: "Towing Service",
    icon: IconTruck,
    color: "grape",
    desc: "Safe towing to nearest garage.",
    id: "towing",
  },
];

export default function ClientDashboard() {
  return (
    <Box className="p-4 md:p-8">
      <Stack gap="xl">
        <Box>
          <Title order={1} className="text-3xl font-bold text-slate-800">
            Hello, User 👋
          </Title>
          <Text c="dimmed" size="lg">
            Need roadside assistance? Select a service below.
          </Text>
        </Box>

        <Paper
          p="xl"
          radius="xl"
          bg="blue.6"
          className="relative overflow-hidden"
        >
          <Box className="relative z-10 text-white max-w-md">
            <Title order={2} mb="xs">
              Quick Emergency?
            </Title>
            <Text mb="xl" size="lg" opacity={0.9}>
              Our nearest helpers are just 10-15 minutes away from your current
              location.
            </Text>
            <Button
              variant="white"
              color="blue"
              size="lg"
              radius="md"
              leftSection={<IconMapPin size={20} />}
              component={Link}
              href="/customer/request-help"
            >
              Request Immediate Help
            </Button>
          </Box>
        </Paper>

        <Box>
          <Title order={2} className="text-2xl font-bold text-slate-800 mb-6">
            Services Available
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            {serviceCategories.map((service) => (
              <Paper
                key={service.id}
                withBorder
                p="lg"
                radius="md"
                component={Link}
                href={`/customer/request-help?service=${service.id}`}
                className="hover:shadow-md transition-shadow no-underline"
              >
                <Stack align="center" gap="sm">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color={service.color}
                  >
                    <service.icon size={24} />
                  </ThemeIcon>
                  <Text fw={600} size="lg" c="dark">
                    {service.title}
                  </Text>
                  <Text c="dimmed" size="sm" ta="center">
                    {service.desc}
                  </Text>
                  <Text size="sm" c={service.color} fw={500} mt="sm">
                    Request now →
                  </Text>
                </Stack>
              </Paper>
            ))}
          </SimpleGrid>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Paper p="xl" radius="xl" withBorder>
            <Title order={4} mb="lg">
              Recent Activity
            </Title>
            <Stack gap="md">
              <Text c="dimmed" size="sm" ta="center" py="xl">
                No recent requests found.
              </Text>
            </Stack>
          </Paper>

          <Paper
            p="xl"
            radius="xl"
            withBorder
            className="bg-slate-50 border-dashed"
          >
            <Title order={4} mb="lg">
              Safety Tips
            </Title>
            <Stack gap="sm">
              <Paper
                p="md"
                bg="white"
                radius="md"
                className="border border-slate-100"
              >
                <Text fw={600} size="sm">
                  1. Stay with your vehicle
                </Text>
                <Text size="xs" c="dimmed">
                  Unless it&apos;s unsafe, always stay near your car or bike.
                </Text>
              </Paper>
              <Paper
                p="md"
                bg="white"
                radius="md"
                className="border border-slate-100"
              >
                <Text fw={600} size="sm">
                  2. Use hazard lights
                </Text>
                <Text size="xs" c="dimmed">
                  Signal clearly to other drivers that you are stationary.
                </Text>
              </Paper>
            </Stack>
          </Paper>
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
