import express from "express";
import path from "path";
import dotenv from "dotenv";
import swagger from "swagger-ui-express";
import cookieParser from "cookie-parser";
import cors from "cors";

import apiDocs from "./swagger.json" assert { type: "json" };
import { connectToDatabase } from "./config/dbConnection.js";
import { DoctorRoutes } from "./src/features/doctor/routes/doctorRoutes.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import { PatientRoutes } from "./src/features/patient/routes/patientRoutes.js";
import { JwtAuth } from "./middlewares/jwtAuth.js";
import { ReportRoutes } from "./src/features/report/routes/reportRoutes.js";
import { logger } from "./utils/logger.js";
import { limiter } from "./middlewares/rateLimiter.js";

export const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Rate Limiting
server.use(limiter); // If the limit is exceeded, it will throw an 429 error

// Cookie Parser
server.use(cookieParser());

// CORS policy configuration
const corsOptions = {
  origin: ["*"],
};
server.use(cors(corsOptions));

// Path setup for .env
const configPath = path.resolve("config", "uat.env");
dotenv.config({ path: configPath });

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

// default path
server.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to hospital API",
    API_Documentation: `http://localhost:${process.env.PORT}/api-docs`,
  });
});

// Routes
server.use("/api/v1/doctors", DoctorRoutes);
server.use("/api/v1/patients", JwtAuth, PatientRoutes);
server.use("/api/v1/reports", JwtAuth, ReportRoutes);

// handling 404 on API path
server.use("*", (req, res) => {
  res.status(404).json({
    error: "The requested path is not available",
    message: "Please refer to the below or /api-docs path for more information",
    API_Documentation: `http://localhost:${process.env.PORT}/api-docs`,
  });
});

// Error handler for global usage
server.use(errorHandlerMiddleware);

server.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error while starting the server on ${process.env.PORT}`);
  } else {
    console.log(`server listening on ${process.env.PORT}`);
    connectToDatabase();
  }
});
