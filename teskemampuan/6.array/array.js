// Array daftar harga buku
var daftarHargaBuku = [];

for (var a = 1; a <= 5; a++) {
    // Menggunakan array push untuk menambahkan harga setiap sapi
    var hargaBuku = parseFloat(prompt("Harga Buku ke- " + a + " (rupiah):"));
    daftarHargaBuku.push(hargaBuku);
}

// Inisialisasi variabel untuk menyimpan harga buku termahal
var hargaTermahal = 0;

// Looping untuk mencari harga buku termahal
for (var i = 0; i < daftarHargaBuku.length; i++) {
    // Membandingkan harga buku saat ini dengan harga termahal yang ada
    if (daftarHargaBuku[i] > hargaTermahal) {
        hargaTermahal = daftarHargaBuku[i];
    }
}

// Menampilkan harga buku termahal
console.log("===================================================");
console.log("Harga buku termahal: " + hargaTermahal + " rupiah");
