import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";

const NAV_LINKS = [
  ["Accueil", "hero"],
  ["A propos", "about"],
  ["Projets", "projects"],
  ["Experience", "experience"],
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/fatima-dihi-b3b759337/",
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  },
  {
    href: "https://github.com/dihifatima",
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  },
  {
    href: "https://api.whatsapp.com/send/?phone=212609984665",
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
  },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
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
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center px-[5%] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6,15,32,0.92)"
          : "linear-gradient(180deg, rgba(10,10,20,0.70) 0%, rgba(10,10,20,0.0) 100%)",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="relative w-full max-w-6xl mx-auto flex items-center gap-6">

        {/* Logo */}
        <img
          src={logo}
          alt="Dihi Fatima"
          className="w-auto object-contain cursor-pointer flex-shrink-0"
          style={{ height: "60px" }}
          onClick={() => scrollTo("hero")}
        />

        {/* Nav links — centre */}
        <ul className="hidden md:flex flex-1 justify-center gap-2 list-none m-0 p-0">
          {NAV_LINKS.map(([label, id]) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="text-[13px] font-medium bg-transparent cursor-pointer tracking-wide transition-all duration-200 rounded-md"
                  style={{
                    color: isActive ? "var(--color-text)" : "var(--color-muted)",
                    border: isActive ? "1.5px solid var(--color-Rose-vi)" : "1.5px solid transparent",
                    padding: "5px 14px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--color-Rose-vi)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--color-muted)";
                  }}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Social icons — droite */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          {SOCIALS.map(({ href, icon }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                width: "34px",
                height: "34px",
                border: "1px solid rgba(123,191,222,0.35)",
                color: "#7BBFDE",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#FF6B9D";
                e.currentTarget.style.color = "#FF6B9D";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(123,191,222,0.35)";
                e.currentTarget.style.color = "#7BBFDE";
              }}
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ))}
        </div>

      </div>
    </nav>
  );
}