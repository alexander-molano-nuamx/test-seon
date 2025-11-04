"use client";

import React from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { RoleProtectedRoute } from "@/components/RoleProtectedRoute";
import { Box, useMediaQuery } from "@mui/material";

export default function DetalleGralOperEsp() {
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");
  if (isMobileOrTablet) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#000",
          padding: 2,
        }}
      >
        <RestrictedDevice />
      </Box>
    );
  }
  return <div>DetalleGralOperEsp</div>;
}
