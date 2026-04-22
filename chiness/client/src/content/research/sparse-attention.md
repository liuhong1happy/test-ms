<!--
  Machine Society - Research Content File
  File: client/src/content/research/sparse-attention.md

  HOW TO EDIT THIS FILE
  ---------------------
  Replace the content below with your actual research text.
  Metadata (title, date, summary, image) goes in: client/src/data/content.ts

  RICH MEDIA SYNTAX
  ---------------------
  Image:   ![Alt text](URL "Optional caption")
  Video:   <!-- video: https://youtube.com/watch?v=VIDEO_ID -->
           <!-- video: https://cdn.example.com/demo.mp4 -->
  Table:   | Col 1 | Col 2 |   (GFM format)
           |-------|-------|
           | cell  | cell  |
  Code:    ```python
           your code here
           ```
  Quote:   > blockquote text
  Bold:    **bold text**
  List:    - item one
           - item two
-->

We analyze the internal attention mechanisms of large language models trained on extended context windows, revealing that sparse, structured attention patterns emerge naturally during training on long-document tasks. This specialization — which arises without explicit supervision — has significant implications for efficient long-context inference.

## Background

Transformer models trained on long contexts are computationally expensive: attention complexity scales quadratically with sequence length. Prior work has proposed various sparse attention approximations, but these typically sacrifice quality for efficiency. We take a different approach: rather than imposing sparsity, we study the sparsity that emerges naturally.

## Observations

Through mechanistic interpretability techniques, we identify three distinct classes of attention heads in long-context models:

| Head Type               | Proportion | Function                                                   |
|-------------------------|------------|------------------------------------------------------------|
| Local context heads     | ~45%       | Attend to nearby tokens; handle syntax and local coherence |
| Global summary heads    | ~30%       | Attend to key sentences across the full document           |
| Cross-document linking  | ~25%       | Connect related concepts across distant passages           |

This specialization emerges without explicit supervision and is consistent across model sizes from 7B to 70B parameters.

## Efficiency Implications

By identifying and pruning attention heads that do not contribute to long-context tasks, we achieve:

- **40% reduction** in inference compute
- **Less than 2% degradation** on long-document benchmarks
- **Linear scaling** of effective attention with document length

```python
from ms_interpretability import AttentionAnalyzer

analyzer = AttentionAnalyzer(model="ms-1", layer_range=(0, 32))

# Classify attention heads by type
head_types = analyzer.classify_heads(
    corpus="long_document_benchmark",
    method="activation_patching"
)

# Identify heads safe to prune
prunable = [h for h in head_types if h.type == "local" and h.importance < 0.05]
print(f"Prunable heads: {len(prunable)} / {len(head_types)}")

# Apply pruning
pruned_model = analyzer.prune(prunable)
```

## Benchmark Results

| Model          | Full Attention | Pruned (40% less compute) | Quality Drop |
|----------------|----------------|---------------------------|--------------|
| MS-1 (7B)      | 74.3%          | 72.8%                     | -1.5%        |
| MS-1 (34B)     | 83.1%          | 81.7%                     | -1.4%        |
| MS-1 (70B)     | 89.4%          | 87.9%                     | -1.5%        |

## Implications for Architecture Design

These findings suggest that future long-context models could be designed with explicit head-type specialization from the start, rather than relying on post-hoc pruning. We are investigating whether targeted training objectives can induce this specialization more efficiently.

> Sparsity is not a constraint we impose — it is a structure the model discovers. Our job is to understand and exploit it.

---

*Published: February 18, 2026*
