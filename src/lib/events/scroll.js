const workCon = document.getElementById("work");
const banner = document.getElementById("banner");
const nav = document.getElementById("nav");
const limit = 150;
const dbdshr = document.querySelector(".dbds-hr");
const midscreen = window.innerHeight / 2;
dbdshr.style.top = midscreen + "px";
const footer = document.getElementById("contact");

// elongate work-container section on scroll
const listenScroll = (e) => {
  console.log('cl height')
  console.log(e.target.clientHeight)
  console.log(e.target.scrollTop)
  if (e.target.scrollTop >= limit) {
    banner.classList.remove("banner-reg");
    banner.classList.add("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
    footer.classList.remove('footer-up') 
    footer.classList.add('footer-down') 
  } 
  else {
    banner.classList.add("banner-reg");
    banner.classList.remove("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
    footer.classList.remove('footer-down') 
    footer.classList.add('footer-up') 
  }


  if((e.target.scrollTop) >= e.target.clientHeight){
    console.log('you hit the target bro on scroll')
    footer.classList.remove('footer-down') 
    footer.classList.add('footer-up') 
  }
};

workCon.addEventListener("scroll", listenScroll);
