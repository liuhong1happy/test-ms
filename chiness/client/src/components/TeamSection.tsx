/*
 * TeamSection Component
 * Design: Academic Minimalism
 * - Multi-column grid of names
 * - Pure text, no avatars
 * - Simple and clean
 */

import { joinInfo, teamMembers } from "@/data/siteConfig";

export default function TeamSection() {
  return (
    <section id="team" className="mb-8">
      <div className="container">
        <h2
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "13px",
            fontWeight: 500,
            marginBottom: "0.75rem",
            letterSpacing: "0.01em",
          }}
        >
          团队
        </h2>

        {/* Team grid - 3 columns on desktop, 2 on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.15rem 1rem",
            fontSize: "13px",
            lineHeight: "1.75",
            marginBottom: "1rem",
          }}
        >
          {teamMembers.map((member, i) => (
            <span
              key={i}
              style={{
                color: "oklch(0.25 0 0)",
                fontFamily: "'IBM Plex Sans', sans-serif",
              }}
            >
              {member.name}
            </span>
          ))}
        </div>

        {/* Join CTA */}
        <p
          style={{
            fontSize: "13px",
            color: "oklch(0.35 0 0)",
            marginTop: "0.75rem",
          }}
        >
          {joinInfo.description}{" "}
          <a
            href={joinInfo.linkHref}
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "2px",
              color: "oklch(0.25 0 0)",
            }}
          >
            {joinInfo.linkText}
          </a>
          。
        </p>
      </div>
    </section>
  );
}
