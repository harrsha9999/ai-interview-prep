import { test } from "node:test";
import assert from "node:assert/strict";
import { scoreAnswer } from "../src/services/evaluate.js";

const q = { id: "dsa1", q: "binary search complexity?", keywords: ["log", "sorted", "halve"] };

test("high score when keywords present and answer is substantial", () => {
  const answer =
    "Binary search works on a sorted array and we halve the search space each step, " +
    "giving log n time. For example, searching 1000 items takes about 10 steps.";
  const r = scoreAnswer(q, answer);
  assert.ok(r.score >= 70, `expected >=70, got ${r.score}`);
  assert.ok(r.strengths.length > 0);
});

test("low score for empty/short answer", () => {
  const r = scoreAnswer(q, "idk");
  assert.ok(r.score < 40);
  assert.ok(r.gaps.length > 0);
});

test("flags missing keywords", () => {
  const r = scoreAnswer(q, "It is fast and efficient on big inputs in general.");
  assert.ok(r.gaps.some((g) => /sorted|halve|log/.test(g)));
});

test("returns stable serializable shape", () => {
  const r = scoreAnswer(q, "sorted halve log example");
  assert.deepEqual(Object.keys(r).sort(), ["engine", "gaps", "score", "strengths"]);
  assert.equal(r.engine, "heuristic");
});
