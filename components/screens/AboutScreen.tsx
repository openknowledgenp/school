"use client";
import Image from "@/components/Img";
import { useState } from "react";

export default function AboutScreen() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    const subject = encodeURIComponent("Enquiry from OKN School website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:info@oknp.org?subject=${subject}&body=${body}`);
  };

  return (
    <div className="animate-fade-up">

      {/* ── About us — white ─────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "68px 0 80px" }}>
        <div
          className="rg-2"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 28px",
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
                color: "#717FDA",
                marginBottom: 12,
              }}
            >
              About us
            </div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(32px,4.2vw,48px)",
                margin: "0 0 20px",
                letterSpacing: "-0.025em",
              }}
            >
              A community for open knowledge in Nepal
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.64, color: "#454953", margin: "0 0 16px" }}>
              Open Knowledge Foundation Nepal is the Nepal chapter of the global
              Open Knowledge Network. Since 2013, we have helped people turn raw
              information into clear decisions, training youth, women, journalists,
              civil society, small enterprises and local government officials to
              work with data confidently, use digital tools safely and approach AI
              critically.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.64, color: "#5A636B", margin: 0 }}>
              Everything we build is openly licensed and rooted in local contexts.
              Through free courses, open resources and community projects, we help
              people across the country find, understand and act on data with
              confidence.
            </p>
          </div>

          <div
            className="mobile-hidden"
            style={{
              aspectRatio: "1/1",
              borderRadius: 24,
              background: "rgba(56,216,252,.08)",
              border: "1px solid #E2E8EB",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Image
              src="/uploads/collaboration.png"
              alt="Team collaboration"
              fill
              style={{ objectFit: "contain", padding: 32 }}
            />
          </div>
        </div>
      </section>

      {/* ── What we do — gray ────────────────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
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
            What we do
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(26px,3.2vw,36px)",
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
              maxWidth: "22em",
            }}
          >
            Three connected areas of work
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: "#454953",
              maxWidth: "56em",
              margin: "0 0 40px",
            }}
          >
            Our work spans three connected areas. We run literacy programmes —
            courses, workshops, bootcamps, fellowships and hackdays in data,
            digital and AI literacy. We publish open resources — handbooks,
            curricula, toolkits and datasets, increasingly in both Nepali and
            English. And we maintain open infrastructure — public data platforms
            and tools that put real Nepali data within everyone&apos;s reach.
          </p>
          <div className="rg-3" style={{ gap: 20 }}>
            {[
              {
                color: "#38D8FC",
                bg: "rgba(56,216,252,.1)",
                icon: "/uploads/training.png",
                title: "Literacy programmes",
                desc: "Courses, workshops, bootcamps, fellowships and hackdays covering data, digital tools and artificial intelligence.",
              },
              {
                color: "#00CFA3",
                bg: "rgba(0,207,163,.1)",
                icon: "/uploads/reproducible-research.png",
                title: "Open resources",
                desc: "Handbooks, curricula, toolkits and datasets, openly licensed and increasingly available in both Nepali and English.",
              },
              {
                color: "#717FDA",
                bg: "rgba(113,127,218,.1)",
                icon: "/uploads/governance.png",
                title: "Open infrastructure",
                desc: "Public data platforms and tools that make real Nepali data accessible and usable for everyone.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.05)",
                  borderRadius: 18,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: item.bg,
                    marginBottom: 16,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image src={item.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
                </div>
                <h4 className="font-display" style={{ margin: "0 0 8px", fontSize: 18 }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#5A636B", lineHeight: 1.58 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we stand for — white ────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
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
            What we stand for
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(26px,3.2vw,36px)",
              margin: "0 0 36px",
              letterSpacing: "-0.02em",
            }}
          >
            Our values
          </h2>
          <div className="rg-3" style={{ gap: 20 }}>
            {[
              {
                color: "#00CFA3",
                bg: "rgba(0,207,163,.1)",
                icon: "/uploads/mission.png",
                title: "Open by default",
                desc: "Every course, slide deck, toolkit and dataset we publish is freely licensed, so any teacher, journalist or community leader can pick it up and run their own session.",
              },
              {
                color: "#38D8FC",
                bg: "rgba(56,216,252,.1)",
                icon: "/uploads/impact.png",
                title: "Practical and local",
                desc: "We teach with real datasets, stories and examples, increasingly in both Nepali and English.",
              },
              {
                color: "#717FDA",
                bg: "rgba(113,127,218,.1)",
                icon: "/uploads/connect-community.png",
                title: "Inclusive community",
                desc: "We focus on people often left out of data and tech: women, youth in provinces beyond the major cities, persons with disabilities and underserved local governments.",
              },
            ].map((v) => (
              <div
                key={v.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.05)",
                  borderRadius: 18,
                  padding: 26,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: v.bg,
                    marginBottom: 16,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image src={v.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
                </div>
                <h4 className="font-display" style={{ margin: "0 0 8px", fontSize: 18 }}>
                  {v.title}
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#5A636B", lineHeight: 1.55 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Part of a global network — gray ──────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="rg-2"
            style={{
              background: "linear-gradient(120deg,#39406E,#15161A)",
              borderRadius: 28,
              padding: "52px 56px",
              color: "#fff",
              gap: 56,
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(rgba(255,255,255,.16) 1.4px,transparent 1.4px)",
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
                Part of a global network
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(24px,3vw,34px)",
                  margin: "0 0 16px",
                  letterSpacing: "-0.02em",
                }}
              >
                Connected to the world, rooted in Nepal
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.68, opacity: 0.9, margin: 0 }}>
                We work alongside Open Knowledge Foundation and its chapters
                worldwide, co-hosting global events like Open Data Day, contributing
                to the international Open Data Handbook, and bringing tools like the
                Open Data Editor to communities across Nepal and the wider
                Asia-Pacific region. This learning platform carries that mission
                forward as part of the School of Data, the global community that
                helps people use data effectively, adapted here for Nepal.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {[
                { label: "Open Knowledge Foundation", icon: "🌐" },
                { label: "Open Data Day — global & Nepal", icon: "📅" },
                { label: "Open Data Handbook", icon: "📖" },
                { label: "Open Data Editor", icon: "🔧" },
                { label: "School of Data", icon: "🏫" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: "rgba(255,255,255,.08)",
                    border: "1px solid rgba(255,255,255,.12)",
                    borderRadius: 12,
                    padding: "14px 18px",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, opacity: 0.92 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Get in touch — gray ───────────────────────────────────── */}
      <section style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="rg-2"
            style={{
              background: "#15161A",
              borderRadius: 28,
              padding: "52px 48px",
              color: "#fff",
              gap: 48,
            }}
          >
            <div>
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
                  fontSize: "clamp(24px,3vw,34px)",
                  margin: "0 0 14px",
                  letterSpacing: "-0.02em",
                }}
              >
                Work with us
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "#C2C6CE",
                  margin: "0 0 28px",
                  maxWidth: "30em",
                }}
              >
                Want to partner, host a workshop, or request a tailored training
                for your school, newsroom, local government or civil society
                organisation? We deliver in English, Nepali or both.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { icon: "✉", text: "info@oknp.org" },
                  { icon: "📍", text: "Kathmandu, Nepal" },
                  { icon: "🌐", text: "oknp.org" },
                ].map((item) => (
                  <div key={item.icon} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        width: 38,
                        height: 38,
                        borderRadius: 10,
                        background: "rgba(56,216,252,.18)",
                        color: "#38D8FC",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </span>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
              <input
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{ border: "none", borderRadius: 12, padding: "14px 18px", fontSize: 15, outline: "none" }}
              />
              <input
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ border: "none", borderRadius: 12, padding: "14px 18px", fontSize: 15, outline: "none" }}
              />
              <textarea
                placeholder="How can we help?"
                rows={4}
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
                  padding: 14,
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Send message →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
