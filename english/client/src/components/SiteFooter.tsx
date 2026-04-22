/*
 * SiteFooter — Machine Society
 * Design: Ink & Void / v8
 * Fix: footer text visibility + logo links to home
 */

import { LOGO_URL, siteInfo } from "@/data/content";
import { useLocation } from "wouter";

export default function SiteFooter() {
  const [, navigate] = useLocation();

  return (
    <footer
      style={{
        marginTop: "auto",
        borderTop: "1px solid #263040",
        padding: "2.5rem 0",
      }}
    >
      <div
        className="site-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Logo — clickable, links to home */}
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            opacity: 0.75,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
          aria-label="Back to home"
        >
          <img
            src={LOGO_URL}
            alt="Machine Society"
            style={{
              height: "16px",
              width: "auto",
              filter: "invert(1)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8AB4F8",
            }}
          >
            {siteInfo.name}
          </span>
        </button>

        {/* Copyright */}
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "#6A7A95",
            letterSpacing: "0.04em",
          }}
        >
          © {new Date().getFullYear()} Machine Society. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
