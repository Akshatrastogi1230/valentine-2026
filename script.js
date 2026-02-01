function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    const btn = document.getElementById('no-btn');
    btn.style.position = 'fixed'; // Makes it jump around the whole screen
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
        display.innerHTML = "<h3>Words from My Heart 💌</h3><p style='font-size: 0.8rem;'>To the love of my life, you make my life so meaningful and I am so lucky to have you... Always, Forever.</p>";
    } else if (type === 'song') {
        // Replace the link below with your actual YouTube song link!
        const mySong = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; 
        display.innerHTML = `<h3>A song for you 🎵</h3><p>Scan the code!</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${mySong}">`;
    }
}
