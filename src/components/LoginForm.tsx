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

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(schema),
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleRecaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleTogglePassword = () => setShowPassword((prev) => !prev);
  const onSubmit = (data: LoginData) => {
    if (!captchaToken) {
      alert("Por favor completa el reCAPTCHA");
      return;
    }
    console.log("🚀 Datos del formulario:", data);
    console.log("🔐 Token CAPTCHA:", captchaToken);
    // Aquí iría la lógica de login real (fetch / auth)
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
            InputLabelProps={{ shrink: true }} // 👈 hace que el label esté fijo arriba
            error={!!errors.email}
            helperText={errors.email?.message}
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
            InputLabelProps={{ shrink: true }} // 👈 forzar label fijo
            error={!!errors.password}
            helperText={errors.password?.message}
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
        >
          <div className={styles.base}>
            <div className={styles.button}>Iniciar sesión</div>
          </div>
        </Button>
      </Box>
    </form>
  );
}
