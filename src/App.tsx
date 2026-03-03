import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Events from "./pages/Events";
import Discord from "./pages/Discord";
import "./App.css";
import devIcon from "/src/images/arrow.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/discord", label: "Discord" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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

  let heroStyles =
    "relative " +
    "w-screen " +
    "max-w-screen " +
    "flex " +
    "flex-col " +
    "items-center " +
    "justify-center " +
    "text-white " +
    "z-[1] " +
    "bg-[url('/GameDevBG.png')] " +
    "bg-cover " +
    "font-Audiowide "+
    "md:h-screen ";

  let ulStyles =
    "flex flex-col justify-center p-0 items-center " +
    "h-full md:h-auto " +
    "md:flex-row " +
    "md:justify-around " +
    "md:w-full " +
    "md:bg-transparent ";

  let navStyles =
    "text-grey-50 " +
    "text-[1.5em] " +
    "bg-black " +
    "list-none " +
    "fixed top-0 right-full " +
    "h-[100dvh] max-h-[100dvh] w-80 z-9 " +
    "flex flex-col justify-center items-center " +
    "md:bg-transparent " +
    "md:left-0 " + 
    "md:w-full " +
    "md:h-auto " +
    "md:static " +
    "md:gap-8 " +
    "md:list-none " +
    "md:p-0 md:m-0 md:z-0 ";

  let liStyle =
    "bg-[rgba(30,30,30,0.7)] " +
    "px-[1.5em] py-[0.5em] " +
    "rounded-[8px] " +
    "shadow-[0_2px_8px_#000a] " +
    "md:animate-[fade-in_600ms_ease-out_forwards] " +
    "md:transform md:transition-transform md:duration-300 md:hover:scale-[1.2] " +
    "md:hover:bg-[#222] md:hover:text-green-500 " +
    "w-50 mb-8 md:mb-0 " +
    "md:w-auto ";

  let mainStyle =
    "min-h-[60vh] " +
    "bg-[#181818] " +
    "text-white " +
    "pt-24 " +
    "px-8 " +
    "pb-8 " +
    "-mt-[5vh] " +
    "rounded-t-[24px] " +
    "shadow-[0_-4px_24px_#000a] " +
    "flex flex-col items-center " +
    "leading-loose " +
    "main ";

  return (
    <>
      <div className={heroStyles}>
        <h1 className="text-h1 [text-shadow:0_5px_2px_#000] leading-[1.1] -skew-x-12 mb-[0.8em]">
          <span className="text-[0.2em] mb-0">Southeast Tech</span>
          <br />
          Game Dev Org
        </h1>
        <nav className={navStyles + ((navOpen) ? "transition-transform duration-600 translate-x-full " : "transition-transform duration-600 translate-x-0 ")}>
          <img src={devIcon} className={"absolute top-0 left-full h-20 w-20 " + ((navOpen) ? "transition-transform duration-600 scale-x-[-1] " : "transition-transform duration-600 scale-x-[1] ")} onClick={()=>setNavOpen(!navOpen)}></img>
          <ul className={ulStyles}>
            {NAV_LINKS.map((link, label) => (
              <li key={link.to} className={liStyle}>
                <Link
                  className="font-medium"
                  to={link.to}
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div id="hero-pad" className="h-[20vh]"></div>
      </div>
      <div ref={mainRef} className={mainStyle}>
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
