import express from "express";
import path from "path";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/dbConnection.js";
import { DoctorRoutes } from "./src/features/doctor/routes/doctorRoutes.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const configPath = path.resolve("config", "uat.env");
dotenv.config({ path: configPath });

server.get("/", (req, res) => {
  res.status(200).send("Hospital API");
});
// Routes
server.use("/api/v1/doctors", DoctorRoutes);
// server.use("/api/v1/")

server.use(errorHandlerMiddleware);

server.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error while starting the server on ${process.env.PORT}`);
  } else {
    console.log(`server listening on ${process.env.PORT}`);
    connectToDatabase();
  }
});
