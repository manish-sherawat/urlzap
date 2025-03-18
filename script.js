// Particle Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];
const numberOfParticles = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}

init();
animate();

// URL Shortener Functionality
function shortenURL() {
    const url = document.getElementById('urlInput').value;
    if (!url || !isValidURL(url)) {
        alert('Please enter a valid URL');
        return;
    }

    const shortened = 'https://urlzap.netlify.app/' + Math.random().toString(36).substr(2, 6);
    const result = document.getElementById('result');
    const shortenedURL = document.getElementById('shortenedURL');

    shortenedURL.textContent = shortened;
    result.classList.add('show');
    document.getElementById('urlInput').value = '';
}

function copyURL() {
    const shortenedURL = document.getElementById('shortenedURL').textContent;
    navigator.clipboard.writeText(shortenedURL);
    alert('URL copied to clipboard!');
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}