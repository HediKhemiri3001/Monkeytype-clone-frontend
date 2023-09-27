import { createTheme, Stack, ThemeProvider } from "@mui/material";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";

import { TextBox } from "./components/TextBox/TextBox";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: "#e2b714" },
      secondary: { main: "#646669" },
    },
    typography: {
      fontFamily: ["Roboto Mono", "Roboto Mono", "Vazirmatn", "monospace"].join(
        ","
      ),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack flexDirection={"column"} height={1} gap={20} paddingX={"10em"}>
        <NavBar />
        <TextBox></TextBox>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
