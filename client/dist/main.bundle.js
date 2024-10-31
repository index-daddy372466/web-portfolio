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
    return null;
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
// console.log(workcon)

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
      // console.log(article)
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


module.exports = loadTags = ([...captions],nosaj) => {
   let fcaptions = document.querySelectorAll('figcaption.f-caption');
   let figures = document.querySelectorAll('figure');
   let tagText = 'under development';
   let linx = nosaj['linx'];
   let gits = [];

   // filter captons by h3 tags
   fcaptions = [...fcaptions].filter(cap=>{
      const text = cap.textContent.toLowerCase();
      let capincluded = captions.includes(text);
      return capincluded
   })
   
   // figure captions
   fcaptions.forEach(caption=>{
      let figure = caption.parentElement;
      let h3 = document.createElement('h3')
      h3.classList.add('tag-h3')
      h3.textContent = tagText;
      figure.append(h3)
   })

   // language tags
   figures.forEach((fig,newton)=>{
   const article = fig.children[0];
   let icons = [...article.children].filter(x=>/(fa-|readme-tag)/i.test(x.classList))
   const git = [...article.children].filter(x=>/readme-tag/i.test(x.classList))
   // push valid git into gits
   if(git.length > 0){
      gits.push(git[0])
   }
   let h3 = [...fig.children].findIndex(x=>/tag-h3/i.test(x.classList))
   // icons.reduce((a,b)=> h3 == -1 ? b.classList.add('icon-top') : b.classList.add('icon-bottom'),0)
   icons.reduce((prev,curr)=>{
      if(h3 == -1){
         !curr.classList.contains('readme-tag') ? curr.classList.add('icon-top') : curr.classList.add('readme-top')
      } {
         !curr.classList.contains('readme-tag') ? curr.classList.add('icon-bottom') : curr.classList.add('readme-bottom')
      }
   },0)
})
// console.log(nosaj)

// console.log(gits)
// iterate over git elements
gits.forEach((icon,idx)=>{
   // click event
   icon.onclick = e => {
    window.open(linx[idx].link,'_blank')
   }
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
const footer = document.getElementById("contact");

// elongate work-container section on scroll
const listenScroll = (e) => {
  // console.log('cl height')
  // console.log(e.target.clientHeight)
  // console.log(e.target.scrollTop)
  if (e.target.scrollTop >= limit) {
    banner.classList.remove("banner-reg");
    banner.classList.add("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
    footer.classList.remove('footer-up') 
    footer.classList.add('footer-down') 
  } 
  else {
    banner.classList.add("banner-reg");
    banner.classList.remove("banner-sm");
    navPos = banner.clientHeight;
    nav.style.top = navPos + "px";
    footer.classList.remove('footer-down') 
    footer.classList.add('footer-up') 
  }


  if((e.target.scrollTop) >= e.target.clientHeight){
    // console.log('you hit the target bro on scroll')
    footer.classList.remove('footer-down') 
    footer.classList.add('footer-up') 
  }
};

workCon.addEventListener("scroll", listenScroll);


/***/ }),

/***/ "./src/media/gitlinx.json":
/*!********************************!*\
  !*** ./src/media/gitlinx.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"linx":[{"id":1,"caption":"calculator","link":"https://github.com/index-daddy372466/interactive-calculator"},{"id":2,"caption":"notepad","link":"https://github.com/KylesTech95/notes-server/tree/passport"},{"id":3,"caption":"chatrooms","link":"https://github.com/index-daddy372466/socket-basics/tree/user-info"},{"id":4,"caption":"snake","link":"https://github.com/kylestech95/snake-game"},{"id":5,"caption":"simon","link":"https://github.com/index-daddy372466/simon-says-reactjs"},{"id":6,"caption":"mancala","link":"https://github.com/KylesTech95/mancala-game"},{"id":7,"caption":"database playground","link":"https://github.com/KylesTech95/database-playground-fork"},{"id":8,"caption":"raining dildos","link":"https://github.com/index-daddy372466/raining-sex-toys/tree/develop"},{"id":9,"caption":"public key infrastructure","link":"https://github.com/index-daddy372466/key-encryption-playground/tree/main"}]}');

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
/* harmony import */ var _media_gitlinx_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media/gitlinx.json */ "./src/media/gitlinx.json");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/element/footer.js */ "./src/lib/element/footer.js");
/* harmony import */ var _lib_element_footer_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/element/endpoint.js */ "./src/lib/element/endpoint.js");
/* harmony import */ var _lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_element_office_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/element/office.js */ "./src/lib/element/office.js");
/* harmony import */ var _lib_element_office_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_lib_element_office_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_element_tags_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/element/tags.js */ "./src/lib/element/tags.js");
/* harmony import */ var _lib_element_tags_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_element_tags_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/element/games.js */ "./src/lib/element/games.js");
/* harmony import */ var _lib_element_games_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_element_games_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/element/navigation.js */ "./src/lib/element/navigation.js");
/* harmony import */ var _lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_data_underdev_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/data/underdev.js */ "./src/lib/data/underdev.js");
// client events





// elements
 // footer




 // navigation click (mobile)

// tags

// console.log(underDev)
//------------------------------------------------
_lib_element_navigation_js__WEBPACK_IMPORTED_MODULE_9___default()();
_lib_element_tags_js__WEBPACK_IMPORTED_MODULE_7___default()(_lib_data_underdev_js__WEBPACK_IMPORTED_MODULE_10__.underdev,_media_gitlinx_json__WEBPACK_IMPORTED_MODULE_3__);
_lib_element_office_js__WEBPACK_IMPORTED_MODULE_6___default()();
_lib_element_games_js__WEBPACK_IMPORTED_MODULE_8___default()();
_lib_element_endpoint_js__WEBPACK_IMPORTED_MODULE_5___default()();
_lib_element_footer_js__WEBPACK_IMPORTED_MODULE_4___default()();
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
/* harmony import */ var _media_gitlinx_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./media/gitlinx.json */ "./src/media/gitlinx.json");
// injections







  __webpack_require__.nc = '<?=nonce?>';
  
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BELDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDOEI7QUFDRTtBQUNBO0FBQ1E7O0FBRXhDO0FBQ2lELENBQUM7QUFDRTtBQUNKO0FBQ0o7QUFDRTtBQUNJLENBQUM7QUFDRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsaUVBQU87QUFDUCwyREFBUSxDQUFDLDREQUFRLENBQUMsZ0RBQUs7QUFDdkIsNkRBQVU7QUFDViw0REFBUztBQUNULCtEQUFZO0FBQ1osNkRBQVUsRzs7Ozs7Ozs7Ozs7Ozs7QUN2QlY7QUFDb0M7QUFDRTtBQUNSO0FBQ0M7QUFDRjs7O0FBRzdCLEVBQUUsc0JBQWlCO0FBQ25CLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvYmFubmVyaW1nLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbWVkaWEvYmFubmVyaW1nMi5qcGciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL211YmFuL3N0eWxlcy9tZWRpYXF1ZXJ5LmNzcz9hM2Y4Iiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzPzE3ZTciLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9kYXRhL3VuZGVyZGV2LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9lbmRwb2ludC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9nYW1lcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvb2ZmaWNlLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC90YWdzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZXZlbnRzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9ldmVudHMvcmVzaXplLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZXZlbnRzL3Njcm9sbC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xvbmRvblRvd2VyLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9nb2xkZW5HYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvYmFubmVyaW1nLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIvbWVkaWEvYmFubmVyaW1nMi5qcGdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJjb25zdCBjdXJyZW50ID0gW1wiY2hhdHJvb21zXCIsXCJzcWxcIl1cbm1vZHVsZS5leHBvcnRzLnVuZGVyZGV2ID0gY3VycmVudCIsIm1vZHVsZS5leHBvcnRzID0gbG9hZGVuZHBvaW50ID0gYXN5bmMgKCkgPT4ge1xuICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxuICByZXR1cm4gbnVsbFxufTtcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcblxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRm9vdGVyID0gKCkgPT4ge1xuICAgIC8vIHNldCBmb290ZXIgdG8gZW5kIHBhZ2VcbiAgICByZXR1cm4gbnVsbDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRHYW1lcyA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxuICAgIC8vIGFzc2lnbiBjb2xvcnMgdG8gc2ltb24gYm9hcmRcbiAgICBjb25zdCBzaW1vbiA9IHtcbiAgICAgIGNvbG9yczpbJ3JlZCcsJ2dyZWVuJywnYmx1ZScsJ3llbGxvdyddLFxuICAgICAgYXJyOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW1vbi1ib2QnKSxcbiAgICB9XG4gICAgc2ltb24uYXJyLmZvckVhY2goKGJsb2NrLGlkeCk9PntcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYGJsb2NrLSR7c2ltb24uY29sb3JzW2lkeF19YClcbiAgICB9KVxuICAgIFxuICB9O1xuICAiLCJjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKTtcbmNvbnN0IG5hdmJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcbmNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXInKVxuY29uc3QgYWxsZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJylcbmNvbnN0IHdvcmtjb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29yaycpXG5jb25zdCBuYXZpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdC1pdGVtJylcbi8vIGNvbnNvbGUubG9nKHdvcmtjb24pXG5cbm1vZHVsZS5leHBvcnRzID0gbG9hZE5hdiA9ICgpID0+IHtcbiAvLyB3aW5kb3cgY2xpY2sgZXZlbnRcbiAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cbiAgICBsZXQgbmF2VG9wID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnksIG5hdkxlZnQgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCwgYm91bmRhcmllcyA9IHBvcy54IDwgbmF2TGVmdCB8fCBwb3MueSA8IG5hdlRvcFxuICAgIGlmIChib3VuZGFyaWVzICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1idXR0b24tbW9iaWxlJykpIHtcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXG4gICAgICAgIHJlc3RvcmVCYWNrZ3JvdW5kKHdvcmtjb24pXG4gICAgICB9XG4gIH1cbi8vIG5hdiBjbGljayBldmVudFxuICBuYXZidG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgaWYgKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW4tbmF2XCIpKSB7XG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbmF2XCIpO1xuICAgIH1cbiAgICAvLyBpZiBuYXYgaXMgbm90IGRpc3BsYXllZFxuICAgIGlmKCEvc2hvdy1uYXYvLnRlc3QobmF2LmNsYXNzTGlzdFsndmFsdWUnXSkpIHtcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXG4gICAgICAgIC8vIHVuYmx1ciBiZ1xuICAgICAgICByZXN0b3JlQmFja2dyb3VuZCh3b3JrY29uKVxuICAgIH1cbiAgICBlbHNle1xuICAgIC8vIGlmIG5hdiBpcyBkaXNwbGF5ZWRcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxuICAgICAgLy8gYmx1ciBiYWNrZ3JvdW5kXG4gICAgICBibHVyQmFja2dyb3VuZCh3b3JrY29uKVxuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGJsdXJCYWNrZ3JvdW5kKGVsZW0pe1xuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2JsdXItZWxlbWVudC1zbScpXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlcicpXG59XG5mdW5jdGlvbiByZXN0b3JlQmFja2dyb3VuZChlbGVtKXtcbiAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdibHVyLWVsZW1lbnQtc20nKVxuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ25vLXBvaW50ZXInKVxuIH1cblxuIGZ1bmN0aW9uIGV4dGVuZE5hdk9wdChhcnIpe1xuICBhcnIuZm9yRWFjaChsaT0+e1xuICAgIC8vIG9uY2xpY2tzXG4gICAgbGkub25jbGljayA9IGUgPT4ge1xuICAgICAgY29uc3QgYXJ0aWNsZSA9IGUuY3VycmVudFRhcmdldC5jaGlsZHJlblswXVxuICAgICAgLy8gZXh0ZW5kIGFydGljbGUncyBjYXBhYmlsaXRpZXMgdG8gdGhlIHBhcmVudCAobmF2IGxpbmspXG4gICAgICAvLyBjb25zb2xlLmxvZyhhcnRpY2xlKVxuICAgICAgd2luZG93Lm9wZW4oYXJ0aWNsZS5ocmVmLCdfYmxhbmsnKVxuICAgIH1cbiAgfSlcbiB9XG4gZXh0ZW5kTmF2T3B0KG5hdml0ZW1zKSIsIm1vZHVsZS5leHBvcnRzID0gbG9hZG9mZmljZSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxuICAgIHJldHVybiBudWxsXG4gIH07XG4gICIsIlxubW9kdWxlLmV4cG9ydHMgPSBsb2FkVGFncyA9IChbLi4uY2FwdGlvbnNdLG5vc2FqKSA9PiB7XG4gICBsZXQgZmNhcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmlnY2FwdGlvbi5mLWNhcHRpb24nKTtcbiAgIGxldCBmaWd1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmlndXJlJyk7XG4gICBsZXQgdGFnVGV4dCA9ICd1bmRlciBkZXZlbG9wbWVudCc7XG4gICBsZXQgbGlueCA9IG5vc2FqWydsaW54J107XG4gICBsZXQgZ2l0cyA9IFtdO1xuXG4gICAvLyBmaWx0ZXIgY2FwdG9ucyBieSBoMyB0YWdzXG4gICBmY2FwdGlvbnMgPSBbLi4uZmNhcHRpb25zXS5maWx0ZXIoY2FwPT57XG4gICAgICBjb25zdCB0ZXh0ID0gY2FwLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICBsZXQgY2FwaW5jbHVkZWQgPSBjYXB0aW9ucy5pbmNsdWRlcyh0ZXh0KTtcbiAgICAgIHJldHVybiBjYXBpbmNsdWRlZFxuICAgfSlcbiAgIFxuICAgLy8gZmlndXJlIGNhcHRpb25zXG4gICBmY2FwdGlvbnMuZm9yRWFjaChjYXB0aW9uPT57XG4gICAgICBsZXQgZmlndXJlID0gY2FwdGlvbi5wYXJlbnRFbGVtZW50O1xuICAgICAgbGV0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgaDMuY2xhc3NMaXN0LmFkZCgndGFnLWgzJylcbiAgICAgIGgzLnRleHRDb250ZW50ID0gdGFnVGV4dDtcbiAgICAgIGZpZ3VyZS5hcHBlbmQoaDMpXG4gICB9KVxuXG4gICAvLyBsYW5ndWFnZSB0YWdzXG4gICBmaWd1cmVzLmZvckVhY2goKGZpZyxuZXd0b24pPT57XG4gICBjb25zdCBhcnRpY2xlID0gZmlnLmNoaWxkcmVuWzBdO1xuICAgbGV0IGljb25zID0gWy4uLmFydGljbGUuY2hpbGRyZW5dLmZpbHRlcih4PT4vKGZhLXxyZWFkbWUtdGFnKS9pLnRlc3QoeC5jbGFzc0xpc3QpKVxuICAgY29uc3QgZ2l0ID0gWy4uLmFydGljbGUuY2hpbGRyZW5dLmZpbHRlcih4PT4vcmVhZG1lLXRhZy9pLnRlc3QoeC5jbGFzc0xpc3QpKVxuICAgLy8gcHVzaCB2YWxpZCBnaXQgaW50byBnaXRzXG4gICBpZihnaXQubGVuZ3RoID4gMCl7XG4gICAgICBnaXRzLnB1c2goZ2l0WzBdKVxuICAgfVxuICAgbGV0IGgzID0gWy4uLmZpZy5jaGlsZHJlbl0uZmluZEluZGV4KHg9Pi90YWctaDMvaS50ZXN0KHguY2xhc3NMaXN0KSlcbiAgIC8vIGljb25zLnJlZHVjZSgoYSxiKT0+IGgzID09IC0xID8gYi5jbGFzc0xpc3QuYWRkKCdpY29uLXRvcCcpIDogYi5jbGFzc0xpc3QuYWRkKCdpY29uLWJvdHRvbScpLDApXG4gICBpY29ucy5yZWR1Y2UoKHByZXYsY3Vycik9PntcbiAgICAgIGlmKGgzID09IC0xKXtcbiAgICAgICAgICFjdXJyLmNsYXNzTGlzdC5jb250YWlucygncmVhZG1lLXRhZycpID8gY3Vyci5jbGFzc0xpc3QuYWRkKCdpY29uLXRvcCcpIDogY3Vyci5jbGFzc0xpc3QuYWRkKCdyZWFkbWUtdG9wJylcbiAgICAgIH0ge1xuICAgICAgICAgIWN1cnIuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWFkbWUtdGFnJykgPyBjdXJyLmNsYXNzTGlzdC5hZGQoJ2ljb24tYm90dG9tJykgOiBjdXJyLmNsYXNzTGlzdC5hZGQoJ3JlYWRtZS1ib3R0b20nKVxuICAgICAgfVxuICAgfSwwKVxufSlcbi8vIGNvbnNvbGUubG9nKG5vc2FqKVxuXG4vLyBjb25zb2xlLmxvZyhnaXRzKVxuLy8gaXRlcmF0ZSBvdmVyIGdpdCBlbGVtZW50c1xuZ2l0cy5mb3JFYWNoKChpY29uLGlkeCk9PntcbiAgIC8vIGNsaWNrIGV2ZW50XG4gICBpY29uLm9uY2xpY2sgPSBlID0+IHtcbiAgICB3aW5kb3cub3BlbihsaW54W2lkeF0ubGluaywnX2JsYW5rJylcbiAgIH1cbn0pXG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XG4gICAgLy8gYmFubmVyXG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgLy8gbGV0IHNpbHZlciA9ICdiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXG4gICAgLy8gbGV0IHdoaXRlID0gJ2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KC00NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXG4gIFxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHRcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgJ3B4J1xuICAgIC8vIGJhbm5lciBhcHBlYXJzIG9uIGxvYWRcbiAgICBpZihiYW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tYmFubmVyJykpe1xuICAgICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1iYW5uZXInKVxuICAgIH1cblxuICAgIC8vIHN3aXRjaCBiYW5uZXIgYi93IGRlc2t0b3AgJiBtb2JpbGVcbiAgICBjb25maWdCYW5uZXJJbWcoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYWNlLWltZycpKVxuICAgIGNsaWNrRmlnQ2FwdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZi1jYXB0aW9uJykpXG4gIH07XG5cbiAgLy8gc3dpdGNoIGJldHdlZW4gMiBiYW5uZXJzIGRlcGVuZGVudCBvbiBzY3JlZW4gd2lkdGhcbiAgZnVuY3Rpb24gY29uZmlnQmFubmVySW1nKGltZ3Mpe1xuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gOTUwLCBiYW5uZXIxID0gYC4vbWVkaWEvYmFubmVyaW1nLmpwZ2AsIGJhbm5lcjIgPSBgLi9tZWRpYS9iYW5uZXJpbWcyLmpwZ2BcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXG4gIH1cbiAgICAgIFxuICBmdW5jdGlvbiBjbGlja0ZpZ0NhcHRpb24oYXJyKXtcbiAgICBsZXQgdGFyZ2V0O1xuICAgIGFyci5mb3JFYWNoKGY9PntcbiAgICAgIGYub25jbGljayA9IGUgPT4ge1xuICAgICAgICBpZihlLmN1cnJlbnRUYXJnZXQgPT0gZil7XG4gICAgICAgICAgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgIGNvbnN0IGFydGljbGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFydGljbGUuaHJlZilcbiAgICAgICAgICB3aW5kb3cub3BlbihhcnRpY2xlLmhyZWYsJ19ibGFuaycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25yZXNpemUgPSAoZSkgPT4ge1xuICAgIC8vIG1ldGhvZFxuICAgIGNvbmZpZ0Jhbm5lckltZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BhY2UtaW1nJykpXG4gICAgICB9O1xuXG4gIGZ1bmN0aW9uIGNvbmZpZ0Jhbm5lckltZyhpbWdzKXtcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXG4gICAgcmV0dXJuIGltZ3MuZm9yRWFjaChpbWc9PmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPj0gbW9iaWxlV2lkdGggPyBpbWcuc3JjID0gYmFubmVyMiA6IGltZy5zcmMgPSBiYW5uZXIxKVxuICB9XG4gICAgICAgICAgIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcbmNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG5jb25zdCBsaW1pdCA9IDE1MDtcbmNvbnN0IGRiZHNociA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGJkcy1oclwiKTtcbmNvbnN0IG1pZHNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG5kYmRzaHIuc3R5bGUudG9wID0gbWlkc2NyZWVuICsgXCJweFwiO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpO1xuXG4vLyBlbG9uZ2F0ZSB3b3JrLWNvbnRhaW5lciBzZWN0aW9uIG9uIHNjcm9sbFxuY29uc3QgbGlzdGVuU2Nyb2xsID0gKGUpID0+IHtcbiAgLy8gY29uc29sZS5sb2coJ2NsIGhlaWdodCcpXG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsaWVudEhlaWdodClcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuc2Nyb2xsVG9wKVxuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItcmVnXCIpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXNtXCIpO1xuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcbiAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLXVwJykgXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1kb3duJykgXG4gIH0gXG4gIGVsc2Uge1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXJlZ1wiKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1zbVwiKTtcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0O1xuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1kb3duJykgXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci11cCcpIFxuICB9XG5cblxuICBpZigoZS50YXJnZXQuc2Nyb2xsVG9wKSA+PSBlLnRhcmdldC5jbGllbnRIZWlnaHQpe1xuICAgIC8vIGNvbnNvbGUubG9nKCd5b3UgaGl0IHRoZSB0YXJnZXQgYnJvIG9uIHNjcm9sbCcpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1kb3duJykgXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci11cCcpIFxuICB9XG59O1xuXG53b3JrQ29uLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuU2Nyb2xsKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gY2xpZW50IGV2ZW50c1xuaW1wb3J0IFwiLi9saWIvZXZlbnRzL2xvYWQuanNcIjtcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9zY3JvbGwuanNcIjtcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9yZXNpemUuanNcIjtcbmltcG9ydCBub3NhaiBmcm9tICcuL21lZGlhL2dpdGxpbnguanNvbidcblxuLy8gZWxlbWVudHNcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xpYi9lbGVtZW50L2Zvb3Rlci5qc1wiOyAvLyBmb290ZXJcbmltcG9ydCBsb2FkZW5kcG9pbnQgZnJvbSAnLi9saWIvZWxlbWVudC9lbmRwb2ludC5qcydcbmltcG9ydCBsb2FkT2ZmaWNlIGZyb20gJy4vbGliL2VsZW1lbnQvb2ZmaWNlLmpzJ1xuaW1wb3J0IGxvYWRUYWdzIGZyb20gJy4vbGliL2VsZW1lbnQvdGFncy5qcydcbmltcG9ydCBsb2FkR2FtZXMgZnJvbSAnLi9saWIvZWxlbWVudC9nYW1lcy5qcydcbmltcG9ydCBsb2FkTmF2IGZyb20gXCIuL2xpYi9lbGVtZW50L25hdmlnYXRpb24uanNcIjsgLy8gbmF2aWdhdGlvbiBjbGljayAobW9iaWxlKVxuaW1wb3J0IHsgdW5kZXJkZXYgfSBmcm9tIFwiLi9saWIvZGF0YS91bmRlcmRldi5qc1wiO1xuLy8gdGFnc1xuXG4vLyBjb25zb2xlLmxvZyh1bmRlckRldilcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5sb2FkTmF2KCk7XG5sb2FkVGFncyh1bmRlcmRldixub3Nhaik7XG5sb2FkT2ZmaWNlKCk7XG5sb2FkR2FtZXMoKTtcbmxvYWRlbmRwb2ludCgpO1xubG9hZEZvb3RlcigpOyIsIi8vIGluamVjdGlvbnNcbmltcG9ydCAnLi9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzJ1xuaW1wb3J0ICcuL211YmFuL3N0eWxlcy9tZWRpYXF1ZXJ5LmNzcydcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcuanBnJ1xuaW1wb3J0ICcuL21lZGlhL2Jhbm5lcmltZzIuanBnJ1xuaW1wb3J0ICcuL21lZGlhL2dpdGxpbnguanNvbidcblxuXG4gIF9fd2VicGFja19ub25jZV9fID0gJzw/PW5vbmNlPz4nO1xuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=