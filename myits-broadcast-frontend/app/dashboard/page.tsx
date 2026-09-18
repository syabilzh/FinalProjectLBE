"use client";

import { useState } from "react";
import Link from "next/link";

interface MyBroadcastItem {
  id: string;
  title: string;
  category: string;
  createdAt: string;
  expiryDate: string;
  daysLeftText: string;
  clicks: number;
  ctaUrl: string;
  status: "Aktif" | "Kedaluwarsa";
  isUrgent?: boolean;
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"Semua" | "Aktif" | "Kedaluwarsa">(
    "Semua"
  );
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedPostTitle, setSelectedPostTitle] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const myBroadcasts: MyBroadcastItem[] = [
    {
      id: "1",
      title: "Mencari 1 Front-End Dev (Next.js) - Tim Gemastik 2026",
      category: "Lomba",
      createdAt: "16 Sep 2026",
      expiryDate: "23 Sep 2026",
      daysLeftText: "Sisa 5 hari",
      clicks: 42,
      ctaUrl: "wa.me/628123...",
      status: "Aktif",
    },
    {
      id: "2",
      title: "Open Recruitment Divisi Web Schematics ITS 2026",
      category: "Kepanitiaan",
      createdAt: "14 Sep 2026",
      expiryDate: "21 Sep 2026",
      daysLeftText: "Sisa 3 hari",
      clicks: 87,
      ctaUrl: "intip.in/OprecSche...",
      status: "Aktif",
      isUrgent: true,
    },
    {
      id: "3",
      title: "Pencarian Anggota Tim Tugas Besar PBO Semester Ganjil",
      category: "Tugas Besar",
      createdAt: "18 Sep 2026",
      expiryDate: "20 Sep 2026",
      daysLeftText: "Sisa 2 hari",
      clicks: 19,
      ctaUrl: "line.me/ti/p/~reza...",
      status: "Aktif",
      isUrgent: true,
    },
    {
      id: "4",
      title: "Sayembara Logo Himpunan Mahasiswa Informatika 2026",
      category: "Lomba",
      createdAt: "01 Sep 2026",
      expiryDate: "10 Sep 2026",
      daysLeftText: "Kedaluwarsa",
      clicks: 65,
      ctaUrl: "forms.gle/x2y9A...",
      status: "Kedaluwarsa",
    },
  ];

  const filteredList = myBroadcasts.filter((item) => {
    if (activeTab === "Semua") return true;
    return item.status === activeTab;
  });

  const handleOpenDelete = (title: string) => {
    setSelectedPostTitle(title);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setDeleteModalOpen(false);
    setToastMessage("Broadcast berhasil dihapus dari feed publik.");
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      {/* HEADER */}
      <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-6 flex-1 max-w-xl">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-[#002356] shrink-0 tracking-tight"
            >
              <span className="w-8 h-8 rounded-lg bg-[#002356] text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">campaign</span>
              </span>
              <span>myITS Broadcast</span>
            </Link>
            <div className="relative w-full hidden sm:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] flex items-center">
                <span className="material-symbols-outlined text-xl">search</span>
              </span>
              <input
                className="w-full h-10 pl-10 pr-4 bg-[#F1F5F9] text-[#0F172A] placeholder:text-[#94A3B8] rounded-lg border-0 focus:ring-2 focus:ring-[#0062a0] text-sm outline-none"
                placeholder="Cari pengumuman..."
                type="search"
              />
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-[#475569] font-semibold text-sm hover:text-[#002356] transition-colors py-1"
            >
              Feed
            </Link>
            <Link
              href="/dashboard"
              className="border-b-2 border-[#002356] text-[#002356] font-bold text-sm pb-1"
            >
              Broadcast Saya
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/create"
              className="h-10 px-4 rounded-md bg-[#002356] text-white font-semibold text-sm flex items-center gap-2 hover:bg-[#0062a0] transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              <span className="hidden md:inline">Buat Broadcast</span>
            </Link>
            <div className="h-8 w-px bg-[#E2E8F0] mx-1"></div>
            <div className="flex items-center gap-2.5 pl-1">
              <div className="w-9 h-9 rounded-full bg-[#013880] text-white flex items-center justify-center text-xs font-bold">
                MR
              </div>
              <div className="hidden lg:flex flex-col text-left">
                <span className="text-xs font-bold text-[#0F172A] leading-tight">
                  M. Reza
                </span>
                <span className="text-[10px] text-[#475569] leading-tight truncate max-w-[140px]">
                  m.reza@student.its.ac.id
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CANVAS */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* DASHBOARD HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#e5eeff] text-[#0062a0]">
                Portal Sivitas ITS
              </span>
              <span className="text-[#94A3B8]">•</span>
              <span className="text-xs text-[#475569]">
                Dashboard Pengumuman Mahasiswa
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#002356] tracking-tight">
              Manajemen Broadcast Saya
            </h1>
            <p className="text-sm text-[#475569] mt-1">
              Kelola pengumuman yang Anda publikasikan dengan email{" "}
              <span className="font-semibold text-[#0F172A] underline decoration-[#E2E8F0] underline-offset-4">
                m.reza@student.its.ac.id
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/create"
              className="h-[42px] px-4 rounded-md bg-[#002356] hover:bg-[#0062a0] text-white font-semibold text-sm flex items-center gap-2 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-lg">add_circle</span>
              <span>+ Buat Baru</span>
            </Link>
          </div>
        </div>

        {/* SUMMARY BENTO STATS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-[#475569]">
                  Total Broadcast Dibuat
                </span>
                <div className="text-3xl font-bold text-[#002356] mt-1">4</div>
              </div>
              <span className="w-10 h-10 rounded-lg bg-[#e5eeff] text-[#0062a0] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">
                  format_list_bulleted
                </span>
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center text-xs text-[#475569]">
              <span className="text-[#047857] font-semibold flex items-center mr-1">
                <span className="material-symbols-outlined text-sm mr-0.5">
                  trending_up
                </span>{" "}
                100%
              </span>
              terverifikasi myITS
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-[#475569]">
                  Broadcast Aktif
                </span>
                <div className="text-3xl font-bold text-[#047857] mt-1">3</div>
              </div>
              <span className="w-10 h-10 rounded-lg bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">bolt</span>
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
              <span>Tampil di feed publik</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                Live
              </span>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-[#475569]">
                  Total Klik CTA Eksternal
                </span>
                <div className="text-3xl font-bold text-[#002356] mt-1">
                  148 <span className="text-sm font-normal text-[#475569]">klik</span>
                </div>
              </div>
              <span className="w-10 h-10 rounded-lg bg-[#e5eeff] text-[#0062a0] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">ads_click</span>
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
              <span>Tautan pendaftaran/kontak</span>
              <span className="text-[#0062a0] font-semibold">Avg. 37/post</span>
            </div>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold text-[#475569]">
                  Broadcast Kedaluwarsa
                </span>
                <div className="text-3xl font-bold text-[#475569] mt-1">1</div>
              </div>
              <span className="w-10 h-10 rounded-lg bg-[#F1F5F9] text-[#94A3B8] flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">history</span>
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
              <span>Otomatis diarsipkan</span>
              <span className="text-[#B45309] font-semibold">Perlu tindakan</span>
            </div>
          </div>
        </section>

        {/* TAB FILTER & CONTROLS */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-1 bg-[#F1F5F9] p-1 rounded-lg self-start">
              {(["Semua", "Aktif", "Kedaluwarsa"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md font-semibold text-xs transition-all ${
                    activeTab === tab
                      ? "bg-white text-[#002356] shadow-sm"
                      : "text-[#475569] hover:text-[#002356]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="relative min-w-[260px] flex-1 sm:flex-initial">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                  <span className="material-symbols-outlined text-lg">search</span>
                </span>
                <input
                  className="w-full h-10 pl-10 pr-4 bg-white text-[#0F172A] placeholder:text-[#94A3B8] rounded-lg border border-[#E2E8F0] focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/20 text-xs outline-none"
                  placeholder="Cari dalam broadcast saya..."
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BROADCAST TABLE */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[#F1F5F9]/70 border-b border-[#E2E8F0] text-[#475569] font-bold text-xs uppercase tracking-wider">
            <div className="col-span-5">Pengumuman &amp; Detail</div>
            <div className="col-span-2">Masa Berlaku</div>
            <div className="col-span-2">Performa CTA</div>
            <div className="col-span-1 text-center">Status</div>
            <div className="col-span-2 text-right">Aksi Tindakan</div>
          </div>

          {/* Items */}
          {filteredList.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 px-6 py-5 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] transition-colors"
            >
              <div className="col-span-1 lg:col-span-5 space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#475569] text-[11px] font-bold">
                    {item.category}
                  </span>
                  <span className="text-xs text-[#94A3B8] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">
                      calendar_today
                    </span>
                    Dibuat: {item.createdAt}
                  </span>
                </div>
                <h2 className="text-base font-bold text-[#002356] tracking-tight hover:text-[#0062a0] cursor-pointer">
                  {item.title}
                </h2>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <div className="text-xs text-[#0F172A] font-medium">
                  {item.expiryDate}
                </div>
                <span
                  className={`inline-flex items-center gap-1 mt-1 text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    item.isUrgent
                      ? "bg-[#FFFBEB] text-[#B45309] border border-[#FDE68A]"
                      : item.status === "Kedaluwarsa"
                      ? "bg-[#F1F5F9] text-[#94A3B8]"
                      : "bg-[#e5eeff] text-[#0062a0]"
                  }`}
                >
                  <span className="material-symbols-outlined text-xs">
                    {item.status === "Kedaluwarsa" ? "event_busy" : "schedule"}
                  </span>
                  {item.daysLeftText}
                </span>
              </div>

              <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#0062a0] text-lg">
                    touch_app
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">
                      {item.clicks} klik
                    </div>
                    <div className="text-xs text-[#94A3B8] truncate max-w-[120px]">
                      {item.ctaUrl}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-1 text-left lg:text-center">
                <span
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                    item.status === "Aktif"
                      ? "bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]"
                      : "bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="col-span-1 lg:col-span-2 flex items-center justify-start lg:justify-end gap-2 flex-wrap">
                <button
                  className="h-9 px-3 rounded-md bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#0F172A] text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Edit Pengumuman"
                >
                  <span className="material-symbols-outlined text-base">edit</span>
                  <span>Edit</span>
                </button>

                <button
                  onClick={() => handleOpenDelete(item.title)}
                  className="h-9 px-2.5 rounded-md hover:bg-[#FEF2F2] text-[#B91C1C] text-xs font-semibold flex items-center transition-colors"
                  title="Hapus"
                >
                  <span className="material-symbols-outlined text-lg">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL KONFIRMASI HAPUS */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white w-full max-w-[480px] rounded-xl border border-[#E2E8F0] p-6 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C] flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl">warning</span>
            </div>
            <h3 className="text-xl font-bold text-[#002356]">
              Konfirmasi Hapus Broadcast?
            </h3>
            <p className="text-sm text-[#475569] mt-2.5 leading-relaxed">
              Broadcast{" "}
              <strong className="text-[#0F172A]">&quot;{selectedPostTitle}&quot;</strong> ini
              akan disembunyikan dari feed publik.
            </p>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteModalOpen(false)}
                className="h-[42px] px-5 rounded-md border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#0F172A] font-semibold text-sm transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="h-[42px] px-5 rounded-md bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C] hover:bg-[#B91C1C] hover:text-white font-semibold text-sm flex items-center gap-2 transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-lg">delete</span>
                <span>Ya, Hapus</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST FEEDBACK */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002356] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3 border border-[#0062a0]">
          <span className="material-symbols-outlined text-[#047857]">
            check_circle
          </span>
          <span className="text-sm">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}