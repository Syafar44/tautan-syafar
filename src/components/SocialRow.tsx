import { socialIcons } from "@/components/icons";
import type { SocialLink } from "@/data/profile";

export function SocialRow({ items }: { items: SocialLink[] }) {
  return (
    <nav aria-label="Sosial media" className="flex items-center justify-center gap-2">
      {items.map((item) => {
        const Icon = socialIcons[item.id];
        return (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="flex size-11 items-center justify-center rounded-full text-white transition hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
          >
            <Icon className="size-6" />
          </a>
        );
      })}
    </nav>
  );
}
