"use client";

import React, { useState } from "react";
import {
  Title,
  Text,
  Paper,
  Group,
  TextInput,
  Button,
  Table,
  Avatar,
  Badge,
  ActionIcon,
  Menu,
  Pagination,
  Modal,
  Box,
  SimpleGrid,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSearch,
  IconPlus,
  IconDotsVertical,
  IconEdit,
  IconTrash,
  IconBan,
  IconFilter,
  IconDownload,
  IconUserPlus,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const initialUsers = [
  {
    id: 1,
    name: "Ali Raza",
    email: "ali@gmail.com",
    role: "Customer",
    status: "Active",
    lastActive: "2 mins ago",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    email: "ahmed@helper.com",
    role: "Helper",
    status: "Active",
    lastActive: "1 hour ago",
  },
  {
    id: 3,
    name: "Sara Smith",
    email: "sara@gmail.com",
    role: "Customer",
    status: "Inactive",
    lastActive: "3 days ago",
  },
  {
    id: 4,
    name: "Mike T.",
    email: "mike@mechanic.com",
    role: "Helper",
    status: "Suspended",
    lastActive: "1 week ago",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john@doe.com",
    role: "Customer",
    status: "Active",
    lastActive: "5 mins ago",
  },
];

export default function UsersPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [users, setUsers] = useState(initialUsers);

  return (
    <Box className="p-4 md:p-8 min-h-screen font-satoshi bg-brand-black text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Group justify="space-between" mb="lg">
          <div>
            <Title className="font-manrope text-3xl font-bold text-white mb-1">
              User Management
            </Title>
            <Text className="text-gray-400">
              Manage customers, helpers, and verification status.
            </Text>
          </div>
          <Group>
            <Button
              variant="outline"
              color="gray"
              leftSection={<IconDownload size={18} />}
              className="text-gray-300 border-gray-700 hover:bg-gray-800"
            >
              Export
            </Button>
            <Button
              className="bg-brand-red hover:bg-brand-dark-red text-white"
              leftSection={<IconPlus size={18} />}
              onClick={open}
            >
              Add New User
            </Button>
          </Group>
        </Group>

        <Paper
          p="lg"
          radius="xl"
          className="glass-dark border border-white/10 overflow-hidden"
        >
          {/* Toolbar */}
          <Group justify="space-between" mb="md">
            <TextInput
              placeholder="Search users..."
              leftSection={<IconSearch size={16} />}
              className="w-full md:w-80"
              styles={{
                input: {
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderColor: "rgba(255,255,255,0.1)",
                  color: "white",
                  "&:focus": {
                    borderColor: "#EF4444",
                  },
                },
              }}
            />
            <Group gap="xs">
              <Button
                variant="default"
                leftSection={<IconFilter size={16} />}
                className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              >
                Filter
              </Button>
              <Button
                variant="default"
                className="bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
              >
                Sort By: Newest
              </Button>
            </Group>
          </Group>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table verticalSpacing="sm" className="text-gray-200">
              <Table.Thead className="bg-white/5">
                <Table.Tr>
                  <Table.Th>User Info</Table.Th>
                  <Table.Th>Role</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Last Active</Table.Th>
                  <Table.Th className="text-right">Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {users.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <Table.Td>
                      <Group gap="sm">
                        <Avatar
                          src={null}
                          alt={user.name}
                          radius="xl"
                          color="red"
                          className="bg-gradient-to-br from-brand-red to-brand-dark-red text-white font-bold"
                        >
                          {user.name[0]}
                        </Avatar>
                        <div>
                          <Text size="sm" fw={600} className="text-white">
                            {user.name}
                          </Text>
                          <Text size="xs" className="text-gray-400">
                            {user.email}
                          </Text>
                        </div>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        variant="dot"
                        size="lg"
                        className="bg-transparent pl-0 text-gray-300"
                      >
                        {user.role}
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Badge
                        color={
                          user.status === "Active"
                            ? "green"
                            : user.status === "Suspended"
                              ? "red"
                              : "gray"
                        }
                        variant="light"
                        className="capitalize"
                      >
                        {user.status}
                      </Badge>
                    </Table.Td>
                    <Table.Td className="text-gray-400 text-sm">
                      {user.lastActive}
                    </Table.Td>
                    <Table.Td className="text-right">
                      <Menu shadow="md" width={200} position="bottom-end">
                        <Menu.Target>
                          <ActionIcon
                            variant="subtle"
                            color="gray"
                            className="hover:bg-white/10"
                          >
                            <IconDotsVertical size={18} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown className="bg-[#18181B] border-[#27272A]">
                          <Menu.Item
                            leftSection={<IconEdit size={14} />}
                            className="text-gray-300 hover:bg-white/5"
                          >
                            Edit Details
                          </Menu.Item>
                          <Menu.Item
                            leftSection={<IconBan size={14} />}
                            color="orange"
                            className="hover:bg-orange-500/10"
                          >
                            Suspend User
                          </Menu.Item>
                          <Menu.Divider className="border-gray-700" />
                          <Menu.Item
                            leftSection={<IconTrash size={14} />}
                            color="red"
                            className="hover:bg-red-500/10"
                          >
                            Delete User
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>
                    </Table.Td>
                  </motion.tr>
                ))}
              </Table.Tbody>
            </Table>
          </div>

          {/* Pagination */}
          <Group justify="end" mt="lg">
            <Pagination
              total={10}
              color="red"
              classNames={{
                control:
                  "bg-white/5 border-white/10 text-gray-300 data-[active=true]:bg-brand-red",
              }}
            />
          </Group>
        </Paper>
      </motion.div>

      {/* Add User Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title={<Text className="text-white font-bold">Add New User</Text>}
        centered
        classNames={{
          content: "bg-[#18181B] border border-white/10",
          header: "bg-[#18181B] border-b border-white/10",
          close: "text-gray-400 hover:bg-white/10 text-white",
        }}
        overlayProps={{
          blur: 3,
          backgroundOpacity: 0.55,
        }}
      >
        <div className="grid gap-4">
          <SimpleGrid cols={2}>
            <TextInput
              label="First Name"
              placeholder="John"
              classNames={{
                label: "text-gray-400 mb-1",
                input: "bg-white/5 border-white/10 text-white",
              }}
            />
            <TextInput
              label="Last Name"
              placeholder="Doe"
              classNames={{
                label: "text-gray-400 mb-1",
                input: "bg-white/5 border-white/10 text-white",
              }}
            />
          </SimpleGrid>
          <TextInput
            label="Email"
            placeholder="john@example.com"
            classNames={{
              label: "text-gray-400 mb-1",
              input: "bg-white/5 border-white/10 text-white",
            }}
          />
          <Select
            label="Role"
            placeholder="Select Role"
            data={["Customer", "Helper", "Admin"]}
            classNames={{
              label: "text-gray-400 mb-1",
              input: "bg-white/5 border-white/10 text-white",
              dropdown: "bg-[#18181B] border border-white/10 text-white",
              option: "hover:bg-white/10",
            }}
          />
          <TextInput
            label="Phone"
            placeholder="+92 300 0000000"
            classNames={{
              label: "text-gray-400 mb-1",
              input: "bg-white/5 border-white/10 text-white",
            }}
          />
          <Button
            fullWidth
            className="bg-brand-red hover:bg-brand-dark-red mt-4"
            leftSection={<IconUserPlus size={18} />}
          >
            Create User
          </Button>
        </div>
      </Modal>
    </Box>
  );
}
