// Supplementary content drawn from the thesis, used across the info pages.

export const METHODOLOGIES = [
  { method: "Holland RIASEC", basis: "Holland, 1959", kind: "6 types", accuracy: "High", complexity: "Medium", use: "\u2605 Primary", primary: true },
  { method: "MBTI", basis: "Myers-Briggs", kind: "16 types", accuracy: "Debated", complexity: "High", use: "Supplementary" },
  { method: "Big Five (OCEAN)", basis: "Costa & McCrae", kind: "5 factors", accuracy: "High", complexity: "High", use: "Supplementary" },
  { method: "Strong Interest Inv.", basis: "Strong, 1927", kind: "RIASEC+", accuracy: "Very high", complexity: "High", use: "Costly" },
  { method: "Self-Directed Search", basis: "Holland", kind: "RIASEC", accuracy: "High", complexity: "Low", use: "Alternative" },
];

export const ALGO_STAGES = [
  { n: "1", title: "Data collection", body: "User responses are gathered as a raw score array \u2014 one value (0\u20134) for each of the 24 items.", out: "raw_scores[24]" },
  { n: "2", title: "Scoring", body: "For each type t \u2208 {R,I,A,S,E,C}, the scores of all items belonging to that type are summed.", out: "score{R,I,A,S,E,C}" },
  { n: "3", title: "Normalization", body: "Each type's total is scaled to a 0\u2013100 range: norm = score / max_score \u00D7 100.", out: "norm{R\u2026C} \u2208 [0,100]" },
  { n: "4", title: "RIASEC code", body: "Types are sorted in descending order and the top three letters form the 3-letter Holland code (e.g. IRE).", out: "3-letter code" },
  { n: "5", title: "Consistency", body: "The hexagon distance between the first two letters is measured (adjacent = 1, alternate = 2, opposite = 3).", out: "consistency_score" },
  { n: "6", title: "O*NET matching", body: "Occupations whose codes best match the user's profile are retrieved and ranked by positional overlap.", out: "ranked occupations" },
];

export const ARCH_LAYERS = [
  { tier: "Tier 1", name: "Presentation Layer", tech: "React.js / Vue.js, HTML5/CSS3, Mobile (Flutter)", resp: "User interface, test forms, results visualization", color: "#3aa6e0" },
  { tier: "Tier 2", name: "Business Logic Layer", tech: "Node.js / Python (FastAPI), RIASEC algorithm, Scoring Engine", resp: "Calculations, test logic, recommendation generation", color: "#e8b04b" },
  { tier: "Tier 3", name: "Data Layer", tech: "PostgreSQL, Redis (Cache), File Storage", resp: "Data storage, indexing, caching", color: "#42c08a" },
];

export const PLATFORMS = [
  { name: "MyNextMove.org", note: "U.S. O*NET-based free platform with an Interest Profiler that maps interests to matching occupations." },
  { name: "Prospects.ac.uk", note: "UK career-planning platform whose Career Planner matches skills to 400+ job profiles and pathways." },
  { name: "mlsa.am", note: "Armenian Ministry methodological platform \u2014 strategic guidance and career-orientation methodology." },
  { name: "LinkedIn & Coursera", note: "Professional network and learning platforms that support skills growth and career exploration." },
];
