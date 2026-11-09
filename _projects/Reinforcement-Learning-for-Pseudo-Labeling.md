---
layout: page
title: Reinforcement Learning for Pseudo-Labeling
description: Two approaches to selecting pseudo-labels with reinforcement learning, and what made them unstable
importance: 3
category: research
related_publications: false
---

Fall 2025 capstone for the George Washington University Data Science Program, with Aishwarya Maddula, Deepika Reddygari, and Prudhvi Chekuri. I was the corresponding author of the project paper.

## Overview

Semi-supervised learning trains a model on a small labeled set and a large unlabeled set. A common technique, pseudo-labeling, has the model assign labels to unlabeled data and then train on them. Its main risk is error propagation: incorrect pseudo-labels reinforce the model's own mistakes. Most methods select labels with fixed confidence thresholds. This project treats selection as a sequential decision problem and asks whether an agent can learn it.

## Approaches

**Custom environment with policy gradients (MNIST).** We built a Gymnasium environment, `PseudoLabelEnv`, in which an agent observes image features, model predictions, and entropy for each sample. The agent then assigns a label or skips the sample, and it is updated with REINFORCE.

**RLGSSL (CIFAR-10).** We implemented Reinforcement Learning-Guided Semi-Supervised Learning (Heidari et al., 2024), which uses the classifier itself as the policy. A reward based on mean squared error on Mixup data trains the model, and an exponential moving average teacher supplies more stable pseudo-labels.

## Our Extensions to RLGSSL

- A confidence bonus and a batch-level diversity bonus in the reward.
- Curriculum weighting and entropy regularization in the loss.

## Results

RLGSSL training on CIFAR-10 with 1,000 labels:

| Epoch      | Accuracy (%) |
| ---------- | ------------ |
| 5 (warmup) | 29.12        |
| 60         | 36.51        |
| 120        | 43.06        |
| 175        | 45.55        |
| 240        | 36.20        |

The best accuracy was 45.55% at epoch 175. Runs crashed around epoch 240, and results remained below state-of-the-art methods such as FixMatch. Incomplete training runs and the difficulty of tuning reinforcement learning components alongside a supervised classifier both contributed.

## Findings

- **Reward design was the deciding factor.** Sparse rewards were too weak for the agent to learn fine-grained labeling policies, while dense confidence-based rewards added significant variance.
- **The diversity bonus destabilized training.** Without careful clipping, it led to exploding gradients.
- **Subtle implementation errors had large effects.** An inverted reinforcement learning loss encouraged the model to maximize error, and a misapplied stop-gradient froze feature learning.
- **Loss weights mattered.** When the supervised weight was low, the agent gamed the reward rather than learning generalizable features.

## Next Steps

- Apply stability techniques such as trust region clipping and gradient normalization.
- Complete training runs on GPU infrastructure and compare directly with FixMatch and MixMatch.
- Register the environment as a Gymnasium package so that others can use it as a benchmark.

## Tools

Python, PyTorch, torchvision, Gymnasium, NumPy, scikit-learn, Matplotlib, Seaborn, and TensorBoard.

<div class="row justify-content-center mt-4">
    <div class="col-auto">
        <a href="https://github.com/phanindra-max/Reinforcement-Learning-for-Pseudolabeling" class="btn btn-outline-primary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
        </a>
        <a href="https://github.com/phanindra-max/Reinforcement-Learning-for-Pseudolabeling/blob/main/research_paper/ResearchPaper.pdf" class="btn btn-outline-secondary" target="_blank">
            <i class="fas fa-file-pdf"></i> Project Paper
        </a>
    </div>
</div>
