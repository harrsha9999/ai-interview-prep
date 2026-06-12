// Question bank + selection logic. Selection is pure/deterministic given the
// set of already-asked ids, so it's unit-testable.

export const QUESTION_BANK = {
  dsa: [
    { id: "dsa1", q: "Explain the time and space complexity of binary search.", keywords: ["log", "sorted", "halve", "o(log", "logarithmic"] },
    { id: "dsa2", q: "How would you detect a cycle in a linked list?", keywords: ["floyd", "two pointer", "slow", "fast", "tortoise"] },
    { id: "dsa3", q: "When would you use a hash map over an array?", keywords: ["o(1)", "lookup", "key", "constant", "hash"] },
  ],
  javascript: [
    { id: "js1", q: "What is the difference between == and === in JavaScript?", keywords: ["type", "coercion", "strict", "equality"] },
    { id: "js2", q: "Explain closures and give a use case.", keywords: ["scope", "function", "lexical", "private", "remember"] },
    { id: "js3", q: "How does the event loop handle async code?", keywords: ["queue", "callback", "microtask", "stack", "non-blocking"] },
  ],
  behavioral: [
    { id: "beh1", q: "Tell me about a time you handled a tight deadline.", keywords: ["situation", "task", "action", "result", "prioritiz"] },
    { id: "beh2", q: "Describe a conflict in a team and how you resolved it.", keywords: ["listen", "communicat", "compromise", "resolve", "perspective"] },
  ],
};

export function topics() {
  return Object.keys(QUESTION_BANK);
}

// Returns the next unasked question for a topic, or null if exhausted.
export function getQuestion(topic, askedIds = []) {
  const bank = QUESTION_BANK[topic];
  if (!bank) return null;
  const asked = new Set(askedIds);
  return bank.find((item) => !asked.has(item.id)) || null;
}
