import { S } from "../lib/theme.js";

export default function Footer() {
  return (
    <footer style={S.foot} className="no-print">
      <div style={S.wrap}>
        <p>
          Final project:{" "}
          <b style={{ color: "#eef1f6" }}>
            "Development of an Electronic System for Professional Orientation"
          </b>
        </p>
        <p style={{ marginTop: 6 }}>Software Engineering · Yerevan 2026</p>
      </div>
    </footer>
  );
}
