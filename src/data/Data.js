// ─── EXPERIENCE ────────────────────────────────────────────────────────────────
// logo paths: copy logoAdminpro.webp to public/assets/ (already have it)
// EMSI logo goes to public/assets/logoEmsi.webp
import smartflowImg from "../assets/smartflow-preview.png";
import adminproProjectimg from "../assets/adminproProjectimg.png";
import projetAnalyseDeDonneImg from "../assets/projetAnalyseDeDonneImg.png";
import ITCommunityIMG from "../assets/ITCommunityIMG.png";

export const EXPERIENCE = [
  {
    date: "Avril 2025 – Juin 2025",
    title: "Développeuse Full Stack Web – Stage PFE",
    entreprise: "Adminpro Advisors Solutions, Marrakech",
    logo: "/assets/logoAdminpro.png",
    sujet:
      "Conception et développement d'un site web full stack visant à digitaliser les services d'accompagnement et de conseil de l'entreprise.",
    missions: [
      "Conception de l'architecture full stack (Next.js / Spring Boot / PostgreSQL) avec API REST et modélisation UML.",
      "Mise en place de la sécurité : authentification JWT, OAuth2 Google, activation de compte par email, réinitialisation de mot de passe sécurisée (BCrypt).",
      "Développement du tableau de bord administrateur : gestion des clients, demandes de services, articles, FAQ, témoignages, RDV et admins secondaires (RBAC).",
      "Développement de l'espace client : inscription multi-étapes, prise de RDV avec calendrier et créneaux dynamiques, génération automatique de reçu PDF.",
      "Déploiement de l'application en production : adminproadvisorssolutions.com",
      "Rédaction de la documentation complète, gestion de projet en méthodologie Agile Scrum (Trello + Gantt).",
    ],
    techs: [
      "Spring Framework",
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "JWT",
      "OAuth2 Google",
      "REST API",
      "Git/GitHub",
      "Agile/Scrum",
    ],
    link: "https://adminproadvisorssolutions.com",
  },
  {
    date: "Février 2026 – Mai 2026",
    title: "Développeuse Full Stack – Système Intelligent de Gestion de Projets et Ressources",
    entreprise: "EMSI Marrakech",
    logo: "/assets/logoEmsi.png",
    sujet:
      "Conception et développement d'une application web full stack modulaire combinant un module IA pour l'analyse automatique des cahiers des charges et l'estimation des coûts, délais et risques via Gemini API — et un module Agile complet avec gestion des rôles et suivi en temps réel.",
    missions: [
      // Module IA
      "Scraping de cahiers des charges, génération de prompts et estimation automatique des coûts, délais et risques via Gemini API.",
      "Résilience du service IA avec Resilience4J : Circuit Breaker, Retry et Fallback pour garantir la continuité de service.",
      // Module Agile & Architecture
      "Conception d'une architecture full stack modulaire (Next.js / Spring Boot / MySQL) avec API REST sécurisée et authentification JWT.",
      "Développement des fonctionnalités Agile : projets, backlog, sprints, tickets, Kanban — avec RBAC (Administrateur / Chef de projet / Membre d'équipe).",
      "Communication asynchrone via RabbitMQ et navigation optimisée avec pagination côté serveur.",
      // Qualité & Documentation
      "Mise en place de tests de qualité : tests unitaires (JUnit 5 / Mockito) et tests d'intégration, avec analyse de la qualité du code via SonarCloud.",
      "Rédaction de la documentation complète : cahier des charges, charte de projet, maquettes et documentation technique.",
    ],
    techs: [
      "Spring Boot",
      "JPA/Hibernate",
      "Next.js",
      "MySQL",
      "Gemini API",
      "Web Scraping",
      "RabbitMQ",
      "Resilience4J",
      "JWT",
      "REST API",
      "JUnit 5",
      "Mockito",
      "SonarCloud",
      "Agile/Scrum",
    ],
  },
];

// ─── EDUCATION (conservée mais plus affichée dans Experience.jsx) ─────────────
export const EDUCATION = [
  { date: "2025 - 2027", title: "Ingénierie Développement Digital & SI (2DSI)", org: "EMSI Marrakech" },
  { date: "2024 - 2025", title: "Licence Systèmes Informatiques Répartis (SIR)", org: "Faculté des Sciences et Techniques · Marrakech" },
  { date: "2021 - 2024", title: "DEUST", org: "Faculté des Sciences et Techniques · Marrakech" },
  { date: "2020 - 2021", title: "Baccalauréat Sciences Physiques", org: "Lycée Youssef Ben Tachafine · Tinghir" },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
    {
    image: smartflowImg,
    cat: "Projet de Fin d'Année · IA & Agile",
    title: "Système Intelligent de Gestion de Projets",
    desc: "Application web full stack modulaire combinant un module IA (analyse de cahiers des charges, estimation coûts/délais/risques via Gemini API, résilience Resilience4J) et un module Agile complet (backlog, sprints, Kanban, RBAC) avec communication asynchrone via RabbitMQ.",
    techs: [
      "Spring Boot",
      "Next.js",
      "MySQL",
      "Gemini API",
      "RabbitMQ",
      "Resilience4J",
      "JWT",
      "JUnit 5",
      "SonarCloud",
    ],
    status: "done",
    link: "#",
  },
  {
    image: adminproProjectimg,
    cat: "Projet de Fin d'Études",
    title: "Gestion des Services d'Accompagnement",
    desc: "Site web complet pour Adminpro Advisors Solutions — interface publique, espace admin interne, gestion des utilisateurs, intégration OAuth2 et chatbot Google.",
    techs: ["Spring", "Next.js", "Tailwind CSS", "PostgreSQL", "OAuth2", "Scrum"],
    status: "done",
    link: "https://adminproadvisorssolutions.com/",
  },

  {
    image: projetAnalyseDeDonneImg,
    cat: "IA & Analyse de Données",
    title: "Diagnostic du Cancer du Sein – Analyse de Données",
    desc: "Étude de données médicales open-source (Wisconsin Breast Cancer Diagnostic – UCI) : 30 caractéristiques morphologiques analysées via des méthodes univariées, bivariées (ANOVA, Pearson, multicolinéarité) et multivariées (ACP) pour identifier les variables liées à la malignité et préparer la phase de modélisation prédictive.",
    techs: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "ACP", "Statistiques"],
    status: "done",
    link: "https://www.linkedin.com/posts/fatima-dihi-b3b759337_projet-danalyse-de-donn%C3%A9es-diagnostic-activity-7414834136374538240-vWA-",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
    cat: "Application Mobile & IA",
    title: "App Dermatologique Android",
    desc: "Application Android pour le suivi de l'état de la peau avec module IA pour prédiction du type de peau via API REST et Machine Learning.",
    techs: ["Android Java", "Spring Boot", "PostgreSQL", "Retrofit", "Machine Learning"],
    status: "wip",
    link: "#",
  },
  {
    image: ITCommunityIMG,
    cat: "Application Web Collaborative",
    title: "ITCommunity Platform",
    desc: "Application web pour la gestion et le partage de connaissances entre membres d'une communauté IT, avec système de rôles et espace de discussion.",
    techs: ["ASP.NET", "SQL Server", "Next.js"],
    status: "done",
    link: "https://www.linkedin.com/posts/fatima-dihi-b3b759337_itcommunity-aspnet-nextjs-activity-7410441432534097920-6aHl",
  },
];