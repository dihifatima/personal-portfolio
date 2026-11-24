import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // eslint-disable-line no-unused-vars
import { PROJECTS } from "../data/Data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── COULEURS & TOKENS ────────────────────────────────────────────────────────
const C = {
  bg:        "#FFFFFF",
  bg2:       "#F4F7FB",
  bg3:       "#EEF3FA",
  navy:      "#0B1D35",
  navyLight: "#1E3A5F",
  cyan:      "#7BBFDE",
  cyanDark:  "#2f7fa6",
  rose:      "#FF6B9D",
  rosePale:  "#FFB3CF",
  text:      "#1A2E45",
  muted:     "#4B6180",
  mutedLt:   "#7A93AD",
  border:    "#DDE6F0",
  borderLt:  "#EEF3FA",
};

// ─── TECH ICONS ───────────────────────────────────────────────────────────────
const TECH_ICONS = {
  "Spring Boot":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring Framework":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "React":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "React Native":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Expo":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  "Java":            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Python":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "TypeScript":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "MySQL":           "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "PostgreSQL":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Docker":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Jenkins":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "Git":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "Tailwind CSS":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "TailwindCSS":     "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "Pandas":          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "Scikit-learn":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  "Firebase":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Firebase Cloud Messaging": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "ASP.NET":         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  "SQL Server":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  "Android Java":    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg",
  "JPA/Hibernate":   "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "RabbitMQ":        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  "JWT":             "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "Git/GitHub":      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

// ─── ARCHITECTURE ICONS ────────────────────────────────────────────────────────
const ARCH_ICONS = {
  frontend:     <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="1.8" width="22" height="22"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9l3 3-3 3M13 15h3"/></svg>,
  backend:      <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="1.8" width="22" height="22"><path d="M5 12h14M12 5v14"/><circle cx="12" cy="12" r="9"/></svg>,
  database:     <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="1.8" width="22" height="22"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6"/><path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3"/></svg>,
  auth:         <svg viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="1.8" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  integrations: <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="1.8" width="22" height="22"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
};

// ─── SECTION LABEL MAP ─────────────────────────────────────────────────────────
const ARCH_LABELS = {
  frontend:     "Frontend",
  backend:      "Backend",
  database:     "Base de données",
  auth:         "Sécurité & Authentification",
  integrations: "Intégrations & APIs",
};

// ─── COMPOSANTS ATOMIQUES ─────────────────────────────────────────────────────

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, height: "3px",
      background: "transparent", zIndex: 999, pointerEvents: "none",
    }}>
      <div style={{
        height: "100%", width: `${progress}%`,
        background: `linear-gradient(90deg, ${C.cyan}, ${C.rose})`,
        transition: "width 0.1s linear",
        borderRadius: "0 2px 2px 0",
      }} />
    </div>
  );
}

function SectionWrapper({ id, children, bg = C.bg, style = {} }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: bg, ...style }}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ number, label, title, subtitle }) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
        {number && (
          <span style={{
            fontSize: "0.65rem", fontWeight: 800, color: C.cyan,
            background: `rgba(123,191,222,0.1)`,
            border: `1px solid rgba(123,191,222,0.25)`,
            borderRadius: "6px", padding: "3px 10px",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>{number}</span>
        )}
        <span style={{
          fontSize: "0.65rem", fontWeight: 800, color: C.mutedLt,
          letterSpacing: "0.12em", textTransform: "uppercase",
        }}>{label}</span>
        <div style={{ flex: 1, height: "1px", background: C.borderLt }} />
      </div>
      <h2 style={{
        fontSize: "clamp(1.35rem, 2.5vw, 1.9rem)",
        fontWeight: 800, color: C.navy,
        lineHeight: 1.2, margin: "0 0 12px",
        letterSpacing: "-0.02em",
      }}>{title}</h2>
      {subtitle && (
        <p style={{ fontSize: "0.9rem", color: C.muted, lineHeight: 1.75, margin: 0, maxWidth: "680px" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function TechBadge({ name, large }) {
  const icon = TECH_ICONS[name];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: large ? "10px" : "7px",
      background: "#F0F7FF",
      border: `1.5px solid ${C.border}`,
      borderRadius: large ? "10px" : "8px",
      padding: large ? "8px 16px" : "5px 12px",
      fontSize: large ? "0.82rem" : "0.72rem",
      color: C.navyLight, fontWeight: 600,
      transition: "border-color 0.2s, background 0.2s",
    }}>
      {icon && (
        <img src={icon} alt="" style={{ width: large ? "18px" : "14px", height: large ? "18px" : "14px", objectFit: "contain" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      )}
      {name}
    </span>
  );
}

function InfoPill({ label, value, icon }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "6px",
      background: C.bg, border: `1px solid ${C.border}`,
      borderRadius: "12px", padding: "16px 20px",
      minWidth: "140px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        {icon}
        <span style={{ fontSize: "0.65rem", fontWeight: 700, color: C.mutedLt, textTransform: "uppercase", letterSpacing: "0.09em" }}>{label}</span>
      </div>
      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: C.navy, lineHeight: 1.3 }}>{value}</span>
    </div>
  );
}

function FeatureCard({ feature, index }) {
  const isLarge = index === 0;
  if (isLarge) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: C.bg,
          border: `1.5px solid ${C.border}`,
          borderRadius: "16px", padding: "32px",
          borderLeft: `4px solid ${C.cyan}`,
          boxShadow: "0 4px 24px rgba(11,29,53,0.06)",
          marginBottom: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
            background: `rgba(123,191,222,0.12)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="2" width="20" height="20">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: "0.65rem", fontWeight: 800, color: C.cyan, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Fonctionnalité clé
            </span>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: C.navy, margin: "6px 0 12px", letterSpacing: "-0.01em" }}>
              {feature.titre}
            </h3>
            <p style={{ fontSize: "0.88rem", color: C.muted, lineHeight: 1.8, margin: 0 }}>
              {feature.desc}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      style={{
        background: C.bg,
        border: `1.5px solid ${C.border}`,
        borderRadius: "14px", padding: "24px",
        boxShadow: "0 2px 12px rgba(11,29,53,0.04)",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(123,191,222,0.15)"; e.currentTarget.style.borderColor = C.cyan; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 12px rgba(11,29,53,0.04)"; e.currentTarget.style.borderColor = C.border; }}
    >
      <div style={{
        width: "36px", height: "36px", borderRadius: "10px",
        background: index % 2 === 0 ? `rgba(123,191,222,0.1)` : `rgba(255,107,157,0.08)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "14px",
      }}>
        <svg viewBox="0 0 24 24" fill="none" stroke={index % 2 === 0 ? C.cyan : C.rose} strokeWidth="2" width="17" height="17">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <h3 style={{ fontSize: "0.92rem", fontWeight: 800, color: C.navy, margin: "0 0 10px", lineHeight: 1.3 }}>
        {feature.titre}
      </h3>
      <p style={{ fontSize: "0.82rem", color: C.muted, lineHeight: 1.75, margin: 0 }}>
        {feature.desc}
      </p>
    </motion.div>
  );
}

function ArchitectureBlock({ architecture }) {
  const entries = Object.entries(architecture).filter(([, v]) => v && v !== "N/A");
  const layers = {
    frontend:     { color: "#2563EB", bg: "#EFF6FF", label: "CLIENT" },
    backend:      { color: "#0891B2", bg: "#ECFEFF", label: "SERVEUR" },
    database:     { color: "#7C3AED", bg: "#F5F3FF", label: "DONNÉES" },
    auth:         { color: "#DC2626", bg: "#FEF2F2", label: "SÉCURITÉ" },
    integrations: { color: "#059669", bg: "#ECFDF5", label: "APIS" },
  };

  return (
    <div>
      {/* Visual diagram */}
      <div style={{
        background: C.bg2, border: `1px solid ${C.border}`,
        borderRadius: "16px", padding: "32px", marginBottom: "24px",
        overflowX: "auto",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "0", flexWrap: "wrap", minWidth: "400px",
        }}>
          {entries.map(([key], i) => {
            const style = layers[key] || { color: C.cyanDark, bg: "#F0F7FF", label: key.toUpperCase() };
            const isLast = i === entries.length - 1;
            return (
              <div key={key} style={{ display: "flex", alignItems: "center" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  style={{
                    background: style.bg,
                    border: `2px solid ${style.color}`,
                    borderRadius: "12px",
                    padding: "14px 20px",
                    textAlign: "center",
                    minWidth: "100px",
                    maxWidth: "150px",
                  }}
                >
                  <div style={{
                    fontSize: "0.58rem", fontWeight: 800, color: style.color,
                    letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px",
                  }}>{style.label}</div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: C.navy, lineHeight: 1.3 }}>
                    {ARCH_LABELS[key] || key}
                  </div>
                </motion.div>
                {!isLast && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.1, duration: 0.3 }}
                    style={{
                      display: "flex", alignItems: "center", padding: "0 8px", flexShrink: 0,
                    }}
                  >
                    <div style={{ width: "24px", height: "2px", background: C.border }} />
                    <svg viewBox="0 0 8 8" width="8" height="8" style={{ flexShrink: 0 }}>
                      <path d="M0 4h6M4 1l3 3-3 3" stroke={C.mutedLt} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {entries.map(([key, value], i) => {
          const icon = ARCH_ICONS[key];
          const style = layers[key] || { color: C.cyanDark, bg: "#F0F7FF" };
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                display: "flex", alignItems: "flex-start", gap: "16px",
                background: C.bg, border: `1.5px solid ${C.border}`,
                borderRadius: "12px", padding: "16px 20px",
              }}
            >
              <div style={{
                width: "40px", height: "40px", borderRadius: "10px", flexShrink: 0,
                background: style.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {icon || (
                  <svg viewBox="0 0 24 24" fill="none" stroke={style.color} strokeWidth="2" width="18" height="18">
                    <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
                  </svg>
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 800, color: style.color, textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: "4px" }}>
                  {ARCH_LABELS[key] || key}
                </div>
                <div style={{ fontSize: "0.84rem", color: C.muted, lineHeight: 1.65 }}>
                  {value}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ChallengeCard({ challenge, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        background: C.bg,
        border: `1.5px solid ${C.border}`,
        borderRadius: "14px", overflow: "hidden",
        boxShadow: "0 2px 12px rgba(11,29,53,0.04)",
      }}
    >
      <div style={{
        background: `rgba(255,107,157,0.06)`,
        borderBottom: `1px solid rgba(255,107,157,0.15)`,
        padding: "16px 20px",
        display: "flex", alignItems: "center", gap: "10px",
      }}>
        <div style={{
          width: "28px", height: "28px", borderRadius: "8px",
          background: `rgba(255,107,157,0.12)`,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <svg viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="2" width="14" height="14">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <span style={{ fontSize: "0.72rem", fontWeight: 800, color: C.rose, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Défi #{index + 1}
        </span>
      </div>
      <div style={{ padding: "20px" }}>
        <p style={{ fontSize: "0.85rem", color: C.muted, lineHeight: 1.8, margin: 0 }}>
          {challenge}
        </p>
      </div>
    </motion.div>
  );
}

function ContributionItem({ text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      style={{
        display: "flex", alignItems: "flex-start", gap: "14px",
        padding: "16px 0",
        borderBottom: `1px solid ${C.borderLt}`,
      }}
    >
      <div style={{
        width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0,
        background: `linear-gradient(135deg, ${C.cyan}, ${C.cyanDark})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "0.65rem", fontWeight: 800, color: "#fff",
        marginTop: "1px",
      }}>{index + 1}</div>
      <p style={{ fontSize: "0.87rem", color: C.text, lineHeight: 1.75, margin: 0, flex: 1 }}>
        {text}
      </p>
    </motion.div>
  );
}

function GalleryLightbox({ images, initialIndex, onClose }) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(11,29,53,0.96)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "90vw", maxHeight: "85vh" }}
      >
        <img
          src={images[current]} alt={`Image ${current + 1}`}
          style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: "14px", display: "block" }}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
              style={{
                position: "absolute", left: "-56px", top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%", width: "44px", height: "44px",
                color: "#fff", cursor: "pointer", fontSize: "1.3rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}
            >‹</button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % images.length)}
              style={{
                position: "absolute", right: "-56px", top: "50%", transform: "translateY(-50%)",
                background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50%", width: "44px", height: "44px",
                color: "#fff", cursor: "pointer", fontSize: "1.3rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(8px)",
              }}
            >›</button>
          </>
        )}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "-14px", right: "-14px",
            background: C.rose, border: "none", borderRadius: "50%",
            width: "32px", height: "32px", color: "#fff",
            cursor: "pointer", fontSize: "0.9rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700,
          }}
        >✕</button>
        <div style={{ textAlign: "center", marginTop: "14px", color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
          {current + 1} / {images.length} · Appuyez sur Échap pour fermer
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── PAGE PRINCIPALE ───────────────────────────────────────────────────────────
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate  = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const heroRef = useRef(null);

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project      = PROJECTS[projectIndex];
  const nextProject  = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];
  const prevProject  = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;

  // Scroll to top on slug change
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) {
    return (
      <div style={{ background: C.bg, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Navbar />
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "24px", display: "flex", justifyContent: "center" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
          <h1 style={{ color: C.navy, marginBottom: "12px" }}>Projet introuvable</h1>
          <button
            onClick={() => navigate("/#projects")}
            style={{
              background: C.cyan, color: "#fff", border: "none",
              borderRadius: "999px", padding: "12px 28px",
              cursor: "pointer", fontWeight: 700, fontSize: "0.88rem",
            }}
          >Retour aux projets</button>
        </div>
      </div>
    );
  }

  const hasGithub = project.github && project.github !== "#";
  const hasLink   = project.link && project.link !== "#";
  const galleryImages = (project.gallery || []).filter(Boolean).filter((g) => typeof g === "string");

  const isWip = project.status === "wip";

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div style={{ background: C.bg, minHeight: "100vh", overflowX: "hidden" }}>
      <ReadingProgressBar />
      <Navbar />

      <style>{`
        * { box-sizing: border-box; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-grid .hero-visual { order: -1; }
          .overview-grid { grid-template-columns: 1fr !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .challenges-grid { grid-template-columns: 1fr !important; }
          .contrib-cols { grid-template-columns: 1fr !important; }
          .nav-cards { grid-template-columns: 1fr !important; }
          .arch-diagram { flex-direction: column !important; align-items: flex-start !important; }
        }
        @media (max-width: 480px) {
          .hero-info-pills { flex-direction: column !important; }
          .hero-actions { flex-direction: column !important; }
        }
        .back-btn:hover { background: rgba(123,191,222,0.12) !important; color: ${C.cyanDark} !important; }
        .primary-btn:hover { background: ${C.cyanDark} !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(123,191,222,0.35) !important; }
        .ghost-btn:hover { border-color: ${C.navy} !important; color: ${C.navy} !important; transform: translateY(-2px); }
        .nav-card:hover { border-color: ${C.cyan} !important; box-shadow: 0 8px 32px rgba(123,191,222,0.15) !important; }
        .tech-badge:hover { border-color: ${C.cyan} !important; background: rgba(123,191,222,0.08) !important; }
        .gallery-item:hover .gallery-overlay { opacity: 1 !important; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO SECTION — SPLIT LAYOUT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} style={{
        background: `linear-gradient(135deg, ${C.navy} 0%, #1E3A5F 50%, #0D2444 100%)`,
        paddingTop: "96px", paddingBottom: "0",
        position: "relative", overflow: "hidden",
      }}>
        {/* Background pattern */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123,191,222,0.06) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }} />
        {/* Accent glow */}
        <div style={{
          position: "absolute", top: "-120px", right: "-80px",
          width: "480px", height: "480px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,191,222,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%", position: "relative" }}>

          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="back-btn"
            onClick={() => navigate("/#projects")}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "10px", padding: "9px 18px",
              fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.75)",
              cursor: "pointer", marginBottom: "36px",
              transition: "all 0.2s",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Retour aux projets
          </motion.button>

          {/* Hero content grid */}
          <div className="hero-grid" style={{
            display: "grid",
            gridTemplateColumns: project.image ? "1fr 480px" : "1fr",
            gap: "60px", alignItems: "center",
            paddingBottom: "64px",
          }}>
            {/* Left col — text */}
            <div>
              {/* Meta badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}
              >
                <span style={{
                  fontSize: "0.65rem", fontWeight: 800, color: C.rose,
                  background: "rgba(255,107,157,0.15)", border: "1px solid rgba(255,107,157,0.3)",
                  borderRadius: "7px", padding: "4px 12px",
                  textTransform: "uppercase", letterSpacing: "0.09em",
                }}>{project.type || project.cat}</span>
                {project.periode && (
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 600, color: "rgba(255,255,255,0.55)",
                    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "7px", padding: "4px 12px",
                  }}>{project.periode}</span>
                )}
                {isWip && (
                  <span style={{
                    fontSize: "0.65rem", fontWeight: 800, color: "#FFC107",
                    background: "rgba(255,193,7,0.12)", border: "1px solid rgba(255,193,7,0.3)",
                    borderRadius: "7px", padding: "4px 12px",
                    textTransform: "uppercase", letterSpacing: "0.09em",
                  }}>En cours</span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                style={{
                  fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
                  fontWeight: 900, color: "#FFFFFF",
                  lineHeight: 1.15, margin: "0 0 16px",
                  letterSpacing: "-0.025em",
                }}
              >
                {project.title}
              </motion.h1>

              {/* Entreprise */}
              {project.entreprise && (
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  style={{
                    fontSize: "0.9rem", color: C.cyan,
                    marginBottom: "20px", fontWeight: 600,
                    display: "flex", alignItems: "center", gap: "7px",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  {project.entreprise}
                </motion.p>
              )}

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                style={{
                  fontSize: "0.95rem", color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.8, margin: "0 0 28px", maxWidth: "560px",
                }}
              >
                {project.description_longue || project.desc}
              </motion.p>

              {/* Tech badges */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}
              >
                {project.techs.slice(0, 6).map((t) => (
                  <span key={t} style={{
                    display: "inline-flex", alignItems: "center", gap: "7px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "8px", padding: "5px 12px",
                    fontSize: "0.75rem", color: "rgba(255,255,255,0.75)", fontWeight: 600,
                  }}>
                    {TECH_ICONS[t] && (
                      <img src={TECH_ICONS[t]} alt="" style={{ width: "14px", height: "14px", objectFit: "contain", filter: "brightness(1.5)" }}
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    )}
                    {t}
                  </span>
                ))}
                {project.techs.length > 6 && (
                  <span style={{
                    background: "rgba(255,107,157,0.12)", border: "1px solid rgba(255,107,157,0.25)",
                    borderRadius: "8px", padding: "5px 12px",
                    fontSize: "0.75rem", color: C.rosePale, fontWeight: 700,
                  }}>+{project.techs.length - 6}</span>
                )}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="hero-actions"
                style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}
              >
                {hasLink && (
                  <a
                    href={project.link} target="_blank" rel="noopener noreferrer"
                    className="primary-btn"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "9px",
                      background: C.cyan, color: "#fff",
                      padding: "12px 26px", borderRadius: "10px",
                      fontSize: "0.84rem", fontWeight: 700, textDecoration: "none",
                      transition: "all 0.2s", border: "none",
                      boxShadow: "0 4px 16px rgba(123,191,222,0.2)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Voir le projet
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={project.github} target="_blank" rel="noopener noreferrer"
                    className="ghost-btn"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "9px",
                      background: "transparent", color: "rgba(255,255,255,0.8)",
                      border: "1.5px solid rgba(255,255,255,0.25)",
                      padding: "11px 24px", borderRadius: "10px",
                      fontSize: "0.84rem", fontWeight: 700, textDecoration: "none",
                      transition: "all 0.2s",
                    }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
              </motion.div>
            </div>

            {/* Right col — visual */}
            {project.image && (
              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: "relative" }}
              >
                {/* Decorative frame */}
                <div style={{
                  position: "absolute", inset: "-8px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(123,191,222,0.15), rgba(255,107,157,0.08))",
                  zIndex: 0,
                }} />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    position: "relative", zIndex: 1,
                    borderRadius: "18px", overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <img
                    src={project.image} alt={project.title}
                    style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "top center", maxHeight: "340px" }}
                    loading="lazy"
                  />
                  {/* Bottom overlay */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
                    background: "linear-gradient(to top, rgba(11,29,53,0.8), transparent)",
                    pointerEvents: "none",
                  }} />
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Wave separator */}
        <div style={{ lineHeight: 0, marginTop: "-1px" }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "56px" }}>
            <path d="M0 32L48 26.7C96 21 192 11 288 10.7C384 11 480 21 576 26.7C672 32 768 32 864 29.3C960 27 1056 21 1152 18.7C1248 16 1344 16 1392 16L1440 16V56H1392C1344 56 1248 56 1152 56C1056 56 960 56 864 56C768 56 672 56 576 56C480 56 384 56 288 56C192 56 96 56 48 56H0V32Z" fill={C.bg}/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 01 — PROJECT OVERVIEW
      ═══════════════════════════════════════════════════════════════════════ */}
      <SectionWrapper bg={C.bg} style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
          <SectionHeader
            number="01"
            label="Vue d'ensemble"
            title="Aperçu du projet"
            subtitle="Contexte, objectifs et environnement de réalisation du projet."
          />
          <div className="overview-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
            <InfoPill
              label="Type de projet"
              value={project.type || project.cat}
              icon={<svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="2" width="14" height="14"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>}
            />
            {project.periode && (
              <InfoPill
                label="Période"
                value={project.periode}
                icon={<svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="2" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>}
              />
            )}
            {project.entreprise && (
              <InfoPill
                label="Contexte"
                value={project.entreprise}
                icon={<svg viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="2" width="14" height="14"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
              />
            )}
            <InfoPill
              label="Statut"
              value={project.status === "wip" ? "En cours de développement" : "Projet terminé"}
              icon={<svg viewBox="0 0 24 24" fill="none" stroke={project.status === "wip" ? "#F59E0B" : "#22C55E"} strokeWidth="2" width="14" height="14"><path d={project.status === "wip" ? "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" : "M22 11.08V12a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3"}/></svg>}
            />
          </div>

          {/* Description longue */}
          {project.description_longue && (
            <div style={{
              marginTop: "32px",
              background: `linear-gradient(135deg, rgba(123,191,222,0.05), rgba(255,107,157,0.03))`,
              border: `1.5px solid ${C.border}`,
              borderRadius: "16px", padding: "28px 32px",
              borderLeft: `4px solid ${C.cyan}`,
            }}>
              <p style={{ fontSize: "0.9rem", color: C.muted, lineHeight: 1.85, margin: 0 }}>
                {project.description_longue}
              </p>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 02 — CONTEXT & PROBLEM
      ═══════════════════════════════════════════════════════════════════════ */}
      {(project.problematique || project.solution) && (
        <SectionWrapper bg={C.bg2} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="02"
              label="Contexte & Problématique"
              title="Contexte et solution adoptée"
            />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="features-grid">
              {project.problematique && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: C.bg,
                    border: `1.5px solid rgba(255,107,157,0.2)`,
                    borderRadius: "16px", padding: "28px",
                    borderTop: `4px solid ${C.rose}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: "rgba(255,107,157,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={C.rose} strokeWidth="2" width="16" height="16">
                        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: C.rose, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Problématique
                    </span>
                  </div>
                  <p style={{ fontSize: "0.87rem", color: C.muted, lineHeight: 1.85, margin: 0 }}>
                    {project.problematique}
                  </p>
                </motion.div>
              )}
              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  style={{
                    background: C.bg,
                    border: `1.5px solid rgba(123,191,222,0.2)`,
                    borderRadius: "16px", padding: "28px",
                    borderTop: `4px solid ${C.cyan}`,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: "rgba(123,191,222,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="2" width="16" height="16">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: C.cyanDark, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Solution développée
                    </span>
                  </div>
                  <p style={{ fontSize: "0.87rem", color: C.muted, lineHeight: 1.85, margin: 0 }}>
                    {project.solution}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 03 — KEY FEATURES
      ═══════════════════════════════════════════════════════════════════════ */}
      {project.fonctionnalites && project.fonctionnalites.length > 0 && (
        <SectionWrapper bg={C.bg} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="03"
              label="Fonctionnalités"
              title="Fonctionnalités principales"
              subtitle="Les capacités clés développées et implémentées dans ce projet."
            />

            {/* Feature hero — première fonctionnalité mise en avant */}
            <FeatureCard feature={project.fonctionnalites[0]} index={0} />

            {/* Grille des autres fonctionnalités */}
            {project.fonctionnalites.length > 1 && (
              <div
                className="features-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: `repeat(${Math.min(project.fonctionnalites.length - 1, 3)}, 1fr)`,
                  gap: "16px",
                }}
              >
                {project.fonctionnalites.slice(1).map((f, i) => (
                  <FeatureCard key={i} feature={f} index={i + 1} />
                ))}
              </div>
            )}
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 04 — TECHNICAL ARCHITECTURE
      ═══════════════════════════════════════════════════════════════════════ */}
      {project.architecture && Object.values(project.architecture).some(v => v && v !== "N/A") && (
        <SectionWrapper bg={C.bg2} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="04"
              label="Architecture technique"
              title="Architecture du système"
              subtitle="Vue d'ensemble de la stack technique et des composants qui forment ce projet."
            />
            <ArchitectureBlock architecture={project.architecture} />
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 05 — TECHNOLOGY STACK
      ═══════════════════════════════════════════════════════════════════════ */}
      {project.techs && project.techs.length > 0 && (
        <SectionWrapper bg={C.bg} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="05"
              label="Stack technologique"
              title="Technologies utilisées"
              subtitle="L'ensemble des outils, frameworks et librairies qui composent ce projet."
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {project.techs.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="tech-badge"
                >
                  <TechBadge name={t} large />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 06 — MY CONTRIBUTIONS
      ═══════════════════════════════════════════════════════════════════════ */}
      {project.mes_contributions && project.mes_contributions.length > 0 && (
        <SectionWrapper bg={C.bg2} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="06"
              label="Contributions personnelles"
              title="Mon rôle dans ce projet"
              subtitle="Les responsabilités que j'ai prises en charge et les contributions que j'ai apportées à ce projet."
            />
            <div
              className="contrib-cols"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0 48px",
              }}
            >
              <div>
                {project.mes_contributions
                  .filter((_, i) => i % 2 === 0)
                  .map((c, i) => (
                    <ContributionItem key={i} text={c} index={i * 2} />
                  ))}
              </div>
              <div>
                {project.mes_contributions
                  .filter((_, i) => i % 2 !== 0)
                  .map((c, i) => (
                    <ContributionItem key={i} text={c} index={i * 2 + 1} />
                  ))}
              </div>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 07 — TECHNICAL CHALLENGES
      ═══════════════════════════════════════════════════════════════════════ */}
      {project.difficultes && project.difficultes.length > 0 && (
        <SectionWrapper bg={C.bg} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="07"
              label="Défis techniques"
              title="Challenges rencontrés"
              subtitle="Les difficultés techniques identifiées et les solutions adoptées pour les résoudre."
            />
            <div
              className="challenges-grid"
              style={{
                display: "grid",
                gridTemplateColumns: project.difficultes.length === 1 ? "1fr" : "repeat(auto-fill, minmax(400px, 1fr))",
                gap: "16px",
              }}
            >
              {project.difficultes.map((d, i) => (
                <ChallengeCard key={i} challenge={d} index={i} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 08 — PROJECT GALLERY
      ═══════════════════════════════════════════════════════════════════════ */}
      {galleryImages.length > 0 && (
        <SectionWrapper bg={C.bg2} style={{ padding: "72px 0" }}>
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%" }}>
            <SectionHeader
              number="08"
              label="Galerie"
              title="Galerie du projet"
              subtitle="Captures d'écran et visuels du projet. Cliquez pour agrandir."
            />
            <div style={{
              display: "grid",
              gridTemplateColumns: galleryImages.length === 1
                ? "1fr"
                : "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "16px",
            }}>
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className="gallery-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setLightboxIndex(i)}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  style={{
                    borderRadius: "14px", overflow: "hidden",
                    cursor: "zoom-in",
                    border: `1.5px solid ${C.border}`,
                    boxShadow: "0 4px 16px rgba(11,29,53,0.06)",
                    position: "relative",
                  }}
                >
                  <img
                    src={img}
                    alt={`${project.title} — capture ${i + 1}`}
                    style={{
                      width: "100%",
                      height: galleryImages.length === 1 ? "auto" : "220px",
                      objectFit: "cover", objectPosition: "top center", display: "block",
                    }}
                    loading="lazy"
                  />
                  <div className="gallery-overlay" style={{
                    position: "absolute", inset: 0,
                    background: "rgba(11,29,53,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: 0, transition: "opacity 0.2s",
                  }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="32" height="32">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 09 — NEXT PROJECT
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${C.navy} 0%, #1E3A5F 100%)`,
        padding: "72px 0",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123,191,222,0.05) 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }} />

        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 5%", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{
              fontSize: "0.65rem", fontWeight: 800, color: C.cyan,
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}>Projet suivant</span>
            <h2 style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
              fontWeight: 800, color: "#fff",
              margin: "10px 0 0", letterSpacing: "-0.02em",
            }}>Continuez à explorer</h2>
          </div>

          <div
            className="nav-cards"
            style={{ display: "grid", gridTemplateColumns: prevProject ? "1fr 1fr" : "1fr", gap: "16px", maxWidth: "800px", margin: "0 auto" }}
          >
            {prevProject && (
              <motion.button
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate(`/projects/${prevProject.slug}`)}
                className="nav-card"
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderRadius: "14px", padding: "20px",
                  cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="2" width="20" height="20" style={{ flexShrink: 0 }}>
                  <path d="M19 12H5M12 5l-7 7 7 7"/>
                </svg>
                <div>
                  <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                    Précédent
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                    {prevProject.title}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: C.cyan, marginTop: "3px" }}>
                    {prevProject.cat}
                  </div>
                </div>
              </motion.button>
            )}

            {nextProject && nextProject.slug !== project.slug && (
              <motion.button
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate(`/projects/${nextProject.slug}`)}
                className="nav-card"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "16px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1.5px solid rgba(255,255,255,0.12)",
                  borderRadius: "14px", padding: "20px",
                  cursor: "pointer", textAlign: "right",
                  transition: "all 0.2s",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
                    Suivant
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                    {nextProject.title}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: C.cyan, marginTop: "3px" }}>
                    {nextProject.cat}
                  </div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke={C.cyan} strokeWidth="2" width="20" height="20" style={{ flexShrink: 0 }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.button>
            )}
          </div>

          {/* Back to all projects */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <motion.button
              whileHover={{ y: -2 }}
              onClick={() => navigate("/#projects")}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent", border: "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: "10px", padding: "11px 24px",
                fontSize: "0.82rem", fontWeight: 700, color: "rgba(255,255,255,0.65)",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.cyan; e.currentTarget.style.color = C.cyan; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                <path d="M19 12H5M12 5l-7 7 7 7"/>
              </svg>
              Voir tous les projets
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />

      {/* ─── LIGHTBOX ──────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && galleryImages.length > 0 && (
          <GalleryLightbox
            images={galleryImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
