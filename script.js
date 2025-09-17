/* Autoplay video dengan suara */
const video = document.getElementById('video-bg');
function playVideoWithSound() {
  video.muted = false;
  video.play().catch(() => {
    video.muted = true;
    video.play();
  });
}
window.addEventListener('DOMContentLoaded', () => {
  const event = new Event('click');
  document.body.dispatchEvent(event);
  playVideoWithSound();
});
document.body.addEventListener('click', () => { playVideoWithSound(); });

/* Partikel Canvas */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

/* Parallax effect */
const parallax = document.getElementById("parallax");
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  parallax.style.transform = `translate(${x}px, ${y}px)`;
});
