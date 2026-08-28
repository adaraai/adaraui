import type { CSSProperties, ReactNode } from "react";
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
    rest: "hsl(var(--foreground) / 0.14)",
    hover: "hsl(var(--foreground) / 0.55)",
  },
  1: {
    rest: "hsl(var(--foreground) / 0.12)",
    hover: "hsl(var(--foreground) / 0.5)",
  },
  2: {
    rest: "hsl(265 60% 65% / 0.22)",
    hover: "hsl(265 70% 72% / 0.65)",
  },
  3: {
    rest: "hsl(195 90% 55% / 0.2)",
    hover: "hsl(195 95% 65% / 0.58)",
  },
  4: {
    rest: "hsl(var(--foreground) / 0.11)",
    hover: "hsl(var(--foreground) / 0.48)",
  },
  5: {
    rest: "hsl(0 0% 38% / 0.14)",
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

  const spinnerStyle: CSSProperties = {
    "--beam-color": beam.rest,
    "--beam-color-hover": beam.hover,
    "--beam-duration": `${duration}s`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    animationDirection: direction === "reverse" ? "reverse" : "normal",
  };

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
      <div
        aria-hidden
        className="border-beam-spinner pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[165%]"
        style={spinnerStyle}
      />

      <div className="relative m-px flex h-full flex-col rounded-[calc(1rem-1px)] border border-border/40 bg-card/50 p-5 backdrop-blur-sm transition-all duration-500 group-hover:border-border/80 group-hover:bg-card/70 hover-lift sm:p-7">
        {children}
      </div>
    </div>
  );
}
