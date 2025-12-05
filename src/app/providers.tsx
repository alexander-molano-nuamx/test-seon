"use client";

import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { nuamTheme, theme } from "@/theme/theme";
import { installErrorHandler } from "@/lib/errorHandler";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Install error handler to suppress non-critical NestJS backend errors
    installErrorHandler();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export const NuamThemeWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ThemeProvider theme={nuamTheme} defaultMode="light">
    {children}
  </ThemeProvider>
);
