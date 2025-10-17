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
  Select,
  MenuItem,
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
import { ExpandMore, ExpandLess, Schedule } from "@mui/icons-material";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Autocomplete } from "@/components/Autocomplete";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@/components/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { es } from "date-fns/locale";
import { DateTimePicker } from "@/components/DateTimePicker";
import { TimePicker } from "@/components/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

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
    { name: "Gestión de Aceptaciones y Cesiones", path: "/PageGestAcepCes" },
    { name: "Ingreso de aceptaciones", path: "/PageIngresoAcep" },
  ];

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
        <Card sx={{ mb: 3, border: "1px solid rgba(0,0,0,0.12)" }}>
          <CardContent>
            <Stack
              direction="row"
              spacing={3}
              divider={<Divider orientation="vertical" flexItem />}
              alignItems="center"
            >
              <Typography sx={{ fontSize: "16px" }}>
                Series Total Ofertadas 3
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                SerieA • 72 meses en Renta Fija E.A.
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                SerieB • 96 meses en Renta Fija E.A.
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(0,0,0,0.6)",
                }}
              >
                SerieC • 24 meses en IBR + Margen N.M.V.
              </Typography>
            </Stack>
          </CardContent>
        </Card>

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
              <Card
                sx={{ flex: 1, p: 2, border: "1px solid rgba(0,0,0,0.12)" }}
              >
                <Box
                  sx={{
                    height: 332,
                    display: "flex",
                    alignItems: "flex-end",
                    gap: 1,
                    px: 2,
                  }}
                >
                  {[100, 122, 182, 182, 145, 163, 182, 198, 174].map(
                    (height, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          flex: 1,
                          height: `${height}px`,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Box sx={{ bgcolor: "#B22A09", height: "15%" }} />
                        <Box sx={{ bgcolor: "#FF3700", height: "70%" }} />
                        <Box sx={{ bgcolor: "#FFA47F", height: "15%" }} />
                      </Box>
                    )
                  )}
                </Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mt: 1, justifyContent: "space-around" }}
                >
                  {[
                    "8:00",
                    "9:00",
                    "10:00",
                    "11:00",
                    "12:00",
                    "13:00",
                    "14:00",
                    "15:00",
                    "16:00",
                  ].map((time) => (
                    <Typography
                      key={time}
                      sx={{ fontSize: "12px", fontWeight: 700 }}
                    >
                      {time}
                    </Typography>
                  ))}
                </Stack>
              </Card>

              {/* Stats Cards */}
              <Stack spacing={2} sx={{ width: 270 }}>
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
                    <TableCell sx={{ fontWeight: 500 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <span>SerieA 72</span>
                        <Box
                          sx={{
                            width: 24,
                            height: 8,
                            bgcolor: "#ffa47f",
                            borderRadius: 0.5,
                          }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <span>SerieB 76</span>
                        <Box
                          sx={{
                            width: 24,
                            height: 8,
                            bgcolor: "#ff3700",
                            borderRadius: 0.5,
                          }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <span>SerieC 24</span>
                        <Box
                          sx={{
                            width: 24,
                            height: 8,
                            bgcolor: "#b22a09",
                            borderRadius: 0.5,
                          }}
                        />
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 500 }}>
                      Total Ofertada
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Diviso SAB</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>$8.000.000</TableCell>
                    <TableCell>$2.500.000</TableCell>
                    <TableCell>$10.500.000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Credicorp capital</TableCell>
                    <TableCell>30</TableCell>
                    <TableCell>$1.000.000</TableCell>
                    <TableCell>$6.000.000</TableCell>
                    <TableCell>$1.500.000</TableCell>
                    <TableCell>$8.500.000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Inteligo</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>$4.000.000</TableCell>
                    <TableCell>$5.000.000</TableCell>
                    <TableCell>$3.000.000</TableCell>
                    <TableCell>$12.000.000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BNB</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>$2.600.000</TableCell>
                    <TableCell>$9.600.000</TableCell>
                    <TableCell>$3.300.000</TableCell>
                    <TableCell>$15.300.000</TableCell>
                  </TableRow>
                  <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                    <TableCell>Total General</TableCell>
                    <TableCell>150</TableCell>
                    <TableCell>$7.600.000</TableCell>
                    <TableCell>$28.600.000</TableCell>
                    <TableCell>$10.300.000</TableCell>
                    <TableCell>$47.000.000</TableCell>
                  </TableRow>
                  <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                    <TableCell>N° Total de Aceptaciones por Serie</TableCell>
                    <TableCell></TableCell>
                    <TableCell>40</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>60</TableCell>
                    <TableCell>150</TableCell>
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
