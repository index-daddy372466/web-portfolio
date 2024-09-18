/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
(0,_lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_5__.showModal)(_lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_3__.deactivate);
setTimeout(() => {
  (0,_lib_triggers_events_modals_js__WEBPACK_IMPORTED_MODULE_5__.hideModal)(_lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_2__.activate);
}, 4000);
_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_1___default()();
_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_4___default()(_lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6__.enableScroll, _lib_triggers_events_scroll_js__WEBPACK_IMPORTED_MODULE_6__.disableScroll, _lib_triggers_events_activate_js__WEBPACK_IMPORTED_MODULE_2__.activateDef, _lib_triggers_events_deactivate_js__WEBPACK_IMPORTED_MODULE_3__.deactivateDef);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDeEJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7O0FDMUJsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7QUNsQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7Ozs7OztVQ3JDbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDb0M7QUFDcEM7QUFDQSxFQUFFLHNCQUFpQjtBQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDdUMsQ0FBQztBQUNTLENBQUM7QUFDd0I7QUFDTSxDQUFDO0FBQ3JCLENBQUM7QUFDVSxDQUFDO0FBQ007QUFDOUU7QUFDQTtBQUNBLHlFQUFTLENBQUMsMEVBQVU7QUFDcEI7QUFDQSxFQUFFLHlFQUFTLENBQUMsc0VBQVE7QUFDcEIsQ0FBQztBQUNELDZEQUFVO0FBQ1YseUVBQVMsQ0FBQyx3RUFBWSxFQUFFLHlFQUFhLEVBQUUseUVBQVcsRUFBRSw2RUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzPzllMmUiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9hY3RpdmF0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9kZWFjdGl2YXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbW9kYWxzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9sb25kb25Ub3dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvZ29sZGVuR2F0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgZm9vdGVyIHRvIGVuZCBwYWdlXHJcbiAgIGNvbnNvbGUubG9nKCdmb290ZXInKVxyXG59IiwiY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG5jb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpO1xyXG5jb25zdCBtb2JCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbm1vZHVsZS5leHBvcnRzID0gYWN0aXZhdGUgPSAobW9kYWwpID0+IHtcclxuICByZWdCZygpO1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGJhbm5lciwgZm9vdGVyLCBtb2JCdG5dO1xyXG4gIGxldCBub3RNb2QgPSBbLi4uYWxsXS5maWx0ZXIoKHgpID0+ICF4LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLXdyYXBwZXJcIikpO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyLWVsZW1lbnRcIikpO1xyXG4gIHJldHVybiBbLi4ubm90TW9kXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVnQmcoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicmVnLWJnXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWJnXCIpO1xyXG59XHJcblxyXG5jb25zdCBhY3RpdmF0ZURlZiA9ICgpID0+IHtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBmb290ZXJdO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyLWVsZW1lbnQtc21cIikpO1xyXG4gIHJldHVybiBbLi4uYmdFbGVtZW50c10ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBhY3RpdmF0ZSwgYWN0aXZhdGVEZWYgfTtcclxuIiwiY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG5jb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpO1xyXG5jb25zdCBtb2JCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IGRlYWN0aXZhdGUgPSAoKSA9PiB7XHJcbiAgbW9kYWxCZygpO1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGJhbm5lciwgZm9vdGVyLCBtb2JCdG5dO1xyXG4gIGxldCBub3RNb2QgPSBbLi4uYWxsXS5maWx0ZXIoKHgpID0+ICF4LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLXdyYXBwZXJcIikpO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5hZGQoXCJibHVyLWVsZW1lbnRcIikpO1xyXG4gIHJldHVybiBbLi4ubm90TW9kXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbW9kYWxCZygpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWctYmdcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYmdcIik7XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWFjdGl2YXRlRGVmID0gKCkgPT4ge1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGZvb3Rlcl07XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LmFkZChcImJsdXItZWxlbWVudC1zbVwiKSk7XHJcbiAgcmV0dXJuIFsuLi5iZ0VsZW1lbnRzXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2RlYWN0aXZhdGUsIGRlYWN0aXZhdGVEZWZ9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25sb2FkID0gKGUpID0+IHtcclxuICAvLyBiYW5uZXJcclxuICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJylcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuXHJcbiAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodCs1XHJcbiAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArICdweCdcclxuICAvLyBiYW5uZXIgYXBwZWFycyBvbiBsb2FkXHJcbiAgaWYoYmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLWJhbm5lcicpKXtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tYmFubmVyJylcclxuICB9XHJcblxyXG4gIC8vIHByZXNldCBtb2RhbCBoZWlnaHQgdG8gaGFsZiB0aGUgcGFnZSdzIGhlaWdodFxyXG4gIG1vZGFsLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMiktKG1vZGFsLmNsaWVudEhlaWdodC8yKSArICdweCc7XHJcbiAgXHJcbn07XHJcbiAgIiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbi8vIG1vZGFsIGFwcGVhcnNcclxuIGNvbnN0IHNob3dNb2RhbCA9IChkZWFjdGl2YXRlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGUobW9kYWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDAwKVxyXG59XHJcbi8vIG1vZGFsIGlzIGhpZGRlblxyXG5jb25zdCBoaWRlTW9kYWwgPSAoYWN0aXZhdGUpID0+IHtcclxuICAgICAgICBpZighbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlKG1vZGFsKVxyXG4gICAgICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHNob3dNb2RhbCxoaWRlTW9kYWwgfSIsImNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXInKVxyXG5sZXQgbmF2UG9zO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0b2dnbGVOYXYgPSAoZW5hYmxlU2Nyb2xsLGRpc2FibGVTY3JvbGwsYWN0aXZhdGVEZWYsZGVhY3RpdmF0ZURlZikgPT4ge1xyXG4gLy8gd2luZG93IGNsaWNrIGV2ZW50XHJcbiAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IHt4OmUucGFnZVgseTplLnBhZ2VZfVxyXG4gICAgbGV0IG5hdlRvcCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55LCBuYXZMZWZ0ID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLngsIGJvdW5kYXJpZXMgPSBwb3MueCA8IG5hdkxlZnQgfHwgcG9zLnkgPCBuYXZUb3BcclxuICAgIGlmIChib3VuZGFyaWVzICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1idXR0b24tbW9iaWxlJykpIHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbmF2XCIpO1xyXG4gICAgICAgIGVuYWJsZVNjcm9sbCgpXHJcbiAgICAgICAgYWN0aXZhdGVEZWYoKVxyXG4gICAgICB9XHJcbiAgfVxyXG4vLyBuYXYgY2xpY2sgZXZlbnRcclxuICBuYXZidG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlbi1uYXZcIikpIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1uYXZcIik7XHJcbiAgICBpZighL3Nob3ctbmF2Ly50ZXN0KG5hdi5jbGFzc0xpc3RbJ3ZhbHVlJ10pKSB7XHJcbiAgICAgICAgZW5hYmxlU2Nyb2xsKClcclxuICAgICAgICBhY3RpdmF0ZURlZigpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkaXNhYmxlU2Nyb2xsKClcclxuICAgICAgZGVhY3RpdmF0ZURlZigpXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBsaW1pdCA9IDE1MDtcclxuXHJcbi8vIGVsb25nYXRlIHdvcmstY29udGFpbmVyIHNlY3Rpb24gb24gc2Nyb2xsXHJcbmNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0LnNjcm9sbFRvcCA+PSBsaW1pdCkge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItcmVnXCIpO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItc21cIik7XHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0ICsgNTtcclxuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXJlZ1wiKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXNtXCIpO1xyXG4gICAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodCArIDU7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gIH1cclxuXHJcbn07XHJcbndvcmtDb24uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5TY3JvbGwpO1xyXG5cclxuLy8gZGlzYWJsZSBzcm9sbCBmb3IgbWFpbiBjb250ZW50XHJcbmNvbnN0IGRpc2FibGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QucmVtb3ZlKFwieWVzLXNjcm9sbFwiKTtcclxuICB3b3JrQ29uLmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJuby1zY3JvbGxcIik7XHJcbn07XHJcbi8vIGVuYWJsZSBzcm9sbCBmb3IgbWFpbiBjb250ZW50XHJcbmNvbnN0IGVuYWJsZVNjcm9sbCA9ICgpID0+IHtcclxuICB3b3JrQ29uLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJ5ZXMtc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBlbmFibGVTY3JvbGwsIGRpc2FibGVTY3JvbGwgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuXHJcbiAgX193ZWJwYWNrX25vbmNlX18gPSAnPD89bm9uY2U/Pic7XHJcblxyXG4iLCIvLyB3ZWIgcGFnZSBmdW5jdGlvbmFsaXR5XHJcbi8vIGltcG9ydHNcclxuaW1wb3J0IFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2xvYWQuanNcIjsgLy8gd2luZG93IGV2ZW50c1xyXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9saWIvZWxlbWVudC9mb290ZXIuanNcIjsgLy8gZm9vdGVyXHJcbmltcG9ydCB7IGFjdGl2YXRlLCBhY3RpdmF0ZURlZiB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvYWN0aXZhdGUuanNcIjtcclxuaW1wb3J0IHsgZGVhY3RpdmF0ZSwgZGVhY3RpdmF0ZURlZiB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvZGVhY3RpdmF0ZS5qc1wiOyAvLyBkZWFjdGl2YXRlIGFsbCBlbGVtZW50cyBleGNlcHQgbW9kYWxcclxuaW1wb3J0IHRvZ2dsZU5hdiBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL25hdmlnYXRpb24uanNcIjsgLy8gbmF2aWdhdGlvbiBjbGljayAobW9iaWxlKVxyXG5pbXBvcnQgeyBzaG93TW9kYWwsIGhpZGVNb2RhbCB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbW9kYWxzLmpzXCI7IC8vIHRlc3QgLSBtb2RhbCB2aWV3XHJcbmltcG9ydCB7IGRpc2FibGVTY3JvbGwsIGVuYWJsZVNjcm9sbCB9IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvc2Nyb2xsLmpzXCI7XHJcblxyXG4vLyBmdW5jdGlvbnNcclxuc2hvd01vZGFsKGRlYWN0aXZhdGUpO1xyXG5zZXRUaW1lb3V0KCgpID0+IHtcclxuICBoaWRlTW9kYWwoYWN0aXZhdGUpO1xyXG59LCA0MDAwKTtcclxubG9hZEZvb3RlcigpO1xyXG50b2dnbGVOYXYoZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsLCBhY3RpdmF0ZURlZiwgZGVhY3RpdmF0ZURlZik7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==