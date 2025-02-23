import React, { useState } from "react";
import { Drawer, Box, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link,useLocation } from "react-router-dom"; // Import Link for routing

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
//   { label: "EVENT INQURY ", route: "/events" },

  { label: "SPACE MANAGER ", route: "/sm" },
  { label: "INQUERY MANAGER ", route: "/iq" },
  { label: "WORK FLOW MANAGER ", route: "/wf" },
  
 
];

const Sidebar = () => {

    const location = useLocation(); // Get the current route
    const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <SidebarContainer variant="permanent" anchor="left">
      <Toolbar /> {/* Spacer to push content below TopNavBar */}
      <Box sx={{ backgroundColor: '#28489E' }}>
        <Typography variant="h5" sx={{ color: "#fff", pl: '9%',pt:'5%' }}>EVENT PLANNER</Typography>
        <List>
            <ListItem onClick={() => setIsLoggedIn(!isLoggedIn)}>
                <ListItemText
                 primary={isLoggedIn ? "Employee Logout" : "Employee Login"}
                    sx={{
                      color: "#fff",
                      padding: "10px",
                      fontSize: "14px",
                      fontWeight: 'bold',
                      '&:hover': {
                        cursor:"pointer"
                      }
                    }} />
            </ListItem>
            </List>
       { isLoggedIn && (<List sx={{ padding: "0", backgroundColor: '#28489E' }}>
         
          {sideNavItems.map((item) => {
            const isActive = location.pathname === item.route;

            return (
              <ListItem
                key={item.label}
                sx={{
                  backgroundColor: isActive ? "#1A2F6B" : "transparent", // Highlight active route
                  "&:hover": { backgroundColor: "#1A2F6B" },
                }}
              >
                <Link to={item.route} style={{ textDecoration: "none", width: "100%" }}>
                  <ListItemText
                    primary={item.label}
                    sx={{
                      color: "#fff",
                      padding: "10px",
                      fontSize: "14px",
                      fontWeight: isActive ? "bold" : "normal",
                    }}
                  />
                </Link>
              </ListItem>
            );
          })}

        </List>)}
      </Box>
    </SidebarContainer>
  );
};

export default Sidebar;





