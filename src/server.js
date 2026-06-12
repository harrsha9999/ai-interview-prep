import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";

import { interviewRouter } from "./routes/interview.js";
import { logger } from "./utils/logger.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/health", (req, res) =>
  res.json({ status: "ok", llm: Boolean(process.env.OPENAI_API_KEY) })
);
app.use("/api", interviewRouter());

app.listen(PORT, () => logger.info("AI Interview Prep listening", { port: PORT }));
