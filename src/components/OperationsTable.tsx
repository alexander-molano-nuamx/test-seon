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
import { OperationsCards } from "./OperationsCards";

interface OperationsTableProps {
  searchEmisor?: string;
  filterDate?: string;
  filterStatus?: string;
  startDate?: Date | null;
}

interface Operation {
  id: number;
  status: "inscrita" | "vigente" | "cerrada" | "finalizada" | "adjudicada";
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
    status: "inscrita",
    issuer: "ALICORP",
    issuerLogo: "/assets/alicorp.png",
    operationType: "OPP RF",
    nemotechnical: "ALICORP",
    startDate: "03 de octubre 2025",
    offerAmount: "",
    totalAmount: "$50.000.000",
    closeDate: "03 de octubre 2025 - 03 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 2,
    status: "finalizada",
    issuer: "SYRUS",
    issuerLogo: "/assets/syrus.png",
    operationType: "OPP RF",
    nemotechnical: "SYRUS1CP1C",
    startDate: "03 de octubre 2025",
    offerAmount: "",
    totalAmount: "$500.000",
    closeDate: "03 de octubre 2025 - 03 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "USD",
  },
  {
    id: 3,
    status: "vigente",
    issuer: "Bam",
    issuerLogo: "/assets/Bam.png",
    operationType: "OPA",
    nemotechnical: "Bam",
    startDate: "03 de octubre 2025",
    offerAmount: "1.000.000",
    totalAmount: "",
    closeDate: "03 de octubre 2025 - 03 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 4,
    status: "cerrada",
    issuer: "CREDICORP",
    issuerLogo: "/assets/volcan.png",
    operationType: "OPA",
    nemotechnical: "VOLCAN",
    startDate: "04 de octubre 2025",
    offerAmount: "4.870.000",
    totalAmount: "",
    closeDate: "04 de octubre 2025 - 04 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 5,
    status: "cerrada",
    issuer: "INCIMMET",
    issuerLogo: "/assets/Incimmet.png",
    operationType: "OPA",
    nemotechnical: "INCIMMET",
    startDate: "04 de octubre 2025",
    offerAmount: "50.000.000",
    totalAmount: "",
    closeDate: "04 de octubre 2025 - 04 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 6,
    status: "finalizada",
    issuer: "AJAIMEROJAS",
    issuerLogo: "/assets/ajaimerojas.png",
    operationType: "OPC",
    nemotechnical: "AJAIMEROJAS",
    startDate: "06 de octubre 2025",
    offerAmount: "500.000",
    totalAmount: "",
    closeDate: "06 de octubre 2025 - 06 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 7,
    status: "cerrada",
    issuer: "CAJAHUANCAYO",
    issuerLogo: "/assets/cajahuancayo.png",
    operationType: "OPC",
    nemotechnical: "CAJAHUANCAYO",
    startDate: "08 de octubre 2025",
    offerAmount: "70.000",
    totalAmount: "",
    closeDate: "08 de octubre 2025 - 08 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 8,
    status: "adjudicada",
    issuer: "ECOSAC",
    issuerLogo: "/assets/ecosac.png",
    operationType: "OPC",
    nemotechnical: "ECOSAC",
    startDate: "10 de octubre 2025",
    offerAmount: "2.500.000",
    totalAmount: "",
    closeDate: "10 de octubre 2025 - 10 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 9,
    status: "cerrada",
    issuer: "SCOTIABANK",
    issuerLogo: "/assets/scotiabank.png",
    operationType: "OPV",
    nemotechnical: "SCOTIAREI",
    startDate: "14 de octubre 2025",
    offerAmount: "348.454.870",
    totalAmount: "",
    closeDate: "14 de octubre 2025 - 14 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 10,
    status: "cerrada",
    issuer: "CHAVIN",
    issuerLogo: "/assets/Chavin.png",
    operationType: "OPV",
    nemotechnical: "CHAVIN",
    startDate: "16 de octubre 2025",
    offerAmount: "10.000.000",
    totalAmount: "",
    closeDate: "16 de octubre 2025 - 16 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
];

const getStatusChip = (status: Operation["status"]) => {
  const statusConfig = {
    vigente: { label: "Vigente", bg: "rgba(46,125,50,0.3)" },
    cerrada: { label: "Cerrada", bg: "rgba(0,0,0,0.08)" },
    finalizada: { label: "Finalizada", bg: "rgba(0,0,0,0.08)" },
    adjudicada: { label: "Adjudicada", bg: "#f8e2da" },
    inscrita: { label: "Inscrita", bg: "#FFF59D" },
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

// Función para convertir "15 de marzo 2024" a Date
const parseSpanishDate = (dateString: string): Date | null => {
  try {
    const months: { [key: string]: number } = {
      enero: 0,
      febrero: 1,
      marzo: 2,
      abril: 3,
      mayo: 4,
      junio: 5,
      julio: 6,
      agosto: 7,
      septiembre: 8,
      octubre: 9,
      noviembre: 10,
      diciembre: 11,
    };

    const parts = dateString.toLowerCase().split(" ");
    if (parts.length >= 4) {
      const day = parseInt(parts[0]);
      const month = months[parts[2]];
      const year = parseInt(parts[3]);

      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        return new Date(year, month, day);
      }
    }
    return null;
  } catch {
    return null;
  }
};

export function OperationsTable({
  searchEmisor = "",
  startDate = null,
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

      // Filtro por fecha de inicio
      let matchesDate = true;
      if (startDate) {
        // Convertir startDate a Date si no lo es
        const selectedDate =
          startDate instanceof Date ? startDate : new Date(startDate);

        // Verificar que sea una fecha válida
        if (!isNaN(selectedDate.getTime())) {
          const itemDate = parseSpanishDate(item.startDate);
          if (itemDate) {
            // Comparar solo año, mes y día (ignorar hora)
            const startDateOnly = new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth(),
              selectedDate.getDate()
            );
            const itemDateOnly = new Date(
              itemDate.getFullYear(),
              itemDate.getMonth(),
              itemDate.getDate()
            );
            matchesDate = itemDateOnly >= startDateOnly;
          }
        }
      }

      // Filtro por estado
      const matchesStatus =
        filterStatus === "" ||
        filterStatus === "todos" ||
        item.status === filterStatus;

      return matchesEmisor && matchesDate && matchesStatus;
    });
  }, [searchEmisor, startDate, filterStatus]);

  // Reset page cuando cambian los filtros
  React.useEffect(() => {
    setPage(0);
  }, [searchEmisor, startDate, filterStatus]);

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
                      fontWeight: 600,
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
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                      width: "132px",
                      minWidth: "132px",
                      maxWidth: "132px",
                    }}
                  >
                    Estado
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                      minWidth: "132px",
                      maxWidth: "132px",
                    }}
                  >
                    Emisor
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Tipo de operación
                  </TableCell>

                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Cantidad de la oferta
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Monto de la oferta
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Moneda de la oferta
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Fecha de ingreso de aceptaciones
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
                          href="/PageIngresoAcep"
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
                              flex: "1 0 0",
                              alignItems: "center",
                              justifyContent: "left",
                            }}
                          >
                            <Image
                              src={row.issuerLogo || "/assets/default.png"}
                              alt={row.issuer}
                              width={80}
                              height={12}
                              style={{ objectFit: "fill" }}
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
                        {row.startDate}
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
