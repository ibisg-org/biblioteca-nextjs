import dotenv from "dotenv";

if (process.env.ENV_PATH) dotenv.config({ path: process.env.ENV_PATH });
