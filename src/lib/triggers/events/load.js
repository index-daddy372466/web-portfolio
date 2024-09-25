module.exports = window.onload = (e) => {
  // banner
  const banner = document.getElementById("banner");
  const modal = document.querySelector('.modal-wrapper')
  const nav = document.getElementById("nav");
  const worksecs = document.querySelectorAll('.w-container')
  let silver = 'background-image:linear-gradient(45deg,transparent,#ffac8e,transparent);'
  let white = 'background-image:linear-gradient(-45deg,transparent,#ffac8e,transparent);'

  worksecs.forEach((w,i)=>{
    return i%2==0?w.style = silver : w.style = white;
  })

  navPos = banner.clientHeight
  nav.style.top = navPos + 'px'
  // banner appears on load
  if(banner.classList.contains('hidden-banner')){
    banner.classList.remove('hidden-banner')
  }

  // preset modal height to half the page's height
  modal.style.top = (window.innerHeight/2)-(modal.clientHeight/2) + 'px';
  
};
    