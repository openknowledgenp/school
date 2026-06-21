"use client";
import Image from "next/image";
import { type Page } from "@/lib/data";

interface FooterProps {
  setPage: (p: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer style={{ background: "#1A1F3D", color: "#fff" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "56px 28px 32px",
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: 36,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "inline-flex",
              background: "#fff",
              padding: "10px 14px",
              borderRadius: 12,
              marginBottom: 18,
            }}
          >
            <Image
              src="/assets/okf-nepal-logo.png"
              alt="Open Knowledge Foundation Nepal"
              width={0}
              height={34}
              sizes="auto"
              style={{ height: 34, width: "auto" }}
            />
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: "#9AA0A8",
              margin: 0,
              maxWidth: "32em",
            }}
          >
            A digital, data and AI literacy initiative of Open Knowledge
            Foundation Nepal, free and open to everyone.
          </p>
        </div>

        {/* Explore */}
        <div>
          <div
            style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: "#C2C6CE" }}
          >
            Explore
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            {(["courses", "resources", "projects", "impact"] as Page[]).map((id) => (
              <button
                key={id}
                onClick={() => setPage(id)}
                style={{ fontSize: 14, color: "#9AA0A8", textTransform: "capitalize" }}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Organisation */}
        <div>
          <div
            style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: "#C2C6CE" }}
          >
            Organisation
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            {["About us", "Contact", "Get involved"].map((label) => (
              <button
                key={label}
                onClick={() => setPage("about")}
                style={{ fontSize: 14, color: "#9AA0A8" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div
            style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: "#C2C6CE" }}
          >
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14, color: "#9AA0A8" }}>
            <span>info@oknp.org</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "20px 28px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
            fontSize: 13,
            color: "#7A808A",
          }}
        >
          <span>
            Content on this site is licensed under a Creative Commons
            Attribution 4.0 International License.
          </span>
        </div>
      </div>
    </footer>
  );
}
