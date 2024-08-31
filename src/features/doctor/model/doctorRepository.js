import { ReportModel } from "../../report/model/reportSchem.js";
import { DoctorModel } from "./doctorSchema.js";

export const createNewAccountRepo = async (data) => {
  return await new DoctorModel(data).save();
};

export const checkUser = async (doctorEmail) => {
  return await DoctorModel.findOne({ doctorEmail });
};

export const getDetailsOfPatientsRepo = async (doctorID) => {
  const data = await ReportModel.find({ doctorDetail: Object(doctorID) });
  return data;
};
