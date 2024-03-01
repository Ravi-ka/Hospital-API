import jwt from "jsonwebtoken";

export const JwtAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).json({ Unauthorized: "Invalid or missing token" });
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userID = payload.userID;
    req.email = payload.email;
    next();
  } catch (error) {
    console.log("JWT Auth Error: " + error);
  }
};
