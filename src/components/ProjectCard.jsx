import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({
  slug,
  image, cat, title, desc,
  techs = [], status = "done",
  link = "#",
  github = "#",
  fit = "cover",
  privateRepo = false,
  index = 0,
}) {
  const hasGithub = github && github !== "#";
  const hasLink   = link && link !== "#";
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  const MAX_TECHS    = 4;
  const visibleTechs = techs.slice(0, MAX_TECHS);
  const extraCount   = techs.length - MAX_TECHS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        display: "flex", flexDirection: "column",
        borderRadius: "18px", overflow: "hidden",
        background: "#fff",
        border: "1.5px solid #e8edf5",
        boxShadow: "0 4px 20px rgba(6,15,32,0.07)",
        cursor: "pointer",
      }}
    >
      {/* ── Image ── */}
      <div
        style={{ position: "relative", height: "210px", background: "#DDEEFF", overflow: "hidden" }}
        onClick={() => slug && navigate(`/projects/${slug}`)}
      >
        {!imgError ? (
          <motion.img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5 }}
            style={{
              width: "100%", height: "100%",
              objectFit: fit, objectPosition: "top center",
              padding: fit === "contain" ? "14px" : 0,
              boxSizing: "border-box",
            }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "3rem", fontWeight: 900, color: "rgba(123,191,222,0.3)" }}>
              {title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(6,15,32,0.15) 0%, transparent 40%)",
          pointerEvents: "none",
        }} />

        {/* Status badge */}
        <div style={{ position: "absolute", top: "12px", right: "12px" }}>
          <span style={{
            display: "flex", alignItems: "center", gap: "5px",
            fontSize: "0.65rem", fontWeight: 800,
            padding: "5px 11px", borderRadius: "8px",
            letterSpacing: "0.06em",
            boxShadow: "0 2px 8px rgba(6,15,32,0.15)",
            ...(status === "done"
              ? { background: "#ffffff", color: "#15803d", border: "1px solid #86efac" }
              : { background: "#ffffff", color: "#e0457b", border: "1px solid #FFB3CF" }
            ),
          }}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
              {status === "done" ? (
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3"/>
              ) : (
                <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>
              )}
            </svg>
            {status === "done" ? "TERMINÉ" : "EN COURS"}
          </span>
        </div>

        {/* Category badge */}
        <div style={{ position: "absolute", top: "12px", left: "12px" }}>
          <span style={{
            fontSize: "0.62rem", fontWeight: 700,
            padding: "4px 10px", borderRadius: "6px",
            background: "rgba(6,15,32,0.7)",
            color: "#7BBFDE",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(123,191,222,0.3)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}>
            {cat}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{
        display: "flex", flexDirection: "column", flex: 1,
        padding: "20px 20px 18px",
      }}>
        <h3 style={{
          fontSize: "0.98rem", fontWeight: 800,
          color: "#060F20",
          letterSpacing: "0.01em", lineHeight: "1.35",
          marginBottom: "10px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {title}
        </h3>

        <p
          title={desc}
          style={{
            fontSize: "0.81rem", color: "#3d516b",
            lineHeight: "1.7", marginBottom: "16px", flex: 1,
            display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}
        >
          {desc}
        </p>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "18px" }}>
          {visibleTechs.map((t) => (
            <span key={t} style={{
              fontSize: "0.65rem", fontWeight: 700,
              padding: "3px 10px", borderRadius: "6px",
              background: "#f0f7ff", color: "#060F20",
              border: "1px solid #DDEEFF",
              textTransform: "uppercase", letterSpacing: "0.05em",
            }}>
              {t}
            </span>
          ))}
          {extraCount > 0 && (
            <span style={{
              fontSize: "0.65rem", fontWeight: 700,
              padding: "3px 10px", borderRadius: "6px",
              background: "#fff0f5", color: "#FF6B9D",
              border: "1px solid #FFB3CF",
            }}>
              +{extraCount}
            </span>
          )}
        </div>

        {/* ── Buttons ── */}
        <div style={{ display: "grid", gridTemplateColumns: slug ? "1fr 1fr 1fr" : "1fr 1fr", gap: "8px" }}>

          {/* Voir les détails */}
          {slug && (
            <button
              onClick={() => navigate(`/projects/${slug}`)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                padding: "10px 0", borderRadius: "10px",
                fontSize: "0.72rem", fontWeight: 700,
                background: "linear-gradient(135deg, #7BBFDE, #5aa8cc)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "opacity 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.9"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              Détails
            </button>
          )}

          {/* GitHub */}
          <a
            href={hasGithub ? github : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasGithub}
            title={hasGithub ? "Voir le code sur GitHub" : privateRepo ? "Dépôt privé" : "Code non public"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
              padding: "10px 0", borderRadius: "10px",
              fontSize: "0.72rem", fontWeight: 700,
              background: "#111827", color: "#fff",
              textDecoration: "none", letterSpacing: "0.03em",
              border: "1.5px solid #1f2937",
              transition: "background 0.2s, transform 0.2s",
              opacity: hasGithub ? 1 : 0.4,
              cursor: hasGithub ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (!hasGithub) return;
              e.currentTarget.style.background = "#1f2937";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#111827";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={hasLink ? link : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasLink}
            title={hasLink ? "Voir la démo" : "Démo non disponible"}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
              padding: "10px 0", borderRadius: "10px",
              fontSize: "0.72rem", fontWeight: 700,
              background: "transparent", color: "#2f7fa6",
              textDecoration: "none", letterSpacing: "0.03em",
              border: "1.5px solid #7BBFDE",
              transition: "background 0.2s, color 0.2s, transform 0.2s",
              opacity: hasLink ? 1 : 0.4,
              cursor: hasLink ? "pointer" : "not-allowed",
            }}
            onMouseEnter={(e) => {
              if (!hasLink) return;
              e.currentTarget.style.background = "#7BBFDE";
              e.currentTarget.style.color = "#060F20";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#2f7fa6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Démo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
