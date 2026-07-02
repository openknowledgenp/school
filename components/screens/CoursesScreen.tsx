"use client";
import Image from "@/components/Img";
import { COURSES } from "@/lib/data";

export default function CoursesScreen() {
  return (
    <div
      className="animate-fade-up"
      style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 88px" }}
    >
      {/* Header row */}
      <div
        className="rg-crs-hd"
        style={{
          gap: 48,
          alignItems: "center",
          marginBottom: 44,
        }}
      >
        <div style={{ maxWidth: "42em" }}>
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
            Skills you can start using right away
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
            Our courses are short, modular and built from real Nepali examples.
            They draw on a decade of training rooms in Kathmandu, Pokhara,
            Butwal, Tulsipur, Dang, Birgunj, Janakpurdham, Simta, Lekbeshi,
            Lumbini, Bardiya, Lalitpur and Dhangadhi. Each course is free,
            openly licensed and can be self-taught or facilitated.
          </p>
        </div>
        <div
          className="mobile-hidden"
          style={{
            width: 180,
            height: 180,
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src="/uploads/board.png"
            alt="Learning illustration"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Course grid */}
      <div
        className="rg-3" style={{ gap: 22 }}
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
              position: "relative",
            }}
          >
            <div style={{ height: 8, background: c.status ? "#C3CBCE" : c.color }} />
            <div
              style={{
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                flex: 1,
              }}
            >
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <span
                  style={{
                    background: c.status ? "#EDF2F4" : c.color,
                    color: c.status ? "#828893" : "#0B1014",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "5px 11px",
                    borderRadius: 999,
                  }}
                >
                  {c.tag}
                </span>
                {c.status && (
                  <span
                    style={{
                      background: "#FFF3E0",
                      color: "#B45309",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 9px",
                      borderRadius: 999,
                      letterSpacing: ".03em",
                    }}
                  >
                    {c.status}
                  </span>
                )}
              </div>
              <h3
                className="font-display"
                style={{ fontSize: 21, margin: 0, letterSpacing: "-0.01em", color: c.status ? "#828893" : "#15161A" }}
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
                  paddingTop: 6,
                  borderTop: "1px solid #E7EEF0",
                }}
              >
                <span style={{ fontSize: 13, color: "#828893", fontWeight: 600 }}>
                  {c.level} · {c.modules}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How to use these courses */}
      <div
        className="rg-3"
        style={{
          marginTop: 48,
          background: "#fff",
          border: "1px solid #E2E8EB",
          borderRadius: 24,
          padding: 40,
          gap: 32,
        }}
      >
        {[
          {
            num: "01",
            color: "#00CFA3",
            icon: "/uploads/mission.png",
            title: "Self-study, free",
            desc: "Anyone may work through the modules and resources at their own pace. All content is openly licensed.",
          },
          {
            num: "02",
            color: "#38D8FC",
            icon: "/uploads/training.png",
            title: "Request a facilitated workshop",
            desc: "Schools, newsrooms, civil society groups and local governments can request a tailored in-person workshop from our team.",
          },
          {
            num: "03",
            color: "#717FDA",
            icon: "/uploads/connect-community.png",
            title: "English, Nepali or both",
            desc: "We can deliver sessions in English, Nepali or bilingually, depending on what works best for your community.",
          },
        ].map((item) => (
          <div key={item.num} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                className="font-display"
                style={{ fontSize: 30, color: item.color, fontWeight: 700, lineHeight: 1 }}
              >
                {item.num}
              </div>
              <div style={{ width: 48, height: 48, position: "relative" }}>
                <Image src={item.icon} alt="" fill style={{ objectFit: "contain" }} />
              </div>
            </div>
            <h4 className="font-display" style={{ margin: 0, fontSize: 18 }}>
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
