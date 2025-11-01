import { Box, Container, Typography, IconButton, Button, useTheme} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/logo.png";
import logoDark from "../assets/logoDark.png";

export default function Footer() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (

    <Box
      component="footer"
      id = "contact"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* Logo and Name */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box component="img" src={isLight ? logo : logoDark} alt="Logo" sx={{ height: 50 }} />
          </Box>

          {/* Social Links and Email Button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* LinkedIn */}
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/mark-eron-diaz/" // Replace with your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              sx={{ color: "text.primary" }}
            >
              <LinkedInIcon />
            </IconButton>

            {/* GitHub */}
            <IconButton
              component="a"
              href="https://github.com/Eewonn" // Replace with your GitHub
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              sx={{ color: "text.primary" }}
            >
              <GitHubIcon />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              component="a"
              href="mailto:markeron5@gmail.com"
              target="_blank"
              sx={{
                fontFamily: '"Courier New", Courier, monospace',
                ml: 1,
                textTransform: "none",
              }}
            >
              Email Me
            </Button>
          </Box>
        </Box>

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 3 }}
        >
          © {new Date().getFullYear()} Mark Eron Diaz. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
