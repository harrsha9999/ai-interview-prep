# AI Interview Prep Platform

Pick a topic, answer interview questions, and get scored feedback with
strengths and gaps. Runs fully offline with a deterministic scoring engine;
an OpenAI key can be added later for richer evaluation.

🔗 **Live demo:** https://ai-interview-prep-harsha.onrender.com
💻 **Stack:** Node.js · Express · Vanilla JS frontend (OpenAI optional)

![CI](https://github.com/harrsha9999/ai-interview-prep/actions/workflows/ci.yml/badge.svg)

---

## Why I built it
Practicing interviews alone gives no feedback. This acts as a lightweight
interviewer that returns specific, per-answer critique.

## Features
- Topic selection: DSA, JavaScript, behavioral
- Serves questions one at a time, skipping ones already asked
- Scores each answer (0–100) on concept coverage + depth
- Returns specific strengths and gaps per answer
- Works with no API key (deterministic engine); OpenAI key optional

## How it works
1. `GET /api/topics` lists available topics.
2. `POST /api/question { topic, asked[] }` returns the next unasked question.
3. `POST /api/evaluate { topic, id, answer }` scores the answer against the
   question's expected concepts and returns strengths + gaps.

Question selection and answer scoring are pure and unit-tested.

## Tech Stack
| Layer    | Tech                                |
|----------|-------------------------------------|
| Backend  | Node.js, Express.js                 |
| Frontend | Vanilla HTML/CSS/JS                  |
| AI       | OpenAI API (optional upgrade path)  |
| Tests    | Node.js built-in test runner        |

## Getting Started
```bash
git clone https://github.com/harrsha9999/ai-interview-prep.git
cd ai-interview-prep
npm install
npm run dev      # open http://localhost:5000
npm test         # 9 unit tests (question selection + scoring)
```

### Environment variables (all optional)
```
PORT=5000
OPENAI_API_KEY=     # optional upgrade path for LLM-based evaluation
OPENAI_MODEL=gpt-4o-mini
```

## API
| Method | Endpoint        | Description                          |
|--------|-----------------|--------------------------------------|
| GET    | /api/health     | Status + whether a key is set        |
| GET    | /api/topics     | List topics                          |
| POST   | /api/question   | Next unasked question for a topic    |
| POST   | /api/evaluate   | Score an answer -> strengths + gaps  |

## Roadmap
- [ ] LLM-based evaluation with model answers
- [ ] Session persistence + progress tracking
- [ ] Expanded question bank per topic

## Author
**Harsha Vardhan G** — [LinkedIn](https://linkedin.com/in/haarsha9999) · [GitHub](https://github.com/harrsha9999)
