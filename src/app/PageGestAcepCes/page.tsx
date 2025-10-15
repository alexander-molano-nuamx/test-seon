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
  SelectChangeEvent,
} from "@mui/material";
import {
  Search as SearchIcon,
  Description as DescriptionIcon,
} from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { OperationsTable } from "@/components/OperationsTable";

const drawerWidth = 240;

export default function PageGestAcepCes() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Estados para los filtros
  const [searchEmisor, setSearchEmisor] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [filterStatus, setFilterStatus] = useState("");

  // Detecta si está en tablet o mobile (<= 1024px)
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  const handleStatusChange = (event: SelectChangeEvent) => {
    setFilterStatus(event.target.value);
  };

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
          minHeight: "calc(100vh - 56px)",
          width: "100%",
        }}
      >
        {/* Breadcrumb */}
        <Typography
          sx={{
            color: "var(--color-orangered)",
            fontFamily: "var(--font-family)",
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
            placeholder="Buscar Emisor"
            variant="outlined"
            value={searchEmisor}
            onChange={(e) => setSearchEmisor(e.target.value)}
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

          {/* Selector de Rango de Fechas */}
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flex: "1 1 auto",
                flexWrap: "wrap",
              }}
            >
              <DatePicker
                label="Fecha Inicio"
                value={startDate}
                onChange={(newValue) => setStartDate(newValue)}
                slotProps={{
                  textField: {
                    sx: {
                      flex: "1 1 250px",
                      minWidth: "200px",
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      },
                    },
                  },
                }}
              />
              <DatePicker
                label="Fecha Fin"
                value={endDate}
                onChange={(newValue) => setEndDate(newValue)}
                minDate={startDate || undefined}
                slotProps={{
                  textField: {
                    sx: {
                      flex: "1 1 250px",
                      minWidth: "200px",
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      },
                    },
                  },
                }}
              />
            </Box>
          </LocalizationProvider>

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
              value={filterStatus}
              onChange={handleStatusChange}
              sx={{
                borderRadius: "4px",
              }}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="adjudicada">Adjudicada</MenuItem>
              <MenuItem value="cerrada">Cerrada</MenuItem>
              <MenuItem value="finalizada">Finalizada</MenuItem>
              <MenuItem value="vigente">Vigente</MenuItem>
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
        <OperationsTable
          searchEmisor={searchEmisor}
          startDate={startDate}
          endDate={endDate}
          filterStatus={filterStatus}
        />
      </Box>
    </Box>
  );
}
