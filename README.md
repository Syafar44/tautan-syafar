# syafar.dev — Link Page

Halaman link-in-bio pribadi. Next.js (App Router) + Tailwind CSS v4 + TypeScript.

## Menjalankan

```bash
npm run dev     # http://localhost:3000
npm run build   # build produksi
npm start       # jalankan hasil build
```

## Mengubah konten

Semua teks dan tautan ada di satu file: [src/data/profile.ts](src/data/profile.ts).

- `profile` — nama, sapaan, judul, foto profil
- `socials` — deretan ikon di bawah nama
- `links` — daftar kartu tautan

Ada dua bentuk kartu:

```ts
// kartu besar dengan gambar cover
{ type: "featured", title: "Instagram", href: "...", image: "/cover.jpg" }

// kartu ringkas dengan thumbnail kecil
{ type: "compact", title: "GitHub", href: "...", icon: "github" }
```

Tambah tautan baru cukup dengan menambah satu objek ke array `links`.

## Mengganti gambar

Taruh file di folder [public/](public/), lalu tulis path-nya di `profile.ts`
(mis. `"/avatar.jpg"`). Tiga file berikut masih **placeholder** dan sebaiknya
diganti dengan foto asli:

- `public/avatar.svg` — foto profil
- `public/cover-instagram.svg` — cover kartu besar
- `public/thumb-portfolio.svg` — thumbnail kartu ringkas

## Mengganti warna

Palet gradient dan warna kartu ada di [src/app/globals.css](src/app/globals.css):

```css
@theme {
  --color-brand-top: #1f3fa6;
  --color-brand-mid: #1479c9;
  --color-brand-bottom: #2aa6dd;
}

:root {
  --card: #cfe7fa;
  --card-ink: #10345c;
}
```

## Menambah ikon sosial baru

1. Tambah komponen SVG di [src/components/icons.tsx](src/components/icons.tsx)
2. Daftarkan di objek `socialIcons` di file yang sama
3. Tambah id-nya ke tipe `SocialId` di `profile.ts`

## Struktur

```
src/
  app/
    layout.tsx      font, metadata, html shell
    page.tsx        susunan halaman
    globals.css     tema warna + gradient
  components/
    icons.tsx       semua ikon SVG
    LinkCards.tsx   kartu featured & compact
    ShareButton.tsx tombol share (Web Share API, fallback salin link)
    SocialRow.tsx   deretan ikon sosial
  data/
    profile.ts      SEMUA KONTEN ADA DI SINI
design/             file sumber desain (artboard canvas)
```
