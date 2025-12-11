"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@nuam/common-fe-lib-components";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Skeleton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  CalendarToday,
  AccessTime,
  DarkMode,
  Language,
  Logout,
  Person,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { IsotypeName } from "./IsotypeName";
import { getCompanyLogo } from "@/config/companies";

interface AppHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function AppHeader({ sidebarOpen, setSidebarOpen }: AppHeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const { data: session, status } = useSession();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    console.log("🔒 Cerrando sesión...");
    handleClose();
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  const handleProfile = () => {
    handleClose();
    // Redirigir a perfil o mostrar modal
    console.log("Ver perfil de:", session?.user?.name);
  };

  useEffect(() => {
    // Actualizar la hora cada segundo
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formatear fecha en formato DD/MM/YYYY
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Formatear hora en formato 12 horas con AM/PM
  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = String(hours).padStart(2, "0");
    return `${hoursStr}:${minutes} ${ampm}`;
  };

  // Obtener iniciales del usuario para el avatar
  const getUserInitials = (name?: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Determinar avatar según la empresa usando el mapeo centralizado
  const getAvatarSrc = (company?: string) => {
    if (!company) return null;
    const logo = getCompanyLogo(company);
    // Si el logo es el default (isotype), retornar null para mostrar las iniciales
    return logo === "/assets/isotype.svg" ? null : logo;
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "white",
        color: "#3D3D3D",
        boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", minHeight: "56px !important" }}
      >
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Brand Logo */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={0.5}
          >
            <IsotypeName
              logoSrc="/assets/isotype.svg"
              projectName="seon"
              variant="horizontal"
              size="sm"
              className="logo-container"
              alt="Logo NUAM Platform"
            />
          </Box>
        </Box>

        {/* Center Section - Muestra la empresa del usuario */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {status === "loading" ? (
            <Skeleton width={80} height={28} />
          ) : (
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: "bold", color: "#3D3D3D" }}
            >
              {session?.user?.company || "Usuario"}
            </Typography>
          )}
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Date */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarToday sx={{ fontSize: 16, color: "#3D3D3D" }} />
            <Typography variant="caption" sx={{ color: "#3D3D3D" }}>
              {formatDate(currentTime)}
            </Typography>
          </Box>

          {/* Time */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <AccessTime sx={{ fontSize: 16, color: "#3D3D3D" }} />
            <Typography variant="caption" sx={{ color: "#3D3D3D" }}>
              {formatTime(currentTime)}
            </Typography>
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton size="small">
              <DarkMode sx={{ fontSize: 20, color: "#3D3D3D" }} />
            </IconButton>
            <IconButton size="small">
              <Language sx={{ fontSize: 20, color: "#3D3D3D" }} />
            </IconButton>

            {/* Avatar con información del usuario */}
            {status === "loading" ? (
              <Skeleton variant="circular" width={24} height={24} />
            ) : (
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Badge
                  badgeContent=""
                  color="success"
                  variant="dot"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#2e7d32",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 24,
                      height: 24,
                      bgcolor: "#FF4201",
                      fontSize: "12px",
                    }}
                    src={getAvatarSrc(session?.user?.company) || undefined}
                  >
                    {getUserInitials(session?.user?.name)}
                  </Avatar>
                </Badge>
              </IconButton>
            )}
          </Box>
        </Box>
      </Toolbar>

      {/* Menú de Usuario */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
            mt: 1.5,
            minWidth: 240,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* Información del usuario */}
        <Box sx={{ px: 2, py: 1.5, borderBottom: "1px solid #e0e0e0" }}>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {session?.user?.name || "Usuario"}
          </Typography>
          <Typography variant="caption" sx={{ color: "rgba(0,0,0,0.6)" }}>
            {session?.user?.email}
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Box
              sx={{
                px: 1,
                py: 0.25,
                bgcolor: "#FF420110",
                borderRadius: 0.5,
                border: "1px solid #FF420130",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#FF4201", fontSize: "11px" }}
              >
                {session?.user?.role || "N/A"}
              </Typography>
            </Box>
            <Box
              sx={{
                px: 1,
                py: 0.25,
                bgcolor: "rgba(0,0,0,0.05)",
                borderRadius: 0.5,
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "rgba(0,0,0,0.7)", fontSize: "11px" }}
              >
                {session?.user?.company || "N/A"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText>Mi Perfil</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "#FF4201" }} />
          </ListItemIcon>
          <ListItemText sx={{ color: "#FF4201" }}>Cerrar Sesión</ListItemText>
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
