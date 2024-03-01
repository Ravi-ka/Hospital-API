import { PatientModel } from "./patientSchema.js";

export const checkPatientRegisterRepo = async (contactNumber) => {
  return await PatientModel.findOne({ contactNumber });
};
export const patientRegisterRepo = async (data) => {
  return await PatientModel(data).save();
};
