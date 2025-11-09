---
layout: page
title: My Own Medic (M.O.M)
description: AI-powered medical assistant for accessible health guidance using LLMs
img: assets/img/my-own-medic.jpeg
importance: 1
category: work
related_publications: false
---

## Overview

**M.O.M (My Own Medic)** is an AI-powered medical assistant designed to solve the problem of inaccessible or unreliable health information. It provides users with a quick, accessible, and dependable chat-based interface to understand symptoms, ask health-related questions, and review their chat history—placing essential medical guidance directly at their fingertips.

### The Problem
Many people lack immediate access to reliable medical information and struggle to understand their symptoms or health conditions. Generic web searches often provide conflicting or unsafe advice that doesn't account for individual medical histories.

### Our Solution
M.O.M uses a custom-built Large Language Model (LLM) architecture with sophisticated prompt engineering to provide **context-aware medical responses** by integrating mock patient data including demographics, medications, diagnoses, allergies, and lab results.

## Technical Architecture

The system is built on three core components:

1. **AI Engine**: Custom LLM class (`Custom_LLM` from `LLM.ipynb`) handles AI-driven medical analysis with two specialized functions:
   - **Medical Q&A** (`create_medical_prompt`): Ingests user queries with medical history to provide safe, relevant answers
   - **Dietary Recommendations** (`create_dietary_prompt`): Analyzes patient conditions, allergies, and location to suggest foods to avoid

2. **Backend API** (`api/chat.php`): PHP backend serves the AI logic, handling:
   - Standard chat interactions
   - Conversation summarization
   - Future risk assessments
   - Integration with Groq API for LLM inference

3. **Frontend Interface** (`home.html`, `js/chat.js`): Responsive web application providing:
   - Real-time chat interface
   - Chat history management
   - AI-generated summaries and risk assessments in modals
   - Patient profile management

## Tech Stack

- **Languages**: Python, PHP, JavaScript, HTML5, CSS3
- **AI/ML**: 
  - LLM Provider: Groq API
  - Model: Qwen 2.5 (32B parameters)
  - Libraries: `groq` (Python)
- **Backend**: PHP, XAMPP (local development)
- **Development Tools**: Jupyter Notebook (for LLM development and testing)

## Key Features

### 🤖 AI Medical Chat
A responsive, real-time chat interface for users to ask health-related questions with immediate AI responses.

### 🎯 Context-Aware Responses
The AI considers a patient's unique medical history, medications, and allergies before answering, ensuring personalized and safer guidance.

### 📊 Conversation Summary
One-click access to concise, well-structured summaries of chat history for easy reference.

### 🔮 Future Risk Assessment
Modal displays potential short-term and long-term health considerations based on conversation and user data.

### 📚 Chat History Management
Save, load, and delete previous conversations via PHP backend with intuitive sidebar display.

### 👤 Patient Profile Management
Separate profile page allows users to view and update personal and medical information.

## Impact & Recognition

- **User Empowerment**: Creates an accessible tool for medical guidance, empowering users to better understand their health and symptoms
- **Personalization**: Integrates patient health data directly into AI context for far more relevant and safer information than generic web searches
- **Healthcare Communication**: Facilitates more informed discussions between patients and healthcare professionals
- **Recognition**: Selected for presentation at **UN Open-Source Week 2025** in New York

## HIPAA Compliance

The project incorporates data compliance measures including HIPAA considerations for handling sensitive medical information.

## Links

- [GitHub Repository](https://github.com/GDSC-GWU/my-own-medic) • [Documentation](https://github.com/GDSC-GWU/my-own-medic/blob/main/docs/README.md)

---

*This project demonstrates the potential of AI in democratizing access to reliable health information while maintaining safety through context-aware prompt engineering.*
