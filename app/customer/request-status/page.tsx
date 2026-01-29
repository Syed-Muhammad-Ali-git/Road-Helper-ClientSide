"use client";

import React, { useEffect, useState } from "react";
import {
  Title,
  Text,
  Paper,
  Stack,
  Box,
  Group,
  Button,
  Badge,
  Loader,
  Avatar,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconEye,
} from "@tabler/icons-react";
import Link from "next/link";

/* ---------------- TYPES ---------------- */

interface Request {
  id: string;
  serviceType: string;
  status: string;
  helperName: string | null;
  createdAt: Date;
}

/* ---------------- MOCK DATA ---------------- */

const MOCK_REQUESTS: Request[] = [
  {
    id: "REQ-123",
    serviceType: "car_battery",
    status: "completed",
    helperName: "Ahmed Khan",
    createdAt: new Date(),
  },
  {
    id: "REQ-124",
    serviceType: "tire_change",
    status: "in_progress",
    helperName: "Bilal Ahmed",
    createdAt: new Date(),
  },
  {
    id: "REQ-125",
    serviceType: "jump_start",
    status: "pending",
    helperName: null,
    createdAt: new Date(),
  },
];

export default function RequestStatusList() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FAKE FETCH ---------------- */
  useEffect(() => {
    setTimeout(() => {
      setRequests(MOCK_REQUESTS);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <Box className="p-8 text-center">
        <Loader size="xl" />
      </Box>
    );
  }

  return (
    <Box className="p-4 md:p-8 max-w-4xl mx-auto">
      <Stack gap="xl">
        <Group>
          <Button
            variant="subtle"
            leftSection={<IconArrowLeft size={16} />}
            component={Link}
            href="/customer/dashboard"
          >
            Dashboard
          </Button>
          <Title order={1}>My Requests</Title>
        </Group>

        {requests.length === 0 ? (
          <Paper p="xl" radius="xl" withBorder className="text-center">
            <Text>No requests found.</Text>
          </Paper>
        ) : (
          <Stack gap="md">
            {requests.map((request) => (
              <Paper key={request.id} p="lg" radius="lg" withBorder>
                <Group justify="space-between" align="center">
                  <Group>
                    <Avatar size="lg">
                      {request.helperName ? request.helperName.charAt(0) : "?"}
                    </Avatar>
                    <Box>
                      <Text fw={700}>{request.serviceType.replace("_", " ").toUpperCase()}</Text>
                      <Text size="sm" c="dimmed">
                        ID: {request.id} | Status: {request.status.replace("_", " ")}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {request.createdAt.toLocaleDateString()}
                      </Text>
                    </Box>
                  </Group>
                  <Group>
                    <Badge color={request.status === "completed" ? "green" : request.status === "in_progress" ? "blue" : "yellow"}>
                      {request.status.replace("_", " ").toUpperCase()}
                    </Badge>
                    <Button
                      variant="light"
                      leftSection={<IconEye size={16} />}
                      component={Link}
                      href={`/customer/request-status/${request.id}`}
                    >
                      View Details
                    </Button>
                  </Group>
                </Group>
              </Paper>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
