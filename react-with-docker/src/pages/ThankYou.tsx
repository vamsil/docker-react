import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const ThankYouPage = () => {
  const location = useLocation();
  const { formData } = location.state || {}; // Get form data from the state

  return (
    <Box sx={{ maxWidth: "600px",  padding: 3,position:'relative',top:'2%' }}>
      <Typography variant="h4" gutterBottom>
        Thank You for Your Booking!
      </Typography>
      <Typography variant="body1" paragraph>
        Your booking request has been received. We will get back to you with a booking confirmation shortly.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Booking Details:
      </Typography>
      <ul>
        <li><strong>Date:</strong> {formData?.date}</li>
        <li><strong>Location:</strong> {formData?.location}</li>
        <li><strong>Team Capacity:</strong> {formData?.teamCapacity}</li>
        <li><strong>Additional Info:</strong> {formData?.additionalInfo}</li>
      </ul>
    </Box>
  );
};

export default ThankYouPage;
