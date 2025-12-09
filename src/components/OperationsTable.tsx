"use client";

import React from "react";
import { Link, Typography } from "@nuam/common-fe-lib-components";
import {
  Box,
  Chip,
  ToggleButtonGroup,
  ToggleButton,
  Tooltip,
} from "@mui/material";
("@mui/icons-material");
import {
  DataGridPro,
  GridColDef,
  GridRenderCellParams,
  GridLogicOperator,
  FilterColumnsArgs,
  GetColumnForNewFilterArgs,
} from "@mui/x-data-grid-pro";
import { esES } from "@mui/x-data-grid-pro/locales";
import {
  ViewList as ViewListIcon,
  ViewModule as ViewModuleIcon,
} from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Image from "next/image";
import { OperationsCards } from "./OperationsCards";

interface OperationsTableProps {
  searchEmisor?: string;
  filterDate?: string;
  filterStatus?: string;
  dateRange?: [Date | null, Date | null];
  /**
   * Mensaje para el tooltip de estado. Puede ser un string fijo o una función
   * que recibe la fila y devuelve el mensaje para ese registro.
   */
  statusTooltipMessage?: string | ((row: Operation) => string | undefined);
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
  maxAmount: string;
  closeDate: string;
  seriesNumber: string;
  currency?: string;
}

const mockData: Operation[] = [
  {
    id: 1,
    status: "vigente",
    issuer: "ALICORP",
    issuerLogo: "/assets/alicorp.png",
    operationType: "OPP RF",
    nemotechnical: "ALICORP",
    startDate: "03 de octubre 2025",
    offerAmount: "",
    totalAmount: "$50.000.000",
    maxAmount: "50.000.000",
    closeDate: "03 de octubre 2025 - 03 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "PEN",
  },
  {
    id: 2,
    status: "inscrita",
    issuer: "SYRUS",
    issuerLogo: "/assets/syrus.png",
    operationType: "OPP RF",
    nemotechnical: "SYRUS1CP1C",
    startDate: "03 de octubre 2025",
    offerAmount: "",
    totalAmount: "$500.000",
    maxAmount: "500.000",
    closeDate: "03 de octubre 2025 - 03 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "USD",
  },
  {
    id: 3,
    status: "finalizada",
    issuer: "Bam",
    issuerLogo: "/assets/Bam.png",
    operationType: "OPA",
    nemotechnical: "Bam",
    startDate: "03 de octubre 2025",
    offerAmount: "1.000.000",
    totalAmount: "",
    maxAmount: "",
    closeDate: "03 de octubre 2025 - 03 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
  {
    id: 4,
    status: "vigente",
    issuer: "CREDICORP",
    issuerLogo: "/assets/volcan.png",
    operationType: "OPA",
    nemotechnical: "VOLCAN",
    startDate: "04 de octubre 2025",
    offerAmount: "4.870.000",
    totalAmount: "",
    maxAmount: "",
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
    maxAmount: "",
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
    maxAmount: "",
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
    maxAmount: "",
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
    maxAmount: "",
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
    maxAmount: "",
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
    maxAmount: "",
    closeDate: "16 de octubre 2025 - 16 de octubre 2025",
    seriesNumber: "No de Series 7",
    currency: "Acciones",
  },
];

const getStatusChip = (status: Operation["status"], tooltipText?: string) => {
  const statusConfig = {
    vigente: { label: "Vigente", bg: "rgba(46,125,50,0.3)" },
    cerrada: { label: "Cerrada", bg: "rgba(0,0,0,0.08)" },
    finalizada: { label: "Finalizada", bg: "rgba(0,0,0,0.08)" },
    adjudicada: { label: "Adjudicada", bg: "#f8e2da" },
    inscrita: { label: "Inscrita", bg: "#FFF59D" },
  };

  const config = statusConfig[status];
  // Build label with optional tooltip icon rendered inside the chip
  const labelNode = (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Box component="span" sx={{ fontSize: "13px", lineHeight: 1 }}>
        {config.label}
      </Box>
      {tooltipText ? (
        <Tooltip title={tooltipText} arrow enterDelay={300}>
          <Box
            component="span"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 18,
              height: 18,
              borderRadius: "50%",
            }}
            aria-hidden
          >
            <InfoOutlinedIcon sx={{ fontSize: 12 }} />
          </Box>
        </Tooltip>
      ) : null}
    </Box>
  );

  return (
    <Chip
      label={labelNode}
      size="small"
      sx={{
        backgroundColor: config.bg,
        color: "rgba(0,0,0,0.87)",
        fontSize: "13px",
        height: 24,
        padding: "0 6px",
        alignItems: "center",
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
  dateRange = [null, null],
  filterStatus = "",
  statusTooltipMessage,
}: OperationsTableProps) {
  const [viewMode, setViewMode] = React.useState<"table" | "cards">("table");

  // Estado para modelo de visibilidad de columnas
  const [columnVisibilityModel, setColumnVisibilityModel] = React.useState({});

  const handleViewModeChange = (
    event: React.MouseEvent<HTMLElement>,
    newViewMode: "table" | "cards" | null
  ) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  // Función para filtrar columnas en el panel de filtros
  // Elimina las columnas que ya tienen filtros aplicados
  const filterColumns = ({
    field,
    columns,
    currentFilters,
  }: FilterColumnsArgs) => {
    const filteredFields = currentFilters?.map((item) => item.field);
    return columns
      .filter(
        (colDef) =>
          colDef.filterable &&
          (colDef.field === field || !filteredFields.includes(colDef.field))
      )
      .map((column) => column.field);
  };

  // Función para obtener la columna para un nuevo filtro
  // Devuelve la primera columna filtrable que no tenga un filtro aplicado
  const getColumnForNewFilter = ({
    currentFilters,
    columns,
  }: GetColumnForNewFilterArgs) => {
    const filteredFields = currentFilters?.map(({ field }) => field);
    const columnForNewFilter = columns
      .filter(
        (colDef) => colDef.filterable && !filteredFields.includes(colDef.field)
      )
      .find((colDef) => colDef.filterOperators?.length);
    return columnForNewFilter?.field ?? null;
  };

  // Filtrar datos
  const filteredData = React.useMemo(() => {
    return mockData.filter((item) => {
      // Filtro por emisor (búsqueda case-insensitive)
      const matchesEmisor =
        searchEmisor === "" ||
        item.issuer.toLowerCase().includes(searchEmisor.toLowerCase());

      // Filtro por rango de fechas
      let matchesDate = true;
      const [startDate, endDate] = dateRange;

      if (startDate || endDate) {
        const itemDate = parseSpanishDate(item.startDate);
        if (itemDate) {
          const itemDateOnly = new Date(
            itemDate.getFullYear(),
            itemDate.getMonth(),
            itemDate.getDate()
          );

          // Si hay fecha de inicio, verificar que itemDate >= startDate
          if (startDate) {
            const startDateOnly = new Date(
              startDate.getFullYear(),
              startDate.getMonth(),
              startDate.getDate()
            );
            if (itemDateOnly < startDateOnly) {
              matchesDate = false;
            }
          }

          // Si hay fecha fin, verificar que itemDate <= endDate
          if (endDate && matchesDate) {
            const endDateOnly = new Date(
              endDate.getFullYear(),
              endDate.getMonth(),
              endDate.getDate()
            );
            if (itemDateOnly > endDateOnly) {
              matchesDate = false;
            }
          }
        } else {
          matchesDate = false;
        }
      }

      // Filtro por estado
      const matchesStatus =
        filterStatus === "" ||
        filterStatus === "todos" ||
        item.status === filterStatus;

      return matchesEmisor && matchesDate && matchesStatus;
    });
  }, [searchEmisor, dateRange, filterStatus]);

  // Definición de columnas para DataGrid Premium
  const columns: GridColDef[] = [
    {
      field: "details",
      headerName: "Detalles",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => {
        const row = params.row as Operation;

        // Determinar la ruta según el issuer
        let href: string | undefined;
        if (row.issuer === "CREDICORP") {
          href = "/PageIngresoOpa";
        } else if (row.issuer === "ALICORP") {
          href = "/PageIngresoAcep";
        }

        // Si no hay href definido, mostrar el texto sin funcionalidad
        if (!href) {
          return (
            <Typography
              sx={{
                color: "#FF4201",
                textDecoration: "underline",
                fontSize: "14px",
                cursor: "default",
              }}
            >
              Ver Detalles
            </Typography>
          );
        }

        return (
          <Link
            href={href}
            sx={{
              color: "#FF4201",
              textDecoration: "underline",
              fontSize: "14px",
              "&:hover": {
                color: "#FF3700",
              },
            }}
          >
            Ver Detalles
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "Estado",
      width: 150,
      renderCell: (params: GridRenderCellParams) => {
        const status = params.value as Operation["status"];
        const row = params.row as Operation;

        // Resolve tooltip message: function -> call with row, string -> use directly
        let tooltipText: string | undefined;
        if (typeof statusTooltipMessage === "function") {
          tooltipText = statusTooltipMessage(row);
        } else if (typeof statusTooltipMessage === "string") {
          tooltipText = statusTooltipMessage;
        }

        // Render chip with optional in-chip tooltip
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {getStatusChip(status, tooltipText)}
          </Box>
        );
      },
    },
    {
      field: "issuer",
      headerName: "Emisor",
      width: 180,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 24,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={params.row.issuerLogo || "/assets/default.png"}
              alt={params.value as string}
              fill
              sizes="80px"
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      ),
    },
    {
      field: "operationType",
      headerName: "Tipo de operación",
      width: 180,
    },
    {
      field: "offerAmount",
      headerName: "Cantidad de la oferta",
      width: 180,
    },
    {
      field: "maxAmount",
      headerName: "Monto de la oferta",
      width: 180,
    },
    {
      field: "totalAmount",
      headerName: "Monto máximo",
      width: 180,
    },
    {
      field: "currency",
      headerName: "Moneda de la oferta",
      width: 180,
    },
    {
      field: "startDate",
      headerName: "Fecha de ingreso de aceptaciones",
      width: 250,
    },
  ];

  // Helper: Clone objects while preserving functions (renderCell, renderHeader, etc.)
  const cloneColumnDef = (col: GridColDef): GridColDef => {
    const cloned: GridColDef = { ...col };
    // Preserve function references for React components
    if (col.renderCell) cloned.renderCell = col.renderCell;
    if (col.renderHeader) cloned.renderHeader = col.renderHeader;
    return cloned;
  };

  // Defensive cloning to prevent DataGrid from mutating frozen/read-only objects
  // This protects against "Cannot assign to read only property" errors
  // Use deeper cloning for rows, but preserve function references in columns
  const safeRows = filteredData.map((row) => JSON.parse(JSON.stringify(row)));
  const safeColumns = columns.map(cloneColumnDef);
  const safeLocaleText = JSON.parse(
    JSON.stringify(esES.components.MuiDataGrid.defaultProps.localeText)
  );

  // Preparar datos para DataGridPro
  const gridData = {
    rows: safeRows,
    columns: safeColumns,
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
        <Box sx={{ height: 700, width: "100%" }}>
          <DataGridPro
            {...gridData}
            pagination
            pageSizeOptions={[5, 10, 25, 50, 100]}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 10, page: 0 },
              },
              filter: {
                filterModel: {
                  items: [],
                },
              },
            }}
            showToolbar={true}
            columnVisibilityModel={columnVisibilityModel}
            onColumnVisibilityModelChange={(newModel) =>
              setColumnVisibilityModel(newModel)
            }
            slotProps={{
              columnsManagement: {
                getTogglableColumns: (columns) => {
                  return columns
                    .filter((column) => column.field !== "details")
                    .map((column) => column.field);
                },
              },
              filterPanel: {
                // Configuración del panel de filtros
                logicOperators: [GridLogicOperator.And, GridLogicOperator.Or],
                columnsSort: "asc",
                filterFormProps: {
                  filterColumns,
                  logicOperatorInputProps: {
                    variant: "outlined",
                    size: "small",
                  },
                  columnInputProps: {
                    variant: "outlined",
                    size: "small",
                  },
                  operatorInputProps: {
                    variant: "outlined",
                    size: "small",
                  },
                  valueInputProps: {
                    variant: "outlined",
                    size: "small",
                  },
                },
                getColumnForNewFilter,
              },
            }}
            localeText={safeLocaleText}
            // Habilitar funcionalidades de filtrado avanzado Pro
            filterMode="client"
            disableMultipleColumnsFiltering={false}
            sx={{
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.12)",
              "& .MuiDataGrid-cell": {
                display: "flex",
                alignItems: "center", // vertically center content
                justifyContent: "flex-start", // align content to the left
                textAlign: "left",
                fontSize: "14px",
                color: "rgba(0,0,0,0.87)",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "#fafafa",
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(0,0,0,0.87)",
              },
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "rgba(0,0,0,0.04)",
              },
            }}
          />
        </Box>
      ) : (
        <OperationsCards dataCard={filteredData} />
      )}
    </Box>
  );
}
