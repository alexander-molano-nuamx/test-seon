import { Button, Typography } from "@mui/material";
import { Card, CardContent, Avatar, Chip, Box, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { getCompanyLogo } from "@/config/companies";

interface RoleCardProps {
  avatar: string;
  name: string;
  location: string;
  role: string;
  onClick?: () => void;
}

function RoleCard({ avatar, name, location, role, onClick }: RoleCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (role === "Operador") {
      router.push("/PageGestAcepCesOperator");
    }
    if (role === "Administrador") {
      router.push("/PageGestAcepCes");
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <Card
      sx={{
        width: 397,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(255, 66, 1, 0.08)",
        },
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Avatar src={avatar} alt={name} sx={{ width: 48, height: 48 }} />
        <Box sx={{ flex: 1 }}>
          <Stack spacing={0.5} alignItems="flex-start">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.87)" }}>
                {name}
              </Typography>
              <Chip
                label={location}
                size="small"
                sx={{
                  height: 24,
                  fontSize: "13px",
                  backgroundColor: "var(--sidebar-border)",
                  color: "rgba(0,0,0,0.6)",
                }}
              />
            </Stack>
            <Typography variant="caption" sx={{ color: "rgba(0,0,0,0.87)" }}>
              {role}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function RoleSelector() {
  const { data: session } = useSession();
  const userCompany = session?.user?.company || "";
  const userRole = session?.user?.role || "";

  // Get company logo dynamically based on user's company
  const companyLogo = getCompanyLogo(userCompany);

  // Map role from session to display text
  const getRoleDisplayText = (role: string) => {
    if (role === "operator") return "Operador";
    if (role === "admin") return "Administrador";
    if (role === "manager") return "Gestor";
    return role;
  };

  const roles = [
    {
      id: 1,
      avatar: companyLogo,
      name: userCompany,
      location: "Perú",
      role: getRoleDisplayText(userRole),
    },
  ];

  const handleRoleSelect = (roleId: number) => {
    console.log(`Role selected: ${roleId}`);
  };

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        padding: 1,
      }}
    >
      <Card sx={{ padding: 4, maxWidth: 500 }}>
        <CardContent>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h5" component="h1" textAlign="center">
              Elige un rol para ingresar
            </Typography>

            <Stack spacing={2} width="100%">
              {roles.map((role) => (
                <RoleCard
                  key={role.id}
                  avatar={role.avatar}
                  name={role.name}
                  location={role.location}
                  role={role.role}
                  onClick={() => handleRoleSelect(role.id)}
                />
              ))}
            </Stack>

            <Button
              fullWidth
              variant="text"
              onClick={handleLogout}
              sx={{
                color: "#ff4201",
                fontWeight: 500,
                fontSize: "15px",
                letterSpacing: "0.46px",
                "&:hover": {
                  backgroundColor: "var(--primary-hover)",
                },
              }}
            >
              CERRAR SESIÓN
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
