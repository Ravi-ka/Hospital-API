import mongoose from "mongoose";

//mongoose Patient schema
export const PatientSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Name is required"],
  },
  patientEmail: {
    type: String,
    unique: true,
  },
  contactNumber: {
    type: Number,
    unique: true,
    maxNumber: [10, "Mobile number can't exceed 10 digits"],
    required: [true, "Contact number is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Patient mongoose model
export const PatientModel = mongoose.model("Patient", PatientSchema);
