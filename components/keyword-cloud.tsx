const terms = [
  ["Spatial Statistics", "text-2xl"],
  ["GWRF", "text-4xl"],
  ["Machine Learning", "text-xl"],
  ["Ethnobotany", "text-3xl"],
  ["GIS", "text-xl"],
  ["Bibliometrics", "text-2xl"],
  ["Data Science", "text-4xl"],
  ["Spatial Modeling", "text-2xl"],
  ["GWR", "text-3xl"],
];

export function KeywordCloud() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 rounded-3xl border border-emerald/20 bg-emerald/[.06] p-8 text-center">
      {terms.map(([term, size], index) => (
        <span key={term} className={`${size} font-semibold tracking-tight ${index % 3 === 0 ? "text-emerald" : "text-ink dark:text-slate-100"}`}>
          {term}
        </span>
      ))}
    </div>
  );
}
