import React from "react";
import { Drawer, Box, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";

const SidebarContainer = styled(Drawer)({
  width: "280px",
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: "280px",
    backgroundColor: "#F0F2F5", // Light background for the sidebar
    color: "black",
    top: "84px", // Ensure it starts below the TopNavBar
    height: "calc(100% - 64px)", // Prevent overlapping content
  },
});

// Style for the "About" section with blue background
const AboutSection = styled(Box)({
  backgroundColor: "#283B80", // Dark Blue Background for "About"
  color: "white",
  padding: "16px",
  fontSize: "20px",
  fontWeight: "bold",
});

// Sidebar Items
const sideNavItems = [
  "ABOUT US OVERVIEW",
  "MISSION & VALUES",
  "HISTORY",
  "LEADERSHIP",
  "THE TREEHOUSE & SUSTAINABILITY",
  "WORKING AT METRONATIONAL",
];

const Sidebar = () => {
  return (
    <SidebarContainer variant="permanent" anchor="left">
      <Toolbar /> {/* Spacer to push content below TopNavBar */}
     <Box sx={{backgroundColor:'#28489E' }}>
      <Typography variant="h5" sx={{color:"#fff", pl:'20%'}}>About</Typography>
      <List sx={{ padding: "0",backgroundColor:'#28489E' }}>
        {sideNavItems.map((item) => (
          <ListItem  key={item} sx={{ paddingY: "6px", paddingX: "16px" }}>
            <ListItemText primary={item} sx={{ color: "#fff", fontSize: "14px" }} />
          </ListItem>
        ))}
      </List>
      
      </Box> 
    </SidebarContainer>
  );
};

export default Sidebar;
