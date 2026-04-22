<!--
  Machine Society - Research Content File
  File: client/src/content/research/reward-modeling.md

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

We identify systematic miscalibration in reward models trained on human preference data and propose a calibration procedure that improves alignment stability across distribution shifts. Our method reduces reward hacking by 34% while maintaining or improving helpfulness scores.

## The Problem

Reward models trained on human preferences tend to be overconfident: they assign extreme scores to inputs that are only marginally better or worse than alternatives. This overconfidence drives policy models toward reward hacking — finding inputs that exploit the reward model's blind spots rather than genuinely improving quality.

> A miscalibrated reward model is not just inaccurate — it actively misleads the policy model toward degenerate behaviors.

## Calibration Method

We propose **Preference-Aware Temperature Scaling (PATS)**, a post-hoc calibration technique that:

1. Estimates the reward model's confidence distribution on a held-out preference dataset
2. Fits a temperature parameter per reward head using Platt scaling
3. Applies the calibrated temperatures at inference time without retraining

```python
from ms_alignment import RewardCalibrator

calibrator = RewardCalibrator(
    reward_model="ms-reward-v2",
    calibration_method="pats"
)

# Calibrate on held-out preference data
calibrator.fit(
    preference_dataset="human_prefs_validation",
    n_samples=50_000
)

# Use calibrated reward model in RLHF loop
calibrated_rm = calibrator.get_calibrated_model()
```

## Results

| Metric                        | Baseline RM | + PATS Calibration | Improvement |
|-------------------------------|-------------|---------------------|-------------|
| ECE (lower is better)         | 0.18        | 0.04                | -78%        |
| Reward hacking rate           | 12.3%       | 8.1%                | -34%        |
| Helpfulness (human eval)      | 71.4%       | 73.2%               | +1.8%       |
| Harmlessness (human eval)     | 88.9%       | 91.3%               | +2.4%       |
| Distribution shift robustness | 0.61        | 0.79                | +30%        |

## Analysis

We find that miscalibration is most severe in two regimes:

- **Near-tie preferences** — When human annotators are nearly split, the reward model tends to assign extreme scores
- **Out-of-distribution inputs** — Inputs that differ stylistically from the training distribution receive unreliable scores

PATS addresses both by learning a calibration function that maps raw reward scores to well-calibrated probabilities.

## Broader Implications

Reward model calibration is a largely overlooked component of the RLHF pipeline. Our results suggest that investing in calibration can yield alignment improvements comparable to collecting significantly more preference data — at a fraction of the cost.

---

*Published: January 29, 2026*
