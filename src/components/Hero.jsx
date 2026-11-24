import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/photo4.png";

const TYPING_TEXTS = [
  "Étudiante Ingénieure en Génie Logiciel",
  "Développeuse Full Stack Java / React",
  "Passionnée par le DevOps & l'IA",
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 60);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % TYPING_TEXTS.length);
    }
    setTypedText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  return (
    <>
      <style>{`
        @keyframes floatPhoto {
          0%, 100% { transform: translate(-50%, 0px); }
          50%       { transform: translate(-50%, -12px); }
        }
        @keyframes rotateSlow {
          from { transform: translate(-50%, 0) rotate(0deg); }
          to   { transform: translate(-50%, 0) rotate(360deg); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes float-shape {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .hero-float-photo { animation: floatPhoto 4.5s ease-in-out infinite; }
        .hero-float-ring { animation: rotateSlow 20s linear infinite; }
        .hero-pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }
        .hero-pulse-dot-2 { animation: pulse-dot 2.6s ease-in-out infinite; animation-delay: 0.8s; }
        .hero-float-shape1 { animation: float-shape 3.5s ease-in-out infinite; }
        .hero-float-shape2 { animation: float-shape 4.2s ease-in-out infinite; animation-delay: 1s; }
        .cursor-blink {
          display: inline-block;
          width: 2px; height: 1.1em;
          background: #7BBFDE;
          margin-left: 3px;
          vertical-align: middle;
          animation: blink 0.8s step-end infinite;
          border-radius: 1px;
        }
        .wave-emoji {
          display: inline-block;
          animation: waveHand 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #7BBFDE; color: #060F20;
          font-size: 0.88rem; font-weight: 700;
          padding: 12px 28px; border-radius: 999px;
          border: none; cursor: pointer;
          box-shadow: 0 8px 24px rgba(123,191,222,0.35);
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
        }
        .hero-btn-primary:hover {
          background: #DDEEFF;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(123,191,222,0.5);
        }
        .hero-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #fff;
          font-size: 0.88rem; font-weight: 600;
          padding: 11px 26px; border-radius: 999px;
          border: 1.5px solid rgba(255,255,255,0.35); cursor: pointer;
          transition: border-color 0.2s, transform 0.2s, background 0.2s;
          text-decoration: none;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(255,255,255,0.75);
          transform: translateY(-3px);
          background: rgba(255,255,255,0.05);
        }
        .hero-social-link {
          display: flex; align-items: center; justify-content: center;
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(123,191,222,0.3);
          color: #7BBFDE;
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, transform 0.2s, background 0.2s;
        }
        .hero-social-link:hover {
          border-color: #FF6B9D;
          color: #FF6B9D;
          transform: translateY(-3px);
          background: rgba(255,107,157,0.07);
        }
        .gradient-name {
          background: linear-gradient(135deg, #fff 30%, #7BBFDE 70%, #FFB3CF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section
        id="hero"
        className="relative min-h-screen overflow-hidden flex items-center"
      >
        {/* Background */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1600&q=80')",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(110deg,rgba(6,15,32,.88) 0%,rgba(6,15,32,.72) 55%,rgba(6,15,32,.45) 100%)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123,191,222,0.06) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-[6%] py-24 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">

          {/* LEFT */}
          <div>
            {/* Greeting */}
            <motion.p
              {...fadeUp(0.1)}
              style={{ color: "rgba(221,238,255,0.7)", marginBottom: "12px", fontSize: "1rem" }}
            >
              Bonjour, je suis
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="gradient-name mb-2 leading-tight font-extrabold"
              style={{
                fontSize: "clamp(2.6rem, 5.5vw, 3.5rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Fatima Dihi
            </motion.h1>

            {/* Typing animation */}
            <motion.div {...fadeUp(0.35)} style={{ marginBottom: "20px", minHeight: "2em" }}>
              <span
                style={{
                  color: "#7BBFDE",
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  fontWeight: 500,
                  borderBottom: "2px solid rgba(123,191,222,0.4)",
                  paddingBottom: "2px",
                  display: "inline-block",
                }}
              >
                {typedText}
                <span className="cursor-blink" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.45)}
              style={{
                color: "rgba(221,238,255,0.6)",
                fontSize: "0.9rem",
                lineHeight: "1.8",
                maxWidth: "480px",
                marginBottom: "32px",
              }}
            >
             Élève ingénieure en 5e année en Développement Digital et
Systèmes d’Information à l’EMSI, passionnée par le développement
Full Stack ainsi que par les pratiques DevOps. À la recherche d’un
stage PFE de 4 à 6 mois à partir de février 2027.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.55)} style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
              <button
                onClick={() => scrollTo("projects")}
                className="hero-btn-primary"
              >
                Découvrir mes projets
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CV_Dihi_Fatima_PFE_2027.pdf";
                  link.download = "CV_Dihi_Fatima_PFE_2027.pdf";
                  link.click();
                }}
                className="hero-btn-secondary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Télécharger mon CV
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.65)} style={{ display: "flex", gap: "10px" }}>
              <a
                href="https://github.com/dihifatima"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/fatima-dihi-b3b759337/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/212609984665`}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Scroll indicator */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "16px" }}>
                <div style={{
                  width: "1px", height: "32px",
                  background: "rgba(221,238,255,0.2)",
                  borderRadius: "1px",
                }} />
                <span style={{ fontSize: "0.72rem", color: "rgba(221,238,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Scroll
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative flex justify-center items-end mt-8 md:mt-0"
            style={{ height: "420px" }}
          >
            {/* Glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "280px", height: "280px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(123,191,222,0.15) 0%, transparent 70%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />

            {/* Glass circle */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "340px", height: "340px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(6px)",
                border: "2px solid rgba(255,255,255,0.1)",
              }}
            />

            {/* Rotating ring */}
            <div
              className="hero-float-ring absolute bottom-0 left-1/2"
              style={{
                width: "374px", height: "374px",
                borderRadius: "50%",
                border: "2px dashed rgba(123,191,222,0.35)",
                zIndex: 1,
              }}
            />

            {/* Pink ring */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "360px", height: "360px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,107,157,0.2)",
                zIndex: 1,
              }}
            />

            {/* Photo */}
            <div
              className="hero-float-photo absolute bottom-0 left-1/2 overflow-hidden"
              style={{
                width: "312px", height: "312px",
                borderRadius: "160px 160px 50% 50%",
                zIndex: 2,
              }}
            >
              <img
                src={myPhoto}
                alt="Fatima Dihi"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Decorative dots */}
            <div className="hero-float-shape1 absolute top-6 left-6 z-[3]" style={{ width: "38px", height: "38px", borderRadius: "50%", border: "3.5px solid #7BBFDE" }} />
            <svg className="hero-float-shape2 absolute top-4 right-14 z-[3]" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <polygon points="13,2 25,24 1,24" stroke="rgba(255,179,207,0.6)" strokeWidth="2" fill="none" />
            </svg>
            <div className="hero-pulse-dot absolute top-14 right-10 z-[3] rounded-full" style={{ width: "9px", height: "9px", background: "#FFB3CF" }} />
            <div className="hero-pulse-dot-2 absolute bottom-20 left-8 z-[3] rounded-full" style={{ width: "9px", height: "9px", background: "#7BBFDE" }} />
            <div className="hero-pulse-dot absolute top-1/2 left-2 z-[3] rounded-full bg-white/30" style={{ width: "7px", height: "7px" }} />

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "-10px",
                zIndex: 5,
                background: "rgba(6,15,32,0.85)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(123,191,222,0.2)",
                borderRadius: "12px",
                padding: "10px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div style={{ fontSize: "0.65rem", color: "#7BBFDE", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Disponible
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.6)" }} />
                <span style={{ fontSize: "0.78rem", color: "#DDEEFF", fontWeight: 600 }}>stage PFE de 4 à 6 mois à partir de février 2027</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
