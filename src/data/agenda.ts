export type RoutineFrequency = "mingguan" | "bulanan" | "berkala";

export type RoutineAgenda = {
  slug: string;
  title: string;
  frequency: RoutineFrequency;
  nextDate?: string;
  nextDateConfirmed?: boolean;
  schedule: string;
  time?: string;
  location?: string;
  description: string;
  contact?: string;
  status: "draft" | "published";
};

export const ROUTINE_FREQUENCIES: { value: RoutineFrequency; label: string }[] = [
  { value: "mingguan", label: "Agenda Mingguan" },
  { value: "bulanan", label: "Agenda Bulanan" },
  { value: "berkala", label: "Agenda Berkala" },
];

export const ROUTINE_AGENDAS: RoutineAgenda[] = [
  {
    slug: "pkk-rw",
    title: "PKK RW",
    frequency: "bulanan",
    nextDate: "2026-08-06",
    nextDateConfirmed: true,
    schedule: "Setiap tanggal 6",
    description: "Kegiatan rutin PKK RW untuk koordinasi dan pemberdayaan warga.",
    status: "published",
  },
  {
    slug: "posyandu-anak",
    title: "Posyandu Anak",
    frequency: "bulanan",
    nextDate: "2026-08-10",
    nextDateConfirmed: true,
    schedule: "Setiap tanggal 10",
    description: "Kegiatan pelayanan kesehatan rutin untuk anak-anak di lingkungan RW 3.",
    status: "published",
  },
  {
    slug: "posyandu-lansia",
    title: "Posyandu Lansia",
    frequency: "bulanan",
    nextDate: "2026-08-13",
    nextDateConfirmed: true,
    schedule: "Setiap tanggal 13",
    description: "Kegiatan pelayanan kesehatan rutin untuk warga lanjut usia di lingkungan RW 3.",
    status: "published",
  },
  {
    slug: "bank-sampah",
    title: "Bank Sampah",
    frequency: "bulanan",
    nextDate: "2026-08-22",
    nextDateConfirmed: true,
    schedule: "Setiap tanggal 22",
    description: "Kegiatan pengumpulan dan pemilahan sampah warga untuk mendukung lingkungan RW 3 yang lebih bersih.",
    status: "published",
  },
  {
    slug: "senam-lansia",
    title: "Senam Lansia",
    frequency: "mingguan",
    nextDate: "2026-08-01",
    nextDateConfirmed: true,
    schedule: "Setiap hari Sabtu",
    description: "Kegiatan olahraga rutin untuk menjaga kebugaran dan kebersamaan warga lanjut usia.",
    status: "published",
  },
];

export const PUBLISHED_ROUTINE_AGENDAS = ROUTINE_AGENDAS
  .filter((agenda) => agenda.status === "published");

export const CONFIRMED_NEXT_AGENDAS = PUBLISHED_ROUTINE_AGENDAS
  .filter((agenda) => agenda.nextDate && agenda.nextDateConfirmed)
  .sort((a, b) => (a.nextDate ?? "").localeCompare(b.nextDate ?? ""));
