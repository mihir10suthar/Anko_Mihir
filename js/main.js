function dotAnim() {
  const p = document.getElementById("pass").value;
  document.getElementById("dots").innerHTML = "● ".repeat(p.length);
}

function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u === "ankita" && p === "16091010") {
    window.location.href = "home.html";
  } else {
    alert("Try again 💔");
  }
}
