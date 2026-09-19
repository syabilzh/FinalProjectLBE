"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BackendBroadcast {
  id: number;
  title: string;
  category: string;
  clicks: number;
  status: string;
  created_at: string;
}

export default function DashboardPage() {
  const [broadcasts, setBroadcasts] = useState<BackendBroadcast[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyBroadcasts() {
      try {
        const res = await fetch("http://localhost:8080/api/broadcasts");
        if (!res.ok) throw new Error("Gagal mengambil data");
        const json = await res.json();
        // Menampilkan data broadcast
        setBroadcasts(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchMyBroadcasts();
  }, []);

  const totalClicks = broadcasts.reduce((acc, curr) => acc + curr.clicks, 0);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#002356]">Dashboard Broadcast Saya</h1>
          <p className="text-xs text-[#475569]">Kelola dan pantau performa broadcast yang telah kamu publikasikan.</p>
        </div>
        <Link
          href="/create"
          className="bg-[#013880] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#0062a0] transition-colors"
        >
          + Buat Broadcast Baru
        </Link>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
          <span className="text-xs text-[#475569] font-medium">Total Broadcast</span>
          <p className="text-2xl font-bold text-[#002356] mt-1">{broadcasts.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
          <span className="text-xs text-[#475569] font-medium">Total Interaksi / Klik</span>
          <p className="text-2xl font-bold text-[#0062a0] mt-1">{totalClicks}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
          <span className="text-xs text-[#475569] font-medium">Status Akun</span>
          <p className="text-2xl font-bold text-[#047857] mt-1">Terverifikasi SSO</p>
        </div>
      </div>

      {/* TABLE DATA */}
      <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-xs text-[#475569]">
              <th className="p-4 font-bold">Judul</th>
              <th className="p-4 font-bold">Kategori</th>
              <th className="p-4 font-bold">Total Klik</th>
              <th className="p-4 font-bold">Tanggal Buat</th>
              <th className="p-4 font-bold">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-[#475569]">Memuat data...</td>
              </tr>
            ) : broadcasts.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-[#475569]">Belum ada broadcast.</td>
              </tr>
            ) : (
              broadcasts.map((item) => (
                <tr key={item.id} className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC]">
                  <td className="p-4 font-semibold text-[#0F172A]">{item.title}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-[#F1F5F9] text-[#475569] rounded-md text-xs font-semibold">
                      {item.category}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-[#0062a0]">{item.clicks}</td>
                  <td className="p-4 text-xs text-[#94A3B8]">
                    {new Date(item.created_at).toLocaleDateString("id-ID")}
                  </td>
                  <td className="p-4">
                    <Link
                      href={`/broadcast/${item.id}`}
                      className="text-xs font-bold text-[#0062a0] hover:underline"
                    >
                      Lihat Detail
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}