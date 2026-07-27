export type UmkmStatus = "draft" | "verified";

export type Umkm = {
  slug: string;
  name: string;
  category: string;
  description: string;
  photo: string;
  address?: string;
  contact?: string;
  whatsapp?: string;
  openingHours?: string;
  status: UmkmStatus;
  note?: string;
};

export const UMKM: Umkm[] = [
  {
    slug: "dapur-bu-sari",
    name: "Warung Makan Teras Roso",
    category: "Kuliner",
    description: "Menyediakan berbagai macam masakan rumahan lezat dan jajanan pasar tradisional.",
    photo: "/images/umkm/teras_roso_depan.webp",
    status: "draft",
    note: "Nama dan informasi usaha berasal dari contoh desain Stitch. Verifikasi dengan warga sebelum publikasi.",
  },
  {
    slug: "kriya-nusantara",
    name: "Kriya Nusantara",
    category: "Kerajinan",
    description: "Kerajinan tangan otentik berbahan dasar daur ulang dan material alami ramah lingkungan.",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtrT_Agx_P5LqueLUOK_PCP2shYk7nT2NhQ2qkdMzRY7vI8hJh1Qe86-mFXC9Dc6iJveliQiz3mbeMEVjF_Y9_gRmZxfa-mkGtUJnly_wxXmmakg_k2qRxTSbK9hXxNZzYywdWkBZB2-KQYrQyHZY9AdN3XwL_mlHGTACzP_sjw_ryAzMwi5ye-elqlPI1Jsi2yiatfZzo7s4L0QJL_lvEUOy7TqF22_LFewoV35x7ZqUg-_5ou8kYsQ",
    status: "draft",
    note: "Nama dan informasi usaha berasal dari contoh desain Stitch. Verifikasi dengan warga sebelum publikasi.",
  },
  {
    slug: "jamu-sehat-makmur",
    name: "Jamu Sehat Makmur",
    category: "Herbal",
    description: "Minuman herbal tradisional yang diracik dari tanaman obat keluarga (TOGA) organik.",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Y_zpHUTmTa_BZsMifVhzdQEe9J-VcyRLC6tPfjcPgJHyQVPY9Djv9_gs3PexNZoFAdPUba3IWgD8mxf6rO3tOKxAHR4qLqgPSDKh2H0ZGDV3AaCobeAxO_sndbwH_EOrmg5D4GphlH3k7q8vuoHoGsxwwklICqn5isUi94wDJBmayVYwPnFMN0Qbp0dtsgXHNzxe8Cx78bpW5L-WyLyZdUbum4u2Y25vDJfjSLeTe4O3vVKR9Rz2iw",
    status: "draft",
    note: "Nama dan informasi usaha berasal dari contoh desain Stitch. Verifikasi dengan warga sebelum publikasi.",
  },
];
