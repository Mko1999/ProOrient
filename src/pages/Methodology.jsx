import { S } from "../lib/theme.js";
import { METHODOLOGIES, ALGO_STAGES, PLATFORMS } from "../data/content.js";

export default function Methodology() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>Why RIASEC</span>
        <h1 style={S.h1}>Methodology</h1>
        <p style={S.lead}>
          The algorithm was chosen after reviewing leading psychometric methods and industry tools.
          RIASEC was selected for its balance of accuracy, moderate complexity, and direct mapping to
          occupational databases.
        </p>
      </div>

      <section style={S.section}>
        <h3 style={S.h3}>Comparison of methods</h3>
        <div style={S.tableWrap}>
          <table style={S.table}>
            <thead>
              <tr>
                {["Method", "Basis", "Type", "Accuracy", "Complexity", "Use"].map((h) => (
                  <th key={h} style={S.th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {METHODOLOGIES.map((m) => (
                <tr key={m.method} style={m.primary ? S.trPrimary : undefined}>
                  <td style={{ ...S.td, fontWeight: 600 }}>{m.method}</td>
                  <td style={S.td}>{m.basis}</td>
                  <td style={S.td}>{m.kind}</td>
                  <td style={S.td}>{m.accuracy}</td>
                  <td style={S.td}>{m.complexity}</td>
                  <td style={{ ...S.td, color: m.primary ? "#e8b04b" : "#9aa3b2", fontWeight: m.primary ? 700 : 400 }}>
                    {m.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: 36 }}>
        <h3 style={S.h3}>The scoring algorithm</h3>
        <p style={S.body}>Each completed test is processed through six stages, from raw responses to ranked matches.</p>
        <div style={S.stageGrid}>
          {ALGO_STAGES.map((st) => (
            <div key={st.n} className="tcard" style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div style={S.stageNum}>{st.n}</div>
              <div>
                <h4 style={S.tcardH}>{st.title}</h4>
                <p style={{ ...S.tcardP, marginBottom: 8 }}>{st.body}</p>
                <code style={S.code}>{st.out}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 36 }}>
        <h3 style={S.h3}>Existing platforms analyzed</h3>
        <div style={S.typeGrid}>
          {PLATFORMS.map((p) => (
            <div key={p.name} className="tcard">
              <h4 style={{ ...S.tcardH, color: "#e8b04b" }}>{p.name}</h4>
              <p style={S.tcardP}>{p.note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
