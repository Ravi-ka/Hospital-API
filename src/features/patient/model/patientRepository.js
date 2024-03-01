import { PatientModel } from "./patientSchema.js";

// method to check if a valid patient or not
export const checkPatientRegisterRepo = async (contactNumber) => {
  return await PatientModel.findOne({ contactNumber });
};
// Patient new registration
export const patientRegisterRepo = async (data) => {
  return await PatientModel(data).save();
};
// method for getting the patient by ID
export const checkPatientById = async (id) => {
  return await PatientModel.findOne({ _id: id }, { date: 0 });
};
