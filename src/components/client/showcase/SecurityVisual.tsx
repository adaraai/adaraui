import type { ReactNode } from "react";
import { Fingerprint, Lock, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

function Tile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("relative min-h-0 min-w-0 overflow-hidden rounded-xl", className)}>
      {children}
    </div>
  );
}

export function SecurityVisual() {
  return (
    <div className="grid h-full min-h-0 grid-cols-[7fr_3fr] grid-rows-2 gap-1">
      <Tile className="row-span-2 bg-[#1a0f0a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_42%,rgba(234,88,12,0.55),transparent_72%)]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.85) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.85) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Shield className="h-12 w-12 text-orange-200/90 sm:h-14 sm:w-14" strokeWidth={1.15} />
        </div>
      </Tile>

      <Tile className="bg-[#07140f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_42%,rgba(16,185,129,0.42),transparent_72%)]" />
        <div className="absolute inset-x-[14%] top-[30%] h-px bg-gradient-to-r from-transparent via-emerald-300/55 to-transparent" />
        <div className="absolute inset-x-[14%] bottom-[30%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Lock className="h-8 w-8 text-emerald-200/90 sm:h-9 sm:w-9" strokeWidth={1.15} />
        </div>
      </Tile>

      <Tile className="bg-[#070b16]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_42%,rgba(59,130,246,0.42),transparent_72%)]" />
        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/25" />
        <div className="absolute left-1/2 top-1/2 h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Fingerprint className="h-8 w-8 text-blue-200/90 sm:h-9 sm:w-9" strokeWidth={1.15} />
        </div>
      </Tile>
    </div>
  );
}
