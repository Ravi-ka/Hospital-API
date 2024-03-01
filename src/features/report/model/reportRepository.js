import { ReportModel } from "./reportSchem.js";

// method to create a new report
export const newReportRepo = async (data) => {
  return await ReportModel(data).save();
};

// method to get all the reports
export const getAllReportsRepo = async (id) => {
  return await ReportModel.find({ patientDetail: id })
    .populate("doctorDetail", "-doctorPassword")
    .populate("patientDetail")
    .sort({ date: -1 });
};

// method to get all the reports based on the specific status
export const getAllReportsByStatus = async (status) => {
  const report = await ReportModel.find({ status: status })
    .populate("doctorDetail", "-doctorPassword")
    .populate("patientDetail");
  return report;
};
