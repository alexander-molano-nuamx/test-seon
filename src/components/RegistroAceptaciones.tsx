"use client";

import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Search,
  Add as Plus,
  Edit,
  Delete as Trash2,
  ViewColumn as Columns3,
  FilterList as Filter,
  Refresh as RefreshCw,
  MoreVert as MoreVertical,
  AccessTime as Clock,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";

// Datos de ejemplo
const mockData = [
  {
    id: 1,
    orderId: 1,
    estado: "Ingresada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 2820000,
    tasa: "9.25%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "8:00",
  },
  {
    id: 2,
    orderId: 2,
    estado: "Modificada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 3760000,
    tasa: "9.40%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "9:00",
  },
  {
    id: 3,
    orderId: 3,
    estado: "Eliminada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 4700000,
    tasa: "9.55%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "10:00",
  },
  {
    id: 4,
    orderId: 4,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 5640000,
    tasa: "9.60%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "11:00",
  },
  {
    id: 5,
    orderId: 5,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 6580000,
    tasa: "9.75%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "12:00",
  },
  {
    id: 6,
    orderId: 6,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 7520000,
    tasa: "9.90%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "13:00",
  },
  {
    id: 7,
    orderId: 7,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 6110000,
    tasa: "10.10%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "14:00",
  },
  {
    id: 8,
    orderId: 8,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 5170000,
    tasa: "10.25%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "15:00",
  },
  {
    id: 9,
    orderId: 9,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 4700000,
    tasa: "10.40%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "15:30",
  },
  {
    id: 10,
    orderId: 10,
    estado: "Anulada",
    operador: "Oscar Ballesteros",
    leo: "AAAABH26",
    monto: 4700000,
    tasa: "10.55%",
    fechaIngreso: "03 de octubre 2025",
    horaIngreso: "16:00",
  },
];

export function RegistroAceptaciones() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [operador, setOperador] = useState("");
  const [estado, setEstado] = useState("");
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = mockData.slice(startIndex, endIndex);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRows(currentData.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (
    id: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case "Ingresada":
        return { bgcolor: "rgba(46,125,50,0.1)", color: "#2E7D32" };
      case "Modificada":
        return { bgcolor: "rgba(25,118,210,0.1)", color: "#1976D2" };
      case "Eliminada":
        return { bgcolor: "rgba(211,47,47,0.1)", color: "#D32F2F" };
      case "Anulada":
        return { bgcolor: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.6)" };
      default:
        return { bgcolor: "rgba(0,0,0,0.08)", color: "rgba(0,0,0,0.6)" };
    }
  };

  return (
    <Box sx={{ bgcolor: "white", borderRadius: 2 }}>
      {/* Tabs */}
      <Tabs
        value={tabValue}
        onChange={(e, newValue) => setTabValue(newValue)}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          "& .MuiTab-root": {
            textTransform: "uppercase",
            fontWeight: 500,
          },
          "& .Mui-selected": {
            color: "#FF4201 !important",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#FF4201",
          },
        }}
      >
        <Tab label="Registro de aceptaciones" />
        <Tab label="Cargue de saldos" />
      </Tabs>

      {/* Tab Content - Registro */}
      {tabValue === 0 && (
        <Box>
          {/* Filtros */}
          <Box
            sx={{
              p: 2,
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              gap: 2,
            }}
          >
            <TextField
              placeholder="Buscar por Order ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              sx={{ flex: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "rgba(0,0,0,0.54)" }} />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl size="small" sx={{ flex: 1 }}>
              <InputLabel>Operador</InputLabel>
              <Select
                value={operador}
                label="Operador"
                onChange={(e) => setOperador(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="oscar">Oscar Ballesteros</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ flex: 1 }}>
              <InputLabel>Estado</InputLabel>
              <Select
                value={estado}
                label="Estado"
                onChange={(e) => setEstado(e.target.value)}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="ingresada">Ingresada</MenuItem>
                <MenuItem value="modificada">Modificada</MenuItem>
                <MenuItem value="eliminada">Eliminada</MenuItem>
                <MenuItem value="anulada">Anulada</MenuItem>
              </Select>
            </FormControl>
            <TextField
              placeholder="Rango de Horas"
              size="small"
              sx={{ flex: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Clock sx={{ color: "rgba(0,0,0,0.54)" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Barra de acciones */}
          <Box
            sx={{
              p: 2,
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                startIcon={<Plus />}
                sx={{
                  color: "#FF4201",
                  "&:hover": { bgcolor: "rgba(255,66,1,0.08)" },
                  textTransform: "uppercase",
                }}
              >
                Ingresar aceptación
              </Button>
              <Button
                startIcon={<Edit />}
                disabled
                sx={{ textTransform: "uppercase" }}
              >
                Modificar
              </Button>
              <Button
                startIcon={<Trash2 />}
                disabled
                sx={{ textTransform: "uppercase" }}
              >
                Eliminar
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                startIcon={<Columns3 />}
                sx={{
                  color: "#FF4201",
                  "&:hover": { bgcolor: "rgba(255,66,1,0.08)" },
                  textTransform: "uppercase",
                }}
              >
                Columnas
              </Button>
              <Button
                startIcon={<Filter />}
                sx={{
                  color: "#FF4201",
                  "&:hover": { bgcolor: "rgba(255,66,1,0.08)" },
                  textTransform: "uppercase",
                }}
              >
                Filtros
              </Button>
              <Button
                startIcon={<RefreshCw />}
                sx={{
                  color: "#FF4201",
                  "&:hover": { bgcolor: "rgba(255,66,1,0.08)" },
                  textTransform: "uppercase",
                }}
              >
                Actualizar
              </Button>
              <IconButton
                sx={{
                  color: "#FF4201",
                  "&:hover": { bgcolor: "rgba(255,66,1,0.08)" },
                }}
              >
                <MoreVertical />
              </IconButton>
            </Box>
          </Box>

          {/* Tabla */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={
                        currentData.length > 0 &&
                        selectedRows.length === currentData.length
                      }
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>Detalles</TableCell>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Estado</TableCell>
                  <TableCell>Operador</TableCell>
                  <TableCell>L.E.O. / Referencia</TableCell>
                  <TableCell>Monto</TableCell>
                  <TableCell>Tasa</TableCell>
                  <TableCell>Fecha de Ingreso</TableCell>
                  <TableCell>Hora de Ingreso</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRows.includes(row.id)}
                        onChange={(e) => handleSelectRow(row.id, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        component="a"
                        href="#"
                        sx={{
                          color: "#FF4201",
                          textDecoration: "underline",
                          "&:hover": { color: "#FF3700" },
                        }}
                      >
                        Ver detalles
                      </Typography>
                    </TableCell>
                    <TableCell>{row.orderId}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.estado}
                        size="small"
                        sx={{
                          ...getEstadoColor(row.estado),
                          border: "1px solid",
                          borderColor: getEstadoColor(row.estado).color,
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.operador}</TableCell>
                    <TableCell>{row.leo}</TableCell>
                    <TableCell>${row.monto.toLocaleString()}</TableCell>
                    <TableCell>{row.tasa}</TableCell>
                    <TableCell>{row.fechaIngreso}</TableCell>
                    <TableCell>{row.horaIngreso}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginación */}
          <Box
            sx={{
              p: 2,
              borderTop: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Mostrando {startIndex + 1} a {Math.min(endIndex, mockData.length)}{" "}
              de {mockData.length} resultados
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<ChevronLeft />}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "contained" : "outlined"}
                    size="small"
                    onClick={() => setCurrentPage(page)}
                    sx={{
                      minWidth: "32px",
                      ...(currentPage === page && {
                        bgcolor: "#FF4201",
                        "&:hover": { bgcolor: "#FF3700" },
                      }),
                    }}
                  >
                    {page}
                  </Button>
                )
              )}
              <Button
                variant="outlined"
                size="small"
                endIcon={<ChevronRight />}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Siguiente
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* Tab Content - Cargue */}
      {tabValue === 1 && (
        <Box sx={{ p: 4, textAlign: "center" }}>
          <Typography color="text.secondary">
            Contenido de cargue de saldos...
          </Typography>
        </Box>
      )}
    </Box>
  );
}
