import React from "react";
import {
  Box,
  Container,
  Breadcrumbs,
  Typography,
  Link,
  Paper,
  Grid,
  Card,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  Button,
  Chip,
} from "@mui/material";
import {
  Search,
  CalendarToday,
  ViewColumn,
  FilterList,
  Refresh,
  Description,
} from "@mui/icons-material";
import { OperationsTable } from "./OperationsTable";

interface MainContentProps {
  sidebarWidth: number;
}

export function MainContent({ sidebarWidth }: MainContentProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        // ml: `${sidebarWidth}px`,
        mt: "56px",
        transition: "margin-left 0.3s",
        backgroundColor: "#ffffff",
      }}
    >
      <Container maxWidth={false} sx={{ py: 3, px: 2 }}>
        {/* Breadcrumbs and Header */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link
              color="primary"
              href="#"
              sx={{
                textDecoration: "none",
                borderBottom: "2px solid #FF411C",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Gestión de Aceptaciones y Cesiones
            </Link>
          </Breadcrumbs>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <Box>
              <Typography
                variant="h4"
                sx={{ mb: 1, color: "rgba(0,0,0,0.87)" }}
              >
                Gestión de Aceptaciones y Cesiones
              </Typography>
            </Box>
            <Box
              sx={{ textAlign: "right", fontSize: "14px", color: "#3D3D3D" }}
            >
              <Typography variant="body2">
                Último Inicio de Sesión: Martes, 13 de mayo 2:00pm
              </Typography>
              <Typography variant="body2">IP: 171.112.111</Typography>
            </Box>
          </Box>
        </Box>

        {/* Filters */}
        <Paper sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <TextField
                fullWidth
                placeholder="Buscar Promotor"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <FormControl fullWidth size="small">
                <InputLabel>
                  Fechas de Final de Recepción de Aceptaci..
                </InputLabel>
                <Select
                  label="Fechas de Final de Recepción de Aceptaci.."
                  endAdornment={
                    <InputAdornment position="end">
                      <CalendarToday />
                    </InputAdornment>
                  }
                >
                  <MenuItem value="">Seleccionar fecha</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Estado</InputLabel>
                <Select label="Estado">
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="vigente">Vigente</MenuItem>
                  <MenuItem value="cerrada">Cerrada</MenuItem>
                  <MenuItem value="finalizada">Finalizada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Summary Cards */}
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card sx={{ backgroundColor: "#f4f4f4", minHeight: 60 }}>
              <CardContent
                sx={{ display: "flex", alignItems: "center", gap: 1, py: 1.5 }}
              >
                <CalendarToday sx={{ color: "#666", fontSize: 18 }} />
                <Typography variant="body2">
                  Fecha final de gestión de aceptaciones: 5 de Octubre 2025
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card sx={{ backgroundColor: "#f4f4f4", minHeight: 60 }}>
              <CardContent
                sx={{ display: "flex", alignItems: "center", gap: 1, py: 1.5 }}
              >
                <Description sx={{ color: "#666", fontSize: 18 }} />
                <Typography variant="body2">
                  <span style={{ fontSize: "14px" }}>
                    Cantidad de operaciones:
                  </span>
                  <span style={{ fontSize: "16px", marginLeft: "4px" }}>
                    50
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Table Actions */}
        <Paper sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="body1">Ver</Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                startIcon={<ViewColumn />}
                size="small"
                sx={{
                  color: "#FF411C",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Columnas
              </Button>
              <Button
                startIcon={<FilterList />}
                size="small"
                sx={{
                  color: "#FF411C",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Filtros
              </Button>
              <Button
                startIcon={<Refresh />}
                size="small"
                sx={{
                  color: "#FF411C",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Actualizar
              </Button>
            </Box>
          </Box>

          {/* Operations Table */}
          <OperationsTable />
        </Paper>
      </Container>
    </Box>
  );
}
