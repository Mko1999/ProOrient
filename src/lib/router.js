// Minimal hash-based router so the app works on Vercel with no extra config.
// Routes look like #/about, #/types, etc.

import { useState, useEffect } from "react";

export function useRoute() {
  const get = () => window.location.hash.replace(/^#\/?/, "") || "home";
  const [route, setRoute] = useState(get());

  useEffect(() => {
    const onChange = () => {
      setRoute(get());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  return route;
}

export function navigate(to) {
  window.location.hash = "/" + to;
}
