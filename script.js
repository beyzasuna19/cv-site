// İletişim formu fonksiyonu
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;

    const messageStatus = document.getElementById('messageStatus');
    if (messageStatus) {
        messageStatus.textContent = `Teşekkürler, ${name}! Mesajınız alınmıştır.`;
    }

    document.getElementById('contactForm')?.reset();
});
