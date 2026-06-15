import type { ResearchProject } from "@/types";

export const researchProjects: ResearchProject[] = [
  {
    title: "Spatial Prediction of Rice Production Using Geographically Weighted Random Forest in Indonesia",
    status: "Master's research · Active",
    description:
      "Developing local, interpretable production estimates that account for spatial heterogeneity across Indonesian agricultural regions.",
    methods: ["GWRF", "Random Forest", "Spatial CV", "SHAP"],
    dataset: "Regional agricultural indicators, climate observations, and geospatial covariates.",
    results:
      "Early experiments indicate improved local prediction and clearer regional drivers compared with global models.",
    repository: "https://github.com/muhakbaridris",
  },
  {
    title: "Quantitative Landscapes of Ethnobotanical Research",
    status: "Bibliometric study · Active",
    description:
      "Mapping the evolution, collaboration networks, and methodological frontiers of quantitative ethnobotanical research.",
    methods: ["Bibliometrics", "Network Analysis", "Topic Modeling"],
    dataset: "Scopus-indexed ethnobotanical publications from 2016–2025.",
    results:
      "Identified growing adoption of GIS and machine learning alongside persistent methodological gaps.",
    repository: "https://github.com/muhakbaridris",
  },
  {
    title: "Local Models for Environmental Decision Support",
    status: "Concept study",
    description:
      "A reusable framework for diagnosing spatial non-stationarity and selecting fit-for-purpose local models.",
    methods: ["GWR", "Spatial Diagnostics", "Model Comparison"],
    dataset: "Open environmental and socio-economic indicator datasets.",
    results:
      "A reproducible decision workflow for applied spatial researchers.",
    repository: "https://github.com/muhakbaridris",
  },
];
