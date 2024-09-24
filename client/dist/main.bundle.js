/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrREFBZSxxQkFBdUIscUJBQXFCOzs7Ozs7Ozs7Ozs7QUNBM0QsK0RBQWUscUJBQXVCLHFCQUFxQjs7Ozs7Ozs7Ozs7O0FDQTNELCtEQUFlLHFCQUF1QixvQkFBb0I7Ozs7Ozs7Ozs7OztBQ0ExRCwrREFBZSxxQkFBdUIsb0JBQW9COzs7Ozs7Ozs7Ozs7QUNBMUQsK0RBQWUscUJBQXVCLG9CQUFvQjs7Ozs7Ozs7Ozs7O0FDQTFELCtEQUFlLHFCQUF1QixvQkFBb0I7Ozs7Ozs7Ozs7OztBQ0ExRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7OztBQ3hCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjs7Ozs7Ozs7OztBQzFCbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7Ozs7O0FDbEJuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COzs7Ozs7O1VDekVuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNvQztBQUNWO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUN6QjtBQUNBLEVBQUUsc0JBQWlCO0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDdUMsQ0FBQztBQUNTLENBQUM7QUFDRTtBQUNzQjtBQUNNLENBQUM7QUFDakIsQ0FBQztBQUNNLENBQUM7QUFDTTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZEQUFVO0FBQ1YseUVBQWEsQ0FBQyx3RUFBWSxFQUFFLHlFQUFhLEVBQUUseUVBQVcsRUFBRSw2RUFBYTtBQUNyRSwrREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2NhdDEud2VicCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvY2F0Mi53ZWJwIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9jYXQzLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvZG9nMS5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2RvZzIuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9kb2czLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcz8xN2U3Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9lbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL2FjdGl2YXRlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL2RlYWN0aXZhdGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbG9hZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9tb2RhbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9sb25kb25Ub3dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvZ29sZGVuR2F0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2NhdDEud2VicFwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvY2F0Mi53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9jYXQzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvZG9nMS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2RvZzIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9kb2czLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGVuZHBvaW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmQtcG9pbnQtY29udGFpbmVyXCIpO1xyXG5jb25zdCBlbmRwb2ludEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kLXBvaW50LWltZ1wiKTtcclxuY29uc3QgYXJ0aWNsZSA9IGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQ7XHJcbmNvbnN0IGZ3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3J3YXJkXCIpO1xyXG5jb25zdCBwdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJldlwiKTtcclxuXHJcbmNvbnN0IHN0dW5Qb2ludGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGZpbmdlcnMgPSBbLi4uZncsLi4ucHZdXHJcbiAgZmluZ2Vycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICBmLmNsYXNzTGlzdC5hZGQoXCJuby1wb2ludGVyXCIpO1xyXG4gIH0pO1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZmluZ2Vycy5mb3JFYWNoKChmKSA9PiB7XHJcbiAgICAgIGYuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXJcIik7XHJcbiAgICB9KTtcclxuICB9LCA1MDApO1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRlbmRwb2ludCA9IGFzeW5jICgpID0+IHtcclxuICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxyXG4gIGxldCBmaWxlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9tZWRpYVwiKVxyXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxyXG4gICAgLnRoZW4oKGQpID0+IFsuLi5kLm1lZGlhXSk7XHJcblxyXG4gIGxldCB0YXJnZXQsXHJcbiAgICBzcmMsXHJcbiAgICBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWxlcy5sZW5ndGgpO1xyXG4gIGxldCBzdGFydFNyYyA9IFwiLi9tZWRpYS9cIiArIGZpbGVzW2lkeF07XHJcbiAgZW5kcG9pbnRJbWcuc3JjID0gc3RhcnRTcmM7XHJcbiAgYXJ0aWNsZS5ocmVmID0gZmlsZXNbaWR4XTtcclxuXHJcbiAgZm9yICh0YXJnZXQgPSAwOyB0YXJnZXQgPCBmaWxlcy5sZW5ndGg7IHRhcmdldCsrKSB7XHJcbiAgICBpZiAodGFyZ2V0ID09IGlkeCkge1xyXG4gICAgICBmdy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibGVmdC10by1yaWdodFwiKTtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInJpZ2h0LXRvLWxlZnRcIik7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RlbXAtb3BhY2l0eScpXHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlkeCArPSAxO1xyXG4gICAgICAgICAgICBpZHggJT0gZmlsZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBzcmMgPSBmaWxlc1tpZHhdO1xyXG4gICAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJsZWZ0LXRvLXJpZ2h0XCIpO1xyXG4gICAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3RlbXAtb3BhY2l0eScpXHJcblxyXG4gICAgICAgICAgICBlbmRwb2ludEltZy5zcmMgPSBgLi9tZWRpYS8ke3NyY31gO1xyXG4gICAgICAgICAgICBhcnRpY2xlLmhyZWYgPSBmaWxlc1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgICAgICAgICBzdHVuUG9pbnRlcigpO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHB2LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0LXRvLXJpZ2h0XCIpO1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtdG8tbGVmdFwiKTtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGVtcC1vcGFjaXR5JylcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZHggLT0gMTtcclxuICAgICAgICAgICAgaWYgKGlkeCA8IDApIGlkeCA9IGZpbGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHNyYyA9IGZpbGVzW2lkeF07XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnNyYyA9IGAuL21lZGlhLyR7c3JjfWA7XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInJpZ2h0LXRvLWxlZnRcIik7XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGVtcC1vcGFjaXR5JylcclxuICAgICAgICAgICAgYXJ0aWNsZS5ocmVmID0gZmlsZXNbaWR4XTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaWR4KTtcclxuICAgICAgICAgICAgc3R1blBvaW50ZXIoKTtcclxuICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgZm9vdGVyIHRvIGVuZCBwYWdlXHJcbiAgIGNvbnNvbGUubG9nKCdmb290ZXInKVxyXG59IiwiY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG5jb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpO1xyXG5jb25zdCBtb2JCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbm1vZHVsZS5leHBvcnRzID0gYWN0aXZhdGUgPSAobW9kYWwpID0+IHtcclxuICByZWdCZygpO1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGJhbm5lciwgZm9vdGVyLCBtb2JCdG5dO1xyXG4gIGxldCBub3RNb2QgPSBbLi4uYWxsXS5maWx0ZXIoKHgpID0+ICF4LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLXdyYXBwZXJcIikpO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyLWVsZW1lbnRcIikpO1xyXG4gIHJldHVybiBbLi4ubm90TW9kXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVnQmcoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwicmVnLWJnXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsLWJnXCIpO1xyXG59XHJcblxyXG5jb25zdCBhY3RpdmF0ZURlZiA9ICgpID0+IHtcclxuICBsZXQgYmdFbGVtZW50cyA9IFt3b3JrLCBmb290ZXJdO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5yZW1vdmUoXCJibHVyLWVsZW1lbnQtc21cIikpO1xyXG4gIHJldHVybiBbLi4uYmdFbGVtZW50c10ubWFwKCh5KSA9PiB5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyXCIpKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBhY3RpdmF0ZSwgYWN0aXZhdGVEZWYgfTtcclxuIiwiY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyXCIpO1xyXG5jb25zdCB3b3JrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpO1xyXG5jb25zdCBtb2JCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IGRlYWN0aXZhdGUgPSAoKSA9PiB7XHJcbiAgbW9kYWxCZygpO1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGJhbm5lciwgZm9vdGVyLCBtb2JCdG5dO1xyXG4gIGxldCBub3RNb2QgPSBbLi4uYWxsXS5maWx0ZXIoKHgpID0+ICF4LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsLXdyYXBwZXJcIikpO1xyXG4gIGJnRWxlbWVudHMubWFwKChvKSA9PiBvLmNsYXNzTGlzdC5hZGQoXCJibHVyLWVsZW1lbnRcIikpO1xyXG4gIHJldHVybiBbLi4ubm90TW9kXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbW9kYWxCZygpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJyZWctYmdcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtYmdcIik7XHJcbn1cclxuXHJcblxyXG5jb25zdCBkZWFjdGl2YXRlRGVmID0gKCkgPT4ge1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGZvb3Rlcl07XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LmFkZChcImJsdXItZWxlbWVudC1zbVwiKSk7XHJcbiAgcmV0dXJuIFsuLi5iZ0VsZW1lbnRzXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2RlYWN0aXZhdGUsIGRlYWN0aXZhdGVEZWZ9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25sb2FkID0gKGUpID0+IHtcclxuICAvLyBiYW5uZXJcclxuICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13cmFwcGVyJylcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuXHJcbiAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodCs1XHJcbiAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArICdweCdcclxuICAvLyBiYW5uZXIgYXBwZWFycyBvbiBsb2FkXHJcbiAgaWYoYmFubmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLWJhbm5lcicpKXtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tYmFubmVyJylcclxuICB9XHJcblxyXG4gIC8vIHByZXNldCBtb2RhbCBoZWlnaHQgdG8gaGFsZiB0aGUgcGFnZSdzIGhlaWdodFxyXG4gIG1vZGFsLnN0eWxlLnRvcCA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMiktKG1vZGFsLmNsaWVudEhlaWdodC8yKSArICdweCc7XHJcbiAgXHJcbn07XHJcbiAgIiwiY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd3JhcHBlcicpXHJcbi8vIG1vZGFsIGFwcGVhcnNcclxuIGNvbnN0IHNob3dNb2RhbCA9IChkZWFjdGl2YXRlKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYobW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGRlYWN0aXZhdGUobW9kYWwpXHJcbiAgICAgICAgfVxyXG4gICAgfSwyMDAwKVxyXG59XHJcbi8vIG1vZGFsIGlzIGhpZGRlblxyXG5jb25zdCBoaWRlTW9kYWwgPSAoYWN0aXZhdGUpID0+IHtcclxuICAgICAgICBpZighbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tbW9kYWwnKSl7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tb2RhbCcpXHJcbiAgICAgICAgICAgIGFjdGl2YXRlKG1vZGFsKVxyXG4gICAgICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IHNob3dNb2RhbCxoaWRlTW9kYWwgfSIsImNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXInKVxyXG5sZXQgbmF2UG9zO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkdG9nZ2xlTmF2ID0gKGVuYWJsZVNjcm9sbCxkaXNhYmxlU2Nyb2xsLGFjdGl2YXRlRGVmLGRlYWN0aXZhdGVEZWYpID0+IHtcclxuIC8vIHdpbmRvdyBjbGljayBldmVudFxyXG4gIHdpbmRvdy5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cclxuICAgIGxldCBuYXZUb3AgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSwgbmF2TGVmdCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54LCBib3VuZGFyaWVzID0gcG9zLnggPCBuYXZMZWZ0IHx8IHBvcy55IDwgbmF2VG9wXHJcbiAgICBpZiAoYm91bmRhcmllcyAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtYnV0dG9uLW1vYmlsZScpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcclxuICAgICAgICBlbmFibGVTY3JvbGwoKVxyXG4gICAgICAgIGFjdGl2YXRlRGVmKClcclxuICAgICAgfVxyXG4gIH1cclxuLy8gbmF2IGNsaWNrIGV2ZW50XHJcbiAgbmF2YnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbmF2XCIpKSBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbmF2XCIpO1xyXG4gICAgaWYoIS9zaG93LW5hdi8udGVzdChuYXYuY2xhc3NMaXN0Wyd2YWx1ZSddKSkge1xyXG4gICAgICAgIGVuYWJsZVNjcm9sbCgpXHJcbiAgICAgICAgYWN0aXZhdGVEZWYoKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZGlzYWJsZVNjcm9sbCgpXHJcbiAgICAgIGRlYWN0aXZhdGVEZWYoKVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImNvbnN0IHdvcmtDb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuY29uc3QgbGltaXQgPSAxNTA7XHJcbmNvbnN0IGRiZHNociA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGJkcy1oclwiKTtcclxuY29uc3Qgd29ya3NlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrLXNlY3Rpb24nKVxyXG5jb25zdCBtaWRzY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5sZXQgZGJkc2ZpZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGJkcy1maWd1cmUnKVxyXG5kYmRzaHIuc3R5bGUudG9wID0gbWlkc2NyZWVuICsgXCJweFwiO1xyXG5jb25zdCBoYW5kbGVTbGlkZUVmZmVjdCA9IChmaWdzLHNlY3Rpb25zKSA9PiB7XHJcbiAgIC8vIGhhbmRsZSBhbGwgc2VjdGlvbnNcclxuICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjLGluZGV4KT0+e1xyXG4gICAgaWYoc2VjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPD0gKGRiZHNoci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ICsgMTApKXtcclxuICAgICAgc2VjLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZGJkcycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWMuY2xhc3NMaXN0LmFkZCgnaGlkZS1kYmRzJylcclxuICAgIH1cclxuICB9KVxyXG4gIC8vIGhhbmRsZSBmaWd1cmVzIGluIGRiZHNcclxuICBmaWdzLmZvckVhY2goKGZpZyxpZHgpPT57XHJcbiAgICBpZihpZHggJSAyID09IDApe1xyXG4gICAgICBmaWcuY2xhc3NMaXN0LmFkZCgncm93LXJldicpXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoJ3JvdycpXHJcbiAgICB9XHJcbiAgICBpZihmaWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA8PSAoZGJkc2hyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpKXtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZGJkcycpXHJcbiAgICAgIGZpZy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWRiZHMnKVxyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaW1nLXRyYW5zJylcclxuICAgICAgZmlnLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ltZy10cmFucy1kZWYnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZGJkcycpXHJcbiAgICAgIGZpZy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdoaWRlLWRiZHMnKVxyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnaW1nLXRyYW5zJylcclxuICAgICAgZmlnLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZy10cmFucy1kZWYnKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59XHJcbi8vIGVsb25nYXRlIHdvcmstY29udGFpbmVyIHNlY3Rpb24gb24gc2Nyb2xsXHJcbmNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XHJcbiAgbGV0IGZpZ3MgPSBbLi4uZGJkc2ZpZ3NdXHJcbiAgbGV0IHNlY3Rpb25zID0gWy4uLndvcmtzZWNdXHJcbiAgaGFuZGxlU2xpZGVFZmZlY3QoZmlncyxzZWN0aW9ucylcclxuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQgKyA1O1xyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItcmVnXCIpO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItc21cIik7XHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0ICsgNTtcclxuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XHJcbiAgfVxyXG59O1xyXG53b3JrQ29uLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuU2Nyb2xsKTtcclxuXHJcbi8vIGRpc2FibGUgc3JvbGwgZm9yIG1haW4gY29udGVudFxyXG5jb25zdCBkaXNhYmxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xyXG59O1xyXG4vLyBlbmFibGUgc3JvbGwgZm9yIG1haW4gY29udGVudFxyXG5jb25zdCBlbmFibGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgd29ya0Nvbi5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LmFkZChcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwieWVzLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuaW1wb3J0ICcuL21lZGlhL2NhdDEud2VicCdcclxuaW1wb3J0ICcuL21lZGlhL2NhdDIud2VicCdcclxuaW1wb3J0ICcuL21lZGlhL2NhdDMuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvZG9nMS5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9kb2cyLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2RvZzMuanBnJ1xyXG5cclxuICBfX3dlYnBhY2tfbm9uY2VfXyA9ICc8Pz1ub25jZT8+JztcclxuXHJcbiIsIi8vIHdlYiBwYWdlIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW1wb3J0c1xyXG5pbXBvcnQgXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbG9hZC5qc1wiOyAvLyB3aW5kb3cgZXZlbnRzXHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xpYi9lbGVtZW50L2Zvb3Rlci5qc1wiOyAvLyBmb290ZXJcclxuaW1wb3J0IGxvYWRlbmRwb2ludCBmcm9tICcuL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzJ1xyXG5pbXBvcnQgeyBhY3RpdmF0ZSwgYWN0aXZhdGVEZWYgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2FjdGl2YXRlLmpzXCI7XHJcbmltcG9ydCB7IGRlYWN0aXZhdGUsIGRlYWN0aXZhdGVEZWYgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2RlYWN0aXZhdGUuanNcIjsgLy8gZGVhY3RpdmF0ZSBhbGwgZWxlbWVudHMgZXhjZXB0IG1vZGFsXHJcbmltcG9ydCBsb2FkdG9nZ2xlTmF2IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qc1wiOyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXHJcbmltcG9ydCB7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9tb2RhbHMuanNcIjsgLy8gdGVzdCAtIG1vZGFsIHZpZXdcclxuaW1wb3J0IHsgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9zY3JvbGwuanNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG4vLyBzaG93TW9kYWwoZGVhY3RpdmF0ZSk7XHJcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgIGhpZGVNb2RhbChhY3RpdmF0ZSk7XHJcbi8vIH0sIDQwMDApO1xyXG5sb2FkRm9vdGVyKCk7XHJcbmxvYWR0b2dnbGVOYXYoZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsLCBhY3RpdmF0ZURlZiwgZGVhY3RpdmF0ZURlZik7XHJcbmxvYWRlbmRwb2ludCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==