import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Hello, I’m Ewon 👋
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Welcome to my portfolio built with React + TypeScript + Material UI!
      </Typography>
      <Button variant="contained" color="primary">
        View My Work
      </Button>
    </Container>
  );
}

export default App;
