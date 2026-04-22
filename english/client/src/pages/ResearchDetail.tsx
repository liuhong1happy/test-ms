/*
 * ResearchDetail Page — Machine Society
 * Design: Ink & Void
 *
 * Body content is loaded from: client/src/content/research/{slug}.md
 *
 * TO ADD A NEW RESEARCH ARTICLE:
 *   1. Create client/src/content/research/{slug}.md
 *   2. Add metadata entry to client/src/data/content.ts
 *   3. Page renders automatically at /research/{slug}
 */

import MarkdownRenderer from "@/components/MarkdownRenderer";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { research } from "@/data/content";
import { useMarkdown } from "@/hooks/useMarkdown";
import { useLocation, useParams } from "wouter";

export default function ResearchDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const item = research.find((r) => r.slug === slug);
  const { content, loading, error } = useMarkdown("research", slug ?? "");

  if (!item) {
    return (
      <div style={{ background: "#141B27", minHeight: "100vh" }}>
        <SiteNav />
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "8rem 3rem 4rem" }}>
          <p style={{ color: "#888" }}>Article not found.</p>
          <button
            onClick={() => navigate("/research")}
            style={{ color: "#C8B89A", fontSize: "13px", background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: "1rem" }}
          >
            ← Back to Research
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#141B27", minHeight: "100vh" }}>
      <SiteNav />

      {/* Hero image */}
      <div style={{ width: "100%", height: "clamp(220px, 38vw, 460px)", overflow: "hidden", position: "relative" }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.65 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(20,27,39,0.2) 0%, rgba(20,27,39,0.55) 60%, #141B27 100%)" }} />
      </div>

      {/* Article */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2.5rem 3rem 4rem" }}>
        {/* Back */}
        <button
          onClick={() => navigate("/research")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "12px",
            fontFamily: "'DM Mono', monospace",
            color: "#555",
            letterSpacing: "0.04em",
            marginBottom: "2rem",
            transition: "color 0.15s",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#aaa")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M9.5 6H2.5M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Research
        </button>

        {/* Meta */}
        <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          <span className="tag">{item.label}</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#666" }}>{item.date}</span>
          {item.readTime && (
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#666" }}>· {item.readTime}</span>
          )}
        </div>

        {/* Title */}
        <h1
          className="fade-up fade-up-delay-1"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 500, color: "#F0EDE8", lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: "1.25rem" }}
        >
          {item.title}
        </h1>

        {/* Summary */}
        <p
          className="fade-up fade-up-delay-2"
          style={{ fontSize: "16px", color: "#999", lineHeight: 1.75, marginBottom: "2.5rem", paddingBottom: "2rem", borderBottom: "1px solid #1a1a1a" }}
        >
          {item.summary}
        </p>

        {/* Body — Markdown */}
        <div className="fade-up fade-up-delay-3">
          {loading && (
            <p style={{ color: "#444", fontFamily: "'DM Mono', monospace", fontSize: "12px" }}>Loading...</p>
          )}
          {error && (
            <div style={{ padding: "1.25rem", background: "#0f0f0f", border: "1px dashed #2a2a2a", borderRadius: "6px" }}>
              <p style={{ color: "#666", fontFamily: "'DM Mono', monospace", fontSize: "12px", margin: 0 }}>
                Article content not yet added.
              </p>
            </div>
          )}
          {!loading && !error && <MarkdownRenderer content={content} />}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
