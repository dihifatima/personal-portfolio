import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { CERTIFICATIONS } from "../data/Data";

export default function Certifications() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  if (!CERTIFICATIONS || CERTIFICATIONS.length === 0) {
    return (
      <section id="certifications" style={{ background: "#f4f6f9", padding: "80px 0" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 5%" }}>
          <SectionTitle label="CERTIFICATIONS" />
          <div style={{
            textAlign: "center", padding: "60px 20px",
            background: "#fff", borderRadius: "16px",
            border: "1.5px dashed #DDEEFF",
          }}>
            <p style={{ fontSize: "0.95rem", fontWeight: 600, color: "#060F20", marginBottom: "8px" }}>
              Certifications en cours de préparation
            </p>
            <p style={{ fontSize: "0.82rem", color: "#7BBFDE" }}>
              Cette section sera mise à jour avec mes certifications dès leur obtention.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const total = CERTIFICATIONS.length;

  const go = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + total) % total);
  };

  const cert = CERTIFICATIONS[current];

  /* initiales pour l'avatar fallback */
  const initials = cert.issuer
    ? cert.issuer.trim().slice(0, 2).toUpperCase()
    : "CE";

  return (
    <>
      <style>{`
        .cert-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #e8edf5;
          background: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          color: #060F20;
          transition: border-color 0.2s, background 0.2s, color 0.2s, box-shadow 0.2s;
          flex-shrink: 0;
        }
        .cert-arrow:hover {
          border-color: #7BBFDE;
          background: #7BBFDE;
          color: #fff;
          box-shadow: 0 4px 16px rgba(123,191,222,0.3);
        }
        .cert-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          border: 1.5px solid #7BBFDE;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .cert-dot.active {
          background: #7BBFDE;
          transform: scale(1.25);
        }
        .cert-skill-tag {
          font-size: 0.63rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 6px;
          background: #f0f7ff;
          color: #060F20;
          border: 1px solid #DDEEFF;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>

      <section id="certifications" style={{ background: "#f4f6f9", padding: "100px 0 96px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 5%" }}>
          <SectionTitle label="CERTIFICATIONS" />

          {/* ── Carousel wrapper ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>

            {/* Arrow left */}
            <button className="cert-arrow" onClick={() => go(-1)} aria-label="Précédent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Card */}
            <div style={{ flex: 1, overflow: "hidden", position: "relative", minHeight: "320px" }}>
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    padding: "32px 32px 28px",
                    border: "1.5px solid #e8edf5",
                    boxShadow: "0 8px 32px rgba(6,15,32,0.07)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* ── Header : logo + titre + issuer ── */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>

                    {/* Avatar / Logo */}
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        style={{
                          width: "52px", height: "52px",
                          objectFit: "contain",
                          borderRadius: "12px",
                          border: "1.5px solid #e8edf5",
                          flexShrink: 0,
                          background: "#fff",
                        }}
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    ) : (
                      <div style={{
                        width: "52px", height: "52px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #7BBFDE, #060F20)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                        fontSize: "1rem", fontWeight: 800, color: "#fff",
                      }}>
                        {initials}
                      </div>
                    )}

                    {/* Title + issuer */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: "1rem", fontWeight: 800,
                        color: "#060F20", lineHeight: 1.3,
                        marginBottom: "6px",
                      }}>
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7BBFDE" strokeWidth="2">
                          <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                        </svg>
                        <span style={{ fontSize: "0.78rem", color: "#7BBFDE", fontWeight: 600 }}>
                          {cert.issuer?.trim()}
                        </span>
                      </div>

                      {/* Date badge */}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF6B9D" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span style={{ fontSize: "0.73rem", color: "#FF6B9D", fontWeight: 700 }}>
                          {cert.date?.trim()}
                        </span>
                      </div>
                    </div>

                    {/* Counter */}
                    <span style={{
                      fontSize: "0.7rem", fontWeight: 700,
                      color: "#7BBFDE",
                      background: "rgba(123,191,222,0.1)",
                      border: "1px solid rgba(123,191,222,0.2)",
                      borderRadius: "8px",
                      padding: "4px 10px",
                      flexShrink: 0,
                    }}>
                      {current + 1} / {total}
                    </span>
                  </div>

                  {/* ── Description with quote marks ── */}
                  {cert.description && (
                    <div style={{ position: "relative", padding: "0 10px" }}>
                      {/* Quote open */}
                      <span style={{
                        position: "absolute", top: "-8px", left: "-4px",
                        fontSize: "2.5rem", lineHeight: 1,
                        color: "rgba(123,191,222,0.25)", fontFamily: "Georgia, serif",
                        userSelect: "none",
                      }}>"</span>

                      <p style={{
                        fontSize: "0.83rem", color: "#4b6180",
                        lineHeight: 1.8, margin: "0 16px",
                      }}>
                        {cert.description}
                      </p>

                      {/* Quote close */}
                      <span style={{
                        position: "absolute", bottom: "-20px", right: "0",
                        fontSize: "2.5rem", lineHeight: 1,
                        color: "rgba(123,191,222,0.25)", fontFamily: "Georgia, serif",
                        userSelect: "none",
                      }}>"</span>
                    </div>
                  )}

                  {/* ── Skills ── */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "8px" }}>
                      {cert.skills.map((s) => (
                        <span key={s} className="cert-skill-tag">{s}</span>
                      ))}
                    </div>
                  )}

                  {/* ── Footer : credential link ── */}
                  {cert.credentialUrl && (
                    <div style={{ marginTop: "auto", paddingTop: "4px" }}>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "6px",
                          fontSize: "0.78rem", fontWeight: 700, color: "#7BBFDE",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#FF6B9D"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#7BBFDE"}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                          <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Voir le certificat
                      </a>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrow right */}
            <button className="cert-arrow" onClick={() => go(1)} aria-label="Suivant">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* ── Dot indicators ── */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" }}>
            {CERTIFICATIONS.map((_, i) => (
              <button
                key={i}
                className={`cert-dot${i === current ? " active" : ""}`}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Certification ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
