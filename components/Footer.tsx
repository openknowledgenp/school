"use client";
import Image from "@/components/Img";
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
              margin: "0 0 20px",
              maxWidth: "28em",
            }}
          >
            A digital, data and AI literacy initiative of Open Knowledge
            Foundation Nepal, free and open to everyone.
          </p>
          {/* Social links */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              {
                label: "X / Twitter",
                href: "https://x.com/okfnepal",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/okfnepal",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/open-knowledge-nepal",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                href: "https://github.com/openknowledgenp",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: "rgba(255,255,255,.1)",
                  color: "#9AA0A8",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <div
            style={{ fontWeight: 700, fontSize: 14, marginBottom: 14, color: "#C2C6CE" }}
          >
            Explore
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-start" }}>
            {(["training", "courses", "resources", "projects"] as Page[]).map((id) => (
              <button
                key={id}
                onClick={() => setPage(id)}
                style={{ fontSize: 14, color: "#9AA0A8", textTransform: "capitalize" }}
              >
                {id === "projects" ? "Our Work" : id.charAt(0).toUpperCase() + id.slice(1)}
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
            {(["About us", "Contact", "Get involved"] as const).map((label) => (
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
            <a href="mailto:info@oknp.org" style={{ color: "#9AA0A8" }}>
              info@oknp.org
            </a>
            <span>Kathmandu, Nepal</span>
            <a
              href="https://oknp.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#9AA0A8" }}
            >
              oknp.org
            </a>
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
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
            fontSize: 13,
            color: "#7A808A",
          }}
        >
          <span>
            Content on this site is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#9AA0A8", textDecoration: "underline" }}
            >
              Creative Commons Attribution 4.0 International License
            </a>
            .
          </span>
          <span>© Open Knowledge Foundation Nepal</span>
        </div>
      </div>
    </footer>
  );
}
