import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { experience, problemsSolved, profile } from "@/content/profile";

// The Experience page must list the same roles, in the same order and dates, as the CV PDF.
describe("Experience matches the CV", () => {
  it("lists GIG, Orange Coding School and Apidog in CV order", () => {
    expect(experience.map((e) => e.company)).toEqual(["GIG Gulf - Jordan", "Orange Coding School", "Apidog"]);
  });

  it("uses the CV job titles and dates", () => {
    expect(experience.map((e) => [e.title, e.period])).toEqual([
      ["QA Tester & .NET Developer", "Jul 2026 — Oct 2026"],
      [".NET Full Stack Developer Intern", "Feb 2026 — Jun 2026"],
      ["Quality Assurance Intern", "Jul 2025 — Jan 2026"],
    ]);
  });
});

describe("Home page title", () => {
  it("shows the real job title the user chose: .NET Full Stack Developer", () => {
    expect(profile.role).toBe(".NET Full Stack Developer");
    expect(profile.summary).toMatch(/ASP\.NET Core/);
    expect(profile.stack[0]).toBe("C#");
  });
});

describe("CV download", () => {
  it("points every CV button at the bundled CV file", () => {
    expect(profile.cvUrl.endsWith("/Rama_Abuaqoulah_CV.pdf")).toBe(true);
    expect(existsSync(resolve(__dirname, "../../public/Rama_Abuaqoulah_CV.pdf"))).toBe(true);
  });
});

describe("Problems I solved", () => {
  it("has six cards, each with a problem, an action and a result", () => {
    expect(problemsSolved).toHaveLength(6);
    for (const p of problemsSolved) {
      expect(p.title.trim().length).toBeGreaterThan(0);
      expect(p.context.trim().length).toBeGreaterThan(0);
      expect(p.problem.trim().length).toBeGreaterThan(0);
      expect(p.action.trim().length).toBeGreaterThan(0);
      expect(p.result.trim().length).toBeGreaterThan(0);
      expect(p.tags.length).toBeGreaterThan(0);
    }
  });

  it("names the roles the problems came from", () => {
    const contexts = problemsSolved.map((p) => p.context);
    expect(contexts).toContain("GIG Gulf - Jordan");
    expect(contexts).toContain("Apidog");
    expect(contexts).toContain("Orange Coding School");
  });
});
