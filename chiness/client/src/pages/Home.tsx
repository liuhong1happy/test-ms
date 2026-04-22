/*
 * Home Page — Machine Society
 * Design: Ink & Void — v6
 *
 * Changes in v6:
 * - Background lifted from #0A0A0A → #0D1117 (deep blue-black, sci-fi tone)
 * - Hero: removed duplicate logo/name lockup in center
 * - Hero: added HeroCanvas (particle network + scan line)
 * - Hero: subtle radial glow at center for depth
 * - Overall brightness: surface colors lifted slightly
 */

import { HeroCard, SmallCard } from "@/components/Cards";
import HeroCanvas from "@/components/HeroCanvas";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { products, research, siteInfo } from "@/data/content";
import { useLocation } from "wouter";

export default function Home() {
  const featuredProduct = products[0];
  const otherProducts = products.filter((p) => p.status !== "in-development").slice(1, 3);
  const featuredResearch = research[0];
  const otherResearch = research.slice(1, 3);
  const [, navigate] = useLocation();

  const viewAllStyle: React.CSSProperties = {
    fontSize: "13px",
    fontFamily: "'DM Mono', monospace",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#666",
    cursor: "pointer",
    transition: "color 0.15s",
    background: "none",
    border: "none",
    padding: 0,
  };

  return (
    <div style={{ background: "#141B27", minHeight: "100vh" }}>
      <SiteNav />

      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        {/* Particle network canvas */}
        <HeroCanvas />

        {/* Subtle radial glow at center — adds depth without noise */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(80, 120, 200, 0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Bottom fade to page background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "220px",
            background: "linear-gradient(to bottom, transparent, #141B27)",
            pointerEvents: "none",
          }}
        />

        {/* Centered content */}
        <div
          className="site-container"
          style={{ position: "relative", zIndex: 1, maxWidth: "720px" }}
        >
          {/* Main tagline */}
          <h1
            className="fade-up fade-up-delay-1"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.035em",
              color: "#EEF0F4",
              marginBottom: "1.75rem",
              whiteSpace: "pre-line",
            }}
          >
            {siteInfo.tagline}
          </h1>

          {/* Vision statement */}
          <p
            className="fade-up fade-up-delay-2"
            style={{
              fontSize: "15px",
              color: "rgba(200, 210, 230, 0.6)",
              lineHeight: 1.75,
              maxWidth: "540px",
              margin: "0 auto 2.75rem",
            }}
          >
            {siteInfo.vision}
          </p>

          {/* CTAs */}
          <div
            className="fade-up fade-up-delay-3"
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("/products")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "15px",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#0D1117",
                background: "#EEF0F4",
                border: "1px solid #EEF0F4",
                padding: "0.7rem 1.8rem",
                borderRadius: "4px",
                transition: "opacity 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
            >
              我们的产品
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => navigate("/research")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "15px",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#EEF0F4",
                background: "transparent",
                border: "1px solid rgba(160, 185, 220, 0.22)",
                padding: "0.7rem 1.8rem",
                borderRadius: "4px",
                transition: "border-color 0.2s, background 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(160, 185, 220, 0.45)";
                (e.currentTarget as HTMLElement).style.background = "rgba(160, 185, 220, 0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(160, 185, 220, 0.22)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              我们的研究
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="fade-up fade-up-delay-4"
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 0.25,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "44px",
              background: "linear-gradient(to bottom, transparent, #8ab4f8)",
            }}
          />
        </div>
      </section>

      {/* ── Products Section ── */}
      <section style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="site-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <p className="section-label">产品</p>
            <span
              style={viewAllStyle}
              onClick={() => navigate("/products")}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#666")}
            >
              查看全部 →
            </span>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <HeroCard item={{ ...featuredProduct, type: "product" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {otherProducts.map((p, i) => (
              <SmallCard
                key={p.slug}
                item={{ ...p, type: "product" }}
                delay={(i + 1) as 1 | 2 | 3 | 4}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Section ── */}
      <section style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="site-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1.5rem",
            }}
          >
            <p className="section-label">最新研究</p>
            <span
              style={viewAllStyle}
              onClick={() => navigate("/research")}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#666")}
            >
              查看全部 →
            </span>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <HeroCard item={{ ...featuredResearch, type: "research" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {otherResearch.map((r, i) => (
              <SmallCard
                key={r.slug}
                item={{ ...r, type: "research" }}
                delay={(i + 1) as 1 | 2 | 3 | 4}
              />
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
