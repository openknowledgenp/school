"use client";
import Image from "@/components/Img";
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
                margin: "0 0 16px",
              }}
            >
              Open Knowledge Foundation Nepal builds practical skills to find,
              understand and use data through free courses, hands-on resources
              and community projects across the country.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.68,
                color: "#5A636B",
                maxWidth: "32em",
                margin: "0 0 32px",
              }}
            >
              For more than a decade, we have helped Nepalis turn raw information
              into clear decisions. We train youth, women, journalists, civil
              society, small enterprises and local government officials to work
              with data confidently, use digital tools safely, and engage with
              artificial intelligence critically. Everything we build is openly
              licensed and rooted in Nepali contexts.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => setPage("courses")}
                style={{
                  background: "#FFDE17",
                  color: "#0F0F0F",
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
              <button
                onClick={() => setPage("projects")}
                style={{
                  background: "#fff",
                  border: "1.5px solid #C3CBCE",
                  color: "#454953",
                  padding: "15px 26px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                See our projects
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
                background: "#EDF2F4",
                boxShadow: "0 34px 64px -32px rgba(20,22,30,.35)",
                aspectRatio: "4/3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src="/uploads/board.png"
                alt="Community workshop"
                fill
                style={{ objectFit: "contain", padding: 24 }}
              />
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
              accent: "#9AEEF7",
              iconBg: "rgba(154,238,247,.14)",
              icon: "/uploads/tools.png",
              title: "Digital literacy",
              desc: "Use everyday digital tools confidently, protect your accounts and devices, and stay safe and informed online.",
              tags: "Digital Security · Online Safety · Practical Productivity Tools",
            },
            {
              accent: "#00CFA3",
              iconBg: "rgba(0,207,163,.12)",
              icon: "/uploads/data.png",
              title: "Data literacy",
              desc: "Find, read and question data, from everyday spreadsheets to open government datasets, and turn it into clear, honest stories.",
              tags: "Open Data · Data Visualization · Spreadsheets",
            },
            {
              accent: "#717FDA",
              iconBg: "rgba(113,127,218,.14)",
              icon: "/uploads/knowledge.png",
              title: "AI literacy",
              desc: "Understand what AI can and cannot do, spot its risks, and use it critically, ethically and responsibly.",
              tags: "Prompting · AI Safety · Verification Habits · Tackling Misinformation",
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
                    width: 80,
                    height: 80,
                    borderRadius: 16,
                    background: card.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image src={card.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
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

      {/* ── Our values ────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 20px" }}>
        <div style={{ textAlign: "center", maxWidth: "38em", margin: "0 auto 36px" }}>
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
            Our values
          </div>
          <h2
            className="font-display"
            style={{ fontSize: "clamp(26px,3.2vw,38px)", margin: 0, letterSpacing: "-0.02em" }}
          >
            How we work
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {[
            {
              color: "#00CFA3",
              bg: "rgba(0,207,163,.1)",
              icon: "/uploads/mission.png",
              title: "Open by default",
              desc: "Every course, slide deck, toolkit and dataset we publish is freely licensed, so any teacher, journalist or community leader can pick it up and run their own session.",
            },
            {
              color: "#9AEEF7",
              bg: "rgba(154,238,247,.1)",
              icon: "/uploads/impact.png",
              title: "Practical and local",
              desc: "We teach with real Nepali datasets, real Nepali stories and real Nepali examples. Materials are increasingly bilingual in Nepali and English.",
            },
            {
              color: "#717FDA",
              bg: "rgba(113,127,218,.1)",
              icon: "/uploads/connect-community.png",
              title: "Inclusive community",
              desc: "We focus on people often left out of data and tech conversations, with sustained, multi-year programmes for women, youth in provinces outside the Kathmandu Valley, persons with disabilities and underserved local governments.",
            },
          ].map((v) => (
            <div
              key={v.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 18,
                padding: 28,
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
              <h4 className="font-display" style={{ margin: "0 0 10px", fontSize: 19 }}>
                {v.title}
              </h4>
              <p style={{ margin: 0, fontSize: 15, color: "#5A636B", lineHeight: 1.6 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured courses ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 20px" }}>
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
                  background: p.color + "18",
                  position: "relative",
                  overflow: "hidden",
                  borderBottom: `3px solid ${p.color}`,
                }}
              >
                <Image
                  src={p.illustration}
                  alt={p.title}
                  fill
                  style={{ objectFit: "contain", padding: "16px 28px" }}
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
                background: "#FFDE17",
                color: "#0F0F0F",
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
              { icon: "/uploads/books.png", label: "Guides", sub: "Step-by-step handbooks" },
              { icon: "/uploads/service.png", label: "Toolkits", sub: "Slides & activity packs" },
              { icon: "/uploads/create-open-data.png", label: "Datasets", sub: "Ready-to-use samples" },
              { icon: "/uploads/governance.png", label: "Templates", sub: "Checklists & cheatsheets" },
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
                <div style={{ width: 44, height: 44, position: "relative" }}>
                  <Image src={item.icon} alt="" fill style={{ objectFit: "contain" }} />
                </div>
                <div style={{ fontWeight: 700, marginTop: 8, fontSize: 15 }}>{item.label}</div>
                <div style={{ fontSize: 13, color: "#828893" }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why this matters now ──────────────────────────────────── */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div
          style={{
            background: "linear-gradient(135deg,rgba(0,207,163,.08),rgba(56,216,252,.06))",
            border: "1px solid #D5F0EA",
            borderRadius: 24,
            padding: "44px 48px",
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
                color: "#00CFA3",
                marginBottom: 12,
              }}
            >
              Why this matters now
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(24px,3vw,34px)",
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              Nepal is digitising fast but unevenly
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.68, color: "#454953", margin: 0 }}>
              Citizens encounter spreadsheets they cannot read, AI chatbots they
              cannot verify, and online platforms that put their savings and
              reputations at risk. Our work closes that gap by giving people the
              skills to question, use and shape the information economy around them.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { stat: "76.1%", text: "of Nepali youths had never heard of open data (2017 OKN baseline survey)" },
              { stat: "8 of 8", text: "micro-enterprises in Dhangadhi got online after our 2026 Digital Roadmaps programme" },
              { stat: "15 districts", text: "reached with in-person training, from Kathmandu to Bardiya and Dadeldhura" },
            ].map((item) => (
              <div
                key={item.stat}
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  border: "1px solid #E2E8EB",
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: 22, fontWeight: 700, color: "#00CFA3", whiteSpace: "nowrap" }}
                >
                  {item.stat}
                </div>
                <div style={{ fontSize: 14, color: "#5A636B", lineHeight: 1.5 }}>{item.text}</div>
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
                color: "#5A636B",
                fontWeight: 700,
                fontSize: 12,
                textAlign: "center",
                padding: "0 10px",
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
                color: "#9AEEF7",
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
              We can deliver in English, Nepali or both. Tell us what your team
              or community needs.
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
                background: "#FFDE17",
                color: "#0F0F0F",
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
