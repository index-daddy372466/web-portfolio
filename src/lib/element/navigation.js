const nav = document.getElementById("nav");
const navbtn = document.getElementById("nav-button");
const stars = document.querySelectorAll('.star')
const workcon = document.getElementById('work')
const navitems = document.querySelectorAll('.nav-list-item')
const footer = document.querySelector('footer')
// console.log(workcon)

module.exports = loadNav = () => {
 // window click event
  window.onclick = e => {
    const pos = {x:e.pageX,y:e.pageY}
    let navTop = nav.getBoundingClientRect().y, navLeft = nav.getBoundingClientRect().x, boundaries = pos.x < navLeft || pos.y < navTop
    if (boundaries && !e.target.classList.contains('nav-button-mobile')) {
        nav.classList.remove("show-nav");
        stars[0].classList.add('star-reg')
        stars[0].classList.remove('star-hide')
        stars[1].classList.remove('star-reg')
        stars[1].classList.add('star-hide')
        restoreBackground(workcon)
      }
  }
// nav click event
  navbtn.onclick = (e) => {
    if (nav.classList.contains("hidden-nav")) {
      nav.classList.toggle("show-nav");
    }
    // if nav is not displayed
    if(!/show-nav/.test(nav.classList['value'])) {
        stars[0].classList.add('star-reg')
        stars[0].classList.remove('star-hide')
        stars[1].classList.remove('star-reg')
        stars[1].classList.add('star-hide')
        // unblur bg
        restoreBackground(workcon)
    }
    else{
    // if nav is displayed
      stars[0].classList.remove('star-reg')
      stars[0].classList.add('star-hide')
      stars[1].classList.add('star-reg')
      stars[1].classList.remove('star-hide')
      // blur background
      blurBackground(workcon)
    }
  };
};

function blurBackground(elem){
  elem.classList.add('blur-element-sm')
  elem.classList.add('no-pointer')
}
function restoreBackground(elem){
  elem.classList.remove('blur-element-sm')
  elem.classList.remove('no-pointer')
 }

 function extendNavOpt(arr){
  arr.forEach((li,idx)=>{
    // onclicks
    li.onclick = e => {
      const article = e.currentTarget.children[0]
      // extend article's capabilities to the parent (nav link)
      window.open(article.href,'_self')
      if(idx > 1){
        footer.classList.remove('footer-down')
        footer.classList.remove('footer-up')
        footer.classList.add('footer-up-max')
        console.log('you hit contact')
        console.log(e.target.scrollTop)
          document.body.scrollTo(0,document.body.scrollHeight);
          console.log(e.target.scrollTop)
      }
      if (nav.classList.contains("show-nav")) {
        nav.classList.remove("show-nav");
        nav.classList.add("hidden-nav");
      }
      // if nav is not displayed
      if(!/show-nav/.test(nav.classList['value'])) {
          stars[0].classList.add('star-reg')
          stars[0].classList.remove('star-hide')
          stars[1].classList.remove('star-reg')
          stars[1].classList.add('star-hide')
          // unblur bg
          restoreBackground(workcon)
      }
    }
  })
 }
 
 extendNavOpt(navitems)

