"use client";
import { useState } from "react";
import { TIMELINE_YEARS } from "@/lib/data";

const TAG_COLORS: Record<string, string> = {
  Youth: "#38D8FC",
  "Open Data": "#00CFA3",
  Training: "#00CFA3",
  Journalism: "#38D8FC",
  "Data Viz": "#00CFA3",
  Gender: "#717FDA",
  Data: "#00CFA3",
  Environment: "#00CFA3",
  Community: "#38D8FC",
  Fellowship: "#717FDA",
  OpenStreetMap: "#00CFA3",
  "Local Government": "#717FDA",
  Governance: "#717FDA",
  AI: "#717FDA",
  Digital: "#38D8FC",
  Livelihoods: "#38D8FC",
};

function tagColor(t: string) {
  return TAG_COLORS[t] ?? "#828893";
}

function tagText(color: string) {
  return color === "#38D8FC" ? "#06303C" : color;
}

const ALL_FILTER_TAGS = [
  "All",
  "Training",
  "Open Data",
  "Gender",
  "AI",
  "Digital",
  "Journalism",
  "Local Government",
  "Youth",
  "Community",
  "Data",
  "Fellowship",
  "Governance",
];

const SUMMARY_STATS = [
  { num: "40+", label: "programmes & events", color: "#38D8FC" },
  { num: "9", label: "years of work (2018–2026)", color: "#717FDA" },
  { num: "15", label: "districts reached", color: "#00CFA3" },
  { num: "2,000+", label: "people trained", color: "#38D8FC" },
];

export default function ProjectsScreen() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = TIMELINE_YEARS.map((yr) => ({
    ...yr,
    events:
      activeTag === "All"
        ? yr.events
        : yr.events.filter((e) => e.tags.includes(activeTag)),
  })).filter((yr) => yr.events.length > 0).slice().reverse();

  const totalVisible = filtered.reduce((sum, yr) => sum + yr.events.length, 0);

  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}
    >
      {/* Page header */}
      <div style={{ maxWidth: "44em", marginBottom: 40 }}>
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
          Our Work
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(34px,4.5vw,52px)",
            margin: "0 0 18px",
            letterSpacing: "-0.025em",
          }}
        >
          Nine years of digital, data and AI literacy
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
          From a single open-data awareness survey in 2017 to a nationwide programme
          reaching communities in all seven provinces — a year-by-year record of
          what we ran, who we reached, and what changed.
        </p>
      </div>

      {/* Summary stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
          marginBottom: 44,
        }}
      >
        {SUMMARY_STATS.map((s) => (
          <div
            key={s.label}
            style={{
              background: "#fff",
              border: "1px solid #E2E8EB",
              borderRadius: 16,
              padding: "20px 22px",
            }}
          >
            <div
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.2vw,38px)",
                fontWeight: 700,
                lineHeight: 1,
                color: s.color,
              }}
            >
              {s.num}
            </div>
            <div style={{ marginTop: 8, fontSize: 13, color: "#5A636B", fontWeight: 600 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Where we work */}
      <div
        style={{
          background: "linear-gradient(135deg,#444A82,#15161A)",
          borderRadius: 24,
          padding: "36px 40px",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          marginBottom: 44,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,.2) 1.4px,transparent 1.4px)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative" }}>
          <h3 className="font-display" style={{ fontSize: 22, margin: "0 0 8px" }}>
            Where we work
          </h3>
          <p style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.55, margin: "0 0 20px", maxWidth: "44em" }}>
            In-person trainings and workshops across 15 districts spanning all
            seven provinces, from Kathmandu to Dadeldhura and Bardiya.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              "Kathmandu", "Lalitpur", "Bhaktapur", "Kaski (Pokhara)",
              "Rupandehi (Butwal)", "Dang", "Parsa (Birgunj)",
              "Dhanusha (Janakpurdham)", "Sunsari (Itahari)", "Bhojpur",
              "Banke (Nepalgunj)", "Kanchanpur (Dhangadhi)", "Dadeldhura",
              "Surkhet (Simta)", "Bardiya",
            ].map((place) => (
              <span
                key={place}
                style={{
                  background: "rgba(255,255,255,.14)",
                  borderRadius: 999,
                  padding: "5px 12px",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tag filter bar */}
      <div style={{ marginBottom: 44 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#828893",
            marginBottom: 12,
          }}
        >
          Filter by topic
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {ALL_FILTER_TAGS.map((tag) => {
            const active = tag === activeTag;
            const color = tag === "All" ? "#717FDA" : tagColor(tag);
            return (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 700,
                  border: `1.5px solid ${active ? color : "#E2E8EB"}`,
                  background: active ? color : "#fff",
                  color: active
                    ? color === "#38D8FC"
                      ? "#06303C"
                      : "#fff"
                    : "#5A636B",
                  transition: "all 0.15s",
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
        {activeTag !== "All" && (
          <div style={{ marginTop: 12, fontSize: 14, color: "#828893" }}>
            Showing{" "}
            <strong style={{ color: "#15161A" }}>{totalVisible}</strong>{" "}
            {totalVisible === 1 ? "programme" : "programmes"} tagged{" "}
            <strong style={{ color: tagText(tagColor(activeTag)) }}>{activeTag}</strong>
            {" · "}
            <button
              onClick={() => setActiveTag("All")}
              style={{ color: "#717FDA", fontWeight: 700, fontSize: 14 }}
            >
              Clear filter
            </button>
          </div>
        )}
      </div>

      {/* Timeline */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "64px 28px",
            color: "#828893",
            fontSize: 16,
          }}
        >
          No programmes found for &ldquo;{activeTag}&rdquo;.{" "}
          <button
            onClick={() => setActiveTag("All")}
            style={{ color: "#717FDA", fontWeight: 700 }}
          >
            Show all
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {filtered.map((yearGroup) => (
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
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#828893",
                    flexShrink: 0,
                  }}
                >
                  {yearGroup.events.length}{" "}
                  {yearGroup.events.length === 1 ? "programme" : "programmes"}
                </div>
              </div>

              {/* Events */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  paddingLeft: 4,
                }}
              >
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
                            color:
                              yearGroup.color === "#38D8FC" || yearGroup.color === "#9AEEF7"
                                ? "#06303C"
                                : yearGroup.color,
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
                          <button
                            key={t}
                            onClick={() => setActiveTag(t)}
                            style={{
                              background: tagColor(t) + "18",
                              color: tagText(tagColor(t)),
                              fontSize: 12,
                              fontWeight: 600,
                              padding: "4px 11px",
                              borderRadius: 999,
                              border:
                                activeTag === t
                                  ? `1.5px solid ${tagColor(t)}`
                                  : "1.5px solid transparent",
                            }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
