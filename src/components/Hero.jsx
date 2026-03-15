import { useState, useEffect } from "react";
import myPhoto from "../assets/photo2.jpg";

const TYPING_TEXTS = [
  "Ingenieure en Developpement Digital et systemes d'information",
  "Developpeuse Full Stack",
  "Passionnee par le IT",
];

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
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes floatPhoto {
          0%, 100% { transform: translate(-50%, 0px); }
          50%       { transform: translate(-50%, -10px); }
        }
        @keyframes rotateSlow {
          from { transform: translate(-50%, 0) rotate(0deg); }
          to   { transform: translate(-50%, 0) rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.3); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes waveHand {
          0%, 100% { transform: rotate(0deg); }
          25%       { transform: rotate(20deg); }
          75%       { transform: rotate(-10deg); }
        }

        .anim-fade-up-1 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .anim-fade-up-2 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.25s; opacity: 0; }
        .anim-fade-up-3 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.4s; opacity: 0; }
        .anim-fade-up-4 { animation: fadeUp 0.7s ease forwards; animation-delay: 0.55s; opacity: 0; }
        .anim-slide-right { animation: slideRight 0.8s ease forwards; animation-delay: 0.3s; opacity: 0; }

        .float-ring { animation: rotateSlow 18s linear infinite; }
        .float-photo { animation: floatPhoto 4s ease-in-out infinite; }
        .pulse-dot { animation: pulse 2s ease-in-out infinite; }
        .pulse-dot-2 { animation: pulse 2.5s ease-in-out infinite; animation-delay: 0.8s; }
        .float-shape-1 { animation: float 3.5s ease-in-out infinite; }
        .float-shape-2 { animation: float 4.2s ease-in-out infinite; animation-delay: 1s; }

        .cursor-blink {
          display: inline-block;
          width: 2px;
          height: 1.1em;
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
              "linear-gradient(110deg,rgba(10,10,20,.80) 0%,rgba(10,10,20,.65) 55%,rgba(10,10,20,.40) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-[2] w-full max-w-[1200px] mx-auto px-[6%] py-20 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">

          {/* LEFT */}
          <div>

            {/* Bonjour line */}
            <p
              className="anim-fade-up-1 mb-3 "
              style={{  color: "--color-text" }}
            >
              Bonjour, je suis <span className="wave-emoji">👋</span>
            </p>

            {/* Name */}
            <h1
              className="anim-fade-up-2 mb-5 leading-tight font-extrabold"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.2rem)",
                color: "#fff",
                letterSpacing: "-0.02em",
              }}
            >
              Dihi Fatima
            </h1>

            {/* Je suis + typing */}
            <div className="anim-fade-up-3 mb-8">
                <p
              className="anim-fade-up-1 mb-3 "
              style={{  color: "--color-text" }}
            >
            je suis 
            </p>
              <p
              
                style={{
                  color: "#7BBFDE",
                  borderBottom: "2px solid #7BBFDE",
                  display: "inline-block",
                  paddingBottom: "2px",
                  minHeight: "1.8em",
                }}
              >
                {typedText}
                <span className="cursor-blink" />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="anim-fade-up-4 flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 rounded-full px-7 py-3 text-[.88rem] font-bold border-0 cursor-pointer transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "#7BBFDE",
                  color: "#060F20",
                  boxShadow: "0 8px 24px rgba(123,191,222,.35)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#DDEEFF")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#7BBFDE")}
              >
                Contact
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <button
                onClick={() => {}}
                className="flex items-center gap-2 bg-transparent rounded-full px-7 py-3 text-[.88rem] font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-1"
                style={{
                  color: "#fff",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Telecharger mon CV
              </button>
            </div>

          </div>

          {/* RIGHT */}
          <div className="anim-slide-right relative flex justify-center items-end mt-8 md:mt-0" style={{ height: "420px" }}>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "340px",
                height: "340px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
                border: "2px solid rgba(255,255,255,0.12)",
              }}
            />

            <div
              className="float-ring absolute bottom-0 left-1/2"
              style={{
                width: "372px",
                height: "372px",
                borderRadius: "50%",
                border: "2px dashed rgba(123,191,222,0.4)",
                zIndex: 1,
              }}
            />

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: "358px",
                height: "358px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,107,157,0.25)",
                zIndex: 1,
              }}
            />

            <div
              className="float-photo absolute bottom-0 left-1/2 overflow-hidden"
              style={{
                width: "310px",
                height: "310px",
                borderRadius: "160px 160px 50% 50%",
                zIndex: 2,
              }}
            >
              <img
                src={myPhoto}
                alt="Fatima Dihi"
                className="w-90 h-full object-cover object-top"
              />
            </div>

            <div
              className="float-shape-1 absolute top-6 left-6 z-[3]"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "3.5px solid #7BBFDE",
              }}
            />

            <svg className="float-shape-2 absolute top-4 right-14 z-[3]" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <polygon points="13,2 25,24 1,24" stroke="rgba(255,179,207,0.6)" strokeWidth="2" fill="none" />
            </svg>

            <div className="pulse-dot absolute top-14 right-10 z-[3] rounded-full" style={{ width: "9px", height: "9px", background: "#FFB3CF" }} />
            <div className="pulse-dot-2 absolute bottom-20 left-8 z-[3] rounded-full" style={{ width: "9px", height: "9px", background: "#7BBFDE" }} />
            <div className="pulse-dot absolute top-1/2 left-2 z-[3] rounded-full bg-white/35" style={{ width: "7px", height: "7px" }} />
          </div>

        </div>
      </section>
    </>
  );
}