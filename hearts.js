document.addEventListener("scroll",()=>{
let h=document.createElement("span");
h.innerHTML="💗";
h.style.position="fixed";
h.style.left=Math.random()*100+"%";
h.style.top="90%";
document.body.appendChild(h);
setTimeout(()=>h.remove(),2000);
});
