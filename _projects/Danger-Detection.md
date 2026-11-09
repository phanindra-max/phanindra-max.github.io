---
layout: page
permalink: /projects/danger-detection/
title: Danger Detection with ML
description: Real-time computer vision prototype that detects firearms and fire in video streams and sends alerts with visual evidence
importance: 2
category: software
related_publications: false
---

Danger Detection is an open-source prototype that detects guns, rifles, and fire in video streams and sends an email alert with a captured image. I first built it for a competition in 2021 and later refactored and documented it for public use.

It received a **GW Open-Source Student Award in 2026**, and I presented it at the 2026 GW Open Source Conference in the lightning talk "Open Source AI for Real-Time Danger Detection."

## How It Works

A YOLOv3 model, run through OpenCV, processes frames from a webcam or video stream. When it detects a threat, the system captures the frame and sends a notification by email. It averages 25 frames per second on a CPU, and GPU acceleration is available through CUDA.

**Built With:** Python, OpenCV, YOLOv3, NumPy, SMTP

<div class="row justify-content-center mt-4">
    <div class="col-auto">
        <a href="https://github.com/Kalaga-Studio/danger-detection-with-ml" class="btn btn-outline-primary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
        </a>
    </div>
</div>
