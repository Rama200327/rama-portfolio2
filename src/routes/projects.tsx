import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Database,
  Globe,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { problemsSolved, profile, projects, type Project } from "@/content/profile";

const problemIcons: LucideIcon[] = [ShieldCheck, Globe, Workflow, Database, RefreshCw, ListChecks];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Rama Abuaqoulah" },
      {
        name: "description",
        content: "Projects by Rama Abuaqoulah: insurance portal, event platform, e-commerce, banking UI and more.",
      },
      { property: "og:title", content: "Projects — Rama Abuaqoulah" },
      {
        property: "og:description",
        content: "Projects by Rama Abuaqoulah: insurance portal, event platform, e-commerce, banking UI and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <div className="relative">
      <div className="bg-grid absolute inset-x-0 top-0 h-[32rem]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow mb-5">Work</p>
        <h1 className="font-display-tight animate-rise text-6xl md:text-8xl">
          Projects<span className="text-primary">.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From enterprise insurance modules to small JavaScript experiments — a mix of team, internship and personal
          projects.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {featured.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className={`card-glass card-hover scroll-mt-28 overflow-hidden p-8 md:p-10 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              {i === 0 && <div className="glow-orb -right-20 -top-20 h-80 w-80" />}
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="chip-lime">{p.kind}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{p.date}</span>
                    <ProjectLink project={p} />
                  </div>
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold md:text-5xl">{p.title}</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">{p.description}</p>
                {p.highlights && (
                  <ul className={`mt-6 grid gap-3 ${i === 0 ? "md:grid-cols-2" : ""}`}>
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-8 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Problems I solved */}
        <section className="mt-24">
          <SectionHeading eyebrow="Problems I solved">
            Things that were <span className="text-gradient">broken</span> — and how I fixed them
          </SectionHeading>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {problemsSolved.map((p, i) => {
              const Icon = problemIcons[i] ?? Check;
              return (
                <article key={p.title} className="card-glass card-hover flex flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="icon-tile h-10 w-10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="chip-lime">{p.context}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold leading-tight">{p.title}</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-primary">Problem</dt>
                      <dd className="text-muted-foreground">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">What I did</dt>
                      <dd className="text-muted-foreground">{p.action}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">Result</dt>
                      <dd>{p.result}</dd>
                    </div>
                  </dl>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <h2 className="font-display-tight mb-8 mt-24 text-3xl md:text-4xl">
          More <span className="text-gradient">projects</span>
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <article key={p.slug} id={p.slug} className="card-glass card-hover flex scroll-mt-28 flex-col p-7">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-primary">{p.kind}</span>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground">{p.date}</span>
                  <ProjectLink project={p} />
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between gap-6 rounded-[var(--radius-2xl)] bg-primary p-7 text-primary-foreground transition-shadow hover:shadow-[var(--glow)]"
          >
            <span className="text-sm font-medium opacity-70">Everything in one place</span>
            <span className="flex items-end justify-between font-display text-3xl font-bold">
              Read the full CV{" "}
              <ArrowUpRight className="h-7 w-7 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  const href = project.liveUrl ?? project.designUrl ?? project.repoUrl;
  if (!href) return null;
  const label = project.liveUrl
    ? `Open ${project.title} live`
    : project.designUrl
      ? `View the design for ${project.title}`
      : `View the code for ${project.title}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="icon-tile h-9 w-9 shrink-0 transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
    >
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}
