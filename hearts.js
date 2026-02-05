setInterval(()=>{
  const h=document.createElement("div");
  h.innerText="❤️";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.bottom="0";
  h.style.fontSize="22px";
  h.style.animation="float 6s linear";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},3000);
