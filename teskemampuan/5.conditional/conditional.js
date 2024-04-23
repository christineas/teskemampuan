// Total belanjaan pelanggan
var totalBelanja = parseFloat(prompt("Masukkan total belanjaan (dalam ribu rupiah):"));

// Inisialisasi variabel untuk menyimpan total belanjaan setelah diskon
var setelahDiskon;

// Kondisi untuk menghitung total belanjaan setelah diskon
if (totalBelanja > 500) {
    // Menghitung total belanjaan setelah diskon 10%
    setelahDiskon = totalBelanja - (totalBelanja * 0.1);
    console.log("================================================================================");
    console.log("Selamat! Karena belanjaan anda melebihi 500ribu, maka anda mendapat diskon 10%!");
    console.log("Total belanjaan setelah diskon 10%: " + setelahDiskon + " ribu rupiah");
} else {
    // Jika total belanjaan tidak melebihi 500 ribu, tidak ada diskon
    console.log("Total belanjaan Anda: " + totalBelanja + " ribu rupiah");
}