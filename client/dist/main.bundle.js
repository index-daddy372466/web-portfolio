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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRCw4Q0FBOEM7Ozs7O1dDQTlDO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzhCO0FBQ0U7QUFDQTtBQUNRO0FBQ3hDO0FBQ0E7QUFDaUQsQ0FBQztBQUNFO0FBQ0o7QUFDSjtBQUNFO0FBQ0ksQ0FBQztBQUNEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQU87QUFDUCwyREFBUSxDQUFDLDREQUFRLENBQUMsZ0RBQUs7QUFDdkIsNkRBQVU7QUFDViw0REFBUztBQUNULCtEQUFZO0FBQ1osNkRBQVUsRzs7Ozs7Ozs7Ozs7Ozs7QUN2QlY7QUFDb0M7QUFDRTtBQUNSO0FBQ0M7QUFDRjtBQUM3QjtBQUNBO0FBQ0EsRUFBRSxzQkFBaUI7QUFDbkIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9iYW5uZXJpbWcuanBnIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9tZWRpYS9iYW5uZXJpbWcyLmpwZyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbXViYW4vc3R5bGVzL21lZGlhcXVlcnkuY3NzP2EzZjgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL211YmFuL3N0eWxlcy90ZW1wbGF0ZS5jc3M/MTdlNyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2RhdGEvdW5kZXJkZXYuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2VuZHBvaW50LmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L2dhbWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9saWIvZWxlbWVudC9vZmZpY2UuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9lbGVtZW50L3RhZ3MuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9ldmVudHMvbG9hZC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbGliL2V2ZW50cy9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2xpYi9ldmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zcmMvbG9uZG9uVG93ZXIuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc3JjL2dvbGRlbkdhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9iYW5uZXJpbWcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi9tZWRpYS9iYW5uZXJpbWcyLmpwZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGN1cnJlbnQgPSBbXCJjaGF0cm9vbXNcIixcInNxbFwiLF1cclxubW9kdWxlLmV4cG9ydHMudW5kZXJkZXYgPSBjdXJyZW50IiwibW9kdWxlLmV4cG9ydHMgPSBsb2FkZW5kcG9pbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gZmV0Y2ggbWVkaWEgZW5kcG9pbnRcclxuICByZXR1cm4gbnVsbFxyXG59O1xyXG4iLCJjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgZm9vdGVyIHRvIGVuZCBwYWdlXHJcbiAgICByZXR1cm4gbnVsbDtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gbG9hZEdhbWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gZmV0Y2ggbWVkaWEgZW5kcG9pbnRcclxuICAgIC8vIGFzc2lnbiBjb2xvcnMgdG8gc2ltb24gYm9hcmRcclxuICAgIGNvbnN0IHNpbW9uID0ge1xyXG4gICAgICBjb2xvcnM6WydyZWQnLCdncmVlbicsJ2JsdWUnLCd5ZWxsb3cnXSxcclxuICAgICAgYXJyOmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW1vbi1ib2QnKSxcclxuICAgIH1cclxuICAgIHNpbW9uLmFyci5mb3JFYWNoKChibG9jayxpZHgpPT57XHJcbiAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYGJsb2NrLSR7c2ltb24uY29sb3JzW2lkeF19YClcclxuICAgIH0pXHJcbiAgICBcclxuICB9O1xyXG4gICIsImNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBuYXZidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdi1idXR0b25cIik7XHJcbmNvbnN0IHN0YXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN0YXInKVxyXG5jb25zdCBhbGxlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKVxyXG5jb25zdCB3b3JrY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmsnKVxyXG5jb25zdCBuYXZpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtbGlzdC1pdGVtJylcclxuLy8gY29uc29sZS5sb2cod29ya2NvbilcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZE5hdiA9ICgpID0+IHtcclxuIC8vIHdpbmRvdyBjbGljayBldmVudFxyXG4gIHdpbmRvdy5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICBjb25zdCBwb3MgPSB7eDplLnBhZ2VYLHk6ZS5wYWdlWX1cclxuICAgIGxldCBuYXZUb3AgPSBuYXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueSwgbmF2TGVmdCA9IG5hdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54LCBib3VuZGFyaWVzID0gcG9zLnggPCBuYXZMZWZ0IHx8IHBvcy55IDwgbmF2VG9wXHJcbiAgICBpZiAoYm91bmRhcmllcyAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtYnV0dG9uLW1vYmlsZScpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LW5hdlwiKTtcclxuICAgICAgICBzdGFyc1swXS5jbGFzc0xpc3QuYWRkKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1oaWRlJylcclxuICAgICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLXJlZycpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgICAgICByZXN0b3JlQmFja2dyb3VuZCh3b3JrY29uKVxyXG4gICAgICB9XHJcbiAgfVxyXG4vLyBuYXYgY2xpY2sgZXZlbnRcclxuICBuYXZidG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlbi1uYXZcIikpIHtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LW5hdlwiKTtcclxuICAgIH1cclxuICAgIC8vIGlmIG5hdiBpcyBub3QgZGlzcGxheWVkXHJcbiAgICBpZighL3Nob3ctbmF2Ly50ZXN0KG5hdi5jbGFzc0xpc3RbJ3ZhbHVlJ10pKSB7XHJcbiAgICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LnJlbW92ZSgnc3Rhci1yZWcnKVxyXG4gICAgICAgIHN0YXJzWzFdLmNsYXNzTGlzdC5hZGQoJ3N0YXItaGlkZScpXHJcbiAgICAgICAgLy8gdW5ibHVyIGJnXHJcbiAgICAgICAgcmVzdG9yZUJhY2tncm91bmQod29ya2NvbilcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAvLyBpZiBuYXYgaXMgZGlzcGxheWVkXHJcbiAgICAgIHN0YXJzWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXItcmVnJylcclxuICAgICAgc3RhcnNbMF0uY2xhc3NMaXN0LmFkZCgnc3Rhci1oaWRlJylcclxuICAgICAgc3RhcnNbMV0uY2xhc3NMaXN0LmFkZCgnc3Rhci1yZWcnKVxyXG4gICAgICBzdGFyc1sxXS5jbGFzc0xpc3QucmVtb3ZlKCdzdGFyLWhpZGUnKVxyXG4gICAgICAvLyBibHVyIGJhY2tncm91bmRcclxuICAgICAgYmx1ckJhY2tncm91bmQod29ya2NvbilcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gYmx1ckJhY2tncm91bmQoZWxlbSl7XHJcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKCdibHVyLWVsZW1lbnQtc20nKVxyXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlcicpXHJcbn1cclxuZnVuY3Rpb24gcmVzdG9yZUJhY2tncm91bmQoZWxlbSl7XHJcbiAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdibHVyLWVsZW1lbnQtc20nKVxyXG4gIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlcicpXHJcbiB9XHJcblxyXG4gZnVuY3Rpb24gZXh0ZW5kTmF2T3B0KGFycil7XHJcbiAgYXJyLmZvckVhY2gobGk9PntcclxuICAgIC8vIG9uY2xpY2tzXHJcbiAgICBsaS5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgIGNvbnN0IGFydGljbGUgPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF1cclxuICAgICAgLy8gZXh0ZW5kIGFydGljbGUncyBjYXBhYmlsaXRpZXMgdG8gdGhlIHBhcmVudCAobmF2IGxpbmspXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFydGljbGUpXHJcbiAgICAgIHdpbmRvdy5vcGVuKGFydGljbGUuaHJlZiwnX2JsYW5rJylcclxuICAgIH1cclxuICB9KVxyXG4gfVxyXG4gZXh0ZW5kTmF2T3B0KG5hdml0ZW1zKSIsIm1vZHVsZS5leHBvcnRzID0gbG9hZG9mZmljZSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGZldGNoIG1lZGlhIGVuZHBvaW50XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH07XHJcbiAgIiwiXHJcbm1vZHVsZS5leHBvcnRzID0gbG9hZFRhZ3MgPSAoWy4uLmNhcHRpb25zXSxub3NhaikgPT4ge1xyXG4gICBsZXQgZmNhcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZmlnY2FwdGlvbi5mLWNhcHRpb24nKTtcclxuICAgbGV0IGZpZ3VyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmaWd1cmUnKTtcclxuICAgbGV0IHRhZ1RleHQgPSAndW5kZXIgZGV2ZWxvcG1lbnQnO1xyXG4gICBsZXQgbGlueCA9IG5vc2FqWydsaW54J107XHJcbiAgIGxldCBnaXRzID0gW107XHJcblxyXG4gICAvLyBmaWx0ZXIgY2FwdG9ucyBieSBoMyB0YWdzXHJcbiAgIGZjYXB0aW9ucyA9IFsuLi5mY2FwdGlvbnNdLmZpbHRlcihjYXA9PntcclxuICAgICAgY29uc3QgdGV4dCA9IGNhcC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICBsZXQgY2FwaW5jbHVkZWQgPSBjYXB0aW9ucy5pbmNsdWRlcyh0ZXh0KTtcclxuICAgICAgcmV0dXJuIGNhcGluY2x1ZGVkXHJcbiAgIH0pXHJcbiAgIFxyXG4gICAvLyBmaWd1cmUgY2FwdGlvbnNcclxuICAgZmNhcHRpb25zLmZvckVhY2goY2FwdGlvbj0+e1xyXG4gICAgICBsZXQgZmlndXJlID0gY2FwdGlvbi5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgIGgzLmNsYXNzTGlzdC5hZGQoJ3RhZy1oMycpXHJcbiAgICAgIGgzLnRleHRDb250ZW50ID0gdGFnVGV4dDtcclxuICAgICAgZmlndXJlLmFwcGVuZChoMylcclxuICAgfSlcclxuXHJcbiAgIC8vIGxhbmd1YWdlIHRhZ3NcclxuICAgZmlndXJlcy5mb3JFYWNoKChmaWcsbmV3dG9uKT0+e1xyXG4gICBjb25zdCBhcnRpY2xlID0gZmlnLmNoaWxkcmVuWzBdO1xyXG4gICBsZXQgaWNvbnMgPSBbLi4uYXJ0aWNsZS5jaGlsZHJlbl0uZmlsdGVyKHg9Pi8oZmEtfHJlYWRtZS10YWcpL2kudGVzdCh4LmNsYXNzTGlzdCkpXHJcbiAgIGNvbnN0IGdpdCA9IFsuLi5hcnRpY2xlLmNoaWxkcmVuXS5maWx0ZXIoeD0+L3JlYWRtZS10YWcvaS50ZXN0KHguY2xhc3NMaXN0KSlcclxuICAgLy8gcHVzaCB2YWxpZCBnaXQgaW50byBnaXRzXHJcbiAgIGlmKGdpdC5sZW5ndGggPiAwKXtcclxuICAgICAgZ2l0cy5wdXNoKGdpdFswXSlcclxuICAgfVxyXG4gICBsZXQgaDMgPSBbLi4uZmlnLmNoaWxkcmVuXS5maW5kSW5kZXgoeD0+L3RhZy1oMy9pLnRlc3QoeC5jbGFzc0xpc3QpKVxyXG4gICAvLyBpY29ucy5yZWR1Y2UoKGEsYik9PiBoMyA9PSAtMSA/IGIuY2xhc3NMaXN0LmFkZCgnaWNvbi10b3AnKSA6IGIuY2xhc3NMaXN0LmFkZCgnaWNvbi1ib3R0b20nKSwwKVxyXG4gICBpY29ucy5yZWR1Y2UoKHByZXYsY3Vycik9PntcclxuICAgICAgaWYoaDMgPT0gLTEpe1xyXG4gICAgICAgICAhY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWRtZS10YWcnKSA/IGN1cnIuY2xhc3NMaXN0LmFkZCgnaWNvbi10b3AnKSA6IGN1cnIuY2xhc3NMaXN0LmFkZCgncmVhZG1lLXRvcCcpXHJcbiAgICAgIH0ge1xyXG4gICAgICAgICAhY3Vyci5jbGFzc0xpc3QuY29udGFpbnMoJ3JlYWRtZS10YWcnKSA/IGN1cnIuY2xhc3NMaXN0LmFkZCgnaWNvbi1ib3R0b20nKSA6IGN1cnIuY2xhc3NMaXN0LmFkZCgncmVhZG1lLWJvdHRvbScpXHJcbiAgICAgIH1cclxuICAgfSwwKVxyXG59KVxyXG4vLyBjb25zb2xlLmxvZyhub3NhailcclxuXHJcbi8vIGNvbnNvbGUubG9nKGdpdHMpXHJcbi8vIGl0ZXJhdGUgb3ZlciBnaXQgZWxlbWVudHNcclxuZ2l0cy5mb3JFYWNoKChpY29uLGlkeCk9PntcclxuICAgLy8gY2xpY2sgZXZlbnRcclxuICAgaWNvbi5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihsaW54W2lkeF0ubGluaywnX2JsYW5rJylcclxuICAgfVxyXG59KVxyXG5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy5vbmxvYWQgPSAoZSkgPT4ge1xyXG4gICAgLy8gYmFubmVyXHJcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbm5lclwiKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG4gICAgLy8gbGV0IHNpbHZlciA9ICdiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCg0NWRlZyx0cmFuc3BhcmVudCxyZ2JhKDI0NiwgMjQyLCAxMzksIDAuNDQpLHRyYW5zcGFyZW50KTsnXHJcbiAgICAvLyBsZXQgd2hpdGUgPSAnYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoLTQ1ZGVnLHRyYW5zcGFyZW50LHJnYmEoMjQ2LCAyNDIsIDEzOSwgMC40NCksdHJhbnNwYXJlbnQpOydcclxuICBcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHRcclxuICAgIG5hdi5zdHlsZS50b3AgPSBuYXZQb3MgKyAncHgnXHJcbiAgICAvLyBiYW5uZXIgYXBwZWFycyBvbiBsb2FkXHJcbiAgICBpZihiYW5uZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tYmFubmVyJykpe1xyXG4gICAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJhbm5lcicpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3dpdGNoIGJhbm5lciBiL3cgZGVza3RvcCAmIG1vYmlsZVxyXG4gICAgY29uZmlnQmFubmVySW1nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zcGFjZS1pbWcnKSlcclxuICAgIGNsaWNrRmlnQ2FwdGlvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZi1jYXB0aW9uJykpXHJcbiAgfTtcclxuXHJcbiAgLy8gc3dpdGNoIGJldHdlZW4gMiBiYW5uZXJzIGRlcGVuZGVudCBvbiBzY3JlZW4gd2lkdGhcclxuICBmdW5jdGlvbiBjb25maWdCYW5uZXJJbWcoaW1ncyl7XHJcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXHJcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXHJcbiAgfVxyXG4gICAgICBcclxuICBmdW5jdGlvbiBjbGlja0ZpZ0NhcHRpb24oYXJyKXtcclxuICAgIGxldCB0YXJnZXQ7XHJcbiAgICBhcnIuZm9yRWFjaChmPT57XHJcbiAgICAgIGYub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgIGlmKGUuY3VycmVudFRhcmdldCA9PSBmKXtcclxuICAgICAgICAgIHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICAgIGNvbnN0IGFydGljbGUgPSB0YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYXJ0aWNsZS5ocmVmKVxyXG4gICAgICAgICAgd2luZG93Lm9wZW4oYXJ0aWNsZS5ocmVmLCdfYmxhbmsnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cub25yZXNpemUgPSAoZSkgPT4ge1xyXG4gICAgLy8gbWV0aG9kXHJcbiAgICBjb25maWdCYW5uZXJJbWcoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNwYWNlLWltZycpKVxyXG4gICAgICB9O1xyXG5cclxuICBmdW5jdGlvbiBjb25maWdCYW5uZXJJbWcoaW1ncyl7XHJcbiAgICBjb25zdCBtb2JpbGVXaWR0aCA9IDk1MCwgYmFubmVyMSA9IGAuL21lZGlhL2Jhbm5lcmltZy5qcGdgLCBiYW5uZXIyID0gYC4vbWVkaWEvYmFubmVyaW1nMi5qcGdgXHJcbiAgICByZXR1cm4gaW1ncy5mb3JFYWNoKGltZz0+ZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA+PSBtb2JpbGVXaWR0aCA/IGltZy5zcmMgPSBiYW5uZXIyIDogaW1nLnNyYyA9IGJhbm5lcjEpXHJcbiAgfVxyXG4gICAgICAgICAgIiwiY29uc3Qgd29ya0NvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid29ya1wiKTtcclxuY29uc3QgYmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJcIik7XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpO1xyXG5jb25zdCBsaW1pdCA9IDE1MDtcclxuY29uc3QgZGJkc2hyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYmRzLWhyXCIpO1xyXG5jb25zdCBtaWRzY3JlZW4gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xyXG5kYmRzaHIuc3R5bGUudG9wID0gbWlkc2NyZWVuICsgXCJweFwiO1xyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcblxyXG4vLyBlbG9uZ2F0ZSB3b3JrLWNvbnRhaW5lciBzZWN0aW9uIG9uIHNjcm9sbFxyXG5jb25zdCBsaXN0ZW5TY3JvbGwgPSAoZSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKCdjbCBoZWlnaHQnKVxyXG4gIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsaWVudEhlaWdodClcclxuICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5zY3JvbGxUb3ApXHJcbiAgaWYgKGUudGFyZ2V0LnNjcm9sbFRvcCA+PSBsaW1pdCkge1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJiYW5uZXItcmVnXCIpO1xyXG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoXCJiYW5uZXItc21cIik7XHJcbiAgICBuYXZQb3MgPSBiYW5uZXIuY2xpZW50SGVpZ2h0O1xyXG4gICAgbmF2LnN0eWxlLnRvcCA9IG5hdlBvcyArIFwicHhcIjtcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXItdXAnKSBcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItZG93bicpIFxyXG4gIH0gXHJcbiAgZWxzZSB7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lci1yZWdcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LnJlbW92ZShcImJhbm5lci1zbVwiKTtcclxuICAgIG5hdlBvcyA9IGJhbm5lci5jbGllbnRIZWlnaHQ7XHJcbiAgICBuYXYuc3R5bGUudG9wID0gbmF2UG9zICsgXCJweFwiO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2Zvb3Rlci1kb3duJykgXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXVwJykgXHJcbiAgfVxyXG5cclxuXHJcbiAgaWYoKGUudGFyZ2V0LnNjcm9sbFRvcCkgPj0gZS50YXJnZXQuY2xpZW50SGVpZ2h0KXtcclxuICAgIC8vIGNvbnNvbGUubG9nKCd5b3UgaGl0IHRoZSB0YXJnZXQgYnJvIG9uIHNjcm9sbCcpXHJcbiAgICBmb290ZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLWRvd24nKSBcclxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXItdXAnKSBcclxuICB9XHJcbn07XHJcblxyXG53b3JrQ29uLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbGlzdGVuU2Nyb2xsKTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBjbGllbnQgZXZlbnRzXHJcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9sb2FkLmpzXCI7XHJcbmltcG9ydCBcIi4vbGliL2V2ZW50cy9zY3JvbGwuanNcIjtcclxuaW1wb3J0IFwiLi9saWIvZXZlbnRzL3Jlc2l6ZS5qc1wiO1xyXG5pbXBvcnQgbm9zYWogZnJvbSAnLi9tZWRpYS9naXRsaW54Lmpzb24nXHJcblxyXG4vLyBlbGVtZW50c1xyXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9saWIvZWxlbWVudC9mb290ZXIuanNcIjsgLy8gZm9vdGVyXHJcbmltcG9ydCBsb2FkZW5kcG9pbnQgZnJvbSAnLi9saWIvZWxlbWVudC9lbmRwb2ludC5qcydcclxuaW1wb3J0IGxvYWRPZmZpY2UgZnJvbSAnLi9saWIvZWxlbWVudC9vZmZpY2UuanMnXHJcbmltcG9ydCBsb2FkVGFncyBmcm9tICcuL2xpYi9lbGVtZW50L3RhZ3MuanMnXHJcbmltcG9ydCBsb2FkR2FtZXMgZnJvbSAnLi9saWIvZWxlbWVudC9nYW1lcy5qcydcclxuaW1wb3J0IGxvYWROYXYgZnJvbSBcIi4vbGliL2VsZW1lbnQvbmF2aWdhdGlvbi5qc1wiOyAvLyBuYXZpZ2F0aW9uIGNsaWNrIChtb2JpbGUpXHJcbmltcG9ydCB7IHVuZGVyZGV2IH0gZnJvbSBcIi4vbGliL2RhdGEvdW5kZXJkZXYuanNcIjtcclxuLy8gdGFnc1xyXG5cclxuLy8gY29uc29sZS5sb2codW5kZXJEZXYpXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmxvYWROYXYoKTtcclxubG9hZFRhZ3ModW5kZXJkZXYsbm9zYWopO1xyXG5sb2FkT2ZmaWNlKCk7XHJcbmxvYWRHYW1lcygpO1xyXG5sb2FkZW5kcG9pbnQoKTtcclxubG9hZEZvb3RlcigpOyIsIi8vIGluamVjdGlvbnNcclxuaW1wb3J0ICcuL211YmFuL3N0eWxlcy90ZW1wbGF0ZS5jc3MnXHJcbmltcG9ydCAnLi9tdWJhbi9zdHlsZXMvbWVkaWFxdWVyeS5jc3MnXHJcbmltcG9ydCAnLi9tZWRpYS9iYW5uZXJpbWcuanBnJ1xyXG5pbXBvcnQgJy4vbWVkaWEvYmFubmVyaW1nMi5qcGcnXHJcbmltcG9ydCAnLi9tZWRpYS9naXRsaW54Lmpzb24nXHJcblxyXG5cclxuICBfX3dlYnBhY2tfbm9uY2VfXyA9ICc8Pz1ub25jZT8+JztcclxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=