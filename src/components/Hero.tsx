import { Box, Container, Typography, Button } from "@mui/material";
import profile from "../assets/profile.png";
import heroBg from "../assets/heroBg.jpg";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "text.primary",
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
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), white 60%)",
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
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 600,
                fontFamily: '"Courier New", Courier, monospace',
                letterSpacing: "-0.02em",
              }}
            >
              Hi, I'm Mark Eron
            </Typography>

            <Typography
              variant="h5"
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
                color="primary"
                // href="#contact"
                sx={{ fontFamily: '"Courier New", Courier, monospace' }}
              >
                Contact
              </Button>
              <Button
                variant="contained"
                color="primary"
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
