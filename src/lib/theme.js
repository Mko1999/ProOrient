// Shared inline-style tokens and the one block of global CSS (hover, print, etc).

export const C = {
  bg: "#0f1117",
  panel: "#171a22",
  panel2: "#1d2129",
  ink: "#eef1f6",
  muted: "#9aa3b2",
  line: "rgba(255,255,255,.08)",
  accent: "#e8b04b",
  accent2: "#5b8def",
};

export const S = {
  wrap: { maxWidth: 1040, margin: "0 auto", padding: "0 22px" },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    fontSize: 12.5,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: C.accent,
    fontWeight: 600,
    marginBottom: 22,
  },
  h1: {
    fontFamily: "Georgia, serif",
    fontWeight: 900,
    lineHeight: 1.07,
    fontSize: "clamp(32px,6vw,58px)",
    letterSpacing: "-.5px",
    marginBottom: 22,
  },
  grad: {
    background: "linear-gradient(100deg,#e8b04b,#f3d99a 40%,#5b8def)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  },
  lead: {
    fontSize: "clamp(15px,2vw,18px)",
    color: C.muted,
    maxWidth: 620,
    marginBottom: 36,
  },
  h3: {
    fontFamily: "Georgia, serif",
    fontSize: 22,
    marginBottom: 18,
    fontWeight: 700,
  },
  body: {
    fontSize: "clamp(14px,1.6vw,16px)",
    color: "#aeb6c4",
    maxWidth: 760,
    marginBottom: 16,
    lineHeight: 1.7,
  },

  pageHead: { padding: "clamp(40px,7vw,68px) 0 10px" },
  section: { marginTop: 26 },

  typeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 14,
  },
  badge: {
    width: 42,
    height: 42,
    borderRadius: 11,
    display: "grid",
    placeItems: "center",
    fontFamily: "Georgia, serif",
    fontWeight: 900,
    fontSize: 20,
    color: "#10131a",
    marginBottom: 12,
  },
  tcardH: { fontSize: 15.5, marginBottom: 4, fontFamily: "Georgia, serif" },
  tcardP: { fontSize: 12.5, color: C.muted, lineHeight: 1.45 },
  tcardFields: {
    fontSize: 11.5,
    color: "#7e8696",
    lineHeight: 1.45,
    marginTop: 10,
  },
  traitList: { listStyle: "none", padding: 0, margin: "12px 0 0" },
  traitItem: {
    fontSize: 12,
    color: "#c2cad6",
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "3px 0",
  },
  traitDot: { width: 6, height: 6, borderRadius: 99, flex: "0 0 auto" },

  metaStrip: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: 1,
    background: C.line,
    border: `1px solid ${C.line}`,
    borderRadius: 16,
    overflow: "hidden",
  },
  metaCell: { background: C.panel, padding: 22 },
  metaB: {
    fontFamily: "Georgia, serif",
    fontSize: 30,
    display: "block",
    color: C.accent,
  },
  metaS: { fontSize: 13, color: C.muted },

  tableWrap: {
    overflowX: "auto",
    border: `1px solid ${C.line}`,
    borderRadius: 14,
    marginTop: 8,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 13,
    minWidth: 560,
  },
  th: {
    textAlign: "left",
    padding: "13px 16px",
    color: C.muted,
    fontWeight: 600,
    fontSize: 11.5,
    textTransform: "uppercase",
    letterSpacing: ".6px",
    background: C.panel2,
    borderBottom: `1px solid ${C.line}`,
    whiteSpace: "nowrap",
  },
  td: {
    padding: "13px 16px",
    borderBottom: "1px solid rgba(255,255,255,.06)",
    color: "#c2cad6",
    whiteSpace: "nowrap",
  },
  trPrimary: { background: "rgba(232,176,75,.07)" },

  archGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: 14,
    marginTop: 8,
  },
  archTier: {
    fontSize: 11,
    color: C.accent,
    fontWeight: 700,
    letterSpacing: ".8px",
    textTransform: "uppercase",
    marginBottom: 8,
  },
  stageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: 14,
    marginTop: 8,
  },
  stageNum: {
    flex: "0 0 auto",
    width: 36,
    height: 36,
    borderRadius: 10,
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(180deg,#f0bd5f,#e8b04b)",
    color: "#241803",
    fontWeight: 900,
    fontFamily: "Georgia, serif",
    fontSize: 17,
  },
  code: {
    fontFamily: "ui-monospace, Menlo, monospace",
    fontSize: 11.5,
    color: "#8fd0ff",
    background: "#11151c",
    border: `1px solid ${C.line}`,
    borderRadius: 6,
    padding: "3px 8px",
    display: "inline-block",
  },

  closeCta: {
    marginTop: 56,
    textAlign: "center",
    padding: "44px 24px",
    borderRadius: 18,
    background: "linear-gradient(180deg,#181c25,#13161d)",
    border: `1px solid ${C.line}`,
  },
  foot: {
    marginTop: 70,
    padding: "30px 0 50px",
    borderTop: `1px solid ${C.line}`,
    color: C.muted,
    fontSize: 13,
    textAlign: "center",
  },
};

export const GLOBAL_CSS = `
  .fade { animation: fade .5s ease both; }
  @keyframes fade { from { opacity:0; transform:translateY(12px);} to { opacity:1; transform:none;} }

  .btn { font-weight:600; font-size:15.5px; cursor:pointer; border:none; padding:15px 30px;
    border-radius:12px; transition:.2s; display:inline-flex; align-items:center; gap:10px; text-decoration:none; }
  .btn.primary { background:linear-gradient(180deg,#f0bd5f,#e8b04b); color:#241803;
    box-shadow:0 10px 30px -10px rgba(232,176,75,.6); }
  .btn.primary:hover { transform:translateY(-2px); }
  .btn.ghost { background:#1d2129; color:#eef1f6; border:1px solid rgba(255,255,255,.08); }
  .btn.ghost:hover { background:#242a34; transform:translateY(-2px); }

  .tcard { background:#171a22; border:1px solid rgba(255,255,255,.08); border-radius:14px;
    padding:18px; transition:.25s transform; }
  .tcard:hover { transform:translateY(-4px); }

  .navlink { color:#9aa3b2; text-decoration:none; font-size:14px; font-weight:500; padding:6px 2px;
    border-bottom:2px solid transparent; transition:.18s; cursor:pointer; background:none; border-top:none; border-left:none; border-right:none; font-family:inherit; }
  .navlink:hover { color:#eef1f6; }
  .navlink.active { color:#eef1f6; border-bottom-color:#e8b04b; }

  .scaleBtn { background:#1d2129; border:1.5px solid rgba(255,255,255,.08); color:#eef1f6;
    border-radius:12px; padding:16px 8px; cursor:pointer; font-size:13px; font-weight:500;
    text-align:center; line-height:1.25; transition:.18s; font-family:inherit; }
  .scaleBtn:hover { border-color:#e8b04b; transform:translateY(-3px); background:#222834; }
  .scaleBtn.sel { border-color:#e8b04b; background:rgba(232,176,75,.14); box-shadow:0 0 0 1px #e8b04b inset; }

  .codeLetter { width:clamp(64px,18vw,88px); height:clamp(64px,18vw,88px); border-radius:18px;
    display:grid; place-items:center; font-family:Georgia,serif; font-weight:900;
    font-size:clamp(34px,9vw,46px); color:#10131a; animation:pop .5s ease both; }
  @keyframes pop { from{opacity:0;transform:scale(.6);} to{opacity:1;transform:scale(1);} }

  .barVal { height:100%; border-radius:99px; transition:width 1s cubic-bezier(.2,.8,.2,1); }

  @media print {
    @page { margin: 12mm; }
    html, body { background:#fff !important; }
    .btn, header, .no-print { display:none !important; }
    #root > div { background:#fff !important; }
    .print-area { max-width:100% !important; padding:0 !important; }
    .print-area, .print-area * { color:#1a1d24 !important;
      -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
    .print-area [data-panel], .tcard { background:#fff !important; border:1px solid #cdd2db !important;
      box-shadow:none !important; break-inside:avoid; }
    .print-area [data-track] { background:#e8eaef !important; }
    .print-area [data-pill] { background:#f4f5f8 !important; border:1px solid #cdd2db !important; }
    .print-header { display:block !important; }
    .codeLetter, [data-badge], [data-bar], [data-mtag], [data-dot] {
      -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; }
    .codeLetter, [data-mtag], [data-badge] { color:#10131a !important; }
    .fade { animation:none !important; }
  }
`;
