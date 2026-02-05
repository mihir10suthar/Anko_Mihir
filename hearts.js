window.addEventListener("scroll",()=>{
  const h=document.createElement("div");
  h.innerText="💖";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.bottom="0";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),2000);
});
