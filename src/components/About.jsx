import { motion } from "framer-motion";
import myPhoto from "../assets/photo4.png";
import SectionTitle from "./SectionTitle";

const INFO = [
  { label: "Nom",    value: "Dihi Fatima" },
  { label: "Email",  value: "dihifatima08@gmail.com", href: "mailto:dihifatima08@gmail.com" },
  { label: "Tél",    value: "+212 6 09 98 46 65",     href: "tel:+212609984665" },
  { label: "Statut", value: "Étudiante Ingénieure · 5ᵉ année EMSI" },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const TECHS = [
  { name: "Java",            logo: `${DEVICON}/java/java-original.svg` },
  { name: "Spring Boot",     logo: `${DEVICON}/spring/spring-original.svg` },
  { name: "React",           logo: `${DEVICON}/react/react-original.svg` },
  { name: "Next.js",         logo: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: "Jenkins",         logo: `${DEVICON}/jenkins/jenkins-original.svg` },
  { name: "GitHub Actions",  logo: "https://cdn.simpleicons.org/githubactions/000000" },
  { name: "SonarQube",       logo: `${DEVICON}/sonarqube/sonarqube-original.svg` },
  { name: "MySQL",           logo: `${DEVICON}/mysql/mysql-original.svg` },
  { name: "Docker",          logo: `${DEVICON}/docker/docker-original.svg` },
  { name: "Git",             logo: `${DEVICON}/git/git-original.svg` },
  { name: "Kubernetes",      logo: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
  { name: "Microservices",   logo: `${DEVICON}/apachekafka/apachekafka-original.svg` },
  { name: "Spring Cloud",    logo: `${DEVICON}/spring/spring-original.svg` },
  { name: "Grafana",         logo: `${DEVICON}/grafana/grafana-original.svg` },
  { name: "Spring Security", logo: `${DEVICON}/spring/spring-original.svg` },
  { name: "JWT",             logo: "https://cdn.simpleicons.org/jsonwebtokens/000000" },
];

export default function About() {
  return (
    <>
      <style>{`
        .info-row {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 10px 14px;
          background: #fff;
          border-radius: 10px;
          border: 1px solid #e8edf2;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          margin-bottom: 8px;
        }
        .info-row:hover {
          box-shadow: 0 6px 20px rgba(123,191,222,0.18);
          border-color: #7BBFDE;
          transform: translateX(4px);
        }
        .tech-pill-about {
          display: inline-flex; align-items: center; gap: 7px;
          background: #fff;
          border: 1px solid #e8edf2;
          border-radius: 10px;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #060F20;
          cursor: default;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .tech-pill-about:hover {
          border-color: #7BBFDE;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(123,191,222,0.15);
        }
        .about-btn-solid {
          display: inline-flex; align-items: center; gap: 8px;
          background: #7BBFDE; color: #060F20;
          font-size: 0.84rem; font-weight: 700;
          padding: 11px 28px; border-radius: 999px;
          text-decoration: none; border: none; cursor: pointer;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 16px rgba(123,191,222,0.3);
        }
        .about-btn-solid:hover { background: #060F20; color: #7BBFDE; transform: translateY(-2px); }
        .about-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: #060F20;
          font-size: 0.84rem; font-weight: 600;
          padding: 10px 26px; border-radius: 999px;
          text-decoration: none; border: 1.5px solid #d1d5db; cursor: pointer;
          transition: border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .about-btn-outline:hover { border-color: #FF6B9D; color: #FF6B9D; transform: translateY(-2px); }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section id="about" style={{ background: "#f4f6f9", padding: "100px 0 96px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 5%" }}>
          <SectionTitle label="A_PROPOS" />

          <div
            className="about-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 260px 1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                  fontWeight: 800,
                  color: "#060F20",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Développeuse Full Stack{" "}
                <span style={{ color: "#7BBFDE" }}>Java / Spring Boot  </span>
              </h2>

              <p style={{ fontSize: "0.87rem", color: "#4b6180", lineHeight: "1.9", marginBottom: "24px" }}>
                Étudiante ingénieure en 5ᵉ année en Développement Digital et Systèmes
                d'Information à l'EMSI Marrakech. Passionnée par le développement
                Full Stack, les pratiques DevOps et l'intelligence artificielle.
                Je recherche un stage PFE de 4 à 6 mois pour mettre mes compétences
                au service de projets innovants.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="/CV_Dihi_Fatima_PFE_2027.pdf"
                  download="CV_Dihi_Fatima_PFE_2027.pdf"
                  className="about-btn-solid"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Télécharger mon CV
                </a>
              </div>
            </motion.div>

            {/* ── CENTER — Photo ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
            >
              <div
                style={{
                  width: "240px",
                  height: "300px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 20px 50px rgba(123,191,222,0.25)",
                  border: "3px solid #fff",
                }}
              >
                <img
                  src={myPhoto}
                  alt="Fatima Dihi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
            </motion.div>

            {/* ── RIGHT — Technologies ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#060F20", marginBottom: "6px" }}>
                Technologies maîtrisées
              </h3>
              <div
                style={{
                  width: "32px",
                  height: "3px",
                  background: "linear-gradient(90deg, #7BBFDE, #FF6B9D)",
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              />

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {TECHS.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    className="tech-pill-about"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      style={{ width: "17px", height: "17px", objectFit: "contain" }}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
