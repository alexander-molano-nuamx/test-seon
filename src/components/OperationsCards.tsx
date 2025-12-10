import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Pagination,
  Grid,
  CardActionArea,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";

interface Operation {
  id: number;
  status: "inscrita" | "vigente" | "cerrada" | "finalizada" | "adjudicada";
  issuer: string;
  issuerLogo?: string;
  operationType: string;
  totalAmount: string;
  offerAmount: string;
  maxAmount: string;
  closeDate: string;
  seriesNumber: string;
  currency?: string;
}

interface OperationsCardsProps {
  dataCard: Operation[];
}

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

export function OperationsCards({ dataCard: data }: OperationsCardsProps) {
  const [page, setPage] = React.useState(1);
  const itemsPerPage = 8;

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const displayedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box>
      <Grid container spacing={2}>
        {displayedData.map((operation) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={operation.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
                boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
                transition: "box-shadow 0.3s",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(239, 108, 0, 0.04)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardActionArea
                component={Link}
                href="/PageIngresoAcep"
                sx={{ height: "100%" }}
              >
                <CardContent sx={{ flexGrow: 1, p: 2 }}>
                  {/* Logo y estado */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 104,
                        height: 40,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={operation.issuerLogo || "/assets/default.png"}
                        alt={operation.issuer}
                        width={80}
                        height={60}
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                    {getStatusChip(operation.status)}
                  </Box>

                  {/* Tipo de operación */}
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#3D3D3D",
                      mb: 0,
                      minHeight: "48px",
                    }}
                  >
                    {operation.operationType}
                  </Typography>

                  {/* Series */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 1,
                    }}
                  >
                    {operation.seriesNumber}
                  </Typography>

                  {/* Mostrar offerAmount si existe, sino mostrar totalAmount */}
                  {operation.offerAmount !== "" &&
                  operation.offerAmount !== "No aplica" ? (
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "12px",
                          color: "rgba(0,0,0,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        Cantidad de la oferta
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#3D3D3D",
                        }}
                      >
                        {operation.offerAmount} {operation.currency}
                      </Typography>
                    </Box>
                  ) : (
                    operation.totalAmount !== "" &&
                    operation.totalAmount !== "No aplica" && (
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "12px",
                            color: "rgba(0,0,0,0.6)",
                            fontWeight: 500,
                          }}
                        >
                          Monto de la oferta
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            color: "#3D3D3D",
                          }}
                        >
                          {operation.totalAmount} {operation.currency}
                        </Typography>
                      </Box>
                    )
                  )}
                  {operation.maxAmount !== "" &&
                  operation.maxAmount !== "No aplica" ? (
                    <Box sx={{ mb: 1 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "12px",
                          color: "rgba(0,0,0,0.6)",
                          fontWeight: 500,
                        }}
                      >
                        Monto máximo
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#3D3D3D",
                        }}
                      >
                        {operation.maxAmount}
                      </Typography>
                    </Box>
                  ) : (
                    operation.totalAmount !== "" &&
                    operation.totalAmount !== "No aplica" && (
                      <Box sx={{ mb: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "12px",
                            color: "rgba(0,0,0,0.6)",
                            fontWeight: 500,
                          }}
                        >
                          Monto de la oferta
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            color: "#3D3D3D",
                          }}
                        >
                          {operation.totalAmount} {operation.currency}
                        </Typography>
                      </Box>
                    )
                  )}

                  {/* Fecha de aceptaciones */}
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "12px",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      Fecha de Aceptaciones
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        color: "#3D3D3D",
                      }}
                    >
                      {operation.closeDate}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Paginación */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#3D3D3D",
            },
            "& .Mui-selected": {
              backgroundColor: "#FF4201 !important",
              color: "#fff",
            },
          }}
        />
      </Box>
    </Box>
  );
}
