import express from "express";
import { createNewAccount } from "../controller/doctorController.js";

export const DoctorRoutes = express.Router();

DoctorRoutes.post("/register", createNewAccount);
