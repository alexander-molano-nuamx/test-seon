"use client";

import React, { useEffect, useState } from "react";
import dynamicImport from "next/dynamic";
import {
  Box,
  IconButton,
  Card,
  CardContent,
  Typography,
  Chip,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Stack,
  Paper,
  useMediaQuery,
  Checkbox,
  Button,
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  RestartAlt,
  FileDownload as DownloadIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Autocomplete } from "@/components/Autocomplete";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import type { PickerRangeValue } from "@mui/x-date-pickers/internals";
import type { DateRange } from "@mui/x-date-pickers-pro";
import {
  SerieItemOpa,
  seriesDataOpa,
  StackedBarChart,
} from "@/components/StackedBarChart";

// Dynamically import MUI X Date Pickers to prevent SSR issues with document access
const LocalizationProvider = dynamicImport(
  () =>
    import("@mui/x-date-pickers/LocalizationProvider").then(
      (mod) => mod.LocalizationProvider
    ),
  { ssr: false }
);

const DateRangePicker = dynamicImport(
  () =>
    import("@mui/x-date-pickers-pro/DateRangePicker").then(
      (mod) => mod.DateRangePicker
    ),
  { ssr: false }
);

const DesktopTimePicker = dynamicImport(
  () =>
    import("@mui/x-date-pickers/DesktopTimePicker").then(
      (mod) => mod.DesktopTimePicker
    ),
  { ssr: false }
);

// Force dynamic rendering to prevent SSR issues
export const dynamic = "force-dynamic";

// Import adapter and locale separately (these don't access document)
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";
import { RegistroAceptaciones } from "@/components/RegistroAceptaciones";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RoleProtectedRoute } from "@/components/RoleProtectedRoute";
import { IngresoAceptaciones } from "@/components/IngresoAceptaciones";
import { SessionInfo } from "@/components/SessionInfo";
import { seriesData, SerieItem } from "@/components/StackedBarChart";
import { StackedBarChartOpa } from "@/components/StackedBarChartOpa";
import { IngresoAceptacionesOpa } from "@/components/IngresoAceptacionesOpa";
import { RegistroAceptacionesOpa } from "@/components/RegistroAceptacionesOpa";

const drawerWidth = 240;

export default function PageIngresoOpa() {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
  const [startTime, setStartTime] = useState<Date | null>(
    new Date(2024, 0, 1, 8, 0)
  );
  const [endTime, setEndTime] = useState<Date | null>(
    new Date(2024, 0, 1, 16, 0)
  );
  const [selectedSerie, setSelectedSerie] = useState<SerieItem | null>(null);
  const [lastLogin, setLastLogin] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  const [selectedSerieId, setSelectedSerieId] = useState<number | null>(0);

  const handleStartTimeChange = (newValue: Date | null) => {
    setStartTime(newValue);
    console.log("Hora inicio:", newValue?.getHours());
  };

  const handleEndTimeChange = (newValue: Date | null) => {
    setEndTime(newValue);
    console.log("Hora fin:", newValue?.getHours());
  };

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

  const customLinks = [
    { name: "Operaciones Especiales", path: "/PageGestAcepCes" },
    { name: "Información General", path: "/PageIngresoOpa" },
  ];

  const seriesColumns = [
    {
      id: "serie01",
      name: "Acciones Comunes con Derecho a Voto",
      color: "#b22a09",
    },
  ];

  const entitiesData = [
    {
      id: 1,
      entity: "BTG Pactual SAB",
      acceptances: 20,
      series: {
        serie01: 800000,
      },
      total: 800000,
    },
  ];

  // Calcular totales
  const totals = {
    acceptances: entitiesData.reduce((sum, row) => sum + row.acceptances, 0),
    series: seriesColumns.reduce((acc, serie) => {
      // Asegurar que 'serie.id' es una clave válida de 'row.series'
      const key = serie.id as keyof (typeof entitiesData)[number]["series"];
      acc[serie.id] = entitiesData.reduce(
        (sum, row) => sum + row.series[key],
        0
      );
      return acc;
    }, {} as Record<string, number>),
    total: entitiesData.reduce((sum, row) => sum + row.total, 0),
  };

  // Calcular número de aceptaciones por serie
  const acceptancesBySeries = seriesColumns.reduce((acc, serie) => {
    const key = serie.id as keyof (typeof entitiesData)[number]["series"];
    acc[serie.id] =
      entitiesData.filter((row) => row.series[key] > 0).length * 10; // Ajusta según tu lógica
    return acc;
  }, {} as Record<string, number>);

  // Función helper para formatear montos
  const formatCurrency = (value?: number) => {
    if (typeof value !== "number" || isNaN(value)) return "$0";
    return value === 0 ? "$0" : `${value.toLocaleString("es-PE")}`;
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const [selectedStatus, setSelectedStatus] = useState<{
    id: string;
    name: string;
  }>({ id: "todos", name: "Todos" });

  // Detecta si está en tablet o mobile (<= 1024px)
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  const handleStatusChange = (value: SerieItem | null) => {
    setSelectedSerie(value);
    setSelectedSerieId(value ? value.id : null);
    console.log("Serie seleccionada:", value);
  };

  const handleResetFilters = () => {
    // Reset date range and time filters back to defaults
    setDateRange([null, null]);
    setStartTime(new Date(2024, 0, 1, 8, 0));
    setEndTime(new Date(2024, 0, 1, 16, 0));
    setSelectedSerie(null);
    setSelectedSerieId(0);
    setSelectedStatus({ id: "todos", name: "Todos" });
    // Keep other view state (tabs, expanded, etc.) untouched
    console.log("Filtros restablecidos");
  };

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
        <Box
          sx={{ bgcolor: "white", display: "flex", minHeight: "100vh", p: 3 }}
        >
          {/* Header */}
          <AppHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Sidebar */}
          <AppSidebar open={sidebarOpen} width={drawerWidth} />

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
            {/* Tipo de Valor */}

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.6)",
                mt: 1,
                mb: 2,
              }}
            >
              Oferta Pública de Adquisición Posterior de Acciones Comunes de
              Volcán Compañía Minera S.A.A.
            </Typography>

            {/* Card Info */}
            <Card sx={{ mb: 2, border: "1px solid rgba(0,0,0,0.12)" }}>
              <CardContent>
                <Stack
                  direction="row"
                  spacing={3}
                  divider={<Divider orientation="vertical" flexItem />}
                  alignItems="center"
                  sx={{ justifyContent: "space-between", pl: 2, pr: 2 }}
                >
                  {/* Logo */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        bgcolor: "white",
                        boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={"/assets/volcan.png"}
                        alt="Logo"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "16px" }}>
                      VOLCÁN - OPA
                    </Typography>
                  </Box>

                  {/* Monto Total */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "16px" }}>
                      Cantidad total ofertada
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      1.000.000 - Acciones
                    </Typography>
                  </Box>

                  {/* Fecha y Hora */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "16px" }}>
                      Fecha y Hora de Recepción Aceptaciones
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      03 Oct 2025 a 03 Oct 2025 • 8:00 a 16:00 • Perú
                    </Typography>
                  </Box>

                  {/* Tiempo */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "16px" }}>
                      Tiempo para Cierre de Aceptaciones
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      2 horas y 16 minutos
                    </Typography>
                  </Box>

                  {/* Estado */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.6)",
                        mb: 1,
                      }}
                    >
                      Estado
                    </Typography>
                    <Chip
                      label="Vigente"
                      sx={{
                        bgcolor: "rgba(46,125,50,0.3)",
                        color: "rgba(0,0,0,0.87)",
                      }}
                    />
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* Series */}
            <Box sx={{ mb: 3 }}>
              {/* Header Card */}

              {/* Series Cards */}
              <Accordion
                defaultExpanded={true}
                sx={{ mb: 3, border: "1px solid rgba(0,0,0,0.12)" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    backgroundColor: "#fff",
                    "&:hover": {
                      backgroundColor: "rgba(239, 108, 0, 0.04)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--color-orangered)",
                    }}
                  >
                    Títulos Ofertados: {seriesDataOpa.length}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      py: 1,
                    }}
                  >
                    {seriesDataOpa.map((serie) => (
                      <Box
                        key={serie.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 18,
                            height: 8,
                            backgroundColor: serie.color,
                            borderRadius: "2px",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 600,
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.6)",
                            letterSpacing: "0.1px",
                            lineHeight: 1.57,
                          }}
                        >
                          {serie.id}. {serie.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>

            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab
                  label="INFORMACIÓN GENERAL"
                  sx={{
                    color: tabValue === 0 ? "#ff4201" : "rgba(0,0,0,0.6)",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                />
                <Tab
                  label="GESTIÓN DE ACEPTACIONES"
                  sx={{ fontWeight: 500, fontSize: "14px" }}
                />
                <Tab
                  label="REPORTES Y BOLETINES"
                  sx={{ fontWeight: 500, fontSize: "14px" }}
                />

                <Tab
                  label="INFORMACIÓN DE LA OPERACIÓN"
                  sx={{ fontWeight: 500, fontSize: "14px" }}
                />
              </Tabs>

              {/* Tab Content - INGRESO DE ACEPTACIONES */}
              {tabValue === 0 && (
                <Box>
                  {/* Accordion - Evolución de la Operación */}
                  <Accordion
                    expanded={expanded}
                    onChange={() => setExpanded(!expanded)}
                    sx={{ mb: 2 }}
                  >
                    <AccordionSummary
                      expandIcon={expanded ? <ExpandLess /> : <ExpandMore />}
                    >
                      <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                        Evolución de la Operación
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Filters */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          mb: 3,
                          "& > *": {
                            flex: 1,
                          },
                        }}
                      >
                        {/* Desplegable Estado */}

                        <Autocomplete
                          options={seriesDataOpa}
                          label="Filtrar por Títulos Ofertado"
                          labelKey="duration"
                          valueKey="id"
                          searchKeys={["duration", "name", "type"]}
                          value={selectedSerie}
                          onChange={handleStatusChange}
                          getOptionLabel={(option) => {
                            const opt = option as SerieItemOpa;
                            return `${opt.name}`;
                          }}
                          textFieldProps={{
                            size: "small",
                            fullWidth: true,
                            placeholder: "Filtrar por Títulos Ofertado",
                            sx: {
                              backgroundColor: "#fff",
                              "& .MuiOutlinedInput-root": {
                                borderRadius: "4px",
                              },
                            },
                          }}
                          // Renderizar cada opción con más detalle
                          renderOption={(props, option) => {
                            const opt = option as SerieItemOpa & {
                              label: string;
                            };
                            return (
                              <Box
                                component="li"
                                {...props}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 1.5,
                                }}
                              >
                                {/* Indicador de color */}
                                <Box
                                  sx={{
                                    width: 24,
                                    height: 8,
                                    bgcolor: opt.color,
                                    borderRadius: 0.5,
                                  }}
                                />
                                {/* Nombre y descripción */}
                                <Box>
                                  <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 500 }}
                                  >
                                    {opt.name}
                                  </Typography>
                                </Box>
                              </Box>
                            );
                          }}
                        />

                        {/* Selector de Hora */}

                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          adapterLocale={es}
                        >
                          <DateRangePicker
                            localeText={{
                              start: "Fecha Inicio",
                              end: "Fecha Fin",
                            }}
                            value={dateRange}
                            // onChange gives adapter objects (like Dayjs) or Date wrappers.
                            // Convert safely to native Date before updating state.
                            onChange={(newValue) => {
                              const toNativeDate = (
                                value: PickerRangeValue[number]
                              ): Date | null => {
                                if (!value) return null;
                                const asObj = value as unknown as Record<
                                  string,
                                  unknown
                                >;
                                if ("$d" in asObj && asObj.$d instanceof Date) {
                                  return asObj.$d as Date;
                                }
                                if (typeof asObj.toDate === "function") {
                                  return (asObj.toDate as () => Date)();
                                }
                                return value as Date;
                              };

                              const convertedValue: DateRange<Date> = [
                                newValue?.[0]
                                  ? toNativeDate(newValue[0])
                                  : null,
                                newValue?.[1]
                                  ? toNativeDate(newValue[1])
                                  : null,
                              ];
                              setDateRange(convertedValue);
                            }}
                            slotProps={{
                              textField: {
                                size: "small",
                                fullWidth: true,
                                sx: { backgroundColor: "#fff" },
                              },
                              actionBar: {
                                // show explicit Cancel + OK buttons
                                actions: ["cancel", "accept"],
                              },
                            }}
                          />
                        </LocalizationProvider>

                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          adapterLocale={es}
                        >
                          <DesktopTimePicker
                            label="Hora Inicio"
                            value={startTime}
                            onChange={(newValue) =>
                              handleStartTimeChange(
                                newValue as unknown as Date | null
                              )
                            }
                            slotProps={{
                              textField: {
                                size: "small",
                                fullWidth: true,
                                placeholder: "8:00",
                                sx: {
                                  backgroundColor: "#fff",
                                  "& .MuiOutlinedInput-root": {
                                    borderRadius: "4px",
                                  },
                                },
                              },
                            }}
                            ampm={false} // Formato 24 horas
                          />
                        </LocalizationProvider>
                        {/* Filtro Hora Fin */}
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          adapterLocale={es}
                        >
                          <DesktopTimePicker
                            label="Hora Fin"
                            value={endTime}
                            onChange={(newValue) =>
                              handleEndTimeChange(
                                newValue as unknown as Date | null
                              )
                            }
                            slotProps={{
                              textField: {
                                size: "small",
                                fullWidth: true,
                                placeholder: "16:00",
                                sx: {
                                  backgroundColor: "#fff",
                                  "& .MuiOutlinedInput-root": {
                                    borderRadius: "4px",
                                  },
                                },
                              },
                            }}
                            ampm={false} // Formato 24 horas
                          />
                        </LocalizationProvider>

                        {/* Reset (icon) at the end of the row; keep its height in sync */}
                        <Box
                          sx={{
                            flex: "0 0 auto",
                            display: "flex",
                            alignItems: "stretch",
                            height: "100%",
                          }}
                        >
                          <IconButton
                            onClick={handleResetFilters}
                            aria-label="restablecer filtros"
                            size="medium"
                            sx={{
                              border: "1px solid rgba(0,0,0,0.12)",
                              borderRadius: 1,
                              height: "100%",
                              width: 56,
                              bgcolor: "transparent",
                              ml: 1,
                            }}
                          >
                            <RestartAlt />
                          </IconButton>
                        </Box>
                      </Box>

                      {/* Chart and Cards */}
                      <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                        {/* Chart Placeholder */}
                        <Box sx={{ flex: "0 0 80%" }}>
                          <StackedBarChartOpa
                            selectedSerieId={selectedSerieId}
                            startTime={startTime}
                            endTime={endTime}
                            dateRange={dateRange}
                          />
                        </Box>

                        {/* Stats Cards */}
                        <Stack
                          spacing={2}
                          sx={{ flex: "0 0 calc(20% - 24px)" }}
                        >
                          <Card
                            sx={{
                              border: "1px solid rgba(0,0,0,0.12)",
                              flex: 1,
                            }}
                          >
                            <CardContent>
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                sx={{ mb: 1 }}
                              >
                                <Box
                                  sx={{
                                    width: 18,
                                    height: 5,
                                    bgcolor: "#0e9753",
                                  }}
                                />
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.6)",
                                  }}
                                >
                                  Cantidad Máxima Ofertada
                                </Typography>
                              </Stack>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Monto <strong>1.000.000</strong>
                              </Typography>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Bid to Cover <strong>0,8x</strong>
                              </Typography>
                            </CardContent>
                          </Card>

                          <Card
                            sx={{
                              border: "1px solid rgba(0,0,0,0.12)",
                              flex: 1,
                            }}
                          >
                            <CardContent>
                              <Stack
                                direction="row"
                                spacing={1}
                                alignItems="center"
                                sx={{ mb: 1 }}
                              >
                                <Box
                                  sx={{
                                    width: 18,
                                    height: 5,
                                    bgcolor: "#ffa47f",
                                  }}
                                />
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    color: "rgba(0,0,0,0.6)",
                                  }}
                                >
                                  Cantidad Mínima Ofertada
                                </Typography>
                              </Stack>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Monto <strong>500.000</strong>
                              </Typography>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Bid to Cover <strong>1,6x</strong>
                              </Typography>
                            </CardContent>
                          </Card>

                          <Card
                            sx={{
                              border: "1px solid rgba(0,0,0,0.12)",
                              flex: 1,
                            }}
                          >
                            <CardContent>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "rgba(0,0,0,0.6)",
                                  mb: 1,
                                }}
                              >
                                Cantidad Total en Aceptaciones
                              </Typography>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                800.000
                              </Typography>
                            </CardContent>
                          </Card>
                        </Stack>
                      </Stack>

                      {/* Table */}
                      <TableContainer
                        component={Paper}
                        sx={{
                          border: "1px solid rgba(0,0,0,0.12)",
                          borderRadius: 2,
                        }}
                      >
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell sx={{ fontWeight: 500 }}>
                                Entidad
                              </TableCell>
                              <TableCell sx={{ fontWeight: 500 }}>
                                N° Aceptaciones
                              </TableCell>
                              {seriesColumns.map((serie) => (
                                <TableCell
                                  key={serie.id}
                                  sx={{ fontWeight: 500 }}
                                >
                                  <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                  >
                                    <span>{serie.name}</span>
                                    <Box
                                      sx={{
                                        width: 24,
                                        height: 8,
                                        bgcolor: serie.color,
                                        borderRadius: 0.5,
                                      }}
                                    />
                                  </Stack>
                                </TableCell>
                              ))}
                              <TableCell sx={{ fontWeight: 500 }}>
                                Total
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {/* Filas de datos */}
                            {entitiesData.map((row) => (
                              <TableRow key={row.id}>
                                <TableCell>{row.entity}</TableCell>
                                <TableCell>{row.acceptances}</TableCell>
                                {seriesColumns.map((serie) => (
                                  <TableCell key={serie.id}>
                                    {formatCurrency(
                                      row.series[
                                        serie.id as keyof typeof row.series
                                      ]
                                    )}
                                  </TableCell>
                                ))}
                                <TableCell>
                                  {formatCurrency(row.total)}
                                </TableCell>
                              </TableRow>
                            ))}

                            {/* Fila de Total General */}
                            <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                              <TableCell sx={{ fontWeight: 600 }}>
                                Total
                              </TableCell>
                              <TableCell sx={{ fontWeight: 600 }}>
                                {totals.acceptances}
                              </TableCell>
                              {seriesColumns.map((serie) => (
                                <TableCell
                                  key={serie.id}
                                  sx={{ fontWeight: 600 }}
                                >
                                  {formatCurrency(totals.series[serie.id])}
                                </TableCell>
                              ))}
                              <TableCell sx={{ fontWeight: 600 }}>
                                {formatCurrency(totals.total)}
                              </TableCell>
                            </TableRow>

                            {/* Fila de N° Total de Aceptaciones por Serie */}
                            <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                              <TableCell sx={{ fontWeight: 600 }}>
                                N° de Aceptaciones
                              </TableCell>
                              <TableCell></TableCell>
                              {seriesColumns.map((serie) => (
                                <TableCell
                                  key={serie.id}
                                  sx={{ fontWeight: 600 }}
                                >
                                  {totals.acceptances}
                                </TableCell>
                              ))}
                              <TableCell sx={{ fontWeight: 600 }}>
                                {totals.acceptances}
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion defaultExpanded={true}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                        Registro de Aceptaciones
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <RegistroAceptacionesOpa />
                    </AccordionDetails>
                  </Accordion>
                </Box>
              )}
              {/* Tab Content - INGRESO DE ACEPTACIONES */}
              {tabValue === 1 && (
                <Box sx={{ p: 4 }}>
                  <Typography color="text.secondary">
                    <IngresoAceptacionesOpa onTabChange={setTabValue} />
                  </Typography>
                </Box>
              )}
              {/* Tab Content - REPORTES Y BOLETINES */}
              {tabValue === 2 && (
                <Box sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    {/* Accordion - Reportes */}
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          Reportes
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack spacing={2}>
                          <Stack spacing={2} direction={"row"}>
                            {/* File Card 1 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    Reporte de Aceptaciones.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    2.5 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>

                            {/* File Card 2 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    Resumen Ejecutivo.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    1.8 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>
                          </Stack>
                          {/* Descargar Todo Button */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              mt: 2,
                            }}
                          >
                            <Button
                              variant="contained"
                              size="medium"
                              startIcon={<DownloadIcon />}
                              sx={{
                                backgroundColor: "#FF4201",
                                color: "white",
                                textTransform: "uppercase",
                                fontWeight: 500,
                                px: 3,
                                "&:hover": {
                                  backgroundColor: "#e03a01",
                                },
                              }}
                            >
                              Descargar Todo
                            </Button>
                          </Box>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>

                    {/* Accordion - Boletines */}
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          Boletines
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack spacing={2}>
                          <Stack spacing={2} direction={"row"}>
                            {/* File Card 1 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    Reporte de Resultados.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    2.5 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>
                          </Stack>
                          {/* Descargar Todo Button */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              mt: 2,
                            }}
                          >
                            <Button
                              variant="contained"
                              size="medium"
                              startIcon={<DownloadIcon />}
                              sx={{
                                backgroundColor: "#FF4201",
                                color: "white",
                                textTransform: "uppercase",
                                fontWeight: 500,
                                px: 3,
                                "&:hover": {
                                  backgroundColor: "#e03a01",
                                },
                              }}
                            >
                              Descargar Todo
                            </Button>
                          </Box>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </Stack>
                </Box>
              )}
              {/* Tab Content - INFORMACIÓN DEL EMISOR */}
              {tabValue === 3 && (
                <Box sx={{ p: 4 }}>
                  <Stack spacing={3}>
                    {/* Accordion - Reportes */}
                    <Accordion defaultExpanded={true}>
                      <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                          Reportes
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack spacing={2}>
                          <Stack spacing={2} direction={"row"}>
                            {/* File Card 1 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    aviso_de_oferta.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    2.5 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>

                            {/* File Card 2 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    Prospecto_de_la_emisión.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    1.8 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>
                            {/* File Card 2 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    Resumen Ejecutivo.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    1.8 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>
                          </Stack>
                          <Stack spacing={2} direction={"row"}>
                            {/* File Card 1 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    Calificación.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    2.5 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>

                            {/* File Card 2 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    adenda_al_prospecto.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    1.8 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>
                            {/* File Card 2 */}
                            <Paper
                              variant="outlined"
                              sx={{
                                p: 2,
                                border: "1px solid rgba(0,0,0,0.12)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 2,
                                }}
                              >
                                <Checkbox />
                                <Box>
                                  <Typography
                                    sx={{ fontSize: "14px", fontWeight: 500 }}
                                  >
                                    opinión_de_segunda_parte.pdf
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontSize: "12px",
                                      color: "rgba(0,0,0,0.6)",
                                    }}
                                  >
                                    1.8 MB • Publicado
                                  </Typography>
                                </Box>
                              </Box>
                              <IconButton
                                sx={{
                                  color: "#FF4201",
                                  "&:hover": {
                                    backgroundColor: "rgba(255,66,1,0.08)",
                                  },
                                }}
                              >
                                <DownloadIcon />
                              </IconButton>
                            </Paper>
                          </Stack>
                          {/* Descargar Todo Button */}
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              mt: 2,
                            }}
                          >
                            <Button
                              variant="contained"
                              size="medium"
                              startIcon={<DownloadIcon />}
                              sx={{
                                backgroundColor: "#FF4201",
                                color: "white",
                                textTransform: "uppercase",
                                fontWeight: 500,
                                px: 3,
                                "&:hover": {
                                  backgroundColor: "#e03a01",
                                },
                              }}
                            >
                              Descargar Todo
                            </Button>
                          </Box>
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </Stack>
                </Box>
              )}
              {/* Tab Content - INFORMACIÓN DE LA OPERACIÓN */}
              {tabValue === 4 && (
                <Box sx={{ p: 4, textAlign: "center" }}>
                  <Typography color="text.secondary">
                    Contenido de INFORMACIÓN DE LA OPERACIÓN...
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </ProtectedRoute>
    </RoleProtectedRoute>
  );
}
