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

/***/ "./src/media/cat1.webp":
/*!*****************************!*\
  !*** ./src/media/cat1.webp ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/cat1.webp");

/***/ }),

/***/ "./src/media/cat2.webp":
/*!*****************************!*\
  !*** ./src/media/cat2.webp ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/cat2.webp");

/***/ }),

/***/ "./src/media/cat3.jpg":
/*!****************************!*\
  !*** ./src/media/cat3.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/cat3.jpg");

/***/ }),

/***/ "./src/media/dog1.jpg":
/*!****************************!*\
  !*** ./src/media/dog1.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/dog1.jpg");

/***/ }),

/***/ "./src/media/dog2.jpg":
/*!****************************!*\
  !*** ./src/media/dog2.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/dog2.jpg");

/***/ }),

/***/ "./src/media/dog3.jpg":
/*!****************************!*\
  !*** ./src/media/dog3.jpg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "/media/dog3.jpg");

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

const endpointContainer = document.querySelector(".end-point-container");
const endpointImg = document.querySelector(".end-point-img");
const article = endpointImg.parentElement;
const fw = document.querySelectorAll(".forward");
const pv = document.querySelectorAll(".prev");

const stunPointer = () => {
    let fingers = [...fw,...pv]
  fingers.forEach((f) => {
    f.classList.add("no-pointer");
  });
  setTimeout(() => {
    fingers.forEach((f) => {
      f.classList.remove("no-pointer");
    });
  }, 500);
};
module.exports = loadendpoint = async () => {
  // fetch media endpoint
  let files = await fetch("/api/media")
    .then((r) => r.json())
    .then((d) => [...d.media]);

  let target,
    src,
    idx = Math.floor(Math.random() * files.length);
  let startSrc = "./media/" + files[idx];
  endpointImg.src = startSrc;
  article.href = files[idx];

  for (target = 0; target < files.length; target++) {
    if (target == idx) {
      fw.forEach((el) => {
        el.onclick = (e) => {
          endpointImg.parentElement.classList.remove("left-to-right");
          endpointImg.parentElement.classList.remove("right-to-left");
          endpointImg.parentElement.classList.add('temp-opacity')

          setTimeout(() => {
            idx += 1;
            idx %= files.length;
            src = files[idx];
            endpointImg.parentElement.classList.add("left-to-right");
            endpointImg.parentElement.classList.remove('temp-opacity')

            endpointImg.src = `./media/${src}`;
            article.href = files[idx];
            console.log(idx);
            stunPointer();
          }, 100);
        };
      });

      pv.forEach((el) => {
        el.onclick = (e) => {
          endpointImg.parentElement.classList.remove("left-to-right");
          endpointImg.parentElement.classList.remove("right-to-left");
          endpointImg.parentElement.classList.add('temp-opacity')
          setTimeout(() => {
            idx -= 1;
            if (idx < 0) idx = files.length - 1;
            src = files[idx];
            endpointImg.src = `./media/${src}`;
            endpointImg.parentElement.classList.add("right-to-left");
            endpointImg.parentElement.classList.add('temp-opacity')
            article.href = files[idx];
            console.log(idx);
            stunPointer();
          }, 100);
        };
      });
    }
  }
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

/***/ "./src/lib/triggers/events/activate.js":
/*!*********************************************!*\
  !*** ./src/lib/triggers/events/activate.js ***!
  \*********************************************/
/***/ (function(module) {

const all = document.querySelectorAll("*");
const banner = document.getElementById("banner");
const footer = document.querySelector("footer");
const work = document.getElementById("work");
const mobBtn = document.getElementById("nav-button");
module.exports = activate = (modal) => {
  regBg();
  let bgElements = [work, banner, footer, mobBtn];
  let notMod = [...all].filter((x) => !x.classList.contains("modal-wrapper"));
  bgElements.map((o) => o.classList.remove("blur-element"));
  return [...notMod].map((y) => y.classList.remove("no-pointer"));
};

function regBg() {
  document.body.classList.add("reg-bg");
  document.body.classList.remove("modal-bg");
}

const activateDef = () => {
  let bgElements = [work, footer];
  bgElements.map((o) => o.classList.remove("blur-element-sm"));
  return [...bgElements].map((y) => y.classList.remove("no-pointer"));
};

module.exports = { activate, activateDef };


/***/ }),

/***/ "./src/lib/triggers/events/deactivate.js":
/*!***********************************************!*\
  !*** ./src/lib/triggers/events/deactivate.js ***!
  \***********************************************/
/***/ (function(module) {

const all = document.querySelectorAll("*");
const banner = document.getElementById("banner");
const footer = document.querySelector("footer");
const work = document.getElementById("work");
const mobBtn = document.getElementById("nav-button");
const deactivate = () => {
  modalBg();
  let bgElements = [work, banner, footer, mobBtn];
  let notMod = [...all].filter((x) => !x.classList.contains("modal-wrapper"));
  bgElements.map((o) => o.classList.add("blur-element"));
  return [...notMod].map((y) => y.classList.add("no-pointer"));
};

function modalBg() {
  document.body.classList.remove("reg-bg");
  document.body.classList.add("modal-bg");
}


const deactivateDef = () => {
  let bgElements = [work, footer];
  bgElements.map((o) => o.classList.add("blur-element-sm"));
  return [...bgElements].map((y) => y.classList.add("no-pointer"));
};


module.exports = {deactivate, deactivateDef}

/***/ }),

/***/ "./src/lib/triggers/events/load.js":
/*!*****************************************!*\
  !*** ./src/lib/triggers/events/load.js ***!
  \*****************************************/
/***/ (function(module) {

module.exports = window.onload = (e) => {
  // banner
  const banner = document.getElementById("banner");
  const modal = document.querySelector('.modal-wrapper')
  const nav = document.getElementById("nav");
  const worksecs = document.querySelectorAll('.w-container')
  let silver = 'background-image:linear-gradient(45deg,transparent,rgba(246, 242, 139, 0.44),transparent);'
  let white = 'background-image:linear-gradient(-45deg,transparent,rgba(246, 242, 139, 0.44),transparent);'

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
    

/***/ }),

/***/ "./src/lib/triggers/events/modals.js":
/*!*******************************************!*\
  !*** ./src/lib/triggers/events/modals.js ***!
  \*******************************************/
/***/ (function(module) {

const modal = document.querySelector('.modal-wrapper')
// modal appears
 const showModal = (deactivate) => {
    setTimeout(()=>{
        if(modal.classList.contains('hidden-modal')){
            modal.classList.remove('hidden-modal')
            deactivate(modal)
        }
    },2000)
}
// modal is hidden
const hideModal = (activate) => {
        if(!modal.classList.contains('hidden-modal')){
            modal.classList.add('hidden-modal')
            activate(modal)
        }
}

module.exports = { showModal,hideModal }

/***/ }),

/***/ "./src/lib/triggers/events/navigation.js":
/*!***********************************************!*\
  !*** ./src/lib/triggers/events/navigation.js ***!
  \***********************************************/
/***/ (function(module) {

const nav = document.getElementById("nav");
const navbtn = document.getElementById("nav-button");
const banner = document.getElementById('banner')
const stars = document.querySelectorAll('.star')
let navPos;

module.exports = loadtoggleNav = (enableScroll,disableScroll,activateDef,deactivateDef) => {
 // window click event
  window.onclick = e => {
    const pos = {x:e.pageX,y:e.pageY}
    let navTop = nav.getBoundingClientRect().y, navLeft = nav.getBoundingClientRect().x, boundaries = pos.x < navLeft || pos.y < navTop
    if (boundaries && !e.target.classList.contains('nav-button-mobile')) {
        nav.classList.remove("show-nav");
        enableScroll()
        activateDef()
        stars[0].classList.add('star-reg')
        stars[0].classList.remove('star-hide')
        stars[1].classList.remove('star-reg')
        stars[1].classList.add('star-hide')
      }
  }
// nav click event
  navbtn.onclick = (e) => {
    console.log('nav clicked')
    if (nav.classList.contains("hidden-nav")) {
      nav.classList.toggle("show-nav");
    }
    if(!/show-nav/.test(nav.classList['value'])) {
        enableScroll()
        activateDef()
        stars[0].classList.add('star-reg')
        stars[0].classList.remove('star-hide')
        stars[1].classList.remove('star-reg')
        stars[1].classList.add('star-hide')
    }
    else{
      disableScroll()
      deactivateDef()
      stars[0].classList.remove('star-reg')
      stars[0].classList.add('star-hide')
      stars[1].classList.add('star-reg')
      stars[1].classList.remove('star-hide')
    }
  };
};


/***/ }),

/***/ "./src/lib/triggers/events/scroll.js":
/*!*******************************************!*\
  !*** ./src/lib/triggers/events/scroll.js ***!
  \*******************************************/
/***/ (function(module) {

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
/* harmony import */ var _muban_styles_template_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./muban/styles/template.css */ "./src/muban/styles/template.css");
/* harmony import */ var _media_cat1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media/cat1.webp */ "./src/media/cat1.webp");
/* harmony import */ var _media_cat2_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/cat2.webp */ "./src/media/cat2.webp");
/* harmony import */ var _media_cat3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/cat3.jpg */ "./src/media/cat3.jpg");
/* harmony import */ var _media_dog1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/dog1.jpg */ "./src/media/dog1.jpg");
/* harmony import */ var _media_dog2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media/dog2.jpg */ "./src/media/dog2.jpg");
/* harmony import */ var _media_dog3_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media/dog3.jpg */ "./src/media/dog3.jpg");
/* harmony import */ var _media_bannerimg_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/bannerimg.jpg */ "./src/media/bannerimg.jpg");
// injections










  __webpack_require__.nc = '<?=nonce?>';


}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./src/goldenGate.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_triggers_events_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/triggers/events/load.js */ "./src/lib/triggers/events/load.js");
/* harmony import */ var _lib_triggers_events_load_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_load_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/element/footer.js */ "./src/lib/element/footer.js");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/element/endpoint.js */ "./src/lib/element/endpoint.js");
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/triggers/events/activate.js */ "./src/lib/triggers/events/activate.js");
/* harmony import */ var _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/triggers/events/deactivate.js */ "./src/lib/triggers/events/deactivate.js");
/* harmony import */ var _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/triggers/events/navigation.js */ "./src/lib/triggers/events/navigation.js");
/* harmony import */ var _lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/triggers/events/modals.js */ "./src/lib/triggers/events/modals.js");
/* harmony import */ var _lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/triggers/events/scroll.js */ "./src/lib/triggers/events/scroll.js");
/* harmony import */ var _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_7__);
// web page functionality
// imports
 // window events
 // footer


 // deactivate all elements except modal
 // navigation click (mobile)
 // test - modal view


// functions
// showModal(deactivate);
// setTimeout(() => {
//   hideModal(activate);
// }, 4000);
_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1___default()();
_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_5___default()(_lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_7__.enableScroll, _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_7__.disableScroll, _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_3__.activateDef, _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_4__.deactivateDef);
_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_2___default()();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ29DO0FBQ1Y7QUFDQTtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0s7QUFDOUI7QUFDQTtBQUNBLEVBQUUsc0JBQWlCO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDdUMsQ0FBQztBQUNTLENBQUM7QUFDRTtBQUNzQjtBQUNNLENBQUM7QUFDakIsQ0FBQztBQUNNLENBQUM7QUFDTTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZEQUFVO0FBQ1YseUVBQWEsQ0FBQyx3RUFBWSxFQUFFLHlFQUFhLEVBQUUseUVBQVcsRUFBRSw2RUFBYTtBQUNyRSwrREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2Jhbm5lcmltZy5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2NhdDEud2VicCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvY2F0Mi53ZWJwIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9jYXQzLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvZG9nMS5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2RvZzIuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9kb2czLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9hY3RpdmF0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9kZWFjdGl2YXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbW9kYWxzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbG9uZG9uVG93ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2dvbGRlbkdhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9iYW5uZXJpbWcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9jYXQxLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2NhdDIud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvY2F0My5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2RvZzEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9kb2cyLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvZG9nMy5qcGdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBlbmRwb2ludENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kLXBvaW50LWNvbnRhaW5lclwiKTtcclxuY29uc3QgZW5kcG9pbnRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZC1wb2ludC1pbWdcIik7XHJcbmNvbnN0IGFydGljbGUgPSBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50O1xyXG5jb25zdCBmdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yd2FyZFwiKTtcclxuY29uc3QgcHYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZcIik7XHJcblxyXG5jb25zdCBzdHVuUG9pbnRlciA9ICgpID0+IHtcclxuICAgIGxldCBmaW5nZXJzID0gWy4uLmZ3LC4uLnB2XVxyXG4gIGZpbmdlcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgZi5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKTtcclxuICB9KTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGZpbmdlcnMuZm9yRWFjaCgoZikgPT4ge1xyXG4gICAgICBmLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpO1xyXG4gICAgfSk7XHJcbiAgfSwgNTAwKTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkZW5kcG9pbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gZmV0Y2ggbWVkaWEgZW5kcG9pbnRcclxuICBsZXQgZmlsZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvbWVkaWFcIilcclxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgIC50aGVuKChkKSA9PiBbLi4uZC5tZWRpYV0pO1xyXG5cclxuICBsZXQgdGFyZ2V0LFxyXG4gICAgc3JjLFxyXG4gICAgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmlsZXMubGVuZ3RoKTtcclxuICBsZXQgc3RhcnRTcmMgPSBcIi4vbWVkaWEvXCIgKyBmaWxlc1tpZHhdO1xyXG4gIGVuZHBvaW50SW1nLnNyYyA9IHN0YXJ0U3JjO1xyXG4gIGFydGljbGUuaHJlZiA9IGZpbGVzW2lkeF07XHJcblxyXG4gIGZvciAodGFyZ2V0ID0gMDsgdGFyZ2V0IDwgZmlsZXMubGVuZ3RoOyB0YXJnZXQrKykge1xyXG4gICAgaWYgKHRhcmdldCA9PSBpZHgpIHtcclxuICAgICAgZncuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxlZnQtdG8tcmlnaHRcIik7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC10by1sZWZ0XCIpO1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9wYWNpdHknKVxyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZHggKz0gMTtcclxuICAgICAgICAgICAgaWR4ICU9IGZpbGVzLmxlbmd0aDtcclxuICAgICAgICAgICAgc3JjID0gZmlsZXNbaWR4XTtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibGVmdC10by1yaWdodFwiKTtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0ZW1wLW9wYWNpdHknKVxyXG5cclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcuc3JjID0gYC4vbWVkaWEvJHtzcmN9YDtcclxuICAgICAgICAgICAgYXJ0aWNsZS5ocmVmID0gZmlsZXNbaWR4XTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWR4KTtcclxuICAgICAgICAgICAgc3R1blBvaW50ZXIoKTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwdi5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdC10by1yaWdodFwiKTtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInJpZ2h0LXRvLWxlZnRcIik7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RlbXAtb3BhY2l0eScpXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWR4IC09IDE7XHJcbiAgICAgICAgICAgIGlmIChpZHggPCAwKSBpZHggPSBmaWxlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBzcmMgPSBmaWxlc1tpZHhdO1xyXG4gICAgICAgICAgICBlbmRwb2ludEltZy5zcmMgPSBgLi9tZWRpYS8ke3NyY31gO1xyXG4gICAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJyaWdodC10by1sZWZ0XCIpO1xyXG4gICAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RlbXAtb3BhY2l0eScpXHJcbiAgICAgICAgICAgIGFydGljbGUuaHJlZiA9IGZpbGVzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkeCk7XHJcbiAgICAgICAgICAgIHN0dW5Qb2ludGVyKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IGZvb3RlciB0byBlbmQgcGFnZVxyXG4gICBjb25zb2xlLmxvZygnZm9vdGVyJylcclxufSIsImNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuY29uc3Qgd29yayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgbW9iQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFjdGl2YXRlID0gKG1vZGFsKSA9PiB7XHJcbiAgcmVnQmcoKTtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBiYW5uZXIsIGZvb3RlciwgbW9iQnRuXTtcclxuICBsZXQgbm90TW9kID0gWy4uLmFsbF0uZmlsdGVyKCh4KSA9PiAheC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC13cmFwcGVyXCIpKTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1lbGVtZW50XCIpKTtcclxuICByZXR1cm4gWy4uLm5vdE1vZF0ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZ0JnKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInJlZy1iZ1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1iZ1wiKTtcclxufVxyXG5cclxuY29uc3QgYWN0aXZhdGVEZWYgPSAoKSA9PiB7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgZm9vdGVyXTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1lbGVtZW50LXNtXCIpKTtcclxuICByZXR1cm4gWy4uLmJnRWxlbWVudHNdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWN0aXZhdGUsIGFjdGl2YXRlRGVmIH07XHJcbiIsImNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuY29uc3Qgd29yayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgbW9iQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5jb25zdCBkZWFjdGl2YXRlID0gKCkgPT4ge1xyXG4gIG1vZGFsQmcoKTtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBiYW5uZXIsIGZvb3RlciwgbW9iQnRuXTtcclxuICBsZXQgbm90TW9kID0gWy4uLmFsbF0uZmlsdGVyKCh4KSA9PiAheC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC13cmFwcGVyXCIpKTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QuYWRkKFwiYmx1ci1lbGVtZW50XCIpKTtcclxuICByZXR1cm4gWy4uLm5vdE1vZF0ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5hZGQoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1vZGFsQmcoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicmVnLWJnXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnXCIpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVhY3RpdmF0ZURlZiA9ICgpID0+IHtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBmb290ZXJdO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5hZGQoXCJibHVyLWVsZW1lbnQtc21cIikpO1xyXG4gIHJldHVybiBbLi4uYmdFbGVtZW50c10ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5hZGQoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtkZWFjdGl2YXRlLCBkZWFjdGl2YXRlRGVmfSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgLy8gYmFubmVyXHJcbiAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgY29uc3Qgd29ya3NlY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudy1jb250YWluZXInKVxyXG4gIGxldCBzaWx2ZXIgPSAnYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoNDVkZWcsdHJhbnNwYXJlbnQscmdiYSgyNDYsIDI0MiwgMTM5LCAwLjQ0KSx0cmFuc3BhcmVudCk7J1xyXG4gIGxldCB3aGl0ZSA9ICdiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtNDVkZWcsdHJhbnNwYXJlbnQscmdiYSgyNDYsIDI0MiwgMTM5LCAwLjQ0KSx0cmFuc3BhcmVudCk7J1xyXG5cclxuICB3b3Jrc2Vjcy5mb3JFYWNoKCh3LGkpPT57XHJcbiAgICByZXR1cm4gaSUyPT0wP3cuc3R5bGUgPSBzaWx2ZXIgOiB3LnN0eWxlID0gd2hpdGU7XHJcbiAgfSlcclxuXHJcbiAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodFxyXG4gIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyAncHgnXHJcbiAgLy8gYmFubmVyIGFwcGVhcnMgb24gbG9hZFxyXG4gIGlmKGJhbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1iYW5uZXInKSl7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJhbm5lcicpXHJcbiAgfVxyXG5cclxuICAvLyBwcmVzZXQgbW9kYWwgaGVpZ2h0IHRvIGhhbGYgdGhlIHBhZ2UncyBoZWlnaHRcclxuICBtb2RhbC5zdHlsZS50b3AgPSAod2luZG93LmlubmVySGVpZ2h0LzIpLShtb2RhbC5jbGllbnRIZWlnaHQvMikgKyAncHgnO1xyXG4gIFxyXG59O1xyXG4gICAgIiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbi8vIG1vZGFsIGFwcGVhcnNcclxuIGNvbnN0IHNob3dNb2RhbCA9IChkZWFjdGl2YXRlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGUobW9kYWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDAwKVxyXG59XHJcbi8vIG1vZGFsIGlzIGhpZGRlblxyXG5jb25zdCBoaWRlTW9kYWwgPSAoYWN0aXZhdGUpID0+IHtcclxuICAgICAgICBpZighbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlKG1vZGFsKVxyXG4gICAgICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHNob3dNb2RhbCxoaWRlTW9kYWwgfSIsImNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXInKVxyXG5jb25zdCBzdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJylcclxubGV0IG5hdlBvcztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZHRvZ2dsZU5hdiA9IChlbmFibGVTY3JvbGwsZGlzYWJsZVNjcm9sbCxhY3RpdmF0ZURlZixkZWFjdGl2YXRlRGVmKSA9PiB7XHJcbiAvLyB3aW5kb3cgY2xpY2sgZXZlbnRcclxuICB3aW5kb3cub25jbGljayA9IGUgPT4ge1xyXG4gICAgY29uc3QgcG9zID0ge3g6ZS5wYWdlWCx5OmUucGFnZVl9XHJcbiAgICBsZXQgbmF2VG9wID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIG5hdkxlZnQgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCwgYm91bmRhcmllcyA9IHBvcy54IDwgbmF2TGVmdCB8fCBwb3MueSA8IG5hdlRvcFxyXG4gICAgaWYgKGJvdW5kYXJpZXMgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWJ1dHRvbi1tb2JpbGUnKSkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1uYXZcIik7XHJcbiAgICAgICAgZW5hYmxlU2Nyb2xsKClcclxuICAgICAgICBhY3RpdmF0ZURlZigpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgIH1cclxuICB9XHJcbi8vIG5hdiBjbGljayBldmVudFxyXG4gIG5hdmJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCduYXYgY2xpY2tlZCcpXHJcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlbi1uYXZcIikpIHtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW5hdlwiKTtcclxuICAgIH1cclxuICAgIGlmKCEvc2hvdy1uYXYvLnRlc3QobmF2LmNsYXNzTGlzdFsndmFsdWUnXSkpIHtcclxuICAgICAgICBlbmFibGVTY3JvbGwoKVxyXG4gICAgICAgIGFjdGl2YXRlRGVmKClcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGRpc2FibGVTY3JvbGwoKVxyXG4gICAgICBkZWFjdGl2YXRlRGVmKClcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLWhpZGUnKVxyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBsaW1pdCA9IDE1MDtcclxuY29uc3QgZGJkc2hyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYmRzLWhyXCIpO1xyXG5jb25zdCB3b3Jrc2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b3JrLXNlY3Rpb25cIik7XHJcbmNvbnN0IG1pZHNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbmNvbnN0IGVuZFAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1zZWNcIik7XHJcbmxldCBkYmRzZmlncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGJkcy1maWd1cmVcIik7XHJcbmRiZHNoci5zdHlsZS50b3AgPSBtaWRzY3JlZW4gKyBcInB4XCI7XHJcbmNvbnN0IGhhbmRsZVNsaWRlRWZmZWN0ID0gKGZpZ3MsIHNlY3Rpb25zKSA9PiB7XHJcbiAgLy8gaGFuZGxlIGFsbCBzZWN0aW9uc1xyXG4gIHNlY3Rpb25zLmZvckVhY2goKHNlYywgaW5kZXgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgc2VjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPD1cclxuICAgICAgZGJkc2hyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKyAxMFxyXG4gICAgKSB7XHJcbiAgICAgIHNlYy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1kYmRzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2VjLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWRiZHNcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgLy8gaGFuZGxlIGZpZ3VyZXMgaW4gZGJkc1xyXG4gIGZpZ3MuZm9yRWFjaCgoZmlnLCBpZHgpID0+IHtcclxuICAgIGlmIChpZHggJSAyID09IDApIHtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoXCJyb3ctcmV2XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPD0gZGJkc2hyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpIHtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWRiZHNcIik7XHJcbiAgICAgIGZpZy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1kYmRzXCIpO1xyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZShcImltZy10cmFuc1wiKTtcclxuICAgICAgZmlnLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoXCJpbWctdHJhbnMtZGVmXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWRiZHNcIik7XHJcbiAgICAgIGZpZy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kYmRzXCIpO1xyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZChcImltZy10cmFuc1wiKTtcclxuICAgICAgZmlnLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJpbWctdHJhbnMtZGVmXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5sZXQgc3RhcnREZWcgPSA4O1xyXG5sZXQgc3RhcnRQeCA9IC0xMDA7XHJcbmxldCB0cmFja1NjID0gW107XHJcbmNvbnN0IGhhbmRsZVJvdGF0ZVNjcm9sbCA9IChlbGVtLCBlKSA9PiB7XHJcbiAgdHJhY2tTYy5wdXNoKGUudGFyZ2V0LnNjcm9sbFRvcCk7XHJcbiAgdHJhY2tlciA9IFsuLi50cmFja1NjXS5zbGljZSgtMik7XHJcbiAgbGV0IHVwID0gdHJhY2tlclswXSA+IHRyYWNrZXJbMV07XHJcbiAgbGV0IGRvd24gPSB0cmFja2VyWzFdID4gdHJhY2tlclswXTtcclxuICBpZiAoXHJcbiAgICAhZW5kUC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRlLWRiZHNcIikgJiZcclxuICAgIGVuZFAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSArIGVuZFAuY2xpZW50SGVpZ2h0ID49IGJhbm5lci5jbGllbnRIZWlnaHRcclxuICApIHtcclxuICAgIGlmICh1cCAmJiBzdGFydERlZyA8PSA4KSB7XHJcbiAgICAgIHN0YXJ0RGVnICs9IDE7XHJcbiAgICAgIHN0YXJ0UHggKz0gMTtcclxuICAgICAgZWxlbS5zdHlsZSA9IGB0cmFuc2Zvcm06cm90YXRlKCR7c3RhcnREZWd9ZGVnKTtgO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvd24gJiYgc3RhcnREZWcgPiAwKSB7XHJcbiAgICAgIHN0YXJ0RGVnIC09IDE7XHJcbiAgICAgIHN0YXJ0UHggLT0gMTtcclxuICAgICAgZWxlbS5zdHlsZSA9IGB0cmFuc2Zvcm06cm90YXRlKCR7c3RhcnREZWd9ZGVnKTtgO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuLy8gZWxvbmdhdGUgd29yay1jb250YWluZXIgc2VjdGlvbiBvbiBzY3JvbGxcclxuY29uc3QgbGlzdGVuU2Nyb2xsID0gKGUpID0+IHtcclxuICBsZXQgZmlncyA9IFsuLi5kYmRzZmlnc107XHJcbiAgbGV0IHNlY3Rpb25zID0gWy4uLndvcmtzZWNdO1xyXG4gIGhhbmRsZVNsaWRlRWZmZWN0KGZpZ3MsIHNlY3Rpb25zKTtcclxuICBoYW5kbGVSb3RhdGVTY3JvbGwoZW5kUCwgZSk7XHJcbiAgaWYgKGUudGFyZ2V0LnNjcm9sbFRvcCA+PSBsaW1pdCkge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItcmVnXCIpO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItc21cIik7XHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItcmVnXCIpO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItc21cIik7XHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcclxuICB9XHJcbn07XHJcbndvcmtDb24uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5TY3JvbGwpO1xyXG5cclxuLy8gZGlzYWJsZSBzcm9sbCBmb3IgbWFpbiBjb250ZW50XHJcbmNvbnN0IGRpc2FibGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QucmVtb3ZlKFwieWVzLXNjcm9sbFwiKTtcclxuICB3b3JrQ29uLmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIik7XHJcbn07XHJcbi8vIGVuYWJsZSBzcm9sbCBmb3IgbWFpbiBjb250ZW50XHJcbmNvbnN0IGVuYWJsZVNjcm9sbCA9ICgpID0+IHtcclxuICB3b3JrQ29uLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ5ZXMtc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBlbmFibGVTY3JvbGwsIGRpc2FibGVTY3JvbGwgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmplY3Rpb25zXHJcbmltcG9ydCAnLi9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzJ1xyXG5pbXBvcnQgJy4vbWVkaWEvY2F0MS53ZWJwJ1xyXG5pbXBvcnQgJy4vbWVkaWEvY2F0Mi53ZWJwJ1xyXG5pbXBvcnQgJy4vbWVkaWEvY2F0My5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9kb2cxLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2RvZzIuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvZG9nMy5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcuanBnJ1xyXG5cclxuXHJcbiAgX193ZWJwYWNrX25vbmNlX18gPSAnPD89bm9uY2U/Pic7XHJcblxyXG4iLCIvLyB3ZWIgcGFnZSBmdW5jdGlvbmFsaXR5XHJcbi8vIGltcG9ydHNcclxuaW1wb3J0IFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2xvYWQuanNcIjsgLy8gd2luZG93IGV2ZW50c1xyXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9saWIvZWxlbWVudC9mb290ZXIuanNcIjsgLy8gZm9vdGVyXHJcbmltcG9ydCBsb2FkZW5kcG9pbnQgZnJvbSAnLi9saWIvZWxlbWVudC9lbmRwb2ludC5qcydcclxuaW1wb3J0IHsgYWN0aXZhdGUsIGFjdGl2YXRlRGVmIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9hY3RpdmF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWFjdGl2YXRlLCBkZWFjdGl2YXRlRGVmIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9kZWFjdGl2YXRlLmpzXCI7IC8vIGRlYWN0aXZhdGUgYWxsIGVsZW1lbnRzIGV4Y2VwdCBtb2RhbFxyXG5pbXBvcnQgbG9hZHRvZ2dsZU5hdiBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL25hdmlnYXRpb24uanNcIjsgLy8gbmF2aWdhdGlvbiBjbGljayAobW9iaWxlKVxyXG5pbXBvcnQgeyBzaG93TW9kYWwsIGhpZGVNb2RhbCB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbW9kYWxzLmpzXCI7IC8vIHRlc3QgLSBtb2RhbCB2aWV3XHJcbmltcG9ydCB7IGRpc2FibGVTY3JvbGwsIGVuYWJsZVNjcm9sbCB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvc2Nyb2xsLmpzXCI7XHJcblxyXG4vLyBmdW5jdGlvbnNcclxuLy8gc2hvd01vZGFsKGRlYWN0aXZhdGUpO1xyXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuLy8gICBoaWRlTW9kYWwoYWN0aXZhdGUpO1xyXG4vLyB9LCA0MDAwKTtcclxubG9hZEZvb3RlcigpO1xyXG5sb2FkdG9nZ2xlTmF2KGVuYWJsZVNjcm9sbCwgZGlzYWJsZVNjcm9sbCwgYWN0aXZhdGVEZWYsIGRlYWN0aXZhdGVEZWYpO1xyXG5sb2FkZW5kcG9pbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=