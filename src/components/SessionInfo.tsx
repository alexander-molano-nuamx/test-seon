"use client";

import { useSession } from "next-auth/react";
import { Typography, Box, Skeleton } from "@mui/material";

export function SessionInfo() {
  const { data: session, status } = useSession();

  const formatLastLogin = (isoDate?: string) => {
    if (!isoDate) return "Primera sesión";

    try {
      const date = new Date(isoDate);
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };

      const formatted = date.toLocaleDateString("es-ES", options);
      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    } catch {
      return "Fecha no disponible";
    }
  };

  if (status === "loading") {
    return (
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton width={250} height={20} />
        <Skeleton width={150} height={20} />
      </Box>
    );
  }

  if (!session?.user) {
    return null;
  }

  return (
    <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
      <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
        Último Inicio de Sesión:{" "}
        <strong>{formatLastLogin(session.user.lastLogin)}</strong>
      </Typography>
      <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
        IP: <strong>{session.user.lastIp || "No disponible"}</strong>
      </Typography>
    </Box>
  );
}
