/*
 * Cards — Machine Society
 * Design: Ink & Void
 *
 * HeroCard: large 16:7 image card with gradient overlay
 * SmallCard: 3:2 image card for grid layout
 *
 * Note: Use <Link asChild> pattern or pass href directly to avoid nested <a> tags.
 * wouter's <Link> renders an <a> internally, so we must NOT wrap another <a> inside.
 */

import { useLocation } from "wouter";

interface CardData {
  slug: string;
  name?: string;
  title?: string;
  tagline?: string;
  summary?: string;
  label: string;
  date: string;
  image: string;
  type: "product" | "research";
}

export function HeroCard({ item }: { item: CardData }) {
  const href = item.type === "product" ? `/product/${item.slug}` : `/research/${item.slug}`;
  const title = item.name || item.title || "";
  const sub = item.tagline || item.summary || "";
  const [, navigate] = useLocation();

  return (
    <div
      className="hero-card fade-up"
      onClick={() => navigate(href)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(href)}
    >
      <img
        src={item.image}
        alt={title}
        className="hero-card-image"
        loading="eager"
      />
      <div className="hero-card-overlay" />
      <div className="hero-card-content">
        <div style={{ marginBottom: "0.6rem" }}>
          <span className="tag tag-accent">{item.label}</span>
        </div>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 500,
            color: "#EEF0F4",
            lineHeight: 1.2,
            marginBottom: "0.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "rgba(200, 215, 240, 0.80)",
            lineHeight: 1.55,
            maxWidth: "520px",
          }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}

export function SmallCard({ item, delay = 0 }: { item: CardData; delay?: number }) {
  const href = item.type === "product" ? `/product/${item.slug}` : `/research/${item.slug}`;
  const title = item.name || item.title || "";
  const sub = item.tagline || item.summary || "";
  const [, navigate] = useLocation();

  return (
    <div
      className={`small-card fade-up fade-up-delay-${delay}`}
      onClick={() => navigate(href)}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(href)}
    >
      <img
        src={item.image}
        alt={title}
        className="small-card-image"
        loading="lazy"
      />
      <div className="small-card-overlay" />
      <div className="small-card-content">
        <div style={{ marginBottom: "0.4rem" }}>
          <span className="tag">{item.label}</span>
        </div>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            color: "#EEF0F4",
            lineHeight: 1.3,
            marginBottom: "0.3rem",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(160, 185, 220, 0.70)",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {sub}
        </p>
      </div>
    </div>
  );
}
