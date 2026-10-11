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