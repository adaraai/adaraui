import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BorderBeamVariant = {
  duration?: number;
  direction?: "normal" | "reverse";
  delay?: number;
  /** 0–5 subtle accent presets */
  accent?: number;
};

type BorderBeamCardProps = {
  children: ReactNode;
  className?: string;
  variant?: BorderBeamVariant;
};

const accentStops: Record<number, { rest: string; hover: string }> = {
  0: {
    rest: "hsl(var(--foreground) / 0.1)",
    hover: "hsl(var(--foreground) / 0.55)",
  },
  1: {
    rest: "hsl(var(--foreground) / 0.08)",
    hover: "hsl(var(--foreground) / 0.5)",
  },
  2: {
    rest: "hsl(265 60% 65% / 0.18)",
    hover: "hsl(265 70% 72% / 0.65)",
  },
  3: {
    rest: "hsl(195 90% 55% / 0.15)",
    hover: "hsl(195 95% 65% / 0.55)",
  },
  4: {
    rest: "hsl(var(--foreground) / 0.09)",
    hover: "hsl(var(--foreground) / 0.48)",
  },
  5: {
    rest: "hsl(0 0% 38% / 0.11)",
    hover: "hsl(0 0% 38% / 0.58)",
  },
};

export function BorderBeamCard({
  children,
  className,
  variant = {},
}: BorderBeamCardProps) {
  const {
    duration = 6,
    direction = "normal",
    delay = 0,
    accent = 0,
  } = variant;

  const beam = accentStops[accent] ?? accentStops[0];

  return (
    <div
      className={cn("group relative rounded-2xl", className)}
      style={
        {
          "--beam-duration": `${duration}s`,
          "--beam-delay": `-${delay}s`,
          "--beam-color": beam.rest,
          "--beam-color-hover": beam.hover,
        } as React.CSSProperties
      }
    >
      <div className="relative flex h-full flex-col rounded-2xl border border-border/40 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 group-hover:border-border/80 group-hover:bg-card/70 hover-lift sm:p-7">
        {children}
      </div>

      <div
        aria-hidden
        className={cn(
          "border-beam-ring pointer-events-none absolute inset-0 z-10 rounded-2xl",
          direction === "reverse" && "border-beam-reverse"
        )}
      />
    </div>
  );
}
