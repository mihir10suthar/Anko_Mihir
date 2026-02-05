function startCounter() {
  const startDate = new Date("2025-02-22T00:00:00");

  function update() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const bar = document.getElementById("counter-bar");
    if (bar) {
      bar.innerText =
        `💞 ${days} days ${hours}h ${minutes}m ${seconds}s together`;
    }
  }

  update();
  setInterval(update, 1000);
}

document.addEventListener("DOMContentLoaded", startCounter);
