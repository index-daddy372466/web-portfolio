/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/media/cat1.webp":
/*!*****************************!*\
  !*** ./src/media/cat1.webp ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/media/cat1.webp");

/***/ }),

/***/ "./src/media/cat2.webp":
/*!*****************************!*\
  !*** ./src/media/cat2.webp ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/media/cat2.webp");

/***/ }),

/***/ "./src/media/cat3.jpg":
/*!****************************!*\
  !*** ./src/media/cat3.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/media/cat3.jpg");

/***/ }),

/***/ "./src/media/dog1.jpg":
/*!****************************!*\
  !*** ./src/media/dog1.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/media/dog1.jpg");

/***/ }),

/***/ "./src/media/dog2.jpg":
/*!****************************!*\
  !*** ./src/media/dog2.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/media/dog2.jpg");

/***/ }),

/***/ "./src/media/dog3.jpg":
/*!****************************!*\
  !*** ./src/media/dog3.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "/media/dog3.jpg");

/***/ }),

/***/ "./src/muban/styles/template.css":
/*!***************************************!*\
  !*** ./src/muban/styles/template.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lib/element/footer.js":
/*!***********************************!*\
  !*** ./src/lib/element/footer.js ***!
  \***********************************/
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

module.exports = window.onload = (e) => {
  // banner
  const banner = document.getElementById("banner");
  const modal = document.querySelector('.modal-wrapper')
  const nav = document.getElementById("nav");

  navPos = banner.clientHeight+5
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
/***/ ((module) => {

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
/***/ ((module) => {

const nav = document.getElementById("nav");
const navbtn = document.getElementById("nav-button");
const banner = document.getElementById('banner')
let navPos;

module.exports = toggleNav = (enableScroll,disableScroll,activateDef,deactivateDef) => {
 // window click event
  window.onclick = e => {
    const pos = {x:e.pageX,y:e.pageY}
    let navTop = nav.getBoundingClientRect().y, navLeft = nav.getBoundingClientRect().x, boundaries = pos.x < navLeft || pos.y < navTop
    if (boundaries && !e.target.classList.contains('nav-button-mobile')) {
        nav.classList.remove("show-nav");
        enableScroll()
        activateDef()
      }
  }
// nav click event
  navbtn.onclick = (e) => {
    if (nav.classList.contains("hidden-nav")) nav.classList.toggle("show-nav");
    if(!/show-nav/.test(nav.classList['value'])) {
        enableScroll()
        activateDef()
    }
    else{
      disableScroll()
      deactivateDef()
    }
  };
};


/***/ }),

/***/ "./src/lib/triggers/events/scroll.js":
/*!*******************************************!*\
  !*** ./src/lib/triggers/events/scroll.js ***!
  \*******************************************/
/***/ ((module) => {

const workCon = document.getElementById("work");
const banner = document.getElementById("banner");
const nav = document.getElementById("nav");
const limit = 150;

// elongate work-container section on scroll
const listenScroll = (e) => {
  if (e.target.scrollTop >= limit) {
    banner.classList.remove("banner-reg");
    banner.classList.add("banner-sm");
    navPos = banner.clientHeight + 5;
    nav.style.top = navPos + "px";
  } else {
    banner.classList.add("banner-reg");
    banner.classList.remove("banner-sm");
    navPos = banner.clientHeight + 5;
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
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
// injections








  __webpack_require__.nc = '<?=nonce?>';


})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./src/goldenGate.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_triggers_events_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/triggers/events/load.js */ "./src/lib/triggers/events/load.js");
/* harmony import */ var _lib_triggers_events_load_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_load_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/element/footer.js */ "./src/lib/element/footer.js");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/triggers/events/activate.js */ "./src/lib/triggers/events/activate.js");
/* harmony import */ var _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/triggers/events/deactivate.js */ "./src/lib/triggers/events/deactivate.js");
/* harmony import */ var _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/triggers/events/navigation.js */ "./src/lib/triggers/events/navigation.js");
/* harmony import */ var _lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/triggers/events/modals.js */ "./src/lib/triggers/events/modals.js");
/* harmony import */ var _lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/triggers/events/scroll.js */ "./src/lib/triggers/events/scroll.js");
/* harmony import */ var _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6__);
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
_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_4___default()(_lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6__.enableScroll, _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6__.disableScroll, _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_2__.activateDef, _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_3__.deactivateDef);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ3VDLENBQUM7QUFDUyxDQUFDO0FBQ3dCO0FBQ00sQ0FBQztBQUNyQixDQUFDO0FBQ1UsQ0FBQztBQUNNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osNkRBQVU7QUFDVix5RUFBUyxDQUFDLHdFQUFZLEVBQUUseUVBQWEsRUFBRSx5RUFBVyxFQUFFLDZFQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2NhdDEud2VicCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvY2F0Mi53ZWJwIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9jYXQzLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvZG9nMS5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2RvZzIuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9kb2czLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcz85ZTJlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvYWN0aXZhdGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvZGVhY3RpdmF0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9sb2FkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvbmRvblRvd2VyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9nb2xkZW5HYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvY2F0MS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9jYXQyLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2NhdDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9kb2cxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvZG9nMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2RvZzMuanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IGZvb3RlciB0byBlbmQgcGFnZVxyXG4gICBjb25zb2xlLmxvZygnZm9vdGVyJylcclxufSIsImNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuY29uc3Qgd29yayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgbW9iQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IGFjdGl2YXRlID0gKG1vZGFsKSA9PiB7XHJcbiAgcmVnQmcoKTtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBiYW5uZXIsIGZvb3RlciwgbW9iQnRuXTtcclxuICBsZXQgbm90TW9kID0gWy4uLmFsbF0uZmlsdGVyKCh4KSA9PiAheC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC13cmFwcGVyXCIpKTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1lbGVtZW50XCIpKTtcclxuICByZXR1cm4gWy4uLm5vdE1vZF0ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZ0JnKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInJlZy1iZ1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbC1iZ1wiKTtcclxufVxyXG5cclxuY29uc3QgYWN0aXZhdGVEZWYgPSAoKSA9PiB7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgZm9vdGVyXTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QucmVtb3ZlKFwiYmx1ci1lbGVtZW50LXNtXCIpKTtcclxuICByZXR1cm4gWy4uLmJnRWxlbWVudHNdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWN0aXZhdGUsIGFjdGl2YXRlRGVmIH07XHJcbiIsImNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlclwiKTtcclxuY29uc3Qgd29yayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgbW9iQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5jb25zdCBkZWFjdGl2YXRlID0gKCkgPT4ge1xyXG4gIG1vZGFsQmcoKTtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBiYW5uZXIsIGZvb3RlciwgbW9iQnRuXTtcclxuICBsZXQgbm90TW9kID0gWy4uLmFsbF0uZmlsdGVyKCh4KSA9PiAheC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbC13cmFwcGVyXCIpKTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QuYWRkKFwiYmx1ci1lbGVtZW50XCIpKTtcclxuICByZXR1cm4gWy4uLm5vdE1vZF0ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5hZGQoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1vZGFsQmcoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwicmVnLWJnXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnXCIpO1xyXG59XHJcblxyXG5cclxuY29uc3QgZGVhY3RpdmF0ZURlZiA9ICgpID0+IHtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBmb290ZXJdO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5hZGQoXCJibHVyLWVsZW1lbnQtc21cIikpO1xyXG4gIHJldHVybiBbLi4uYmdFbGVtZW50c10ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5hZGQoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtkZWFjdGl2YXRlLCBkZWFjdGl2YXRlRGVmfSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgLy8gYmFubmVyXHJcbiAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcblxyXG4gIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQrNVxyXG4gIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyAncHgnXHJcbiAgLy8gYmFubmVyIGFwcGVhcnMgb24gbG9hZFxyXG4gIGlmKGJhbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1iYW5uZXInKSl7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJhbm5lcicpXHJcbiAgfVxyXG5cclxuICAvLyBwcmVzZXQgbW9kYWwgaGVpZ2h0IHRvIGhhbGYgdGhlIHBhZ2UncyBoZWlnaHRcclxuICBtb2RhbC5zdHlsZS50b3AgPSAod2luZG93LmlubmVySGVpZ2h0LzIpLShtb2RhbC5jbGllbnRIZWlnaHQvMikgKyAncHgnO1xyXG4gIFxyXG59O1xyXG4gICIsImNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKVxyXG4vLyBtb2RhbCBhcHBlYXJzXHJcbiBjb25zdCBzaG93TW9kYWwgPSAoZGVhY3RpdmF0ZSkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIGlmKG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLW1vZGFsJykpe1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKVxyXG4gICAgICAgICAgICBkZWFjdGl2YXRlKG1vZGFsKVxyXG4gICAgICAgIH1cclxuICAgIH0sMjAwMClcclxufVxyXG4vLyBtb2RhbCBpcyBoaWRkZW5cclxuY29uc3QgaGlkZU1vZGFsID0gKGFjdGl2YXRlKSA9PiB7XHJcbiAgICAgICAgaWYoIW1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLW1vZGFsJykpe1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9kYWwnKVxyXG4gICAgICAgICAgICBhY3RpdmF0ZShtb2RhbClcclxuICAgICAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBzaG93TW9kYWwsaGlkZU1vZGFsIH0iLCJjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuY29uc3QgbmF2YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyJylcclxubGV0IG5hdlBvcztcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdG9nZ2xlTmF2ID0gKGVuYWJsZVNjcm9sbCxkaXNhYmxlU2Nyb2xsLGFjdGl2YXRlRGVmLGRlYWN0aXZhdGVEZWYpID0+IHtcclxuIC8vIHdpbmRvdyBjbGljayBldmVudFxyXG4gIHdpbmRvdy5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cclxuICAgIGxldCBuYXZUb3AgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSwgbmF2TGVmdCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54LCBib3VuZGFyaWVzID0gcG9zLnggPCBuYXZMZWZ0IHx8IHBvcy55IDwgbmF2VG9wXHJcbiAgICBpZiAoYm91bmRhcmllcyAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtYnV0dG9uLW1vYmlsZScpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcclxuICAgICAgICBlbmFibGVTY3JvbGwoKVxyXG4gICAgICAgIGFjdGl2YXRlRGVmKClcclxuICAgICAgfVxyXG4gIH1cclxuLy8gbmF2IGNsaWNrIGV2ZW50XHJcbiAgbmF2YnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbmF2XCIpKSBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbmF2XCIpO1xyXG4gICAgaWYoIS9zaG93LW5hdi8udGVzdChuYXYuY2xhc3NMaXN0Wyd2YWx1ZSddKSkge1xyXG4gICAgICAgIGVuYWJsZVNjcm9sbCgpXHJcbiAgICAgICAgYWN0aXZhdGVEZWYoKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZGlzYWJsZVNjcm9sbCgpXHJcbiAgICAgIGRlYWN0aXZhdGVEZWYoKVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImNvbnN0IHdvcmtDb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuY29uc3QgbGltaXQgPSAxNTA7XHJcblxyXG4vLyBlbG9uZ2F0ZSB3b3JrLWNvbnRhaW5lciBzZWN0aW9uIG9uIHNjcm9sbFxyXG5jb25zdCBsaXN0ZW5TY3JvbGwgPSAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5zY3JvbGxUb3AgPj0gbGltaXQpIHtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXJlZ1wiKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXNtXCIpO1xyXG4gICAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodCArIDU7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQgKyA1O1xyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcclxuICB9XHJcblxyXG59O1xyXG53b3JrQ29uLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuU2Nyb2xsKTtcclxuXHJcbi8vIGRpc2FibGUgc3JvbGwgZm9yIG1haW4gY29udGVudFxyXG5jb25zdCBkaXNhYmxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG59O1xyXG4vLyBlbmFibGUgc3JvbGwgZm9yIG1haW4gY29udGVudFxyXG5jb25zdCBlbmFibGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LmFkZChcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuaW1wb3J0ICcuL21lZGlhL2NhdDEud2VicCdcclxuaW1wb3J0ICcuL21lZGlhL2NhdDIud2VicCdcclxuaW1wb3J0ICcuL21lZGlhL2NhdDMuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvZG9nMS5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9kb2cyLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2RvZzMuanBnJ1xyXG5cclxuICBfX3dlYnBhY2tfbm9uY2VfXyA9ICc8Pz1ub25jZT8+JztcclxuXHJcbiIsIi8vIHdlYiBwYWdlIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW1wb3J0c1xyXG5pbXBvcnQgXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbG9hZC5qc1wiOyAvLyB3aW5kb3cgZXZlbnRzXHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xpYi9lbGVtZW50L2Zvb3Rlci5qc1wiOyAvLyBmb290ZXJcclxuaW1wb3J0IHsgYWN0aXZhdGUsIGFjdGl2YXRlRGVmIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9hY3RpdmF0ZS5qc1wiO1xyXG5pbXBvcnQgeyBkZWFjdGl2YXRlLCBkZWFjdGl2YXRlRGVmIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9kZWFjdGl2YXRlLmpzXCI7IC8vIGRlYWN0aXZhdGUgYWxsIGVsZW1lbnRzIGV4Y2VwdCBtb2RhbFxyXG5pbXBvcnQgdG9nZ2xlTmF2IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qc1wiOyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXHJcbmltcG9ydCB7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9tb2RhbHMuanNcIjsgLy8gdGVzdCAtIG1vZGFsIHZpZXdcclxuaW1wb3J0IHsgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9zY3JvbGwuanNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG4vLyBzaG93TW9kYWwoZGVhY3RpdmF0ZSk7XHJcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgIGhpZGVNb2RhbChhY3RpdmF0ZSk7XHJcbi8vIH0sIDQwMDApO1xyXG5sb2FkRm9vdGVyKCk7XHJcbnRvZ2dsZU5hdihlbmFibGVTY3JvbGwsIGRpc2FibGVTY3JvbGwsIGFjdGl2YXRlRGVmLCBkZWFjdGl2YXRlRGVmKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9