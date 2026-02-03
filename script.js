function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();

  if (u === "ankitalovemihir" && p === "ILOVEYOU") {
    smoothNavigate("main.html");
  } else {
    document.getElementById("error").innerText =
      "Only Ankita can enter this heart 💔";
  }
}

function show(id) {
  document.querySelectorAll(".content").forEach(d => d.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function smoothNavigate(url) {
  document.body.classList.add("fade-out");
  setTimeout(() => window.location.href = url, 900);
}

function cinematicProposal() {
  smoothNavigate("proposal.html");
}

function runAway() {
  const b = document.getElementById("noBtn");
  b.style.position = "absolute";
  b.style.top = Math.random() * 80 + "%";
  b.style.left = Math.random() * 80 + "%";
}

/* Floating hearts generator */
function createHearts() {
  const container = document.createElement("div");
  container.className = "hearts";
  document.body.appendChild(container);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (6 + Math.random() * 6) + "s";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 12000);
  }, 800);
}

window.onload = createHearts;
