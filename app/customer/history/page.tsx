"use client";

import React from "react";
import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Table,
  Badge,
  Button,
} from "@mantine/core";
import Link from "next/link";

export default function ServiceHistoryUI() {
  // Hardcoded service history data
  const history = [
    {
      id: "1",
      createdAt: new Date("2026-01-20T10:30:00"),
      serviceType: "car_mechanic",
      location: "Gulshan-e-Iqbal, Karachi",
      helperName: "Ali Khan",
      status: "completed",
    },
    {
      id: "2",
      createdAt: new Date("2026-01-21T14:45:00"),
      serviceType: "bike_mechanic",
      location: "DHA Phase 5, Karachi",
      helperName: "Sara Ahmed",
      status: "pending",
    },
    {
      id: "3",
      createdAt: new Date("2026-01-22T09:15:00"),
      serviceType: "towing",
      location: "Clifton, Karachi",
      helperName: "Usman Ali",
      status: "in_progress",
    },
  ];

  return (
    <Box className="p-4 md:p-8">
      <Stack gap="xl">
        <Box>
          <Title order={1} className="text-3xl font-bold">
            Service History
          </Title>
          <Text c="dimmed">Track all your past help requests.</Text>
        </Box>

        {history.length === 0 ? (
          <Paper
            p="xl"
            radius="xl"
            withBorder
            py={60}
            className="text-center bg-slate-50 border-dashed"
          >
            <Text c="dimmed">You haven&apos;t made any requests yet.</Text>
            <Button mt="md" component={Link} href="/client/request-help">
              Get Help Now
            </Button>
          </Paper>
        ) : (
          <Paper p="md" radius="xl" withBorder className="overflow-hidden">
            <Table highlightOnHover verticalSpacing="md" horizontalSpacing="lg">
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Date</Table.Th>
                  <Table.Th>Service</Table.Th>
                  <Table.Th>Helper</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {history.map((req) => (
                  <Table.Tr key={req.id}>
                    {/* Date */}
                    <Table.Td>
                      <Text size="sm">
                        {req.createdAt.toLocaleDateString()}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {req.createdAt.toLocaleTimeString()}
                      </Text>
                    </Table.Td>

                    {/* Service */}
                    <Table.Td>
                      <Text size="sm" fw={600} tt="capitalize">
                        {req.serviceType.replace("_", " ")}
                      </Text>
                      <Text size="xs" c="dimmed" lineClamp={1}>
                        {req.location}
                      </Text>
                    </Table.Td>

                    {/* Helper */}
                    <Table.Td>
                      <Text size="sm">{req.helperName}</Text>
                    </Table.Td>

                    {/* Status */}
                    <Table.Td>
                      <Badge
                        variant="light"
                        color={
                          req.status === "completed"
                            ? "green"
                            : req.status === "pending"
                              ? "orange"
                              : "blue"
                        }
                      >
                        {req.status.replace("_", " ")}
                      </Badge>
                    </Table.Td>

                    {/* Action */}
                    <Table.Td>
                      <Button
                        variant="subtle"
                        size="xs"
                        component={Link}
                        href={`/client/request-status?id=${req.id}`}
                      >
                        View
                      </Button>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Paper>
        )}
      </Stack>
    </Box>
  );
}
