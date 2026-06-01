import { navigate } from "../lib/router.js";
import { S } from "../lib/theme.js";
import { HEX_ORDER, TYPES } from "../data/types.js";
import TypeCard from "../components/TypeCard.jsx";

export default function Home() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>Final Project · 2026</span>
        <h1 style={S.h1}>
          Discover your <span style={S.grad}>professional path</span> scientifically
        </h1>
        <p style={S.lead}>
          This system is based on John Holland's RIASEC model — one of the most established theories
          in career psychology. Answer 24 quick questions and get your personality code with matching
          career recommendations.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button className="btn primary" onClick={() => navigate("test")}>Start the test →</button>
          <button className="btn ghost" onClick={() => navigate("about")}>What is RIASEC?</button>
        </div>

        <div style={S.metaStrip}>
          {[["24", "questions · 6 types × 4"], ["6", "personality types"], ["900+", "occupations (O*NET)"]].map(
            ([b, s], i) => (
              <div key={i} style={S.metaCell}>
                <b style={S.metaB}>{b}</b>
                <span style={S.metaS}>{s}</span>
              </div>
            )
          )}
        </div>
      </div>

      <section style={{ marginTop: 56 }}>
        <h3 style={S.h3}>The six personality types</h3>
        <div style={S.typeGrid}>
          {HEX_ORDER.map((t) => (
            <TypeCard key={t} type={TYPES[t]} />
          ))}
        </div>
        <div style={{ marginTop: 18 }}>
          <button className="btn ghost" onClick={() => navigate("types")}>See full type details →</button>
        </div>
      </section>

      <section style={S.closeCta}>
        <h3 style={{ ...S.h3, marginBottom: 10 }}>Ready to find your code?</h3>
        <p style={{ ...S.body, marginBottom: 22, marginLeft: "auto", marginRight: "auto" }}>
          The assessment takes about 3 minutes.
        </p>
        <button className="btn primary" onClick={() => navigate("test")}>Start the test →</button>
      </section>
    </main>
  );
}
