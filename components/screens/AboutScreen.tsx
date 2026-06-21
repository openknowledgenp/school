"use client";
import { useState } from "react";

export default function AboutScreen() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="animate-fade-up">
      {/* About header */}
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 28px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
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
              margin: "0 0 18px",
              letterSpacing: "-0.025em",
            }}
          >
            A community for open knowledge in Nepal
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.64,
              color: "#454953",
              margin: "0 0 16px",
            }}
          >
            Open Knowledge Foundation Nepal is part of the global Open
            Knowledge network. We believe knowledge, especially data, should be
            open, understandable and useful to everyone.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.64, color: "#5A636B", margin: 0 }}>
            Through free courses, open resources and community projects, we
            help people across Nepal find, understand and act on data with
            confidence.
          </p>
        </div>

        {/* Visual */}
        <div
          style={{
            aspectRatio: "1/1",
            borderRadius: 24,
            background: "linear-gradient(135deg,#00CFA3,#38D8FC,#717FDA)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,.24) 1.5px,transparent 1.5px)",
              backgroundSize: "24px 24px",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              padding: "18px 20px",
              color: "#0B1014",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            ▦ Team / community photo
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(24px,3vw,32px)",
            margin: "0 0 28px",
            letterSpacing: "-0.02em",
          }}
        >
          What we stand for
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}
        >
          {[
            {
              color: "#00CFA3",
              title: "Open by default",
              desc: "Everything we create is freely licensed for anyone to use, adapt and share.",
            },
            {
              color: "#38D8FC",
              title: "Practical & local",
              desc: "We teach with real Nepali data and examples people recognise from daily life.",
            },
            {
              color: "#717FDA",
              title: "Inclusive community",
              desc: "Learning is for everyone, with special focus on women and underserved groups.",
            },
          ].map((v) => (
            <div
              key={v.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 18,
                padding: 26,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: v.color,
                  marginBottom: 16,
                }}
              />
              <h4
                className="font-display"
                style={{ margin: "0 0 8px", fontSize: 18 }}
              >
                {v.title}
              </h4>
              <p style={{ margin: 0, fontSize: 14, color: "#5A636B", lineHeight: 1.55 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}>
        <div
          style={{
            background: "#15161A",
            borderRadius: 28,
            padding: 48,
            color: "#fff",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
          }}
        >
          <div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(24px,3vw,34px)",
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
              }}
            >
              Get in touch
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#C2C6CE",
                margin: "0 0 24px",
                maxWidth: "30em",
              }}
            >
              Want to partner, host a workshop, or volunteer? We'd love to hear
              from you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                  ✉
                </span>
                <span style={{ fontWeight: 600 }}>info@oknp.org</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                  📍
                </span>
                <span style={{ fontWeight: 600 }}>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
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
            <textarea
              placeholder="How can we help?"
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
              style={{
                background: "#38D8FC",
                color: "#06303C",
                padding: 14,
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Send message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
