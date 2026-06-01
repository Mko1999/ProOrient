import { S } from "../lib/theme.js";

export default function Footer() {
  return (
    <footer style={S.foot} className="no-print">
      <div style={S.wrap}>
        <p>
          Ավարտական աշխատանք՝{" "}
          <b style={{ color: "#eef1f6" }}>
            «Մասնագիտական կողմնորոշման էլեկտրոնային համակարգի մշակում»
          </b>
        </p>
        <p style={{ marginTop: 6 }}>Ծրագրային ճարտարագիտություն · Երևան 2026</p>
      </div>
    </footer>
  );
}
