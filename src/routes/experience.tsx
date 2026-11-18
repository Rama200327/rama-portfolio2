import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { BackgroundSections } from "@/components/background-sections";
import { profile } from "@/content/profile";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Skills — Rama Abuaqoulah" },
      {
        name: "description",
        content: "Work experience at GIG Gulf - Jordan, Orange Coding School and Apidog, education, and technical skills of Rama Abuaqoulah.",
      },
      { property: "og:title", content: "Experience & Skills — Rama Abuaqoulah" },
      {
        property: "og:description",
        content: "Work experience at GIG Gulf - Jordan, Orange Coding School and Apidog, education, and technical skills of Rama Abuaqoulah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <div className="relative">
      <div className="bg-grid absolute inset-x-0 top-0 h-[32rem]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-5">Background</p>
            <h1 className="font-display-tight animate-rise text-6xl md:text-8xl">
              Experience<span className="text-primary">.</span>
            </h1>
          </div>
          <a href={profile.cvUrl} download={profile.cvFileName} target="_blank" rel="noreferrer" className="btn-ghost">
            <Download className="h-4 w-4" /> Full CV (PDF)
          </a>
        </div>
      </div>

      <BackgroundSections />
    </div>
  );
}
