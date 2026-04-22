/**
 * useMarkdown — Machine Society
 * ─────────────────────────────
 * Loads a Markdown file from the content directory at build time via Vite glob.
 *
 * HOW IT WORKS
 * ─────────────
 * Vite's import.meta.glob with { query: "?raw" } bundles all .md files at
 * build time — no runtime HTTP requests, works in static deployments.
 *
 * HOW TO ADD NEW CONTENT
 * ──────────────────────
 * 1. Create a new .md file:
 *    - Products:  client/src/content/products/{your-slug}.md
 *    - Research:  client/src/content/research/{your-slug}.md
 *
 * 2. Add metadata to client/src/data/content.ts:
 *    - For products: add to the `products` array
 *    - For research: add to the `research` array
 *    - The `slug` field MUST match the filename (without .md)
 *
 * 3. That's it — the detail page renders automatically.
 *
 * SUPPORTED MARKDOWN SYNTAX
 * ──────────────────────────
 * Standard:
 *   # H1  ## H2  ### H3  #### H4
 *   **bold**  *italic*  `inline code`
 *   ```language\ncode block\n```
 *   - unordered list
 *   1. ordered list
 *   > blockquote
 *   [link text](url)
 *   ![alt text](image-url "optional caption")
 *   ---  (horizontal rule)
 *
 * GFM (GitHub Flavored Markdown):
 *   | Column 1 | Column 2 |   (tables)
 *   |----------|----------|
 *   | cell     | cell     |
 *
 *   - [x] checked task
 *   - [ ] unchecked task
 *
 *   ~~strikethrough~~
 *
 * Video embeds (custom syntax):
 *   <!-- video: https://www.youtube.com/watch?v=VIDEO_ID -->
 *   <!-- video: https://youtu.be/VIDEO_ID -->
 *   <!-- video: https://cdn.example.com/video.mp4 -->
 *
 * Images in articles:
 *   Upload your image via: manus-upload-file --webdev path/to/image.jpg
 *   Then use the returned CDN URL:
 *   ![Description](https://cdn.example.com/image.jpg "Caption")
 */

import { useEffect, useState } from "react";

// Vite static glob — bundles all .md files at build time
const productFiles = import.meta.glob("../content/products/*.md", {
  query: "?raw",
  import: "default",
});
const researchFiles = import.meta.glob("../content/research/*.md", {
  query: "?raw",
  import: "default",
});

type ContentType = "products" | "research";

interface UseMarkdownResult {
  content: string;
  loading: boolean;
  error: string | null;
}

export function useMarkdown(type: ContentType, slug: string): UseMarkdownResult {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("No slug provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const files = type === "products" ? productFiles : researchFiles;
    const key = `../content/${type}/${slug}.md`;
    const loader = files[key];

    if (!loader) {
      setError(`Content file not found: ${slug}.md`);
      setLoading(false);
      return;
    }

    loader()
      .then((raw) => {
        setContent(raw as string);
        setLoading(false);
      })
      .catch((err) => {
        setError(String(err));
        setLoading(false);
      });
  }, [type, slug]);

  return { content, loading, error };
}
