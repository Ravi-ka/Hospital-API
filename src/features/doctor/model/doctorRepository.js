import { DoctorModel } from "./doctorSchema.js";

export const createNewAccountRepo = async (data) => {
  return await new DoctorModel(data).save();
};

export const checkUser = async (doctorEmail) => {
  return await DoctorModel.findOne({ doctorEmail });
};
