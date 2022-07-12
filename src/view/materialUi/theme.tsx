//MUI v5 code:
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//@ts-ignore
// import RalewayWoff2 from "./fonts/Raleway.ttf";

export const customTheme = createTheme({
  palette: {
    primary: {
      light: "#E4DFD3",
      main: "#E1D5B7",
      dark: "#D0BB8B",
      contrastText: "#F7F6F2",
    },
    secondary: {
      light: "#90E0EF",
      main: "#1FBBD6",
      dark: "#167A8B",
      contrastText: "#fff",
    },
    // success: {},
    // info: {},
    // warning: {},
    // error: {},
  },
});

/**
 * primary -> pacific blue
 * secondary -> dutch white
 */
