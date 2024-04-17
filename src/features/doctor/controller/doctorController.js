import { ErrorHandler } from "../../../../utils/errorHandler.js";
import { checkUser, createNewAccountRepo } from "../model/doctorRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { logger } from "../../../../utils/logger.js";

// new account creation for doctors
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
    const user = await createNewAccountRepo(newUser);
    return res.status(201).json({
      result: "success",
      message: "Account has been created",
      response: user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return next(new ErrorHandler(500, "Email already exists"));
    }
    return next(new ErrorHandler(500, error));
  }
};

// method for doctors login
export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await checkUser(email);
    if (!user) {
      logger.error(
        `statusCode:404 - error: Enter a valid email address - requestEmail:${email} - path:${req.url}`
      );
      return next(new ErrorHandler(404, "Enter a valid email address"));
    }
    const isValidPassword = await bcrypt.compare(password, user.doctorPassword);
    if (!isValidPassword) {
      logger.error(
        `statusCode:404 - error: Incorrect password - requestEmail:${email} - path:${req.url}`
      );
      return next(new ErrorHandler(404, "Enter the correct password"));
    }
    const payload = jwt.sign(
      {
        userID: user._id,
        email: user.doctorEmail,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    logger.info(
      `method:${req.method} - statusCode:200 - Login successful - email:${email} `
    );
    return res.status(200).json({
      result: "success",
      message: "Login successful",
      response: payload,
    });
  } catch (error) {
    logger.error(error);
    return next(new ErrorHandler(500, error));
  }
};
