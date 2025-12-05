"use client";

import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { RoleProtectedRoute } from "@/components/RoleProtectedRoute";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { SessionInfo } from "@/components/SessionInfo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, Typography } from "@nuam/common-fe-lib-components";
import { BoxInfo } from "@/components/BoxInfo";
import generalDataColumnsJson from "@/lib/generalData.json";

const drawerWidth = 240;

// Tipos para los datos del JSON
interface JsonRow {
  label: string;
  value: string | number;
  hasButton?: boolean;
}

interface JsonColumn {
  title: string;
  rows: JsonRow[];
}

// Tipos para los datos procesados (después de agregar el botón)
interface ProcessedRow {
  label: string;
  value: string | number | React.ReactNode;
}

interface ProcessedColumn {
  title: string;
  rows: ProcessedRow[];
}

export default function PageDetalleGralOperEsp() {
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleVerFolios = () => {
    console.log("Ver Folios clicked");
    // Aquí puedes agregar tu lógica: abrir modal, navegar, etc.
  };

  // Procesar los datos del JSON con tipos correctos
  const generalDataColumns: ProcessedColumn[] = (
    generalDataColumnsJson.columns as JsonColumn[]
  ).map((column) => ({
    ...column,
    rows: column.rows.map((row) => {
      if (row.hasButton) {
        return {
          label: row.label,
          value: (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <span>{row.value}</span>
              <Button
                variant="contained"
                size="small"
                onClick={handleVerFolios}
              >
                VER FOLIOS
              </Button>
            </Box>
          ),
        };
      }
      return {
        label: row.label,
        value: row.value,
      };
    }),
  }));

  const customLinks = [
    { name: "Mantenedor de operaciones especiales", path: "/PageGestAcepCes" },
    {
      name: "Detalle General de Operaciones Especiales",
      path: "/PageIngresoAcep",
    },
  ];

  if (isMobileOrTablet) {
    return (
      <RoleProtectedRoute allowedRoles={["operator"]}>
        <ProtectedRoute>
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
        </ProtectedRoute>
      </RoleProtectedRoute>
    );
  }
  return (
    <RoleProtectedRoute allowedRoles={["operator"]}>
      <ProtectedRoute>
        <Box>
          {/* Header */}
          <AppHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Sidebar */}
          <AppSidebar open={sidebarOpen} width={drawerWidth} />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: "56px",
            minHeight: "calc(100vh - 56px)",
            width: "100%",
          }}
        >
          {/* Breadcrumbs */}
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {/* Breadcrumb a la izquierda */}
            <Box>
              <Breadcrumbs links={customLinks} />
            </Box>

            {/* Datos de sesión a la derecha */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <SessionInfo />
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgba(0,0,0,0.6)",
              mt: 1,
              mb: 2,
            }}
          >
            Tipo de Valor{" "}
            <span style={{ fontWeight: 600 }}>
              Detalle - Información General Operaciones Especiales
            </span>
          </Typography>

          {/* BoxInfo */}
          <BoxInfo
            title="Datos Generales"
            columns={generalDataColumns}
            noBorder={true}
          />
        </Box>
      </ProtectedRoute>
    </RoleProtectedRoute>
  );
}
