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
const worksec = document.querySelectorAll('.work-section')
const midscreen = window.innerHeight / 2;
let dbdsfigs = document.querySelectorAll('.dbds-figure')
dbdshr.style.top = midscreen + "px";
const handleSlideEffect = (figs,sections) => {
   // handle all sections
   sections.forEach((sec,index)=>{
    if(sec.getBoundingClientRect().y <= (dbdshr.getBoundingClientRect().y + 10)){
      sec.classList.remove('hide-dbds')
    } else {
      sec.classList.add('hide-dbds')
    }
  })
  // handle figures in dbds
  figs.forEach((fig,idx)=>{
    if(idx % 2 == 0){
      fig.classList.add('row-rev')
    } else { 
      fig.classList.add('row')
    }
    if(fig.getBoundingClientRect().y <= (dbdshr.getBoundingClientRect().y)){
      fig.classList.remove('hide-dbds')
      fig.children[0].children[0].classList.remove('hide-dbds')
      fig.children[1].children[0].classList.remove('img-trans')
      fig.children[1].children[0].classList.add('img-trans-def')
    } else {
      fig.classList.add('hide-dbds')
      fig.children[0].children[0].classList.add('hide-dbds')
      fig.children[1].children[0].classList.add('img-trans')
      fig.children[1].children[0].classList.remove('img-trans-def')
    }
  })

}
// elongate work-container section on scroll
const listenScroll = (e) => {
  let figs = [...dbdsfigs]
  let sections = [...worksec]
  handleSlideEffect(figs,sections)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrREFBZSxxQkFBdUIseUJBQXlCOzs7Ozs7Ozs7Ozs7QUNBL0QsK0RBQWUscUJBQXVCLHFCQUFxQjs7Ozs7Ozs7Ozs7O0FDQTNELCtEQUFlLHFCQUF1QixxQkFBcUI7Ozs7Ozs7Ozs7OztBQ0EzRCwrREFBZSxxQkFBdUIsb0JBQW9COzs7Ozs7Ozs7Ozs7QUNBMUQsK0RBQWUscUJBQXVCLG9CQUFvQjs7Ozs7Ozs7Ozs7O0FDQTFELCtEQUFlLHFCQUF1QixvQkFBb0I7Ozs7Ozs7Ozs7OztBQ0ExRCwrREFBZSxxQkFBdUIsb0JBQW9COzs7Ozs7Ozs7Ozs7QUNBMUQ7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7Ozs7QUN4Qm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7Ozs7Ozs7Ozs7QUMxQmxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7Ozs7OztBQ2xCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7O1VDekVuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDb0M7QUFDVjtBQUNBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDSztBQUM5QjtBQUNBO0FBQ0EsRUFBRSxzQkFBaUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUN1QyxDQUFDO0FBQ1MsQ0FBQztBQUNFO0FBQ3NCO0FBQ00sQ0FBQztBQUNqQixDQUFDO0FBQ00sQ0FBQztBQUNNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osNkRBQVU7QUFDVix5RUFBYSxDQUFDLHdFQUFZLEVBQUUseUVBQWEsRUFBRSx5RUFBVyxFQUFFLDZFQUFhO0FBQ3JFLCtEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvYmFubmVyaW1nLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvY2F0MS53ZWJwIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9jYXQyLndlYnAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2NhdDMuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9kb2cxLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvZG9nMi5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2RvZzMuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzPzE3ZTciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvYWN0aXZhdGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvZGVhY3RpdmF0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9sb2FkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvbmRvblRvd2VyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9nb2xkZW5HYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvYmFubmVyaW1nLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvY2F0MS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9jYXQyLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2NhdDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9kb2cxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvZG9nMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2RvZzMuanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZW5kcG9pbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZC1wb2ludC1jb250YWluZXJcIik7XHJcbmNvbnN0IGVuZHBvaW50SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmQtcG9pbnQtaW1nXCIpO1xyXG5jb25zdCBhcnRpY2xlID0gZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudDtcclxuY29uc3QgZncgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcndhcmRcIik7XHJcbmNvbnN0IHB2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2XCIpO1xyXG5cclxuY29uc3Qgc3R1blBvaW50ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmluZ2VycyA9IFsuLi5mdywuLi5wdl1cclxuICBmaW5nZXJzLmZvckVhY2goKGYpID0+IHtcclxuICAgIGYuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIik7XHJcbiAgfSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBmaW5nZXJzLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgZi5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlclwiKTtcclxuICAgIH0pO1xyXG4gIH0sIDUwMCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZGVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XHJcbiAgbGV0IGZpbGVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL21lZGlhXCIpXHJcbiAgICAudGhlbigocikgPT4gci5qc29uKCkpXHJcbiAgICAudGhlbigoZCkgPT4gWy4uLmQubWVkaWFdKTtcclxuXHJcbiAgbGV0IHRhcmdldCxcclxuICAgIHNyYyxcclxuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpbGVzLmxlbmd0aCk7XHJcbiAgbGV0IHN0YXJ0U3JjID0gXCIuL21lZGlhL1wiICsgZmlsZXNbaWR4XTtcclxuICBlbmRwb2ludEltZy5zcmMgPSBzdGFydFNyYztcclxuICBhcnRpY2xlLmhyZWYgPSBmaWxlc1tpZHhdO1xyXG5cclxuICBmb3IgKHRhcmdldCA9IDA7IHRhcmdldCA8IGZpbGVzLmxlbmd0aDsgdGFyZ2V0KyspIHtcclxuICAgIGlmICh0YXJnZXQgPT0gaWR4KSB7XHJcbiAgICAgIGZ3LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0LXRvLXJpZ2h0XCIpO1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtdG8tbGVmdFwiKTtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGVtcC1vcGFjaXR5JylcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWR4ICs9IDE7XHJcbiAgICAgICAgICAgIGlkeCAlPSBmaWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNyYyA9IGZpbGVzW2lkeF07XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxlZnQtdG8tcmlnaHRcIik7XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGVtcC1vcGFjaXR5JylcclxuXHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnNyYyA9IGAuL21lZGlhLyR7c3JjfWA7XHJcbiAgICAgICAgICAgIGFydGljbGUuaHJlZiA9IGZpbGVzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkeCk7XHJcbiAgICAgICAgICAgIHN0dW5Qb2ludGVyKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcHYuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxlZnQtdG8tcmlnaHRcIik7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC10by1sZWZ0XCIpO1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9wYWNpdHknKVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlkeCAtPSAxO1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkgaWR4ID0gZmlsZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgc3JjID0gZmlsZXNbaWR4XTtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcuc3JjID0gYC4vbWVkaWEvJHtzcmN9YDtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdG8tbGVmdFwiKTtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9wYWNpdHknKVxyXG4gICAgICAgICAgICBhcnRpY2xlLmhyZWYgPSBmaWxlc1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgICAgICAgICBzdHVuUG9pbnRlcigpO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZEZvb3RlciA9ICgpID0+IHtcclxuICAgIC8vIHNldCBmb290ZXIgdG8gZW5kIHBhZ2VcclxuICAgY29uc29sZS5sb2coJ2Zvb3RlcicpXHJcbn0iLCJjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IG1vYkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSBhY3RpdmF0ZSA9IChtb2RhbCkgPT4ge1xyXG4gIHJlZ0JnKCk7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgYmFubmVyLCBmb290ZXIsIG1vYkJ0bl07XHJcbiAgbGV0IG5vdE1vZCA9IFsuLi5hbGxdLmZpbHRlcigoeCkgPT4gIXguY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtd3JhcHBlclwiKSk7XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZWxlbWVudFwiKSk7XHJcbiAgcmV0dXJuIFsuLi5ub3RNb2RdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWdCZygpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJyZWctYmdcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmdcIik7XHJcbn1cclxuXHJcbmNvbnN0IGFjdGl2YXRlRGVmID0gKCkgPT4ge1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGZvb3Rlcl07XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZWxlbWVudC1zbVwiKSk7XHJcbiAgcmV0dXJuIFsuLi5iZ0VsZW1lbnRzXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IGFjdGl2YXRlLCBhY3RpdmF0ZURlZiB9O1xyXG4iLCJjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IG1vYkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcclxuY29uc3QgZGVhY3RpdmF0ZSA9ICgpID0+IHtcclxuICBtb2RhbEJnKCk7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgYmFubmVyLCBmb290ZXIsIG1vYkJ0bl07XHJcbiAgbGV0IG5vdE1vZCA9IFsuLi5hbGxdLmZpbHRlcigoeCkgPT4gIXguY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtd3JhcHBlclwiKSk7XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LmFkZChcImJsdXItZWxlbWVudFwiKSk7XHJcbiAgcmV0dXJuIFsuLi5ub3RNb2RdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtb2RhbEJnKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInJlZy1iZ1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1iZ1wiKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRlYWN0aXZhdGVEZWYgPSAoKSA9PiB7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgZm9vdGVyXTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QuYWRkKFwiYmx1ci1lbGVtZW50LXNtXCIpKTtcclxuICByZXR1cm4gWy4uLmJnRWxlbWVudHNdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7ZGVhY3RpdmF0ZSwgZGVhY3RpdmF0ZURlZn0iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gIC8vIGJhbm5lclxyXG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKVxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5cclxuICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0XHJcbiAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArICdweCdcclxuICAvLyBiYW5uZXIgYXBwZWFycyBvbiBsb2FkXHJcbiAgaWYoYmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLWJhbm5lcicpKXtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tYmFubmVyJylcclxuICB9XHJcblxyXG4gIC8vIHByZXNldCBtb2RhbCBoZWlnaHQgdG8gaGFsZiB0aGUgcGFnZSdzIGhlaWdodFxyXG4gIG1vZGFsLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMiktKG1vZGFsLmNsaWVudEhlaWdodC8yKSArICdweCc7XHJcbiAgXHJcbn07XHJcbiAgIiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbi8vIG1vZGFsIGFwcGVhcnNcclxuIGNvbnN0IHNob3dNb2RhbCA9IChkZWFjdGl2YXRlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGUobW9kYWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDAwKVxyXG59XHJcbi8vIG1vZGFsIGlzIGhpZGRlblxyXG5jb25zdCBoaWRlTW9kYWwgPSAoYWN0aXZhdGUpID0+IHtcclxuICAgICAgICBpZighbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlKG1vZGFsKVxyXG4gICAgICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHNob3dNb2RhbCxoaWRlTW9kYWwgfSIsImNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXInKVxyXG5jb25zdCBzdGFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdGFyJylcclxubGV0IG5hdlBvcztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZHRvZ2dsZU5hdiA9IChlbmFibGVTY3JvbGwsZGlzYWJsZVNjcm9sbCxhY3RpdmF0ZURlZixkZWFjdGl2YXRlRGVmKSA9PiB7XHJcbiAvLyB3aW5kb3cgY2xpY2sgZXZlbnRcclxuICB3aW5kb3cub25jbGljayA9IGUgPT4ge1xyXG4gICAgY29uc3QgcG9zID0ge3g6ZS5wYWdlWCx5OmUucGFnZVl9XHJcbiAgICBsZXQgbmF2VG9wID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIG5hdkxlZnQgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCwgYm91bmRhcmllcyA9IHBvcy54IDwgbmF2TGVmdCB8fCBwb3MueSA8IG5hdlRvcFxyXG4gICAgaWYgKGJvdW5kYXJpZXMgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWJ1dHRvbi1tb2JpbGUnKSkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1uYXZcIik7XHJcbiAgICAgICAgZW5hYmxlU2Nyb2xsKClcclxuICAgICAgICBhY3RpdmF0ZURlZigpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgIH1cclxuICB9XHJcbi8vIG5hdiBjbGljayBldmVudFxyXG4gIG5hdmJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCduYXYgY2xpY2tlZCcpXHJcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlbi1uYXZcIikpIHtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW5hdlwiKTtcclxuICAgIH1cclxuICAgIGlmKCEvc2hvdy1uYXYvLnRlc3QobmF2LmNsYXNzTGlzdFsndmFsdWUnXSkpIHtcclxuICAgICAgICBlbmFibGVTY3JvbGwoKVxyXG4gICAgICAgIGFjdGl2YXRlRGVmKClcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGRpc2FibGVTY3JvbGwoKVxyXG4gICAgICBkZWFjdGl2YXRlRGVmKClcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLWhpZGUnKVxyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBsaW1pdCA9IDE1MDtcclxuY29uc3QgZGJkc2hyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYmRzLWhyXCIpO1xyXG5jb25zdCB3b3Jrc2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndvcmstc2VjdGlvbicpXHJcbmNvbnN0IG1pZHNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbmxldCBkYmRzZmlncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYmRzLWZpZ3VyZScpXHJcbmRiZHNoci5zdHlsZS50b3AgPSBtaWRzY3JlZW4gKyBcInB4XCI7XHJcbmNvbnN0IGhhbmRsZVNsaWRlRWZmZWN0ID0gKGZpZ3Msc2VjdGlvbnMpID0+IHtcclxuICAgLy8gaGFuZGxlIGFsbCBzZWN0aW9uc1xyXG4gICBzZWN0aW9ucy5mb3JFYWNoKChzZWMsaW5kZXgpPT57XHJcbiAgICBpZihzZWMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA8PSAoZGJkc2hyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgKyAxMCkpe1xyXG4gICAgICBzZWMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1kYmRzJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlYy5jbGFzc0xpc3QuYWRkKCdoaWRlLWRiZHMnKVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgLy8gaGFuZGxlIGZpZ3VyZXMgaW4gZGJkc1xyXG4gIGZpZ3MuZm9yRWFjaCgoZmlnLGlkeCk9PntcclxuICAgIGlmKGlkeCAlIDIgPT0gMCl7XHJcbiAgICAgIGZpZy5jbGFzc0xpc3QuYWRkKCdyb3ctcmV2JylcclxuICAgIH0gZWxzZSB7IFxyXG4gICAgICBmaWcuY2xhc3NMaXN0LmFkZCgncm93JylcclxuICAgIH1cclxuICAgIGlmKGZpZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55IDw9IChkYmRzaHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSkpe1xyXG4gICAgICBmaWcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1kYmRzJylcclxuICAgICAgZmlnLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZGJkcycpXHJcbiAgICAgIGZpZy5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdpbWctdHJhbnMnKVxyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnaW1nLXRyYW5zLWRlZicpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWcuY2xhc3NMaXN0LmFkZCgnaGlkZS1kYmRzJylcclxuICAgICAgZmlnLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZGJkcycpXHJcbiAgICAgIGZpZy5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdpbWctdHJhbnMnKVxyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaW1nLXRyYW5zLWRlZicpXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbn1cclxuLy8gZWxvbmdhdGUgd29yay1jb250YWluZXIgc2VjdGlvbiBvbiBzY3JvbGxcclxuY29uc3QgbGlzdGVuU2Nyb2xsID0gKGUpID0+IHtcclxuICBsZXQgZmlncyA9IFsuLi5kYmRzZmlnc11cclxuICBsZXQgc2VjdGlvbnMgPSBbLi4ud29ya3NlY11cclxuICBoYW5kbGVTbGlkZUVmZmVjdChmaWdzLHNlY3Rpb25zKVxyXG4gIGlmIChlLnRhcmdldC5zY3JvbGxUb3AgPj0gbGltaXQpIHtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXJlZ1wiKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXNtXCIpO1xyXG4gICAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodDtcclxuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXJlZ1wiKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXNtXCIpO1xyXG4gICAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodDtcclxuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XHJcbiAgfVxyXG59O1xyXG53b3JrQ29uLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuU2Nyb2xsKTtcclxuXHJcbi8vIGRpc2FibGUgc3JvbGwgZm9yIG1haW4gY29udGVudFxyXG5jb25zdCBkaXNhYmxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG59O1xyXG4vLyBlbmFibGUgc3JvbGwgZm9yIG1haW4gY29udGVudFxyXG5jb25zdCBlbmFibGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LmFkZChcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuaW1wb3J0ICcuL21lZGlhL2NhdDEud2VicCdcclxuaW1wb3J0ICcuL21lZGlhL2NhdDIud2VicCdcclxuaW1wb3J0ICcuL21lZGlhL2NhdDMuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvZG9nMS5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9kb2cyLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2RvZzMuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvYmFubmVyaW1nLmpwZydcclxuXHJcblxyXG4gIF9fd2VicGFja19ub25jZV9fID0gJzw/PW5vbmNlPz4nO1xyXG5cclxuIiwiLy8gd2ViIHBhZ2UgZnVuY3Rpb25hbGl0eVxyXG4vLyBpbXBvcnRzXHJcbmltcG9ydCBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9sb2FkLmpzXCI7IC8vIHdpbmRvdyBldmVudHNcclxuaW1wb3J0IGxvYWRGb290ZXIgZnJvbSBcIi4vbGliL2VsZW1lbnQvZm9vdGVyLmpzXCI7IC8vIGZvb3RlclxyXG5pbXBvcnQgbG9hZGVuZHBvaW50IGZyb20gJy4vbGliL2VsZW1lbnQvZW5kcG9pbnQuanMnXHJcbmltcG9ydCB7IGFjdGl2YXRlLCBhY3RpdmF0ZURlZiB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvYWN0aXZhdGUuanNcIjtcclxuaW1wb3J0IHsgZGVhY3RpdmF0ZSwgZGVhY3RpdmF0ZURlZiB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvZGVhY3RpdmF0ZS5qc1wiOyAvLyBkZWFjdGl2YXRlIGFsbCBlbGVtZW50cyBleGNlcHQgbW9kYWxcclxuaW1wb3J0IGxvYWR0b2dnbGVOYXYgZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9uYXZpZ2F0aW9uLmpzXCI7IC8vIG5hdmlnYXRpb24gY2xpY2sgKG1vYmlsZSlcclxuaW1wb3J0IHsgc2hvd01vZGFsLCBoaWRlTW9kYWwgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL21vZGFscy5qc1wiOyAvLyB0ZXN0IC0gbW9kYWwgdmlld1xyXG5pbXBvcnQgeyBkaXNhYmxlU2Nyb2xsLCBlbmFibGVTY3JvbGwgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL3Njcm9sbC5qc1wiO1xyXG5cclxuLy8gZnVuY3Rpb25zXHJcbi8vIHNob3dNb2RhbChkZWFjdGl2YXRlKTtcclxuLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgaGlkZU1vZGFsKGFjdGl2YXRlKTtcclxuLy8gfSwgNDAwMCk7XHJcbmxvYWRGb290ZXIoKTtcclxubG9hZHRvZ2dsZU5hdihlbmFibGVTY3JvbGwsIGRpc2FibGVTY3JvbGwsIGFjdGl2YXRlRGVmLCBkZWFjdGl2YXRlRGVmKTtcclxubG9hZGVuZHBvaW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9