function yes(){
document.body.innerHTML += "<h2>She said YES ❤️</h2>";
for(let i=0;i<100;i++){
let h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="fixed";
h.style.left=Math.random()*100+"%";
h.style.top="-10px";
h.style.fontSize="24px";
document.body.appendChild(h);
}
document.getElementById("secret").innerHTML=
"Call Mihir 💕 <br> 9638741010";
}
