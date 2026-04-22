/**
 * ProductFeatures — 产品功能介绍组件
 * Design: Ink & Void — Machine Society
 *
 * Layout: Alternating large-image + text rows (left-image / right-image)
 *         Falls back to icon-grid if no images are provided.
 * Edit content: client/src/data/content.ts → products[n].features
 */

import { useState } from "react";
import type { ProductFeature } from "@/data/content";

interface Props {
  features: ProductFeature[];
}

export default function ProductFeatures({ features }: Props) {
  if (!features || features.length === 0) return null;

  const hasImages = features.some((f) => f.image);

  return (
    <section style={{ marginBottom: "5rem" }}>
      {/* Section header */}
      <div style={{ marginBottom: "3rem" }}>
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
          功能介绍
        </h2>
      </div>

      {hasImages ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {features.map((feature, i) => (
            <FeatureRow key={i} feature={feature} index={i} total={features.length} />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1px",
            background: "#1E2A3A",
            border: "1px solid #1E2A3A",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} total={features.length} />
          ))}
        </div>
      )}
    </section>
  );
}

function FeatureRow({
  feature,
  index,
  total,
}: {
  feature: ProductFeature;
  index: number;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);
  const imageOnLeft = index % 2 === 0;
  const isLast = index === total - 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0",
        borderTop: "1px solid #1E2A3A",
        borderBottom: isLast ? "1px solid #1E2A3A" : "none",
        overflow: "hidden",
        cursor: "default",
        transition: "background 0.25s",
        background: hovered ? "rgba(25, 32, 48, 0.6)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image block */}
      <div
        style={{
          order: imageOnLeft ? 0 : 1,
          position: "relative",
          overflow: "hidden",
          minHeight: "340px",
          background: "#0D1117",
        }}
      >
        <img
          src={feature.image}
          alt={feature.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hovered ? 0.72 : 0.55,
            filter: "saturate(0.5)",
            transition: "opacity 0.35s, transform 0.5s",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: imageOnLeft
              ? "linear-gradient(to right, rgba(20,27,39,0.1) 0%, rgba(20,27,39,0.65) 100%)"
              : "linear-gradient(to left, rgba(20,27,39,0.1) 0%, rgba(20,27,39,0.65) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "1.25rem",
            ...(imageOnLeft ? { right: "1.5rem" } : { left: "1.5rem" }),
            fontFamily: "'DM Mono', monospace",
            fontSize: "48px",
            fontWeight: 700,
            color: "rgba(138, 180, 248, 0.07)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Text block */}
      <div
        style={{
          order: imageOnLeft ? 1 : 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "3rem 3.5rem",
          gap: "1.25rem",
          borderLeft: imageOnLeft ? "1px solid #1E2A3A" : "none",
          borderRight: imageOnLeft ? "none" : "1px solid #1E2A3A",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "11px",
            background: "rgba(138, 180, 248, 0.07)",
            border: "1px solid rgba(138, 180, 248, 0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8AB4F8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={feature.icon} />
          </svg>
        </div>

        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
            fontWeight: 600,
            color: "#F0EDE8",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {feature.title}
        </h3>

        <p
          style={{
            fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
            color: "#8A9AAE",
            lineHeight: 1.8,
            margin: 0,
            maxWidth: "420px",
          }}
        >
          {feature.description}
        </p>

        <div
          style={{
            width: "32px",
            height: "2px",
            background: hovered
              ? "rgba(138, 180, 248, 0.6)"
              : "rgba(138, 180, 248, 0.2)",
            borderRadius: "1px",
            transition: "background 0.3s",
          }}
        />
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
  index,
  total,
}: {
  feature: ProductFeature;
  index: number;
  total: number;
}) {
  const isLast = index === total - 1;
  const isOdd = total % 2 !== 0;

  return (
    <div
      style={{
        background: "#141B27",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        gridColumn: isLast && isOdd ? "1 / -1" : undefined,
        transition: "background 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#192030";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#141B27";
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          background: "rgba(138, 180, 248, 0.08)",
          border: "1px solid rgba(138, 180, 248, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8AB4F8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={feature.icon} />
        </svg>
      </div>

      <div>
        <h3
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#E8E4DE",
            marginBottom: "0.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          {feature.title}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "#7A8A9E",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {feature.description}
        </p>
      </div>
    </div>
  );
}
