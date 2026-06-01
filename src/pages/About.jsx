import { navigate } from "../lib/router.js";
import { S } from "../lib/theme.js";

export default function About() {
  return (
    <main style={S.wrap} className="fade">
      <div style={S.pageHead}>
        <span style={S.eyebrow}>The theory</span>
        <h1 style={S.h1}>What is RIASEC?</h1>
      </div>

      <section style={S.section}>
        <p style={S.body}>
          RIASEC is a model of career interests developed by psychologist John Holland in 1959. It is
          one of the most widely accepted theories in vocational psychology and serves as the foundation
          of the U.S. Department of Labor's O*NET system, which covers more than 900 occupations.
        </p>
        <p style={S.body}>
          Holland's central idea is that career choice is a form of self-expression: people seek out work
          environments that match their personality. Every person is described by a relatively stable
          structure of six interest types — Realistic, Investigative, Artistic, Social, Enterprising, and
          Conventional.
        </p>
        <p style={S.body}>
          Most people are a blend of several types. The strongest three form a personal profile, expressed
          as a three-letter code such as <b style={{ color: "#eef1f6" }}>IRE</b> or{" "}
          <b style={{ color: "#eef1f6" }}>SAE</b>. When a person works in an environment that fits their
          type, they tend to be more satisfied, motivated, and effective.
        </p>
      </section>

      <section style={S.section}>
        <h3 style={S.h3}>Why it matters</h3>
        <p style={S.body}>
          Traditional career guidance often relies on a single counselor's intuition and is hard to scale.
          A digital RIASEC assessment makes the process objective, repeatable, and instantly available to
          anyone — the core motivation behind this project.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 18 }}>
          <button className="btn primary" onClick={() => navigate("test")}>Take the test →</button>
          <button className="btn ghost" onClick={() => navigate("types")}>Explore the six types</button>
        </div>
      </section>
    </main>
  );
}
