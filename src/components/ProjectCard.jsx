import { useState } from "react";

export default function ProjectCard({
  image, cat, title, desc,
  techs = [], status = "done",
  link = "#",
  github = "#",
}) {
  const [imgError, setImgError] = useState(false);
  const [liked, setLiked]       = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const MAX_TECHS    = 4;
  const visibleTechs = techs.slice(0, MAX_TECHS);
  const extraCount   = techs.length - MAX_TECHS;

  const handleLike = (e) => {
    e.preventDefault();
    setLiked((p) => {
      const next = !p;
      setLikeCount((c) => next ? c + 1 : c - 1);
      return next;
    });
  };

  return (
    <div
      className="project-card"
      style={{
        display: "flex", flexDirection: "column",
        borderRadius: "16px", overflow: "hidden",
        background: "#fff",
        border: "1.5px solid #e8edf5",
        boxShadow: "0 4px 20px rgba(6,15,32,0.07)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 40px rgba(123,191,222,0.22)";
        e.currentTarget.style.borderColor = "#7BBFDE";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(6,15,32,0.07)";
        e.currentTarget.style.borderColor = "#e8edf5";
      }}
    >

      {/* ── Image ── */}
      <div style={{ position: "relative", height: "200px", background: "#DDEEFF", overflow: "hidden" }}>
        {!imgError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top",
              transition: "transform 0.5s ease",
            }}
            className="project-img"
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontSize: "3rem", fontWeight: "900",
              color: "rgba(123,191,222,0.3)", letterSpacing: "-0.04em",
            }}>
              {title.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(255,255,255,0.85) 0%, transparent 50%)",
        }} />

        {/* Like button */}
        <div style={{ position: "absolute", bottom: "10px", left: "12px" }}>
          <button
            onClick={handleLike}
            style={{
              display: "flex", alignItems: "center", gap: "5px",
              padding: "4px 10px", borderRadius: "8px",
              fontSize: "0.7rem", fontWeight: "700",
              background: liked ? "#FFB3CF" : "rgba(255,255,255,0.9)",
              color: liked ? "#FF6B9D" : "#7BBFDE",
              border: liked ? "1px solid #FF6B9D" : "1px solid #DDEEFF",
              cursor: "pointer", backdropFilter: "blur(4px)",
              transition: "all 0.2s",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill={liked ? "#FF6B9D" : "none"} stroke={liked ? "#FF6B9D" : "#7BBFDE"} strokeWidth="2.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            {likeCount}
          </button>
        </div>

        {/* Status badge */}
        <div style={{ position: "absolute", top: "12px", right: "12px" }}>
          <span style={{
            display: "flex", alignItems: "center", gap: "5px",
            fontSize: "0.65rem", fontWeight: "800",
            padding: "4px 10px", borderRadius: "8px",
            letterSpacing: "0.06em",
            ...(status === "done"
              ? { background: "rgba(34,197,94,0.12)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.3)" }
              : { background: "rgba(255,107,157,0.12)", color: "#FF6B9D", border: "1px solid rgba(255,107,157,0.3)" }
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
      </div>

      {/* ── Body ── */}
      <div style={{
        display: "flex", flexDirection: "column", flex: 1,
        padding: "18px 18px 16px",
      }}>

        <span style={{
          fontSize: "0.62rem", fontWeight: "700",
          color: "#7BBFDE", textTransform: "uppercase",
          letterSpacing: "0.1em", marginBottom: "6px",
        }}>
          {cat}
        </span>

        <h3 style={{
          fontSize: "0.92rem", fontWeight: "900",
          color: "#060F20", textTransform: "uppercase",
          letterSpacing: "0.04em", lineHeight: "1.3",
          marginBottom: "8px",
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: "0.78rem", color: "#4b6180",
          lineHeight: "1.8", marginBottom: "14px", flex: 1,
        }}>
          {desc}
        </p>

        {/* Tech badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
          {visibleTechs.map((t) => (
            <span key={t} style={{
              fontSize: "0.65rem", fontWeight: "700",
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
              fontSize: "0.65rem", fontWeight: "700",
              padding: "3px 10px", borderRadius: "6px",
              background: "#fff0f5", color: "#FF6B9D",
              border: "1px solid #FFB3CF",
            }}>
              +{extraCount}
            </span>
          )}
        </div>

        {/* ── Buttons ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>

          {/* GitHub */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
              padding: "10px 0", borderRadius: "12px",
              fontSize: "0.75rem", fontWeight: "700",
              background: "#111827", color: "#fff",
              textDecoration: "none", letterSpacing: "0.03em",
              border: "1.5px solid #1f2937",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1f2937";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#111827";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* GitHub icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
              padding: "10px 0", borderRadius: "12px",
              fontSize: "0.75rem", fontWeight: "700",
              background: "transparent", color: "#7BBFDE",
              textDecoration: "none", letterSpacing: "0.03em",
              border: "1.5px solid #7BBFDE",
              transition: "background 0.2s, color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#7BBFDE";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#7BBFDE";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>

        </div>
      </div>

      <style>{`
        .project-card:hover .project-img { transform: scale(1.05); }
      `}</style>
    </div>
  );
}