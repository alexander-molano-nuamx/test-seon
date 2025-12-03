"use client";

import {
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/index.module.css";
import { signIn } from "next-auth/react";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Correo inválido")
      .required("Campo requerido")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Formato de email inválido"
      ),
    password: yup
      .string()
      .min(6, "Mínimo 6 caracteres")
      .required("Campo requerido")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])/,
        "Debe contener al menos una mayúscula y un número"
      ),
  })
  .required();

type LoginData = yup.InferType<typeof schema>;

export function LoginForm() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError: setFormError,
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleRecaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (data: LoginData) => {
    // Validar reCAPTCHA
    if (!captchaToken) {
      setAuthError("Por favor completa el reCAPTCHA");
      return;
    }

    setAuthError("");
    setIsLoading(true);

    try {
      // Intentar login con NextAuth
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        // Manejar diferentes tipos de errores
        let errorMessage = "";

        switch (result.error) {
          case "CredentialsSignin":
            errorMessage =
              "Credenciales incorrectas. Por favor, verifica tu email y contraseña.";
            break;
          case "Usuario no encontrado":
            errorMessage = "El usuario no existe en el sistema.";
            break;
          case "Contraseña incorrecta":
            errorMessage = "La contraseña es incorrecta.";
            break;
          default:
            errorMessage = "Error al iniciar sesión. Intenta nuevamente.";
        }

        setAuthError(errorMessage);

        // También mostrar error en los campos del formulario
        setFormError("email", {
          type: "manual",
          message: "Credenciales inválidas",
        });
        setFormError("password", {
          type: "manual",
          message: "Credenciales inválidas",
        });

        setIsLoading(false);
      } else if (result?.ok) {
        // Login exitoso
        console.log("✅ Login exitoso:", data.email);
        router.push("/SelectorRole");
      }
    } catch (error) {
      console.error("Error en login:", error);
      setAuthError("Error inesperado. Por favor, intenta nuevamente.");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.kcContent}>
      {/* Mensaje de error global */}
      {authError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {authError}
        </Alert>
      )}
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
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
            error={!!errors.email}
            helperText={errors.email?.message}
            disabled={isLoading}
            autoComplete="email"
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
            slotProps={{
              inputLabel: {
                shrink: true,
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword((v) => !v)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            error={!!errors.password}
            helperText={errors.password?.message}
            disabled={isLoading}
            autoComplete="current-password"
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
          disabled={isLoading || !captchaToken}
        >
          <div className={styles.base}>
            <div className={styles.button}>
              {isLoading ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CircularProgress size={20} color="inherit" />
                  <span>Iniciando sesión...</span>
                </Box>
              ) : (
                "Iniciar sesión"
              )}
            </div>
          </div>
        </Button>
      </Box>
    </form>
  );
}
