"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  InputAdornment,
  IconButton,
  Skeleton,
} from "@mui/material";
import {
  Search as SearchIcon,
  Description as DescriptionIcon,
  CalendarMonthRounded,
} from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { OperationsTable } from "@/components/OperationsTable";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RoleProtectedRoute } from "@/components/RoleProtectedRoute";

const Autocomplete = dynamic(() => import("@/components/AutocompleteWrapper"), {
  ssr: false,
});

const DatePicker = dynamic(() => import("@/components/DatePickerWrapper"), {
  ssr: false,
});

const drawerWidth = 240;

const statusOptions = [
  { id: "todos", name: "Todos" },
  { id: "adjudicada", name: "Adjudicada" },
  { id: "cerrada", name: "Cerrada" },
  { id: "finalizada", name: "Finalizada" },
  { id: "vigente", name: "Vigente" },
];

export default function PageGestAcepCes() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data: session, status } = useSession();
  const [lastLogin, setLastLogin] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {
    // Obtener fecha/hora actual del navegador
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDate = now.toLocaleDateString("es-ES", options);
    setLastLogin(formattedDate);

    // Obtener IP del cliente (requiere API externa o backend)
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress("No disponible"));
  }, []);

  // Formatear la fecha de forma más legible
  const formatLastLogin = () => {
    if (!lastLogin) return "Cargando...";
    // Capitalizar primera letra del día
    return lastLogin.charAt(0).toUpperCase() + lastLogin.slice(1);
  };

  const customLinks = [
    { name: "Operaciones especiales", path: "/PageGestAcepCes" },
  ];

  const handleClear = () => {
    setSearchEmisor("");
  };

  const [selectedStatus, setSelectedStatus] = useState<{
    id: string;
    name: string;
  }>({ id: "todos", name: "Todos" });

  // Estados para los filtros
  const [searchEmisor, setSearchEmisor] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [filterStatus, setFilterStatus] = useState("");

  // Detecta si está en tablet o mobile (<= 1024px)
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  const handleStatusChange = (value: unknown) => {
    const typedValue = value as { id: string; name: string } | null;
    setSelectedStatus(typedValue || { id: "todos", name: "Todos" });
    setFilterStatus(typedValue?.id || "todos");
  };

  const handleDateChange = (newValue: unknown) => {
    const typedValue = newValue as Date | null;
    setStartDate(typedValue);
  };

  // Si es dispositivo móvil o tablet, mostrar RestrictedDevice centrado
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

  // Vista normal para desktop
  return (
    <RoleProtectedRoute allowedRoles={["operator"]}>
      <ProtectedRoute>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          {/* Header */}
          <AppHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

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
                {status === "loading" ? (
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Skeleton width={250} height={20} />
                    <Skeleton width={150} height={20} />
                  </Box>
                ) : (
                  <>
                    <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
                      Último Inicio de Sesión:{" "}
                      <strong>{formatLastLogin()}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
                      IP: <strong>{ipAddress}</strong>
                    </Typography>
                  </>
                )}
              </Box>
            </Box>

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
              <Box sx={{ flex: "1 1 0", minWidth: "250px" }}>
                <TextField
                  placeholder="Buscar Emisor"
                  variant="outlined"
                  value={searchEmisor}
                  onChange={(e) => setSearchEmisor(e.target.value)}
                  fullWidth // Importante: que ocupe todo el ancho del Box padre
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
                        </InputAdornment>
                      ),
                      endAdornment: searchEmisor && (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClear}
                            edge="end"
                            sx={{ color: "rgba(0,0,0,0.54)" }}
                          >
                            <ClearIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "4px",
                    },
                  }}
                />
              </Box>

              {/* Selector de Fecha */}
              <Box sx={{ flex: "1 1 0", minWidth: "250px" }}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={es}
                >
                  <DatePicker
                    label="Fecha Inicio"
                    value={startDate}
                    onChange={handleDateChange}
                    slotProps={{
                      textField: {
                        fullWidth: true, // Importante
                        sx: {
                          backgroundColor: "#fff",
                          "& .MuiOutlinedInput-root": {
                            borderRadius: "4px",
                          },
                        },
                      },
                      actionBar: {
                        actions: ["clear", "accept"],
                      },
                    }}
                  />
                </LocalizationProvider>
              </Box>

              {/* Desplegable Estado */}
              <Box sx={{ flex: "1 1 0", minWidth: "250px" }}>
                <Autocomplete
                  options={statusOptions}
                  label="Estado"
                  labelKey="name"
                  valueKey="id"
                  searchKeys={["name"]}
                  value={selectedStatus?.id}
                  onChange={handleStatusChange}
                  textFieldProps={{
                    fullWidth: true, // Importante
                    sx: {
                      backgroundColor: "#fff",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "4px",
                      },
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Tabla de Operaciones */}
            <OperationsTable
              searchEmisor={searchEmisor}
              startDate={startDate}
              filterStatus={filterStatus}
            />
          </Box>
        </Box>
      </ProtectedRoute>
    </RoleProtectedRoute>
  );
}
