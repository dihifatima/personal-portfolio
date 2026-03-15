import { useState, useEffect, useRef } from "react";

export default function SectionTitle({ label }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone]           = useState(false);
  const [visible, setVisible]     = useState(false);
  const ref                       = useRef(null);

  // Observe quand le titre entre dans le viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          // Reset quand on quitte la section — relance au prochain scroll
          setVisible(false);
          setDisplayed("");
          setDone(false);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Lance le typewriter quand visible
  useEffect(() => {
    if (!visible) return;
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(label.slice(0, i));
      if (i >= label.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 70);
    return () => clearInterval(interval);
  }, [visible, label]);

  return (
    <div ref={ref} style={{ textAlign: "center", marginBottom: "60px" }}>

      <div style={{
        display: "inline-flex",
        alignItems: "center",
        fontSize: "clamp(1.4rem, 3vw, 2rem)",
        fontWeight: "900",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
      }}>
        <span style={{ color: "var(--color-pink-clair)" }}>&lt;</span>
        <span style={{ color: "var(--color-Rose-vi)" }}>{displayed}</span>
        <span style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          background: "#7BBFDE",
          marginLeft: "3px",
          verticalAlign: "middle",
          animation: done ? "none" : "blink-cur 0.7s step-end infinite",
          opacity: done ? 0 : 1,
          transition: "opacity 0.4s 0.6s",
        }} />
        <span style={{ color: "var(--color-pink-clair)" }}>/&gt;</span>
      </div>

      <style>{`
        @keyframes blink-cur {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

      <div style={{
        width: "48px", height: "3px",
        background: "linear-gradient(90deg, #7BBFDE, #FF6B9D)",
        borderRadius: "2px",
        margin: "12px auto 0",
      }} />

    </div>
  );
}