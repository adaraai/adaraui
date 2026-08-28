import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  label: string;
  href: string;
  children?: ReactNode;
  className?: string;
  image?: string;
  imagePosition?: string;
  cta?: string;
  compact?: boolean;
  /** x.ai-style: full-bleed visual, title bottom-left, Explore + bottom-right */
  layout?: "default" | "imagine";
};

export function BentoCard({
  label,
  href,
  children,
  className,
  image,
  imagePosition,
  cta = "Explore",
  compact = false,
  layout = "default",
}: BentoCardProps) {
  const isImagine = layout === "imagine";
  const hasVisual = Boolean(image) || isImagine;

  return (
    <Link
      to={href}
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-2xl ring-0 ring-inset transition-[box-shadow,ring-width,ring-color] duration-300 hover:ring-1 hover:ring-border",
        hasVisual ? "bg-[#0a0a0a]" : "bg-card",
        compact ? "min-h-0" : "min-h-[220px] h-full",
        className
      )}
    >
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="bento-card-image absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{ objectPosition: imagePosition ?? "center" }}
        />
      )}

      {isImagine && !image && children && (
        <div className="absolute inset-0 overflow-hidden">{children}</div>
      )}

      {hasVisual && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            isImagine
              ? "bg-gradient-to-t from-black/80 via-black/20 to-black/5"
              : "bg-gradient-to-t from-black/75 via-black/15 to-transparent"
          )}
        />
      )}

      {!isImagine && (
        <>
          {image ? (
            <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-end overflow-hidden pb-1">
              {children}
            </div>
          ) : (
            <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden pb-1">
              {children}
            </div>
          )}
        </>
      )}

      <div
        className={cn(
          "relative z-10 flex shrink-0 items-center justify-between gap-3",
          isImagine
            ? "absolute inset-x-0 bottom-0 px-5 py-4 sm:px-6 sm:py-5"
            : cn("mt-auto bg-transparent", compact ? "px-4 py-2.5" : "px-5 py-3.5 sm:px-6")
        )}
      >
        <span
          className={cn(
            "min-w-0 truncate font-medium tracking-[-0.02em]",
            hasVisual ? "text-white" : "text-foreground",
            isImagine ? "text-lg sm:text-xl" : compact ? "text-[15px]" : "text-lg sm:text-xl"
          )}
        >
          {label}
        </span>
        <span
          className={cn(
            "inline-flex shrink-0 items-center gap-1 text-sm transition-colors",
            hasVisual
              ? "text-white/70 group-hover:text-white"
              : "text-muted-foreground group-hover:text-foreground"
          )}
        >
          {cta}
          {isImagine ? (
            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
          ) : (
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </span>
      </div>
    </Link>
  );
}
