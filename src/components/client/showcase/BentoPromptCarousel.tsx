import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const prompts = [
  {
    title: "Explain ubuntu in AI product design",
    body: "Community-first defaults shape consent, attribution, and who benefits from the model.",
  },
  {
    title: "Why is code-switching common in Lagos?",
    body: "Yoruba, Pidgin, and English blend in commerce — models need multi-register context.",
  },
  {
    title: "What makes a good African speech corpus?",
    body: "Dialect coverage, noisy real-world audio, and metadata from local annotators.",
  },
];

export function BentoPromptCarousel({ compact = false }: { compact?: boolean }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % prompts.length);
        setVisible(true);
      }, 280);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const prompt = prompts[index];

  if (compact) {
    return (
      <div className="flex h-full min-h-0 flex-col justify-start overflow-hidden px-4 pt-3 pb-0">
        <div
          className={cn(
            "space-y-2.5 transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="rounded-2xl bg-muted/45 px-3 py-2">
            <p className="text-[13px] leading-snug text-foreground">{prompt.title}</p>
          </div>
          <p className="line-clamp-3 px-0.5 text-[13px] leading-relaxed text-muted-foreground">
            {prompt.body}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col p-5 sm:p-6">
      <div className="relative min-h-[7.5rem] flex-1">
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          <p className="text-[15px] font-medium leading-snug text-foreground">{prompt.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{prompt.body}</p>
        </div>
      </div>
    </div>
  );
}
