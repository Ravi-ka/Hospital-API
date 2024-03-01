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
    enum: [
      "Negative",
      "Traveled-Quarantine",
      "Symptoms-Quarantine",
      "Positive-Admit",
    ],
  },
  contactNumber: {
    type: Number,
    unique: true,
    maxNumber: [10, "Mobile number can't exceed 10 digits"],
    required: [true, "Contact number is required"],
  },
  date: Date,
});

export const PatientModel = mongoose.model("Patients", PatientSchema);
