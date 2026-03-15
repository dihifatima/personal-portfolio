import { useEffect, useRef } from 'react';
import SectionTitle from './SectionTitle';

const SKILL_CATEGORIES = [
  {
    title: "Langages & Core",
    skills: [
      { name: "Java",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "React",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Next.js",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    ],
  },
  {
    title: "Bases de données & DevOps",
    skills: [
      { name: "MySQL",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "Git",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Jira",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ],
  },
];

function SkillPill({ name, icon, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }, index * 40);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(12px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease, background 0.2s, border-color 0.2s',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '7px 14px',
        borderRadius: '999px',
        border: '1px solid rgba(123,191,222,0.2)',
        background: 'rgba(221,238,255,0.05)',
        cursor: 'default',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(123,191,222,0.12)';
        e.currentTarget.style.borderColor = 'rgba(123,191,222,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(221,238,255,0.05)';
        e.currentTarget.style.borderColor = 'rgba(123,191,222,0.2)';
      }}
    >
      <img
        src={icon}
        alt={name}
        style={{
          width: '18px',
          height: '18px',
          objectFit: 'contain',
          filter: 'brightness(1.1)',
        }}
        onError={(e) => { e.target.style.display = 'none'; }}
      />
      <span style={{
        fontSize: '0.78rem',
        fontWeight: '500',
        color: 'rgba(221,238,255,0.8)',
        fontFamily: "'Courier New', monospace",
        letterSpacing: '0.02em',
      }}>
        {name}
      </span>
    </div>
  );
}

function CategoryCard({ category, startIndex }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: 0,
        transform: 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        background: 'rgba(221,238,255,0.04)',
        border: '1px solid rgba(123,191,222,0.15)',
        borderRadius: '16px',
        padding: '28px 24px',
      }}
    >
      {/* Card title */}
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{
          fontSize: '0.85rem',
          fontWeight: '600',
          color: 'rgba(221,238,255,0.7)',
          margin: '0 0 10px',
          letterSpacing: '0.04em',
        }}>
          {category.title}
        </h3>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, rgba(123,191,222,0.4), transparent)',
        }} />
      </div>

      {/* Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {category.skills.map((skill, i) => (
          <SkillPill
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            index={startIndex + i}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  let cumulativeIndex = 0;

  return (
    <section id="skills" style={{ background: '#060F20', padding: '100px 0 96px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 5%' }}>

        <SectionTitle label="COMPETENCES" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {SKILL_CATEGORIES.map((category) => {
            const start = cumulativeIndex;
            cumulativeIndex += category.skills.length;
            return (
              <CategoryCard
                key={category.title}
                category={category}
                startIndex={start}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}