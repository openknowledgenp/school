"use client";
import { PROJECTS } from "@/lib/data";

export default function ProjectsScreen() {
  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}
    >
      <div style={{ maxWidth: "42em", marginBottom: 44 }}>
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
          Projects
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(34px,4.5vw,52px)",
            margin: "0 0 18px",
            letterSpacing: "-0.025em",
          }}
        >
          Our work in the community
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
          From classrooms to women-led businesses, we partner with communities
          to put data and digital skills to work on real problems.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            style={{
              background: "#fff",
              border: "1px solid #E2E8EB",
              borderRadius: 24,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "0.8fr 1.2fr",
            }}
          >
            {/* Gradient image placeholder */}
            <div
              style={{
                background: `linear-gradient(135deg,${p.color},#15161A)`,
                position: "relative",
                minHeight: 200,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.22) 1.4px,transparent 1.4px)",
                  backgroundSize: "20px 20px",
                  opacity: 0.5,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  left: 18,
                  background: "rgba(255,255,255,.94)",
                  color: "#15161A",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: 999,
                }}
              >
                {p.year}
              </span>
            </div>

            {/* Content */}
            <div
              style={{
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                justifyContent: "center",
              }}
            >
              <h3
                className="font-display"
                style={{ fontSize: 25, margin: 0, letterSpacing: "-0.015em" }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.62, color: "#5A636B", margin: 0 }}>
                {p.desc}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#EDF2F4",
                      color: "#5A636B",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "5px 12px",
                      borderRadius: 999,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
