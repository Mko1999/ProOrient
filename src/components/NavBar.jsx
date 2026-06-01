import { navigate } from "../lib/router.js";
import { C } from "../lib/theme.js";

const LINKS = [
  { id: "home", label: "Գլխավոր" },
  { id: "about", label: "RIASEC-ի մասին" },
  { id: "types", label: "Տիպերը" },
  { id: "methodology", label: "Մեթոդաբանություն" },
  { id: "architecture", label: "Համակարգ" },
];

export default function NavBar({ route }) {
  return (
    <header style={styles.bar}>
      <div style={styles.barIn}>
        <button style={styles.brand} onClick={() => navigate("home")}>
          <span style={styles.dot} />
          <span style={{ textAlign: "left" }}>
            <strong style={{ fontFamily: "Georgia, serif" }}>ProOrient</strong>
            <small style={styles.sub}>Մասնագիտական կողմնորոշման համակարգ</small>
          </span>
        </button>

        <nav style={styles.nav}>
          {LINKS.map((l) => (
            <button
              key={l.id}
              className={"navlink" + (route === l.id ? " active" : "")}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          className="btn primary"
          style={styles.cta}
          onClick={() => navigate("test")}
        >
          Անցնել թեստը
        </button>
      </div>
    </header>
  );
}

const styles = {
  bar: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
    background: "rgba(15,17,23,.78)",
    borderBottom: `1px solid ${C.line}`,
  },
  barIn: {
    maxWidth: 1040,
    margin: "0 auto",
    padding: "0 22px",
    minHeight: 64,
    display: "flex",
    alignItems: "center",
    gap: 18,
    flexWrap: "wrap",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontWeight: 700,
    color: C.ink,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px 0",
  },
  dot: {
    width: 30,
    height: 30,
    borderRadius: 9,
    flex: "0 0 auto",
    background:
      "conic-gradient(from 210deg,#e0653a,#3aa6e0,#c75ce0,#42c08a,#e8b04b,#7d8bf0,#e0653a)",
    boxShadow: "0 0 0 1px rgba(255,255,255,.12) inset",
  },
  sub: {
    display: "block",
    fontWeight: 500,
    color: C.muted,
    fontSize: 11.5,
    letterSpacing: ".4px",
  },
  nav: { display: "flex", gap: 18, flexWrap: "wrap", marginLeft: "auto" },
  cta: { padding: "10px 18px", fontSize: 14 },
};
