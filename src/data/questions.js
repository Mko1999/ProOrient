// 24-item interest inventory: 4 questions per RIASEC type.
// Each item: { t: type letter, q: lowercase verb phrase completing
// "How much would you enjoy ___ ?" }

export const QUESTIONS = [
  // R — Realistic
  { t: "R", q: "repairing machines or electronic devices" },
  { t: "R", q: "working with tools, equipment, or machinery" },
  { t: "R", q: "building or assembling things with your own hands" },
  { t: "R", q: "setting up or configuring computer hardware" },

  // I — Investigative
  { t: "I", q: "investigating scientific problems and running experiments" },
  { t: "I", q: "analyzing data to find patterns" },
  { t: "I", q: "solving complex math or logic problems" },
  { t: "I", q: "developing a new algorithm or software solution" },

  // A — Artistic
  { t: "A", q: "drawing, designing, or creating visual art" },
  { t: "A", q: "writing a story, poem, or screenplay" },
  { t: "A", q: "designing an interface or product" },
  { t: "A", q: "expressing ideas in original ways" },

  // S — Social
  { t: "S", q: "helping people solve their problems" },
  { t: "S", q: "teaching or explaining things to others" },
  { t: "S", q: "working in a team toward a shared goal" },
  { t: "S", q: "listening to people and understanding their feelings" },

  // E — Enterprising
  { t: "E", q: "leading a team or project" },
  { t: "E", q: "persuading people to accept your point of view" },
  { t: "E", q: "starting and growing your own business" },
  { t: "E", q: "presenting an idea to a large audience" },

  // C — Conventional
  { t: "C", q: "organizing data, documents, or files" },
  { t: "C", q: "working with numbers, reports, or budgets" },
  { t: "C", q: "following clear procedures and rules" },
  { t: "C", q: "checking data for accuracy and errors" },
];

// 5-point Likert scale (0..4).
export const SCALE = [
  { v: 0, em: "\uD83D\uDE16", label: "Not at all" },
  { v: 1, em: "\uD83D\uDE41", label: "A little" },
  { v: 2, em: "\uD83D\uDE10", label: "Neutral" },
  { v: 3, em: "\uD83D\uDE42", label: "A lot" },
  { v: 4, em: "\uD83D\uDE0D", label: "Definitely" },
];

export const MAX_PER_Q = 4;
