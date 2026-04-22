<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  Machine Society — Product Content File                     ║
  ║  File: client/src/content/products/ms-vision.md             ║
  ║  Status: IN DEVELOPMENT                                      ║
  ║                                                              ║
  ║  HOW TO EDIT THIS FILE                                       ║
  ║  ─────────────────────                                       ║
  ║  Replace the content below with your actual product info.    ║
  ║  Metadata (name, tagline, image, status) → content.ts        ║
  ║  Change status in content.ts:                                 ║
  ║    "available" | "beta" | "in-development"                    ║
  ║                                                              ║
  ║  RICH MEDIA SYNTAX                                           ║
  ║  ─────────────────────                                       ║
  ║  Image:  ![Alt](URL "Caption")                              ║
  ║  Video:  <!-- video: https://youtube.com/watch?v=ID -->     ║
  ║  Table:  | Col 1 | Col 2 |  (GFM)                           ║
  ║  Code:   ```python ... ```                                   ║
  ╚══════════════════════════════════════════════════════════════╝
-->

<!-- ── IMAGE EXAMPLE ───────────────────────────────────────────────────────────────
     Replace with your concept art or architecture diagram.
     Upload: manus-upload-file ‑‑webdev path/to/image.png
     ─────────────────────────────────────────────────────────────── -->
![MS-Vision concept](/images/card_model.webp "MS-Vision — multimodal perception and reasoning (concept art)")

MS-Vision is our next-generation multimodal model, currently in active development. It is designed to understand and reason across images, video, diagrams, and text simultaneously — enabling a new class of applications that require visual intelligence.

> **Status: In Development** — MS-Vision is not yet available for external access. This page describes our current research direction and planned capabilities.

## What We're Building

Current vision-language models treat images as flat feature vectors. MS-Vision takes a different approach: it builds a structured spatial representation of visual inputs, enabling genuine spatial reasoning — understanding relationships, counting objects, interpreting diagrams, and tracking changes across frames.

## Planned Capabilities

| Capability              | Description                                                   | Status      |
|-------------------------|---------------------------------------------------------------|-------------|
| Image understanding     | Describe, analyze, and answer questions about images          | In progress |
| Diagram interpretation  | Parse flowcharts, circuit diagrams, architectural drawings    | In progress |
| Video reasoning         | Understand sequences of frames, track objects over time       | Planned     |
| Document parsing        | Extract structured data from PDFs, forms, and tables          | In progress |
| Cross-modal retrieval   | Search images using text queries and vice versa               | Planned     |
| Spatial reasoning       | Count, locate, and compare objects within a scene             | Research    |

## Research Foundation

MS-Vision builds on three internal research threads:

1. **Grounding Language Models in Perceptual Space** — Aligning language representations with visual features at multiple levels of abstraction
2. **Structured spatial encoding** — Representing visual scenes as graphs rather than flat feature maps
3. **Cross-modal chain-of-thought** — Extending our reasoning supervision techniques to multimodal inputs

## Roadmap

| Milestone                    | Target  |
|------------------------------|---------|
| Internal alpha (image only)  | Q2 2026 |
| Partner beta (image + docs)  | Q3 2026 |
| Video understanding preview  | Q4 2026 |
| General availability         | 2027    |

## Stay Updated

MS-Vision is not yet available for external access. We will notify registered partners when beta access opens. [Contact us](#) to express interest.

---

*Last updated: March 2026*
