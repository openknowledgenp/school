"use client";
import { COURSES } from "@/lib/data";

export default function CoursesScreen() {
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
          Courses
        </div>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(34px,4.5vw,52px)",
            margin: "0 0 18px",
            letterSpacing: "-0.025em",
          }}
        >
          Learn digital, data &amp; AI skills
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
          Short, practical courses built for journalists, students, civil
          society and curious citizens. No prior experience needed, just bring
          your questions.
        </p>
      </div>

      {/* Course grid */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}
      >
        {COURSES.map((c) => (
          <div
            key={c.title}
            style={{
              background: "#fff",
              border: "1px solid #E2E8EB",
              borderRadius: 20,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: 8, background: c.color }} />
            <div
              style={{
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                flex: 1,
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  background: c.color,
                  color: "#0B1014",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "5px 11px",
                  borderRadius: 999,
                }}
              >
                {c.tag}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: 21, margin: 0, letterSpacing: "-0.01em" }}
              >
                {c.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.58,
                  color: "#5A636B",
                  margin: 0,
                  flex: 1,
                }}
              >
                {c.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 6,
                  borderTop: "1px solid #E7EEF0",
                }}
              >
                <span style={{ fontSize: 13, color: "#828893", fontWeight: 600 }}>
                  {c.level} · {c.modules}
                </span>
                <span style={{ fontWeight: 700, color: "#717FDA", fontSize: 14 }}>
                  Start →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div
        style={{
          marginTop: 48,
          background: "#fff",
          border: "1px solid #E2E8EB",
          borderRadius: 24,
          padding: 40,
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 32,
        }}
      >
        {[
          {
            num: "01",
            color: "#00CFA3",
            title: "Self-paced & free",
            desc: "Work through bite-sized modules whenever it suits you, all openly licensed.",
          },
          {
            num: "02",
            color: "#38D8FC",
            title: "Hands-on practice",
            desc: "Every course uses real Nepali examples and exercises you can try yourself.",
          },
          {
            num: "03",
            color: "#717FDA",
            title: "Workshops & support",
            desc: "Pair online learning with our in-person trainings across the country.",
          },
        ].map((item) => (
          <div key={item.num}>
            <div
              className="font-display"
              style={{ fontSize: 30, color: item.color, fontWeight: 700 }}
            >
              {item.num}
            </div>
            <h4
              className="font-display"
              style={{ margin: "10px 0 6px", fontSize: 18 }}
            >
              {item.title}
            </h4>
            <p style={{ margin: 0, fontSize: 14, color: "#5A636B", lineHeight: 1.55 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
