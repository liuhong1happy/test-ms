/**
 * ProductHighlights — 产品特性亮点组件
 * Design: Ink & Void — Machine Society
 *
 * Layout: Alternating image-left / image-right full-width rows
 * Edit content: client/src/data/content.ts → products[n].highlights
 */

import type { ProductHighlight } from "@/data/content";

interface Props {
  highlights: ProductHighlight[];
}

export default function ProductHighlights({ highlights }: Props) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section style={{ marginBottom: "5rem" }}>
      {/* Section header */}
      <div style={{ marginBottom: "2.5rem" }}>
        <span
          style={{
            display: "inline-block",
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.18em",
            color: "#8AB4F8",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
          }}
        >
          Highlights
        </span>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
            fontWeight: 500,
            color: "#F0EDE8",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Why it's different
        </h2>
      </div>

      {/* Highlight rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {highlights.map((hl, i) => (
          <HighlightRow key={i} highlight={hl} index={i} />
        ))}
      </div>
    </section>
  );
}

function HighlightRow({
  highlight,
  index,
}: {
  highlight: ProductHighlight;
  index: number;
}) {
  const isImageRight = highlight.imagePosition === "right";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        background: "#141B27",
        border: "1px solid #1E2A3A",
        borderRadius: "14px",
        overflow: "hidden",
        minHeight: "280px",
      }}
      className="highlight-row"
    >
      {/* Text side */}
      <div
        style={{
          order: isImageRight ? 1 : 2,
          padding: "2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          borderRight: isImageRight ? "1px solid #1E2A3A" : "none",
          borderLeft: isImageRight ? "none" : "1px solid #1E2A3A",
        }}
      >
        {/* Index number */}
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            color: "rgba(138, 180, 248, 0.4)",
            letterSpacing: "0.08em",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            fontWeight: 600,
            color: "#F0EDE8",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {highlight.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            color: "#7A8A9E",
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {highlight.description}
        </p>

        {/* Decorative line */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "rgba(138, 180, 248, 0.3)",
            marginTop: "0.5rem",
          }}
        />
      </div>

      {/* Image side */}
      <div
        style={{
          order: isImageRight ? 2 : 1,
          position: "relative",
          overflow: "hidden",
          minHeight: "240px",
        }}
      >
        <img
          src={highlight.image}
          alt={highlight.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
            transition: "opacity 0.4s, transform 0.4s",
            display: "block",
          }}
        />
        {/* Gradient overlay toward text side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: isImageRight
              ? "linear-gradient(to right, rgba(20, 27, 39, 0.6) 0%, transparent 60%)"
              : "linear-gradient(to left, rgba(20, 27, 39, 0.6) 0%, transparent 60%)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .highlight-row {
            grid-template-columns: 1fr !important;
          }
          .highlight-row > div {
            order: unset !important;
            border-right: none !important;
            border-left: none !important;
          }
          .highlight-row > div:last-child {
            min-height: 180px !important;
          }
        }
      `}</style>
    </div>
  );
}
