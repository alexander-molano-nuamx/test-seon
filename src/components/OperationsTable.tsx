import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Link,
  Box,
  TablePagination,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import {
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
} from "@mui/icons-material";
import Image from "next/image";
import { OperationsCards } from "@/components/ui/OperationsCards";

interface OperationsTableProps {
  searchEmisor?: string;
  filterDate?: string;
  filterStatus?: string;
}

interface Operation {
  id: number;
  status: "vigente" | "cerrada" | "finalizada" | "adjudicada";
  issuer: string;
  issuerLogo?: string;
  operationType: string;
  nemotechnical: string;
  startDate: string;
  offerAmount: string;
  totalAmount: string;
  closeDate: string;
  seriesNumber: string;
  currency?: string;
}

const mockData: Operation[] = [
  {
    id: 1,
    status: "vigente",
    issuer: "BBVA",
    issuerLogo: "/assets/bbva.png",
    operationType: "Emisión RV",
    nemotechnical: "BBVAEJEMPLO",
    startDate: "15 de marzo 2024",
    offerAmount: "1.000.000",
    totalAmount: "43.000.000.00",
    closeDate: "03 de octubre - 15 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 2,
    status: "cerrada",
    issuer: "Credicorp Capital",
    issuerLogo: "/assets/credicorp.png",
    operationType: "Colocación RF",
    nemotechnical: "CREDIECXAMPLE",
    startDate: "22 de marzo 2024",
    offerAmount: "234.870.000",
    totalAmount: "234.870.00",
    closeDate: "03 de octubre - 17 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "USD",
  },
  {
    id: 3,
    status: "vigente",
    issuer: "Kallpa",
    issuerLogo: "/assets/kallpa.png",
    operationType: "OPA",
    nemotechnical: "KALLPEXEMPLO",
    startDate: "28 de marzo 2024",
    offerAmount: "500.000",
    totalAmount: "20.000.000",
    closeDate: "03 de octubre - 19 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 4,
    status: "finalizada",
    issuer: "BTG Pactual",
    issuerLogo: "/assets/pactal.png",
    operationType: "OPI",
    nemotechnical: "BGTBEISPIEL",
    startDate: "15 de marzo 2024",
    offerAmount: "300.000",
    totalAmount: "900.000",
    closeDate: "03 de octubre - 22 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "USD",
  },
  {
    id: 5,
    status: "cerrada",
    issuer: "Inteligo",
    issuerLogo: "/assets/inteligo.png",
    operationType: "OPV",
    nemotechnical: "INTELEXEMPLE",
    startDate: "15 de marzo 2024",
    offerAmount: "70.000",
    totalAmount: "2.660.000",
    closeDate: "03 de octubre - 25 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 6,
    status: "adjudicada",
    issuer: "Diviso",
    issuerLogo: "/assets/diviso.png",
    operationType: "OPC",
    nemotechnical: "DIVISOLIZI",
    startDate: "15 de marzo 2024",
    offerAmount: "2.500.000",
    totalAmount: "50.000.000",
    closeDate: "03 de octubre - 28 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 7,
    status: "cerrada",
    issuer: "Scotiabank",
    issuerLogo: "/assets/scotiabank.png",
    operationType: "Canje",
    nemotechnical: "SCOTIAREI",
    startDate: "15 de marzo 2024",
    offerAmount: "348.454.870",
    totalAmount: "348.454.870",
    closeDate: "03 de octubre - 29 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 8,
    status: "cerrada",
    issuer: "FND",
    issuerLogo: "/assets/fdn.png",
    operationType: "Enajenación esta..",
    nemotechnical: "NEXUSAMPLE",
    startDate: "15 de marzo 2024",
    offerAmount: "10.000.000",
    totalAmount: "12.300.000",
    closeDate: "03 de octubre - 29 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 9,
    status: "cerrada",
    issuer: "BBVA",
    issuerLogo: "/assets/bbva.png",
    operationType: "Reestructuración ..",
    nemotechnical: "VORTEXMODUL",
    startDate: "15 de marzo 2024",
    offerAmount: "1.250.000",
    totalAmount: "75.000.000",
    closeDate: "03 de octubre - 30 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "USD",
  },
  {
    id: 10,
    status: "finalizada",
    issuer: "BBVA",
    issuerLogo: "/assets/bbva.png",
    operationType: "Financiamiento c ..",
    nemotechnical: "PRECISIONEXEM",
    startDate: "15 de marzo 2024",
    offerAmount: "450.000",
    totalAmount: "1.250.000",
    closeDate: "03 de octubre - 31 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
];

const getStatusChip = (status: Operation["status"]) => {
  const statusConfig = {
    vigente: { label: "Vigente", bg: "rgba(46,125,50,0.3)" },
    cerrada: { label: "Cerrada", bg: "rgba(0,0,0,0.08)" },
    finalizada: { label: "Finalizada", bg: "rgba(0,0,0,0.08)" },
    adjudicada: { label: "Adjudicada", bg: "#f8e2da" },
  };

  const config = statusConfig[status];
  return (
    <Chip
      label={config.label}
      size="small"
      sx={{
        backgroundColor: config.bg,
        color: "rgba(0,0,0,0.87)",
        fontSize: "13px",
        height: 24,
      }}
    />
  );
};

export function OperationsTable({
  searchEmisor = "",
  filterDate = "",
  filterStatus = "",
}: OperationsTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [viewMode, setViewMode] = React.useState<"table" | "cards">("table");

  // Filtrar datos
  const filteredData = React.useMemo(() => {
    return mockData.filter((item) => {
      // Filtro por emisor (búsqueda case-insensitive)
      const matchesEmisor =
        searchEmisor === "" ||
        item.issuer.toLowerCase().includes(searchEmisor.toLowerCase());

      // Filtro por fecha (comparar con startDate)
      const matchesDate =
        filterDate === "" || item.closeDate.includes(filterDate);

      // Filtro por estado
      const matchesStatus = filterStatus === "" || item.status === filterStatus;

      return matchesEmisor && matchesDate && matchesStatus;
    });
  }, [searchEmisor, filterDate, filterStatus]);

  // Reset page cuando cambian los filtros
  React.useEffect(() => {
    setPage(0);
  }, [searchEmisor, filterDate, filterStatus]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleViewModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newViewMode: "table" | "cards" | null
  ) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  return (
    <Box>
      {/* Selector de vista */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mb: 2,
          gap: 1,
        }}
      >
        <Typography variant="body2" sx={{ color: "#3D3D3D", fontSize: "14px" }}>
          Ver
        </Typography>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewModeChange}
          size="small"
          sx={{
            "& .MuiToggleButton-root": {
              border: "1px solid rgba(0,0,0,0.12)",
              color: "#3D3D3D",
              padding: "4px 8px",
              "&.Mui-selected": {
                backgroundColor: "#FF4201",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#FF3700",
                },
              },
            },
          }}
        >
          <ToggleButton value="table" aria-label="vista de tabla">
            <ViewListIcon sx={{ fontSize: 20 }} />
          </ToggleButton>
          <ToggleButton value="cards" aria-label="vista de tarjetas">
            <ViewModuleIcon sx={{ fontSize: 20 }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/* Mostrar tabla o tarjetas según el modo */}
      {viewMode === "table" ? (
        <>
          <TableContainer
            component={Paper}
            sx={{
              border: "1px solid rgba(0,0,0,0.12)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#fafafa" }}>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                      width: "132px",
                      minWidth: "132px",
                      maxWidth: "132px",
                    }}
                  >
                    Detalles
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Estado
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Emisor
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Tipo de Operación
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Nemotécnico
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Cantidad de la Oferta
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Monto de la Oferta
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Moneda de la Oferta
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Fecha de Cierre Ingreso de Aceptaciones/Cesiones
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      sx={{
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.04)",
                        },
                      }}
                    >
                      <TableCell
                        sx={{
                          padding: 0,
                          width: "132px",
                          minWidth: "132px",
                          maxWidth: "132px",
                        }}
                      >
                        <Link
                          href="#"
                          sx={{
                            color: "#FF4201",
                            textDecoration: "underline",
                            fontSize: "14px",
                            display: "block",
                            width: "100%",
                            height: "100%",
                            padding: "16px",
                            "&:hover": {
                              color: "#FF3700",
                              backgroundColor: "rgba(255, 66, 1, 0.04)",
                            },
                          }}
                        >
                          Ver Detalles
                        </Link>
                      </TableCell>
                      <TableCell>{getStatusChip(row.status)}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              position: "relative",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Image
                              src={row.issuerLogo || "/assets/default.png"}
                              alt={row.issuer}
                              width={32}
                              height={32}
                              style={{ objectFit: "contain" }}
                            />
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.87)" }}
                      >
                        {row.operationType}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.87)" }}
                      >
                        {row.nemotechnical}
                      </TableCell>

                      <TableCell
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.87)" }}
                      >
                        {row.offerAmount}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.87)" }}
                      >
                        {row.totalAmount}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.87)" }}
                      >
                        {row.currency}
                      </TableCell>
                      <TableCell
                        sx={{ fontSize: "14px", color: "rgba(0,0,0,0.87)" }}
                      >
                        {row.closeDate}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelRowsPerPage="Filas por página:"
            labelDisplayedRows={({ from, to, count }) =>
              `${from}-${to} de ${count}`
            }
            sx={{
              backgroundColor: "#fff",
              borderTop: "1px solid rgba(0,0,0,0.12)",
              "& .MuiTablePagination-toolbar": {
                justifyContent: "flex-end",
              },
            }}
          />
        </>
      ) : (
        <OperationsCards dataCard={filteredData} />
      )}
    </Box>
  );
}
