const mySongLink = "https://www.youtube.com/watch?v=3YO3AvlTdw0";

function showError() {
    document.getElementById('proposal-screen').classList.add('hidden');
    document.getElementById('error-screen').classList.remove('hidden');
}

function backToProposal() {
    document.getElementById('error-screen').classList.add('hidden');
    document.getElementById('proposal-screen').classList.remove('hidden');
    document.getElementById('no-btn').onmouseover = moveButton;
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const btn = document.getElementById('no-btn');
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function showGifts() {
    document.getElementById('proposal-screen').classList.add('hidden');
    document.getElementById('gift-screen').classList.remove('hidden');
}

function revealGift(type) {
    document.getElementById('gift-selection').classList.add('hidden');
    document.getElementById('gift-header').classList.add('hidden');
    document.getElementById('gift-content').classList.remove('hidden');
    const display = document.getElementById('gift-display');

    if (type === 'bouquet') {
        display.innerHTML = "<h2>Roses for You 🌹</h2><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z0bjJpZzRyeGZ6ZzRyeGZ6ZzRyeGZ6ZzRyeGZ6ZzRyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v4aP8z9I_D9C/giphy.gif' style='width:100%'>";
    } else if (type === 'letter') {
        display.innerHTML = "<h2>My Heart 💌</h2><p>You're my favorite person. Always, forever.</p>";
    } else if (type === 'song') {
        display.innerHTML = "<h2>Our Song 🎵</h2><img src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + mySongLink + "'>";
    }
}

function closeGift() {
    document.getElementById('gift-content').classList.add('hidden');
    document.getElementById('gift-selection').classList.remove('hidden');
    document.getElementById('gift-header').classList.remove('hidden');
}
