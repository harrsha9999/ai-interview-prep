import { test } from "node:test";
import assert from "node:assert/strict";
import { topics, getQuestion } from "../src/services/questions.js";

test("topics returns the known set", () => {
  const t = topics();
  assert.ok(t.includes("dsa"));
  assert.ok(t.includes("javascript"));
  assert.ok(t.includes("behavioral"));
});

test("getQuestion returns first unasked question", () => {
  const q = getQuestion("dsa", []);
  assert.equal(q.id, "dsa1");
});

test("getQuestion skips already-asked questions", () => {
  const q = getQuestion("dsa", ["dsa1", "dsa2"]);
  assert.equal(q.id, "dsa3");
});

test("getQuestion returns null when exhausted", () => {
  const q = getQuestion("behavioral", ["beh1", "beh2"]);
  assert.equal(q, null);
});

test("getQuestion returns null for unknown topic", () => {
  assert.equal(getQuestion("nope", []), null);
});
