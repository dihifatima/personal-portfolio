import { useState } from "react";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import { PROJECTS } from "../data/Data";

const FILTERS = ["Tous", "Projet de Fin d'Études", "Application Mobile & IA", "Application Web Collaborative", "IA & Data Science"];
const FILTER_LABELS = {
  "Tous": "Tous",
  "Projet de Fin d'Études": "PFE",
  "Application Mobile & IA": "Mobile & IA",
  "Application Web Collaborative": "Web",
  "IA & Data Science": "IA",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? PROJECTS
      : PROJECTS.filter((p) => p.cat === activeFilter);

  return (
    <>
      <style>{`
        .filter-btn {
          padding: 7px 18px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          border: 1.5px solid #e8edf5;
          background: #fff;
          color: #4b6180;
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover { border-color: #7BBFDE; color: #7BBFDE; }
        .filter-btn.active {
          background: #7BBFDE;
          color: #fff;
          border-color: #7BBFDE;
          box-shadow: 0 4px 14px rgba(123,191,222,0.35);
        }
      `}</style>

      <section
        id="projects"
        style={{ background: "#f4f6f9", padding: "10px 0 96px" }}
      >
        <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 5%" }}>

          <SectionTitle label="PROJETS" />

          {/* Filters */}
          <div style={{
            display: "flex", justifyContent: "center",
            flexWrap: "wrap", gap: "8px", marginBottom: "40px",
          }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              >
                {FILTER_LABELS[f]}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
            <span style={{ fontSize: "0.78rem", color: "#7BBFDE", fontWeight: "600" }}>
              {filtered.length} projet{filtered.length > 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {filtered.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "0.88rem", color: "#7BBFDE" }}>
                Aucun projet dans cette catégorie.
              </p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}