import express from "express";
import {
  createNewAccount,
  getDetailsOfPatients,
  loginController,
} from "../controller/doctorController.js";

export const DoctorRoutes = express.Router();

DoctorRoutes.post("/register", createNewAccount);
DoctorRoutes.post("/login", loginController);
DoctorRoutes.get("/:id", getDetailsOfPatients);

// Doctor routes
