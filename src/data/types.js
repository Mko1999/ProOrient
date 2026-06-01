// The six RIASEC (Holland) personality types and their descriptive content.

export const TYPES = {
  R: {
    key: "R",
    name: "Realistic",
    color: "#e0653a",
    desc: "Practical, hands-on, mechanical, technical, nature-oriented.",
    fields: "Engineering, energy, IT support, agriculture",
    traits: ["Practical & hands-on", "Mechanically inclined", "Prefers physical work", "Values concrete results"],
    strengths:
      "Enjoys working with tools, machines, and physical materials, and solving tangible real-world problems rather than abstract ones.",
    envs: "Workshops, laboratories, field sites, manufacturing, technical maintenance.",
  },
  I: {
    key: "I",
    name: "Investigative",
    color: "#3aa6e0",
    desc: "Analytical, scientific, curious, intellectual.",
    fields: "Medicine, physics, programming, research",
    traits: ["Analytical thinker", "Curious & intellectual", "Enjoys research", "Driven by understanding"],
    strengths:
      "Thrives on observing, learning, investigating, and solving complex theoretical problems through logic and analysis.",
    envs: "Research institutions, universities, R&D labs, software and data teams.",
  },
  A: {
    key: "A",
    name: "Artistic",
    color: "#c75ce0",
    desc: "Creative, free, expressive, original.",
    fields: "Design, art, music, graphics",
    traits: ["Creative & original", "Expressive", "Values freedom", "Imaginative"],
    strengths:
      "Excels in unstructured settings where self-expression and original thinking are rewarded over fixed rules.",
    envs: "Studios, agencies, media, design teams, performing arts.",
  },
  S: {
    key: "S",
    name: "Social",
    color: "#42c08a",
    desc: "Cooperative, helpful, communicative.",
    fields: "Education, healthcare, counseling",
    traits: ["Empathetic", "Cooperative", "Strong communicator", "People-oriented"],
    strengths:
      "Finds meaning in helping, teaching, and supporting others, and builds strong interpersonal connections.",
    envs: "Schools, hospitals, NGOs, counseling centers, HR departments.",
  },
  E: {
    key: "E",
    name: "Enterprising",
    color: "#e8b04b",
    desc: "Leadership, persuasion, sales, organizing.",
    fields: "Marketing, law, management, business",
    traits: ["Persuasive leader", "Ambitious", "Confident", "Goal-driven"],
    strengths:
      "Enjoys leading, persuading, and taking initiative to reach ambitious goals, often in competitive settings.",
    envs: "Startups, sales teams, management, law firms, marketing.",
  },
  C: {
    key: "C",
    name: "Conventional",
    color: "#7d8bf0",
    desc: "Organized, structured, methodical, precise.",
    fields: "Accounting, administration, banking",
    traits: ["Organized & precise", "Detail-oriented", "Methodical", "Reliable"],
    strengths:
      "Performs best with clear procedures, accurate data, and structured tasks where precision matters.",
    envs: "Finance, accounting, administration, banking, compliance.",
  },
};

// Clockwise order around Holland's hexagon. Used for code building and distance.
export const HEX_ORDER = ["R", "I", "A", "S", "E", "C"];
