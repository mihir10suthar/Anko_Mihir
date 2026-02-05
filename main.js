function login(){
  const u=document.getElementById("user").value.toLowerCase();
  const p=document.getElementById("pass").value;
  const box=document.getElementById("loginBox");
  if(u==="ankita" && p==="16091010"){
    window.location.href="unlock.html";
  }else{
    box.classList.add("shake");
    setTimeout(()=>box.classList.remove("shake"),500);
  }
}
