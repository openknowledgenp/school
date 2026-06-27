"use client";
import Image from "@/components/Img";
import { useState } from "react";

const FORMATS = [
  {
    icon: "/uploads/training.png",
    color: "#38D8FC",
    bg: "rgba(56,216,252,.12)",
    title: "One-day workshops",
    desc: "Half-day or full-day sessions on a single topic, built for teams that want focused, practical skills fast. Ideal for newsrooms, ward offices, campus groups and NGO staff.",
  },
  {
    icon: "/uploads/board.png",
    color: "#00CFA3",
    bg: "rgba(0,207,163,.12)",
    title: "Multi-day bootcamps",
    desc: "Two to three-day intensive or residential programmes with hands-on practice, group projects and facilitated reflection. Best when a team wants to go from beginner to confident on a subject.",
  },
  {
    icon: "/uploads/connect-community.png",
    color: "#717FDA",
    bg: "rgba(113,127,218,.12)",
    title: "Online and hybrid sessions",
    desc: "Webinars, guided self-study and blended programmes in English, Nepali or both, reaching participants anywhere in the country.",
  },
];

const AUDIENCES = [
  {
    icon: "/uploads/mission.png",
    color: "#00CFA3",
    bg: "rgba(0,207,163,.1)",
    title: "Civil society and NGOs",
    desc: "Gender data, AI ethics, campaign data, online safety and digital security for organisations working on rights, health and development.",
  },
  {
    icon: "/uploads/governance.png",
    color: "#717FDA",
    bg: "rgba(113,127,218,.1)",
    title: "Local government officials",
    desc: "Data management, evidence-based reporting, open data, public budget transparency and everyday digital tools for ward and municipal work.",
  },
  {
    icon: "/uploads/connect-community.png",
    color: "#38D8FC",
    bg: "rgba(56,216,252,.1)",
    title: "Youth and community groups",
    desc: "Digital literacy for daily life, staying safe with money online, open data for advocacy, and practical, responsible AI use.",
  },
  {
    icon: "/uploads/press.png",
    color: "#717FDA",
    bg: "rgba(113,127,218,.1)",
    title: "Journalists and media",
    desc: "Data-driven storytelling, fact-checking, data analysis, right-to-information requests, and data visualization for print and broadcast.",
  },
];

const TOPICS = [
  { label: "Open Data", color: "#00CFA3" },
  { label: "Data Cleaning", color: "#00CFA3" },
  { label: "Data Analysis", color: "#00CFA3" },
  { label: "Data Visualization", color: "#00CFA3" },
  { label: "Data for Journalism", color: "#38D8FC" },
  { label: "Gender Data", color: "#717FDA" },
  { label: "AI Literacy", color: "#717FDA" },
  { label: "Misinformation and Verification", color: "#717FDA" },
  { label: "Digital Security", color: "#38D8FC" },
  { label: "Online Safety", color: "#38D8FC" },
  { label: "OpenStreetMap and Mapping", color: "#00CFA3" },
  { label: "Right to Information", color: "#00CFA3" },
  { label: "Local Governance", color: "#717FDA" },
  { label: "Digital Livelihoods", color: "#38D8FC" },
];

export default function TrainingScreen() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = () => {
    const subject = encodeURIComponent("Training request — OKN School website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganisation: ${form.org}\nEmail: ${form.email}\nType of training: ${form.type}\n\nDetails:\n${form.message}`
    );
    window.open(`mailto:info@oknp.org?subject=${subject}&body=${body}`);
  };

  return (
    <div className="animate-fade-up">

      {/* ── Hero — white ─────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "68px 0 80px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 28px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#38D8FC",
                marginBottom: 12,
              }}
            >
              Training &amp; Capacity Building
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(34px,4.5vw,52px)",
                margin: "0 0 20px",
                letterSpacing: "-0.025em",
              }}
            >
              Tailor-made training for your team or community
            </h1>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.62,
                color: "#454953",
                margin: "0 0 32px",
              }}
            >
              We work with governments, journalists, civil society organisations
              and communities across Nepal to build practical skills in digital
              tools, data literacy and artificial intelligence. Every session is
              grounded in Nepal&apos;s context, delivered in English, Nepali or
              both, and openly licensed, so your team can reuse the materials
              long after the workshop ends.
            </p>
            <button
              onClick={() => {
                const el = document.getElementById("request-training");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "#38D8FC",
                color: "#06303C",
                padding: "15px 26px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Request a training →
            </button>
          </div>

          <div
            style={{
              aspectRatio: "4/3",
              borderRadius: 24,
              background: "rgba(56,216,252,.08)",
              border: "1px solid #E2E8EB",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/uploads/board.png"
              alt="Training illustration"
              fill
              style={{ objectFit: "contain", padding: 32 }}
            />
          </div>
        </div>
      </section>

      {/* ── Training formats — gray ───────────────────────────────── */}
      <section style={{ padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ textAlign: "center", maxWidth: "40em", margin: "0 auto 40px" }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#717FDA",
                marginBottom: 12,
              }}
            >
              How we deliver
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.6vw,40px)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Training formats
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {FORMATS.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.05)",
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <div style={{ height: 6, background: f.color }} />
                <div style={{ padding: 28 }}>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: f.bg,
                      position: "relative",
                      overflow: "hidden",
                      marginBottom: 18,
                    }}
                  >
                    <Image src={f.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: 19, margin: "0 0 10px" }}>
                    {f.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.62, color: "#5A636B", margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who we train — white ─────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ textAlign: "center", maxWidth: "38em", margin: "0 auto 40px" }}>
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: ".08em",
                textTransform: "uppercase",
                color: "#00CFA3",
                marginBottom: 12,
              }}
            >
              Who we work with
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.6vw,40px)",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              We train across sectors
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
            {AUDIENCES.map((a) => (
              <div
                key={a.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.05)",
                  borderRadius: 18,
                  padding: 24,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: a.bg,
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: 16,
                  }}
                >
                  <Image src={a.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
                </div>
                <h4 className="font-display" style={{ margin: "0 0 10px", fontSize: 18 }}>
                  {a.title}
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#5A636B", lineHeight: 1.58 }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Topics — gray ────────────────────────────────────────── */}
      <section style={{ padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.05)",
              borderRadius: 24,
              padding: "36px 40px",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: "#717FDA",
                  marginBottom: 10,
                }}
              >
                Curriculum
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(22px,2.8vw,32px)",
                  margin: "0 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                Topics we cover
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#5A636B", margin: 0 }}>
                Mix and match any of these to fit your organisation&apos;s needs.
                We also design entirely new curricula on request.
              </p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {TOPICS.map((t) => (
                <span
                  key={t.label}
                  style={{
                    background: t.color + "18",
                    color: t.color === "#38D8FC" ? "#06303C" : t.color,
                    border: `1px solid ${t.color}30`,
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "8px 16px",
                    borderRadius: 999,
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Request a training — gray ─────────────────────────────── */}
      <section
        id="request-training"
        style={{ padding: "80px 0 96px" }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              background: "linear-gradient(120deg,#39406E,#15161A)",
              borderRadius: 28,
              padding: "52px 48px",
              color: "#fff",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,.18) 1.5px,transparent 1.5px)",
                backgroundSize: "26px 26px",
                opacity: 0.4,
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#38D8FC",
                  marginBottom: 12,
                }}
              >
                Get in touch
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(26px,3.2vw,38px)",
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Request a training for your team
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  opacity: 0.9,
                  margin: "0 0 28px",
                  maxWidth: "30em",
                }}
              >
                Tell us who you are, what skills your team needs, and where you
                are based. We will reply within three working days.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "✉", text: "info@oknp.org" },
                  { icon: "📍", text: "Kathmandu, Nepal" },
                  { icon: "🌐", text: "oknp.org" },
                ].map((item) => (
                  <div
                    key={item.icon}
                    style={{ display: "flex", alignItems: "flex-start", gap: 12 }}
                  >
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9,
                        background: "rgba(56,216,252,.2)",
                        color: "#38D8FC",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontSize: 15,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span style={{ fontSize: 14, opacity: 0.9, lineHeight: 1.5, marginTop: 7 }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <input
                placeholder="Organisation"
                value={form.org}
                onChange={(e) => setForm({ ...form, org: e.target.value })}
                style={{
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontSize: 15,
                  outline: "none",
                }}
              />
              <select
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                style={{
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontSize: 15,
                  outline: "none",
                  color: form.type ? "#15161A" : "#828893",
                }}
              >
                <option value="">Type of training</option>
                <option>One-day workshop</option>
                <option>Multi-day bootcamp</option>
                <option>Online / hybrid</option>
                <option>Custom curriculum design</option>
              </select>
              <textarea
                placeholder="Describe what your team needs, how many participants, and your preferred location or dates."
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  border: "none",
                  borderRadius: 12,
                  padding: "14px 18px",
                  fontSize: 15,
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={handleSubmit}
                style={{
                  background: "#38D8FC",
                  color: "#06303C",
                  padding: 16,
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Send training request →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
