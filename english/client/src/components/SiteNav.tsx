/**
 * SiteNav — Machine Society
 * Design: Ink & Void — deep blue-black, DM Sans, wide letterspace brand mark
 *
 * Layout:
 *   [Logo + Name]   [HOME · PRODUCTS ▾ · RESEARCH]   (spacer)
 *   Logo is left-aligned; nav links are shifted toward center-left.
 *
 * PRODUCTS dropdown:
 *   Left column  — series list (hover to switch)
 *   Right column — product cards for active series (image + name + tagline)
 */

import { LOGO_URL, productSeries, products, siteInfo } from "@/data/content";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSeries, setActiveSeries] = useState(productSeries[0].id);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  function openDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 180);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const seriesProducts = products.filter((p) => p.seriesId === activeSeries);

  const [, navigate] = useLocation();

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled
            ? "rgba(13, 17, 26, 0.94)"
            : "rgba(13, 17, 26, 0.7)",
          backdropFilter: "blur(16px) saturate(1.3)",
          WebkitBackdropFilter: "blur(16px) saturate(1.3)",
          borderBottom: scrolled
            ? "1px solid rgba(138, 180, 248, 0.08)"
            : "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            height: 80,
          }}
        >
          {/* ── Logo + Brand ─────────────────────────── */}
          <Link href="/">
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.7rem",
                cursor: "pointer",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <img
                src={LOGO_URL}
                alt="Machine Society"
                style={{
                  height: 34,
                  width: "auto",
                  display: "block",
                  filter: "invert(1)",
                  opacity: 0.9,
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 17,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#F0EDE8",
                  lineHeight: 1,
                }}
              >
                {siteInfo.name}
              </span>
            </span>
          </Link>

          {/* ── Nav Links — shifted center-left ──────── */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 56,
            }}
          >
            {/* HOME */}
            <Link href="/">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 34,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive("/") ? "#EEF0F4" : "#5A6A80",
                  cursor: "pointer",
                  transition: "color 0.15s",
                  padding: "6px 14px",
                  lineHeight: 1,
                  borderBottom: isActive("/")
                    ? "1px solid rgba(138,180,248,0.5)"
                    : "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive("/"))
                    (e.currentTarget as HTMLElement).style.color = "#8A9BB5";
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/"))
                    (e.currentTarget as HTMLElement).style.color = "#5A6A80";
                }}
              >
                Home
              </span>
            </Link>

            {/* PRODUCTS — dropdown trigger */}
            <div style={{ position: "relative" }}>
              <button
                onMouseEnter={() => {
                  openDropdown();
                  setActiveSeries(productSeries[0].id);
                }}
                onMouseLeave={scheduleClose}
                onClick={() => { navigate('/products'); }}
                style={{
                  height: 34,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color:
                    isActive("/products") || dropdownOpen
                      ? "#EEF0F4"
                      : "#5A6A80",
                  cursor: "pointer",
                  transition: "color 0.15s",
                  padding: "6px 14px",
                  background: "none",
                  border: "none",
                  lineHeight: 1,
                  borderBottom:
                    isActive("/products") || dropdownOpen
                      ? "1px solid rgba(138,180,248,0.5)"
                      : "1px solid transparent",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                Products
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  style={{
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    opacity: 0.6,
                  }}
                >
                  <path
                    d="M1 1l3.5 3L8 1"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* ── Dropdown Panel ──────────────────── */}
              {dropdownOpen && (
                <div
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                  style={{
                    position: "fixed",
                    top: 80,
                    left: 0,
                    right: 0,
                    width: "100%",
                    background: "rgba(10,14,24,0.98)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                    display: "flex",
                    overflow: "hidden",
                    animation: "navDropFade 0.18s ease",
                    zIndex: 99,
                  }}
                >
                  {/* Inner constraint */}
                  <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", width: "100%" }}>
                  {/* Left — Series list */}
                  <div
                    style={{
                      width: 210,
                      borderRight: "1px solid rgba(255,255,255,0.06)",
                      padding: "18px 0",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: 16,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#3A4A5A",
                        padding: "0 20px 12px",
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      Series
                    </div>
                    {productSeries.map((series) => {
                      const active = activeSeries === series.id;
                      return (
                        <button
                          key={series.id}
                          onMouseEnter={() => setActiveSeries(series.id)}
                          onClick={() => {
                            setDropdownOpen(false);
                            navigate(`/products#${series.id}`);
                          }}
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "left",
                            padding: "11px 20px",
                            background: active
                              ? "rgba(138,180,248,0.07)"
                              : "none",
                            border: "none",
                            borderLeft: active
                              ? "2px solid #8AB4F8"
                              : "2px solid transparent",
                            cursor: "pointer",
                            transition: "all 0.15s",
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontWeight: 500,
                              fontSize: 18,
                              color: active ? "#E8E4DC" : "#7A8A9A",
                              marginBottom: 3,
                              transition: "color 0.15s",
                            }}
                          >
                            {series.name}
                          </div>
                          <div
                            style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 14,
                              color: "#3A4A5A",
                              lineHeight: 1.4,
                            }}
                          >
                            {series.description}
                          </div>
                        </button>
                      );
                    })}

                    <div style={{ padding: "14px 20px 4px" }}>
                      <Link href="/products">
                        <span
                          style={{
                            fontSize: 14,
                            color: "#8AB4F8",
                            fontFamily: "'DM Sans', sans-serif",
                            letterSpacing: "0.04em",
                            cursor: "pointer",
                          }}
                        >
                          View All Products →
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Right — Product cards */}
                  <div
                    style={{
                      flex: 1,
                      padding: "20px 24px",
                      overflowX: "hidden",
                      overflowY: "auto",
                      maxHeight: "calc(100vh - 120px)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 14,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#3A4A5A",
                        marginBottom: 14,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {productSeries.find((s) => s.id === activeSeries)?.name}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 16,
                      }}
                    >
                      {seriesProducts.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/product/${product.slug}`}
                        >
                          <div
                            style={{
                              background: "rgba(255,255,255,0.02)",
                              border: "1px solid rgba(255,255,255,0.06)",
                              borderRadius: 8,
                              overflow: "hidden",
                              cursor: "pointer",
                              transition: "border-color 0.2s, background 0.2s",
                              width: activeSeries === "neme-grgo" ? 200 : 240,
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.borderColor =
                                "rgba(138,180,248,0.28)";
                              el.style.background =
                                "rgba(138,180,248,0.05)";
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement;
                              el.style.borderColor =
                                "rgba(255,255,255,0.06)";
                              el.style.background =
                                "rgba(255,255,255,0.02)";
                            }}
                          >
                            {/* Image */}
                            <div
                              style={{
                              height: activeSeries === "neme-grgo" ? 160 : 300,
                              overflow: "hidden",
                              background: "#080D18",
                              }}
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  opacity: 0.7,
                                  filter: "saturate(0.55)",
                                }}
                              />
                            </div>
                            {/* Info */}
                            <div style={{ padding: "7px 12px 9px" }}>
                              <div
                                style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: 16,
                              color: "#C8C4BC",
                              marginBottom: 4,
                                }}
                              >
                                {product.name}
                              </div>
                              <div
                                style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: 14,
                              color: "#4A5A6A",
                              lineHeight: 1.45,
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {product.tagline}
                              </div>
                              {/* status tags removed per design requirement */}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>{/* /Inner constraint */}
                </div>
              )}
            </div>

            {/* RESEARCH */}
            <Link href="/research">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 34,
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 16,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isActive("/research") ? "#EEF0F4" : "#5A6A80",
                  cursor: "pointer",
                  transition: "color 0.15s",
                  padding: "6px 14px",
                  lineHeight: 1,
                  borderBottom: isActive("/research")
                    ? "1px solid rgba(138,180,248,0.5)"
                    : "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive("/research"))
                    (e.currentTarget as HTMLElement).style.color = "#8A9BB5";
                }}
                onMouseLeave={(e) => {
                  if (!isActive("/research"))
                    (e.currentTarget as HTMLElement).style.color = "#5A6A80";
                }}
              >
                Research
              </span>
            </Link>
          </nav>
        </div>
      </header>

      <style>{`
        @keyframes navDropFade {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
