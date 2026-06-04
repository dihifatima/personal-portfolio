import { useEffect, useRef, useState } from "react";
import { EXPERIENCE } from "../data/Data.js";
import SectionTitle from "./SectionTitle";

// Tech icon map using devicons CDN
const TECH_ICONS = {
  "Spring Framework": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "spring framework": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Next.js/React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "TailwindCSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "MySQ": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "Git/GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Scrum": null,
  "Agile/Scrum": null,
  "Agile / Scrum": null,
  "JWT": null,
  "OAuth2 Google": null,
  "REST API": null,
  "API Google (OAuth2, chatbot)": null,
  "JPA/Hibernate": null,
  "Jakarta EE": null,
  "LLM + Prompt Engineering Web Scraping": null,
  "Web Scraping": null,
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Python/AI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
};

const COMPANY_LOGOS = {
  "Adminpro Advisors Solutions": "/assets/logoAdminpro.webp",
  "EMSI Marrakech": "/assets/logoEmsi.webp",
};

function TechBadge({ tech }) {
  const icon = TECH_ICONS[tech];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
      background: "rgba(123,191,222,0.08)",
      border: "1px solid rgba(123,191,222,0.2)",
      borderRadius: "6px",
      padding: "3px 9px",
      fontSize: "0.7rem",
      color: "#a0c4d8",
      fontWeight: "500",
      whiteSpace: "nowrap",
    }}>
      {icon && (
        <img
          src={icon}
          alt=""
          style={{ width: "13px", height: "13px", objectFit: "contain", filter: "brightness(1.1)" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      )}
      {tech}
    </span>
  );
}

function ExperienceCard({ item, index, isDetailed }) {
  const cardRef = useRef(null);
  const logo = item.logo || (item.entreprise ? COMPANY_LOGOS[Object.keys(COMPANY_LOGOS).find(k => item.entreprise.includes(k))] : null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("exp-card-in");
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="exp-card"
      style={{ transitionDelay: `${index * 0.13}s` }}
    >
      {/* Timeline dot */}
      <div className="tl-dot" />

      {/* Card body */}
      <div className="exp-card-inner">
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "12px" }}>
          <div style={{ flex: 1 }}>
            {/* Date badge */}
            <span style={{
              display: "inline-block",
              fontSize: "0.68rem",
              fontWeight: "700",
              color: "#FF6B9D",
              letterSpacing: "0.07em",
              background: "rgba(255,107,157,0.08)",
              border: "1px solid rgba(255,107,157,0.2)",
              borderRadius: "5px",
              padding: "2px 8px",
              marginBottom: "8px",
            }}>
              {item.date}
            </span>

            {/* Title */}
            <div style={{
              fontSize: "0.95rem",
              fontWeight: "700",
              color: "#DDEEFF",
              lineHeight: "1.35",
              marginBottom: "4px",
            }}>
              {item.title}
            </div>

            {/* Company */}
            {item.entreprise && (
              <div style={{
                fontSize: "0.78rem",
                color: "#7BBFDE",
                fontWeight: "500",
              }}>
                {item.entreprise}
              </div>
            )}
            {item.org && !item.entreprise && (
              <div style={{ fontSize: "0.78rem", color: "#7BBFDE", fontWeight: "500" }}>
                {item.org}
              </div>
            )}
          </div>

          {/* Company logo */}
          {logo && (
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(123,191,222,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden",
              padding: "4px",
            }}>
              <img
                src={logo}
                alt="company logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                onError={(e) => { e.target.parentElement.style.display = "none"; }}
              />
            </div>
          )}
        </div>

        {/* Detailed content */}
        {isDetailed && (
          <div style={{ marginBottom: "12px" }}>
            {item.sujet && (
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: "700", color: "#7BBFDE", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Contexte
                </span>
                <p style={{ fontSize: "0.78rem", color: "#a0b4cc", lineHeight: "1.7", margin: "4px 0 0" }}>
                  {item.sujet}
                </p>
              </div>
            )}

            {item.missions && item.missions.length > 0 && (
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: "700", color: "#7BBFDE", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Missions
                </span>
                <ul style={{ margin: "6px 0 0", paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  {item.missions.map((m, i) => (
                    <li key={i} style={{ fontSize: "0.76rem", color: "#a0b4cc", lineHeight: "1.65" }}>{m}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.objectif && !item.missions && (
              <div style={{ marginBottom: "8px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: "700", color: "#7BBFDE", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Objectif
                </span>
                <p style={{ fontSize: "0.78rem", color: "#a0b4cc", lineHeight: "1.7", margin: "4px 0 0" }}>
                  {item.objectif}
                </p>
              </div>
            )}

            {item.desc && !item.sujet && (
              <p style={{ fontSize: "0.78rem", color: "#a0b4cc", lineHeight: "1.7", margin: "0 0 8px" }}>
                {item.desc}
              </p>
            )}
          </div>
        )}

        {/* Tech badges */}
        {item.techs && item.techs.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
            {item.techs.map((t, i) => (
              <TechBadge key={i} tech={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const [isDetailed, setIsDetailed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("section-in");
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .exp-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          position: relative;
          padding-left: 28px;
          margin-bottom: 24px;
        }
        .exp-card.exp-card-in {
          opacity: 1;
          transform: translateY(0);
        }
        .tl-wrap {
          position: relative;
          padding-left: 4px;
        }
        .tl-wrap::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 0; bottom: 0;
          width: 1.5px;
          background: linear-gradient(180deg, #7BBFDE 0%, #FF6B9D 60%, transparent 100%);
        }
        .tl-dot {
          position: absolute;
          left: -3px;
          top: 14px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #7BBFDE;
          border: 2px solid rgba(123,191,222,0.25);
          z-index: 1;
          box-shadow: 0 0 8px rgba(123,191,222,0.35);
        }
        .exp-card-inner {
          background: rgba(123,191,222,0.04);
          border: 1px solid rgba(123,191,222,0.12);
          border-radius: 14px;
          padding: 18px 20px 16px;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .exp-card:hover .exp-card-inner {
          background: rgba(123,191,222,0.07);
          border-color: rgba(123,191,222,0.25);
        }
        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(123,191,222,0.07);
          border: 1px solid rgba(123,191,222,0.2);
          border-radius: 8px;
          padding: 7px 16px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #7BBFDE;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.04em;
        }
        .toggle-btn:hover {
          background: rgba(123,191,222,0.14);
          border-color: rgba(123,191,222,0.35);
        }
        .toggle-btn.active {
          background: rgba(123,191,222,0.14);
          border-color: #7BBFDE;
          color: #DDEEFF;
        }
        @media (max-width: 768px) {
          .exp-card-inner { padding: 14px 14px 12px; }
        }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        style={{ background: "#060F20", padding: "100px 0 96px" }}
      >
        <div style={{ maxWidth: "820px", margin: "0 auto", padding: "0 6%" }}>
          <SectionTitle label="EXPERIENCE" />

          {/* Toggle compact / détaillé */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "40px" }}>
            <button
              className={`toggle-btn${!isDetailed ? " active" : ""}`}
              onClick={() => setIsDetailed(false)}
            >
              <span>⊟</span> Compact
            </button>
            <button
              className={`toggle-btn${isDetailed ? " active" : ""}`}
              onClick={() => setIsDetailed(true)}
            >
              <span>⊞</span> Détaillé
            </button>
          </div>

          {/* Section header */}
          <div style={{
            fontSize: "0.88rem",
            fontWeight: "700",
            color: "#DDEEFF",
            padding: "0 0 10px",
            borderBottom: "2px solid #7BBFDE",
            display: "inline-block",
            marginBottom: "32px",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.04em",
          }}>
            // Expérience professionnelle
          </div>

          {/* Timeline */}
          <div className="tl-wrap">
            {EXPERIENCE.map((item, i) => (
              <ExperienceCard
                key={i}
                item={item}
                index={i}
                isDetailed={isDetailed}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}