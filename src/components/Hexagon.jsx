import { TYPES, HEX_ORDER } from "../data/types.js";

// Holland hexagon: outer frame + the user's normalized profile polygon.
export default function Hexagon({ norm, code }) {
  const cx = 130,
    cy = 125,
    R = 82;

  const pts = HEX_ORDER.map((t, i) => {
    const ang = ((-90 + i * 60) * Math.PI) / 180;
    return { t, ang, x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang) };
  });

  const frame = pts.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const profile = pts
    .map((p) => {
      const f = norm[p.t] / 100;
      return `${(cx + R * f * Math.cos(p.ang)).toFixed(1)},${(cy + R * f * Math.sin(p.ang)).toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 260 250"
      style={{ width: "100%", maxWidth: 260, height: "auto" }}
    >
      <polygon
        points={frame}
        fill="none"
        stroke="rgba(255,255,255,.12)"
        strokeWidth="1.5"
      />
      {pts.map((p, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke="rgba(255,255,255,.06)"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={profile}
        fill="rgba(232,176,75,.20)"
        stroke="#e8b04b"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {pts.map((p) => {
        const lead = code.includes(p.t);
        const lx = cx + (R + 20) * Math.cos(p.ang);
        const ly = cy + (R + 20) * Math.sin(p.ang);
        return (
          <g key={p.t}>
            <circle
              cx={p.x}
              cy={p.y}
              r={lead ? 7 : 5}
              fill={TYPES[p.t].color}
              stroke="#10131a"
              strokeWidth="2"
            />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontWeight="900"
              fontSize={lead ? 16 : 13}
              fill={lead ? TYPES[p.t].color : "#9aa3b2"}
            >
              {p.t}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
