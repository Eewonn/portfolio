import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import profile from "../assets/profile.png";
import heroBg from "../assets/heroBg.jpg";

export default function Hero() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "text.primary",
        bgcolor: "background.default",
        // Ensure the section has enough height for the half-background effect
        minHeight: { xs: "auto", md: "60vh" },
        py: { xs: 6, md: 12 },
      }}
    >
      {/* Top half with image */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "40vh", md: "50vh" },
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          zIndex: 0,
          opacity: isLight ? 1 : 0.5,
        }}
      />

      {/* Gradient overlay to fade to white */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "40vh", md: "50vh" },
          background: isLight ? "linear-gradient(to bottom, rgba(0,0,0,0.3), white 60%)" : "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(18, 18, 18, 1) 60%)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* Image - left on md+; top on xs */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Image - left on md+, stacked on xs */}
          <Box
            component="img"
            src={profile}
            alt="Profile"
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              borderRadius: "50%",
              boxShadow: 10,
              objectFit: "cover",
              flex: "0 0 auto",
              mx: { xs: "auto", md: 0 },
            }}
          />

          {/* Text content */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                fontFamily: '"Courier New", Courier, monospace',
                mb: 0.5,
                fontcolor: 'text.primary',
              }}
            >
              Mark Eron Diaz
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                fontFamily: '"Courier New", Courier, monospace',
                mb: 0,
              }}
            >
              Software Engineer | AI and Cybersecurity Enthusiast
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 720 }}
            >
              An AI-driven innovator creating practical, efficient solutions to
              advance AI in the Philippines.
            </Typography>

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 3,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                // href="#contact"
                sx={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                Contact
              </Button>
              <Button
                variant="contained"
                color="secondary"
                // href="/resume.pdf"
                // target="_blank"
                rel="noopener"
                sx={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                Resume
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
