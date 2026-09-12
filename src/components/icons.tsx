import type { SVGProps } from "react";
import type { SocialId } from "@/data/profile";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v6" />
      <path d="M8 7.6v.1" />
      <path d="M12.5 17v-3.4a2.1 2.1 0 0 1 4.2 0V17" />
      <path d="M12.5 11v6" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4h3.6l5 6.7L18.2 4H21l-7 8.2L21.4 20h-3.6l-5.3-7-6 7H4l7.4-8.6L4 4Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7.5 8 5 8-5" />
    </svg>
  );
}

export function ShareIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.9} {...props}>
      <path d="M12 15V3" />
      <path d="m8 7 4-4 4 4" />
      <path d="M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
    </svg>
  );
}

export function ExternalIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M13 5h6v6" />
      <path d="M19 5 10 14" />
      <path d="M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

export const socialIcons: Record<SocialId, (props: IconProps) => React.JSX.Element> = {
  instagram: InstagramIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  email: MailIcon,
};
