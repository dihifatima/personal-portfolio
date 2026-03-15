import { useEffect, useRef } from "react";
import { EXPERIENCE, EDUCATION } from "../data/Data.js";
import SectionTitle from "./SectionTitle";

function TimelineItem({ date, title, org, desc, techs, sujet, entreprise, poste, objectif, index }) {
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("tl-in");
      },
      { threshold: 0.15 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className="tl-item"
      style={{
        position: "relative",
        paddingLeft: "28px",
        marginBottom: "32px",
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      {/* Dot */}
      <div style={{
        position: "absolute",
        left: 0,
        top: "5px",
        width: "11px",
        height: "11px",
        borderRadius: "50%",
        background: "#7BBFDE",
        border: "2px solid rgba(123,191,222,0.3)",
        zIndex: 1,
      }} />

      {/* Date */}
      <div style={{
        fontSize: "0.72rem",
        fontWeight: "700",
        color: "#FF6B9D",
        letterSpacing: "0.06em",
        marginBottom: "5px",
      }}>
        {date}
      </div>

      {/* Title */}
      <div style={{
        fontSize: "0.92rem",
        fontWeight: "700",
        color: "#DDEEFF",
        marginBottom: "3px",
        lineHeight: "1.3",
      }}>
        {title}
      </div>

      {/* Org */}
      <div style={{
        fontSize: "0.78rem",
        color: "#7BBFDE",
        fontWeight: "500",
        marginBottom: "10px",
      }}>
        {org}
      </div>

      {/* Detail bullets (CV style) */}
      {(sujet || entreprise || poste || objectif || desc) && (
        <div style={{
          fontSize: "0.78rem",
          color: "#a0b4cc",
          lineHeight: "1.85",
          display: "flex",
          flexDirection: "column",
          gap: "5px",
        }}>
          {sujet && (
            <div>
              <span style={{ color: "#7BBFDE", fontWeight: "600" }}>Sujet : </span>
              {sujet}
            </div>
          )}
          {entreprise && (
            <div>
              <span style={{ color: "#7BBFDE", fontWeight: "600" }}>Entreprise : </span>
              {entreprise}
            </div>
          )}
          {poste && (
            <div>
              <span style={{ color: "#7BBFDE", fontWeight: "600" }}>Poste : </span>
              {poste}
            </div>
          )}
          {objectif && (
            <div>
              <span style={{ color: "#7BBFDE", fontWeight: "600" }}>Objectif : </span>
              {objectif}
            </div>
          )}
          {desc && !sujet && (
            <div>{desc}</div>
          )}
        </div>
      )}

      {/* Technologies */}
      {techs && techs.length > 0 && (
        <div style={{ marginTop: "10px" }}>
          <span style={{
            fontSize: "0.72rem",
            fontWeight: "700",
            color: "#7BBFDE",
          }}>
            Technologies et outils :{" "}
          </span>
          <span style={{ fontSize: "0.75rem", color: "#a0b4cc" }}>
            {techs.join(", ")}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("col-in");
        });
      },
      { threshold: 0.1 }
    );
    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .tl-line {
          position: relative;
          padding-left: 4px;
        }
        .tl-line::before {
          content: '';
          position: absolute;
          left: 4px;
          top: 0; bottom: 0;
          width: 1.5px;
          background: linear-gradient(180deg, #7BBFDE, #FF6B9D, transparent);
        }
        .tl-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .tl-item.tl-in {
          opacity: 1;
          transform: translateY(0);
        }
        .exp-col-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .exp-col-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1);
          transition-delay: 0.15s;
        }
        .exp-col-left.col-in,
        .exp-col-right.col-in {
          opacity: 1;
          transform: translateX(0);
        }
        .col-header {
          font-size: 0.9rem;
          font-weight: 700;
          color: #DDEEFF;
          padding-bottom: 10px;
          border-bottom: 2px solid #7BBFDE;
          display: inline-block;
          margin-bottom: 28px;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.04em;
        }
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section
        id="experience"
        style={{ background: "#060F20", padding: "100px 0 96px" }}
      >
        <div style={{ maxWidth: "1150px", margin: "0 auto", padding: "0 6%" }}>

          <SectionTitle label="EXPERIENCE" />

          <div
            className="exp-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              alignItems: "start",
            }}
          >
            {/* Expérience */}
            <div ref={leftRef} className="exp-col-left">
              <div className="col-header">// Expérience professionnelle</div>
              <div className="tl-line">
                {EXPERIENCE.map((item, i) => (
                  <TimelineItem key={i} index={i} {...item} />
                ))}
              </div>
            </div>

            {/* Formation */}
            <div ref={rightRef} className="exp-col-right">
              <div className="col-header">// Formation académique</div>
              <div className="tl-line">
                {EDUCATION.map((item, i) => (
                  <TimelineItem key={i} index={i} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}