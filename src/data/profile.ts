/**
 * Semua konten halaman diatur dari file ini.
 * Ubah teks / link di sini, tidak perlu menyentuh komponen.
 */

export type SocialId = "instagram" | "github" | "linkedin" | "x" | "email";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
};

/**
 * Tautan yang belum punya URL. Kartu dengan nilai ini tampil non-aktif
 * (tidak bisa diklik) supaya tidak ada link rusak di halaman.
 */
export const BELUM_ADA_LINK = "#belum-ada-link";

export type BannerLink = {
  /** Kartu kecil: logo memanjang di atas, kalimat ajakan di bawahnya. */
  type: "banner";
  /** Kalimat ajakan. */
  title: string;
  href: string;
  /** Logo, ditampilkan utuh (tidak dipotong). */
  image: string;
  /** Teks alternatif untuk logo. */
  imageAlt: string;
};

export type FeaturedLink = {
  /** Kartu besar dengan gambar cover di atasnya. */
  type: "featured";
  title: string;
  href: string;
  /** Path gambar di folder /public, mis. "/cover.jpg" */
  image: string;
};

export type CompactLink = {
  /** Kartu ringkas: thumbnail kecil di kiri, judul di kanan. */
  type: "compact";
  title: string;
  href: string;
  /** Path gambar di folder /public. Kosongkan untuk memakai ikon. */
  image?: string;
  /** Dipakai kalau `image` tidak diisi. */
  icon?: SocialId;
};

export type LinkItem = BannerLink | FeaturedLink | CompactLink;

export const profile = {
  /** Nama yang tampil besar di bawah foto. */
  username: "syafar.dev",
  /** Teks kecil bertuliskan tangan di atas judul. */
  greeting: "Hello,",
  /** Judul utama, otomatis ditampilkan huruf kapital. */
  headline: "Let's Connect",
  /** Foto profil, taruh di folder /public. */
  avatar: "/profile.jpeg",
  /** Dipakai untuk tombol share dan metadata halaman. */
  shareTitle: "syafar.dev",
  shareText: "Semua tautan saya ada di sini.",
};

export const socials: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/syafar.dev",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/syafar44",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/syafaruddin44",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:syafaruddincode@gmail.com",
  },
];

export const links: LinkItem[] = [
  {
    type: "banner",
    title: "Yuk, daftar jadi Google Student Ambassador!",
    href: "https://googlestudentambassador.id/?referralCode=KpkyDqA",
    image: "/P29GU6bUvi5ZzRaTWA2HGUQdI.avif",
    imageAlt: "Google Student Ambassador",
  },
  {
    type: "featured",
    title: "Web Portofolio",
    href: "https://syafar.my.id",
    image: "/image.png",
  },
  {
    type: "compact",
    title: "Instagram — @syafar.dev",
    href: "https://instagram.com/syafar.dev",
    image: "/ig-syafar.dev.jpg",
  },
  {
    type: "compact",
    title: "Instagram — @syafar.env",
    href: "https://instagram.com/syafar.env",
    image: "/ig-syafar.env.jpg",
  },
];
