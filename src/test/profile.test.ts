import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

import { experience, profile } from "@/content/profile";

// The Experience page must list the same roles, in the same order and dates, as the CV PDF.
describe("Experience matches the CV", () => {
  it("lists GIG, Orange Coding School and Apidog in CV order", () => {
    expect(experience.map((e) => e.company)).toEqual(["GIG Jordan", "Orange Coding School", "Apidog"]);
  });

  it("uses the CV job titles and dates", () => {
    expect(experience.map((e) => [e.title, e.period])).toEqual([
      ["QA Tester & .NET Developer", "Jul 2026 — Oct 2026"],
      [".NET Full Stack Developer Intern", "Feb 2026 — Jun 2026"],
      ["Quality Assurance Intern", "Jul 2025 — Jan 2026"],
    ]);
  });
});

describe("Home page title matches the CV", () => {
  it("shows the CV job title, not the old developer title", () => {
    expect(profile.role).toBe("Quality Assurance Tester");
    expect(profile.summary).toMatch(/testing/i);
    expect(profile.stack[0]).toBe("Functional Testing");
  });
});

describe("CV download", () => {
  it("points every CV button at the bundled CV file", () => {
    expect(profile.cvUrl.endsWith("/Rama_Abuaqoulah_CV.pdf")).toBe(true);
    expect(existsSync(resolve(__dirname, "../../public/Rama_Abuaqoulah_CV.pdf"))).toBe(true);
  });
});
