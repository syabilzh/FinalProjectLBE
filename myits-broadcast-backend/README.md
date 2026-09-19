# myITS Broadcast - Backend Service

Service backend berbasis REST API yang dibangun menggunakan **Golang**, **Gin Framework**, dan **PostgreSQL** (melalui GORM ORM) untuk menyokong platform papan informasi dan kolaborasi mahasiswa ITS.

## 🛠️ Tech Stack
- **Language:** Go (Golang)
- **Framework:** Gin Web Framework
- **Database:** PostgreSQL
- **ORM:** GORM
- **Authentication/Security:** Local Environment Configuration (scram-sha-256)

---

## 🚀 Cara Menjalankan Backend

### 1. Prasyarat System
- Go (v1.20+)
- PostgreSQL (v14+)

### 2. Konfigurasi Database
1. Buat database baru di PostgreSQL bernama `myits_broadcast_db`:
   ```sql
   CREATE DATABASE myits_broadcast_db;