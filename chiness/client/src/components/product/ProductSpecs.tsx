/**
 * ProductSpecs — 产品规格信息组件
 * Design: Ink & Void — Machine Society
 *
 * Layout: Multi-column spec groups with label/value rows
 * Edit content: client/src/data/content.ts → products[n].specs
 */

import type { SpecGroup } from "@/data/content";

interface Props {
  specs: SpecGroup[];
  productName: string;
}

export default function ProductSpecs({ specs, productName }: Props) {
  if (!specs || specs.length === 0) return null;

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
          {productName} at a glance
        </h2>
      </div>

      {/* Spec groups grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {specs.map((group, gi) => (
          <SpecGroupCard key={gi} group={group} />
        ))}
      </div>
    </section>
  );
}

function SpecGroupCard({ group }: { group: SpecGroup }) {
  return (
    <div
      style={{
        background: "#141B27",
        border: "1px solid #1E2A3A",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      {/* Group header */}
      <div
        style={{
          padding: "0.875rem 1.25rem",
          borderBottom: "1px solid #1E2A3A",
          background: "rgba(138, 180, 248, 0.04)",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
            color: "#8AB4F8",
            textTransform: "uppercase",
          }}
        >
          {group.group}
        </span>
      </div>

      {/* Spec rows */}
      <div>
        {group.items.map((item, ii) => (
          <div
            key={ii}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "0.75rem 1.25rem",
              borderBottom: ii < group.items.length - 1 ? "1px solid rgba(30, 42, 58, 0.6)" : "none",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "#6A7A95",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.02em",
                flexShrink: 0,
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#C8C4BE",
                fontWeight: 500,
                textAlign: "right",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
