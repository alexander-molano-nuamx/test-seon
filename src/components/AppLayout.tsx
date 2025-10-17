import React, { useState } from "react";
import Box from "@mui/material/Box";
import { AppHeader } from "./AppHeader";
import { AppSidebar } from "./AppSidebar";
import { MainContent } from "./MainContent";

export function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const sidebarWidth = 240;

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <AppSidebar open={sidebarOpen} width={sidebarWidth} />
      <MainContent sidebarWidth={sidebarWidth} />
    </Box>
  );
}
