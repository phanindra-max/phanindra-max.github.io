---
layout: page
permalink: /projects/casebound/
title: Case-Bound Controls for Autonomous Agents
description: Open-source reference implementation of auditable control invariants for autonomous agents in regulated financial workflows
importance: 2
category: research
related_publications: false
---

casebound is the reference implementation of _Agent Security Meets Regulatory Reality: A Practitioner Systematization of Autonomous-Agent Threats and Controls in Regulated Financial Systems_, a manuscript submitted to _Software: Practice and Experience_. For an agent running a regulated workflow, it turns the question "was this decision compliant?" into a computable function of the case identifier alone.

## What It Implements

- **Five case-bound control invariants (C1 to C5).** A hash-chained ledger of case events, controlled tool invocation, retrieval of the current policy, redaction before model inference, and reconstruction of decision evidence.
- **Five reference algorithms** from the manuscript, each mapped to code and tests.
- **The audit-reconstruction gate of Theorem 1**, checked with a property-based test.
- **A case-bound tool-call contract for the Model Context Protocol**, in which tool servers refuse any call that lacks a case identifier.

The implementation runs entirely on synthetic data, using a generated know-your-customer workload. It is separate from the production system the manuscript describes.

## My Role

I am the second of three authors, with Krishna Mohan Guda Nagavenkata Srinivasa and Karthik Guda Vishnu. I revised the algorithms and several sections of the manuscript and built this open-source implementation.

**Built With:** Python, Model Context Protocol

<div class="row justify-content-center mt-4">
    <div class="col-auto">
        <a href="https://github.com/vectortc/Agentic-Security-Regulated-Finance" class="btn btn-outline-primary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
        </a>
    </div>
</div>
