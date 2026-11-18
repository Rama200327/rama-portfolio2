import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { profile } from "@/content/profile";

const contacts = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
  { icon: MapPin, label: "Based in", value: profile.location },
];

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showContact = pathname !== "/contact";

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40">
      {showContact && (
        <div className="relative">
          <div className="bg-grid absolute inset-0" />
          <div className="glow-orb -left-32 top-0 h-96 w-96 opacity-50" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow mb-5">Get in touch</p>
              <h2 className="font-display-tight text-4xl md:text-6xl">
                Let's work <span className="text-gradient">together.</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                I'm open to full-stack and .NET roles, internships and collaborations. Reach out any way you like.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <a href={profile.cvUrl} download={profile.cvFileName} target="_blank" rel="noreferrer" className="btn-ghost">
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </div>
            </div>

            <ul className="grid gap-3">
              {contacts.map(({ icon: Icon, label, value, href, external }) => {
                const inner = (
                  <>
                    <span className="icon-tile h-11 w-11 shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted-foreground">{label}</span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                    {href && (
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    )}
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className="card-glass card-hover group flex items-center gap-4 px-5 py-4"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="card-glass flex items-center gap-4 px-5 py-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/projects" className="link-underline hover:text-primary">
              Projects
            </Link>
            <Link to="/experience" className="link-underline hover:text-primary">
              Experience
            </Link>
            <Link to="/contact" className="link-underline hover:text-primary">
              Contact
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
