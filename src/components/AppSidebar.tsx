import React, { useState } from "react";
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard,
  ExpandLess,
  ExpandMore,
  People,
  PersonAdd,
  Settings,
  Work,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path?: string;
  active?: boolean;
  children?: {
    text: string;
    path: string;
  }[];
}

interface AppSidebarProps {
  open: boolean;
  width?: number;
}

export function AppSidebar({ open, width = 240 }: AppSidebarProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<{
    [key: string]: boolean;
  }>({
    "Resumen de operaciones": true,
  });

  const menuItems: MenuItem[] = [
    {
      text: "Administrador de usuarios",
      icon: <Settings />,
      path: "/PageGestAcepCesOperator",
      active: pathname === "/PageGestAcepCesOperator",
    },
    {
      text: "Operaciones Especiales",
      icon: <PersonAdd />,
      path: "/PageGestAcepCes",
      active: pathname === "/PageGestAcepCes",
    },
  ];

  const handleToggleExpand = (itemText: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? width : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
          borderRight: "1px solid #e0e0e0",
          marginTop: "56px",
          transition: "transform 0.3s ease-in-out",
          transform: open ? "translateX(0)" : `translateX(-${width}px)`,
          position: "fixed",
          height: "calc(100vh - 56px)",
          overflowY: "auto",
        },
      }}
    >
      <Box sx={{ overflow: "auto", pt: 1 }}>
        <List>
          {menuItems.map((item, index) => (
            <div key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.path && !item.children ? Link : "div"}
                  href={item.path && !item.children ? item.path : undefined}
                  onClick={() => {
                    if (item.children) {
                      handleToggleExpand(item.text);
                    }
                  }}
                  sx={{
                    backgroundColor: item.active
                      ? "rgba(255,66,1,0.08)"
                      : "transparent",
                    "&:hover": {
                      backgroundColor: item.active
                        ? "rgba(255,66,1,0.12)"
                        : "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: item.active ? "#FF4201" : "rgba(0,0,0,0.56)",
                      minWidth: 56,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: item.active ? "#FF4201" : "rgba(0,0,0,0.87)",
                        fontSize: "16px",
                        fontWeight: item.active ? 500 : 400,
                      },
                    }}
                  />
                  {item.children &&
                    (expandedItems[item.text] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    ))}
                </ListItemButton>
              </ListItem>

              {item.children && (
                <Collapse
                  in={expandedItems[item.text]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <ListItem key={childIndex} disablePadding>
                        <ListItemButton sx={{ pl: 9 }}>
                          <ListItemText
                            primary={child.text}
                            sx={{
                              "& .MuiListItemText-primary": {
                                fontSize: "14px",
                                color: "rgba(0,0,0,0.87)",
                              },
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
