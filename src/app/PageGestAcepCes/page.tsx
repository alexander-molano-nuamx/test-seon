"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Search as SearchIcon,
  CalendarToday as CalendarTodayIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";

import { RestrictedDevice } from "@/components/RestrictedDevice";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { OperationsTable } from "@/components/OperationsTable";

const drawerWidth = 240;

export default function PageGestAcepCes() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Detecta si está en tablet o mobile (<= 1024px)
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  // Si es dispositivo móvil o tablet, mostrar RestrictedDevice centrado
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

  // Vista normal para desktop
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* Header */}
      <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar */}
      <AppSidebar open={sidebarOpen} width={drawerWidth} />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: "56px",
          ml: sidebarOpen ? 0 : `-${drawerWidth}px`,
          transition: "margin 0.3s",
          backgroundColor: "#f5f5f5",
          minHeight: "calc(100vh - 56px)",
        }}
      >
        {/* Breadcrumb */}
        <Typography
          sx={{
            color: "var(--color-orangered)",
            fontFamily: "Roboto",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "157%",
            letterSpacing: "0.1px",
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
            textDecorationSkipInk: "none",
            textDecorationThickness: "auto",
            textUnderlineOffset: "auto",
            textUnderlinePosition: "from-font",
            mb: 2,
          }}
        >
          Gestión de Aceptaciones y Cesiones
        </Typography>

        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: "#3D3D3D",
            fontSize: "1.5rem",
            fontWeight: 400,
            mb: 3,
          }}
        >
          Gestión de Aceptación de Cesiones
        </Typography>

        {/* Filtros */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          {/* Buscador */}
          <TextField
            placeholder="Buscar Promotor"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              flex: "1 1 300px",
              minWidth: "250px",
              backgroundColor: "#fff",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
              },
            }}
          />

          {/* Selector de Fechas */}
          <TextField
            label="Fechas de Final de Recepción de Aceptaci..."
            variant="outlined"
            type="date"
            inputRef={(input) => {
              // Guardamos la referencia del input para poder activarlo desde el icono
              if (input) {
                input.dateInput = input;
              }
            }}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayIcon
                    sx={{
                      color: "rgba(0,0,0,0.54)",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      // Buscamos el input de fecha y activamos el picker
                      const input = (e.target as HTMLElement)
                        .closest(".MuiInputBase-root")
                        ?.querySelector(
                          'input[type="date"]'
                        ) as HTMLInputElement;
                      if (input) {
                        input.showPicker?.();
                      }
                    }}
                  />
                </InputAdornment>
              ),
            }}
            onClick={(e) => {
              // Al hacer click en cualquier parte del input, abrir el picker
              const input = e.currentTarget.querySelector(
                'input[type="date"]'
              ) as HTMLInputElement;
              if (input) {
                input.showPicker?.();
              }
            }}
            sx={{
              flex: "1 1 300px",
              minWidth: "250px",
              backgroundColor: "#fff",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
                cursor: "pointer",
              },
              "& input[type='date']": {
                cursor: "pointer",
              },
              // Ocultar el icono de calendario por defecto del input date
              "& input[type='date']::-webkit-calendar-picker-indicator": {
                display: "none",
              },
              "& input[type='date']::-webkit-inner-spin-button": {
                display: "none",
              },
            }}
          />

          {/* Desplegable Estado */}
          <FormControl
            sx={{
              flex: "1 1 250px",
              minWidth: "200px",
              backgroundColor: "#fff",
            }}
          >
            <InputLabel>Estado</InputLabel>
            <Select
              label="Estado"
              defaultValue=""
              sx={{
                borderRadius: "4px",
              }}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="pendiente">Pendiente</MenuItem>
              <MenuItem value="aprobado">Aprobado</MenuItem>
              <MenuItem value="rechazado">Rechazado</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Tarjetas de información */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          {/* Tarjeta 1 - Fecha final */}
          <Box
            sx={{
              flex: "1 1 calc(50% - 8px)",
              minWidth: "300px",
              backgroundColor: "#fff",
              p: 2,
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <CalendarTodayIcon sx={{ fontSize: 24, color: "#3D3D3D" }} />
            <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
              Fecha final de gestión de aceptaciones: 5 de Octubre 2025
            </Typography>
          </Box>

          {/* Tarjeta 2 - Cantidad de operaciones */}
          <Box
            sx={{
              flex: "1 1 calc(50% - 8px)",
              minWidth: "300px",
              backgroundColor: "#fff",
              p: 2,
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <DescriptionIcon sx={{ fontSize: 24, color: "#3D3D3D" }} />
            <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
              Cantidad de operaciones: 50
            </Typography>
          </Box>
        </Box>

        {/* Tabla de Operaciones */}
        <OperationsTable />
      </Box>
    </Box>
  );
}
