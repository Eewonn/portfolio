import { useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme } from "./theme/theme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => getTheme(darkMode ? 'dark' : 'light'), [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onToggleTheme={toggleTheme} />
      <Hero />
      <Projects />
      <Certifications />
      <Recommendations />
    </ThemeProvider>
  );
}

export default App;
