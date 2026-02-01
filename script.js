function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const btn = document.getElementById('no-btn');
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function showGifts() {
    document.getElementById('proposal-screen').classList.add('hidden');
    document.getElementById('gift-screen').classList.remove('hidden');
}

function revealGift(type) {
    const display = document.getElementById('gift-display');
    if (type === 'bouquet') {
        display.innerHTML = "<h3>Your Rose Bouquet 🌹</h3><p>I will always love you no matter what.</p>";
    } else if (type === 'letter') {
        display.innerHTML = "<h3>Words from My Heart 💌</h3><p>You make my life so meaningful...</p>";
    } else if (type === 'song') {
        display.innerHTML = "<h3>A Song for You 🎵</h3><p>Scan this QR code!</p>";
    }
}