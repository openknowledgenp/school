"use client";
import Image from "@/components/Img";
import { useState } from "react";
import { type Page } from "@/lib/data";

interface TrainingScreenProps {
  setPage: (p: Page) => void;
}

const FORMATS = [
  {
    icon: "/uploads/training.png",
    color: "#38D8FC",
    bg: "rgba(56,216,252,.12)",
    title: "One-day workshops",
    desc: "Half-day to full-day sessions on a single topic, designed for teams that want focused, practical skills quickly — newsrooms, ward offices, campus groups or NGO staff.",
  },
  {
    icon: "/uploads/board.png",
    color: "#00CFA3",
    bg: "rgba(0,207,163,.12)",
    title: "Multi-day bootcamps",
    desc: "Two to three-day intensive or residential programmes with hands-on practice, group projects and facilitated reflection. The standard format for our PAHICHAN, Gender Data 101 and AI Literacy programmes.",
  },
  {
    icon: "/uploads/connect-community.png",
    color: "#717FDA",
    bg: "rgba(113,127,218,.12)",
    title: "Fellowship & mentorship",
    desc: "A fellow embedded in your organisation for four to twelve weeks — delivering training, co-developing materials and building internal capacity that outlasts the placement.",
  },
  {
    icon: "/uploads/data.png",
    color: "#00CFA3",
    bg: "rgba(0,207,163,.12)",
    title: "Online & hybrid",
    desc: "Webinars, guided self-study and blended programmes delivered in English, Nepali or both — reaching participants in all seven provinces, not just Kathmandu.",
  },
];

const AUDIENCES = [
  {
    icon: "/uploads/press.png",
    color: "#38D8FC",
    bg: "rgba(56,216,252,.1)",
    title: "Journalists & media",
    desc: "Data-driven story skills, fact-checking with the Open Data Editor, right-to-information requests and data visualization for print and broadcast.",
  },
  {
    icon: "/uploads/governance.png",
    color: "#717FDA",
    bg: "rgba(113,127,218,.1)",
    title: "Local government officials",
    desc: "IDMS data management, evidence-based reporting, public budget transparency and basic digital tools for ward and municipal work.",
  },
  {
    icon: "/uploads/mission.png",
    color: "#00CFA3",
    bg: "rgba(0,207,163,.1)",
    title: "Civil society & NGOs",
    desc: "Gender data, AI ethics, online safety, campaign data and digital security for organisations working on rights, health and development.",
  },
  {
    icon: "/uploads/connect-community.png",
    color: "#717FDA",
    bg: "rgba(113,127,218,.1)",
    title: "Youth, women & community groups",
    desc: "Digital literacy for everyday life, financial safety online, open data as a tool for advocacy, and AI literacy from access to agency.",
  },
];

const TOPICS = [
  { label: "Open Data", color: "#00CFA3" },
  { label: "Data Visualization", color: "#00CFA3" },
  { label: "Data for Journalism", color: "#38D8FC" },
  { label: "Gender Data", color: "#717FDA" },
  { label: "AI Literacy", color: "#717FDA" },
  { label: "Digital Security", color: "#38D8FC" },
  { label: "Online Safety", color: "#38D8FC" },
  { label: "OpenStreetMap & Mapping", color: "#00CFA3" },
  { label: "Local Governance & IDMS", color: "#717FDA" },
  { label: "Digital Livelihoods", color: "#38D8FC" },
  { label: "Right to Information", color: "#00CFA3" },
  { label: "Misinformation & Verification", color: "#717FDA" },
];

const HIGHLIGHTS = [
  {
    stat: "126",
    unit: "youths trained",
    programme: "PAHICHAN Youth Data Champions",
    year: "2018",
    place: "6 districts",
    color: "#38D8FC",
  },
  {
    stat: "250+",
    unit: "participants",
    programme: "Women in Data Conference",
    year: "2019",
    place: "Kathmandu · ~95% women",
    color: "#717FDA",
  },
  {
    stat: "8/8",
    unit: "businesses got online",
    programme: "Digital Roadmaps Programme",
    year: "2026",
    place: "Dhangadhi",
    color: "#38D8FC",
  },
  {
    stat: "20",
    unit: "officials & community members",
    programme: "AI Literacy Pilot",
    year: "2026",
    place: "Ward 15, Lalitpur",
    color: "#717FDA",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Before the workshop I was scared of spreadsheets. Now I use open data to back up everything I report.",
    name: "Workshop participant",
    role: "Data-a-thon for Journalists · Lalitpur",
    avatarBg: "linear-gradient(135deg,#00CFA3,#717FDA)",
  },
  {
    quote:
      "The team brought real Nepali data into every session. For the first time, my staff could actually see themselves in the training materials.",
    name: "Municipal official",
    role: "Local Government Capacity Building · Tulsipur, 2024",
    avatarBg: "linear-gradient(135deg,#38D8FC,#00CFA3)",
  },
  {
    quote:
      "The AI literacy session helped us understand where AI is reliable and where it makes things up. That distinction alone changed how we work.",
    name: "Women political leader",
    role: "AI Session for Women Political Leaders · April 2026",
    avatarBg: "linear-gradient(135deg,#717FDA,#38D8FC)",
  },
];

export default function TrainingScreen({ setPage }: TrainingScreenProps) {
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
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 28px 20px",
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
              margin: "0 0 16px",
            }}
          >
            We work with governments, journalists, civil society organisations and
            communities across Nepal to build practical skills in digital tools,
            data literacy and artificial intelligence.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.65,
              color: "#5A636B",
              margin: "0 0 32px",
            }}
          >
            All training is grounded in real Nepali datasets, delivered in
            English, Nepali or both, and openly licensed so your team can reuse
            the materials long after the workshop ends.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
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
            <button
              onClick={() => setPage("courses")}
              style={{
                background: "#fff",
                border: "1.5px solid #15161A",
                color: "#15161A",
                padding: "15px 26px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Browse our courses
            </button>
          </div>
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
      </section>

      {/* ── Stats strip ──────────────────────────────────────────── */}
      <section style={{ background: "#15161A", color: "#fff", marginTop: 56 }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "36px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
        >
          {[
            { num: "2,000+", label: "people directly trained", color: "#38D8FC" },
            { num: "15", label: "districts reached", color: "#00CFA3" },
            { num: "9", label: "years of training delivery", color: "#717FDA" },
            { num: "7", label: "provinces covered", color: "#38D8FC" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(30px,3.8vw,44px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: s.color,
                }}
              >
                {s.num}
              </div>
              <div style={{ marginTop: 8, fontSize: 14, color: "#C2C6CE", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Training formats ─────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 20px" }}>
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {FORMATS.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <div style={{ height: 6, background: f.color }} />
              <div style={{ padding: 24 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: f.bg,
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: 16,
                  }}
                >
                  <Image src={f.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
                </div>
                <h3 className="font-display" style={{ fontSize: 18, margin: "0 0 10px" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: "#5A636B", margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Who we train ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
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
                border: "1px solid #E2E8EB",
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
      </section>

      {/* ── Topics ───────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #E2E8EB",
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
              All sessions can be mixed and matched to fit your organisation's needs. We also design entirely new curricula on request.
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
      </section>

      {/* ── Programme highlights ─────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div style={{ marginBottom: 32 }}>
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
            Track record
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(26px,3.2vw,38px)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Highlights from past programmes
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.programme}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 20,
                padding: 24,
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(36px,4vw,48px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: h.color,
                }}
              >
                {h.stat}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#828893", marginTop: 4 }}>
                {h.unit}
              </div>
              <div
                className="font-display"
                style={{ fontSize: 16, fontWeight: 600, margin: "14px 0 6px", lineHeight: 1.3 }}
              >
                {h.programme}
              </div>
              <div style={{ fontSize: 13, color: "#828893" }}>
                {h.year} · {h.place}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, textAlign: "right" }}>
          <button
            onClick={() => setPage("projects")}
            style={{ fontWeight: 700, color: "#717FDA", fontSize: 15 }}
          >
            See all projects and programmes →
          </button>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: ".08em",
              textTransform: "uppercase",
              color: "#00CFA3",
              marginBottom: 10,
            }}
          >
            From participants
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(26px,3.2vw,38px)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            What past trainees say
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 20,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: 40, lineHeight: 1, color: "#717FDA", fontWeight: 700 }}
              >
                &ldquo;
              </div>
              <p
                className="font-serif"
                style={{
                  fontSize: 17,
                  lineHeight: 1.5,
                  margin: 0,
                  flex: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {t.quote}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: t.avatarBg,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#828893" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Request a training ───────────────────────────────────── */}
      <section
        id="request-training"
        style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}
      >
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
              Tell us who you are, what skills your team needs, and where you are
              based. We will get back to you within three working days.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "✉", text: "info@oknp.org" },
                { icon: "📍", text: "Kathmandu, Nepal · in-person across all 7 provinces" },
                { icon: "🌐", text: "oknp.org/service/training-and-capacity-building" },
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
              <option>Fellowship / embedded training</option>
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
      </section>
    </div>
  );
}
