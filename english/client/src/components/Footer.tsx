/*
 * Footer Component
 * Design: Academic Minimalism
 * - Investors section with plain text
 * - Social links
 * - Minimal footer with company name only
 */

import { footerInfo, investors, socialLinks } from "@/data/siteConfig";

export default function Footer() {
  return (
    <>
      {/* Investors Section */}
      <section id="investors" className="mb-8">
        <div className="container">
          <h2
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              fontWeight: 500,
              marginBottom: "0.5rem",
              letterSpacing: "0.01em",
            }}
          >
            Investors
          </h2>
          <p style={{ fontSize: "13px", color: "oklch(0.35 0 0)", lineHeight: "1.7" }}>
            {investors.description}
            {investors.list.join("、")}。
          </p>

          {/* Social links */}
          <p style={{ fontSize: "13px", color: "oklch(0.35 0 0)", marginTop: "0.5rem" }}>
            Follow Us:
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                  color: "oklch(0.25 0 0)",
                  marginRight: "0.75rem",
                }}
              >
                Twitter
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                  color: "oklch(0.25 0 0)",
                  marginRight: "0.75rem",
                }}
              >
                GitHub
              </a>
            )}
            {socialLinks.email && (
              <a
                href={`mailto:${socialLinks.email}`}
                style={{
                  textDecoration: "underline",
                  textUnderlineOffset: "2px",
                  color: "oklch(0.25 0 0)",
                }}
              >
                {socialLinks.email}
              </a>
            )}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid oklch(0.88 0 0)",
          paddingTop: "1.5rem",
          paddingBottom: "2rem",
          marginTop: "1rem",
        }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px",
              color: "oklch(0.55 0 0)",
            }}
          >
            {footerInfo.copyright}
          </p>
        </div>
      </footer>
    </>
  );
}
