import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden">
      <img
        src="/assets/hero-bg.jpg"
        alt=""
        fetchPriority="high"
        loading="eager"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div aria-hidden className="hero-overlay-light absolute inset-0 dark:hidden" />
      <div aria-hidden className="hero-overlay-dark absolute inset-0 hidden dark:block" />

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[920px] flex-1 flex-col items-center justify-center px-5 pb-12 pt-[calc(5.5rem+env(safe-area-inset-top))] text-center sm:px-8 sm:pb-16 sm:pt-28">
        {/* Announcement pill — single row, scales down on mobile */}
        <Link
          to="/products"
          className="hero-enter hero-enter-1 mb-6 inline-flex max-w-[calc(100vw-2.5rem)] items-center justify-center gap-x-1.5 rounded-full border border-border/60 bg-background px-2 py-1 text-[11px] leading-tight text-foreground/90 transition-colors hover:border-border hover:bg-muted/30 sm:mb-8 sm:max-w-none sm:gap-2.5 sm:px-3 sm:py-1.5 sm:pl-1.5 sm:pr-4 sm:text-[15px] sm:leading-snug dark:border-white/15 dark:bg-white/10 dark:text-white/85 dark:hover:border-white/25 dark:hover:bg-white/15 dark:hover:text-white"
        >
          <span className="shrink-0 rounded-full border border-pink-400 px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide text-pink-500 sm:px-2.5 sm:py-[3px] sm:text-xs dark:text-pink-300">
            NEW
          </span>
          <span className="truncate sm:text-left">
            African Language Corpus
            <span className="text-muted-foreground/60 dark:text-white/35"> · </span>
            Now in pilot
          </span>
          <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-border/60 sm:h-4 sm:w-4 dark:border-white/20">
            <ChevronRight className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5" />
          </span>
        </Link>

        <h1 className="hero-enter hero-enter-2 text-balance text-[clamp(2rem,8vw,4.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-foreground dark:text-white">
          Data and tools that make AI
          <br className="hidden sm:block" />
          {" "}understand Africa.
        </h1>

        <p className="hero-enter hero-enter-3 mt-5 max-w-[34rem] text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg md:text-xl dark:text-white/75">
          Languages, culture, commerce, and lived reality. Built with African researchers and communities.
        </p>

        <div className="hero-enter hero-enter-4 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-2 sm:mt-10 sm:w-auto sm:gap-3">
          <Link
            to="/signup"
            className="interactive-scale inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 text-[14px] font-medium text-background transition-colors hover:bg-foreground/90 sm:h-12 sm:w-auto sm:flex-none sm:px-7 sm:text-base dark:bg-white dark:text-neutral-900 dark:hover:bg-white/90"
          >
            Partner with us
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            to="/documentation"
            className="interactive-scale inline-flex h-11 flex-1 items-center justify-center rounded-full border border-border bg-background px-4 text-[14px] font-medium text-foreground transition-colors hover:border-foreground/20 hover:bg-muted/30 sm:h-12 sm:w-auto sm:flex-none sm:px-7 sm:text-base dark:border-white/25 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/15"
          >
            <span className="sm:hidden">Documentation</span>
            <span className="hidden sm:inline">View Documentation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
