import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SI = "https://cdn.simpleicons.org";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    color: "#7BBFDE",
    icon: "🖥️",
    skills: [
      { name: "React",        icon: `${D}/react/react-original.svg` },
      { name: "Next.js",      icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "React Native", icon: `${D}/react/react-original.svg` },
      { name: "Angular",      icon: `${D}/angularjs/angularjs-original.svg` },
      { name: "Vue.js",       icon: `${D}/vuejs/vuejs-original.svg` },
      { name: "TypeScript",   icon: `${D}/typescript/typescript-original.svg` },
      { name: "JavaScript",   icon: `${D}/javascript/javascript-original.svg` },
      { name: "Tailwind CSS", icon: `${D}/tailwindcss/tailwindcss-plain.svg` },
      { name: "HTML5",        icon: `${D}/html5/html5-original.svg` },
      { name: "CSS3",         icon: `${D}/css3/css3-original.svg` },
    ],
  },
  {
    title: "Backend & Architecture",
    color: "#FF6B9D",
    icon: "⚙️",
    skills: [
      { name: "Java",             icon: `${D}/java/java-original.svg` },
      { name: "Spring Boot",      icon: `${D}/spring/spring-original.svg` },
      { name: "Spring Security",  icon: `${D}/spring/spring-original.svg` },
      { name: "Spring Cloud",     icon: `${D}/spring/spring-original.svg` },
      { name: "Microservices",    icon: `${D}/apachekafka/apachekafka-original.svg` },
      { name: "REST API",         icon: null },
      { name: "JWT",              icon: `${SI}/jsonwebtokens/ffffff` },
      { name: "RabbitMQ",         icon: `${D}/rabbitmq/rabbitmq-original.svg` },
      { name: "Python",           icon: `${D}/python/python-original.svg` },
    ],
  },
  {
    title: "Bases de données",
    color: "#7BBFDE",
    icon: "🗄️",
    skills: [
      { name: "MySQL",       icon: `${D}/mysql/mysql-original.svg` },
      { name: "PostgreSQL",  icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "MongoDB",     icon: `${D}/mongodb/mongodb-original.svg` },
      { name: "Redis",       icon: `${D}/redis/redis-original.svg` },
      { name: "SQL Server",  icon: `${D}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "#FFB3CF",
    icon: "🚀",
    skills: [
      { name: "Docker",          icon: `${D}/docker/docker-original.svg` },
      { name: "Kubernetes",      icon: `${D}/kubernetes/kubernetes-plain.svg` },
      { name: "Jenkins",         icon: `${D}/jenkins/jenkins-original.svg` },
      { name: "GitHub Actions",  icon: `${SI}/githubactions/ffffff` },
      { name: "SonarQube",       icon: `${D}/sonarqube/sonarqube-original.svg` },
      { name: "Grafana",         icon: `${D}/grafana/grafana-original.svg` },
      { name: "Prometheus",      icon: `${D}/prometheus/prometheus-original.svg` },
      { name: "CI/CD",           icon: null },
      { name: "Firebase",        icon: `${D}/firebase/firebase-plain.svg` },
    ],
  },
  {
    title: "IA & Data Science",
    color: "#c084fc",
    icon: "🤖",
    skills: [
      { name: "Machine Learning", icon: null },
      { name: "Deep Learning",    icon: null },
      { name: "Data Mining",      icon: null },
      { name: "TensorFlow",       icon: `${D}/tensorflow/tensorflow-original.svg` },
      { name: "Keras",            icon: `${D}/keras/keras-original.svg` },
      { name: "Pandas",           icon: `${D}/pandas/pandas-original.svg` },
      { name: "NumPy",            icon: `${D}/numpy/numpy-original.svg` },
      { name: "Matplotlib",       icon: `${D}/matplotlib/matplotlib-original.svg` },
    ],
  },
  {
    title: "Outils & Méthodes",
    color: "#34d399",
    icon: "🛠️",
    skills: [
      { name: "Git",          icon: `${D}/git/git-original.svg` },
      { name: "GitHub",       icon: `${D}/github/github-original.svg` },
      { name: "Postman",      icon: `${D}/postman/postman-original.svg` },
      { name: "Figma",        icon: `${D}/figma/figma-original.svg` },
      { name: "Jira",         icon: `${D}/jira/jira-original.svg` },
      { name: "Swagger",      icon: `${SI}/swagger/ffffff` },
      { name: "Maven",        icon: `${D}/maven/maven-original.svg` },
      { name: "IntelliJ",     icon: `${D}/intellij/intellij-original.svg` },
      { name: "VS Code",      icon: `${D}/vscode/vscode-original.svg` },
    ],
  },
  {
    title: "Modélisation & Méthodes",
    color: "#fb923c",
    icon: "📐",
    skills: [
      { name: "UML",         icon: null },
      { name: "Merise",      icon: null },
      { name: "Agile/Scrum", icon: null },
      { name: "Design Patterns", icon: null },
      { name: "MVC",         icon: null },
    ],
  },
];

function SkillPill({ name, icon, index, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      style={{
        display: "inline-flex", alignItems: "center", gap: "8px",
        padding: "7px 14px", borderRadius: "999px",
        border: "1px solid rgba(123,191,222,0.2)",
        background: "rgba(221,238,255,0.04)",
        cursor: "default", whiteSpace: "nowrap",
        transition: "background 0.2s, border-color 0.2s, transform 0.2s",
      }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(123,191,222,0.12)";
        e.currentTarget.style.borderColor = "rgba(123,191,222,0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(221,238,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(123,191,222,0.2)";
      }}
    >
      {icon ? (
        <img
          src={icon}
          alt={name}
          style={{ width: "17px", height: "17px", objectFit: "contain", filter: "brightness(1.1)" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      ) : (
        <span style={{
          width: "7px", height: "7px", borderRadius: "50%",
          background: color || "#7BBFDE",
          display: "inline-block", flexShrink: 0,
        }} />
      )}
      <span style={{
        fontSize: "0.78rem", fontWeight: 500,
        color: "rgba(221,238,255,0.8)",
        fontFamily: "'Courier New', monospace",
        letterSpacing: "0.02em",
      }}>
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  let cumulativeIndex = 0;

  return (
    <section id="skills" style={{ background: "#060F20", padding: "100px 0 96px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 5%" }}>

        <SectionTitle label="COMPÉTENCES" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "20px",
        }}>
          {SKILL_CATEGORIES.map((category) => {
            const start = cumulativeIndex;
            cumulativeIndex += category.skills.length;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "rgba(221,238,255,0.03)",
                  border: "1px solid rgba(123,191,222,0.14)",
                  borderRadius: "16px",
                  padding: "26px 22px",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                whileHover={{ borderColor: "rgba(123,191,222,0.3)", transition: { duration: 0.2 } }}
              >
                {/* Header */}
                <div style={{ marginBottom: "18px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "1rem" }}>{category.icon}</span>
                    <div style={{
                      width: "3px", height: "14px", borderRadius: "2px",
                      background: category.color || "#7BBFDE", flexShrink: 0,
                    }} />
                    <h3 style={{
                      fontSize: "0.85rem", fontWeight: 700,
                      color: category.color || "rgba(221,238,255,0.75)",
                      margin: 0, letterSpacing: "0.04em",
                    }}>
                      {category.title}
                    </h3>
                    {/* Compteur */}
                    <span style={{
                      marginLeft: "auto",
                      fontSize: "0.65rem", fontWeight: 700,
                      color: "rgba(221,238,255,0.3)",
                    }}>
                      {category.skills.length}
                    </span>
                  </div>
                  <div style={{
                    height: "1px",
                    background: `linear-gradient(90deg, ${category.color || "#7BBFDE"}55, transparent)`,
                  }} />
                </div>

                {/* Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {category.skills.map((skill, i) => (
                    <SkillPill
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      index={start + i}
                      color={category.color}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
