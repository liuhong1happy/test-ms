# Machine Society — Content Update Guide

This directory contains all article content for the Machine Society website.
Each product and research article is a standalone Markdown (`.md`) file.

---

## Directory Structure

```
content/
├── products/          ← Product detail pages
│   ├── ms-1.md
│   ├── ms-agent.md
│   ├── ms-embed.md
│   └── ms-vision.md
│
└── research/          ← Research article pages
    ├── scaling-reasoning.md
    ├── sparse-attention.md
    ├── reward-modeling.md
    ├── multimodal-grounding.md
    └── inference-efficiency.md
```

---

## How to Add New Content

### Step 1 — Create the Markdown file

**For a new product:**
```
client/src/content/products/your-product-slug.md
```

**For a new research article:**
```
client/src/content/research/your-article-slug.md
```

The slug must be lowercase, hyphen-separated, e.g. `ms-vision`, `reward-modeling`.

---

### Step 2 — Add metadata to `content.ts`

Open `client/src/data/content.ts` and add an entry to the appropriate array.

**Product entry:**
```typescript
{
  slug: "your-product-slug",        // must match filename
  name: "Product Name",
  tagline: "One-line description",
  label: "Model",                   // e.g. "Model", "Agent", "Tool"
  date: "March 2026",
  status: "available",              // "available" | "beta" | "in-development"
  image: "https://cdn.../image.webp", // upload via: manus-upload-file --webdev
  featured: false,
}
```

**Research entry:**
```typescript
{
  slug: "your-article-slug",        // must match filename
  title: "Full Article Title",
  label: "Research",
  date: "March 10, 2026",
  readTime: "12 min read",
  image: "https://cdn.../image.webp",
  featured: false,
  summary: "2-3 sentence abstract shown in list view.",
}
```

---

### Step 3 — Done

The detail page renders automatically at:
- `/product/your-product-slug`
- `/research/your-article-slug`

No code changes required.

---

## Markdown Syntax Reference

### Text Formatting

```markdown
## Section Heading
### Sub-heading
#### Small heading (renders as monospace label)

**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### Lists

```markdown
- Unordered item
- Another item
  - Nested item

1. Ordered item
2. Another item

- [x] Completed task
- [ ] Pending task
```

### Code Blocks

````markdown
```python
def hello():
    print("Hello, world!")
```

```typescript
const x: number = 42;
```
````

### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Cell     | Cell     | Cell     |
| Cell     | Cell     | Cell     |
```

### Blockquotes

```markdown
> This is a highlighted quote or key insight.
> It can span multiple lines.
```

### Images

```markdown
![Alt text](https://cdn.example.com/image.jpg)
![Alt text](https://cdn.example.com/image.jpg "Caption shown below image")
```

To use your own images:
1. Upload: `manus-upload-file --webdev path/to/image.jpg`
2. Copy the returned CDN URL into your Markdown

### Video Embeds

```markdown
<!-- video: https://www.youtube.com/watch?v=VIDEO_ID -->
<!-- video: https://youtu.be/VIDEO_ID -->
<!-- video: https://cdn.example.com/demo.mp4 -->
```

### Horizontal Divider

```markdown
---
```

### Links

```markdown
[Link text](https://example.com)
```

External links open in a new tab automatically.

---

## Tips

- The **summary** field in `content.ts` is shown in list/card views — keep it to 2-3 sentences
- The `.md` file body is shown on the detail page — write as much as needed
- Use `## ` headings to create clear sections; they render with a subtle divider line
- Tables are great for benchmark comparisons, feature matrices, or structured data
- Video embeds work for YouTube links or direct `.mp4` URLs
- Images in articles should be uploaded to CDN first (not local paths)
