const workCon = document.getElementById("work");
const banner = document.getElementById("banner");
const nav = document.getElementById("nav");
const limit = 150;
const dbdshr = document.querySelector(".dbds-hr");
const worksec = document.querySelectorAll(".work-section");
const midscreen = window.innerHeight / 2;
const endP = document.querySelector(".rotate-sec");
let dbdsfigs = document.querySelectorAll(".dbds-figure");
dbdshr.style.top = midscreen + "px";
const handleSlideEffect = (figs, sections) => {
  // handle all sections
  sections.forEach((sec, index) => {
    if (
      sec.getBoundingClientRect().y <=
      dbdshr.getBoundingClientRect().y + 10
    ) {
      sec.classList.remove("hide-dbds");
    } else {
      sec.classList.add("hide-dbds");
    }
  });
  // handle figures in dbds
  figs.forEach((fig, idx) => {
    if (idx % 2 == 0) {
      fig.classList.add("row-rev");
    } else {
      fig.classList.add("row");
    }
    if (fig.getBoundingClientRect().y <= dbdshr.getBoundingClientRect().y) {
      fig.classList.remove("hide-dbds");
      fig.children[0].children[0].classList.remove("hide-dbds");
      fig.children[1].children[0].classList.remove("img-trans");
      fig.children[1].children[0].classList.add("img-trans-def");
    } else {
      fig.classList.add("hide-dbds");
      fig.children[0].children[0].classList.add("hide-dbds");
      fig.children[1].children[0].classList.add("img-trans");
      fig.children[1].children[0].classList.remove("img-trans-def");
    }
  });
};
let startDeg = 8;
let startPx = -100;
let trackSc = [];
const handleRotateScroll = (elem, e) => {
  trackSc.push(e.target.scrollTop);
  tracker = [...trackSc].slice(-2);
  let up = tracker[0] > tracker[1];
  let down = tracker[1] > tracker[0];
  if (
    !endP.classList.contains("hide-dbds") &&
    endP.getBoundingClientRect().y + endP.clientHeight >= banner.clientHeight
  ) {
    if (up && startDeg <= 8) {
      startDeg += 1;
      startPx += 1;
      elem.style = `transform:rotate(${startDeg}deg);`;
    }
    if (down && startDeg > 0) {
      startDeg -= 1;
      startPx -= 1;
      elem.style = `transform:rotate(${startDeg}deg);`;
    }
  }
};
// elongate work-container section on scroll
const listenScroll = (e) => {
  let figs = [...dbdsfigs];
  let sections = [...worksec];
  handleSlideEffect(figs, sections);
  handleRotateScroll(endP, e);
  if (e.target.scrollTop >= limit) {
    banner.classList.remove("banner-reg");
    banner.classList.add("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
  } else {
    banner.classList.add("banner-reg");
    banner.classList.remove("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
  }
};
workCon.addEventListener("scroll", listenScroll);

// disable sroll for main content
const disableScroll = () => {
  workCon.classList.remove("yes-scroll");
  workCon.classList.add("no-scroll");
  document.body.classList.remove("yes-scroll");
  document.body.classList.add("no-scroll");
};
// enable sroll for main content
const enableScroll = () => {
  workCon.classList.remove("no-scroll");
  workCon.classList.add("yes-scroll");
  document.body.classList.add("yes-scroll");
  document.body.classList.remove("no-scroll");
};

module.exports = { enableScroll, disableScroll };
