import { DoctorModel } from "./doctorSchema.js";

export const createNewAccountRepo = async (data) => {
  return await new DoctorModel(data).save();
};
