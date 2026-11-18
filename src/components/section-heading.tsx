import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display-tight text-4xl md:text-6xl">{children}</h2>
    </div>
  );
}
