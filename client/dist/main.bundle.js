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
  let silver = 'background-image:linear-gradient(45deg,transparent,#ffac8e,transparent);'
  let white = 'background-image:linear-gradient(-45deg,transparent,#ffac8e,transparent);'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0U7QUFDc0I7QUFDTSxDQUFDO0FBQ2pCLENBQUM7QUFDTSxDQUFDO0FBQ007QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiw2REFBVTtBQUNWLHlFQUFhLENBQUMsd0VBQVksRUFBRSx5RUFBYSxFQUFFLHlFQUFXLEVBQUUsNkVBQWE7QUFDckUsK0RBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9iYW5uZXJpbWcuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9jYXQxLndlYnAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2NhdDIud2VicCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvY2F0My5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL21lZGlhL2RvZzEuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9kb2cyLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvZG9nMy5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL211YmFuL3N0eWxlcy90ZW1wbGF0ZS5jc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvYWN0aXZhdGUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi90cmlnZ2Vycy9ldmVudHMvZGVhY3RpdmF0ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9sb2FkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL21vZGFscy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL3RyaWdnZXJzL2V2ZW50cy9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvdHJpZ2dlcnMvZXZlbnRzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvbmRvblRvd2VyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9nb2xkZW5HYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvYmFubmVyaW1nLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvY2F0MS53ZWJwXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9jYXQyLndlYnBcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2NhdDMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9kb2cxLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvZG9nMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2RvZzMuanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZW5kcG9pbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZC1wb2ludC1jb250YWluZXJcIik7XHJcbmNvbnN0IGVuZHBvaW50SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmQtcG9pbnQtaW1nXCIpO1xyXG5jb25zdCBhcnRpY2xlID0gZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudDtcclxuY29uc3QgZncgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcndhcmRcIik7XHJcbmNvbnN0IHB2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmV2XCIpO1xyXG5cclxuY29uc3Qgc3R1blBvaW50ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZmluZ2VycyA9IFsuLi5mdywuLi5wdl1cclxuICBmaW5nZXJzLmZvckVhY2goKGYpID0+IHtcclxuICAgIGYuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXJcIik7XHJcbiAgfSk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBmaW5nZXJzLmZvckVhY2goKGYpID0+IHtcclxuICAgICAgZi5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlclwiKTtcclxuICAgIH0pO1xyXG4gIH0sIDUwMCk7XHJcbn07XHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZGVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XHJcbiAgbGV0IGZpbGVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL21lZGlhXCIpXHJcbiAgICAudGhlbigocikgPT4gci5qc29uKCkpXHJcbiAgICAudGhlbigoZCkgPT4gWy4uLmQubWVkaWFdKTtcclxuXHJcbiAgbGV0IHRhcmdldCxcclxuICAgIHNyYyxcclxuICAgIGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZpbGVzLmxlbmd0aCk7XHJcbiAgbGV0IHN0YXJ0U3JjID0gXCIuL21lZGlhL1wiICsgZmlsZXNbaWR4XTtcclxuICBlbmRwb2ludEltZy5zcmMgPSBzdGFydFNyYztcclxuICBhcnRpY2xlLmhyZWYgPSBmaWxlc1tpZHhdO1xyXG5cclxuICBmb3IgKHRhcmdldCA9IDA7IHRhcmdldCA8IGZpbGVzLmxlbmd0aDsgdGFyZ2V0KyspIHtcclxuICAgIGlmICh0YXJnZXQgPT0gaWR4KSB7XHJcbiAgICAgIGZ3LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsZWZ0LXRvLXJpZ2h0XCIpO1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmlnaHQtdG8tbGVmdFwiKTtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGVtcC1vcGFjaXR5JylcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWR4ICs9IDE7XHJcbiAgICAgICAgICAgIGlkeCAlPSBmaWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNyYyA9IGZpbGVzW2lkeF07XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImxlZnQtdG8tcmlnaHRcIik7XHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndGVtcC1vcGFjaXR5JylcclxuXHJcbiAgICAgICAgICAgIGVuZHBvaW50SW1nLnNyYyA9IGAuL21lZGlhLyR7c3JjfWA7XHJcbiAgICAgICAgICAgIGFydGljbGUuaHJlZiA9IGZpbGVzW2lkeF07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkeCk7XHJcbiAgICAgICAgICAgIHN0dW5Qb2ludGVyKCk7XHJcbiAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcHYuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgIGVuZHBvaW50SW1nLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImxlZnQtdG8tcmlnaHRcIik7XHJcbiAgICAgICAgICBlbmRwb2ludEltZy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJyaWdodC10by1sZWZ0XCIpO1xyXG4gICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9wYWNpdHknKVxyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlkeCAtPSAxO1xyXG4gICAgICAgICAgICBpZiAoaWR4IDwgMCkgaWR4ID0gZmlsZXMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgc3JjID0gZmlsZXNbaWR4XTtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcuc3JjID0gYC4vbWVkaWEvJHtzcmN9YDtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicmlnaHQtdG8tbGVmdFwiKTtcclxuICAgICAgICAgICAgZW5kcG9pbnRJbWcucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0ZW1wLW9wYWNpdHknKVxyXG4gICAgICAgICAgICBhcnRpY2xlLmhyZWYgPSBmaWxlc1tpZHhdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgICAgICAgICBzdHVuUG9pbnRlcigpO1xyXG4gICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZEZvb3RlciA9ICgpID0+IHtcclxuICAgIC8vIHNldCBmb290ZXIgdG8gZW5kIHBhZ2VcclxuICAgY29uc29sZS5sb2coJ2Zvb3RlcicpXHJcbn0iLCJjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IG1vYkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcclxubW9kdWxlLmV4cG9ydHMgPSBhY3RpdmF0ZSA9IChtb2RhbCkgPT4ge1xyXG4gIHJlZ0JnKCk7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgYmFubmVyLCBmb290ZXIsIG1vYkJ0bl07XHJcbiAgbGV0IG5vdE1vZCA9IFsuLi5hbGxdLmZpbHRlcigoeCkgPT4gIXguY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtd3JhcHBlclwiKSk7XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZWxlbWVudFwiKSk7XHJcbiAgcmV0dXJuIFsuLi5ub3RNb2RdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWdCZygpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJyZWctYmdcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtYmdcIik7XHJcbn1cclxuXHJcbmNvbnN0IGFjdGl2YXRlRGVmID0gKCkgPT4ge1xyXG4gIGxldCBiZ0VsZW1lbnRzID0gW3dvcmssIGZvb3Rlcl07XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LnJlbW92ZShcImJsdXItZWxlbWVudC1zbVwiKSk7XHJcbiAgcmV0dXJuIFsuLi5iZ0VsZW1lbnRzXS5tYXAoKHkpID0+IHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXJcIikpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IGFjdGl2YXRlLCBhY3RpdmF0ZURlZiB9O1xyXG4iLCJjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiKlwiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XHJcbmNvbnN0IHdvcmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IG1vYkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcclxuY29uc3QgZGVhY3RpdmF0ZSA9ICgpID0+IHtcclxuICBtb2RhbEJnKCk7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgYmFubmVyLCBmb290ZXIsIG1vYkJ0bl07XHJcbiAgbGV0IG5vdE1vZCA9IFsuLi5hbGxdLmZpbHRlcigoeCkgPT4gIXguY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWwtd3JhcHBlclwiKSk7XHJcbiAgYmdFbGVtZW50cy5tYXAoKG8pID0+IG8uY2xhc3NMaXN0LmFkZChcImJsdXItZWxlbWVudFwiKSk7XHJcbiAgcmV0dXJuIFsuLi5ub3RNb2RdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtb2RhbEJnKCkge1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInJlZy1iZ1wiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1iZ1wiKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGRlYWN0aXZhdGVEZWYgPSAoKSA9PiB7XHJcbiAgbGV0IGJnRWxlbWVudHMgPSBbd29yaywgZm9vdGVyXTtcclxuICBiZ0VsZW1lbnRzLm1hcCgobykgPT4gby5jbGFzc0xpc3QuYWRkKFwiYmx1ci1lbGVtZW50LXNtXCIpKTtcclxuICByZXR1cm4gWy4uLmJnRWxlbWVudHNdLm1hcCgoeSkgPT4geS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlclwiKSk7XHJcbn07XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7ZGVhY3RpdmF0ZSwgZGVhY3RpdmF0ZURlZn0iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gIC8vIGJhbm5lclxyXG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKVxyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gIGNvbnN0IHdvcmtzZWNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnctY29udGFpbmVyJylcclxuICBsZXQgc2lsdmVyID0gJ2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHRyYW5zcGFyZW50LCNmZmFjOGUsdHJhbnNwYXJlbnQpOydcclxuICBsZXQgd2hpdGUgPSAnYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLHRyYW5zcGFyZW50LCNmZmFjOGUsdHJhbnNwYXJlbnQpOydcclxuXHJcbiAgd29ya3NlY3MuZm9yRWFjaCgodyxpKT0+e1xyXG4gICAgcmV0dXJuIGklMj09MD93LnN0eWxlID0gc2lsdmVyIDogdy5zdHlsZSA9IHdoaXRlO1xyXG4gIH0pXHJcblxyXG4gIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHRcclxuICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgJ3B4J1xyXG4gIC8vIGJhbm5lciBhcHBlYXJzIG9uIGxvYWRcclxuICBpZihiYW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tYmFubmVyJykpe1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1iYW5uZXInKVxyXG4gIH1cclxuXHJcbiAgLy8gcHJlc2V0IG1vZGFsIGhlaWdodCB0byBoYWxmIHRoZSBwYWdlJ3MgaGVpZ2h0XHJcbiAgbW9kYWwuc3R5bGUudG9wID0gKHdpbmRvdy5pbm5lckhlaWdodC8yKS0obW9kYWwuY2xpZW50SGVpZ2h0LzIpICsgJ3B4JztcclxuICBcclxufTtcclxuICAgICIsImNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdyYXBwZXInKVxyXG4vLyBtb2RhbCBhcHBlYXJzXHJcbiBjb25zdCBzaG93TW9kYWwgPSAoZGVhY3RpdmF0ZSkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgIGlmKG1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLW1vZGFsJykpe1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tbW9kYWwnKVxyXG4gICAgICAgICAgICBkZWFjdGl2YXRlKG1vZGFsKVxyXG4gICAgICAgIH1cclxuICAgIH0sMjAwMClcclxufVxyXG4vLyBtb2RhbCBpcyBoaWRkZW5cclxuY29uc3QgaGlkZU1vZGFsID0gKGFjdGl2YXRlKSA9PiB7XHJcbiAgICAgICAgaWYoIW1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLW1vZGFsJykpe1xyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tbW9kYWwnKVxyXG4gICAgICAgICAgICBhY3RpdmF0ZShtb2RhbClcclxuICAgICAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBzaG93TW9kYWwsaGlkZU1vZGFsIH0iLCJjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuY29uc3QgbmF2YnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXYtYnV0dG9uXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyJylcclxuY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcicpXHJcbmxldCBuYXZQb3M7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWR0b2dnbGVOYXYgPSAoZW5hYmxlU2Nyb2xsLGRpc2FibGVTY3JvbGwsYWN0aXZhdGVEZWYsZGVhY3RpdmF0ZURlZikgPT4ge1xyXG4gLy8gd2luZG93IGNsaWNrIGV2ZW50XHJcbiAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IHt4OmUucGFnZVgseTplLnBhZ2VZfVxyXG4gICAgbGV0IG5hdlRvcCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55LCBuYXZMZWZ0ID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLngsIGJvdW5kYXJpZXMgPSBwb3MueCA8IG5hdkxlZnQgfHwgcG9zLnkgPCBuYXZUb3BcclxuICAgIGlmIChib3VuZGFyaWVzICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1idXR0b24tbW9iaWxlJykpIHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbmF2XCIpO1xyXG4gICAgICAgIGVuYWJsZVNjcm9sbCgpXHJcbiAgICAgICAgYWN0aXZhdGVEZWYoKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXItcmVnJylcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLWhpZGUnKVxyXG4gICAgICB9XHJcbiAgfVxyXG4vLyBuYXYgY2xpY2sgZXZlbnRcclxuICBuYXZidG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbmF2IGNsaWNrZWQnKVxyXG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbmF2XCIpKSB7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1uYXZcIik7XHJcbiAgICB9XHJcbiAgICBpZighL3Nob3ctbmF2Ly50ZXN0KG5hdi5jbGFzc0xpc3RbJ3ZhbHVlJ10pKSB7XHJcbiAgICAgICAgZW5hYmxlU2Nyb2xsKClcclxuICAgICAgICBhY3RpdmF0ZURlZigpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBkaXNhYmxlU2Nyb2xsKClcclxuICAgICAgZGVhY3RpdmF0ZURlZigpXHJcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImNvbnN0IHdvcmtDb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndvcmtcIik7XHJcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG5jb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcclxuY29uc3QgbGltaXQgPSAxNTA7XHJcbmNvbnN0IGRiZHNociA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGJkcy1oclwiKTtcclxuY29uc3Qgd29ya3NlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53b3JrLXNlY3Rpb24nKVxyXG5jb25zdCBtaWRzY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5sZXQgZGJkc2ZpZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGJkcy1maWd1cmUnKVxyXG5kYmRzaHIuc3R5bGUudG9wID0gbWlkc2NyZWVuICsgXCJweFwiO1xyXG5jb25zdCBoYW5kbGVTbGlkZUVmZmVjdCA9IChmaWdzLHNlY3Rpb25zKSA9PiB7XHJcbiAgIC8vIGhhbmRsZSBhbGwgc2VjdGlvbnNcclxuICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjLGluZGV4KT0+e1xyXG4gICAgaWYoc2VjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkgPD0gKGRiZHNoci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55ICsgMTApKXtcclxuICAgICAgc2VjLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZGJkcycpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWMuY2xhc3NMaXN0LmFkZCgnaGlkZS1kYmRzJylcclxuICAgIH1cclxuICB9KVxyXG4gIC8vIGhhbmRsZSBmaWd1cmVzIGluIGRiZHNcclxuICBmaWdzLmZvckVhY2goKGZpZyxpZHgpPT57XHJcbiAgICBpZihpZHggJSAyID09IDApe1xyXG4gICAgICBmaWcuY2xhc3NMaXN0LmFkZCgncm93LXJldicpXHJcbiAgICB9IGVsc2UgeyBcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoJ3JvdycpXHJcbiAgICB9XHJcbiAgICBpZihmaWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSA8PSAoZGJkc2hyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnkpKXtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtZGJkcycpXHJcbiAgICAgIGZpZy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLWRiZHMnKVxyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaW1nLXRyYW5zJylcclxuICAgICAgZmlnLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2ltZy10cmFucy1kZWYnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlnLmNsYXNzTGlzdC5hZGQoJ2hpZGUtZGJkcycpXHJcbiAgICAgIGZpZy5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jbGFzc0xpc3QuYWRkKCdoaWRlLWRiZHMnKVxyXG4gICAgICBmaWcuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnaW1nLXRyYW5zJylcclxuICAgICAgZmlnLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2ltZy10cmFucy1kZWYnKVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG59XHJcbi8vIGVsb25nYXRlIHdvcmstY29udGFpbmVyIHNlY3Rpb24gb24gc2Nyb2xsXHJcbmNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XHJcbiAgbGV0IGZpZ3MgPSBbLi4uZGJkc2ZpZ3NdXHJcbiAgbGV0IHNlY3Rpb25zID0gWy4uLndvcmtzZWNdXHJcbiAgaGFuZGxlU2xpZGVFZmZlY3QoZmlncyxzZWN0aW9ucylcclxuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gIH1cclxufTtcclxud29ya0Nvbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGxpc3RlblNjcm9sbCk7XHJcblxyXG4vLyBkaXNhYmxlIHNyb2xsIGZvciBtYWluIGNvbnRlbnRcclxuY29uc3QgZGlzYWJsZVNjcm9sbCA9ICgpID0+IHtcclxuICB3b3JrQ29uLmNsYXNzTGlzdC5yZW1vdmUoXCJ5ZXMtc2Nyb2xsXCIpO1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJ5ZXMtc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcclxufTtcclxuLy8gZW5hYmxlIHNyb2xsIGZvciBtYWluIGNvbnRlbnRcclxuY29uc3QgZW5hYmxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gIHdvcmtDb24uY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcclxuICB3b3JrQ29uLmNsYXNzTGlzdC5hZGQoXCJ5ZXMtc2Nyb2xsXCIpO1xyXG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcInllcy1zY3JvbGxcIik7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tc2Nyb2xsXCIpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7IGVuYWJsZVNjcm9sbCwgZGlzYWJsZVNjcm9sbCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGluamVjdGlvbnNcclxuaW1wb3J0ICcuL211YmFuL3N0eWxlcy90ZW1wbGF0ZS5jc3MnXHJcbmltcG9ydCAnLi9tZWRpYS9jYXQxLndlYnAnXHJcbmltcG9ydCAnLi9tZWRpYS9jYXQyLndlYnAnXHJcbmltcG9ydCAnLi9tZWRpYS9jYXQzLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2RvZzEuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvZG9nMi5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9kb2czLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2Jhbm5lcmltZy5qcGcnXHJcblxyXG5cclxuICBfX3dlYnBhY2tfbm9uY2VfXyA9ICc8Pz1ub25jZT8+JztcclxuXHJcbiIsIi8vIHdlYiBwYWdlIGZ1bmN0aW9uYWxpdHlcclxuLy8gaW1wb3J0c1xyXG5pbXBvcnQgXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbG9hZC5qc1wiOyAvLyB3aW5kb3cgZXZlbnRzXHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xpYi9lbGVtZW50L2Zvb3Rlci5qc1wiOyAvLyBmb290ZXJcclxuaW1wb3J0IGxvYWRlbmRwb2ludCBmcm9tICcuL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzJ1xyXG5pbXBvcnQgeyBhY3RpdmF0ZSwgYWN0aXZhdGVEZWYgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2FjdGl2YXRlLmpzXCI7XHJcbmltcG9ydCB7IGRlYWN0aXZhdGUsIGRlYWN0aXZhdGVEZWYgfSBmcm9tIFwiLi9saWIvdHJpZ2dlcnMvZXZlbnRzL2RlYWN0aXZhdGUuanNcIjsgLy8gZGVhY3RpdmF0ZSBhbGwgZWxlbWVudHMgZXhjZXB0IG1vZGFsXHJcbmltcG9ydCBsb2FkdG9nZ2xlTmF2IGZyb20gXCIuL2xpYi90cmlnZ2Vycy9ldmVudHMvbmF2aWdhdGlvbi5qc1wiOyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXHJcbmltcG9ydCB7IHNob3dNb2RhbCwgaGlkZU1vZGFsIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9tb2RhbHMuanNcIjsgLy8gdGVzdCAtIG1vZGFsIHZpZXdcclxuaW1wb3J0IHsgZGlzYWJsZVNjcm9sbCwgZW5hYmxlU2Nyb2xsIH0gZnJvbSBcIi4vbGliL3RyaWdnZXJzL2V2ZW50cy9zY3JvbGwuanNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uc1xyXG4vLyBzaG93TW9kYWwoZGVhY3RpdmF0ZSk7XHJcbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgIGhpZGVNb2RhbChhY3RpdmF0ZSk7XHJcbi8vIH0sIDQwMDApO1xyXG5sb2FkRm9vdGVyKCk7XHJcbmxvYWR0b2dnbGVOYXYoZW5hYmxlU2Nyb2xsLCBkaXNhYmxlU2Nyb2xsLCBhY3RpdmF0ZURlZiwgZGVhY3RpdmF0ZURlZik7XHJcbmxvYWRlbmRwb2ludCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==