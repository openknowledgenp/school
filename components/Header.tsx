"use client";
import Image from "@/components/Img";
import { NAV_ITEMS, type Page } from "@/lib/data";

interface HeaderProps {
  page: Page;
  setPage: (p: Page) => void;
}

export default function Header({ page, setPage }: HeaderProps) {
  return (
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
          padding: "0 28px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <button
          onClick={() => setPage("home")}
          style={{ display: "flex", alignItems: "center", gap: 14 }}
        >
          <Image
            src="/assets/okf-nepal-logo.png"
            alt="Open Knowledge Foundation Nepal"
            width={0}
            height={40}
            sizes="auto"
            style={{ height: 40, width: "auto" }}
            priority
          />
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 1, height: 30, background: "#D2DADD" }} />
            <span
              className="font-display"
              style={{
                fontWeight: 600,
                fontSize: 13,
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

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
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
      </div>
    </header>
  );
}
