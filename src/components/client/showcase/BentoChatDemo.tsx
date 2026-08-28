import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    question: "What does this Twi idiom mean for users?",
    answer:
      "ADARA maps proverb-level intent to product copy — not literal word-for-word translation.",
  },
  {
    question: "Why do mobile-money scams look different in Ghana?",
    answer:
      "Fraud patterns differ by language and USSD flows; global models miss local phrasing.",
  },
  {
    question: "Localize this for Kenyan smallholders",
    answer:
      "Swahili responses with regional crop terms, tuned for voice-first field advice.",
  },
];

export function BentoChatDemo() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % slides.length);
        setVisible(true);
      }, 320);
    }, 4800);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
      <div className="mb-4 flex shrink-0 items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          Chat
        </span>
        <span className="h-1 w-1 rounded-full bg-emerald-500/80 animate-pulse" />
      </div>

      <div className="relative min-h-[172px] flex-1">
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center gap-4 transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="min-h-[4.5rem] rounded-xl border border-border bg-muted/40 px-4 py-3">
            <p className="text-sm leading-relaxed text-foreground">{slide.question}</p>
          </div>
          <div className="min-h-[5.5rem] rounded-xl border border-border bg-muted/25 px-4 py-3">
            <p className="text-sm leading-relaxed text-muted-foreground">{slide.answer}</p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex shrink-0 gap-1.5">
        {slides.map((_, i) => (
          <span
            key={i}
            className={cn(
              "h-1 rounded-full transition-all duration-500",
              i === index ? "w-5 bg-foreground/70" : "w-1.5 bg-foreground/20"
            )}
          />
        ))}
      </div>
    </div>
  );
}
