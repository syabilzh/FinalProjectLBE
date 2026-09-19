const API_URL = "http://localhost:8080/api";

export interface CreateBroadcastPayload {
  title: string;
  description: string;
  category: string;
  tags: string;
  author: string;
  author_email: string;
  cta_type: string;
  cta_url: string;
  expiry_days: number;
}

export async function getBroadcasts() {
  const res = await fetch(`${API_URL}/broadcasts`, { cache: 'no-store' });
  if (!res.ok) throw new Error("Gagal mengambil data broadcast");
  const result = await res.json();
  return result.data;
}

export async function createBroadcast(data: CreateBroadcastPayload) {
  const res = await fetch(`${API_URL}/broadcasts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Gagal membuat broadcast");
  return res.json();
}