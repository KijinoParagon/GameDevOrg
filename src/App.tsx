import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './App.css';

function Home() {
  return <div>Welcome to the Game Dev Org homepage!</div>;
}

function Projects() {
  return <div>Here are some cool game projects.</div>;
}

function Team() {
  return <div>Meet our awesome team!</div>;
}

function Contact() {
  return <div>Contact us at gamedev@example.com.</div>;
}

function Discord() {
  return <div>Discord...</div>
}

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/team', label: 'Team' },
  { to: '/contact', label: 'Contact' },
  { to: '/discord', label: 'Discord' },
];

function App() {
  const [visibleLinks, setVisibleLinks] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (visibleLinks < NAV_LINKS.length) {
      timer = setTimeout(() => setVisibleLinks(visibleLinks + 1), 100);
    }
    return () => clearTimeout(timer);
  }, [visibleLinks]);

  const handleNavClick = (e: React.MouseEvent, to: string) => {
    e.preventDefault();
    window.scrollTo({
      top: mainRef.current?.offsetTop || 0,
      behavior: 'smooth',
    });
    window.history.pushState({}, '', to);
  };

  return (
    <>
      <div className="hero-header">
        <h1><span>Southeast Tech</span><br></br>Game Dev Org</h1>
        <nav>
          <ul className="hero-nav">
            {NAV_LINKS.map((link, idx) => (
              <li key={link.to} className={idx < visibleLinks ? 'visible' : ''}>
                <Link
                  to={link.to}
                  onClick={e => handleNavClick(e, link.to)}
                  tabIndex={idx < visibleLinks ? 0 : -1}
                >
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path='/discord' element={<Discord />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
