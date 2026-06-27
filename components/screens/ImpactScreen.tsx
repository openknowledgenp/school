"use client";
import Image from "@/components/Img";
import { STATS, COHORTS } from "@/lib/data";

export default function ImpactScreen() {
  return (
    <div className="animate-fade-up">
      {/* Stats */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
        <div style={{ maxWidth: "46em", marginBottom: 44 }}>
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
            Impact
          </div>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(34px,4.5vw,52px)",
              margin: "0 0 18px",
              letterSpacing: "-0.025em",
            }}
          >
            Numbers that show the work
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
            Across nine years of literacy programming we have reached communities
            in every province of Nepal, built up a library of openly licensed
            materials, and consistently centred women, youth and underserved local
            governments. The figures below are drawn from event reports, blog
            write-ups and programme documents.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 20,
                padding: "30px 26px",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(36px,4vw,48px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: s.color,
                }}
              >
                {s.num}
              </div>
              <div style={{ marginTop: 10, fontSize: 15, color: "#5A636B", fontWeight: 600 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map + Quote */}
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "48px 28px 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        {/* Where we work */}
        <div
          style={{
            background: "linear-gradient(135deg,#444A82,#15161A)",
            borderRadius: 24,
            padding: 36,
            color: "#fff",
            position: "relative",
            overflow: "hidden",
            minHeight: 300,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(rgba(255,255,255,.2) 1.4px,transparent 1.4px)",
              backgroundSize: "24px 24px",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <h3 className="font-display" style={{ fontSize: 22, margin: "0 0 8px" }}>
              Where we work
            </h3>
            <p
              style={{
                fontSize: 15,
                opacity: 0.9,
                lineHeight: 1.55,
                margin: "0 0 20px",
                maxWidth: "28em",
              }}
            >
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

        {/* Quote */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #E2E8EB",
            borderRadius: 24,
            padding: 36,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            className="font-display"
            style={{ fontSize: 48, lineHeight: 1, color: "#717FDA", fontWeight: 700 }}
          >
            &ldquo;
          </div>
          <p
            className="serif-accent"
            style={{ fontSize: 22, lineHeight: 1.45, margin: "0 0 20px", letterSpacing: "-0.01em" }}
          >
            Before the workshop I was scared of spreadsheets. Now I use open
            data to back up everything I report.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#00CFA3,#717FDA)",
              }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Workshop participant</div>
              <div style={{ fontSize: 13, color: "#828893" }}>
                Data-a-thon for Journalists · Lalitpur
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cohorts table */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 28px 20px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(24px,3vw,32px)",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          Cohorts reached
        </h2>
        <div
          style={{
            background: "#fff",
            border: "1px solid #E2E8EB",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              background: "#F4F7F9",
              padding: "12px 24px",
              borderBottom: "1px solid #E2E8EB",
            }}
          >
            {["Year", "Programme", "Cohort"].map((h) => (
              <div
                key={h}
                style={{ fontSize: 12, fontWeight: 700, color: "#828893", letterSpacing: ".05em", textTransform: "uppercase" }}
              >
                {h}
              </div>
            ))}
          </div>
          {COHORTS.map((row, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr 1fr",
                padding: "14px 24px",
                borderBottom: i < COHORTS.length - 1 ? "1px solid #F0F4F6" : "none",
                background: i % 2 === 0 ? "#fff" : "#FAFBFC",
                alignItems: "start",
                gap: 8,
              }}
            >
              <div
                className="font-display"
                style={{ fontSize: 14, fontWeight: 700, color: "#717FDA" }}
              >
                {row.year}
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#15161A", lineHeight: 1.45 }}>
                {row.programme}
              </div>
              <div style={{ fontSize: 14, color: "#5A636B", lineHeight: 1.45 }}>
                {row.cohort}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes and signals of change */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 28px 20px" }}>
        <h2
          className="font-display"
          style={{
            fontSize: "clamp(24px,3vw,32px)",
            margin: "0 0 24px",
            letterSpacing: "-0.02em",
          }}
        >
          Outcomes and signals of change
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
          {[
            {
              color: "#00CFA3",
              icon: "/uploads/impact.png",
              title: "Eight of eight businesses got online in Dhangadhi",
              desc: "Every one of the 8 micro-entrepreneurs mentored in 2026 built a Facebook page and a Google Maps listing, 5 are actively posting, and 2 reported their first ever digital customer inquiries. The Ward Representative signalled interest in incorporating digital training into the local-government budget.",
            },
            {
              color: "#38D8FC",
              icon: "/uploads/governance.png",
              title: "Seed funding catalysed local action",
              desc: "Three Tulsipur teams each received NPR 10,000 at Open Data Day 2021 — covering urban planning, an agricultural-forestry training project and a scholarship database for marginalised children. Six PAHICHAN youth groups received NPR 7,500 to implement action plans across six districts in 2018.",
            },
            {
              color: "#717FDA",
              icon: "/uploads/reproducible-research.png",
              title: "A national open-data baseline",
              desc: "The Open Data Awareness Programme's 2017 survey found that 76.1% of Nepali youths had never heard of open data and most knew only Excel or Google Sheets. That baseline shaped the curricula we have refined ever since.",
            },
            {
              color: "#00CFA3",
              icon: "/uploads/campagne.png",
              title: "A pipeline of women in data",
              desc: "Ten women fellows in 2019 grew into the multi-organisation Women in Data Steering Committee, now coordinating an annual conference (held in 2019, 2021, 2022, 2023, 2024 and 2025) that has trained hundreds of women on statistics, mapping, visualization, AI ethics, prompt engineering and digital forensics.",
            },
            {
              color: "#38D8FC",
              icon: "/uploads/press.png",
              title: "Open Data Editor adoption",
              desc: "Our Open Data Editor pilot was selected by Open Knowledge Foundation and our team has demonstrated the tool at Global Voices Summit Bilbao 2024, DRAPAC25 Kuala Lumpur, APrIGF 2025 and inside the CMR Nepal Journalism Academy.",
            },
            {
              color: "#717FDA",
              icon: "/uploads/mission.png",
              title: "Local-government uptake",
              desc: "Mayors and ward representatives of Tulsipur, Birgunj, Lalitpur and Dhangadhi have publicly endorsed our work, with several integrating data and digital training into their budgets or staffing plans.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "#fff",
                border: "1px solid #E2E8EB",
                borderRadius: 18,
                padding: 26,
                display: "flex",
                gap: 18,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 13,
                  background: item.color + "18",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image src={item.icon} alt="" fill style={{ objectFit: "contain", padding: 8 }} />
              </div>
              <div>
                <h4 className="font-display" style={{ margin: "0 0 8px", fontSize: 17, lineHeight: 1.3 }}>
                  {item.title}
                </h4>
                <p style={{ margin: 0, fontSize: 14, color: "#5A636B", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact illustration strip */}
      <section
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "32px 28px 88px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
        }}
      >
        {[
          { src: "/uploads/campagne.png", label: "Advocacy" },
          { src: "/uploads/press.png", label: "Media" },
          { src: "/uploads/reproducible-research.png", label: "Research" },
          { src: "/uploads/impact.png", label: "Community impact" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "#fff",
              border: "1px solid #E2E8EB",
              borderRadius: 16,
              padding: "20px 16px 16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: "100%", aspectRatio: "1/1", position: "relative" }}>
              <Image src={item.src} alt={item.label} fill style={{ objectFit: "contain", padding: 8 }} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#5A636B" }}>{item.label}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
