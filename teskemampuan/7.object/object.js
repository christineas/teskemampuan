// Array untuk menyimpan informasi mata kuliah
var informasiKuliah = [];

// Meminta pengguna untuk mengisi informasi mata kuliah
for (var i = 0; i < 2; i++) { // Menggunakan 2 sebagai contoh, bisa disesuaikan dengan jumlah mata kuliah yang diambil
    var namaMataKuliah = prompt("Masukkan nama mata kuliah ke-" + (i+1) + ": ");
    var jumlahSKS = parseInt(prompt("Masukkan jumlah SKS mata kuliah " + namaMataKuliah + ": "));
    var nilai = prompt("Masukkan nilai mata kuliah " + namaMataKuliah + ": ");
    console.log("===================================");

    // Menambahkan informasi mata kuliah ke dalam array
    informasiKuliah.push({ 
        nama: namaMataKuliah, 
        sks: jumlahSKS, 
        nilai: nilai });
}

// Menampilkan informasi mata kuliah
console.log("===================================");
console.log("Informasi Mata Kuliah:");
for (var i = 0; i < informasiKuliah.length; i++) {
    console.log("Mata Kuliah ke-" + (i+1) + ": ");
    console.log("Nama: " + informasiKuliah[i].nama);
    console.log("Jumlah SKS: " + informasiKuliah[i].sks);
    console.log("Nilai: " + informasiKuliah[i].nilai);
    console.log("===================================");
}