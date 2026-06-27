"use client";
import Image from "@/components/Img";
import { COURSES, PROJECTS, STATS, PARTNERS, type Page } from "@/lib/data";

interface HomeScreenProps {
  setPage: (p: Page) => void;
}

const CARD: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.06)",
  boxShadow: "0 1px 2px rgba(0,0,0,0.04),0 4px 16px rgba(0,0,0,0.05)",
};

export default function HomeScreen({ setPage }: HomeScreenProps) {
  const featured = COURSES.slice(0, 4);
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="animate-fade-up">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          className="rg-hero"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "68px 28px 84px",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(34px,4vw,58px)",
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                margin: "0 0 20px",
                fontWeight: 800,
              }}
            >
              Digital, data and{" "}
              <span style={{ color: "#717FDA" }}>AI literacy</span>{" "}
              for everyone in Nepal
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.65,
                color: "#454953",
                maxWidth: "30em",
                margin: "0 0 28px",
              }}
            >
              Since 2013, Open Knowledge Foundation Nepal has trained youth,
              women, journalists, civil society and government staff to work
              with data confidently, use digital tools safely, and approach AI
              critically.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => setPage("training")}
                style={{
                  background: "#38D8FC",
                  color: "#06303C",
                  padding: "15px 28px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                Request a training →
              </button>
              <button
                onClick={() => setPage("resources")}
                style={{
                  background: "transparent",
                  border: "1.5px solid #15161A",
                  color: "#15161A",
                  padding: "15px 28px",
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
          <div className="mobile-hidden" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 24px 56px -20px rgba(20,22,30,.4)",
                aspectRatio: "3/2",
              }}
            >
              <Image
                src="/uploads/hero-training.jpg"
                alt="Data for Journalism training session"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating badge 1 */}
            <div
              className="animate-floaty"
              style={{
                position: "absolute",
                top: -20,
                right: -10,
                background: "#fff",
                borderRadius: 18,
                padding: "14px 20px",
                boxShadow: "0 8px 32px -8px rgba(20,22,30,.28)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, color: "#38D8FC" }}
              >
                2,000+
              </div>
              <div style={{ fontSize: 12, color: "#5A636B", fontWeight: 600, marginTop: 3 }}>
                people trained
              </div>
            </div>

            {/* Floating badge 2 */}
            <div
              className="animate-floaty-slow"
              style={{
                position: "absolute",
                bottom: -18,
                left: -16,
                background: "#00CFA3",
                borderRadius: 18,
                padding: "14px 20px",
                boxShadow: "0 8px 32px -8px rgba(0,100,70,.35)",
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, color: "#fff" }}
              >
                15
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 600, marginTop: 3 }}>
                districts reached
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────── */}
      <section style={{ background: "#00CFA3" }}>
        <div
          className="rg-4"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "48px 28px",
            gap: 24,
          }}
        >
          {STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "left" }}>
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(36px,4.2vw,50px)",
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 14,
                  color: "rgba(4,50,42,0.72)",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Three literacies ──────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "88px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ textAlign: "center", maxWidth: "40em", margin: "0 auto 44px" }}>
            <div className="section-label" style={{ color: "#717FDA", marginBottom: 14, justifyContent: "center" }}>
              Our focus
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(28px,3.6vw,44px)",
                margin: "0 0 14px",
                letterSpacing: "-0.025em",
                fontWeight: 700,
              }}
            >
              Three literacies, one mission
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "#5A636B", margin: 0 }}>
              Our work spans three connected skills, each one people can put to use right away.
            </p>
          </div>

          <div className="rg-3" style={{ gap: 24 }}>
            {[
              {
                accent: "#38D8FC",
                iconBg: "rgba(56,216,252,.12)",
                icon: "/uploads/tools.png",
                title: "Digital literacy",
                desc: "Use everyday digital tools with confidence, protect your accounts and devices, and stay safe online.",
                tags: "Digital Security · Online Safety · Productivity Tools",
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
                iconBg: "rgba(113,127,218,.12)",
                icon: "/uploads/knowledge.png",
                title: "AI literacy",
                desc: "Understand what AI can and cannot do, spot its risks, and use it critically and ethically.",
                tags: "Prompting · AI Safety · Verification · Tackling Misinformation",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{ ...CARD, borderRadius: 22, overflow: "hidden" }}
              >
                <div style={{ height: 5, background: card.accent }} />
                <div style={{ padding: 30 }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 18,
                      background: card.iconBg,
                      marginBottom: 20,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image src={card.icon} alt="" fill style={{ objectFit: "contain", padding: 10 }} />
                  </div>
                  <h3
                    className="font-display"
                    style={{ fontSize: 22, margin: "0 0 10px", letterSpacing: "-0.015em", fontWeight: 700 }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.62, color: "#5A636B", margin: "0 0 18px" }}>
                    {card.desc}
                  </p>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: card.accent === "#38D8FC" ? "#06303C" : card.accent,
                      background: card.iconBg,
                      padding: "5px 11px",
                      borderRadius: 999,
                      display: "inline-block",
                    }}
                  >
                    {card.tags}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured courses ──────────────────────────────────────── */}
      <section style={{ padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
              marginBottom: 36,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="section-label" style={{ color: "#717FDA", marginBottom: 12 }}>
                What we teach
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px,3.6vw,42px)",
                  margin: "0 0 10px",
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                  maxWidth: "16em",
                }}
              >
                Skills you can start using right away
              </h2>
              <p style={{ fontSize: 15, color: "#5A636B", margin: 0, lineHeight: 1.6 }}>
                Short, practical courses built from a decade of training rooms across Nepal.
              </p>
            </div>
            <button
              onClick={() => setPage("courses")}
              style={{ fontWeight: 700, color: "#717FDA", fontSize: 15, whiteSpace: "nowrap" }}
            >
              All courses →
            </button>
          </div>

          <div className="rg-4" style={{ gap: 20 }}>
            {featured.map((c) => (
              <div
                key={c.title}
                style={{
                  ...CARD,
                  borderRadius: 20,
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
                    color: c.color === "#38D8FC" ? "#06303C" : "#fff",
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
                  style={{ fontSize: 19, margin: 0, letterSpacing: "-0.015em", fontWeight: 700 }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.58, color: "#5A636B", margin: 0, flex: 1 }}>
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
                    paddingTop: 6,
                    borderTop: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  {c.level}
                  <span
                    style={{
                      width: 3,
                      height: 3,
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
        </div>
      </section>

      {/* ── Our values ────────────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ textAlign: "center", maxWidth: "38em", margin: "0 auto 40px" }}>
            <div className="section-label" style={{ color: "#00CFA3", marginBottom: 14, justifyContent: "center" }}>
              Our values
            </div>
            <h2
              className="font-display"
              style={{ fontSize: "clamp(26px,3.2vw,40px)", margin: 0, letterSpacing: "-0.025em", fontWeight: 700 }}
            >
              How we work
            </h2>
          </div>
          <div className="rg-3" style={{ gap: 22 }}>
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
                desc: "We teach with real Nepali datasets, real Nepali stories and real Nepali examples. Materials are increasingly bilingual in Nepali and English.",
              },
              {
                color: "#717FDA",
                bg: "rgba(113,127,218,.1)",
                icon: "/uploads/connect-community.png",
                title: "Inclusive community",
                desc: "We focus on people often left out of data and tech conversations — women, youth outside the Valley, persons with disabilities and underserved local governments.",
              },
            ].map((v) => (
              <div key={v.title} style={{ ...CARD, borderRadius: 20, padding: 28 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: v.bg,
                    marginBottom: 18,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image src={v.icon} alt="" fill style={{ objectFit: "contain", padding: 9 }} />
                </div>
                <h4 className="font-display" style={{ margin: "0 0 10px", fontSize: 19, fontWeight: 700 }}>
                  {v.title}
                </h4>
                <p style={{ margin: 0, fontSize: 15, color: "#5A636B", lineHeight: 1.65 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured projects ─────────────────────────────────────── */}
      <section style={{ padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: 24,
              marginBottom: 36,
              flexWrap: "wrap",
            }}
          >
            <div>
              <div className="section-label" style={{ color: "#717FDA", marginBottom: 12 }}>
                Key projects
              </div>
              <h2
                className="font-display"
                style={{ fontSize: "clamp(28px,3.6vw,42px)", margin: 0, letterSpacing: "-0.025em", fontWeight: 700 }}
              >
                Learning, applied in communities
              </h2>
            </div>
            <button
              onClick={() => setPage("projects")}
              style={{ fontWeight: 700, color: "#717FDA", fontSize: 15, whiteSpace: "nowrap" }}
            >
              All projects →
            </button>
          </div>

          <div className="rg-2" style={{ gap: 24 }}>
            {featuredProjects.map((p) => (
              <div
                key={p.title}
                style={{
                  ...CARD,
                  borderRadius: 22,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    aspectRatio: "16/7",
                    position: "relative",
                    overflow: "hidden",
                    borderBottom: `3px solid ${p.color}`,
                  }}
                >
                  <Image
                    src={p.illustration}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
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
                <div style={{ padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
                  <h3
                    className="font-display"
                    style={{ fontSize: 22, margin: 0, letterSpacing: "-0.015em", fontWeight: 700 }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.62, color: "#5A636B", margin: 0 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(0,0,0,0.05)",
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
        </div>
      </section>

      {/* ── Resources promo ───────────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "80px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="rg-2"
            style={{
              ...CARD,
              borderRadius: 28,
              padding: "44px 48px",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <div className="section-label" style={{ color: "#717FDA", marginBottom: 14 }}>
                Open resources
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(24px,3vw,36px)",
                  margin: "0 0 14px",
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                }}
              >
                Guides, toolkits &amp; datasets, free to download
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "#5A636B",
                  margin: "0 0 28px",
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
                  padding: "14px 26px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                Browse all resources →
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
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
                    border: "1px solid rgba(0,0,0,0.05)",
                    borderRadius: 16,
                    padding: 18,
                  }}
                >
                  <div style={{ width: 44, height: 44, position: "relative" }}>
                    <Image src={item.icon} alt="" fill style={{ objectFit: "contain" }} />
                  </div>
                  <div style={{ fontWeight: 700, marginTop: 10, fontSize: 15 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#828893", marginTop: 2 }}>{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ──────────────────────────────────────────────── */}
      <section style={{ padding: "72px 0 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", textAlign: "center" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#B0B7BF",
              marginBottom: 28,
            }}
          >
            Partners &amp; funders
          </div>
          <div className="rg-6" style={{ gap: 14 }}>
            {PARTNERS.map((name) => (
              <div
                key={name}
                style={{
                  height: 60,
                  border: "1px solid rgba(0,0,0,0.07)",
                  borderRadius: 12,
                  background: "#FAFAFA",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6B7280",
                  fontWeight: 700,
                  fontSize: 11,
                  textAlign: "center",
                  padding: "0 10px",
                  letterSpacing: "0.01em",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ───────────────────────────────────────────── */}
      <section style={{ padding: "72px 0 96px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div
            className="rg-hero-cta"
            style={{
              background: "linear-gradient(120deg,#39406E,#15161A)",
              borderRadius: 28,
              padding: "56px 52px",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              gap: 40,
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "radial-gradient(rgba(255,255,255,.14) 1.5px,transparent 1.5px)",
                backgroundSize: "26px 26px",
                opacity: 0.6,
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div className="section-label" style={{ color: "#38D8FC", marginBottom: 14 }}>
                Trainings &amp; workshops
              </div>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px,3.4vw,42px)",
                  margin: "0 0 16px",
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                }}
              >
                Contact us for literacy work
              </h2>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.65,
                  opacity: 0.88,
                  margin: 0,
                  maxWidth: "34em",
                }}
              >
                We run tailored digital, data and AI literacy trainings for
                education institutions, newsrooms, governments and civil society,
                in English, Nepali or both.
              </p>
            </div>

            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 12 }}>
              <button
                onClick={() => setPage("about")}
                style={{
                  background: "#38D8FC",
                  color: "#06303C",
                  padding: "17px 24px",
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
                  background: "rgba(255,255,255,.12)",
                  color: "#fff",
                  padding: "17px 24px",
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
        </div>
      </section>
    </div>
  );
}
