"use client";
import { TIMELINE_YEARS } from "@/lib/data";

const TAG_COLORS: Record<string, string> = {
  Youth: "#9AEEF7",
  "Open Data": "#00CFA3",
  Training: "#00CFA3",
  Journalism: "#9AEEF7",
  "Data Viz": "#00CFA3",
  Gender: "#717FDA",
  Data: "#00CFA3",
  Environment: "#00CFA3",
  Community: "#9AEEF7",
  Fellowship: "#717FDA",
  OpenStreetMap: "#00CFA3",
  "Local Government": "#717FDA",
  Governance: "#717FDA",
  AI: "#717FDA",
  Digital: "#9AEEF7",
  Livelihoods: "#9AEEF7",
};

function tagColor(t: string) {
  return TAG_COLORS[t] ?? "#828893";
}

export default function ProjectsScreen() {
  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}
    >
      {/* Page header */}
      <div style={{ maxWidth: "44em", marginBottom: 56 }}>
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
          Learning, applied in communities
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
          A year-by-year showcase of literacy work led or co-led by Open Knowledge
          Foundation Nepal between 2018 and 2026. Each entry lists what we ran,
          what we produced and who supported it.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {TIMELINE_YEARS.map((yearGroup) => (
          <div key={yearGroup.year}>
            {/* Year heading */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 28,
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(42px,5vw,60px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: yearGroup.color,
                  letterSpacing: "-0.03em",
                  flexShrink: 0,
                }}
              >
                {yearGroup.year}
              </div>
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background: yearGroup.color,
                  opacity: 0.3,
                  borderRadius: 2,
                }}
              />
            </div>

            {/* Events for this year */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingLeft: 4 }}>
              {yearGroup.events.map((event) => (
                <div
                  key={event.title}
                  style={{
                    background: "#fff",
                    border: "1px solid #E2E8EB",
                    borderLeft: `4px solid ${yearGroup.color}`,
                    borderRadius: "0 16px 16px 0",
                    padding: "24px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "clamp(17px,2vw,21px)",
                        margin: 0,
                        letterSpacing: "-0.01em",
                        flex: 1,
                      }}
                    >
                      {event.title}
                    </h3>
                    {event.highlight && (
                      <span
                        style={{
                          background: yearGroup.color + "20",
                          color: yearGroup.color === "#9AEEF7" ? "#06303C" : yearGroup.color,
                          fontSize: 12,
                          fontWeight: 700,
                          padding: "6px 13px",
                          borderRadius: 999,
                          whiteSpace: "nowrap",
                          border: `1px solid ${yearGroup.color}40`,
                        }}
                      >
                        {event.highlight}
                      </span>
                    )}
                  </div>

                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: "#5A636B",
                      margin: 0,
                    }}
                  >
                    {event.desc}
                  </p>

                  {event.tags.length > 0 && (
                    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
                      {event.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            background: tagColor(t) + "18",
                            color: tagColor(t) === "#9AEEF7" ? "#06303C" : tagColor(t),
                            fontSize: 12,
                            fontWeight: 600,
                            padding: "4px 11px",
                            borderRadius: 999,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
