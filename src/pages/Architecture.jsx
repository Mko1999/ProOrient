import { S } from "../lib/theme.js";
import { ARCH_LAYERS } from "../data/content.js";

export default function Architecture() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>System design</span>
        <h1 style={S.h1}>Architecture</h1>
        <p style={S.lead}>
          The system follows a three-tier model that cleanly separates presentation, business logic, and
          data — chosen for performance, scalability, and security.
        </p>
      </div>

      <section style={S.section}>
        <div style={S.archGrid}>
          {ARCH_LAYERS.map((l) => (
            <div key={l.tier} className="tcard" style={{ borderLeft: `4px solid ${l.color}` }}>
              <div style={S.archTier}>{l.tier}</div>
              <h4 style={S.tcardH}>{l.name}</h4>
              <p style={{ ...S.tcardP, marginBottom: 8 }}>
                <b style={{ color: "#c2cad6" }}>Tech:</b> {l.tech}
              </p>
              <p style={S.tcardP}>{l.resp}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 36 }}>
        <h3 style={S.h3}>Prototype scope</h3>
        <p style={S.body}>
          This deployed prototype implements the presentation layer and the RIASEC scoring engine entirely
          in the browser. The full system extends this front end with a server-side business-logic layer
          (Node.js / FastAPI), a PostgreSQL database with Redis caching, user accounts, and server-generated
          PDF reports backed by the complete O*NET occupation dataset.
        </p>
      </section>
    </main>
  );
}
