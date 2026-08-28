import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const codeSnippet = `export async function handler(req) {
  await rateLimit(req, { max: 100 });
  const ctx = await adara.context({
    locale: "sw-KE",
    domain: "agriculture",
  });
  if (!ctx) throw unauthorized();
  return schema.parse(ctx.localize(data));
}`;

export function BentoCodeDemo({ compact = false }: { compact?: boolean }) {
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "reset">("typing");

  useEffect(() => {
    if (phase === "typing") {
      if (chars >= codeSnippet.length) {
        setPhase("pause");
        return;
      }
      const t = setTimeout(() => setChars((c) => c + 1), 18);
      return () => clearTimeout(t);
    }
    if (phase === "pause") {
      const t = setTimeout(() => setPhase("reset"), 2400);
      return () => clearTimeout(t);
    }
    setChars(0);
    setPhase("typing");
  }, [chars, phase]);

  const visible = codeSnippet.slice(0, chars);

  if (compact) {
    return (
      <div className="flex h-full min-h-0 flex-col overflow-hidden px-4 pt-3 pb-0">
        <div className="mb-1.5 flex shrink-0 items-center gap-2 font-mono text-[10px] text-muted-foreground">
          <span className="text-foreground/70">projects/context-api</span>
          <span className="text-muted-foreground/40">|</span>
          <span className="text-emerald-600 dark:text-emerald-400/90">16.15%</span>
        </div>
        <div className="relative min-h-0 flex-1 overflow-hidden">
          <pre className="overflow-hidden font-mono text-[10px] leading-[1.55] whitespace-pre-wrap text-foreground/85 sm:text-[11px]">
            <code>
              {visible}
              <span className="bento-cursor inline-block h-[1.1em] w-[6px] translate-y-[2px] bg-foreground/60 align-middle" />
            </code>
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col p-4 sm:p-5">
      <div className="mb-3 flex shrink-0 items-center gap-2 font-mono text-[10px] text-muted-foreground">
        <span>projects/context-api</span>
        <span className="text-muted-foreground/40">|</span>
        <span className="text-emerald-600 dark:text-emerald-400/80">16.15%</span>
      </div>
      <div className="relative min-h-[9.5rem] flex-1 overflow-hidden">
        <pre
          aria-hidden
          className="invisible font-mono text-[11px] leading-[1.55] whitespace-pre-wrap sm:text-xs"
        >
          {codeSnippet}
        </pre>
        <pre className="absolute inset-0 overflow-hidden font-mono text-[11px] leading-[1.55] text-foreground/80 whitespace-pre-wrap sm:text-xs">
          <code>
            {visible}
            <span className="bento-cursor inline-block h-[1.1em] w-[7px] translate-y-[2px] bg-foreground/70 align-middle" />
          </code>
        </pre>
      </div>
    </div>
  );
}
