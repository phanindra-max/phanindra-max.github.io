---
layout: page
title: Benchmarking Database Architectures for Network Analytics
description: Comprehensive performance analysis of MySQL, MongoDB, and Neo4j for graph operations
img: assets/img/road-network-analysis.png
importance: 3
category: work
related_publications: false
---

## Overview

This project addresses the critical challenge of **selecting the optimal database for large-scale network analytics**. With the proliferation of connected data in social networks, transportation systems, and supply chains, choosing the right database architecture can mean the difference between millisecond and multi-second query responses.

We provide a **rigorous, reproducible benchmarking framework** comparing three distinct database paradigms for common graph-related operations.

## The Problem

Organizations working with network data face a fundamental question: **Which database should I use?**

- **Relational databases** (MySQL) offer ACID guarantees and SQL familiarity
- **Document stores** (MongoDB) provide flexibility and horizontal scalability  
- **Graph databases** (Neo4j) are purpose-built for relationship traversal

Without empirical evidence, teams risk choosing architectures that lead to poor performance, costly migrations, or over-engineered solutions.

## Our Approach

### Rigorous Testing Methodology

We implemented a **fair, apples-to-apples comparison** using:

1. **Unified Dataset**: Synthetic road network with 500 cities and 250,000 directed connections
2. **Equivalent Queries**: Four semantically identical queries testing different operation types
3. **Comprehensive Metrics**: Execution time, CPU usage, memory consumption
4. **Realistic Scale**: Dataset size representative of real-world network analytics

### Query Test Suite

| Query | Operation Type | Purpose |
|-------|---------------|---------|
| **Q1** | Filtering | Find roads Richmond → Atlanta (≥500 miles) |
| **Q2** | Aggregation | Top 5 city pairs by average distance |
| **Q3** | Multi-Hop Traversal | Cities reachable within 2 hops from Richmond |
| **Q4** | Shortest Path | Shortest route Richmond → Amman (max 2 hops) |

## Tech Stack

- **Languages**: Python 3.8+, SQL (MySQL), Cypher (Neo4j)
- **Databases**: 
  - MySQL 8.0 (Relational)
  - MongoDB 5.0 (Document-Oriented)
  - Neo4j 5.0 (Graph)
- **Libraries**:
  - `mysql-connector-python`, `pymongo`, `neo4j` (Database drivers)
  - `psutil` (Real-time performance monitoring)
  - `Faker` (Synthetic data generation)
  - `matplotlib` (Performance visualization)

## Key Features

### 🔄 Automated Data Generation
Script generates large-scale synthetic road network dataset (500 cities, 250K edges) ensuring reproducibility

### 📊 Multi-Database Population
Optimized batch insertion scripts populate identical dataset efficiently across all three databases

### 🎯 Unified Query Suite  
Four distinct, equivalent queries designed to test common network analytics operations across paradigms

### 📈 Real-Time Metrics Monitoring
`psutil` library captures detailed CPU usage and memory consumption patterns during query execution

### 📉 Comprehensive Visualizations
Automatically generates 15+ comparative performance charts clearly illustrating trade-offs between databases

## Performance Results

### 🏆 Winner by Query Type

| Query Type | Winner | Execution Time | Runner-Up |
|------------|--------|----------------|-----------|
| **Shortest Path (Q4)** | **Neo4j** | **2.5s** | MySQL (11.5s) |
| **Multi-Hop Traversal (Q3)** | **MySQL** | **13.5s** | Neo4j (25.5s) |
| **Aggregation (Q2)** | **MongoDB** | **1.5s** | MySQL (2.25s) |
| **Simple Filtering (Q1)** | **MySQL** | **0.25s** | MongoDB (0.35s) |

### 📊 Performance Highlights

- **Neo4j**: **19.2x faster** than MongoDB for shortest path queries
- **MySQL**: **5.4x faster** than MongoDB for multi-hop traversals
- **MongoDB**: Most efficient for aggregation pipelines
- **MySQL**: Lowest latency for simple filtering (**8.6x faster** than Neo4j)

## Key Insights

### 🎯 Specialized Tools for Specialized Jobs
Neo4j's **19.2x performance gain** for shortest path queries proves the immense value of native graph databases for pathfinding algorithms.

### 📈 Query Type Matters Most
The benchmark demonstrates that **operation type** (pathfinding vs. aggregation) is more critical than database model itself.

### ⚡ Modern SQL is Graph-Capable
MySQL's strong traversal performance shows that **Recursive CTEs** make relational databases viable for moderate graph workloads.

### 🔗 Document Stores Struggle with Relationships
MongoDB's reliance on application-side logic (custom BFS) or complex `$lookup` pipelines for graph operations resulted in significant performance penalties.

## Decision Framework

Based on our findings, we recommend:

| Use Case | Database | Reason |
|----------|----------|--------|
| **Pathfinding at scale** | Neo4j | Native graph algorithms |
| **Mixed workloads** | MySQL | Best all-rounder |
| **Aggregations** | MongoDB | Powerful aggregation pipeline |
| **Existing SQL infrastructure** | MySQL | Strong graph support via CTEs |

## Impact & Applications

This research provides:

✅ **Evidence-based decision making** for database architecture selection  
✅ **Reproducible methodology** for custom benchmarking scenarios  
✅ **Performance baselines** for network analytics applications  
✅ **Cost optimization** guidance for cloud database deployments

### Real-World Applications
- Transportation/routing systems
- Social network analytics
- Supply chain optimization
- Fraud detection networks
- Knowledge graphs

## Future Work

- Extend to distributed graph databases (e.g., Apache Giraph)
- Test on billion-scale datasets
- Include write performance benchmarks
- Evaluate cloud-managed database services

## Links

[GitHub Repository](https://github.com/phanindra-max/road-network-analysis)

---

*This project demonstrates that choosing the right database requires understanding your specific workload characteristics—there is no one-size-fits-all solution.*
