import { grey } from "@mui/material/colors";
import { ColorSystemOptions, createTheme } from "@mui/material/styles";

const semanticColors = {
  success: { main: "#9DF4D9", contrastText: "#000" },
  warning: { main: "#FFA47F", contrastText: "#000" },
  error: { main: "#FD6B6B", contrastText: "#000" },
  info: { main: "#9EF5FF", contrastText: "#000" },
};

export const lightPalette = {
  palette: {
    mode: "light",
    primary: { main: "#FF4201" },
    secondary: { main: "#16D480" },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#3D3D3D",
      secondary: "##FF4201",
    },
    ...semanticColors,
    cardActionBackground: "#F4F4F4",
    cardActionBackgroundHover: "#F8E2DA",
  },
} as ColorSystemOptions;

export const darkPalette = {
  palette: {
    mode: "dark",
    primary: { main: "#FF623D" },
    secondary: { main: "#7DF0C8" },
    background: {
      default: grey[900],
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    ...semanticColors,
    cardActionBackground: "#252525",
    cardActionBackgroundHover: "#E53C16",
  },
} as ColorSystemOptions;

export const nuamTheme = createTheme({
  zIndex: {
    drawer: 5,
  },
  cssVariables: {
    colorSchemeSelector: "data-nuam-theme",
  },
  colorSchemes: {
    light: lightPalette,
    dark: darkPalette,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.MuiButton-contained": {
            color: "#F7F7F7",
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--mui-palette-cardActionBackground)",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "var(--mui-palette-cardActionBackgroundHover)",
          },
        },
      },
    },
  },
});

export const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ff4201", // tu color corporativo
    },
    secondary: {
      main: "#3D3D3D",
    },
    background: {
      default: "#ffffff",
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          paddingTop: "0px",
          paddingBottom: "0px",
        },
      },
    },
  },
});
