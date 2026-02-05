import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Events from "./pages/Events";
import Discord from "./pages/Discord"; 
import "./App.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/discord", label: "Discord" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function App() {
  const [visibleLinks, setVisibleLinks] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (visibleLinks < NAV_LINKS.length) {
      timer = setTimeout(() => setVisibleLinks(visibleLinks + 1), 100);
    }
    return () => clearTimeout(timer);
  }, [visibleLinks]);

  useEffect(() => {
    // Scroll to main section when route changes

    if (location.pathname != "/" && mainRef.current) {
      console.log(mainRef.current);
      window.scrollTo({
        top: mainRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <div className="hero-header">
        <h1>
          <span>Southeast Tech</span>
          <br />
          Game Dev Org
        </h1>
        <nav>
          <ul className="hero-nav">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.to} className={idx < visibleLinks ? "visible" : ""}>
                <Link to={link.to} tabIndex={idx < visibleLinks ? 0 : -1}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div id="hero-pad"></div>
      </div>
      <div ref={mainRef} className="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/discord" element={<Discord />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
