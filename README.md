# AI Interview Prep Platform

An AI-powered mock-interview platform that asks role-specific questions,
analyzes answers, gives structured feedback, and tracks improvement over time.

🔗 **Live demo:** https://ai-interview-prep-harsha.onrender.com
💻 **Stack:** React · Node.js · Generative AI APIs

---

## Why I built it
Practicing interviews alone gives no feedback. This simulates an interviewer
and returns specific, per-answer critique.

## Features
- Role/topic selection (e.g., DSA, JavaScript, behavioral)
- AI-generated questions, one at a time
- Per-answer feedback: strengths, gaps, a model answer
- Session scoring and progress tracking

## Tech Stack
| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React                         |
| Backend   | Node.js, Express.js           |
| AI        | <OpenAI / Gemini> API         |
| Database  | <MongoDB>                     |

## Architecture
1. User picks a role/topic; backend requests a question from the LLM.
2. User submits an answer.
3. Backend prompts the LLM to score and critique the answer in structured form.
4. Scores persist per session for progress tracking.

## Engineering notes
- **Consistent feedback:** structured prompt + schema validation.
- **Context management:** <how you keep session context within token limits>.

## Getting Started
```bash
git clone https://github.com/harrsha9999/ai-interview-prep.git
cd ai-interview-prep
npm install
cp .env.example .env
npm run dev
```

### Environment variables
```
AI_API_KEY=
MONGODB_URI=
PORT=5000
```

## Roadmap
- [ ] Voice answers (speech-to-text)
- [ ] Company-specific question banks
- [ ] Shareable performance report

## Author
**Harsha Vardhan G** — [LinkedIn](https://linkedin.com/in/haarsha9999) · [GitHub](https://github.com/harrsha9999)
