"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateBroadcastPage() {
  // Form State dengan Real-time Sync ke Preview Card
  const [title, setTitle] = useState(
    "Mencari Frontend Developer untuk Hackathon Gemastik 2026"
  );
  const [category, setCategory] = useState("Lomba");
  const [ctaType, setCtaType] = useState("Daftar Sekarang");
  const [tags, setTags] = useState<string[]>(["React", "Next.js", "Figma"]);
  const [tagInput, setTagInput] = useState("");
  const [description, setDescription] = useState(
    "Halo rekan-rekan ITS! Tim kami saat ini memerlukan 1 orang Frontend Developer yang terbiasa dengan Next.js dan Tailwind CSS untuk divisi Desain Pengalaman Pengguna Gemastik 2026. Jadwal pengerjaan fleksibel di sekitar ITS Robotics Center. Segera isi formulir registrasi!"
  );
  const [ctaUrl, setCtaUrl] = useState(
    "https://forms.gle/ITSgemastikFrontend2026"
  );
  const [selectedPreset, setSelectedPreset] = useState<number>(7);
  const [expiryDate, setExpiryDate] = useState("2026-11-20");
  const [expiryTime, setExpiryTime] = useState("23:59");

  // Handler Tag
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = tagInput.trim().replace(/^#/, "");
      if (val && !tags.includes(val)) {
        setTags([...tags, val]);
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans">
      {/* TOP APP BAR */}
      <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E2E8F0] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand & Back Button Cluster */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg border border-[#E2E8F0] bg-white text-[#475569] hover:text-[#002356] hover:bg-[#F1F5F9] transition-colors active:scale-95 text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              <span className="hidden sm:inline">Batal / Kembali ke Feed</span>
              <span className="sm:hidden">Kembali</span>
            </Link>
            <div className="h-6 w-px bg-[#E2E8F0] hidden md:block"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#002356] flex items-center justify-center text-white font-bold text-base shadow-xs">
                B
              </div>
              <span className="font-bold text-lg text-[#002356] tracking-tight">
                myITS Broadcast
              </span>
            </div>
          </div>

          {/* User Info & Institutional Badge */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-xs font-semibold text-[#475569]">
              <span className="w-2 h-2 rounded-full bg-[#047857]"></span>
              Institut Teknologi Sepuluh Nopember
            </span>
            <div className="flex items-center gap-2 pl-2 border-l border-[#E2E8F0]">
              <div className="w-8 h-8 rounded-full bg-[#013880] text-white flex items-center justify-center text-xs font-bold">
                M
              </div>
              <span className="text-xs font-bold text-[#475569] hidden sm:inline">
                5025211024@student.its.ac.id
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CANVAS */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-8">
        {/* PAGE HEADER */}
        <div className="mb-8 border-b border-[#E2E8F0] pb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#d0e4ff] text-[#001d35] text-xs font-bold mb-2">
            <span className="material-symbols-outlined text-sm">campaign</span>
            <span>Modul Publikasi Kampus ITS</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#002356] tracking-tight">
            Buat Broadcast Baru
          </h1>
          <p className="text-sm text-[#475569] mt-1.5 max-w-3xl leading-relaxed">
            Publikasikan informasi kepanitiaan, pencarian tim tugas besar, atau
            lomba untuk seluruh mahasiswa ITS.
          </p>
        </div>

        {/* 2-COLUMN WORKSPACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: FORM FIELDS (7 COLS) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#E2E8F0] p-6 md:p-8 shadow-xs space-y-6">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Broadcast berhasil dipublikasikan!");
              }}
            >
              {/* Field 1: Judul Broadcast */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    className="text-xs font-bold text-[#0F172A] flex items-center gap-1"
                    htmlFor="broadcast-title"
                  >
                    Judul Broadcast <span className="text-[#B91C1C]">*</span>
                  </label>
                  <span className="text-xs text-[#94A3B8]">
                    {title.length}/100
                  </span>
                </div>
                <input
                  className="w-full h-11 px-3.5 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/20 transition-all outline-none"
                  id="broadcast-title"
                  maxLength={100}
                  placeholder="Contoh: Mencari Frontend Developer untuk Hackathon Gemastik 2026"
                  required
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <p className="text-xs text-[#475569] mt-1">
                  Gunakan judul yang spesifik, padat, dan menyebutkan tujuan inti
                  pengumuman.
                </p>
              </div>

              {/* Field 2: Upload Poster / Foto */}
              <div>
                <label className="text-xs font-bold text-[#0F172A] block mb-1.5">
                  Upload Poster / Foto Utama
                </label>
                <div className="border-2 border-dashed border-[#E2E8F0] hover:border-[#0062a0]/60 rounded-xl p-5 bg-[#F1F5F9]/60 transition-colors text-center cursor-pointer group">
                  <input
                    accept="image/png, image/jpeg, image/webp"
                    className="hidden"
                    id="poster-input"
                    type="file"
                  />
                  <label
                    className="cursor-pointer flex flex-col items-center justify-center"
                    htmlFor="poster-input"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#d0e4ff] flex items-center justify-center text-[#0062a0] mb-3 group-hover:scale-105 transition-transform">
                      <span className="material-symbols-outlined text-2xl">
                        cloud_upload
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#0F172A] mb-0.5">
                      <span className="text-[#0062a0] underline">
                        Klik untuk unggah poster
                      </span>{" "}
                      atau seret file ke sini
                    </p>
                    <p className="text-xs text-[#475569]">
                      Rekomendasi rasio 16:9 atau 4:3 (PNG, JPG, WEBP maksimal 2MB)
                    </p>
                  </label>
                </div>

                <div className="mt-2.5 flex items-center justify-between p-2.5 bg-[#eff4ff] rounded-lg border border-[#E2E8F0]">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-[#0062a0]">
                      image
                    </span>
                    <span className="text-xs text-[#0F172A] font-medium">
                      gemastik_frontend_banner.png (1.2 MB)
                    </span>
                  </div>
                  <button
                    className="text-[#94A3B8] hover:text-[#B91C1C] transition-colors p-1"
                    title="Hapus berkas"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-base">
                      delete
                    </span>
                  </button>
                </div>
              </div>

              {/* Field 3: Kategori & CTA Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-xs font-bold text-[#0F172A] block mb-1.5"
                    htmlFor="category-select"
                  >
                    Kategori Bidang <span className="text-[#B91C1C]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-11 px-3.5 pr-9 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] text-sm focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/20 outline-none appearance-none cursor-pointer"
                      id="category-select"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Kepanitiaan">Kepanitiaan</option>
                      <option value="Lomba">Lomba</option>
                      <option value="Tugas Besar">Tugas Besar</option>
                      <option value="Proyek / Freelance">Proyek / Freelance</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-[#475569]">
                      expand_more
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs font-bold text-[#0F172A] block mb-1.5"
                    htmlFor="cta-type-select"
                  >
                    Tipe Aksi CTA <span className="text-[#B91C1C]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      className="w-full h-11 px-3.5 pr-9 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] text-sm focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/20 outline-none appearance-none cursor-pointer"
                      id="cta-type-select"
                      value={ctaType}
                      onChange={(e) => setCtaType(e.target.value)}
                    >
                      <option value="Daftar Sekarang">Daftar Sekarang</option>
                      <option value="Isi Google Form">Isi Google Form</option>
                      <option value="Chat via WhatsApp">Chat via WhatsApp</option>
                      <option value="Akses Portofolio">Akses Portofolio</option>
                    </select>
                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-[#475569]">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

              {/* Field 4: Tags Kustom */}
              <div>
                <label className="text-xs font-bold text-[#0F172A] block mb-1.5">
                  Tags Kustom
                </label>
                <div className="min-h-[44px] p-1.5 bg-white border border-[#E2E8F0] rounded-md focus-within:border-[#0062a0] focus-within:ring-2 focus-within:ring-[#0062a0]/20 flex flex-wrap items-center gap-1.5 transition-all">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0] rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {t}
                        <button
                          className="hover:text-[#B91C1C] ml-0.5"
                          type="button"
                          onClick={() => handleRemoveTag(t)}
                        >
                          <span className="material-symbols-outlined text-xs">
                            close
                          </span>
                        </button>
                      </span>
                    ))}
                  </div>
                  <input
                    className="flex-1 min-w-[150px] border-none bg-transparent p-1 text-xs text-[#0F172A] placeholder:text-[#94A3B8] outline-none"
                    placeholder="Ketik tag lalu tekan Enter..."
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleAddTag}
                  />
                </div>
                <p className="text-xs text-[#475569] mt-1">
                  Tekan Enter untuk menambahkan tag keterampilan atau topik relevan.
                </p>
              </div>

              {/* Field 5: Deskripsi */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    className="text-xs font-bold text-[#0F172A] flex items-center gap-1"
                    htmlFor="broadcast-desc"
                  >
                    Teks Lengkap Deskripsi <span className="text-[#B91C1C]">*</span>
                  </label>
                </div>
                <textarea
                  className="w-full p-3.5 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/20 transition-all outline-none leading-relaxed"
                  id="broadcast-desc"
                  placeholder="Jelaskan kebutuhan peran, persyaratan, timeline pengerjaan, atau keuntungan bergabung..."
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex items-center gap-1.5 text-[#475569] text-xs mt-1.5">
                  <span className="material-symbols-outlined text-sm text-[#0062a0]">
                    info
                  </span>
                  <span>
                    URL atau nomor kontak otomatis akan dijadikan link aktif saat tayang di feed.
                  </span>
                </div>
              </div>

              {/* Field 6: Link CTA */}
              <div>
                <label
                  className="text-xs font-bold text-[#0F172A] flex items-center gap-1 mb-1.5"
                  htmlFor="cta-url"
                >
                  Link CTA Eksternal (redirect_url){" "}
                  <span className="text-[#B91C1C]">*</span>
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3.5 top-3 text-[#94A3B8]">
                    link
                  </span>
                  <input
                    className="w-full h-11 pl-10 pr-3.5 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] placeholder:text-[#94A3B8] text-sm focus:border-[#0062a0] focus:ring-2 focus:ring-[#0062a0]/20 outline-none"
                    id="cta-url"
                    placeholder="https://forms.gle/... atau https://wa.me/..."
                    required
                    type="url"
                    value={ctaUrl}
                    onChange={(e) => setCtaUrl(e.target.value)}
                  />
                </div>
              </div>

              {/* Field 8: Masa Berlaku */}
              <div className="p-4 bg-[#F1F5F9]/50 rounded-lg border border-[#E2E8F0] space-y-3">
                <div className="flex items-center justify-between">
                  <label
                    className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5"
                    htmlFor="expiry-date-picker"
                  >
                    <span className="material-symbols-outlined text-base text-[#0062a0]">
                      event_available
                    </span>
                    Masa Berlaku Broadcast{" "}
                    <span className="text-[#B91C1C]">*</span>
                  </label>
                  <span className="text-xs font-semibold text-[#B45309] bg-[#FFFBEB] border border-[#FDE68A] px-2 py-0.5 rounded-full">
                    Sisa {selectedPreset} Hari
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[3, 7, 14, 30].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => setSelectedPreset(days)}
                      className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                        selectedPreset === days
                          ? "border border-[#0062a0] bg-[#d0e4ff] text-[#001d35] font-bold"
                          : "border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#475569]"
                      }`}
                    >
                      +{days} Hari {days === 7 && "(Rekomendasi)"}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="block text-xs font-semibold text-[#475569] mb-1">
                      Pilih Tanggal Kedaluwarsa:
                    </span>
                    <input
                      className="w-full h-10 px-3 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] text-xs focus:border-[#0062a0] outline-none"
                      id="expiry-date-picker"
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#475569] mb-1">
                      Pilih Waktu Berakhir (WIB):
                    </span>
                    <input
                      className="w-full h-10 px-3 rounded-md border border-[#E2E8F0] bg-white text-[#0F172A] text-xs focus:border-[#0062a0] outline-none"
                      id="expiry-time-picker"
                      type="time"
                      value={expiryTime}
                      onChange={(e) => setExpiryTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  className="w-full sm:w-auto px-5 py-2.5 rounded-md border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#475569] font-semibold text-xs transition-colors"
                  type="button"
                >
                  Simpan sebagai Draf
                </button>
                <button
                  className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-[#002356] hover:bg-[#0062a0] text-white font-semibold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  Publikasikan Broadcast Sekarang
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: LIVE CARD PREVIEW (5 COLS) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#0062a0]">
                  preview
                </span>
                <h2 className="font-bold text-base text-[#002356]">
                  Live Feed Card Preview
                </h2>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#047857] animate-pulse"></span>
                Real-time Sync
              </span>
            </div>

            {/* PREVIEW BROADCAST CARD */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-md overflow-hidden">
              <div className="relative w-full aspect-video bg-[#e5eeff] overflow-hidden">
                <img
                  alt="Banner Gemastik"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmnwcfw7vfiOwYt5eTVvXvGKO1sK6Dm5y2nuEoD0vedSyzKS5wDRztyLNabc_Hqr6Wu8uDHIi0iwDJavApFva5IdPFxaYsPby9uuIGYCmF0ubhkdjWflLufGWebeUQ2VwWuBoSEh-rWAvfJ43AORaqGYRQTjKmb5VY94AUfHhJ3EZAkpC9nSGtFj3QPvsyQjnfJlpusugEKVeitbR8pEsOyBiKI0BvWZAmzcKxES7FKzRHGOuE4V_P"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <span className="bg-white/90 backdrop-blur-xs border border-[#E2E8F0] text-[#475569] text-xs font-semibold px-2.5 py-1 rounded-full shadow-xs">
                    {category}
                  </span>
                  <span className="bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309] text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                    <span className="material-symbols-outlined text-xs">
                      schedule
                    </span>
                    {selectedPreset} Hari Tersisa
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3.5">
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#F1F5F9] text-[#475569] px-2 py-0.5 rounded-full text-xs font-semibold"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <h3 className="font-bold text-base text-[#0F172A] line-clamp-2 leading-snug">
                  {title || "Judul Broadcast Preview"}
                </h3>

                <p className="text-xs text-[#475569] line-clamp-2 leading-relaxed">
                  {description || "Deskripsi rincian broadcast akan tampil di sini..."}
                </p>

                <div className="pt-2">
                  <a
                    className="w-full py-2 px-4 rounded-md border-2 border-[#0062a0] text-[#0062a0] hover:bg-[#0062a0]/5 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                    href={ctaUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{ctaType}</span>
                    <span className="material-symbols-outlined text-base">
                      open_in_new
                    </span>
                  </a>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#013880] text-white flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <span className="text-xs font-bold text-[#0F172A]">
                      Mahasiswa Informatika ITS
                    </span>
                  </div>
                  <span className="text-xs text-[#94A3B8]">Baru saja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-white border-t border-[#E2E8F0] mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span className="font-bold text-base text-[#002356]">
              myITS Broadcast
            </span>
            <span className="hidden sm:inline text-[#94A3B8]">|</span>
            <span className="text-[#475569] text-xs text-center sm:text-left">
              © 2024 Institut Teknologi Sepuluh Nopember (ITS). Hak Cipta
              Dilindungi Undang-Undang.
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5 text-[#475569] text-xs">
            <Link className="hover:text-[#002356]" href="#">
              SatuDikti
            </Link>
            <Link className="hover:text-[#002356]" href="#">
              myITS Portal
            </Link>
            <Link className="hover:text-[#002356]" href="#">
              Pedoman Komunitas
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}