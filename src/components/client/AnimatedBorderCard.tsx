import { cn } from "@/lib/utils";

type AnimatedBorderCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimatedBorderCard({ children, className }: AnimatedBorderCardProps) {
  return (
    <div className={cn("group relative rounded-2xl p-px", className)}>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        aria-hidden="true"
      >
        <div className="absolute inset-[-120%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,hsl(var(--foreground)/0.08)_330deg,hsl(var(--foreground)/0.22)_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,rgba(255,255,255,0.06)_330deg,rgba(255,255,255,0.2)_360deg)]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      >
        <div className="absolute inset-[-120%] animate-border-spin bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,hsl(var(--foreground)/0.15)_320deg,hsl(var(--foreground)/0.35)_360deg)] dark:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,rgba(255,255,255,0.12)_320deg,rgba(255,255,255,0.45)_360deg)]" />
      </div>
      <div className="relative flex h-full flex-col rounded-[calc(1rem-1px)] bg-background p-6">
        {children}
      </div>
    </div>
  );
}
