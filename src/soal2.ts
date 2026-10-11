// ==========================================
// SOAL 2: DERET ARITMATIKA
// ==========================================
const nim: string = "052511446";
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
