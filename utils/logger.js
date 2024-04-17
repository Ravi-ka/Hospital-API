import { createLogger, transports, format } from "winston";

//! Logging into the console
// export const logger = createLogger({
//   transports: [
//     new transports.Console({
//       level: "info",
//       format: format.combine(format.timestamp(), format.json()),
//     }),
//   ],
// });

// ! Logging into the file

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

export const logger = createLogger({
  levels: logLevels,
  level: process.env.LOG_LEVEL || "info",
  defaultMeta: { service: "app-logging" },
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    format.json()
  ),
  transports: [
    new transports.File({ filename: "combined.log" }),
    new transports.File({
      filename: "error-logs.log",
      level: "error",
      defaultMeta: { service: "error-logging" },
    }),
  ],
});
