import { Box, Container, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            fontFamily: '"Courier New", Courier, monospace',
            letterSpacing: "-0.02em",
          }}
        >
          Mark Eron Diaz.
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 720 }}>
          An AI-driven innovator creating practical, efficient solutions to
          advance AI in the Philippines.
        </Typography>
      </Container>
    </Box>
  );
}
