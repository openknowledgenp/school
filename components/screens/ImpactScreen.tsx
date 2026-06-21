"use client";
import Image from "next/image";
import { STATS } from "@/lib/data";

export default function ImpactScreen() {
  return (
    <div className="animate-fade-up">
      {/* Stats */}
      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 20px" }}>
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
            The difference open knowledge makes
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.62, color: "#454953", margin: 0 }}>
            Since we started, we've grown a community of learners, trainers and
            partners turning data into better decisions.
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
                maxWidth: "26em",
              }}
            >
              Trainings and workshops have reached learners in 15 districts and
              counting, from Kathmandu to rural municipalities.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Kathmandu", "Lalitpur", "Pokhara", "Chitwan", "+ 11 more"].map((place) => (
                <span
                  key={place}
                  style={{
                    background: "rgba(255,255,255,.16)",
                    borderRadius: 999,
                    padding: "6px 13px",
                    fontSize: 13,
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
            className="font-display"
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
                Local journalist · example quote
              </div>
            </div>
          </div>
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
