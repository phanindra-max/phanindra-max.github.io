---
layout: page
permalink: /projects/laiser/
title: LAiSER
description: Open-source framework that links skills in job postings and syllabi to national taxonomies, with every match traceable to its source
importance: 1
category: research
related_publications: false
---

Job postings, course syllabi, and credential descriptions describe skills in their own words, so the same ability can appear under many names. That makes it hard to count which skills employers ask for, or to check whether a course teaches what jobs require. LAiSER reads such documents and links each skill they mention to its entry in a taxonomy, so that researchers can compare them on common terms.

The accompanying paper is under review at the _Journal of Open Source Software_.

## Design

- **Extraction.** A language model reads the whole document, because the meaning of a skill term often depends on its context. LAiSER supports hosted APIs, vLLM on GPUs, and Transformers or llama.cpp on ordinary machines.
- **Alignment.** Each extracted phrase is embedded and compared with every entry in a FAISS index of about 27,000 skills. A match is kept only if its similarity clears a threshold, so a phrase with no good match is dropped rather than mismatched.
- **Traceability.** Every match records its taxonomy source, link, and similarity score, so users can check it.
- **Reproducibility.** Matching uses exact search, so the same phrase always returns the same entry and score. Extraction defaults to temperature zero and a fixed seed on every backend that accepts one.
- **Taxonomies.** ESCO, O\*NET, the UK Skills Classification, and the Open Skills Network.

## Scale

Running vLLM on high-performance computing clusters raised inference throughput 7x and reduced processing of more than 1M job descriptions from 2 months to 8 days.

## Use and Recognition

- Integrated into the Credential Co-writer tool of the MIT Digital Credentials Consortium.
- Adopted by Northeastern University for internal academic projects involving skills analysis.
- Applied to a large-scale study of Texas syllabi, and analysis built on it supported recommendations on two local training policies for the Texas Workforce Commission.
- Early prototypes contributed to securing a $250,000 grant from the Walmart Foundation and a $750,000 grant from the Gates Foundation for the broader Program on Skills, Credentials and Workforce Policy at George Washington University.
- Bronze Award, AI in Education (Higher Education Institutions), QS Reimagine Education Awards 2025.
- GW Open-Source Student Award, 2025.

## My Role

I joined the project as its first hire in 2024. I am the first author of the paper and served as primary maintainer, responsible for architecture decisions, releases, and the response to peer review.

<div class="row justify-content-center mt-4">
    <div class="col-auto">
        <a href="https://github.com/LAiSER-Software/extract-module" class="btn btn-outline-primary" target="_blank">
            <i class="fab fa-github"></i> View on GitHub
        </a>
        <a href="https://github.com/openjournals/joss-reviews/issues/10421" class="btn btn-outline-secondary" target="_blank">
            <i class="fas fa-book"></i> Open Peer Review
        </a>
    </div>
</div>
