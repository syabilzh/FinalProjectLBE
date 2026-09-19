"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getBroadcasts, deleteBroadcast } from "../../src/services/api";

interface Broadcast {
  id: number;
  title: string;
  category: string;
  clicks: number;
  status: string;
  created_at: string;
}

export default function DashboardPage() {
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMyBroadcasts = async () => {
    try {
      const data = await getBroadcasts();
      setBroadcasts(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyBroadcasts();
  }, []);

  const handleDelete = async (id: number, title: string) => {
    const confirmed = window.confirm(`Apakah Anda yakin ingin menghapus broadcast "${title}"?`);
    if (!confirmed) return;

    try {
      await deleteBroadcast(String(id));
      setBroadcasts((prev) => prev.filter((item) => item.id !== id));
      alert("Broadcast berhasil dihapus!");
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus broadcast!");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-6 max-w-6xl mx-auto font-sans">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/" className="text-sm font-semibold text-[#0062a0] hover:underline mb-2 inline-block">
            &larr; Kembali ke Feed
          </Link>
          <h1 className="text-2xl font-bold text-[#002356]">Broadcast Saya</h1>
          <p className="text-xs text-[#475569]">Kelola dan pantau performa siaran informasi yang pernah Anda buat.</p>
        </div>
        <Link
          href="/create"
          className="px-4 py-2 bg-[#013880] text-white font-semibold text-sm rounded-lg hover:bg-[#0062a0] transition-colors"
        >
          + Buat Baru
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-xs">
        {loading ? (
          <div className="p-8 text-center text-[#475569]">Memuat data broadcast...</div>
        ) : broadcasts.length === 0 ? (
          <div className="p-8 text-center text-[#475569]">Belum ada broadcast yang dibuat.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs font-semibold text-[#475569]">
                <th className="p-4">Judul Broadcast</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Total Klik CTA</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-sm">
              {broadcasts.map((item) => (
                <tr key={item.id} className="hover:bg-[#F8FAFC]">
                  <td className="p-4 font-semibold text-[#0F172A]">
                    <Link href={`/broadcast/${item.id}`} className="hover:text-[#0062a0]">
                      {item.title}
                    </Link>
                  </td>
                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#eff4ff] text-[#002356]">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-[#002356]">{item.clicks}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.status || "Aktif"}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-3">
                    <Link
                      href={`/broadcast/${item.id}/edit`}
                      className="text-xs font-bold text-[#0062a0] hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(item.id, item.title)}
                      className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}