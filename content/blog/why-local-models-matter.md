---
title: "Why Local Models Matter"
excerpt: "A practical intuition for spatial non-stationarity and why one global relationship can hide the most useful parts of the story."
date: "2026-04-18"
category: "Spatial Statistics"
---

Spatial datasets often tempt us into one global answer. But the same relationship can be strong in one region, weak in another, and reversed somewhere else.

## From average effects to local stories

Geographically weighted methods treat location as more than a column in a table. They let model parameters vary over space, helping researchers examine **where** a process changes and what those changes might mean.

```r
library(sf)
library(GWmodel)

# A simplified local regression workflow
bandwidth <- bw.gwr(target ~ rainfall + elevation, data = regions)
model <- gwr.basic(target ~ rainfall + elevation, data = regions, bw = bandwidth)
```

## The important caveat

Local models are not automatically better models. Their value depends on careful diagnostics, transparent bandwidth choices, and honest treatment of uncertainty. The goal is not a more colorful map. It is a more faithful explanation.
