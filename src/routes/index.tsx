import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Github, MapPin } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { experience, profile, projects, stats, type Project } from "@/content/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rama Abuaqoulah — Quality Assurance Tester" },
      {
        name: "description",
        content:
          "Rama Abuaqoulah tests web applications, writes test cases and reports defects, and builds with ASP.NET Core, C# and SQL Server. Based in Amman, Jordan.",
      },
      { property: "og:title", content: "Rama Abuaqoulah — Quality Assurance Tester" },
      {
        property: "og:description",
        content:
          "Rama Abuaqoulah tests web applications, writes test cases and reports defects, and builds with ASP.NET Core, C# and SQL Server. Based in Amman, Jordan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      {/* Intro */}
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-5 pb-16 pt-12 md:grid-cols-[1.25fr_1fr] md:px-8 md:pt-20 lg:gap-16">
        <div className="animate-rise">
          <p className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> {profile.location} · Open to new roles
          </p>
          <h1 className="font-display-tight text-[clamp(2.75rem,6vw,4.75rem)]">{profile.name}</h1>
          <p className="mt-4 font-display text-xl font-semibold text-primary md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              See my work <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={profile.cvUrl} download={profile.cvFileName} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download className="h-4 w-4" /> Download CV
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>

        {/* Recent experience, straight from the CV */}
        <aside className="card-glass animate-rise p-7 [animation-delay:120ms] md:p-8">
          <p className="eyebrow mb-6">Experience</p>
          <ol className="space-y-6">
            {experience.map((e) => (
              <li key={e.company} className="border-l-2 border-primary/50 pl-4">
                <p className="font-semibold leading-snug">{e.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {e.company} · {e.period}
                </p>
              </li>
            ))}
          </ol>
          <Link to="/experience" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline">
            Full experience <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>
      </section>

      {/* Numbers */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-5 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-8 text-center md:px-6">
              <p className="font-display text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Selected work">Featured projects</SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <FeaturedCard key={p.slug} project={p} />
          ))}
        </div>
        <Link to="/projects" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary link-underline">
          All {projects.length} projects <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.designUrl ?? project.repoUrl;
  const label = project.liveUrl
    ? "Open live demo"
    : project.designUrl
      ? "View the design"
      : project.repoUrl
        ? "View the code"
        : "See the details";

  const body = (
    <>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-primary">{project.kind}</span>
        <span className="text-muted-foreground">{project.date}</span>
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold leading-tight">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <p className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-primary">
        {label} <ArrowUpRight className="h-4 w-4" />
      </p>
    </>
  );

  const className = "card-glass card-hover group flex flex-col p-7";

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link to="/projects" hash={project.slug} className={className}>
      {body}
    </Link>
  );
}
