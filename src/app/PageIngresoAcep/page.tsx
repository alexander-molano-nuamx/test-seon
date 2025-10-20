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

  const seriesData = [
    {
      id: "serie01",
      name: "Serie A",
      shortName: "Serie A18",
      duration: "A18 -18 meses en ",
      type: "Tasa Fija E.A.",
      color: "#B22A09",
    },
    {
      id: "serie02",
      name: "Serie B",
      shortName: "Serie B24",
      duration: "B24 - 24 meses en ",
      type: "Tasa Fija E.A.",
      color: "#FF411C",
    },
    {
      id: "serie03",
      name: "Serie B",
      shortName: "Serie B72",
      duration: "B72 - 72 meses en ",
      type: "IBR + Margen N.M.V.",
      color: "#FFA47F",
    },
    {
      id: "serie04",
      name: "Serie B",
      shortName: "Serie B96",
      duration: "B96 - 96 meses en ",
      type: "Tasa Fija E.A.",
      color: "#FF8F00",
    },
    {
      id: "serie05",
      name: "Serie C",
      shortName: "Serie C24",
      duration: "C24 - 24 meses en ",
      type: "Tasa Fija E.A.",
      color: "#3D3D3D",
    },
    {
      id: "serie06",
      name: "Serie C",
      shortName: "Serie C32",
      duration: "B32 - 32 meses en ",
      type: "IPC + Margen E.A.",
      color: "#8F8F8F",
    },
    {
      id: "serie07",
      name: "Serie C",
      shortName: "Serie C48",
      duration: "A48 - 48 meses en ",
      type: "Tasa Fija E.A.",
      color: "#E0E0E0",
    },
  ];

  const seriesColumns = [
    { id: "serie01", name: "Serie A18", color: "#B22A09" },
    { id: "serie02", name: "Serie B24", color: "#FF411C" },
    { id: "serie03", name: "Serie B72", color: "#FFA47F" },
    { id: "serie04", name: "Serie B96", color: "#FF8F00" },
    { id: "serie05", name: "Serie C24", color: "#3D3D3D" },
    { id: "serie06", name: "Serie C32", color: "#8F8F8F" },
    { id: "serie07", name: "Serie C48", color: "#E0E0E0" },
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
  return (
    <Box sx={{ bgcolor: "white", display: "flex", minHeight: "100vh", p: 3 }}>
      {/* Header */}
      <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
        <Card sx={{ mb: 2, border: "1px solid rgba(0,0,0,0.12)" }}>
          <CardContent>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.6)",
              }}
            >
              Tipo de Valor{" "}
              <span style={{ fontWeight: 600 }}>
                Bono con Deposito de Corto plazo Papel Comercial
              </span>
            </Typography>
          </CardContent>
        </Card>

        {/* Card Info */}
        <Card sx={{ mb: 2, border: "1px solid rgba(0,0,0,0.12)" }}>
          <CardContent>
            <Stack
              direction="row"
              spacing={3}
              divider={<Divider orientation="vertical" flexItem />}
              alignItems="center"
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
          <Accordion sx={{ mb: 3, border: "1px solid rgba(0,0,0,0.12)" }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: "#fafafa",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
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
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                {seriesData.map((serie) => (
                  <Card
                    key={serie.id}
                    sx={{
                      flex: "1 1 calc(33.333% - 16px)",
                      minWidth: "250px",
                      maxWidth: "440px",
                      minHeight: "40px",
                      border: "1px solid rgba(0,0,0,0.12)",
                      borderLeft: `4px solid ${serie.color}`,
                      transition: "all 0.3s",
                      "&:hover": {
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <CardContent
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#3D3D3D",
                        }}
                      >
                        {serie.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "rgba(0,0,0,0.6)",
                        }}
                      >
                        {serie.duration}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color: "rgba(0,0,0,0.6)",
                        }}
                      >
                        {serie.type}
                      </Typography>
                    </CardContent>
                  </Card>
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
        </Box>

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
              <Stack spacing={2} sx={{ flex: "0 0 calc(20% - 24px)" }}>
                <Card sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                  <CardContent>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{ mb: 1 }}
                    >
                      <Box sx={{ width: 18, height: 5, bgcolor: "#0e9753" }} />
                      <Typography
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                      >
                        Máximo Total Ofertado
                      </Typography>
                    </Stack>
                    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                      Monto <strong>$60.000.000</strong>
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
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
                      <Box sx={{ width: 18, height: 5, bgcolor: "#ffa47f" }} />
                      <Typography
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                      >
                        Total Ofertado
                      </Typography>
                    </Stack>
                    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                      Monto <strong>$50.000.000</strong>
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                      Bid to Cover <strong>94,00 %</strong>
                    </Typography>
                  </CardContent>
                </Card>

                <Card sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)", mb: 1 }}
                    >
                      Monto Total en Aceptaciones
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                      $47.000.000
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Stack>

            {/* Table */}
            <TableContainer
              component={Paper}
              sx={{ border: "1px solid rgba(0,0,0,0.12)", borderRadius: 2 }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 500 }}>Entidad</TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      N° Aceptaciones por Entidad
                    </TableCell>
                    {seriesColumns.map((serie) => (
                      <TableCell key={serie.id} sx={{ fontWeight: 500 }}>
                        <Stack direction="row" spacing={1} alignItems="center">
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
                            row.series[serie.id as keyof typeof row.series]
                          )}
                        </TableCell>
                      ))}
                      <TableCell>{formatCurrency(row.total)}</TableCell>
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
                      <TableCell key={serie.id} sx={{ fontWeight: 600 }}>
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
                      <TableCell key={serie.id} sx={{ fontWeight: 600 }}>
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

        {/* Accordion - Registro de Aceptaciones */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
              Registro de Aceptaciones
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Contenido del registro de aceptaciones...</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
