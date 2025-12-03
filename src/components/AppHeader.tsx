"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
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

  // Determinar avatar según la empresa
  const getAvatarSrc = (company?: string) => {
    switch (company?.toLowerCase()) {
      case "kallpa":
        return "/assets/kallpa-avatar.png";
      case "chavin":
        return "/assets/Chavin.png";
      default:
        return null;
    }
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
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              component="svg"
              width={109}
              height={25}
              viewBox="0 0 109 25"
              sx={{ fill: "#FD441E" }}
            >
              <path
                d="M22.5831 7.81616L16.1512 8.6307C14.2709 8.86343 12.8607 10.4271 12.8607 12.2816V12.8052L21.4191 11.7871L12.8607 19.0016V2.91434C12.8607 2.52161 12.7786 2.12888 12.5846 1.77979C12.0623 0.834337 11.0251 0.376155 10.0103 0.528883C9.29402 0.645246 8.66725 1.05252 8.29417 1.65616L0.511719 14.2743L8.1524 13.3652C8.68217 13.2998 9.15972 13.6998 9.17464 14.2162L9.28656 17.6271L9.46564 23.1398C9.48803 23.8452 9.93572 24.4925 10.6147 24.7398C11.3012 24.9871 12.0324 24.8052 12.5174 24.2743L24.4411 11.2416C25.7469 9.81616 24.5306 7.56888 22.5831 7.81616Z"
                fill="#FD441E"
              />
              <path
                d="M54.8989 24.3253C59.6594 24.3253 62.2336 20.9653 62.2336 17.0016V9.02344H58.57V19.8016C58.57 20.2671 58.1745 20.6525 57.697 20.6525H52.0933C51.6158 20.6525 51.2203 20.2743 51.2203 19.8016V9.02344H47.5566V16.9871C47.5566 21.6562 50.8099 24.3253 54.8914 24.3253"
                fill="#FD441E"
              />
              <path
                d="M38.1778 9.03125H29.5V24.0058H33.1636V12.384H39.9985C40.4835 12.384 40.8715 12.7622 40.8715 13.2349V24.0131H44.5351V15.2276C44.5351 11.8094 41.6923 9.03852 38.1853 9.03852"
                fill="#FD441E"
              />
              <path
                d="M74.1656 9.03125H66.3906V12.384H74.9864C75.4192 12.384 75.7624 12.7258 75.7624 13.1476V15.0022H69.7558C67.3382 15.0022 65.1445 16.6894 65.1445 19.7003C65.1445 22.2167 67.6442 24.3403 70.6885 24.3403C73.218 24.3403 75.7549 22.7185 75.7549 20.6676H69.0395C68.547 20.6676 68.1516 20.2822 68.1516 19.8022V18.6603C68.1516 18.1803 68.547 17.7949 69.0395 17.7949H75.7549V24.0203H79.1425V13.8967C79.1425 11.2203 76.9189 9.0458 74.1656 9.0458"
                fill="#FD441E"
              />
              <path
                d="M96.1697 11.5622L95.9085 11.2931C94.4833 9.8458 92.5732 9.0458 90.5361 9.03125H82.9775V16.5585V24.0058H86.6412V12.384H93.476C93.9536 12.384 94.349 12.7622 94.349 13.2349V16.2967C94.349 16.2967 94.349 16.3403 94.349 16.3549V24.0058H98.0127V13.2494C98.0127 12.7694 98.4081 12.384 98.9006 12.384H104.847C105.333 12.384 105.721 12.7622 105.721 13.2349V24.0058H109.384V15.2203C109.384 12.3694 107.287 9.03125 102.512 9.03125C98.4902 9.03125 96.8412 10.8276 96.192 11.5622"
                fill="#FD441E"
              />
            </Box>
          </Box>
        </Box>

        {/* Center Section - Muestra la empresa del usuario */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3D3D3D" }}
          >
            seon
          </Typography>
          <Box
            sx={{
              width: 5,
              height: 5,
              bgcolor: "#3D3D3D",
              borderRadius: "50%",
            }}
          />
          {status === "loading" ? (
            <Skeleton width={80} height={28} />
          ) : (
            <Typography
              variant="h6"
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
