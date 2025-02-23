import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Card, CardContent, Divider, List, ListItem, ListItemText, Paper, Grid } from "@mui/material";
import { blue, green, red, purple, orange } from "@mui/material/colors";

const ThankYouPage = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Get form data from the state



  const selectedNeeds = Object.keys(formData.needs).filter(key => formData.needs[key]);

  return (
    <Box sx={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      background: 'linear-gradient(to bottom, #fff, #fff)',

      padding: 3,
      color: '#fff'
    }}>
      <Paper sx={{ maxWidth: 800, width: '100%', borderRadius: 3, boxShadow: 5, padding: 4 }}>
        <Card sx={{ backgroundColor: 'white', boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h3" gutterBottom align="center" color="primary" sx={{ fontWeight: 'bold' }}>
              Thank You for Your Booking!
            </Typography>
            <Typography variant="h6" paragraph align="center" sx={{ fontStyle: 'italic' }}>
              Your booking request has been received. We will get back to you with a booking confirmation shortly.
            </Typography>

            <Divider sx={{ marginY: 3 }} />

            <Typography variant="h6" color="textSecondary" align="center" sx={{ fontWeight: 'bold' }}>
              Booking Details:
            </Typography>

            <Grid container spacing={2} sx={{ marginY: 2 }}>
              {/* <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Date:</strong> {formData?.date}</Typography>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Location:</strong> {formData?.location}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Team Capacity:</strong> {formData?.teamCapacity}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><strong>Additional Info:</strong> {formData?.additionalInfo}</Typography>
              </Grid>
            </Grid>

            {/* Displaying the selected needs */}
            {selectedNeeds.length > 0 && (
              <>
                <Divider sx={{ marginY: 2 }} />
                <Typography variant="h6" color="textSecondary" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Selected Services:
                </Typography>
                <List sx={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: 2 }}>
                  {selectedNeeds.map((need, index) => {
                    // Define a color palette for different needs
                    const colorMap:any = {
                      airportTransfer: blue[500],
                      bar: orange[500],
                      busTransfer: green[500],
                      parking: purple[500],
                      pool: red[500],
                      railwayTransfer: purple[600],
                      service: green[700],
                      wifi: blue[700],
                    };
                    return (
                      <ListItem key={index} sx={{ backgroundColor: colorMap[need], marginBottom: 1, borderRadius: 1 }}>
                        <ListItemText
                          primary={need.replace(/([A-Z])/g, ' $1').toUpperCase()}
                          sx={{ color: '#fff', fontWeight: 'bold' }}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </>
            )}
          </CardContent>
        </Card>
      </Paper>
    </Box>
  );
};

export default ThankYouPage;
