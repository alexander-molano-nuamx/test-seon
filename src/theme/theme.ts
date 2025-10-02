import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)", // usa la variable de `next/font`
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ff4201", // tu color corporativo
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
