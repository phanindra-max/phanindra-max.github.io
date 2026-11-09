---
layout: page
title: My Own Medic (M.O.M)
description: Prototype of a chat-based health information assistant built on a hosted language model
importance: 1
category: software
related_publications: false
---

My Own Medic is an open-source learning prototype of a chat-based health information assistant. It was built to learn how language models can be applied in health care, and in particular whether giving a model a person's medications, allergies, diagnoses, and lab results can make its answers more relevant to that person.

Selected for presentation at **UN Open-Source Week 2025** in New York.

<div class="row mt-4 mb-4 justify-content-center">
    <div class="col-md-10">
        {% include figure.liquid loading="eager" path="assets/img/UN Open Source Week 25.png" class="img-fluid rounded z-depth-1" caption="Selected for presentation at UN Open-Source Week 2025, New York" %}
    </div>
</div>

---

## Motivation

General web search does not account for an individual's medical history, yet the right guidance can depend on it. A person taking a blood thinner, for example, needs different information about pain relief than someone who is not. This project examines how personal health context could be supplied to a language model.

---

## What Was Built

**Web prototype.** A chat interface built with HTML, JavaScript, and PHP sends each message to the Qwen 2.5 32B model through the Groq API. The system prompt instructs the model not to diagnose and to recommend consulting a healthcare professional.

**Patient context notebook.** A Python notebook inserts a structured patient record, covering demographics, medications, diagnoses, allergies, and lab results, into the prompt. It uses mock data for a fictional patient.

**Summary and risk prompts.** The backend includes prompts that generate a conversation summary and a general risk overview, with instructions to state that the output is not medical advice.

---

## Open Questions

- How should a model's use of patient context be tested against clinician-reviewed cases?
- What architecture would allow personal health data to be used without sending it to a third party?

**Tech Stack:** Python, PHP, JavaScript, Groq API, Qwen 2.5

---

<div class="row justify-content-center">
    <div class="col-auto">
        <a href="https://github.com/GDSC-GWU/my-own-medic" class="btn btn-outline-primary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
        </a>
    </div>
</div>
