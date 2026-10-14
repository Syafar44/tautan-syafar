import Image from "next/image";
import type { ReactNode } from "react";
import { ExternalIcon, socialIcons } from "@/components/icons";
import {
  BELUM_ADA_LINK,
  type BannerLink,
  type CompactLink,
  type FeaturedLink,
  type LinkItem,
} from "@/data/profile";

const cardBase =
  "group block rounded-3xl bg-(--card) p-2.5 shadow-[0_12px_28px_rgba(6,32,74,0.18)] transition duration-200";

const cardActive =
  "hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(6,32,74,0.26)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:translate-y-0 active:scale-[0.99]";

/**
 * Kartu jadi tautan biasa kalau URL-nya sudah diisi; kalau belum, dirender
 * sebagai kotak non-aktif supaya tidak ada link rusak.
 */
function Card({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (href === BELUM_ADA_LINK) {
    return (
      <div
        aria-disabled="true"
        className={`${cardBase} cursor-not-allowed opacity-60 ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cardBase} ${cardActive} ${className}`}
    >
      {children}
    </a>
  );
}

function BannerCard({ item }: { item: BannerLink }) {
  return (
    <Card href={item.href}>
      <div className="flex items-center justify-center rounded-2xl bg-white px-6 py-4">
        <Image
          src={item.image}
          alt={item.imageAlt}
          width={512}
          height={81}
          className="h-auto w-full max-w-60 object-contain"
        />
      </div>
      <div className="flex items-center gap-2 px-1.5 py-3">
        <span className="grow text-center text-sm font-bold text-(--card-ink)">
          {item.title}
        </span>
      </div>
    </Card>
  );
}

function FeaturedCard({ item }: { item: FeaturedLink }) {
  return (
    <Card href={item.href}>
      <div className="relative aspect-16/11 overflow-hidden rounded-2xl bg-[#2f3a4d]">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 480px) 100vw, 480px"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex items-center gap-2 px-1.5 py-3.5">
        <span className="grow text-center text-[15px] font-bold text-(--card-ink)">
          {item.title}
        </span>
        <ExternalIcon className="size-4.5 shrink-0 text-(--card-ink) opacity-45 transition group-hover:opacity-100" />
      </div>
    </Card>
  );
}

function CompactCard({ item }: { item: CompactLink }) {
  const Icon = item.icon ? socialIcons[item.icon] : null;

  return (
    <Card href={item.href} className="flex items-center gap-3">
      <span className="relative size-13 shrink-0 overflow-hidden rounded-xl bg-[#0d1117]">
        {item.image ? (
          <Image src={item.image} alt="" fill sizes="52px" className="object-cover" />
        ) : Icon ? (
          <span className="flex size-full items-center justify-center text-white">
            <Icon className="size-6.5" />
          </span>
        ) : null}
      </span>
      <span className="grow text-sm font-bold text-(--card-ink)">{item.title}</span>
      <ExternalIcon className="size-4.5 shrink-0 text-(--card-ink) opacity-45 transition group-hover:opacity-100" />
    </Card>
  );
}

export function LinkCards({ items }: { items: LinkItem[] }) {
  return (
    <div className="flex flex-col gap-3.5">
      {items
        .filter((item) => !item.hidden)
        .map((item) => {
          const key = item.type + item.href + item.title;

          if (item.type === "banner") return <BannerCard key={key} item={item} />;
          if (item.type === "featured") return <FeaturedCard key={key} item={item} />;
          return <CompactCard key={key} item={item} />;
        })}
    </div>
  );
}
