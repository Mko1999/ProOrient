import { useState } from "react";
import { useRoute, navigate } from "./lib/router.js";
import { GLOBAL_CSS, C } from "./lib/theme.js";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Types from "./pages/Types.jsx";
import Methodology from "./pages/Methodology.jsx";
import Architecture from "./pages/Architecture.jsx";
import Test from "./pages/Test.jsx";
import Results from "./pages/Results.jsx";

export default function App() {
  const route = useRoute();
  // The completed answer array lives here so Results can read it after the test.
  const [answers, setAnswers] = useState(null);

  const onComplete = (a) => {
    setAnswers(a);
    navigate("results");
  };

  const renderPage = () => {
    switch (route) {
      case "about":
        return <About />;
      case "types":
        return <Types />;
      case "methodology":
        return <Methodology />;
      case "architecture":
        return <Architecture />;
      case "test":
        return <Test onComplete={onComplete} />;
      case "results":
        return <Results answers={answers} />;
      case "home":
      default:
        return <Home />;
    }
  };

  // Hide the marketing chrome during the test/results flow for focus.
  const showChrome = !["test"].includes(route);

  return (
    <div style={{ minHeight: "100vh", background: pageBg, color: C.ink }}>
      <style>{GLOBAL_CSS}</style>
      <NavBar route={route} />
      {renderPage()}
      {showChrome && <Footer />}
    </div>
  );
}

const pageBg =
  "radial-gradient(1100px 600px at 85% -5%, rgba(91,141,239,.10), transparent 60%)," +
  "radial-gradient(900px 500px at 5% 105%, rgba(232,176,75,.08), transparent 55%)," +
  "#0f1117";
