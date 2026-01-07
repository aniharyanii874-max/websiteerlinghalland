/**
 * Fungsi untuk memperbarui jam secara realtime
 * Menggunakan Intl.DateTimeFormat untuk performa yang lebih baik
 */
const updateTime = () => {
    const timeElement = document.getElementById('jam-realtime');
    
    if (!timeElement) return;

    const now = new Date();

    // Pemformat tanggal
    const datePattern = new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);

    // Pemformat waktu (jam:menit:detik)
    const timePattern = new Intl.DateTimeFormat('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);

    // Update HTML dengan struktur yang lebih rapi
    timeElement.innerHTML = `
        <span class="date">${datePattern}</span>
        <span class="separator"> | </span>
        <span class="time">${timePattern.replace(/\./g, ':')}</span>
    `;
};

// Jalankan fungsi setiap detik
setInterval(updateTime, 1000);

// Panggil langsung agar tidak menunggu 1 detik pertama saat halaman dimuat
document.addEventListener('DOMContentLoaded', updateTime);