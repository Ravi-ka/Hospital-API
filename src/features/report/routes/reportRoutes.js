import express from "express";
import { getReportByStatus } from "../controller/reportController.js";

export const ReportRoutes = express.Router();

ReportRoutes.get("/:status", getReportByStatus);

// Routes file for the Reports API path
