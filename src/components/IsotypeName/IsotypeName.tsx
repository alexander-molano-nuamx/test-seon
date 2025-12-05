import React from "react";
import { Box, styled, Typography } from "@mui/material";

/**
 * Props interface para el componente IsotypeName
 */
export interface IsotypeNameProps {
  /**
   * URL o path del logo a mostrar
   */
  logoSrc?: string;

  /**
   * Nombre del proyecto a mostrar como fallback o complemento
   */
  projectName: string;

  /**
   * Variante de diseño del componente
   * - light: Optimizado para fondos claros
   * - dark: Optimizado para fondos oscuros
   * - horizontal: Layout horizontal (logo + texto lado a lado)
   * - vertical: Layout vertical (logo arriba, texto abajo)
   * @default 'horizontal'
   */
  variant?: "light" | "dark" | "horizontal" | "vertical";

  /**
   * Tamaño del componente
   * - sm: Pequeño (ideal para headers compactos)
   * - md: Mediano (uso general)
   * - lg: Grande (ideal para pantallas de login)
   * @default 'md'
   */
  size?: "sm" | "md" | "lg";

  /**
   * Texto alternativo para el logo (accesibilidad)
   */
  alt?: string;

  /**
   * Callback cuando hay error al cargar la imagen
   */
  onImageError?: () => void;

  /**
   * Clases CSS adicionales
   */
  className?: string;
}

/**
 * Configuración de tamaños según el prop size
 */
const SIZE_CONFIG = {
  sm: {
    logoHeight: 32,
    fontSize: "1rem",
    fontWeight: 500,
    spacing: 4,
  },
  md: {
    logoHeight: 48,
    fontSize: "2.25rem",
    fontWeight: 600,
    spacing: 8,
  },
  lg: {
    logoHeight: 80,
    fontSize: "4rem",
    fontWeight: 700,
    spacing: 12,
  },
} as const;

/**
 * Container estilizado con soporte para variantes
 */
const IsotypeContainer = styled(Box, {
  shouldForwardProp: (prop) =>
    !["variant", "size", "hasLogo"].includes(prop as string),
})<{
  variant: NonNullable<IsotypeNameProps["variant"]>;
  size: NonNullable<IsotypeNameProps["size"]>;
  hasLogo: boolean;
}>(({ variant, size, hasLogo }) => {
  const isVertical = variant === "vertical";
  const isDark = variant === "dark";
  const config = SIZE_CONFIG[size];

  return {
    display: "flex",
    flexDirection: isVertical ? "column" : "row",
    alignItems: "center",
    justifyContent: hasLogo ? "flex-start" : "center",
    gap: config.spacing,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",

    // Responsive: forzar vertical en móviles si es necesario
    "@media (max-width: 600px)": {
      flexDirection:
        variant === "horizontal" ? "column" : isVertical ? "column" : "row",
      gap: SIZE_CONFIG.sm.spacing,
    },

    // Estilos según tema
    ...(isDark && {
      filter: "brightness(1.1)",
    }),
  };
});

/**
 * Logo estilizado con animación de carga
 */
const LogoImage = styled("img", {
  shouldForwardProp: (prop) => prop !== "size",
})<{ size: NonNullable<IsotypeNameProps["size"]> }>(({ size }) => {
  const config = SIZE_CONFIG[size];

  return {
    height: config.logoHeight,
    width: "auto",
    objectFit: "contain",
    transition:
      "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
    opacity: 0,
    animation: "fadeIn 0.5s ease forwards",

    "@keyframes fadeIn": {
      from: {
        opacity: 0,
        transform: "scale(0.95)",
      },
      to: {
        opacity: 1,
        transform: "scale(1)",
      },
    },

    "&:hover": {
      transform: "scale(1.05)",
    },

    // Responsive
    "@media (max-width: 600px)": {
      height: SIZE_CONFIG.sm.logoHeight,
    },
  };
});

/**
 * Texto del proyecto con tipografía mejorada
 */
const ProjectText = styled(Typography, {
  shouldForwardProp: (prop) =>
    !["themeVariant", "componentSize"].includes(prop as string),
})<{
  themeVariant: "light" | "dark";
  componentSize: NonNullable<IsotypeNameProps["size"]>;
}>(({ themeVariant, componentSize }) => {
  const isDark = themeVariant === "dark";
  const config = SIZE_CONFIG[componentSize];

  return {
    fontSize: config.fontSize,
    fontWeight: config.fontWeight,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: isDark ? "#ffffff" : "rgba(0, 0, 0, 0.87)",
    textAlign: "center",
    transition: "color 0.3s ease",
    fontFamily: "HandelGothicBT, Arial, sans-serif",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: 1,
    height: config.logoHeight,
    minHeight: config.logoHeight,
    alignItems: "center",
    justifyContent: "center",
    padding: "12px",
    position: "relative",
    borderTopRightRadius: "8px",
    flexShrink: 0,
    border: "2px solid #ff411c",

    "@media (max-width: 600px)": {
      fontSize: SIZE_CONFIG.sm.fontSize,
      height: SIZE_CONFIG.sm.logoHeight,
      minHeight: SIZE_CONFIG.sm.logoHeight,
    },
  };
});

/**
 * IsotypeName Component
 *
 * Componente modular y reutilizable para mostrar el logo y/o nombre del proyecto.
 * Diseñado específicamente para el flujo de Login Temporal con soporte completo
 * para personalización, variantes de diseño y fallback automático.
 *
 * @example
 * ```tsx
 * // Con logo
 * <IsotypeName
 *   logoSrc="/assets/logo.svg"
 *   projectName="Mi Proyecto"
 *   variant="horizontal"
 *   size="lg"
 * />
 *
 * // Solo texto (fallback)
 * <IsotypeName
 *   projectName="Mi Proyecto"
 *   variant="dark"
 *   size="md"
 * />
 * ```
 */
export const IsotypeName: React.FC<IsotypeNameProps> = ({
  logoSrc,
  projectName,
  variant = "horizontal",
  size = "md",
  alt,
  onImageError,
  className,
}) => {
  const [imageError, setImageError] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);

  /**
   * Maneja errores al cargar la imagen
   */
  const handleImageError = React.useCallback(() => {
    setImageError(true);
    onImageError?.();
  }, [onImageError]);

  /**
   * Maneja la carga exitosa de la imagen
   */
  const handleImageLoad = React.useCallback(() => {
    setImageLoaded(true);
  }, []);

  // Determinar si debe mostrar el logo
  const shouldShowLogo = logoSrc && !imageError;

  // Determinar variante efectiva (light/dark vs horizontal/vertical)
  const layoutVariant =
    variant === "light" || variant === "dark" ? "horizontal" : variant;

  const themeVariant =
    variant === "light" || variant === "dark" ? variant : "light";

  return (
    <IsotypeContainer
      variant={layoutVariant}
      size={size}
      hasLogo={shouldShowLogo || false}
      className={className}
      role="banner"
      aria-label={`${projectName} logo`}
    >
      {shouldShowLogo && (
        <LogoImage
          src={logoSrc}
          alt={alt || `${projectName} logo`}
          size={size}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="eager"
          draggable={false}
        />
      )}

      {/* Siempre mostrar el nombre del proyecto */}
      <ProjectText
        themeVariant={themeVariant}
        componentSize={size}
        sx={{
          fontFamily: "HandelGothicBT, Arial, sans-serif !important",
          fontSize: SIZE_CONFIG[size].fontSize + " !important",
        }}
      >
        {projectName}
      </ProjectText>
    </IsotypeContainer>
  );
};

/**
 * Display name para DevTools
 */
IsotypeName.displayName = "IsotypeName";

export default IsotypeName;
