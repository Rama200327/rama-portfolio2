import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Github } from "lucide-react";

import { BackgroundSections } from "@/components/background-sections";
import { SectionHeading } from "@/components/section-heading";
import { TechOrbit } from "@/components/tech-orbit";
import { TechStackMap } from "@/components/tech-stack-map";
import { focusAreas, profile, projects, skills, stats, type Project } from "@/content/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rama Abuaqoulah — .NET Full Stack Developer" },
      {
        name: "description",
        content:
          "Rama Abuaqoulah builds web applications with ASP.NET Core, C# and SQL Server, with hands-on QA testing experience. Based in Amman, Jordan.",
      },
      { property: "og:title", content: "Rama Abuaqoulah — .NET Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Rama Abuaqoulah builds web applications with ASP.NET Core, C# and SQL Server, with hands-on QA testing experience. Based in Amman, Jordan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ticker = [
  "C#",
  "ASP.NET Core",
  "Entity Framework Core",
  "SQL Server",
  "JavaScript",
  "Razor Views",
  "REST APIs",
  "Functional Testing",
  "Regression Testing",
  "Git & GitHub",
  "Figma",
];

function Index() {
  const featured = projects.filter((p) => p.featured);
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="glow-orb -left-40 top-10 h-[28rem] w-[28rem] opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 md:grid-cols-[1.1fr_1fr] md:gap-8 md:px-8 md:pt-8 lg:gap-14 lg:pt-10">
          <div className="animate-rise">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="chip-lime">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Available for new roles · {profile.location}
              </span>
            </div>
            <h1 className="font-display-tight text-[clamp(3rem,7.5vw,6.25rem)]">
              {profile.firstName}
              <br />
              <span className="text-gradient">{profile.lastName}</span>
            </h1>
            <p className="mt-5 inline-flex items-center gap-3 font-display text-2xl font-semibold text-primary md:text-3xl">
              <span className="h-[2px] w-8 bg-primary" />
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{profile.summary}</p>
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
            <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em]">
              {focusAreas.map((f, i) => (
                <span key={f} className="flex items-center gap-3">
                  {i > 0 && <span className="text-primary">+</span>}
                  {f}
                </span>
              ))}
            </div>
          </div>
          <div className="animate-rise mx-auto w-full max-w-[300px] [animation-delay:150ms] sm:max-w-[380px] md:max-w-none">
            <TechOrbit />
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-border px-5 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="px-3 py-8 text-center md:px-6">
              <p className="font-display text-3xl font-bold text-primary md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-muted-foreground md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-border bg-surface py-5">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-display text-xl font-medium md:text-2xl">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10 text-muted-foreground">
              {t} <span className="h-2 w-2 rotate-45 bg-primary" />
            </span>
          ))}
        </div>
      </div>

      {/* Tech stack map */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1fr_1.15fr] md:px-8">
          <div>
            <SectionHeading eyebrow="What I work with">
              My <span className="text-gradient">toolbox</span>
            </SectionHeading>
            <p className="-mt-4 max-w-md leading-relaxed text-muted-foreground">
              One connected stack, from the database to the screen. These are the technologies I use every day to build
              and ship real web applications.
            </p>
            <ul className="mt-8 space-y-4">
              {skills.slice(0, 3).map((g) => (
                <li key={g.group} className="border-l-2 border-primary/60 pl-4">
                  <p className="font-display text-lg font-semibold">{g.group}</p>
                  <p className="text-sm text-muted-foreground">{g.items.slice(0, 4).join(" · ")}</p>
                </li>
              ))}
            </ul>
            <Link to="/experience" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary link-underline">
              All skills & tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <TechStackMap />
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-5 py-24 md:px-8">
        <SectionHeading eyebrow="Selected work">
          Things I've <span className="text-gradient">built</span>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <Link to="/projects" className="mt-10 inline-flex items-center gap-2 font-semibold text-primary link-underline">
          All {projects.length} projects <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Background: the same sections as the Experience page */}
      <BackgroundSections />
    </>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
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
      <div className="flex items-center justify-between">
        <span className="font-display text-5xl font-bold text-primary/25 transition-colors group-hover:text-primary">
          0{index + 1}
        </span>
        <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
      </div>
      <p className="mt-6 text-sm font-medium text-primary">{project.kind}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-primary">
        {label}
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
