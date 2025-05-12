document.addEventListener('DOMContentLoaded', () => {
  const buyButtons = document.querySelectorAll('.buy-btn');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productElement = button.closest('.product');
      const productName = productElement.querySelector('h2').innerText;
      const productPrice = productElement.querySelector('p').innerText;
      
      // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
      const phoneNumber = '628812531649'; // Gunakan format internasional, tanpa + (misal +62 -> 62)
      
      // Pesan yang akan dikirim
      const message = `Halo Admin, saya ingin beli:\n\n${productName}\nHarga: ${productPrice}`;
      
      // Buat URL WhatsApp
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Redirect ke WhatsApp
      window.open(whatsappURL, '_blank');
    });
  });
});