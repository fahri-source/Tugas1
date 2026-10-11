// ==========================================
// SOAL 3: BILANGAN PRIMA
// ==========================================

// 1. Simpan NIM sebagai string (karena ada angka 0 di depan)
const nim: string = "052511446";
console.log("--- SOAL 3: Bilangan Prima ---");

// 2. Ambil 2 digit terakhir dari NIM (hasilnya "46") lalu ubah ke number (46)
const duaDigitTerakhir: number = parseInt(nim.slice(-2));

// 3. Batas akhir = 2 digit terakhir + 10
const batasAkhir: number = duaDigitTerakhir + 10;

console.log(`NIM: ${nim}`);
console.log(`Dua Digit Terakhir: ${duaDigitTerakhir}`);
console.log(`Batas Akhir Pencarian (${duaDigitTerakhir} + 10): ${batasAkhir}\n`);

// Fungsi pembantu untuk mengecek apakah suatu angka adalah bilangan prima
function isPrima(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const daftarPrima: number[] = [];

for (let i = 1; i <= batasAkhir; i++) {
  if (isPrima(i)) {
    daftarPrima.push(i);
  }
}

console.log("Output Prima: " + daftarPrima.join(", "));