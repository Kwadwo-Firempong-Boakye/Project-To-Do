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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\n@font-face {\n\tfont-family: Varela;\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-family: Varela, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bolder;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground: var(--white);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n\t/* display: none; */\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 2px solid var(--divider-color);\n\tbackground: linear-gradient(45deg, var(--logo-blue), #043584);\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\twidth: 2rem;\n\tmargin-right: 1rem;\n\tpadding: 1rem;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tmargin: 0;\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-family: Varela;\n\tfont-size: 2rem;\n\tmargin: 1rem;\n\tcolor: #043584;\n\tletter-spacing: 1px;\n\ttext-align: center;\n}\n\n.task-container {\n\t/* background: #ebf4ff; */\n\t/* padding: 0.75em; */\n\t/* position: relative; */\n\t/* height: 1.75rem; */\n\t/* justify-content: space-between; */\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\tfont-family: Varela;\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n}\n\n.task-container p {\n\tmargin-left: 2rem;\n\tmargin-right: 0.5rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n}\n\n.task-container button {\n\tmargin-left: auto;\n\tmargin-right: 1rem;\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\ttransform: rotate(45deg);\n}\n\n.details-title,\n.task-description,\n.due-date {\n\twidth: 90%;\n\tmargin: 0;\n\tmargin-left: 1.5rem;\n\tfont-family: Varela;\n\tcolor: var(--white);\n}\n\n.details-title {\n\tmargin-top: 2.5rem;\n\tpadding: 0.75rem 0 0.5rem 0;\n\tfont-size: 1.75rem;\n}\n\n.project,\n.priority {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tmargin: 0.5rem 0 2rem 1.5rem;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.priority {\n\tbackground-color: var(--logo-blue);\n}\n\n.task-description {\n\tpadding: 1.5rem 0;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--white);\n\tborder-top: 1px solid var(--white);\n\tline-height: 1.75rem;\n}\n\n.due-date {\n\tpadding: 1.5rem 0;\n\tborder-bottom: 1px solid var(--white);\n\tfont-size: 1.1rem;\n\tline-height: 1.75rem;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.task-container button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\ttransform: translateX(10px);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\twidth: 2.5rem;\n\t\ttransition: all 0.3s ease-out;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.task-container button {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t.tasks-area h2 {\n\t\tfont-size: 1.5rem;\n\t\tmargin: 1.3rem;\n\t}\n\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t}\n\n\t.tasks-area-overlay {\n\t\tposition: absolute;\n\t\tz-index: 4;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: black;\n\t\topacity: 0.6;\n\t}\n}\n\n@media only screen and (max-width: 450px) {\n\t.logo-area p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 255px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-container button {\n\t\tmargin-bottom: 1rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\n@font-face {\n\tfont-family: Varela;\n\tsrc: url(./Fonts/VarelaRound-Regular.ttf);\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-family: Varela, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bolder;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground: var(--white);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n\t/* display: none; */\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 2px solid var(--divider-color);\n\tbackground: linear-gradient(45deg, var(--logo-blue), #043584);\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\twidth: 2rem;\n\tmargin-right: 1rem;\n\tpadding: 1rem;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tmargin: 0;\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-family: Varela;\n\tfont-size: 2rem;\n\tmargin: 1rem;\n\tcolor: #043584;\n\tletter-spacing: 1px;\n\ttext-align: center;\n}\n\n.task-container {\n\t/* background: #ebf4ff; */\n\t/* padding: 0.75em; */\n\t/* position: relative; */\n\t/* height: 1.75rem; */\n\t/* justify-content: space-between; */\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\tfont-family: Varela;\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n}\n\n.task-container p {\n\tmargin-left: 2rem;\n\tmargin-right: 0.5rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n}\n\n.task-container button {\n\tmargin-left: auto;\n\tmargin-right: 1rem;\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\ttransform: rotate(45deg);\n}\n\n.details-title,\n.task-description,\n.due-date {\n\twidth: 90%;\n\tmargin: 0;\n\tmargin-left: 1.5rem;\n\tfont-family: Varela;\n\tcolor: var(--white);\n}\n\n.details-title {\n\tmargin-top: 2.5rem;\n\tpadding: 0.75rem 0 0.5rem 0;\n\tfont-size: 1.75rem;\n}\n\n.project,\n.priority {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tmargin: 0.5rem 0 2rem 1.5rem;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.priority {\n\tbackground-color: var(--logo-blue);\n}\n\n.task-description {\n\tpadding: 1.5rem 0;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--white);\n\tborder-top: 1px solid var(--white);\n\tline-height: 1.75rem;\n}\n\n.due-date {\n\tpadding: 1.5rem 0;\n\tborder-bottom: 1px solid var(--white);\n\tfont-size: 1.1rem;\n\tline-height: 1.75rem;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.task-container button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\ttransform: translateX(10px);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\twidth: 2.5rem;\n\t\ttransition: all 0.3s ease-out;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.task-container button {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t.tasks-area h2 {\n\t\tfont-size: 1.5rem;\n\t\tmargin: 1.3rem;\n\t}\n\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t}\n\n\t.tasks-area-overlay {\n\t\tposition: absolute;\n\t\tz-index: 4;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: black;\n\t\topacity: 0.6;\n\t}\n}\n\n@media only screen and (max-width: 450px) {\n\t.logo-area p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 255px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-container button {\n\t\tmargin-bottom: 1rem;\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/create-details-panel.js":
/*!*************************************!*\
  !*** ./src/create-details-panel.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Images_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/arrow.png */ "./src/Images/arrow.png");


function renderDetails(
	taskTitle = "Lorem Ipsum",
	taskProject = "General",
	taskDescription = "Qwerty asdf hjk xcvbnm, fghjk dfghjk ertyu rfgbn sdfghjk dfghj.",
	taskDueDate = new Date(),
	taskPriority = "low"
) {
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");
	const tasksAreaOverlay = document.querySelector(".tasks-area-overlay");
	const backArrow = document.createElement("img");
	const detailsTitle = document.createElement("h3");
	const project = document.createElement("p");
	const priority = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");

	detailsArea.append(
		backArrow,
		detailsTitle,
		project,
		priority,
		description,
		dueDate
	);

	backArrow.classList.add("back-arrow");
	detailsTitle.classList.add("details-title");
	project.classList.add("project");
	priority.classList.add("priority");
	description.classList.add("task-description");
	dueDate.classList.add("due-date");

	backArrow.setAttribute("src", _Images_arrow_png__WEBPACK_IMPORTED_MODULE_0__);
	detailsTitle.innerText = taskTitle;
	project.innerText = taskProject;
	description.innerText = taskDescription;
	dueDate.innerHTML = `<span class="due-text">Due date</span> <br><br> ${taskDueDate}`;
	priority.innerText = taskPriority;

	backArrow.addEventListener("click", () => {
		detailsArea.classList.add("hide-details-panel");
		tasksArea.classList.remove("no-pointer-events");
		// tasksAreaOverlay.classList.add("no-display");
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderDetails);


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
/* harmony import */ var _Images_Taskie_logo_deep_blue_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/Taskie-logo-deep-blue.png */ "./src/Images/Taskie-logo-deep-blue.png");
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
		const tasksAreaOverlay = document.querySelector(".tasks-area-overlay");
		const detailsArea = document.querySelector(".details-area");

		const compStyle = window.getComputedStyle(menuArea);
		const checkDisplayState = compStyle.display !== "none";

		detailsArea.classList.add("no-display");
		detailsArea.classList.add("hide-details-panel");

		if (checkDisplayState) {
			setTimeout(() => {
				menuArea.classList.add("no-display");
				tasksAreaOverlay.classList.add("no-display");
			}, 200);
			menuArea.classList.toggle("hide-side-menu");
		} else {
			menuArea.classList.remove("no-display");
			setTimeout(() => {
				menuArea.classList.toggle("hide-side-menu");
			}, 10);
			setTimeout(() => {
				tasksAreaOverlay.classList.remove("no-display");
			}, 200);
		}
	});

	window.addEventListener("resize", () => {
		const menuArea = document.querySelector(".menu-area");
		if (window.innerWidth <= 768) {
			menuArea.classList.add("hide-side-menu");
			menuArea.classList.add("no-display");
		} else {
			menuArea.classList.remove("no-display");
			setTimeout(() => {
				menuArea.classList.remove("hide-side-menu");
			}, 10);
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
	logoImg.setAttribute("src", _Images_Taskie_logo_deep_blue_png__WEBPACK_IMPORTED_MODULE_0__);
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
	detailsArea.classList.add("details-area", "no-display", "hide-details-panel");
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

/***/ "./src/create-task-panel.js":
/*!**********************************!*\
  !*** ./src/create-task-panel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTask": () => (/* binding */ renderTask),
/* harmony export */   "renderTaskArea": () => (/* binding */ renderTaskArea)
/* harmony export */ });
function renderTaskArea(data) {
	const menuArea = document.querySelector(".menu-area");
	const tasksArea = document.querySelector(".tasks-area");
	const tasksAreaOverlay = document.createElement("div");
	const heading = document.createElement("h2");

	tasksArea.append(tasksAreaOverlay, heading);

	tasksAreaOverlay.classList.add("tasks-area-overlay", "no-display");
	heading.innerText = data;

	tasksAreaOverlay.addEventListener("click", () => {
		menuArea.classList.add("hide-side-menu");
		menuArea.classList.add("no-display");
		tasksAreaOverlay.classList.add("no-display");
	});

	tasksArea.addEventListener("click", () => {
		console.log("clicked");
	});
}

function renderTask(
	taskTitle = "Lorem Ipsum Qwerty asdf hjk xcvbnm",
	taskProject = "General",
	taskDescription = "Qwerty asdf hjk xcvbnm, fghjk dfghjk ertyu rfgbn sdfghjk dfghj.",
	taskDueDate = new Date(),
	taskPriority = "low"
) {
	const tasksArea = document.querySelector(".tasks-area");
	const taskContainer = document.createElement("div");
	const taskCheckLabel = document.createElement("label");
	const taskCheckInput = document.createElement("input");
	const taskCheckSpan = document.createElement("span");
	const taskName = document.createElement("p");
	const taskEdit = document.createElement("button");
	const detailsArea = document.querySelector(".details-area");
	const tasksAreaOverlay = document.querySelector(".tasks-area-overlay");

	tasksArea.append(taskContainer);
	taskContainer.append(taskCheckLabel, taskName, taskEdit);
	taskCheckLabel.append(taskCheckInput, taskCheckSpan);

	taskContainer.classList.add("task-container");
	taskCheckInput.setAttribute("type", "checkbox");

	taskName.innerText = taskTitle;
	taskEdit.innerText = "Modify";

	taskContainer.addEventListener("click", () => {
		// tasksAreaOverlay.classList.remove("no-display");
		detailsArea.classList.remove("no-display");
		detailsArea.classList.remove("hide-details-panel");
		tasksArea.classList.add("no-pointer-events");
	});
}




/***/ }),

/***/ "./src/Fonts/VarelaRound-Regular.ttf":
/*!*******************************************!*\
  !*** ./src/Fonts/VarelaRound-Regular.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b0ad79431843e696f58.ttf";

/***/ }),

/***/ "./src/Images/Taskie-logo-deep-blue.png":
/*!**********************************************!*\
  !*** ./src/Images/Taskie-logo-deep-blue.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a884e1c419b846566bf5.png";

/***/ }),

/***/ "./src/Images/Taskie-logo-sky.png":
/*!****************************************!*\
  !*** ./src/Images/Taskie-logo-sky.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f327d09694a952382cc7.png";

/***/ }),

/***/ "./src/Images/arrow.png":
/*!******************************!*\
  !*** ./src/Images/arrow.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "909edb9dbc8fa1d4a816.png";

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
/* harmony import */ var _create_details_panel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-details-panel.js */ "./src/create-details-panel.js");
/* harmony import */ var _create_task_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task-panel */ "./src/create-task-panel.js");





const createInterface = () => {
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHamburger)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createDashboardStructure)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createSideMenu)();
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_3__.renderTaskArea)("All Tasks");
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_3__.renderTask)();
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_3__.renderTask)();
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_3__.renderTask)();
	(0,_create_details_panel_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

window.addEventListener("load", createInterface);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcs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bEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLG9EQUFVO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsOERBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFVO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RHRDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBTUU7QUFDK0I7QUFDVzs7QUFFakU7QUFDQSxDQUFDLDBEQUFZO0FBQ2IsQ0FBQyw2REFBZTtBQUNoQixDQUFDLHNFQUF3QjtBQUN6QixDQUFDLDREQUFjO0FBQ2YsQ0FBQyxrRUFBYztBQUNmLENBQUMsOERBQVU7QUFDWCxDQUFDLDhEQUFVO0FBQ1gsQ0FBQyw4REFBVTtBQUNYLENBQUMsb0VBQWE7QUFDZDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtZGV0YWlscy1wYW5lbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS1ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLXRhc2stcGFuZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ZvbnRzL1ZhcmVsYVJvdW5kLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHQtLWRpdmlkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0LS1sb2dvLXBpbms6ICNmZjFiNmI7XFxuXFx0LS1sb2dvLWJsdWU6ICM0NWNhZmY7XFxuXFx0LS1sb2dvLW1pZC1ibHVlOiAjMDA2MWZmO1xcblxcdC0tbG9nby1ncmVlbjogIzczZmYwMDtcXG5cXHQtLWRhcmstbW9kZS1iZzogIzIzMjMyMztcXG5cXHQtLXdoaXRlOiAjZmZmO1xcblxcdC0tb2ZmLXdoaXRlOiAjZjVmNWY1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGhlaWdodDogNjBweDtcXG59XFxuXFxuLmxvZ28tYXJlYSxcXG4uaGVhZGVyLW1lbnUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcXG59XFxuXFxuLmxvZ28tYXJlYSBwIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9nby1hcmVhIGltZyB7XFxuXFx0aGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1tZW51IGltZyB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuMzVyZW0gMS41cmVtIDAuMzVyZW0gMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsdXMge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIERBU0hCT0FSRCBBUkVBKi9cXG5cXG4uZGFzaC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRnYXA6IDFyZW07XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDYycHgpO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5tZW51LWFyZWEge1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNjtcXG5cXHQvKiBkaXNwbGF5OiBub25lOyAqL1xcbn1cXG5cXG4udGFza3MtYXJlYSB7XFxuXFx0LyogbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gNzIwcHgpOyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjhweCk7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAwLjVyZW07ICovXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdG1heC13aWR0aDogNDUwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmJhY2stYXJyb3cge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVyZW07XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbi5oaWRlLXNpZGUtbWVudSB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxufVxcblxcbi5oaWRlLWRldGFpbHMtcGFuZWwge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubm8tcG9pbnRlci1ldmVudHMge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuMjVyZW0gMXJlbSAxLjI1cmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOm50aC1jaGlsZCgxKSB7XFxuXFx0bWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgc3ZnIHtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHJnYigyMDIsIDIzMCwgMjQ5KTtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTU2LCAyMDAsIDIzMCk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFza3MtYXJlYSBoMiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcblxcdC8qIGJhY2tncm91bmQ6ICNlYmY0ZmY7ICovXFxuXFx0LyogcGFkZGluZzogMC43NWVtOyAqL1xcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG5cXHQvKiBoZWlnaHQ6IDEuNzVyZW07ICovXFxuXFx0LyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRtYXJnaW46IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDA7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGQ1ZjA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRtYXJnaW4tbGVmdDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0cGFkZGluZzogMC4zcmVtIDAuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luOiAwLjVyZW07XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMS43NXJlbTtcXG5cXHR3aWR0aDogMS43NXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3Bhbjo6YWZ0ZXIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3Bhbjo6YWZ0ZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAtMTtcXG5cXHRsZWZ0OiAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHdpZHRoOiAwLjM1cmVtO1xcblxcdGhlaWdodDogMS4xcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUsXFxuLnRhc2stZGVzY3JpcHRpb24sXFxuLmR1ZS1kYXRlIHtcXG5cXHR3aWR0aDogOTAlO1xcblxcdG1hcmdpbjogMDtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcblxcdG1hcmdpbi10b3A6IDIuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjc1cmVtIDAgMC41cmVtIDA7XFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4ucHJpb3JpdHkge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMC44NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMCAycmVtIDEuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjJyZW0gMC44cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2dvLWJsdWUpO1xcbn1cXG5cXG4udGFzay1kZXNjcmlwdGlvbiB7XFxuXFx0cGFkZGluZzogMS41cmVtIDA7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHRib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcblxcdHBhZGRpbmc6IDEuNXJlbSAwO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi5kdWUtdGV4dCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Zm9udC1zaXplOiAwLjg1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcdHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjN2Y1O1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwZjU4Y2Q7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2YWJlO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC41NXJlbSAzcmVtIDAuNTVyZW0gMi41cmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNSk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWxvZ28tbWlkLWJsdWUpLCB2YXIoLS1sb2dvLWJsdWUpKTsgKi9cXG5cXHRcXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIC5tZW51LWl0ZW0ge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlcjpob3ZlciB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdH1cXG5cXG5cXHQuYmFjay1hcnJvdzpob3ZlciB7XFxuXFx0XFx0d2lkdGg6IDIuNXJlbTtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQudGFza3MtYXJlYSBoMiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0XFx0bWFyZ2luOiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5tZW51LWFyZWEge1xcblxcdFxcdHdpZHRoOiAyNzVweDtcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0fVxcblxcblxcdC50YXNrcy1hcmVhLW92ZXJsYXkge1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHR6LWluZGV4OiA0O1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRcXHRvcGFjaXR5OiAwLjY7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuXFx0LmxvZ28tYXJlYSBwIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYXJlYSBpbWcge1xcblxcdFxcdGhlaWdodDogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLWJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWcge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWFyZWEge1xcblxcdFxcdG1heC13aWR0aDogMjU1cHg7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRcXHRsZWZ0OiAycmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwi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QTtDQUNDO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHQtLWRpdmlkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0LS1sb2dvLXBpbms6ICNmZjFiNmI7XFxuXFx0LS1sb2dvLWJsdWU6ICM0NWNhZmY7XFxuXFx0LS1sb2dvLW1pZC1ibHVlOiAjMDA2MWZmO1xcblxcdC0tbG9nby1ncmVlbjogIzczZmYwMDtcXG5cXHQtLWRhcmstbW9kZS1iZzogIzIzMjMyMztcXG5cXHQtLXdoaXRlOiAjZmZmO1xcblxcdC0tb2ZmLXdoaXRlOiAjZjVmNWY1O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdHNyYzogdXJsKC4vRm9udHMvVmFyZWxhUm91bmQtUmVndWxhci50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG9nby1hcmVhLFxcbi5oZWFkZXItbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5sb2dvLWFyZWEgaW1nIHtcXG5cXHRoZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi5oZWFkZXItbWVudSBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTsgKi9cXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC4zNXJlbSAxLjVyZW0gMC4zNXJlbSAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogREFTSEJPQVJEIEFSRUEqL1xcblxcbi5kYXNoLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjJweCk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1lbnUtYXJlYSB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA2O1xcblxcdC8qIGRpc3BsYXk6IG5vbmU7ICovXFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHQvKiBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3MjBweCk7ICovXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2OHB4KTtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgKi9cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRldGFpbHMtYXJlYSB7XFxuXFx0bWF4LXdpZHRoOiA0NTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG5cXG4uYmFjay1hcnJvdyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHdpZHRoOiAycmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXJlbTtcXG5cXHR6LWluZGV4OiAxMDtcXG59XFxuXFxuLmhpZGUtc2lkZS1tZW51IHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG59XFxuXFxuLmhpZGUtZGV0YWlscy1wYW5lbCB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uby1wb2ludGVyLWV2ZW50cyB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAxcmVtIDEuMjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBzdmcge1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEycHg7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDIwMiwgMjMwLCAyNDkpO1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHJnYigxNTYsIDIwMCwgMjMwKTtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi50YXNrcy1hcmVhIGgyIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRtYXJnaW46IDFyZW07XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuXFx0LyogYmFja2dyb3VuZDogI2ViZjRmZjsgKi9cXG5cXHQvKiBwYWRkaW5nOiAwLjc1ZW07ICovXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcblxcdC8qIGhlaWdodDogMS43NXJlbTsgKi9cXG5cXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdG1hcmdpbjogMC43NXJlbSAxcmVtIDAuNzVyZW0gMDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0ZDVmMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHAge1xcblxcdG1hcmdpbi1sZWZ0OiAycmVtO1xcblxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcblxcdG1heC13aWR0aDogNjAlO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRtYXJnaW4tbGVmdDogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjNyZW0gMC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW46IDAuNXJlbTtcXG5cXHRib3R0b206IDRweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3BhbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiAxLjc1cmVtO1xcblxcdHdpZHRoOiAxLjc1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuOjphZnRlciB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzcGFuOjphZnRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IC0xO1xcblxcdGxlZnQ6IDAuNzVyZW07XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0d2lkdGg6IDAuMzVyZW07XFxuXFx0aGVpZ2h0OiAxLjFyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci13aWR0aDogMCA0cHggNHB4IDA7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSxcXG4udGFzay1kZXNjcmlwdGlvbixcXG4uZHVlLWRhdGUge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMCAwLjVyZW0gMDtcXG5cXHRmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5wcm9qZWN0LFxcbi5wcmlvcml0eSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Zm9udC1zaXplOiAwLjg1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwIDJyZW0gMS41cmVtO1xcblxcdHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvZ28tYmx1ZSk7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gMDtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuXFx0cGFkZGluZzogMS41cmVtIDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLmR1ZS10ZXh0IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDAuODVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0cGFkZGluZzogMC4ycmVtIDAuOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQudGFzay1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM5ZGM3ZjU7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBidXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzBmNThjZDtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW46aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjU1cmVtIDNyZW0gMC41NXJlbSAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWc6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpOyAqL1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIgLm1lbnUtaXRlbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcblxcdC5iYWNrLWFycm93OmhvdmVyIHtcXG5cXHRcXHR3aWR0aDogMi41cmVtO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0fVxcblxcblxcdC50YXNrcy1hcmVhIGgyIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRcXHRtYXJnaW46IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtYXJlYSB7XFxuXFx0XFx0d2lkdGg6IDI3NXB4O1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR9XFxuXFxuXFx0LnRhc2tzLWFyZWEtb3ZlcmxheSB7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdHotaW5kZXg6IDQ7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcblxcdFxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdFxcdG9wYWNpdHk6IDAuNjtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG5cXHQubG9nby1hcmVhIHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQubG9nby1hcmVhIGltZyB7XFxuXFx0XFx0aGVpZ2h0OiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtYXJlYSB7XFxuXFx0XFx0bWF4LXdpZHRoOiAyNTVweDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHAge1xcblxcdFxcdGxlZnQ6IDJyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJhY2sgZnJvbSBcIi4vSW1hZ2VzL2Fycm93LnBuZ1wiO1xuXG5mdW5jdGlvbiByZW5kZXJEZXRhaWxzKFxuXHR0YXNrVGl0bGUgPSBcIkxvcmVtIElwc3VtXCIsXG5cdHRhc2tQcm9qZWN0ID0gXCJHZW5lcmFsXCIsXG5cdHRhc2tEZXNjcmlwdGlvbiA9IFwiUXdlcnR5IGFzZGYgaGprIHhjdmJubSwgZmdoamsgZGZnaGprIGVydHl1IHJmZ2JuIHNkZmdoamsgZGZnaGouXCIsXG5cdHRhc2tEdWVEYXRlID0gbmV3IERhdGUoKSxcblx0dGFza1ByaW9yaXR5ID0gXCJsb3dcIlxuKSB7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgdGFza3NBcmVhT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYS1vdmVybGF5XCIpO1xuXHRjb25zdCBiYWNrQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBkZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGRldGFpbHNBcmVhLmFwcGVuZChcblx0XHRiYWNrQXJyb3csXG5cdFx0ZGV0YWlsc1RpdGxlLFxuXHRcdHByb2plY3QsXG5cdFx0cHJpb3JpdHksXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZHVlRGF0ZVxuXHQpO1xuXG5cdGJhY2tBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYmFjay1hcnJvd1wiKTtcblx0ZGV0YWlsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLXRpdGxlXCIpO1xuXHRwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXHRwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cdGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpO1xuXHRkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcblxuXHRiYWNrQXJyb3cuc2V0QXR0cmlidXRlKFwic3JjXCIsIGJhY2spO1xuXHRkZXRhaWxzVGl0bGUuaW5uZXJUZXh0ID0gdGFza1RpdGxlO1xuXHRwcm9qZWN0LmlubmVyVGV4dCA9IHRhc2tQcm9qZWN0O1xuXHRkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrRGVzY3JpcHRpb247XG5cdGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZHVlLXRleHRcIj5EdWUgZGF0ZTwvc3Bhbj4gPGJyPjxicj4gJHt0YXNrRHVlRGF0ZX1gO1xuXHRwcmlvcml0eS5pbm5lclRleHQgPSB0YXNrUHJpb3JpdHk7XG5cblx0YmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0XHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXHRcdC8vIHRhc2tzQXJlYU92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJEZXRhaWxzO1xuIiwiaW1wb3J0IGxvZ29CbHVlIGZyb20gXCIuL0ltYWdlcy9UYXNraWUtbG9nby1kZWVwLWJsdWUucG5nXCI7XG5pbXBvcnQgbG9nb1NreSBmcm9tIFwiLi9JbWFnZXMvVGFza2llLWxvZ28tc2t5LnBuZ1wiO1xuaW1wb3J0IGdpdGh1YlNpZ24gZnJvbSBcIi4vSW1hZ2VzL2dpdGh1Yi1zaWduLnBuZ1wiO1xuaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSBcIi4vSW1hZ2VzL2J1cmdlci1tZW51LnN2Z1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVIYW1idXJnZXIoKSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlcik7XG5cdGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYnVyZ2VyTWVudSk7XG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyXCIpO1xuXG5cdGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdFx0Y29uc3QgdGFza3NBcmVhT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYS1vdmVybGF5XCIpO1xuXHRcdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cblx0XHRjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QXJlYSk7XG5cdFx0Y29uc3QgY2hlY2tEaXNwbGF5U3RhdGUgPSBjb21wU3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXG5cdFx0aWYgKGNoZWNrRGlzcGxheVN0YXRlKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRcdHRhc2tzQXJlYU92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHR9LCAyMDApO1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHR9LCAxMCk7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0dGFza3NBcmVhT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdH0sIDIwMCk7XG5cdFx0fVxuXHR9KTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0fSwgMTApO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0Ly9HZW5lcmFsIGVsZW1lbnRzIHJlcXVpcmVkIGZvciBoZWFkZXJcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IGxvZ29BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Y29uc3QgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnN0IGhlYWRlck5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdC8vQnVpbGQgaGVhZGVyIHN0cnVjdHVyZVxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChoZWFkZXJDb250YWluZXIpO1xuXHRoZWFkZXJDb250YWluZXIuYXBwZW5kKGxvZ29BcmVhLCBoZWFkZXJNZW51KTtcblx0bG9nb0FyZWEuYXBwZW5kKGxvZ29JbWcsIGxvZ29UZXh0KTtcblx0aGVhZGVyTWVudS5hcHBlbmQoZ2l0TGluaywgaGVhZGVyTmV3VGFza0J1dHRvbik7XG5cdGdpdExpbmsuYXBwZW5kKGdpdExvZ28pO1xuXG5cdC8vRmlsbC1vdXQgZWxlbWVudHNcblx0bG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9nb0JsdWUpO1xuXHRsb2dvVGV4dC5pbm5lclRleHQgPSBcIkp1c3QtRG8tSXRcIjtcblx0Z2l0TGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XCJocmVmXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vS3dhZHdvLUZpcmVtcG9uZy1Cb2FreWUvUHJvamVjdC1Uby1Eb1wiXG5cdCk7XG5cdGdpdExpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXHRnaXRMb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBnaXRodWJTaWduKTtcblx0aGVhZGVyTmV3VGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwbHVzXCI+Kzwvc3Bhbj4gVGFza2A7XG5cblx0Ly9Bc3NpZ24gQ1NTIGNsYXNzZXNcblx0aGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuXHRsb2dvQXJlYS5jbGFzc0xpc3QuYWRkKFwibG9nby1hcmVhXCIpO1xuXHRoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItbWVudVwiKTtcblx0aGVhZGVyTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ1dHRvblwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlKCkge1xuXHQvL0dlbmVyYWwgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGRhc2hib2FyZFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgZGFzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuXHQvL0J1aWxkIGRhc2hib2FyZCBzdHJ1Y3R1cmVcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoZGFzaENvbnRhaW5lcik7XG5cdGRhc2hDb250YWluZXIuYXBwZW5kKG1lbnVBcmVhLCB0YXNrc0FyZWEsIGRldGFpbHNBcmVhKTtcblxuXHQvL0Fzc2lnbiBDU1MgY2xhc3Nlc1xuXHRkYXNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXNoLWNvbnRhaW5lclwiKTtcblx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJlYVwiKTtcblx0dGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1hcmVhXCIpO1xuXHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1hcmVhXCIsIFwibm8tZGlzcGxheVwiLCBcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZU1lbnUoKSB7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdGNvbnN0IG1lbnVJdGVtcyA9IFtcIkFsbCBUYXNrc1wiLCBcIkR1ZSB0b2RheVwiLCBcIkR1ZSB0aGlzIHdlZWtcIiwgXCJDb21wbGV0ZWRcIl07XG5cblx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRsZXQgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGxldCBtZW51SXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuXHRcdFx0XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdFx0XCJzdmdcIlxuXHRcdCk7XG5cdFx0bGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0XHRtZW51SXRlbS5pbm5lclRleHQgPSBpdGVtO1xuXHRcdG1lbnVJdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcblx0XHRtZW51SXRlbUltYWdlLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG5cdFx0bWVudUl0ZW1JbWFnZS5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJTNi41IDIyIDEyIDIyIDIyIDE3LjUgMjIgMTIgMTcuNSAyIDEyIDJNMTAgMTdMNSAxMkw2LjQxIDEwLjU5TDEwIDE0LjE3TDE3LjU5IDYuNThMMTkgOEwxMCAxN1pcIiAvPmA7XG5cblx0XHRtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcblx0XHRtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG5cdFx0bWVudUFyZWEuYXBwZW5kKG1lbnVJdGVtQ29udGFpbmVyKTtcblx0XHRtZW51SXRlbUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW1JbWFnZSwgbWVudUl0ZW0pO1xuXHR9KTtcbn1cblxuZXhwb3J0IHtcblx0Y3JlYXRlSGVhZGVyLFxuXHRjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUsXG5cdGNyZWF0ZUhhbWJ1cmdlcixcblx0Y3JlYXRlU2lkZU1lbnUsXG59O1xuIiwiZnVuY3Rpb24gcmVuZGVyVGFza0FyZWEoZGF0YSkge1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYU92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG5cdHRhc2tzQXJlYS5hcHBlbmQodGFza3NBcmVhT3ZlcmxheSwgaGVhZGluZyk7XG5cblx0dGFza3NBcmVhT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidGFza3MtYXJlYS1vdmVybGF5XCIsIFwibm8tZGlzcGxheVwiKTtcblx0aGVhZGluZy5pbm5lclRleHQgPSBkYXRhO1xuXG5cdHRhc2tzQXJlYU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0dGFza3NBcmVhT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0fSk7XG5cblx0dGFza3NBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhcblx0dGFza1RpdGxlID0gXCJMb3JlbSBJcHN1bSBRd2VydHkgYXNkZiBoamsgeGN2Ym5tXCIsXG5cdHRhc2tQcm9qZWN0ID0gXCJHZW5lcmFsXCIsXG5cdHRhc2tEZXNjcmlwdGlvbiA9IFwiUXdlcnR5IGFzZGYgaGprIHhjdmJubSwgZmdoamsgZGZnaGprIGVydHl1IHJmZ2JuIHNkZmdoamsgZGZnaGouXCIsXG5cdHRhc2tEdWVEYXRlID0gbmV3IERhdGUoKSxcblx0dGFza1ByaW9yaXR5ID0gXCJsb3dcIlxuKSB7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRhc2tDaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrQ2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgdGFza0NoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWEtb3ZlcmxheVwiKTtcblxuXHR0YXNrc0FyZWEuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuXHR0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrQ2hlY2tMYWJlbCwgdGFza05hbWUsIHRhc2tFZGl0KTtcblx0dGFza0NoZWNrTGFiZWwuYXBwZW5kKHRhc2tDaGVja0lucHV0LCB0YXNrQ2hlY2tTcGFuKTtcblxuXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcblx0dGFza0NoZWNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG5cdHRhc2tOYW1lLmlubmVyVGV4dCA9IHRhc2tUaXRsZTtcblx0dGFza0VkaXQuaW5uZXJUZXh0ID0gXCJNb2RpZnlcIjtcblxuXHR0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Ly8gdGFza3NBcmVhT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHRcdHRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cdH0pO1xufVxuXG5leHBvcnQgeyByZW5kZXJUYXNrQXJlYSwgcmVuZGVyVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuXHRjcmVhdGVIZWFkZXIsXG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSxcblx0Y3JlYXRlSGFtYnVyZ2VyLFxuXHRjcmVhdGVTaWRlTWVudSxcbn0gZnJvbSBcIi4vY3JlYXRlLWhvbWVcIjtcbmltcG9ydCByZW5kZXJEZXRhaWxzIGZyb20gXCIuL2NyZWF0ZS1kZXRhaWxzLXBhbmVsLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrQXJlYSwgcmVuZGVyVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLXBhbmVsXCI7XG5cbmNvbnN0IGNyZWF0ZUludGVyZmFjZSA9ICgpID0+IHtcblx0Y3JlYXRlSGVhZGVyKCk7XG5cdGNyZWF0ZUhhbWJ1cmdlcigpO1xuXHRjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUoKTtcblx0Y3JlYXRlU2lkZU1lbnUoKTtcblx0cmVuZGVyVGFza0FyZWEoXCJBbGwgVGFza3NcIik7XG5cdHJlbmRlclRhc2soKTtcblx0cmVuZGVyVGFzaygpO1xuXHRyZW5kZXJUYXNrKCk7XG5cdHJlbmRlckRldGFpbHMoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjcmVhdGVJbnRlcmZhY2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9