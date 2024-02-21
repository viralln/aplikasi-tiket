alert("Selamat Datang di Aplikasi Tiket \nSilahkan Masukkan Data Anda")

// Meminta input nama dari pengguna
const nama = prompt("Masukkan nama:");

// Meminta input umur dari pengguna dan mengonversinya ke tipe data integer
const umur = parseInt(prompt("Masukkan umur:"));

// Memeriksa apakah umur lebih besar dari 13
if (umur > 13) {
    // Meminta pengguna memilih studio (A, B, atau C)
    const studio = prompt("Pilih studio (A, B, atau C):").toUpperCase();

    // Menampilkan alert berdasarkan pilihan studio
    switch (studio) {
        case 'A':
            alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
            break;
        case 'B':
            alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
            break;
        case 'C':
            alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
            break;
        default:
            alert("Pilihan studio tidak valid.");
    }
} else {
    // Menampilkan alert jika umur kurang dari atau sama dengan 13
    alert("Maaf, Anda tidak boleh masuk studio karena umur Anda harus di atas 13 tahun.");
}
