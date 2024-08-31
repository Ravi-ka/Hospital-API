import { rateLimit } from "express-rate-limit";

// Late Limiting
export const limiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  message: "You have exceeded the rate limit",
  headers: true,
});

// If the limit is exceeded, it will throw an 429 error
