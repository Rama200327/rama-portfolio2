import {
  BookOpen,
  Clock,
  Code2,
  Database,
  GraduationCap,
  Languages as LanguagesIcon,
  Layers,
  Lightbulb,
  MessagesSquare,
  MonitorSmartphone,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { education, experience, languages, skills, softSkills } from "@/content/profile";

const skillIcons: LucideIcon[] = [Layers, Database, MonitorSmartphone, Sparkles, Code2, Wrench];
const softIcons: LucideIcon[] = [Lightbulb, BookOpen, MessagesSquare, Clock, Users];

/* Career timeline — every role with each point and tag. */
export function ExperienceTimeline() {
  return (
    <section className="relative border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Where I've worked">
          Experience, <span className="text-gradient">so far</span>
        </SectionHeading>

        <div className="relative mt-2 pl-8 md:pl-12">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          {experience.map((e) => (
            <article key={e.company} className="relative pb-12 last:pb-0">
              <span className="absolute -left-8 top-8 flex h-4 w-4 items-center justify-center md:-left-12">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-primary/40" />
                <span className="relative h-3 w-3 rounded-full bg-primary shadow-[0_0_14px_var(--color-primary)]" />
              </span>
              <div className="card-glass p-7 md:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="chip-lime">{e.period}</span>
                  <span className="text-sm text-muted-foreground">{e.place}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-semibold md:text-4xl">{e.title}</h3>
                <p className="mt-1 text-lg font-medium text-primary">{e.company}</p>
                <ul className="mt-6 max-w-3xl space-y-3">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Education cards. */
export function EducationSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Education">
          Where I <span className="text-gradient">studied</span>
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((ed) => (
            <div key={ed.title} className="card-glass card-hover flex gap-5 p-7">
              <span className="icon-tile h-12 w-12 shrink-0">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold">{ed.title}</h3>
                <p className="mt-1 text-muted-foreground">{ed.place}</p>
                <p className="mt-3 text-sm font-medium text-primary">{ed.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Full technical toolkit — all skill groups. */
export function SkillsSection() {
  return (
    <section className="relative border-y border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Technical skills">
          My <span className="text-gradient">toolkit</span>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => {
            const Icon = skillIcons[i] ?? Code2;
            return (
              <div key={s.group} className="card-glass card-hover p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="icon-tile h-10 w-10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Soft-skill cards. */
export function SoftSkillsSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Soft skills">
          How I <span className="text-gradient">work</span>
        </SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {softSkills.map((s, i) => {
            const Icon = softIcons[i] ?? Sparkles;
            return (
              <div
                key={s.name}
                className={`card-glass card-hover group p-7 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""}`}
              >
                <span className="icon-tile h-12 w-12 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Languages. */
export function LanguagesSection() {
  return (
    <section className="relative border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <SectionHeading eyebrow="Languages">
          Languages I <span className="text-gradient">speak</span>
        </SectionHeading>
        <div className="grid gap-5 md:grid-cols-2">
          {languages.map((l) => (
            <div key={l.name} className="card-glass flex items-center gap-5 p-7">
              <span className="icon-tile h-12 w-12 shrink-0">
                <LanguagesIcon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold">{l.name}</p>
                <p className="text-sm text-muted-foreground">{l.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Every background section, in reading order. */
export function BackgroundSections() {
  return (
    <>
      <ExperienceTimeline />
      <EducationSection />
      <SkillsSection />
      <SoftSkillsSection />
      <LanguagesSection />
    </>
  );
}
