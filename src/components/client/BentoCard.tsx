import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BentoCardProps = {
  label: string;
  href: string;
  children: ReactNode;
  className?: string;
  image?: string;
  imagePosition?: string;
  cta?: string;
};

export function BentoCard({
  label,
  href,
  children,
  className,
  image,
  imagePosition,
  cta = "Explore",
}: BentoCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group relative isolate flex h-full min-h-[220px] flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-inset ring-border transition-[box-shadow,ring-color] duration-300 hover:ring-foreground/20",
        className
      )}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="bento-card-image absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: imagePosition ?? "center" }}
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-card/20"
          />
          <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
        </>
      ) : (
        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">{children}</div>
      )}

      <div className="relative z-10 mt-auto shrink-0 flex items-end justify-between gap-4 border-t border-border px-5 py-4 sm:px-6">
        <span className="text-lg font-medium tracking-[-0.02em] text-foreground sm:text-xl">{label}</span>
        <span className="inline-flex shrink-0 items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
          {cta}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
