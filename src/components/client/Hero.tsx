import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero relative isolate min-h-[100dvh] bg-[#0a0c14] dark:bg-[#060912]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          className="hero-bg-image absolute inset-0 h-full w-full object-cover"
        />
        <img
          src="/assets/hero-bg.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="hero-bg-blur absolute inset-0 h-full w-full object-cover dark:hidden"
        />
        <div className="hero-scrim absolute inset-0" />
      </div>
      <div aria-hidden className="hero-edge-fade pointer-events-none absolute inset-x-0 bottom-0" />

      <div className="hero-content relative z-10 mx-auto flex w-full max-w-[920px] min-h-[100dvh] flex-col items-center justify-center px-5 pb-20 pt-[calc(5.5rem+env(safe-area-inset-top))] text-center sm:px-8 sm:pb-24 sm:pt-28">
        <Link
          to="/products"
          className="hero-enter hero-enter-1 mb-6 inline-flex max-w-[calc(100vw-2.5rem)] items-center justify-center gap-x-1.5 rounded-full border border-white/20 bg-white/10 px-2 py-1 text-[11px] leading-tight text-white/90 backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/15 sm:mb-8 sm:max-w-none sm:gap-2.5 sm:px-3 sm:py-1.5 sm:pl-1.5 sm:pr-4 sm:text-[15px] sm:leading-snug"
        >
          <span className="shrink-0 rounded-full border border-pink-400/80 px-1.5 py-px text-[8px] font-semibold uppercase tracking-wide text-pink-300 sm:px-2.5 sm:py-[3px] sm:text-xs">
            NEW
          </span>
          <span className="truncate sm:text-left">
            African Language Corpus
            <span className="text-white/40"> · </span>
            Now in pilot
          </span>
          <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-white/25 sm:h-4 sm:w-4">
            <ChevronRight className="h-1.5 w-1.5 sm:h-2.5 sm:w-2.5" />
          </span>
        </Link>

        <h1 className="hero-headline hero-enter hero-enter-2 text-balance text-[clamp(2rem,8vw,4.25rem)] font-medium leading-[1.1] tracking-[-0.03em]">
          Data and tools that make AI
          <br className="hidden sm:block" />
          {" "}understand Africa.
        </h1>

        <p className="hero-subcopy hero-enter hero-enter-3 mt-5 max-w-[34rem] text-base leading-relaxed sm:mt-6 sm:text-lg md:text-xl">
          Languages, culture, commerce, and lived reality. Built with African researchers and communities.
        </p>

        <div className="hero-enter hero-enter-4 mt-8 flex w-full flex-row flex-wrap items-center justify-center gap-2 sm:mt-10 sm:w-auto sm:gap-3">
          <Link
            to="/signup"
            className="interactive-scale inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-white px-4 text-[14px] font-medium text-neutral-900 transition-colors hover:bg-white/90 sm:h-12 sm:w-auto sm:flex-none sm:px-7 sm:text-base"
          >
            Partner with us
            <ChevronRight className="h-4 w-4" />
          </Link>
          <Link
            to="/documentation"
            className="interactive-scale inline-flex h-11 flex-1 items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 text-[14px] font-medium text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/15 sm:h-12 sm:w-auto sm:flex-none sm:px-7 sm:text-base"
          >
            <span className="sm:hidden">Documentation</span>
            <span className="hidden sm:inline">View Documentation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
