/**
 * ProductModules — 产品核心模块组件
 * Design: Ink & Void — Machine Society
 *
 * Layout: Card grid with optional image thumbnail (top) + icon + name + description
 *         If image is provided, shows a thumbnail header area; otherwise shows icon-only header.
 * Edit content: client/src/data/content.ts → products[n].modules
 */

import type { ProductModule } from "@/data/content";

interface Props {
  modules: ProductModule[];
}

const TAG_STYLES: Record<string, { color: string; bg: string; border: string }> = {
  Core:        { color: "#8AB4F8", bg: "rgba(138, 180, 248, 0.08)", border: "rgba(138, 180, 248, 0.2)" },
  New:         { color: "#4ade80", bg: "rgba(74, 222, 128, 0.08)",  border: "rgba(74, 222, 128, 0.2)"  },
  "In Dev":    { color: "#C8B89A", bg: "rgba(200, 184, 154, 0.08)", border: "rgba(200, 184, 154, 0.2)" },
  "Open Source": { color: "#A78BFA", bg: "rgba(167, 139, 250, 0.08)", border: "rgba(167, 139, 250, 0.2)" },
};

export default function ProductModules({ modules }: Props) {
  if (!modules || modules.length === 0) return null;

  return (
    <section style={{ marginBottom: "5rem" }}>
      {/* Section header */}
      <div style={{ marginBottom: "2.5rem" }}>
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
          Core modules
        </h2>
      </div>

      {/* Modules grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {modules.map((mod, i) => (
          <ModuleCard key={i} module={mod} />
        ))}
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: ProductModule }) {
  const tagStyle = module.tag ? (TAG_STYLES[module.tag] ?? TAG_STYLES["Core"]) : null;
  const hasImage = Boolean(module.image);

  return (
    <div
      style={{
        background: "#141B27",
        border: "1px solid #1E2A3A",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.2s, background 0.2s",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(138, 180, 248, 0.3)";
        el.style.background = "#192030";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#1E2A3A";
        el.style.background = "#141B27";
      }}
    >
      {/* Image thumbnail (if provided) */}
      {hasImage && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "240px",
            overflow: "hidden",
            background: "#0D1117",
            flexShrink: 0,
          }}
        >
          <img
            src={module.image}
            alt={module.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.6,
              filter: "saturate(0.4)",
              transition: "opacity 0.3s, transform 0.4s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0.8";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.opacity = "0.6";
              (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
            }}
          />
          {/* Gradient fade to card background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(20, 27, 39, 0.95) 100%)",
            }}
          />
          {/* Tag badge overlaid on image */}
          {module.tag && tagStyle && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: tagStyle.color,
                background: "rgba(13, 17, 23, 0.8)",
                border: `1px solid ${tagStyle.border}`,
                borderRadius: "4px",
                padding: "2px 7px",
                backdropFilter: "blur(4px)",
              }}
            >
              {module.tag}
            </span>
          )}
        </div>
      )}

      {/* Card body */}
      <div
        style={{
          padding: "0.75rem 1rem 0.85rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.45rem",
          flex: 1,
          position: "relative",
        }}
      >
        {/* Subtle corner accent (only when no image) */}
        {!hasImage && (
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "60px",
              height: "60px",
              background:
                "radial-gradient(circle at top right, rgba(138, 180, 248, 0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Header row: icon + tag (tag only shown here if no image) */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "9px",
              background: "rgba(138, 180, 248, 0.07)",
              border: "1px solid rgba(138, 180, 248, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8AB4F8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={module.icon} />
            </svg>
          </div>

          {/* Tag badge (only when no image) */}
          {!hasImage && module.tag && tagStyle && (
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: tagStyle.color,
                background: tagStyle.bg,
                border: `1px solid ${tagStyle.border}`,
                borderRadius: "4px",
                padding: "2px 7px",
                flexShrink: 0,
              }}
            >
              {module.tag}
            </span>
          )}
        </div>

        {/* Name + description */}
        <div>
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              color: "#E8E4DE",
              marginBottom: "0.3rem",
              letterSpacing: "-0.01em",
            }}
          >
            {module.name}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#7A8A9E",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            {module.description}
          </p>
        </div>

        {/* Bottom connector line */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(to right, rgba(138, 180, 248, 0.15), transparent)",
            marginTop: "auto",
          }}
        />
      </div>
    </div>
  );
}
