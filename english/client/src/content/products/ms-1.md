<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  Machine Society — Product Content File                     ║
  ║  File: client/src/content/products/ms-1.md                  ║
  ║                                                              ║
  ║  HOW TO EDIT THIS FILE                                       ║
  ║  ─────────────────────                                       ║
  ║  Replace the content below with your actual product info.    ║
  ║  The metadata (name, tagline, image, status) is configured   ║
  ║  separately in: client/src/data/content.ts                   ║
  ║                                                              ║
  ║  SUPPORTED RICH MEDIA                                        ║
  ║  ─────────────────────                                       ║
  ║  Images:  ![Alt text](URL "Optional caption")               ║
  ║  Videos:  <!-- video: https://youtube.com/watch?v=ID -->    ║
  ║           <!-- video: https://cdn.example.com/demo.mp4 --> ║
  ║  Tables:  | Col 1 | Col 2 |  (GFM format)                   ║
  ║  Code:    ```python ... ```  (with syntax highlighting)      ║
  ║  Quote:   > blockquote text                                  ║
  ╚══════════════════════════════════════════════════════════════╝
-->

MS-1 is Machine Society's most capable reasoning model to date. Trained on a diverse corpus of scientific literature, code, and structured reasoning traces, MS-1 demonstrates exceptional performance on complex multi-step problems requiring deep logical inference and long-horizon planning.

## Overview

The model employs a sparse mixture-of-experts architecture with 72 billion active parameters, enabling both efficiency and depth. A novel chain-of-thought supervision technique allows the model to externalize its reasoning process, making outputs more interpretable and verifiable.

> MS-1 is designed around a single principle: reasoning should be visible, verifiable, and improvable — not a black box.

<!-- ── IMAGE EXAMPLE ──────────────────────────────────────────────
     Replace the URL below with your actual image URL.
     Upload images via: manus-upload-file ‑‑webdev path/to/image.jpg
     Then paste the returned CDN URL here.
     ─────────────────────────────────────────────────────────── -->
![MS-1 Architecture Overview](/images/hero_product.webp "MS-1 model architecture — sparse mixture-of-experts with chain-of-thought supervision")

## Benchmark Performance

| Benchmark | MS-1  | Previous Best | Δ      |
|-----------|-------|---------------|--------|
| MATH-500  | 91.4% | 84.2%         | +7.2%  |
| HumanEval | 88.7% | 82.1%         | +6.6%  |
| MMLU      | 89.3% | 86.4%         | +2.9%  |
| ARC-C     | 96.1% | 93.8%         | +2.3%  |
| GSM8K     | 97.2% | 95.1%         | +2.1%  |

## Demo Video

<!-- ── VIDEO EXAMPLE ──────────────────────────────────────────────
     Replace the URL below with your actual video URL.
     Supports: YouTube links, youtu.be short links, or direct .mp4
     ─────────────────────────────────────────────────────────── -->
<!-- video: https://www.youtube.com/watch?v=dQw4w9WgXcQ -->

## Quick Start

Install the client library and make your first request:

```bash
pip install ms-client
```

```python
import ms_client

client = ms_client.Client(api_key="YOUR_API_KEY")

response = client.chat.complete(
    model="ms-1",
    messages=[
        {"role": "user", "content": "Solve step by step: If a train travels at 80 km/h for 2.5 hours, how far does it go?"}
    ],
    reasoning=True
)

print(response.content)
# The train travels 200 km.

print(response.reasoning_trace)
# Step 1: Identify the formula — distance = speed × time
# Step 2: Substitute values — distance = 80 × 2.5
# Step 3: Calculate — distance = 200 km
```

## Architecture Highlights

- **Sparse MoE** — 72B active parameters from a 400B total pool; only relevant experts activate per token
- **Chain-of-thought supervision** — Trained on 2.4M verified reasoning traces across math, logic, and science
- **128K context window** — Maintains coherence over extended documents and multi-turn conversations
- **Calibrated confidence** — Expresses uncertainty appropriately rather than confabulating

## Key Design Principles

1. **Verifiable reasoning** — Every response can include an auditable reasoning trace
2. **Instruction fidelity** — Precise adherence to complex, multi-part instructions
3. **Graceful uncertainty** — The model says "I don't know" rather than fabricating answers
4. **Efficient inference** — Sparse routing reduces compute by ~40% vs. dense equivalents

## Availability

MS-1 is available via API for enterprise partners. Contact us to request access or discuss deployment options.

---

*Last updated: March 2026*
