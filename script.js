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
        display.innerHTML = `
            <h3>Your Rose Bouquet</h3>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpueXNqZzRyeGZ6ZzRyeGZ6ZzRyeGZ6ZzRyeGZ6ZzRyeGZ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/v4aP8z9I_D9C/giphy.gif" style="width:200px;">
            <p>I will always love you no matter what.</p>
        `;
    } else if (type === 'letter') {
        display.innerHTML = `
            <div style="background: #fff0f3; padding: 15px; border: 2px dashed #ff4081; border-radius: 10px;">
                <h3>Words from My Heart</h3>
                <p style="font-size: 0.9rem; line-height: 1.4;">
                    To the love of my life, you make my life so meaningful and I am so lucky to have you 
                    as my valentine this year. I love you wholeheartedly and I can't wait to continue 
                    loving you for the rest of my life...
                </p>
                <p><strong>XOXO</strong></p>
            </div>
        `;
    } else if (type === 'song') {
        display.innerHTML = `
            <h3>A song for you</h3>
            <p>Scan the QR code!</p>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=YOUR_SONG_LINK_HERE" alt="QR Code">
        `;
    }
}
