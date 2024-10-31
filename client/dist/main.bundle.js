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

const current = ["chatrooms","sql",]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzhCO0FBQ0U7QUFDQTtBQUNRO0FBQ3hDO0FBQ0E7QUFDaUQsQ0FBQztBQUNFO0FBQ0o7QUFDSjtBQUNFO0FBQ0ksQ0FBQztBQUNEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQU87QUFDUCwyREFBUSxDQUFDLDREQUFRLENBQUMsZ0RBQUs7QUFDdkIsNkRBQVU7QUFDViw0REFBUztBQUNULCtEQUFZO0FBQ1osNkRBQVUsRzs7Ozs7Ozs7Ozs7Ozs7QUN2QlY7QUFDb0M7QUFDRTtBQUNSO0FBQ0M7QUFDRjtBQUM3QjtBQUNBO0FBQ0EsRUFBRSxzQkFBaUI7QUFDbkIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9iYW5uZXJpbWcuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9iYW5uZXJpbWcyLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbXViYW4vc3R5bGVzL21lZGlhcXVlcnkuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tdWJhbi9zdHlsZXMvdGVtcGxhdGUuY3NzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZGF0YS91bmRlcmRldi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZW5kcG9pbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvZ2FtZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L29mZmljZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2VsZW1lbnQvdGFncy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2V2ZW50cy9sb2FkLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZXZlbnRzL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2V2ZW50cy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9sb25kb25Ub3dlci5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvZ29sZGVuR2F0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2Jhbm5lcmltZy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiL21lZGlhL2Jhbm5lcmltZzIuanBnXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgY3VycmVudCA9IFtcImNoYXRyb29tc1wiLFwic3FsXCIsXVxyXG5tb2R1bGUuZXhwb3J0cy51bmRlcmRldiA9IGN1cnJlbnQiLCJtb2R1bGUuZXhwb3J0cyA9IGxvYWRlbmRwb2ludCA9IGFzeW5jICgpID0+IHtcclxuICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxyXG4gIHJldHVybiBudWxsXHJcbn07XHJcbiIsImNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0JylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZEZvb3RlciA9ICgpID0+IHtcclxuICAgIC8vIHNldCBmb290ZXIgdG8gZW5kIHBhZ2VcclxuICAgIHJldHVybiBudWxsO1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSBsb2FkR2FtZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBmZXRjaCBtZWRpYSBlbmRwb2ludFxyXG4gICAgLy8gYXNzaWduIGNvbG9ycyB0byBzaW1vbiBib2FyZFxyXG4gICAgY29uc3Qgc2ltb24gPSB7XHJcbiAgICAgIGNvbG9yczpbJ3JlZCcsJ2dyZWVuJywnYmx1ZScsJ3llbGxvdyddLFxyXG4gICAgICBhcnI6ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpbW9uLWJvZCcpLFxyXG4gICAgfVxyXG4gICAgc2ltb24uYXJyLmZvckVhY2goKGJsb2NrLGlkeCk9PntcclxuICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChgYmxvY2stJHtzaW1vbi5jb2xvcnNbaWR4XX1gKVxyXG4gICAgfSlcclxuICAgIFxyXG4gIH07XHJcbiAgIiwiY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbmNvbnN0IG5hdmJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2LWJ1dHRvblwiKTtcclxuY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcicpXHJcbmNvbnN0IGFsbGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpXHJcbmNvbnN0IHdvcmtjb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29yaycpXHJcbmNvbnN0IG5hdml0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1saXN0LWl0ZW0nKVxyXG4vLyBjb25zb2xlLmxvZyh3b3JrY29uKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkTmF2ID0gKCkgPT4ge1xyXG4gLy8gd2luZG93IGNsaWNrIGV2ZW50XHJcbiAgd2luZG93Lm9uY2xpY2sgPSBlID0+IHtcclxuICAgIGNvbnN0IHBvcyA9IHt4OmUucGFnZVgseTplLnBhZ2VZfVxyXG4gICAgbGV0IG5hdlRvcCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55LCBuYXZMZWZ0ID0gbmF2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLngsIGJvdW5kYXJpZXMgPSBwb3MueCA8IG5hdkxlZnQgfHwgcG9zLnkgPCBuYXZUb3BcclxuICAgIGlmIChib3VuZGFyaWVzICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1idXR0b24tbW9iaWxlJykpIHtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbmF2XCIpO1xyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5hZGQoJ3N0YXItcmVnJylcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLWhpZGUnKVxyXG4gICAgICAgIHJlc3RvcmVCYWNrZ3JvdW5kKHdvcmtjb24pXHJcbiAgICAgIH1cclxuICB9XHJcbi8vIG5hdiBjbGljayBldmVudFxyXG4gIG5hdmJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgIGlmIChuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuLW5hdlwiKSkge1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbmF2XCIpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgbmF2IGlzIG5vdCBkaXNwbGF5ZWRcclxuICAgIGlmKCEvc2hvdy1uYXYvLnRlc3QobmF2LmNsYXNzTGlzdFsndmFsdWUnXSkpIHtcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgICAgICAvLyB1bmJsdXIgYmdcclxuICAgICAgICByZXN0b3JlQmFja2dyb3VuZCh3b3JrY29uKVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgIC8vIGlmIG5hdiBpcyBkaXNwbGF5ZWRcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLWhpZGUnKVxyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgIC8vIGJsdXIgYmFja2dyb3VuZFxyXG4gICAgICBibHVyQmFja2dyb3VuZCh3b3JrY29uKVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBibHVyQmFja2dyb3VuZChlbGVtKXtcclxuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2JsdXItZWxlbWVudC1zbScpXHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKCduby1wb2ludGVyJylcclxufVxyXG5mdW5jdGlvbiByZXN0b3JlQmFja2dyb3VuZChlbGVtKXtcclxuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXItZWxlbWVudC1zbScpXHJcbiAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyJylcclxuIH1cclxuXHJcbiBmdW5jdGlvbiBleHRlbmROYXZPcHQoYXJyKXtcclxuICBhcnIuZm9yRWFjaChsaT0+e1xyXG4gICAgLy8gb25jbGlja3NcclxuICAgIGxpLm9uY2xpY2sgPSBlID0+IHtcclxuICAgICAgY29uc3QgYXJ0aWNsZSA9IGUuY3VycmVudFRhcmdldC5jaGlsZHJlblswXVxyXG4gICAgICAvLyBleHRlbmQgYXJ0aWNsZSdzIGNhcGFiaWxpdGllcyB0byB0aGUgcGFyZW50IChuYXYgbGluaylcclxuICAgICAgLy8gY29uc29sZS5sb2coYXJ0aWNsZSlcclxuICAgICAgd2luZG93Lm9wZW4oYXJ0aWNsZS5ocmVmLCdfYmxhbmsnKVxyXG4gICAgfVxyXG4gIH0pXHJcbiB9XHJcbiBleHRlbmROYXZPcHQobmF2aXRlbXMpIiwibW9kdWxlLmV4cG9ydHMgPSBsb2Fkb2ZmaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gZmV0Y2ggbWVkaWEgZW5kcG9pbnRcclxuICAgIHJldHVybiBudWxsXHJcbiAgfTtcclxuICAiLCJcclxubW9kdWxlLmV4cG9ydHMgPSBsb2FkVGFncyA9IChbLi4uY2FwdGlvbnNdLG5vc2FqKSA9PiB7XHJcbiAgIGxldCBmY2FwdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWdjYXB0aW9uLmYtY2FwdGlvbicpO1xyXG4gICBsZXQgZmlndXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ZpZ3VyZScpO1xyXG4gICBsZXQgdGFnVGV4dCA9ICd1bmRlciBkZXZlbG9wbWVudCc7XHJcbiAgIGxldCBsaW54ID0gbm9zYWpbJ2xpbngnXTtcclxuICAgbGV0IGdpdHMgPSBbXTtcclxuXHJcbiAgIC8vIGZpbHRlciBjYXB0b25zIGJ5IGgzIHRhZ3NcclxuICAgZmNhcHRpb25zID0gWy4uLmZjYXB0aW9uc10uZmlsdGVyKGNhcD0+e1xyXG4gICAgICBjb25zdCB0ZXh0ID0gY2FwLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIGxldCBjYXBpbmNsdWRlZCA9IGNhcHRpb25zLmluY2x1ZGVzKHRleHQpO1xyXG4gICAgICByZXR1cm4gY2FwaW5jbHVkZWRcclxuICAgfSlcclxuICAgXHJcbiAgIC8vIGZpZ3VyZSBjYXB0aW9uc1xyXG4gICBmY2FwdGlvbnMuZm9yRWFjaChjYXB0aW9uPT57XHJcbiAgICAgIGxldCBmaWd1cmUgPSBjYXB0aW9uLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGxldCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgaDMuY2xhc3NMaXN0LmFkZCgndGFnLWgzJylcclxuICAgICAgaDMudGV4dENvbnRlbnQgPSB0YWdUZXh0O1xyXG4gICAgICBmaWd1cmUuYXBwZW5kKGgzKVxyXG4gICB9KVxyXG5cclxuICAgLy8gbGFuZ3VhZ2UgdGFnc1xyXG4gICBmaWd1cmVzLmZvckVhY2goKGZpZyxuZXd0b24pPT57XHJcbiAgIGNvbnN0IGFydGljbGUgPSBmaWcuY2hpbGRyZW5bMF07XHJcbiAgIGxldCBpY29ucyA9IFsuLi5hcnRpY2xlLmNoaWxkcmVuXS5maWx0ZXIoeD0+LyhmYS18cmVhZG1lLXRhZykvaS50ZXN0KHguY2xhc3NMaXN0KSlcclxuICAgY29uc3QgZ2l0ID0gWy4uLmFydGljbGUuY2hpbGRyZW5dLmZpbHRlcih4PT4vcmVhZG1lLXRhZy9pLnRlc3QoeC5jbGFzc0xpc3QpKVxyXG4gICAvLyBwdXNoIHZhbGlkIGdpdCBpbnRvIGdpdHNcclxuICAgaWYoZ2l0Lmxlbmd0aCA+IDApe1xyXG4gICAgICBnaXRzLnB1c2goZ2l0WzBdKVxyXG4gICB9XHJcbiAgIGxldCBoMyA9IFsuLi5maWcuY2hpbGRyZW5dLmZpbmRJbmRleCh4PT4vdGFnLWgzL2kudGVzdCh4LmNsYXNzTGlzdCkpXHJcbiAgIC8vIGljb25zLnJlZHVjZSgoYSxiKT0+IGgzID09IC0xID8gYi5jbGFzc0xpc3QuYWRkKCdpY29uLXRvcCcpIDogYi5jbGFzc0xpc3QuYWRkKCdpY29uLWJvdHRvbScpLDApXHJcbiAgIGljb25zLnJlZHVjZSgocHJldixjdXJyKT0+e1xyXG4gICAgICBpZihoMyA9PSAtMSl7XHJcbiAgICAgICAgICFjdXJyLmNsYXNzTGlzdC5jb250YWlucygncmVhZG1lLXRhZycpID8gY3Vyci5jbGFzc0xpc3QuYWRkKCdpY29uLXRvcCcpIDogY3Vyci5jbGFzc0xpc3QuYWRkKCdyZWFkbWUtdG9wJylcclxuICAgICAgfSB7XHJcbiAgICAgICAgICFjdXJyLmNsYXNzTGlzdC5jb250YWlucygncmVhZG1lLXRhZycpID8gY3Vyci5jbGFzc0xpc3QuYWRkKCdpY29uLWJvdHRvbScpIDogY3Vyci5jbGFzc0xpc3QuYWRkKCdyZWFkbWUtYm90dG9tJylcclxuICAgICAgfVxyXG4gICB9LDApXHJcbn0pXHJcbi8vIGNvbnNvbGUubG9nKG5vc2FqKVxyXG5cclxuLy8gY29uc29sZS5sb2coZ2l0cylcclxuLy8gaXRlcmF0ZSBvdmVyIGdpdCBlbGVtZW50c1xyXG5naXRzLmZvckVhY2goKGljb24saWR4KT0+e1xyXG4gICAvLyBjbGljayBldmVudFxyXG4gICBpY29uLm9uY2xpY2sgPSBlID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKGxpbnhbaWR4XS5saW5rLCdfYmxhbmsnKVxyXG4gICB9XHJcbn0pXHJcblxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93Lm9ubG9hZCA9IChlKSA9PiB7XHJcbiAgICAvLyBiYW5uZXJcclxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFubmVyXCIpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbiAgICAvLyBsZXQgc2lsdmVyID0gJ2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDQ1ZGVnLHRyYW5zcGFyZW50LHJnYmEoMjQ2LCAyNDIsIDEzOSwgMC40NCksdHJhbnNwYXJlbnQpOydcclxuICAgIC8vIGxldCB3aGl0ZSA9ICdiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgtNDVkZWcsdHJhbnNwYXJlbnQscmdiYSgyNDYsIDI0MiwgMTM5LCAwLjQ0KSx0cmFuc3BhcmVudCk7J1xyXG4gIFxyXG4gICAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodFxyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArICdweCdcclxuICAgIC8vIGJhbm5lciBhcHBlYXJzIG9uIGxvYWRcclxuICAgIGlmKGJhbm5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbi1iYW5uZXInKSl7XHJcbiAgICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tYmFubmVyJylcclxuICAgIH1cclxuXHJcbiAgICAvLyBzd2l0Y2ggYmFubmVyIGIvdyBkZXNrdG9wICYgbW9iaWxlXHJcbiAgICBjb25maWdCYW5uZXJJbWcoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYWNlLWltZycpKVxyXG4gICAgY2xpY2tGaWdDYXB0aW9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mLWNhcHRpb24nKSlcclxuICB9O1xyXG5cclxuICAvLyBzd2l0Y2ggYmV0d2VlbiAyIGJhbm5lcnMgZGVwZW5kZW50IG9uIHNjcmVlbiB3aWR0aFxyXG4gIGZ1bmN0aW9uIGNvbmZpZ0Jhbm5lckltZyhpbWdzKXtcclxuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gOTUwLCBiYW5uZXIxID0gYC4vbWVkaWEvYmFubmVyaW1nLmpwZ2AsIGJhbm5lcjIgPSBgLi9tZWRpYS9iYW5uZXJpbWcyLmpwZ2BcclxuICAgIHJldHVybiBpbWdzLmZvckVhY2goaW1nPT5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID49IG1vYmlsZVdpZHRoID8gaW1nLnNyYyA9IGJhbm5lcjIgOiBpbWcuc3JjID0gYmFubmVyMSlcclxuICB9XHJcbiAgICAgIFxyXG4gIGZ1bmN0aW9uIGNsaWNrRmlnQ2FwdGlvbihhcnIpe1xyXG4gICAgbGV0IHRhcmdldDtcclxuICAgIGFyci5mb3JFYWNoKGY9PntcclxuICAgICAgZi5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0ID09IGYpe1xyXG4gICAgICAgICAgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgY29uc3QgYXJ0aWNsZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnRpY2xlLmhyZWYpXHJcbiAgICAgICAgICB3aW5kb3cub3BlbihhcnRpY2xlLmhyZWYsJ19ibGFuaycpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5vbnJlc2l6ZSA9IChlKSA9PiB7XHJcbiAgICAvLyBtZXRob2RcclxuICAgIGNvbmZpZ0Jhbm5lckltZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3BhY2UtaW1nJykpXHJcbiAgICAgIH07XHJcblxyXG4gIGZ1bmN0aW9uIGNvbmZpZ0Jhbm5lckltZyhpbWdzKXtcclxuICAgIGNvbnN0IG1vYmlsZVdpZHRoID0gOTUwLCBiYW5uZXIxID0gYC4vbWVkaWEvYmFubmVyaW1nLmpwZ2AsIGJhbm5lcjIgPSBgLi9tZWRpYS9iYW5uZXJpbWcyLmpwZ2BcclxuICAgIHJldHVybiBpbWdzLmZvckVhY2goaW1nPT5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoID49IG1vYmlsZVdpZHRoID8gaW1nLnNyYyA9IGJhbm5lcjIgOiBpbWcuc3JjID0gYmFubmVyMSlcclxuICB9XHJcbiAgICAgICAgICAiLCJjb25zdCB3b3JrQ29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3b3JrXCIpO1xyXG5jb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XHJcbmNvbnN0IGxpbWl0ID0gMTUwO1xyXG5jb25zdCBkYmRzaHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRiZHMtaHJcIik7XHJcbmNvbnN0IG1pZHNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XHJcbmRiZHNoci5zdHlsZS50b3AgPSBtaWRzY3JlZW4gKyBcInB4XCI7XHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFjdFwiKTtcclxuXHJcbi8vIGVsb25nYXRlIHdvcmstY29udGFpbmVyIHNlY3Rpb24gb24gc2Nyb2xsXHJcbmNvbnN0IGxpc3RlblNjcm9sbCA9IChlKSA9PiB7XHJcbiAgLy8gY29uc29sZS5sb2coJ2NsIGhlaWdodCcpXHJcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuY2xpZW50SGVpZ2h0KVxyXG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnNjcm9sbFRvcClcclxuICBpZiAoZS50YXJnZXQuc2Nyb2xsVG9wID49IGxpbWl0KSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci11cCcpIFxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1kb3duJykgXHJcbiAgfSBcclxuICBlbHNlIHtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKFwiYmFubmVyLXJlZ1wiKTtcclxuICAgIGJhbm5lci5jbGFzc0xpc3QucmVtb3ZlKFwiYmFubmVyLXNtXCIpO1xyXG4gICAgbmF2UG9zID0gYmFubmVyLmNsaWVudEhlaWdodDtcclxuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyBcInB4XCI7XHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLWRvd24nKSBcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItdXAnKSBcclxuICB9XHJcblxyXG5cclxuICBpZigoZS50YXJnZXQuc2Nyb2xsVG9wKSA+PSBlLnRhcmdldC5jbGllbnRIZWlnaHQpe1xyXG4gICAgLy8gY29uc29sZS5sb2coJ3lvdSBoaXQgdGhlIHRhcmdldCBicm8gb24gc2Nyb2xsJylcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXItZG93bicpIFxyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci11cCcpIFxyXG4gIH1cclxufTtcclxuXHJcbndvcmtDb24uYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBsaXN0ZW5TY3JvbGwpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGNsaWVudCBldmVudHNcclxuaW1wb3J0IFwiLi9saWIvZXZlbnRzL2xvYWQuanNcIjtcclxuaW1wb3J0IFwiLi9saWIvZXZlbnRzL3Njcm9sbC5qc1wiO1xyXG5pbXBvcnQgXCIuL2xpYi9ldmVudHMvcmVzaXplLmpzXCI7XHJcbmltcG9ydCBub3NhaiBmcm9tICcuL21lZGlhL2dpdGxpbnguanNvbidcclxuXHJcbi8vIGVsZW1lbnRzXHJcbmltcG9ydCBsb2FkRm9vdGVyIGZyb20gXCIuL2xpYi9lbGVtZW50L2Zvb3Rlci5qc1wiOyAvLyBmb290ZXJcclxuaW1wb3J0IGxvYWRlbmRwb2ludCBmcm9tICcuL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzJ1xyXG5pbXBvcnQgbG9hZE9mZmljZSBmcm9tICcuL2xpYi9lbGVtZW50L29mZmljZS5qcydcclxuaW1wb3J0IGxvYWRUYWdzIGZyb20gJy4vbGliL2VsZW1lbnQvdGFncy5qcydcclxuaW1wb3J0IGxvYWRHYW1lcyBmcm9tICcuL2xpYi9lbGVtZW50L2dhbWVzLmpzJ1xyXG5pbXBvcnQgbG9hZE5hdiBmcm9tIFwiLi9saWIvZWxlbWVudC9uYXZpZ2F0aW9uLmpzXCI7IC8vIG5hdmlnYXRpb24gY2xpY2sgKG1vYmlsZSlcclxuaW1wb3J0IHsgdW5kZXJkZXYgfSBmcm9tIFwiLi9saWIvZGF0YS91bmRlcmRldi5qc1wiO1xyXG4vLyB0YWdzXHJcblxyXG4vLyBjb25zb2xlLmxvZyh1bmRlckRldilcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxubG9hZE5hdigpO1xyXG5sb2FkVGFncyh1bmRlcmRldixub3Nhaik7XHJcbmxvYWRPZmZpY2UoKTtcclxubG9hZEdhbWVzKCk7XHJcbmxvYWRlbmRwb2ludCgpO1xyXG5sb2FkRm9vdGVyKCk7IiwiLy8gaW5qZWN0aW9uc1xyXG5pbXBvcnQgJy4vbXViYW4vc3R5bGVzL3RlbXBsYXRlLmNzcydcclxuaW1wb3J0ICcuL211YmFuL3N0eWxlcy9tZWRpYXF1ZXJ5LmNzcydcclxuaW1wb3J0ICcuL21lZGlhL2Jhbm5lcmltZy5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcyLmpwZydcclxuaW1wb3J0ICcuL21lZGlhL2dpdGxpbnguanNvbidcclxuXHJcblxyXG4gIF9fd2VicGFja19ub25jZV9fID0gJzw/PW5vbmNlPz4nO1xyXG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==