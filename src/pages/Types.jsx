import { navigate } from "../lib/router.js";
import { S } from "../lib/theme.js";
import { HEX_ORDER, TYPES } from "../data/types.js";
import TypeCard from "../components/TypeCard.jsx";

export default function Types() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>The model</span>
        <h1 style={S.h1}>The six personality types</h1>
        <p style={S.lead}>
          Each type describes a cluster of interests, strengths, and preferred work environments. Your
          result combines the three that fit you best.
        </p>
      </div>

      <section style={S.section}>
        <div style={S.typeGrid}>
          {HEX_ORDER.map((t) => (
            <TypeCard key={t} type={TYPES[t]} detailed />
          ))}
        </div>
      </section>

      <section style={{ marginTop: 30 }}>
        <h3 style={S.h3}>Typical work environments</h3>
        <div style={S.typeGrid}>
          {HEX_ORDER.map((t) => {
            const T = TYPES[t];
            return (
              <div key={t} className="tcard">
                <h4 style={{ ...S.tcardH, color: T.color }}>{T.key} · {T.name}</h4>
                <p style={S.tcardP}>{T.strengths}</p>
                <p style={S.tcardFields}><b style={{ color: "#c2cad6" }}>Environments:</b> {T.envs}</p>
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 22 }}>
          <button className="btn primary" onClick={() => navigate("test")}>Find your type →</button>
        </div>
      </section>
    </main>
  );
}
