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

/***/ "./src/lib/element/endpoint.js":
/*!*************************************!*\
  !*** ./src/lib/element/endpoint.js ***!
  \*************************************/
/***/ ((module) => {

const endpointContainer = document.querySelector(".end-point-container");
const endpointImg = document.querySelector(".end-point-img");
const article = endpointImg.parentElement;
const fw = document.querySelectorAll(".forward");
const pv = document.querySelectorAll(".prev");

const handleSelection = (elem) => {
  let fingers = [...fw, ...pv];
  fingers.forEach((f) => {
    f.classList.add("no-pointer");
  });
  setTimeout(() => {
    fingers.forEach((f) => {
      f.classList.remove("no-pointer");
    });
  }, 1000);
};
module.exports = endpoint = async () => {
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
          setTimeout(() => {
            idx += 1;
            idx %= files.length;
            src = files[idx];
            endpointImg.src = `./media/${src}`;
            endpointImg.parentElement.classList.add("left-to-right");
            article.href = files[idx];
            console.log(idx);
            handleSelection(endpointImg);
          }, 250);
        };
      });

      pv.forEach((el) => {
        el.onclick = (e) => {
          endpointImg.parentElement.classList.remove("left-to-right");
          endpointImg.parentElement.classList.remove("right-to-left");
          setTimeout(() => {
            idx -= 1;
            if (idx < 0) idx = files.length - 1;
            src = files[idx];
            endpointImg.src = `./media/${src}`;
            endpointImg.parentElement.classList.add("right-to-left");
            article.href = files[idx];
            console.log(idx);
            handleSelection(endpointImg);
          }, 250);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNvQztBQUNWO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFekIsRUFBRSxzQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbkI7QUFDQTtBQUN1QyxDQUFDO0FBQ1MsQ0FBQztBQUNGO0FBQzBCO0FBQ00sQ0FBQztBQUNyQixDQUFDO0FBQ1UsQ0FBQztBQUNNOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiw2REFBVTtBQUNWLHlFQUFTLENBQUMsd0VBQVksRUFBRSx5RUFBYSxFQUFFLHlFQUFXLEVBQUUsNkVBQWE7QUFDakUsK0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvY2F0MS53ZWJwIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9jYXQyLndlYnAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2NhdDMuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9kb2cxLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvZG9nMi5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2RvZzMuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9lbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL2FjdGl2YXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL2RlYWN0aXZhdGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbG9hZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9sb25kb25Ub3dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvZ29sZGVuR2F0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2NhdDEud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvY2F0Mi53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9jYXQzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvZG9nMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2RvZzIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9kb2czLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGVuZHBvaW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmQtcG9pbnQtY29udGFpbmVyXCIpO1xuY29uc3QgZW5kcG9pbnRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZC1wb2ludC1pbWdcIik7XG5jb25zdCBhcnRpY2xlID0gZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudDtcbmNvbnN0IGZ3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3J3YXJkXCIpO1xuY29uc3QgcHYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByZXZcIik7XG5cbmNvbnN0IGhhbmRsZVNlbGVjdGlvbiA9IChlbGVtKSA9PiB7XG4gIGxldCBmaW5nZXJzID0gWy4uLmZ3LCAuLi5wdl07XG4gIGZpbmdlcnMuZm9yRWFjaCgoZikgPT4ge1xuICAgIGYuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIik7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBmaW5nZXJzLmZvckVhY2goKGYpID0+IHtcbiAgICAgIGYuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXJcIik7XG4gICAgfSk7XG4gIH0sIDEwMDApO1xufTtcbm1vZHVsZS5leHBvcnRzID0gZW5kcG9pbnQgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XG4gIGxldCBmaWxlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9tZWRpYVwiKVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAudGhlbigoZCkgPT4gWy4uLmQubWVkaWFdKTtcblxuICBsZXQgdGFyZ2V0LFxuICAgIHNyYyxcbiAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWxlcy5sZW5ndGgpO1xuICBsZXQgc3RhcnRTcmMgPSBcIi4vbWVkaWEvXCIgKyBmaWxlc1tpZHhdO1xuICBlbmRwb2ludEltZy5zcmMgPSBzdGFydFNyYztcbiAgYXJ0aWNsZS5ocmVmID0gZmlsZXNbaWR4XTtcblxuICBmb3IgKHRhcmdldCA9IDA7IHRhcmdldCA8IGZpbGVzLmxlbmd0aDsgdGFyZ2V0KyspIHtcbiAgICBpZiAodGFyZ2V0ID09IGlkeCkge1xuICAgICAgZncuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdC10by1yaWdodFwiKTtcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC10by1sZWZ0XCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgICBpZHggJT0gZmlsZXMubGVuZ3RoO1xuICAgICAgICAgICAgc3JjID0gZmlsZXNbaWR4XTtcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnNyYyA9IGAuL21lZGlhLyR7c3JjfWA7XG4gICAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXRvLXJpZ2h0XCIpO1xuICAgICAgICAgICAgYXJ0aWNsZS5ocmVmID0gZmlsZXNbaWR4XTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkeCk7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3Rpb24oZW5kcG9pbnRJbWcpO1xuICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgcHYuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdC10by1yaWdodFwiKTtcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC10by1sZWZ0XCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWR4IC09IDE7XG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkgaWR4ID0gZmlsZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHNyYyA9IGZpbGVzW2lkeF07XG4gICAgICAgICAgICBlbmRwb2ludEltZy5zcmMgPSBgLi9tZWRpYS8ke3NyY31gO1xuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdG8tbGVmdFwiKTtcbiAgICAgICAgICAgIGFydGljbGUuaHJlZiA9IGZpbGVzW2lkeF07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZHgpO1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0aW9uKGVuZHBvaW50SW1nKTtcbiAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuIiwiY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRGb290ZXIgPSAoKSA9PiB7XG4gICAgLy8gc2V0IGZvb3RlciB0byBlbmQgcGFnZVxuICAgY29uc29sZS5sb2coJ2Zvb3RlcicpXG59IiwiY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5jb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpO1xuY29uc3QgbW9iQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBhY3RpdmF0ZSA9IChtb2RhbCkgPT4ge1xuICByZWdCZygpO1xuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBiYW5uZXIsIGZvb3RlciwgbW9iQnRuXTtcbiAgbGV0IG5vdE1vZCA9IFsuLi5hbGxdLmZpbHRlcigoeCkgPT4gIXguY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtd3JhcHBlclwiKSk7XG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyLWVsZW1lbnRcIikpO1xuICByZXR1cm4gWy4uLm5vdE1vZF0ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpKTtcbn07XG5cbmZ1bmN0aW9uIHJlZ0JnKCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJyZWctYmdcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWJnXCIpO1xufVxuXG5jb25zdCBhY3RpdmF0ZURlZiA9ICgpID0+IHtcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgZm9vdGVyXTtcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZWxlbWVudC1zbVwiKSk7XG4gIHJldHVybiBbLi4uYmdFbGVtZW50c10ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBhY3RpdmF0ZSwgYWN0aXZhdGVEZWYgfTtcbiIsImNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpO1xuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xuY29uc3Qgd29yayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcbmNvbnN0IG1vYkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcbmNvbnN0IGRlYWN0aXZhdGUgPSAoKSA9PiB7XG4gIG1vZGFsQmcoKTtcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgYmFubmVyLCBmb290ZXIsIG1vYkJ0bl07XG4gIGxldCBub3RNb2QgPSBbLi4uYWxsXS5maWx0ZXIoKHgpID0+ICF4LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLXdyYXBwZXJcIikpO1xuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QuYWRkKFwiYmx1ci1lbGVtZW50XCIpKTtcbiAgcmV0dXJuIFsuLi5ub3RNb2RdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKSk7XG59O1xuXG5mdW5jdGlvbiBtb2RhbEJnKCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWctYmdcIik7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm1vZGFsLWJnXCIpO1xufVxuXG5cbmNvbnN0IGRlYWN0aXZhdGVEZWYgPSAoKSA9PiB7XG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGZvb3Rlcl07XG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5hZGQoXCJibHVyLWVsZW1lbnQtc21cIikpO1xuICByZXR1cm4gWy4uLmJnRWxlbWVudHNdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge2RlYWN0aXZhdGUsIGRlYWN0aXZhdGVEZWZ9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25sb2FkID0gKGUpID0+IHtcbiAgLy8gYmFubmVyXG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJylcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5cbiAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodCs1XG4gIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyAncHgnXG4gIC8vIGJhbm5lciBhcHBlYXJzIG9uIGxvYWRcbiAgaWYoYmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLWJhbm5lcicpKXtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJhbm5lcicpXG4gIH1cblxuICAvLyBwcmVzZXQgbW9kYWwgaGVpZ2h0IHRvIGhhbGYgdGhlIHBhZ2UncyBoZWlnaHRcbiAgbW9kYWwuc3R5bGUudG9wID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKS0obW9kYWwuY2xpZW50SGVpZ2h0LzIpICsgJ3B4JztcbiAgXG59O1xuICAiLCJjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJylcbi8vIG1vZGFsIGFwcGVhcnNcbiBjb25zdCBzaG93TW9kYWwgPSAoZGVhY3RpdmF0ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgaWYobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKVxuICAgICAgICAgICAgZGVhY3RpdmF0ZShtb2RhbClcbiAgICAgICAgfVxuICAgIH0sMjAwMClcbn1cbi8vIG1vZGFsIGlzIGhpZGRlblxuY29uc3QgaGlkZU1vZGFsID0gKGFjdGl2YXRlKSA9PiB7XG4gICAgICAgIGlmKCFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1tb2RhbCcpKXtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpXG4gICAgICAgICAgICBhY3RpdmF0ZShtb2RhbClcbiAgICAgICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgc2hvd01vZGFsLGhpZGVNb2RhbCB9IiwiY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyJylcbmxldCBuYXZQb3M7XG5cbm1vZHVsZS5leHBvcnRzID0gdG9nZ2xlTmF2ID0gKGVuYWJsZVNjcm9sbCxkaXNhYmxlU2Nyb2xsLGFjdGl2YXRlRGVmLGRlYWN0aXZhdGVEZWYpID0+IHtcbiAvLyB3aW5kb3cgY2xpY2sgZXZlbnRcbiAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cbiAgICBsZXQgbmF2VG9wID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIG5hdkxlZnQgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCwgYm91bmRhcmllcyA9IHBvcy54IDwgbmF2TGVmdCB8fCBwb3MueSA8IG5hdlRvcFxuICAgIGlmIChib3VuZGFyaWVzICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1idXR0b24tbW9iaWxlJykpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcbiAgICAgICAgZW5hYmxlU2Nyb2xsKClcbiAgICAgICAgYWN0aXZhdGVEZWYoKVxuICAgICAgfVxuICB9XG4vLyBuYXYgY2xpY2sgZXZlbnRcbiAgbmF2YnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuLW5hdlwiKSkgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW5hdlwiKTtcbiAgICBpZighL3Nob3ctbmF2Ly50ZXN0KG5hdi5jbGFzc0xpc3RbJ3ZhbHVlJ10pKSB7XG4gICAgICAgIGVuYWJsZVNjcm9sbCgpXG4gICAgICAgIGFjdGl2YXRlRGVmKClcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGRpc2FibGVTY3JvbGwoKVxuICAgICAgZGVhY3RpdmF0ZURlZigpXG4gICAgfVxuICB9O1xufTtcbiIsImNvbnN0IHdvcmtDb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xuY29uc3QgbGltaXQgPSAxNTA7XG5cbi8vIGVsb25nYXRlIHdvcmstY29udGFpbmVyIHNlY3Rpb24gb24gc2Nyb2xsXG5jb25zdCBsaXN0ZW5TY3JvbGwgPSAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItcmVnXCIpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXNtXCIpO1xuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQgKyA1O1xuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XG4gIH0gZWxzZSB7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItcmVnXCIpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXNtXCIpO1xuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQgKyA1O1xuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XG4gIH1cblxufTtcbndvcmtDb24uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5TY3JvbGwpO1xuXG4vLyBkaXNhYmxlIHNyb2xsIGZvciBtYWluIGNvbnRlbnRcbmNvbnN0IGRpc2FibGVTY3JvbGwgPSAoKSA9PiB7XG4gIHdvcmtDb24uY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XG4gIHdvcmtDb24uY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwieWVzLXNjcm9sbFwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xufTtcbi8vIGVuYWJsZSBzcm9sbCBmb3IgbWFpbiBjb250ZW50XG5jb25zdCBlbmFibGVTY3JvbGwgPSAoKSA9PiB7XG4gIHdvcmtDb24uY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcbiAgd29ya0Nvbi5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGVuYWJsZVNjcm9sbCwgZGlzYWJsZVNjcm9sbCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBpbmplY3Rpb25zXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcbmltcG9ydCAnLi9tZWRpYS9jYXQxLndlYnAnXG5pbXBvcnQgJy4vbWVkaWEvY2F0Mi53ZWJwJ1xuaW1wb3J0ICcuL21lZGlhL2NhdDMuanBnJ1xuaW1wb3J0ICcuL21lZGlhL2RvZzEuanBnJ1xuaW1wb3J0ICcuL21lZGlhL2RvZzIuanBnJ1xuaW1wb3J0ICcuL21lZGlhL2RvZzMuanBnJ1xuXG4gIF9fd2VicGFja19ub25jZV9fID0gJzw/PW5vbmNlPz4nO1xuXG4iLCIvLyB3ZWIgcGFnZSBmdW5jdGlvbmFsaXR5XG4vLyBpbXBvcnRzXG5pbXBvcnQgXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbG9hZC5qc1wiOyAvLyB3aW5kb3cgZXZlbnRzXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9saWIvZWxlbWVudC9mb290ZXIuanNcIjsgLy8gZm9vdGVyXG5pbXBvcnQgZW5kcG9pbnQgZnJvbSAnLi9saWIvZWxlbWVudC9lbmRwb2ludC5qcydcbmltcG9ydCB7IGFjdGl2YXRlLCBhY3RpdmF0ZURlZiB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvYWN0aXZhdGUuanNcIjtcbmltcG9ydCB7IGRlYWN0aXZhdGUsIGRlYWN0aXZhdGVEZWYgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2RlYWN0aXZhdGUuanNcIjsgLy8gZGVhY3RpdmF0ZSBhbGwgZWxlbWVudHMgZXhjZXB0IG1vZGFsXG5pbXBvcnQgdG9nZ2xlTmF2IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qc1wiOyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXG5pbXBvcnQgeyBzaG93TW9kYWwsIGhpZGVNb2RhbCB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbW9kYWxzLmpzXCI7IC8vIHRlc3QgLSBtb2RhbCB2aWV3XG5pbXBvcnQgeyBkaXNhYmxlU2Nyb2xsLCBlbmFibGVTY3JvbGwgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL3Njcm9sbC5qc1wiO1xuXG4vLyBmdW5jdGlvbnNcbi8vIHNob3dNb2RhbChkZWFjdGl2YXRlKTtcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICBoaWRlTW9kYWwoYWN0aXZhdGUpO1xuLy8gfSwgNDAwMCk7XG5sb2FkRm9vdGVyKCk7XG50b2dnbGVOYXYoZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsLCBhY3RpdmF0ZURlZiwgZGVhY3RpdmF0ZURlZik7XG5lbmRwb2ludCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9