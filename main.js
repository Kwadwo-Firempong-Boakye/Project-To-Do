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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\n@font-face {\n\tfont-family: Varela;\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-family: Varela, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bolder;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground: #ffffff;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\theight: 100%;\n\tborder-left: 2px solid var(--divider-color);\n\tbackground: linear-gradient(45deg, var(--logo-blue), #043584);\n\ttransition: all 0.2s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1rem;\n\twidth: 1.2rem;\n\tmargin-right: 1rem;\n\tpadding: 0.5rem;\n\tborder: 4px solid #fff;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tmargin: 0;\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-family: Varela;\n\tfont-size: 2rem;\n\tmargin: 1rem;\n\tcolor: #043584;\n\tletter-spacing: 1px;\n\ttext-align: center;\n}\n\n.task-container {\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\tfont-family: Varela;\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\ttransition: all 0.3s ease-in-out;\n\tanimation: slide-in 1.8s ease-out forwards;\n}\n\n.animate-out {\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: flex;\n\t/* align-items: center; */\n\tflex-wrap: wrap;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n}\n\n.task-container p {\n\tmargin-left: 2rem;\n\tmargin-right: 0.5rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\tmargin: auto 0.5rem;\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 4rem;\n}\n\n.details-title,\n.task-description,\n.due-date {\n\twidth: 90%;\n\tmargin: 0;\n\tmargin-left: 1.5rem;\n\tfont-family: Varela;\n\tcolor: var(--white);\n}\n\n.details-title {\n\tmargin-top: 2.5rem;\n\tpadding: 0.75rem 0 0.5rem 0;\n\tfont-size: 1.75rem;\n}\n\n.project,\n.priority {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tmargin: 0.5rem 0 2rem 1.5rem;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.priority {\n\tbackground-color: var(--logo-blue);\n}\n\n.task-description {\n\tpadding: 1.5rem 0;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--white);\n\tborder-top: 1px solid var(--white);\n\tline-height: 1.75rem;\n}\n\n.due-date {\n\tpadding: 1.5rem 0;\n\tborder-bottom: 1px solid var(--white);\n\tfont-size: 1.1rem;\n\tline-height: 1.75rem;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tfont-family: Varela;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 300px);\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-family: Varela;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela;\n}\n\n.form-content fieldset {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n}\n\n.form-content option {\n\tfont-family: Varela;\n\tfont-size: 1rem;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\ttransition: all 0.3s ease-out;\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\ttransform: translateX(10px);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\twidth: 2.5rem;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.tasks-area h2 {\n\t\tfont-size: 1.5rem;\n\t\tmargin: 1.3rem;\n\t}\n\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t}\n}\n\n@media only screen and (max-width: 450px) {\n\t.logo-area p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 255px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-container button {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1rem auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\tfont-family: sans-serif;\n\tfont-size: 16px;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\n@font-face {\n\tfont-family: Varela;\n\tsrc: url(./Fonts/VarelaRound-Regular.ttf);\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-family: Varela, sans-serif;\n\tfont-weight: 700;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bolder;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground: #ffffff;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\ttransition: all 0.4s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\theight: 100%;\n\tborder-left: 2px solid var(--divider-color);\n\tbackground: linear-gradient(45deg, var(--logo-blue), #043584);\n\ttransition: all 0.2s ease-in-out;\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1rem;\n\twidth: 1.2rem;\n\tmargin-right: 1rem;\n\tpadding: 0.5rem;\n\tborder: 4px solid #fff;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tmargin: 0;\n\tfont-family: Varela, sans-serif;\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-family: Varela;\n\tfont-size: 2rem;\n\tmargin: 1rem;\n\tcolor: #043584;\n\tletter-spacing: 1px;\n\ttext-align: center;\n}\n\n.task-container {\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\tfont-family: Varela;\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\ttransition: all 0.3s ease-in-out;\n\tanimation: slide-in 1.8s ease-out forwards;\n}\n\n.animate-out {\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: flex;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: flex;\n\t/* align-items: center; */\n\tflex-wrap: wrap;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n}\n\n.task-container p {\n\tmargin-left: 2rem;\n\tmargin-right: 0.5rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\tmargin: auto 0.5rem;\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 4rem;\n}\n\n.details-title,\n.task-description,\n.due-date {\n\twidth: 90%;\n\tmargin: 0;\n\tmargin-left: 1.5rem;\n\tfont-family: Varela;\n\tcolor: var(--white);\n}\n\n.details-title {\n\tmargin-top: 2.5rem;\n\tpadding: 0.75rem 0 0.5rem 0;\n\tfont-size: 1.75rem;\n}\n\n.project,\n.priority {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tmargin: 0.5rem 0 2rem 1.5rem;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.priority {\n\tbackground-color: var(--logo-blue);\n}\n\n.task-description {\n\tpadding: 1.5rem 0;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--white);\n\tborder-top: 1px solid var(--white);\n\tline-height: 1.75rem;\n}\n\n.due-date {\n\tpadding: 1.5rem 0;\n\tborder-bottom: 1px solid var(--white);\n\tfont-size: 1.1rem;\n\tline-height: 1.75rem;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-family: Varela;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tfont-family: Varela;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 300px);\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-family: Varela;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela;\n}\n\n.form-content fieldset {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n}\n\n.form-content option {\n\tfont-family: Varela;\n\tfont-size: 1rem;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\ttransition: all 0.3s ease-out;\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\ttransform: translateX(10px);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\twidth: 2.5rem;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.tasks-area h2 {\n\t\tfont-size: 1.5rem;\n\t\tmargin: 1.3rem;\n\t}\n\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t}\n}\n\n@media only screen and (max-width: 450px) {\n\t.logo-area p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 255px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-container button {\n\t\tmargin-bottom: 1rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1rem auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "clearDetails": () => (/* binding */ clearDetails),
/* harmony export */   "renderDetails": () => (/* binding */ renderDetails),
/* harmony export */   "showDetails": () => (/* binding */ showDetails)
/* harmony export */ });
/* harmony import */ var _Images_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/arrow.png */ "./src/Images/arrow.png");


function renderDetails(obj) {
	const detailsArea = document.querySelector(".details-area");
	const detailsInfoContainer = document.createElement("div");
	const backArrow = document.createElement("img");
	const detailsTitle = document.createElement("h3");
	const project = document.createElement("p");
	const priority = document.createElement("p");
	const description = document.createElement("p");
	const dueDate = document.createElement("p");

	detailsArea.append(detailsInfoContainer);
	detailsInfoContainer.append(
		backArrow,
		detailsTitle,
		project,
		priority,
		description,
		dueDate
	);

	detailsInfoContainer.classList.add("details-info-container");
	backArrow.classList.add("back-arrow");
	detailsTitle.classList.add("details-title");
	project.classList.add("project");
	priority.classList.add("priority");
	description.classList.add("task-description");
	dueDate.classList.add("due-date");

	backArrow.setAttribute("src", _Images_arrow_png__WEBPACK_IMPORTED_MODULE_0__);
	detailsTitle.innerText = obj["name"];
	project.innerText = obj["project"];
	description.innerText = obj["desc"];
	dueDate.innerHTML = `<span class="due-text">Due date</span> <br><br> ${obj["date"]}`;
	priority.innerText = obj["priority"];

	backArrow.addEventListener("click", clearDetails);
}

const clearDetails = () => {
	const detailsInfoContainer = document.querySelector(
		".details-info-container"
	);
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	if (detailsInfoContainer) {
		detailsArea.classList.add("hide-details-panel");
		tasksArea.classList.remove("no-pointer-events");
		setTimeout(() => {
			detailsInfoContainer.remove();
		}, 250);
	}
};

const showDetails = () => {
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	detailsArea.classList.remove("no-display");
	setTimeout(() => {
		detailsArea.classList.remove("hide-details-panel");
		tasksArea.classList.add("no-pointer-events");
	}, 10);
};




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
/* harmony import */ var _Images_github_sign_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/github-sign.png */ "./src/Images/github-sign.png");
/* harmony import */ var _Images_burger_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/burger-menu.svg */ "./src/Images/burger-menu.svg");
/* harmony import */ var _create_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task-form */ "./src/create-task-form.js");
/* harmony import */ var _create_details_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-details-panel */ "./src/create-details-panel.js");






function createHamburger() {
	const projectContainer = document.querySelector("#project-container");
	const hamburger = document.createElement("img");

	projectContainer.append(hamburger);
	hamburger.setAttribute("src", _Images_burger_menu_svg__WEBPACK_IMPORTED_MODULE_2__);
	hamburger.classList.add("hamburger");

	hamburger.addEventListener("click", () => {
		const menuArea = document.querySelector(".menu-area");
		const tasksArea = document.querySelector(".tasks-area");
		const detailsArea = document.querySelector(".details-area");

		const compStyle = window.getComputedStyle(menuArea);
		const checkDisplayState = compStyle.display !== "none";

		if (checkDisplayState) {
			setTimeout(() => {
				menuArea.classList.add("no-display");
			}, 200);
			menuArea.classList.toggle("hide-side-menu");
		} else {
			menuArea.classList.remove("no-display");
			setTimeout(() => {
				menuArea.classList.toggle("hide-side-menu");
			}, 10);
		}

		(0,_create_details_panel__WEBPACK_IMPORTED_MODULE_4__.clearDetails)();
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
	gitLogo.setAttribute("src", _Images_github_sign_png__WEBPACK_IMPORTED_MODULE_1__);
	headerNewTaskButton.innerHTML = `<span class="plus">+</span> Task`;

	//Assign CSS classes
	headerContainer.classList.add("header-container");
	logoArea.classList.add("logo-area");
	headerMenu.classList.add("header-menu");
	headerNewTaskButton.classList.add("header-button");

	//Event listener for new task button
	headerNewTaskButton.addEventListener("click", _create_task_form__WEBPACK_IMPORTED_MODULE_3__.showForm);
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
	const menuItems = [
		"All Tasks",
		"Past Due",
		"Due today",
		"Due this week",
		"Completed",
	];
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

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

	menuArea.addEventListener("click", () => {
		detailsArea.classList.add("hide-details-panel");
		tasksArea.classList.remove("no-pointer-events");
		setTimeout(() => {
			detailsArea.classList.add("no-display");
		}, 300);
	});
}




/***/ }),

/***/ "./src/create-task-data.js":
/*!*********************************!*\
  !*** ./src/create-task-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskData": () => (/* binding */ createTaskData),
/* harmony export */   "modifyTaskData": () => (/* binding */ modifyTaskData),
/* harmony export */   "removeTaskData": () => (/* binding */ removeTaskData),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");


//Data storage array;
let tasks = [];

// Function to create task ID
const idGenerator = () => {
	let idNumber = 100;
	const getIdNumber = () => idNumber;
	const increaseIdNumber = () => (idNumber += 5);
	return {
		getIdNumber,
		increaseIdNumber,
	};
};

//Instance of identity
const taskIdentityNumber = idGenerator();

//Factory function to create task item data
const createTaskData = () => {
	const name = document.querySelector("#task-title").value;
	const desc = document.querySelector("#task-desc").value;
	const date = document.querySelector("#task-due").value;
	const priority = document.querySelector(
		'input[name="task-priority"]:checked'
	).value;
	const project = document.querySelector("select").value;
	const taskId = taskIdentityNumber.getIdNumber();

	const taskObject = { name, desc, date, priority, project, taskId };

	taskIdentityNumber.increaseIdNumber();
	storeTaskData(taskObject);
	_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-added", taskObject);
};

//Function to store data
const storeTaskData = (obj) => {
	tasks.push(obj);
};

const removeTaskData = (key) => {
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]["taskId"] == key) {
			tasks.splice(i, 1);
			return;
		}
	}
};

const modifyTaskData = (index) => {
	tasks[index]["name"] = document.querySelector("#task-title").value;
	tasks[index]["desc"] = document.querySelector("#task-desc").value;
	tasks[index]["date"] = document.querySelector("#task-due").value;
	tasks[index]["priority"] = document.querySelector(
		'input[name="task-priority"]:checked'
	).value;
	tasks[index]["project"] = document.querySelector("select").value;

	const nameProp = tasks[index]["name"];
	const idProp = tasks[index]["taskId"];

	_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-modified", idProp, nameProp);
};




/***/ }),

/***/ "./src/create-task-form.js":
/*!*********************************!*\
  !*** ./src/create-task-form.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "modifyForm": () => (/* binding */ modifyForm),
/* harmony export */   "showForm": () => (/* binding */ showForm),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _create_task_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task-data */ "./src/create-task-data.js");


function taskForm() {
	const projectContainer = document.querySelector("#project-container");
	const projectContainerOverlay = document.createElement("div");
	const taskFormContainer = document.createElement("div");
	const taskFormContent = document.createElement("form");
	const formTitleContainer = document.createElement("div");
	const formTitle = document.createElement("p");
	const close = document.createElement("button");
	const taskTitleLabel = document.createElement("label");
	const taskTitleInput = document.createElement("input");
	const taskDescLabel = document.createElement("label");
	const taskDescInput = document.createElement("textArea");
	const taskDueLabel = document.createElement("label");
	const taskDueInput = document.createElement("input");
	const priorityFieldset = document.createElement("fieldset");
	const priorityLegend = document.createElement("legend");
	const taskPriorityLabelLow = document.createElement("label");
	const taskPriorityLabelMedium = document.createElement("label");
	const taskPriorityLabelHigh = document.createElement("label");
	const taskPriorityInputLow = document.createElement("input");
	const taskPriorityInputMedium = document.createElement("input");
	const taskPriorityInputHigh = document.createElement("input");
	const taskProjectLabel = document.createElement("label");
	const taskProjectSelect = document.createElement("select");
	const generalOption = document.createElement("option");
	const submitButton = document.createElement("button");
	const today = new Date().toISOString().split("T")[0];

	projectContainer.append(taskFormContainer, projectContainerOverlay);
	taskFormContainer.append(taskFormContent);
	taskFormContent.append(
		formTitleContainer,
		taskTitleLabel,
		taskDescLabel,
		taskDueLabel,
		priorityFieldset,
		taskProjectLabel,
		taskProjectSelect,
		submitButton
	);
	formTitleContainer.append(formTitle, close);

	formTitle.innerText = "New Task";
	close.innerText = "X";
	taskTitleLabel.innerText = "Task name";
	taskDescLabel.innerText = "Task Description";
	taskDueLabel.innerText = "Task Due By";
	taskPriorityLabelLow.innerText = "Low";
	taskPriorityLabelMedium.innerText = "Medium";
	taskPriorityLabelHigh.innerText = "High";
	priorityLegend.innerText = "Select Priority";
	taskProjectLabel.innerText = "Choose a project";
	generalOption.innerText = "General";
	submitButton.innerText = "Submit Task";

	taskTitleLabel.append(taskTitleInput);
	taskDescLabel.append(taskDescInput);
	taskDueLabel.append(taskDueInput);
	priorityFieldset.append(
		priorityLegend,
		taskPriorityLabelLow,
		taskPriorityLabelMedium,
		taskPriorityLabelHigh
	);
	taskPriorityLabelLow.append(taskPriorityInputLow);
	taskPriorityLabelMedium.append(taskPriorityInputMedium);
	taskPriorityLabelHigh.append(taskPriorityInputHigh);
	taskProjectSelect.append(generalOption);

	projectContainerOverlay.classList.add("container-overlay");
	taskFormContainer.classList.add("form-container");
	taskFormContent.classList.add("form-content");
	formTitleContainer.classList.add("form-title-container");
	close.classList.add("close-button");
	formTitle.classList.add("form-title");
	submitButton.classList.add("submit-button");

	taskTitleLabel.setAttribute("for", "task-title");
	taskDescLabel.setAttribute("for", "task-desc");
	taskDueLabel.setAttribute("for", "task-due");
	taskPriorityLabelLow.setAttribute("for", "task-priority-low");
	taskPriorityLabelMedium.setAttribute("for", "task-priority-medium");
	taskPriorityLabelHigh.setAttribute("for", "task-priority-high");
	taskProjectLabel.setAttribute("for", "task-project");

	taskTitleInput.setAttribute("id", "task-title");
	taskDescInput.setAttribute("id", "task-desc");
	taskDueInput.setAttribute("id", "task-due");
	taskPriorityInputLow.setAttribute("id", "task-priority-low");
	taskPriorityInputMedium.setAttribute("id", "task-priority-medium");
	taskPriorityInputHigh.setAttribute("id", "task-priority-high");
	taskProjectSelect.setAttribute("id", "task-project");

	taskTitleInput.setAttribute("name", "task-title");
	taskDescInput.setAttribute("name", "task-desc");
	taskDueInput.setAttribute("name", "task-due");
	taskPriorityInputLow.setAttribute("name", "task-priority");
	taskPriorityInputMedium.setAttribute("name", "task-priority");
	taskPriorityInputHigh.setAttribute("name", "task-priority");
	taskProjectSelect.setAttribute("name", "task-project");

	taskTitleInput.setAttribute("type", "text");
	taskDescInput.setAttribute("type", "textArea");
	taskDueInput.setAttribute("type", "date");
	taskPriorityInputLow.setAttribute("type", "radio");
	taskPriorityInputMedium.setAttribute("type", "radio");
	taskPriorityInputHigh.setAttribute("type", "radio");
	submitButton.setAttribute("type", "submit");
	taskPriorityInputLow.setAttribute("value", "low");
	taskPriorityInputMedium.setAttribute("value", "medium");
	taskPriorityInputHigh.setAttribute("value", "high");
	generalOption.setAttribute("value", "General");

	taskDueInput.setAttribute("min", today);

	taskTitleInput.required = true;
	taskDueInput.required = true;
	taskProjectSelect.required = true;
	taskPriorityInputLow.required = true;

	close.addEventListener("click", closeForm);
	taskFormContainer.addEventListener("click", closeForm);
	taskFormContent.addEventListener("submit", submitForm);
}

function closeForm(e) {
	const projectContainerOverlay = document.querySelector(".container-overlay");
	const taskFormContainer = document.querySelector(".form-container");
	const taskFormContent = document.querySelector(".form-content");
	const closeButton = document.querySelector(".close-button");

	if (e.target == taskFormContainer || e.target == closeButton) {
		projectContainerOverlay.style.transform = "scale(0)";
		taskFormContainer.style.transform = "scale(0)";
		taskFormContent.style.transform = "scale(0)";

		setTimeout(() => {
			projectContainerOverlay.remove();
			taskFormContainer.remove();
			taskFormContent.remove();
		}, 300);
	}
}

function resetForm() {
	const projectContainerOverlay = document.querySelector(".container-overlay");
	const taskFormContainer = document.querySelector(".form-container");
	const taskFormContent = document.querySelector(".form-content");

	projectContainerOverlay.style.transform = "scale(0)";
	taskFormContainer.style.transform = "scale(0)";
	taskFormContent.style.transform = "scale(0)";

	taskFormContent.reset();

	setTimeout(() => {
		projectContainerOverlay.remove();
		taskFormContainer.remove();
		taskFormContent.remove();
	}, 300);
}

function showForm() {
	taskForm();
	const projectContainerOverlay = document.querySelector(".container-overlay");
	const taskFormContainer = document.querySelector(".form-container");
	const taskFormContent = document.querySelector(".form-content");
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");
	const submitButton = document.querySelector(".submit-button");

	detailsArea.classList.add("hide-details-panel");
	tasksArea.classList.remove("no-pointer-events");

	projectContainerOverlay.style.transform = "scale(0)";
	taskFormContainer.style.transform = "scale(0)";
	taskFormContent.style.transform = "scale(0)";

	setTimeout(() => {
		projectContainerOverlay.style.transform = "scale(1)";
		taskFormContainer.style.transform = "scale(1)";
		taskFormContent.style.transform = "scale(1)";
	}, 200);

	submitButton.setAttribute("data-action", "create");
}

function modifyForm({ name, desc, date, priority, project }, index) {
	showForm();
	const _name = document.querySelector("#task-title");
	const _desc = document.querySelector("#task-desc");
	const _date = document.querySelector("#task-due");
	const _priority = document.querySelector(`#task-priority-${priority}`);
	const _project = document.querySelector("select");
	const submitButton = document.querySelector(".submit-button");

	_name.value = name;
	_desc.value = desc;
	_date.value = date;
	_priority.checked = true;
	_project.value = project;
	submitButton.innerText = "Modify Task";

	submitButton.setAttribute("data-action", "modify");
	submitButton.setAttribute("data-key", index);
}

function submitForm(e) {
	e.preventDefault();

	const formAction = e.target
		.querySelector(".submit-button")
		.getAttribute("data-action");

	const taskIndex = e.target
		.querySelector(".submit-button")
		.getAttribute("data-key");

	if (formAction == "create") {
		(0,_create_task_data__WEBPACK_IMPORTED_MODULE_0__.createTaskData)();
		resetForm();
	} else if (formAction == "modify") {
		(0,_create_task_data__WEBPACK_IMPORTED_MODULE_0__.modifyTaskData)(taskIndex);
		resetForm();
		console.log("aye modify blud");
	}
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
/* harmony export */   "renderTaskHeading": () => (/* binding */ renderTaskHeading)
/* harmony export */ });
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");
/* harmony import */ var _create_task_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task-data */ "./src/create-task-data.js");
/* harmony import */ var _create_details_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-details-panel */ "./src/create-details-panel.js");
/* harmony import */ var _create_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task-form */ "./src/create-task-form.js");





function renderTaskHeading(data = "All Tasks") {
	const tasksArea = document.querySelector(".tasks-area");
	const heading = document.createElement("h2");

	tasksArea.append(heading);
	heading.innerText = data;
}

function renderTask(obj) {
	const tasksArea = document.querySelector(".tasks-area");
	const taskContainer = document.createElement("div");
	const checkContainer = document.createElement("div");
	const textContainer = document.createElement("div");
	const taskCheckLabel = document.createElement("label");
	const taskCheckInput = document.createElement("input");
	const taskCheckSpan = document.createElement("span");
	const taskName = document.createElement("p");
	const taskButtonsArea = document.createElement("div");
	const taskEdit = document.createElement("button");
	const taskDelete = document.createElement("button");

	tasksArea.append(taskContainer);
	taskContainer.append(checkContainer, textContainer);
	checkContainer.append(taskCheckLabel);
	textContainer.append(taskName, taskButtonsArea);
	taskCheckLabel.append(taskCheckInput, taskCheckSpan);
	taskButtonsArea.append(taskEdit, taskDelete);

	taskContainer.classList.add("task-container");
	checkContainer.classList.add("check-container");
	textContainer.classList.add("text-container");
	textContainer.setAttribute("data-key", obj["taskId"]);
	taskCheckSpan.classList.add("input-span");
	taskCheckInput.setAttribute("type", "checkbox");
	taskButtonsArea.classList.add("task-button-area");
	taskEdit.classList.add("modify-button");
	taskDelete.classList.add("delete-button");

	taskName.innerText = obj["name"];
	taskEdit.innerText = "Modify";
	taskDelete.innerText = "Delete";

	textContainer.addEventListener("click", textContainerEventController);
}

function renderModifiedTask(idProp, nameProp) {
	const textContainer = document.querySelector(`[data-key="${idProp}"]`);
	const taskName = textContainer.querySelector("p");

	taskName.innerText = nameProp;
}

const textContainerEventController = (e) => {
	if (e.target.classList.value == "modify-button") {
		console.log("aye modify bro");
		modifyTask(e);
		return;
	} else if (e.target.classList.value == "delete-button") {
		console.log("yah delete bro");
		deleteTask(e);
		console.log(_create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks);
		return;
	} else {
		selectTask(e);
		(0,_create_details_panel__WEBPACK_IMPORTED_MODULE_2__.showDetails)();
	}
};

const selectTask = (e) => {
	const objKey = e.target.getAttribute("data-key");
	for (let i = 0; i < _create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks.length; i++) {
		if (_create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks[i]["taskId"] == objKey) {
			(0,_create_details_panel__WEBPACK_IMPORTED_MODULE_2__.renderDetails)(_create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks[i]);
			return;
		}
	}
};

const modifyTask = (e) => {
	const textContainer = e.composedPath()[2];
	const objKey = textContainer.getAttribute("data-key");
	for (let i = 0; i < _create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks.length; i++) {
		if (_create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks[i]["taskId"] == objKey) {
			(0,_create_task_form__WEBPACK_IMPORTED_MODULE_3__.modifyForm)(_create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks[i], i);
			return;
		}
	}
};

const deleteTask = (e) => {
	const taskContainer = e.composedPath()[3];
	const textContainer = e.composedPath()[2];
	const objKey = textContainer.getAttribute("data-key");
	taskContainer.classList.add("animate-out");
	setTimeout(() => {
		taskContainer.remove();
	}, 1000);

	_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-removed", objKey);
};

_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", renderTask);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-removed", _create_task_data__WEBPACK_IMPORTED_MODULE_1__.removeTaskData);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-modified", renderModifiedTask);




/***/ }),

/***/ "./src/pub-sub.js":
/*!************************!*\
  !*** ./src/pub-sub.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PubSub {
	constructor() {
		this.tracker = {
			//key: activityName, value: [funcs]
		};
	}
	subscribe(activityName, func) {
		if (this.tracker[activityName]) {
			this.tracker[activityName].push(func);
		} else {
			this.tracker[activityName] = [func];
		}
	}

	unsubscribe(activityName, func) {
		const funcArray = this.tracker[activityName];
		const funcIndex = funcArray.indexOf(func);
		if (funcIndex > -1) {
			funcArray.splice(funcIndex, 1);
		}
	}

	publish(activityName, ...args) {
		if (Array.isArray(this.tracker[activityName])) {
			this.tracker[activityName].forEach((item) => {
				item.apply(null, args);
			});
		}
	}
}

const pubSub = new PubSub();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubSub);


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
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_3__.renderTaskHeading)();
	// renderTask({ name: "Lorem Ipsum Dolor", taskId: 200 });
	// renderDetails({
	// 	name: "Lorem Ipsum Dolor",
	// 	desc: "sdbs jag jhagd ajd gjhadg dahdg",
	// 	date: "27/04/2023",
	// 	priority: "high",
	// 	project: "General",
	// 	taskId: 200,
	// });
};

window.addEventListener("load", createInterface);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVks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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1SjZCOztBQUUvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0EsQ0FBQyx3REFBYztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMsd0RBQWM7QUFDZjs7QUFFaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUc7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUEsc0JBQXNCLHFDQUFxQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLGlFQUFjO0FBQ2hCO0FBQ0EsR0FBRztBQUNILEVBQUUsaUVBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRXFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RPdEI7QUFDNEI7QUFDUztBQUNwQjs7QUFFaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxPQUFPO0FBQ25FOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxvREFBSztBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsa0VBQVc7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSwyREFBWSxFQUFFO0FBQ25DLE1BQU0sb0RBQUs7QUFDWCxHQUFHLG9FQUFhLENBQUMsb0RBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksMkRBQVksRUFBRTtBQUNuQyxNQUFNLG9EQUFLO0FBQ1gsR0FBRyw2REFBVSxDQUFDLG9EQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDLHdEQUFjO0FBQ2Y7O0FBRUEsMERBQWdCO0FBQ2hCLDBEQUFnQixpQkFBaUIsNkRBQWM7QUFDL0MsMERBQWdCOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDOUd6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFNRTtBQUMrQjtBQUNjOztBQUVwRTtBQUNBLENBQUMsMERBQVk7QUFDYixDQUFDLDZEQUFlO0FBQ2hCLENBQUMsc0VBQXdCO0FBQ3pCLENBQUMsNERBQWM7QUFDZixDQUFDLHFFQUFpQjtBQUNsQixpQkFBaUIsd0NBQXdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS1kZXRhaWxzLXBhbmVsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLWhvbWUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtdGFzay1kYXRhLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLXRhc2stZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS10YXNrLXBhbmVsLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvcHViLXN1Yi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vRm9udHMvVmFyZWxhUm91bmQtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdC0tZGl2aWRlci1jb2xvcjogI2YxZjFmMTtcXG5cXHQtLWxvZ28tcGluazogI2ZmMWI2YjtcXG5cXHQtLWxvZ28tYmx1ZTogIzQ1Y2FmZjtcXG5cXHQtLWxvZ28tbWlkLWJsdWU6ICMwMDYxZmY7XFxuXFx0LS1sb2dvLWdyZWVuOiAjNzNmZjAwO1xcblxcdC0tZGFyay1tb2RlLWJnOiAjMjMyMzIzO1xcblxcdC0td2hpdGU6ICNmZmY7XFxuXFx0LS1vZmYtd2hpdGU6ICNmNWY1ZjU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG9nby1hcmVhLFxcbi5oZWFkZXItbWVudSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5sb2dvLWFyZWEgaW1nIHtcXG5cXHRoZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi5oZWFkZXItbWVudSBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTsgKi9cXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC4zNXJlbSAxLjVyZW0gMC4zNXJlbSAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogREFTSEJPQVJEIEFSRUEqL1xcblxcbi5kYXNoLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjJweCk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVudS1hcmVhIHtcXG5cXHR3aWR0aDogMzUwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA2O1xcbn1cXG5cXG4udGFza3MtYXJlYSB7XFxuXFx0LyogbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gNzIwcHgpOyAqL1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjhweCk7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAwLjVyZW07ICovXFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdG1pbi13aWR0aDogNDAwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmJhY2stYXJyb3cge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR0b3A6IDFyZW07XFxuXFx0d2lkdGg6IDEuMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYzM5Mzk7XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cmVtO1xcblxcdHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uaGlkZS1zaWRlLW1lbnUge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xcbn1cXG5cXG4uaGlkZS1kZXRhaWxzLXBhbmVsIHtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vLXBvaW50ZXItZXZlbnRzIHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0cGFkZGluZzogMXJlbSAxLjI1cmVtIDFyZW0gMS4yNXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lcjpudGgtY2hpbGQoMSkge1xcblxcdG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHN2ZyB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTJweDtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMzAsIDI0OSk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDE1NiwgMjAwLCAyMzApO1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRhc2tzLWFyZWEgaDIge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdG1hcmdpbjogMXJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRtYXJnaW46IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDA7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGQ1ZjA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdGFuaW1hdGlvbjogc2xpZGUtaW4gMS44cyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmFuaW1hdGUtb3V0IHtcXG5cXHRhbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyYTg1ZGY7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAwLjI7XFxuXFx0fVxcblxcblxcdDkwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMi4zNXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAyLjM1cmVtKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4udGFzay1idXR0b24tYXJlYSB7XFxuXFx0bWFyZ2luOiBhdXRvIDFyZW0gYXV0byBhdXRvO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgcCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDJyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuXFx0bWF4LXdpZHRoOiA2MCU7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdG1hcmdpbjogYXV0byAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjNyZW0gMC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdGJvdHRvbTogNHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzcGFuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG5cXHRoZWlnaHQ6IDEuNzVyZW07XFxuXFx0d2lkdGg6IDEuNzVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2YWJlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46OmFmdGVyIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHNwYW46OmFmdGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogLTE7XFxuXFx0bGVmdDogMC43NXJlbTtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHR3aWR0aDogMC4zNXJlbTtcXG5cXHRoZWlnaHQ6IDEuMXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDRweCA0cHggMDtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5kZXRhaWxzLWluZm8tY29udGFpbmVyIHtcXG5cXHRtYXJnaW4tdG9wOiA0cmVtO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSxcXG4udGFzay1kZXNjcmlwdGlvbixcXG4uZHVlLWRhdGUge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMCAwLjVyZW0gMDtcXG5cXHRmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbi5wcm9qZWN0LFxcbi5wcmlvcml0eSB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Zm9udC1zaXplOiAwLjg1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwIDJyZW0gMS41cmVtO1xcblxcdHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxvZ28tYmx1ZSk7XFxufVxcblxcbi50YXNrLWRlc2NyaXB0aW9uIHtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gMDtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuXFx0cGFkZGluZzogMS41cmVtIDA7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLmR1ZS10ZXh0IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDAuODVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0cGFkZGluZzogMC4ycmVtIDAuOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi8qRk9STSBBUkVBKi9cXG5cXG4uY29udGFpbmVyLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogNjtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRvcGFjaXR5OiAwLjc7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogMTE7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBhZGRpbmc6IDRyZW0gMDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMzU2MiwgIzI2NmFiZSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDJyZW0gMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcblxcdHdpZHRoOiBtYXgoMjV2dywgMzAwcHgpO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS10aXRsZS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NWNhZmY7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuXFx0d2lkdGg6IDEuN2VtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjMDkyZDU5O1xcblxcdHBhZGRpbmc6IDAuMnJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG59XFxuXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdG1hcmdpbjogMC41cmVtIDAgMC4zcmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBsZWdlbmQge1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRhY2NlbnQtY29sb3I6ICM0NWNhZmY7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IG9wdGlvbiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDIuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjNDVjYWZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiAudGFza3Mtb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiA0O1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdG9wYWNpdHk6IDAuNztcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRtYXJnaW46IDA7XFxufSAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQudGFzay1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM5ZGM3ZjU7XFxuXFx0fVxcblxcblxcdC5tb2RpZnktYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwZjU4Y2Q7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0fVxcblxcblxcdC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNiYzM5Mzk7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2YWJlO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC41NXJlbSAzcmVtIDAuNTVyZW0gMi41cmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nOmhvdmVyIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNSk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWxvZ28tbWlkLWJsdWUpLCB2YXIoLS1sb2dvLWJsdWUpKTsgKi9cXG5cXHRcXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIC5tZW51LWl0ZW0ge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlcjpob3ZlciB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdH1cXG5cXG5cXHQuYmFjay1hcnJvdzpob3ZlciB7XFxuXFx0XFx0d2lkdGg6IDIuNXJlbTtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0XFx0YmFja2dyb3VuZDogI2M5MmExMjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6ICNlZGVhMmI7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246YWN0aXZlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjN2MxOTBhO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC50YXNrcy1hcmVhIGgyIHtcXG5cXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRcXHRtYXJnaW46IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtYXJlYSB7XFxuXFx0XFx0d2lkdGg6IDI3NXB4O1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG5cXHQubG9nby1hcmVhIHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQubG9nby1hcmVhIGltZyB7XFxuXFx0XFx0aGVpZ2h0OiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtYXJlYSB7XFxuXFx0XFx0bWF4LXdpZHRoOiAyNTVweDtcXG5cXHRcXHRtaW4td2lkdGg6IDUwcHg7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRcXHRsZWZ0OiAycmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuY29udGFpbmVyLW92ZXJsYXkge1xcblxcdFxcdGhlaWdodDogMTE1ZHZoO1xcblxcdH1cXG5cXG5cXHQuY2hlY2stY29udGFpbmVyIHtcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBzcGFuIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRcXHRtYXJnaW46IGF1dG8gMXJlbSBhdXRvIDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDAuNTVyZW07XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDRDQUF5QztBQUMxQzs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsNkNBQTZDO0NBQzdDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUVBQW1FO0NBQ25FLG9EQUFvRDtDQUNwRCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLG1CQUFtQjtD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QUVBO0VBQ0MsMkJBQTJCO0NBQzVCOztDQUVBO0VBQ0Msa0JBQWtCO0VBQ2xCLHNDQUFzQztDQUN2Qzs7Q0FFQTtFQUNDLGFBQWE7RUFDYiw2QkFBNkI7Q0FDOUI7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0NBQ2I7O0NBRUE7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxtQkFBbUI7Q0FDcEI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsaUJBQWlCO0VBQ2pCLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixrQkFBa0I7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsaUJBQWlCO0NBQ2xCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxtQkFBbUI7Q0FDcEI7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsV0FBVztDQUNaOztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLDZCQUE2QjtDQUM5Qjs7Q0FFQTtFQUNDLGlCQUFpQjtFQUNqQix1QkFBdUI7Q0FDeEI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdC0tZGl2aWRlci1jb2xvcjogI2YxZjFmMTtcXG5cXHQtLWxvZ28tcGluazogI2ZmMWI2YjtcXG5cXHQtLWxvZ28tYmx1ZTogIzQ1Y2FmZjtcXG5cXHQtLWxvZ28tbWlkLWJsdWU6ICMwMDYxZmY7XFxuXFx0LS1sb2dvLWdyZWVuOiAjNzNmZjAwO1xcblxcdC0tZGFyay1tb2RlLWJnOiAjMjMyMzIzO1xcblxcdC0td2hpdGU6ICNmZmY7XFxuXFx0LS1vZmYtd2hpdGU6ICNmNWY1ZjU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0c3JjOiB1cmwoLi9Gb250cy9WYXJlbGFSb3VuZC1SZWd1bGFyLnR0Zik7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb2dvLWFyZWEsXFxuLmhlYWRlci1tZW51IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtIDEuMjVyZW07XFxufVxcblxcbi5sb2dvLWFyZWEgcCB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmxvZ28tYXJlYSBpbWcge1xcblxcdGhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLmhlYWRlci1tZW51IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItbWVudSBpbWcge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjM1cmVtIDEuNXJlbSAwLjM1cmVtIDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbHVzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBEQVNIQk9BUkQgQVJFQSovXFxuXFxuLmRhc2gtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2MnB4KTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51LWFyZWEge1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZDogI2ZmZmZmZjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDY7XFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHQvKiBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3MjBweCk7ICovXFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2OHB4KTtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgKi9cXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRldGFpbHMtYXJlYSB7XFxuXFx0bWluLXdpZHRoOiA0MDBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG5cXG4uYmFjay1hcnJvdyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHRvcDogMXJlbTtcXG5cXHR3aWR0aDogMS4ycmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JjMzkzOTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVyZW07XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbi5oaWRlLXNpZGUtbWVudSB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxufVxcblxcbi5oaWRlLWRldGFpbHMtcGFuZWwge1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubm8tcG9pbnRlci1ldmVudHMge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuMjVyZW0gMXJlbSAxLjI1cmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOm50aC1jaGlsZCgxKSB7XFxuXFx0bWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgc3ZnIHtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHJnYigyMDIsIDIzMCwgMjQ5KTtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTU2LCAyMDAsIDIzMCk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFza3MtYXJlYSBoMiB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0bWFyZ2luOiAxcmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdG1hcmdpbjogMC43NXJlbSAxcmVtIDAuNzVyZW0gMDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0ZDVmMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1pbiAxLjhzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uYW5pbWF0ZS1vdXQge1xcblxcdGFuaW1hdGlvbjogc2xpZGUtb3V0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzJhODVkZjtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdG9wYWNpdHk6IDAuMjtcXG5cXHR9XFxuXFxuXFx0OTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbi5jaGVjay1jb250YWluZXIge1xcblxcdHdpZHRoOiAyLjM1cmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmZmZmY7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIuMzVyZW0pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRtYXJnaW46IGF1dG8gMXJlbSBhdXRvIGF1dG87XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRtYXJnaW4tbGVmdDogMnJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0bWFyZ2luOiBhdXRvIDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGE7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBsYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMS43NXJlbTtcXG5cXHR3aWR0aDogMS43NXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3Bhbjo6YWZ0ZXIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3Bhbjo6YWZ0ZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAtMTtcXG5cXHRsZWZ0OiAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHdpZHRoOiAwLjM1cmVtO1xcblxcdGhlaWdodDogMS4xcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmRldGFpbHMtaW5mby1jb250YWluZXIge1xcblxcdG1hcmdpbi10b3A6IDRyZW07XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlLFxcbi50YXNrLWRlc2NyaXB0aW9uLFxcbi5kdWUtZGF0ZSB7XFxuXFx0d2lkdGg6IDkwJTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAyLjVyZW07XFxuXFx0cGFkZGluZzogMC43NXJlbSAwIDAuNXJlbSAwO1xcblxcdGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuLnByb2plY3QsXFxuLnByaW9yaXR5IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDAuODVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdG1hcmdpbjogMC41cmVtIDAgMnJlbSAxLjVyZW07XFxuXFx0cGFkZGluZzogMC4ycmVtIDAuOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9nby1ibHVlKTtcXG59XFxuXFxuLnRhc2stZGVzY3JpcHRpb24ge1xcblxcdHBhZGRpbmc6IDEuNXJlbSAwO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS13aGl0ZSk7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXdoaXRlKTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG5cXHRwYWRkaW5nOiAxLjVyZW0gMDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0td2hpdGUpO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG5cXG4uZHVlLXRleHQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMC44NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRwYWRkaW5nOiAwLjJyZW0gMC44cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLypGT1JNIEFSRUEqL1xcblxcbi5jb250YWluZXItb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiA2O1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdG9wYWNpdHk6IDAuNztcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiAxMTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0cGFkZGluZzogNHJlbSAwO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGQzNTYyLCAjMjY2YWJlKTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMnJlbSAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuXFx0d2lkdGg6IG1heCgyNXZ3LCAzMDBweCk7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLXRpdGxlLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1Y2FmZjtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYTtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG5cXHR3aWR0aDogMS43ZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQ6ICMwOTJkNTk7XFxuXFx0cGFkZGluZzogMC4ycmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHRleHRhcmVhIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW0gMCAwLjNyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHJlc2l6ZTogbm9uZTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGZpZWxkc2V0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGFjY2VudC1jb2xvcjogIzQ1Y2FmZjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgb3B0aW9uIHtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGhlaWdodDogMi41cmVtO1xcblxcdGJhY2tncm91bmQ6ICM0NWNhZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi8qIC50YXNrcy1vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDQ7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC43O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG1hcmdpbjogMDtcXG59ICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC50YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzlkYzdmNTtcXG5cXHR9XFxuXFxuXFx0Lm1vZGlmeS1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzBmNThjZDtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZS1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2JjMzkzOTtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW46aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjU1cmVtIDNyZW0gMC41NXJlbSAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWc6aG92ZXIge1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpOyAqL1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIgLm1lbnUtaXRlbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcblxcdC5iYWNrLWFycm93OmhvdmVyIHtcXG5cXHRcXHR3aWR0aDogMi41cmVtO1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2VkZWEyYjtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICM3YzE5MGE7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0LnRhc2tzLWFyZWEgaDIge1xcblxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdFxcdG1hcmdpbjogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQubWVudS1hcmVhIHtcXG5cXHRcXHR3aWR0aDogMjc1cHg7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcblxcdC5sb2dvLWFyZWEgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0fVxcblxcblxcdC5sb2dvLWFyZWEgaW1nIHtcXG5cXHRcXHRoZWlnaHQ6IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1idXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1hcmVhIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDI1NXB4O1xcblxcdFxcdG1pbi13aWR0aDogNTBweDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHAge1xcblxcdFxcdGxlZnQ6IDJyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQ6ICNjOTJhMTI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5jb250YWluZXItb3ZlcmxheSB7XFxuXFx0XFx0aGVpZ2h0OiAxMTVkdmg7XFxuXFx0fVxcblxcblxcdC5jaGVjay1jb250YWluZXIge1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdFxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stYnV0dG9uLWFyZWEge1xcblxcdFxcdG1hcmdpbjogYXV0byAxcmVtIGF1dG8gMS41cmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDAuOXJlbTtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMC41NXJlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYmFjayBmcm9tIFwiLi9JbWFnZXMvYXJyb3cucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckRldGFpbHMob2JqKSB7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IGRldGFpbHNJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgYmFja0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29uc3QgZGV0YWlsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRkZXRhaWxzQXJlYS5hcHBlbmQoZGV0YWlsc0luZm9Db250YWluZXIpO1xuXHRkZXRhaWxzSW5mb0NvbnRhaW5lci5hcHBlbmQoXG5cdFx0YmFja0Fycm93LFxuXHRcdGRldGFpbHNUaXRsZSxcblx0XHRwcm9qZWN0LFxuXHRcdHByaW9yaXR5LFxuXHRcdGRlc2NyaXB0aW9uLFxuXHRcdGR1ZURhdGVcblx0KTtcblxuXHRkZXRhaWxzSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1pbmZvLWNvbnRhaW5lclwiKTtcblx0YmFja0Fycm93LmNsYXNzTGlzdC5hZGQoXCJiYWNrLWFycm93XCIpO1xuXHRkZXRhaWxzVGl0bGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtdGl0bGVcIik7XG5cdHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cdHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblx0ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZGVzY3JpcHRpb25cIik7XG5cdGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuXG5cdGJhY2tBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYmFjayk7XG5cdGRldGFpbHNUaXRsZS5pbm5lclRleHQgPSBvYmpbXCJuYW1lXCJdO1xuXHRwcm9qZWN0LmlubmVyVGV4dCA9IG9ialtcInByb2plY3RcIl07XG5cdGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IG9ialtcImRlc2NcIl07XG5cdGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiZHVlLXRleHRcIj5EdWUgZGF0ZTwvc3Bhbj4gPGJyPjxicj4gJHtvYmpbXCJkYXRlXCJdfWA7XG5cdHByaW9yaXR5LmlubmVyVGV4dCA9IG9ialtcInByaW9yaXR5XCJdO1xuXG5cdGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJEZXRhaWxzKTtcbn1cblxuY29uc3QgY2xlYXJEZXRhaWxzID0gKCkgPT4ge1xuXHRjb25zdCBkZXRhaWxzSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIuZGV0YWlscy1pbmZvLWNvbnRhaW5lclwiXG5cdCk7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRpZiAoZGV0YWlsc0luZm9Db250YWluZXIpIHtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHRcdHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRkZXRhaWxzSW5mb0NvbnRhaW5lci5yZW1vdmUoKTtcblx0XHR9LCAyNTApO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RGV0YWlscyA9ICgpID0+IHtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHRcdHRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cdH0sIDEwKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckRldGFpbHMsIGNsZWFyRGV0YWlscywgc2hvd0RldGFpbHMgfTtcbiIsImltcG9ydCBsb2dvQmx1ZSBmcm9tIFwiLi9JbWFnZXMvVGFza2llLWxvZ28tZGVlcC1ibHVlLnBuZ1wiO1xuaW1wb3J0IGdpdGh1YlNpZ24gZnJvbSBcIi4vSW1hZ2VzL2dpdGh1Yi1zaWduLnBuZ1wiO1xuaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSBcIi4vSW1hZ2VzL2J1cmdlci1tZW51LnN2Z1wiO1xuaW1wb3J0IHsgc2hvd0Zvcm0gfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1mb3JtXCI7XG5pbXBvcnQgeyBjbGVhckRldGFpbHMgfSBmcm9tIFwiLi9jcmVhdGUtZGV0YWlscy1wYW5lbFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIYW1idXJnZXIoKSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlcik7XG5cdGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYnVyZ2VyTWVudSk7XG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyXCIpO1xuXG5cdGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdFx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRcdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cblx0XHRjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QXJlYSk7XG5cdFx0Y29uc3QgY2hlY2tEaXNwbGF5U3RhdGUgPSBjb21wU3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cblx0XHRpZiAoY2hlY2tEaXNwbGF5U3RhdGUpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdH0sIDIwMCk7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdH0sIDEwKTtcblx0XHR9XG5cblx0XHRjbGVhckRldGFpbHMoKTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdH0sIDEwKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG5cdC8vR2VuZXJhbCBlbGVtZW50cyByZXF1aXJlZCBmb3IgaGVhZGVyXG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBsb2dvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGNvbnN0IGdpdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBoZWFkZXJOZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXHQvL0J1aWxkIGhlYWRlciBzdHJ1Y3R1cmVcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKTtcblx0aGVhZGVyQ29udGFpbmVyLmFwcGVuZChsb2dvQXJlYSwgaGVhZGVyTWVudSk7XG5cdGxvZ29BcmVhLmFwcGVuZChsb2dvSW1nLCBsb2dvVGV4dCk7XG5cdGhlYWRlck1lbnUuYXBwZW5kKGdpdExpbmssIGhlYWRlck5ld1Rhc2tCdXR0b24pO1xuXHRnaXRMaW5rLmFwcGVuZChnaXRMb2dvKTtcblxuXHQvL0ZpbGwtb3V0IGVsZW1lbnRzXG5cdGxvZ29JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxvZ29CbHVlKTtcblx0bG9nb1RleHQuaW5uZXJUZXh0ID0gXCJKdXN0LURvLUl0XCI7XG5cdGdpdExpbmsuc2V0QXR0cmlidXRlKFxuXHRcdFwiaHJlZlwiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL0t3YWR3by1GaXJlbXBvbmctQm9ha3llL1Byb2plY3QtVG8tRG9cIlxuXHQpO1xuXHRnaXRMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblx0Z2l0TG9nby5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZ2l0aHViU2lnbik7XG5cdGhlYWRlck5ld1Rhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicGx1c1wiPis8L3NwYW4+IFRhc2tgO1xuXG5cdC8vQXNzaWduIENTUyBjbGFzc2VzXG5cdGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcblx0bG9nb0FyZWEuY2xhc3NMaXN0LmFkZChcImxvZ28tYXJlYVwiKTtcblx0aGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLW1lbnVcIik7XG5cdGhlYWRlck5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1idXR0b25cIik7XG5cblx0Ly9FdmVudCBsaXN0ZW5lciBmb3IgbmV3IHRhc2sgYnV0dG9uXG5cdGhlYWRlck5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlKCkge1xuXHQvL0dlbmVyYWwgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGRhc2hib2FyZFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgZGFzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuXHQvL0J1aWxkIGRhc2hib2FyZCBzdHJ1Y3R1cmVcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoZGFzaENvbnRhaW5lcik7XG5cdGRhc2hDb250YWluZXIuYXBwZW5kKG1lbnVBcmVhLCB0YXNrc0FyZWEsIGRldGFpbHNBcmVhKTtcblxuXHQvL0Fzc2lnbiBDU1MgY2xhc3Nlc1xuXHRkYXNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXNoLWNvbnRhaW5lclwiKTtcblx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJlYVwiKTtcblx0dGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1hcmVhXCIpO1xuXHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1hcmVhXCIsIFwibm8tZGlzcGxheVwiLCBcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZU1lbnUoKSB7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdGNvbnN0IG1lbnVJdGVtcyA9IFtcblx0XHRcIkFsbCBUYXNrc1wiLFxuXHRcdFwiUGFzdCBEdWVcIixcblx0XHRcIkR1ZSB0b2RheVwiLFxuXHRcdFwiRHVlIHRoaXMgd2Vla1wiLFxuXHRcdFwiQ29tcGxldGVkXCIsXG5cdF07XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGxldCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bGV0IG1lbnVJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0XHRcInN2Z1wiXG5cdFx0KTtcblx0XHRsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRcdG1lbnVJdGVtLmlubmVyVGV4dCA9IGl0ZW07XG5cdFx0bWVudUl0ZW1JbWFnZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpO1xuXHRcdG1lbnVJdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblx0XHRtZW51SXRlbUltYWdlLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMCAxN0w1IDEyTDYuNDEgMTAuNTlMMTAgMTQuMTdMMTcuNTkgNi41OEwxOSA4TDEwIDE3WlwiIC8+YDtcblxuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tY29udGFpbmVyXCIpO1xuXHRcdG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cblx0XHRtZW51QXJlYS5hcHBlbmQobWVudUl0ZW1Db250YWluZXIpO1xuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZChtZW51SXRlbUltYWdlLCBtZW51SXRlbSk7XG5cdH0pO1xuXG5cdG1lbnVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0XHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSwgMzAwKTtcblx0fSk7XG59XG5cbmV4cG9ydCB7XG5cdGNyZWF0ZUhlYWRlcixcblx0Y3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlLFxuXHRjcmVhdGVIYW1idXJnZXIsXG5cdGNyZWF0ZVNpZGVNZW51LFxufTtcbiIsImltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViLXN1YlwiO1xuXG4vL0RhdGEgc3RvcmFnZSBhcnJheTtcbmxldCB0YXNrcyA9IFtdO1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGFzayBJRFxuY29uc3QgaWRHZW5lcmF0b3IgPSAoKSA9PiB7XG5cdGxldCBpZE51bWJlciA9IDEwMDtcblx0Y29uc3QgZ2V0SWROdW1iZXIgPSAoKSA9PiBpZE51bWJlcjtcblx0Y29uc3QgaW5jcmVhc2VJZE51bWJlciA9ICgpID0+IChpZE51bWJlciArPSA1KTtcblx0cmV0dXJuIHtcblx0XHRnZXRJZE51bWJlcixcblx0XHRpbmNyZWFzZUlkTnVtYmVyLFxuXHR9O1xufTtcblxuLy9JbnN0YW5jZSBvZiBpZGVudGl0eVxuY29uc3QgdGFza0lkZW50aXR5TnVtYmVyID0gaWRHZW5lcmF0b3IoKTtcblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0YXNrIGl0ZW0gZGF0YVxuY29uc3QgY3JlYXRlVGFza0RhdGEgPSAoKSA9PiB7XG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XG5cdGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWVcIikudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnaW5wdXRbbmFtZT1cInRhc2stcHJpb3JpdHlcIl06Y2hlY2tlZCdcblx0KS52YWx1ZTtcblx0Y29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG5cdGNvbnN0IHRhc2tJZCA9IHRhc2tJZGVudGl0eU51bWJlci5nZXRJZE51bWJlcigpO1xuXG5cdGNvbnN0IHRhc2tPYmplY3QgPSB7IG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrSWQgfTtcblxuXHR0YXNrSWRlbnRpdHlOdW1iZXIuaW5jcmVhc2VJZE51bWJlcigpO1xuXHRzdG9yZVRhc2tEYXRhKHRhc2tPYmplY3QpO1xuXHRwdWJTdWIucHVibGlzaChcInRhc2stYWRkZWRcIiwgdGFza09iamVjdCk7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIHN0b3JlIGRhdGFcbmNvbnN0IHN0b3JlVGFza0RhdGEgPSAob2JqKSA9PiB7XG5cdHRhc2tzLnB1c2gob2JqKTtcbn07XG5cbmNvbnN0IHJlbW92ZVRhc2tEYXRhID0gKGtleSkgPT4ge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRhc2tzW2ldW1widGFza0lkXCJdID09IGtleSkge1xuXHRcdFx0dGFza3Muc3BsaWNlKGksIDEpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbW9kaWZ5VGFza0RhdGEgPSAoaW5kZXgpID0+IHtcblx0dGFza3NbaW5kZXhdW1wibmFtZVwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZTtcblx0dGFza3NbaW5kZXhdW1wiZGVzY1wiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xuXHR0YXNrc1tpbmRleF1bXCJkYXRlXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWR1ZVwiKS52YWx1ZTtcblx0dGFza3NbaW5kZXhdW1wicHJpb3JpdHlcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdpbnB1dFtuYW1lPVwidGFzay1wcmlvcml0eVwiXTpjaGVja2VkJ1xuXHQpLnZhbHVlO1xuXHR0YXNrc1tpbmRleF1bXCJwcm9qZWN0XCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS52YWx1ZTtcblxuXHRjb25zdCBuYW1lUHJvcCA9IHRhc2tzW2luZGV4XVtcIm5hbWVcIl07XG5cdGNvbnN0IGlkUHJvcCA9IHRhc2tzW2luZGV4XVtcInRhc2tJZFwiXTtcblxuXHRwdWJTdWIucHVibGlzaChcInRhc2stbW9kaWZpZWRcIiwgaWRQcm9wLCBuYW1lUHJvcCk7XG59O1xuXG5leHBvcnQgeyB0YXNrcywgY3JlYXRlVGFza0RhdGEsIHJlbW92ZVRhc2tEYXRhLCBtb2RpZnlUYXNrRGF0YSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlVGFza0RhdGEsIG1vZGlmeVRhc2tEYXRhIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stZGF0YVwiO1xuXG5mdW5jdGlvbiB0YXNrRm9ybSgpIHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Y29uc3QgZm9ybVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRBcmVhXCIpO1xuXHRjb25zdCB0YXNrRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tEdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgcHJpb3JpdHlGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcblx0Y29uc3QgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlMYWJlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5TGFiZWxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5SW5wdXRMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlJbnB1dEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0Y29uc3QgZ2VuZXJhbE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0YXNrRm9ybUNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lck92ZXJsYXkpO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmQodGFza0Zvcm1Db250ZW50KTtcblx0dGFza0Zvcm1Db250ZW50LmFwcGVuZChcblx0XHRmb3JtVGl0bGVDb250YWluZXIsXG5cdFx0dGFza1RpdGxlTGFiZWwsXG5cdFx0dGFza0Rlc2NMYWJlbCxcblx0XHR0YXNrRHVlTGFiZWwsXG5cdFx0cHJpb3JpdHlGaWVsZHNldCxcblx0XHR0YXNrUHJvamVjdExhYmVsLFxuXHRcdHRhc2tQcm9qZWN0U2VsZWN0LFxuXHRcdHN1Ym1pdEJ1dHRvblxuXHQpO1xuXHRmb3JtVGl0bGVDb250YWluZXIuYXBwZW5kKGZvcm1UaXRsZSwgY2xvc2UpO1xuXG5cdGZvcm1UaXRsZS5pbm5lclRleHQgPSBcIk5ldyBUYXNrXCI7XG5cdGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuXHR0YXNrVGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRhc2sgbmFtZVwiO1xuXHR0YXNrRGVzY0xhYmVsLmlubmVyVGV4dCA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuXHR0YXNrRHVlTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrIER1ZSBCeVwiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbExvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbE1lZGl1bS5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG5cdHByaW9yaXR5TGVnZW5kLmlubmVyVGV4dCA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG5cdHRhc2tQcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XG5cdGdlbmVyYWxPcHRpb24uaW5uZXJUZXh0ID0gXCJHZW5lcmFsXCI7XG5cdHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBUYXNrXCI7XG5cblx0dGFza1RpdGxlTGFiZWwuYXBwZW5kKHRhc2tUaXRsZUlucHV0KTtcblx0dGFza0Rlc2NMYWJlbC5hcHBlbmQodGFza0Rlc2NJbnB1dCk7XG5cdHRhc2tEdWVMYWJlbC5hcHBlbmQodGFza0R1ZUlucHV0KTtcblx0cHJpb3JpdHlGaWVsZHNldC5hcHBlbmQoXG5cdFx0cHJpb3JpdHlMZWdlbmQsXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxMb3csXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxNZWRpdW0sXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxIaWdoXG5cdCk7XG5cdHRhc2tQcmlvcml0eUxhYmVsTG93LmFwcGVuZCh0YXNrUHJpb3JpdHlJbnB1dExvdyk7XG5cdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLmFwcGVuZCh0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bSk7XG5cdHRhc2tQcmlvcml0eUxhYmVsSGlnaC5hcHBlbmQodGFza1ByaW9yaXR5SW5wdXRIaWdoKTtcblx0dGFza1Byb2plY3RTZWxlY3QuYXBwZW5kKGdlbmVyYWxPcHRpb24pO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItb3ZlcmxheVwiKTtcblx0dGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXHR0YXNrRm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGVudFwiKTtcblx0Zm9ybVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlLWNvbnRhaW5lclwiKTtcblx0Y2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcblx0Zm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlXCIpO1xuXHRzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG5cblx0dGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aXRsZVwiKTtcblx0dGFza0Rlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWR1ZVwiKTtcblx0dGFza1ByaW9yaXR5TGFiZWxMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1wcmlvcml0eS1sb3dcIik7XG5cdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktbWVkaXVtXCIpO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1wcmlvcml0eS1oaWdoXCIpO1xuXHR0YXNrUHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJvamVjdFwiKTtcblxuXHR0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG5cdHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZHVlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktbG93XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktbWVkaXVtXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dEhpZ2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5LWhpZ2hcIik7XG5cdHRhc2tQcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcm9qZWN0XCIpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kdWVcIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcmlvcml0eVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcm9qZWN0XCIpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0QXJlYVwiKTtcblx0dGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TWVkaXVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcblx0Z2VuZXJhbE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkdlbmVyYWxcIik7XG5cblx0dGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG5cblx0dGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrRHVlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnJlcXVpcmVkID0gdHJ1ZTtcblxuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcblx0dGFza0Zvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG5cdHRhc2tGb3JtQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZSkge1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRlbnRcIik7XG5cdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG5cblx0aWYgKGUudGFyZ2V0ID09IHRhc2tGb3JtQ29udGFpbmVyIHx8IGUudGFyZ2V0ID09IGNsb3NlQnV0dG9uKSB7XG5cdFx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHRcdHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0XHR0YXNrRm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5yZW1vdmUoKTtcblx0XHRcdHRhc2tGb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuXHRcdFx0dGFza0Zvcm1Db250ZW50LnJlbW92ZSgpO1xuXHRcdH0sIDMwMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRlbnRcIik7XG5cblx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHRhc2tGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cblx0dGFza0Zvcm1Db250ZW50LnJlc2V0KCk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0dGFza0Zvcm1Db250YWluZXIucmVtb3ZlKCk7XG5cdFx0dGFza0Zvcm1Db250ZW50LnJlbW92ZSgpO1xuXHR9LCAzMDApO1xufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcblx0dGFza0Zvcm0oKTtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1vdmVybGF5XCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250ZW50XCIpO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1hcmVhXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcblxuXHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0dGFza0Zvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHR0YXNrRm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHByb2plY3RDb250YWluZXJPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0XHR0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cdFx0dGFza0Zvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0fSwgMjAwKTtcblxuXHRzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIiwgXCJjcmVhdGVcIik7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUZvcm0oeyBuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCB9LCBpbmRleCkge1xuXHRzaG93Rm9ybSgpO1xuXHRjb25zdCBfbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcblx0Y29uc3QgX2Rlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKTtcblx0Y29uc3QgX2RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlXCIpO1xuXHRjb25zdCBfcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFzay1wcmlvcml0eS0ke3ByaW9yaXR5fWApO1xuXHRjb25zdCBfcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcblxuXHRfbmFtZS52YWx1ZSA9IG5hbWU7XG5cdF9kZXNjLnZhbHVlID0gZGVzYztcblx0X2RhdGUudmFsdWUgPSBkYXRlO1xuXHRfcHJpb3JpdHkuY2hlY2tlZCA9IHRydWU7XG5cdF9wcm9qZWN0LnZhbHVlID0gcHJvamVjdDtcblx0c3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwiTW9kaWZ5IFRhc2tcIjtcblxuXHRzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIiwgXCJtb2RpZnlcIik7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCBpbmRleCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0Y29uc3QgZm9ybUFjdGlvbiA9IGUudGFyZ2V0XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKVxuXHRcdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiKTtcblxuXHRjb25zdCB0YXNrSW5kZXggPSBlLnRhcmdldFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIilcblx0XHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik7XG5cblx0aWYgKGZvcm1BY3Rpb24gPT0gXCJjcmVhdGVcIikge1xuXHRcdGNyZWF0ZVRhc2tEYXRhKCk7XG5cdFx0cmVzZXRGb3JtKCk7XG5cdH0gZWxzZSBpZiAoZm9ybUFjdGlvbiA9PSBcIm1vZGlmeVwiKSB7XG5cdFx0bW9kaWZ5VGFza0RhdGEodGFza0luZGV4KTtcblx0XHRyZXNldEZvcm0oKTtcblx0XHRjb25zb2xlLmxvZyhcImF5ZSBtb2RpZnkgYmx1ZFwiKTtcblx0fVxufVxuXG5leHBvcnQgeyB0YXNrRm9ybSwgY2xvc2VGb3JtLCBzaG93Rm9ybSwgbW9kaWZ5Rm9ybSB9O1xuIiwiaW1wb3J0IHB1YlN1YiBmcm9tIFwiLi9wdWItc3ViXCI7XG5pbXBvcnQgeyB0YXNrcywgcmVtb3ZlVGFza0RhdGEgfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1kYXRhXCI7XG5pbXBvcnQgeyByZW5kZXJEZXRhaWxzLCBzaG93RGV0YWlscyB9IGZyb20gXCIuL2NyZWF0ZS1kZXRhaWxzLXBhbmVsXCI7XG5pbXBvcnQgeyBtb2RpZnlGb3JtIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stZm9ybVwiO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrSGVhZGluZyhkYXRhID0gXCJBbGwgVGFza3NcIikge1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cblx0dGFza3NBcmVhLmFwcGVuZChoZWFkaW5nKTtcblx0aGVhZGluZy5pbm5lclRleHQgPSBkYXRhO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKG9iaikge1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBjaGVja0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0YXNrQ2hlY2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza0NoZWNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tDaGVja1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgdGFza0J1dHRvbnNBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGFza0VkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXHR0YXNrc0FyZWEuYXBwZW5kKHRhc2tDb250YWluZXIpO1xuXHR0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0NvbnRhaW5lciwgdGV4dENvbnRhaW5lcik7XG5cdGNoZWNrQ29udGFpbmVyLmFwcGVuZCh0YXNrQ2hlY2tMYWJlbCk7XG5cdHRleHRDb250YWluZXIuYXBwZW5kKHRhc2tOYW1lLCB0YXNrQnV0dG9uc0FyZWEpO1xuXHR0YXNrQ2hlY2tMYWJlbC5hcHBlbmQodGFza0NoZWNrSW5wdXQsIHRhc2tDaGVja1NwYW4pO1xuXHR0YXNrQnV0dG9uc0FyZWEuYXBwZW5kKHRhc2tFZGl0LCB0YXNrRGVsZXRlKTtcblxuXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcblx0Y2hlY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrLWNvbnRhaW5lclwiKTtcblx0dGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250YWluZXJcIik7XG5cdHRleHRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgb2JqW1widGFza0lkXCJdKTtcblx0dGFza0NoZWNrU3Bhbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtc3BhblwiKTtcblx0dGFza0NoZWNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXHR0YXNrQnV0dG9uc0FyZWEuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uLWFyZWFcIik7XG5cdHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJtb2RpZnktYnV0dG9uXCIpO1xuXHR0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuXG5cdHRhc2tOYW1lLmlubmVyVGV4dCA9IG9ialtcIm5hbWVcIl07XG5cdHRhc2tFZGl0LmlubmVyVGV4dCA9IFwiTW9kaWZ5XCI7XG5cdHRhc2tEZWxldGUuaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcblxuXHR0ZXh0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0ZXh0Q29udGFpbmVyRXZlbnRDb250cm9sbGVyKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTW9kaWZpZWRUYXNrKGlkUHJvcCwgbmFtZVByb3ApIHtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7aWRQcm9wfVwiXWApO1xuXHRjb25zdCB0YXNrTmFtZSA9IHRleHRDb250YWluZXIucXVlcnlTZWxlY3RvcihcInBcIik7XG5cblx0dGFza05hbWUuaW5uZXJUZXh0ID0gbmFtZVByb3A7XG59XG5cbmNvbnN0IHRleHRDb250YWluZXJFdmVudENvbnRyb2xsZXIgPSAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09IFwibW9kaWZ5LWJ1dHRvblwiKSB7XG5cdFx0Y29uc29sZS5sb2coXCJheWUgbW9kaWZ5IGJyb1wiKTtcblx0XHRtb2RpZnlUYXNrKGUpO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gXCJkZWxldGUtYnV0dG9uXCIpIHtcblx0XHRjb25zb2xlLmxvZyhcInlhaCBkZWxldGUgYnJvXCIpO1xuXHRcdGRlbGV0ZVRhc2soZSk7XG5cdFx0Y29uc29sZS5sb2codGFza3MpO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIHtcblx0XHRzZWxlY3RUYXNrKGUpO1xuXHRcdHNob3dEZXRhaWxzKCk7XG5cdH1cbn07XG5cbmNvbnN0IHNlbGVjdFRhc2sgPSAoZSkgPT4ge1xuXHRjb25zdCBvYmpLZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0YXNrc1tpXVtcInRhc2tJZFwiXSA9PSBvYmpLZXkpIHtcblx0XHRcdHJlbmRlckRldGFpbHModGFza3NbaV0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbW9kaWZ5VGFzayA9IChlKSA9PiB7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBlLmNvbXBvc2VkUGF0aCgpWzJdO1xuXHRjb25zdCBvYmpLZXkgPSB0ZXh0Q29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRhc2tzW2ldW1widGFza0lkXCJdID09IG9iaktleSkge1xuXHRcdFx0bW9kaWZ5Rm9ybSh0YXNrc1tpXSwgaSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGUuY29tcG9zZWRQYXRoKClbM107XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBlLmNvbXBvc2VkUGF0aCgpWzJdO1xuXHRjb25zdCBvYmpLZXkgPSB0ZXh0Q29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpO1xuXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLW91dFwiKTtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0dGFza0NvbnRhaW5lci5yZW1vdmUoKTtcblx0fSwgMTAwMCk7XG5cblx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLXJlbW92ZWRcIiwgb2JqS2V5KTtcbn07XG5cbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIHJlbmRlclRhc2spO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stcmVtb3ZlZFwiLCByZW1vdmVUYXNrRGF0YSk7XG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1tb2RpZmllZFwiLCByZW5kZXJNb2RpZmllZFRhc2spO1xuXG5leHBvcnQgeyByZW5kZXJUYXNrSGVhZGluZywgcmVuZGVyVGFzayB9O1xuIiwiY2xhc3MgUHViU3ViIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50cmFja2VyID0ge1xuXHRcdFx0Ly9rZXk6IGFjdGl2aXR5TmFtZSwgdmFsdWU6IFtmdW5jc11cblx0XHR9O1xuXHR9XG5cdHN1YnNjcmliZShhY3Rpdml0eU5hbWUsIGZ1bmMpIHtcblx0XHRpZiAodGhpcy50cmFja2VyW2FjdGl2aXR5TmFtZV0pIHtcblx0XHRcdHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdLnB1c2goZnVuYyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdID0gW2Z1bmNdO1xuXHRcdH1cblx0fVxuXG5cdHVuc3Vic2NyaWJlKGFjdGl2aXR5TmFtZSwgZnVuYykge1xuXHRcdGNvbnN0IGZ1bmNBcnJheSA9IHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdO1xuXHRcdGNvbnN0IGZ1bmNJbmRleCA9IGZ1bmNBcnJheS5pbmRleE9mKGZ1bmMpO1xuXHRcdGlmIChmdW5jSW5kZXggPiAtMSkge1xuXHRcdFx0ZnVuY0FycmF5LnNwbGljZShmdW5jSW5kZXgsIDEpO1xuXHRcdH1cblx0fVxuXG5cdHB1Ymxpc2goYWN0aXZpdHlOYW1lLCAuLi5hcmdzKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy50cmFja2VyW2FjdGl2aXR5TmFtZV0pKSB7XG5cdFx0XHR0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGl0ZW0uYXBwbHkobnVsbCwgYXJncyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgcHViU3ViID0gbmV3IFB1YlN1YigpO1xuXG5leHBvcnQgZGVmYXVsdCBwdWJTdWI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG5cdGNyZWF0ZUhlYWRlcixcblx0Y3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlLFxuXHRjcmVhdGVIYW1idXJnZXIsXG5cdGNyZWF0ZVNpZGVNZW51LFxufSBmcm9tIFwiLi9jcmVhdGUtaG9tZVwiO1xuaW1wb3J0IHJlbmRlckRldGFpbHMgZnJvbSBcIi4vY3JlYXRlLWRldGFpbHMtcGFuZWwuanNcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tIZWFkaW5nLCByZW5kZXJUYXNrIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stcGFuZWxcIjtcblxuY29uc3QgY3JlYXRlSW50ZXJmYWNlID0gKCkgPT4ge1xuXHRjcmVhdGVIZWFkZXIoKTtcblx0Y3JlYXRlSGFtYnVyZ2VyKCk7XG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSgpO1xuXHRjcmVhdGVTaWRlTWVudSgpO1xuXHRyZW5kZXJUYXNrSGVhZGluZygpO1xuXHQvLyByZW5kZXJUYXNrKHsgbmFtZTogXCJMb3JlbSBJcHN1bSBEb2xvclwiLCB0YXNrSWQ6IDIwMCB9KTtcblx0Ly8gcmVuZGVyRGV0YWlscyh7XG5cdC8vIFx0bmFtZTogXCJMb3JlbSBJcHN1bSBEb2xvclwiLFxuXHQvLyBcdGRlc2M6IFwic2RicyBqYWcgamhhZ2QgYWpkIGdqaGFkZyBkYWhkZ1wiLFxuXHQvLyBcdGRhdGU6IFwiMjcvMDQvMjAyM1wiLFxuXHQvLyBcdHByaW9yaXR5OiBcImhpZ2hcIixcblx0Ly8gXHRwcm9qZWN0OiBcIkdlbmVyYWxcIixcblx0Ly8gXHR0YXNrSWQ6IDIwMCxcblx0Ly8gfSk7XG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY3JlYXRlSW50ZXJmYWNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==