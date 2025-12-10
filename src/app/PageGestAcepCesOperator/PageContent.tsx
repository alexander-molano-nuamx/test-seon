"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  TextField,
  InputAdornment,
  IconButton,
  Skeleton,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stepper,
  Step,
  StepLabel,
  Stack,
} from "@mui/material";
import {
  Search as SearchIcon,
  Edit as EditIcon,
  ViewColumn as ColumnIcon,
  FilterList as FilterIcon,
  Refresh as RefreshIcon,
  MoreVert as MoreIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
  VisibilityRounded,
} from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { RestrictedDevice } from "@/components/RestrictedDevice";
import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { RoleProtectedRoute } from "@/components/RoleProtectedRoute";
import {
  DataGridPro,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid-pro";
import { esES } from "@mui/x-data-grid-pro/locales";

const drawerWidth = 240;

interface User {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  roles: string;
  estado: "Activo" | "Bloqueado" | "Inactivo" | "Suspendido";
}

const mockUsers: User[] = [
  {
    id: 1,
    nombre: "Oscar Javier",
    apellido: "Ballesteros Marin",
    correo: "Usuario1@kallpa.com",
    telefono: "+51 325 000 2522",
    roles: "Administrador",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "Juan",
    apellido: "Mejia",
    correo: "Usuario2@kallpa.com",
    telefono: "+51 325 000 8020",
    roles: "Operador",
    estado: "Activo",
  },
];

export default function PageGestAcepCesOperator() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { data: session, status } = useSession();
  const [lastLogin, setLastLogin] = useState<string>("");
  const [ipAddress, setIpAddress] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    correo: "",
    nombres: "",
    apellidos: "",
    estado: "Activo",
    telefono: "",
    rol: "",
  });
  const [openPermissionsModal, setOpenPermissionsModal] = useState(false);
  const [selectedRoleForPermissions, setSelectedRoleForPermissions] =
    useState<string>("");
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  const [createUserStep, setCreateUserStep] = useState(0);
  const [createUserFormData, setCreateUserFormData] = useState({
    correo: "",
    nombres: "",
    apellidos: "",
    estado: "Activo",
    telefono: "",
    contrasena: "",
    confirmarContrasena: "",
    roles: {
      administrador: false,
      operador: false,
      emisor: false,
    },
  });
  const [users, setUsers] = useState<User[]>(mockUsers);

  const handleEstadoChange = (userId: number, newEstado: User["estado"]) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, estado: newEstado } : user
      )
    );
  };

  useEffect(() => {
    // Obtener fecha/hora actual del navegador
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
    const formattedDate = now.toLocaleDateString("es-ES", options);
    setLastLogin(formattedDate);

    // Obtener IP del cliente (requiere API externa o backend)
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIpAddress(data.ip))
      .catch(() => setIpAddress("No disponible"));
  }, []);

  // Formatear la fecha de forma más legible
  const formatLastLogin = () => {
    if (!lastLogin) return "Cargando...";
    // Capitalizar primera letra del día
    return lastLogin.charAt(0).toUpperCase() + lastLogin.slice(1);
  };

  const customLinks = [
    { name: "Administrador de usuarios", path: "/PageGestAcepCesOperator" },
  ];

  const handleClear = () => {
    setSearchQuery("");
  };

  const handleOpenEditModal = () => {
    if (selectedUser) {
      setEditFormData({
        correo: selectedUser.correo,
        nombres: selectedUser.nombre,
        apellidos: selectedUser.apellido,
        estado: "Activo",
        telefono: selectedUser.telefono,
        rol: selectedUser.roles,
      });
      setOpenDetailModal(false);
      setOpenEditModal(true);
    }
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleSaveEdit = () => {
    console.log("Guardar cambios:", editFormData);
    setOpenEditModal(false);
  };

  const handleOpenPermissionsModal = (role: string) => {
    setSelectedRoleForPermissions(role);
    setOpenPermissionsModal(true);
  };

  const handleClosePermissionsModal = () => {
    setOpenPermissionsModal(false);
  };

  const handleOpenCreateUserModal = () => {
    setOpenCreateUserModal(true);
    setCreateUserStep(0);
  };

  const handleCloseCreateUserModal = () => {
    setOpenCreateUserModal(false);
    setCreateUserStep(0);
    setCreateUserFormData({
      correo: "",
      nombres: "",
      apellidos: "",
      estado: "Activo",
      telefono: "",
      contrasena: "",
      confirmarContrasena: "",
      roles: {
        administrador: false,
        operador: false,
        emisor: false,
      },
    });
  };

  const handleNextStep = () => {
    setCreateUserStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setCreateUserStep((prev) => prev - 1);
  };

  const handleCreateUser = () => {
    console.log("Crear usuario:", createUserFormData);
    handleCloseCreateUserModal();
  };

  // Definición de columnas
  const columns: GridColDef[] = [
    {
      field: "detalle",
      headerName: "Detalle",
      flex: 1,
      minWidth: 120,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => {
        const row = params.row as User;
        return (
          <Typography
            onClick={() => {
              setSelectedUser(row);
              setOpenDetailModal(true);
            }}
            sx={{
              color: "#FF4201",
              textDecoration: "underline",
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": {
                color: "#e03a01",
              },
            }}
          >
            Ver Detalle
          </Typography>
        );
      },
    },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "apellido",
      headerName: "Apellido",
      flex: 1.2,
      minWidth: 150,
    },
    {
      field: "correo",
      headerName: "Correo",
      flex: 1.5,
      minWidth: 180,
    },
    {
      field: "telefono",
      headerName: "Teléfono de Celular",
      flex: 1.2,
      minWidth: 150,
    },
    {
      field: "roles",
      headerName: "Roles",
      flex: 1,
      minWidth: 120,
    },
    {
      field: "estado",
      headerName: "Estado",
      flex: 1.2,
      minWidth: 150,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const row = params.row as User;
        return (
          <FormControl size="small" fullWidth>
            <Select
              value={row.estado}
              onChange={(e) =>
                handleEstadoChange(row.id, e.target.value as User["estado"])
              }
              sx={{
                fontSize: "14px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0,0,0,0.87)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#FF4201",
                },
              }}
            >
              <MenuItem value="Activo">Activo</MenuItem>
              <MenuItem value="Bloqueado">Bloqueado</MenuItem>
              <MenuItem value="Inactivo">Inactivo</MenuItem>
              <MenuItem value="Suspendido">Suspendido</MenuItem>
            </Select>
          </FormControl>
        );
      },
    },
  ];

  // Detecta si está en tablet o mobile (<= 1024px)
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)");

  // Si es dispositivo móvil o tablet, mostrar RestrictedDevice centrado
  if (isMobileOrTablet) {
    return (
      <RoleProtectedRoute allowedRoles={["operator"]}>
        <ProtectedRoute>
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
        </ProtectedRoute>
      </RoleProtectedRoute>
    );
  }

  // Vista normal para desktop
  return (
    <RoleProtectedRoute allowedRoles={["operator"]}>
      <ProtectedRoute>
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          {/* Header */}
          <AppHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* Sidebar */}
          <AppSidebar open={sidebarOpen} width={drawerWidth} />

          {/* Main Content */}
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
                {status === "loading" ? (
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Skeleton width={250} height={20} />
                    <Skeleton width={150} height={20} />
                  </Box>
                ) : (
                  <>
                    <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
                      Último Inicio de Sesión:{" "}
                      <strong>{formatLastLogin()}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: "14px", color: "#3d3d3d" }}>
                      IP: <strong>{ipAddress}</strong>
                    </Typography>
                  </>
                )}
              </Box>
            </Box>

            <Typography
              variant="h4"
              gutterBottom
              sx={{
                color: "#3D3D3D",
                fontSize: "1.5rem",
                fontWeight: 400,
                mb: 3,
              }}
            >
              Administrador de Usuarios
            </Typography>

            {/* Filtros */}
            <Stack spacing={1} direction="row" sx={{ mb: 3 }}>
              {/* Buscador */}
              <Box sx={{ width: "100%" }}>
                <TextField
                  size="small"
                  placeholder="Buscar por nombre o correo"
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  fullWidth
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
                        </InputAdornment>
                      ),
                      endAdornment: searchQuery && (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClear}
                            edge="end"
                            sx={{ color: "rgba(0,0,0,0.54)" }}
                          >
                            <ClearIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    backgroundColor: "#fff",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "4px",
                    },
                  }}
                />
              </Box>

              {/* Selector de Rol */}
              <Box sx={{ width: "100%" }}>
                <FormControl size="small" fullWidth>
                  <InputLabel>Seleccionar Rol</InputLabel>
                  <Select
                    value={selectedRole}
                    label="Seleccionar Rol"
                    onChange={(e) => setSelectedRole(e.target.value)}
                    sx={{
                      backgroundColor: "#fff",
                    }}
                  >
                    <MenuItem value="">Todos</MenuItem>
                    <MenuItem value="Administrador">Administrador</MenuItem>
                    <MenuItem value="Operador">Operador</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Stack>

            {/* Botones de acción */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 3,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleOpenCreateUserModal}
                sx={{
                  backgroundColor: "#FF4201",
                  color: "white",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  px: 3,
                  "&:hover": {
                    backgroundColor: "#e03a01",
                  },
                }}
              >
                Crear Usuario
              </Button>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="outlined"
                  startIcon={<EditIcon />}
                  sx={{
                    color: "#FF4201",
                    borderColor: "#FF4201",
                    textTransform: "uppercase",
                    "&:hover": {
                      borderColor: "#e03a01",
                      backgroundColor: "rgba(255,66,1,0.08)",
                    },
                  }}
                >
                  Editar
                </Button>
                <IconButton
                  sx={{
                    color: "rgba(0,0,0,0.54)",
                    border: "1px solid rgba(0,0,0,0.23)",
                    borderRadius: "4px",
                  }}
                >
                  <ColumnIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(0,0,0,0.54)",
                    border: "1px solid rgba(0,0,0,0.23)",
                    borderRadius: "4px",
                  }}
                >
                  <FilterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(0,0,0,0.54)",
                    border: "1px solid rgba(0,0,0,0.23)",
                    borderRadius: "4px",
                  }}
                >
                  <RefreshIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "rgba(0,0,0,0.54)",
                    border: "1px solid rgba(0,0,0,0.23)",
                    borderRadius: "4px",
                  }}
                >
                  <MoreIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Tabla de Usuarios */}
            <Box sx={{ height: 700, width: "100%" }}>
              <DataGridPro
                rows={users}
                columns={columns}
                pagination
                pageSizeOptions={[5, 10, 25]}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 10, page: 0 },
                  },
                }}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnSelector
                hideFooterSelectedRowCount
                sx={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.12)",
                  "& .MuiDataGrid-cell": {
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "rgba(0,0,0,0.87)",
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#fafafa",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.87)",
                  },
                  "& .MuiDataGrid-columnHeader[data-field='__check__']": {
                    "& .MuiCheckbox-root": {
                      visibility: "hidden",
                    },
                  },
                  "& .MuiDataGrid-row:hover": {
                    backgroundColor: "rgba(0,0,0,0.04)",
                  },
                }}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
              />
            </Box>
          </Box>
        </Box>

        {/* Modal de Detalle del Usuario */}
        <Dialog
          open={openDetailModal}
          onClose={() => setOpenDetailModal(false)}
          maxWidth="sm"
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
          <DialogTitle sx={{ p: 0, mb: 3, position: "relative" }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0,0,0,0.87)",
                fontWeight: 500,
                fontSize: "1.25rem",
              }}
            >
              Detalle del Usuario
            </Typography>
            <IconButton
              onClick={() => setOpenDetailModal(false)}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "rgba(0,0,0,0.54)",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 0 }}>
            {selectedUser && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {/* Correo */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 0.5,
                    }}
                  >
                    Correo
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.87)",
                      fontWeight: 400,
                    }}
                  >
                    {selectedUser.correo}
                  </Typography>
                </Box>

                {/* Nombres */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 0.5,
                    }}
                  >
                    Nombres
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.87)",
                      fontWeight: 400,
                    }}
                  >
                    {selectedUser.nombre}
                  </Typography>
                </Box>

                {/* Apellidos */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 0.5,
                    }}
                  >
                    Apellidos
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.87)",
                      fontWeight: 400,
                    }}
                  >
                    {selectedUser.apellido}
                  </Typography>
                </Box>

                {/* Estado */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 0.5,
                    }}
                  >
                    Estado
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.87)",
                      fontWeight: 400,
                    }}
                  >
                    Activo
                  </Typography>
                </Box>

                {/* Teléfono de Celular */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 0.5,
                    }}
                  >
                    Teléfono de Celular
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.87)",
                      fontWeight: 400,
                    }}
                  >
                    {selectedUser.telefono}
                  </Typography>
                </Box>

                {/* Rol */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgba(0,0,0,0.6)",
                      mb: 0.5,
                    }}
                  >
                    Rol
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "rgba(0,0,0,0.87)",
                      fontWeight: 400,
                    }}
                  >
                    {selectedUser.roles}
                  </Typography>
                </Box>

                {/* Botones de acción */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "flex-end",
                    mt: 3,
                  }}
                >
                  <Button
                    onClick={handleOpenEditModal}
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
                    Editar
                  </Button>
                  <Button
                    onClick={() => setOpenDetailModal(false)}
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
                    Cerrar
                  </Button>
                </Box>
              </Box>
            )}
          </DialogContent>
        </Dialog>

        {/* Modal de Edición del Usuario */}
        <Dialog
          open={openEditModal}
          onClose={handleCloseEditModal}
          maxWidth="md"
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
          <DialogTitle sx={{ p: 0, mb: 3, position: "relative" }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0,0,0,0.87)",
                fontWeight: 500,
                fontSize: "1.25rem",
              }}
            >
              Administrador de usuarios
            </Typography>
            <IconButton
              onClick={handleCloseEditModal}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "rgba(0,0,0,0.54)",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Accordion: Datos del Usuario */}
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#fafafa",
                    "& .MuiAccordionSummary-content": {
                      my: 1.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Datos del Usuario
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    {/* Correo */}
                    <TextField
                      fullWidth
                      label="Correo *"
                      value={editFormData.correo}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          correo: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: editFormData.correo && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setEditFormData({
                                    ...editFormData,
                                    correo: "",
                                  })
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

                    {/* Nombres */}
                    <TextField
                      fullWidth
                      label="Nombres *"
                      value={editFormData.nombres}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          nombres: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: editFormData.nombres && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setEditFormData({
                                    ...editFormData,
                                    nombres: "",
                                  })
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

                    {/* Apellidos */}
                    <TextField
                      fullWidth
                      label="Apellidos *"
                      value={editFormData.apellidos}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          apellidos: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: editFormData.apellidos && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setEditFormData({
                                    ...editFormData,
                                    apellidos: "",
                                  })
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

                    {/* Estado */}
                    <FormControl fullWidth size="small">
                      <InputLabel>Estado *</InputLabel>
                      <Select
                        value={editFormData.estado}
                        label="Estado *"
                        onChange={(e) =>
                          setEditFormData({
                            ...editFormData,
                            estado: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="Activo">Activo</MenuItem>
                        <MenuItem value="Inactivo">Inactivo</MenuItem>
                      </Select>
                    </FormControl>

                    {/* Teléfono de Celular */}
                    <TextField
                      fullWidth
                      label="Teléfono de Celular *"
                      value={editFormData.telefono}
                      onChange={(e) =>
                        setEditFormData({
                          ...editFormData,
                          telefono: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: editFormData.telefono && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setEditFormData({
                                    ...editFormData,
                                    telefono: "",
                                  })
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
                </AccordionDetails>
              </Accordion>

              {/* Accordion: Roles */}
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    backgroundColor: "#fafafa",
                    "& .MuiAccordionSummary-content": {
                      my: 1.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Roles
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 3 }}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    {/* Buscador de Roles */}
                    <TextField
                      fullWidth
                      placeholder="Buscar Roles"
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />

                    {/* Tabla de Roles y Permisos */}
                    <Box
                      sx={{
                        border: "1px solid rgba(0,0,0,0.12)",
                        borderRadius: 1,
                      }}
                    >
                      {/* Header */}
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          p: 2,
                          backgroundColor: "#fafafa",
                          borderBottom: "1px solid rgba(0,0,0,0.12)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.87)",
                          }}
                        >
                          Roles y Permisos
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "rgba(0,0,0,0.87)",
                          }}
                        >
                          Alcance
                        </Typography>
                      </Box>

                      {/* Kalpa Perú */}
                      <Box sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 2,
                            gap: 1,
                          }}
                        >
                          <Checkbox />
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 500,
                              color: "rgba(0,0,0,0.87)",
                            }}
                          >
                            Kalpa Perú
                          </Typography>
                        </Box>

                        {/* Sub-roles */}
                        <Box sx={{ pl: 6, pb: 2 }}>
                          {/* Administrador */}
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto",
                              alignItems: "center",
                              py: 1,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Checkbox />
                              <Typography sx={{ fontSize: "14px" }}>
                                Administrador
                              </Typography>
                            </Box>
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleOpenPermissionsModal("Administrador")
                              }
                            >
                              <VisibilityRounded sx={{ fontSize: 18, mr: 2 }} />
                            </IconButton>
                          </Box>

                          {/* Operador */}
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto",
                              alignItems: "center",
                              py: 1,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Checkbox
                                checked={editFormData.rol === "Operador"}
                                onChange={(e) =>
                                  setEditFormData({
                                    ...editFormData,
                                    rol: e.target.checked ? "Operador" : "",
                                  })
                                }
                              />
                              <Typography sx={{ fontSize: "14px" }}>
                                Operador
                              </Typography>
                            </Box>
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleOpenPermissionsModal("Operador")
                              }
                            >
                              <VisibilityRounded sx={{ fontSize: 18, mr: 2 }} />
                            </IconButton>
                          </Box>

                          {/* Emisor */}
                          <Box
                            sx={{
                              display: "grid",
                              gridTemplateColumns: "1fr auto",
                              alignItems: "center",
                              py: 1,
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Checkbox />
                              <Typography sx={{ fontSize: "14px" }}>
                                Emisor
                              </Typography>
                            </Box>
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleOpenPermissionsModal("Emisor")
                              }
                            >
                              <VisibilityRounded sx={{ fontSize: 18, mr: 2 }} />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>

              {/* Botones de acción */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "flex-end",
                  mt: 2,
                }}
              >
                <Button
                  onClick={handleCloseEditModal}
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
                  onClick={handleSaveEdit}
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

        {/* Modal de Permisos por Rol */}
        <Dialog
          open={openPermissionsModal}
          onClose={handleClosePermissionsModal}
          maxWidth="md"
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
          <DialogTitle sx={{ p: 0, mb: 3, position: "relative" }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0,0,0,0.87)",
                fontWeight: 500,
                fontSize: "1.25rem",
              }}
            >
              Alcance de Rol {selectedRoleForPermissions}
            </Typography>
            <IconButton
              onClick={handleClosePermissionsModal}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "rgba(0,0,0,0.54)",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Contenido según el rol seleccionado */}
              {selectedRoleForPermissions === "Operador" && (
                <Box>
                  {/* Módulo Header */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      p: 2,
                      backgroundColor: "#fafafa",
                      borderBottom: "1px solid rgba(0,0,0,0.12)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                      }}
                    >
                      Módulo
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                      }}
                    >
                      Permisos
                    </Typography>
                  </Box>

                  {/* Gestión de Demandas / Aceptaciones */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Gestión de Demandas / Aceptaciones
                    </Typography>

                    {/* Permisos */}
                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Ingreso de Aceptaciones
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Creación
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Ingreso de Cesiones
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Creación
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Reportes y Boletines
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Individual - Aceptaciones
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Individual - Aceptaciones 2
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Modificación
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Carga masiva Demandas/Aceptaciones */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Carga masiva Demandas/Aceptaciones
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Cargar Archivo
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Creación
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Descargar Archivo
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}

              {selectedRoleForPermissions === "Emisor" && (
                <Box>
                  {/* Módulo Header */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      p: 2,
                      backgroundColor: "#fafafa",
                      borderBottom: "1px solid rgba(0,0,0,0.12)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                      }}
                    >
                      Módulo
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                      }}
                    >
                      Permisos
                    </Typography>
                  </Box>

                  {/* Gestión de Demandas / Aceptaciones */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Gestión de Demandas / Aceptaciones
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso de Visualización de Gráfica
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Ver Tabla Resumen
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Reportes y Boletines
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Precio Referencia */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Precio Referencia
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Reporte Demanda/Aceptaciones - Detallado Precio
                          Referencia
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Reporte Consolidado de Demandas/ Aceptaciones
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Generación Reporte Libro de Ofertas Emisor Recompra
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}

              {selectedRoleForPermissions === "Administrador" && (
                <Box>
                  {/* Módulo Header */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      p: 2,
                      backgroundColor: "#fafafa",
                      borderBottom: "1px solid rgba(0,0,0,0.12)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                      }}
                    >
                      Módulo
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                      }}
                    >
                      Permisos
                    </Typography>
                  </Box>

                  {/* Gestión de Usuarios */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)" }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Gestión de Usuarios
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Visibilidad Módulo
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Administración de Usuarios
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Crear, Modificar
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Administración de Usuarios Accesos a Reportes
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Administración de Usuarios Modificar estado
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Modificar
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Gestión de Rol */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Gestión de Rol
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Perfiles
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura, Modificar
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Gestión de Claves */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Gestión de Claves
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Cambiar Clave
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Modificar
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Gestión de Demandas / Aceptaciones */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Gestión de Demandas / Aceptaciones
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Reportes y Boletines
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                          borderBottom: "1px solid rgba(0,0,0,0.08)",
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso Visualización Institución - Aceptaciones
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Permiso de Gestión de Aceptaciones 2
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Modificación
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Carga Masiva Demandas/Aceptaciones */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Carga Masiva Demandas/Aceptaciones
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Descarga del Archivo
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Precio Referencia */}
                  <Box sx={{ border: "1px solid rgba(0,0,0,0.12)", mt: 2 }}>
                    <Typography
                      sx={{
                        p: 2,
                        fontSize: "14px",
                        fontWeight: 600,
                        backgroundColor: "#fff",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      Precio Referencia
                    </Typography>

                    <Box sx={{ p: 2 }}>
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "1fr auto",
                          py: 1.5,
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          Reporte Consolidado de Demandas /Aceptaciones
                        </Typography>
                        <Typography sx={{ fontSize: "14px", color: "#666" }}>
                          Lectura
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Botón CERRAR */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 3,
                }}
              >
                <Button
                  onClick={handleClosePermissionsModal}
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF4201",
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    px: 6,
                    "&:hover": {
                      backgroundColor: "#e03a01",
                    },
                  }}
                >
                  Cerrar
                </Button>
              </Box>
            </Box>
          </DialogContent>
        </Dialog>

        {/* Modal de Crear Usuario con Stepper */}
        <Dialog
          open={openCreateUserModal}
          onClose={handleCloseCreateUserModal}
          maxWidth="md"
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
          <DialogTitle sx={{ p: 0, mb: 3, position: "relative" }}>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0,0,0,0.87)",
                fontWeight: 500,
                fontSize: "1.25rem",
              }}
            >
              Administrador de usuarios
            </Typography>
            <IconButton
              onClick={handleCloseCreateUserModal}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                color: "rgba(0,0,0,0.54)",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 0 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {/* Stepper */}
              <Stepper activeStep={createUserStep}>
                <Step>
                  <StepLabel>Datos del Usuario</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Roles</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Revisión</StepLabel>
                </Step>
              </Stepper>

              {/* Step 1: Datos del Usuario */}
              {createUserStep === 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Datos del Usuario
                  </Typography>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    {/* Correo */}
                    <TextField
                      fullWidth
                      label="Correo *"
                      value={createUserFormData.correo}
                      onChange={(e) =>
                        setCreateUserFormData({
                          ...createUserFormData,
                          correo: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: createUserFormData.correo && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setCreateUserFormData({
                                    ...createUserFormData,
                                    correo: "",
                                  })
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

                    {/* Nombres */}
                    <TextField
                      fullWidth
                      label="Nombres *"
                      value={createUserFormData.nombres}
                      onChange={(e) =>
                        setCreateUserFormData({
                          ...createUserFormData,
                          nombres: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: createUserFormData.nombres && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setCreateUserFormData({
                                    ...createUserFormData,
                                    nombres: "",
                                  })
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

                    {/* Apellidos */}
                    <TextField
                      fullWidth
                      label="Apellidos *"
                      value={createUserFormData.apellidos}
                      onChange={(e) =>
                        setCreateUserFormData({
                          ...createUserFormData,
                          apellidos: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: createUserFormData.apellidos && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setCreateUserFormData({
                                    ...createUserFormData,
                                    apellidos: "",
                                  })
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

                    {/* Estado */}
                    <FormControl fullWidth size="small">
                      <InputLabel>Estado *</InputLabel>
                      <Select
                        value={createUserFormData.estado}
                        label="Estado *"
                        onChange={(e) =>
                          setCreateUserFormData({
                            ...createUserFormData,
                            estado: e.target.value,
                          })
                        }
                      >
                        <MenuItem value="Activo">Activo</MenuItem>
                        <MenuItem value="Inactivo">Inactivo</MenuItem>
                      </Select>
                    </FormControl>

                    {/* Teléfono de Celular */}
                    <TextField
                      fullWidth
                      label="Teléfono de Celular *"
                      value={createUserFormData.telefono}
                      onChange={(e) =>
                        setCreateUserFormData({
                          ...createUserFormData,
                          telefono: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                      slotProps={{
                        input: {
                          endAdornment: createUserFormData.telefono && (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() =>
                                  setCreateUserFormData({
                                    ...createUserFormData,
                                    telefono: "",
                                  })
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

                    {/* Contraseña */}
                    <TextField
                      fullWidth
                      label="Contraseña *"
                      type="password"
                      value={createUserFormData.contrasena}
                      onChange={(e) =>
                        setCreateUserFormData({
                          ...createUserFormData,
                          contrasena: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                    />

                    {/* Confirmar Contraseña */}
                    <TextField
                      fullWidth
                      label="Confirmar Contraseña *"
                      type="password"
                      value={createUserFormData.confirmarContrasena}
                      onChange={(e) =>
                        setCreateUserFormData({
                          ...createUserFormData,
                          confirmarContrasena: e.target.value,
                        })
                      }
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                </Box>
              )}

              {/* Step 2: Roles */}
              {createUserStep === 1 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Roles
                  </Typography>

                  {/* Buscador de Roles */}
                  <TextField
                    fullWidth
                    placeholder="Buscar Roles"
                    variant="outlined"
                    size="small"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "rgba(0,0,0,0.54)" }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                  />

                  {/* Tabla de Roles y Permisos */}
                  <Box
                    sx={{
                      border: "1px solid rgba(0,0,0,0.12)",
                      borderRadius: 1,
                    }}
                  >
                    {/* Header */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        p: 2,
                        backgroundColor: "#fafafa",
                        borderBottom: "1px solid rgba(0,0,0,0.12)",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "rgba(0,0,0,0.87)",
                        }}
                      >
                        Roles y Permisos
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: "rgba(0,0,0,0.87)",
                        }}
                      >
                        Alcance
                      </Typography>
                    </Box>

                    {/* Kalpa Perú */}
                    <Box sx={{ borderBottom: "1px solid rgba(0,0,0,0.12)" }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          p: 2,
                          gap: 1,
                        }}
                      >
                        <Checkbox />
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            color: "rgba(0,0,0,0.87)",
                          }}
                        >
                          Kalpa Perú
                        </Typography>
                      </Box>

                      {/* Sub-roles */}
                      <Box sx={{ pl: 6, pb: 2 }}>
                        {/* Administrador */}
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto",
                            alignItems: "center",
                            py: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Checkbox
                              checked={createUserFormData.roles.administrador}
                              onChange={(e) =>
                                setCreateUserFormData({
                                  ...createUserFormData,
                                  roles: {
                                    ...createUserFormData.roles,
                                    administrador: e.target.checked,
                                  },
                                })
                              }
                            />
                            <Typography sx={{ fontSize: "14px" }}>
                              Administrador
                            </Typography>
                          </Box>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleOpenPermissionsModal("Administrador")
                            }
                          >
                            <VisibilityRounded sx={{ fontSize: 18, mr: 2 }} />
                          </IconButton>
                        </Box>

                        {/* Operador */}
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto",
                            alignItems: "center",
                            py: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Checkbox
                              checked={createUserFormData.roles.operador}
                              onChange={(e) =>
                                setCreateUserFormData({
                                  ...createUserFormData,
                                  roles: {
                                    ...createUserFormData.roles,
                                    operador: e.target.checked,
                                  },
                                })
                              }
                            />
                            <Typography sx={{ fontSize: "14px" }}>
                              Operador
                            </Typography>
                          </Box>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleOpenPermissionsModal("Operador")
                            }
                          >
                            <VisibilityRounded sx={{ fontSize: 18, mr: 2 }} />
                          </IconButton>
                        </Box>

                        {/* Emisor */}
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr auto",
                            alignItems: "center",
                            py: 1,
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Checkbox
                              checked={createUserFormData.roles.emisor}
                              onChange={(e) =>
                                setCreateUserFormData({
                                  ...createUserFormData,
                                  roles: {
                                    ...createUserFormData.roles,
                                    emisor: e.target.checked,
                                  },
                                })
                              }
                            />
                            <Typography sx={{ fontSize: "14px" }}>
                              Emisor
                            </Typography>
                          </Box>
                          <IconButton
                            size="small"
                            onClick={() => handleOpenPermissionsModal("Emisor")}
                          >
                            <VisibilityRounded sx={{ fontSize: 18, mr: 2 }} />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Step 3: Revisión */}
              {createUserStep === 2 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Revisión
                  </Typography>

                  {/* Resumen de Datos del Usuario */}
                  <Box
                    sx={{
                      border: "1px solid rgba(0,0,0,0.12)",
                      borderRadius: 1,
                      p: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                        mb: 2,
                      }}
                    >
                      Datos del Usuario
                    </Typography>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "150px 1fr",
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                        >
                          Correo:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.87)",
                            fontWeight: 500,
                          }}
                        >
                          {createUserFormData.correo}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "150px 1fr",
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                        >
                          Nombres:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.87)",
                            fontWeight: 500,
                          }}
                        >
                          {createUserFormData.nombres}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "150px 1fr",
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                        >
                          Apellidos:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.87)",
                            fontWeight: 500,
                          }}
                        >
                          {createUserFormData.apellidos}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "150px 1fr",
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                        >
                          Estado:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.87)",
                            fontWeight: 500,
                          }}
                        >
                          {createUserFormData.estado}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "150px 1fr",
                          gap: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                        >
                          Teléfono:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "rgba(0,0,0,0.87)",
                            fontWeight: 500,
                          }}
                        >
                          {createUserFormData.telefono}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Resumen de Roles */}
                  <Box
                    sx={{
                      border: "1px solid rgba(0,0,0,0.12)",
                      borderRadius: 1,
                      p: 3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "rgba(0,0,0,0.87)",
                        mb: 2,
                      }}
                    >
                      Roles Asignados
                    </Typography>

                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      {createUserFormData.roles.administrador && (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#FF4201",
                            }}
                          />
                          <Typography sx={{ fontSize: "14px" }}>
                            Administrador
                          </Typography>
                        </Box>
                      )}
                      {createUserFormData.roles.operador && (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#FF4201",
                            }}
                          />
                          <Typography sx={{ fontSize: "14px" }}>
                            Operador
                          </Typography>
                        </Box>
                      )}
                      {createUserFormData.roles.emisor && (
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              backgroundColor: "#FF4201",
                            }}
                          />
                          <Typography sx={{ fontSize: "14px" }}>
                            Emisor
                          </Typography>
                        </Box>
                      )}
                      {!createUserFormData.roles.administrador &&
                        !createUserFormData.roles.operador &&
                        !createUserFormData.roles.emisor && (
                          <Typography
                            sx={{ fontSize: "14px", color: "rgba(0,0,0,0.6)" }}
                          >
                            No se han asignado roles
                          </Typography>
                        )}
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Botones de navegación */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "flex-end",
                  mt: 2,
                }}
              >
                <Button
                  onClick={handleCloseCreateUserModal}
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
                  Salir
                </Button>

                {createUserStep > 0 && (
                  <Button
                    onClick={handlePreviousStep}
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
                    Volver
                  </Button>
                )}

                {createUserStep < 2 ? (
                  <Button
                    onClick={handleNextStep}
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
                    Siguiente
                  </Button>
                ) : (
                  <Button
                    onClick={handleCreateUser}
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
                    Crear
                  </Button>
                )}
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </ProtectedRoute>
    </RoleProtectedRoute>
  );
}
