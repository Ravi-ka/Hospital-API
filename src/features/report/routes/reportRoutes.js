import express from "express";
import { getReportByStatus } from "../controller/reportController.js";

export const ReportRoutes = express.Router();

ReportRoutes.get("/:status", getReportByStatus);
// ReportRoutes.get("/")

// Routes file for the Reports API path
