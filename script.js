function updateStatus() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const total = hour * 60 + minute;
  const open = 17 * 60;
  const close = 23 * 60 + 59;
  const el = document.getElementById('status');
  if (total >= open && total <= close) {
    el.textContent = '🟢 BUKA SEKARANG';
    el.style.color = '#8fd18f';
  } else {
    el.textContent = '🔴 TUTUP — Buka pukul 17.00';
    el.style.color = '#ff9a8f';
  }
}
updateStatus();
setInterval(updateStatus, 60000);

function pesanMenu(nama, harga) {
  const nomor = "6283188151614";
  const pesan =
    "Halo Martabak Daffa, saya ingin pesan:%0A%0A" +
    "🍽️ Menu: " + encodeURIComponent(nama) + "%0A" +
    "💰 Harga: " + encodeURIComponent(harga) + "%0A" +
    "🔢 Jumlah: 1%0A%0A" +
    "Mohon konfirmasi ketersediaannya. Terima kasih.";

  window.open("https://wa.me/" + nomor + "?text=" + pesan, "_blank");
}
