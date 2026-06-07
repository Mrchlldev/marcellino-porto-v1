# Marcellino F.A Portfolio

Website portfolio Next.js, TypeScript, Tailwind CSS, dan komponen bergaya NeoBrutalism.

## Menjalankan Project

```bash
npm install
npm run dev
```

## Edit Semua Teks Website

Semua teks utama website bisa diedit di folder:

```txt
lib/settings/
```

Daftar file settings:

```txt
lib/settings/site.ts       -> brand, metadata, navigasi, footer, social icon
lib/settings/home.ts       -> hero, tombol hero, section landing page
lib/settings/about.ts      -> halaman about, Lazy Dream, quote
lib/settings/skill.ts      -> skill card, title Language & Framework, icon tech
lib/settings/education.ts  -> education steps
lib/settings/project.ts    -> project list, detail project, button project
lib/settings/contact.ts    -> contact list, link, warna aktif card
```

## Edit Project

Tambah atau kurangi project dari:

```txt
lib/settings/project.ts
```

Contoh struktur project:

```ts
{
  slug: "nama-project",
  title: "Nama Project",
  image: "/projects/gambar.svg",
  description: "Deskripsi singkat.",
  tags: ["Next.js", "API"],
  content: "Isi teks detail project.",
  buttons: [{ label: "Live Demo", href: "#" }]
}
```

## Edit Icon

Icon menggunakan `lucide-react`. Nama icon bisa diganti di file settings. Icon yang tersedia didaftarkan di:

```txt
lib/icons.ts
```

Kalau mau tambah icon baru, import icon dari `lucide-react`, lalu masukkan ke `iconMap`.


## Update Bugfix

- Font title sekarang menggunakan Archivo Black dan font body menggunakan Space Grotesk.
- Animasi reveal tidak lagi bergantung pada IntersectionObserver/AOS, jadi elemen tidak hilang saat pindah halaman.
- Border card dan komponen UI ditipiskan menjadi 1px.
- Gambar project dibuat responsif natural, tidak dipaksa kotak.
- Loading progress sekarang muncul ketika berpindah halaman, bukan progress scroll.
