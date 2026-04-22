/**
 * ProductUseCases — 产品应用场景组件
 * Design: Ink & Void — Machine Society
 *
 * Layout: Carousel with large image cards, left/right arrow navigation + dot indicators
 * Fix: card width uses CSS custom property to keep transform in sync; last card has no trailing gap.
 * Edit content: client/src/data/content.ts → products[n].useCases
 */

import { useState, useCallback } from "react";
import type { ProductUseCase } from "@/data/content";

// Card width (px) — single source of truth used by both card flex-basis and translateX
const CARD_WIDTH = 400;
const CARD_GAP = 20; // 1.25rem ≈ 20px

interface Props {
  useCases: ProductUseCase[];
}

export default function ProductUseCases({ useCases }: Props) {
  if (!useCases || useCases.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const total = useCases.length;

  const prev = useCallback(() => {
    setActiveIndex((i) => Math.max(0, i - 1));
  }, []);

  const next = useCallback(() => {
    setActiveIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);

  return (
    <section style={{ marginBottom: "5rem" }}>
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "2.5rem",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div>
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
            应用场景
          </h2>
        </div>

        {/* Arrow controls */}
        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <NavButton onClick={prev} direction="left" disabled={activeIndex === 0} />
          <NavButton onClick={next} direction="right" disabled={activeIndex === total - 1} />
        </div>
      </div>

      {/* Carousel viewport — clips overflow */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            gap: `${CARD_GAP}px`,
            transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transform: `translateX(calc(-${activeIndex} * (${CARD_WIDTH}px + ${CARD_GAP}px)))`,
            /* Prevent the track from being wider than needed */
            width: `calc(${total} * ${CARD_WIDTH}px + ${total - 1} * ${CARD_GAP}px)`,
          }}
        >
          {useCases.map((uc, i) => (
            <UseCaseCard
              key={i}
              useCase={uc}
              isActive={i === activeIndex}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            marginTop: "1.75rem",
          }}
        >
          {useCases.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background:
                  i === activeIndex
                    ? "#8AB4F8"
                    : "rgba(138, 180, 248, 0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.3s",
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}

/* ── Navigation Arrow Button ─────────────────────────────────────── */
function NavButton({
  onClick,
  direction,
  disabled,
}: {
  onClick: () => void;
  direction: "left" | "right";
  disabled?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: disabled
          ? "rgba(20, 28, 40, 0.4)"
          : hovered
          ? "rgba(138, 180, 248, 0.12)"
          : "rgba(30, 42, 58, 0.6)",
        border: `1px solid ${
          disabled
            ? "rgba(255,255,255,0.04)"
            : hovered
            ? "rgba(138, 180, 248, 0.35)"
            : "#1E2A3A"
        }`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        transition: "background 0.2s, border-color 0.2s, opacity 0.2s",
        flexShrink: 0,
        opacity: disabled ? 0.35 : 1,
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered && !disabled ? "#8AB4F8" : "#6A7A95"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.2s" }}
      >
        {direction === "left" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  );
}

/* ── Use Case Card ───────────────────────────────────────────────── */
function UseCaseCard({
  useCase,
  isActive,
  onClick,
}: {
  useCase: ProductUseCase;
  isActive: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: `0 0 ${CARD_WIDTH}px`,
        width: `${CARD_WIDTH}px`,
        background: "#141B27",
        border: `1px solid ${isActive ? "rgba(138, 180, 248, 0.35)" : "#1E2A3A"}`,
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: isActive
          ? "0 8px 32px rgba(138, 180, 248, 0.08)"
          : "none",
      }}
    >
      {/* Image — 1.5× original 220px = 330px */}
      <div
        style={{
          width: "100%",
          height: "330px",
          overflow: "hidden",
          position: "relative",
          background: "#0D1117",
        }}
      >
        <img
          src={useCase.image}
          alt={useCase.scenario}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: hovered ? 0.75 : 0.55,
            filter: "saturate(0.45)",
            transition: "opacity 0.35s, transform 0.5s",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 35%, rgba(20, 27, 39, 0.92) 100%)",
          }}
        />
        {/* Industry badge */}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.08em",
            color: "#8AB4F8",
            background: "rgba(13, 17, 23, 0.75)",
            border: "1px solid rgba(138, 180, 248, 0.2)",
            borderRadius: "4px",
            padding: "3px 8px",
            backdropFilter: "blur(4px)",
          }}
        >
          {useCase.industry}
        </span>
        {/* Scenario name overlaid at bottom of image */}
        <div
          style={{
            position: "absolute",
            bottom: "14px",
            left: "16px",
            right: "16px",
          }}
        >
          <h3
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              color: "#F0EDE8",
              letterSpacing: "-0.01em",
              margin: 0,
              textShadow: "0 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            {useCase.scenario}
          </h3>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
        <p
          style={{
            fontSize: "15px",
            color: "#7A8A9E",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {useCase.description}
        </p>
      </div>
    </div>
  );
}
