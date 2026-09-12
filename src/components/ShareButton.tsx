"use client";

import { useState } from "react";
import { ShareIcon } from "@/components/icons";

export function ShareButton({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // Dibatalkan pengguna atau tidak didukung — jatuh ke salin link.
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard diblokir browser, abaikan saja.
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleShare}
        aria-label="Bagikan halaman ini"
        className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
      >
        <ShareIcon className="size-5" />
      </button>
      {copied && (
        <span
          role="status"
          className="absolute top-full right-0 mt-2 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-(--card-ink) shadow-lg"
        >
          Link disalin
        </span>
      )}
    </div>
  );
}
