"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Tabs,
  Tab,
  FormControl,
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
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Autocomplete } from "@/components/Autocomplete";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { StackedBarChart } from "@/components/StackedBarChart";
import { RegistroAceptaciones } from "@/components/RegistroAceptaciones";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RoleProtectedRoute } from "@/components/RoleProtectedRoute";

const drawerWidth = 240;

const statusOptions = [
  { id: "todos", name: "Filtrar por series" },
  { id: "adjudicada", name: "serieA" },
  { id: "cerrada", name: "serieB" },
  { id: "finalizada", name: "serieC" },
];

export default function PageIngresoAcep() {
  const [tabValue, setTabValue] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [filterStatus, setFilterStatus] = useState("");

  const customLinks = [
    { name: "Operaciones especiales", path: "/PageGestAcepCes" },
    { name: "ALICORP", path: "/PageIngresoAcep" },
  ];

  interface SerieItem {
    id: number;
    color: string;
    name: string;
    description: string;
    additionalInfo?: string[];
  }

  const seriesData: SerieItem[] = [
    {
      id: 1,
      color: "#b22a09",
      name: "SerieA",
      description: "A18 -18 meses en Tasa Fija",
      additionalInfo: ["E.A."],
    },
    {
      id: 2,
      color: "#ff411c",
      name: "SerieB",
      description: "B24 - 24 meses en Tasa Fija",
      additionalInfo: ["E.A."],
    },
    {
      id: 3,
      color: "#ffa47f",
      name: "SerieB",
      description: "B72 - 72 meses en IBR",
      additionalInfo: ["+", "Margen N.M.V."],
    },
    {
      id: 4,
      color: "#ff8f00",
      name: "SerieA",
      description: "A18 -18 meses en Tasa Fija",
      additionalInfo: ["E.A."],
    },
    {
      id: 5,
      color: "#3d3d3d",
      name: "SerieA",
      description: "A18 -18 meses en Tasa Fija",
      additionalInfo: ["E.A."],
    },
    {
      id: 6,
      color: "#8f8f8f",
      name: "SerieB",
      description: "B24 - 24 meses en Tasa Fija",
      additionalInfo: ["E.A."],
    },
    {
      id: 7,
      color: "#4dd0e1",
      name: "SerieB",
      description: "B72 - 72 meses en IBR",
      additionalInfo: ["+", "Margen N.M.V."],
    },
  ];

  const seriesColumns = [
    { id: "serie01", name: "Serie A18", color: "#b22a09" },
    { id: "serie02", name: "Serie B24", color: "#ff411c" },
    { id: "serie03", name: "Serie B72", color: "#ffa47f" },
    { id: "serie04", name: "Serie B96", color: "#FF8F00" },
    { id: "serie05", name: "Serie C24", color: "#3D3D3D" },
    { id: "serie06", name: "Serie C32", color: "#8F8F8F" },
    { id: "serie07", name: "Serie C48", color: "#4dd0e1" },
  ];

  const entitiesData = [
    {
      id: 1,
      entity: "Diviso SAB",
      acceptances: 20,
      series: {
        serie01: 700000,
        serie02: 800000,
        serie03: 600000,
        serie04: 3500000,
        serie05: 700000,
        serie06: 600000,
        serie07: 2500000,
      },
      total: 10500000,
    },
    {
      id: 2,
      entity: "Credicorp capital",
      acceptances: 30,
      series: {
        serie01: 700000,
        serie02: 800000,
        serie03: 700000,
        serie04: 3500000,
        serie05: 700000,
        serie06: 700000,
        serie07: 2500000,
      },
      total: 8500000,
    },
    {
      id: 3,
      entity: "Inteligo",
      acceptances: 50,
      series: {
        serie01: 4000000,
        serie02: 5000000,
        serie03: 3000000,
        serie04: 3000000,
        serie05: 3000000,
        serie06: 3000000,
        serie07: 3000000,
      },
      total: 12000000,
    },
    {
      id: 4,
      entity: "BNB",
      acceptances: 50,
      series: {
        serie01: 2600000,
        serie02: 9600000,
        serie03: 3300000,
        serie04: 3300000,
        serie05: 3300000,
        serie06: 3300000,
        serie07: 3300000,
      },
      total: 15300000,
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
    return value === 0 ? "$0" : `$${value.toLocaleString("es-PE")}`;
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

  const handleStatusChange = (value: unknown) => {
    const typedValue = value as { id: string; name: string } | null;
    setSelectedStatus(typedValue || { id: "todos", name: "Todos" });
    setFilterStatus(typedValue?.id || "todos");
  };

  const handleDateChange = (newValue: unknown) => {
    const typedValue = newValue as Date | null;
    setStartDate(typedValue);
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
                <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
                  Último Inicio de Sesión:{" "}
                  <strong>Martes, 13 de mayo 2:00pm</strong>
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
                  IP: <strong>171.112.111</strong>
                </Typography>
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
              Tipo de Valor{" "}
              <span style={{ fontWeight: 600 }}>
                Bono con Deposito de Corto plazo Papel Comercial
              </span>
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
                        src={"/assets/alicorp-logo.png"}
                        alt="Logo"
                        width={100}
                        height={100}
                      />
                    </Box>
                    <Typography sx={{ fontSize: "16px" }}>
                      ALICORP - OPP RF
                    </Typography>
                  </Box>

                  {/* Monto Total */}
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "16px" }}>
                      Monto total ofertado
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      $50.000.000 - PEN
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
                    Series Total Ofertadas: {seriesData.length}
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
                    {seriesData.map((serie) => (
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
                        <Typography
                          component="span"
                          sx={{
                            fontWeight: 500,
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.6)",
                            letterSpacing: "0.1px",
                            lineHeight: 1.57,
                          }}
                        >
                          •
                        </Typography>
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
                          {serie.description}
                        </Typography>
                        {serie.additionalInfo?.map((info, idx) => (
                          <Typography
                            key={idx}
                            component="span"
                            sx={{
                              fontWeight: 600,
                              fontSize: "14px",
                              color: "rgba(0,0,0,0.6)",
                              letterSpacing: "0.1px",
                              lineHeight: 1.57,
                            }}
                          >
                            {info}
                          </Typography>
                        ))}
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
                  label="INGRESO DE ACEPTACIONES"
                  sx={{ fontWeight: 500, fontSize: "14px" }}
                />
                <Tab
                  label="REPORTES Y BOLETINES"
                  sx={{ fontWeight: 500, fontSize: "14px" }}
                />
                <Tab
                  label="INFORMACIÓN DEL EMISOR"
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
                      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                        {/* Desplegable Estado */}
                        <FormControl fullWidth>
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
                        </FormControl>

                        {/* Selector de Hora */}
                        <FormControl fullWidth>
                          <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            adapterLocale={es}
                          >
                            <MobileTimePicker />
                          </LocalizationProvider>
                        </FormControl>
                      </Stack>

                      {/* Chart and Cards */}
                      <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
                        {/* Chart Placeholder */}
                        <Box sx={{ flex: "0 0 80%" }}>
                          <StackedBarChart />
                        </Box>

                        {/* Stats Cards */}
                        <Stack
                          spacing={2}
                          sx={{ flex: "0 0 calc(20% - 24px)" }}
                        >
                          <Card sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
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
                                  Máximo Total Ofertado
                                </Typography>
                              </Stack>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Monto <strong>$60.000.000</strong>
                              </Typography>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Bid to Cover <strong>78,33 %</strong>
                              </Typography>
                            </CardContent>
                          </Card>

                          <Card sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
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
                                  Total Ofertado
                                </Typography>
                              </Stack>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Monto <strong>$50.000.000</strong>
                              </Typography>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                Bid to Cover <strong>94,00 %</strong>
                              </Typography>
                            </CardContent>
                          </Card>

                          <Card sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                            <CardContent>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "rgba(0,0,0,0.6)",
                                  mb: 1,
                                }}
                              >
                                Monto Total en Aceptaciones
                              </Typography>
                              <Typography
                                sx={{ fontSize: "16px", fontWeight: 700 }}
                              >
                                $47.000.000
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
                                N° Aceptaciones por Entidad
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
                                Total Ofertada
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
                                Total General
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
                                N° Total de Aceptaciones por Serie
                              </TableCell>
                              <TableCell></TableCell>
                              {seriesColumns.map((serie) => (
                                <TableCell
                                  key={serie.id}
                                  sx={{ fontWeight: 600 }}
                                >
                                  {acceptancesBySeries[serie.id]}
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
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                        Registro de Aceptaciones
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <RegistroAceptaciones />
                    </AccordionDetails>
                  </Accordion>
                </Box>
              )}
              {/* Tab Content - REPORTES Y BOLETINES */}
              {/* Tab Content - INFORMACIÓN DEL EMISOR */}
              {/* Tab Content - INFORMACIÓN DE LA OPERACIÓN */}
            </Box>

            {/* Accordion - Registro de Aceptaciones */}
          </Box>
        </Box>
      </ProtectedRoute>
    </RoleProtectedRoute>
  );
}
