import { useEffect, useRef } from "react";
import myPhoto from "../assets/photo.jpg";
import SectionTitle from "./SectionTitle";

const INFO = [
  { label: "Nom",   value: "Dihi Fatima" },
  { label: "Email", value: "dihifatima@email.com" },
  { label: "Tel",   value: "+212 6XX XXX XXX" },
  { label: "Poste", value: "Ingenieure Dev Digital" },
];

const TECHS = [
  { name: "React",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Java",        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MySQL",       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB",     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git",         logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Python",      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

export default function About() {
  const leftRef   = useRef(null);
  const centerRef = useRef(null);
  const rightRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.15 }
    );
    [leftRef, centerRef, rightRef].forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .slide-left {
          opacity: 0; transform: translateX(-70px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .slide-up {
          opacity: 0; transform: translateY(50px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1);
          transition-delay: 0.1s;
        }
        .slide-right {
          opacity: 0; transform: translateX(70px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1);
          transition-delay: 0.2s;
        }
        .slide-left.in-view, .slide-up.in-view, .slide-right.in-view {
          opacity: 1; transform: translate(0);
        }

        @keyframes floatImg {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
        .photo-float { animation: floatImg 4s ease-in-out infinite; }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }
        .pulse-green { animation: pulse-green 2s ease-in-out infinite; }

        @keyframes fadeUpTag {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tech-tag-anim { animation: fadeUpTag 0.5s ease forwards; opacity: 0; }

        .info-card {
          background: #fff;
          border-radius: 10px;
          padding: 10px 14px;
          border: 1px solid #e8edf2;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .info-card:hover {
          box-shadow: 0 6px 20px rgba(123,191,222,0.2);
          border-color: #FF6B9D;
          transform: translateY(-2px);
        }

        .tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid #e8edf2;
          border-radius: 10px;
          padding: 7px 14px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #060F20;
          cursor: default;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .tech-tag:hover {
          border-color: #7BBFDE;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(123,191,222,0.15);
        }

        .cv-btn-solid {
          display: inline-flex; align-items: center; gap: 8px;
          background: #7BBFDE; color: #fff;
          font-size: 0.84rem; font-weight: 600;
          padding: 11px 28px; border-radius: 999px;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .cv-btn-solid:hover { background: #060F20; transform: translateY(-2px); }

        .cv-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #060F20;
          font-size: 0.84rem; font-weight: 600;
          padding: 10px 26px; border-radius: 999px;
          text-decoration: none; border: 1.5px solid #d1d5db; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .cv-btn-outline:hover { border-color: #FF6B9D; color: #060F20; transform: translateY(-2px); }

        @media (max-width: 900px) {
          .about-3col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section id="about" style={{ background: "#f4f6f9", padding: "100px 0 96px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 5%" }}>

          <SectionTitle label="A_PROPOS" />

          <div
            className="about-3col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 280px 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >

            {/* ── LEFT ── */}
            <div ref={leftRef} className="slide-left">
              <h2 style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                fontWeight: "800", color: "#060F20",
                lineHeight: "1.3", marginBottom: "14px",
                letterSpacing: "-0.02em",
              }}>
                Future Ingénieure en{" "}
                <span style={{ color: "#7BBFDE" }}>Développement Digital et SI</span>
              </h2>

              <p style={{ fontSize: "0.87rem", color: "#4b6180", lineHeight: "1.9", marginBottom: "28px" }}>
                Étudiante en 4ᵉ année à l'EMSI Marrakech, passionnée par le
                développement logiciel et les systèmes d'information. Sérieuse,
                motivée et dotée d'un bon esprit d'analyse. Je recherche un stage
                PFA de 2 mois (été) pour mettre en pratique mes compétences.
              </p>

             

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a href="/cvDihiFatima.pdf" download="CV_Fatima_Dihi.pdf" className="cv-btn-solid">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Mon CV
                </a>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="cv-btn-outline"
                >
                  Me Contacter
                </button>
              </div>
            </div>

            {/* ── CENTER ── */}
            <div ref={centerRef} className="slide-up" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
              <div className="photo-float" style={{
                width: "260px", height: "320px", borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(123,191,222,0.3)",
                border: "3px solid #fff",
              }}>
                <img
                  src={myPhoto}
                  alt="Fatima Dihi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
             
            </div>

            {/* ── RIGHT — Technologies ── */}
            <div ref={rightRef} className="slide-right">
              <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#060F20", marginBottom: "6px" }}>
                Technologies clés
              </h3>
              <div style={{ width: "32px", height: "3px", background: "#7BBFDE", borderRadius: "2px", marginBottom: "20px" }} />

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
                {TECHS.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="tech-tag tech-tag-anim"
                    style={{ animationDelay: `${0.3 + i * 0.07}s` }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: "18px", height: "18px", objectFit: "contain" }}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>

              <div style={{
                background: "#fff", borderRadius: "12px", padding: "18px 20px",
                border: "1px solid #e8edf2",
                boxShadow: "0 4px 16px rgba(123,191,222,0.1)",
              }}>
                <div style={{ fontSize: "0.75rem", color: "#7BBFDE", fontWeight: "700", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                  Disponibilité
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div className="pulse-green" style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.84rem", color: "#060F20", fontWeight: "600" }}>Stage PFA — Été 2026</span>
                </div>
                <div style={{ fontSize: "0.78rem", color: "#7BBFDE", marginTop: "6px" }}>
                  Durée : 2 mois 
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}