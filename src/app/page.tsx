"use client";

import dynamicImport from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";

// Dynamically import the page content to prevent SSR issues with @nuam library
const PageContent = dynamicImport(() => import("./PageContent"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CircularProgress
        sx={{
          color: "#FF4201",
          width: "80px",
          height: "80px",
        }}
      />
    </Box>
  ),
});

// Force dynamic rendering to prevent SSR issues
export const dynamic = "force-dynamic";

export default function HomePage() {
  return <PageContent />;
}
