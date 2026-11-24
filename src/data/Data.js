// ─── IMPORTS ──────────────────────────────────────────────────────────────────
import smartflowImg from "../assets/smartflow-preview.png";
import inveneoProjectImg from "../assets/inveneoProjectImg.png";
import adminproProjectimg from "../assets/adminproProjectimg.png";
import projetAnalyseDeDonneImg from "../assets/projetAnalyseDeDonneImg.png";
import ITCommunityIMG from "../assets/ITCommunityIMG.png";

// ─── EXPERIENCE ────────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    date: "Juillet 2026 – Août 2026",
    title: "Développeuse Full Stack Mobile – Stage PFA",
    entreprise: "Inveneo, Marrakech",
    logo: null,
    sujet:
      "Conception et développement d'une application mobile de supervision DevOps centralisée, permettant le suivi en temps réel des pipelines CI/CD via des connecteurs GitHub, Jenkins et SonarQube.",
    missions: [
      "Intégration des connecteurs GitHub, Jenkins et SonarQube : authentification OAuth, mesures de qualité par commit, association commit → build.",
      "Suivi en temps réel des pipelines CI/CD depuis l'application mobile.",
      "Mise en place de notifications en temps réel (webhook et push mobile) avec Firebase Cloud Messaging.",
      "Développement d'écrans Pipelines et Home personnalisables.",
    ],
    techs: [
      "Spring Boot",
      "JPA/Hibernate",
      "React Native",
      "Expo",
      "GitHub/Jenkins/SonarQube API",
      "Firebase Cloud Messaging",
      "REST API",
    ],
  },
  {
    date: "Avril 2025 – Juin 2025",
    title: "Développeuse Full Stack Web – Stage PFE",
    entreprise: "Adminpro Advisors Solutions, Marrakech",
    logo: null,
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
    logo: null,
    sujet:
      "Conception et développement d'une application web full stack modulaire combinant un module IA pour l'analyse automatique des cahiers des charges et l'estimation des coûts, délais et risques via Gemini API — et un module Agile complet avec gestion des rôles et suivi en temps réel.",
    missions: [
      "Scraping de cahiers des charges, génération de prompts et estimation automatique des coûts, délais et risques via Gemini API.",
      "Résilience du service IA avec Resilience4J : Circuit Breaker, Retry et Fallback pour garantir la continuité de service.",
      "Conception d'une architecture full stack modulaire (Next.js / Spring Boot / MySQL) avec API REST sécurisée et authentification JWT.",
      "Développement des fonctionnalités Agile : projets, backlog, sprints, tickets, Kanban — avec RBAC (Administrateur / Chef de projet / Membre d'équipe).",
      "Communication asynchrone via RabbitMQ et navigation optimisée avec pagination côté serveur.",
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

// ─── EDUCATION ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  { date: "2025 - 2027", title: "Ingénierie Développement Digital & SI (2DSI)", org: "EMSI Marrakech" },
  { date: "2024 - 2025", title: "Licence Systèmes Informatiques Répartis (SIR)", org: "Faculté des Sciences et Techniques · Marrakech" },
  { date: "2021 - 2024", title: "DEUST", org: "Faculté des Sciences et Techniques · Marrakech" },
  { date: "2020 - 2021", title: "Baccalauréat Sciences Physiques", org: "Lycée Youssef Ben Tachafine · Tinghir" },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    slug: "inveneo-devops",
    image: inveneoProjectImg,
    cat: "Stage PFA · DevOps & Mobile",
    title: "Application Mobile de Supervision DevOps",
    desc: "Application mobile de supervision DevOps centralisée pour le suivi en temps réel des pipelines CI/CD via des connecteurs GitHub, Jenkins et SonarQube, avec notifications push en temps réel et écrans personnalisables.",
    techs: ["Spring Boot", "JPA/Hibernate", "React Native", "Expo", "Jenkins", "SonarQube", "Firebase Cloud Messaging", "REST API"],
    status: "done",
    github: "#",
    link: "https://lnkd.in/p/ehVkuWTk",
    // ── Détails ─────────────────────────────────────────────────
    type: "Stage PFA",
    periode: "Juillet 2026 – Août 2026",
    entreprise: "Inveneo, Marrakech",
    description_longue: "Application mobile de supervision DevOps centralisée développée lors d'un stage PFA chez Inveneo. Elle permet aux équipes de développement de suivre en temps réel l'état de leurs pipelines CI/CD, la qualité de leur code et les notifications d'événements critiques — directement depuis leur smartphone.",
    problematique: "Les équipes DevOps chez Inveneo manquaient d'un outil mobile centralisé pour surveiller leurs pipelines CI/CD. Ils devaient alterner entre plusieurs interfaces web (GitHub, Jenkins, SonarQube) pour obtenir une vue d'ensemble, ce qui ralentissait la détection des erreurs.",
    solution: "Développement d'une application mobile React Native/Expo avec un backend Spring Boot centralisant les données de GitHub, Jenkins et SonarQube via leurs APIs respectives. Les développeurs reçoivent des notifications push Firebase en temps réel lors d'échecs de build ou de dégradation de la qualité de code.",
    fonctionnalites: [
      {
        titre: "Supervision CI/CD en temps réel",
        desc: "Suivi de l'état des pipelines GitHub Actions et Jenkins directement depuis l'application mobile, avec indicateurs visuels clairs (succès, échec, en cours)."
      },
      {
        titre: "Connecteurs multi-outils",
        desc: "Intégration des APIs GitHub, Jenkins et SonarQube avec authentification OAuth pour chaque outil. Association commit → build → qualité de code."
      },
      {
        titre: "Notifications push Firebase",
        desc: "Système de notifications en temps réel via webhooks côté serveur et Firebase Cloud Messaging côté mobile, alertant sur les échecs critiques."
      },
      {
        titre: "Écrans personnalisables",
        desc: "Dashboard Home et écran Pipelines configurables selon les préférences de chaque développeur."
      },
      {
        titre: "Métriques de qualité SonarQube",
        desc: "Affichage des mesures de qualité par commit : couverture de tests, bugs, vulnérabilités, code smells."
      },
    ],
    architecture: {
      frontend: "React Native + Expo — interface mobile cross-platform (iOS & Android)",
      backend: "Spring Boot + JPA/Hibernate — API REST centralisatrice des données DevOps",
      database: "Base de données relationnelle pour la persistance des configurations et historiques",
      integrations: "GitHub API, Jenkins API, SonarQube API, Firebase Cloud Messaging",
      auth: "OAuth2 pour l'authentification aux outils tiers, JWT pour l'API interne",
    },
    mes_contributions: [
      "Conception et développement complet du backend Spring Boot (architecture, API REST, intégrations)",
      "Intégration des connecteurs GitHub, Jenkins et SonarQube avec gestion des authentifications OAuth",
      "Implémentation du système de notifications push (webhooks serveur + Firebase Cloud Messaging)",
      "Développement des écrans React Native : Home, Pipelines, Détails de build",
      "Association commit → build → métriques qualité pour une vue unifiée",
      "Tests d'intégration des connecteurs et validation fonctionnelle",
    ],
    difficultes: [
      "Synchronisation des données entre trois APIs hétérogènes avec des modèles de données différents",
      "Gestion de la latence des webhooks et garantie de la fiabilité des notifications en temps réel",
    ],
    gallery: [inveneoProjectImg],
  },
  {
    slug: "adminpro",
    image: adminproProjectimg,
    cat: "Projet de Fin d'Études",
    title: "Gestion des Services d'Accompagnement – Adminpro",
    desc: "Site web complet pour Adminpro Advisors Solutions — interface publique, espace admin interne, gestion des utilisateurs, intégration OAuth2 et chatbot Google. Déployé en production.",
    techs: ["Spring", "Next.js", "Tailwind CSS", "PostgreSQL", "OAuth2", "JWT", "Scrum"],
    status: "done",
    github: "#",
    link: "https://adminproadvisorssolutions.com/",
    // ── Détails ─────────────────────────────────────────────────
    type: "Stage PFE",
    periode: "Avril 2025 – Juin 2025",
    entreprise: "Adminpro Advisors Solutions, Marrakech",
    description_longue: "Projet de Fin d'Études réalisé chez Adminpro Advisors Solutions. Développement d'une plateforme web full stack visant à digitaliser entièrement les services d'accompagnement et de conseil de l'entreprise — de la prise de contact jusqu'à la gestion des rendez-vous et la facturation.",
    problematique: "Adminpro Advisors Solutions gérait ses clients et ses prestations de conseil manuellement (email, téléphone, tableurs). Cette approche limitait leur croissance et ne permettait pas une expérience client professionnelle et fluide.",
    solution: "Développement d'une plateforme web complète avec une interface publique présentant les services, un espace client pour les prises de RDV et le suivi des demandes, et un tableau de bord administrateur complet avec RBAC pour gérer l'ensemble de l'activité.",
    fonctionnalites: [
      {
        titre: "Authentification sécurisée multi-méthodes",
        desc: "Inscription, connexion par email/mot de passe, OAuth2 Google, activation de compte par email et réinitialisation sécurisée de mot de passe (BCrypt + tokens)."
      },
      {
        titre: "Espace client complet",
        desc: "Inscription multi-étapes guidée, prise de rendez-vous avec calendrier dynamique et créneaux en temps réel, suivi de l'état des demandes, génération automatique de reçus PDF."
      },
      {
        titre: "Tableau de bord administrateur",
        desc: "Gestion complète : clients, demandes de services, articles/blog, FAQ, témoignages, rendez-vous, admins secondaires avec RBAC (rôles et permissions granulaires)."
      },
      {
        titre: "Interface publique",
        desc: "Site vitrine présentant les services, avec formulaires de contact, FAQ dynamique et témoignages clients."
      },
      {
        titre: "Génération de documents PDF",
        desc: "Génération automatique de reçus et confirmations de rendez-vous au format PDF."
      },
    ],
    architecture: {
      frontend: "Next.js 14 + Tailwind CSS — SSR et optimisation SEO",
      backend: "Spring Boot (Spring Security, Spring Data JPA) — API REST sécurisée",
      database: "PostgreSQL — modélisation relationnelle complète",
      auth: "JWT + OAuth2 Google + BCrypt — sécurité multi-couches",
      integrations: "JavaMail (emails), iText (PDF), API Google Calendar",
    },
    mes_contributions: [
      "Conception complète de l'architecture full stack (diagrammes UML : cas d'utilisation, classes, séquence)",
      "Mise en place de la sécurité : Spring Security, JWT, OAuth2 Google, BCrypt, activation par email",
      "Développement du tableau de bord administrateur avec RBAC complet",
      "Développement de l'espace client : inscription multi-étapes, prise de RDV, génération PDF",
      "Déploiement en production sur adminproadvisorssolutions.com",
      "Rédaction de la documentation complète et pilotage Agile (Trello + Gantt)",
    ],
    difficultes: [
      "Implémentation du système de créneaux dynamiques en temps réel (conflits de RDV, timezone)",
      "Configuration complexe de Spring Security pour gérer plusieurs méthodes d'authentification simultanément",
    ],
    gallery: [adminproProjectimg],
  },
  {
    slug: "analyse-donnees-cancer",
    image: projetAnalyseDeDonneImg,
    cat: "IA & Analyse de Données",
    title: "Diagnostic du Cancer du Sein – Analyse de Données",
    desc: "Étude de données médicales open-source (Wisconsin Breast Cancer Diagnostic) : 30 caractéristiques morphologiques analysées via des méthodes statistiques avancées (ANOVA, Pearson, ACP) pour identifier les variables liées à la malignité.",
    techs: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "ACP", "Statistiques"],
    status: "done",
    github: "#",
    link: "https://www.linkedin.com/posts/fatima-dihi-b3b759337_projet-danalyse-de-donn%C3%A9es-diagnostic-activity-7414834136374538240-vWA-",
    // ── Détails ─────────────────────────────────────────────────
    type: "Projet académique",
    periode: "2024 - 2025",
    entreprise: "Faculté des Sciences et Techniques, Marrakech",
    description_longue: "Projet d'analyse de données médicales portant sur le dataset Wisconsin Breast Cancer Diagnostic (UCI). L'objectif était d'explorer et d'analyser 30 caractéristiques morphologiques de cellules tumorales pour identifier les variables statistiquement significatives dans la prédiction de la malignité d'une tumeur.",
    problematique: "Le diagnostic du cancer du sein repose sur l'analyse de caractéristiques cytologiques. Comment identifier, parmi 30 variables morphologiques, celles qui discriminent le mieux les tumeurs bénignes des tumeurs malignes ?",
    solution: "Application d'une démarche statistique rigoureuse en trois étapes : analyse univariée pour décrire chaque variable, analyse bivariée (ANOVA, corrélation de Pearson, détection de multicolinéarité) pour identifier les relations avec la cible, et analyse multivariée (ACP) pour réduire la dimensionnalité.",
    fonctionnalites: [
      {
        titre: "Analyse univariée",
        desc: "Description statistique complète de chaque variable : distribution, quartiles, valeurs aberrantes, visualisations (histogrammes, boxplots)."
      },
      {
        titre: "Analyse bivariée (ANOVA & Pearson)",
        desc: "Tests ANOVA pour évaluer la significativité de chaque variable par rapport au diagnostic. Corrélation de Pearson et détection de multicolinéarité."
      },
      {
        titre: "Analyse en Composantes Principales (ACP)",
        desc: "Réduction de dimensionnalité pour identifier les axes de variance maximale et visualiser la séparabilité des classes bénigne/maligne."
      },
      {
        titre: "Visualisations statistiques",
        desc: "Graphiques professionnels avec Matplotlib et Seaborn : heatmaps de corrélation, biplots ACP, graphiques de dispersion colorés par diagnostic."
      },
    ],
    architecture: {
      frontend: "Jupyter Notebook — rapport interactif avec visualisations intégrées",
      backend: "Python — pipeline d'analyse de données",
      database: "Dataset UCI Wisconsin Breast Cancer Diagnostic (569 observations, 30 variables)",
      integrations: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, SciPy",
      auth: "N/A",
    },
    mes_contributions: [
      "Nettoyage et préparation du dataset (valeurs manquantes, encodage, normalisation)",
      "Réalisation complète des analyses univariée, bivariée et multivariée",
      "Implémentation et interprétation de l'ACP avec Scikit-learn",
      "Production des visualisations statistiques et rédaction des conclusions analytiques",
      "Identification des 10 variables les plus discriminantes pour la phase de modélisation",
    ],
    difficultes: [
      "Interprétation des résultats de l'ACP et choix du nombre optimal de composantes",
      "Gestion de la multicolinéarité entre variables morphologiques fortement corrélées",
    ],
    gallery: [projetAnalyseDeDonneImg],
  },
  {
    slug: "itcommunity",
    image: ITCommunityIMG,
    cat: "Application Web Collaborative",
    title: "ITCommunity Platform",
    desc: "Application web pour la gestion et le partage de connaissances entre membres d'une communauté IT, avec système de rôles et espace de discussion.",
    techs: ["ASP.NET", "SQL Server", "Next.js"],
    status: "done",
    github: "https://github.com/dihifatima/projet_ITCommunity",
    link: "https://www.linkedin.com/posts/fatima-dihi-b3b759337_itcommunity-aspnet-nextjs-activity-7410441432534097920-6aHl",
    // ── Détails ─────────────────────────────────────────────────
    type: "Projet académique",
    periode: "2023 - 2024",
    entreprise: "Faculté des Sciences et Techniques, Marrakech",
    description_longue: "Application web collaborative développée pour faciliter le partage de connaissances au sein d'une communauté IT. La plateforme permet aux membres de publier du contenu, d'interagir via des discussions et de gérer leurs ressources selon leur rôle.",
    problematique: "Les communautés IT manquent souvent d'un espace unifié pour partager des connaissances techniques, poser des questions et collaborer. Les outils génériques (forums, réseaux sociaux) ne répondent pas aux besoins spécifiques des développeurs.",
    solution: "Développement d'une plateforme web dédiée avec un système de rôles (admin, modérateur, membre), des espaces de publication et de discussion, et une interface moderne avec Next.js.",
    fonctionnalites: [
      {
        titre: "Système de rôles et permissions",
        desc: "Gestion des membres avec différents niveaux d'accès : administrateur, modérateur et membre. Chaque rôle dispose de permissions spécifiques."
      },
      {
        titre: "Espace de partage de connaissances",
        desc: "Publication d'articles, tutoriels et ressources techniques. Système de catégorisation et de recherche."
      },
      {
        titre: "Espace de discussion",
        desc: "Forum de questions/réponses et discussions entre membres de la communauté."
      },
      {
        titre: "Interface moderne",
        desc: "Frontend Next.js avec interface responsive et expérience utilisateur fluide."
      },
    ],
    architecture: {
      frontend: "Next.js — interface web moderne et responsive",
      backend: "ASP.NET Core — API REST",
      database: "SQL Server — base de données relationnelle",
      auth: "Authentification avec gestion des rôles",
      integrations: "N/A",
    },
    mes_contributions: [
      "Développement du frontend avec Next.js",
      "Conception et implémentation du système de rôles et permissions",
      "Développement des fonctionnalités de partage et de discussion",
      "Modélisation de la base de données SQL Server",
    ],
    difficultes: [
      "Conception d'un système de permissions flexible et extensible",
      "Synchronisation entre le frontend Next.js et le backend ASP.NET",
    ],
    gallery: [ITCommunityIMG],
  },
  {
    slug: "app-dermatologique",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80",
    cat: "Application Mobile & IA",
    title: "App Dermatologique Android",
    desc: "Application Android pour le suivi de l'état de la peau avec module IA pour prédiction du type de peau via API REST et Machine Learning.",
    techs: ["Android Java", "Spring Boot", "PostgreSQL", "Retrofit", "Machine Learning"],
    status: "wip",
    github: "#",
    link: "#",
    // ── Détails ─────────────────────────────────────────────────
    type: "Projet personnel",
    periode: "En cours",
    entreprise: "Projet personnel",
    description_longue: "Application Android en cours de développement pour le suivi et l'analyse de l'état de la peau. Elle intègre un module d'intelligence artificielle pour prédire le type de peau et recommander des soins personnalisés.",
    problematique: "Le suivi de l'état de la peau nécessite généralement des consultations médicales fréquentes et coûteuses. Une application mobile pourrait permettre un suivi autonome et personnalisé.",
    solution: "Application Android avec un backend Spring Boot hébergeant un modèle de Machine Learning pour l'analyse d'images de peau. L'utilisateur peut photographier sa peau et recevoir une analyse et des recommandations personnalisées.",
    fonctionnalites: [
      {
        titre: "Analyse IA de la peau",
        desc: "Module de Machine Learning pour prédire le type de peau et détecter des anomalies à partir de photos."
      },
      {
        titre: "Suivi personnalisé",
        desc: "Historique des analyses et suivi de l'évolution de l'état de la peau dans le temps."
      },
      {
        titre: "Recommandations personnalisées",
        desc: "Suggestions de soins adaptées au type de peau et aux problèmes détectés."
      },
    ],
    architecture: {
      frontend: "Android Java — application native Android",
      backend: "Spring Boot — API REST + hébergement du modèle ML",
      database: "PostgreSQL — stockage des données utilisateur et historiques",
      integrations: "Retrofit (HTTP Android), modèle ML (TensorFlow/Scikit-learn)",
      auth: "Authentification utilisateur",
    },
    mes_contributions: [
      "Développement de l'application Android avec Java",
      "Création du backend Spring Boot avec exposition du modèle ML via API REST",
      "Intégration Retrofit pour la communication Android/API",
      "Entraînement et intégration du modèle de prédiction",
    ],
    difficultes: [
      "Projet en cours — optimisation des performances du modèle ML sur données limitées",
    ],
    gallery: [],
  },
];

// ─── CERTIFICATIONS ───────────────────────────────────────────────────────────
// Ajoutez vos certifications ici quand vous les obtenez.
// Structure : { title, issuer, date, description, skills, credentialUrl, logo }
export const CERTIFICATIONS = [
  // Exemple de structure (à remplir avec vos vraies certifications) :
 {
  "title": "Azure DevOps Fundamentals and Agile Project Management",
  "issuer": "coursera.org ",
  "date": "19 novembre 2026",
  "description": "Formation couvrant les fondamentaux du DevOps, de l'Agile et de Scrum pour la planification, la collaboration et la livraison logicielle. Inclut la création de user stories, la gestion des backlogs et la planification des sprints avec Azure Boards, la création de tableaux de bord, requêtes et plans de livraison pour le suivi d'avancement et la détection précoce de la dette technique, ainsi que l'utilisation de wikis, diagrammes Mermaid, l'intégration Teams et les métriques DevOps.",
  "skills": [
    "Azure DevOps",
    "ci cd",
    "Microsoft Azure",
    "Agile Project Management",
    "Software Development Life Cycle",
    "Backlogs",
    "Project Management Life Cycle",
    "DevOps",
    "Devops Tools",
    "Sprint Planning",
    "Agile Methodology",
    "Project Management",
    "User Story"
  ],
  "credentialUrl": "https://coursera.org/share/df3cf2ab360057a673dc6bcc980c9834",
  "logo": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/7c/212ae2ebaf4db49f5fad51aa8d5808/360x360-1-.png?auto=format%2Ccompress&dpr=2"
},
  {
  "title": "Angular Basics: Build Your First Web Application",
  "issuer": "coursera.org ",
  "date": "  12 novembre 2026",
  "description": "Formation pratique sur les fondamentaux d'Angular pour concevoir des applications web modernes à partir de zéro. Couvre l'architecture et les concepts clés du framework, la création de composants réutilisables, l'implémentation du data binding ainsi que la configuration du routage, de la navigation et des routes dynamiques.",
  "skills": [
    "Angular",
    "Web Development",
    "Front-End Development",
    "Component Architecture",
    "Data Binding",
    "Routing & Navigation",
    "TypeScript"
  ],
  "credentialUrl": "https://coursera.org/share/8e30769636a7339c58737e8717264608",
  "logo": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/7c/212ae2ebaf4db49f5fad51aa8d5808/360x360-1-.png?auto=format%2Ccompress&dpr=2&w=80&h=80"
},
  {
  "title": "Hibernate & JPA",
  "issuer": "MLIAEdu Academy ",
  "date": "21 octobre 2026",
  "description": "Cours pratique sur Hibernate et JPA (score global : 81 %), couvrant la configuration d'un projet Maven avec H2, le mapping d'entités et les stratégies d'héritage, les requêtes avancées avec pagination, l'optimistic locking (@Version), l'optimisation des performances (cache de second niveau, résolution du problème N+1 via JOIN FETCH et Entity Graph) et la réalisation d'un projet de réservation de salles.",
  "skills": [
    "Hibernate",
    "JPA",
    "Java",
    "Maven",
    "H2",
    "ORM",
    "Entity Mapping",
    "Inheritance Mapping",
    "JPQL / Criteria Queries",
    "Optimistic Locking",
    "Performance Optimization",
    "Second-Level Cache",
    "N+1 Query Problem"
  ],
  "credentialUrl": "https://mliaedu.toubkalit.com/verify-certificate/28-9da7e035-cc1a-4591-82d1-eda7fc8e3b84-033077",
  "logo": "https://mliaedu.toubkalit.com/"
},
 {
  "title": "Spring - Ecosystem and Core",
  "issuer": "coursera.org ",
  "date": "11 octobre 2026",
  "description": "Cours en ligne proposé par LearnQuest via Coursera sur l'écosystème et les concepts fondamentaux de Spring (durée estimée : environ 11 heures, note obtenue : 89.07 %), couvrant la programmation Java, la configuration XML, l'environnement de développement, le Spring Framework et les tests avec JUnit.",
  "skills": [
    "Java Programming",
    "Extensible Markup Language (XML)",
    "Development Environment",
    "Spring Framework",
    "Java",
    "JUnit"
  ],
  "credentialUrl": "https://coursera.org/share/8e30769636a7339c58737e8717264608",
  "logo": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/91/3ae3bf6d924c9180182672d7302dab/LearnQuest-logo_1200x1200.png?auto=format%2Ccompress&dpr=2&w=80&h=80"
},
  {
    "title": "Introduction to Big Data",
    "issuer": "coursera.org ",
    "date": "Mars 2026",
    "description": "Cours proposé par University of California San Diego via Coursera (durée estimée : environ 18 heures, note obtenue : 95.98 %), couvrant les fondamentaux du Big Data, les systèmes de fichiers, la data science, l'analyse de données, Apache Hadoop et la scalabilité.",
    "skills": [
      "File Systems",
      "Data Science",
      "Data Analysis",
      "Apache Hadoop",
      "Scalability",
      "Big Data"
    ],
    "credentialUrl": "https://coursera.org/share/...",
    "logo": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/7c/212ae2ebaf4db49f5fad51aa8d5808/360x360-1-.png?auto=format%2Ccompress&dpr=2"
  },
  {
    "title": "Introduction to Cloud Computing",
    "issuer": "coursera.org ",
    "date": "Mois AAAA",
    "description": "Cours proposé par IBM via Coursera couvrant la définition et l'historique du cloud computing, les modèles de service (IaaS, PaaS, SaaS) et de déploiement (Public, Private, Hybrid), l'infrastructure cloud, les tendances émergentes (multi-cloud hybride, microservices, serverless, cloud native, DevOps, modernisation applicative) ainsi que les services des principales plateformes cloud (AWS, Microsoft Azure, Google Cloud, IBM Cloud, Alibaba Cloud, etc.).",
    "skills": [
      "Infrastructure As A Service (IaaS)",
      "Cloud Deployment",
      "Public Cloud",
      "DevOps",
      "Cloud Computing Architecture",
      "Cloud Development",
      "Cloud Storage",
      "Application Deployment",
      "Cloud Engineering",
      "Docker (Software)",
      "Cloud Security",
      "Cloud-Native Computing"
    ],
    "credentialUrl": "",
    "logo": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&dpr=2&w=80&h=80"
  },
  {
    "title": "Introduction to Machine Learning",
    "issuer": "coursera.org ",
    "date": "Mois AAAA",
    "description": "Cours proposé par Duke University via Coursera portant sur différents modèles de machine learning appliqués à des problématiques variées (du diagnostic médical à la prédiction de texte) et sur l'implémentation pratique de modèles de data science sur des jeux de données.",
    "skills": [
      "Unsupervised Learning",
      "Logistic Regression",
      "Artificial Neural Networks",
      "Model Optimization",
      "Applied Machine Learning",
      "Medical Imaging",
      "Image Analysis",
      "Computer Vision",
      "Supervised Learning",
      "PyTorch (Machine Learning Library)",
      "Convolutional Neural Networks",
      "Transfer Learning"
    ],
    "credentialUrl": "https://coursera.org/share/...",
    "logo": "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/6d/3cb3e06c357d40ef60000fb3d12d72/dukesquare_blue.png?auto=format%2Ccompress&dpr=2&w=80&h=80"
  }


];
