"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createBroadcast } from "../../src/services/api";

export default function CreateBroadcastPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Lomba",
    tags: "",
    author: "Syabil",
    author_email: "syabil@its.ac.id",
    cta_type: "Daftar",
    cta_url: "",
    expiry_days: 7,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createBroadcast({
        ...formData,
        expiry_days: Number(formData.expiry_days),
      });
      alert("Broadcast berhasil dibuat!");
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Gagal membuat broadcast. Cek terminal backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-6 max-w-2xl mx-auto">
      <Link href="/" className="text-sm font-semibold text-[#0062a0] hover:underline mb-4 inline-block">
        &larr; Kembali ke Feed
      </Link>
      
      <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-xs">
        <h1 className="text-2xl font-bold text-[#002356] mb-6">Buat Broadcast Baru</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#475569] mb-1">Judul Broadcast</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full h-10 px-3 rounded-lg border border-[#E2E8F0] text-sm focus:outline-[#0062a0]"
              placeholder="Contoh: Info Lomba Hackathon 2026"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#475569] mb-1">Kategori</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full h-10 px-3 rounded-lg border border-[#E2E8F0] text-sm"
            >
              <option value="Lomba">Lomba</option>
              <option value="Kepanitiaan">Kepanitiaan</option>
              <option value="Tugas Besar">Tugas Besar</option>
              <option value="Proyek / Freelance">Proyek / Freelance</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#475569] mb-1">Deskripsi</label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full p-3 rounded-lg border border-[#E2E8F0] text-sm focus:outline-[#0062a0]"
              placeholder="Tuliskan detail info broadcast..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#475569] mb-1">Tags (Pisahkan koma)</label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-[#E2E8F0] text-sm"
                placeholder="hackathon,its,coding"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#475569] mb-1">Durasi Aktif (Hari)</label>
              <input
                type="number"
                min="1"
                value={formData.expiry_days}
                onChange={(e) => setFormData({ ...formData, expiry_days: Number(e.target.value) })}
                className="w-full h-10 px-3 rounded-lg border border-[#E2E8F0] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#475569] mb-1">Teks Tombol CTA</label>
              <input
                type="text"
                value={formData.cta_type}
                onChange={(e) => setFormData({ ...formData, cta_type: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-[#E2E8F0] text-sm"
                placeholder="Contoh: Daftar / Gabung"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#475569] mb-1">Link URL CTA</label>
              <input
                type="url"
                required
                value={formData.cta_url}
                onChange={(e) => setFormData({ ...formData, cta_url: e.target.value })}
                className="w-full h-10 px-3 rounded-lg border border-[#E2E8F0] text-sm"
                placeholder="https://..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 bg-[#013880] text-white font-semibold rounded-lg hover:bg-[#0062a0] transition-colors mt-4 cursor-pointer"
          >
            {loading ? "Menyimpan..." : "Publish Broadcast"}
          </button>
        </form>
      </div>
    </div>
  );
}