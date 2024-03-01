import express from "express";
import {
  createNewReport,
  getAllReports,
  patientRegister,
} from "../controller/patientContoller.js";

export const PatientRoutes = express.Router();

PatientRoutes.post("/register", patientRegister);
PatientRoutes.post("/:id/create_report", createNewReport);
PatientRoutes.get("/:id/all_reports", getAllReports);

// Patient routes
