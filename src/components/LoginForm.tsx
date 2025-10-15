"use client";

import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/index.module.css";

const schema = yup
  .object({
    email: yup.string().email("Correo inválido").required("Campo requerido"),
    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .required("Campo requerido"),
  })
  .required();

type LoginData = yup.InferType<typeof schema>;

// Usuarios válidos para acceder al sistema
const VALID_USERS = [
  {
    email: "admin@seon.com",
    password: "Admin123",
  },
  {
    email: "usuario1@kallpa.com",
    password: "Kallpa2024",
  },
  {
    email: "gestor@operaciones.com",
    password: "Gestor456",
  },
];

export function LoginForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const onSubmit = async (data: LoginData) => {
    if (!captchaToken) {
      alert("Por favor completa el reCAPTCHA");
      return;
    }

    setIsLoading(true);

    // Simular un pequeño delay de autenticación
    setTimeout(() => {
      // Verificar si el usuario existe en la lista de usuarios válidos
      const userExists = VALID_USERS.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (userExists) {
        console.log("✅ Login exitoso:", data.email);
        // Redirigir a PageGestAcepCes
        // router.push("/PageGestAcepCes");
        router.push("/SelectorRole");
      } else {
        // Mostrar error si las credenciales no son válidas
        setError("email", {
          type: "manual",
          message: "Credenciales inválidas",
        });
        setError("password", {
          type: "manual",
          message: "Credenciales inválidas",
        });
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.kcContent}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Ingresar Correo Electrónico"
            aria-label=""
            variant="outlined"
            fullWidth
            className={styles.textFieldCustom}
            InputLabelProps={{ shrink: true }}
            error={!!errors.email}
            helperText={errors.email?.message}
            disabled={isLoading}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Contraseña"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            className={styles.textFieldCustom}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((v) => !v)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ shrink: true }}
            error={!!errors.password}
            helperText={errors.password?.message}
            disabled={isLoading}
          />
        )}
      />
      <div className={styles.forgetmenot}>
        <div className={styles.loginLostPassword}>
          <a className={styles.forgotPasswordLink}>Olvidé mi contraseña</a>
        </div>
      </div>

      {/* reCAPTCHA */}
      <Box mt={1} width="100%" display="flex" justifyContent="left">
        <ReCAPTCHA
          sitekey="6LeBlN0rAAAAAB-hyhZDXZrFNEVibSW6bO548Kwi"
          onChange={handleRecaptchaChange}
        />
      </Box>

      {/* Botón */}
      <Box mt={3} width={"100%"}>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className={styles.kcFormButtonsIniciarSesio}
          disabled={isLoading}
        >
          <div className={styles.base}>
            <div className={styles.button}>
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </div>
          </div>
        </Button>
      </Box>
    </form>
  );
}
