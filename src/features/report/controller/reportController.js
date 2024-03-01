import { ErrorHandler } from "../../../../utils/errorHandler.js";
import { getAllReportsByStatus } from "../model/reportRepository.js";

// Controller method for getting all the reports based on the specific status
export const getReportByStatus = async (req, res, next) => {
  try {
    const status = req.params.status;
    const reports = await getAllReportsByStatus(status);
    return res.status(200).json({
      status: "success",
      message: `Displaying the reports by ${status}`,
      Response: reports,
    });
  } catch (error) {
    next(new ErrorHandler(500, error));
  }
};
