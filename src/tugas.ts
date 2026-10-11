// Ganti nilai NIM di bawah ini sesuai dengan NIM kamu
const nim: string = "052511446";

console.log(`=== MENGGUNAKAN NIM: ${nim} ===\n`);

// ==========================================
// SOAL 1: POLA SEGITIGA ANGKA
// ==========================================
console.log("--- SOAL 1: Pola Segitiga ---");

// Ambil digit terakhir NIM
const digitTerakhir: number = parseInt(nim.charAt(nim.length - 1));
const tinggiSegitiga: number = digitTerakhir;

console.log(`Tinggi segitiga (digit terakhir NIM): ${tinggiSegitiga}\n`);

for (let i = 1; i <= tinggiSegitiga; i++) {
  let baris: string = "";
  for (let j = 1; j <= i; j++) {
    baris += j + " ";
  }
  console.log(baris.trimEnd());
}

console.log("\n" + "=".repeat(40) + "\n");

// ==========================================
// SOAL 2: DERET ARITMATIKA
// ==========================================
console.log("--- SOAL 2: Deret Aritmatika ---");

// Ambil 2 digit terakhir untuk angka awal (start)
const duaDigitTerakhir: number = parseInt(nim.slice(-2));

// Ambil digit ke-3 dari belakang
const digitKe3DariBelakang: number = parseInt(nim.charAt(nim.length - 3));

// Beda (step) = digit ke-3 dari belakang + 1
const beda: number = digitKe3DariBelakang + 1;

console.log(`Angka Awal (2 digit terakhir): ${duaDigitTerakhir}`);
console.log(`Beda Step (${digitKe3DariBelakang} + 1): ${beda}\n`);

const deret: number[] = [];
let angkaSaatIni: number = duaDigitTerakhir;

for (let i = 0; i < 10; i++) {
  deret.push(angkaSaatIni);
  angkaSaatIni += beda;
}

console.log("Output: " + deret.join(", "));

console.log("\n" + "=".repeat(40) + "\n");

// ==========================================
// SOAL 3: BILANGAN PRIMA
// ==========================================
console.log("--- SOAL 3: Bilangan Prima ---");

// Batas akhir = 2 digit terakhir + 10
const batasAkhir: number = duaDigitTerakhir + 10;

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

console.log("Output: " + daftarPrima.join(", "));