"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { updateBroadcast } from "../../../../src/services/api";

export default function EditBroadcastPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Kepanitiaan",
    tags: "",
    image_url: "",
    cta_type: "Daftar Sekarang",
    cta_url: "",
  });

  // Fetch data awal broadcast berdasarkan ID
  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await fetch(`http://localhost:8080/api/broadcasts/${id}`);
        if (!res.ok) throw new Error("Gagal mengambil data broadcast");
        const json = await res.json();
        const data = json.data;

        setFormData({
          title: data.title || "",
          description: data.description || "",
          category: data.category || "Kepanitiaan",
          tags: data.tags || "",
          image_url: data.image_url || "",
          cta_type: data.cta_type || "",
          cta_url: data.cta_url || "",
        });
      } catch (err) {
        console.error(err);
        alert("Gagal memuat data broadcast.");
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      await updateBroadcast(id, formData);
      setShowToast(true);

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (err) {
      console.error(err);
      alert("Gagal memperbarui broadcast!");
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-[#475569] font-sans">
        Memuat data siaran...
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col font-sans antialiased">
      {/* Header Bar */}
      <header className="w-full sticky top-0 z-40 bg-white border-b border-[#E2E8F0] px-4 md:px-8 max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-3 group" href="/">
            <div className="w-9 h-9 rounded-lg bg-[#002356] flex items-center justify-center text-white shadow-xs">
              <span className="font-bold tracking-tight text-white">ITS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#002356] tracking-tight">myITS Broadcast</span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#475569] -mt-1">
                Pusat Informasi Kampus
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-2">
            <Link className="text-[#475569] hover:text-[#002356] font-semibold text-sm" href="/">
              Feed
            </Link>
            <Link className="border-b-2 border-[#002356] text-[#002356] font-semibold text-sm pb-1" href="/dashboard">
              Broadcast Saya
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="space-y-1">
            <nav className="flex items-center gap-2 text-xs text-[#475569]">
              <Link className="hover:text-[#002356]" href="/dashboard">
                Manajemen Broadcast
              </Link>
              <span>&gt;</span>
              <span className="text-[#002356] font-semibold">Edit Broadcast #{id}</span>
            </nav>
            <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Edit Siaran Kampus</h1>
          </div>
          <div>
            <Link
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-[#E2E8F0] bg-white hover:bg-[#F1F5F9] text-[#475569] font-semibold text-xs transition-all shadow-xs"
              href="/dashboard"
            >
              &larr; Kembali ke Dashboard
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Form Column */}
          <div className="lg:col-span-8 bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Judul Broadcast */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-[#0F172A]">
                    Judul Broadcast <span className="text-red-500">*</span>
                  </label>
                  <span className="text-xs text-[#94A3B8]">{formData.title.length}/100 karakter</span>
                </div>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#0062a0]"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>

              {/* Kategori */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Kategori Siaran <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#0062a0]"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="Kepanitiaan">Kepanitiaan</option>
                  <option value="Lomba">Lomba &amp; Kompetisi</option>
                  <option value="Tugas Besar">Tugas Besar &amp; Riset</option>
                  <option value="Proyek / Freelance">Proyek / Freelance</option>
                </select>
              </div>

              {/* Deskripsi */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">
                  Deskripsi Lengkap Siaran <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full p-3.5 border border-[#E2E8F0] rounded-lg text-sm focus:outline-none focus:border-[#0062a0]"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">Tags (Pisahkan dengan koma)</label>
                <input
                  type="text"
                  placeholder="gerigi, kepanitiaan, pr"
                  className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#0062a0]"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                />
              </div>

              {/* Poster URL */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-[#0F172A]">URL Poster / Thumbnail</label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#0062a0]"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                />
              </div>

              {/* CTA Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">Teks Tombol CTA</label>
                  <input
                    type="text"
                    required
                    className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#0062a0]"
                    value={formData.cta_type}
                    onChange={(e) => setFormData({ ...formData, cta_type: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">Link URL Redirect CTA</label>
                  <input
                    type="url"
                    required
                    className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm focus:outline-none focus:border-[#0062a0]"
                    value={formData.cta_url}
                    onChange={(e) => setFormData({ ...formData, cta_url: e.target.value })}
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-end gap-3">
                <Link
                  href="/dashboard"
                  className="px-5 py-2.5 rounded-lg border border-[#E2E8F0] text-sm font-semibold text-[#475569] hover:bg-[#F1F5F9]"
                >
                  Batal
                </Link>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 rounded-lg bg-[#013880] text-white text-sm font-bold hover:bg-[#0062a0] disabled:opacity-50"
                >
                  {saving ? "Menyimpan..." : "Simpan Perubahan"}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar Column: Live Preview */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 shadow-xs sticky top-20">
              <h3 className="text-sm font-bold text-[#002356] mb-3">Pratinjau Langsung</h3>
              <div className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white">
                {formData.image_url && (
                  <div className="w-full h-36 bg-slate-100 overflow-hidden">
                    <img src={formData.image_url} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <span className="text-[10px] bg-[#eff4ff] text-[#002356] font-bold px-2 py-0.5 rounded">
                    {formData.category}
                  </span>
                  <h4 className="font-bold text-sm text-[#0F172A] line-clamp-2">
                    {formData.title || "Judul Broadcast"}
                  </h4>
                  <p className="text-xs text-[#475569] line-clamp-2">
                    {formData.description || "Deskripsi siaran..."}
                  </p>
                  <button className="w-full mt-2 py-2 border border-[#0062a0] text-[#0062a0] font-semibold text-xs rounded-lg">
                    {formData.cta_type || "CTA"} &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#002356] text-white px-4 py-3 rounded-lg shadow-xl flex items-center gap-3 border border-[#0062a0]">
          <span className="text-emerald-400 font-bold">✓</span>
          <div className="text-xs">
            <p className="font-bold text-white">Perubahan Berhasil Disimpan!</p>
            <p className="text-white/80">Siaran telah diperbarui.</p>
          </div>
        </div>
      )}
    </div>
  );
}