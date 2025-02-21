import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#F5F5F5",
  boxShadow: "none",
  borderBottom: "1px solid #E0E0E0",
});

// Top Navigation Items
const topNavItems = ["ABOUT", "MEMORIAL CITY", "LEASING", "PROPERTIES", "NEWS"];

const TopNavBar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between", paddingX: 4 }}>
        {/* Left Section: Logo */}
        <Box display="flex" alignItems="center">
          <img src="https://www.metronational.com/svgs/MetroNational-logo.svg" alt="MetroNational Logo" style={{ height: 40 }} />
        </Box>

        {/* Center Section: Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {topNavItems.map((item) => (
            <Typography key={item} sx={{ fontSize: "14px", fontWeight: "bold", color: "#777" }}>
              {item}
            </Typography>
          ))}
        </Box>

        {/* Right Section: Icons */}
        <Box display="flex" alignItems="center" gap={2}>
          <Typography sx={{ fontSize: "14px", color: "#777", display: { xs: "none", md: "block" } }}>
            CONTACT US
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#777", display: { xs: "none", md: "block" } }}>
            TENANT PORTALS
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNavBar;
