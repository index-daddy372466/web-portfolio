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

module.exports = loadFooter = () => {
    // set footer to end page
   console.log('footer')
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
const allelements = document.querySelectorAll('*')
const workcon = document.getElementById('work')
const navitems = document.querySelectorAll('.nav-list-item')
console.log(workcon)

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
  arr.forEach(li=>{
    // onclicks
    li.onclick = e => {
      const article = e.currentTarget.children[0]
      // extend article's capabilities to the parent (nav link)
      console.log(article)
      window.open(article.href,'_blank')
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


module.exports = loadTags = ([...captions]) => {
   let fcaptions = document.querySelectorAll('figcaption.f-caption')
   console.log(captions)
   let tagText = 'under development'
   fcaptions = [...fcaptions].filter(cap=>{
      // console.log(cap)
      const text = cap.textContent.toLowerCase();
      let capincluded = captions.includes(text);
      // if(capincluded)order.push(text)
      return capincluded
   })
   console.log(fcaptions)
   fcaptions.forEach(caption=>{
      let figure = caption.parentElement;
      let h3 = document.createElement('h3')
      h3.classList.add('tag-h3')
      h3.textContent = tagText;
      figure.append(h3)
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
    // let silver = 'background-image:linear-gradient(45deg,transparent,rgba(246, 242, 139, 0.44),transparent);'
    // let white = 'background-image:linear-gradient(-45deg,transparent,rgba(246, 242, 139, 0.44),transparent);'
  
    navPos = banner.clientHeight
    nav.style.top = navPos + 'px'
    // banner appears on load
    if(banner.classList.contains('hidden-banner')){
      banner.classList.remove('hidden-banner')
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
dbdshr.style.top = midscreen + "px";

// elongate work-container section on scroll
const listenScroll = (e) => {
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
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/element/footer.js */ "./src/lib/element/footer.js");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/element/endpoint.js */ "./src/lib/element/endpoint.js");
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_element_office_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/element/office.js */ "./src/lib/element/office.js");
/* harmony import */ var _lib_element_office_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_element_office_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_element_tags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/element/tags.js */ "./src/lib/element/tags.js");
/* harmony import */ var _lib_element_tags_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_element_tags_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/element/games.js */ "./src/lib/element/games.js");
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_element_games_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/element/navigation.js */ "./src/lib/element/navigation.js");
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_data_underdev_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/data/underdev.js */ "./src/lib/data/underdev.js");
// client events




// elements
 // footer




 // navigation click (mobile)

// tags

// console.log(underDev)
//------------------------------------------------
_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_8___default()();
_lib_element_tags_js__WEBPACK_IMPORTED_MODULE_6___default()(_lib_data_underdev_js__WEBPACK_IMPORTED_MODULE_9__.underdev);
_lib_element_office_js__WEBPACK_IMPORTED_MODULE_5___default()();
_lib_element_games_js__WEBPACK_IMPORTED_MODULE_7___default()();
_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_4___default()();
_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_3___default()();
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
// injections






  __webpack_require__.nc = '<?=nonce?>';
  
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrREFBZSxxQkFBdUIseUJBQXlCOzs7Ozs7Ozs7Ozs7QUNBL0QsK0RBQWUscUJBQXVCLDBCQUEwQjs7Ozs7Ozs7Ozs7O0FDQWhFOzs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7QUFDQSx1QkFBdUI7Ozs7Ozs7Ozs7QUNEdkI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRCxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrR0FBK0c7QUFDL0csK0dBQStHO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQ3ZCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUM4QjtBQUNFO0FBQ0E7O0FBRWhDO0FBQ2lELENBQUM7QUFDRTtBQUNKO0FBQ0o7QUFDRTtBQUNJLENBQUM7QUFDRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsaUVBQU87QUFDUCwyREFBUSxDQUFDLDJEQUFRO0FBQ2pCLDZEQUFVO0FBQ1YsNERBQVM7QUFDVCwrREFBWTtBQUNaLDZEQUFVLEc7Ozs7Ozs7Ozs7Ozs7QUN0QlY7QUFDb0M7QUFDRTtBQUNSO0FBQ0M7OztBQUcvQixFQUFFLHNCQUFpQjtBQUNuQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZy5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZzIuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvbWVkaWFxdWVyeS5jc3M/YTNmOCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcz8xN2U3Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZGF0YS91bmRlcmRldi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZ2FtZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L29mZmljZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvdGFncy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2V2ZW50cy9sb2FkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZXZlbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2V2ZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9sb25kb25Ub3dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvZ29sZGVuR2F0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2Jhbm5lcmltZy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2Jhbm5lcmltZzIuanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY3VycmVudCA9IFtcImNoYXRyb29tc1wiLFwic3FsXCJdXG5tb2R1bGUuZXhwb3J0cy51bmRlcmRldiA9IGN1cnJlbnQiLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRlbmRwb2ludCA9IGFzeW5jICgpID0+IHtcbiAgLy8gZmV0Y2ggbWVkaWEgZW5kcG9pbnRcbiAgcmV0dXJuIG51bGxcbn07XG4iLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbG9hZEZvb3RlciA9ICgpID0+IHtcbiAgICAvLyBzZXQgZm9vdGVyIHRvIGVuZCBwYWdlXG4gICBjb25zb2xlLmxvZygnZm9vdGVyJylcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRHYW1lcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxuICAgIC8vIGFzc2lnbiBjb2xvcnMgdG8gc2ltb24gYm9hcmRcbiAgICBjb25zdCBzaW1vbiA9IHtcbiAgICAgIGNvbG9yczpbJ3JlZCcsJ2dyZWVuJywnYmx1ZScsJ3llbGxvdyddLFxuICAgICAgYXJyOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW1vbi1ib2QnKSxcbiAgICB9XG4gICAgc2ltb24uYXJyLmZvckVhY2goKGJsb2NrLGlkeCk9PntcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYGJsb2NrLSR7c2ltb24uY29sb3JzW2lkeF19YClcbiAgICB9KVxuICAgIFxuICB9O1xuICAiLCJjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbmNvbnN0IG5hdmJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcbmNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXInKVxuY29uc3QgYWxsZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbmNvbnN0IHdvcmtjb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29yaycpXG5jb25zdCBuYXZpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdC1pdGVtJylcbmNvbnNvbGUubG9nKHdvcmtjb24pXG5cbm1vZHVsZS5leHBvcnRzID0gbG9hZE5hdiA9ICgpID0+IHtcbiAvLyB3aW5kb3cgY2xpY2sgZXZlbnRcbiAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cbiAgICBsZXQgbmF2VG9wID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIG5hdkxlZnQgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCwgYm91bmRhcmllcyA9IHBvcy54IDwgbmF2TGVmdCB8fCBwb3MueSA8IG5hdlRvcFxuICAgIGlmIChib3VuZGFyaWVzICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1idXR0b24tbW9iaWxlJykpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXG4gICAgICAgIHJlc3RvcmVCYWNrZ3JvdW5kKHdvcmtjb24pXG4gICAgICB9XG4gIH1cbi8vIG5hdiBjbGljayBldmVudFxuICBuYXZidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbmF2XCIpKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbmF2XCIpO1xuICAgIH1cbiAgICAvLyBpZiBuYXYgaXMgbm90IGRpc3BsYXllZFxuICAgIGlmKCEvc2hvdy1uYXYvLnRlc3QobmF2LmNsYXNzTGlzdFsndmFsdWUnXSkpIHtcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXG4gICAgICAgIC8vIHVuYmx1ciBiZ1xuICAgICAgICByZXN0b3JlQmFja2dyb3VuZCh3b3JrY29uKVxuICAgIH1cbiAgICBlbHNle1xuICAgIC8vIGlmIG5hdiBpcyBkaXNwbGF5ZWRcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxuICAgICAgLy8gYmx1ciBiYWNrZ3JvdW5kXG4gICAgICBibHVyQmFja2dyb3VuZCh3b3JrY29uKVxuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGJsdXJCYWNrZ3JvdW5kKGVsZW0pe1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2JsdXItZWxlbWVudC1zbScpXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlcicpXG59XG5mdW5jdGlvbiByZXN0b3JlQmFja2dyb3VuZChlbGVtKXtcbiAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdibHVyLWVsZW1lbnQtc20nKVxuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXBvaW50ZXInKVxuIH1cblxuIGZ1bmN0aW9uIGV4dGVuZE5hdk9wdChhcnIpe1xuICBhcnIuZm9yRWFjaChsaT0+e1xuICAgIC8vIG9uY2xpY2tzXG4gICAgbGkub25jbGljayA9IGUgPT4ge1xuICAgICAgY29uc3QgYXJ0aWNsZSA9IGUuY3VycmVudFRhcmdldC5jaGlsZHJlblswXVxuICAgICAgLy8gZXh0ZW5kIGFydGljbGUncyBjYXBhYmlsaXRpZXMgdG8gdGhlIHBhcmVudCAobmF2IGxpbmspXG4gICAgICBjb25zb2xlLmxvZyhhcnRpY2xlKVxuICAgICAgd2luZG93Lm9wZW4oYXJ0aWNsZS5ocmVmLCdfYmxhbmsnKVxuICAgIH1cbiAgfSlcbiB9XG4gZXh0ZW5kTmF2T3B0KG5hdml0ZW1zKSIsIm1vZHVsZS5leHBvcnRzID0gbG9hZG9mZmljZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxuICAgIHJldHVybiBudWxsXG4gIH07XG4gICIsIlxubW9kdWxlLmV4cG9ydHMgPSBsb2FkVGFncyA9IChbLi4uY2FwdGlvbnNdKSA9PiB7XG4gICBsZXQgZmNhcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmlnY2FwdGlvbi5mLWNhcHRpb24nKVxuICAgY29uc29sZS5sb2coY2FwdGlvbnMpXG4gICBsZXQgdGFnVGV4dCA9ICd1bmRlciBkZXZlbG9wbWVudCdcbiAgIGZjYXB0aW9ucyA9IFsuLi5mY2FwdGlvbnNdLmZpbHRlcihjYXA9PntcbiAgICAgIC8vIGNvbnNvbGUubG9nKGNhcClcbiAgICAgIGNvbnN0IHRleHQgPSBjYXAudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIGxldCBjYXBpbmNsdWRlZCA9IGNhcHRpb25zLmluY2x1ZGVzKHRleHQpO1xuICAgICAgLy8gaWYoY2FwaW5jbHVkZWQpb3JkZXIucHVzaCh0ZXh0KVxuICAgICAgcmV0dXJuIGNhcGluY2x1ZGVkXG4gICB9KVxuICAgY29uc29sZS5sb2coZmNhcHRpb25zKVxuICAgZmNhcHRpb25zLmZvckVhY2goY2FwdGlvbj0+e1xuICAgICAgbGV0IGZpZ3VyZSA9IGNhcHRpb24ucGFyZW50RWxlbWVudDtcbiAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgIGgzLmNsYXNzTGlzdC5hZGQoJ3RhZy1oMycpXG4gICAgICBoMy50ZXh0Q29udGVudCA9IHRhZ1RleHQ7XG4gICAgICBmaWd1cmUuYXBwZW5kKGgzKVxuICAgfSlcbiAgIFxufSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gICAgLy8gYmFubmVyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgLy8gbGV0IHNpbHZlciA9ICdiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXG4gICAgLy8gbGV0IHdoaXRlID0gJ2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXG4gIFxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHRcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgJ3B4J1xuICAgIC8vIGJhbm5lciBhcHBlYXJzIG9uIGxvYWRcbiAgICBpZihiYW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tYmFubmVyJykpe1xuICAgICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1iYW5uZXInKVxuICAgIH1cblxuICAgIC8vIHN3aXRjaCBiYW5uZXIgYi93IGRlc2t0b3AgJiBtb2JpbGVcbiAgICBjb25maWdCYW5uZXJJbWcoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYWNlLWltZycpKVxuICAgIGNsaWNrRmlnQ2FwdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZi1jYXB0aW9uJykpXG4gIH07XG5cbiAgLy8gc3dpdGNoIGJldHdlZW4gMiBiYW5uZXJzIGRlcGVuZGVudCBvbiBzY3JlZW4gd2lkdGhcbiAgZnVuY3Rpb24gY29uZmlnQmFubmVySW1nKGltZ3Mpe1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gOTUwLCBiYW5uZXIxID0gYC4vbWVkaWEvYmFubmVyaW1nLmpwZ2AsIGJhbm5lcjIgPSBgLi9tZWRpYS9iYW5uZXJpbWcyLmpwZ2BcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXG4gIH1cbiAgICAgIFxuICBmdW5jdGlvbiBjbGlja0ZpZ0NhcHRpb24oYXJyKXtcbiAgICBsZXQgdGFyZ2V0O1xuICAgIGFyci5mb3JFYWNoKGY9PntcbiAgICAgIGYub25jbGljayA9IGUgPT4ge1xuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQgPT0gZil7XG4gICAgICAgICAgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgIGNvbnN0IGFydGljbGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFydGljbGUuaHJlZilcbiAgICAgICAgICB3aW5kb3cub3BlbihhcnRpY2xlLmhyZWYsJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25yZXNpemUgPSAoZSkgPT4ge1xuICAgIC8vIG1ldGhvZFxuICAgIGNvbmZpZ0Jhbm5lckltZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BhY2UtaW1nJykpXG4gICAgICB9O1xuXG4gIGZ1bmN0aW9uIGNvbmZpZ0Jhbm5lckltZyhpbWdzKXtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXG4gICAgcmV0dXJuIGltZ3MuZm9yRWFjaChpbWc9PmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPj0gbW9iaWxlV2lkdGggPyBpbWcuc3JjID0gYmFubmVyMiA6IGltZy5zcmMgPSBiYW5uZXIxKVxuICB9XG4gICAgICAgICAgIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5jb25zdCBsaW1pdCA9IDE1MDtcbmNvbnN0IGRiZHNociA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGJkcy1oclwiKTtcbmNvbnN0IG1pZHNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5kYmRzaHIuc3R5bGUudG9wID0gbWlkc2NyZWVuICsgXCJweFwiO1xuXG4vLyBlbG9uZ2F0ZSB3b3JrLWNvbnRhaW5lciBzZWN0aW9uIG9uIHNjcm9sbFxuY29uc3QgbGlzdGVuU2Nyb2xsID0gKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0LnNjcm9sbFRvcCA+PSBsaW1pdCkge1xuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXJlZ1wiKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1zbVwiKTtcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0O1xuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItcmVnXCIpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXNtXCIpO1xuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcbiAgfVxufTtcblxud29ya0Nvbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlblNjcm9sbCk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGNsaWVudCBldmVudHNcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9sb2FkLmpzXCI7XG5pbXBvcnQgXCIuL2xpYi9ldmVudHMvc2Nyb2xsLmpzXCI7XG5pbXBvcnQgXCIuL2xpYi9ldmVudHMvcmVzaXplLmpzXCI7XG5cbi8vIGVsZW1lbnRzXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9saWIvZWxlbWVudC9mb290ZXIuanNcIjsgLy8gZm9vdGVyXG5pbXBvcnQgbG9hZGVuZHBvaW50IGZyb20gJy4vbGliL2VsZW1lbnQvZW5kcG9pbnQuanMnXG5pbXBvcnQgbG9hZE9mZmljZSBmcm9tICcuL2xpYi9lbGVtZW50L29mZmljZS5qcydcbmltcG9ydCBsb2FkVGFncyBmcm9tICcuL2xpYi9lbGVtZW50L3RhZ3MuanMnXG5pbXBvcnQgbG9hZEdhbWVzIGZyb20gJy4vbGliL2VsZW1lbnQvZ2FtZXMuanMnXG5pbXBvcnQgbG9hZE5hdiBmcm9tIFwiLi9saWIvZWxlbWVudC9uYXZpZ2F0aW9uLmpzXCI7IC8vIG5hdmlnYXRpb24gY2xpY2sgKG1vYmlsZSlcbmltcG9ydCB7IHVuZGVyZGV2IH0gZnJvbSBcIi4vbGliL2RhdGEvdW5kZXJkZXYuanNcIjtcbi8vIHRhZ3NcblxuLy8gY29uc29sZS5sb2codW5kZXJEZXYpXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxubG9hZE5hdigpO1xubG9hZFRhZ3ModW5kZXJkZXYpO1xubG9hZE9mZmljZSgpO1xubG9hZEdhbWVzKCk7XG5sb2FkZW5kcG9pbnQoKTtcbmxvYWRGb290ZXIoKTsiLCIvLyBpbmplY3Rpb25zXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcbmltcG9ydCAnLi9tdWJhbi9zdHlsZXMvbWVkaWFxdWVyeS5jc3MnXG5pbXBvcnQgJy4vbWVkaWEvYmFubmVyaW1nLmpwZydcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcyLmpwZydcblxuXG4gIF9fd2VicGFja19ub25jZV9fID0gJzw/PW5vbmNlPz4nO1xuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=