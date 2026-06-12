// Heuristic answer evaluator. Scores an answer against a question's expected
// keywords plus structure signals (length, specificity). Pure + testable.
// The LLM path can replace this later; this stays as the offline baseline.

function tokenize(text) {
  return (text || "").toLowerCase();
}

export function scoreAnswer(question, answer) {
  const text = tokenize(answer);
  const words = text.split(/\s+/).filter(Boolean);
  const keywords = question.keywords || [];

  const hit = keywords.filter((k) => text.includes(k));
  const keywordScore = keywords.length ? hit.length / keywords.length : 0;

  // Length signal: very short answers score lower; reward substance up to a point.
  const lengthScore = Math.min(words.length / 40, 1);

  // Weighted blend, 0–100.
  const score = Math.round((keywordScore * 0.7 + lengthScore * 0.3) * 100);

  const strengths = [];
  const gaps = [];

  if (hit.length) strengths.push(`Covered key concepts: ${hit.join(", ")}.`);
  if (words.length >= 30) strengths.push("Answer has reasonable depth.");

  const missing = keywords.filter((k) => !text.includes(k));
  if (missing.length) gaps.push(`Consider addressing: ${missing.join(", ")}.`);
  if (words.length < 15) gaps.push("Answer is short — expand with a concrete example.");
  if (!/\b(example|instance|time|project)\b/.test(text)) {
    gaps.push("Add a specific example to make it concrete.");
  }

  return { score, strengths, gaps, engine: "heuristic" };
}
