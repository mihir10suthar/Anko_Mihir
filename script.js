function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "ankitalovemihir" && p === "ILOVEYOU") {
    location.href = "home.html";
  } else {
    document.getElementById("error").innerText =
      "Only Ankita can enter ❤️";
  }
}

function runAway() {
  const b = document.getElementById("noBtn");
  b.style.position = "absolute";
  b.style.top = Math.random() * 80 + "%";
  b.style.left = Math.random() * 80 + "%";
}
