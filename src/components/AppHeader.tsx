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

interface AppHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function AppHeader({ sidebarOpen, setSidebarOpen }: AppHeaderProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("🔓 Cerrando sesión...");
    handleClose();
    // Redirigir al login
    router.push("/");
  };

  useEffect(() => {
    // Actualizar la hora cada segundo
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
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
    hours = hours ? hours : 12; // la hora '0' debe ser '12'
    const hoursStr = String(hours).padStart(2, "0");
    return `${hoursStr}:${minutes} ${ampm}`;
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
              <path d="M22.0714 7.3164L15.6395 8.13095C13.7592 8.36367 12.349 9.92731 12.349 11.7819V12.3055L20.9074 11.2873L12.349 18.5019V2.41458C12.349 2.02185 12.2669 1.62913 12.0729 1.28004C11.5506 0.334581 10.5134 -0.123601 9.49862 0.0291267C8.78231 0.14549 8.15553 0.552763 7.78245 1.1564L0 13.7746L7.64068 12.8655C8.17045 12.8 8.648 13.2 8.66292 13.7164L8.77484 17.1273L8.95392 22.64C8.97631 23.3455 9.424 23.9928 10.103 24.24C10.7895 24.4873 11.5207 24.3055 12.0057 23.7746L23.9294 10.7419C25.2351 9.3164 24.0189 7.06913 22.0714 7.3164Z" />
            </Box>
          </Box>
        </Box>

        {/* Center Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3D3D3D" }}
          >
            SEOn
          </Typography>
          <Box
            sx={{
              width: 5,
              height: 5,
              bgcolor: "#3D3D3D",
              borderRadius: "50%",
            }}
          />
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#3D3D3D" }}
          >
            Kallpa
          </Typography>
        </Box>

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Date - Actualizada en tiempo real */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarToday sx={{ fontSize: 16, color: "#3D3D3D" }} />
            <Typography variant="caption" sx={{ color: "#3D3D3D" }}>
              {formatDate(currentTime)}
            </Typography>
          </Box>

          {/* Time - Actualizada en tiempo real */}
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
                  sx={{ width: 24, height: 24 }}
                  src="/api/placeholder/24/24"
                />
              </Badge>
            </IconButton>
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
            minWidth: 200,
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
        <MenuItem onClick={handleClose}>
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
