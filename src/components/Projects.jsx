import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "../data/Data";

const FILTERS = [
  { label: "Tous", value: "Tous" },
  { label: "Stage", value: "stage" },
  { label: "Mobile & IA", value: "mobile" },
  { label: "Web", value: "web" },
  { label: "Data Science", value: "data" },
];

function matchFilter(project, filter) {
  if (filter === "Tous") return true;
  const cat = project.cat.toLowerCase();
  if (filter === "stage") return cat.includes("stage") || cat.includes("fin d'études");
  if (filter === "mobile") return cat.includes("mobile");
  if (filter === "web") return cat.includes("web") || cat.includes("collaborative");
  if (filter === "data") return cat.includes("ia") || cat.includes("données");
  return true;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = PROJECTS.filter((p) => matchFilter(p, activeFilter));

  return (
    <>
      <style>{`
        .filter-pill {
          padding: 7px 20px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: 1.5px solid #e8edf5;
          background: #fff;
          color: #4b6180;
          cursor: pointer;
          transition: all 0.22s cubic-bezier(0.4,0,0.2,1);
        }
        .filter-pill:hover { border-color: #7BBFDE; color: #7BBFDE; }
        .filter-pill.active {
          background: #7BBFDE;
          color: #fff;
          border-color: #7BBFDE;
          box-shadow: 0 4px 14px rgba(123,191,222,0.35);
        }
      `}</style>

      <section id="projects" style={{ background: "#f4f6f9", padding: "100px 0 96px" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 5%" }}>

          <SectionTitle label="PROJETS" />

          {/* Filters */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px", marginBottom: "48px" }}>
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`filter-pill ${activeFilter === f.value ? "active" : ""}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
            <span style={{ fontSize: "0.78rem", color: "#7BBFDE", fontWeight: 600 }}>
              {filtered.length} projet{filtered.length > 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
            gap: "24px",
          }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug || project.title} {...project} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ textAlign: "center", padding: "80px 0" }}
            >
              <p style={{ fontSize: "0.88rem", color: "#7BBFDE" }}>
                Aucun projet dans cette catégorie.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
