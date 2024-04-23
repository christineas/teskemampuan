// Array untuk menyimpan berat badan sapi-sapi selama seminggu
var beratSapi = [];

// Looping untuk mencatat berat badan sapi-sapi selama seminggu
for (var hari = 1; hari <= 7; hari++) {
    // Menggunakan array push untuk menambahkan berat badan setiap sapi
    var beratBadan = parseFloat(prompt("Masukkan berat badan sapi untuk hari ke-" + hari + " (kg):"));
    beratSapi.push(beratBadan);
}

// Menghitung total berat badan sapi-sapi selama seminggu
var totalBerat = 0;
for (var i = 0; i < beratSapi.length; i++) {
    totalBerat += beratSapi[i];
}

// Menghitung rata-rata berat badan sapi-sapi selama seminggu
var rataBerat = totalBerat / beratSapi.length;

// Menampilkan rata-rata berat badan sapi-sapi selama seminggu
console.log("==================================================================");
console.log("Rata-rata berat badan sapi-sapi selama seminggu: " + rataBerat.toFixed(2) + " kg");