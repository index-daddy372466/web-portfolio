/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/media/bannerimg.jpg":
/*!*********************************!*\
  !*** ./src/media/bannerimg.jpg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/bannerimg.jpg");

/***/ }),

/***/ "./src/media/bannerimg2.jpg":
/*!**********************************!*\
  !*** ./src/media/bannerimg2.jpg ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/bannerimg2.jpg");

/***/ }),

/***/ "./src/media/profilepicture.jpg":
/*!**************************************!*\
  !*** ./src/media/profilepicture.jpg ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/profilepicture.jpg");

/***/ }),

/***/ "./src/muban/styles/mediaquery.css":
/*!*****************************************!*\
  !*** ./src/muban/styles/mediaquery.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/muban/styles/template.css":
/*!***************************************!*\
  !*** ./src/muban/styles/template.css ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lib/data/underdev.js":
/*!**********************************!*\
  !*** ./src/lib/data/underdev.js ***!
  \**********************************/
/***/ (function(module) {

const current = ["chatrooms","sql"]
module.exports.underdev = current

/***/ }),

/***/ "./src/lib/element/endpoint.js":
/*!*************************************!*\
  !*** ./src/lib/element/endpoint.js ***!
  \*************************************/
/***/ (function(module) {

module.exports = loadendpoint = async () => {
  // fetch media endpoint
  return null
};


/***/ }),

/***/ "./src/lib/element/footer.js":
/*!***********************************!*\
  !*** ./src/lib/element/footer.js ***!
  \***********************************/
/***/ (function(module) {

const footer = document.getElementById('contact')
const footericons = document.querySelectorAll('.footer-icon')

module.exports = loadFooter = (laicos) => {
    let links = [...laicos.linx]
    // set footer to end page
    footericons.forEach((icon,idx)=>{
        icon.onclick = e =>{
            let name = icon.classList[1].replace(/fa-/,'')
            console.log('you clicked on icon: ' + name)
            let index = [...footericons].indexOf(icon)
            let link = links[index].link
            console.log(link)
            if(index==3){
                window.open(link)
            }else{
                window.open(link,'_blank')
            }
        }
    })
}

/***/ }),

/***/ "./src/lib/element/games.js":
/*!**********************************!*\
  !*** ./src/lib/element/games.js ***!
  \**********************************/
/***/ (function(module) {

module.exports = loadGames = async () => {
    // fetch media endpoint
    // assign colors to simon board
    const simon = {
      colors:['red','green','blue','yellow'],
      arr:document.querySelectorAll('.simon-bod'),
    }
    simon.arr.forEach((block,idx)=>{
      block.classList.add(`block-${simon.colors[idx]}`)
    })
    
  };
  

/***/ }),

/***/ "./src/lib/element/navigation.js":
/*!***************************************!*\
  !*** ./src/lib/element/navigation.js ***!
  \***************************************/
/***/ (function(module) {

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



/***/ }),

/***/ "./src/lib/element/office.js":
/*!***********************************!*\
  !*** ./src/lib/element/office.js ***!
  \***********************************/
/***/ (function(module) {

module.exports = loadoffice = async () => {
    // fetch media endpoint
    return null
  };
  

/***/ }),

/***/ "./src/lib/element/tags.js":
/*!*********************************!*\
  !*** ./src/lib/element/tags.js ***!
  \*********************************/
/***/ (function(module) {


module.exports = loadTags = ([...captions],nosaj) => {
   let fcaptions = document.querySelectorAll('figcaption.f-caption');
   let figures = document.querySelectorAll('figure');
   let tagText = 'under development';
   let linx = nosaj['linx'];
   let gits = [];

   // filter captons by h3 tags
   fcaptions = [...fcaptions].filter(cap=>{
      const text = cap.textContent.toLowerCase();
      let capincluded = captions.includes(text);
      return capincluded
   })
   
   // figure captions
   fcaptions.forEach(caption=>{
      let figure = caption.parentElement;
      let h3 = document.createElement('h3')
      h3.classList.add('tag-h3')
      h3.textContent = tagText;
      figure.append(h3)
   })

   // language tags
   figures.forEach((fig,newton)=>{
   const article = fig.children[0];
   let icons = [...article.children].filter(x=>/(fa-|readme-tag)/i.test(x.classList))
   const git = [...article.children].filter(x=>/readme-tag/i.test(x.classList))
   // push valid git into gits
   if(git.length > 0){
      gits.push(git[0])
   }
   let h3 = [...fig.children].findIndex(x=>/tag-h3/i.test(x.classList))
   // icons.reduce((a,b)=> h3 == -1 ? b.classList.add('icon-top') : b.classList.add('icon-bottom'),0)
   icons.reduce((prev,curr)=>{
      if(h3 == -1){
         !curr.classList.contains('readme-tag') ? curr.classList.add('icon-top') : curr.classList.add('readme-top')
      } {
         !curr.classList.contains('readme-tag') ? curr.classList.add('icon-bottom') : curr.classList.add('readme-bottom')
      }
   },0)
})
// console.log(nosaj)

// console.log(gits)
// iterate over git elements
gits.forEach((icon,idx)=>{
   // click event
   icon.onclick = e => {
    window.open(linx[idx].link,'_blank')
   }
})

}


/***/ }),

/***/ "./src/lib/events/load.js":
/*!********************************!*\
  !*** ./src/lib/events/load.js ***!
  \********************************/
/***/ (function(module) {

module.exports = window.onload = (e) => {
    // banner
    const banner = document.getElementById("banner");
    const nav = document.getElementById("nav");
    const notice = document.querySelector('.spinup-notice')
    // let silver = 'background-image:linear-gradient(45deg,transparent,rgba(246, 242, 139, 0.44),transparent);'
    // let white = 'background-image:linear-gradient(-45deg,transparent,rgba(246, 242, 139, 0.44),transparent);'
  
    navPos = banner.clientHeight
    nav.style.top = navPos + 'px'
    // banner appears on load
    if(banner.classList.contains('hidden-banner')){
      banner.classList.remove('hidden-banner')
      setTimeout(()=>{
        notice.classList.add('hidden-banner')
      },6000)
    }

    // switch banner b/w desktop & mobile
    configBannerImg(document.querySelectorAll('.space-img'))
    clickFigCaption(document.querySelectorAll('.f-caption'))
  };

  // switch between 2 banners dependent on screen width
  function configBannerImg(imgs){
    const mobileWidth = 950, banner1 = `./media/bannerimg.jpg`, banner2 = `./media/bannerimg2.jpg`
    return imgs.forEach(img=>document.body.clientWidth >= mobileWidth ? img.src = banner2 : img.src = banner1)
  }
      
  function clickFigCaption(arr){
    let target;
    arr.forEach(f=>{
      f.onclick = e => {
        if(e.currentTarget == f){
          target = e.currentTarget;
          const article = target.parentElement.children[0]
          // console.log(article.href)
          window.open(article.href,'_blank')
        }
      }
    })
  }

/***/ }),

/***/ "./src/lib/events/resize.js":
/*!**********************************!*\
  !*** ./src/lib/events/resize.js ***!
  \**********************************/
/***/ (function(module) {

module.exports = window.onresize = (e) => {
    // method
    configBannerImg(document.querySelectorAll('.space-img'))
      };

  function configBannerImg(imgs){
    const mobileWidth = 950, banner1 = `./media/bannerimg.jpg`, banner2 = `./media/bannerimg2.jpg`
    return imgs.forEach(img=>document.body.clientWidth >= mobileWidth ? img.src = banner2 : img.src = banner1)
  }
          

/***/ }),

/***/ "./src/lib/events/scroll.js":
/*!**********************************!*\
  !*** ./src/lib/events/scroll.js ***!
  \**********************************/
/***/ (function() {

const workCon = document.getElementById("work");
const banner = document.getElementById("banner");
const nav = document.getElementById("nav");
const limit = 150;
const dbdshr = document.querySelector(".dbds-hr");
const midscreen = window.innerHeight / 2;
const navitems = document.querySelectorAll('.nav-list-item')
if(dbdshr)dbdshr.style.top = midscreen + "px";
const footer = document.getElementById("contact");

// elongate work-container section on scroll
const listenScroll = (e) => {
  // console.log('cl height')
  // console.log(e.target.clientHeight)
  // console.log(e.target.scrollTop)
  if (e.target.scrollTop >= limit) {
    banner.classList.remove("banner-reg");
    banner.classList.add("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
    footer.classList.remove('footer-up-max') 
    footer.classList.remove('footer-up') 
    footer.classList.add('footer-down') 

  } 
  else {
    banner.classList.add("banner-reg");
    banner.classList.remove("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
    footer.classList.remove('footer-up-max') 
    footer.classList.remove('footer-down') 
    footer.classList.add('footer-up') 
  }


  if((e.target.scrollTop) >= e.target.clientHeight){
    // console.log('you hit the target bro on scroll')
    footer.classList.remove('footer-down') 
    footer.classList.add('footer-up') 
  }
};
  

if(workCon)workCon.addEventListener("scroll", listenScroll);

/***/ }),

/***/ "./src/media/gitlinx.json":
/*!********************************!*\
  !*** ./src/media/gitlinx.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"linx":[{"id":1,"caption":"calculator","link":"https://github.com/index-daddy372466/interactive-calculator"},{"id":2,"caption":"notepad","link":"https://github.com/KylesTech95/notes-server/tree/passport"},{"id":3,"caption":"chatrooms","link":"https://github.com/index-daddy372466/socket-basics/tree/user-info"},{"id":4,"caption":"snake","link":"https://github.com/kylestech95/snake-game"},{"id":5,"caption":"simon","link":"https://github.com/index-daddy372466/simon-says-reactjs"},{"id":6,"caption":"mancala","link":"https://github.com/KylesTech95/mancala-game"},{"id":7,"caption":"database playground","link":"https://github.com/KylesTech95/database-playground-fork"},{"id":9,"caption":"public key infrastructure","link":"https://github.com/index-daddy372466/key-encryption-playground/tree/main"}]}');

/***/ }),

/***/ "./src/media/social.json":
/*!*******************************!*\
  !*** ./src/media/social.json ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"linx":[{"id":1,"caption":"youtube","link":"https://www.youtube.com/@Kyle-wc6so/videos?view=0&sort=dd&shelf_id=2"},{"id":2,"caption":"instagram","link":"https://www.instagram.com/index_daddy0/"},{"id":3,"caption":"linkedin","link":"https://www.linkedin.com/in/kyle-stewart-461905311"},{"id":4,"caption":"envelope","link":"mailto:testmailbox987654@gmail.com"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/londonTower.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_events_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/events/load.js */ "./src/lib/events/load.js");
/* harmony import */ var _lib_events_load_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_events_load_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_events_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/events/scroll.js */ "./src/lib/events/scroll.js");
/* harmony import */ var _lib_events_scroll_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_events_scroll_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_events_resize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/events/resize.js */ "./src/lib/events/resize.js");
/* harmony import */ var _lib_events_resize_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_events_resize_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_gitlinx_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/gitlinx.json */ "./src/media/gitlinx.json");
/* harmony import */ var _media_social_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/social.json */ "./src/media/social.json");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/element/footer.js */ "./src/lib/element/footer.js");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/element/endpoint.js */ "./src/lib/element/endpoint.js");
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_element_office_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/element/office.js */ "./src/lib/element/office.js");
/* harmony import */ var _lib_element_office_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_element_office_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_element_tags_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/element/tags.js */ "./src/lib/element/tags.js");
/* harmony import */ var _lib_element_tags_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_element_tags_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/element/games.js */ "./src/lib/element/games.js");
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_element_games_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/element/navigation.js */ "./src/lib/element/navigation.js");
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_data_underdev_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/data/underdev.js */ "./src/lib/data/underdev.js");
// client events






// elements
 // footer




 // navigation click (mobile)

// tags

// console.log(underDev)
//------------------------------------------------
_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_10___default()();
_lib_element_tags_js__WEBPACK_IMPORTED_MODULE_8___default()(_lib_data_underdev_js__WEBPACK_IMPORTED_MODULE_11__.underdev,_media_gitlinx_json__WEBPACK_IMPORTED_MODULE_3__);
_lib_element_office_js__WEBPACK_IMPORTED_MODULE_7___default()();
_lib_element_games_js__WEBPACK_IMPORTED_MODULE_9___default()();
_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_6___default()();
_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_5___default()(_media_social_json__WEBPACK_IMPORTED_MODULE_4__);
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./src/goldenGate.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _muban_styles_template_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muban/styles/template.css */ "./src/muban/styles/template.css");
/* harmony import */ var _muban_styles_mediaquery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./muban/styles/mediaquery.css */ "./src/muban/styles/mediaquery.css");
/* harmony import */ var _media_bannerimg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/bannerimg.jpg */ "./src/media/bannerimg.jpg");
/* harmony import */ var _media_bannerimg2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/bannerimg2.jpg */ "./src/media/bannerimg2.jpg");
/* harmony import */ var _media_profilepicture_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/profilepicture.jpg */ "./src/media/profilepicture.jpg");
/* harmony import */ var _media_gitlinx_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/gitlinx.json */ "./src/media/gitlinx.json");
/* harmony import */ var _media_social_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/social.json */ "./src/media/social.json");
// injections









  __webpack_require__.nc = '<?=nonce?>';
  
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrREFBZSxxQkFBdUIseUJBQXlCOzs7Ozs7Ozs7Ozs7QUNBL0QsK0RBQWUscUJBQXVCLDBCQUEwQjs7Ozs7Ozs7Ozs7O0FDQWhFLCtEQUFlLHFCQUF1Qiw4QkFBOEI7Ozs7Ozs7Ozs7OztBQ0FwRTs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBO0FBQ0EsdUJBQXVCOzs7Ozs7Ozs7O0FDRHZCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0dBQStHO0FBQy9HLCtHQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzhCO0FBQ0U7QUFDQTtBQUNRO0FBQ0E7QUFDeEM7QUFDQTtBQUNpRCxDQUFDO0FBQ0U7QUFDSjtBQUNKO0FBQ0U7QUFDSSxDQUFDO0FBQ0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBTztBQUNQLDJEQUFRLENBQUMsNERBQVEsQ0FBQyxnREFBSztBQUN2Qiw2REFBVTtBQUNWLDREQUFTO0FBQ1QsK0RBQVk7QUFDWiw2REFBVSxDQUFDLCtDQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmpCO0FBQ29DO0FBQ0U7QUFDUjtBQUNDO0FBQ0k7QUFDTjtBQUNEO0FBQzVCO0FBQ0E7QUFDQSxFQUFFLHNCQUFpQjtBQUNuQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZy5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZzIuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9wcm9maWxlcGljdHVyZS5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL211YmFuL3N0eWxlcy9tZWRpYXF1ZXJ5LmNzcz9hM2Y4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzPzE3ZTciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9kYXRhL3VuZGVyZGV2LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9lbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9nYW1lcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvb2ZmaWNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC90YWdzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZXZlbnRzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9ldmVudHMvcmVzaXplLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZXZlbnRzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvbmRvblRvd2VyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9nb2xkZW5HYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvYmFubmVyaW1nLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvYmFubmVyaW1nMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL3Byb2ZpbGVwaWN0dXJlLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGN1cnJlbnQgPSBbXCJjaGF0cm9vbXNcIixcInNxbFwiXVxyXG5tb2R1bGUuZXhwb3J0cy51bmRlcmRldiA9IGN1cnJlbnQiLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRlbmRwb2ludCA9IGFzeW5jICgpID0+IHtcclxuICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxyXG4gIHJldHVybiBudWxsXHJcbn07XHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcclxuY29uc3QgZm9vdGVyaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyLWljb24nKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRm9vdGVyID0gKGxhaWNvcykgPT4ge1xyXG4gICAgbGV0IGxpbmtzID0gWy4uLmxhaWNvcy5saW54XVxyXG4gICAgLy8gc2V0IGZvb3RlciB0byBlbmQgcGFnZVxyXG4gICAgZm9vdGVyaWNvbnMuZm9yRWFjaCgoaWNvbixpZHgpPT57XHJcbiAgICAgICAgaWNvbi5vbmNsaWNrID0gZSA9PntcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpY29uLmNsYXNzTGlzdFsxXS5yZXBsYWNlKC9mYS0vLCcnKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygneW91IGNsaWNrZWQgb24gaWNvbjogJyArIG5hbWUpXHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IFsuLi5mb290ZXJpY29uc10uaW5kZXhPZihpY29uKVxyXG4gICAgICAgICAgICBsZXQgbGluayA9IGxpbmtzW2luZGV4XS5saW5rXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmspXHJcbiAgICAgICAgICAgIGlmKGluZGV4PT0zKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKGxpbmspXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4obGluaywnX2JsYW5rJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRHYW1lcyA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XHJcbiAgICAvLyBhc3NpZ24gY29sb3JzIHRvIHNpbW9uIGJvYXJkXHJcbiAgICBjb25zdCBzaW1vbiA9IHtcclxuICAgICAgY29sb3JzOlsncmVkJywnZ3JlZW4nLCdibHVlJywneWVsbG93J10sXHJcbiAgICAgIGFycjpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2ltb24tYm9kJyksXHJcbiAgICB9XHJcbiAgICBzaW1vbi5hcnIuZm9yRWFjaCgoYmxvY2ssaWR4KT0+e1xyXG4gICAgICBibG9jay5jbGFzc0xpc3QuYWRkKGBibG9jay0ke3NpbW9uLmNvbG9yc1tpZHhdfWApXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfTtcclxuICAiLCJjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuY29uc3QgbmF2YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5jb25zdCBzdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJylcclxuY29uc3Qgd29ya2NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b3JrJylcclxuY29uc3QgbmF2aXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpc3QtaXRlbScpXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXHJcbi8vIGNvbnNvbGUubG9nKHdvcmtjb24pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWROYXYgPSAoKSA9PiB7XHJcbiAvLyB3aW5kb3cgY2xpY2sgZXZlbnRcclxuICB3aW5kb3cub25jbGljayA9IGUgPT4ge1xyXG4gICAgY29uc3QgcG9zID0ge3g6ZS5wYWdlWCx5OmUucGFnZVl9XHJcbiAgICBsZXQgbmF2VG9wID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIG5hdkxlZnQgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCwgYm91bmRhcmllcyA9IHBvcy54IDwgbmF2TGVmdCB8fCBwb3MueSA8IG5hdlRvcFxyXG4gICAgaWYgKGJvdW5kYXJpZXMgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWJ1dHRvbi1tb2JpbGUnKSkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1uYXZcIik7XHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgcmVzdG9yZUJhY2tncm91bmQod29ya2NvbilcclxuICAgICAgfVxyXG4gIH1cclxuLy8gbmF2IGNsaWNrIGV2ZW50XHJcbiAgbmF2YnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbmF2XCIpKSB7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1uYXZcIik7XHJcbiAgICB9XHJcbiAgICAvLyBpZiBuYXYgaXMgbm90IGRpc3BsYXllZFxyXG4gICAgaWYoIS9zaG93LW5hdi8udGVzdChuYXYuY2xhc3NMaXN0Wyd2YWx1ZSddKSkge1xyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXItcmVnJylcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLWhpZGUnKVxyXG4gICAgICAgIC8vIHVuYmx1ciBiZ1xyXG4gICAgICAgIHJlc3RvcmVCYWNrZ3JvdW5kKHdvcmtjb24pXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgLy8gaWYgbmF2IGlzIGRpc3BsYXllZFxyXG4gICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXHJcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItcmVnJylcclxuICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgLy8gYmx1ciBiYWNrZ3JvdW5kXHJcbiAgICAgIGJsdXJCYWNrZ3JvdW5kKHdvcmtjb24pXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGJsdXJCYWNrZ3JvdW5kKGVsZW0pe1xyXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnYmx1ci1lbGVtZW50LXNtJylcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXInKVxyXG59XHJcbmZ1bmN0aW9uIHJlc3RvcmVCYWNrZ3JvdW5kKGVsZW0pe1xyXG4gIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnYmx1ci1lbGVtZW50LXNtJylcclxuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXBvaW50ZXInKVxyXG4gfVxyXG5cclxuIGZ1bmN0aW9uIGV4dGVuZE5hdk9wdChhcnIpe1xyXG4gIGFyci5mb3JFYWNoKChsaSxpZHgpPT57XHJcbiAgICAvLyBvbmNsaWNrc1xyXG4gICAgbGkub25jbGljayA9IGUgPT4ge1xyXG4gICAgICBjb25zdCBhcnRpY2xlID0gZS5jdXJyZW50VGFyZ2V0LmNoaWxkcmVuWzBdXHJcbiAgICAgIC8vIGV4dGVuZCBhcnRpY2xlJ3MgY2FwYWJpbGl0aWVzIHRvIHRoZSBwYXJlbnQgKG5hdiBsaW5rKVxyXG4gICAgICB3aW5kb3cub3BlbihhcnRpY2xlLmhyZWYsJ19zZWxmJylcclxuICAgICAgaWYoaWR4ID4gMSl7XHJcbiAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1kb3duJylcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLXVwJylcclxuICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXVwLW1heCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvdSBoaXQgY29udGFjdCcpXHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuc2Nyb2xsVG9wKVxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUbygwLGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnNjcm9sbFRvcClcclxuICAgICAgfVxyXG4gICAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcInNob3ctbmF2XCIpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZChcImhpZGRlbi1uYXZcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgbmF2IGlzIG5vdCBkaXNwbGF5ZWRcclxuICAgICAgaWYoIS9zaG93LW5hdi8udGVzdChuYXYuY2xhc3NMaXN0Wyd2YWx1ZSddKSkge1xyXG4gICAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgICAvLyB1bmJsdXIgYmdcclxuICAgICAgICAgIHJlc3RvcmVCYWNrZ3JvdW5kKHdvcmtjb24pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG4gfVxyXG4gXHJcbiBleHRlbmROYXZPcHQobmF2aXRlbXMpXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRvZmZpY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9O1xyXG4gICIsIlxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRUYWdzID0gKFsuLi5jYXB0aW9uc10sbm9zYWopID0+IHtcclxuICAgbGV0IGZjYXB0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZpZ2NhcHRpb24uZi1jYXB0aW9uJyk7XHJcbiAgIGxldCBmaWd1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmlndXJlJyk7XHJcbiAgIGxldCB0YWdUZXh0ID0gJ3VuZGVyIGRldmVsb3BtZW50JztcclxuICAgbGV0IGxpbnggPSBub3NhalsnbGlueCddO1xyXG4gICBsZXQgZ2l0cyA9IFtdO1xyXG5cclxuICAgLy8gZmlsdGVyIGNhcHRvbnMgYnkgaDMgdGFnc1xyXG4gICBmY2FwdGlvbnMgPSBbLi4uZmNhcHRpb25zXS5maWx0ZXIoY2FwPT57XHJcbiAgICAgIGNvbnN0IHRleHQgPSBjYXAudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgbGV0IGNhcGluY2x1ZGVkID0gY2FwdGlvbnMuaW5jbHVkZXModGV4dCk7XHJcbiAgICAgIHJldHVybiBjYXBpbmNsdWRlZFxyXG4gICB9KVxyXG4gICBcclxuICAgLy8gZmlndXJlIGNhcHRpb25zXHJcbiAgIGZjYXB0aW9ucy5mb3JFYWNoKGNhcHRpb249PntcclxuICAgICAgbGV0IGZpZ3VyZSA9IGNhcHRpb24ucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICBoMy5jbGFzc0xpc3QuYWRkKCd0YWctaDMnKVxyXG4gICAgICBoMy50ZXh0Q29udGVudCA9IHRhZ1RleHQ7XHJcbiAgICAgIGZpZ3VyZS5hcHBlbmQoaDMpXHJcbiAgIH0pXHJcblxyXG4gICAvLyBsYW5ndWFnZSB0YWdzXHJcbiAgIGZpZ3VyZXMuZm9yRWFjaCgoZmlnLG5ld3Rvbik9PntcclxuICAgY29uc3QgYXJ0aWNsZSA9IGZpZy5jaGlsZHJlblswXTtcclxuICAgbGV0IGljb25zID0gWy4uLmFydGljbGUuY2hpbGRyZW5dLmZpbHRlcih4PT4vKGZhLXxyZWFkbWUtdGFnKS9pLnRlc3QoeC5jbGFzc0xpc3QpKVxyXG4gICBjb25zdCBnaXQgPSBbLi4uYXJ0aWNsZS5jaGlsZHJlbl0uZmlsdGVyKHg9Pi9yZWFkbWUtdGFnL2kudGVzdCh4LmNsYXNzTGlzdCkpXHJcbiAgIC8vIHB1c2ggdmFsaWQgZ2l0IGludG8gZ2l0c1xyXG4gICBpZihnaXQubGVuZ3RoID4gMCl7XHJcbiAgICAgIGdpdHMucHVzaChnaXRbMF0pXHJcbiAgIH1cclxuICAgbGV0IGgzID0gWy4uLmZpZy5jaGlsZHJlbl0uZmluZEluZGV4KHg9Pi90YWctaDMvaS50ZXN0KHguY2xhc3NMaXN0KSlcclxuICAgLy8gaWNvbnMucmVkdWNlKChhLGIpPT4gaDMgPT0gLTEgPyBiLmNsYXNzTGlzdC5hZGQoJ2ljb24tdG9wJykgOiBiLmNsYXNzTGlzdC5hZGQoJ2ljb24tYm90dG9tJyksMClcclxuICAgaWNvbnMucmVkdWNlKChwcmV2LGN1cnIpPT57XHJcbiAgICAgIGlmKGgzID09IC0xKXtcclxuICAgICAgICAgIWN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkbWUtdGFnJykgPyBjdXJyLmNsYXNzTGlzdC5hZGQoJ2ljb24tdG9wJykgOiBjdXJyLmNsYXNzTGlzdC5hZGQoJ3JlYWRtZS10b3AnKVxyXG4gICAgICB9IHtcclxuICAgICAgICAgIWN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkbWUtdGFnJykgPyBjdXJyLmNsYXNzTGlzdC5hZGQoJ2ljb24tYm90dG9tJykgOiBjdXJyLmNsYXNzTGlzdC5hZGQoJ3JlYWRtZS1ib3R0b20nKVxyXG4gICAgICB9XHJcbiAgIH0sMClcclxufSlcclxuLy8gY29uc29sZS5sb2cobm9zYWopXHJcblxyXG4vLyBjb25zb2xlLmxvZyhnaXRzKVxyXG4vLyBpdGVyYXRlIG92ZXIgZ2l0IGVsZW1lbnRzXHJcbmdpdHMuZm9yRWFjaCgoaWNvbixpZHgpPT57XHJcbiAgIC8vIGNsaWNrIGV2ZW50XHJcbiAgIGljb24ub25jbGljayA9IGUgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4obGlueFtpZHhdLmxpbmssJ19ibGFuaycpXHJcbiAgIH1cclxufSlcclxuXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25sb2FkID0gKGUpID0+IHtcclxuICAgIC8vIGJhbm5lclxyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIGNvbnN0IG5vdGljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGludXAtbm90aWNlJylcclxuICAgIC8vIGxldCBzaWx2ZXIgPSAnYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdHJhbnNwYXJlbnQscmdiYSgyNDYsIDI0MiwgMTM5LCAwLjQ0KSx0cmFuc3BhcmVudCk7J1xyXG4gICAgLy8gbGV0IHdoaXRlID0gJ2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXHJcbiAgXHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgJ3B4J1xyXG4gICAgLy8gYmFubmVyIGFwcGVhcnMgb24gbG9hZFxyXG4gICAgaWYoYmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLWJhbm5lcicpKXtcclxuICAgICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1iYW5uZXInKVxyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgbm90aWNlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1iYW5uZXInKVxyXG4gICAgICB9LDYwMDApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3dpdGNoIGJhbm5lciBiL3cgZGVza3RvcCAmIG1vYmlsZVxyXG4gICAgY29uZmlnQmFubmVySW1nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGFjZS1pbWcnKSlcclxuICAgIGNsaWNrRmlnQ2FwdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZi1jYXB0aW9uJykpXHJcbiAgfTtcclxuXHJcbiAgLy8gc3dpdGNoIGJldHdlZW4gMiBiYW5uZXJzIGRlcGVuZGVudCBvbiBzY3JlZW4gd2lkdGhcclxuICBmdW5jdGlvbiBjb25maWdCYW5uZXJJbWcoaW1ncyl7XHJcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXHJcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXHJcbiAgfVxyXG4gICAgICBcclxuICBmdW5jdGlvbiBjbGlja0ZpZ0NhcHRpb24oYXJyKXtcclxuICAgIGxldCB0YXJnZXQ7XHJcbiAgICBhcnIuZm9yRWFjaChmPT57XHJcbiAgICAgIGYub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldCA9PSBmKXtcclxuICAgICAgICAgIHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgIGNvbnN0IGFydGljbGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aWNsZS5ocmVmKVxyXG4gICAgICAgICAgd2luZG93Lm9wZW4oYXJ0aWNsZS5ocmVmLCdfYmxhbmsnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25yZXNpemUgPSAoZSkgPT4ge1xyXG4gICAgLy8gbWV0aG9kXHJcbiAgICBjb25maWdCYW5uZXJJbWcoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYWNlLWltZycpKVxyXG4gICAgICB9O1xyXG5cclxuICBmdW5jdGlvbiBjb25maWdCYW5uZXJJbWcoaW1ncyl7XHJcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXHJcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXHJcbiAgfVxyXG4gICAgICAgICAgIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBsaW1pdCA9IDE1MDtcclxuY29uc3QgZGJkc2hyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYmRzLWhyXCIpO1xyXG5jb25zdCBtaWRzY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5jb25zdCBuYXZpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdC1pdGVtJylcclxuaWYoZGJkc2hyKWRiZHNoci5zdHlsZS50b3AgPSBtaWRzY3JlZW4gKyBcInB4XCI7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuXHJcbi8vIGVsb25nYXRlIHdvcmstY29udGFpbmVyIHNlY3Rpb24gb24gc2Nyb2xsXHJcbmNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2NsIGhlaWdodCcpXHJcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xpZW50SGVpZ2h0KVxyXG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnNjcm9sbFRvcClcclxuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci11cC1tYXgnKSBcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXItdXAnKSBcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItZG93bicpIFxyXG5cclxuICB9IFxyXG4gIGVsc2Uge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItcmVnXCIpO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItc21cIik7XHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXItdXAtbWF4JykgXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLWRvd24nKSBcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItdXAnKSBcclxuICB9XHJcblxyXG5cclxuICBpZigoZS50YXJnZXQuc2Nyb2xsVG9wKSA+PSBlLnRhcmdldC5jbGllbnRIZWlnaHQpe1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3lvdSBoaXQgdGhlIHRhcmdldCBicm8gb24gc2Nyb2xsJylcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXItZG93bicpIFxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci11cCcpIFxyXG4gIH1cclxufTtcclxuICBcclxuXHJcbmlmKHdvcmtDb24pd29ya0Nvbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlblNjcm9sbCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBjbGllbnQgZXZlbnRzXHJcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9sb2FkLmpzXCI7XHJcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9zY3JvbGwuanNcIjtcclxuaW1wb3J0IFwiLi9saWIvZXZlbnRzL3Jlc2l6ZS5qc1wiO1xyXG5pbXBvcnQgbm9zYWogZnJvbSAnLi9tZWRpYS9naXRsaW54Lmpzb24nXHJcbmltcG9ydCBsYWljb3MgZnJvbSAnLi9tZWRpYS9zb2NpYWwuanNvbidcclxuXHJcbi8vIGVsZW1lbnRzXHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xpYi9lbGVtZW50L2Zvb3Rlci5qc1wiOyAvLyBmb290ZXJcclxuaW1wb3J0IGxvYWRlbmRwb2ludCBmcm9tICcuL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzJ1xyXG5pbXBvcnQgbG9hZE9mZmljZSBmcm9tICcuL2xpYi9lbGVtZW50L29mZmljZS5qcydcclxuaW1wb3J0IGxvYWRUYWdzIGZyb20gJy4vbGliL2VsZW1lbnQvdGFncy5qcydcclxuaW1wb3J0IGxvYWRHYW1lcyBmcm9tICcuL2xpYi9lbGVtZW50L2dhbWVzLmpzJ1xyXG5pbXBvcnQgbG9hZE5hdiBmcm9tIFwiLi9saWIvZWxlbWVudC9uYXZpZ2F0aW9uLmpzXCI7IC8vIG5hdmlnYXRpb24gY2xpY2sgKG1vYmlsZSlcclxuaW1wb3J0IHsgdW5kZXJkZXYgfSBmcm9tIFwiLi9saWIvZGF0YS91bmRlcmRldi5qc1wiO1xyXG4vLyB0YWdzXHJcblxyXG4vLyBjb25zb2xlLmxvZyh1bmRlckRldilcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxubG9hZE5hdigpO1xyXG5sb2FkVGFncyh1bmRlcmRldixub3Nhaik7XHJcbmxvYWRPZmZpY2UoKTtcclxubG9hZEdhbWVzKCk7XHJcbmxvYWRlbmRwb2ludCgpO1xyXG5sb2FkRm9vdGVyKGxhaWNvcyk7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuaW1wb3J0ICcuL211YmFuL3N0eWxlcy9tZWRpYXF1ZXJ5LmNzcydcclxuaW1wb3J0ICcuL21lZGlhL2Jhbm5lcmltZy5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcyLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL3Byb2ZpbGVwaWN0dXJlLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2dpdGxpbnguanNvbidcclxuaW1wb3J0ICcuL21lZGlhL3NvY2lhbC5qc29uJ1xyXG5cclxuXHJcbiAgX193ZWJwYWNrX25vbmNlX18gPSAnPD89bm9uY2U/Pic7XHJcbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9