import { Router } from "express";
import { QUESTION_BANK, getQuestion, topics } from "../services/questions.js";
import { scoreAnswer } from "../services/evaluate.js";

function findById(topic, id) {
  return (QUESTION_BANK[topic] || []).find((q) => q.id === id) || null;
}

export function interviewRouter() {
  const router = Router();

  // GET /api/topics
  router.get("/topics", (req, res) => res.json({ topics: topics() }));

  // POST /api/question  body: { topic, asked: [ids] }
  router.post("/question", (req, res) => {
    const { topic, asked = [] } = req.body || {};
    const question = getQuestion(topic, asked);
    if (!question) {
      return res.status(404).json({ error: "No more questions for this topic." });
    }
    // Don't leak the expected keywords to the client.
    res.json({ id: question.id, q: question.q });
  });

  // POST /api/evaluate  body: { topic, id, answer }
  router.post("/evaluate", (req, res) => {
    const { topic, id, answer } = req.body || {};
    if (!topic || !id || typeof answer !== "string") {
      return res.status(400).json({ error: "topic, id and answer are required" });
    }
    const question = findById(topic, id);
    if (!question) return res.status(404).json({ error: "Unknown question" });
    res.json(scoreAnswer(question, answer));
  });

  return router;
}
