import Image from "next/image";
import { LinkCards } from "@/components/LinkCards";
import { ShareButton } from "@/components/ShareButton";
import { SocialRow } from "@/components/SocialRow";
import { links, profile, socials } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col px-4 pb-12">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_62%)]" />

      <header className="flex items-center justify-end pt-4">
        <ShareButton title={profile.shareTitle} text={profile.shareText} />
      </header>

      <div className="flex flex-col items-center gap-0.5 pt-3">
        <span className="-rotate-4 font-script text-2xl leading-none text-white/90">
          {profile.greeting}
        </span>
        <h1 className="text-[22px] font-extrabold tracking-[0.14em] text-white uppercase sm:text-2xl">
          {profile.headline}
        </h1>
      </div>

      <div className="flex justify-center pt-5">
        <Image
          src={profile.avatar}
          alt={`Foto profil ${profile.username}`}
          width={112}
          height={112}
          priority
          className="size-26 rounded-full border-4 border-white/85 object-cover shadow-[0_10px_26px_rgba(6,32,74,0.28)]"
        />
      </div>

      <div className="flex flex-col items-center gap-3 pt-4">
        <h2 className="text-[26px] font-extrabold tracking-tight text-white">
          {profile.username}
        </h2>
        <SocialRow items={socials} />
      </div>

      <div className="pt-6">
        <LinkCards items={links} />
      </div>

      <footer className="flex justify-center pt-10">
        <p className="text-xs font-medium text-white/70">
          © {new Date().getFullYear()} {profile.username}
        </p>
      </footer>
    </main>
  );
}
