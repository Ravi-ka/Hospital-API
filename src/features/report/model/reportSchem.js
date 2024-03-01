import mongoose from "mongoose";

// Mongoose schema for Reports API path
const ReportSchema = mongoose.Schema({
  doctorDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  patientDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  height: Number,
  weight: Number,
  bloodGroup: String,
  status: {
    type: String,
    enum: [
      "Negative",
      "Traveled-Quarantine",
      "Symptoms-Quarantine",
      "Positive-Admit",
    ],
  },
});

// Mongoose model for Reports API path
export const ReportModel = mongoose.model("Reports", ReportSchema);
