import { ErrorHandler } from "../../../../utils/errorHandler.js";
import {
  getAllReportsRepo,
  newReportRepo,
} from "../../report/model/reportRepository.js";
import {
  checkPatientById,
  checkPatientRegisterRepo,
  patientRegisterRepo,
} from "../model/patientRepository.js";
import { PatientModel } from "../model/patientSchema.js";

// method for patient register
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
    return next(new ErrorHandler(500, error));
  }
};

// method for creating a new report
export const createNewReport = async (req, res, next) => {
  try {
    const { height, weight, bloodGroup, status } = req.body;
    const id = req.params.id;
    const checkID = await checkPatientById(id);
    if (!checkID) {
      return next(new ErrorHandler(404, "Enter the correct patient Id"));
    }
    const newReport = {
      ...req.body,
      doctorDetail: req.userID,
      patientDetail: id,
    };
    await newReportRepo(newReport);
    return res
      .status(201)
      .json({ status: "success", response: "Report created" });
  } catch (error) {
    return next(new ErrorHandler(500, error));
  }
};

// method for getting all the users
export const getAllReports = async (req, res, next) => {
  try {
    const id = req.params.id;
    const reports = await getAllReportsRepo(id);
    return res.status(200).json({
      status: "success",
      message: `Reports fetched for ${id}`,
      response: reports,
    });
  } catch (error) {
    next(new ErrorHandler(500, error));
  }
};
