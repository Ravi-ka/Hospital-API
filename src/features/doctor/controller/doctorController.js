import { ErrorHandler } from "../../../../utils/errorHandler.js";
import { createNewAccountRepo } from "../model/doctorRepository.js";
import bcrypt from "bcrypt";

export const createNewAccount = async (req, res, next) => {
  try {
    const { doctorName, doctorEmail, doctorPassword, registerID } = req.body;
    const hashPassword = await bcrypt.hash(doctorPassword, 10);
    const newUser = {
      doctorName,
      doctorEmail,
      doctorPassword: hashPassword,
      registerID,
    };
    await createNewAccountRepo(req.body);
    return res.status(201).json({
      result: "success",
      message: "Account has been created",
      response: newUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      return next(new ErrorHandler(500, "Email already exists"));
    }
    return next(new ErrorHandler(500, error));
  }
};
