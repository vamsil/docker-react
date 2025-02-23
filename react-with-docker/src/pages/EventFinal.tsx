//@ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  Typography,
  Card,
  Paper,
  OutlinedInput,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";

const EventHallBookingForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  // Watch location field to dynamically update the image
  const selectedLocation = watch("location", "Hall A");

  const onSubmit = (data: any) => {
    navigate("/thank-you", { state: { formData: data } });
  };

  return (
    <Paper sx={{ width: "80%", padding: 4, mt: 2, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
        Event Hall Booking Form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name & Contact Details */}
        <Box sx={{ backgroundColor: "#f7f7f7", padding: "16px", borderRadius: "8px", mb: 3, boxShadow: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Name & Contact Details
          </Typography>
          <OutlinedInput
            placeholder="Enter Your Name"
            fullWidth
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            sx={{ backgroundColor: "#fff", borderRadius: "6px", mb: 2 }}
          />
          <OutlinedInput
            placeholder="Enter Your Email Address"
            type="email"
            fullWidth
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            sx={{ backgroundColor: "#fff", borderRadius: "6px", mb: 2 }}
          />
          <OutlinedInput
            placeholder="Enter Your Contact #"
            type="tel"
            fullWidth
            {...register("contact", { required: "Contact number is required" })}
            error={!!errors.contact}
            sx={{ backgroundColor: "#fff", borderRadius: "6px" }}
          />
        </Box>

        {/* User Card with Image and Event Details */}
        <UserCard selectedLocation={selectedLocation} register={register} control={control} errors={errors} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          {/* Guests Love */}
          <FormGroup>
            <Typography variant="subtitle1">Guests Love</Typography>
            <FormControlLabel control={<Checkbox {...register("needs.wifi")} />} label="Wi-Fi" />
            <FormControlLabel control={<Checkbox {...register("needs.pool")} />} label="Swimming Pool" />
            <FormControlLabel control={<Checkbox {...register("needs.lounge")} />} label="Lounge" />
          </FormGroup>

          {/* General */}
          <FormGroup>
            <Typography variant="subtitle1">General</Typography>
            <FormControlLabel control={<Checkbox {...register("needs.service")} />} label="Service" />
            <FormControlLabel control={<Checkbox {...register("needs.parking")} />} label="Parking" />
            <FormControlLabel control={<Checkbox {...register("needs.projector")} />} label="Projector" />
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
          <Typography color="error" sx={{ marginBottom: 2 ,margingTop:2}}>
            Please fix the errors above before submitting.
          </Typography>
        )}
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
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Submit
        </Button>
      </form>
    </Paper>
  );
};
//new card
const UserCard = ({ selectedLocation, register, control, errors }) => {
    const locationImages = {
      "Hall A": "photo_hall.jpeg",
      "Hall B": "b_photo.jpg",
      "Hall C": "confg_hall.webp",
      "Hall B": "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    };
  
    return (
      <Card sx={{ width: "100%", display: "flex", borderRadius: "8px", boxShadow: 3, overflow: "hidden", mb: 3, p: 2, flexDirection: "row" }}>
        {/* Event Image (Left Side) */}
        <Box sx={{ width: "40%", height: "auto", flexShrink: 0 }}>
          <img
            src={locationImages[selectedLocation] || locationImages["Hall A"]}
            alt="Event Hall"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
          />
        </Box>
  
        {/* Event Details (Right Side) */}
        <Box sx={{ flex: 1, paddingLeft: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Event Details
          </Typography>
  
          {/* Event Date Range Picker */}
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ marginBottom: 2 }}>
            <Controller
              name="eventDateRange"
              control={control}
              defaultValue={[dayjs(), dayjs().add(1, "day")]} // Default today + next day
              rules={{ required: "Event date range is required" }}
              render={({ field }) => (
                <DateRangePicker
                  {...field}
                  format="YYYY-MM-DD"
                  slotProps={{
                    textField: { fullWidth: true, error: !!errors.eventDateRange, helperText: errors.eventDateRange?.message },
                  }}
                />
              )}
            />
          </LocalizationProvider>
  
          {/* Event Type Selection */}
          <FormControl fullWidth sx={{ marginBottom: 2,marginTop:2 }}>
            <InputLabel>Event Type</InputLabel>
            <Select {...register("eventype", { required: "Please select an event" })} error={!!errors.location}>
              <MenuItem value="event1">Event TYPE I</MenuItem>
              <MenuItem value="event2">Event TYPE II</MenuItem>
              <MenuItem value="event3">Event TYPE III</MenuItem>
            </Select>
          </FormControl>
  
          {/* Location Selection */}
          <FormControl fullWidth sx={{ marginTop: 2 }}>
            <InputLabel>Location</InputLabel>
            <Select {...register("location", { required: "Please select a location" })} error={!!errors.location}>
              <MenuItem value="Hall A">Hall A</MenuItem>
              <MenuItem value="Hall B">Hall B</MenuItem>
              <MenuItem value="Hall C">Hall C</MenuItem>
            </Select>
          </FormControl>
  
          {/* Team Capacity */}
          <TextField
            label="Capacity"
            type="number"
            fullWidth
            {...register("teamCapacity", {
              required: "capacity is required",
              min: { value: 1, message: "Team capacity must be at least 1" },
            })}
            error={!!errors.teamCapacity}
            sx={{ marginTop: 2 }}
          />
        </Box>
      </Card>
    );
  };
  
  
// UserCard Component with Horizontal Layout
// const UserCard = ({ selectedLocation, register, control, errors }) => {
//   const locationImages = {
//     "Hall A": "photo_hall.jpeg",
//     "Hall B": "b_photo.jpg",
//     "Hall C": "confg_hall.webp",
//     "Hall B": "https://images.unsplash.com/photo-1556761175-4b46a572b786",
//   };

//   return (
//     <Card sx={{ width: "100%", display: "flex",borderRadius: "8px", boxShadow:"10px", flexDirection: "row", overflow: "hidden", mb: 3, p: 2 }}>
//       {/* Event Image (Left Side) */}
     
//       <Box sx={{ width: "40%", height: "200px", flexShrink: 0 }}>
//         <img
//           src={locationImages[selectedLocation] || locationImages["Hall A"]}
//           alt="Event Hall"
//           style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px" }}
//         />
//       </Box>

//       {/* Event Details (Right Side) */}
//       <Box sx={{ flex: 1, paddingLeft: 2 }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>
//           Event Details
//         </Typography>

//         {/* Event Date Range Picker */}
//         <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ marginBottom: 2 }}>
//           <Controller
//             name="eventDateRange"
//             sx={{ marginBottom: 2 }}
//             control={control}
//             defaultValue={[dayjs(), dayjs().add(1, "day")]} // Default today + next day
//             rules={{ required: "Event date range is required" }}
//             render={({ field }) => (
//               <DateRangePicker
//                 {...field}
//                 format="YYYY-MM-DD"
//                 slotProps={{
//                   textField: { fullWidth: true, error: !!errors.eventDateRange, helperText: errors.eventDateRange?.message },
//                 }}
//               />
//             )}
//           />
//         </LocalizationProvider>
//         {/* Event Type Selection */}
//         <FormControl fullWidth sx={{ marginBottom: 2 }}>
//                 <InputLabel>Event Type</InputLabel>
//                 <Select {...register("eventype", { required: "Please select a event" })} error={!!errors.location}>
//                     <MenuItem value="event1">Event TYEP I</MenuItem>
//                     <MenuItem value="event2">Event TYEP II</MenuItem>
//                     <MenuItem value="event3">Event TYEP III</MenuItem>
//                 </Select>
//                 </FormControl>
//         {/* Location Selection */}
//         <FormControl fullWidth sx={{ marginTop: 2 }}>
//           <InputLabel>Location</InputLabel>
//           <Select {...register("location", { required: "Please select a location" })} error={!!errors.location}>
//             <MenuItem value="Hall A">Hall A</MenuItem>
//             <MenuItem value="Hall B">Hall B</MenuItem>
//             <MenuItem value="Hall C">Hall C</MenuItem>
//           </Select>
//         </FormControl>

//         {/* Team Capacity */}
//         <TextField
//           label="Team Capacity"
//           type="number"
//           fullWidth
//           {...register("teamCapacity", {
//             required: "Team capacity is required",
//             min: { value: 1, message: "Team capacity must be at least 1" },
//           })}
//           error={!!errors.teamCapacity}
//           sx={{ marginTop: 2 }}
//         />
//       </Box>
//     </Card>
//   );
// };

export default EventHallBookingForm;
