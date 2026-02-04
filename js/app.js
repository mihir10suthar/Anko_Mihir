function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "ankita" && p === "mihir") {
    window.location.href = "home.html";
  } else {
    alert("Wrong love key 💔");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const secret = document.getElementById("secret");

  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random() * 70 + "%";
      noBtn.style.top = Math.random() * 70 + "%";
    });
  }

  if (yesBtn) {
    yesBtn.addEventListener("click", () => {
      secret.style.display = "block";

      for (let i = 0; i < 30; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.innerHTML = "✨";
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = "-20px";
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 3000);
      }
    });
  }
});
