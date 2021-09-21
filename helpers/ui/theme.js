import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#12181B",
      dark: "#ff8b3d",
      light: "#1F1B24",
      contrastText: "#EEEEEE",
    },
    secondary: {
      main: "#ff8b3d",
      contrastText: "#222222",
    },
  },
});

export default theme;
