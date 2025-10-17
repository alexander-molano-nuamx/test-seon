"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { nuamTheme, theme } from "@/theme/theme";

export function Providers({ children }: { children: React.ReactNode }) {
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
