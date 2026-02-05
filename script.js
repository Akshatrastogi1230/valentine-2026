const mySongLink = "https://www.youtube.com/watch?v=e1mOmdykmwI";

function switchScreen(showId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(showId).classList.add('active');
}

function moveButton() {
    const btn = document.getElementById("no-btn");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

function showGifts() {
    switchScreen("gift-screen");
}

function backToProposal() {
    switchScreen("proposal-screen");
}

function revealGift(type) {
    document.getElementById("gift-selection").classList.add("hidden");
    document.getElementById("gift-content").classList.remove("hidden");

    const display = document.getElementById("gift-display");

    if (type === "bouquet") {
        display.innerHTML = `
            <h2>For You 🌹</h2>
            <img src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif" width="100%">
        `;
    }

    if (type === "letter") {
        display.innerHTML = `
            <h2>My Heart 💌</h2>
            <p>You make my days brighter, my smile wider, and my heart happier 💕</p>
        `;
    }

    if (type === "song") {
        display.innerHTML = `
            <h2>Our Song 🎵</h2>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${mySongLink}">
        `;
    }
}

function closeGift() {
    document.getElementById("gift-content").classList.add("hidden");
    document.getElementById("gift-selection").classList.remove("hidden");
}

