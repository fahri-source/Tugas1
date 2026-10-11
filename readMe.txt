Berikut adalah draf file **`README.md`** yang lengkap, rapi, dan mudah dibaca. Kamu bisa langsung menyalin teks di bawah ini dan menempelkannya ke dalam file bernama `README.md` di folder utama proyek GitHub-mu.

---

```markdown
# 📱 Tugas 1 - Pemrograman Aplikasi Perangkat Bergerak

Repositori ini berisi kumpulan tugas pemrograman berbasis TypeScript menggunakan Node.js pada lingkungan Ubuntu.

## 📁 Struktur Proyek
- `src/` : Berisi file kode sumber TypeScript (contoh: `soal1.ts`, `soal2.ts`, `soal3.ts`).
- `dist/` : Berisi file hasil kompilasi JavaScript (otomatis terbuat).

---

## 🚀 Cara Menjalankan Proyek dari Awal

Ikuti langkah-langkah di bawah ini untuk mengklon (*clone*) repositori ini dari GitHub dan menjalankannya di terminal komputermu:

### 1. Clone Repositori
Buka terminal lalu ketik perintah berikut untuk mendownload proyek ini dari GitHub:
```bash
git clone [https://github.com/USERNAME-KAMU/NAMA-REPOSITORI.git](https://github.com/USERNAME-KAMU/NAMA-REPOSITORI.git)

```

*(Ganti URL di atas dengan URL GitHub repository milikmu)*

### 2. Masuk ke Folder Proyek

```bash
cd NAMA-REPOSITORI

```

### 3. Install Dependensi

Instal semua modul yang dibutuhkan (seperti TypeScript, tsx, dan tipe data Node.js) berdasarkan file konfigurasi:

```bash
npm install

```

### 4. Menjalankan File Tugas

Karena tugas ini terbagi menjadi beberapa file soal terpisah, kamu bisa menjalankannya menggunakan perintah `tsx` berikut sesuai file yang ingin dibuka:

* **Menjalankan Soal 1:**
```bash
npx tsx src/soal1.ts

```


* **Menjalankan Soal 2:**
```bash
npx tsx src/soal2.ts

```


* **Menjalankan Soal 3:**
```bash
npx tsx src/soal3.ts

```



---

## 🛠️ Alternatif Menggunakan Skrip `package.json`

Jika kamu ingin cara yang lebih singkat, kamu juga bisa menggunakan perintah *script* yang sudah disiapkan di dalam file `package.json`:

* `npm run dev` (atau sesuai nama skrip soal yang kamu buat)

```bash

```

```

---

### Cara Memasukkan README ini ke GitHub:
1. Buat file baru di root folder proyekmu dengan nama **`README.md`**.
2. Masukkan kode di atas, lalu simpan (`Ctrl + S`).
3. Kirim pembaruan ke GitHub dengan perintah Git:
   ```bash
   git add README.md
   git commit -m "tambah file README.md"
   git push

```