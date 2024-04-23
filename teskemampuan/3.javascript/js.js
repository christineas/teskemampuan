// Fungsi untuk menghitung damage yang akan diterima oleh karakter
function hitungDmg(seranganMusuh, shieldChar) {
    // Menghitung damage yang akan diterima
    var damage = seranganMusuh - shieldChar;
    
    if (damage <= 0) {
        return 0;
    } else {
        return damage;
    }
}

var seranganMusuh = 50;

var shieldChar = 20;

var damageDiterima = hitungDmg(seranganMusuh, shieldChar);

console.log("Damage yang akan diterima oleh karakter: " + damageDiterima);