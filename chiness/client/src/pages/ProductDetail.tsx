/*
 * ProductDetail Page — Machine Society
 * Design: Ink & Void
 *
 * Sections:
 *   1. Hero — full-width image, name, tagline, status
 *   2. Overview — short paragraph
 *   3. ProductFeatures — alternating large-image + text rows
 *   4. ProductUseCases — carousel cards
 *   5. ProductSpecs — grouped specification tables
 *   6. ProductModules — image thumbnail + icon card grid
 *   8. Markdown body — optional extended article from .md file
 *
 * TO ADD A NEW PRODUCT:
 *   1. Add metadata + section data to client/src/data/content.ts
 *   2. Optionally create client/src/content/products/{slug}.md
 *   3. Page renders automatically at /product/{slug}
 */

import MarkdownRenderer from "@/components/MarkdownRenderer";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductModules from "@/components/product/ProductModules";
import ProductSpecs from "@/components/product/ProductSpecs";
import ProductUseCases from "@/components/product/ProductUseCases";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { products } from "@/data/content";
import { useMarkdown } from "@/hooks/useMarkdown";
import { useLocation, useParams } from "wouter";

const STATUS_CONFIG = {
  available: {
    label: "已上市",
    color: "#4ade80",
    bg: "rgba(74, 222, 128, 0.08)",
    border: "rgba(74, 222, 128, 0.2)",
  },
  beta: {
    label: "测试版",
    color: "#C8B89A",
    bg: "rgba(200, 184, 154, 0.08)",
    border: "rgba(200, 184, 154, 0.2)",
  },
  "in-development": {
    label: "开发中",
    color: "#8AB4F8",
    bg: "rgba(138, 180, 248, 0.08)",
    border: "rgba(138, 180, 248, 0.2)",
  },
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const item = products.find((p) => p.slug === slug);
  const { content, loading, error } = useMarkdown("products", slug ?? "");

  if (!item) {
    return (
      <div style={{ background: "#141B27", minHeight: "100vh" }}>
        <SiteNav />
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "8rem 3rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <p style={{ color: "#6A7A95" }}>产品未找到。</p>
          <button
            onClick={() => navigate("/products")}
            style={{
              color: "#8AB4F8",
              fontSize: "13px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginTop: "1rem",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            ← 返回产品列表
          </button>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const statusCfg = STATUS_CONFIG[item.status];

  return (
    <div style={{ background: "#141B27", minHeight: "100vh" }}>
      <SiteNav />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          minHeight: "440px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Background image */}
        <img
          src={item.image}
          alt={item.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: item.status === "in-development" ? 0.2 : 0.38,
            filter: "saturate(0.45)",
          }}
        />
        {/* Gradient overlays */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,27,39,0.25) 0%, rgba(20,27,39,0.82) 65%, #141B27 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(20,27,39,0.55) 0%, transparent 65%)",
          }}
        />

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "8rem 3rem 3.5rem",
          width: "100%",
          }}
        >
          {/* Back button */}
          <button
            onClick={() => navigate("/products")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "none",
              border: "none",
              color: "#4A5A6E",
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              cursor: "pointer",
              padding: 0,
              marginBottom: "2.5rem",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#8AB4F8")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#4A5A6E")
            }
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            产品
          </button>

          {/* Label + status row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "#8AB4F8",
                textTransform: "uppercase",
              }}
            >
              {item.label}
            </span>
            <span style={{ color: "#2A3A50", fontSize: "10px" }}>·</span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: statusCfg.color,
                background: statusCfg.bg,
                border: `1px solid ${statusCfg.border}`,
                borderRadius: "4px",
                padding: "2px 8px",
              }}
            >
              {statusCfg.label}
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: "#4A5A6E",
                letterSpacing: "0.04em",
              }}
            >
              {item.date}
            </span>
          </div>

          {/* Product name */}
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "#F0EDE8",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            {item.name}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#8A9AAE",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              maxWidth: "560px",
              lineHeight: 1.6,
            }}
          >
            {item.tagline}
          </p>
        </div>
      </div>

      {/* ── Main Content ──────────────────────────────────────── */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "3rem 3rem 6rem",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Overview */}
        {item.overview && (
          <div
            style={{
              marginBottom: "4.5rem",
              paddingBottom: "3.5rem",
              borderBottom: "1px solid #1E2A3A",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                color: "#9AACBF",
                lineHeight: 1.85,
                letterSpacing: "0.01em",
                margin: 0,
              }}
            >
              {item.overview}
            </p>
          </div>
        )}

        {/* 1. Features */}
        {item.features && item.features.length > 0 && (
          <ProductFeatures features={item.features} />
        )}

        {/* 2. Use Cases */}
        {item.useCases && item.useCases.length > 0 && (
          <ProductUseCases useCases={item.useCases} />
        )}

        {/* 4. Specs */}
        {item.specs && item.specs.length > 0 && (
          <ProductSpecs specs={item.specs} productName={item.name} />
        )}

        {/* 5. Modules */}
        {item.modules && item.modules.length > 0 && (
          <ProductModules modules={item.modules} />
        )}

        {/* Optional extended Markdown body */}
        {!loading && !error && content && (
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "3rem",
              borderTop: "1px solid #1E2A3A",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "#8AB4F8",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              技术详情
            </span>
            <MarkdownRenderer content={content} />
          </div>
        )}

      </div>

      <SiteFooter />
    </div>
  );
}
