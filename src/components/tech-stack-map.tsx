import { Layers } from "lucide-react";

import { profile } from "@/content/profile";

// Drawn in a 500×500 space with the hub at the centre (250, 250).
const C = 250;
const R = 190;
const HUB_R = 58;
// Approximate half-size of a tech pill, used to stop each arrow just before it.
const PILL_A = 58;
const PILL_B = 22;

const nodes = profile.stack.map((label, i) => {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / profile.stack.length;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  const stop = 1 / Math.sqrt((cos / PILL_A) ** 2 + (sin / PILL_B) ** 2) + 8;
  return {
    label,
    x: C + R * cos,
    y: C + R * sin,
    x1: C + (HUB_R + 6) * cos,
    y1: C + (HUB_R + 6) * sin,
    x2: C + (R - stop) * cos,
    y2: C + (R - stop) * sin,
  };
});

export function TechStackMap() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-label={`My stack: ${profile.stack.join(", ")}`} role="img">
      <div className="glow-orb inset-[22%] opacity-70" />
      <div className="animate-spin-slower absolute inset-[12%] rounded-full border border-dashed border-primary/20" />

      <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <marker id="stack-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" className="fill-primary" />
          </marker>
        </defs>
        <circle cx={C} cy={C} r={R} fill="none" className="stroke-border" strokeWidth="1" />
        {nodes.map((n) => (
          <line
            key={n.label}
            x1={n.x1}
            y1={n.y1}
            x2={n.x2}
            y2={n.y2}
            className="animate-dash stroke-primary/70"
            strokeWidth="1.6"
            strokeDasharray="7 5"
            markerEnd="url(#stack-arrow)"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={`pulse-${n.label}`} r="3.5" className="fill-primary" opacity="0">
            <set attributeName="opacity" to="1" begin={`${i * 0.3}s`} />
            <animateMotion dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" path={`M${n.x1},${n.y1} L${n.x2},${n.y2}`} />
          </circle>
        ))}
      </svg>

      {/* hub */}
      <div className="animate-hub absolute left-1/2 top-1/2 flex h-[23%] w-[23%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border-2 border-primary bg-background">
        <Layers className="h-5 w-5 text-primary md:h-6 md:w-6" />
        <span className="font-display text-sm font-bold leading-none md:text-lg">My stack</span>
      </div>

      {/* technologies */}
      {nodes.map((n) => (
        <span
          key={n.label}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-primary/40 bg-background px-2.5 py-1.5 text-[11px] font-semibold text-foreground shadow-[0_0_24px_-8px_var(--color-primary)] sm:px-3.5 sm:py-2 sm:text-sm"
          style={{ left: `${n.x / 5}%`, top: `${n.y / 5}%` }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {n.label}
        </span>
      ))}
    </div>
  );
}
