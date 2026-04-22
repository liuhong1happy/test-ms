/*
 * ArticleList Component
 * Design: Academic Minimalism
 * - Bullet dot on the left
 * - Title (bold, link) + date on same line
 * - Summary below in muted color
 * - Featured items have dashed border
 * - NEW badge for latest items
 */

import { articles } from "@/data/siteConfig";

function ArticleItem({
  title,
  date,
  summary,
  href,
  isNew,
  featured,
}: (typeof articles)[0]) {
  const content = (
    <div className="article-item">
      {/* Bullet dot */}
      <div className="article-dot" style={{ marginTop: "0.42rem" }} />

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title row */}
        <div
          className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5"
          style={{ marginBottom: "0.2rem" }}
        >
          <a
            href={href}
            className="font-medium text-foreground hover:underline"
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "13.5px",
              textUnderlineOffset: "2px",
            }}
          >
            {isNew && <span className="badge-new">NEW</span>}
            {title}
          </a>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11.5px",
              color: "oklch(0.55 0 0)",
              flexShrink: 0,
            }}
          >
            {date}
          </span>
        </div>

        {/* Summary */}
        <p
          style={{
            fontSize: "13px",
            color: "oklch(0.45 0 0)",
            lineHeight: "1.55",
            margin: 0,
          }}
        >
          {summary}
        </p>
      </div>
    </div>
  );

  if (featured) {
    return (
      <div className="featured-card" style={{ marginBottom: "0.6rem" }}>
        {content}
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "0.85rem" }}>
      {content}
    </div>
  );
}

export default function ArticleList() {
  return (
    <section id="updates" className="mb-8">
      <div className="container">
        <div className="fade-in">
          {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
