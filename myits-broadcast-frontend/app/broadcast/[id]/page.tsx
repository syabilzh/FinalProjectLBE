"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";

interface BroadcastDetail {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string;
  author: string;
  author_email: string;
  image_url?: string; // Field thumbnail dari backend
  cta_type: string;
  cta_url: string;
  clicks: number;
  expiry_date: string;
  created_at: string;
}

export default function BroadcastDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [data, setData] = useState<BroadcastDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetail() {
      try {
        const res = await fetch(`http://localhost:8080/api/broadcasts/${id}`);
        if (!res.ok) throw new Error("Gagal mengambil detail");
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  const handleCtaClick = async () => {
    if (!data) return;

    // Trigger API click tracker ke Backend Go
    try {
      await fetch(`http://localhost:8080/api/broadcasts/${id}/click`, {
        method: "POST",
      });
      // Update UI clicks secara realtime
      setData((prev) => (prev ? { ...prev, clicks: prev.clicks + 1 } : null));
      // Buka URL tautan di tab baru
      window.open(data.cta_url, "_blank");
    } catch (err) {
      console.error("Gagal menembak click counter:", err);
    }
  };

  if (loading) {
    return <div className="p-8 text-center text-[#475569]">Memuat detail broadcast...</div>;
  }

  if (!data) {
    return <div className="p-8 text-center text-red-500">Broadcast tidak ditemukan.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] p-6 max-w-3xl mx-auto font-sans">
      <Link href="/" className="text-sm font-semibold text-[#0062a0] hover:underline mb-4 inline-block">
        &larr; Kembali ke Feed
      </Link>

      <div className="bg-white p-8 rounded-xl border border-[#E2E8F0] shadow-xs">
        {/* TAMPILAN GAMBAR / POSTER THUMBNAIL */}
        {data.image_url && (
          <div className="w-full h-72 rounded-lg overflow-hidden mb-6 bg-[#F1F5F9] border border-[#E2E8F0]">
            <img
              src={data.image_url}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <span className="inline-block px-3 py-1 bg-[#eff4ff] text-[#002356] text-xs font-bold rounded-md mb-3">
          {data.category}
        </span>
        <h1 className="text-2xl font-bold text-[#002356] mb-3">{data.title}</h1>

        <div className="flex items-center gap-4 text-xs text-[#94A3B8] pb-6 border-b border-[#E2E8F0] mb-6">
          <span>
            Oleh: <strong className="text-[#475569]">{data.author}</strong> ({data.author_email})
          </span>
          <span>•</span>
          <span>Dibuat: {new Date(data.created_at).toLocaleDateString("id-ID")}</span>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed whitespace-pre-line mb-6">
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {data.tags &&
            data.tags.split(",").map((tag) => (
              <span key={tag} className="bg-[#F1F5F9] text-[#475569] px-3 py-1 rounded-full text-xs font-semibold">
                #{tag.trim()}
              </span>
            ))}
        </div>

        <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between">
          <span className="text-xs text-[#94A3B8]">
            Total Klik CTA: <strong className="text-[#0F172A]">{data.clicks}</strong>
          </span>

          <button
            onClick={handleCtaClick}
            className="px-6 py-2.5 bg-[#013880] text-white font-semibold text-sm rounded-lg hover:bg-[#0062a0] transition-colors cursor-pointer shadow-xs"
          >
            {data.cta_type} &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}