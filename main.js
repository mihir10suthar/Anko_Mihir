function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const box = document.querySelector(".login-container");
  const error = document.getElementById("error");

  if (username === "ankita" && password === "16091010") {
    error.innerText = "";
    window.location.href = "home.html";
  } else {
    error.innerText = "Wrong username or password";
    box.classList.add("shake");
    setTimeout(() => box.classList.remove("shake"), 400);
  }
}
