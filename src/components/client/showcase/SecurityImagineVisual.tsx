import { Shield } from "lucide-react";

/** Full-bleed visual for the Security imagine-style bento card */
export function SecurityImagineVisual() {
  return (
    <div className="absolute inset-0 bg-[#080808]">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(234,88,12,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_60%,rgba(239,68,68,0.12),transparent_55%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Center motif */}
      <div className="absolute inset-0 flex items-center justify-center pb-8">
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-orange-500/20 blur-2xl" />
          <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm sm:h-28 sm:w-28">
            <Shield className="h-12 w-12 text-orange-400/90 sm:h-14 sm:w-14" strokeWidth={1.25} />
          </div>
          {/* Scan line accent */}
          <div className="absolute -bottom-3 left-1/2 h-px w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
        </div>
      </div>

      {/* Bottom vignette for footer legibility */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent" />
    </div>
  );
}
