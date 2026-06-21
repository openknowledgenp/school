"use client";
import Image from "next/image";
import { COURSES, PROJECTS, STATS, PARTNERS, type Page } from "@/lib/data";

interface HomeScreenProps {
  setPage: (p: Page) => void;
}

export default function HomeScreen({ setPage }: HomeScreenProps) {
  const featured = COURSES.slice(0, 4);
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="animate-fade-up">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "60px 28px 78px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 54,
            alignItems: "center",
          }}
        >
          <div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(40px,5.2vw,64px)",
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                margin: "0 0 22px",
                fontWeight: 700,
              }}
            >
              Digital, data &amp;{" "}
              <span style={{ color: "#717FDA" }}>AI literacy</span> for everyone
              in Nepal
            </h1>
            <p
              style={{
                fontSize: 19,
                lineHeight: 1.62,
                color: "#454953",
                maxWidth: "31em",
                margin: "0 0 32px",
              }}
            >
              Open Knowledge Foundation Nepal builds practical skills to find,
              understand and use data through free courses, hands-on resources
              and community projects across the country.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => setPage("courses")}
                style={{
                  background: "#38D8FC",
                  color: "#06303C",
                  padding: "15px 26px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Explore courses →
              </button>
              <button
                onClick={() => setPage("resources")}
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
                Browse resources
              </button>
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                aspectRatio: "4/3",
                background: "linear-gradient(135deg,#38D8FC 0%,#717FDA 55%,#15161A 100%)",
                boxShadow: "0 34px 64px -32px rgba(20,22,30,.45)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,.28) 1.5px,transparent 1.5px)",
                  backgroundSize: "22px 22px",
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
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: ".06em",
                  textTransform: "uppercase",
                  opacity: 0.92,
                }}
              >
                ▦ Community workshop photo
              </div>
            </div>

            {/* Floating badge 1 */}
            <div
              className="animate-floaty"
              style={{
                position: "absolute",
                top: -18,
                right: -8,
                background: "#fff",
                borderRadius: 16,
                padding: "14px 18px",
                boxShadow: "0 14px 30px -12px rgba(20,22,30,.4)",
              }}
            >
              <div className="font-display" style={{ fontSize: 26, fontWeight: 700 }}>
                2,000+
              </div>
              <div style={{ fontSize: 12, color: "#5A636B", fontWeight: 600 }}>
                people trained
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="animate-floaty-slow"
              style={{
                position: "absolute",
                bottom: -16,
                left: -14,
                background: "#00CFA3",
                borderRadius: 16,
                padding: "14px 18px",
                boxShadow: "0 14px 30px -12px rgba(20,22,30,.4)",
              }}
            >
              <div className="font-display" style={{ fontSize: 26, fontWeight: 700, color: "#0A3D36" }}>
                15
              </div>
              <div style={{ fontSize: 12, color: "#0A3D36", fontWeight: 600 }}>
                districts reached
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────── */}
      <section style={{ background: "#15161A", color: "#fff" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "46px 28px",
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 24,
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "left" }}>
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(34px,4vw,46px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: s.color,
                }}
              >
                {s.num}
              </div>
              <div style={{ marginTop: 8, fontSize: 15, color: "#C2C6CE", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three literacies ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "84px 28px 20px" }}>
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
            Our focus
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(28px,3.6vw,42px)",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            Three literacies, one mission
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "#5A636B", margin: 0 }}>
            Everything we make builds capability across three connected areas,
            so people can work with information confidently and responsibly.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22 }}
        >
          {[
            {
              accent: "#38D8FC",
              iconBg: "rgba(56,216,252,.18)",
              icon: "/assets/icons/tools.png",
              title: "Digital literacy",
              desc: "Use everyday digital tools confidently, protect your accounts and devices, and stay safe and informed online.",
              tags: "Digital Security · Online Safety",
            },
            {
              accent: "#00CFA3",
              iconBg: "rgba(0,207,163,.16)",
              icon: "/assets/icons/data.png",
              title: "Data literacy",
              desc: "Find, read and question data, from everyday spreadsheets to open government datasets, and turn it into clear, honest stories.",
              tags: "Open Data · Data Viz · Spreadsheets",
            },
            {
              accent: "#717FDA",
              iconBg: "rgba(113,127,218,.18)",
              icon: "/assets/icons/knowledge.png",
              title: "AI literacy",
              desc: "Understand what AI can and can't do, spot its risks, and use it critically, ethically and responsibly.",
              tags: "AI Literacy · Misinformation",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <div style={{ height: 8, background: card.accent }} />
              <div style={{ padding: 28 }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 14,
                    background: card.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Image src={card.icon} alt="" width={42} height={42} style={{ objectFit: "contain" }} />
                </div>
                <h3
                  className="font-display"
                  style={{ fontSize: 22, margin: "0 0 10px", letterSpacing: "-0.01em" }}
                >
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.58, color: "#5A636B", margin: "0 0 18px" }}>
                  {card.desc}
                </p>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#717FDA" }}>
                  {card.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured courses ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "56px 28px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 34,
            flexWrap: "wrap",
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
              What we teach
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.6vw,40px)",
                margin: 0,
                letterSpacing: "-0.02em",
                maxWidth: "16em",
              }}
            >
              Skills you can start using right away
            </h2>
          </div>
          <button
            onClick={() => setPage("courses")}
            style={{ fontWeight: 700, color: "#717FDA", fontSize: 16, whiteSpace: "nowrap" }}
          >
            All courses →
          </button>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
        >
          {featured.map((c) => (
            <div
              key={c.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 18,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 230,
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
                  letterSpacing: ".02em",
                }}
              >
                {c.tag}
              </span>
              <h3
                className="font-display"
                style={{ fontSize: 20, margin: 0, letterSpacing: "-0.01em" }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: "#5A636B", margin: 0, flex: 1 }}>
                {c.desc}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 13,
                  color: "#828893",
                  fontWeight: 600,
                }}
              >
                {c.level}
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "#C3CBCE",
                    display: "inline-block",
                  }}
                />
                {c.modules}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured projects ─────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 24,
            marginBottom: 34,
            flexWrap: "wrap",
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
              Key projects
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(28px,3.6vw,40px)", margin: 0, letterSpacing: "-0.02em" }}
            >
              Learning, applied in communities
            </h2>
          </div>
          <button
            onClick={() => setPage("projects")}
            style={{ fontWeight: 700, color: "#717FDA", fontSize: 16, whiteSpace: "nowrap" }}
          >
            All projects →
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {featuredProjects.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  aspectRatio: "16/7",
                  background: `linear-gradient(135deg,${p.color},#15161A)`,
                  position: "relative",
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
                    top: 14,
                    left: 16,
                    background: "rgba(255,255,255,.94)",
                    color: "#15161A",
                    fontSize: 12,
                    fontWeight: 700,
                    padding: "4px 11px",
                    borderRadius: 999,
                  }}
                >
                  {p.year}
                </span>
              </div>
              <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
                <h3
                  className="font-display"
                  style={{ fontSize: 22, margin: 0, letterSpacing: "-0.01em" }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "#5A636B", margin: 0 }}>
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
                        padding: "5px 11px",
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
      </section>

      {/* ── Resources promo ───────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div
          style={{
            background: "#fff",
            border: "1px solid #E2E8EB",
            borderRadius: 24,
            padding: 44,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
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
              Open resources
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(26px,3.2vw,36px)",
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
              }}
            >
              Guides, toolkits &amp; datasets, free to download
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#5A636B",
                margin: "0 0 24px",
                maxWidth: "32em",
              }}
            >
              Everything we make is openly licensed. Use our materials to teach,
              train and run your own data and digital literacy sessions.
            </p>
            <button
              onClick={() => setPage("resources")}
              style={{
                background: "#38D8FC",
                color: "#06303C",
                padding: "14px 24px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Browse all resources →
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "/assets/icons/books.png", label: "Guides", sub: "Step-by-step handbooks" },
              { icon: "/assets/icons/service.png", label: "Toolkits", sub: "Slides & activity packs" },
              { icon: "/assets/icons/create-open-data.png", label: "Datasets", sub: "Ready-to-use samples" },
              { icon: "/assets/icons/policy.png", label: "Templates", sub: "Checklists & cheatsheets" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#F4F7F9",
                  border: "1px solid #E2E8EB",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                <Image src={item.icon} alt="" width={38} height={38} style={{ objectFit: "contain" }} />
                <div style={{ fontWeight: 700, marginTop: 8, fontSize: 15 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#828893" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ──────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 28px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#828893",
            marginBottom: 28,
          }}
        >
          Partners &amp; funders
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 16 }}
        >
          {PARTNERS.map((name) => (
            <div
              key={name}
              style={{
                height: 64,
                border: "1px solid #E2E8EB",
                borderRadius: 12,
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#AEB4BC",
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 88px" }}>
        <div
          style={{
            background: "linear-gradient(120deg,#39406E,#15161A)",
            borderRadius: 28,
            padding: "54px 48px",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 36,
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,.18) 1.5px,transparent 1.5px)",
              backgroundSize: "26px 26px",
              opacity: 0.5,
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
              Trainings &amp; workshops
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.4vw,40px)",
                margin: "0 0 14px",
                letterSpacing: "-0.02em",
              }}
            >
              Contact us for literacy work
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                opacity: 0.92,
                margin: 0,
                maxWidth: "34em",
              }}
            >
              We run tailored digital, data and AI literacy trainings and
              workshops for schools, newsrooms, governments and civil society.
              Tell us what your team or community needs.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <button
              onClick={() => setPage("about")}
              style={{
                background: "#38D8FC",
                color: "#06303C",
                padding: "16px 24px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 16,
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              Get in touch <span>→</span>
            </button>
            <a
              href="mailto:info@oknp.org"
              style={{
                background: "rgba(255,255,255,.16)",
                color: "#fff",
                padding: "16px 24px",
                borderRadius: 14,
                fontWeight: 600,
                fontSize: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 10,
              }}
            >
              info@oknp.org <span>✉</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
