import { useNavigationStore } from "@/providers/NavigationStoreProvider";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { NavLinkType } from "./types/navlink.type";

function SidebarContent({
  navLinks,
  handleDrawerToggle,
}: {
  navLinks: NavLinkType[];
  handleDrawerToggle: () => void;
}) {
  const { setActiveLink, activeLink } = useNavigationStore((state) => state);

  const handleNavigationClick = (link: string) => {
    setActiveLink(link);
    handleDrawerToggle();
  };

  return (
    <Box className="w-64">
      <List>
        {navLinks.map((link) => {
          const isActive = activeLink === link.href;
          
          return (
            <ListItem key={link.name} disablePadding className="px-2">
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={() => handleNavigationClick(link.href)}
                className={clsx(
                  "rounded-md!",
                  isActive
                    ? "bg-gray-700 dark:bg-slate-800!"
                    : "hover:bg-gray-100 dark:hover:bg-slate-800",
                )}
              >
                <ListItemIcon className="text-slate-600! dark:text-slate-300!">
                    {link.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link.name}
                  className="text-slate-600 dark:text-slate-300"
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

export default SidebarContent;
