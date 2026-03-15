import { useState } from "react";
import SectionTitle from "./SectionTitle";

const EMAIL    = "dihifatima08@gmail.com";
const PHONE    = "+212609984665";
const WHATSAPP = `https://wa.me/212609984665?text=${encodeURIComponent("Bonjour Fatima, je vous contacte depuis votre portfolio.")}`;

const CONTACT_INFO = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7BBFDE" strokeWidth="1.8">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Adresse",
    value: "Marrakech, Maroc ",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7BBFDE" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "Téléphone",
    value: PHONE,
    href: `tel:${PHONE}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7BBFDE" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  }
 
];

export default function Contact() {
  const [form, setForm]   = useState({ prenom: "", nom: "", email: "", phone: "", msg: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState(false);

  const handleSend = () => {
    if (!form.prenom || !form.email || !form.msg) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    setSent(true);
    setForm({ prenom: "", nom: "", email: "", phone: "", msg: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <style>{`
        .c-input {
          width: 100%;
          background: rgba(123,191,222,0.06);
          border: 1.5px solid rgba(123,191,222,0.15);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 0.85rem;
          color: #DDEEFF;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .c-input::placeholder { color: rgba(221,238,255,0.28); }
        .c-input:focus {
          border-color: #7BBFDE;
          background: rgba(123,191,222,0.12);
        }

        .submit-btn {
          background: #FF6B9D;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 13px 40px;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s, color 0.2s;
        }
        .submit-btn:hover  { background: #FFB3CF; color: #060F20; transform: translateY(-2px); }
        .submit-btn.sent   { background: #22c55e; }
        .submit-btn.error  { background: #ef4444; }

        .info-card-contact {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: rgba(123,191,222,0.05);
          border: 1px solid rgba(123,191,222,0.12);
          border-radius: 12px;
          transition: border-color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .info-card-contact:hover {
          border-color: rgba(123,191,222,0.35);
          background: rgba(123,191,222,0.1);
        }

        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(37,211,102,0.12);
          border: 1.5px solid rgba(37,211,102,0.3);
          color: #25d366;
          font-size: 0.83rem;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          cursor: pointer;
        }
        .whatsapp-btn:hover {
          background: rgba(37,211,102,0.22);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-2col { grid-template-columns: 1fr !important; }
          .form-2col    { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section id="contact" style={{ background: "#060F20", padding: "100px 0 96px" }}>
        <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "0 6%" }}>

          <SectionTitle label="CONTACT" />

          <div
            className="contact-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: "64px",
              alignItems: "start",
            }}
          >

            {/* ── LEFT — Formulaire ── */}
            <div>
              {/* Intro */}
              <p style={{
                fontSize: "0.87rem",
                color: "rgba(221,238,255,0.5)",
                lineHeight: "1.8",
                marginBottom: "28px",
              }}>
                Une question, une opportunité de stage ou juste envie d'échanger ?
                Remplissez le formulaire et je vous répondrai rapidement.
              </p>

              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <input
                  className="c-input"
                  type="text"
                  placeholder="Prénom *"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                />
                <input
                  className="c-input"
                  type="text"
                  placeholder="Nom"
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                />
              </div>

              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <input
                  className="c-input"
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  className="c-input"
                  type="tel"
                  placeholder="Téléphone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <textarea
                className="c-input"
                rows={6}
                placeholder="Votre message *"
                value={form.msg}
                onChange={(e) => setForm({ ...form, msg: e.target.value })}
                style={{ resize: "none", marginBottom: "22px", display: "block" }}
              />

              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <button
                  onClick={handleSend}
                  className={`submit-btn ${sent ? "sent" : ""} ${error ? "error" : ""}`}
                >
                  {sent  ? "✓ Envoyé !" :
                   error ? "Champs requis" :
                   "Envoyer"}
                </button>

                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            {/* ── RIGHT — Coordonnées ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", paddingTop: "60px" }}>

              {CONTACT_INFO.map(({ icon, label, value, href }) => {
                const content = (
                  <>
                    <div style={{ flexShrink: 0 }}>{icon}</div>
                    <div>
                      <div style={{
                        fontSize: "0.67rem",
                        fontWeight: "700",
                        color: "#7BBFDE",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        marginBottom: "2px",
                      }}>
                        {label}
                      </div>
                      <div style={{ fontSize: "0.83rem", color: "rgba(221,238,255,0.7)", fontWeight: "500" }}>
                        {value}
                      </div>
                    </div>
                  </>
                );

                return href ? (
                  <a key={label} href={href} className="info-card-contact">{content}</a>
                ) : (
                  <div key={label} className="info-card-contact">{content}</div>
                );
              })}

              {/* Dispo badge */}
              <div style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 16px",
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "10px",
              }}>
                <div style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 0 3px rgba(34,197,94,0.2)",
                }} />
                <span style={{ fontSize: "0.8rem", color: "#22c55e", fontWeight: "600" }}>
                  Disponible pour un stage — Été 2025
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}