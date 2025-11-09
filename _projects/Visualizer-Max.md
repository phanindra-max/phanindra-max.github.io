---
layout: page
title: Visualizer-Max
permalink: /projects/visualizer-max/
description: An interactive data visualization repository demonstrating advanced methods for representing complex data.
img: assets/img/visualizer-max.png
importance: 5
category: work
related_publications: false
redirect: https://funindra.me/visualizer-max
---

Based on the files you provided, here is the information for your portfolio website:

## Project Overview

This project is an interactive data visualization repository created to demonstrate advanced methods for representing complex data.

* **What problem it solves**: The project addresses the challenge of visualizing multi-dimensional data and complex relationships. It provides clear, interactive techniques for representing skill taxonomies, hierarchical relationships, and clustered data points, making them easier to understand for presentations, research pitches, and demonstrations.
* **Your approach**: The approach was to build two distinct types of visualizations using Python. First, an interactive 3D scatter plot was developed to show job skills clustered across three dimensions: Knowledge, Task Ability, and Level. Second, several hierarchical network graphs were created to map the relationships between Skills, Tasks, and Knowledge domains.
* **Key achievements/results**: The project successfully produced a series of compelling, interactive data visualizations, including a 3D scatter plot and multiple hierarchical network graphs. These visualizations were built using randomly generated mock data to demonstrate techniques that can be adapted to real-world datasets. Live demos are available for interaction.

---

## Technical Stack

* **Languages**: **Python**
* **Data Manipulation**: **Pandas**, **NumPy**
* **Visualization Tools**:
    * **Plotly**: Used to create the interactive 3D scatter plot.
    * **PyVis**: Used for rendering the interactive network graphs with physics simulations.
    * **NetworkX**: Used for creating and analyzing the graph data structures for the skill taxonomies.

---

## Key Features

1.  **3D Skills Cluster Visualization**
    * An interactive 3D scatter plot that maps job skills across **Knowledge**, **Task Ability**, and **Level** dimensions.
    * Features interactive 3D rotation and zoom capabilities.
    * Uses color-coding to distinguish between skill sources (Job Description, Education, Workforce Experience) and dynamic sizing to represent proficiency levels.
    * Includes detailed hover tooltips for each data point.

2.  **Hierarchical Skill Taxonomy Graphs**
    * A series of network graphs that visualize the relationships between **Skills**, **Tasks**, and **Knowledge domains**.
    * Demonstrates different relationship types, such as "Skill → Skill (Related to)", "Skill → Task (Performs)", and "Skill → Knowledge (Requires)".
    * Includes multiple layouts, such as a "Non-overlapping Hierarchical Layout" for clear structural separation and a "Condensed Circular Layout" with dynamic, physics-based node positioning.

---

## Results & Impact

The primary result of this project is a repository of reusable, interactive visualization techniques. These visualizations serve as powerful tools for demonstrating complex data relationships in a compelling way, making them ideal for presentations and research pitches. The project successfully demonstrates how to use libraries like Plotly, PyVis, and NetworkX to build sophisticated visualizations from scratch. The techniques are adaptable and can be applied to real-world datasets to uncover insights in multi-dimensional and relational data.