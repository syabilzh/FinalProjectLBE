"use client";

import { useState } from "react";
import Link from "next/link";

export default function BroadcastDetailPage() {
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setToastMessage("Tautan broadcast berhasil disalin ke clipboard!");
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      {/* HEADER */}
      <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-[#013880] text-white flex items-center justify-center font-bold text-lg tracking-tight shadow-xs">
                <span className="material-symbols-outlined text-white">
                  campaign
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#002356] tracking-tight">
                  myITS Broadcast
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#475569] tracking-wider -mt-1 hidden sm:block">
                  Pusat Siaran Civitas ITS
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center relative w-72">
              <span className="material-symbols-outlined absolute left-3 text-[#94A3B8] pointer-events-none">
                search
              </span>
              <input
                className="w-full h-10 pl-10 pr-3 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-xs text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/15 transition-all"
                placeholder="Cari siaran, lomba, panitia..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="border-b-2 border-[#002356] text-[#002356] font-semibold text-sm pb-1"
              >
                Feed
              </Link>
              <Link
                href="/dashboard"
                className="text-[#475569] font-semibold text-sm hover:text-[#002356] transition-colors"
              >
                Broadcast Saya
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/create"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#013880] hover:bg-[#0062a0] text-white font-semibold text-sm px-4 py-2 rounded-md transition-colors shadow-xs active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">
                  add_circle
                </span>
                <span>Buat Broadcast</span>
              </Link>
              <div className="relative pl-1">
                <div className="w-9 h-9 rounded-full bg-[#013880] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#002356]/10">
                  MR
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-6">
        {/* BREADCRUMBS */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 mb-6 text-xs text-[#475569]"
        >
          <Link
            href="/"
            className="hover:text-[#002356] flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">home</span>
            <span>Beranda</span>
          </Link>
          <span className="material-symbols-outlined text-[14px] text-[#94A3B8]">
            chevron_right
          </span>
          <span className="hover:text-[#002356] cursor-pointer">Kepanitiaan</span>
          <span className="material-symbols-outlined text-[14px] text-[#94A3B8]">
            chevron_right
          </span>
          <span
            aria-current="page"
            className="text-[#0F172A] font-medium truncate max-w-xs md:max-w-md"
          >
            Open Recruitment Panitia Gerigi x UKM Expo 2026
          </span>
        </nav>

        {/* TWO COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Content Canvas (8 cols) */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-xs">
              <div className="relative w-full aspect-video bg-[#F1F5F9] overflow-hidden">
                <img
                  alt="Banner Resmi Open Recruitment ITS EXPO 2026"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7JSKtIiDPnBTYpPcwEgmZz5TUFXTWLZyA0ra7VztbVa-OSiwsEketpia_bPeoTjh4S7-ydxF9HolCgxuls2QtfTlLUQLAyxVSXWYA0ca1hqiozwTPLiaWsA_waMXq-LpbgPEdw2yr3gzmf_3YXFYfiBZ0pUmg8xJXL_QSrWaAu8JOR_8gpWnSXjdcmJGx-gZROBL9ops4Ink2b2BF_C9QImW1zpt4HmrveWlKf0syQoCOWUDfjT5"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 items-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#002356] text-white shadow-xs">
                    <span className="material-symbols-outlined text-[14px]">
                      groups
                    </span>
                    <span>Kepanitiaan</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-pulse"></span>
                    <span>Aktif</span>
                  </span>
                </div>
              </div>

              {/* ARTICLE TITLE & METADATA */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-[#0062a0] bg-[#e5eeff] px-2.5 py-0.5 rounded">
                    ID: BDC-2026-EXPO
                  </span>
                  <span className="text-[#94A3B8]">•</span>
                  <span className="text-xs text-[#475569] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      schedule
                    </span>
                    Diterbitkan 2 hari lalu
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-extrabold text-[#002356] tracking-tight leading-snug mb-4">
                  Open Recruitment Panitia Gerigi x UKM Expo 2026: Divisi
                  Public Relations &amp; Desain Grafis
                </h1>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-[#E2E8F0]">
                  <span className="inline-flex items-center bg-[#F1F5F9] text-[#475569] text-xs font-semibold px-3 py-1 rounded-full">
                    #Public Relations
                  </span>
                  <span className="inline-flex items-center bg-[#F1F5F9] text-[#475569] text-xs font-semibold px-3 py-1 rounded-full">
                    #Desain Grafis
                  </span>
                  <span className="inline-flex items-center bg-[#F1F5F9] text-[#475569] text-xs font-semibold px-3 py-1 rounded-full">
                    #Event Organizer
                  </span>
                  <span className="inline-flex items-center bg-[#F1F5F9] text-[#002356] text-xs font-bold px-3 py-1 rounded-full">
                    #Gerigi x UKM Expo 2026
                  </span>
                </div>

                {/* AUTHOR BOX */}
                <div className="flex items-center justify-between p-4 bg-[#F1F5F9]/60 rounded-xl border border-[#E2E8F0] mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#013880] text-white flex items-center justify-center font-bold text-sm">
                      BEM
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-xs font-bold text-[#0F172A]">
                          BEM Institut Teknologi Sepuluh Nopember
                        </h3>
                        <span className="material-symbols-outlined text-[16px] text-[#0062a0]">
                          verified
                        </span>
                      </div>
                      <p className="text-xs text-[#475569]">
                        Kementerian Komunikasi dan Informasi • Departemen Hubungan
                        Luar (DITMAWA ITS)
                      </p>
                    </div>
                  </div>
                </div>

                {/* BODY CONTENT */}
                <div className="space-y-6 text-sm text-[#0F172A] leading-relaxed">
                  <div>
                    <h2 className="text-base font-bold text-[#002356] mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0062a0]">
                        info
                      </span>
                      Tentang Gerigi x UKM Expo 2026
                    </h2>
                    <p>
                      Generasi Integralistik (GERIGI) ITS berkolaborasi dengan
                      UKM Expo 2026 menyambut mahasiswa baru ITS. Kami mengundang
                      putra-putri terbaik kampus perjuangan untuk bergabung
                      menjadi garda terdepan dalam menyukseskan perhelatan
                      orientasi dan pengenalan minat bakat terbesar di ITS.
                    </p>
                  </div>

                  {/* DIVISION ROLES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-lg border border-[#E2E8F0] bg-white hover:border-[#0062a0] transition-colors">
                      <div className="w-8 h-8 rounded bg-[#e5eeff] flex items-center justify-center text-[#0062a0] mb-2">
                        <span className="material-symbols-outlined">
                          campaign
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-[#0F172A] mb-1">
                        Divisi Public Relations
                      </h3>
                      <p className="text-xs text-[#475569]">
                        Bertanggung jawab membangun kemitraan media partner,
                        pengelolaan siaran pers persuratan rektorat, dan
                        representasi publik eksternal ITS.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg border border-[#E2E8F0] bg-white hover:border-[#0062a0] transition-colors">
                      <div className="w-8 h-8 rounded bg-[#e5eeff] flex items-center justify-center text-[#0062a0] mb-2">
                        <span className="material-symbols-outlined">
                          palette
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-[#0F172A] mb-1">
                        Divisi Desain Grafis
                      </h3>
                      <p className="text-xs text-[#475569]">
                        Membuat master visual key identity, materi media sosial
                        3D/2D, billboard boulevard kampus, dan katalog panduan
                        acara.
                      </p>
                    </div>
                  </div>

                  {/* REQUIREMENTS */}
                  <div>
                    <h2 className="text-base font-bold text-[#002356] mb-2 flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#0062a0]">
                        checklist
                      </span>
                      Syarat &amp; Ketentuan Pendaftar
                    </h2>
                    <ul className="space-y-2 list-disc list-inside text-xs text-[#475569] pl-1">
                      <li>
                        Mahasiswa aktif Institut Teknologi Sepuluh Nopember
                        angkatan 2023, 2024, atau 2025 dari seluruh fakultas.
                      </li>
                      <li>
                        Memiliki komitmen waktu dan loyalitas tinggi hingga
                        penutupan evaluasi akhir program (November 2026).
                      </li>
                      <li>
                        Khusus Desain Grafis: Mengunggah portofolio desain (format
                        PDF/Behance link) via formulir pendaftaran.
                      </li>
                    </ul>
                  </div>

                  {/* CONTACT INFO */}
                  <div className="p-4 rounded-lg bg-[#eff4ff] border border-[#E2E8F0] text-xs">
                    <p className="font-bold text-[#002356] mb-1">
                      Narahubung Resmi Kepanitiaan:
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-[#475569]">
                      <span>
                        WhatsApp:{" "}
                        <a
                          className="text-[#0062a0] font-semibold hover:underline"
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noreferrer"
                        >
                          +62 812-3456-7890 (Aulia PR)
                        </a>
                      </span>
                      <span>
                        Surel:{" "}
                        <a
                          className="text-[#0062a0] font-semibold hover:underline"
                          href="mailto:gerigi.expo@its.ac.id"
                        >
                          gerigi.expo@its.ac.id
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                {/* FOOTER ACTION BAR */}
                <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-[#475569]">
                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-1.5 hover:text-[#002356] transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        share
                      </span>
                      <span>Bagikan Siaran</span>
                    </button>
                  </div>
                  <div className="text-xs text-[#94A3B8]">
                    Diperbarui: 13 Oktober 2026, 09:15 WIB
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN: Sticky Info & CTA (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-20">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E2E8F0]">
                <h2 className="text-base font-bold text-[#002356]">
                  Aksi Pendaftaran
                </h2>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#047857] bg-[#ECFDF5] px-2 py-0.5 rounded">
                  OPEN
                </span>
              </div>

              {/* COUNTDOWN TIMER */}
              <div className="mb-5 bg-[#FFFBEB] border border-[#FDE68A] p-3.5 rounded-lg">
                <div className="flex items-center gap-1.5 text-[#B45309] mb-1">
                  <span className="material-symbols-outlined text-[18px]">
                    timer
                  </span>
                  <span className="text-xs font-bold">
                    Batas Waktu Pendaftaran:
                  </span>
                </div>
                <div className="text-center py-1">
                  <p className="text-xl font-bold text-[#B45309] tracking-tight">
                    2 Hari : 14 Jam : 30 Menit
                  </p>
                  <p className="text-[11px] text-[#475569] mt-0.5">
                    Berakhir pada 15 Oktober 2026 • 23:59 WIB
                  </p>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="space-y-3 mb-5">
                <button
                  type="button"
                  onClick={() => setSecurityModalOpen(true)}
                  className="w-full h-[42px] px-4 bg-[#002356] hover:bg-[#0062a0] text-white font-semibold text-xs rounded-md flex items-center justify-center gap-2 transition-colors shadow-xs active:scale-95"
                >
                  <span>Daftar Sekarang (Google Form)</span>
                  <span className="material-symbols-outlined text-[18px]">
                    open_in_new
                  </span>
                </button>

                <a
                  className="w-full h-[42px] px-4 border border-[#0062a0] text-[#0062a0] hover:bg-[#0062a0]/5 font-semibold text-xs rounded-md flex items-center justify-center gap-2 transition-colors"
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>

              {/* SECURITY NOTICE */}
              <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#E2E8F0] mb-5">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[18px] text-[#0062a0] shrink-0 mt-0.5">
                    gpp_maybe
                  </span>
                  <p className="text-xs leading-relaxed text-[#475569]">
                    Anda akan dialihkan ke formulir eksternal{" "}
                    <code className="font-mono text-[#002356] font-semibold bg-white px-1 py-0.5 rounded border border-[#E2E8F0]">
                      forms.gle/gerigi-expo
                    </code>
                    .
                  </p>
                </div>
              </div>

              {/* ENGAGEMENT STATS */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#E2E8F0] text-center">
                <div className="p-2 rounded bg-[#F1F5F9]/50">
                  <p className="text-lg font-bold text-[#002356]">342</p>
                  <p className="text-[11px] text-[#475569] flex items-center justify-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[13px]">
                      visibility
                    </span>
                    Kali Dilihat
                  </p>
                </div>
                <div className="p-2 rounded bg-[#F1F5F9]/50">
                  <p className="text-lg font-bold text-[#0062a0]">87</p>
                  <p className="text-[11px] text-[#475569] flex items-center justify-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[13px]">
                      ads_click
                    </span>
                    Klik CTA
                  </p>
                </div>
              </div>
            </div>

            {/* VERIFICATION GUARANTEE CARD */}
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ECFDF5] text-[#047857] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0F172A]">
                  Siaran Kampus Resmi
                </h4>
                <p className="text-xs text-[#475569] mt-0.5 leading-normal">
                  Informasi ini telah tervalidasi oleh Direktorat Kemahasiswaan ITS
                  dan mematuhi Pedoman Komunitas myITS.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* MODAL REDIRECT SECURITY */}
      {securityModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white border border-[#E2E8F0] rounded-xl max-w-[480px] w-full p-6 shadow-2xl relative">
            <button
              aria-label="Tutup Dialog"
              className="absolute top-4 right-4 p-1.5 rounded-md text-[#475569] hover:bg-[#F1F5F9] transition-colors"
              onClick={() => setSecurityModalOpen(false)}
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">
                  open_in_new
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#0062a0] uppercase tracking-wider">
                  Pemberitahuan Pengalihan
                </span>
                <h3 className="text-lg font-bold text-[#002356]">
                  Menuju Formulir Eksternal
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#475569] mb-4">
              Anda akan meninggalkan ekosistem resmi <strong>myITS Broadcast</strong>{" "}
              dan diarahkan ke situs pihak ketiga:
            </p>

            <div className="p-3.5 bg-[#F1F5F9] rounded-lg border border-[#E2E8F0] mb-4 font-mono text-xs text-[#0F172A] flex items-center justify-between">
              <span className="truncate text-[#0062a0] font-semibold">
                https://forms.gle/gerigi-expo-2026-recruitment
              </span>
              <span className="material-symbols-outlined text-[#94A3B8] text-[18px] ml-2 shrink-0">
                lock
              </span>
            </div>

            <div className="bg-[#FEF2F2] border border-[#FECACA] p-3 rounded-md mb-6">
              <p className="text-[#B91C1C] text-xs flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">
                  warning
                </span>
                <span>
                  Jangan pernah memberikan password akun myITS, PIN finansial, atau
                  data rahasia perbankan pada formulir pendaftaran manapun.
                </span>
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                className="px-4 py-2 border border-[#E2E8F0] rounded-md text-[#475569] hover:bg-[#F1F5F9] text-xs font-semibold transition-colors"
                onClick={() => setSecurityModalOpen(false)}
              >
                Batal
              </button>
              <a
                className="px-5 py-2 bg-[#002356] hover:bg-[#0062a0] text-white font-semibold text-xs rounded-md transition-colors flex items-center gap-1.5 shadow-xs"
                href="https://forms.gle/gerigi-expo-2026"
                onClick={() => setSecurityModalOpen(false)}
                target="_blank"
                rel="noreferrer"
              >
                <span>Lanjutkan ke Formulir</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_outward
                </span>
              </a>
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
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* FOOTER */}
      <footer className="w-full border-t border-[#E2E8F0] max-w-7xl mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-white mt-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
          <span className="text-base font-bold text-[#002356]">
            myITS Broadcast
          </span>
          <span className="hidden md:inline text-[#94A3B8]">|</span>
          <p className="text-[#475569] text-xs">
            © 2024 Institut Teknologi Sepuluh Nopember (ITS). Hak Cipta Dilindungi
            Undang-Undang.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            className="text-[#475569] text-xs hover:text-[#002356] transition-colors"
            href="#"
          >
            SatuDikti
          </Link>
          <Link
            className="text-[#475569] text-xs hover:text-[#002356] transition-colors"
            href="#"
          >
            myITS Portal
          </Link>
          <Link
            className="text-[#475569] text-xs hover:text-[#002356] transition-colors"
            href="#"
          >
            Pedoman Komunitas
          </Link>
        </div>
      </footer>
    </div>
  );
}