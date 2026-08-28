import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  direction?: "ltr" | "rtl";
  duration?: number;
  className?: string;
  gapClassName?: string;
};

export function Marquee({
  children,
  direction = "ltr",
  duration = 45,
  className,
  gapClassName = "gap-3 sm:gap-4",
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max",
          direction === "ltr" ? "animate-marquee-ltr" : "animate-marquee-rtl"
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        <div className={cn("flex shrink-0", gapClassName)}>{children}</div>
        <div className={cn("flex shrink-0", gapClassName)} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
