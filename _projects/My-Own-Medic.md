---
layout: page
title: My Own Medic (M.O.M)
description: AI-powered medical assistant for accessible health guidance using LLMs
img: assets/img/my-own-medic.jpeg
importance: 1
category: work
related_publications: false
---

An AI medical assistant that understands your health history. Instead of generic web searches that ignore your medications, allergies, and conditions, M.O.M delivers **personalized, context-aware health guidance** through a simple chat interface.

Selected for presentation at **UN Open-Source Week 2025** in New York.

<div class="row mt-4 mb-4 justify-content-center">
    <div class="col-md-10">
        {% include figure.liquid loading="eager" path="assets/img/UN Open Source Week 25.png" class="img-fluid rounded z-depth-1" caption="Selected for presentation at UN Open-Source Week 2025, New York" %}
    </div>
</div>

---

## The Problem

Searching "chest pain" online returns millions of results—from heart attacks to muscle strain. None of them know you're on blood thinners, allergic to aspirin, or had a stent placed last year. **Generic health advice can be dangerous.**

M.O.M solves this by loading your complete medical profile into every conversation, ensuring responses account for your unique situation.

---

## What It Does

**Context-Aware Medical Chat** — Ask health questions and get responses that consider your medications, allergies, diagnoses, and lab results. The AI won't suggest ibuprofen if you're on blood thinners.

**Conversation Summaries** — One click generates a structured summary of your chat, perfect for sharing with your doctor at your next appointment.

**Risk Assessments** — Based on your conversation and health data, the system flags potential short-term and long-term health considerations.


---

## Real-World Use Cases

**Rural Health Clinics** — In areas with limited access to specialists, M.O.M can help patients understand their conditions and prepare better questions for their next telemedicine appointment. A patient managing diabetes can ask about medication interactions before their quarterly check-in.

**Elderly Care** — Seniors often take multiple medications and struggle to remember contraindications. A caregiver can use M.O.M to quickly check if a new over-the-counter pain reliever is safe given the patient's existing prescriptions, without waiting for pharmacy callbacks.

---

## How It Works

The system uses a **32-billion parameter LLM (Qwen 2.5)** with custom prompt engineering. When you ask a question, your complete medical profile—demographics, medications, diagnoses, allergies, recent lab results—gets injected into the prompt context. The AI response is grounded in your specific health situation.


**Tech Stack:** Python • PHP • JavaScript • Groq API • Qwen 2.5 LLM

---

## HIPAA Compliance

The project incorporates data compliance measures including HIPAA considerations for handling sensitive medical information. Patient data is processed locally and never stored on external servers.

---

<div class="row justify-content-center">
    <div class="col-auto">
        <a href="https://github.com/GDSC-GWU/my-own-medic" class="btn btn-outline-primary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
        </a>
        <a href="https://github.com/GDSC-GWU/my-own-medic/blob/main/docs/README.md" class="btn btn-outline-secondary" target="_blank">
            <i class="fas fa-book"></i> Documentation
        </a>
    </div>
</div>
