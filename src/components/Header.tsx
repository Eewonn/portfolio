import * as React from "react";
import { AppBar, Toolbar, IconButton, Menu, Button, Box, Container, Typography} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.png";
import logoDark from "../assets/logoDark.png";

const pages = ["About", "Projects", "Certifications", "Recommendations", "Contact"];

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

function Header({ darkMode, onToggleTheme }: HeaderProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
    position="sticky"
    elevation={4}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar,
        bgcolor: 'background.default',
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo - Left Side */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Box
              component="img"
              src={darkMode ? logoDark : logo}
              alt="Logo"
              sx={{
                display: { xs: "none", md: "flex" },
                height: 80,
                mr: 2,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: '"Courier New", Courier, monospace',
                fontWeight: 700,
                color: "text.primary",
                textDecoration: "none",
              }}
            >
            </Typography>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile Logo */}
          <Box
            component="img"
            src={darkMode ? logoDark : logo}
            alt="Logo"
            sx={{
              display: { xs: "flex", md: "none" },
              height: 80,
              mr: 1,
            }}
          />

          {/* Spacer to push nav to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation - Right Side */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  fontFamily: '"Courier New", Courier, monospace',
                  fontWeight: 700,
                  color: "text.primary",
                  textDecoration: "none",
                }}
              >
                {page}
              </Button>
            ))}
            
            {/* Theme Toggle Button */}
            <IconButton
              onClick={onToggleTheme}
              color="inherit"
              aria-label="toggle theme"
              sx={{ ml: 1 }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          {/* Mobile Theme Toggle */}
          <IconButton
            onClick={onToggleTheme}
            color="inherit"
            aria-label="toggle theme"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
      
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
