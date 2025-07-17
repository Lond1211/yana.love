// 🎵 Музыка
const startBtn = document.getElementById("start-btn");
const bgMusic = document.getElementById("bg-music");

startBtn.addEventListener("click", () => {
  bgMusic.play();
  document.querySelector(".intro").classList.add("hidden");
  document.getElementById("message-section").classList.remove("hidden");
  startHeartRain();
});

// 👉 Переход к игре
document.getElementById("play-game").addEventListener("click", () => {
  document.getElementById("message-section").classList.add("hidden");
  document.getElementById("game-section").classList.remove("hidden");
  moveHeart();
});

// 🎯 Сердечко для поимки
const heart = document.getElementById("heart");
heart.addEventListener("click", () => {
  document.getElementById("game-section").classList.add("hidden");
  document.getElementById("final-section").classList.remove("hidden");
});

// 🎮 Движение сердечка
function moveHeart() {
  const gameArea = document.querySelector(".game-area");
  setInterval(() => {
    const x = Math.random() * (gameArea.clientWidth - 60);
    const y = Math.random() * (gameArea.clientHeight - 60);
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
  }, 1000);
}

// 💖 Анимация летающих сердечек
function startHeartRain() {
  const container = document.querySelector(".hearts-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = Math.random() * 20 + 20;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;

    heart.style.left = `${left}%`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }, 300);
}

  startBtn.addEventListener("click", () => {
    bgMusic.currentTime = 20; // ⏩ Перемотка
    bgMusic.volume = 0.05;     // 🔉 Громкость
    bgMusic.play();
  
    document.querySelector(".intro").classList.add("hidden");
    document.getElementById("message-section").classList.remove("hidden");
    startHeartRain();
  });
  