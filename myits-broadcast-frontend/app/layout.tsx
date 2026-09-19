import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Inisialisasi font bawaan Next.js (Otomatis ter-optimize)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "myITS Broadcast",
  description: "Portal Komunikasi & Kolaborasi Mahasiswa ITS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased bg-[#F8FAFC] text-[#0F172A]`}
      >
        {children}
      </body>
    </html>
  );
}