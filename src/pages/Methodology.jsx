import { S } from "../lib/theme.js";
import { METHODOLOGIES, ALGO_STAGES, PLATFORMS } from "../data/content.js";

export default function Methodology() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>Ինչու՞ RIASEC</span>
        <h1 style={S.h1}>Մեթոդաբանություն</h1>
        <p style={S.lead}>
          Ալգորիթմն ընտրվել է առաջատար հոգեմետրիկ մեթոդների և ոլորտի
          գործիքների ուսումնասիրությունից հետո։ RIASEC-ն ընտրվել է ճշգրտության,
          չափավոր բարդության և մասնագիտությունների տվյալների բազաների հետ ուղիղ
          կապի հավասարակշռության շնորհիվ։
        </p>
      </div>

      <section style={S.section}>
        <h3 style={S.h3}>Մեթոդների համեմատություն</h3>
        <div style={S.tableWrap}>
          <table style={S.table}>
            <thead>
              <tr>
                {[
                  "Մեթոդ",
                  "Հիմք",
                  "Տիպ",
                  "Ճշգրտություն",
                  "Բարդություն",
                  "Կիրառում",
                ].map((h) => (
                  <th key={h} style={S.th}>
                    {h}
                  </th>
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
                  <td
                    style={{
                      ...S.td,
                      color: m.primary ? "#e8b04b" : "#9aa3b2",
                      fontWeight: m.primary ? 700 : 400,
                    }}
                  >
                    {m.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={{ marginTop: 36 }}>
        <h3 style={S.h3}>Միավորների հաշվարկի ալգորիթմը</h3>
        <p style={S.body}>
          Յուրաքանչյուր ավարտված թեստ մշակվում է վեց փուլով՝ հում
          պատասխաններից մինչև դասակարգված համապատասխանություններ։
        </p>
        <div style={S.stageGrid}>
          {ALGO_STAGES.map((st) => (
            <div
              key={st.n}
              className="tcard"
              style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
            >
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
        <h3 style={S.h3}>Վերլուծված գործող հարթակներ</h3>
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
