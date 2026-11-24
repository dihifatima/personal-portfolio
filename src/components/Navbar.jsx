import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo2.png";

const NAV_LINKS = [
  ["Accueil", "hero"],
  ["À propos", "about"],
  ["Projets", "projects"],
  ["Expérience", "experience"],
  ["Compétences", "skills"],
  ["Contact", "contact"],
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fatima-dihi-b3b759337/",
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    label: "GitHub",
    href: "https://github.com/dihifatima",
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const scrollTo = (id) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActive(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
      for (const [, id] of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 80) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <style>{`
        .nav-link-btn {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 8px;
          transition: color 0.2s;
          letter-spacing: 0.03em;
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, #7BBFDE, #FF6B9D);
          border-radius: 2px;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link-btn.active::after,
        .nav-link-btn:hover::after {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-social {
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(123,191,222,0.35);
          display: flex; align-items: center; justify-content: center;
          color: #7BBFDE;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s;
        }
        .nav-social:hover {
          border-color: #FF6B9D;
          color: #FF6B9D;
          transform: translateY(-2px);
          background: rgba(255,107,157,0.07);
        }
        .hamburger span {
          display: block;
          width: 22px; height: 2px;
          background: #DDEEFF;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 60px; left: 0; right: 0;
          background: rgba(6,15,32,0.98);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(123,191,222,0.15);
          padding: 20px 6% 28px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 49;
          transform: translateY(-110%);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
        }
        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-nav-btn {
          background: none; border: none;
          font-size: 0.95rem; font-weight: 500;
          color: rgba(221,238,255,0.65);
          text-align: left; cursor: pointer;
          padding: 10px 0;
          border-bottom: 1px solid rgba(123,191,222,0.08);
          transition: color 0.2s;
        }
        .mobile-nav-btn:hover, .mobile-nav-btn.active { color: #7BBFDE; }

        .scroll-progress {
          position: fixed;
          top: 60px; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #7BBFDE, #FF6B9D);
          z-index: 51;
          transition: width 0.1s linear;
        }
      `}</style>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{
          width: `${scrolled ? Math.min(
            ((window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
            100
          ) : 0}%`,
        }}
      />

      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center px-[5%] transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(6,15,32,0.95)"
            : "linear-gradient(180deg, rgba(10,10,20,0.75) 0%, rgba(10,10,20,0.0) 100%)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(123,191,222,0.1)" : "none",
        }}
      >
        <div className="relative w-full max-w-6xl mx-auto flex items-center gap-6">

          {/* Logo */}
          <img
            src={logo}
            alt="Dihi Fatima"
            className="w-auto object-contain cursor-pointer flex-shrink-0 hover:opacity-90 transition-opacity"
            style={{ height: "60px" }}
            onClick={() => scrollTo("hero")}
          />

          {/* Nav links — desktop */}
          <ul className="hidden md:flex flex-1 justify-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(([label, id]) => {
              const isActive = active === id && isHomePage;
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`nav-link-btn ${isActive ? "active" : ""}`}
                    style={{
                      color: isActive ? "#DDEEFF" : "rgba(221,238,255,0.6)",
                    }}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Social icons — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            {SOCIALS.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-social"
                title={label}
                dangerouslySetInnerHTML={{ __html: icon }}
              />
            ))}
          </div>

          {/* Hamburger — mobile */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""} md:hidden ml-auto flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map(([label, id]) => (
          <button
            key={id}
            className={`mobile-nav-btn ${active === id ? "active" : ""}`}
            onClick={() => scrollTo(id)}
          >
            {label}
          </button>
        ))}
        <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
          {SOCIALS.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
