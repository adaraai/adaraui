import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const iconClass = "h-8 w-8 text-foreground sm:h-9 sm:w-9";

export function CorpusIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="7" ry="2.5" />
      <path d="M5 5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5" />
      <path d="M5 9v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V9" />
      <path d="M5 13v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </svg>
  );
}

export function ModelsIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="5" cy="7" r="1.75" />
      <circle cx="19" cy="7" r="1.75" />
      <circle cx="5" cy="17" r="1.75" />
      <circle cx="19" cy="17" r="1.75" />
      <path d="M7 8.2 10 10.5M17 8.2 14 10.5M7 15.8 10 13.5M17 15.8 14 13.5" />
    </svg>
  );
}

export function ApiIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
      {...props}
    >
      <path d="M8 9l-3 3 3 3" />
      <path d="M16 9l3 3-3 3" />
      <path d="M13.5 7.5 10.5 16.5" />
    </svg>
  );
}

export function ProductsIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
      {...props}
    >
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function SecurityIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3 5 6v5c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V6l-7-3z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function GovernanceIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3v18" />
      <path d="M6 7h12" />
      <path d="M8 7 6 12h4L8 7z" />
      <path d="M16 7l-2 5h4l-2-5z" />
    </svg>
  );
}
