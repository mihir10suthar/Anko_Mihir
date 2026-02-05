let x=0;
document.addEventListener("touchstart",e=>x=e.touches[0].clientX);
document.addEventListener("touchend",e=>{
  if(e.changedTouches[0].clientX-x>80)history.back();
});
