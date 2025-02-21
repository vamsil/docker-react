import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { Link } from "react-router-dom"; // Import Link for routing

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#F5F5F5",
  boxShadow: "none",
  borderBottom: "1px solid #E0E0E0",
});

// Top Navigation Items
const topNavItems = [
  { name: "ABOUT", route: "/about" },
  { name: "MEMORIAL CITY", route: "/contact" },
  { name: "LEASING", route: "/leasing" },
  { name: "PROPERTIES", route: "/properties" },
  { name: "NEWS", route: "/news" },
  { name: "EVENTS", route: "/events" },

];

const TopNavBar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ flexDirection: "column", paddingX: 4,height:'80px' }}>
        {/* Top Menu Bar: Contact Us and Tenant Portals */}
        <Box display="flex" alignItems="right"   sx={{ ml: '1200px' }}>
          <Typography sx={{ fontSize: "14px",  color: "#777", display: { xs: "none", md: "block" } }}>
            CONTACT US
          </Typography>
          <Typography sx={{ pl:'20px',fontSize: "14px", color: "#777", display: { xs: "none", md: "block" } }}>
            TENANT PORTALS
          </Typography>
        </Box>

        {/* Main Navigation Bar: Logo and Main Navigation */}
        <Box display="flex" alignItems="right" justifyContent="space-between" width="100%">
          {/* Left Section: Logo */}
          <Box display="flex" alignItems="center">
            <img src="https://www.metronational.com/svgs/MetroNational-logo.svg" alt="MetroNational Logo" style={{ height: 40 }} />
          </Box>

          {/* Center Section: Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, position:"relative", right:'800px', top:'14px' }}>
            {topNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.route} // Use the route for navigation
                style={{
                  textDecoration: "none",
                  color: "#777",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                <Typography>{item.name}</Typography>
              </Link>
            ))}
          </Box>

          {/* Right Section: Icons */}
          {/* <Box display="flex" alignItems="center" gap={2}>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box> */}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNavBar;
