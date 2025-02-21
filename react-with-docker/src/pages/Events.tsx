import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Button, MenuItem, FormControl, Select, InputLabel, Box, Typography } from "@mui/material";
import { relative } from "path";

const EventHallBookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data:any) => {
    // Navigate to Thank You page with form data
    navigate("/thank-you", { state: { formData: data } });
  };

  return (
    <Box sx={{ maxWidth: "600px",  padding: 3,position:'relative',top:'2%' }}>
      <Typography variant="h4" sx={{mb:'5%'}} gutterBottom>
        Event Hall Booking Form
      </Typography>
      <form  onSubmit={handleSubmit(onSubmit)}>
        {/* Event Date */}
        <TextField
          label="Event Date"
          type="date"
          fullWidth
          {...register("date", { required: "Event date is required" })}
          error={!!errors.date}
         
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 2 }}
        />

        {/* Location Selection */}
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>Location</InputLabel>
          <Select
            label="Location"
            {...register("location", { required: "Please select a location" })}
            error={!!errors.location}
          >
            <MenuItem value="Hall A">Hall A</MenuItem>
            <MenuItem value="Hall B">Hall B</MenuItem>
            <MenuItem value="Hall C">Hall C</MenuItem>
          </Select>
        </FormControl>

        {/* Team Capacity */}
        <TextField
          label="Team Capacity"
          type="number"
          fullWidth
          {...register("teamCapacity", {
            required: "Team capacity is required",
            min: { value: 1, message: "Team capacity must be at least 1" },
          })}
          error={!!errors.teamCapacity}
        //   helperText={errors.teamCapacity?.message || ""}
          sx={{ marginBottom: 2 }}
        />

        {/* Additional Information */}
        <TextField
          label="Additional Information"
          multiline
          rows={4}
          fullWidth
          {...register("additionalInfo")}
          sx={{ marginBottom: 2 }}
        />

        {/* Error Message */}
        {Object.keys(errors).length > 0 && (
          <Typography color="error" sx={{ marginBottom: 2 }}>
            Please fix the errors above before submitting.
          </Typography>
        )}

        {/* Submit Button */}
        <Button type="submit" variant="contained" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default EventHallBookingForm;
