/*
 * Research Page — Machine Society
 * Design: Ink & Void
 */

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { research } from "@/data/content";
import { useLocation } from "wouter";

export default function ResearchPage() {
  const [, navigate] = useLocation();

  return (
    <div style={{ background: "#0A0A0A", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <SiteNav />

      <div className="site-container" style={{ paddingTop: "7rem", paddingBottom: "2rem" }}>
        {/* Page header */}
        <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Machine Society
          </p>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              color: "#F0EDE8",
              lineHeight: 1.15,
            }}
          >
            Research
          </h1>
          <p
            style={{
              fontSize: "15px",
              color: "#777",
              marginTop: "0.75rem",
              maxWidth: "420px",
              lineHeight: 1.65,
            }}
          >
            We publish our core technical research findings to advance the development of intelligent robotics technology.
          </p>
        </div>

        {/* Research list */}
        <div>
          {research.map((item, i) => (
            <div
              key={item.slug}
              className="research-item fade-up"
              style={{ animationDelay: `${i * 0.04}s` }}
              onClick={() => navigate(`/research/${item.slug}`)}
              role="link"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && navigate(`/research/${item.slug}`)
              }
            >
              {/* Thumbnail */}
              <div
                style={{
                  width: "80px",
                  height: "54px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  flexShrink: 0,
                  background: "#111",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.35rem",
                  }}
                >
                  <span className="tag">{item.label}</span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "13px",
                      color: "#777",
                    }}
                  >
                    {item.date}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#F0EDE8",
                    lineHeight: 1.35,
                    marginBottom: "0.3rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    lineHeight: 1.55,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.summary}
                </p>
              </div>

              {/* Arrow */}
              <div style={{ flexShrink: 0, color: "#333" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M8 4l3 3-3 3"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
