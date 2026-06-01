import { navigate } from "../lib/router.js";
import { S } from "../lib/theme.js";
import { HEX_ORDER, TYPES } from "../data/types.js";
import TypeCard from "../components/TypeCard.jsx";

export default function Home() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>Ավարտական աշխատանք · 2026</span>
        <h1 style={S.h1}>
          Բացահայտեք ձեր <span style={S.grad}>մասնագիտական ուղին</span> գիտականորեն
        </h1>
        <p style={S.lead}>
          Այս համակարգը հիմնված է Ջոն Հոլանդի RIASEC մոդելի վրա՝ կարիերայի հոգեբանության
          ամենահաստատված տեսություններից մեկը։ Պատասխանեք 24 արագ հարցի և ստացեք ձեր
          անհատականության կոդը՝ համապատասխան մասնագիտական առաջարկություններով։
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button className="btn primary" onClick={() => navigate("test")}>Սկսել թեստը →</button>
          <button className="btn ghost" onClick={() => navigate("about")}>Ի՞նչ է RIASEC-ը</button>
        </div>

        <div style={S.metaStrip}>
          {[["24", "հարց · 6 տիպ × 4"], ["6", "անհատականության տիպ"], ["900+", "մասնագիտություն (O*NET)"]].map(
            ([b, s], i) => (
              <div key={i} style={S.metaCell}>
                <b style={S.metaB}>{b}</b>
                <span style={S.metaS}>{s}</span>
              </div>
            )
          )}
        </div>
      </div>

      <section style={{ marginTop: 56 }}>
        <h3 style={S.h3}>Վեց անհատականության տիպերը</h3>
        <div style={S.typeGrid}>
          {HEX_ORDER.map((t) => (
            <TypeCard key={t} type={TYPES[t]} />
          ))}
        </div>
        <div style={{ marginTop: 18 }}>
          <button className="btn ghost" onClick={() => navigate("types")}>Տեսնել տիպերի մանրամասները →</button>
        </div>
      </section>

      <section style={S.closeCta}>
        <h3 style={{ ...S.h3, marginBottom: 10 }}>Պատրա՞ստ եք գտնել ձեր կոդը։</h3>
        <p style={{ ...S.body, marginBottom: 22, marginLeft: "auto", marginRight: "auto" }}>
          Թեստը տևում է մոտ 3 րոպե։
        </p>
        <button className="btn primary" onClick={() => navigate("test")}>Սկսել թեստը →</button>
      </section>
    </main>
  );
}
