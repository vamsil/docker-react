import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Card,
  Grid,
  Paper,
  OutlinedInput,
} from "@mui/material";

const EventHallBookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    navigate("/thank-you", { state: { formData: data } });
  };

  return (
    <Paper sx={{ maxWidth: "800px", margin: "auto", padding: 4, mt: 4, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Event Hall Booking Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name & Contact Details */}
        <Box
          sx={{
            backgroundColor: "#f7f7f7",
            padding: "16px",
            borderRadius: "8px",
            mb: 3,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Name & Contact Details
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <OutlinedInput
                placeholder="Enter Your Name"
                fullWidth
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <OutlinedInput
                placeholder="Enter Your Email Address"
                type="email"
                fullWidth
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <OutlinedInput
                placeholder="Enter Your Contact #"
                type="tel"
                fullWidth
                {...register("contact", { required: "Contact number is required" })}
                error={!!errors.contact}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                }}
              />
            </Grid>
          </Grid>
        </Box>

    

        {/* Additional Information */}
        <TextField
          label="Additional Information"
          multiline
          rows={4}
          fullWidth
          {...register("additionalInfo")}
          sx={{ marginBottom: 2 }}
        />

        {/* Checkbox Options */}
        <Typography variant="h6" sx={{ mt: 2 }}>
          Need(s)
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {/* Guests Love */}
          <FormGroup>
            <Typography variant="subtitle1">Guests Love</Typography>
            <FormControlLabel control={<Checkbox {...register("needs.wifi")} />} label="Wi-Fi" />
            <FormControlLabel control={<Checkbox {...register("needs.pool")} />} label="Swimming Pool" />
            <FormControlLabel control={<Checkbox {...register("needs.spa")} />} label="Spa" />
          </FormGroup>

          {/* General */}
          <FormGroup>
            <Typography variant="subtitle1">General</Typography>
            <FormControlLabel control={<Checkbox {...register("needs.service")} />} label="Service" />
            <FormControlLabel control={<Checkbox {...register("needs.parking")} />} label="Parking" />
            <FormControlLabel control={<Checkbox {...register("needs.bar")} />} label="Bar" />
          </FormGroup>

          {/* Transfers */}
          <FormGroup>
            <Typography variant="subtitle1">Transfers</Typography>
            <FormControlLabel control={<Checkbox {...register("needs.busTransfer")} />} label="Bus Station Transfers" />
            <FormControlLabel control={<Checkbox {...register("needs.airportTransfer")} />} label="Airport Transfers" />
            <FormControlLabel control={<Checkbox {...register("needs.railwayTransfer")} />} label="Railway Station Transfers" />
          </FormGroup>
        </Box>

        {/* Error Message */}
        {Object.keys(errors).length > 0 && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            Please fix the errors above before submitting.
          </Typography>
        )}

        {/* Submit Button */}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default EventHallBookingForm;
