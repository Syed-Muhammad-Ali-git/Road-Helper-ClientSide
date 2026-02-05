"use client";

import React from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  IconLayoutDashboard,
  IconUsers,
  IconSettings,
  IconLogout,
  IconMenu2,
  IconX,
  IconReceipt,
  IconActivity,
  IconUser,
  IconList,
  IconHistory,
  IconWallet,
  IconHelp,
  IconBell,
} from "@tabler/icons-react";
import logo from "@/app/assets/images/logo.png";
import { motion } from "framer-motion";

interface SideBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const drawerWidth = 260;
const collapsedWidth = 70;

// Navigation Configurations
const adminItems = [
  { text: "Overview", icon: IconLayoutDashboard, path: "/admin/dashboard" },
  { text: "Users", icon: IconUsers, path: "/admin/users" },
  { text: "Requests", icon: IconReceipt, path: "/admin/requests" },
  { text: "Status", icon: IconActivity, path: "/admin/status" },
  { text: "Settings", icon: IconSettings, path: "/admin/settings" },
];

const customerItems = [
  { text: "Dashboard", icon: IconLayoutDashboard, path: "/customer/dashboard" },
  { text: "Profile", icon: IconUser, path: "/customer/profile" },
  { text: "History", icon: IconHistory, path: "/customer/history" },
  { text: "Help", icon: IconHelp, path: "/customer/help" },
];

const helperItems = [
  { text: "Dashboard", icon: IconLayoutDashboard, path: "/helper/dashboard" },
  { text: "Requests", icon: IconList, path: "/helper/requests" }, // Changed IconBriefcase to IconList
  { text: "Earnings", icon: IconWallet, path: "/helper/earnings" },
  { text: "Profile", icon: IconUser, path: "/helper/profile" },
];

const AdminSideBar = ({ open, setOpen }: SideBarProps) => {
  const router = useRouter();
  const theme = useTheme();
  const pathname = usePathname();
  // MUI useMediaQuery
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Check which role menus to show
  let menuItems = customerItems;
  if (pathname.includes("/admin")) {
    menuItems = adminItems;
  } else if (pathname.includes("/helper")) {
    menuItems = helperItems;
  }

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "#09090b", // brand-black
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          height: 80,
        }}
      >
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-3"
          >
            <Image
              src={logo}
              alt="Road Helper"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="font-manrope font-bold text-lg tracking-tight text-white">
              Road<span className="text-brand-red">Helper</span>
            </span>
          </motion.div>
        ) : (
          <Image src={logo} alt="Logo" width={32} height={32} />
        )}

        {/* Toggle Button Inside Drawer */}
        {open && (
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ color: "grey.500", display: isMobile ? "block" : "flex" }}
          >
            {isMobile ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </IconButton>
        )}
      </Box>

      {/* Navigation List */}
      <List sx={{ px: 2, flexGrow: 1 }}>
        {menuItems.map((item) => {
          const active = pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  router.push(item.path);
                  if (isMobile) setOpen(false); // Close drawer on mobile click
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  borderRadius: "12px",
                  px: 2.5,
                  backgroundColor: active ? "#DC2626" : "transparent", // brand-red
                  transition: "all 0.2s ease-in-out",
                  "&:hover": {
                    backgroundColor: active
                      ? "#DC2626"
                      : "rgba(255,255,255,0.05)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: active ? "#FFFFFF" : "#A1A1AA", // White if active
                  }}
                >
                  <item.icon size={22} stroke={1.5} />
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: active ? 700 : 500,
                      fontSize: "0.95rem",
                    }}
                    sx={{
                      color: active ? "#FFFFFF" : "#A1A1AA",
                      m: 0,
                    }}
                  />
                )}
                {/* Active Indicator Dot */}
                {active && open && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white"
                  />
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Footer / System Health */}
      {open && (
        <Box
          sx={{
            p: 3,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            background:
              "linear-gradient(to top, rgba(220,38,38,0.05), transparent)",
          }}
        >
          <Box className="flex items-center gap-3 mb-4">
            <div className="relative">
              <IconBell size={20} className="text-brand-red" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
            </div>
            <div>
              <p className="text-white text-xs font-bold">System Alerts</p>
              <p className="text-gray-500 text-[10px]">2 new warnings</p>
            </div>
          </Box>
          <ListItemButton
            onClick={() => router.push("/logout")}
            sx={{
              borderRadius: "12px",
              color: "#A1A1AA",
              "&:hover": {
                color: "#EF4444",
                backgroundColor: "rgba(239,68,68,0.1)",
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, mr: 2, color: "inherit" }}>
              <IconLogout size={20} />
            </ListItemIcon>
            <ListItemText
              primary="Logout"
              primaryTypographyProps={{ fontSize: "0.9rem", fontWeight: 600 }}
            />
          </ListItemButton>
        </Box>
      )}
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: isMobile ? "auto" : open ? drawerWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          "& .MuiDrawer-paper": {
            width: isMobile ? drawerWidth : open ? drawerWidth : collapsedWidth,
            borderRight: "none",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: "hidden",
            backgroundColor: "#09090b",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default AdminSideBar;
