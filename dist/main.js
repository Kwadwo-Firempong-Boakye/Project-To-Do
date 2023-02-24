/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Fonts/VarelaRound-Regular.ttf */ "./src/Fonts/VarelaRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\n@font-face {\n\tfont-family: Varela;\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-family: Varela, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground: linear-gradient(135deg, var(--logo-mid-blue), var(--logo-blue));\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bolder;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--off-white);\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground: var(--white);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\ttransition: all 0.4s ease-in-out;\n\t/* opacity: 0.9; */\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\ttransform: translateX(-350px);\n}\n\n.menu-item-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tmargin: 0;\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.tasks-area {\n\tmin-width: calc(100vw - 775px);\n}\n\n.details-area {\n\twidth: 425px;\n\theight: 100%;\n\tborder-left: 2px solid var(--divider-color);\n\tbackground: linear-gradient(45deg, var(--logo-blue), #043584);\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* padding: 1rem 0.5rem; */\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 5;\n}\n\n.tick-box {\n\t/* border: 5px solid red; */\n}\n\n.details-title {\n\tfont-family: Varela;\n\tfont-size: 1.35rem;\n\tmargin: 0;\n\tpadding: 2rem 1rem;\n\tcolor : var(--white);\n}\n\n@media only screen and (min-width: 768px) {\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\tbackground: linear-gradient(225deg, var(--logo-blue), #043584);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\ttransform: translateX(10px);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n}\n\n@media only screen and (max-width: 450px) {\n\t.logo-area p {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.75rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,uBAAuB;CACvB,eAAe;CACf,wBAAwB;CACxB,oBAAoB;CACpB,oBAAoB;CACpB,wBAAwB;CACxB,qBAAqB;CACrB,uBAAuB;CACvB,aAAa;CACb,oBAAoB;AACrB;;AAEA;CACC,mBAAmB;CACnB,4CAAyC;AAC1C;;AAEA;CACC,SAAS;AACV;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,6CAA6C;CAC7C,YAAY;AACb;;AAEA;;CAEC,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,uBAAuB;AACxB;;AAEA;CACC,+BAA+B;CAC/B,gBAAgB;CAChB,iBAAiB;CACjB,SAAS;AACV;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,qBAAqB;CACrB,SAAS;CACT,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,cAAc;CACd,mBAAmB;CACnB,gCAAgC;AACjC;;AAEA;CACC,+BAA+B;CAC/B,iBAAiB;CACjB,kBAAkB;CAClB,2EAA2E;CAC3E,YAAY;CACZ,mBAAmB;CACnB,mBAAmB;CACnB,oCAAoC;CACpC,mBAAmB;CACnB,gCAAgC;CAChC,eAAe;AAChB;;AAEA;CACC,mBAAmB;AACpB;;AAEA,kBAAkB;;AAElB;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,2BAA2B;CAC3B,4BAA4B;AAC7B;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,4CAA4C;CAC5C,wBAAwB;CACxB,aAAa;CACb,sBAAsB;CACtB,iBAAiB;CACjB,gCAAgC;CAChC,kBAAkB;CAClB,0BAA0B;CAC1B,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,WAAW;CACX,oBAAoB;CACpB,gCAAgC;CAChC,eAAe;CACf,kBAAkB;CAClB,SAAS;CACT,WAAW;AACZ;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;CACT,kCAAkC;CAClC,6CAA6C;CAC7C,eAAe;AAChB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,SAAS;CACT,+BAA+B;CAC/B,iBAAiB;CACjB,SAAS;CACT,UAAU;CACV,gCAAgC;AACjC;;AAEA;CACC,8BAA8B;AAC/B;;AAEA;CACC,YAAY;CACZ,YAAY;CACZ,2CAA2C;CAC3C,6DAA6D;CAC7D,aAAa;CACb,sBAAsB;CACtB,0BAA0B;CAC1B,gCAAgC;CAChC,0BAA0B;CAC1B,kBAAkB;CAClB,UAAU;AACX;;AAEA;CACC,2BAA2B;AAC5B;;AAEA;CACC,mBAAmB;CACnB,kBAAkB;CAClB,SAAS;CACT,kBAAkB;CAClB,oBAAoB;AACrB;;AAEA;CACC;EACC,oCAAoC;CACrC;;CAEA;EACC,oCAAoC;CACrC;;CAEA;EACC,gFAAgF;EAChF,mBAAmB;EACnB,8DAA8D;CAC/D;;CAEA;EACC,2BAA2B;CAC5B;;CAEA;EACC,kBAAkB;EAClB,sCAAsC;CACvC;AACD;;AAEA;CACC;EACC,kBAAkB;CACnB;;CAEA;EACC,eAAe;CAChB;;CAEA;EACC,kBAAkB;CACnB;;CAEA;EACC,aAAa;CACd;AACD","sourcesContent":[":root {\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\n@font-face {\n\tfont-family: Varela;\n\tsrc: url(./Fonts/VarelaRound-Regular.ttf);\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-family: Varela, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\tbackground: linear-gradient(135deg, var(--logo-mid-blue), var(--logo-blue));\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bolder;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--off-white);\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground: var(--white);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\ttransition: all 0.4s ease-in-out;\n\t/* opacity: 0.9; */\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\ttransform: translateX(-350px);\n}\n\n.menu-item-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tmargin: 0;\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.tasks-area {\n\tmin-width: calc(100vw - 775px);\n}\n\n.details-area {\n\twidth: 425px;\n\theight: 100%;\n\tborder-left: 2px solid var(--divider-color);\n\tbackground: linear-gradient(45deg, var(--logo-blue), #043584);\n\tdisplay: flex;\n\tflex-direction: column;\n\t/* padding: 1rem 0.5rem; */\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 5;\n}\n\n.tick-box {\n\t/* border: 5px solid red; */\n}\n\n.details-title {\n\tfont-family: Varela;\n\tfont-size: 1.35rem;\n\tmargin: 0;\n\tpadding: 2rem 1rem;\n\tcolor : var(--white);\n}\n\n@media only screen and (min-width: 768px) {\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\tbackground: linear-gradient(225deg, var(--logo-blue), #043584);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\ttransform: translateX(10px);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n}\n\n@media only screen and (max-width: 450px) {\n\t.logo-area p {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.75rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.25rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/create-home.js":
/*!****************************!*\
  !*** ./src/create-home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDashboardStructure": () => (/* binding */ createDashboardStructure),
/* harmony export */   "createHamburger": () => (/* binding */ createHamburger),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createSideMenu": () => (/* binding */ createSideMenu)
/* harmony export */ });
/* harmony import */ var _Images_Taskie_logo_blue_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/Taskie-logo-blue.png */ "./src/Images/Taskie-logo-blue.png");
/* harmony import */ var _Images_Taskie_logo_sky_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/Taskie-logo-sky.png */ "./src/Images/Taskie-logo-sky.png");
/* harmony import */ var _Images_github_sign_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/github-sign.png */ "./src/Images/github-sign.png");
/* harmony import */ var _Images_burger_menu_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Images/burger-menu.svg */ "./src/Images/burger-menu.svg");





function createHamburger() {
	const projectContainer = document.querySelector("#project-container");
	const hamburger = document.createElement("img");

	projectContainer.append(hamburger);
	hamburger.setAttribute("src", _Images_burger_menu_svg__WEBPACK_IMPORTED_MODULE_3__);
	hamburger.classList.add("hamburger");

	hamburger.addEventListener("click", () => {
		const menuArea = document.querySelector(".menu-area");
		menuArea.classList.toggle("hide-side-menu");
	});

	window.addEventListener("resize", () => {
		const menuArea = document.querySelector(".menu-area");
		if (window.innerWidth <= 768) {
			menuArea.classList.add("hide-side-menu");
		} else {
			menuArea.classList.remove("hide-side-menu");
		}
	});
}

function createHeader() {
	//General elements required for header
	const projectContainer = document.querySelector("#project-container");
	const headerContainer = document.createElement("header");
	const logoArea = document.createElement("section");
	const logoImg = document.createElement("img");
	const logoText = document.createElement("p");
	const headerMenu = document.createElement("section");
	const gitLink = document.createElement("a");
	const gitLogo = document.createElement("img");
	const headerNewTaskButton = document.createElement("button");

	//Build header structure
	projectContainer.append(headerContainer);
	headerContainer.append(logoArea, headerMenu);
	logoArea.append(logoImg, logoText);
	headerMenu.append(gitLink, headerNewTaskButton);
	gitLink.append(gitLogo);

	//Fill-out elements
	logoImg.setAttribute("src", _Images_Taskie_logo_blue_png__WEBPACK_IMPORTED_MODULE_0__);
	logoText.innerText = "Just-Do-It";
	gitLink.setAttribute(
		"href",
		"https://github.com/Kwadwo-Firempong-Boakye/Project-To-Do"
	);
	gitLink.setAttribute("target", "_blank");
	gitLogo.setAttribute("src", _Images_github_sign_png__WEBPACK_IMPORTED_MODULE_2__);
	headerNewTaskButton.innerHTML = `<span class="plus">+</span> Task`;

	//Assign CSS classes
	headerContainer.classList.add("header-container");
	logoArea.classList.add("logo-area");
	headerMenu.classList.add("header-menu");
	headerNewTaskButton.classList.add("header-button");
}

function createDashboardStructure() {
	//General elements required for dashboard
	const projectContainer = document.querySelector("#project-container");
	const dashContainer = document.createElement("main");
	const menuArea = document.createElement("section");
	const tasksArea = document.createElement("section");
	const detailsArea = document.createElement("section");

	//Build dashboard structure
	projectContainer.append(dashContainer);
	dashContainer.append(menuArea, tasksArea, detailsArea);

	//Assign CSS classes
	dashContainer.classList.add("dash-container");
	menuArea.classList.add("menu-area");
	tasksArea.classList.add("tasks-area");
	detailsArea.classList.add("details-area");
}

function createSideMenu() {
	const menuArea = document.querySelector(".menu-area");
	const menuItems = ["All Tasks", "Due today", "Due this week", "Completed"];

	menuItems.forEach((item) => {
		let menuItemContainer = document.createElement("div");
		let menuItemImage = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"svg"
		);
		let menuItem = document.createElement("p");

		menuItem.innerText = item;
		menuItemImage.setAttribute("fill", "currentColor");
		menuItemImage.setAttribute("viewBox", "0 0 24 24");
		menuItemImage.innerHTML = `<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />`;

		menuItemContainer.classList.add("menu-item-container");
		menuItem.classList.add("menu-item");

		menuArea.append(menuItemContainer);
		menuItemContainer.append(menuItemImage, menuItem);
	});
}




/***/ }),

/***/ "./src/createDetailsPanel.js":
/*!***********************************!*\
  !*** ./src/createDetailsPanel.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderDetails(
	taskTitle = "Lorem Ipsum",
	taskDescription = "Qwerty asdf hjk xcvbnm, fghjk dfghjk ertyu rfgbn sdfghjk dfghj.",
	taskProject = "General",
	taskDueDate = new Date(),
	taskPriority = "low"
) {
	const detailsArea = document.querySelector(".details-area");
    const ticker = document.createElement("div");
	const detailsTitle = document.createElement("h3");
	const description = document.createElement("p");
	const project = document.createElement("p");
	const dueDate = document.createElement("p");
	const priority = document.createElement("p");


	detailsArea.append(tickBox, detailsTitle, description, project, dueDate, priority);
	detailsTitle.classList.add("details-title");
	description.classList.add("task-description");
	project.classList.add("project");
	dueDate.classList.add("due-date");
	priority.classList.add("priority");

	detailsTitle.innerText = taskTitle;
	description.innerText = taskDescription;
	project.innerText = taskProject;
	dueDate.innerText = taskDueDate;
	priority.innerText = taskPriority;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDetails);


/***/ }),

/***/ "./src/Fonts/VarelaRound-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/Fonts/VarelaRound-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b0ad79431843e696f58.ttf";

/***/ }),

/***/ "./src/Images/Taskie-logo-blue.png":
/*!*****************************************!*\
  !*** ./src/Images/Taskie-logo-blue.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75c60f06765f2610ae86.png";

/***/ }),

/***/ "./src/Images/Taskie-logo-sky.png":
/*!****************************************!*\
  !*** ./src/Images/Taskie-logo-sky.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f327d09694a952382cc7.png";

/***/ }),

/***/ "./src/Images/burger-menu.svg":
/*!************************************!*\
  !*** ./src/Images/burger-menu.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc12fbd678bea2ce4ec9.svg";

/***/ }),

/***/ "./src/Images/github-sign.png":
/*!************************************!*\
  !*** ./src/Images/github-sign.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e90ddc18bac31617c346.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _create_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-home */ "./src/create-home.js");
/* harmony import */ var _createDetailsPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createDetailsPanel */ "./src/createDetailsPanel.js");




const createInterface = () => {
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHamburger)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createDashboardStructure)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createSideMenu)();
	(0,_createDetailsPanel__WEBPACK_IMPORTED_MODULE_2__["default"])();
};


window.addEventListener("load", createInterface);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUNBcUI7QUFNRTtBQUMwQjs7QUFFakQ7QUFDQSxDQUFDLDBEQUFZO0FBQ2IsQ0FBQyw2REFBZTtBQUNoQixDQUFDLHNFQUF3QjtBQUN6QixDQUFDLDREQUFjO0FBQ2YsQ0FBQywrREFBYTtBQUNkOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZURldGFpbHNQYW5lbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vRm9udHMvVmFyZWxhUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdC0tZGl2aWRlci1jb2xvcjogI2YxZjFmMTtcXG5cXHQtLWxvZ28tcGluazogI2ZmMWI2YjtcXG5cXHQtLWxvZ28tYmx1ZTogIzQ1Y2FmZjtcXG5cXHQtLWxvZ28tbWlkLWJsdWU6ICMwMDYxZmY7XFxuXFx0LS1sb2dvLWdyZWVuOiAjNzNmZjAwO1xcblxcdC0tZGFyay1tb2RlLWJnOiAjMjMyMzIzO1xcblxcdC0td2hpdGU6ICNmZmY7XFxuXFx0LS1vZmYtd2hpdGU6ICNmNWY1ZjU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG9nby1hcmVhLFxcbi5oZWFkZXItbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5sb2dvLWFyZWEgaW1nIHtcXG5cXHRoZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi5oZWFkZXItbWVudSBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC4zNXJlbSAxLjVyZW0gMC4zNXJlbSAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogREFTSEJPQVJEIEFSRUEqL1xcblxcbi5kYXNoLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjJweCk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLm1lbnUtYXJlYSB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC8qIG9wYWNpdHk6IDAuOTsgKi9cXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVyZW07XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbi5oaWRlLXNpZGUtbWVudSB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAxcmVtIDEuMjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBzdmcge1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHRtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3NzVweCk7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdHdpZHRoOiA0MjVweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHQvKiBwYWRkaW5nOiAxcmVtIDAuNXJlbTsgKi9cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLnRpY2stYm94IHtcXG5cXHQvKiBib3JkZXI6IDVweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMS4zNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMnJlbSAxcmVtO1xcblxcdGNvbG9yIDogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LmhlYWRlci1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuNTVyZW0gM3JlbSAwLjU1cmVtIDIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZzpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1sb2dvLW1pZC1ibHVlKSwgdmFyKC0tbG9nby1ibHVlKSk7ICovXFxuXFx0XFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIgLm1lbnUtaXRlbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuXFx0LmxvZ28tYXJlYSBwIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5sb2dvLWFyZWEgaW1nIHtcXG5cXHRcXHRoZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWcge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDRDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsNkNBQTZDO0NBQzdDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsMkVBQTJFO0NBQzNFLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLG9DQUFvQztDQUNwQyxtQkFBbUI7Q0FDbkIsZ0NBQWdDO0NBQ2hDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUEsa0JBQWtCOztBQUVsQjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULDJCQUEyQjtDQUMzQiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLDRDQUE0QztDQUM1Qyx3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsZ0NBQWdDO0NBQ2hDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFdBQVc7QUFDWjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULGtDQUFrQztDQUNsQyw2Q0FBNkM7Q0FDN0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCwrQkFBK0I7Q0FDL0IsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWiwyQ0FBMkM7Q0FDM0MsNkRBQTZEO0NBQzdELGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsMEJBQTBCO0NBQzFCLGdDQUFnQztDQUNoQywwQkFBMEI7Q0FDMUIsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsU0FBUztDQUNULGtCQUFrQjtDQUNsQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQztFQUNDLG9DQUFvQztDQUNyQzs7Q0FFQTtFQUNDLG9DQUFvQztDQUNyQzs7Q0FFQTtFQUNDLGdGQUFnRjtFQUNoRixtQkFBbUI7RUFDbkIsOERBQThEO0NBQy9EOztDQUVBO0VBQ0MsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLHNDQUFzQztDQUN2QztBQUNEOztBQUVBO0NBQ0M7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsYUFBYTtDQUNkO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHQtLWRpdmlkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0LS1sb2dvLXBpbms6ICNmZjFiNmI7XFxuXFx0LS1sb2dvLWJsdWU6ICM0NWNhZmY7XFxuXFx0LS1sb2dvLW1pZC1ibHVlOiAjMDA2MWZmO1xcblxcdC0tbG9nby1ncmVlbjogIzczZmYwMDtcXG5cXHQtLWRhcmstbW9kZS1iZzogIzIzMjMyMztcXG5cXHQtLXdoaXRlOiAjZmZmO1xcblxcdC0tb2ZmLXdoaXRlOiAjZjVmNWY1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdHNyYzogdXJsKC4vRm9udHMvVmFyZWxhUm91bmQtUmVndWxhci50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG9nby1hcmVhLFxcbi5oZWFkZXItbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5sb2dvLWFyZWEgaW1nIHtcXG5cXHRoZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi5oZWFkZXItbWVudSBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC4zNXJlbSAxLjVyZW0gMC4zNXJlbSAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogREFTSEJPQVJEIEFSRUEqL1xcblxcbi5kYXNoLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjJweCk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0tb2ZmLXdoaXRlKTtcXG59XFxuXFxuLm1lbnUtYXJlYSB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC8qIG9wYWNpdHk6IDAuOTsgKi9cXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVyZW07XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbi5oaWRlLXNpZGUtbWVudSB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAxcmVtIDEuMjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBzdmcge1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHRtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3NzVweCk7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdHdpZHRoOiA0MjVweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHQvKiBwYWRkaW5nOiAxcmVtIDAuNXJlbTsgKi9cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLnRpY2stYm94IHtcXG5cXHQvKiBib3JkZXI6IDVweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMS4zNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMnJlbSAxcmVtO1xcblxcdGNvbG9yIDogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LmhlYWRlci1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuNTVyZW0gM3JlbSAwLjU1cmVtIDIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZzpob3ZlciB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1sb2dvLW1pZC1ibHVlKSwgdmFyKC0tbG9nby1ibHVlKSk7ICovXFxuXFx0XFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIgLm1lbnUtaXRlbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuXFx0LmxvZ28tYXJlYSBwIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5sb2dvLWFyZWEgaW1nIHtcXG5cXHRcXHRoZWlnaHQ6IDEuNzVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWcge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvZ29CbHVlIGZyb20gXCIuL0ltYWdlcy9UYXNraWUtbG9nby1ibHVlLnBuZ1wiO1xuaW1wb3J0IGxvZ29Ta3kgZnJvbSBcIi4vSW1hZ2VzL1Rhc2tpZS1sb2dvLXNreS5wbmdcIjtcbmltcG9ydCBnaXRodWJTaWduIGZyb20gXCIuL0ltYWdlcy9naXRodWItc2lnbi5wbmdcIjtcbmltcG9ydCBidXJnZXJNZW51IGZyb20gXCIuL0ltYWdlcy9idXJnZXItbWVudS5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlSGFtYnVyZ2VyKCkge1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaGFtYnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChoYW1idXJnZXIpO1xuXHRoYW1idXJnZXIuc2V0QXR0cmlidXRlKFwic3JjXCIsIGJ1cmdlck1lbnUpO1xuXHRoYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlclwiKTtcblxuXHRoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHQvL0dlbmVyYWwgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGhlYWRlclxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblx0Y29uc3QgbG9nb0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGhlYWRlck1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRjb25zdCBnaXRMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29uc3QgaGVhZGVyTmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cblx0Ly9CdWlsZCBoZWFkZXIgc3RydWN0dXJlXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kKGhlYWRlckNvbnRhaW5lcik7XG5cdGhlYWRlckNvbnRhaW5lci5hcHBlbmQobG9nb0FyZWEsIGhlYWRlck1lbnUpO1xuXHRsb2dvQXJlYS5hcHBlbmQobG9nb0ltZywgbG9nb1RleHQpO1xuXHRoZWFkZXJNZW51LmFwcGVuZChnaXRMaW5rLCBoZWFkZXJOZXdUYXNrQnV0dG9uKTtcblx0Z2l0TGluay5hcHBlbmQoZ2l0TG9nbyk7XG5cblx0Ly9GaWxsLW91dCBlbGVtZW50c1xuXHRsb2dvSW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBsb2dvQmx1ZSk7XG5cdGxvZ29UZXh0LmlubmVyVGV4dCA9IFwiSnVzdC1Eby1JdFwiO1xuXHRnaXRMaW5rLnNldEF0dHJpYnV0ZShcblx0XHRcImhyZWZcIixcblx0XHRcImh0dHBzOi8vZ2l0aHViLmNvbS9Ld2Fkd28tRmlyZW1wb25nLUJvYWt5ZS9Qcm9qZWN0LVRvLURvXCJcblx0KTtcblx0Z2l0TGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cdGdpdExvZ28uc2V0QXR0cmlidXRlKFwic3JjXCIsIGdpdGh1YlNpZ24pO1xuXHRoZWFkZXJOZXdUYXNrQnV0dG9uLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInBsdXNcIj4rPC9zcGFuPiBUYXNrYDtcblxuXHQvL0Fzc2lnbiBDU1MgY2xhc3Nlc1xuXHRoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci1jb250YWluZXJcIik7XG5cdGxvZ29BcmVhLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWFyZWFcIik7XG5cdGhlYWRlck1lbnUuY2xhc3NMaXN0LmFkZChcImhlYWRlci1tZW51XCIpO1xuXHRoZWFkZXJOZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItYnV0dG9uXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUoKSB7XG5cdC8vR2VuZXJhbCBlbGVtZW50cyByZXF1aXJlZCBmb3IgZGFzaGJvYXJkXG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBkYXNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG5cdC8vQnVpbGQgZGFzaGJvYXJkIHN0cnVjdHVyZVxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChkYXNoQ29udGFpbmVyKTtcblx0ZGFzaENvbnRhaW5lci5hcHBlbmQobWVudUFyZWEsIHRhc2tzQXJlYSwgZGV0YWlsc0FyZWEpO1xuXG5cdC8vQXNzaWduIENTUyBjbGFzc2VzXG5cdGRhc2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhc2gtY29udGFpbmVyXCIpO1xuXHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcmVhXCIpO1xuXHR0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcInRhc2tzLWFyZWFcIik7XG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWFyZWFcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVNZW51KCkge1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXHRjb25zdCBtZW51SXRlbXMgPSBbXCJBbGwgVGFza3NcIiwgXCJEdWUgdG9kYXlcIiwgXCJEdWUgdGhpcyB3ZWVrXCIsIFwiQ29tcGxldGVkXCJdO1xuXG5cdG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0bGV0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRsZXQgbWVudUl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcblx0XHRcdFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcblx0XHRcdFwic3ZnXCJcblx0XHQpO1xuXHRcdGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdFx0bWVudUl0ZW0uaW5uZXJUZXh0ID0gaXRlbTtcblx0XHRtZW51SXRlbUltYWdlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIik7XG5cdFx0bWVudUl0ZW1JbWFnZS5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuXHRcdG1lbnVJdGVtSW1hZ2UuaW5uZXJIVE1MID0gYDxwYXRoIGQ9XCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEwIDE3TDUgMTJMNi40MSAxMC41OUwxMCAxNC4xN0wxNy41OSA2LjU4TDE5IDhMMTAgMTdaXCIgLz5gO1xuXG5cdFx0bWVudUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1jb250YWluZXJcIik7XG5cdFx0bWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuXHRcdG1lbnVBcmVhLmFwcGVuZChtZW51SXRlbUNvbnRhaW5lcik7XG5cdFx0bWVudUl0ZW1Db250YWluZXIuYXBwZW5kKG1lbnVJdGVtSW1hZ2UsIG1lbnVJdGVtKTtcblx0fSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUhlYWRlcixcblx0Y3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlLFxuXHRjcmVhdGVIYW1idXJnZXIsXG5cdGNyZWF0ZVNpZGVNZW51LFxufTtcbiIsImZ1bmN0aW9uIHJlbmRlckRldGFpbHMoXG5cdHRhc2tUaXRsZSA9IFwiTG9yZW0gSXBzdW1cIixcblx0dGFza0Rlc2NyaXB0aW9uID0gXCJRd2VydHkgYXNkZiBoamsgeGN2Ym5tLCBmZ2hqayBkZmdoamsgZXJ0eXUgcmZnYm4gc2RmZ2hqayBkZmdoai5cIixcblx0dGFza1Byb2plY3QgPSBcIkdlbmVyYWxcIixcblx0dGFza0R1ZURhdGUgPSBuZXcgRGF0ZSgpLFxuXHR0YXNrUHJpb3JpdHkgPSBcImxvd1wiXG4pIHtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcbiAgICBjb25zdCB0aWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBkZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cblx0ZGV0YWlsc0FyZWEuYXBwZW5kKHRpY2tCb3gsIGRldGFpbHNUaXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIGR1ZURhdGUsIHByaW9yaXR5KTtcblx0ZGV0YWlsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLXRpdGxlXCIpO1xuXHRkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcblx0cHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblx0ZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG5cdHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblxuXHRkZXRhaWxzVGl0bGUuaW5uZXJUZXh0ID0gdGFza1RpdGxlO1xuXHRkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrRGVzY3JpcHRpb247XG5cdHByb2plY3QuaW5uZXJUZXh0ID0gdGFza1Byb2plY3Q7XG5cdGR1ZURhdGUuaW5uZXJUZXh0ID0gdGFza0R1ZURhdGU7XG5cdHByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2tQcmlvcml0eTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJEZXRhaWxzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuXHRjcmVhdGVIZWFkZXIsXG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSxcblx0Y3JlYXRlSGFtYnVyZ2VyLFxuXHRjcmVhdGVTaWRlTWVudSxcbn0gZnJvbSBcIi4vY3JlYXRlLWhvbWVcIjtcbmltcG9ydCByZW5kZXJEZXRhaWxzIGZyb20gXCIuL2NyZWF0ZURldGFpbHNQYW5lbFwiO1xuXG5jb25zdCBjcmVhdGVJbnRlcmZhY2UgPSAoKSA9PiB7XG5cdGNyZWF0ZUhlYWRlcigpO1xuXHRjcmVhdGVIYW1idXJnZXIoKTtcblx0Y3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlKCk7XG5cdGNyZWF0ZVNpZGVNZW51KCk7XG5cdHJlbmRlckRldGFpbHMoKTtcbn07XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNyZWF0ZUludGVyZmFjZSk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==