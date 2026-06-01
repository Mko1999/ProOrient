import { S } from "../lib/theme.js";
import { ARCH_LAYERS } from "../data/content.js";

export default function Architecture() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>Համակարգի նախագծում</span>
        <h1 style={S.h1}>Ճարտարապետություն</h1>
        <p style={S.lead}>
          Համակարգը հետևում է եռաշերտ մոդելի, որը հստակ բաժանում է
          ներկայացումը, բիզնես-տրամաբանությունը և տվյալները՝ ընտրված
          արտադրողականության, մասշտաբավորման և անվտանգության նկատառումներով։
        </p>
      </div>

      <section style={S.section}>
        <div style={S.archGrid}>
          {ARCH_LAYERS.map((l) => (
            <div
              key={l.tier}
              className="tcard"
              style={{ borderLeft: `4px solid ${l.color}` }}
            >
              <div style={S.archTier}>{l.tier}</div>
              <h4 style={S.tcardH}>{l.name}</h4>
              <p style={{ ...S.tcardP, marginBottom: 8 }}>
                <b style={{ color: "#c2cad6" }}>Տեխնոլոգիա՝</b> {l.tech}
              </p>
              <p style={S.tcardP}>{l.resp}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 36 }}>
        <h3 style={S.h3}>Նախատիպի շրջանակ</h3>
        <p style={S.body}>
          Այս տեղակայված նախատիպն իրականացնում է ներկայացման շերտը և RIASEC
          միավորների հաշվարկի շարժիչը ամբողջությամբ բրաուզերում։ Ամբողջական
          համակարգն ընդլայնում է այս ինտերֆեյսը սերվերային բիզնես-տրամաբանության
          շերտով (Node.js / FastAPI), PostgreSQL տվյալների բազայով՝ Redis
          քեշավորմամբ, օգտատերերի հաշիվներով և սերվերում գեներացվող PDF
          հաշվետվություններով՝ հիմնված O*NET մասնագիտությունների ամբողջական
          տվյալների բազայի վրա։
        </p>
      </section>
    </main>
  );
}
