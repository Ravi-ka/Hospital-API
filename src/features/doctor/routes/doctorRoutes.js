import express from "express";
import {
  createNewAccount,
  loginController,
} from "../controller/doctorController.js";

export const DoctorRoutes = express.Router();

DoctorRoutes.post("/register", createNewAccount);
DoctorRoutes.post("/login", loginController);

// Doctor routes
