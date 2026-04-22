<!--
  ╔══════════════════════════════════════════════════════════════╗
  ║  Machine Society — Research Content File                    ║
  ║  File: client/src/content/research/scaling-reasoning.md     ║
  ║                                                              ║
  ║  HOW TO EDIT THIS FILE                                       ║
  ║  ─────────────────────                                       ║
  ║  Replace the content below with your actual research text.   ║
  ║  Metadata (title, date, summary, image) → content.ts         ║
  ║                                                              ║
  ║  RICH MEDIA SYNTAX                                           ║
  ║  ─────────────────────                                       ║
  ║  Image:  ![Alt](URL "Caption")                              ║
  ║  Video:  <!-- video: https://youtube.com/watch?v=ID -->     ║
  ║  Table:  | Col 1 | Col 2 |  (GFM)                           ║
  ║  Code:   ```python ... ```                                   ║
  ╚══════════════════════════════════════════════════════════════╝
-->

This paper investigates the relationship between explicit reasoning supervision and model capability on complex logical tasks. We find that models trained with structured chain-of-thought traces exhibit significantly better generalization than those trained on final answers alone — and that this advantage scales predictably with model size.

## Key Findings

Our experiments across 12 reasoning benchmarks demonstrate a consistent scaling law: structured thought supervision improves performance by approximately 8–15% relative to standard fine-tuning, with gains increasing at larger model scales.

> The key insight is not that models learn *to reason*, but that they learn *to show their work* — and this externalization of reasoning is what enables verification and generalization.

## Methodology

We curate a dataset of 2.4 million reasoning traces across mathematics, formal logic, and scientific inference. Each trace is annotated with intermediate verification steps, allowing the model to learn not just what to conclude, but how to verify its own reasoning.

The annotation pipeline consists of three stages:

1. **Trace generation** — A teacher model generates candidate reasoning traces for each problem
2. **Verification** — Each intermediate step is checked against formal verifiers where possible
3. **Difficulty annotation** — Problems are scored by the number of valid reasoning paths

## Results

| Model Scale | Standard FT | + Structured Thought | Improvement |
|-------------|-------------|----------------------|-------------|
| 7B params   | 61.2%       | 68.4%                | +7.2%       |
| 13B params  | 67.8%       | 76.3%                | +8.5%       |
| 34B params  | 74.1%       | 84.9%                | +10.8%      |
| 70B params  | 79.6%       | 91.4%                | +11.8%      |

The scaling behavior is consistent: larger models benefit *more* from structured thought supervision, suggesting the technique becomes increasingly valuable as model capacity grows.

## Annotation Framework

```python
from ms_annotator import TraceAnnotator

annotator = TraceAnnotator(model="ms-1-teacher")

trace = annotator.generate(
    problem="If all A are B, and some B are C, what can we conclude?",
    verify_steps=True,
    difficulty_score=True
)

print(trace.steps)       # List of reasoning steps
print(trace.verified)    # Boolean: all steps formally verified
print(trace.difficulty)  # Float: 0.0 (easy) to 1.0 (hard)
```

## Implications

These results suggest that the quality of reasoning supervision may be as important as the quantity of training data for developing reliable AI systems. We release our annotation framework and evaluation suite alongside this paper.

## Future Work

We are investigating whether these patterns extend to multimodal reasoning tasks, and whether the annotation framework can be applied to domains where formal verification is unavailable, such as open-ended scientific reasoning.

---

*Published: March 10, 2026*
