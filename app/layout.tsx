import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageEffects } from "@/components/page-effects";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://muhakbaridris.vercel.app"),
  title: { default: "Muh. Akbar Idris | Spatial Statistics Researcher", template: "%s | Muh. Akbar Idris" },
  description: "Academic portfolio of Muh. Akbar Idris, a data scientist and spatial statistics researcher at IPB University.",
  keywords: ["Muh. Akbar Idris", "spatial statistics", "GWRF", "data science", "IPB University"],
  openGraph: { title: "Muh. Akbar Idris", description: "Data Scientist · Spatial Statistician · Researcher", type: "website" },
  twitter: { card: "summary_large_image", title: "Muh. Akbar Idris", description: "Spatial statistics researcher and data scientist" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muh. Akbar Idris",
    jobTitle: "Master's Student in Data Science Statistics",
    affiliation: { "@type": "CollegeOrUniversity", name: "IPB University" },
    email: "muhakbaridris@apps.ipb.ac.id",
    sameAs: ["https://scholar.google.com/citations?user=J3hG2jcAAAAJ&hl=id", "https://github.com/muhakbaridris", "https://orcid.org/0009-0000-2995-1975", "https://www.researchgate.net/profile/Muh-Idris"],
    knowsAbout: ["Spatial Statistics", "Geographically Weighted Regression", "Machine Learning", "Ethnobotany"],
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <PageEffects />
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
