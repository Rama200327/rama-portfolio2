import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { profile } from "@/content/profile";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rama Abuaqoulah" },
      { name: "description", content: "Get in touch with Rama Abuaqoulah by email or LinkedIn for roles and projects." },
      { property: "og:title", content: "Contact — Rama Abuaqoulah" },
      {
        property: "og:description",
        content: "Get in touch with Rama Abuaqoulah by email or LinkedIn for roles and projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const rows = [
    { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
    { icon: Github, label: "GitHub", value: profile.githubLabel, href: profile.github, external: true },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: Download, label: "Resume", value: "Download CV (PDF)", href: profile.cvUrl, external: true, download: profile.cvFileName },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="glow-orb -right-40 top-20 h-[30rem] w-[30rem] opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="font-display-tight animate-rise max-w-4xl text-5xl md:text-8xl">
          Let's build <span className="text-gradient">something</span> together.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          I'm open to full-stack and .NET roles, internships and collaborations. The fastest way to reach me is email.
        </p>

        <div className="card-glass mt-14 flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div className="flex min-w-0 items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Mail className="h-5 w-5" />
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-display text-xl font-semibold sm:text-2xl link-underline hover:text-primary md:text-4xl"
            >
              {profile.email}
            </a>
          </div>
          <button type="button" onClick={copy} className="btn-primary shrink-0 justify-center">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy email"}
          </button>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {rows.map(({ icon: Icon, label, value, href, external, download }) => {
            const inner = (
              <>
                <span className="icon-tile h-11 w-11 shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-0.5 truncate font-medium">{value}</p>
                </div>
                {href && (
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                )}
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                download={download}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="card-glass card-hover group flex min-w-0 items-center gap-5 p-6"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="card-glass flex min-w-0 items-center gap-5 p-6">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
