"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Structure data dari API Go/PostgreSQL
interface BackendBroadcast {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string;
  author: string;
  author_email: string;
  cta_type: string;
  cta_url: string;
  clicks: number;
  expiry_date: string;
  status: string;
  created_at: string;
  updated_at: string;
}

// Structure data untuk UI Frontend
interface Broadcast {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  author: string;
  timeAgo: string;
  expiryText: string;
  imageUrl?: string;
  isCustomGradient?: boolean;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetching data dari Backend Go
  useEffect(() => {
    async function fetchBroadcasts() {
      try {
        const res = await fetch("http://localhost:8080/api/broadcasts");
        if (!res.ok) throw new Error("Gagal mengambil data");
        const json = await res.json();

        // Mapping format data dari Backend Go ke tampilan Frontend Next.js (Strict Type)
        const mappedData: Broadcast[] = json.data.map((item: BackendBroadcast) => ({
          id: String(item.id),
          title: item.title,
          description: item.description,
          category: item.category,
          tags: item.tags ? item.tags.split(",") : [],
          author: item.author,
          timeAgo: new Date(item.created_at).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
          }),
          expiryText: `Berakhir: ${new Date(item.expiry_date).toLocaleDateString("id-ID")}`,
          isCustomGradient: item.id % 2 === 0,
        }));

        setBroadcasts(mappedData);
      } catch (err) {
        console.error("Error fetching broadcasts:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchBroadcasts();
  }, []);

  // Filter pencarian dan kategori secara realtime
  const filteredBroadcasts = broadcasts.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { name: "Semua", count: broadcasts.length },
    { name: "Lomba", count: broadcasts.filter((b) => b.category === "Lomba").length },
    { name: "Kepanitiaan", count: broadcasts.filter((b) => b.category === "Kepanitiaan").length },
    { name: "Tugas Besar", count: broadcasts.filter((b) => b.category === "Tugas Besar").length },
    { name: "Proyek / Freelance", count: broadcasts.filter((b) => b.category === "Proyek / Freelance").length },
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
              <div className="w-9 h-9 rounded-lg bg-[#013880] text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-xs group-hover:bg-[#0062a0] transition-colors">
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
                href="/"
                className="border-b-2 border-[#002356] text-[#002356] font-semibold text-sm pb-1 flex items-center gap-1.5"
              >
                Feed
              </Link>
              <Link
                href="/dashboard"
                className="text-[#475569] font-semibold text-sm hover:text-[#002356] transition-colors pb-1"
              >
                Broadcast Saya
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/create"
              className="hidden sm:inline-flex items-center justify-center gap-2 bg-[#013880] text-white px-4 h-10.5 rounded-lg font-semibold text-sm hover:bg-[#0062a0] transition-colors shadow-xs"
            >
              + Buat Broadcast
            </Link>
            <div className="h-6 w-px bg-[#E2E8F0] mx-1 hidden sm:block"></div>
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
      <main className="grow max-w-7xl mx-auto w-full px-4 md:px-8 py-6">
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
                <span className="text-xl font-bold text-[#002356]">{broadcasts.length}</span>
                <span className="text-xs text-[#475569] mt-0.5">Total Aktif</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#0062a0]">
                  {broadcasts.filter((b) => b.category === "Kepanitiaan").length}
                </span>
                <span className="text-xs text-[#475569] mt-0.5">Kepanitiaan</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#00B4D8]">
                  {broadcasts.filter((b) => b.category === "Lomba").length}
                </span>
                <span className="text-xs text-[#475569] mt-0.5">Tim Lomba</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 flex flex-col">
                <span className="text-xl font-bold text-[#dc9916]">
                  {broadcasts.filter((b) => b.category === "Tugas Besar").length}
                </span>
                <span className="text-xs text-[#475569] mt-0.5">Tugas Besar</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEARCH & FILTERS */}
        <section className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch gap-3">
            <div className="relative grow">
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
                    ? "bg-[#002356] text-white shadow-xs"
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
                onClick={() => setSearchQuery(tag.replace("#", ""))}
                className="bg-white border border-[#E2E8F0] hover:border-[#0062a0] hover:text-[#0062a0] text-[#475569] rounded-full px-3 py-1 text-xs font-semibold transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>

        {/* FEED GRID */}
        {loading ? (
          <div className="text-center py-12 text-[#475569] font-medium">
            Mengambil data dari server backend...
          </div>
        ) : filteredBroadcasts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-[#E2E8F0] text-[#475569]">
            Tidak ada broadcast yang ditemukan.
          </div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredBroadcasts.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden hover:shadow-md hover:border-[#0062a0]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {item.isCustomGradient ? (
                    <div className="relative w-full aspect-video bg-linear-to-br from-[#013880] via-[#0062a0] to-[#00B4D8] p-6 flex flex-col justify-between text-white">
                      <div className="flex justify-between items-start">
                        <span className="text-xs uppercase tracking-wider font-semibold opacity-90">
                          Institut Teknologi Sepuluh Nopember
                        </span>
                        <span className="bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C] font-semibold text-xs px-2.5 py-1 rounded-full">
                          {item.expiryText}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white leading-tight">
                          {item.title}
                        </p>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-white/90 backdrop-blur text-[#002356] border border-[#E2E8F0] font-semibold text-xs px-2.5 py-1 rounded-md">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video bg-[#F1F5F9] overflow-hidden p-6 flex flex-col justify-between border-b border-[#E2E8F0]">
                      <div className="flex justify-between items-start">
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
                    <Link href={`/broadcast/${item.id}`}>
                      <h2 className="font-bold text-base text-[#0F172A] line-clamp-2 hover:text-[#0062a0] cursor-pointer transition-colors mb-2">
                        {item.title}
                      </h2>
                    </Link>
                    <p className="text-xs text-[#475569] line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="bg-[#F1F5F9] text-[#475569] rounded-full px-2.5 py-0.5 text-xs font-semibold"
                        >
                          #{t.trim()}
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
        )}

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-white border border-[#E2E8F0] rounded-xl mb-12 shadow-xs">
          <div className="text-xs text-[#475569] flex items-center gap-2">
            <span>
              Menampilkan <strong className="font-semibold text-[#0F172A]">{filteredBroadcasts.length}</strong> dari{" "}
              <strong className="font-semibold text-[#0F172A]">{broadcasts.length}</strong> broadcast aktif
            </span>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#E2E8F0] bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <p className="text-[#475569] text-xs">
              © 2026 Institut Teknologi Sepuluh Nopember (ITS). Hak Cipta Dilindungi Undang-Undang.
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