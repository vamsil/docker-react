import React from "react";
import { Drawer, List, ListItem, ListItemText, Typography, Box } from "@mui/material";

const menuItems = [
  "About Us Overview",
  "Mission & Values",
  "History",
  "Leadership",
  "The Treehouse & Sustainability",
  "Working at Metronational",
];

const SidebarMenu = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          backgroundColor: "#2F4183",
          color: "#ffffff",
          padding: 2,
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "white" }}>
          About
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} sx={{ paddingY: 1, "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}>
            <ListItemText
              primary={item}
              primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: "14px", color: "#B0B8D1" } }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidebarMenu;
