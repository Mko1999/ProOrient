// Pure RIASEC scoring engine — no React, no DOM. Easy to read and test.

import { HEX_ORDER } from "../data/types.js";
import { QUESTIONS, MAX_PER_Q } from "../data/questions.js";
import { OCCUPATIONS } from "../data/occupations.js";

// Stage 2 + 3: sum each type's item scores, then normalize to 0..100.
export function computeNorm(answers) {
  const sum = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const cnt = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  QUESTIONS.forEach((q, i) => {
    sum[q.t] += answers[i] ?? 0;
    cnt[q.t] += 1;
  });
  const norm = {};
  HEX_ORDER.forEach((t) => {
    norm[t] = Math.round((sum[t] / (cnt[t] * MAX_PER_Q)) * 100);
  });
  return norm;
}

// Stage 4: take the three highest types as the Holland code.
export function buildCode(norm) {
  return HEX_ORDER.map((t) => ({ t, v: norm[t] }))
    .sort(
      (a, b) => b.v - a.v || HEX_ORDER.indexOf(a.t) - HEX_ORDER.indexOf(b.t),
    )
    .slice(0, 3)
    .map((o) => o.t)
    .join("");
}

// Circular distance between two types on the hexagon (1, 2, or 3).
export function hexDistance(a, b) {
  const d = Math.abs(HEX_ORDER.indexOf(a) - HEX_ORDER.indexOf(b));
  return Math.min(d, HEX_ORDER.length - d);
}

// Stage 5: consistency from the distance between the first two letters.
export function consistency(code) {
  const d = hexDistance(code[0], code[1]);
  if (d === 1)
    return {
      score: "Բարձր",
      detail: "Ձեր առաջատար երկու տիպերը հարակից են՝ շատ հետևողական պրոֆիլ։",
    };
  if (d === 2)
    return {
      score: "Միջին",
      detail: "Ձեր առաջատար երկու տիպերը միջանկյալ են՝ չափավոր հետևողական։",
    };
  return {
    score: "Ցածր",
    detail: "Ձեր առաջատար երկու տիպերը հակադիր են՝ բազմակողմանի, բայց պակաս հետևողական։",
  };
}

// Stage 6: rank occupations by positional overlap with the user's code.
export function matchOccupations(code) {
  const rank = {};
  code.split("").forEach((t, i) => {
    rank[t] = 3 - i; // 3 for the first letter, then 2, then 1
  });
  return OCCUPATIONS.map((o) => {
    let score = 0;
    o.code.split("").forEach((t, i) => {
      if (rank[t]) score += rank[t] * (3 - i);
    });
    return { ...o, score };
  })
    .filter((o) => o.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);
}
