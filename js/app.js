function login() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === "ankitalovemihir" && p === "ILOVEYOU") {
    window.location.href = "home.html";
  } else {
    alert("Wrong 💔");
  }
}
