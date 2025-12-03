"use client";

import { useSession } from "next-auth/react";
import { Box, Typography, Chip } from "@mui/material";

export function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Typography>Cargando...</Typography>;
  }

  if (!session) {
    return null;
  }

  return (
    <Box sx={{ p: 2, bgcolor: "#f5f5f5", borderRadius: 1 }}>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {session.user.name}
      </Typography>
      <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
        {session.user.email}
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip label={session.user.role} size="small" color="primary" />
        <Chip label={session.user.company} size="small" variant="outlined" />
      </Box>
    </Box>
  );
}
