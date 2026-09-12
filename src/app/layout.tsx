import type { Metadata, Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.username} — ${profile.headline}`,
  description: profile.shareText,
  openGraph: {
    title: profile.shareTitle,
    description: profile.shareText,
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: "#1f3fa6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
