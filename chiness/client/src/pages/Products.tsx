/**
 * Products Page — Machine Society
 * Layout: grouped by series, each series has a header + product card grid
 * Anchor links: /products#series-id for nav dropdown deep links
 */

import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { Product, productSeries, products } from "@/data/content";
import { useEffect } from "react";
import { useLocation } from "wouter";

const STATUS_CONFIG = {
  available: { label: "已上市", color: "#4CAF7D", border: "rgba(76,175,125,0.25)" },
  beta:      { label: "测试版",      color: "#C8A84B", border: "rgba(200,168,75,0.25)" },
  "in-development": { label: "即将推出", color: "#4A5A6A", border: "rgba(74,90,106,0.25)" },
};

function ProductCard({ product }: { product: Product }) {
  const [, navigate] = useLocation();
  const isDev = product.status === "in-development";
  const status = STATUS_CONFIG[product.status];

  return (
    <div
      onClick={() => navigate(`/product/${product.slug}`)}
      role={isDev ? undefined : "link"}
      tabIndex={isDev ? undefined : 0}
      onKeyDown={(e) => !isDev && e.key === "Enter" && navigate(`/product/${product.slug}`)}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 10,
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        opacity: 1,
      }}
      onMouseEnter={(e) => {
        if (!isDev) {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(138,180,248,0.3)";
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isDev) {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "rgba(255,255,255,0.07)";
          el.style.transform = "translateY(0)";
          el.style.boxShadow = "none";
        }
      }}
    >
      {/* Image */}
      <div
        style={{
          height: 240,
          overflow: "hidden",
          background: "#080D18",
          position: "relative",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
            filter: "saturate(0.5)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(8,13,24,0.9) 100%)",
          }}
        />

        {/* Status badge */}
        <div style={{ position: "absolute", top: 12, right: 12 }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: status.color,
              background: "rgba(8,13,24,0.85)",
              border: `1px solid ${status.border}`,
              borderRadius: 4,
              padding: "3px 8px",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {product.status === "available" && (
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: status.color,
                  display: "inline-block",
                  flexShrink: 0,
                  boxShadow: `0 0 6px ${status.color}`,
                }}
              />
            )}
            {status.label}
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "14px 18px 16px" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: 17,
            color: "#D8D4CC",
            marginBottom: 4,
            letterSpacing: "0.01em",
          }}
        >
          {product.name}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            color: "#5A6A7A",
            lineHeight: 1.5,
            marginBottom: 10,
          }}
        >
          {product.tagline}
        </div>
        {!isDev && (
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#8AB4F8",
              letterSpacing: "0.06em",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            了解详情
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5h6M5 2l3 3-3 3"
                stroke="#8AB4F8"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  // Handle hash anchor scroll (from nav dropdown deep links)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, []);

  return (
    <div style={{ background: "#141B27", minHeight: "100vh" }}>
      <SiteNav />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 40px 100px" }}>

        {/* Page header */}
        <div style={{ marginBottom: 72 }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8AB4F8",
              marginBottom: 16,
            }}
          >
            Machine Society / 产品
          </div>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 48px)",
              color: "#E8E4DC",
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            我们的产品
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: "#6A7A8A",
              maxWidth: 560,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            从通用人形机器人到精密末端执行器，提供覆盖研发、制造、部署与运维的全栈式智能机器人解决方案。
          </p>
        </div>

        {/* Series sections */}
        {productSeries.map((series) => {
          const seriesProducts = products.filter(
            (p) => p.seriesId === series.id
          );
          if (seriesProducts.length === 0) return null;

          return (
            <section
              key={series.id}
              id={series.id}
              style={{ marginBottom: 80, scrollMarginTop: 80 }}
            >
              {/* Series header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 20,
                  marginBottom: 28,
                  paddingBottom: 18,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: 24,
                    color: "#C8C4BC",
                    margin: 0,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {series.name}
                </h2>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: "#3A4A5A",
                  }}
                >
                  {series.description}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11,
                    color: "#3A4A5A",
                    letterSpacing: "0.06em",
                  }}
                >
                  {seriesProducts.length} 款产品
                </span>
              </div>

              {/* Product grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: 20,
                }}
              >
                {seriesProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <SiteFooter />
    </div>
  );
}
