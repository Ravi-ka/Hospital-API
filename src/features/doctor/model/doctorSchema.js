import mongoose from "mongoose";

// mongoose schema for /doctors API path
export const DoctorSchema = mongoose.Schema({
  doctorName: {
    type: String,
    required: [true, "Name is required"],
  },
  doctorEmail: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  doctorPassword: {
    type: String,
    required: [true, "Password is required"],
  },
  userType: {
    type: String,
    enum: ["Doctor", "Patient"],
    default: "Doctor",
  },
  registerID: {
    type: String,
    unique: true,
    required: [true, "Register Id is required"],
  },
});

// doctor mongoose model
export const DoctorModel = mongoose.model("doctors", DoctorSchema);
