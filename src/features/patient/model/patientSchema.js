import mongoose from "mongoose";

export const PatientSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: [true, "Name is required"],
  },
  patientEmail: {
    type: String,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    enum: [
      "Negative",
      "Traveled-Quarantine",
      "Symptoms-Quarantine",
      "Positive-Admit",
    ],
  },
  contactNumber: {
    type: Number,
    required: [true, "Contact number is required"],
  },
  date: date,
});
