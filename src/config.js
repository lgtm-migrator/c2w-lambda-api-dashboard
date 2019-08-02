import dotenv from "dotenv";

dotenv.config();

export const LOG_LEVEL = process.env.LOG_LEVEL || "debug";
export const REPORTS_COLLECTION = process.env.REPORTS_COLLECTION || "reports";
export const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/test";
