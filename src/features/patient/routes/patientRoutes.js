import express from "express";
import { patientRegister } from "../controller/patientContoller.js";

export const PatientRoutes = express.Router();

PatientRoutes.post("/register", patientRegister);
