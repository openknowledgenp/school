"use client";
import { useState } from "react";
import Image from "@/components/Img";
import { NAV_ITEMS, type Page } from "@/lib/data";

interface HeaderProps {
  page: Page;
  setPage: (p: Page) => void;
}

export default function Header({ page, setPage }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (p: Page) => {
    setPage(p);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "0 20px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* Logo */}
          <button
            onClick={() => goTo("home")}
            style={{ display: "flex", alignItems: "center", gap: 14, flexShrink: 0 }}
          >
            <Image
              src="/assets/okf-nepal-logo.png"
              alt="Open Knowledge Foundation Nepal"
              width={0}
              height={36}
              sizes="auto"
              style={{ height: 36, width: "auto" }}
              priority
            />
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 1, height: 28, background: "#D2DADD" }} />
              <span
                className="font-display"
                style={{
                  fontWeight: 600,
                  fontSize: 12,
                  lineHeight: 1.2,
                  textAlign: "left",
                  color: "#5A636B",
                }}
              >
                Digital, Data
                <br />
                &amp; AI Literacy
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ alignItems: "center", gap: 28 }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                style={{
                  position: "relative",
                  fontWeight: 500,
                  fontSize: 15,
                  color: "#15161A",
                  padding: "6px 0",
                }}
              >
                {item.label}
                {page === item.id && (
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: -2,
                      height: 3,
                      background: "#38D8FC",
                      borderRadius: 2,
                    }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Hamburger button — shown only on mobile via .nav-mobile-btn */}
          <button
            className="nav-mobile-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 44,
              height: 44,
              borderRadius: 10,
              background: menuOpen ? "#F1F5F9" : "transparent",
              padding: 10,
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#15161A",
                borderRadius: 2,
                transition: "transform .22s, opacity .18s",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#15161A",
                borderRadius: 2,
                transition: "opacity .18s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#15161A",
                borderRadius: 2,
                transition: "transform .22s, opacity .18s",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: 72,
            zIndex: 49,
            background: "#fff",
            overflowY: "auto",
            padding: "16px 20px 48px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                textAlign: "left",
                padding: "18px 0",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                fontWeight: page === item.id ? 700 : 500,
                fontSize: 20,
                color: page === item.id ? "#38D8FC" : "#15161A",
                fontFamily: "var(--font-display), system-ui, sans-serif",
              }}
            >
              {item.label}
              <span style={{ fontSize: 18, opacity: 0.3 }}>→</span>
            </button>
          ))}

          <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="mailto:info@oknp.org"
              style={{
                background: "#38D8FC",
                color: "#06303C",
                padding: "16px 22px",
                borderRadius: 14,
                fontWeight: 700,
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Contact us →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
