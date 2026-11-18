import { BadgeCheck, Database, LayoutTemplate, PenTool, Plug, Server } from "lucide-react";

// Positions are in a 400×400 space; the hub sits at the centre (200, 200).
const nodes = [
  { label: "Front-end", icon: LayoutTemplate, x: 200, y: 48 },
  { label: "REST APIs", icon: Plug, x: 331.6, y: 124 },
  { label: "Database", icon: Database, x: 331.6, y: 276 },
  { label: "Back-end", icon: Server, x: 200, y: 352 },
  { label: "Testing", icon: BadgeCheck, x: 68.4, y: 276 },
  { label: "UI / UX", icon: PenTool, x: 68.4, y: 124 },
];

const hexagon = nodes.map((n) => `${n.x},${n.y}`).join(" ");

export function TechOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]" aria-hidden="true">
      <div className="glow-orb inset-[18%]" />

      {/* rotating rings */}
      <div className="animate-spin-slow absolute inset-[4%] rounded-full border border-dashed border-primary/25" />
      <div className="animate-spin-slower absolute inset-[26%] rounded-full border border-dashed border-border" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <polygon points={hexagon} fill="none" className="stroke-border" strokeWidth="1" />
        {nodes.map((n) => (
          <line
            key={n.label}
            x1="200"
            y1="200"
            x2={n.x}
            y2={n.y}
            className="animate-dash stroke-primary/50"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={`pulse-${n.label}`} r="3" className="fill-primary" opacity="0">
            <set attributeName="opacity" to="1" begin={`${i * 0.4}s`} />
            <animateMotion
              dur="2.4s"
              begin={`${i * 0.4}s`}
              repeatCount="indefinite"
              path={`M200,200 L${n.x},${n.y}`}
            />
          </circle>
        ))}
      </svg>

      {/* hub */}
      <div className="animate-hub absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-primary bg-background md:h-28 md:w-28">
        <span className="font-display text-2xl font-bold tracking-tight md:text-3xl">QA</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Tester</span>
      </div>

      {/* nodes */}
      {nodes.map(({ label, icon: Icon, x, y }) => (
        <div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${x / 4}%`, top: `${y / 4}%` }}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-background text-primary shadow-[0_0_24px_-6px_var(--color-primary)] md:h-12 md:w-12">
            <Icon className="h-5 w-5" />
          </span>
          <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
