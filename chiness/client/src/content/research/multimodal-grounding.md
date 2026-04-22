<!--
  Machine Society - Research Content File
  File: client/src/content/research/multimodal-grounding.md

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

We present a new training paradigm for multimodal models that improves visual grounding by aligning language representations with perceptual features at multiple levels of abstraction. Our approach achieves state-of-the-art results on visual question answering, referring expression comprehension, and cross-modal retrieval benchmarks.

## Motivation

Standard vision-language models align image and text representations at a single level — typically the output of a visual encoder and the input embedding of a language model. This coarse alignment is sufficient for image captioning but fails on tasks requiring fine-grained spatial understanding.

> The gap between "seeing" and "understanding" in current models is not a data problem — it is an architectural one.

## Method: Hierarchical Perceptual Alignment (HPA)

We introduce **Hierarchical Perceptual Alignment**, which aligns language representations with visual features at three levels:

| Level  | Visual Features              | Language Features           | Alignment Target            |
|--------|------------------------------|-----------------------------|-----------------------------|
| Pixel  | Low-level edges, textures    | Character/subword tokens    | Fine-grained visual details |
| Region | Object parts, spatial layout | Noun phrases, attributes    | Object-level grounding      |
| Scene  | Global context, relationships| Full sentences, paragraphs  | Compositional understanding |

Each alignment level uses a separate contrastive loss, and the three losses are combined with learned weights during training.

## Training Setup

```python
from ms_multimodal import HierarchicalAligner

model = HierarchicalAligner(
    vision_encoder="ms-vit-large",
    language_model="ms-1-7b",
    alignment_levels=["pixel", "region", "scene"],
    contrastive_temperature=0.07
)

trainer = model.get_trainer(
    dataset="ms_multimodal_v2",
    batch_size=512,
    learning_rate=1e-4,
    warmup_steps=5000
)

trainer.train(epochs=3)
```

## Results

| Benchmark              | HPA (Ours) | CLIP ViT-L | BLIP-2 | Improvement |
|------------------------|------------|------------|--------|-------------|
| VQAv2 (test-dev)       | 82.4%      | 76.1%      | 82.2%  | +0.2%       |
| RefCOCO+ (val)         | 79.8%      | 68.3%      | 74.5%  | +5.3%       |
| COCO Retrieval (R@1)   | 88.7%      | 79.2%      | 85.4%  | +3.3%       |
| GQA (test-balanced)    | 64.3%      | 54.8%      | 61.7%  | +2.6%       |

## Qualitative Analysis

The region-level alignment shows the most significant gains on tasks requiring spatial reasoning. Models trained with HPA correctly answer questions like "Is the red object to the left or right of the blue one?" at a rate 18% higher than CLIP-based baselines.

## Future Work

We are extending HPA to video inputs, where temporal alignment adds a fourth level of abstraction. Preliminary results on video question answering are promising.

---

*Published: December 5, 2025*
