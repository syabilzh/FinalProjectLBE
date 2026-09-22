# 📢 myITS Broadcast

**myITS Broadcast** adalah platform web eksklusif bagi mahasiswa Institut Teknologi Sepuluh Nopember (ITS) yang berfungsi sebagai papan pengumuman digital terpusat. Platform ini dirancang untuk menyelesaikan masalah pencarian info kepanitiaan, lomba, dan tugas besar (tubes) yang sering kali tenggelam di grup obrolan atau kurang mendapatkan *exposure* di media sosial.

---

## ✨ Fitur Utama
* **Autentikasi Eksklusif:** Pendaftaran dan login diwajibkan menggunakan email institusi dengan domain `@student.its.ac.id` untuk menjaga validitas audiens[cite: 3].
* **Pencarian Pintar & Tagging:** Dilengkapi fitur *Search Bar* dan filter berdasarkan kategori (Lomba, Tubes, Project, Panitia) serta *custom tags* (misal: "Informatika", "UI/UX")[cite: 3].
* **Auto-Delete (Expiry Date):** Postingan memiliki masa berlaku dan akan dihapus otomatis dari sistem setelah melewati batas waktu tersebut agar halaman utama tetap relevan[cite: 3].
* **Sistem Redirect (Smart CTA):** Pendaftaran dan komunikasi lanjutan diarahkan ke luar platform (WhatsApp, Line, Google Form) melalui deteksi otomatis yang diubah menjadi tombol Call-to-Action pada antarmuka pengguna[cite: 3].
* **Manajemen CRUD:** Pembuat *broadcast* memiliki kontrol penuh untuk mengedit, menambah foto, atau menghapus postingan secara manual sebelum batas waktu habis[cite: 3].

---

## 🛠️ Tech Stack
Project ini dibangun dengan arsitektur yang memisahkan Frontend dan Backend.

**Frontend:**
* Framework: Next.js (React)
* Styling: Tailwind CSS
* Language: TypeScript

**Backend:**
* Language: Go (Golang)
* Framework: Gin (`gin-gonic/gin`)
* API Documentation: Swagger (`swaggo`)
* Database: MySQL (via GORM)

---

## 📂 Struktur Project
```text
FINALPROJECT/
├── myits-broadcast-frontend/   # Folder aplikasi antarmuka (UI/UX)
│   ├── app/                    # Routing halaman (page.tsx, layout.tsx, dll)
│   ├── public/                 # Aset statis (gambar, icon)
│   └── package.json            # Daftar dependency frontend
│
└── myits-broadcast-backend/    # Folder API & Logika Server
    ├── config/                 # Konfigurasi database MySQL
    ├── controllers/            # Logika bisnis dan handler API (CRUD)
    ├── models/                 # Struktur data & skema tabel
    ├── docs/                   # Dokumentasi Swagger (auto-generated)
    ├── main.go                 # Entry point server backend
    └── go.mod                  # Daftar dependency backend
