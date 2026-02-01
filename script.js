// --- CONFIGURATION ---
// Replace the link below with your favorite YouTube song link!
const mySongLink = "https://www.youtube.com/watch?v=0JLRExeOH-k";

function showError() {
    document.getElementById('proposal-screen').classList.add('hidden');
    document.getElementById('error-screen').classList.remove('hidden');
}

function backToProposal() {
    document.getElementById('error-screen').classList.add('hidden');
    document.getElementById('proposal-screen').classList.remove('hidden');
    
    // Now the No button will run away when hovered
    const noBtn = document.getElementById('no-btn');
    noBtn.onmouseover = moveButton;
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    const btn = document.getElementById('no-btn');
    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function showGifts() {
    const music = document.getElementById('valentine-music');
    music.play();
    
    document.getElementById('proposal-screen').classList.add('hidden');
    document.getElementById('gift-screen').classList.remove('hidden');
    createConfetti();
}

function revealGift(type) {
    document.getElementById('gift-selection').classList.add('hidden');
    document.getElementById('gift-header').classList.add('hidden');
    
    const contentArea = document.getElementById('gift-content');
    const display = document.getElementById('gift-display');
    contentArea.classList.remove('hidden');

    if (type === 'bouquet') {
        if (type === 'bouquet') {
    display.innerHTML = `
        <h2>Your Rose Bouquet 🌹</h2>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z0bjJpZzRyeGZ6ZzRyeGZ6ZzRyeGZ6ZzRyeGZ6ZzRyeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v4aP8z9I_D9C/giphy.gif" alt="Roses">
        <p>I will always love you no matter what.</p>
    `;
    } else if (type === 'letter') {
        display.innerHTML = `
            <div style="background: #fffafb; padding: 15px; border-radius: 10px; text-align: left;">
                <h2 style="text-align: center;">Words from My Heart</h2>
                <p>To the love of my life,</p>
                <p>You make my life so meaningful and I am so lucky to have you. Always, Forever.</p>
                <p style="text-align: right;">XOXO</p>
            </div>
        `;
    } else if (type === 'song') {
        display.innerHTML = `
            <h2>A Song For You 🎵</h2>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${mySongLink}">
            <p>Scan the code to hear how I feel!</p>
        `;
    }
}

function closeGift() {
    document.getElementById('gift-content').classList.add('hidden');
    document.getElementById('gift-selection').classList.remove('hidden');
    document.getElementById('gift-header').classList.remove('hidden');
}

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.className = 'confetti';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}


