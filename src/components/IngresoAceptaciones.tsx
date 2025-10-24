"use client";

import { useState } from "react";
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
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  UploadFile as UploadFileIcon,
  Info as InfoIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

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

export function IngresoAceptaciones({
  onSubmit,
  onCargaMasiva,
}: IngresoAceptacionesProps) {
  const [expandedPanel1, setExpandedPanel1] = useState(true);
  const [expandedPanel2, setExpandedPanel2] = useState(true);

  const [tipoDocumento, setTipoDocumento] = useState("Cédula");
  const [numeroDocumento, setNumeroDocumento] = useState("8011117866");
  const [tasaAceptacion, setTasaAceptacion] = useState("9,75%");
  const [monto, setMonto] = useState("$50.000");
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
  };

  return (
    <Box sx={{ p: 2, border: "1px solid rgba(0,0,0,0.12)" }}>
      <Stack spacing={3}>
        {/* Título */}
        <Typography variant="h5" sx={{ color: "#3d3d3d" }}>
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
            Los campos marcados con <span style={{ color: "#ff4201" }}>*</span>{" "}
            son obligatorios
          </Alert>
        </Box>

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
              Datos Generales del Inversionista
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 2, pb: 2 }}>
            <Stack spacing={2}>
              {/* Texto placeholder */}
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Colocar Texto"
                defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,"
                variant="outlined"
              />

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
                      label="Tipo de documento *"
                      value={tipoDocumento}
                      onChange={(e) => setTipoDocumento(e.target.value)}
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-input": {
                          textAlign: "left", // ← Alinear texto
                        },
                      }}
                    >
                      <MenuItem value="Cédula">Cédula</MenuItem>
                      <MenuItem value="Pasaporte">Pasaporte</MenuItem>
                      <MenuItem value="DNI">DNI</MenuItem>
                    </TextField>

                    <TextField
                      fullWidth
                      label="Numero de documento *"
                      value={numeroDocumento}
                      onChange={(e) => setNumeroDocumento(e.target.value)}
                      variant="outlined"
                      slotProps={{
                        input: {
                          endAdornment: numeroDocumento && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  handleClearField(setNumeroDocumento)
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
              {/* Texto placeholder */}
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Colocar Texto"
                defaultValue="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,"
                variant="outlined"
              />

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
                      label="Mínimo de Negociación"
                      defaultValue="$50.000.000"
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Múltiplo de negociación"
                      defaultValue="$10.000.000"
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
                      defaultValue="9,75%"
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
                                onClick={() => handleClearField(setReferencia)}
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
            variant="outlined"
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
            Guardar Aceptación
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
