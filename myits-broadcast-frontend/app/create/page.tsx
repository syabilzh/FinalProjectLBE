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
    image_url: "", // <--- Field Baru
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
      router.push("/");
    } catch (err) {
      console.error(err);
      alert("Gagal membuat broadcast!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-6 max-w-2xl mx-auto font-sans">
      <Link href="/" className="text-sm font-semibold text-[#0062a0] hover:underline mb-4 inline-block">
        &larr; Kembali ke Feed
      </Link>

      <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-xs">
        <h1 className="text-2xl font-bold text-[#002356] mb-6">Buat Broadcast Baru</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">Judul Broadcast</label>
            <input
              type="text"
              required
              placeholder="Contoh: Info Lomba Hackathon 2026"
              className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">Kategori</label>
            <select
              className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Lomba">Lomba</option>
              <option value="Kepanitiaan">Kepanitiaan</option>
              <option value="Tugas Besar">Tugas Besar</option>
              <option value="Proyek / Freelance">Proyek / Freelance</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">URL Gambar / Thumbnail (Opsional)</label>
            <input
              type="url"
              placeholder="https://example.com/poster.jpg"
              className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#475569] mb-1">Deskripsi</label>
            <textarea
              required
              rows={4}
              placeholder="Tuliskan detail info broadcast..."
              className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-1">Tags (Pisahkan koma)</label>
              <input
                type="text"
                placeholder="hackathon,its,coding"
                className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-1">Durasi Aktif (Hari)</label>
              <input
                type="number"
                required
                min={1}
                className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
                value={formData.expiry_days}
                onChange={(e) => setFormData({ ...formData, expiry_days: Number(e.target.value) })}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-1">Teks Tombol CTA</label>
              <input
                type="text"
                required
                placeholder="Daftar"
                className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
                value={formData.cta_type}
                onChange={(e) => setFormData({ ...formData, cta_type: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#475569] mb-1">Link URL CTA</label>
              <input
                type="url"
                required
                placeholder="https://..."
                className="w-full p-2.5 text-sm rounded-lg border border-[#CBD5E1] focus:outline-none focus:border-[#0062a0]"
                value={formData.cta_url}
                onChange={(e) => setFormData({ ...formData, cta_url: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#013880] text-white font-bold text-sm rounded-lg hover:bg-[#0062a0] transition-colors mt-4 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Publish Broadcast"}
          </button>
        </form>
      </div>
    </div>
  );
}