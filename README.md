# Portal RW 3 Kotabaru

Portal statis untuk dokumentasi sejarah, potensi warga, Kompitu, UMKM, dan POI RW 3 Kotabaru.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run check
npm run build
```

## Content workflow

- Data terstruktur ada di `src/data/`.
- Materi edukasi ada di `src/data/education/` dan divalidasi melalui Astro content collections.
- Foto produksi sebaiknya disimpan di `public/images/` setelah foto RW 3 terverifikasi.
- Koordinat POI pada starter data berstatus `draft` sampai diverifikasi di lapangan.

## Vercel

Import repository ke Vercel dengan framework preset Astro. Build command: `npm run build`. Output directory: `dist`.

Website ini tidak membutuhkan Docker.
