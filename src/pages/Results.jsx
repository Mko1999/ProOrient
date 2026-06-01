import { useMemo } from "react";
import { navigate } from "../lib/router.js";
import { S, C } from "../lib/theme.js";
import { TYPES, HEX_ORDER } from "../data/types.js";
import { computeNorm, buildCode, matchOccupations, consistency } from "../lib/riasec.js";
import Hexagon from "../components/Hexagon.jsx";

export default function Results({ answers }) {
  // If someone lands here without taking the test, send them to it.
  if (!answers) {
    return (
      <main style={S.wrap} className="fade">
        <div style={S.pageHead}>
          <h1 style={S.h1}>No result yet</h1>
          <p style={S.lead}>Take the assessment to see your RIASEC profile.</p>
          <button className="btn primary" onClick={() => navigate("test")}>Start the test →</button>
        </div>
      </main>
    );
  }

  const norm = useMemo(() => computeNorm(answers), [answers]);
  const code = useMemo(() => buildCode(norm), [norm]);
  const matches = useMemo(() => matchOccupations(code), [code]);
  const cons = useMemo(() => consistency(code), [code]);
  const ordered = useMemo(
    () => HEX_ORDER.map((t) => ({ t, v: norm[t] })).sort((a, b) => b.v - a.v),
    [norm]
  );

  const handlePrint = () => {
    try {
      window.focus();
      window.print();
    } catch (e) {
      alert("To save as PDF, use your browser's Print option (Ctrl/Cmd + P) and choose \"Save as PDF\".");
    }
  };

  return (
    <main style={S.wrap} className="fade print-area">
      <div className="print-header" style={styles.printHeader}>
        <div style={{ fontFamily: "Georgia, serif", fontWeight: 900, fontSize: 22 }}>
          ProOrient — Career Orientation Report
        </div>
        <div style={{ fontSize: 12, color: "#555" }}>RIASEC / Holland assessment result</div>
      </div>

      <div style={{ padding: "38px 0 10px", textAlign: "center" }}>
        <span style={{ ...S.eyebrow, justifyContent: "center", display: "inline-flex" }}>Your result</span>
        <div style={styles.codeRow}>
          {code.split("").map((t, i) => (
            <div key={i} className="codeLetter" style={{ background: TYPES[t].color, animationDelay: `${i * 0.12}s` }}>
              {t}
            </div>
          ))}
        </div>
        <p style={styles.codeName}>{code.split("").map((t) => TYPES[t].name).join(" · ")}</p>
      </div>

      <div style={styles.grid}>
        {/* type ranking */}
        <div data-panel style={styles.panel}>
          <h3 style={styles.panelH}><span style={styles.ic} />Type ranking</h3>
          {ordered.map((o) => (
            <div key={o.t} style={{ marginBottom: 15 }}>
              <div style={styles.barTop}>
                <span style={{ fontWeight: 600 }}>{o.t} · {TYPES[o.t].name}</span>
                <span>{o.v}%</span>
              </div>
              <div data-track style={styles.barTrack}>
                <div data-bar className="barVal" style={{ width: o.v + "%", background: TYPES[o.t].color }} />
              </div>
            </div>
          ))}
        </div>

        {/* careers */}
        <div data-panel style={styles.panel}>
          <h3 style={styles.panelH}><span style={styles.ic} />Recommended careers</h3>
          {matches.map((m) => (
            <div key={m.code} style={styles.career}>
              <div data-mtag style={{ ...styles.mtag, background: TYPES[m.code[0]].color }}>
                {m.code}<small style={styles.mtagSmall}>RIASEC</small>
              </div>
              <div>
                <h4 style={styles.careerH}>{m.name}</h4>
                <p style={styles.careerP}>{m.field}</p>
              </div>
            </div>
          ))}
        </div>

        {/* hexagon */}
        <div data-panel style={{ ...styles.panel, gridColumn: "1 / -1" }}>
          <h3 style={styles.panelH}><span style={styles.ic} />Holland hexagon</h3>
          <div style={styles.hexFlex}>
            <Hexagon norm={norm} code={code} />
            <div style={styles.hexNote}>
              <p>
                The hexagon shows how the types relate. Adjacent types are similar; opposite types sit
                across from each other. Your profile's{" "}
                <b style={{ color: "#eef1f6" }}>consistency</b> is based on the position of your top two letters.
              </p>
              <div data-pill style={styles.consPill}>
                <b style={{ color: "#e8b04b" }}>Consistency: {cons.score}</b> — {cons.detail}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* code breakdown */}
      <section style={{ marginTop: 30 }}>
        <h3 style={{ ...S.h3, marginBottom: 16 }}>Your code explained</h3>
        <div style={S.typeGrid}>
          {code.split("").map((t, i) => {
            const T = TYPES[t];
            return (
              <div key={t} className="tcard" style={{ borderTop: `3px solid ${T.color}` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <div data-badge style={{ ...S.badge, background: T.color, marginBottom: 0 }}>{t}</div>
                  <div>
                    <h4 style={{ ...S.tcardH, marginBottom: 0 }}>{T.name}</h4>
                    <span style={{ fontSize: 12, color: C.muted }}>
                      {i === 0 ? "Primary type" : i === 1 ? "Secondary type" : "Tertiary type"} · {norm[t]}%
                    </span>
                  </div>
                </div>
                <p style={{ ...S.tcardP, marginBottom: 10 }}>{T.strengths}</p>
                <p style={S.tcardFields}><b style={{ color: "#c2cad6" }}>Typical environments:</b> {T.envs}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div style={styles.actions} className="no-print">
        <button className="btn primary" onClick={handlePrint}>🖨 Print / Save PDF</button>
        <button className="btn ghost" onClick={() => navigate("test")}>Retake the test</button>
      </div>
      <footer style={S.foot}>Results are based on the RIASEC scale and are advisory in nature.</footer>
    </main>
  );
}

const styles = {
  printHeader: { display: "none", textAlign: "center", paddingBottom: 14, marginBottom: 8, borderBottom: "2px solid #e8b04b" },
  codeRow: { display: "flex", gap: 14, justifyContent: "center", margin: "8px 0 6px", flexWrap: "wrap" },
  codeName: { color: C.muted, fontSize: 15 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20, marginTop: 34 },
  panel: { background: C.panel, border: `1px solid ${C.line}`, borderRadius: 16, padding: 26 },
  panelH: { fontFamily: "Georgia, serif", fontSize: 18, marginBottom: 18, display: "flex", alignItems: "center", gap: 10 },
  ic: { width: 8, height: 18, borderRadius: 3, background: C.accent, display: "inline-block" },
  barTop: { display: "flex", justifyContent: "space-between", fontSize: 13.5, marginBottom: 6 },
  barTrack: { height: 11, background: C.panel2, borderRadius: 99, overflow: "hidden" },
  career: { display: "flex", alignItems: "flex-start", gap: 14, padding: "14px 0", borderBottom: `1px solid ${C.line}` },
  mtag: {
    flex: "0 0 auto", width: 52, height: 52, borderRadius: 12, display: "grid", placeItems: "center",
    fontFamily: "Georgia, serif", fontWeight: 900, fontSize: 13, color: "#10131a", textAlign: "center", lineHeight: 1,
  },
  mtagSmall: { display: "block", fontSize: 9, fontWeight: 600, opacity: 0.7, marginTop: 2 },
  careerH: { fontSize: 15, marginBottom: 2 },
  careerP: { fontSize: 12.5, color: C.muted },
  hexFlex: { display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap", justifyContent: "center" },
  hexNote: { flex: 1, minWidth: 240, fontSize: 13.5, color: C.muted },
  consPill: { background: C.panel2, border: `1px solid ${C.line}`, padding: "10px 14px", borderRadius: 12, fontSize: 13, marginTop: 12 },
  actions: { display: "flex", gap: 14, justifyContent: "center", margin: "38px 0 10px", flexWrap: "wrap" },
};
