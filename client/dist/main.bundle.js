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

/***/ "./src/lib/triggers/events/navigation.js":
/*!***********************************************!*\
  !*** ./src/lib/triggers/events/navigation.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = toggleNav = () => {
    const nav = document.getElementById('nav')
    const navbtn = document.getElementById('nav-button')
    navbtn.onclick = e => {
        if(nav.classList.contains('hidden-nav')){
            // nav.classList.remove('hidden-nav')
            // nav.classList.add('show-nav')
            nav.classList.toggle('show-nav')
        }
        console.log(nav.classList)
        // if(nav.classList.contains('show-nav')){
        //     nav.classList.remove('show-nav')
        //     nav.classList.add('hidden-nav')
        // }
    }
}

/***/ }),

/***/ "./src/lib/triggers/load.js":
/*!**********************************!*\
  !*** ./src/lib/triggers/load.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = window.onload = (e) => {
  // banner
  const banner = document.getElementById("banner");
  const modal = document.querySelector('.modal-wrapper')
  // banner appears on load
  if(banner.classList.contains('hidden-banner')){
    banner.classList.remove('hidden-banner')
  }

  // preset modal height to half the page's height
  modal.style.top = (window.innerHeight/2)-(modal.clientHeight/2) + 'px';
  
};
  

/***/ }),

/***/ "./src/lib/triggers/modals.js":
/*!************************************!*\
  !*** ./src/lib/triggers/modals.js ***!
  \************************************/
/***/ ((module) => {

module.exports = showModal = () => {
    const modal = document.querySelector('.modal-wrapper')
    setTimeout(()=>{
        if(modal.classList.contains('hidden-modal')){
            modal.classList.remove('hidden-modal')
        }
    },2000)
}

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
/* harmony import */ var _lib_triggers_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/triggers/load.js */ "./src/lib/triggers/load.js");
/* harmony import */ var _lib_triggers_load_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_load_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/triggers/events/navigation.js */ "./src/lib/triggers/events/navigation.js");
/* harmony import */ var _lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_triggers_modals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/triggers/modals.js */ "./src/lib/triggers/modals.js");
/* harmony import */ var _lib_triggers_modals_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_triggers_modals_js__WEBPACK_IMPORTED_MODULE_2__);
// web page functionality

// imports
 // window events
 // navigation click (mobile)
 // test - modal view



_lib_triggers_events_navigation_js__WEBPACK_IMPORTED_MODULE_1___default()()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7OztVQ1BBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ29DO0FBQ3BDO0FBQ0EsRUFBRSxzQkFBaUI7QUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQytCO0FBQzRCO0FBQ1g7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EseUVBQVMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzPzllMmUiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvbmRvblRvd2VyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9nb2xkZW5HYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gdG9nZ2xlTmF2ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdicpXHJcbiAgICBjb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LWJ1dHRvbicpXHJcbiAgICBuYXZidG4ub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1uYXYnKSl7XHJcbiAgICAgICAgICAgIC8vIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbmF2JylcclxuICAgICAgICAgICAgLy8gbmF2LmNsYXNzTGlzdC5hZGQoJ3Nob3ctbmF2JylcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctbmF2JylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cobmF2LmNsYXNzTGlzdClcclxuICAgICAgICAvLyBpZihuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93LW5hdicpKXtcclxuICAgICAgICAvLyAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3ctbmF2JylcclxuICAgICAgICAvLyAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1uYXYnKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgLy8gYmFubmVyXHJcbiAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbiAgLy8gYmFubmVyIGFwcGVhcnMgb24gbG9hZFxyXG4gIGlmKGJhbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1iYW5uZXInKSl7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJhbm5lcicpXHJcbiAgfVxyXG5cclxuICAvLyBwcmVzZXQgbW9kYWwgaGVpZ2h0IHRvIGhhbGYgdGhlIHBhZ2UncyBoZWlnaHRcclxuICBtb2RhbC5zdHlsZS50b3AgPSAod2luZG93LmlubmVySGVpZ2h0LzIpLShtb2RhbC5jbGllbnRIZWlnaHQvMikgKyAncHgnO1xyXG4gIFxyXG59O1xyXG4gICIsIm1vZHVsZS5leHBvcnRzID0gc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDAwKVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuXHJcbiAgX193ZWJwYWNrX25vbmNlX18gPSAnPD89bm9uY2U/Pic7XHJcblxyXG4iLCIvLyB3ZWIgcGFnZSBmdW5jdGlvbmFsaXR5XHJcblxyXG4vLyBpbXBvcnRzXHJcbmltcG9ydCAnLi9saWIvdHJpZ2dlcnMvbG9hZC5qcycgLy8gd2luZG93IGV2ZW50c1xyXG5pbXBvcnQgdG9nZ2xlTmF2IGZyb20gJy4vbGliL3RyaWdnZXJzL2V2ZW50cy9uYXZpZ2F0aW9uLmpzJyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXHJcbmltcG9ydCBzaG93TW9kYWwgZnJvbSAnLi9saWIvdHJpZ2dlcnMvbW9kYWxzLmpzJyAvLyB0ZXN0IC0gbW9kYWwgdmlld1xyXG5cclxuXHJcblxyXG50b2dnbGVOYXYoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==