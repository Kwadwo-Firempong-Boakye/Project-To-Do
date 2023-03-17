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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v8.4.14,\n* Autoprefixer: v10.4.7\n* Browsers: last 4 version\n*/\n\n:root {\n\tfont-family: \"Varela Round\", sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t--divider-color: #ecf4ff;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bold;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: row;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground-color: #fff;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 0.25rem solid white;\n\tbackground-color: rgba(0, 61, 140, 0.6);\n\t-webkit-backdrop-filter: blur(5px);\n\tbackdrop-filter: blur(5px);\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\t-webkit-transform: translateX(-350px);\n\t-ms-transform: translateX(-350px);\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\t-webkit-transform: translateX(500px);\n\t-ms-transform: translateX(500px);\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none !important;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(93, 150, 189);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-size: 1.55rem;\n\tmargin: 1.3rem 4rem;\n\tcolor: #043584;\n\ttext-align: left;\n}\n\n.task-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-animation: slide-in 1.8s ease-out forwards;\n\tanimation: slide-in 1.2s ease-out forwards;\n}\n\n.animate-out {\n\t-webkit-animation: slide-out 1s ease-in-out forwards;\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n.checked-animate-out {\n\t-webkit-animation: slide-out 1.5s ease-in-out forwards;\n\tanimation: slide-out 1.5s ease-in-out forwards;\n}\n\n@-webkit-keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 1rem 0;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n}\n\n.task-container p {\n\tmargin: 0 0.5rem 0 2rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\t/* margin: auto 0.5rem; */\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n\t/* pointer-events: none; */\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\t-webkit-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 0.5rem;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1.2rem;\n\twidth: 1.25rem;\n\tmargin-right: 1rem;\n\tpadding: 0.25rem;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n\tborder: 2px solid #fff;\n}\n\n.details-divider {\n\theight: 2px;\n\tbackground-color: #b2d5fc;\n\tmargin-top: 4.3rem;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.details-divider2 {\n\theight: 2px;\n\tbackground-color: #ffffff;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tmargin-bottom: 2.25rem;\n}\n\n.details-title {\n\tpadding: 1.5rem;\n\tfont-size: 1.3rem;\n\t/* text-transform: uppercase; */\n\ttext-align: left;\n\tcolor: #043584;\n\tmargin-right: 1rem;\n\tmargin-left: 1rem;\n\tmargin-top: 2.25rem;\n\tmargin-bottom: 2.25rem;\n\tmax-width: 90%;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tfont-weight: bold;\n}\n\n.project,\n.priority,\n.due-date {\n\tdisplay: block;\n\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #bc3939;\n\tbackground: var(--white);\n\tmargin: 1rem 1rem 1rem 1rem;\n\tpadding: 0.65rem 1rem;\n\tborder-radius: 5px;\n}\n\n.due-date {\n\tmargin-bottom: 2.25rem;\n}\n\n.project {\n\tmargin-top: 2.25rem;\n}\n\n.project-priority-text {\n\tcolor: #043584;\n}\n\n.details-description {\n\tmax-width: 90%;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tcolor: #043584;\n\tbackground: #fff;\n\tpadding: 0.65rem 1rem;\n\tfont-size: 0.75rem;\n\tline-height: 1.75rem;\n\tborder-radius: 5px;\n\tmin-height: 100px;\n}\n\n.desc-title {\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.details-edit-button {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 1.2rem;\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin-left: 1rem;\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #ffffff;\n\tcursor: pointer;\n}\n\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n}\n\n.editable {\n\tborder: 1px solid red;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: start;\n\t-ms-flex-align: start;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: -o-linear-gradient(45deg, #0d3562, #266abe);\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 250px);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela Round;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content fieldset {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tfont-family: Varela Round;\n}\n\n.form-content option {\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela Round;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\t-webkit-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\n\n/*Project Form*/\n\n.project-area {\n\tmargin-top: 2.5rem;\n\t/* height: auto; */\n\tpadding: 0;\n\t/* overflow-y: scroll; */\n\t/* position: relative; */\n}\n\n.project-button {\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmargin: 0rem 0.5rem 0rem 0.5rem;\n\twidth: 7rem;\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n\t-webkit-transition: 0.3s all ease-in-out;\n\t-o-transition: 0.3s all ease-in-out;\n\ttransition: 0.3s all ease-in-out;\n\t/* position: absolute;\n\ttop: 415px; */\n}\n\n.project-form-content {\n\tpadding-top: 2.5rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-transform: scale(0);\n\t-ms-transform: scale(0);\n\ttransform: scale(0);\n}\n\n.project-form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.project-heading-container {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-top: 1px solid var(--divider-color);\n\tborder-bottom: 1px solid var(--divider-color);\n\t/* border: 1px solid yellow; */\n}\n\n.project-heading {\n\tpadding: 1rem 0.5rem 1rem 1.5rem;\n\tmargin: 0;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\n\t/* background-color: #eff4fa; */\n}\n\n.project-div-container {\n\t/* border: 1px solid red; */\n\tpadding-bottom: 1.5rem;\n\tmax-height: 20rem;\n\toverflow-y: scroll;\n}\n\n.project-div {\n\tpadding: 0.75rem 1rem 0.75rem 3rem;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n\t-webkit-transition: all 0.2s ease-out;\n\t-o-transition: all 0.2s ease-out;\n\ttransition: all 0.2s ease-out;\n}\n\n.project-div-container::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.project-div-container::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.project-div-container::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.project-div-container::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding-right: 3rem;\n\t\tpadding-left: 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\t-webkit-transform: rotate(360deg) scale(1.5);\n\t\t-ms-transform: rotate(360deg) scale(1.5);\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\t-webkit-transform: translateX(10px);\n\t\t-ms-transform: translateX(10px);\n\t\ttransform: translateX(10px);\n\t}\n\n\t.project-div:hover {\n\t\tcolor: var(--white);\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\t-webkit-transform: scale(1.25) translateX(5px);\n\t\t-ms-transform: scale(1.25) translateX(5px);\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\t-webkit-transform: scale(1.25);\n\t\t-ms-transform: scale(1.25);\n\t\ttransform: scale(1.25);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n\n\t.details-edit-button:hover {\n\t\tbackground: #bc3939;\n\t\tcolor: #fff;\n\t}\n\n\t.details-edit-button:focus {\n\t\tbackground: #871b1b;\n\t\tcolor: #fff;\n\t}\n\n\t.project-button:hover {\n\t\twidth: 8rem;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t\tborder-right: 2px solid var(--divider-color);\n\t}\n\n\t.project-div-container {\n\t\tmax-height: 12rem;\n\t\toverflow-y: scroll;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.logo-area {\n\t\tpadding-right: 10px;\n\t}\n\n\t.logo-area p {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1rem;\n\t\tmargin: 0;\n\t}\n\n\t.header-menu {\n\t\tpadding-left: 10px;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 265px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\t/* margin-bottom: 1rem; */\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\t-webkit-box-align: start;\n\t\t-ms-flex-align: start;\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v8.4.14,\n* Autoprefixer: v10.4.7\n* Browsers: last 4 version\n*/\n\n:root {\n\tfont-family: \"Varela Round\", sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t--divider-color: #ecf4ff;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bold;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: row;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground-color: #fff;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 0.25rem solid white;\n\tbackground-color: rgba(0, 61, 140, 0.6);\n\t-webkit-backdrop-filter: blur(5px);\n\tbackdrop-filter: blur(5px);\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\t-webkit-transform: translateX(-350px);\n\t-ms-transform: translateX(-350px);\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\t-webkit-transform: translateX(500px);\n\t-ms-transform: translateX(500px);\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none !important;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(93, 150, 189);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-size: 1.55rem;\n\tmargin: 1.3rem 4rem;\n\tcolor: #043584;\n\ttext-align: left;\n}\n\n.task-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-animation: slide-in 1.8s ease-out forwards;\n\tanimation: slide-in 1.2s ease-out forwards;\n}\n\n.animate-out {\n\t-webkit-animation: slide-out 1s ease-in-out forwards;\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n.checked-animate-out {\n\t-webkit-animation: slide-out 1.5s ease-in-out forwards;\n\tanimation: slide-out 1.5s ease-in-out forwards;\n}\n\n@-webkit-keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 1rem 0;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n}\n\n.task-container p {\n\tmargin: 0 0.5rem 0 2rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\t/* margin: auto 0.5rem; */\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n\t/* pointer-events: none; */\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\t-webkit-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 0.5rem;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1.2rem;\n\twidth: 1.25rem;\n\tmargin-right: 1rem;\n\tpadding: 0.25rem;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n\tborder: 2px solid #fff;\n}\n\n.details-divider {\n\theight: 2px;\n\tbackground-color: #b2d5fc;\n\tmargin-top: 4.3rem;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.details-divider2 {\n\theight: 2px;\n\tbackground-color: #ffffff;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tmargin-bottom: 2.25rem;\n}\n\n.details-title {\n\tpadding: 1.5rem;\n\tfont-size: 1.3rem;\n\t/* text-transform: uppercase; */\n\ttext-align: left;\n\tcolor: #043584;\n\tmargin-right: 1rem;\n\tmargin-left: 1rem;\n\tmargin-top: 2.25rem;\n\tmargin-bottom: 2.25rem;\n\tmax-width: 90%;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tfont-weight: bold;\n}\n\n.project,\n.priority,\n.due-date {\n\tdisplay: block;\n\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #bc3939;\n\tbackground: var(--white);\n\tmargin: 1rem 1rem 1rem 1rem;\n\tpadding: 0.65rem 1rem;\n\tborder-radius: 5px;\n}\n\n.due-date {\n\tmargin-bottom: 2.25rem;\n}\n\n.project {\n\tmargin-top: 2.25rem;\n}\n\n.project-priority-text {\n\tcolor: #043584;\n}\n\n.details-description {\n\tmax-width: 90%;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tcolor: #043584;\n\tbackground: #fff;\n\tpadding: 0.65rem 1rem;\n\tfont-size: 0.75rem;\n\tline-height: 1.75rem;\n\tborder-radius: 5px;\n\tmin-height: 100px;\n}\n\n.desc-title {\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.details-edit-button {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 1.2rem;\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin-left: 1rem;\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #ffffff;\n\tcursor: pointer;\n}\n\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n}\n\n.editable {\n\tborder: 1px solid red;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: start;\n\t-ms-flex-align: start;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: -o-linear-gradient(45deg, #0d3562, #266abe);\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 250px);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela Round;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content fieldset {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tfont-family: Varela Round;\n}\n\n.form-content option {\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela Round;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\t-webkit-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\n\n/*Project Form*/\n\n.project-area {\n\tmargin-top: 2.5rem;\n\t/* height: auto; */\n\tpadding: 0;\n\t/* overflow-y: scroll; */\n\t/* position: relative; */\n}\n\n.project-button {\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmargin: 0rem 0.5rem 0rem 0.5rem;\n\twidth: 7rem;\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n\t-webkit-transition: 0.3s all ease-in-out;\n\t-o-transition: 0.3s all ease-in-out;\n\ttransition: 0.3s all ease-in-out;\n\t/* position: absolute;\n\ttop: 415px; */\n}\n\n.project-form-content {\n\tpadding-top: 2.5rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-transform: scale(0);\n\t-ms-transform: scale(0);\n\ttransform: scale(0);\n}\n\n.project-form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.project-heading-container {\n\tdisplay: flex;\n\talign-items: center;\n\tborder-top: 1px solid var(--divider-color);\n\tborder-bottom: 1px solid var(--divider-color);\n\t/* border: 1px solid yellow; */\n}\n\n.project-heading {\n\tpadding: 1rem 0.5rem 1rem 1.5rem;\n\tmargin: 0;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\n\t/* background-color: #eff4fa; */\n}\n\n.project-div-container {\n\t/* border: 1px solid red; */\n\tpadding-bottom: 1.5rem;\n\tmax-height: 20rem;\n\toverflow-y: scroll;\n}\n\n.project-div {\n\tpadding: 0.75rem 1rem 0.75rem 3rem;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n\t-webkit-transition: all 0.2s ease-out;\n\t-o-transition: all 0.2s ease-out;\n\ttransition: all 0.2s ease-out;\n}\n\n.project-div-container::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.project-div-container::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.project-div-container::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.project-div-container::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding-right: 3rem;\n\t\tpadding-left: 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\t-webkit-transform: rotate(360deg) scale(1.5);\n\t\t-ms-transform: rotate(360deg) scale(1.5);\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\t-webkit-transform: translateX(10px);\n\t\t-ms-transform: translateX(10px);\n\t\ttransform: translateX(10px);\n\t}\n\n\t.project-div:hover {\n\t\tcolor: var(--white);\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\t-webkit-transform: scale(1.25) translateX(5px);\n\t\t-ms-transform: scale(1.25) translateX(5px);\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\t-webkit-transform: scale(1.25);\n\t\t-ms-transform: scale(1.25);\n\t\ttransform: scale(1.25);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n\n\t.details-edit-button:hover {\n\t\tbackground: #bc3939;\n\t\tcolor: #fff;\n\t}\n\n\t.details-edit-button:focus {\n\t\tbackground: #871b1b;\n\t\tcolor: #fff;\n\t}\n\n\t.project-button:hover {\n\t\twidth: 8rem;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t\tborder-right: 2px solid var(--divider-color);\n\t}\n\n\t.project-div-container {\n\t\tmax-height: 12rem;\n\t\toverflow-y: scroll;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.logo-area {\n\t\tpadding-right: 10px;\n\t}\n\n\t.logo-area p {\n\t\tfont-size: 1.1rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1rem;\n\t\tmargin: 0;\n\t}\n\n\t.header-menu {\n\t\tpadding-left: 10px;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 265px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\t/* margin-bottom: 1rem; */\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\t-webkit-box-align: start;\n\t\t-ms-flex-align: start;\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _create_task_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task-form */ "./src/create-task-form.js");



function renderDetails(obj, taskIndex) {
	const detailsArea = document.querySelector(".details-area");
	const divider = document.createElement("hr");
	const detailsInfoContainer = document.createElement("div");
	const backArrow = document.createElement("img");
	const editButton = document.createElement("button");
	const detailsTitle = document.createElement("h3");
	const divider2 = document.createElement("hr");
	const project = document.createElement("p");
	const priority = document.createElement("p");
	const dueDate = document.createElement("p");
	const divider3 = document.createElement("hr");
	const description = document.createElement("p");

	detailsArea.append(divider, detailsInfoContainer);
	detailsInfoContainer.append(
		backArrow,
		editButton,
		detailsTitle,
		divider2,
		project,
		priority,
		dueDate,
		divider3,
		description
	);

	detailsInfoContainer.classList.add("details-info-container");
	divider.classList.add("details-divider");
	backArrow.classList.add("back-arrow");
	editButton.classList.add("details-edit-button");
	detailsTitle.classList.add("details-title");
	divider2.classList.add("details-divider2");
	project.classList.add("project");
	priority.classList.add("priority");
	dueDate.classList.add("due-date");
	divider3.classList.add("details-divider2");
	description.classList.add("details-description");

	backArrow.setAttribute("src", _Images_arrow_png__WEBPACK_IMPORTED_MODULE_0__);

	editButton.innerText = "Edit Details";
	detailsTitle.innerText = obj["name"];
	project.innerHTML = `<span class="project-priority-text">Project&nbsp&nbsp&nbsp|&nbsp&nbsp</span> ${obj["project"]}`;
	priority.innerHTML = `<span class="project-priority-text">Priority&nbsp&nbsp&nbsp|&nbsp&nbsp</span> ${obj["priority"]}`;
	dueDate.innerHTML = `<span class="project-priority-text">Due Date&nbsp&nbsp&nbsp|&nbsp&nbsp</span> ${obj["date"]}`;
	description.innerHTML = `<span class="project-priority-text desc-title">Description</span><br>${obj["desc"]}`;

	backArrow.addEventListener("click", clearDetails);
	editButton.addEventListener("click", () => {
		clearDetails();
		(0,_create_task_form__WEBPACK_IMPORTED_MODULE_1__.modifyForm)(obj, taskIndex);
	});

}

const clearDetails = () => {
	const detailsInfoContainer = document.querySelector(
		".details-info-container"
	);
	const divider = document.querySelector(".details-divider");
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	if (detailsInfoContainer) {
		detailsArea.classList.add("hide-details-panel");
		tasksArea.classList.remove("no-pointer-events");
		setTimeout(() => {
			divider.remove();
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

const editDetails = () => {
	const title = document.querySelector(".details-title");
	const description = document.querySelector(".details-description");
	const project = document.querySelector(".project");
	const priority = document.querySelector(".priority");
	const due = document.querySelector(".due-date");
	const labels = document.querySelector(".project-priority-text");

	title.setAttribute("contentEditable", "true");
	description.setAttribute("contentEditable", "true");
	project.setAttribute("contentEditable", "true");
	priority.setAttribute("contentEditable", "true");
	due.setAttribute("contentEditable", "true");
	labels.setAttribute("contentEditable", "false");
};




/***/ }),

/***/ "./src/create-home.js":
/*!****************************!*\
  !*** ./src/create-home.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "changeHeading": () => (/* binding */ changeHeading),
/* harmony export */   "createDashboardStructure": () => (/* binding */ createDashboardStructure),
/* harmony export */   "createHamburger": () => (/* binding */ createHamburger),
/* harmony export */   "createHeader": () => (/* binding */ createHeader),
/* harmony export */   "createProjectMenu": () => (/* binding */ createProjectMenu),
/* harmony export */   "createSideMenu": () => (/* binding */ createSideMenu)
/* harmony export */ });
/* harmony import */ var _Images_Taskie_logo_deep_blue_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Images/Taskie-logo-deep-blue.png */ "./src/Images/Taskie-logo-deep-blue.png");
/* harmony import */ var _Images_github_sign_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/github-sign.png */ "./src/Images/github-sign.png");
/* harmony import */ var _Images_burger_menu_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Images/burger-menu.svg */ "./src/Images/burger-menu.svg");
/* harmony import */ var _create_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task-form */ "./src/create-task-form.js");
/* harmony import */ var _create_details_panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-details-panel */ "./src/create-details-panel.js");
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");
/* harmony import */ var _create_task_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-task-panel */ "./src/create-task-panel.js");








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

	tasksArea.addEventListener("click", () => {
		const menuArea = document.querySelector(".menu-area");

		const compStyle = window.getComputedStyle(menuArea);
		const checkDisplayState = compStyle.display !== "none";

		if (window.innerWidth <= 550) {
			if (checkDisplayState) {
				setTimeout(() => {
					menuArea.classList.add("no-display");
				}, 200);
				menuArea.classList.toggle("hide-side-menu");
			}

			// clearDetails();
		}
	});
}

function createSideMenu() {
	const menuArea = document.querySelector(".menu-area");
	const menuItems = [
		"All tasks",
		"Past due",
		"Due today",
		"Due this week",
		"Completed",
	];
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	menuItems.forEach((item, i) => {
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

		menuItemContainer.setAttribute("data-side-menu", item);

		menuArea.append(menuItemContainer);

		if (i == 0) {
			menuItemContainer.addEventListener("click", _create_task_panel__WEBPACK_IMPORTED_MODULE_6__.showAllTasks);
		} else if (i > 0 && i < 4) {
			menuItemContainer.addEventListener("click", _create_task_panel__WEBPACK_IMPORTED_MODULE_6__.filterTasksByDate);
		} else if (i == 4) {
			menuItemContainer.addEventListener("click", _create_task_panel__WEBPACK_IMPORTED_MODULE_6__.showCompleted);
		}

		menuItemContainer.addEventListener("click", changeHeading);
		menuItemContainer.addEventListener("click", () => {
			const compStyle = window.getComputedStyle(menuArea);
			const checkDisplayState = compStyle.display !== "none";

			if (window.innerWidth <= 550) {
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
			}
		});

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

const createProjectMenu = () => {
	const menuArea = document.querySelector(".menu-area");
	const projectArea = document.createElement("div");
	const projectHeadingContainer = document.createElement("section");
	const projectHeading = document.createElement("p");
	const addProjectButton = document.createElement("button");
	const projectDivContainer = document.createElement("section");
	const projectDiv = document.createElement("div");

	menuArea.append(projectArea);
	projectArea.append(projectHeadingContainer, projectDivContainer);
	projectHeadingContainer.append(projectHeading, addProjectButton);
	projectDivContainer.append(projectDiv);

	addProjectButton.innerText = "Add Project";
	projectHeading.innerText = "Projects";
	projectDiv.innerText = "# General";
	projectDiv.setAttribute("data-project", "General");

	projectArea.classList.add("project-area");
	projectHeadingContainer.classList.add("project-heading-container");
	projectHeading.classList.add("project-heading");
	projectDivContainer.classList.add("project-div-container");
	projectDiv.classList.add("project-div");
	addProjectButton.classList.add("project-button");

	addProjectButton.addEventListener("click", openProjectForm);
	projectDiv.addEventListener("click", changeHeading);
	projectDiv.addEventListener("click", _create_task_panel__WEBPACK_IMPORTED_MODULE_6__.filterTasksByProject);

	projectDiv.addEventListener("click", () => {
		const menuArea = document.querySelector(".menu-area");

		const compStyle = window.getComputedStyle(menuArea);
		const checkDisplayState = compStyle.display !== "none";

		if (window.innerWidth <= 550) {
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
		}
	});
};

const openProjectForm = () => {
	const projectContainer = document.querySelector("#project-container");
	const projectContainerOverlay = document.createElement("div");
	const projectFormContainer = document.createElement("div");
	const projectFormContent = document.createElement("form");
	const projectTitleLabel = document.createElement("label");
	const projectTitleInput = document.createElement("input");
	const projectSubmitButton = document.createElement("button");
	const detailsArea = document.querySelector(".details-area");
	const tasksArea = document.querySelector(".tasks-area");

	projectContainer.append(projectContainerOverlay, projectFormContainer);
	projectFormContainer.append(projectFormContent);
	projectFormContent.append(
		projectTitleLabel,
		projectTitleInput,
		projectSubmitButton
	);

	projectContainerOverlay.classList.add("container-overlay");
	projectFormContainer.classList.add("form-container");
	projectFormContent.classList.add("form-content", "project-form-content");
	projectSubmitButton.classList.add("submit-button", "submit-project-button");
	detailsArea.classList.add("hide-details-panel");
	tasksArea.classList.remove("no-pointer-events");

	projectTitleLabel.innerText = "Project Name";
	projectSubmitButton.innerText = "Create Project";

	projectTitleInput.setAttribute("placeholder", "Enter project name");
	projectTitleInput.setAttribute("type", "text");
	projectTitleInput.setAttribute("id", "project-title");
	projectTitleInput.required = true;

	projectContainerOverlay.style.transform = "scale(0)";
	projectFormContainer.style.transform = "scale(0)";
	projectFormContent.style.transform = "scale(0)";

	setTimeout(() => {
		projectContainerOverlay.style.transform = "scale(1)";
		projectFormContainer.style.transform = "scale(1)";
		projectFormContent.style.transform = "scale(1)";
	}, 200);

	projectSubmitButton.setAttribute("data-action", "add-project");
	projectFormContainer.addEventListener("click", _create_task_form__WEBPACK_IMPORTED_MODULE_3__.closeForm);
	projectFormContent.addEventListener("submit", _create_task_form__WEBPACK_IMPORTED_MODULE_3__.submitForm);
};

const addProject = (pName) => {
	// const projectName = document.querySelector("#project-title").value;
	const projectArea = document.querySelector(".project-area");
	const projectDivContainer = document.querySelector(".project-div-container");
	const projectDiv = document.createElement("div");
	projectDivContainer.append(projectDiv);
	projectDiv.classList.add("project-div");
	projectDiv.setAttribute("data-project", pName);
	projectDiv.addEventListener("click", changeHeading);
	projectDiv.addEventListener("click", _create_task_panel__WEBPACK_IMPORTED_MODULE_6__.filterTasksByProject);

	projectDiv.innerText = "# " + pName;
	projectDiv.addEventListener("click", () => {
		const menuArea = document.querySelector(".menu-area");

		const compStyle = window.getComputedStyle(menuArea);
		const checkDisplayState = compStyle.display !== "none";

		if (window.innerWidth <= 550) {
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
		}
	});

	_pub_sub__WEBPACK_IMPORTED_MODULE_5__["default"].publish("project-ui-added", pName);
};

const changeHeading = (e) => {
	let title =
		e.target.getAttribute("data-project") ||
		e.target.getAttribute("data-side-menu") ||
		e.target.innerText;
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_6__.renderTaskHeading)(title);
};




/***/ }),

/***/ "./src/create-task-data.js":
/*!*********************************!*\
  !*** ./src/create-task-data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTaskData": () => (/* binding */ createTaskData),
/* harmony export */   "dateCategorizer": () => (/* binding */ dateCategorizer),
/* harmony export */   "modifyTaskData": () => (/* binding */ modifyTaskData),
/* harmony export */   "projectsUi": () => (/* binding */ projectsUi),
/* harmony export */   "removeTaskData": () => (/* binding */ removeTaskData),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



//Data storage array;
const tasks = [
	// {
	// 	name: "Just-Do-It App - Guide",
	// 	desc: "Insert instruction on how to use the app",
	// 	date: "15/03/2023",
	// 	priority: "high",
	// 	project: "General",
	// 	taskId: 5000,
	// },
];

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
	_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-added", taskObject);
};

//Function to store data
const storeTaskData = (obj) => {
	tasks.push(obj);
	// console.log(tasks);
};

//Function to remove data
const removeTaskData = (key) => {
	let deletedIndex;
	let taskProject;
	for (let i = 0; i < tasks.length; i++) {
		if (tasks[i]["taskId"] == key) {
			deletedIndex = i;
			taskProject = tasks[i]["project"];
			tasks.splice(i, 1);
		}
	}
	_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-deleted", deletedIndex, taskProject);
	// console.log(tasks);
};

//Function to modify data
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

//Data storage for caching positions of project objects
const projectIndexes = {};

//Function to cache index of each created task by projects
const cacheIndexes = ({ project }) => {
	let position = tasks.length - 1;
	if (projectIndexes[project]) {
		projectIndexes[project].push(position);
	} else {
		projectIndexes[project] = [position];
	}
	// console.log(projectIndexes);
};

//Function to correct indexes of created tasks by projects after task deletion
const removeDeletedCacheIndex = (deletedTaskIndex, taskProject) => {
	projectIndexes[taskProject].forEach((element, i, a) => {
		if (element == deletedTaskIndex) {
			a.splice(i, 1);
			adjustCachedIndexes(deletedTaskIndex);
			return;
		}
	});
};

const adjustCachedIndexes = (num) => {
	let projects = Object.keys(projectIndexes);
	projects.forEach((project) => {
		projectIndexes[project] = projectIndexes[project].map((item) => {
			return item > num ? item - 1 : item;
		});
	});
	// console.log(projectIndexes);
};

//Data storage for lists of projects
const projectsUi = ["General"];

const storeProjectsUi = (name) => {
	projectsUi.push(name);
};

const categorizeAndFilter = () => {
	const dueToday = [];
	const dueThisWeek = [];
	const pastDue = [];
	const completed = [];

	const accessDateStorageController = (key) => {
		let focus;
		switch (key) {
			case "due-today":
				focus = dueToday;
				break;
			case "due-this-week":
				focus = dueThisWeek;
				break;
			case "pastDue":
				focus = pastDue;
				break;
			case "completed":
				focus = completed;
				break;
			default:
				console.log("input error");
				break;
		}
		return focus;
	};

	const checkDateStatus = () => {
		let today = new Date().toISOString().split("T")[0];
		let currentWeekDays = Array.from(Array(7).keys()).map((idx) => {
			const d = new Date();
			d.setDate(d.getDate() - d.getDay() + idx);
			return d.toISOString().split("T")[0];
		});

		tasks.forEach((task) => {
			let textContainer = document.querySelector(
				`[data-key="${task["taskId"]}"]`
			);
			let taskDate = task["date"];
			if (taskDate == today) {
				dueToday.push(task);
				dueThisWeek.push(task);
				textContainer.parentElement.setAttribute("data-category", "due-today");
				textContainer.parentElement.setAttribute("this-week", "true");
			} else if (taskDate < today) {
				pastDue.push(task);
				textContainer.parentElement.setAttribute("data-category", "past-due");
				if (currentWeekDays.includes(taskDate)) {
					textContainer.parentElement.setAttribute("this-week", "true");
					dueThisWeek.push(task);
				} else {
					textContainer.parentElement.setAttribute("this-week", "false");
				}
			}
		});
	};

	const assignDateStatus = (obj) => {
		let today = new Date().toISOString().split("T")[0];
		let currentWeekDays = Array.from(Array(7).keys()).map((idx) => {
			const d = new Date();
			d.setDate(d.getDate() - d.getDay() + idx);
			return d.toISOString().split("T")[0];
		});
		let taskDate = obj["date"];
		let taskId = obj["taskId"];
		let textContainer = document.querySelector(`[data-key="${taskId}"]`);

		if (taskDate == today) {
			dueToday.push(obj);
			dueThisWeek.push(obj);
			textContainer.parentElement.setAttribute("data-category", "due-today");
			textContainer.parentElement.setAttribute("this-week", "true");
		} else if (currentWeekDays.includes(taskDate)) {
			dueThisWeek.push(obj);
			textContainer.parentElement.setAttribute("this-week", "true");
		} else {
			textContainer.parentElement.setAttribute("this-week", "false");
		}
	};

	return {
		checkDateStatus,
		assignDateStatus,
		accessDateStorageController,
	};
};

const dateCategorizer = categorizeAndFilter();

_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", storeTaskData);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", cacheIndexes);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", taskIdentityNumber.increaseIdNumber);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", _storage__WEBPACK_IMPORTED_MODULE_1__.localStorageCommitTasks);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-deleted", removeDeletedCacheIndex);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-deleted", _storage__WEBPACK_IMPORTED_MODULE_1__.localStorageCommitTasks);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-modified", _storage__WEBPACK_IMPORTED_MODULE_1__.localStorageCommitTasks);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("project-ui-added", storeProjectsUi);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("project-ui-added", _storage__WEBPACK_IMPORTED_MODULE_1__.localStorageCommitProjects);




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
/* harmony export */   "submitForm": () => (/* binding */ submitForm),
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _create_task_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task-data */ "./src/create-task-data.js");
/* harmony import */ var _create_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-home */ "./src/create-home.js");



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
	// const generalOption = document.createElement("option");
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
	// generalOption.innerText = "General";
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
	// taskProjectSelect.append(generalOption);

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
	close.setAttribute("type", "button");
	taskPriorityInputLow.setAttribute("value", "low");
	taskPriorityInputMedium.setAttribute("value", "medium");
	taskPriorityInputHigh.setAttribute("value", "high");
	taskDueInput.value = today;

	taskDueInput.setAttribute("min", today);

	taskTitleInput.required = true;
	taskDueInput.required = true;
	taskProjectSelect.required = true;
	taskPriorityInputLow.required = true;

	createSelectOptions();

	close.addEventListener("click", closeForm);
	taskFormContainer.addEventListener("click", closeForm);
	taskFormContent.addEventListener("submit", submitForm);
}

function createSelectOptions() {
	const select = document.querySelector("select");
	const options = _create_task_data__WEBPACK_IMPORTED_MODULE_0__.projectsUi;
	options.forEach((item) => {
		let opt = document.createElement("option");
		opt.innerText = item;
		opt.setAttribute("value", item);
		select.append(opt);
	});
}

function closeForm(e) {
	e.stopImmediatePropagation();

	const projectContainerOverlay = document.querySelector(".container-overlay");
	const taskFormContainer = document.querySelector(".form-container");
	const taskFormContent = document.querySelector(".form-content");
	const closeButton = document.querySelector(".close-button");
	const submitProject = document.querySelector(".submit-project-button");

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

	// console.log("form closed triggered");
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
	console.log("Submit form process initiated");
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
	} else if (formAction == "add-project") {
		const projectName = e.currentTarget.querySelector("input").value;
		(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.addProject)(projectName);
		resetForm();
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
/* harmony export */   "filterTasksByDate": () => (/* binding */ filterTasksByDate),
/* harmony export */   "filterTasksByProject": () => (/* binding */ filterTasksByProject),
/* harmony export */   "renderTask": () => (/* binding */ renderTask),
/* harmony export */   "renderTaskHeading": () => (/* binding */ renderTaskHeading),
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks),
/* harmony export */   "showCompleted": () => (/* binding */ showCompleted)
/* harmony export */ });
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");
/* harmony import */ var _create_task_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-task-data */ "./src/create-task-data.js");
/* harmony import */ var _create_details_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-details-panel */ "./src/create-details-panel.js");
/* harmony import */ var _create_task_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task-form */ "./src/create-task-form.js");





function renderTaskHeading(data = "All tasks") {
	const headingTwo = document.querySelector("h2");
	if (headingTwo) {
		headingTwo.innerText = data;
		return;
	}

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
	taskContainer.setAttribute("data-project", obj["project"]);
	taskCheckSpan.classList.add("input-span");
	taskCheckInput.setAttribute("type", "checkbox");
	taskButtonsArea.classList.add("task-button-area");
	taskEdit.classList.add("modify-button");
	taskDelete.classList.add("delete-button");

	taskName.innerText = obj["name"];
	taskEdit.innerText = "Modify";
	taskDelete.innerText = "Delete";

	textContainer.addEventListener("click", textContainerEventController);
	checkContainer.addEventListener("click", isChecked);
}

function renderModifiedTask(idProp, nameProp) {
	const textContainer = document.querySelector(`[data-key="${idProp}"]`);
	const taskName = textContainer.querySelector("p");

	taskName.innerText = nameProp;
}

const textContainerEventController = (e) => {
	if (e.target.classList.value == "modify-button") {
		modifyTask(e);
		return;
	} else if (e.target.classList.value == "delete-button") {
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
			(0,_create_details_panel__WEBPACK_IMPORTED_MODULE_2__.renderDetails)(_create_task_data__WEBPACK_IMPORTED_MODULE_1__.tasks[i], i);
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
	taskContainer.classList.add("animate-out");
	const objKey = textContainer.getAttribute("data-key");
	setTimeout(() => {
		taskContainer.remove();
	}, 1000);

	_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-ui-removed", objKey);
};

const filterTasksByProject = (e) => {
	const projectName = e.target.getAttribute("data-project");
	const tasksArea = document.querySelector(".tasks-area");
	const eligible = tasksArea.querySelectorAll(
		`[data-project="${projectName}"]`
	);
	const allTasks = tasksArea.querySelectorAll(".task-container");
	const hTwo = tasksArea.querySelector("h2");

	[...allTasks].forEach((item) => {
		if (item != hTwo) {
			item.classList.add("no-display");
		}
	});

	[...eligible].forEach((item) => {
		if (!item.getAttribute("complete")) {
			item.classList.remove("no-display");
		}
	});
};

const filterTasksByDate = (e) => {
	const dateMenu = e.currentTarget.getAttribute("data-side-menu");
	const tasksArea = document.querySelector(".tasks-area");
	const hTwo = tasksArea.querySelector("h2");
	const allTasks = tasksArea.querySelectorAll(".task-container");
	let eligible;

	if (dateMenu == "Past due") {
		eligible = tasksArea.querySelectorAll('[data-category="past-due"]');
	} else if (dateMenu == "Due today") {
		eligible = tasksArea.querySelectorAll('[data-category="due-today"]');
	} else if (dateMenu == "Due this week") {
		eligible = tasksArea.querySelectorAll('[this-week="true"]');
	}

	[...allTasks].forEach((item) => {
		if (item != hTwo) {
			item.classList.add("no-display");
		}
	});

	[...eligible].forEach((item) => {
		if (!item.getAttribute("complete")) {
			item.classList.remove("no-display");
		}
	});
};

const showAllTasks = () => {
	const tasksArea = document.querySelector(".tasks-area");
	const allTasks = tasksArea.querySelectorAll(".task-container");
	const hTwo = tasksArea.querySelector("h2");
	[...allTasks].forEach((item) => {
		if (item != hTwo && !item.getAttribute("complete")) {
			item.classList.remove("no-display");
		} else if (item.getAttribute("complete")) {
			item.classList.add("no-display");
		}
	});
};

const isChecked = (e) => {
	const taskContainer = e.currentTarget.parentElement;
	const dataKey = taskContainer
		.querySelector(".text-container")
		.getAttribute("data-key");
	// console.log(e.target);
	if (e.target.checked) {
		taskContainer.setAttribute("complete", "true");
		taskContainer.style.background = "#8ecc54";
		taskContainer.style.pointerEvents = "none";
		setTimeout(() => {
			taskContainer.classList.add("checked-animate-out");
		}, 1000);
		setTimeout(() => {
			taskContainer.classList.add("no-display");
		}, 2000);
		_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].publish("task-ui-removed", dataKey);
	}
	// else {
	// 	taskContainer.removeAttribute("complete");
	// 	taskContainer.style.background = "#e3f0ff";
	// 	taskContainer.classList.add("no-display");
	// }
};

const showCompleted = () => {
	const tasksArea = document.querySelector(".tasks-area");
	const allTasks = tasksArea.querySelectorAll(".task-container");
	const eligible = tasksArea.querySelectorAll('[complete="true"]');
	const hTwo = tasksArea.querySelector("h2");
	[...allTasks].forEach((item) => {
		if (item != hTwo) {
			item.classList.add("no-display");
		}
	});
	[...eligible].forEach((item) => {
		item.classList.remove("no-display");
		item.classList.remove("checked-animate-out");
	});
};

_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", renderTask);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-added", _create_task_data__WEBPACK_IMPORTED_MODULE_1__.dateCategorizer.assignDateStatus);
_pub_sub__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe("task-ui-removed", _create_task_data__WEBPACK_IMPORTED_MODULE_1__.removeTaskData);
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

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageCommitProjects": () => (/* binding */ localStorageCommitProjects),
/* harmony export */   "localStorageCommitTasks": () => (/* binding */ localStorageCommitTasks),
/* harmony export */   "localStorageRetrieveProjects": () => (/* binding */ localStorageRetrieveProjects),
/* harmony export */   "localStorageRetrieveTasks": () => (/* binding */ localStorageRetrieveTasks),
/* harmony export */   "pageLoader": () => (/* binding */ pageLoader)
/* harmony export */ });
/* harmony import */ var _create_task_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-task-data */ "./src/create-task-data.js");
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");
/* harmony import */ var _create_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-home */ "./src/create-home.js");




const localStorageCommitTasks = () => {
	let serializedTasks = JSON.stringify(_create_task_data__WEBPACK_IMPORTED_MODULE_0__.tasks);
	localStorage.setItem("taskData", serializedTasks);
	console.warn("local storage taskData updated");
};

const localStorageRetrieveTasks = () => {
	let deserializedTasks = JSON.parse(localStorage.getItem("taskData"));
	return deserializedTasks;
};

const localStorageCommitProjects = () => {
	let serializedProjects = JSON.stringify(_create_task_data__WEBPACK_IMPORTED_MODULE_0__.projectsUi);
	localStorage.setItem("projectsData", serializedProjects);
	console.warn("local storage projectData updated");
};

const localStorageRetrieveProjects = () => {
	let deserializedProjects = JSON.parse(localStorage.getItem("projectsData"));
	return deserializedProjects;
};

const pageLoader = () => {
	let localStorageTaskData = localStorageRetrieveTasks();
	let localStorageProjectData = localStorageRetrieveProjects();

	if (localStorageTaskData) {
		localStorageTaskData.forEach((task, i, a) => {
			_pub_sub__WEBPACK_IMPORTED_MODULE_1__["default"].publish("task-added", task);
		});
	}
	if (localStorageProjectData) {
		localStorageProjectData.forEach((project, i) => {
			if (i > 0) {
				(0,_create_home__WEBPACK_IMPORTED_MODULE_2__.addProject)(project);
			}
		});
	}
};




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
/* harmony import */ var _create_task_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-task-panel */ "./src/create-task-panel.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/storage.js");





const createInterface = () => {
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHamburger)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createDashboardStructure)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createSideMenu)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createProjectMenu)();
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_2__.renderTaskHeading)();
	(0,_storage__WEBPACK_IMPORTED_MODULE_3__.pageLoader)();
};

window.addEventListener("load", createInterface);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FB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RUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBT0U7QUFDaUM7QUFDakI7O0FBRXZDO0FBQ0EsQ0FBQywwREFBWTtBQUNiLENBQUMsNkRBQWU7QUFDaEIsQ0FBQyxzRUFBd0I7QUFDekIsQ0FBQyw0REFBYztBQUNmLENBQUMsK0RBQWlCO0FBQ2xCLENBQUMscUVBQWlCO0FBQ2xCLENBQUMsb0RBQVU7QUFDWDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtZGV0YWlscy1wYW5lbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS1ob21lLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLXRhc2stZGF0YS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS10YXNrLWZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtdGFzay1wYW5lbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL3B1Yi1zdWIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogUHJlZml4ZWQgYnkgaHR0cHM6Ly9hdXRvcHJlZml4ZXIuZ2l0aHViLmlvXFxuKiBQb3N0Q1NTOiB2OC40LjE0LFxcbiogQXV0b3ByZWZpeGVyOiB2MTAuNC43XFxuKiBCcm93c2VyczogbGFzdCA0IHZlcnNpb25cXG4qL1xcblxcbjpyb290IHtcXG5cXHRmb250LWZhbWlseTogXFxcIlZhcmVsYSBSb3VuZFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0LS1kaXZpZGVyLWNvbG9yOiAjZWNmNGZmO1xcblxcdC0tbG9nby1waW5rOiAjZmYxYjZiO1xcblxcdC0tbG9nby1ibHVlOiAjNDVjYWZmO1xcblxcdC0tbG9nby1taWQtYmx1ZTogIzAwNjFmZjtcXG5cXHQtLWxvZ28tZ3JlZW46ICM3M2ZmMDA7XFxuXFx0LS1kYXJrLW1vZGUtYmc6ICMyMzIzMjM7XFxuXFx0LS13aGl0ZTogI2ZmZjtcXG5cXHQtLW9mZi13aGl0ZTogI2Y1ZjVmNTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb2dvLWFyZWEsXFxuLmhlYWRlci1tZW51IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmxvZ28tYXJlYSBpbWcge1xcblxcdGhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLmhlYWRlci1tZW51IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItbWVudSBpbWcge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuMzVyZW0gMS41cmVtIDAuMzVyZW0gMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIERBU0hCT0FSRCBBUkVBKi9cXG5cXG4uZGFzaC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2MnB4KTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51LWFyZWEge1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA2O1xcbn1cXG5cXG4udGFza3MtYXJlYSB7XFxuXFx0LyogbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gNzIwcHgpOyAqL1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2OHB4KTtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgKi9cXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGV0YWlscy1hcmVhIHtcXG5cXHRtaW4td2lkdGg6IDQwMHB4O1xcblxcdG1heC13aWR0aDogNDUwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlci1sZWZ0OiAwLjI1cmVtIHNvbGlkIHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNjEsIDE0MCwgMC42KTtcXG5cXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHotaW5kZXg6IDU7XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVyZW07XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbi5oaWRlLXNpZGUtbWVudSB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxufVxcblxcbi5oaWRlLWRldGFpbHMtcGFuZWwge1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4ubm8tcG9pbnRlci1ldmVudHMge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0cGFkZGluZzogMXJlbSAxLjI1cmVtIDFyZW0gMS4yNXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lcjpudGgtY2hpbGQoMSkge1xcblxcdG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHN2ZyB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHJnYig5MywgMTUwLCAxODkpO1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHJnYigxNTYsIDIwMCwgMjMwKTtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi50YXNrcy1hcmVhIGgyIHtcXG5cXHRmb250LXNpemU6IDEuNTVyZW07XFxuXFx0bWFyZ2luOiAxLjNyZW0gNHJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdG1hcmdpbjogMC43NXJlbSAxcmVtIDAuNzVyZW0gMDtcXG5cXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjNGQ1ZjA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluIDEuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1pbiAxLjJzIGVhc2Utb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uYW5pbWF0ZS1vdXQge1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1vdXQgMXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5jaGVja2VkLWFuaW1hdGUtb3V0IHtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0IDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxuXFx0YW5pbWF0aW9uOiBzbGlkZS1vdXQgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluIHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzJhODVkZjtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAwLjI7XFxuXFx0fVxcblxcblxcdDkwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4NWRmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdG9wYWNpdHk6IDAuMjtcXG5cXHR9XFxuXFxuXFx0OTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMi4zNXJlbTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMi4zNXJlbSk7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1idXR0b24tYXJlYSB7XFxuXFx0bWFyZ2luOiBhdXRvIDFyZW0gYXV0byBhdXRvO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgcCB7XFxuXFx0bWFyZ2luOiAwIDAuNXJlbSAwIDJyZW07XFxuXFx0bWF4LXdpZHRoOiA2MCU7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdC8qIG1hcmdpbjogYXV0byAwLjVyZW07ICovXFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjNyZW0gMC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBsYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMS43NXJlbTtcXG5cXHR3aWR0aDogMS43NXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdC8qIHBvaW50ZXItZXZlbnRzOiBub25lOyAqL1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3Bhbjo6YWZ0ZXIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3Bhbjo6YWZ0ZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAtMTtcXG5cXHRsZWZ0OiAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHdpZHRoOiAwLjM1cmVtO1xcblxcdGhlaWdodDogMS4xcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uZGV0YWlscy1pbmZvLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uYmFjay1hcnJvdyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHRvcDogMS4ycmVtO1xcblxcdHdpZHRoOiAxLjI1cmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzOTM5O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5kZXRhaWxzLWRpdmlkZXIge1xcblxcdGhlaWdodDogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiMmQ1ZmM7XFxuXFx0bWFyZ2luLXRvcDogNC4zcmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5kZXRhaWxzLWRpdmlkZXIyIHtcXG5cXHRoZWlnaHQ6IDJweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcblxcdHBhZGRpbmc6IDEuNXJlbTtcXG5cXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHQvKiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAqL1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi10b3A6IDIuMjVyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcXG5cXHRtYXgtd2lkdGg6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QsXFxuLnByaW9yaXR5LFxcbi5kdWUtZGF0ZSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcdGNvbG9yOiAjYmMzOTM5O1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRtYXJnaW46IDFyZW0gMXJlbSAxcmVtIDFyZW07XFxuXFx0cGFkZGluZzogMC42NXJlbSAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFx0bWFyZ2luLXRvcDogMi4yNXJlbTtcXG59XFxuXFxuLnByb2plY3QtcHJpb3JpdHktdGV4dCB7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxufVxcblxcbi5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRtYXgtd2lkdGg6IDkwJTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRwYWRkaW5nOiAwLjY1cmVtIDFyZW07XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLmRlc2MtdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG59XFxuXFxuLmR1ZS10ZXh0IHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRsaW5lLWhlaWdodDogbm9ybWFsO1xcblxcdHBhZGRpbmc6IDAuMnJlbSAwLjhyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZGV0YWlscy1lZGl0LWJ1dHRvbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcblxcdG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXRhYmxlIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi8qRk9STSBBUkVBKi9cXG5cXG4uY29udGFpbmVyLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogNjtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRvcGFjaXR5OiAwLjc7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiAxMTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuXFx0LW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBhZGRpbmc6IDRyZW0gMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGQzNTYyLCAjMjY2YWJlKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZDM1NjIsICMyNjZhYmUpO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDJyZW0gMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXG5cXHR3aWR0aDogbWF4KDI1dncsIDI1MHB4KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS10aXRsZS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1Y2FmZjtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuXFx0d2lkdGg6IDEuN2VtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjMDkyZDU5O1xcblxcdHBhZGRpbmc6IDAuMnJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdG1hcmdpbjogMC41cmVtIDAgMC4zcmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0cmVzaXplOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGZpZWxkc2V0IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBsZWdlbmQge1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRhY2NlbnQtY29sb3I6ICM0NWNhZmY7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgb3B0aW9uIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGhlaWdodDogMi41cmVtO1xcblxcdGJhY2tncm91bmQ6ICM0NWNhZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLypQcm9qZWN0IEZvcm0qL1xcblxcbi5wcm9qZWN0LWFyZWEge1xcblxcdG1hcmdpbi10b3A6IDIuNXJlbTtcXG5cXHQvKiBoZWlnaHQ6IGF1dG87ICovXFxuXFx0cGFkZGluZzogMDtcXG5cXHQvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuXFx0LyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdG1hcmdpbjogMHJlbSAwLjVyZW0gMHJlbSAwLjVyZW07XFxuXFx0d2lkdGg6IDdyZW07XFxuXFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxuXFx0LyogcG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNDE1cHg7ICovXFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGVudCB7XFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0LyogYm9yZGVyOiAxcHggc29saWQgeWVsbG93OyAqL1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDAuNXJlbSAxcmVtIDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcblxcdC8qIGJhY2tncm91bmQtY29sb3I6ICNlZmY0ZmE7ICovXFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXIge1xcblxcdC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG5cXHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcblxcdG1heC1oZWlnaHQ6IDIwcmVtO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG5cXHRwYWRkaW5nOiAwLjc1cmVtIDFyZW0gMC43NXJlbSAzcmVtO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiA2cHg7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMzAsIDI0OSk7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTU2LCAyMDAsIDIzMCk7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi8qIC50YXNrcy1vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDQ7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC43O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG1hcmdpbjogMDtcXG59ICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC50YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzlkYzdmNTtcXG5cXHR9XFxuXFxuXFx0Lm1vZGlmeS1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzBmNThjZDtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZS1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2JjMzkzOTtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW46aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcblxcdFxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nOmhvdmVyIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpOyAqL1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0XFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciAubWVudS1pdGVtIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2OmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlcjpob3ZlciB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdH1cXG5cXG5cXHQuYmFjay1hcnJvdzpob3ZlciB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHRcXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0XFx0YmFja2dyb3VuZDogI2M5MmExMjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6ICNlZGVhMmI7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246YWN0aXZlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjN2MxOTBhO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1lZGl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2JjMzkzOTtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtZWRpdC1idXR0b246Zm9jdXMge1xcblxcdFxcdGJhY2tncm91bmQ6ICM4NzFiMWI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0d2lkdGg6IDhyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0Lm1lbnUtYXJlYSB7XFxuXFx0XFx0d2lkdGg6IDI3NXB4O1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2LWNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LWhlaWdodDogMTJyZW07XFxuXFx0XFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcdC5sb2dvLWFyZWEge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxuXFx0fVxcblxcblxcdC5sb2dvLWFyZWEgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0fVxcblxcblxcdC5sb2dvLWFyZWEgaW1nIHtcXG5cXHRcXHRoZWlnaHQ6IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1idXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRcXHRtYXJnaW46IDA7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1hcmVhIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDI2NXB4O1xcblxcdFxcdG1pbi13aWR0aDogNTBweDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHAge1xcblxcdFxcdGxlZnQ6IDJyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRcXHRtYXJnaW46IGF1dG8gMS41cmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHQvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xcblxcdFxcdGZvbnQtc2l6ZTogMC45cmVtO1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjU1cmVtO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuY29udGFpbmVyLW92ZXJsYXkge1xcblxcdFxcdGhlaWdodDogMTE1ZHZoO1xcblxcdH1cXG5cXG5cXHQuY2hlY2stY29udGFpbmVyIHtcXG5cXHRcXHQtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuXFx0XFx0LW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdFxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O0NBS0M7O0FBRUQ7Q0FDQyx1Q0FBdUM7Q0FDdkMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsU0FBUztBQUNWOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsNkNBQTZDO0NBQzdDLFlBQVk7QUFDYjs7QUFFQTs7Q0FFQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLGFBQWE7Q0FDYix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Ms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QUFXO0NBQ1o7O0NBRUE7RUFDQyxtQkFBbUI7RUFDbkIsWUFBWTtDQUNiOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw0Q0FBNEM7Q0FDN0M7O0NBRUE7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLGVBQWU7RUFDZixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuKiBQcmVmaXhlZCBieSBodHRwczovL2F1dG9wcmVmaXhlci5naXRodWIuaW9cXG4qIFBvc3RDU1M6IHY4LjQuMTQsXFxuKiBBdXRvcHJlZml4ZXI6IHYxMC40LjdcXG4qIEJyb3dzZXJzOiBsYXN0IDQgdmVyc2lvblxcbiovXFxuXFxuOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVmFyZWxhIFJvdW5kXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHQtLWRpdmlkZXItY29sb3I6ICNlY2Y0ZmY7XFxuXFx0LS1sb2dvLXBpbms6ICNmZjFiNmI7XFxuXFx0LS1sb2dvLWJsdWU6ICM0NWNhZmY7XFxuXFx0LS1sb2dvLW1pZC1ibHVlOiAjMDA2MWZmO1xcblxcdC0tbG9nby1ncmVlbjogIzczZmYwMDtcXG5cXHQtLWRhcmstbW9kZS1iZzogIzIzMjMyMztcXG5cXHQtLXdoaXRlOiAjZmZmO1xcblxcdC0tb2ZmLXdoaXRlOiAjZjVmNWY1O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGhlaWdodDogNjBweDtcXG59XFxuXFxuLmxvZ28tYXJlYSxcXG4uaGVhZGVyLW1lbnUge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtIDEuMjVyZW07XFxufVxcblxcbi5sb2dvLWFyZWEgcCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9nby1hcmVhIGltZyB7XFxuXFx0aGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1tZW51IGltZyB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC4zNXJlbSAxLjVyZW0gMC4zNXJlbSAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbHVzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogREFTSEJPQVJEIEFSRUEqL1xcblxcbi5kYXNoLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRnYXA6IDFyZW07XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDYycHgpO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lbnUtYXJlYSB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDY7XFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHQvKiBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3MjBweCk7ICovXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDY4cHgpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdC8qIG1hcmdpbi1yaWdodDogMC41cmVtOyAqL1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdG1pbi13aWR0aDogNDAwcHg7XFxuXFx0bWF4LXdpZHRoOiA0NTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDAuMjVyZW0gc29saWQgd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA2MSwgMTQwLCAwLjYpO1xcblxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXJlbTtcXG5cXHR6LWluZGV4OiAxMDtcXG59XFxuXFxuLmhpZGUtc2lkZS1tZW51IHtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG59XFxuXFxuLmhpZGUtZGV0YWlscy1wYW5lbCB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uby1wb2ludGVyLWV2ZW50cyB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuMjVyZW0gMXJlbSAxLjI1cmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOm50aC1jaGlsZCgxKSB7XFxuXFx0bWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgc3ZnIHtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEycHg7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDkzLCAxNTAsIDE4OSk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDE1NiwgMjAwLCAyMzApO1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRhc2tzLWFyZWEgaDIge1xcblxcdGZvbnQtc2l6ZTogMS41NXJlbTtcXG5cXHRtYXJnaW46IDEuM3JlbSA0cmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0bWFyZ2luOiAwLjc1cmVtIDFyZW0gMC43NXJlbSAwO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0ZDVmMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4gMS44cyBlYXNlLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLWluIDEuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5hbmltYXRlLW91dCB7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmNoZWNrZWQtYW5pbWF0ZS1vdXQge1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLW91dCAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4NWRmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdG9wYWNpdHk6IDAuMjtcXG5cXHR9XFxuXFxuXFx0OTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyYTg1ZGY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMC4yO1xcblxcdH1cXG5cXG5cXHQ5MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbi5jaGVjay1jb250YWluZXIge1xcblxcdHdpZHRoOiAyLjM1cmVtO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAyLjM1cmVtKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRtYXJnaW46IGF1dG8gMXJlbSBhdXRvIGF1dG87XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRtYXJnaW46IDAgMC41cmVtIDAgMnJlbTtcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0LyogbWFyZ2luOiBhdXRvIDAuNXJlbTsgKi9cXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3R0b206IDRweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3BhbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiAxLjc1cmVtO1xcblxcdHdpZHRoOiAxLjc1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0LyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuOjphZnRlciB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzcGFuOjphZnRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IC0xO1xcblxcdGxlZnQ6IDAuNzVyZW07XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0d2lkdGg6IDAuMzVyZW07XFxuXFx0aGVpZ2h0OiAxLjFyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci13aWR0aDogMCA0cHggNHB4IDA7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5kZXRhaWxzLWluZm8tY29udGFpbmVyIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5iYWNrLWFycm93IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuMjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYzM5Mzk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmRldGFpbHMtZGl2aWRlciB7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2IyZDVmYztcXG5cXHRtYXJnaW4tdG9wOiA0LjNyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtZGl2aWRlcjIge1xcblxcdGhlaWdodDogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuXFx0cGFkZGluZzogMS41cmVtO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXRvcDogMi4yNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xcblxcdG1heC13aWR0aDogOTAlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4ucHJpb3JpdHksXFxuLmR1ZS1kYXRlIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICNiYzM5Mzk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjY1cmVtIDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG5cXHRtYXJnaW4tdG9wOiAyLjI1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1wcmlvcml0eS10ZXh0IHtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG59XFxuXFxuLmRldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdG1heC13aWR0aDogOTAlO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uZGVzYy10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uZHVlLXRleHQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0cGFkZGluZzogMC4ycmVtIDAuOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXRhaWxzLWVkaXQtYnV0dG9uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDEuMnJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuXFx0b3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZWRpdGFibGUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLypGT1JNIEFSRUEqL1xcblxcbi5jb250YWluZXItb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiA2O1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdG9wYWNpdHk6IDAuNztcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDExO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG5cXHQtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0cGFkZGluZzogNHJlbSAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZDM1NjIsICMyNjZhYmUpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMzU2MiwgIzI2NmFiZSk7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMnJlbSAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcblxcdHdpZHRoOiBtYXgoMjV2dywgMjUwcHgpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLXRpdGxlLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDVjYWZmO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG5cXHR3aWR0aDogMS43ZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQ6ICMwOTJkNTk7XFxuXFx0cGFkZGluZzogMC4ycmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHRleHRhcmVhIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW0gMCAwLjNyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgZmllbGRzZXQge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGFjY2VudC1jb2xvcjogIzQ1Y2FmZjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBvcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxuXFx0YmFja2dyb3VuZDogIzQ1Y2FmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKlByb2plY3QgRm9ybSovXFxuXFxuLnByb2plY3QtYXJlYSB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcblxcdC8qIGhlaWdodDogYXV0bzsgKi9cXG5cXHRwYWRkaW5nOiAwO1xcblxcdC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwcmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG5cXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA0MTVweDsgKi9cXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250ZW50IHtcXG5cXHRwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmctY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHQvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcblxcdHBhZGRpbmc6IDFyZW0gMC41cmVtIDFyZW0gMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogI2VmZjRmYTsgKi9cXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lciB7XFxuXFx0LyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuXFx0bWF4LWhlaWdodDogMjByZW07XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDNyZW07XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1kaXYtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDZweDtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHJnYigyMDIsIDIzMCwgMjQ5KTtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHJnYigxNTYsIDIwMCwgMjMwKTtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLyogLnRhc2tzLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogNDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRvcGFjaXR5OiAwLjc7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjN2Y1O1xcblxcdH1cXG5cXG5cXHQubW9kaWZ5LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGY1OGNkO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzOTM5O1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgc3Bhbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWc6aG92ZXIge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNSk7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1sb2dvLW1pZC1ibHVlKSwgdmFyKC0tbG9nby1ibHVlKSk7ICovXFxuXFx0XFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTsgKi9cXG5cXHRcXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIC5tZW51LWl0ZW0ge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kaXY6aG92ZXIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcblxcdC5iYWNrLWFycm93OmhvdmVyIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHRcXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdFxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2VkZWEyYjtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICM3YzE5MGE7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWVkaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYmMzOTM5O1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1lZGl0LWJ1dHRvbjpmb2N1cyB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzg3MWIxYjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR3aWR0aDogOHJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQubWVudS1hcmVhIHtcXG5cXHRcXHR3aWR0aDogMjc1cHg7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kaXYtY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAxMnJlbTtcXG5cXHRcXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuXFx0LmxvZ28tYXJlYSB7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTBweDtcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYXJlYSBwIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYXJlYSBpbWcge1xcblxcdFxcdGhlaWdodDogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLWJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWcge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWFyZWEge1xcblxcdFxcdG1heC13aWR0aDogMjY1cHg7XFxuXFx0XFx0bWluLXdpZHRoOiA1MHB4O1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgcCB7XFxuXFx0XFx0bGVmdDogMnJlbTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stYnV0dG9uLWFyZWEge1xcblxcdFxcdG1hcmdpbjogYXV0byAxLjVyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdFxcdC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXFxuXFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDAuNTVyZW07XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQ6ICNjOTJhMTI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5jb250YWluZXItb3ZlcmxheSB7XFxuXFx0XFx0aGVpZ2h0OiAxMTVkdmg7XFxuXFx0fVxcblxcblxcdC5jaGVjay1jb250YWluZXIge1xcblxcdFxcdC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG5cXHRcXHQtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgc3BhbiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMS41cmVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJhY2sgZnJvbSBcIi4vSW1hZ2VzL2Fycm93LnBuZ1wiO1xuaW1wb3J0IHsgbW9kaWZ5Rm9ybSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWZvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyRGV0YWlscyhvYmosIHRhc2tJbmRleCkge1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1hcmVhXCIpO1xuXHRjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXHRjb25zdCBkZXRhaWxzSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGJhY2tBcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCBkZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGNvbnN0IGRpdmlkZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZGl2aWRlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0ZGV0YWlsc0FyZWEuYXBwZW5kKGRpdmlkZXIsIGRldGFpbHNJbmZvQ29udGFpbmVyKTtcblx0ZGV0YWlsc0luZm9Db250YWluZXIuYXBwZW5kKFxuXHRcdGJhY2tBcnJvdyxcblx0XHRlZGl0QnV0dG9uLFxuXHRcdGRldGFpbHNUaXRsZSxcblx0XHRkaXZpZGVyMixcblx0XHRwcm9qZWN0LFxuXHRcdHByaW9yaXR5LFxuXHRcdGR1ZURhdGUsXG5cdFx0ZGl2aWRlcjMsXG5cdFx0ZGVzY3JpcHRpb25cblx0KTtcblxuXHRkZXRhaWxzSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1pbmZvLWNvbnRhaW5lclwiKTtcblx0ZGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kaXZpZGVyXCIpO1xuXHRiYWNrQXJyb3cuY2xhc3NMaXN0LmFkZChcImJhY2stYXJyb3dcIik7XG5cdGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZWRpdC1idXR0b25cIik7XG5cdGRldGFpbHNUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy10aXRsZVwiKTtcblx0ZGl2aWRlcjIuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGl2aWRlcjJcIik7XG5cdHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG5cdHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcblx0ZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG5cdGRpdmlkZXIzLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdmlkZXIyXCIpO1xuXHRkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kZXNjcmlwdGlvblwiKTtcblxuXHRiYWNrQXJyb3cuc2V0QXR0cmlidXRlKFwic3JjXCIsIGJhY2spO1xuXG5cdGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFZGl0IERldGFpbHNcIjtcblx0ZGV0YWlsc1RpdGxlLmlubmVyVGV4dCA9IG9ialtcIm5hbWVcIl07XG5cdHByb2plY3QuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicHJvamVjdC1wcmlvcml0eS10ZXh0XCI+UHJvamVjdCZuYnNwJm5ic3AmbmJzcHwmbmJzcCZuYnNwPC9zcGFuPiAke29ialtcInByb2plY3RcIl19YDtcblx0cHJpb3JpdHkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicHJvamVjdC1wcmlvcml0eS10ZXh0XCI+UHJpb3JpdHkmbmJzcCZuYnNwJm5ic3B8Jm5ic3AmbmJzcDwvc3Bhbj4gJHtvYmpbXCJwcmlvcml0eVwiXX1gO1xuXHRkdWVEYXRlLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInByb2plY3QtcHJpb3JpdHktdGV4dFwiPkR1ZSBEYXRlJm5ic3AmbmJzcCZuYnNwfCZuYnNwJm5ic3A8L3NwYW4+ICR7b2JqW1wiZGF0ZVwiXX1gO1xuXHRkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LXByaW9yaXR5LXRleHQgZGVzYy10aXRsZVwiPkRlc2NyaXB0aW9uPC9zcGFuPjxicj4ke29ialtcImRlc2NcIl19YDtcblxuXHRiYWNrQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsZWFyRGV0YWlscyk7XG5cdGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjbGVhckRldGFpbHMoKTtcblx0XHRtb2RpZnlGb3JtKG9iaiwgdGFza0luZGV4KTtcblx0fSk7XG5cbn1cblxuY29uc3QgY2xlYXJEZXRhaWxzID0gKCkgPT4ge1xuXHRjb25zdCBkZXRhaWxzSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIuZGV0YWlscy1pbmZvLWNvbnRhaW5lclwiXG5cdCk7XG5cdGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtZGl2aWRlclwiKTtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXG5cdGlmIChkZXRhaWxzSW5mb0NvbnRhaW5lcikge1xuXHRcdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWRldGFpbHMtcGFuZWxcIik7XG5cdFx0dGFza3NBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyLWV2ZW50c1wiKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRpdmlkZXIucmVtb3ZlKCk7XG5cdFx0XHRkZXRhaWxzSW5mb0NvbnRhaW5lci5yZW1vdmUoKTtcblx0XHR9LCAyNTApO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RGV0YWlscyA9ICgpID0+IHtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHRcdHRhc2tzQXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cdH0sIDEwKTtcbn07XG5cbmNvbnN0IGVkaXREZXRhaWxzID0gKCkgPT4ge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy10aXRsZVwiKTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtZGVzY3JpcHRpb25cIik7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIik7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcblx0Y29uc3QgZHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWUtZGF0ZVwiKTtcblx0Y29uc3QgbGFiZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXByaW9yaXR5LXRleHRcIik7XG5cblx0dGl0bGUuc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcblx0ZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcblx0cHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuXHRwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuXHRkdWUuc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcblx0bGFiZWxzLnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcImZhbHNlXCIpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyRGV0YWlscywgY2xlYXJEZXRhaWxzLCBzaG93RGV0YWlscyB9O1xuIiwiaW1wb3J0IGxvZ29CbHVlIGZyb20gXCIuL0ltYWdlcy9UYXNraWUtbG9nby1kZWVwLWJsdWUucG5nXCI7XG5pbXBvcnQgZ2l0aHViU2lnbiBmcm9tIFwiLi9JbWFnZXMvZ2l0aHViLXNpZ24ucG5nXCI7XG5pbXBvcnQgYnVyZ2VyTWVudSBmcm9tIFwiLi9JbWFnZXMvYnVyZ2VyLW1lbnUuc3ZnXCI7XG5pbXBvcnQgeyBzaG93Rm9ybSwgY2xvc2VGb3JtLCBzdWJtaXRGb3JtIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stZm9ybVwiO1xuaW1wb3J0IHsgY2xlYXJEZXRhaWxzIH0gZnJvbSBcIi4vY3JlYXRlLWRldGFpbHMtcGFuZWxcIjtcbmltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViLXN1YlwiO1xuaW1wb3J0IHtcblx0ZmlsdGVyVGFza3NCeVByb2plY3QsXG5cdHJlbmRlclRhc2tIZWFkaW5nLFxuXHRzaG93QWxsVGFza3MsXG5cdGZpbHRlclRhc2tzQnlEYXRlLFxuXHRzaG93Q29tcGxldGVkLFxufSBmcm9tIFwiLi9jcmVhdGUtdGFzay1wYW5lbFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVIYW1idXJnZXIoKSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kKGhhbWJ1cmdlcik7XG5cdGhhbWJ1cmdlci5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYnVyZ2VyTWVudSk7XG5cdGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyXCIpO1xuXG5cdGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdFx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRcdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cblx0XHRjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QXJlYSk7XG5cdFx0Y29uc3QgY2hlY2tEaXNwbGF5U3RhdGUgPSBjb21wU3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cblx0XHRpZiAoY2hlY2tEaXNwbGF5U3RhdGUpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdH0sIDIwMCk7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdH0sIDEwKTtcblx0XHR9XG5cblx0XHRjbGVhckRldGFpbHMoKTtcblx0fSk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdH0sIDEwKTtcblx0XHR9XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG5cdC8vR2VuZXJhbCBlbGVtZW50cyByZXF1aXJlZCBmb3IgaGVhZGVyXG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBoZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXHRjb25zdCBsb2dvQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29uc3QgbG9nb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgaGVhZGVyTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBnaXRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdGNvbnN0IGdpdExvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBoZWFkZXJOZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuXHQvL0J1aWxkIGhlYWRlciBzdHJ1Y3R1cmVcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoaGVhZGVyQ29udGFpbmVyKTtcblx0aGVhZGVyQ29udGFpbmVyLmFwcGVuZChsb2dvQXJlYSwgaGVhZGVyTWVudSk7XG5cdGxvZ29BcmVhLmFwcGVuZChsb2dvSW1nLCBsb2dvVGV4dCk7XG5cdGhlYWRlck1lbnUuYXBwZW5kKGdpdExpbmssIGhlYWRlck5ld1Rhc2tCdXR0b24pO1xuXHRnaXRMaW5rLmFwcGVuZChnaXRMb2dvKTtcblxuXHQvL0ZpbGwtb3V0IGVsZW1lbnRzXG5cdGxvZ29JbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGxvZ29CbHVlKTtcblx0bG9nb1RleHQuaW5uZXJUZXh0ID0gXCJKdXN0LURvLUl0XCI7XG5cdGdpdExpbmsuc2V0QXR0cmlidXRlKFxuXHRcdFwiaHJlZlwiLFxuXHRcdFwiaHR0cHM6Ly9naXRodWIuY29tL0t3YWR3by1GaXJlbXBvbmctQm9ha3llL1Byb2plY3QtVG8tRG9cIlxuXHQpO1xuXHRnaXRMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcblx0Z2l0TG9nby5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZ2l0aHViU2lnbik7XG5cdGhlYWRlck5ld1Rhc2tCdXR0b24uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicGx1c1wiPis8L3NwYW4+IFRhc2tgO1xuXG5cdC8vQXNzaWduIENTUyBjbGFzc2VzXG5cdGhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRhaW5lclwiKTtcblx0bG9nb0FyZWEuY2xhc3NMaXN0LmFkZChcImxvZ28tYXJlYVwiKTtcblx0aGVhZGVyTWVudS5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLW1lbnVcIik7XG5cdGhlYWRlck5ld1Rhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImhlYWRlci1idXR0b25cIik7XG5cblx0Ly9FdmVudCBsaXN0ZW5lciBmb3IgbmV3IHRhc2sgYnV0dG9uXG5cdGhlYWRlck5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlKCkge1xuXHQvL0dlbmVyYWwgZWxlbWVudHMgcmVxdWlyZWQgZm9yIGRhc2hib2FyZFxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgZGFzaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblxuXHQvL0J1aWxkIGRhc2hib2FyZCBzdHJ1Y3R1cmVcblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoZGFzaENvbnRhaW5lcik7XG5cdGRhc2hDb250YWluZXIuYXBwZW5kKG1lbnVBcmVhLCB0YXNrc0FyZWEsIGRldGFpbHNBcmVhKTtcblxuXHQvL0Fzc2lnbiBDU1MgY2xhc3Nlc1xuXHRkYXNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXNoLWNvbnRhaW5lclwiKTtcblx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm1lbnUtYXJlYVwiKTtcblx0dGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1hcmVhXCIpO1xuXHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1hcmVhXCIsIFwibm8tZGlzcGxheVwiLCBcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblxuXHR0YXNrc0FyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXG5cdFx0Y29uc3QgY29tcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUFyZWEpO1xuXHRcdGNvbnN0IGNoZWNrRGlzcGxheVN0YXRlID0gY29tcFN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MCkge1xuXHRcdFx0aWYgKGNoZWNrRGlzcGxheVN0YXRlKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNsZWFyRGV0YWlscygpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNpZGVNZW51KCkge1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXHRjb25zdCBtZW51SXRlbXMgPSBbXG5cdFx0XCJBbGwgdGFza3NcIixcblx0XHRcIlBhc3QgZHVlXCIsXG5cdFx0XCJEdWUgdG9kYXlcIixcblx0XHRcIkR1ZSB0aGlzIHdlZWtcIixcblx0XHRcIkNvbXBsZXRlZFwiLFxuXHRdO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1hcmVhXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cblx0bWVudUl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcblx0XHRsZXQgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGxldCBtZW51SXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuXHRcdFx0XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuXHRcdFx0XCJzdmdcIlxuXHRcdCk7XG5cdFx0bGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0XHRtZW51SXRlbS5pbm5lclRleHQgPSBpdGVtO1xuXHRcdG1lbnVJdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcImN1cnJlbnRDb2xvclwiKTtcblx0XHRtZW51SXRlbUltYWdlLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG5cdFx0bWVudUl0ZW1JbWFnZS5pbm5lckhUTUwgPSBgPHBhdGggZD1cIk0xMiAyQzYuNSAyIDIgNi41IDIgMTJTNi41IDIyIDEyIDIyIDIyIDE3LjUgMjIgMTIgMTcuNSAyIDEyIDJNMTAgMTdMNSAxMkw2LjQxIDEwLjU5TDEwIDE0LjE3TDE3LjU5IDYuNThMMTkgOEwxMCAxN1pcIiAvPmA7XG5cblx0XHRtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtLWNvbnRhaW5lclwiKTtcblx0XHRtZW51SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xuXG5cdFx0bWVudUl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1zaWRlLW1lbnVcIiwgaXRlbSk7XG5cblx0XHRtZW51QXJlYS5hcHBlbmQobWVudUl0ZW1Db250YWluZXIpO1xuXG5cdFx0aWYgKGkgPT0gMCkge1xuXHRcdFx0bWVudUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxUYXNrcyk7XG5cdFx0fSBlbHNlIGlmIChpID4gMCAmJiBpIDwgNCkge1xuXHRcdFx0bWVudUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbHRlclRhc2tzQnlEYXRlKTtcblx0XHR9IGVsc2UgaWYgKGkgPT0gNCkge1xuXHRcdFx0bWVudUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dDb21wbGV0ZWQpO1xuXHRcdH1cblxuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VIZWFkaW5nKTtcblx0XHRtZW51SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0Y29uc3QgY29tcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUFyZWEpO1xuXHRcdFx0Y29uc3QgY2hlY2tEaXNwbGF5U3RhdGUgPSBjb21wU3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cblx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1NTApIHtcblx0XHRcdFx0aWYgKGNoZWNrRGlzcGxheVN0YXRlKSB7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdFx0XHR9LCAxMCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjbGVhckRldGFpbHMoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZChtZW51SXRlbUltYWdlLCBtZW51SXRlbSk7XG5cdH0pO1xuXG5cdG1lbnVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0XHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSwgMzAwKTtcblx0fSk7XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RNZW51ID0gKCkgPT4ge1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXHRjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHByb2plY3RIZWFkaW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCBwcm9qZWN0RGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdG1lbnVBcmVhLmFwcGVuZChwcm9qZWN0QXJlYSk7XG5cdHByb2plY3RBcmVhLmFwcGVuZChwcm9qZWN0SGVhZGluZ0NvbnRhaW5lciwgcHJvamVjdERpdkNvbnRhaW5lcik7XG5cdHByb2plY3RIZWFkaW5nQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0SGVhZGluZywgYWRkUHJvamVjdEJ1dHRvbik7XG5cdHByb2plY3REaXZDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXG5cdGFkZFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgUHJvamVjdFwiO1xuXHRwcm9qZWN0SGVhZGluZy5pbm5lclRleHQgPSBcIlByb2plY3RzXCI7XG5cdHByb2plY3REaXYuaW5uZXJUZXh0ID0gXCIjIEdlbmVyYWxcIjtcblx0cHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgXCJHZW5lcmFsXCIpO1xuXG5cdHByb2plY3RBcmVhLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWFyZWFcIik7XG5cdHByb2plY3RIZWFkaW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRpbmctY29udGFpbmVyXCIpO1xuXHRwcm9qZWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkaW5nXCIpO1xuXHRwcm9qZWN0RGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdi1jb250YWluZXJcIik7XG5cdHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGl2XCIpO1xuXHRhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcblxuXHRhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdEZvcm0pO1xuXHRwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VIZWFkaW5nKTtcblx0cHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsdGVyVGFza3NCeVByb2plY3QpO1xuXG5cdHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXG5cdFx0Y29uc3QgY29tcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUFyZWEpO1xuXHRcdGNvbnN0IGNoZWNrRGlzcGxheVN0YXRlID0gY29tcFN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MCkge1xuXHRcdFx0aWYgKGNoZWNrRGlzcGxheVN0YXRlKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0XHR9LCAxMCk7XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyRGV0YWlscygpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBvcGVuUHJvamVjdEZvcm0gPSAoKSA9PiB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgcHJvamVjdEZvcm1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgcHJvamVjdFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSwgcHJvamVjdEZvcm1Db250YWluZXIpO1xuXHRwcm9qZWN0Rm9ybUNvbnRhaW5lci5hcHBlbmQocHJvamVjdEZvcm1Db250ZW50KTtcblx0cHJvamVjdEZvcm1Db250ZW50LmFwcGVuZChcblx0XHRwcm9qZWN0VGl0bGVMYWJlbCxcblx0XHRwcm9qZWN0VGl0bGVJbnB1dCxcblx0XHRwcm9qZWN0U3VibWl0QnV0dG9uXG5cdCk7XG5cblx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lci1vdmVybGF5XCIpO1xuXHRwcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cdHByb2plY3RGb3JtQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250ZW50XCIsIFwicHJvamVjdC1mb3JtLWNvbnRlbnRcIik7XG5cdHByb2plY3RTdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIiwgXCJzdWJtaXQtcHJvamVjdC1idXR0b25cIik7XG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWRldGFpbHMtcGFuZWxcIik7XG5cdHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cblx0cHJvamVjdFRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJQcm9qZWN0IE5hbWVcIjtcblx0cHJvamVjdFN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIkNyZWF0ZSBQcm9qZWN0XCI7XG5cblx0cHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBwcm9qZWN0IG5hbWVcIik7XG5cdHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGVcIik7XG5cdHByb2plY3RUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuXHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0cHJvamVjdEZvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cdFx0cHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHRcdHByb2plY3RGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cdH0sIDIwMCk7XG5cblx0cHJvamVjdFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiLCBcImFkZC1wcm9qZWN0XCIpO1xuXHRwcm9qZWN0Rm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcblx0cHJvamVjdEZvcm1Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKHBOYW1lKSA9PiB7XG5cdC8vIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuXHRjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1hcmVhXCIpO1xuXHRjb25zdCBwcm9qZWN0RGl2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWRpdi1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwcm9qZWN0RGl2Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0RGl2KTtcblx0cHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG5cdHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIHBOYW1lKTtcblx0cHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlSGVhZGluZyk7XG5cdHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbHRlclRhc2tzQnlQcm9qZWN0KTtcblxuXHRwcm9qZWN0RGl2LmlubmVyVGV4dCA9IFwiIyBcIiArIHBOYW1lO1xuXHRwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblxuXHRcdGNvbnN0IGNvbXBTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVBcmVhKTtcblx0XHRjb25zdCBjaGVja0Rpc3BsYXlTdGF0ZSA9IGNvbXBTdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcblxuXHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1NTApIHtcblx0XHRcdGlmIChjaGVja0Rpc3BsYXlTdGF0ZSkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdFx0fSwgMjAwKTtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdFx0fSwgMTApO1xuXHRcdFx0fVxuXG5cdFx0XHRjbGVhckRldGFpbHMoKTtcblx0XHR9XG5cdH0pO1xuXG5cdHB1YlN1Yi5wdWJsaXNoKFwicHJvamVjdC11aS1hZGRlZFwiLCBwTmFtZSk7XG59O1xuXG5jb25zdCBjaGFuZ2VIZWFkaW5nID0gKGUpID0+IHtcblx0bGV0IHRpdGxlID1cblx0XHRlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIikgfHxcblx0XHRlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNpZGUtbWVudVwiKSB8fFxuXHRcdGUudGFyZ2V0LmlubmVyVGV4dDtcblx0cmVuZGVyVGFza0hlYWRpbmcodGl0bGUpO1xufTtcblxuZXhwb3J0IHtcblx0Y3JlYXRlSGVhZGVyLFxuXHRjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUsXG5cdGNyZWF0ZUhhbWJ1cmdlcixcblx0Y3JlYXRlU2lkZU1lbnUsXG5cdGNyZWF0ZVByb2plY3RNZW51LFxuXHRhZGRQcm9qZWN0LFxuXHRjaGFuZ2VIZWFkaW5nLFxufTtcbiIsImltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViLXN1YlwiO1xuaW1wb3J0IHsgbG9jYWxTdG9yYWdlQ29tbWl0VGFza3MsIGxvY2FsU3RvcmFnZUNvbW1pdFByb2plY3RzIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG4vL0RhdGEgc3RvcmFnZSBhcnJheTtcbmNvbnN0IHRhc2tzID0gW1xuXHQvLyB7XG5cdC8vIFx0bmFtZTogXCJKdXN0LURvLUl0IEFwcCAtIEd1aWRlXCIsXG5cdC8vIFx0ZGVzYzogXCJJbnNlcnQgaW5zdHJ1Y3Rpb24gb24gaG93IHRvIHVzZSB0aGUgYXBwXCIsXG5cdC8vIFx0ZGF0ZTogXCIxNS8wMy8yMDIzXCIsXG5cdC8vIFx0cHJpb3JpdHk6IFwiaGlnaFwiLFxuXHQvLyBcdHByb2plY3Q6IFwiR2VuZXJhbFwiLFxuXHQvLyBcdHRhc2tJZDogNTAwMCxcblx0Ly8gfSxcbl07XG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGFzayBpdGVtIGRhdGFcbmNvbnN0IGNyZWF0ZVRhc2tEYXRhID0gKCkgPT4ge1xuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xuXHRjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XG5cdGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlXCIpLnZhbHVlO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0J2lucHV0W25hbWU9XCJ0YXNrLXByaW9yaXR5XCJdOmNoZWNrZWQnXG5cdCkudmFsdWU7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlO1xuXHRjb25zdCB0YXNrSWQgPSB0YXNrSWRlbnRpdHlOdW1iZXIuZ2V0SWROdW1iZXIoKTtcblxuXHRjb25zdCB0YXNrT2JqZWN0ID0geyBuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgdGFza0lkIH07XG5cdHB1YlN1Yi5wdWJsaXNoKFwidGFzay1hZGRlZFwiLCB0YXNrT2JqZWN0KTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gc3RvcmUgZGF0YVxuY29uc3Qgc3RvcmVUYXNrRGF0YSA9IChvYmopID0+IHtcblx0dGFza3MucHVzaChvYmopO1xuXHQvLyBjb25zb2xlLmxvZyh0YXNrcyk7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIHJlbW92ZSBkYXRhXG5jb25zdCByZW1vdmVUYXNrRGF0YSA9IChrZXkpID0+IHtcblx0bGV0IGRlbGV0ZWRJbmRleDtcblx0bGV0IHRhc2tQcm9qZWN0O1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRhc2tzW2ldW1widGFza0lkXCJdID09IGtleSkge1xuXHRcdFx0ZGVsZXRlZEluZGV4ID0gaTtcblx0XHRcdHRhc2tQcm9qZWN0ID0gdGFza3NbaV1bXCJwcm9qZWN0XCJdO1xuXHRcdFx0dGFza3Muc3BsaWNlKGksIDEpO1xuXHRcdH1cblx0fVxuXHRwdWJTdWIucHVibGlzaChcInRhc2stZGVsZXRlZFwiLCBkZWxldGVkSW5kZXgsIHRhc2tQcm9qZWN0KTtcblx0Ly8gY29uc29sZS5sb2codGFza3MpO1xufTtcblxuLy9GdW5jdGlvbiB0byBtb2RpZnkgZGF0YVxuY29uc3QgbW9kaWZ5VGFza0RhdGEgPSAoaW5kZXgpID0+IHtcblx0dGFza3NbaW5kZXhdW1wibmFtZVwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKS52YWx1ZTtcblx0dGFza3NbaW5kZXhdW1wiZGVzY1wiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpLnZhbHVlO1xuXHR0YXNrc1tpbmRleF1bXCJkYXRlXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWR1ZVwiKS52YWx1ZTtcblx0dGFza3NbaW5kZXhdW1wicHJpb3JpdHlcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdpbnB1dFtuYW1lPVwidGFzay1wcmlvcml0eVwiXTpjaGVja2VkJ1xuXHQpLnZhbHVlO1xuXHR0YXNrc1tpbmRleF1bXCJwcm9qZWN0XCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKS52YWx1ZTtcblxuXHRjb25zdCBuYW1lUHJvcCA9IHRhc2tzW2luZGV4XVtcIm5hbWVcIl07XG5cdGNvbnN0IGlkUHJvcCA9IHRhc2tzW2luZGV4XVtcInRhc2tJZFwiXTtcblxuXHRwdWJTdWIucHVibGlzaChcInRhc2stbW9kaWZpZWRcIiwgaWRQcm9wLCBuYW1lUHJvcCk7XG59O1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGFzayBJRFxuY29uc3QgaWRHZW5lcmF0b3IgPSAoKSA9PiB7XG5cdGxldCBpZE51bWJlciA9IDEwMDtcblx0Y29uc3QgZ2V0SWROdW1iZXIgPSAoKSA9PiBpZE51bWJlcjtcblx0Y29uc3QgaW5jcmVhc2VJZE51bWJlciA9ICgpID0+IChpZE51bWJlciArPSA1KTtcblx0cmV0dXJuIHtcblx0XHRnZXRJZE51bWJlcixcblx0XHRpbmNyZWFzZUlkTnVtYmVyLFxuXHR9O1xufTtcblxuLy9JbnN0YW5jZSBvZiBpZGVudGl0eVxuY29uc3QgdGFza0lkZW50aXR5TnVtYmVyID0gaWRHZW5lcmF0b3IoKTtcblxuLy9EYXRhIHN0b3JhZ2UgZm9yIGNhY2hpbmcgcG9zaXRpb25zIG9mIHByb2plY3Qgb2JqZWN0c1xuY29uc3QgcHJvamVjdEluZGV4ZXMgPSB7fTtcblxuLy9GdW5jdGlvbiB0byBjYWNoZSBpbmRleCBvZiBlYWNoIGNyZWF0ZWQgdGFzayBieSBwcm9qZWN0c1xuY29uc3QgY2FjaGVJbmRleGVzID0gKHsgcHJvamVjdCB9KSA9PiB7XG5cdGxldCBwb3NpdGlvbiA9IHRhc2tzLmxlbmd0aCAtIDE7XG5cdGlmIChwcm9qZWN0SW5kZXhlc1twcm9qZWN0XSkge1xuXHRcdHByb2plY3RJbmRleGVzW3Byb2plY3RdLnB1c2gocG9zaXRpb24pO1xuXHR9IGVsc2Uge1xuXHRcdHByb2plY3RJbmRleGVzW3Byb2plY3RdID0gW3Bvc2l0aW9uXTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXhlcyk7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIGNvcnJlY3QgaW5kZXhlcyBvZiBjcmVhdGVkIHRhc2tzIGJ5IHByb2plY3RzIGFmdGVyIHRhc2sgZGVsZXRpb25cbmNvbnN0IHJlbW92ZURlbGV0ZWRDYWNoZUluZGV4ID0gKGRlbGV0ZWRUYXNrSW5kZXgsIHRhc2tQcm9qZWN0KSA9PiB7XG5cdHByb2plY3RJbmRleGVzW3Rhc2tQcm9qZWN0XS5mb3JFYWNoKChlbGVtZW50LCBpLCBhKSA9PiB7XG5cdFx0aWYgKGVsZW1lbnQgPT0gZGVsZXRlZFRhc2tJbmRleCkge1xuXHRcdFx0YS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRhZGp1c3RDYWNoZWRJbmRleGVzKGRlbGV0ZWRUYXNrSW5kZXgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBhZGp1c3RDYWNoZWRJbmRleGVzID0gKG51bSkgPT4ge1xuXHRsZXQgcHJvamVjdHMgPSBPYmplY3Qua2V5cyhwcm9qZWN0SW5kZXhlcyk7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcblx0XHRwcm9qZWN0SW5kZXhlc1twcm9qZWN0XSA9IHByb2plY3RJbmRleGVzW3Byb2plY3RdLm1hcCgoaXRlbSkgPT4ge1xuXHRcdFx0cmV0dXJuIGl0ZW0gPiBudW0gPyBpdGVtIC0gMSA6IGl0ZW07XG5cdFx0fSk7XG5cdH0pO1xuXHQvLyBjb25zb2xlLmxvZyhwcm9qZWN0SW5kZXhlcyk7XG59O1xuXG4vL0RhdGEgc3RvcmFnZSBmb3IgbGlzdHMgb2YgcHJvamVjdHNcbmNvbnN0IHByb2plY3RzVWkgPSBbXCJHZW5lcmFsXCJdO1xuXG5jb25zdCBzdG9yZVByb2plY3RzVWkgPSAobmFtZSkgPT4ge1xuXHRwcm9qZWN0c1VpLnB1c2gobmFtZSk7XG59O1xuXG5jb25zdCBjYXRlZ29yaXplQW5kRmlsdGVyID0gKCkgPT4ge1xuXHRjb25zdCBkdWVUb2RheSA9IFtdO1xuXHRjb25zdCBkdWVUaGlzV2VlayA9IFtdO1xuXHRjb25zdCBwYXN0RHVlID0gW107XG5cdGNvbnN0IGNvbXBsZXRlZCA9IFtdO1xuXG5cdGNvbnN0IGFjY2Vzc0RhdGVTdG9yYWdlQ29udHJvbGxlciA9IChrZXkpID0+IHtcblx0XHRsZXQgZm9jdXM7XG5cdFx0c3dpdGNoIChrZXkpIHtcblx0XHRcdGNhc2UgXCJkdWUtdG9kYXlcIjpcblx0XHRcdFx0Zm9jdXMgPSBkdWVUb2RheTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZHVlLXRoaXMtd2Vla1wiOlxuXHRcdFx0XHRmb2N1cyA9IGR1ZVRoaXNXZWVrO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJwYXN0RHVlXCI6XG5cdFx0XHRcdGZvY3VzID0gcGFzdER1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiY29tcGxldGVkXCI6XG5cdFx0XHRcdGZvY3VzID0gY29tcGxldGVkO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaW5wdXQgZXJyb3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gZm9jdXM7XG5cdH07XG5cblx0Y29uc3QgY2hlY2tEYXRlU3RhdHVzID0gKCkgPT4ge1xuXHRcdGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cdFx0bGV0IGN1cnJlbnRXZWVrRGF5cyA9IEFycmF5LmZyb20oQXJyYXkoNykua2V5cygpKS5tYXAoKGlkeCkgPT4ge1xuXHRcdFx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRkLnNldERhdGUoZC5nZXREYXRlKCkgLSBkLmdldERheSgpICsgaWR4KTtcblx0XHRcdHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXHRcdH0pO1xuXG5cdFx0dGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdFx0bGV0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEta2V5PVwiJHt0YXNrW1widGFza0lkXCJdfVwiXWBcblx0XHRcdCk7XG5cdFx0XHRsZXQgdGFza0RhdGUgPSB0YXNrW1wiZGF0ZVwiXTtcblx0XHRcdGlmICh0YXNrRGF0ZSA9PSB0b2RheSkge1xuXHRcdFx0XHRkdWVUb2RheS5wdXNoKHRhc2spO1xuXHRcdFx0XHRkdWVUaGlzV2Vlay5wdXNoKHRhc2spO1xuXHRcdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiLCBcImR1ZS10b2RheVwiKTtcblx0XHRcdFx0dGV4dENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcInRoaXMtd2Vla1wiLCBcInRydWVcIik7XG5cdFx0XHR9IGVsc2UgaWYgKHRhc2tEYXRlIDwgdG9kYXkpIHtcblx0XHRcdFx0cGFzdER1ZS5wdXNoKHRhc2spO1xuXHRcdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiLCBcInBhc3QtZHVlXCIpO1xuXHRcdFx0XHRpZiAoY3VycmVudFdlZWtEYXlzLmluY2x1ZGVzKHRhc2tEYXRlKSkge1xuXHRcdFx0XHRcdHRleHRDb250YWluZXIucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aGlzLXdlZWtcIiwgXCJ0cnVlXCIpO1xuXHRcdFx0XHRcdGR1ZVRoaXNXZWVrLnB1c2godGFzayk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGV4dENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcInRoaXMtd2Vla1wiLCBcImZhbHNlXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgYXNzaWduRGF0ZVN0YXR1cyA9IChvYmopID0+IHtcblx0XHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXHRcdGxldCBjdXJyZW50V2Vla0RheXMgPSBBcnJheS5mcm9tKEFycmF5KDcpLmtleXMoKSkubWFwKChpZHgpID0+IHtcblx0XHRcdGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0ZC5zZXREYXRlKGQuZ2V0RGF0ZSgpIC0gZC5nZXREYXkoKSArIGlkeCk7XG5cdFx0XHRyZXR1cm4gZC50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblx0XHR9KTtcblx0XHRsZXQgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuXHRcdGxldCB0YXNrSWQgPSBvYmpbXCJ0YXNrSWRcIl07XG5cdFx0bGV0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1rZXk9XCIke3Rhc2tJZH1cIl1gKTtcblxuXHRcdGlmICh0YXNrRGF0ZSA9PSB0b2RheSkge1xuXHRcdFx0ZHVlVG9kYXkucHVzaChvYmopO1xuXHRcdFx0ZHVlVGhpc1dlZWsucHVzaChvYmopO1xuXHRcdFx0dGV4dENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwgXCJkdWUtdG9kYXlcIik7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGhpcy13ZWVrXCIsIFwidHJ1ZVwiKTtcblx0XHR9IGVsc2UgaWYgKGN1cnJlbnRXZWVrRGF5cy5pbmNsdWRlcyh0YXNrRGF0ZSkpIHtcblx0XHRcdGR1ZVRoaXNXZWVrLnB1c2gob2JqKTtcblx0XHRcdHRleHRDb250YWluZXIucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aGlzLXdlZWtcIiwgXCJ0cnVlXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGhpcy13ZWVrXCIsIFwiZmFsc2VcIik7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Y2hlY2tEYXRlU3RhdHVzLFxuXHRcdGFzc2lnbkRhdGVTdGF0dXMsXG5cdFx0YWNjZXNzRGF0ZVN0b3JhZ2VDb250cm9sbGVyLFxuXHR9O1xufTtcblxuY29uc3QgZGF0ZUNhdGVnb3JpemVyID0gY2F0ZWdvcml6ZUFuZEZpbHRlcigpO1xuXG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1hZGRlZFwiLCBzdG9yZVRhc2tEYXRhKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIGNhY2hlSW5kZXhlcyk7XG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1hZGRlZFwiLCB0YXNrSWRlbnRpdHlOdW1iZXIuaW5jcmVhc2VJZE51bWJlcik7XG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1hZGRlZFwiLCBsb2NhbFN0b3JhZ2VDb21taXRUYXNrcyk7XG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1kZWxldGVkXCIsIHJlbW92ZURlbGV0ZWRDYWNoZUluZGV4KTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWRlbGV0ZWRcIiwgbG9jYWxTdG9yYWdlQ29tbWl0VGFza3MpO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stbW9kaWZpZWRcIiwgbG9jYWxTdG9yYWdlQ29tbWl0VGFza3MpO1xucHViU3ViLnN1YnNjcmliZShcInByb2plY3QtdWktYWRkZWRcIiwgc3RvcmVQcm9qZWN0c1VpKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0LXVpLWFkZGVkXCIsIGxvY2FsU3RvcmFnZUNvbW1pdFByb2plY3RzKTtcblxuZXhwb3J0IHtcblx0dGFza3MsXG5cdGNyZWF0ZVRhc2tEYXRhLFxuXHRyZW1vdmVUYXNrRGF0YSxcblx0bW9kaWZ5VGFza0RhdGEsXG5cdHByb2plY3RzVWksXG5cdGRhdGVDYXRlZ29yaXplcixcbn07XG4iLCJpbXBvcnQgeyBjcmVhdGVUYXNrRGF0YSwgbW9kaWZ5VGFza0RhdGEsIHByb2plY3RzVWkgfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1kYXRhXCI7XG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlLWhvbWVcIjtcblxuZnVuY3Rpb24gdGFza0Zvcm0oKSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cdGNvbnN0IGZvcm1UaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHRhc2tUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgdGFza0Rlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0QXJlYVwiKTtcblx0Y29uc3QgdGFza0R1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHByaW9yaXR5RmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7XG5cdGNvbnN0IHByaW9yaXR5TGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxlZ2VuZFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5TGFiZWxMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlMYWJlbEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5SW5wdXRIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrUHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrUHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cdC8vIGNvbnN0IGdlbmVyYWxPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQodGFza0Zvcm1Db250YWluZXIsIHByb2plY3RDb250YWluZXJPdmVybGF5KTtcblx0dGFza0Zvcm1Db250YWluZXIuYXBwZW5kKHRhc2tGb3JtQ29udGVudCk7XG5cdHRhc2tGb3JtQ29udGVudC5hcHBlbmQoXG5cdFx0Zm9ybVRpdGxlQ29udGFpbmVyLFxuXHRcdHRhc2tUaXRsZUxhYmVsLFxuXHRcdHRhc2tEZXNjTGFiZWwsXG5cdFx0dGFza0R1ZUxhYmVsLFxuXHRcdHByaW9yaXR5RmllbGRzZXQsXG5cdFx0dGFza1Byb2plY3RMYWJlbCxcblx0XHR0YXNrUHJvamVjdFNlbGVjdCxcblx0XHRzdWJtaXRCdXR0b25cblx0KTtcblx0Zm9ybVRpdGxlQ29udGFpbmVyLmFwcGVuZChmb3JtVGl0bGUsIGNsb3NlKTtcblxuXHRmb3JtVGl0bGUuaW5uZXJUZXh0ID0gXCJOZXcgVGFza1wiO1xuXHRjbG9zZS5pbm5lclRleHQgPSBcIlhcIjtcblx0dGFza1RpdGxlTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrIG5hbWVcIjtcblx0dGFza0Rlc2NMYWJlbC5pbm5lclRleHQgPSBcIlRhc2sgRGVzY3JpcHRpb25cIjtcblx0dGFza0R1ZUxhYmVsLmlubmVyVGV4dCA9IFwiVGFzayBEdWUgQnlcIjtcblx0dGFza1ByaW9yaXR5TGFiZWxMb3cuaW5uZXJUZXh0ID0gXCJMb3dcIjtcblx0dGFza1ByaW9yaXR5TGFiZWxNZWRpdW0uaW5uZXJUZXh0ID0gXCJNZWRpdW1cIjtcblx0dGFza1ByaW9yaXR5TGFiZWxIaWdoLmlubmVyVGV4dCA9IFwiSGlnaFwiO1xuXHRwcmlvcml0eUxlZ2VuZC5pbm5lclRleHQgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xuXHR0YXNrUHJvamVjdExhYmVsLmlubmVyVGV4dCA9IFwiQ2hvb3NlIGEgcHJvamVjdFwiO1xuXHQvLyBnZW5lcmFsT3B0aW9uLmlubmVyVGV4dCA9IFwiR2VuZXJhbFwiO1xuXHRzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXQgVGFza1wiO1xuXG5cdHRhc2tUaXRsZUxhYmVsLmFwcGVuZCh0YXNrVGl0bGVJbnB1dCk7XG5cdHRhc2tEZXNjTGFiZWwuYXBwZW5kKHRhc2tEZXNjSW5wdXQpO1xuXHR0YXNrRHVlTGFiZWwuYXBwZW5kKHRhc2tEdWVJbnB1dCk7XG5cdHByaW9yaXR5RmllbGRzZXQuYXBwZW5kKFxuXHRcdHByaW9yaXR5TGVnZW5kLFxuXHRcdHRhc2tQcmlvcml0eUxhYmVsTG93LFxuXHRcdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLFxuXHRcdHRhc2tQcmlvcml0eUxhYmVsSGlnaFxuXHQpO1xuXHR0YXNrUHJpb3JpdHlMYWJlbExvdy5hcHBlbmQodGFza1ByaW9yaXR5SW5wdXRMb3cpO1xuXHR0YXNrUHJpb3JpdHlMYWJlbE1lZGl1bS5hcHBlbmQodGFza1ByaW9yaXR5SW5wdXRNZWRpdW0pO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guYXBwZW5kKHRhc2tQcmlvcml0eUlucHV0SGlnaCk7XG5cdC8vIHRhc2tQcm9qZWN0U2VsZWN0LmFwcGVuZChnZW5lcmFsT3B0aW9uKTtcblxuXHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblx0dGFza0Zvcm1Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRlbnRcIik7XG5cdGZvcm1UaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZS1jb250YWluZXJcIik7XG5cdGNsb3NlLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idXR0b25cIik7XG5cdGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZVwiKTtcblx0c3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnV0dG9uXCIpO1xuXG5cdHRhc2tUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stdGl0bGVcIik7XG5cdHRhc2tEZXNjTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kZXNjXCIpO1xuXHR0YXNrRHVlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1kdWVcIik7XG5cdHRhc2tQcmlvcml0eUxhYmVsTG93LnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktbG93XCIpO1xuXHR0YXNrUHJpb3JpdHlMYWJlbE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXByaW9yaXR5LW1lZGl1bVwiKTtcblx0dGFza1ByaW9yaXR5TGFiZWxIaWdoLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktaGlnaFwiKTtcblx0dGFza1Byb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLXByb2plY3RcIik7XG5cblx0dGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1kZXNjXCIpO1xuXHR0YXNrRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWR1ZVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRMb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5LWxvd1wiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRNZWRpdW0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5LW1lZGl1bVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcmlvcml0eS1oaWdoXCIpO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJvamVjdFwiKTtcblxuXHR0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay10aXRsZVwiKTtcblx0dGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kZXNjXCIpO1xuXHR0YXNrRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stZHVlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcmlvcml0eVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRNZWRpdW0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stcHJpb3JpdHlcIik7XG5cdHRhc2tQcmlvcml0eUlucHV0SGlnaC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcmlvcml0eVwiKTtcblx0dGFza1Byb2plY3RTZWxlY3Quc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2stcHJvamVjdFwiKTtcblxuXHR0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0dGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dEFyZWFcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRMb3cuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdHRhc2tQcmlvcml0eUlucHV0SGlnaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuXHRjbG9zZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRNZWRpdW0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJtZWRpdW1cIik7XG5cdHRhc2tQcmlvcml0eUlucHV0SGlnaC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhpZ2hcIik7XG5cdHRhc2tEdWVJbnB1dC52YWx1ZSA9IHRvZGF5O1xuXG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblx0dGFza0R1ZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblx0dGFza1Byb2plY3RTZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5yZXF1aXJlZCA9IHRydWU7XG5cblx0Y3JlYXRlU2VsZWN0T3B0aW9ucygpO1xuXG5cdGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcblx0dGFza0Zvcm1Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbnMoKSB7XG5cdGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIik7XG5cdGNvbnN0IG9wdGlvbnMgPSBwcm9qZWN0c1VpO1xuXHRvcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRsZXQgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblx0XHRvcHQuaW5uZXJUZXh0ID0gaXRlbTtcblx0XHRvcHQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgaXRlbSk7XG5cdFx0c2VsZWN0LmFwcGVuZChvcHQpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKGUpIHtcblx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRlbnRcIik7XG5cdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG5cdGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1wcm9qZWN0LWJ1dHRvblwiKTtcblxuXHRpZiAoZS50YXJnZXQgPT0gdGFza0Zvcm1Db250YWluZXIgfHwgZS50YXJnZXQgPT0gY2xvc2VCdXR0b24pIHtcblx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdFx0dGFza0Zvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHRcdHRhc2tGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHByb2plY3RDb250YWluZXJPdmVybGF5LnJlbW92ZSgpO1xuXHRcdFx0dGFza0Zvcm1Db250YWluZXIucmVtb3ZlKCk7XG5cdFx0XHR0YXNrRm9ybUNvbnRlbnQucmVtb3ZlKCk7XG5cdFx0fSwgMzAwKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKFwiZm9ybSBjbG9zZWQgdHJpZ2dlcmVkXCIpO1xufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItb3ZlcmxheVwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGVudFwiKTtcblxuXHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0dGFza0Zvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuXHR0YXNrRm9ybUNvbnRlbnQucmVzZXQoKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5yZW1vdmUoKTtcblx0XHR0YXNrRm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcblx0XHR0YXNrRm9ybUNvbnRlbnQucmVtb3ZlKCk7XG5cdH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xuXHR0YXNrRm9ybSgpO1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRlbnRcIik7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpO1xuXG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWRldGFpbHMtcGFuZWxcIik7XG5cdHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cblx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHRhc2tGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHRcdHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0XHR0YXNrRm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHR9LCAyMDApO1xuXG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiLCBcImNyZWF0ZVwiKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5Rm9ybSh7IG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH0sIGluZGV4KSB7XG5cdHNob3dGb3JtKCk7XG5cdGNvbnN0IF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xuXHRjb25zdCBfZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpO1xuXHRjb25zdCBfZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWVcIik7XG5cdGNvbnN0IF9wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLXByaW9yaXR5LSR7cHJpb3JpdHl9YCk7XG5cdGNvbnN0IF9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcblx0Y29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpO1xuXG5cdF9uYW1lLnZhbHVlID0gbmFtZTtcblx0X2Rlc2MudmFsdWUgPSBkZXNjO1xuXHRfZGF0ZS52YWx1ZSA9IGRhdGU7XG5cdF9wcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcblx0X3Byb2plY3QudmFsdWUgPSBwcm9qZWN0O1xuXHRzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJNb2RpZnkgVGFza1wiO1xuXG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiLCBcIm1vZGlmeVwiKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybShlKSB7XG5cdGNvbnNvbGUubG9nKFwiU3VibWl0IGZvcm0gcHJvY2VzcyBpbml0aWF0ZWRcIik7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBmb3JtQWN0aW9uID0gZS50YXJnZXRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpXG5cdFx0LmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIpO1xuXG5cdGNvbnN0IHRhc2tJbmRleCA9IGUudGFyZ2V0XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKVxuXHRcdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblxuXHRpZiAoZm9ybUFjdGlvbiA9PSBcImNyZWF0ZVwiKSB7XG5cdFx0Y3JlYXRlVGFza0RhdGEoKTtcblx0XHRyZXNldEZvcm0oKTtcblx0fSBlbHNlIGlmIChmb3JtQWN0aW9uID09IFwibW9kaWZ5XCIpIHtcblx0XHRtb2RpZnlUYXNrRGF0YSh0YXNrSW5kZXgpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9IGVsc2UgaWYgKGZvcm1BY3Rpb24gPT0gXCJhZGQtcHJvamVjdFwiKSB7XG5cdFx0Y29uc3QgcHJvamVjdE5hbWUgPSBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlO1xuXHRcdGFkZFByb2plY3QocHJvamVjdE5hbWUpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHRhc2tGb3JtLCBjbG9zZUZvcm0sIHNob3dGb3JtLCBtb2RpZnlGb3JtLCBzdWJtaXRGb3JtIH07XG4iLCJpbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1Yi1zdWJcIjtcbmltcG9ydCB7IHRhc2tzLCByZW1vdmVUYXNrRGF0YSwgZGF0ZUNhdGVnb3JpemVyIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stZGF0YVwiO1xuaW1wb3J0IHsgcmVuZGVyRGV0YWlscywgc2hvd0RldGFpbHMgfSBmcm9tIFwiLi9jcmVhdGUtZGV0YWlscy1wYW5lbFwiO1xuaW1wb3J0IHsgbW9kaWZ5Rm9ybSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWZvcm1cIjtcblxuZnVuY3Rpb24gcmVuZGVyVGFza0hlYWRpbmcoZGF0YSA9IFwiQWxsIHRhc2tzXCIpIHtcblx0Y29uc3QgaGVhZGluZ1R3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcblx0aWYgKGhlYWRpbmdUd28pIHtcblx0XHRoZWFkaW5nVHdvLmlubmVyVGV4dCA9IGRhdGE7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXHR0YXNrc0FyZWEuYXBwZW5kKGhlYWRpbmcpO1xuXHRoZWFkaW5nLmlubmVyVGV4dCA9IGRhdGE7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2sob2JqKSB7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRhc2tDaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrQ2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgdGFza0NoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCB0YXNrQnV0dG9uc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdHRhc2tzQXJlYS5hcHBlbmQodGFza0NvbnRhaW5lcik7XG5cdHRhc2tDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyLCB0ZXh0Q29udGFpbmVyKTtcblx0Y2hlY2tDb250YWluZXIuYXBwZW5kKHRhc2tDaGVja0xhYmVsKTtcblx0dGV4dENvbnRhaW5lci5hcHBlbmQodGFza05hbWUsIHRhc2tCdXR0b25zQXJlYSk7XG5cdHRhc2tDaGVja0xhYmVsLmFwcGVuZCh0YXNrQ2hlY2tJbnB1dCwgdGFza0NoZWNrU3Bhbik7XG5cdHRhc2tCdXR0b25zQXJlYS5hcHBlbmQodGFza0VkaXQsIHRhc2tEZWxldGUpO1xuXG5cdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuXHRjaGVja0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2stY29udGFpbmVyXCIpO1xuXHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcblx0dGV4dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCBvYmpbXCJ0YXNrSWRcIl0pO1xuXHR0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBvYmpbXCJwcm9qZWN0XCJdKTtcblx0dGFza0NoZWNrU3Bhbi5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtc3BhblwiKTtcblx0dGFza0NoZWNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXHR0YXNrQnV0dG9uc0FyZWEuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uLWFyZWFcIik7XG5cdHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJtb2RpZnktYnV0dG9uXCIpO1xuXHR0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xuXG5cdHRhc2tOYW1lLmlubmVyVGV4dCA9IG9ialtcIm5hbWVcIl07XG5cdHRhc2tFZGl0LmlubmVyVGV4dCA9IFwiTW9kaWZ5XCI7XG5cdHRhc2tEZWxldGUuaW5uZXJUZXh0ID0gXCJEZWxldGVcIjtcblxuXHR0ZXh0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0ZXh0Q29udGFpbmVyRXZlbnRDb250cm9sbGVyKTtcblx0Y2hlY2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGlzQ2hlY2tlZCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck1vZGlmaWVkVGFzayhpZFByb3AsIG5hbWVQcm9wKSB7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1rZXk9XCIke2lkUHJvcH1cIl1gKTtcblx0Y29uc3QgdGFza05hbWUgPSB0ZXh0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG5cdHRhc2tOYW1lLmlubmVyVGV4dCA9IG5hbWVQcm9wO1xufVxuXG5jb25zdCB0ZXh0Q29udGFpbmVyRXZlbnRDb250cm9sbGVyID0gKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSBcIm1vZGlmeS1idXR0b25cIikge1xuXHRcdG1vZGlmeVRhc2soZSk7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSBcImRlbGV0ZS1idXR0b25cIikge1xuXHRcdGRlbGV0ZVRhc2soZSk7XG5cdFx0Y29uc29sZS5sb2codGFza3MpO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIHtcblx0XHRzZWxlY3RUYXNrKGUpO1xuXHRcdHNob3dEZXRhaWxzKCk7XG5cdH1cbn07XG5cbmNvbnN0IHNlbGVjdFRhc2sgPSAoZSkgPT4ge1xuXHRjb25zdCBvYmpLZXkgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0YXNrc1tpXVtcInRhc2tJZFwiXSA9PSBvYmpLZXkpIHtcblx0XHRcdHJlbmRlckRldGFpbHModGFza3NbaV0sIGkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgbW9kaWZ5VGFzayA9IChlKSA9PiB7XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBlLmNvbXBvc2VkUGF0aCgpWzJdO1xuXHRjb25zdCBvYmpLZXkgPSB0ZXh0Q29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRhc2tzW2ldW1widGFza0lkXCJdID09IG9iaktleSkge1xuXHRcdFx0bW9kaWZ5Rm9ybSh0YXNrc1tpXSwgaSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKGUpID0+IHtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGUuY29tcG9zZWRQYXRoKClbM107XG5cdGNvbnN0IHRleHRDb250YWluZXIgPSBlLmNvbXBvc2VkUGF0aCgpWzJdO1xuXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLW91dFwiKTtcblx0Y29uc3Qgb2JqS2V5ID0gdGV4dENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0dGFza0NvbnRhaW5lci5yZW1vdmUoKTtcblx0fSwgMTAwMCk7XG5cblx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLXVpLXJlbW92ZWRcIiwgb2JqS2V5KTtcbn07XG5cbmNvbnN0IGZpbHRlclRhc2tzQnlQcm9qZWN0ID0gKGUpID0+IHtcblx0Y29uc3QgcHJvamVjdE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgZWxpZ2libGUgPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvckFsbChcblx0XHRgW2RhdGEtcHJvamVjdD1cIiR7cHJvamVjdE5hbWV9XCJdYFxuXHQpO1xuXHRjb25zdCBhbGxUYXNrcyA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXHRjb25zdCBoVHdvID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcblxuXHRbLi4uYWxsVGFza3NdLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoaXRlbSAhPSBoVHdvKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Wy4uLmVsaWdpYmxlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0aWYgKCFpdGVtLmdldEF0dHJpYnV0ZShcImNvbXBsZXRlXCIpKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBmaWx0ZXJUYXNrc0J5RGF0ZSA9IChlKSA9PiB7XG5cdGNvbnN0IGRhdGVNZW51ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2lkZS1tZW51XCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IGhUd28gPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXHRjb25zdCBhbGxUYXNrcyA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXHRsZXQgZWxpZ2libGU7XG5cblx0aWYgKGRhdGVNZW51ID09IFwiUGFzdCBkdWVcIikge1xuXHRcdGVsaWdpYmxlID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNhdGVnb3J5PVwicGFzdC1kdWVcIl0nKTtcblx0fSBlbHNlIGlmIChkYXRlTWVudSA9PSBcIkR1ZSB0b2RheVwiKSB7XG5cdFx0ZWxpZ2libGUgPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2F0ZWdvcnk9XCJkdWUtdG9kYXlcIl0nKTtcblx0fSBlbHNlIGlmIChkYXRlTWVudSA9PSBcIkR1ZSB0aGlzIHdlZWtcIikge1xuXHRcdGVsaWdpYmxlID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0aGlzLXdlZWs9XCJ0cnVlXCJdJyk7XG5cdH1cblxuXHRbLi4uYWxsVGFza3NdLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoaXRlbSAhPSBoVHdvKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH1cblx0fSk7XG5cblx0Wy4uLmVsaWdpYmxlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0aWYgKCFpdGVtLmdldEF0dHJpYnV0ZShcImNvbXBsZXRlXCIpKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBzaG93QWxsVGFza3MgPSAoKSA9PiB7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgYWxsVGFza3MgPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgaFR3byA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG5cdFsuLi5hbGxUYXNrc10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGlmIChpdGVtICE9IGhUd28gJiYgIWl0ZW0uZ2V0QXR0cmlidXRlKFwiY29tcGxldGVcIikpIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSBlbHNlIGlmIChpdGVtLmdldEF0dHJpYnV0ZShcImNvbXBsZXRlXCIpKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBpc0NoZWNrZWQgPSAoZSkgPT4ge1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG5cdGNvbnN0IGRhdGFLZXkgPSB0YXNrQ29udGFpbmVyXG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1jb250YWluZXJcIilcblx0XHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik7XG5cdC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcblx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHR0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNvbXBsZXRlXCIsIFwidHJ1ZVwiKTtcblx0XHR0YXNrQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBcIiM4ZWNjNTRcIjtcblx0XHR0YXNrQ29udGFpbmVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrZWQtYW5pbWF0ZS1vdXRcIik7XG5cdFx0fSwgMTAwMCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH0sIDIwMDApO1xuXHRcdHB1YlN1Yi5wdWJsaXNoKFwidGFzay11aS1yZW1vdmVkXCIsIGRhdGFLZXkpO1xuXHR9XG5cdC8vIGVsc2Uge1xuXHQvLyBcdHRhc2tDb250YWluZXIucmVtb3ZlQXR0cmlidXRlKFwiY29tcGxldGVcIik7XG5cdC8vIFx0dGFza0NvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTNmMGZmXCI7XG5cdC8vIFx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0Ly8gfVxufTtcblxuY29uc3Qgc2hvd0NvbXBsZXRlZCA9ICgpID0+IHtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRjb25zdCBhbGxUYXNrcyA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXHRjb25zdCBlbGlnaWJsZSA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKCdbY29tcGxldGU9XCJ0cnVlXCJdJyk7XG5cdGNvbnN0IGhUd28gPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXHRbLi4uYWxsVGFza3NdLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoaXRlbSAhPSBoVHdvKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdH1cblx0fSk7XG5cdFsuLi5lbGlnaWJsZV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZC1hbmltYXRlLW91dFwiKTtcblx0fSk7XG59O1xuXG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1hZGRlZFwiLCByZW5kZXJUYXNrKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIGRhdGVDYXRlZ29yaXplci5hc3NpZ25EYXRlU3RhdHVzKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLXVpLXJlbW92ZWRcIiwgcmVtb3ZlVGFza0RhdGEpO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stbW9kaWZpZWRcIiwgcmVuZGVyTW9kaWZpZWRUYXNrKTtcblxuZXhwb3J0IHtcblx0cmVuZGVyVGFza0hlYWRpbmcsXG5cdHJlbmRlclRhc2ssXG5cdGZpbHRlclRhc2tzQnlQcm9qZWN0LFxuXHRzaG93QWxsVGFza3MsXG5cdGZpbHRlclRhc2tzQnlEYXRlLFxuXHRzaG93Q29tcGxldGVkLFxufTtcbiIsImNsYXNzIFB1YlN1YiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudHJhY2tlciA9IHtcblx0XHRcdC8va2V5OiBhY3Rpdml0eU5hbWUsIHZhbHVlOiBbZnVuY3NdXG5cdFx0fTtcblx0fVxuXHRzdWJzY3JpYmUoYWN0aXZpdHlOYW1lLCBmdW5jKSB7XG5cdFx0aWYgKHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdKSB7XG5cdFx0XHR0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXS5wdXNoKGZ1bmMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXSA9IFtmdW5jXTtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZShhY3Rpdml0eU5hbWUsIGZ1bmMpIHtcblx0XHRjb25zdCBmdW5jQXJyYXkgPSB0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXTtcblx0XHRjb25zdCBmdW5jSW5kZXggPSBmdW5jQXJyYXkuaW5kZXhPZihmdW5jKTtcblx0XHRpZiAoZnVuY0luZGV4ID4gLTEpIHtcblx0XHRcdGZ1bmNBcnJheS5zcGxpY2UoZnVuY0luZGV4LCAxKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaXNoKGFjdGl2aXR5TmFtZSwgLi4uYXJncykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdKSkge1xuXHRcdFx0dGhpcy50cmFja2VyW2FjdGl2aXR5TmFtZV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpdGVtLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IHB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiaW1wb3J0IHsgdGFza3MsIHByb2plY3RzVWkgfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1kYXRhXCI7XG5pbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1Yi1zdWJcIjtcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGUtaG9tZVwiO1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VDb21taXRUYXNrcyA9ICgpID0+IHtcblx0bGV0IHNlcmlhbGl6ZWRUYXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrRGF0YVwiLCBzZXJpYWxpemVkVGFza3MpO1xuXHRjb25zb2xlLndhcm4oXCJsb2NhbCBzdG9yYWdlIHRhc2tEYXRhIHVwZGF0ZWRcIik7XG59O1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VSZXRyaWV2ZVRhc2tzID0gKCkgPT4ge1xuXHRsZXQgZGVzZXJpYWxpemVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza0RhdGFcIikpO1xuXHRyZXR1cm4gZGVzZXJpYWxpemVkVGFza3M7XG59O1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VDb21taXRQcm9qZWN0cyA9ICgpID0+IHtcblx0bGV0IHNlcmlhbGl6ZWRQcm9qZWN0cyA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RzVWkpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzRGF0YVwiLCBzZXJpYWxpemVkUHJvamVjdHMpO1xuXHRjb25zb2xlLndhcm4oXCJsb2NhbCBzdG9yYWdlIHByb2plY3REYXRhIHVwZGF0ZWRcIik7XG59O1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VSZXRyaWV2ZVByb2plY3RzID0gKCkgPT4ge1xuXHRsZXQgZGVzZXJpYWxpemVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNEYXRhXCIpKTtcblx0cmV0dXJuIGRlc2VyaWFsaXplZFByb2plY3RzO1xufTtcblxuY29uc3QgcGFnZUxvYWRlciA9ICgpID0+IHtcblx0bGV0IGxvY2FsU3RvcmFnZVRhc2tEYXRhID0gbG9jYWxTdG9yYWdlUmV0cmlldmVUYXNrcygpO1xuXHRsZXQgbG9jYWxTdG9yYWdlUHJvamVjdERhdGEgPSBsb2NhbFN0b3JhZ2VSZXRyaWV2ZVByb2plY3RzKCk7XG5cblx0aWYgKGxvY2FsU3RvcmFnZVRhc2tEYXRhKSB7XG5cdFx0bG9jYWxTdG9yYWdlVGFza0RhdGEuZm9yRWFjaCgodGFzaywgaSwgYSkgPT4ge1xuXHRcdFx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLWFkZGVkXCIsIHRhc2spO1xuXHRcdH0pO1xuXHR9XG5cdGlmIChsb2NhbFN0b3JhZ2VQcm9qZWN0RGF0YSkge1xuXHRcdGxvY2FsU3RvcmFnZVByb2plY3REYXRhLmZvckVhY2goKHByb2plY3QsIGkpID0+IHtcblx0XHRcdGlmIChpID4gMCkge1xuXHRcdFx0XHRhZGRQcm9qZWN0KHByb2plY3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQge1xuXHRsb2NhbFN0b3JhZ2VDb21taXRUYXNrcyxcblx0bG9jYWxTdG9yYWdlQ29tbWl0UHJvamVjdHMsXG5cdGxvY2FsU3RvcmFnZVJldHJpZXZlVGFza3MsXG5cdGxvY2FsU3RvcmFnZVJldHJpZXZlUHJvamVjdHMsXG5cdHBhZ2VMb2FkZXIsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuXHRjcmVhdGVIZWFkZXIsXG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSxcblx0Y3JlYXRlSGFtYnVyZ2VyLFxuXHRjcmVhdGVTaWRlTWVudSxcblx0Y3JlYXRlUHJvamVjdE1lbnUsXG59IGZyb20gXCIuL2NyZWF0ZS1ob21lXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrSGVhZGluZyB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLXBhbmVsXCI7XG5pbXBvcnQgeyBwYWdlTG9hZGVyIH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBjcmVhdGVJbnRlcmZhY2UgPSAoKSA9PiB7XG5cdGNyZWF0ZUhlYWRlcigpO1xuXHRjcmVhdGVIYW1idXJnZXIoKTtcblx0Y3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlKCk7XG5cdGNyZWF0ZVNpZGVNZW51KCk7XG5cdGNyZWF0ZVByb2plY3RNZW51KCk7XG5cdHJlbmRlclRhc2tIZWFkaW5nKCk7XG5cdHBhZ2VMb2FkZXIoKTtcbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjcmVhdGVJbnRlcmZhY2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9