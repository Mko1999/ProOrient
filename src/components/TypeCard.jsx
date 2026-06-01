import { S } from "../lib/theme.js";

// Shows one RIASEC type. `detailed` adds the trait list + fields.
export default function TypeCard({ type, detailed = false }) {
  return (
    <div className="tcard" style={{ borderTop: `3px solid ${type.color}` }}>
      <div data-badge style={{ ...S.badge, background: type.color }}>{type.key}</div>
      <h4 style={S.tcardH}>{type.name}</h4>
      <p style={S.tcardP}>{type.desc}</p>

      {detailed && (
        <>
          <ul style={S.traitList}>
            {type.traits.map((tr, i) => (
              <li key={i} style={S.traitItem}>
                <span data-dot style={{ ...S.traitDot, background: type.color }} />
                {tr}
              </li>
            ))}
          </ul>
          <p style={S.tcardFields}>
            <b style={{ color: "#c2cad6" }}>Fields:</b> {type.fields}
          </p>
        </>
      )}
    </div>
  );
}
