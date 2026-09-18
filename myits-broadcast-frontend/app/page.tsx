"use client";

import { useState } from "react";
import Link from "next/link";

interface Broadcast {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  timeAgo: string;
  expiryText: string;
  expiryStatus: "urgent" | "normal" | "danger";
  imageUrl?: string;
  isCustomGradient?: boolean;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const broadcasts: Broadcast[] = [
    {
      id: "1",
      title: "Open Recruitment Panitia Gerigi x UKM Expo 2026",
      description:
        "Dibuka kesempatan bagi mahasiswa ITS angkatan 2023-2025 untuk bergabung dalam kepanitiaan penyambutan mahasiswa baru dan pameran UKM terbesar di ITS...",
      category: "Kepanitiaan",
      tags: ["Public Relation", "Desain Grafis"],
      author: "BEM ITS / DITMAWA",
      timeAgo: "2 jam lalu",
      expiryText: "Berakhir 2 hari lagi",
      expiryStatus: "normal",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC32h3dc2BIpHDyFhu4iYrulsjFOu1dp1K9aXCm3tDMh97y2hLQ9OeN9oezzOHuw9vH_mEDxrog9OaBGxoLEXRDPmmzeQaSxVYjjtIcKTVcgEaBTFY8Bz8SNFJ2S9yqNL8B7CADk3xREe8NbO1t_LT-Tze--Fm3h_TI-cI3-qzQvLcBhsgcYt8JfwgVJX2CxWxhvAL5F5RMn1mKmBx9_lXQytOgCX1-LLwQq7F9pB1nUhZsyiJyOOaB",
    },
    {
      id: "2",
      title:
        "Mencari 1 Front-End Dev (Next.js) - Tim Gemastik Software Development 2026",
      description:
        "Tim divisi Software Development ITS sudah memiliki ide validasi matang & backend engineer. Butuh pengembang UI yang fasih Tailwind CSS dan integrasi API RESTful.",
      category: "Lomba",
      tags: ["Next.js", "Tailwind", "React"],
      author: "Arya (Teknik Informatika '23)",
      timeAgo: "Kemarin",
      expiryText: "Berakhir 5 hari lagi",
      expiryStatus: "normal",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC17uE6qCaNjzmKqqNCz9giiLm0_pul26LWVCmQgY1OSINM58OqrJa6lJTv2Q_Kf3izP45ftNgIEcd0D3ZmutCW2BJo4hCaQMFWro1-L8lShy-KUPbLA0LWuxnWibLqGdbnoby0Yts2HASL21OyFtKOxgzGkPjmVDSe5XM1z6e1R3LKTnKPJESziN-n1-GNn4ygDvCQTr3PP4pGmxrskdPMugXayYxC2KXWSgJoW7Wjvw-jOuKF7qYD",
    },
    {
      id: "3",
      title:
        "Dicari UI/UX Designer untuk Tugas Besar Interaksi Manusia & Komputer",
      description:
        "Kurang 1 anggota untuk riset usability testing & desain wireframe aplikasi perbaikan sistem logistik maritim Jawa Timur. Pengerjaan semi-intensif via Figma.",
      category: "Tugas Besar",
      tags: ["Figma", "User-Research"],
      author: "Nabila (Sistem Informasi '24)",
      timeAgo: "5 jam lalu",
      expiryText: "Berakhir hari ini",
      expiryStatus: "danger",
      isCustomGradient: true,
    },
    {
      id: "4",
      title: "Sayembara Desain Merchandise Dies Natalis ITS ke-66",
      description:
        "Kompetisi terbuka bagi sivitas akademika untuk merancang identitas merchandise resmi Dies Natalis 66 ITS. Total hadiah apresiasi senilai 15 Juta Rupiah.",
      category: "Lomba",
      tags: ["Desain Grafis", "Branding"],
      author: "Biro Komunikasi Publik ITS",
      timeAgo: "3 hari lalu",
      expiryText: "Berakhir 8 hari lagi",
      expiryStatus: "normal",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuApBzJbI0TS8yF8fKirC_HxxoNZwlzbp5YT-vZAWpK1mKjvdxU8xZajPbrvmQXnaZ6PdUvLq1nfcEcXl9bpShbjx3YK8iyXNdrJB4lCfgwUzpGVSpmc4cOvgxRYTcpsLQRQtaHyarY5L9JlMSUZ4jKOzVB1e8JnK8b2tzmWnFKZIfl5xNpNs4l8HYgSs10KX3WJ2kEsAk7JHOP0Fa3OdUHNOMHDHxwSHmSOkvC252SG8oGVQnlwevTq",
    },
    {
      id: "5",
      title: "Proyek Website Katalog UKM Paduan Suara ITS",
      description:
        "Dibutuhkan freelancer mahasiswa untuk membangun landing page profil dan media archive kompetisi internasional PSM ITS. Terdapat honorarium proyek & sertifikat.",
      category: "Proyek / Freelance",
      tags: ["Web Dev", "UI/UX"],
      author: "UKM PSM ITS",
      timeAgo: "4 hari lalu",
      expiryText: "Berakhir 12 hari lagi",
      expiryStatus: "normal",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJZrUfGFILKrKqgfP5u-ukcIBXxHCiIBZKAieD-9KShcBsa6YPlqu-U_aC7iYv2-cgLEvzA0ZtKH7GkdCWiTB4ekCXC3tx8OeZmyRxxoRFPD5C5WzodVYPpqx-884MDOo-4Oc0S85hW7QxF2-8mY3s_VE10e1IlWv24I3p_jFdccmoJi8RgBU6iKV_jR6dPkQJmH3PvEObEtIflCuiO-EGxY0iPnebO86_xDKXt5WWAxRIrnzz-2oI",
    },
    {
      id: "6",
      title: "Open Recruitment Staff Divisi Sponsorship Schematics 2026",
      description:
        "Siap mengasah negosiasi dan relasi korporat teknologi? Schematics membuka registrasi staff divisi sponsorship untuk penggalangan dana gelaran olimpiade & hackathon.",
      category: "Kepanitiaan",
      tags: ["Sponsorship", "Event Organizer"],
      author: "Himpunan Mahasiswa Informatika",
      timeAgo: "5 hari lalu",
      expiryText: "Berakhir 4 hari lagi",
      expiryStatus: "normal",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDqY6iPy6sJl4sl5Owal7JBNeUkCFvmJ6IfJMLHCVFDEnJlY8BjsHB6Dy6ITk3tZSJMGWClHZOOsP3jdlHL9kK6pGN6WLSgx6ObFaOpaNO7ubrHg_HMWjzP1fUsmkQAVUh0uQWjUeq_XIjFWZYMC6JjoIa1qxi4UT11yeGe_5EJmhbMSS95hS7wMlUH6f6_DUba8uVYG9Ya9IQm8bpW4gvZRdXns2X9Wha8PukwlKmmCVkSzdZwuKOt",
    },
  ];

  const categories = [
    { name: "Semua", count: 34 },
    { name: "Kepanitiaan", count: 12 },
    { name: "Lomba", count: 8 },
    { name: "Tugas Besar", count: 9 },
    { name: "Proyek / Freelance", count: 5 },
  ];

  const tags = [
    "#UI/UX",
    "#Front-End",
    "#Machine-Learning",
    "#Desain-Grafis",
    "#IoT",
    "#Public-Relations",
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      {/* TOP APP BAR */}
      <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 rounded-lg bg-[#013880] text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-sm group-hover:bg-[#0062a0] transition-colors">
                <span className="text-[#00B4D8] font-extrabold">I</span>B
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#002356] tracking-tight">
                  myITS Broadcast
                </span>
                <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest hidden sm:inline-block">
                  Institut Teknologi Sepuluh Nopember
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 h-16 pt-1">
              <Link
                href="#"
                className="border-b-2 border-[#002356] text-[#002356] font-semibold text-sm pb-1 flex items-center gap-1.5"
              >
                Feed
              </Link>
              <Link
                href="#"
                className="text-[#475569] font-semibold text-sm hover:text-[#002356] transition-colors pb-1"
              >
                Broadcast Saya
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="create"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#013880] text-white px-4 h-[42px] rounded-lg font-semibold text-sm hover:bg-[#0062a0] transition-colors shadow-sm"
            >
              + Buat Broadcast
            </Link>
            <div className="h-6 w-[1px] bg-[#E2E8F0] mx-1 hidden sm:block"></div>
            <div className="flex items-center gap-2 pl-1 border border-[#E2E8F0] rounded-full bg-[#F1F5F9] pr-3 py-1">
              <div className="w-7 h-7 rounded-full bg-[#013880] text-white flex items-center justify-center text-xs font-bold">
                MR
              </div>
              <div className="hidden lg:flex flex-col">
                <span className="text-xs font-bold text-[#0F172A] leading-none">
                  m.reza@student.its.ac.id
                </span>
                <span className="text-[10px] font-medium text-[#047857] leading-tight mt-0.5">
                  Mahasiswa Aktif ITS
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CANVAS */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
        {/* HERO SECTION */}
        <section className="mb-8 rounded-xl bg-white border border-[#E2E8F0] p-6 md:p-8 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] border border-[#E2E8F0] text-[#002356] text-xs font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse"></span>
                Portal Komunikasi Kolaboratif Kampus Sepuluh Nopember
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#002356] tracking-tight mb-2">
                Papan Informasi &amp; Kolaborasi Mahasiswa Kampus Perjuangan ITS
              </h1>
              <p className="text-sm text-[#475569] leading-relaxed">
                Temukan rekan tim lomba, lowongan kepanitiaan, partner pengerjaan tugas besar, serta proyek profesional kampus secara transparan dan terverifikasi SSO myITS.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 min-w-[320px]">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#002356]">34</span>
                <span className="text-xs text-[#475569] mt-0.5">Total Aktif</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#0062a0]">12</span>
                <span className="text-xs text-[#475569] mt-0.5">Kepanitiaan</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#00B4D8]">8</span>
                <span className="text-xs text-[#475569] mt-0.5">Tim Lomba</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#dc9916]">14</span>
                <span className="text-xs text-[#475569] mt-0.5">Tugas Besar</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH & FILTERS */}
        <section className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari broadcast berdasarkan judul (contoh: Panitia Gerigi, Lomba Gemastik)..."
                className="w-full h-12 pl-4 pr-10 rounded-lg bg-white border border-[#E2E8F0] text-sm focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/10 outline-none transition-all"
              />
            </div>
            <select className="h-12 px-4 rounded-lg bg-white border border-[#E2E8F0] text-sm font-semibold text-[#0F172A] outline-none cursor-pointer">
              <option value="latest">Terbaru dibuat</option>
              <option value="urgent">Segera berakhir</option>
              <option value="popular">Paling banyak dilihat</option>
            </select>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                  selectedCategory === cat.name
                    ? "bg-[#002356] text-white shadow-sm"
                    : "bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#F1F5F9]"
                }`}
              >
                {cat.name}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs ${
                    selectedCategory === cat.name
                      ? "bg-[#013880] text-[#00B4D8]"
                      : "bg-[#F1F5F9] text-[#475569]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            <span className="text-xs font-bold text-[#94A3B8] mr-1">Topik:</span>
            {tags.map((tag) => (
              <button
                key={tag}
                className="bg-white border border-[#E2E8F0] hover:border-[#0062a0] hover:text-[#0062a0] text-[#475569] rounded-full px-3 py-1 text-xs font-semibold transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* FEED GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {broadcasts.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-md hover:border-[#0062a0]/40 transition-all flex flex-col justify-between"
            >
              <div>
                {item.isCustomGradient ? (
                  <div className="relative w-full aspect-video bg-gradient-to-br from-[#013880] via-[#0062a0] to-[#00B4D8] p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-xs uppercase tracking-wider font-semibold opacity-90">
                        Sistem Informasi ITS
                      </span>
                      <span className="bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C] font-semibold text-xs px-2.5 py-1 rounded-full">
                        {item.expiryText}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-white leading-tight">
                        Interaksi Manusia &amp; Komputer (Kelas B)
                      </p>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 backdrop-blur text-[#002356] border border-[#E2E8F0] font-semibold text-xs px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full aspect-video bg-[#F1F5F9] overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309] font-semibold text-xs px-2.5 py-1 rounded-full">
                        {item.expiryText}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 backdrop-blur text-[#002356] border border-[#E2E8F0] font-semibold text-xs px-2.5 py-1 rounded-md">
                        {item.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-4">
                  <h2 className="font-bold text-base text-[#0F172A] line-clamp-2 hover:text-[#0062a0] cursor-pointer transition-colors mb-2">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#475569] line-clamp-2 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[#F1F5F9] text-[#475569] rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-[#475569] truncate">
                  {item.author}
                </span>
                <span className="text-xs text-[#94A3B8] shrink-0">
                  {item.timeAgo}
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-white border border-[#E2E8F0] rounded-xl mb-12 shadow-xs">
          <div className="text-xs text-[#475569] flex items-center gap-2">
            <span>
              Menampilkan <strong className="font-semibold text-[#0F172A]">1-6</strong> dari{" "}
              <strong className="font-semibold text-[#0F172A]">34</strong> broadcast aktif
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              disabled
              className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] text-[#94A3B8] bg-[#F1F5F9] cursor-not-allowed text-xs font-semibold"
            >
              Sebelumnya
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg bg-[#002356] text-white text-xs font-bold">
                1
              </button>
              <button className="w-8 h-8 rounded-lg border border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#475569] text-xs font-semibold">
                2
              </button>
            </div>
            <button className="px-3 py-1.5 rounded-lg border border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#0F172A] text-xs font-semibold transition-colors">
              Selanjutnya
            </button>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#E2E8F0] bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <p className="text-[#475569] text-xs">
              © 2024 Institut Teknologi Sepuluh Nopember (ITS). Hak Cipta Dilindungi Undang-Undang.
            </p>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#475569]">
            <Link href="#" className="hover:text-[#002356]">SatuDikti</Link>
            <Link href="#" className="hover:text-[#002356]">myITS Portal</Link>
            <Link href="#" className="hover:text-[#002356]">Pedoman Komunitas</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}