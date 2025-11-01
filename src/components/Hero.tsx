import { Box, Container, Typography, Button } from "@mui/material";
import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: { xs: 6, md: 12 },
      }}
    >
      <Container maxWidth="lg">
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
          <Box sx={{ flex: 1 }}>
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
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
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
