export type PlantCategory = "Herbal" | "Sayuran" | "Tanaman Hias" | "Pohon Peneduh";

export type PlantCatalogItem = {
  slug: string;
  name: string;
  scientificName: string;
  category: PlantCategory;
  benefit: string;
  photo: string;
};

export const KOMPITU_IMAGES = {
  hero: "/images/kompitu/kompitu_depan.webp",
  lele: "/images/kompitu/lele_cendol.webp",
  turmeric: "/images/tanaman/kunyit.webp",
  aloe: "/images/tanaman/lidah_buaya.webp",
  lemongrass: "/images/tanaman/serai.webp",
  ginger: "/images/tanaman/jahe.webp",
  kangkung: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4r5oaZ-o6fVAnJ9HuqVkFirtFKFIeLnezOWf8EQky3PbvQzxtoXQCjfsm_jXPsB6liXou9nYfGmksaocNTz8ruJfygNsFFaKCrmmX-thLuKXSSRYAEU9I8CKGx7fMdkgv_zyXgDuvzaXUPf3ibYaX98ZydxqqRadtyu7fznvOwXHsKm7hJID38tMRdePPon8D2XunP1Z75_Alrk8nghZbUOj8FchSzU-mytwI4YNyEebVAEmQm-BdWw",
  monstera: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6McwZnjB6CjJf1EipQ_iYKBkZoPj0YKWwvJYg1RelIoCTDPSIKy_kwvCiJ5P4WI2grwiwuURFNwGtdLZD62Qglo4pphNegEStchkkfcLCdySwKXD_SLUK_DnxlonMG5tBdKwqPBJDSe92sIRUKVlb8PIWsDmEqoeq9nZbwPm5yqkDwC-Mr50vohgRBIHwJ609RuqktOY1cvEEhSpuknTGqrvx58aHl7hEbR_ljjDC0hXh64NDK3jhTQ",
  ketapang: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk5lriX4LyIrm4bUXO4lFhMut8HtxYlXoE9pTUtEub_H3lW6QD6Aon6-aROzHOr0crp9cutPCD0B8EDH0eMo4dZriT02weQmaiLum6XGlSgLAoI5pBx6O2-odPRifvL8Smraiy7REuzTx6hLE6sB1DfjMPgrnv6WhubHZ4znn7EyAdPWh_a0hNCLHyc61fCcmPa-8lOtoMGoI0aWRBE74fXup_DDMDeuVoZSx_wGHayAUf9IN5n43I_w",
  komposSort: "/images/edukasi/pilah_sampah_kompos.webp",
  komposBin: "/images/edukasi/komposter.webp",
  komposMix: "/images/edukasi/aduk_kompos.webp",
  komposMatureCheck: "/images/edukasi/periksa_kompos.webp",
  pesticideInspection: "/images/edukasi/identifikasi_hama.webp",
  pesticideSolution: "/images/edukasi/larutan_bawang.webp",
  pesticideFormula: "/images/edukasi/siapkan_formula_kombinasi.webp",
  pesticideTest: "/images/edukasi/uji_semprot.webp",
  irrigationComponents: "/images/edukasi/kenali_komponen.webp",
  irrigationFlush: "/images/edukasi/pasang_bilas.webp",
  irrigationFlow: "/images/edukasi/uji_debit.webp",
  irrigationMaintenance: "/images/edukasi/periksa_rawat.webp",
  shredderLocation: "/images/edukasi/lokasi_operator.webp",
  shredderInspection: "/images/edukasi/periksa_alat.webp",
  shredderFeeding: "/images/edukasi/masukkan_bahan.webp",
  shredderMaintenance: "/images/edukasi/matikan_rawat.webp",
  komposLayers: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrfALr0AIgAvnDG8OSZUmvEOBS13VdhB4kmzmQAXqkeXTWztDGCD_dDKQYd_Hfj6NZzJCpFODjB5LCD6LCiG9geCCw9Q_FYgYtbc2-lczJR5f1mcdiW6U4ZqPGoMEzDn5te-ZyUECtgXR1wdOakmeY6HC7Sxs-On9BtXhp642VYOdGnO7q4xEQiLSer3N9Pim8dfxxFLZ90iatIuYNBxidcyg-P50ZEAlz1tkvra5OtCpy6w2p1K2Ggg",
  komposMature: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc1YGTAj40uH79DtmBE3EDXzqRPJNuR4ZTR6iVzE3nWfD8gyb_yLCEOQ_5uvpkvq-u_suEP50dUrah8RR2Tk_EjMHdUvr753cDOAZ-Mf3OV1yOUVUsudKxATLfkXuSnDtWHOPHyt3z8rYbeybl37ms-tWXrfQzLF_trT7tQEgjdYqXRWW48zjS1JXTXLzokKW-QKIt9tovhkxUvzSUo3tISN6bPyfNcEk49GZdvSK3f9CPozPm7NKUaQ",
  pesticide: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWj7w2kOMm1AS9-4TwRfkSKhVPUsBxU5SfjOLY8F5PvjgCmkI7JiBqRq_ZD0SRLkL0yKxHCN7kRIpbSu5L1YrW71MfScshwFAFyFuq8MI7qWdZljBQIvacBRWfDYK2Le7OkVwGrkb5mFy9jCVuUNkhNaFqk4gHXYBO9T6C82omdUwYCwykOhqXc-NtCmU1mGQz3zhwvfEWTiZv4TRymkCDs-AsuDKYOU4YccQaU6Yi-RNBcAywdtYzCA",
  irrigation: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMn390e5IP2mS1smq8oZdeqKEpeEi_8VkX3ZsJ-SVXypVbv_X9qdC1wbhEcVJ3oHa40SyGEKgYrvZygtzJ9cmfwflzRmzbex0Tbu2Xdchjo3tok4BSUD1h4E4Ik99Gc8SYwbO2VqFp8Hma9JhxnQaeitvxg-96vD1A_u7yuEMkNXENXCtbbzK90AwQLfh_zhu45UjEqmSSDT9AhGH8PSOFQwR8PUqEEeHWtj7SazpUa5EmJ2Piu0cqXg",
  shredder: "https://lh3.googleusercontent.com/aida-public/AB6AXuALDX56qI5KVMstjx10a_dK8yL1sV8BZlmjCvD3D18DrqbuL80NLMQqZffLGuOloo0JphZVyDNw-9eh7OQs7D8dHw91yhVfRJosON97i6utKHrUm37uoKOpRzt4PwMyOWPdgn2-CuVnAuYe30nTvs3uZLl_gnrk7tNaaJc687Qv2ccdAWJwcS8SmvqACH43qx8N5fMOWR4Bn1lpWE_f1ZAAFnlwADhkUcpuhADdxGWWreDV74h_JdvkA",
} as const;

export const PLANT_CATALOG: PlantCatalogItem[] = [
  { slug: "sig-sag", name: "Sig-Sag", scientificName: "Euphorbia tithymaloides", category: "Tanaman Hias", benefit: "Tanaman hias dengan batang beruas yang unik. Beberapa bagian tanaman ini dimanfaatkan dalam pengobatan tradisional dengan penggunaan yang harus dilakukan secara hati-hati.", photo: "/images/tanaman/sig-sag.webp" },
  { slug: "seledri", name: "Seledri", scientificName: "Apium graveolens", category: "Sayuran", benefit: "Tanaman sayuran beraroma khas yang sering digunakan sebagai pelengkap masakan. Seledri mengandung vitamin, mineral, dan antioksidan yang bermanfaat bagi kesehatan.", photo: "/images/tanaman/seledri.webp" },
  { slug: "tomat", name: "Tomat", scientificName: "Solanum lycopersicum", category: "Sayuran", benefit: "Menghasilkan buah kaya vitamin C, likopen, dan antioksidan. Buah tomat banyak dikonsumsi segar maupun diolah menjadi berbagai produk makanan.", photo: "/images/tanaman/tomat.webp" },
  { slug: "kunyit", name: "Kunyit", scientificName: "Curcuma longa", category: "Herbal", benefit: "Tanaman rimpang dengan warna kuning khas yang banyak digunakan sebagai bumbu serta pewarna alami. Kandungan kurkuminnya juga dikenal memiliki sifat antioksidan dan antiinflamasi.", photo: "/images/tanaman/kunyit.webp" },
  { slug: "asam-jawa", name: "Asam Jawa", scientificName: "Tamarindus indica", category: "Pohon Peneduh", benefit: "Pohon yang menghasilkan buah bercita rasa asam dan banyak dimanfaatkan sebagai bumbu masakan maupun minuman. Buahnya mengandung antioksidan dan sering digunakan dalam pengobatan tradisional.", photo: "/images/tanaman/asam_jawa.webp" },
  { slug: "katuk", name: "Katuk", scientificName: "Cnidoscolus aconitifolius", category: "Sayuran", benefit: "Tanaman perdu dengan daun yang dapat dikonsumsi sebagai sayuran. Daunnya kaya vitamin dan mineral serta dikenal membantu mendukung produksi ASI pada ibu menyusui.", photo: "/images/tanaman/katuk.webp" },
  { slug: "yodium", name: "Yodium (Coralbush)", scientificName: "Jatropha multifida", category: "Tanaman Hias", benefit: "Tanaman hias dengan bentuk daun yang unik dan menarik. Selain mempercantik taman, beberapa bagiannya dimanfaatkan dalam pengobatan tradisional sehingga penggunaannya perlu dilakukan secara hati-hati.", photo: "/images/tanaman/yodium.webp" },
  { slug: "serai", name: "Serai", scientificName: "Cymbopogon citratus", category: "Herbal", benefit: "Tanaman beraroma harum yang sering digunakan sebagai bumbu masakan dan bahan minuman herbal. Minyak atsirinya juga dimanfaatkan sebagai pengusir serangga alami.", photo: "/images/tanaman/serai.webp" },
  { slug: "lidah-mertua", name: "Lidah Mertua", scientificName: "Sansevieria sp.", category: "Tanaman Hias", benefit: "Tanaman hias yang tahan terhadap kondisi kering dan mudah dirawat. Tanaman ini dikenal mampu membantu meningkatkan kualitas udara di lingkungan sekitar.", photo: "/images/tanaman/lidah_mertua.webp" },
  { slug: "cabai", name: "Cabai", scientificName: "Capsicum sp.", category: "Sayuran", benefit: "Menghasilkan buah dengan rasa pedas dan banyak digunakan sebagai bumbu masakan. Cabai juga kaya akan vitamin C dan antioksidan yang baik untuk kesehatan.", photo: "/images/tanaman/cabai.webp" },
  { slug: "pegagan", name: "Pegagan", scientificName: "Centella asiatica", category: "Herbal", benefit: "Tanaman herbal yang tumbuh menjalar dengan daun berbentuk bulat. Tanaman ini sering dimanfaatkan untuk membantu menjaga kesehatan kulit, mempercepat penyembuhan luka, dan mendukung fungsi kognitif.", photo: "/images/tanaman/pegagan.webp" },
  { slug: "lidah-buaya", name: "Lidah Buaya", scientificName: "Aloe vera", category: "Herbal", benefit: "Tanaman sukulen dengan daun tebal yang mengandung gel kaya nutrisi. Gel lidah buaya banyak dimanfaatkan untuk perawatan kulit, rambut, serta diolah menjadi minuman yang menyegarkan.", photo: "/images/tanaman/lidah_buaya.webp" },
  { slug: "kumis-kucing", name: "Kumis Kucing", scientificName: "Orthosiphon aristatus", category: "Herbal", benefit: "Tanaman herbal yang mudah tumbuh di daerah tropis dengan bunga putih menyerupai kumis kucing. Tanaman ini banyak dimanfaatkan sebagai obat tradisional, terutama untuk membantu menjaga kesehatan ginjal dan saluran kemih.", photo: "/images/tanaman/kumis_kucing.webp" },
  { slug: "jahe", name: "Jahe", scientificName: "Zingiber officinale", category: "Herbal", benefit: "Tanaman rimpang yang memiliki aroma khas dan rasa pedas. Selain digunakan sebagai bumbu masakan, jahe juga sering diolah menjadi minuman herbal untuk membantu menghangatkan tubuh dan menjaga daya tahan tubuh.", photo: "/images/tanaman/jahe.webp" },
  { slug: "daun-bawang", name: "Daun Bawang", scientificName: "Allium sp.", category: "Sayuran", benefit: "Tanaman sayuran yang banyak digunakan sebagai pelengkap berbagai hidangan. Selain menambah cita rasa dan aroma masakan, daun bawang juga mengandung vitamin dan antioksidan yang bermanfaat bagi kesehatan.", photo: "/images/tanaman/daun_bawang.webp" },
  { slug: "daun-salam", name: "Daun Salam", scientificName: "Syzygium polyanthum", category: "Herbal", benefit: "Tanaman rempah yang memiliki aroma khas dan banyak digunakan sebagai penyedap masakan. Selain itu, daun salam dipercaya memiliki manfaat untuk membantu menjaga kesehatan tubuh.", photo: "/images/tanaman/daun_salam.webp" },
  { slug: "bayam-brazil", name: "Bayam Brazil", scientificName: "Alternanthera sissoo", category: "Sayuran", benefit: "Tanaman penutup tanah yang tumbuh cepat dengan daun hijau lebat. Tanaman ini banyak dimanfaatkan sebagai penghias taman sekaligus membantu menjaga kelembapan tanah.", photo: "/images/tanaman/bayam_brazil.webp" },
  { slug: "bayam-merah", name: "Bayam Merah", scientificName: "Amaranthus sp.", category: "Sayuran", benefit: "Sayuran daun berwarna merah yang dapat menjadi bagian dari kebun pangan warga. Pemanfaatan dan manfaat khusus tanaman ini perlu dilengkapi melalui validasi bersama pengelola Kompitu.", photo: "/images/tanaman/bayam_merah.webp" },
  { slug: "kubis", name: "Kubis", scientificName: "Brassica oleracea", category: "Sayuran", benefit: "Sayuran berdaun yang membentuk kepala padat dan banyak dikonsumsi sebagai bahan makanan. Kubis mengandung serat, vitamin C, dan berbagai nutrisi yang baik untuk kesehatan pencernaan.", photo: "/images/tanaman/kubis.webp" },
  { slug: "selada", name: "Selada", scientificName: "Lactuca sativa", category: "Sayuran", benefit: "Sayuran daun yang sering dikonsumsi segar sebagai lalapan atau salad. Tanaman ini kaya akan serat, vitamin A, vitamin K, serta rendah kalori sehingga baik untuk pola makan sehat.", photo: "/images/tanaman/selada.webp" },
  { slug: "terong", name: "Terong", scientificName: "Solanum melongena", category: "Sayuran", benefit: "Tanaman sayuran yang menghasilkan buah berwarna ungu, hijau, atau putih. Buahnya mengandung serat dan antioksidan serta banyak diolah menjadi berbagai jenis masakan.", photo: "/images/tanaman/terung.webp" },
];

export const MATERIAL_IMAGES = {
  kompos: [KOMPITU_IMAGES.komposSort, KOMPITU_IMAGES.komposBin, KOMPITU_IMAGES.komposMix, KOMPITU_IMAGES.komposMatureCheck],
  "pestisida-nabati": [KOMPITU_IMAGES.pesticideInspection, KOMPITU_IMAGES.pesticideSolution, KOMPITU_IMAGES.pesticideFormula, KOMPITU_IMAGES.pesticideTest],
  "irigasi-tetes": [KOMPITU_IMAGES.irrigationComponents, KOMPITU_IMAGES.irrigationFlush, KOMPITU_IMAGES.irrigationFlow, KOMPITU_IMAGES.irrigationMaintenance],
  "pencacah-daun": [KOMPITU_IMAGES.shredderLocation, KOMPITU_IMAGES.shredderInspection, KOMPITU_IMAGES.shredderFeeding, KOMPITU_IMAGES.shredderMaintenance],
} as const;
