"use client";

import { useState } from "react";
import { RegistroAceptaciones } from "@/components/RegistroAceptaciones";
import {
  Box,
  Button,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Alert,
  MenuItem,
  Paper,
  IconButton,
  InputAdornment,
  Stack,
  FormControl,
  InputLabel,
  Select,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  UploadFile as UploadFileIcon,
  Info as InfoIcon,
  Close as CloseIcon,
  ErrorOutline as ErrorOutlineIcon,
  ExpandMore,
} from "@mui/icons-material";
import { Divider } from "@nuam/common-fe-lib-components";

interface IngresoAceptacionesProps {
  onSubmit?: (data: FormData) => void;
  onCargaMasiva?: () => void;
}

interface FormData {
  tipoDocumento: string;
  numeroDocumento: string;
  tasaAceptacion: string;
  monto: string;
  referencia: string;
}

export function IngresoAceptacionesOpa({
  onSubmit,
  onCargaMasiva,
}: IngresoAceptacionesProps) {
  const [expandedPanel1, setExpandedPanel1] = useState(true);
  const [expandedPanel2, setExpandedPanel2] = useState(true);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const [tipoDocumento, setTipoDocumento] = useState("Cédula");
  const [numeroDocumento, setNumeroDocumento] = useState("8011117866");
  const [tasaAceptacion, setTasaAceptacion] = useState("9,75%");
  const [monto, setMonto] = useState("$/2.000.000");
  const [referencia, setReferencia] = useState("26598941EEBC");

  const handleClearField = (setter: (value: string) => void) => {
    setter("");
  };

  const handleCargaMasiva = () => {
    if (onCargaMasiva) {
      onCargaMasiva();
    } else {
      console.log("Carga masiva clicked");
    }
  };

  const handleSubmitForm = () => {
    // Abrir el modal de confirmación
    setOpenConfirmModal(true);
  };

  const handleConfirmSave = () => {
    const formData: FormData = {
      tipoDocumento,
      numeroDocumento,
      tasaAceptacion,
      monto,
      referencia,
    };

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form data:", formData);
    }

    // Cerrar el modal
    setOpenConfirmModal(false);
  };

  const handleCancelSave = () => {
    setOpenConfirmModal(false);
  };

  return (
    <Stack gap={4}>
      <Box sx={{ p: 2, border: "1px solid rgba(0,0,0,0.12)" }}>
        <Stack spacing={3}>
          {/* Título */}
          <Typography variant="h5" component="span" sx={{ color: "#3d3d3d" }}>
            Ingreso de Aceptaciones
          </Typography>

          {/* Botón de Carga Masiva */}
          <Box>
            <Button
              variant="contained"
              startIcon={<UploadFileIcon />}
              onClick={handleCargaMasiva}
              sx={{
                mb: 1,
                backgroundColor: "#ff4201",
                "&:hover": {
                  backgroundColor: "#e03a01",
                },
                textTransform: "uppercase",
                px: 3,
                py: 1,
                boxShadow:
                  "0px 1px 5px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.2)",
              }}
            >
              Carga masiva
            </Button>

            {/* Alerta */}
            <Alert
              icon={<InfoIcon sx={{ color: "#2697B7" }} />}
              severity="info"
              sx={{
                mt: 1,
                backgroundColor: "#e5f6fd",
                color: "rgba(0,0,0,0.87)",
                "& .MuiAlert-icon": {
                  color: "#2697B7",
                },
              }}
            >
              Los campos marcados con{" "}
              <span style={{ color: "#ff4201" }}>*</span> son obligatorios
            </Alert>
          </Box>
          {/* Selector de Títulos Ofertados */}
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              border: "1px solid rgba(0,0,0,0.12)",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 2,
              }}
            >
              <FormControl fullWidth size="small">
                <InputLabel>Seleccionar Títulos Ofertados *</InputLabel>
                <Select
                  defaultValue="serie-a18"
                  label="Seleccionar Títulos Ofertados *"
                >
                  <MenuItem value="serie-a18">
                    Serie A18 -18 Meses en Tasa Fija E.A
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Paper>
          {/* Accordion 1: Datos Generales del Inversionista */}
          <Accordion
            expanded={expandedPanel1}
            onChange={() => setExpandedPanel1(!expandedPanel1)}
            sx={{
              boxShadow:
                "0px 1px 3px 0px rgba(0,0,0,0.12), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.2)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "rgba(0,0,0,0.56)" }} />}
              sx={{ px: 2 }}
            >
              <Typography variant="h6" sx={{ color: "rgba(0,0,0,0.87)" }}>
                Datos del Inversionista
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pb: 2 }}>
              <Stack spacing={2}>
                {/* Card con campos */}
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        select
                        fullWidth
                        label="Cuenta de Inversionista *"
                        value={tipoDocumento}
                        onChange={(e) => setTipoDocumento(e.target.value)}
                        variant="outlined"
                        sx={{
                          "& .MuiInputBase-input": {
                            textAlign: "left", // ← Alinear texto
                          },
                        }}
                      >
                        <MenuItem value="Cédula">2356598335</MenuItem>
                        <MenuItem value="Pasaporte">2356598335</MenuItem>
                        <MenuItem value="DNI">2356598335</MenuItem>
                      </TextField>
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Accordion 2: Datos de la Aceptación */}
          <Accordion
            expanded={expandedPanel2}
            onChange={() => setExpandedPanel2(!expandedPanel2)}
            sx={{
              boxShadow:
                "0px 1px 3px 0px rgba(0,0,0,0.12), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.2)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "rgba(0,0,0,0.56)" }} />}
              sx={{ px: 2 }}
            >
              <Typography variant="h6" sx={{ color: "rgba(0,0,0,0.87)" }}>
                Datos de la Aceptación
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2, pb: 2 }}>
              <Stack spacing={2}>
                {/* Card 1 - Mínimo y Múltiplo */}
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Mínimo de la Aceptación"
                        defaultValue="$1.000.000"
                        variant="outlined"
                        slotProps={{ input: { readOnly: true } }}
                      />
                      <TextField
                        fullWidth
                        label="Múltiplo de negociación"
                        defaultValue="$1.000.000"
                        variant="outlined"
                        slotProps={{
                          inputLabel: {
                            shrink: true,
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                </Paper>

                {/* Card 2 - Tasas, Monto y Referencia */}
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    border: "1px solid rgba(0,0,0,0.12)",
                  }}
                >
                  <Stack spacing={2}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 2,
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Tasa Máxima de rentabilidad (E.A)"
                        defaultValue="10,5%"
                        variant="outlined"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Tasa de la Aceptación *"
                        value={tasaAceptacion}
                        onChange={(e) => setTasaAceptacion(e.target.value)}
                        variant="outlined"
                        slotProps={{
                          input: {
                            endAdornment: tasaAceptacion && (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() =>
                                    handleClearField(setTasaAceptacion)
                                  }
                                  edge="end"
                                  size="small"
                                >
                                  <CloseIcon sx={{ color: "#707070" }} />
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Monto (PEN) *"
                        value={monto}
                        onChange={(e) => setMonto(e.target.value)}
                        variant="outlined"
                        slotProps={{
                          input: {
                            endAdornment: monto && (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() => handleClearField(setMonto)}
                                  edge="end"
                                  size="small"
                                >
                                  <CloseIcon sx={{ color: "#707070" }} />
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Referencia"
                        value={referencia}
                        onChange={(e) => setReferencia(e.target.value)}
                        variant="outlined"
                        slotProps={{
                          input: {
                            endAdornment: referencia && (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={() =>
                                    handleClearField(setReferencia)
                                  }
                                  edge="end"
                                  size="small"
                                >
                                  <CloseIcon sx={{ color: "#707070" }} />
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                    </Box>
                  </Stack>
                </Paper>
              </Stack>
            </AccordionDetails>
          </Accordion>

          {/* Botones de acción */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button
              variant="text"
              sx={{
                color: "#ff4201",
                borderColor: "#ff4201",
                "&:hover": {
                  borderColor: "#e03a01",
                  backgroundColor: "rgba(255,66,1,0.08)",
                },
                textTransform: "uppercase",
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmitForm}
              sx={{
                backgroundColor: "#ff4201",
                "&:hover": {
                  backgroundColor: "#e03a01",
                },
                textTransform: "uppercase",
              }}
            >
              Guardar
            </Button>
          </Box>
        </Stack>

        {/* Modal de Confirmación */}
        <Dialog
          open={openConfirmModal}
          onClose={handleCancelSave}
          maxWidth="xs"
          fullWidth
          slotProps={{
            paper: {
              sx: {
                borderRadius: 2,
                p: 3,
              },
            },
          }}
        >
          <DialogContent sx={{ p: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
              }}
            >
              {/* Icono de alerta */}
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ErrorOutlineIcon
                  sx={{
                    fontSize: 80,
                    color: "#FF4201",
                  }}
                />
              </Box>

              {/* Texto de confirmación */}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "rgba(0,0,0,0.87)",
                  fontWeight: 400,
                  fontSize: "1.125rem",
                }}
              >
                ¿Está seguro de guardar el registro de aceptación?
              </Typography>

              {/* Botones */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={handleCancelSave}
                  sx={{
                    color: "#FF4201",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    px: 3,
                    "&:hover": {
                      backgroundColor: "rgba(255,66,1,0.08)",
                    },
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  onClick={handleConfirmSave}
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF4201",
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    px: 4,
                    "&:hover": {
                      backgroundColor: "#e03a01",
                    },
                  }}
                >
                  Guardar
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
      <Divider />
      <Box>
        <Accordion defaultExpanded={false}>
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
    </Stack>
  );
}
