"use client";
import { useState } from "react";
import { ALL_RESOURCES, RESOURCE_TOPICS } from "@/lib/data";

export default function ResourcesScreen() {
  const [topic, setTopic] = useState("All");
  const filtered =
    topic === "All" ? ALL_RESOURCES : ALL_RESOURCES.filter((r) => r.topic === topic);

  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}
    >
      <div style={{ maxWidth: "42em", marginBottom: 32 }}>
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
          Resources
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(34px,4.5vw,52px)",
            margin: "0 0 18px",
            letterSpacing: "-0.025em",
          }}
        >
          Open resources by topic
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
          Download guides, toolkits, datasets and templates to learn on your
          own or run your own sessions. All free and openly licensed.
        </p>
      </div>

      {/* Topic filter */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 30 }}>
        {RESOURCE_TOPICS.map((t) => {
          const active = topic === t;
          return (
            <button
              key={t}
              onClick={() => setTopic(t)}
              style={{
                padding: "9px 18px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 14,
                border: `1.5px solid ${active ? "#15161A" : "#E2E8EB"}`,
                background: active ? "#15161A" : "#fff",
                color: active ? "#fff" : "#15161A",
                transition: "all .15s",
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Resource cards */}
      <div className="rg-2" style={{ gap: 18 }}>
        {filtered.map((r) => (
          <div
            key={r.title}
            style={{
              background: "#fff",
              border: "1px solid #E2E8EB",
              borderRadius: 18,
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              gap: 20,
            }}
          >
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 9 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span
                  style={{
                    background: r.tc,
                    color: "#0B1014",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 999,
                    letterSpacing: ".03em",
                    textTransform: "uppercase",
                  }}
                >
                  {r.type}
                </span>
                <span style={{ fontSize: 12, color: "#828893", fontWeight: 600 }}>
                  {r.topic}
                </span>
              </div>
              <h3
                className="font-display"
                style={{ fontSize: 18, margin: 0, letterSpacing: "-0.01em" }}
              >
                {r.title}
              </h3>
              <span style={{ fontSize: 13, color: "#828893", fontWeight: 500 }}>
                {r.fmt}
              </span>
            </div>
            <a
              href={`mailto:info@oknp.org?subject=Resource%20request%3A%20${encodeURIComponent(r.title)}`}
              title="Request this resource"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 46,
                height: 46,
                borderRadius: "50%",
                background: "#15161A",
                color: "#fff",
                fontSize: 18,
                flexShrink: 0,
                textDecoration: "none",
              }}
            >
              ↓
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
