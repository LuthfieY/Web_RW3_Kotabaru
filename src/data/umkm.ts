export type UmkmStatus = "draft" | "verified";
export type UmkmRt = "RT 10" | "RT 13";

export type Umkm = {
  slug: string;
  name: string;
  owner: string;
  rt: UmkmRt;
  category: string;
  description: string;
  photo?: string;
  address?: string;
  contact?: string;
  whatsapp?: string;
  openingHours?: string;
  profileEnabled: boolean;
  status: UmkmStatus;
  note?: string;
};

export const UMKM: Umkm[] = [
  {
    slug: "bu-sukesi",
    name: "Bu Sukesi",
    owner: "Bu Sukesi",
    rt: "RT 10",
    category: "Kuliner",
    description: "Minuman serbuk instan (bir plethok, jahe sereh, wedang uwuh) dan dawet bayem merah",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-umrotul",
    name: "Bu Umrotul",
    owner: "Bu Umrotul",
    rt: "RT 10",
    category: "Kuliner",
    description: "Manisan Buah",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-susmiyati",
    name: "Bu Susmiyati",
    owner: "Bu Susmiyati",
    rt: "RT 10",
    category: "Kuliner",
    description: "Aneka gorengan olahan singkong",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-suwati",
    name: "Bu Suwati",
    owner: "Bu Suwati",
    rt: "RT 10",
    category: "Kuliner",
    description: "Klitikan kripik",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-yayuk",
    name: "Bu Yayuk",
    owner: "Bu Yayuk",
    rt: "RT 10",
    category: "Kuliner",
    description: "Nasi bakar dan apem",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-siti-mariyani",
    name: "Bu Siti Mariyani",
    owner: "Bu Siti Mariyani",
    rt: "RT 10",
    category: "Kuliner",
    description: "Lontong sayur",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-nur-srimirnani",
    name: "Bu Nur Srimirnani",
    owner: "Bu Nur Srimirnani",
    rt: "RT 10",
    category: "Kuliner",
    description: "Onde-onde ceplis krispi",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-rustia",
    name: "Bu Rustia",
    owner: "Bu Rustia",
    rt: "RT 10",
    category: "Kuliner",
    description: "Aneka jus",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-dina",
    name: "Bu Dina",
    owner: "Bu Dina",
    rt: "RT 10",
    category: "Kuliner",
    description: "Jajanan pasar",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-suparti",
    name: "Bu Suparti",
    owner: "Bu Suparti",
    rt: "RT 10",
    category: "Kuliner",
    description: "Brownies",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-desi-bu-yanah",
    name: "Bu Desi dan Bu Yanah",
    owner: "Bu Desi dan Bu Yanah",
    rt: "RT 13",
    category: "Kuliner",
    description: "Donat",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "bu-iswarin",
    name: "Bu Iswarin",
    owner: "Bu Iswarin",
    rt: "RT 13",
    category: "Kuliner",
    description: "Mie lethek",
    profileEnabled: false,
    status: "verified",
  },
  {
    slug: "dapur-bu-sari",
    name: "Warung Makan Teras Roso",
    owner: "Bu Susi",
    rt: "RT 13",
    category: "Kuliner",
    description: "Warung soto",
    photo: "/images/umkm/teras_roso_depan.webp",
    address: "RT 13",
    profileEnabled: true,
    status: "verified",
  },
];
