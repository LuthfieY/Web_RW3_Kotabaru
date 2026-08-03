export type PoiCategory =
  | "sejarah"
  | "umkm"
  | "kompitu"
  | "budaya"
  | "ibadah"
  | "fasilitas"
  | "sampah";

export type PoiStatus = "draft" | "verified";

export type Poi = {
  slug: string;
  name: string;
  category: PoiCategory;
  description: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  photo: string;
  openingHours?: string;
  contact?: string;
  qrEnabled?: boolean;
  status: PoiStatus;
  note?: string;
};

export const POI_CATEGORY_LABELS: Record<PoiCategory, string> = {
  sejarah: "Sejarah",
  umkm: "UMKM",
  kompitu: "Kompitu",
  budaya: "Budaya",
  ibadah: "Ibadah",
  fasilitas: "Fasilitas umum",
  sampah: "Titik sampah",
};

export const POI_CATEGORY_COLORS: Record<PoiCategory, string> = {
  sejarah: "#b64a3b",
  umkm: "#3d7658",
  kompitu: "#6c8f48",
  budaya: "#8d6c36",
  ibadah: "#5a6d91",
  fasilitas: "#8a6654",
  sampah: "#69736d",
};

export const POIS: Poi[] = [
  {
    slug: "monumen-serbuan-kota-baru",
    name: "Monumen Serbuan Kota Baru",
    category: "sejarah",
    description:
      "Ruang pengingat sejarah perjuangan dan identitas Kotabaru yang perlu terus dirawat bersama.",
    latitude: -7.787645352720104,
    longitude: 110.37628724821457,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/sejarah/monumen.webp",
    qrEnabled: true,
    status: "draft",
    note: "Koordinat sementara. Verifikasi lokasi sebelum dipakai untuk QR fisik.",
  },
  {
    slug: "kompitu",
    name: "Kompitu",
    category: "kompitu",
    description:
      "Ruang hijau komunitas untuk belajar tanaman, kompos, pestisida nabati, dan praktik lingkungan.",
    latitude: -7.787345722736508,
    longitude: 110.3763482684682,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/kompitu/kompitu_depan.webp",
    qrEnabled: true,
    status: "draft",
    note: "Koordinat sementara. Verifikasi lokasi sebelum dipakai untuk QR fisik.",
  },
  {
    slug: "warung-makan-teras-roso",
    name: "Warung Makan Teras Roso",
    category: "umkm",
    description: "Warung makan warga yang menyediakan masakan rumahan dan jajanan pasar tradisional.",
    latitude: -7.788253591908274,
    longitude: 110.37610354927573,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/umkm/teras_roso_depan.webp",
    status: "draft",
    note: "Lengkapi jam buka dan kontak setelah pendataan usaha selesai.",
  },
  {
    slug: "masjid-at-taqwa-jami",
    name: "Masjid At-Taqwa Jami",
    category: "ibadah",
    description: "Masjid dan ruang berkumpul warga di lingkungan RW 3 Kotabaru.",
    latitude: -7.788363336876594,
    longitude: 110.3763150423357,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/galeri/masjid.webp",
    status: "draft",
    note: "Koordinat sementara. Verifikasi lokasi sebelum ditampilkan sebagai navigasi publik.",
  },
  {
    slug: "sanggar-tari",
    name: "Sanggar Tari Lestari Budoyo",
    category: "budaya",
    description: "Ruang belajar dan berlatih seni tari bagi warga dan generasi muda.",
    latitude: -7.787920341168616,
    longitude: 110.37598402537702,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/galeri/sanggar.webp",
    status: "draft",
    note: "Koordinat sementara. Lengkapi jadwal kegiatan setelah pendataan.",
  },
  {
    slug: "fasilitas-umum",
    name: "Fasilitas Umum RW 3",
    category: "fasilitas",
    description: "Lapangan dan tempat bermain anak sebagai ruang aktivitas warga.",
    latitude: -7.787828720996796,
    longitude: 110.37611568589709,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/galeri/fasum.webp",
    status: "draft",
    note: "Koordinat sementara. Tambahkan detail fasilitas setelah observasi lapangan.",
  },
  {
    slug: "taman-pendidikan-al-quran",
    name: "TPA",
    category: "ibadah",
    description:
      "Taman Pendidikan Al-Quran bagi anak-anak di lingkungan RW 3. Nama dan jadwal perlu dikonfirmasi bersama pengelola.",
    latitude: -7.788277133248325,
    longitude: 110.37625916670873,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo: "/images/galeri/tpa.webp",
    status: "draft",
    note: "Pastikan istilah TPA dan jadwal kegiatan telah dikonfirmasi sebelum publikasi.",
  },
  {
    slug: "titik-kelola-sampah",
    name: "TPS",
    category: "sampah",
    description:
      "Titik yang akan dipetakan untuk membantu warga menemukan lokasi peletakan atau pengelolaan sampah.",
    latitude: -7.788244960478345,
    longitude: 110.37605277438338,
    address: "RW 3 Kotabaru, Yogyakarta",
    photo:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=82",
    status: "draft",
    note: "Jangan jadikan titik ini petunjuk operasional sebelum alur pengelolaan disepakati warga.",
  },
  {
    slug: "tempat-sampah-pilah-kompitu",
    name: "Tempat Sampah Pilah - Kompitu",
    category: "sampah",
    description: "Titik pemilahan sampah di dekat Kompitu untuk mendukung pengelolaan sampah warga.",
    latitude: -7.78739,
    longitude: 110.37635,
    address: "Dekat Kompitu, RW 3 Kotabaru, Yogyakarta",
    photo: "/images/galeri/tempat_sampah.webp",
    status: "draft",
    note: "Koordinat sementara. Verifikasi posisi dan alur pengelolaan bersama pengelola.",
  },
  {
    slug: "tempat-sampah-pilah-fasum",
    name: "Tempat Sampah Pilah - Fasilitas Umum",
    category: "sampah",
    description: "Titik pemilahan sampah di dekat Fasilitas Umum untuk membantu pemisahan sampah warga.",
    latitude: -7.787786,
    longitude: 110.376071,
    address: "Dekat Fasilitas Umum, RW 3 Kotabaru, Yogyakarta",
    photo: "/images/galeri/tempat_sampah.webp",
    status: "draft",
    note: "Koordinat sementara. Verifikasi posisi dan alur pengelolaan bersama pengelola.",
  },
];

export const MAP_CENTER = [-7.7879, 110.3762] as const;

export const verifiedPois = POIS.filter(
  (poi) => poi.status === "verified" && poi.latitude !== undefined && poi.longitude !== undefined,
);

export const mapReadyPois = POIS.filter(
  (poi) => poi.latitude !== undefined && poi.longitude !== undefined,
);
