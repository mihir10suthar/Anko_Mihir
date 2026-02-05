function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const box = document.getElementById("login-box");

  if (u === "ankita" && p === "16091010") {
    window.location.href = "unlock.html";
  } else {
    box.classList.add("shake");
    document.getElementById("password").value = "";

    setTimeout(() => {
      box.classList.remove("shake");
    }, 500);
  }
}
