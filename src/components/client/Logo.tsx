import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const LOGO_LIGHT = "/assets/adara-logo-light.png";
const LOGO_DARK = "/assets/adara-logo-dark.png";

type LogoProps = {
  className?: string;
  /** Hero header over dark imagery — use white logo in light mode */
  onDark?: boolean;
  size?: "sm" | "md";
};

export function Logo({ className, onDark = false, size = "md" }: LogoProps) {
  const imageHeight = size === "sm" ? "h-6" : "h-7 sm:h-8";

  return (
    <Link to="/" className={cn("inline-flex shrink-0 items-center select-none p-1 -m-1 touch-manipulation", className)}>
      {onDark ? (
        <img
          src={LOGO_DARK}
          alt="ADARA"
          width={120}
          height={32}
          className={cn("w-auto object-contain dark:hidden", imageHeight)}
          draggable={false}
        />
      ) : (
        <img
          src={LOGO_LIGHT}
          alt="ADARA"
          width={120}
          height={32}
          className={cn("w-auto object-contain dark:hidden", imageHeight)}
          draggable={false}
        />
      )}
      <img
        src={LOGO_DARK}
        alt="ADARA"
        width={120}
        height={32}
        className={cn("hidden w-auto object-contain dark:block", imageHeight)}
        draggable={false}
      />
    </Link>
  );
}
