export type Publication = {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
  keywords: string[];
  pdf: string;
  citations: number;
  bibtex: string;
};

export type ResearchProject = {
  title: string;
  status: string;
  description: string;
  methods: string[];
  dataset: string;
  results: string;
  repository: string;
};
