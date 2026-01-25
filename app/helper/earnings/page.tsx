"use client";

import React from "react";
import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Group,
  SimpleGrid,
  ThemeIcon,
  Table,
  Badge,
} from "@mantine/core";
import { IconWallet, IconTrendingUp, IconChecklist } from "@tabler/icons-react";

export default function EarningsUI() {
  // Hardcoded data
  const earnings = [
    {
      id: "1",
      clientName: "Ali Khan",
      serviceType: "car_mechanic",
      price: 80,
      completedAt: new Date("2026-01-20T10:30:00"),
    },
    {
      id: "2",
      clientName: "Sara Ahmed",
      serviceType: "bike_mechanic",
      price: 50,
      completedAt: new Date("2026-01-21T14:45:00"),
    },
    {
      id: "3",
      clientName: "Usman Ali",
      serviceType: "towing",
      price: 100,
      completedAt: new Date("2026-01-22T09:15:00"),
    },
  ];

  const totalEarnings = earnings.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box className="p-4 md:p-8">
      <Stack gap="xl">
        <Box>
          <Title order={1} className="text-3xl font-bold">
            Earnings Summary
          </Title>
          <Text c="dimmed">Track your payouts and completed jobs.</Text>
        </Box>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <Paper
            p="xl"
            radius="xl"
            withBorder
            className="bg-green-600 text-white shadow-lg shadow-green-100"
          >
            <Group justify="space-between" mb="sm">
              <ThemeIcon size={48} radius="lg" color="green.4" variant="filled">
                <IconWallet size={24} />
              </ThemeIcon>
              <Badge color="green.8">Total Payout</Badge>
            </Group>
            <Title order={1}>${totalEarnings}</Title>
            <Text size="sm" opacity={0.8}>
              Current Balance
            </Text>
          </Paper>

          <Paper p="xl" radius="xl" withBorder className="bg-white">
            <Group justify="space-between" mb="xs">
              <ThemeIcon size={48} radius="lg" color="blue" variant="light">
                <IconChecklist size={24} />
              </ThemeIcon>
              <Text size="xs" fw={700} c="dimmed">
                COMPLETED
              </Text>
            </Group>
            <Title order={2}>{earnings.length}</Title>
            <Text size="sm" c="dimmed">
              Finished Jobs
            </Text>
          </Paper>

          <Paper p="xl" radius="xl" withBorder className="bg-white">
            <Group justify="space-between" mb="xs">
              <ThemeIcon size={48} radius="lg" color="orange" variant="light">
                <IconTrendingUp size={24} />
              </ThemeIcon>
              <Text size="xs" fw={700} c="dimmed">
                RATING
              </Text>
            </Group>
            <Title order={2}>4.9</Title>
            <Text size="sm" c="dimmed">
              Performance Score
            </Text>
          </Paper>
        </SimpleGrid>

        <Paper
          p="xl"
          radius="xl"
          withBorder
          className="bg-white overflow-hidden"
        >
          <Title order={4} mb="xl">
            Recent Transactions
          </Title>
          <Table verticalSpacing="md" horizontalSpacing="lg">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Date</Table.Th>
                <Table.Th>Client</Table.Th>
                <Table.Th>Service</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Status</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {earnings.map((job) => (
                <Table.Tr key={job.id}>
                  <Table.Td>{job.completedAt.toLocaleDateString()}</Table.Td>
                  <Table.Td>{job.clientName}</Table.Td>
                  <Table.Td>{job.serviceType.replace("_", " ")}</Table.Td>
                  <Table.Td fw={700} c="green.7">
                    ${job.price}
                  </Table.Td>
                  <Table.Td>
                    <Badge color="green" variant="light">
                      PAID
                    </Badge>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Stack>
    </Box>
  );
}
