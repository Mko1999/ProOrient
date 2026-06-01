import { useState } from "react";
import { navigate } from "../lib/router.js";
import { S, C } from "../lib/theme.js";
import { QUESTIONS, SCALE } from "../data/questions.js";

// Runs the questionnaire. On completion, calls onComplete(answers).
export default function Test({ onComplete }) {
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [current, setCurrent] = useState(0);

  const q = QUESTIONS[current];
  const pct = Math.round((current / QUESTIONS.length) * 100);

  const answer = (v) => {
    const next = [...answers];
    next[current] = v;
    setAnswers(next);
    setTimeout(() => {
      if (current < QUESTIONS.length - 1) setCurrent(current + 1);
      else onComplete(next);
    }, 200);
  };

  return (
    <main style={S.wrap} className="fade" key={current}>
      <div style={{ padding: "30px 0 8px" }}>
        <span style={S.eyebrow}>Assessment</span>
        <div style={{ margin: "14px 0 28px" }}>
          <div style={styles.progMeta}>
            <span>Question {current + 1} / {QUESTIONS.length}</span>
            <span>{pct}%</span>
          </div>
          <div style={styles.progTrack}>
            <div style={{ ...styles.progFill, width: pct + "%" }} />
          </div>
        </div>
      </div>

      <div style={styles.qCard}>
        <div style={styles.qNum}>QUESTION {String(current + 1).padStart(2, "0")}</div>
        <div style={styles.qText}>How much would you enjoy {q.q}?</div>
        <div style={styles.scale}>
          {SCALE.map((s) => (
            <button
              key={s.v}
              className={"scaleBtn" + (answers[current] === s.v ? " sel" : "")}
              onClick={() => answer(s.v)}
            >
              <span style={styles.em}>{s.em}</span>
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.navRow}>
        <button
          className="btn ghost"
          style={{ visibility: current === 0 ? "hidden" : "visible" }}
          onClick={() => setCurrent(current - 1)}
        >
          ← Previous
        </button>
        <button className="btn ghost" onClick={() => navigate("home")}>Cancel</button>
      </div>
    </main>
  );
}

const styles = {
  progMeta: { display: "flex", justifyContent: "space-between", fontSize: 13, color: C.muted, marginBottom: 8 },
  progTrack: { height: 8, background: C.panel2, borderRadius: 99, overflow: "hidden" },
  progFill: { height: "100%", borderRadius: 99, background: "linear-gradient(90deg,#e8b04b,#5b8def)", transition: "width .35s" },
  qCard: {
    background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16,
    padding: "clamp(22px,4vw,34px) clamp(18px,3vw,30px)", minHeight: 200,
  },
  qNum: { fontSize: 13, color: C.accent, fontWeight: 600, letterSpacing: ".5px", marginBottom: 14 },
  qText: { fontFamily: "Georgia, serif", fontSize: "clamp(19px,3vw,27px)", fontWeight: 700, lineHeight: 1.3, marginBottom: 30 },
  scale: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(110px,1fr))", gap: 10 },
  em: { display: "block", fontSize: 22, marginBottom: 6 },
  navRow: { display: "flex", justifyContent: "space-between", marginTop: 24, gap: 12 },
};
