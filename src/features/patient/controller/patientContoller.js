import { ErrorHandler } from "../../../../utils/errorHandler.js";
import {
  checkPatientRegisterRepo,
  patientRegisterRepo,
} from "../model/patientRepository.js";

export const patientRegister = async (req, res, next) => {
  try {
    const { patientName, patientEmail, contactNumber } = req.body;
    const register = await checkPatientRegisterRepo(contactNumber);
    if (register) {
      return res
        .status(200)
        .json({ result: "Patient already registered", patientInfo: register });
    } else {
      const newRegister = await patientRegisterRepo(req.body);
      return res.status(201).json({
        result: "success",
        message: "Patient registered successfully",
        response: newRegister,
      });
    }
  } catch (error) {
    return next(new ErrorHandler(500, "Internal server error"));
  }
};
