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
  };

  function configBannerImg(imgs){
    const mobileWidth = 950, banner1 = `./media/bannerimg.jpg`, banner2 = `./media/bannerimg2.jpg`
    return imgs.forEach(img=>document.body.clientWidth >= mobileWidth ? img.src = banner2 : img.src = banner1)
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
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/element/games.js */ "./src/lib/element/games.js");
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_element_games_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/element/navigation.js */ "./src/lib/element/navigation.js");
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_7__);
// client events




// elements
 // footer



 // navigation click (mobile)

//------------------------------------------------
_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_7___default()();
_lib_element_office_js__WEBPACK_IMPORTED_MODULE_5___default()();
_lib_element_games_js__WEBPACK_IMPORTED_MODULE_6___default()();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZy5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZzIuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvbWVkaWFxdWVyeS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL211YmFuL3N0eWxlcy90ZW1wbGF0ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2dhbWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9ldmVudHMvbG9hZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2V2ZW50cy9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9ldmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbG9uZG9uVG93ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2dvbGRlbkdhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9iYW5uZXJpbWcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9iYW5uZXJpbWcyLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gbG9hZGVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XHJcbiAgcmV0dXJuIG51bGxcclxufTtcclxuIiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IGZvb3RlciB0byBlbmQgcGFnZVxyXG4gICBjb25zb2xlLmxvZygnZm9vdGVyJylcclxufSIsIm1vZHVsZS5leHBvcnRzID0gbG9hZEdhbWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gZmV0Y2ggbWVkaWEgZW5kcG9pbnRcclxuICAgIC8vIGFzc2lnbiBjb2xvcnMgdG8gc2ltb24gYm9hcmRcclxuICAgIGNvbnN0IHNpbW9uID0ge1xyXG4gICAgICBjb2xvcnM6WydyZWQnLCdncmVlbicsJ2JsdWUnLCd5ZWxsb3cnXSxcclxuICAgICAgYXJyOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW1vbi1ib2QnKSxcclxuICAgIH1cclxuICAgIHNpbW9uLmFyci5mb3JFYWNoKChibG9jayxpZHgpPT57XHJcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYGJsb2NrLSR7c2ltb24uY29sb3JzW2lkeF19YClcclxuICAgIH0pXHJcbiAgICBcclxuICB9O1xyXG4gICIsImNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXInKVxyXG5jb25zdCBhbGxlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKVxyXG5jb25zdCB3b3JrY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmsnKVxyXG5jb25zdCBuYXZpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdC1pdGVtJylcclxuY29uc29sZS5sb2cod29ya2NvbilcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZE5hdiA9ICgpID0+IHtcclxuIC8vIHdpbmRvdyBjbGljayBldmVudFxyXG4gIHdpbmRvdy5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cclxuICAgIGxldCBuYXZUb3AgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSwgbmF2TGVmdCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54LCBib3VuZGFyaWVzID0gcG9zLnggPCBuYXZMZWZ0IHx8IHBvcy55IDwgbmF2VG9wXHJcbiAgICBpZiAoYm91bmRhcmllcyAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtYnV0dG9uLW1vYmlsZScpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgICAgICByZXN0b3JlQmFja2dyb3VuZCh3b3JrY29uKVxyXG4gICAgICB9XHJcbiAgfVxyXG4vLyBuYXYgY2xpY2sgZXZlbnRcclxuICBuYXZidG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlbi1uYXZcIikpIHtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW5hdlwiKTtcclxuICAgIH1cclxuICAgIC8vIGlmIG5hdiBpcyBub3QgZGlzcGxheWVkXHJcbiAgICBpZighL3Nob3ctbmF2Ly50ZXN0KG5hdi5jbGFzc0xpc3RbJ3ZhbHVlJ10pKSB7XHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgLy8gdW5ibHVyIGJnXHJcbiAgICAgICAgcmVzdG9yZUJhY2tncm91bmQod29ya2NvbilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAvLyBpZiBuYXYgaXMgZGlzcGxheWVkXHJcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxyXG4gICAgICAvLyBibHVyIGJhY2tncm91bmRcclxuICAgICAgYmx1ckJhY2tncm91bmQod29ya2NvbilcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYmx1ckJhY2tncm91bmQoZWxlbSl7XHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKCdibHVyLWVsZW1lbnQtc20nKVxyXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlcicpXHJcbn1cclxuZnVuY3Rpb24gcmVzdG9yZUJhY2tncm91bmQoZWxlbSl7XHJcbiAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdibHVyLWVsZW1lbnQtc20nKVxyXG4gIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlcicpXHJcbiB9XHJcblxyXG4gZnVuY3Rpb24gZXh0ZW5kTmF2T3B0KGFycil7XHJcbiAgYXJyLmZvckVhY2gobGk9PntcclxuICAgIC8vIG9uY2xpY2tzXHJcbiAgICBsaS5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IGFydGljbGUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF1cclxuICAgICAgLy8gZXh0ZW5kIGFydGljbGUncyBjYXBhYmlsaXRpZXMgdG8gdGhlIHBhcmVudCAobmF2IGxpbmspXHJcbiAgICAgIGNvbnNvbGUubG9nKGFydGljbGUpXHJcbiAgICAgIHdpbmRvdy5vcGVuKGFydGljbGUuaHJlZiwnX2JsYW5rJylcclxuICAgIH1cclxuICB9KVxyXG4gfVxyXG4gZXh0ZW5kTmF2T3B0KG5hdml0ZW1zKSIsIm1vZHVsZS5leHBvcnRzID0gbG9hZG9mZmljZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH07XHJcbiAgIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25sb2FkID0gKGUpID0+IHtcclxuICAgIC8vIGJhbm5lclxyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuICAgIC8vIGxldCBzaWx2ZXIgPSAnYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdHJhbnNwYXJlbnQscmdiYSgyNDYsIDI0MiwgMTM5LCAwLjQ0KSx0cmFuc3BhcmVudCk7J1xyXG4gICAgLy8gbGV0IHdoaXRlID0gJ2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXHJcbiAgXHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgJ3B4J1xyXG4gICAgLy8gYmFubmVyIGFwcGVhcnMgb24gbG9hZFxyXG4gICAgaWYoYmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLWJhbm5lcicpKXtcclxuICAgICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1iYW5uZXInKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHN3aXRjaCBiYW5uZXIgYi93IGRlc2t0b3AgJiBtb2JpbGVcclxuICAgIGNvbmZpZ0Jhbm5lckltZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BhY2UtaW1nJykpXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gY29uZmlnQmFubmVySW1nKGltZ3Mpe1xyXG4gICAgY29uc3QgbW9iaWxlV2lkdGggPSA5NTAsIGJhbm5lcjEgPSBgLi9tZWRpYS9iYW5uZXJpbWcuanBnYCwgYmFubmVyMiA9IGAuL21lZGlhL2Jhbm5lcmltZzIuanBnYFxyXG4gICAgcmV0dXJuIGltZ3MuZm9yRWFjaChpbWc9PmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPj0gbW9iaWxlV2lkdGggPyBpbWcuc3JjID0gYmFubmVyMiA6IGltZy5zcmMgPSBiYW5uZXIxKVxyXG4gIH1cclxuICAgICAgIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25yZXNpemUgPSAoZSkgPT4ge1xyXG4gICAgLy8gbWV0aG9kXHJcbiAgICBjb25maWdCYW5uZXJJbWcoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYWNlLWltZycpKVxyXG4gICAgICB9O1xyXG5cclxuICBmdW5jdGlvbiBjb25maWdCYW5uZXJJbWcoaW1ncyl7XHJcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXHJcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXHJcbiAgfVxyXG4gICAgICAgICAgIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBsaW1pdCA9IDE1MDtcclxuY29uc3QgZGJkc2hyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYmRzLWhyXCIpO1xyXG5jb25zdCBtaWRzY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5kYmRzaHIuc3R5bGUudG9wID0gbWlkc2NyZWVuICsgXCJweFwiO1xyXG5cclxuLy8gZWxvbmdhdGUgd29yay1jb250YWluZXIgc2VjdGlvbiBvbiBzY3JvbGxcclxuY29uc3QgbGlzdGVuU2Nyb2xsID0gKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gIH1cclxufTtcclxuXHJcbndvcmtDb24uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5TY3JvbGwpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGNsaWVudCBldmVudHNcclxuaW1wb3J0IFwiLi9saWIvZXZlbnRzL2xvYWQuanNcIjtcclxuaW1wb3J0IFwiLi9saWIvZXZlbnRzL3Njcm9sbC5qc1wiO1xyXG5pbXBvcnQgXCIuL2xpYi9ldmVudHMvcmVzaXplLmpzXCI7XHJcblxyXG4vLyBlbGVtZW50c1xyXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9saWIvZWxlbWVudC9mb290ZXIuanNcIjsgLy8gZm9vdGVyXHJcbmltcG9ydCBsb2FkZW5kcG9pbnQgZnJvbSAnLi9saWIvZWxlbWVudC9lbmRwb2ludC5qcydcclxuaW1wb3J0IGxvYWRPZmZpY2UgZnJvbSAnLi9saWIvZWxlbWVudC9vZmZpY2UuanMnXHJcbmltcG9ydCBsb2FkR2FtZXMgZnJvbSAnLi9saWIvZWxlbWVudC9nYW1lcy5qcydcclxuaW1wb3J0IGxvYWROYXYgZnJvbSBcIi4vbGliL2VsZW1lbnQvbmF2aWdhdGlvbi5qc1wiOyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5sb2FkTmF2KCk7XHJcbmxvYWRPZmZpY2UoKTtcclxubG9hZEdhbWVzKCk7XHJcbmxvYWRlbmRwb2ludCgpO1xyXG5sb2FkRm9vdGVyKCk7XHJcbiIsIi8vIGluamVjdGlvbnNcclxuaW1wb3J0ICcuL211YmFuL3N0eWxlcy90ZW1wbGF0ZS5jc3MnXHJcbmltcG9ydCAnLi9tdWJhbi9zdHlsZXMvbWVkaWFxdWVyeS5jc3MnXHJcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvYmFubmVyaW1nMi5qcGcnXHJcblxyXG5cclxuICBfX3dlYnBhY2tfbm9uY2VfXyA9ICc8Pz1ub25jZT8+JztcclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=