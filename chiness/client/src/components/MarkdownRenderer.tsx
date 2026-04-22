/*
 * MarkdownRenderer — Machine Society
 * Design: Ink & Void
 *
 * Full-featured Markdown renderer with custom styled components.
 * Uses react-markdown v10 + remark-gfm.
 *
 * ── Supported Markdown syntax ────────────────────────────────
 *
 *  Headings:      # H1  ## H2  ### H3  #### H4
 *  Emphasis:      **bold**  *italic*  ~~strikethrough~~
 *  Code:          `inline`  or fenced blocks (``` ``` ```)
 *  Lists:         - unordered   1. ordered   - [x] task
 *  Blockquote:    > quote text
 *  Link:          [text](url)
 *  Image:         ![alt](url)  or  ![alt](url "caption")
 *  Table (GFM):   | Col | Col |  /  |-----|-----|  /  | val | val |
 *  Divider:       ---
 *
 * ── Video embed (custom HTML comment) ────────────────────────
 *
 *  YouTube:   <!-- video: https://www.youtube.com/watch?v=ID -->
 *  Short URL: <!-- video: https://youtu.be/ID -->
 *  Direct:    <!-- video: https://cdn.example.com/video.mp4 -->
 *
 * ── Images in articles ───────────────────────────────────────
 *
 *  Upload:  manus-upload-file --webdev path/to/image.jpg
 *  Use:     ![Description](https://cdn.../image.jpg "Caption")
 *
 * ── Fix notes ─────────────────────────────────────────────────
 *
 *  1. react-markdown wraps <img> in <p>. We override `p` to detect
 *     image-only paragraphs and render them as <div> instead.
 *  2. `img` renders as <div> wrapper (not <figure>) to avoid
 *     <p> > <figure> invalid nesting.
 *  3. `a` component uses simple inline type to avoid Vite JSX parse errors.
 *  4. `pre` component handles full code block rendering.
 */

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// ── Video helpers ────────────────────────────────────────────────
function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtube\.com\/watch\?v=([^&\s]+)/,
    /youtu\.be\/([^?\s]+)/,
    /youtube\.com\/embed\/([^?\s]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function VideoEmbed({ url }: { url: string }) {
  const ytId = getYouTubeId(url);
  if (ytId) {
    return (
      <div style={{
        position: "relative", width: "100%", paddingTop: "56.25%",
        borderRadius: "8px", overflow: "hidden", margin: "2rem 0",
        background: "#0d1117", border: "1px solid #1E2A3A",
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${ytId}`}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>
    );
  }
  return (
    <div style={{ margin: "2rem 0" }}>
      <video controls style={{
        width: "100%", borderRadius: "8px", border: "1px solid #1E2A3A",
        background: "#0d1117", display: "block",
      }}>
        <source src={url} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

// ── Pre-process: replace video HTML comments with placeholders ──
function preprocessMarkdown(raw: string): { processed: string; videos: Map<string, string> } {
  const videos = new Map<string, string>();
  let idx = 0;
  const processed = raw.replace(
    /<!--\s*video:\s*(https?:\/\/[^\s>]+)\s*-->/gi,
    (_, url) => {
      const key = `__VIDEO_EMBED_${idx++}__`;
      videos.set(key, url.trim());
      return `\n\n${key}\n\n`;
    }
  );
  return { processed, videos };
}

// ── Extract text content from React children ─────────────────────
function extractText(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(extractText).join("");
  if (React.isValidElement(children)) {
    const el = children as React.ReactElement<{ children?: React.ReactNode }>;
    return extractText(el.props.children);
  }
  return "";
}

// ── Check if children contain an image node ──────────────────────
function hasImageChild(children: React.ReactNode): boolean {
  const arr = React.Children.toArray(children);
  return arr.some((child) => {
    if (!React.isValidElement(child)) return false;
    const el = child as React.ReactElement<Record<string, unknown>>;
    // react-markdown renders img as a React element with type "img"
    if (el.type === "img") return true;
    // or as a custom component that has src prop
    if (typeof el.props === "object" && "src" in el.props) return true;
    return false;
  });
}

// ── Custom component map ─────────────────────────────────────────
type Components = Parameters<typeof ReactMarkdown>[0]["components"];

function buildComponents(videos: Map<string, string>): Components {
  return {

    // ── Paragraph ────────────────────────────────────────────────
    // Upgrades to <div> when wrapping block-level children (images)
    // to avoid invalid <p> > <figure>/<div> nesting.
    p({ children }) {
      const text = extractText(children).trim();
      // Video placeholder
      if (videos.has(text)) {
        return <VideoEmbed url={videos.get(text)!} />;
      }
      // Image-only paragraph → render as div
      if (hasImageChild(children)) {
        return <div style={{ margin: "2rem 0" }}>{children}</div>;
      }
      return (
        <p style={{ fontSize: "15px", color: "#b0aca6", lineHeight: 1.8, marginBottom: "1.1rem" }}>
          {children}
        </p>
      );
    },

    // ── Headings ─────────────────────────────────────────────────
    h1({ children }) {
      return (
        <h1 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 500,
          color: "#E8E4DE", letterSpacing: "-0.025em",
          lineHeight: 1.2, marginTop: "3rem", marginBottom: "1rem",
        }}>{children}</h1>
      );
    },
    h2({ children }) {
      return (
        <h2 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px", fontWeight: 500, color: "#E8E4DE",
          letterSpacing: "-0.015em", lineHeight: 1.25,
          marginTop: "2.5rem", marginBottom: "0.75rem",
          paddingBottom: "0.5rem", borderBottom: "1px solid #1E2A3A",
        }}>{children}</h2>
      );
    },
    h3({ children }) {
      return (
        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "15px", fontWeight: 500, color: "#ccc",
          letterSpacing: "-0.01em", marginTop: "2rem", marginBottom: "0.5rem",
        }}>{children}</h3>
      );
    },
    h4({ children }) {
      return (
        <h4 style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "11px", fontWeight: 500, color: "#666",
          letterSpacing: "0.08em", textTransform: "uppercase",
          marginTop: "1.5rem", marginBottom: "0.4rem",
        }}>{children}</h4>
      );
    },

    // ── Lists ────────────────────────────────────────────────────
    ul({ children }) {
      return (
        <ul style={{ listStyle: "none", padding: 0, paddingLeft: "0.25rem", marginBottom: "1.1rem" }}>
          {children}
        </ul>
      );
    },
    ol({ children }) {
      return (
        <ol style={{ paddingLeft: "1.5rem", marginBottom: "1.1rem" }}>
          {children}
        </ol>
      );
    },
    li({ children }) {
      return (
        <li style={{
          position: "relative", paddingLeft: "1.25rem",
          marginBottom: "0.4rem", fontSize: "15px",
          color: "#b0aca6", lineHeight: 1.75,
        }}>
          <span style={{
            position: "absolute", left: 0, top: "0.72em",
            width: "4px", height: "4px", borderRadius: "50%",
            background: "#4A5A6E", display: "inline-block",
          }} />
          {children}
        </li>
      );
    },

    // ── Blockquote ───────────────────────────────────────────────
    blockquote({ children }) {
      return (
        <blockquote style={{
          borderLeft: "2px solid #2A3A50", paddingLeft: "1.25rem",
          margin: "1.75rem 0", color: "#7A8A9E", fontStyle: "italic",
        }}>
          {children}
        </blockquote>
      );
    },

    // ── Code block (pre > code) ───────────────────────────────────
    // react-markdown v10 renders fenced code as <pre><code className="language-xxx">
    // We intercept at `pre` level to render the entire styled block.
    pre({ children }) {
      let language = "";
      let codeText = "";

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          const el = child as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
          const cls = el.props.className ?? "";
          const match = cls.match(/language-(\w+)/);
          if (match) language = match[1];
          codeText = extractText(el.props.children);
        }
      });

      if (!codeText) codeText = extractText(children);

      return (
        <div style={{ margin: "1.5rem 0" }}>
          {language && (
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "0.45rem 1rem",
              background: "#0d1117", borderRadius: "6px 6px 0 0",
              border: "1px solid #1E2A3A", borderBottom: "1px solid #0d1117",
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: "11px",
                color: "#4A5A6E", letterSpacing: "0.06em",
              }}>
                {language}
              </span>
            </div>
          )}
          <pre style={{
            background: "#0d1117",
            border: "1px solid #1E2A3A",
            borderTop: language ? "none" : "1px solid #1E2A3A",
            borderRadius: language ? "0 0 6px 6px" : "6px",
            padding: "1.1rem 1.25rem",
            overflowX: "auto",
            margin: 0,
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            lineHeight: 1.7,
            color: "#9AACBF",
            whiteSpace: "pre",
          }}>
            <code style={{ fontFamily: "inherit", fontSize: "inherit", color: "inherit", background: "none", border: "none", padding: 0 }}>
              {codeText}
            </code>
          </pre>
        </div>
      );
    },

    // ── Inline code ───────────────────────────────────────────────
    code({ children, className }) {
      if (className?.startsWith("language-")) return null;
      return (
        <code style={{
          fontFamily: "'DM Mono', monospace", fontSize: "13px",
          background: "rgba(138, 180, 248, 0.08)",
          border: "1px solid rgba(138, 180, 248, 0.15)",
          padding: "0.15em 0.4em", borderRadius: "3px",
          color: "#8AB4F8",
        }}>
          {children}
        </code>
      );
    },

    // ── Images ────────────────────────────────────────────────────
    // Rendered as div wrapper (not figure) to avoid <p> > <figure> nesting.
    img({ src, alt, title }) {
      return (
        <div style={{ margin: "2rem 0" }}>
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%", borderRadius: "8px",
              border: "1px solid #1E2A3A", display: "block",
            }}
            loading="lazy"
          />
          {(title || alt) && (
            <div style={{
              marginTop: "0.6rem", fontSize: "12px",
              fontFamily: "'DM Mono', monospace",
              color: "#4A5A6E", textAlign: "center",
            }}>
              {title || alt}
            </div>
          )}
        </div>
      );
    },

    // ── Links ─────────────────────────────────────────────────────
    a({ href, children }) {
      const isExternal = typeof href === "string" && href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          style={{
            color: "#8AB4F8", textDecoration: "underline",
            textDecorationColor: "rgba(138,180,248,0.3)",
            transition: "text-decoration-color 0.15s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecorationColor = "rgba(138,180,248,0.8)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecorationColor = "rgba(138,180,248,0.3)"; }}
        >
          {children}
        </a>
      );
    },

    // ── Tables (GFM) ─────────────────────────────────────────────
    table({ children }) {
      return (
        <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
          <table style={{
            width: "100%", borderCollapse: "collapse",
            fontSize: "14px", fontFamily: "'DM Sans', sans-serif",
          }}>
            {children}
          </table>
        </div>
      );
    },
    thead({ children }) {
      return <thead style={{ borderBottom: "1px solid #1E2A3A" }}>{children}</thead>;
    },
    th({ children }) {
      return (
        <th style={{
          padding: "0.6rem 1rem", textAlign: "left",
          fontFamily: "'DM Mono', monospace", fontSize: "11px",
          letterSpacing: "0.06em", textTransform: "uppercase",
          color: "#4A5A6E", fontWeight: 500,
        }}>
          {children}
        </th>
      );
    },
    td({ children }) {
      return (
        <td style={{
          padding: "0.6rem 1rem", borderBottom: "1px solid #1A2535",
          color: "#9AACBF", verticalAlign: "top",
        }}>
          {children}
        </td>
      );
    },
    tr({ children }) {
      return (
        <tr
          style={{ transition: "background 0.1s" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(138,180,248,0.03)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
        >
          {children}
        </tr>
      );
    },

    // ── Misc ─────────────────────────────────────────────────────
    hr() {
      return <hr style={{ border: "none", borderTop: "1px solid #1E2A3A", margin: "2.5rem 0" }} />;
    },
    strong({ children }) {
      return <strong style={{ color: "#E8E4DE", fontWeight: 500 }}>{children}</strong>;
    },
    em({ children }) {
      return <em style={{ color: "#c8c4be", fontStyle: "italic" }}>{children}</em>;
    },
    del({ children }) {
      return <del style={{ color: "#4A5A6E", textDecoration: "line-through" }}>{children}</del>;
    },
  };
}

// ── Main export ──────────────────────────────────────────────────
interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { processed, videos } = preprocessMarkdown(content);
  const components = buildComponents(videos);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
