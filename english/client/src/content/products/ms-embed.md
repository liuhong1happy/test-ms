<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  Machine Society — Product Content File                     ║
  ║  File: client/src/content/products/ms-embed.md              ║
  ║                                                              ║
  ║  HOW TO EDIT THIS FILE                                       ║
  ║  ─────────────────────                                       ║
  ║  Replace the content below with your actual product info.    ║
  ║  Metadata (name, tagline, image, status) → content.ts        ║
  ║                                                              ║
  ║  RICH MEDIA SYNTAX                                           ║
  ║  ─────────────────────                                       ║
  ║  Image:  ![Alt](URL "Caption")                              ║
  ║  Video:  <!-- video: https://youtube.com/watch?v=ID -->     ║
  ║  Table:  | Col 1 | Col 2 |  (GFM)                           ║
  ║  Code:   ```python ... ```                                   ║
  ╚══════════════════════════════════════════════════════════════╝
-->

MS-Embed produces high-fidelity semantic vector representations of text, code, and structured data. Designed for retrieval, clustering, and classification tasks at scale, it consistently outperforms general-purpose embedding models on domain-specific benchmarks.

<!-- ── IMAGE EXAMPLE ───────────────────────────────────────────────────────────────
     Replace with your actual diagram or screenshot.
     Upload: manus-upload-file ‑‑webdev path/to/image.png
     ─────────────────────────────────────────────────────────────── -->
![MS-Embed semantic space](/images/card_infra.webp "t-SNE visualization of embedding clusters across technical domains")

## Model Variants

| Model              | Dimensions | Context    | Best For                        |
|--------------------|------------|------------|---------------------------------|
| ms-embed-small     | 512        | 8K tokens  | Fast retrieval, low latency     |
| ms-embed-large     | 1536       | 32K tokens | High-accuracy semantic search   |
| ms-embed-code      | 1024       | 16K tokens | Code search and deduplication   |

## Benchmark Results

| Task                  | MS-Embed-L | OpenAI ada-002 | Cohere v3 |
|-----------------------|------------|----------------|-----------|
| MTEB Retrieval (avg)  | 68.4       | 61.0           | 64.5      |
| STS Benchmark         | 87.2       | 80.9           | 83.1      |
| Code Search (CSN)     | 74.8       | 65.3           | 68.9      |
| Long-doc Clustering   | 52.1       | 44.7           | 48.3      |

## Quick Start

```python
import ms_client

client = ms_client.Client(api_key="YOUR_API_KEY")

# Embed a single string
embedding = client.embeddings.create(
    model="ms-embed-large",
    input="What are the key principles of transformer architecture?"
)

vector = embedding.data[0].embedding  # list of 1536 floats

# Batch embedding
texts = ["Document one", "Document two", "Document three"]
batch = client.embeddings.create(model="ms-embed-large", input=texts)
vectors = [item.embedding for item in batch.data]
```

## Semantic Search Example

```python
import numpy as np

def cosine_similarity(a, b):
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Build a simple in-memory index
documents = [
    "Machine learning is a subset of artificial intelligence.",
    "Neural networks are inspired by the human brain.",
    "Transformers use self-attention mechanisms.",
]

doc_embeddings = client.embeddings.create(
    model="ms-embed-large",
    input=documents
).data

query = "How do attention mechanisms work?"
query_vec = client.embeddings.create(
    model="ms-embed-large",
    input=query
).data[0].embedding

scores = [cosine_similarity(query_vec, d.embedding) for d in doc_embeddings]
best_match = documents[scores.index(max(scores))]
print(f"Most relevant: {best_match}")
```

## Key Features

- **Long context** — Up to 32K tokens per document for ms-embed-large
- **Multilingual** — Trained on 50+ languages with cross-lingual retrieval support
- **Code-aware** — ms-embed-code understands syntax, semantics, and docstrings
- **Normalized outputs** — All vectors are L2-normalized for direct cosine similarity

## Availability

MS-Embed is **generally available** via API. Pricing is per token; volume discounts available for enterprise use.

---

*Last updated: November 2025*
