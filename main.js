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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v8.4.14,\n* Autoprefixer: v10.4.7\n* Browsers: last 4 version\n*/\n\n:root {\n\tfont-family: \"Varela Round\", sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t--divider-color: #ecf4ff;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n\tflex-wrap: nowrap;\n}\n\n.logo-area p {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n\twhite-space: nowrap;\n\t/* border: 1px solid red; */\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bold;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: row;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground-color: #fff;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n\toverflow-y: scroll;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tscrollbar-color: rgb(93, 150, 189);\n\tscrollbar-width: thin;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 0.25rem solid white;\n\tbackground-color: rgba(0, 61, 140, 0.6);\n\t-webkit-backdrop-filter: blur(5px);\n\tbackdrop-filter: blur(5px);\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\t-webkit-transform: translateX(-350px);\n\t-ms-transform: translateX(-350px);\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\t-webkit-transform: translateX(500px);\n\t-ms-transform: translateX(500px);\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none !important;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(93, 150, 189);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-size: 1.55rem;\n\tmargin: 1.3rem 4rem;\n\tcolor: #043584;\n\ttext-align: left;\n}\n\n.task-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-animation: slide-in 1.8s ease-out forwards;\n\tanimation: slide-in 1.2s ease-out forwards;\n}\n\n.animate-out {\n\t-webkit-animation: slide-out 1s ease-in-out forwards;\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n.checked-animate-out {\n\t-webkit-animation: slide-out 1.5s ease-in-out forwards;\n\tanimation: slide-out 1.5s ease-in-out forwards;\n}\n\n@-webkit-keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 1rem 0;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n}\n\n.task-container p {\n\tmargin: 0 0.5rem 0 2rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\t/* margin: auto 0.5rem; */\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n\t/* pointer-events: none; */\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\t-webkit-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 0.5rem;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1.2rem;\n\twidth: 1.25rem;\n\tmargin-right: 1rem;\n\tpadding: 0.25rem;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n\tborder: 2px solid #fff;\n}\n\n.details-divider {\n\theight: 2px;\n\tbackground-color: #b2d5fc;\n\tmargin-top: 4.3rem;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.details-divider2 {\n\theight: 2px;\n\tbackground-color: #ffffff;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tmargin-bottom: 2.25rem;\n}\n\n.details-title {\n\tpadding: 1.5rem;\n\tfont-size: 1.3rem;\n\t/* text-transform: uppercase; */\n\ttext-align: left;\n\tcolor: #043584;\n\tmargin-right: 1rem;\n\tmargin-left: 1rem;\n\tmargin-top: 2.25rem;\n\tmargin-bottom: 2.25rem;\n\tmax-width: 90%;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tfont-weight: bold;\n}\n\n.project,\n.priority,\n.due-date {\n\tdisplay: block;\n\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #bc3939;\n\tbackground: var(--white);\n\tmargin: 1rem 1rem 1rem 1rem;\n\tpadding: 0.65rem 1rem;\n\tborder-radius: 5px;\n}\n\n.due-date {\n\tmargin-bottom: 2.25rem;\n}\n\n.project {\n\tmargin-top: 2.25rem;\n}\n\n.project-priority-text {\n\tcolor: #043584;\n}\n\n.details-description {\n\tmax-width: 90%;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tcolor: #043584;\n\tbackground: #fff;\n\tpadding: 0.65rem 1rem;\n\tfont-size: 0.75rem;\n\tline-height: 1.75rem;\n\tborder-radius: 5px;\n\tmin-height: 100px;\n}\n\n.desc-title {\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.details-edit-button {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 1.2rem;\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin-left: 1rem;\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #ffffff;\n\tcursor: pointer;\n}\n\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n}\n\n.editable {\n\tborder: 1px solid red;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: start;\n\t-ms-flex-align: start;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: -o-linear-gradient(45deg, #0d3562, #266abe);\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 250px);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela Round;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content fieldset {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tfont-family: Varela Round;\n}\n\n.form-content option {\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela Round;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\t-webkit-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\n\n/*Project Form*/\n\n.project-area {\n\tmargin-top: 2.5rem;\n\t/* height: auto; */\n\tpadding: 0;\n\t/* overflow-y: scroll; */\n\t/* position: relative; */\n}\n\n.project-button {\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmargin: 0rem 0.5rem 0rem 0.5rem;\n\twidth: 7rem;\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n\t-webkit-transition: 0.3s all ease-in-out;\n\t-o-transition: 0.3s all ease-in-out;\n\ttransition: 0.3s all ease-in-out;\n\t/* position: absolute;\n\ttop: 415px; */\n}\n\n.project-form-content {\n\tpadding-top: 2.5rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-transform: scale(0);\n\t-ms-transform: scale(0);\n\ttransform: scale(0);\n}\n\n.project-form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.project-heading-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-top: 1px solid var(--divider-color);\n\tborder-bottom: 1px solid var(--divider-color);\n\t/* border: 1px solid yellow; */\n}\n\n.project-heading {\n\tpadding: 1rem 0.5rem 1rem 1.5rem;\n\tmargin: 0;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\n\t/* background-color: #eff4fa; */\n}\n\n.project-div-container {\n\t/* border: 1px solid red; */\n\tpadding-bottom: 1.5rem;\n\tmax-height: 20rem;\n\toverflow-y: scroll;\n\tscrollbar-color: rgb(93, 150, 189);\n\tscrollbar-width: thin;\n}\n\n.project-div {\n\tpadding: 0.75rem 1rem 0.75rem 3rem;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n\t-webkit-transition: all 0.2s ease-out;\n\t-o-transition: all 0.2s ease-out;\n\ttransition: all 0.2s ease-out;\n}\n\n.project-div-container::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.project-div-container::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.project-div-container::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.project-div-container::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding-right: 3rem;\n\t\tpadding-left: 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\t-webkit-transform: rotate(360deg) scale(1.5);\n\t\t-ms-transform: rotate(360deg) scale(1.5);\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\t-webkit-transform: translateX(10px);\n\t\t-ms-transform: translateX(10px);\n\t\ttransform: translateX(10px);\n\t}\n\n\t.project-div:hover {\n\t\tcolor: var(--white);\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\t-webkit-transform: scale(1.25) translateX(5px);\n\t\t-ms-transform: scale(1.25) translateX(5px);\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\t-webkit-transform: scale(1.25);\n\t\t-ms-transform: scale(1.25);\n\t\ttransform: scale(1.25);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n\n\t.details-edit-button:hover {\n\t\tbackground: #bc3939;\n\t\tcolor: #fff;\n\t}\n\n\t.details-edit-button:focus {\n\t\tbackground: #871b1b;\n\t\tcolor: #fff;\n\t}\n\n\t.project-button:hover {\n\t\twidth: 8rem;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t\tborder-right: 2px solid var(--divider-color);\n\t}\n\n\t.project-div-container {\n\t\tmax-height: 7rem;\n\t\t/* border: 1px solid #a3c5f6; */\n\t\toverflow-y: scroll;\n\t\tpadding-bottom: 6rem;\n\t}\n\n\t.project-div {\n\t\tfont-size: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.logo-area {\n\t\tpadding-right: 10px;\n\t}\n\n\t.logo-area p {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1rem;\n\t\tmargin: 0;\n\t}\n\n\t.header-menu {\n\t\tpadding-left: 10px;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.menu-item-container {\n\t\tpadding: 0.8rem 1.25rem 0.8rem 1.25rem;\n\t}\n\n\t.menu-item {\n\t\tfont-size: 1rem;\n\t}\n\n\t.details-area {\n\t\tmax-width: 265px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\t/* margin-bottom: 1rem; */\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\t-webkit-box-align: start;\n\t\t-ms-flex-align: start;\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n\n\t.project-heading {\n\t\tfont-size: 1rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v8.4.14,\n* Autoprefixer: v10.4.7\n* Browsers: last 4 version\n*/\n\n:root {\n\tfont-family: \"Varela Round\", sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t--divider-color: #ecf4ff;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n\tflex-wrap: nowrap;\n}\n\n.logo-area p {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n\twhite-space: nowrap;\n\t/* border: 1px solid red; */\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bold;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: row;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground-color: #fff;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n\toverflow-y: scroll;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tscrollbar-color: rgb(93, 150, 189);\n\tscrollbar-width: thin;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 0.25rem solid white;\n\tbackground-color: rgba(0, 61, 140, 0.6);\n\t-webkit-backdrop-filter: blur(5px);\n\tbackdrop-filter: blur(5px);\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\t-webkit-transform: translateX(-350px);\n\t-ms-transform: translateX(-350px);\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\t-webkit-transform: translateX(500px);\n\t-ms-transform: translateX(500px);\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none !important;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(93, 150, 189);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-size: 1.55rem;\n\tmargin: 1.3rem 4rem;\n\tcolor: #043584;\n\ttext-align: left;\n}\n\n.task-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-animation: slide-in 1.8s ease-out forwards;\n\tanimation: slide-in 1.2s ease-out forwards;\n}\n\n.animate-out {\n\t-webkit-animation: slide-out 1s ease-in-out forwards;\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n.checked-animate-out {\n\t-webkit-animation: slide-out 1.5s ease-in-out forwards;\n\tanimation: slide-out 1.5s ease-in-out forwards;\n}\n\n@-webkit-keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 1rem 0;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n}\n\n.task-container p {\n\tmargin: 0 0.5rem 0 2rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\t/* margin: auto 0.5rem; */\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n\t/* pointer-events: none; */\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\t-webkit-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 0.5rem;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1.2rem;\n\twidth: 1.25rem;\n\tmargin-right: 1rem;\n\tpadding: 0.25rem;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n\tborder: 2px solid #fff;\n}\n\n.details-divider {\n\theight: 2px;\n\tbackground-color: #b2d5fc;\n\tmargin-top: 4.3rem;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n}\n\n.details-divider2 {\n\theight: 2px;\n\tbackground-color: #ffffff;\n\tborder: none;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tmargin-bottom: 2.25rem;\n}\n\n.details-title {\n\tpadding: 1.5rem;\n\tfont-size: 1.3rem;\n\t/* text-transform: uppercase; */\n\ttext-align: left;\n\tcolor: #043584;\n\tmargin-right: 1rem;\n\tmargin-left: 1rem;\n\tmargin-top: 2.25rem;\n\tmargin-bottom: 2.25rem;\n\tmax-width: 90%;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tfont-weight: bold;\n}\n\n.project,\n.priority,\n.due-date {\n\tdisplay: block;\n\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #bc3939;\n\tbackground: var(--white);\n\tmargin: 1rem 1rem 1rem 1rem;\n\tpadding: 0.65rem 1rem;\n\tborder-radius: 5px;\n}\n\n.due-date {\n\tmargin-bottom: 2.25rem;\n}\n\n.project {\n\tmargin-top: 2.25rem;\n}\n\n.project-priority-text {\n\tcolor: #043584;\n}\n\n.details-description {\n\tmax-width: 90%;\n\tmargin-left: 1rem;\n\tmargin-right: 1rem;\n\tcolor: #043584;\n\tbackground: #fff;\n\tpadding: 0.65rem 1rem;\n\tfont-size: 0.75rem;\n\tline-height: 1.75rem;\n\tborder-radius: 5px;\n\tmin-height: 100px;\n}\n\n.desc-title {\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-size: 0.75rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.details-edit-button {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 1.2rem;\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin-left: 1rem;\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #ffffff;\n\tcursor: pointer;\n}\n\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n}\n\n.editable {\n\tborder: 1px solid red;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: start;\n\t-ms-flex-align: start;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: -o-linear-gradient(45deg, #0d3562, #266abe);\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 250px);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela Round;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content fieldset {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tfont-family: Varela Round;\n}\n\n.form-content option {\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela Round;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\t-webkit-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\n\n/*Project Form*/\n\n.project-area {\n\tmargin-top: 2.5rem;\n\t/* height: auto; */\n\tpadding: 0;\n\t/* overflow-y: scroll; */\n\t/* position: relative; */\n}\n\n.project-button {\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmargin: 0rem 0.5rem 0rem 0.5rem;\n\twidth: 7rem;\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n\t-webkit-transition: 0.3s all ease-in-out;\n\t-o-transition: 0.3s all ease-in-out;\n\ttransition: 0.3s all ease-in-out;\n\t/* position: absolute;\n\ttop: 415px; */\n}\n\n.project-form-content {\n\tpadding-top: 2.5rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-transform: scale(0);\n\t-ms-transform: scale(0);\n\ttransform: scale(0);\n}\n\n.project-form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.project-heading-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-top: 1px solid var(--divider-color);\n\tborder-bottom: 1px solid var(--divider-color);\n\t/* border: 1px solid yellow; */\n}\n\n.project-heading {\n\tpadding: 1rem 0.5rem 1rem 1.5rem;\n\tmargin: 0;\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\n\t/* background-color: #eff4fa; */\n}\n\n.project-div-container {\n\t/* border: 1px solid red; */\n\tpadding-bottom: 1.5rem;\n\tmax-height: 20rem;\n\toverflow-y: scroll;\n\tscrollbar-color: rgb(93, 150, 189);\n\tscrollbar-width: thin;\n}\n\n.project-div {\n\tpadding: 0.75rem 1rem 0.75rem 3rem;\n\tfont-size: 1.1rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n\t-webkit-transition: all 0.2s ease-out;\n\t-o-transition: all 0.2s ease-out;\n\ttransition: all 0.2s ease-out;\n}\n\n.project-div-container::-webkit-scrollbar {\n\twidth: 6px;\n}\n\n.project-div-container::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.project-div-container::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.project-div-container::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding-right: 3rem;\n\t\tpadding-left: 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\t-webkit-transform: rotate(360deg) scale(1.5);\n\t\t-ms-transform: rotate(360deg) scale(1.5);\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\t-webkit-transform: translateX(10px);\n\t\t-ms-transform: translateX(10px);\n\t\ttransform: translateX(10px);\n\t}\n\n\t.project-div:hover {\n\t\tcolor: var(--white);\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\t-webkit-transform: scale(1.25) translateX(5px);\n\t\t-ms-transform: scale(1.25) translateX(5px);\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\t-webkit-transform: scale(1.25);\n\t\t-ms-transform: scale(1.25);\n\t\ttransform: scale(1.25);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n\n\t.details-edit-button:hover {\n\t\tbackground: #bc3939;\n\t\tcolor: #fff;\n\t}\n\n\t.details-edit-button:focus {\n\t\tbackground: #871b1b;\n\t\tcolor: #fff;\n\t}\n\n\t.project-button:hover {\n\t\twidth: 8rem;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t\tborder-right: 2px solid var(--divider-color);\n\t}\n\n\t.project-div-container {\n\t\tmax-height: 7rem;\n\t\t/* border: 1px solid #a3c5f6; */\n\t\toverflow-y: scroll;\n\t\tpadding-bottom: 6rem;\n\t}\n\n\t.project-div {\n\t\tfont-size: 1rem;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.logo-area {\n\t\tpadding-right: 10px;\n\t}\n\n\t.logo-area p {\n\t\tfont-size: 1.3rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1rem;\n\t\tmargin: 0;\n\t}\n\n\t.header-menu {\n\t\tpadding-left: 10px;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.menu-item-container {\n\t\tpadding: 0.8rem 1.25rem 0.8rem 1.25rem;\n\t}\n\n\t.menu-item {\n\t\tfont-size: 1rem;\n\t}\n\n\t.details-area {\n\t\tmax-width: 265px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\t/* margin-bottom: 1rem; */\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\t-webkit-box-align: start;\n\t\t-ms-flex-align: start;\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n\n\t.project-heading {\n\t\tfont-size: 1rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQXdCLHNCQUFzQixLQUFLLEdBQUcsU0FBUyxvRkFBb0YsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sY0FBYyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFL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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIseURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFNBQVM7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxpRUFBYztBQUNoQjtBQUNBLEdBQUc7QUFDSCxFQUFFLGlFQUFjO0FBQ2hCO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRSx3REFBVTtBQUNaO0FBQ0E7QUFDQTs7QUFFaUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlQbEM7QUFDNkM7QUFDUjtBQUNwQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELE9BQU87QUFDbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGNBQWMsb0RBQUs7QUFDbkI7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFLGtFQUFXO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksMkRBQVksRUFBRTtBQUNuQyxNQUFNLG9EQUFLO0FBQ1gsR0FBRyxvRUFBYSxDQUFDLG9EQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixJQUFJLDJEQUFZLEVBQUU7QUFDbkMsTUFBTSxvREFBSztBQUNYLEdBQUcsNkRBQVUsQ0FBQyxvREFBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyx3REFBYztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUUsd0RBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSwwREFBZ0I7QUFDaEIsMERBQWdCLGVBQWUsK0VBQWdDO0FBQy9ELDBEQUFnQixvQkFBb0IsNkRBQWM7QUFDbEQsMERBQWdCOztBQVNkOzs7Ozs7Ozs7Ozs7Ozs7QUNuT0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNpQztBQUN4QjtBQUNZOztBQUUzQztBQUNBLHNDQUFzQyxvREFBSztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMseURBQVU7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx3REFBYztBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFVO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFRRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQU9FO0FBQ2lDO0FBQ2pCOztBQUV2QztBQUNBLENBQUMsMERBQVk7QUFDYixDQUFDLDZEQUFlO0FBQ2hCLENBQUMsc0VBQXdCO0FBQ3pCLENBQUMsNERBQWM7QUFDZixDQUFDLCtEQUFpQjtBQUNsQixDQUFDLHFFQUFpQjtBQUNsQixDQUFDLG9EQUFVO0FBQ1g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLWRldGFpbHMtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS10YXNrLWRhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtdGFzay1mb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLXRhc2stcGFuZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9wdWItc3ViLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4qIFByZWZpeGVkIGJ5IGh0dHBzOi8vYXV0b3ByZWZpeGVyLmdpdGh1Yi5pb1xcbiogUG9zdENTUzogdjguNC4xNCxcXG4qIEF1dG9wcmVmaXhlcjogdjEwLjQuN1xcbiogQnJvd3NlcnM6IGxhc3QgNCB2ZXJzaW9uXFxuKi9cXG5cXG46cm9vdCB7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJWYXJlbGEgUm91bmRcXFwiLCBzYW5zLXNlcmlmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdC0tZGl2aWRlci1jb2xvcjogI2VjZjRmZjtcXG5cXHQtLWxvZ28tcGluazogI2ZmMWI2YjtcXG5cXHQtLWxvZ28tYmx1ZTogIzQ1Y2FmZjtcXG5cXHQtLWxvZ28tbWlkLWJsdWU6ICMwMDYxZmY7XFxuXFx0LS1sb2dvLWdyZWVuOiAjNzNmZjAwO1xcblxcdC0tZGFyay1tb2RlLWJnOiAjMjMyMzIzO1xcblxcdC0td2hpdGU6ICNmZmY7XFxuXFx0LS1vZmYtd2hpdGU6ICNmNWY1ZjU7XFxufVxcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ubG9nby1hcmVhLFxcbi5oZWFkZXItbWVudSB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcXG5cXHRmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuXFxuLmxvZ28tYXJlYSBwIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG5cXHQvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbi5sb2dvLWFyZWEgaW1nIHtcXG5cXHRoZWlnaHQ6IDIuMjVyZW07XFxufVxcblxcbi5oZWFkZXItbWVudSBhIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTsgKi9cXG5cXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjM1cmVtIDEuNXJlbSAwLjM1cmVtIDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnBsdXMge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBEQVNIQk9BUkQgQVJFQSovXFxuXFxuLmRhc2gtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjJweCk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVudS1hcmVhIHtcXG5cXHR3aWR0aDogMzUwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZy10b3A6IDFyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogNjtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHQvKiBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3MjBweCk7ICovXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDY4cHgpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRzY3JvbGxiYXItY29sb3I6IHJnYig5MywgMTUwLCAxODkpO1xcblxcdHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdC8qIG1hcmdpbi1yaWdodDogMC41cmVtOyAqL1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdG1pbi13aWR0aDogNDAwcHg7XFxuXFx0bWF4LXdpZHRoOiA0NTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDAuMjVyZW0gc29saWQgd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA2MSwgMTQwLCAwLjYpO1xcblxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXJlbTtcXG5cXHR6LWluZGV4OiAxMDtcXG59XFxuXFxuLmhpZGUtc2lkZS1tZW51IHtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG59XFxuXFxuLmhpZGUtZGV0YWlscy1wYW5lbCB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5uby1wb2ludGVyLWV2ZW50cyB7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuMjVyZW0gMXJlbSAxLjI1cmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOm50aC1jaGlsZCgxKSB7XFxuXFx0bWFyZ2luLXRvcDogM3JlbTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIgc3ZnIHtcXG5cXHRoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDEycHg7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDkzLCAxNTAsIDE4OSk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDE1NiwgMjAwLCAyMzApO1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRhc2tzLWFyZWEgaDIge1xcblxcdGZvbnQtc2l6ZTogMS41NXJlbTtcXG5cXHRtYXJnaW46IDEuM3JlbSA0cmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0bWFyZ2luOiAwLjc1cmVtIDFyZW0gMC43NXJlbSAwO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0ZDVmMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4gMS44cyBlYXNlLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLWluIDEuMnMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5hbmltYXRlLW91dCB7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmNoZWNrZWQtYW5pbWF0ZS1vdXQge1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQgMS41cyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLW91dCAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4NWRmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdG9wYWNpdHk6IDAuMjtcXG5cXHR9XFxuXFxuXFx0OTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyYTg1ZGY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMC4yO1xcblxcdH1cXG5cXG5cXHQ5MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbi5jaGVjay1jb250YWluZXIge1xcblxcdHdpZHRoOiAyLjM1cmVtO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAyLjM1cmVtKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRtYXJnaW46IGF1dG8gMXJlbSBhdXRvIGF1dG87XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRtYXJnaW46IDAgMC41cmVtIDAgMnJlbTtcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0LyogbWFyZ2luOiBhdXRvIDAuNXJlbTsgKi9cXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3R0b206IDRweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3BhbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiAxLjc1cmVtO1xcblxcdHdpZHRoOiAxLjc1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0LyogcG9pbnRlci1ldmVudHM6IG5vbmU7ICovXFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuOjphZnRlciB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzcGFuOjphZnRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IC0xO1xcblxcdGxlZnQ6IDAuNzVyZW07XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0d2lkdGg6IDAuMzVyZW07XFxuXFx0aGVpZ2h0OiAxLjFyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci13aWR0aDogMCA0cHggNHB4IDA7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5kZXRhaWxzLWluZm8tY29udGFpbmVyIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5iYWNrLWFycm93IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuMjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYzM5Mzk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmRldGFpbHMtZGl2aWRlciB7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2IyZDVmYztcXG5cXHRtYXJnaW4tdG9wOiA0LjNyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtZGl2aWRlcjIge1xcblxcdGhlaWdodDogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSB7XFxuXFx0cGFkZGluZzogMS41cmVtO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXRvcDogMi4yNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xcblxcdG1heC13aWR0aDogOTAlO1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdCxcXG4ucHJpb3JpdHksXFxuLmR1ZS1kYXRlIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICNiYzM5Mzk7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjY1cmVtIDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG5cXHRtYXJnaW4tdG9wOiAyLjI1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1wcmlvcml0eS10ZXh0IHtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG59XFxuXFxuLmRldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdG1heC13aWR0aDogOTAlO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uZGVzYy10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAwLjc1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uZHVlLXRleHQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0cGFkZGluZzogMC4ycmVtIDAuOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXRhaWxzLWVkaXQtYnV0dG9uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDEuMnJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5bY29udGVudGVkaXRhYmxlXTpmb2N1cyB7XFxuXFx0b3V0bGluZTogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uZWRpdGFibGUge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLypGT1JNIEFSRUEqL1xcblxcbi5jb250YWluZXItb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiA2O1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdG9wYWNpdHk6IDAuNztcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDExO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogY2FsYygxMDAlIC0gOHJlbSk7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtcGFjazogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG5cXHQtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0cGFkZGluZzogNHJlbSAwO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZDM1NjIsICMyNjZhYmUpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMzU2MiwgIzI2NmFiZSk7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW0gMnJlbSAxcmVtO1xcblxcdGdhcDogMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcblxcdHdpZHRoOiBtYXgoMjV2dywgMjUwcHgpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLXRpdGxlLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDVjYWZmO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRjb2xvcjogI2ZmZmZmZjtcXG5cXHR3aWR0aDogMS43ZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQ6ICMwOTJkNTk7XFxuXFx0cGFkZGluZzogMC4ycmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHRleHRhcmVhIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDRyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW0gMCAwLjNyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgZmllbGRzZXQge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGFjY2VudC1jb2xvcjogIzQ1Y2FmZjtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHNlbGVjdCB7XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBvcHRpb24ge1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiAyLjVyZW07XFxuXFx0YmFja2dyb3VuZDogIzQ1Y2FmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luLXRvcDogMXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKlByb2plY3QgRm9ybSovXFxuXFxuLnByb2plY3QtYXJlYSB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcblxcdC8qIGhlaWdodDogYXV0bzsgKi9cXG5cXHRwYWRkaW5nOiAwO1xcblxcdC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cXG5cXHQvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAwcmVtIDAuNXJlbSAwcmVtIDAuNXJlbTtcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG5cXHQvKiBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA0MTVweDsgKi9cXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250ZW50IHtcXG5cXHRwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmctY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0LyogYm9yZGVyOiAxcHggc29saWQgeWVsbG93OyAqL1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDAuNXJlbSAxcmVtIDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcblxcdC8qIGJhY2tncm91bmQtY29sb3I6ICNlZmY0ZmE7ICovXFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXIge1xcblxcdC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG5cXHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcblxcdG1heC1oZWlnaHQ6IDIwcmVtO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRzY3JvbGxiYXItY29sb3I6IHJnYig5MywgMTUwLCAxODkpO1xcblxcdHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG5cXHRwYWRkaW5nOiAwLjc1cmVtIDFyZW0gMC43NXJlbSAzcmVtO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiA2cHg7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMzAsIDI0OSk7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTU2LCAyMDAsIDIzMCk7XFxufVxcblxcbi5wcm9qZWN0LWRpdi1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi8qIC50YXNrcy1vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDQ7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC43O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdG1hcmdpbjogMDtcXG59ICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC50YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzlkYzdmNTtcXG5cXHR9XFxuXFxuXFx0Lm1vZGlmeS1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzBmNThjZDtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LmRlbGV0ZS1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAxLjVyZW07XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2JjMzkzOTtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW46aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcblxcdFxcdHBhZGRpbmctbGVmdDogMi41cmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nOmhvdmVyIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpOyAqL1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0XFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciAubWVudS1pdGVtIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2OmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHR9XFxuXFxuXFx0LmhhbWJ1cmdlcjpob3ZlciB7XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdH1cXG5cXG5cXHQuYmFjay1hcnJvdzpob3ZlciB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHRcXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHRcXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0XFx0YmFja2dyb3VuZDogI2M5MmExMjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6ICNlZGVhMmI7XFxuXFx0XFx0aGVpZ2h0OiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICMyNjZhYmU7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246YWN0aXZlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjN2MxOTBhO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1lZGl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2JjMzkzOTtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtZWRpdC1idXR0b246Zm9jdXMge1xcblxcdFxcdGJhY2tncm91bmQ6ICM4NzFiMWI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0d2lkdGg6IDhyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0Lm1lbnUtYXJlYSB7XFxuXFx0XFx0d2lkdGg6IDI3NXB4O1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2LWNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LWhlaWdodDogN3JlbTtcXG5cXHRcXHQvKiBib3JkZXI6IDFweCBzb2xpZCAjYTNjNWY2OyAqL1xcblxcdFxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRcXHRwYWRkaW5nLWJvdHRvbTogNnJlbTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2IHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuXFx0LmxvZ28tYXJlYSB7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMTBweDtcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYXJlYSBwIHtcXG5cXHRcXHRmb250LXNpemU6IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmxvZ28tYXJlYSBpbWcge1xcblxcdFxcdGhlaWdodDogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLWJ1dHRvbiB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdFxcdG1hcmdpbjogMDtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IHtcXG5cXHRcXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWcge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjhyZW0gMS4yNXJlbSAwLjhyZW0gMS4yNXJlbTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbSB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1hcmVhIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDI2NXB4O1xcblxcdFxcdG1pbi13aWR0aDogNTBweDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHAge1xcblxcdFxcdGxlZnQ6IDJyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRcXHRtYXJnaW46IGF1dG8gMS41cmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHQvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xcblxcdFxcdGZvbnQtc2l6ZTogMC45cmVtO1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjU1cmVtO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuY29udGFpbmVyLW92ZXJsYXkge1xcblxcdFxcdGhlaWdodDogMTE1ZHZoO1xcblxcdH1cXG5cXG5cXHQuY2hlY2stY29udGFpbmVyIHtcXG5cXHRcXHQtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuXFx0XFx0LW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdFxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtaGVhZGluZyB7XFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FLQzs7QUFFRDtDQUNDLHVDQUF1QztDQUN2QyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4QixxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0NBQ3BC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QTtFQUNDLHNDQUFzQztDQUN2Qzs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLFVBQVU7Q0FDWDs7Q0FFQTtFQUNDLG1CQUFtQjtDQUNwQjs7Q0FFQTtFQUNDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsdUJBQXVCO0NBQ3hCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcbiogUHJlZml4ZWQgYnkgaHR0cHM6Ly9hdXRvcHJlZml4ZXIuZ2l0aHViLmlvXFxuKiBQb3N0Q1NTOiB2OC40LjE0LFxcbiogQXV0b3ByZWZpeGVyOiB2MTAuNC43XFxuKiBCcm93c2VyczogbGFzdCA0IHZlcnNpb25cXG4qL1xcblxcbjpyb290IHtcXG5cXHRmb250LWZhbWlseTogXFxcIlZhcmVsYSBSb3VuZFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0LS1kaXZpZGVyLWNvbG9yOiAjZWNmNGZmO1xcblxcdC0tbG9nby1waW5rOiAjZmYxYjZiO1xcblxcdC0tbG9nby1ibHVlOiAjNDVjYWZmO1xcblxcdC0tbG9nby1taWQtYmx1ZTogIzAwNjFmZjtcXG5cXHQtLWxvZ28tZ3JlZW46ICM3M2ZmMDA7XFxuXFx0LS1kYXJrLW1vZGUtYmc6ICMyMzIzMjM7XFxuXFx0LS13aGl0ZTogI2ZmZjtcXG5cXHQtLW9mZi13aGl0ZTogI2Y1ZjVmNTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb2dvLWFyZWEsXFxuLmhlYWRlci1tZW51IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcblxcdGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuLmxvZ28tYXJlYSBpbWcge1xcblxcdGhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLmhlYWRlci1tZW51IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItbWVudSBpbWcge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuMzVyZW0gMS41cmVtIDAuMzVyZW0gMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIERBU0hCT0FSRCBBUkVBKi9cXG5cXG4uZGFzaC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2MnB4KTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51LWFyZWEge1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA2O1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLnRhc2tzLWFyZWEge1xcblxcdC8qIG1pbi13aWR0aDogY2FsYygxMDB2dyAtIDcyMHB4KTsgKi9cXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwZHZoIC0gNjhweCk7XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdHNjcm9sbGJhci1jb2xvcjogcmdiKDkzLCAxNTAsIDE4OSk7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0LyogbWFyZ2luLXJpZ2h0OiAwLjVyZW07ICovXFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRldGFpbHMtYXJlYSB7XFxuXFx0bWluLXdpZHRoOiA0MDBweDtcXG5cXHRtYXgtd2lkdGg6IDQ1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItbGVmdDogMC4yNXJlbSBzb2xpZCB3aGl0ZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYxLCAxNDAsIDAuNik7XFxuXFx0LXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR6LWluZGV4OiA1O1xcbn1cXG5cXG4uaGFtYnVyZ2VyIHtcXG5cXHR3aWR0aDogMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1cmVtO1xcblxcdHotaW5kZXg6IDEwO1xcbn1cXG5cXG4uaGlkZS1zaWRlLW1lbnUge1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xcbn1cXG5cXG4uaGlkZS1kZXRhaWxzLXBhbmVsIHtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG59XFxuXFxuLm5vLWRpc3BsYXkge1xcblxcdGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLm5vLXBvaW50ZXItZXZlbnRzIHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAxcmVtIDEuMjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBzdmcge1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTJweDtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoOTMsIDE1MCwgMTg5KTtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTU2LCAyMDAsIDIzMCk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFza3MtYXJlYSBoMiB7XFxuXFx0Zm9udC1zaXplOiAxLjU1cmVtO1xcblxcdG1hcmdpbjogMS4zcmVtIDRyZW07XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRtYXJnaW46IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDA7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRkNWYwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbiAxLjhzIGVhc2Utb3V0IGZvcndhcmRzO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtaW4gMS4ycyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmFuaW1hdGUtb3V0IHtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtb3V0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG4uY2hlY2tlZC1hbmltYXRlLW91dCB7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dCAxLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtb3V0IDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyYTg1ZGY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMC4yO1xcblxcdH1cXG5cXG5cXHQ5MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzJhODVkZjtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAwLjI7XFxuXFx0fVxcblxcblxcdDkwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcblxcdDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxuXFxuXFx0MTAwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHZ3KTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDIuMzVyZW07XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcblxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmZmZmY7XFxufVxcblxcbi50ZXh0LWNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIuMzVyZW0pO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLnRhc2stYnV0dG9uLWFyZWEge1xcblxcdG1hcmdpbjogYXV0byAxcmVtIGF1dG8gYXV0bztcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHAge1xcblxcdG1hcmdpbjogMCAwLjVyZW0gMCAycmVtO1xcblxcdG1heC13aWR0aDogNjAlO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHQvKiBtYXJnaW46IGF1dG8gMC41cmVtOyAqL1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0cGFkZGluZzogMC4zcmVtIDAuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdGJvdHRvbTogNHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbjtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzcGFuIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG5cXHRoZWlnaHQ6IDEuNzVyZW07XFxuXFx0d2lkdGg6IDEuNzVyZW07XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHQvKiBwb2ludGVyLWV2ZW50czogbm9uZTsgKi9cXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2YWJlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46OmFmdGVyIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0ei1pbmRleDogMTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHNwYW46OmFmdGVyIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ei1pbmRleDogLTE7XFxuXFx0bGVmdDogMC43NXJlbTtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHR3aWR0aDogMC4zNXJlbTtcXG5cXHRoZWlnaHQ6IDEuMXJlbTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuXFx0Ym9yZGVyLXdpZHRoOiAwIDRweCA0cHggMDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblxcdHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLmRldGFpbHMtaW5mby1jb250YWluZXIge1xcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmJhY2stYXJyb3cge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogMDtcXG5cXHR0b3A6IDEuMnJlbTtcXG5cXHR3aWR0aDogMS4yNXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0cGFkZGluZzogMC4yNXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2JjMzkzOTtcXG5cXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uZGV0YWlscy1kaXZpZGVyIHtcXG5cXHRoZWlnaHQ6IDJweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkNWZjO1xcblxcdG1hcmdpbi10b3A6IDQuM3JlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlscy1kaXZpZGVyMiB7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0LyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG5cXHRtYXJnaW4tdG9wOiAyLjI1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxuXFx0bWF4LXdpZHRoOiA5MCU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LFxcbi5wcmlvcml0eSxcXG4uZHVlLWRhdGUge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHRjb2xvcjogI2JjMzkzOTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kdWUtZGF0ZSB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcblxcdG1hcmdpbi10b3A6IDIuMjVyZW07XFxufVxcblxcbi5wcm9qZWN0LXByaW9yaXR5LXRleHQge1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcbn1cXG5cXG4uZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0bWF4LXdpZHRoOiA5MCU7XFxuXFx0bWFyZ2luLWxlZnQ6IDFyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMC42NXJlbSAxcmVtO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0bWluLWhlaWdodDogMTAwcHg7XFxufVxcblxcbi5kZXNjLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDAuNzVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5kdWUtdGV4dCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtc2l6ZTogMC43NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRwYWRkaW5nOiAwLjJyZW0gMC44cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRldGFpbHMtZWRpdC1idXR0b24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMS4ycmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdG1hcmdpbi1sZWZ0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0YWJsZSB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4vKkZPUk0gQVJFQSovXFxuXFxuLmNvbnRhaW5lci1vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDY7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC43O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogMTE7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcblxcdC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwYWRkaW5nOiA0cmVtIDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMzU2MiwgIzI2NmFiZSk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGQzNTYyLCAjMjY2YWJlKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAycmVtIDFyZW07XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuXFx0d2lkdGg6IG1heCgyNXZ3LCAyNTBweCk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tdGl0bGUtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NWNhZmY7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcblxcdHdpZHRoOiAxLjdlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0YmFja2dyb3VuZDogIzA5MmQ1OTtcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgdGV4dGFyZWEge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwIDAuM3JlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHJlc2l6ZTogbm9uZTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgbGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0YWNjZW50LWNvbG9yOiAjNDVjYWZmO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgc2VsZWN0IHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IG9wdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDIuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjNDVjYWZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi8qUHJvamVjdCBGb3JtKi9cXG5cXG4ucHJvamVjdC1hcmVhIHtcXG5cXHRtYXJnaW4tdG9wOiAyLjVyZW07XFxuXFx0LyogaGVpZ2h0OiBhdXRvOyAqL1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Lyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xcblxcdC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRtYXJnaW46IDByZW0gMC41cmVtIDByZW0gMC41cmVtO1xcblxcdHdpZHRoOiA3cmVtO1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcblxcdC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDQxNXB4OyAqL1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWNvbnRlbnQge1xcblxcdHBhZGRpbmctdG9wOiAyLjVyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZy1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHQvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICovXFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcblxcdHBhZGRpbmc6IDFyZW0gMC41cmVtIDFyZW0gMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogI2VmZjRmYTsgKi9cXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lciB7XFxuXFx0LyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuXFx0bWF4LWhlaWdodDogMjByZW07XFxuXFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdHNjcm9sbGJhci1jb2xvcjogcmdiKDkzLCAxNTAsIDE4OSk7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDNyZW07XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4ucHJvamVjdC1kaXYtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDZweDtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHJnYigyMDIsIDIzMCwgMjQ5KTtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQ6IHJnYigxNTYsIDIwMCwgMjMwKTtcXG59XFxuXFxuLnByb2plY3QtZGl2LWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLyogLnRhc2tzLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogNDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRvcGFjaXR5OiAwLjc7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjN2Y1O1xcblxcdH1cXG5cXG5cXHQubW9kaWZ5LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGY1OGNkO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzOTM5O1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgc3Bhbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItbWVudSBpbWc6aG92ZXIge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNSk7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1sb2dvLW1pZC1ibHVlKSwgdmFyKC0tbG9nby1ibHVlKSk7ICovXFxuXFx0XFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCB2YXIoLS1sb2dvLWJsdWUpLCAjMDQzNTg0KTsgKi9cXG5cXHRcXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIC5tZW51LWl0ZW0ge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kaXY6aG92ZXIge1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcblxcdC5iYWNrLWFycm93OmhvdmVyIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHRcXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdFxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2VkZWEyYjtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICM3YzE5MGE7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWVkaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYmMzOTM5O1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1lZGl0LWJ1dHRvbjpmb2N1cyB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzg3MWIxYjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR3aWR0aDogOHJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQubWVudS1hcmVhIHtcXG5cXHRcXHR3aWR0aDogMjc1cHg7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdFxcdGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kaXYtY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtaGVpZ2h0OiA3cmVtO1xcblxcdFxcdC8qIGJvcmRlcjogMXB4IHNvbGlkICNhM2M1ZjY7ICovXFxuXFx0XFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiA2cmVtO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1kaXYge1xcblxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG5cXHQubG9nby1hcmVhIHtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcblxcdH1cXG5cXG5cXHQubG9nby1hcmVhIHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdH1cXG5cXG5cXHQubG9nby1hcmVhIGltZyB7XFxuXFx0XFx0aGVpZ2h0OiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0XFx0bWFyZ2luOiAwO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMTBweDtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuOHJlbSAxLjI1cmVtIDAuOHJlbSAxLjI1cmVtO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWFyZWEge1xcblxcdFxcdG1heC13aWR0aDogMjY1cHg7XFxuXFx0XFx0bWluLXdpZHRoOiA1MHB4O1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgcCB7XFxuXFx0XFx0bGVmdDogMnJlbTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stYnV0dG9uLWFyZWEge1xcblxcdFxcdG1hcmdpbjogYXV0byAxLjVyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdFxcdC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXFxuXFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDAuNTVyZW07XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b24ge1xcblxcdFxcdGJhY2tncm91bmQ6ICNjOTJhMTI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5jb250YWluZXItb3ZlcmxheSB7XFxuXFx0XFx0aGVpZ2h0OiAxMTVkdmg7XFxuXFx0fVxcblxcblxcdC5jaGVjay1jb250YWluZXIge1xcblxcdFxcdC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG5cXHRcXHQtbXMtZmxleC1hbGlnbjogc3RhcnQ7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuXFx0XFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgc3BhbiB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMS41cmVtO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRcXHRmb250LXNpemU6IDFyZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYmFjayBmcm9tIFwiLi9JbWFnZXMvYXJyb3cucG5nXCI7XG5pbXBvcnQgeyBtb2RpZnlGb3JtIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stZm9ybVwiO1xuXG5mdW5jdGlvbiByZW5kZXJEZXRhaWxzKG9iaiwgdGFza0luZGV4KSB7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cdGNvbnN0IGRldGFpbHNJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgYmFja0Fycm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IGRldGFpbHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0Y29uc3QgZGl2aWRlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBkaXZpZGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRkZXRhaWxzQXJlYS5hcHBlbmQoZGl2aWRlciwgZGV0YWlsc0luZm9Db250YWluZXIpO1xuXHRkZXRhaWxzSW5mb0NvbnRhaW5lci5hcHBlbmQoXG5cdFx0YmFja0Fycm93LFxuXHRcdGVkaXRCdXR0b24sXG5cdFx0ZGV0YWlsc1RpdGxlLFxuXHRcdGRpdmlkZXIyLFxuXHRcdHByb2plY3QsXG5cdFx0cHJpb3JpdHksXG5cdFx0ZHVlRGF0ZSxcblx0XHRkaXZpZGVyMyxcblx0XHRkZXNjcmlwdGlvblxuXHQpO1xuXG5cdGRldGFpbHNJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWluZm8tY29udGFpbmVyXCIpO1xuXHRkaXZpZGVyLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdmlkZXJcIik7XG5cdGJhY2tBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYmFjay1hcnJvd1wiKTtcblx0ZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1lZGl0LWJ1dHRvblwiKTtcblx0ZGV0YWlsc1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLXRpdGxlXCIpO1xuXHRkaXZpZGVyMi5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kaXZpZGVyMlwiKTtcblx0cHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblx0cHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuXHRkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWUtZGF0ZVwiKTtcblx0ZGl2aWRlcjMuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGl2aWRlcjJcIik7XG5cdGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRlc2NyaXB0aW9uXCIpO1xuXG5cdGJhY2tBcnJvdy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYmFjayk7XG5cblx0ZWRpdEJ1dHRvbi5pbm5lclRleHQgPSBcIkVkaXQgRGV0YWlsc1wiO1xuXHRkZXRhaWxzVGl0bGUuaW5uZXJUZXh0ID0gb2JqW1wibmFtZVwiXTtcblx0cHJvamVjdC5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LXByaW9yaXR5LXRleHRcIj5Qcm9qZWN0Jm5ic3AmbmJzcCZuYnNwfCZuYnNwJm5ic3A8L3NwYW4+ICR7b2JqW1wicHJvamVjdFwiXX1gO1xuXHRwcmlvcml0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LXByaW9yaXR5LXRleHRcIj5Qcmlvcml0eSZuYnNwJm5ic3AmbmJzcHwmbmJzcCZuYnNwPC9zcGFuPiAke29ialtcInByaW9yaXR5XCJdfWA7XG5cdGR1ZURhdGUuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicHJvamVjdC1wcmlvcml0eS10ZXh0XCI+RHVlIERhdGUmbmJzcCZuYnNwJm5ic3B8Jm5ic3AmbmJzcDwvc3Bhbj4gJHtvYmpbXCJkYXRlXCJdfWA7XG5cdGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInByb2plY3QtcHJpb3JpdHktdGV4dCBkZXNjLXRpdGxlXCI+RGVzY3JpcHRpb248L3NwYW4+PGJyPiR7b2JqW1wiZGVzY1wiXX1gO1xuXG5cdGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xlYXJEZXRhaWxzKTtcblx0ZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNsZWFyRGV0YWlscygpO1xuXHRcdG1vZGlmeUZvcm0ob2JqLCB0YXNrSW5kZXgpO1xuXHR9KTtcblxufVxuXG5jb25zdCBjbGVhckRldGFpbHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRldGFpbHNJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5kZXRhaWxzLWluZm8tY29udGFpbmVyXCJcblx0KTtcblx0Y29uc3QgZGl2aWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1kaXZpZGVyXCIpO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1hcmVhXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cblx0aWYgKGRldGFpbHNJbmZvQ29udGFpbmVyKSB7XG5cdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0XHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGl2aWRlci5yZW1vdmUoKTtcblx0XHRcdGRldGFpbHNJbmZvQ29udGFpbmVyLnJlbW92ZSgpO1xuXHRcdH0sIDI1MCk7XG5cdH1cbn07XG5cbmNvbnN0IHNob3dEZXRhaWxzID0gKCkgPT4ge1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1hcmVhXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cblx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlLWRldGFpbHMtcGFuZWxcIik7XG5cdFx0dGFza3NBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1wb2ludGVyLWV2ZW50c1wiKTtcblx0fSwgMTApO1xufTtcblxuY29uc3QgZWRpdERldGFpbHMgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLXRpdGxlXCIpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1kZXNjcmlwdGlvblwiKTtcblx0Y29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuXHRjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZS1kYXRlXCIpO1xuXHRjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtcHJpb3JpdHktdGV4dFwiKTtcblxuXHR0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuXHRkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuXHRwcm9qZWN0LnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG5cdHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG5cdGR1ZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuXHRsYWJlbHMuc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwiZmFsc2VcIik7XG59O1xuXG5leHBvcnQgeyByZW5kZXJEZXRhaWxzLCBjbGVhckRldGFpbHMsIHNob3dEZXRhaWxzIH07XG4iLCJpbXBvcnQgbG9nb0JsdWUgZnJvbSBcIi4vSW1hZ2VzL1Rhc2tpZS1sb2dvLWRlZXAtYmx1ZS5wbmdcIjtcbmltcG9ydCBnaXRodWJTaWduIGZyb20gXCIuL0ltYWdlcy9naXRodWItc2lnbi5wbmdcIjtcbmltcG9ydCBidXJnZXJNZW51IGZyb20gXCIuL0ltYWdlcy9idXJnZXItbWVudS5zdmdcIjtcbmltcG9ydCB7IHNob3dGb3JtLCBjbG9zZUZvcm0sIHN1Ym1pdEZvcm0gfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1mb3JtXCI7XG5pbXBvcnQgeyBjbGVhckRldGFpbHMgfSBmcm9tIFwiLi9jcmVhdGUtZGV0YWlscy1wYW5lbFwiO1xuaW1wb3J0IHB1YlN1YiBmcm9tIFwiLi9wdWItc3ViXCI7XG5pbXBvcnQge1xuXHRmaWx0ZXJUYXNrc0J5UHJvamVjdCxcblx0cmVuZGVyVGFza0hlYWRpbmcsXG5cdHNob3dBbGxUYXNrcyxcblx0ZmlsdGVyVGFza3NCeURhdGUsXG5cdHNob3dDb21wbGV0ZWQsXG59IGZyb20gXCIuL2NyZWF0ZS10YXNrLXBhbmVsXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhhbWJ1cmdlcigpIHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoaGFtYnVyZ2VyKTtcblx0aGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBidXJnZXJNZW51KTtcblx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJcIik7XG5cblx0aGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblx0XHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdFx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblxuXHRcdGNvbnN0IGNvbXBTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVBcmVhKTtcblx0XHRjb25zdCBjaGVja0Rpc3BsYXlTdGF0ZSA9IGNvbXBTdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcblxuXHRcdGlmIChjaGVja0Rpc3BsYXlTdGF0ZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0fSwgMjAwKTtcblx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0fSwgMTApO1xuXHRcdH1cblxuXHRcdGNsZWFyRGV0YWlscygpO1xuXHR9KTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0fSwgMTApO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0Ly9HZW5lcmFsIGVsZW1lbnRzIHJlcXVpcmVkIGZvciBoZWFkZXJcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IGxvZ29BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Y29uc3QgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnN0IGhlYWRlck5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdC8vQnVpbGQgaGVhZGVyIHN0cnVjdHVyZVxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChoZWFkZXJDb250YWluZXIpO1xuXHRoZWFkZXJDb250YWluZXIuYXBwZW5kKGxvZ29BcmVhLCBoZWFkZXJNZW51KTtcblx0bG9nb0FyZWEuYXBwZW5kKGxvZ29JbWcsIGxvZ29UZXh0KTtcblx0aGVhZGVyTWVudS5hcHBlbmQoZ2l0TGluaywgaGVhZGVyTmV3VGFza0J1dHRvbik7XG5cdGdpdExpbmsuYXBwZW5kKGdpdExvZ28pO1xuXG5cdC8vRmlsbC1vdXQgZWxlbWVudHNcblx0bG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9nb0JsdWUpO1xuXHRsb2dvVGV4dC5pbm5lclRleHQgPSBcIkp1c3QtRG8tSXRcIjtcblx0Z2l0TGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XCJocmVmXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vS3dhZHdvLUZpcmVtcG9uZy1Cb2FreWUvUHJvamVjdC1Uby1Eb1wiXG5cdCk7XG5cdGdpdExpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXHRnaXRMb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBnaXRodWJTaWduKTtcblx0aGVhZGVyTmV3VGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwbHVzXCI+Kzwvc3Bhbj4gVGFza2A7XG5cblx0Ly9Bc3NpZ24gQ1NTIGNsYXNzZXNcblx0aGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuXHRsb2dvQXJlYS5jbGFzc0xpc3QuYWRkKFwibG9nby1hcmVhXCIpO1xuXHRoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItbWVudVwiKTtcblx0aGVhZGVyTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ1dHRvblwiKTtcblxuXHQvL0V2ZW50IGxpc3RlbmVyIGZvciBuZXcgdGFzayBidXR0b25cblx0aGVhZGVyTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUoKSB7XG5cdC8vR2VuZXJhbCBlbGVtZW50cyByZXF1aXJlZCBmb3IgZGFzaGJvYXJkXG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBkYXNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG5cdC8vQnVpbGQgZGFzaGJvYXJkIHN0cnVjdHVyZVxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChkYXNoQ29udGFpbmVyKTtcblx0ZGFzaENvbnRhaW5lci5hcHBlbmQobWVudUFyZWEsIHRhc2tzQXJlYSwgZGV0YWlsc0FyZWEpO1xuXG5cdC8vQXNzaWduIENTUyBjbGFzc2VzXG5cdGRhc2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhc2gtY29udGFpbmVyXCIpO1xuXHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcmVhXCIpO1xuXHR0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcInRhc2tzLWFyZWFcIik7XG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWFyZWFcIiwgXCJuby1kaXNwbGF5XCIsIFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXG5cdHRhc2tzQXJlYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cblx0XHRjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QXJlYSk7XG5cdFx0Y29uc3QgY2hlY2tEaXNwbGF5U3RhdGUgPSBjb21wU3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTUwKSB7XG5cdFx0XHRpZiAoY2hlY2tEaXNwbGF5U3RhdGUpIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY2xlYXJEZXRhaWxzKCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZU1lbnUoKSB7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdGNvbnN0IG1lbnVJdGVtcyA9IFtcblx0XHRcIkFsbCB0YXNrc1wiLFxuXHRcdFwiUGFzdCBkdWVcIixcblx0XHRcIkR1ZSB0b2RheVwiLFxuXHRcdFwiRHVlIHRoaXMgd2Vla1wiLFxuXHRcdFwiQ29tcGxldGVkXCIsXG5cdF07XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuXHRcdGxldCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bGV0IG1lbnVJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0XHRcInN2Z1wiXG5cdFx0KTtcblx0XHRsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRcdG1lbnVJdGVtLmlubmVyVGV4dCA9IGl0ZW07XG5cdFx0bWVudUl0ZW1JbWFnZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpO1xuXHRcdG1lbnVJdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblx0XHRtZW51SXRlbUltYWdlLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMCAxN0w1IDEyTDYuNDEgMTAuNTlMMTAgMTQuMTdMMTcuNTkgNi41OEwxOSA4TDEwIDE3WlwiIC8+YDtcblxuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tY29udGFpbmVyXCIpO1xuXHRcdG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cblx0XHRtZW51SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNpZGUtbWVudVwiLCBpdGVtKTtcblxuXHRcdG1lbnVBcmVhLmFwcGVuZChtZW51SXRlbUNvbnRhaW5lcik7XG5cblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FsbFRhc2tzKTtcblx0XHR9IGVsc2UgaWYgKGkgPiAwICYmIGkgPCA0KSB7XG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsdGVyVGFza3NCeURhdGUpO1xuXHRcdH0gZWxzZSBpZiAoaSA9PSA0KSB7XG5cdFx0XHRtZW51SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0NvbXBsZXRlZCk7XG5cdFx0fVxuXG5cdFx0bWVudUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUhlYWRpbmcpO1xuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QXJlYSk7XG5cdFx0XHRjb25zdCBjaGVja0Rpc3BsYXlTdGF0ZSA9IGNvbXBTdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcblxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MCkge1xuXHRcdFx0XHRpZiAoY2hlY2tEaXNwbGF5U3RhdGUpIHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0XHRcdH0sIDEwKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNsZWFyRGV0YWlscygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0bWVudUl0ZW1Db250YWluZXIuYXBwZW5kKG1lbnVJdGVtSW1hZ2UsIG1lbnVJdGVtKTtcblx0fSk7XG5cblx0bWVudUFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHRcdHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHR9LCAzMDApO1xuXHR9KTtcbn1cblxuY29uc3QgY3JlYXRlUHJvamVjdE1lbnUgPSAoKSA9PiB7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cdGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgcHJvamVjdEhlYWRpbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgcHJvamVjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0Y29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHByb2plY3REaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcblx0Y29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0bWVudUFyZWEuYXBwZW5kKHByb2plY3RBcmVhKTtcblx0cHJvamVjdEFyZWEuYXBwZW5kKHByb2plY3RIZWFkaW5nQ29udGFpbmVyLCBwcm9qZWN0RGl2Q29udGFpbmVyKTtcblx0cHJvamVjdEhlYWRpbmdDb250YWluZXIuYXBwZW5kKHByb2plY3RIZWFkaW5nLCBhZGRQcm9qZWN0QnV0dG9uKTtcblx0cHJvamVjdERpdkNvbnRhaW5lci5hcHBlbmQocHJvamVjdERpdik7XG5cblx0YWRkUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cdHByb2plY3RIZWFkaW5nLmlubmVyVGV4dCA9IFwiUHJvamVjdHNcIjtcblx0cHJvamVjdERpdi5pbm5lclRleHQgPSBcIiMgR2VuZXJhbFwiO1xuXHRwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiLCBcIkdlbmVyYWxcIik7XG5cblx0cHJvamVjdEFyZWEuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYXJlYVwiKTtcblx0cHJvamVjdEhlYWRpbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGluZy1jb250YWluZXJcIik7XG5cdHByb2plY3RIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRpbmdcIik7XG5cdHByb2plY3REaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGl2LWNvbnRhaW5lclwiKTtcblx0cHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG5cdGFkZFByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xuXG5cdGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Qcm9qZWN0Rm9ybSk7XG5cdHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUhlYWRpbmcpO1xuXHRwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaWx0ZXJUYXNrc0J5UHJvamVjdCk7XG5cblx0cHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWFyZWFcIik7XG5cblx0XHRjb25zdCBjb21wU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShtZW51QXJlYSk7XG5cdFx0Y29uc3QgY2hlY2tEaXNwbGF5U3RhdGUgPSBjb21wU3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG5cblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gNTUwKSB7XG5cdFx0XHRpZiAoY2hlY2tEaXNwbGF5U3RhdGUpIHtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRcdH0sIDIwMCk7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHRcdH0sIDEwKTtcblx0XHRcdH1cblxuXHRcdFx0Y2xlYXJEZXRhaWxzKCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IG9wZW5Qcm9qZWN0Rm9ybSA9ICgpID0+IHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBwcm9qZWN0Rm9ybUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCBwcm9qZWN0U3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXG5cdHByb2plY3RDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXJPdmVybGF5LCBwcm9qZWN0Rm9ybUNvbnRhaW5lcik7XG5cdHByb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0Rm9ybUNvbnRlbnQpO1xuXHRwcm9qZWN0Rm9ybUNvbnRlbnQuYXBwZW5kKFxuXHRcdHByb2plY3RUaXRsZUxhYmVsLFxuXHRcdHByb2plY3RUaXRsZUlucHV0LFxuXHRcdHByb2plY3RTdWJtaXRCdXR0b25cblx0KTtcblxuXHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRhaW5lclwiKTtcblx0cHJvamVjdEZvcm1Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWNvbnRlbnRcIiwgXCJwcm9qZWN0LWZvcm0tY29udGVudFwiKTtcblx0cHJvamVjdFN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ1dHRvblwiLCBcInN1Ym1pdC1wcm9qZWN0LWJ1dHRvblwiKTtcblx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0dGFza3NBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyLWV2ZW50c1wiKTtcblxuXHRwcm9qZWN0VGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlByb2plY3QgTmFtZVwiO1xuXHRwcm9qZWN0U3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwiQ3JlYXRlIFByb2plY3RcIjtcblxuXHRwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHByb2plY3QgbmFtZVwiKTtcblx0cHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cdHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZVwiKTtcblx0cHJvamVjdFRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0cHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHRwcm9qZWN0Rm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHByb2plY3RDb250YWluZXJPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0XHRwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cdFx0cHJvamVjdEZvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0fSwgMjAwKTtcblxuXHRwcm9qZWN0U3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIsIFwiYWRkLXByb2plY3RcIik7XG5cdHByb2plY3RGb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuXHRwcm9qZWN0Rm9ybUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtKTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAocE5hbWUpID0+IHtcblx0Ly8gY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIikudmFsdWU7XG5cdGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWFyZWFcIik7XG5cdGNvbnN0IHByb2plY3REaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZGl2LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3REaXZDb250YWluZXIuYXBwZW5kKHByb2plY3REaXYpO1xuXHRwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRpdlwiKTtcblx0cHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3RcIiwgcE5hbWUpO1xuXHRwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VIZWFkaW5nKTtcblx0cHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsdGVyVGFza3NCeVByb2plY3QpO1xuXG5cdHByb2plY3REaXYuaW5uZXJUZXh0ID0gXCIjIFwiICsgcE5hbWU7XG5cdHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXG5cdFx0Y29uc3QgY29tcFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudUFyZWEpO1xuXHRcdGNvbnN0IGNoZWNrRGlzcGxheVN0YXRlID0gY29tcFN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDU1MCkge1xuXHRcdFx0aWYgKGNoZWNrRGlzcGxheVN0YXRlKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0XHR9LCAyMDApO1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0XHR9LCAxMCk7XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyRGV0YWlscygpO1xuXHRcdH1cblx0fSk7XG5cblx0cHViU3ViLnB1Ymxpc2goXCJwcm9qZWN0LXVpLWFkZGVkXCIsIHBOYW1lKTtcbn07XG5cbmNvbnN0IGNoYW5nZUhlYWRpbmcgPSAoZSkgPT4ge1xuXHRsZXQgdGl0bGUgPVxuXHRcdGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKSB8fFxuXHRcdGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2lkZS1tZW51XCIpIHx8XG5cdFx0ZS50YXJnZXQuaW5uZXJUZXh0O1xuXHRyZW5kZXJUYXNrSGVhZGluZyh0aXRsZSk7XG59O1xuXG5leHBvcnQge1xuXHRjcmVhdGVIZWFkZXIsXG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSxcblx0Y3JlYXRlSGFtYnVyZ2VyLFxuXHRjcmVhdGVTaWRlTWVudSxcblx0Y3JlYXRlUHJvamVjdE1lbnUsXG5cdGFkZFByb2plY3QsXG5cdGNoYW5nZUhlYWRpbmcsXG59O1xuIiwiaW1wb3J0IHB1YlN1YiBmcm9tIFwiLi9wdWItc3ViXCI7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VDb21taXRUYXNrcywgbG9jYWxTdG9yYWdlQ29tbWl0UHJvamVjdHMgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbi8vRGF0YSBzdG9yYWdlIGFycmF5O1xuY29uc3QgdGFza3MgPSBbXG5cdC8vIHtcblx0Ly8gXHRuYW1lOiBcIkp1c3QtRG8tSXQgQXBwIC0gR3VpZGVcIixcblx0Ly8gXHRkZXNjOiBcIkluc2VydCBpbnN0cnVjdGlvbiBvbiBob3cgdG8gdXNlIHRoZSBhcHBcIixcblx0Ly8gXHRkYXRlOiBcIjE1LzAzLzIwMjNcIixcblx0Ly8gXHRwcmlvcml0eTogXCJoaWdoXCIsXG5cdC8vIFx0cHJvamVjdDogXCJHZW5lcmFsXCIsXG5cdC8vIFx0dGFza0lkOiA1MDAwLFxuXHQvLyB9LFxuXTtcblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSB0YXNrIGl0ZW0gZGF0YVxuY29uc3QgY3JlYXRlVGFza0RhdGEgPSAoKSA9PiB7XG5cdGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XG5cdGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWVcIikudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnaW5wdXRbbmFtZT1cInRhc2stcHJpb3JpdHlcIl06Y2hlY2tlZCdcblx0KS52YWx1ZTtcblx0Y29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG5cdGNvbnN0IHRhc2tJZCA9IHRhc2tJZGVudGl0eU51bWJlci5nZXRJZE51bWJlcigpO1xuXG5cdGNvbnN0IHRhc2tPYmplY3QgPSB7IG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrSWQgfTtcblx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLWFkZGVkXCIsIHRhc2tPYmplY3QpO1xufTtcblxuLy9GdW5jdGlvbiB0byBzdG9yZSBkYXRhXG5jb25zdCBzdG9yZVRhc2tEYXRhID0gKG9iaikgPT4ge1xuXHR0YXNrcy5wdXNoKG9iaik7XG5cdC8vIGNvbnNvbGUubG9nKHRhc2tzKTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gcmVtb3ZlIGRhdGFcbmNvbnN0IHJlbW92ZVRhc2tEYXRhID0gKGtleSkgPT4ge1xuXHRsZXQgZGVsZXRlZEluZGV4O1xuXHRsZXQgdGFza1Byb2plY3Q7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGFza3NbaV1bXCJ0YXNrSWRcIl0gPT0ga2V5KSB7XG5cdFx0XHRkZWxldGVkSW5kZXggPSBpO1xuXHRcdFx0dGFza1Byb2plY3QgPSB0YXNrc1tpXVtcInByb2plY3RcIl07XG5cdFx0XHR0YXNrcy5zcGxpY2UoaSwgMSk7XG5cdFx0fVxuXHR9XG5cdHB1YlN1Yi5wdWJsaXNoKFwidGFzay1kZWxldGVkXCIsIGRlbGV0ZWRJbmRleCwgdGFza1Byb2plY3QpO1xuXHQvLyBjb25zb2xlLmxvZyh0YXNrcyk7XG59O1xuXG4vL0Z1bmN0aW9uIHRvIG1vZGlmeSBkYXRhXG5jb25zdCBtb2RpZnlUYXNrRGF0YSA9IChpbmRleCkgPT4ge1xuXHR0YXNrc1tpbmRleF1bXCJuYW1lXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xuXHR0YXNrc1tpbmRleF1bXCJkZXNjXCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XG5cdHRhc2tzW2luZGV4XVtcImRhdGVcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlXCIpLnZhbHVlO1xuXHR0YXNrc1tpbmRleF1bXCJwcmlvcml0eVwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0J2lucHV0W25hbWU9XCJ0YXNrLXByaW9yaXR5XCJdOmNoZWNrZWQnXG5cdCkudmFsdWU7XG5cdHRhc2tzW2luZGV4XVtcInByb2plY3RcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlO1xuXG5cdGNvbnN0IG5hbWVQcm9wID0gdGFza3NbaW5kZXhdW1wibmFtZVwiXTtcblx0Y29uc3QgaWRQcm9wID0gdGFza3NbaW5kZXhdW1widGFza0lkXCJdO1xuXG5cdHB1YlN1Yi5wdWJsaXNoKFwidGFzay1tb2RpZmllZFwiLCBpZFByb3AsIG5hbWVQcm9wKTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0YXNrIElEXG5jb25zdCBpZEdlbmVyYXRvciA9ICgpID0+IHtcblx0bGV0IGlkTnVtYmVyID0gMTAwO1xuXHRjb25zdCBnZXRJZE51bWJlciA9ICgpID0+IGlkTnVtYmVyO1xuXHRjb25zdCBpbmNyZWFzZUlkTnVtYmVyID0gKCkgPT4gKGlkTnVtYmVyICs9IDUpO1xuXHRyZXR1cm4ge1xuXHRcdGdldElkTnVtYmVyLFxuXHRcdGluY3JlYXNlSWROdW1iZXIsXG5cdH07XG59O1xuXG4vL0luc3RhbmNlIG9mIGlkZW50aXR5XG5jb25zdCB0YXNrSWRlbnRpdHlOdW1iZXIgPSBpZEdlbmVyYXRvcigpO1xuXG4vL0RhdGEgc3RvcmFnZSBmb3IgY2FjaGluZyBwb3NpdGlvbnMgb2YgcHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0SW5kZXhlcyA9IHt9O1xuXG4vL0Z1bmN0aW9uIHRvIGNhY2hlIGluZGV4IG9mIGVhY2ggY3JlYXRlZCB0YXNrIGJ5IHByb2plY3RzXG5jb25zdCBjYWNoZUluZGV4ZXMgPSAoeyBwcm9qZWN0IH0pID0+IHtcblx0bGV0IHBvc2l0aW9uID0gdGFza3MubGVuZ3RoIC0gMTtcblx0aWYgKHByb2plY3RJbmRleGVzW3Byb2plY3RdKSB7XG5cdFx0cHJvamVjdEluZGV4ZXNbcHJvamVjdF0ucHVzaChwb3NpdGlvbik7XG5cdH0gZWxzZSB7XG5cdFx0cHJvamVjdEluZGV4ZXNbcHJvamVjdF0gPSBbcG9zaXRpb25dO1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKHByb2plY3RJbmRleGVzKTtcbn07XG5cbi8vRnVuY3Rpb24gdG8gY29ycmVjdCBpbmRleGVzIG9mIGNyZWF0ZWQgdGFza3MgYnkgcHJvamVjdHMgYWZ0ZXIgdGFzayBkZWxldGlvblxuY29uc3QgcmVtb3ZlRGVsZXRlZENhY2hlSW5kZXggPSAoZGVsZXRlZFRhc2tJbmRleCwgdGFza1Byb2plY3QpID0+IHtcblx0cHJvamVjdEluZGV4ZXNbdGFza1Byb2plY3RdLmZvckVhY2goKGVsZW1lbnQsIGksIGEpID0+IHtcblx0XHRpZiAoZWxlbWVudCA9PSBkZWxldGVkVGFza0luZGV4KSB7XG5cdFx0XHRhLnNwbGljZShpLCAxKTtcblx0XHRcdGFkanVzdENhY2hlZEluZGV4ZXMoZGVsZXRlZFRhc2tJbmRleCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IGFkanVzdENhY2hlZEluZGV4ZXMgPSAobnVtKSA9PiB7XG5cdGxldCBwcm9qZWN0cyA9IE9iamVjdC5rZXlzKHByb2plY3RJbmRleGVzKTtcblx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdHByb2plY3RJbmRleGVzW3Byb2plY3RdID0gcHJvamVjdEluZGV4ZXNbcHJvamVjdF0ubWFwKChpdGVtKSA9PiB7XG5cdFx0XHRyZXR1cm4gaXRlbSA+IG51bSA/IGl0ZW0gLSAxIDogaXRlbTtcblx0XHR9KTtcblx0fSk7XG5cdC8vIGNvbnNvbGUubG9nKHByb2plY3RJbmRleGVzKTtcbn07XG5cbi8vRGF0YSBzdG9yYWdlIGZvciBsaXN0cyBvZiBwcm9qZWN0c1xuY29uc3QgcHJvamVjdHNVaSA9IFtcIkdlbmVyYWxcIl07XG5cbmNvbnN0IHN0b3JlUHJvamVjdHNVaSA9IChuYW1lKSA9PiB7XG5cdHByb2plY3RzVWkucHVzaChuYW1lKTtcbn07XG5cbmNvbnN0IGNhdGVnb3JpemVBbmRGaWx0ZXIgPSAoKSA9PiB7XG5cdGNvbnN0IGR1ZVRvZGF5ID0gW107XG5cdGNvbnN0IGR1ZVRoaXNXZWVrID0gW107XG5cdGNvbnN0IHBhc3REdWUgPSBbXTtcblx0Y29uc3QgY29tcGxldGVkID0gW107XG5cblx0Y29uc3QgYWNjZXNzRGF0ZVN0b3JhZ2VDb250cm9sbGVyID0gKGtleSkgPT4ge1xuXHRcdGxldCBmb2N1cztcblx0XHRzd2l0Y2ggKGtleSkge1xuXHRcdFx0Y2FzZSBcImR1ZS10b2RheVwiOlxuXHRcdFx0XHRmb2N1cyA9IGR1ZVRvZGF5O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJkdWUtdGhpcy13ZWVrXCI6XG5cdFx0XHRcdGZvY3VzID0gZHVlVGhpc1dlZWs7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInBhc3REdWVcIjpcblx0XHRcdFx0Zm9jdXMgPSBwYXN0RHVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJjb21wbGV0ZWRcIjpcblx0XHRcdFx0Zm9jdXMgPSBjb21wbGV0ZWQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpbnB1dCBlcnJvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBmb2N1cztcblx0fTtcblxuXHRjb25zdCBjaGVja0RhdGVTdGF0dXMgPSAoKSA9PiB7XG5cdFx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblx0XHRsZXQgY3VycmVudFdlZWtEYXlzID0gQXJyYXkuZnJvbShBcnJheSg3KS5rZXlzKCkpLm1hcCgoaWR4KSA9PiB7XG5cdFx0XHRjb25zdCBkID0gbmV3IERhdGUoKTtcblx0XHRcdGQuc2V0RGF0ZShkLmdldERhdGUoKSAtIGQuZ2V0RGF5KCkgKyBpZHgpO1xuXHRcdFx0cmV0dXJuIGQudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cdFx0fSk7XG5cblx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRsZXQgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdGBbZGF0YS1rZXk9XCIke3Rhc2tbXCJ0YXNrSWRcIl19XCJdYFxuXHRcdFx0KTtcblx0XHRcdGxldCB0YXNrRGF0ZSA9IHRhc2tbXCJkYXRlXCJdO1xuXHRcdFx0aWYgKHRhc2tEYXRlID09IHRvZGF5KSB7XG5cdFx0XHRcdGR1ZVRvZGF5LnB1c2godGFzayk7XG5cdFx0XHRcdGR1ZVRoaXNXZWVrLnB1c2godGFzayk7XG5cdFx0XHRcdHRleHRDb250YWluZXIucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5XCIsIFwiZHVlLXRvZGF5XCIpO1xuXHRcdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGhpcy13ZWVrXCIsIFwidHJ1ZVwiKTtcblx0XHRcdH0gZWxzZSBpZiAodGFza0RhdGUgPCB0b2RheSkge1xuXHRcdFx0XHRwYXN0RHVlLnB1c2godGFzayk7XG5cdFx0XHRcdHRleHRDb250YWluZXIucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5XCIsIFwicGFzdC1kdWVcIik7XG5cdFx0XHRcdGlmIChjdXJyZW50V2Vla0RheXMuaW5jbHVkZXModGFza0RhdGUpKSB7XG5cdFx0XHRcdFx0dGV4dENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcInRoaXMtd2Vla1wiLCBcInRydWVcIik7XG5cdFx0XHRcdFx0ZHVlVGhpc1dlZWsucHVzaCh0YXNrKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGhpcy13ZWVrXCIsIFwiZmFsc2VcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBhc3NpZ25EYXRlU3RhdHVzID0gKG9iaikgPT4ge1xuXHRcdGxldCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cdFx0bGV0IGN1cnJlbnRXZWVrRGF5cyA9IEFycmF5LmZyb20oQXJyYXkoNykua2V5cygpKS5tYXAoKGlkeCkgPT4ge1xuXHRcdFx0Y29uc3QgZCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRkLnNldERhdGUoZC5nZXREYXRlKCkgLSBkLmdldERheSgpICsgaWR4KTtcblx0XHRcdHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXHRcdH0pO1xuXHRcdGxldCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG5cdFx0bGV0IHRhc2tJZCA9IG9ialtcInRhc2tJZFwiXTtcblx0XHRsZXQgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7dGFza0lkfVwiXWApO1xuXG5cdFx0aWYgKHRhc2tEYXRlID09IHRvZGF5KSB7XG5cdFx0XHRkdWVUb2RheS5wdXNoKG9iaik7XG5cdFx0XHRkdWVUaGlzV2Vlay5wdXNoKG9iaik7XG5cdFx0XHR0ZXh0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jYXRlZ29yeVwiLCBcImR1ZS10b2RheVwiKTtcblx0XHRcdHRleHRDb250YWluZXIucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aGlzLXdlZWtcIiwgXCJ0cnVlXCIpO1xuXHRcdH0gZWxzZSBpZiAoY3VycmVudFdlZWtEYXlzLmluY2x1ZGVzKHRhc2tEYXRlKSkge1xuXHRcdFx0ZHVlVGhpc1dlZWsucHVzaChvYmopO1xuXHRcdFx0dGV4dENvbnRhaW5lci5wYXJlbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcInRoaXMtd2Vla1wiLCBcInRydWVcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHRDb250YWluZXIucGFyZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0aGlzLXdlZWtcIiwgXCJmYWxzZVwiKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRjaGVja0RhdGVTdGF0dXMsXG5cdFx0YXNzaWduRGF0ZVN0YXR1cyxcblx0XHRhY2Nlc3NEYXRlU3RvcmFnZUNvbnRyb2xsZXIsXG5cdH07XG59O1xuXG5jb25zdCBkYXRlQ2F0ZWdvcml6ZXIgPSBjYXRlZ29yaXplQW5kRmlsdGVyKCk7XG5cbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIHN0b3JlVGFza0RhdGEpO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stYWRkZWRcIiwgY2FjaGVJbmRleGVzKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIHRhc2tJZGVudGl0eU51bWJlci5pbmNyZWFzZUlkTnVtYmVyKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIGxvY2FsU3RvcmFnZUNvbW1pdFRhc2tzKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWRlbGV0ZWRcIiwgcmVtb3ZlRGVsZXRlZENhY2hlSW5kZXgpO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stZGVsZXRlZFwiLCBsb2NhbFN0b3JhZ2VDb21taXRUYXNrcyk7XG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1tb2RpZmllZFwiLCBsb2NhbFN0b3JhZ2VDb21taXRUYXNrcyk7XG5wdWJTdWIuc3Vic2NyaWJlKFwicHJvamVjdC11aS1hZGRlZFwiLCBzdG9yZVByb2plY3RzVWkpO1xucHViU3ViLnN1YnNjcmliZShcInByb2plY3QtdWktYWRkZWRcIiwgbG9jYWxTdG9yYWdlQ29tbWl0UHJvamVjdHMpO1xuXG5leHBvcnQge1xuXHR0YXNrcyxcblx0Y3JlYXRlVGFza0RhdGEsXG5cdHJlbW92ZVRhc2tEYXRhLFxuXHRtb2RpZnlUYXNrRGF0YSxcblx0cHJvamVjdHNVaSxcblx0ZGF0ZUNhdGVnb3JpemVyLFxufTtcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tEYXRhLCBtb2RpZnlUYXNrRGF0YSwgcHJvamVjdHNVaSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWRhdGFcIjtcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGUtaG9tZVwiO1xuXG5mdW5jdGlvbiB0YXNrRm9ybSgpIHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Y29uc3QgZm9ybVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRBcmVhXCIpO1xuXHRjb25zdCB0YXNrRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tEdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgcHJpb3JpdHlGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcblx0Y29uc3QgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlMYWJlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5TGFiZWxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5SW5wdXRMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlJbnB1dEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0Ly8gY29uc3QgZ2VuZXJhbE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0YXNrRm9ybUNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lck92ZXJsYXkpO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmQodGFza0Zvcm1Db250ZW50KTtcblx0dGFza0Zvcm1Db250ZW50LmFwcGVuZChcblx0XHRmb3JtVGl0bGVDb250YWluZXIsXG5cdFx0dGFza1RpdGxlTGFiZWwsXG5cdFx0dGFza0Rlc2NMYWJlbCxcblx0XHR0YXNrRHVlTGFiZWwsXG5cdFx0cHJpb3JpdHlGaWVsZHNldCxcblx0XHR0YXNrUHJvamVjdExhYmVsLFxuXHRcdHRhc2tQcm9qZWN0U2VsZWN0LFxuXHRcdHN1Ym1pdEJ1dHRvblxuXHQpO1xuXHRmb3JtVGl0bGVDb250YWluZXIuYXBwZW5kKGZvcm1UaXRsZSwgY2xvc2UpO1xuXG5cdGZvcm1UaXRsZS5pbm5lclRleHQgPSBcIk5ldyBUYXNrXCI7XG5cdGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuXHR0YXNrVGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRhc2sgbmFtZVwiO1xuXHR0YXNrRGVzY0xhYmVsLmlubmVyVGV4dCA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuXHR0YXNrRHVlTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrIER1ZSBCeVwiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbExvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbE1lZGl1bS5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG5cdHByaW9yaXR5TGVnZW5kLmlubmVyVGV4dCA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG5cdHRhc2tQcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XG5cdC8vIGdlbmVyYWxPcHRpb24uaW5uZXJUZXh0ID0gXCJHZW5lcmFsXCI7XG5cdHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBUYXNrXCI7XG5cblx0dGFza1RpdGxlTGFiZWwuYXBwZW5kKHRhc2tUaXRsZUlucHV0KTtcblx0dGFza0Rlc2NMYWJlbC5hcHBlbmQodGFza0Rlc2NJbnB1dCk7XG5cdHRhc2tEdWVMYWJlbC5hcHBlbmQodGFza0R1ZUlucHV0KTtcblx0cHJpb3JpdHlGaWVsZHNldC5hcHBlbmQoXG5cdFx0cHJpb3JpdHlMZWdlbmQsXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxMb3csXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxNZWRpdW0sXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxIaWdoXG5cdCk7XG5cdHRhc2tQcmlvcml0eUxhYmVsTG93LmFwcGVuZCh0YXNrUHJpb3JpdHlJbnB1dExvdyk7XG5cdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLmFwcGVuZCh0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bSk7XG5cdHRhc2tQcmlvcml0eUxhYmVsSGlnaC5hcHBlbmQodGFza1ByaW9yaXR5SW5wdXRIaWdoKTtcblx0Ly8gdGFza1Byb2plY3RTZWxlY3QuYXBwZW5kKGdlbmVyYWxPcHRpb24pO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItb3ZlcmxheVwiKTtcblx0dGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXHR0YXNrRm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGVudFwiKTtcblx0Zm9ybVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlLWNvbnRhaW5lclwiKTtcblx0Y2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcblx0Zm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlXCIpO1xuXHRzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG5cblx0dGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aXRsZVwiKTtcblx0dGFza0Rlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWR1ZVwiKTtcblx0dGFza1ByaW9yaXR5TGFiZWxMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1wcmlvcml0eS1sb3dcIik7XG5cdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktbWVkaXVtXCIpO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1wcmlvcml0eS1oaWdoXCIpO1xuXHR0YXNrUHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJvamVjdFwiKTtcblxuXHR0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG5cdHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZHVlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktbG93XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktbWVkaXVtXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dEhpZ2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5LWhpZ2hcIik7XG5cdHRhc2tQcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcm9qZWN0XCIpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kdWVcIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcmlvcml0eVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcm9qZWN0XCIpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0QXJlYVwiKTtcblx0dGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TWVkaXVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdGNsb3NlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcblx0dGFza0R1ZUlucHV0LnZhbHVlID0gdG9kYXk7XG5cblx0dGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG5cblx0dGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrRHVlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnJlcXVpcmVkID0gdHJ1ZTtcblxuXHRjcmVhdGVTZWxlY3RPcHRpb25zKCk7XG5cblx0Y2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG5cdHRhc2tGb3JtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm0pO1xuXHR0YXNrRm9ybUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBzdWJtaXRGb3JtKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9ucygpIHtcblx0Y29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcblx0Y29uc3Qgb3B0aW9ucyA9IHByb2plY3RzVWk7XG5cdG9wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGxldCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXHRcdG9wdC5pbm5lclRleHQgPSBpdGVtO1xuXHRcdG9wdC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpdGVtKTtcblx0XHRzZWxlY3QuYXBwZW5kKG9wdCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZSkge1xuXHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItb3ZlcmxheVwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGVudFwiKTtcblx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ1dHRvblwiKTtcblx0Y29uc3Qgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LXByb2plY3QtYnV0dG9uXCIpO1xuXG5cdGlmIChlLnRhcmdldCA9PSB0YXNrRm9ybUNvbnRhaW5lciB8fCBlLnRhcmdldCA9PSBjbG9zZUJ1dHRvbikge1xuXHRcdHByb2plY3RDb250YWluZXJPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0XHR0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdFx0dGFza0Zvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkucmVtb3ZlKCk7XG5cdFx0XHR0YXNrRm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcblx0XHRcdHRhc2tGb3JtQ29udGVudC5yZW1vdmUoKTtcblx0XHR9LCAzMDApO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coXCJmb3JtIGNsb3NlZCB0cmlnZ2VyZWRcIik7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lck92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1vdmVybGF5XCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250ZW50XCIpO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0dGFza0Zvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHR0YXNrRm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXG5cdHRhc2tGb3JtQ29udGVudC5yZXNldCgpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHByb2plY3RDb250YWluZXJPdmVybGF5LnJlbW92ZSgpO1xuXHRcdHRhc2tGb3JtQ29udGFpbmVyLnJlbW92ZSgpO1xuXHRcdHRhc2tGb3JtQ29udGVudC5yZW1vdmUoKTtcblx0fSwgMzAwKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG5cdHRhc2tGb3JtKCk7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItb3ZlcmxheVwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGVudFwiKTtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG5cblx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0dGFza3NBcmVhLmNsYXNzTGlzdC5yZW1vdmUoXCJuby1wb2ludGVyLWV2ZW50c1wiKTtcblxuXHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0dGFza0Zvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cdFx0dGFza0Zvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHRcdHRhc2tGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XG5cdH0sIDIwMCk7XG5cblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIsIFwiY3JlYXRlXCIpO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlGb3JtKHsgbmFtZSwgZGVzYywgZGF0ZSwgcHJpb3JpdHksIHByb2plY3QgfSwgaW5kZXgpIHtcblx0c2hvd0Zvcm0oKTtcblx0Y29uc3QgX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIik7XG5cdGNvbnN0IF9kZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIik7XG5cdGNvbnN0IF9kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWR1ZVwiKTtcblx0Y29uc3QgX3ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2stcHJpb3JpdHktJHtwcmlvcml0eX1gKTtcblx0Y29uc3QgX3Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xuXHRjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG5cblx0X25hbWUudmFsdWUgPSBuYW1lO1xuXHRfZGVzYy52YWx1ZSA9IGRlc2M7XG5cdF9kYXRlLnZhbHVlID0gZGF0ZTtcblx0X3ByaW9yaXR5LmNoZWNrZWQgPSB0cnVlO1xuXHRfcHJvamVjdC52YWx1ZSA9IHByb2plY3Q7XG5cdHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIk1vZGlmeSBUYXNrXCI7XG5cblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIsIFwibW9kaWZ5XCIpO1xuXHRzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgaW5kZXgpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGUpIHtcblx0Y29uc29sZS5sb2coXCJTdWJtaXQgZm9ybSBwcm9jZXNzIGluaXRpYXRlZFwiKTtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdGNvbnN0IGZvcm1BY3Rpb24gPSBlLnRhcmdldFxuXHRcdC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIilcblx0XHQuZ2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIik7XG5cblx0Y29uc3QgdGFza0luZGV4ID0gZS50YXJnZXRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpXG5cdFx0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpO1xuXG5cdGlmIChmb3JtQWN0aW9uID09IFwiY3JlYXRlXCIpIHtcblx0XHRjcmVhdGVUYXNrRGF0YSgpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9IGVsc2UgaWYgKGZvcm1BY3Rpb24gPT0gXCJtb2RpZnlcIikge1xuXHRcdG1vZGlmeVRhc2tEYXRhKHRhc2tJbmRleCk7XG5cdFx0cmVzZXRGb3JtKCk7XG5cdH0gZWxzZSBpZiAoZm9ybUFjdGlvbiA9PSBcImFkZC1wcm9qZWN0XCIpIHtcblx0XHRjb25zdCBwcm9qZWN0TmFtZSA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWU7XG5cdFx0YWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdFx0cmVzZXRGb3JtKCk7XG5cdH1cbn1cblxuZXhwb3J0IHsgdGFza0Zvcm0sIGNsb3NlRm9ybSwgc2hvd0Zvcm0sIG1vZGlmeUZvcm0sIHN1Ym1pdEZvcm0gfTtcbiIsImltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViLXN1YlwiO1xuaW1wb3J0IHsgdGFza3MsIHJlbW92ZVRhc2tEYXRhLCBkYXRlQ2F0ZWdvcml6ZXIgfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1kYXRhXCI7XG5pbXBvcnQgeyByZW5kZXJEZXRhaWxzLCBzaG93RGV0YWlscyB9IGZyb20gXCIuL2NyZWF0ZS1kZXRhaWxzLXBhbmVsXCI7XG5pbXBvcnQgeyBtb2RpZnlGb3JtIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stZm9ybVwiO1xuXG5mdW5jdGlvbiByZW5kZXJUYXNrSGVhZGluZyhkYXRhID0gXCJBbGwgdGFza3NcIikge1xuXHRjb25zdCBoZWFkaW5nVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXHRpZiAoaGVhZGluZ1R3bykge1xuXHRcdGhlYWRpbmdUd28uaW5uZXJUZXh0ID0gZGF0YTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdHRhc2tzQXJlYS5hcHBlbmQoaGVhZGluZyk7XG5cdGhlYWRpbmcuaW5uZXJUZXh0ID0gZGF0YTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhvYmopIHtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgY2hlY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGFza0NoZWNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tDaGVja0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrQ2hlY2tTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IHRhc2tCdXR0b25zQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRhc2tFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cblx0dGFza3NBcmVhLmFwcGVuZCh0YXNrQ29udGFpbmVyKTtcblx0dGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tDb250YWluZXIsIHRleHRDb250YWluZXIpO1xuXHRjaGVja0NvbnRhaW5lci5hcHBlbmQodGFza0NoZWNrTGFiZWwpO1xuXHR0ZXh0Q29udGFpbmVyLmFwcGVuZCh0YXNrTmFtZSwgdGFza0J1dHRvbnNBcmVhKTtcblx0dGFza0NoZWNrTGFiZWwuYXBwZW5kKHRhc2tDaGVja0lucHV0LCB0YXNrQ2hlY2tTcGFuKTtcblx0dGFza0J1dHRvbnNBcmVhLmFwcGVuZCh0YXNrRWRpdCwgdGFza0RlbGV0ZSk7XG5cblx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG5cdGNoZWNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVjay1jb250YWluZXJcIik7XG5cdHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGFpbmVyXCIpO1xuXHR0ZXh0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsIG9ialtcInRhc2tJZFwiXSk7XG5cdHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0XCIsIG9ialtcInByb2plY3RcIl0pO1xuXHR0YXNrQ2hlY2tTcGFuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1zcGFuXCIpO1xuXHR0YXNrQ2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cdHRhc2tCdXR0b25zQXJlYS5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b24tYXJlYVwiKTtcblx0dGFza0VkaXQuY2xhc3NMaXN0LmFkZChcIm1vZGlmeS1idXR0b25cIik7XG5cdHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG5cblx0dGFza05hbWUuaW5uZXJUZXh0ID0gb2JqW1wibmFtZVwiXTtcblx0dGFza0VkaXQuaW5uZXJUZXh0ID0gXCJNb2RpZnlcIjtcblx0dGFza0RlbGV0ZS5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuXG5cdHRleHRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRleHRDb250YWluZXJFdmVudENvbnRyb2xsZXIpO1xuXHRjaGVja0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaXNDaGVja2VkKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTW9kaWZpZWRUYXNrKGlkUHJvcCwgbmFtZVByb3ApIHtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWtleT1cIiR7aWRQcm9wfVwiXWApO1xuXHRjb25zdCB0YXNrTmFtZSA9IHRleHRDb250YWluZXIucXVlcnlTZWxlY3RvcihcInBcIik7XG5cblx0dGFza05hbWUuaW5uZXJUZXh0ID0gbmFtZVByb3A7XG59XG5cbmNvbnN0IHRleHRDb250YWluZXJFdmVudENvbnRyb2xsZXIgPSAoZSkgPT4ge1xuXHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09IFwibW9kaWZ5LWJ1dHRvblwiKSB7XG5cdFx0bW9kaWZ5VGFzayhlKTtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09IFwiZGVsZXRlLWJ1dHRvblwiKSB7XG5cdFx0ZGVsZXRlVGFzayhlKTtcblx0XHRjb25zb2xlLmxvZyh0YXNrcyk7XG5cdFx0cmV0dXJuO1xuXHR9IGVsc2Uge1xuXHRcdHNlbGVjdFRhc2soZSk7XG5cdFx0c2hvd0RldGFpbHMoKTtcblx0fVxufTtcblxuY29uc3Qgc2VsZWN0VGFzayA9IChlKSA9PiB7XG5cdGNvbnN0IG9iaktleSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKHRhc2tzW2ldW1widGFza0lkXCJdID09IG9iaktleSkge1xuXHRcdFx0cmVuZGVyRGV0YWlscyh0YXNrc1tpXSwgaSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59O1xuXG5jb25zdCBtb2RpZnlUYXNrID0gKGUpID0+IHtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGUuY29tcG9zZWRQYXRoKClbMl07XG5cdGNvbnN0IG9iaktleSA9IHRleHRDb250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGFza3NbaV1bXCJ0YXNrSWRcIl0gPT0gb2JqS2V5KSB7XG5cdFx0XHRtb2RpZnlGb3JtKHRhc2tzW2ldLCBpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuXHRjb25zdCB0YXNrQ29udGFpbmVyID0gZS5jb21wb3NlZFBhdGgoKVszXTtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGUuY29tcG9zZWRQYXRoKClbMl07XG5cdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtb3V0XCIpO1xuXHRjb25zdCBvYmpLZXkgPSB0ZXh0Q29udGFpbmVyLmdldEF0dHJpYnV0ZShcImRhdGEta2V5XCIpO1xuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHR0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuXHR9LCAxMDAwKTtcblxuXHRwdWJTdWIucHVibGlzaChcInRhc2stdWktcmVtb3ZlZFwiLCBvYmpLZXkpO1xufTtcblxuY29uc3QgZmlsdGVyVGFza3NCeVByb2plY3QgPSAoZSkgPT4ge1xuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdFwiKTtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRjb25zdCBlbGlnaWJsZSA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdGBbZGF0YS1wcm9qZWN0PVwiJHtwcm9qZWN0TmFtZX1cIl1gXG5cdCk7XG5cdGNvbnN0IGFsbFRhc2tzID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jb250YWluZXJcIik7XG5cdGNvbnN0IGhUd28gPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXG5cdFsuLi5hbGxUYXNrc10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGlmIChpdGVtICE9IGhUd28pIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fVxuXHR9KTtcblxuXHRbLi4uZWxpZ2libGVdLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKFwiY29tcGxldGVcIikpIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IGZpbHRlclRhc2tzQnlEYXRlID0gKGUpID0+IHtcblx0Y29uc3QgZGF0ZU1lbnUgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaWRlLW1lbnVcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgaFR3byA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG5cdGNvbnN0IGFsbFRhc2tzID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jb250YWluZXJcIik7XG5cdGxldCBlbGlnaWJsZTtcblxuXHRpZiAoZGF0ZU1lbnUgPT0gXCJQYXN0IGR1ZVwiKSB7XG5cdFx0ZWxpZ2libGUgPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2F0ZWdvcnk9XCJwYXN0LWR1ZVwiXScpO1xuXHR9IGVsc2UgaWYgKGRhdGVNZW51ID09IFwiRHVlIHRvZGF5XCIpIHtcblx0XHRlbGlnaWJsZSA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jYXRlZ29yeT1cImR1ZS10b2RheVwiXScpO1xuXHR9IGVsc2UgaWYgKGRhdGVNZW51ID09IFwiRHVlIHRoaXMgd2Vla1wiKSB7XG5cdFx0ZWxpZ2libGUgPSB0YXNrc0FyZWEucXVlcnlTZWxlY3RvckFsbCgnW3RoaXMtd2Vlaz1cInRydWVcIl0nKTtcblx0fVxuXG5cdFsuLi5hbGxUYXNrc10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGlmIChpdGVtICE9IGhUd28pIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fVxuXHR9KTtcblxuXHRbLi4uZWxpZ2libGVdLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpZiAoIWl0ZW0uZ2V0QXR0cmlidXRlKFwiY29tcGxldGVcIikpIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IHNob3dBbGxUYXNrcyA9ICgpID0+IHtcblx0Y29uc3QgdGFza3NBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1hcmVhXCIpO1xuXHRjb25zdCBhbGxUYXNrcyA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXHRjb25zdCBoVHdvID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcblx0Wy4uLmFsbFRhc2tzXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0aWYgKGl0ZW0gIT0gaFR3byAmJiAhaXRlbS5nZXRBdHRyaWJ1dGUoXCJjb21wbGV0ZVwiKSkge1xuXHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHR9IGVsc2UgaWYgKGl0ZW0uZ2V0QXR0cmlidXRlKFwiY29tcGxldGVcIikpIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fVxuXHR9KTtcbn07XG5cbmNvbnN0IGlzQ2hlY2tlZCA9IChlKSA9PiB7XG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudDtcblx0Y29uc3QgZGF0YUtleSA9IHRhc2tDb250YWluZXJcblx0XHQucXVlcnlTZWxlY3RvcihcIi50ZXh0LWNvbnRhaW5lclwiKVxuXHRcdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblx0Ly8gY29uc29sZS5sb2coZS50YXJnZXQpO1xuXHRpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuXHRcdHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY29tcGxldGVcIiwgXCJ0cnVlXCIpO1xuXHRcdHRhc2tDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzhlY2M1NFwiO1xuXHRcdHRhc2tDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tlZC1hbmltYXRlLW91dFwiKTtcblx0XHR9LCAxMDAwKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSwgMjAwMCk7XG5cdFx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLXVpLXJlbW92ZWRcIiwgZGF0YUtleSk7XG5cdH1cblx0Ly8gZWxzZSB7XG5cdC8vIFx0dGFza0NvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoXCJjb21wbGV0ZVwiKTtcblx0Ly8gXHR0YXNrQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBcIiNlM2YwZmZcIjtcblx0Ly8gXHR0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHQvLyB9XG59O1xuXG5jb25zdCBzaG93Q29tcGxldGVkID0gKCkgPT4ge1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdGNvbnN0IGFsbFRhc2tzID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzay1jb250YWluZXJcIik7XG5cdGNvbnN0IGVsaWdpYmxlID0gdGFza3NBcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjb21wbGV0ZT1cInRydWVcIl0nKTtcblx0Y29uc3QgaFR3byA9IHRhc2tzQXJlYS5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG5cdFsuLi5hbGxUYXNrc10uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGlmIChpdGVtICE9IGhUd28pIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fVxuXHR9KTtcblx0Wy4uLmVsaWdpYmxlXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkLWFuaW1hdGUtb3V0XCIpO1xuXHR9KTtcbn07XG5cbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLWFkZGVkXCIsIHJlbmRlclRhc2spO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stYWRkZWRcIiwgZGF0ZUNhdGVnb3JpemVyLmFzc2lnbkRhdGVTdGF0dXMpO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stdWktcmVtb3ZlZFwiLCByZW1vdmVUYXNrRGF0YSk7XG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1tb2RpZmllZFwiLCByZW5kZXJNb2RpZmllZFRhc2spO1xuXG5leHBvcnQge1xuXHRyZW5kZXJUYXNrSGVhZGluZyxcblx0cmVuZGVyVGFzayxcblx0ZmlsdGVyVGFza3NCeVByb2plY3QsXG5cdHNob3dBbGxUYXNrcyxcblx0ZmlsdGVyVGFza3NCeURhdGUsXG5cdHNob3dDb21wbGV0ZWQsXG59O1xuIiwiY2xhc3MgUHViU3ViIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy50cmFja2VyID0ge1xuXHRcdFx0Ly9rZXk6IGFjdGl2aXR5TmFtZSwgdmFsdWU6IFtmdW5jc11cblx0XHR9O1xuXHR9XG5cdHN1YnNjcmliZShhY3Rpdml0eU5hbWUsIGZ1bmMpIHtcblx0XHRpZiAodGhpcy50cmFja2VyW2FjdGl2aXR5TmFtZV0pIHtcblx0XHRcdHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdLnB1c2goZnVuYyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdID0gW2Z1bmNdO1xuXHRcdH1cblx0fVxuXG5cdHVuc3Vic2NyaWJlKGFjdGl2aXR5TmFtZSwgZnVuYykge1xuXHRcdGNvbnN0IGZ1bmNBcnJheSA9IHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdO1xuXHRcdGNvbnN0IGZ1bmNJbmRleCA9IGZ1bmNBcnJheS5pbmRleE9mKGZ1bmMpO1xuXHRcdGlmIChmdW5jSW5kZXggPiAtMSkge1xuXHRcdFx0ZnVuY0FycmF5LnNwbGljZShmdW5jSW5kZXgsIDEpO1xuXHRcdH1cblx0fVxuXG5cdHB1Ymxpc2goYWN0aXZpdHlOYW1lLCAuLi5hcmdzKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy50cmFja2VyW2FjdGl2aXR5TmFtZV0pKSB7XG5cdFx0XHR0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGl0ZW0uYXBwbHkobnVsbCwgYXJncyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgcHViU3ViID0gbmV3IFB1YlN1YigpO1xuXG5leHBvcnQgZGVmYXVsdCBwdWJTdWI7XG4iLCJpbXBvcnQgeyB0YXNrcywgcHJvamVjdHNVaSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWRhdGFcIjtcbmltcG9ydCBwdWJTdWIgZnJvbSBcIi4vcHViLXN1YlwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdCB9IGZyb20gXCIuL2NyZWF0ZS1ob21lXCI7XG5cbmNvbnN0IGxvY2FsU3RvcmFnZUNvbW1pdFRhc2tzID0gKCkgPT4ge1xuXHRsZXQgc2VyaWFsaXplZFRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFza3MpO1xuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tEYXRhXCIsIHNlcmlhbGl6ZWRUYXNrcyk7XG5cdGNvbnNvbGUud2FybihcImxvY2FsIHN0b3JhZ2UgdGFza0RhdGEgdXBkYXRlZFwiKTtcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZVJldHJpZXZlVGFza3MgPSAoKSA9PiB7XG5cdGxldCBkZXNlcmlhbGl6ZWRUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrRGF0YVwiKSk7XG5cdHJldHVybiBkZXNlcmlhbGl6ZWRUYXNrcztcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZUNvbW1pdFByb2plY3RzID0gKCkgPT4ge1xuXHRsZXQgc2VyaWFsaXplZFByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHNVaSk7XG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNEYXRhXCIsIHNlcmlhbGl6ZWRQcm9qZWN0cyk7XG5cdGNvbnNvbGUud2FybihcImxvY2FsIHN0b3JhZ2UgcHJvamVjdERhdGEgdXBkYXRlZFwiKTtcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZVJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiB7XG5cdGxldCBkZXNlcmlhbGl6ZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0RhdGFcIikpO1xuXHRyZXR1cm4gZGVzZXJpYWxpemVkUHJvamVjdHM7XG59O1xuXG5jb25zdCBwYWdlTG9hZGVyID0gKCkgPT4ge1xuXHRsZXQgbG9jYWxTdG9yYWdlVGFza0RhdGEgPSBsb2NhbFN0b3JhZ2VSZXRyaWV2ZVRhc2tzKCk7XG5cdGxldCBsb2NhbFN0b3JhZ2VQcm9qZWN0RGF0YSA9IGxvY2FsU3RvcmFnZVJldHJpZXZlUHJvamVjdHMoKTtcblxuXHRpZiAobG9jYWxTdG9yYWdlVGFza0RhdGEpIHtcblx0XHRsb2NhbFN0b3JhZ2VUYXNrRGF0YS5mb3JFYWNoKCh0YXNrLCBpLCBhKSA9PiB7XG5cdFx0XHRwdWJTdWIucHVibGlzaChcInRhc2stYWRkZWRcIiwgdGFzayk7XG5cdFx0fSk7XG5cdH1cblx0aWYgKGxvY2FsU3RvcmFnZVByb2plY3REYXRhKSB7XG5cdFx0bG9jYWxTdG9yYWdlUHJvamVjdERhdGEuZm9yRWFjaCgocHJvamVjdCwgaSkgPT4ge1xuXHRcdFx0aWYgKGkgPiAwKSB7XG5cdFx0XHRcdGFkZFByb2plY3QocHJvamVjdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7XG5cdGxvY2FsU3RvcmFnZUNvbW1pdFRhc2tzLFxuXHRsb2NhbFN0b3JhZ2VDb21taXRQcm9qZWN0cyxcblx0bG9jYWxTdG9yYWdlUmV0cmlldmVUYXNrcyxcblx0bG9jYWxTdG9yYWdlUmV0cmlldmVQcm9qZWN0cyxcblx0cGFnZUxvYWRlcixcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG5cdGNyZWF0ZUhlYWRlcixcblx0Y3JlYXRlRGFzaGJvYXJkU3RydWN0dXJlLFxuXHRjcmVhdGVIYW1idXJnZXIsXG5cdGNyZWF0ZVNpZGVNZW51LFxuXHRjcmVhdGVQcm9qZWN0TWVudSxcbn0gZnJvbSBcIi4vY3JlYXRlLWhvbWVcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tIZWFkaW5nIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2stcGFuZWxcIjtcbmltcG9ydCB7IHBhZ2VMb2FkZXIgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmNvbnN0IGNyZWF0ZUludGVyZmFjZSA9ICgpID0+IHtcblx0Y3JlYXRlSGVhZGVyKCk7XG5cdGNyZWF0ZUhhbWJ1cmdlcigpO1xuXHRjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUoKTtcblx0Y3JlYXRlU2lkZU1lbnUoKTtcblx0Y3JlYXRlUHJvamVjdE1lbnUoKTtcblx0cmVuZGVyVGFza0hlYWRpbmcoKTtcblx0cGFnZUxvYWRlcigpO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNyZWF0ZUludGVyZmFjZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=