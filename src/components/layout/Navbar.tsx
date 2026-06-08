"use client";

import {
  AppBar,
  Toolbar,
  Drawer,
} from "@mui/material";
import ToolbarContent from "../navigation/Toolbar/ToolbarContent";
import { useNavigationStore } from "@/providers/NavigationStoreProvider";
import SidebarContent from "../navigation/SidebarContent";
import { NavLinkType } from "../navigation/types/navlink.type";
import { Code, Home, Inbox, User, Settings } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const {isOpen, toggleDrawer, activeLink, setActiveLink} = useNavigationStore((state) => state);
  const navLinks: NavLinkType[] = [
    { name: "Home", href: "/home", icon: <Home /> },
    { name: "Projects", href: "/projects", icon: <Code /> },
    { name: "About", href: "/about", icon: <User /> },
    { name: "Services", href: "/services", icon: <Settings /> },
    { name: "Contact", href: "/contact", icon: <Inbox /> },
  ];
  const activeRoute = usePathname();

  const handleDrawerToggle = () => {
    toggleDrawer();
  };

  useEffect(() => {
    if (activeRoute !== activeLink) {
      setActiveLink(activeRoute);
    }
  }, [activeLink, activeRoute]);

  return (
    <AppBar
      position="fixed"
      className="bg-slate-50/80! backdrop-blur-md border-b border-gray-200 dark:bg-slate-950/80! dark:border-slate-800!"
      sx={{
        color: "text.primary",
        // backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "none",
        "&.MuiAppBar-colorPrimary": {
          color: "inherit",
        },
      }}
    >
      <Toolbar className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 justify-between">
        <ToolbarContent
          navLinks={navLinks}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Toolbar>

      {/* Mobile Nav */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            className: "bg-white dark:bg-slate-900!",
          },
        }}
      >
        <SidebarContent navLinks={navLinks} handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </AppBar>
  );
}
