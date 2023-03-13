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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v8.4.14,\n* Autoprefixer: v10.4.7\n* Browsers: last 4 version\n*/\n\n:root {\n\tfont-family: \"Varela Round\", sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bold;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: row;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground-color: #fff;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 0.25rem solid white;\n\tbackground-color: rgba(0, 61, 140, 0.6);\n\t-webkit-backdrop-filter: blur(5px);\n\tbackdrop-filter: blur(5px);\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\t-webkit-transform: translateX(-350px);\n\t-ms-transform: translateX(-350px);\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\t-webkit-transform: translateX(500px);\n\t-ms-transform: translateX(500px);\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-size: 1.55rem;\n\tmargin: 1.3rem 4rem;\n\tcolor: #043584;\n\ttext-align: left;\n}\n\n.task-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-animation: slide-in 1.8s ease-out forwards;\n\tanimation: slide-in 1.8s ease-out forwards;\n}\n\n.animate-out {\n\t-webkit-animation: slide-out 1s ease-in-out forwards;\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n@-webkit-keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 1rem 0;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n}\n\n.task-container p {\n\tmargin: 0 0.5rem 0 2rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\t/* margin: auto 0.5rem; */\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\t-webkit-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 0.5rem;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1.2rem;\n\twidth: 1.25rem;\n\tmargin-right: 1rem;\n\tpadding: 0.25rem;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n\tborder: 2px solid #fff;\n}\n\n.details-divider {\n\theight: 2px;\n\tbackground-color: #b2d5fc;\n\tmargin-top: 4.3rem;\n\tborder: none;\n\tmargin-left: 1.5rem;\n\tmargin-right: 1rem;\n}\n\n.details-divider2 {\n\theight: 2px;\n\tbackground-color: #ffffff;\n\tborder: none;\n\tmargin-left: 1.5rem;\n\tmargin-right: 1rem;\n\tmargin-bottom: 2.25rem;\n}\n\n.details-title {\n\tpadding: 1.5rem;\n\tfont-size: 1.75rem;\n\t/* text-transform: uppercase; */\n\ttext-align: left;\n\tcolor: #043584;\n\tmargin-right: 1rem;\n\tmargin-left: 1.5rem;\n\tmargin-top: 2.25rem;\n\tmargin-bottom: 2.25rem;\n\tmax-width: 90%;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tfont-weight: bold;\n}\n\n.project,\n.priority,\n.due-date {\n\tdisplay: block;\n\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #bc3939;\n\tbackground: var(--white);\n\tmargin: 1rem 1rem 1rem 1.5rem;\n\tpadding: 0.65rem 1rem;\n\tborder-radius: 5px;\n}\n\n.due-date {\n\tmargin-bottom: 2.25rem;\n}\n\n.project {\n\tmargin-top: 2.25rem;\n}\n\n.project-priority-text {\n\tcolor: #043584;\n}\n\n.details-description {\n\tmax-width: 90%;\n\tmargin-left: 1.5rem;\n\tmargin-right: 1rem;\n\tcolor: #043584;\n\tbackground: #fff;\n\tpadding: 0.65rem 1rem;\n\tfont-size: 1rem;\n\tline-height: 1.75rem;\n\tborder-radius: 5px;\n\tmin-height: 100px;\n}\n\n.desc-title {\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.details-edit-button {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 1.2rem;\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin-left: 1.5rem;\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #ffffff;\n\tcursor: pointer;\n}\n\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n}\n\n.editable {\n\tborder: 1px solid red;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: start;\n\t-ms-flex-align: start;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: -o-linear-gradient(45deg, #0d3562, #266abe);\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 300px);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela Round;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content fieldset {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tfont-family: Varela Round;\n}\n\n.form-content option {\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela Round;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\t-webkit-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\n\n/*Project Form*/\n\n.project-area {\n\tmargin-top: 3rem;\n\theight: auto;\n\tpadding: 0;\n}\n\n.project-button {\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmargin: 3rem 1.5rem 1rem 1.5rem;\n\twidth: 10rem;\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n\ttransition: 0.3s all ease-in-out;\n}\n\n.project-form-content {\n\tpadding-top: 2.5rem;\n\ttransition: all 0.3s ease-in-out;\n\ttransform: scale(0);\n}\n\n.project-form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.project-heading {\n\tpadding: 1rem 1.5rem;\n\tmargin: 0;\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tborder-top: 1px solid var(--divider-color);\n\tborder-bottom: 1px solid var(--divider-color);\n\t/* background-color: #eff4fa; */\n}\n\n.project-div {\n\tpadding: 1rem 1rem 1rem 3rem;\n\tfont-size: 1.1rem;\n\tborder: 1px solid var(--divider-color);\n\tcursor: pointer;\n\ttransition: all 0.2s ease-out;\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\t-webkit-transform: rotate(360deg) scale(1.5);\n\t\t-ms-transform: rotate(360deg) scale(1.5);\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\t-webkit-transform: translateX(10px);\n\t\t-ms-transform: translateX(10px);\n\t\ttransform: translateX(10px);\n\t}\n\n\t.project-div:hover {\n\t\tcolor: var(--white);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\t-webkit-transform: scale(1.25) translateX(5px);\n\t\t-ms-transform: scale(1.25) translateX(5px);\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\t-webkit-transform: scale(1.25);\n\t\t-ms-transform: scale(1.25);\n\t\ttransform: scale(1.25);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n\n\t.details-edit-button:hover {\n\t\tbackground: #bc3939;\n\t\tcolor: #fff;\n\t}\n\n\t.details-edit-button:focus {\n\t\tbackground: #871b1b;\n\t\tcolor: #fff;\n\t}\n\n\t.project-button:hover {\n\t\twidth: 12rem;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.logo-area p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 265px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\t/* margin-bottom: 1rem; */\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\t-webkit-box-align: start;\n\t\t-ms-flex-align: start;\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/*\n* Prefixed by https://autoprefixer.github.io\n* PostCSS: v8.4.14,\n* Autoprefixer: v10.4.7\n* Browsers: last 4 version\n*/\n\n:root {\n\tfont-family: \"Varela Round\", sans-serif;\n\tfont-size: 16px;\n\tfont-weight: 400;\n\t--divider-color: #f1f1f1;\n\t--logo-pink: #ff1b6b;\n\t--logo-blue: #45caff;\n\t--logo-mid-blue: #0061ff;\n\t--logo-green: #73ff00;\n\t--dark-mode-bg: #232323;\n\t--white: #fff;\n\t--off-white: #f5f5f5;\n}\n\nbody {\n\tmargin: 0;\n}\n\n.header-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder-bottom: 2px solid var(--divider-color);\n\theight: 60px;\n}\n\n.logo-area,\n.header-menu {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tpadding: 0.5rem 1.25rem;\n}\n\n.logo-area p {\n\tfont-weight: bold;\n\tfont-size: 1.5rem;\n\tmargin: 0;\n}\n\n.logo-area img {\n\theight: 2.25rem;\n}\n\n.header-menu a {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.header-menu img {\n\theight: 1.5rem;\n\tborder-radius: 2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.header-button {\n\tfont-size: 1.5rem;\n\ttext-align: center;\n\t/* background: linear-gradient(45deg, var(--logo-blue), #043584); */\n\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tborder: none;\n\tborder-radius: 2rem;\n\tmargin-left: 0.5rem;\n\tpadding: 0.35rem 1.5rem 0.35rem 1rem;\n\tcolor: var(--white);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n}\n\n.plus {\n\tfont-weight: bold;\n}\n\n/* DASHBOARD AREA*/\n\n.dash-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: row;\n\tflex-direction: row;\n\tgap: 1rem;\n\theight: calc(100dvh - 62px);\n\tbackground: var(--white);\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.menu-area {\n\twidth: 350px;\n\theight: 100%;\n\tborder-right: 2px solid var(--divider-color);\n\tbackground-color: #fff;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding-top: 1rem;\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: relative;\n\tz-index: 6;\n}\n\n.tasks-area {\n\t/* min-width: calc(100vw - 720px); */\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: calc(100dvh - 68px);\n\toverflow-y: scroll;\n\tmargin-left: 1.5rem;\n\t/* margin-right: 0.5rem; */\n\t-webkit-transition: all 0.4s ease-in-out;\n\t-o-transition: all 0.4s ease-in-out;\n\ttransition: all 0.4s ease-in-out;\n}\n\n.details-area {\n\tmin-width: 400px;\n\tmax-width: 450px;\n\theight: 100%;\n\tborder-left: 0.25rem solid white;\n\tbackground-color: rgba(0, 61, 140, 0.6);\n\t-webkit-backdrop-filter: blur(5px);\n\tbackdrop-filter: blur(5px);\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n\t-webkit-transform: translateX(0px);\n\t-ms-transform: translateX(0px);\n\ttransform: translateX(0px);\n\tposition: absolute;\n\tright: 0;\n\tz-index: 5;\n}\n\n.hamburger {\n\twidth: 2rem;\n\tmargin-left: 1.25rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tcursor: pointer;\n\tposition: absolute;\n\ttop: 5rem;\n\tz-index: 10;\n}\n\n.hide-side-menu {\n\t-webkit-transform: translateX(-350px);\n\t-ms-transform: translateX(-350px);\n\ttransform: translateX(-350px);\n}\n\n.hide-details-panel {\n\t-webkit-transform: translateX(500px);\n\t-ms-transform: translateX(500px);\n\ttransform: translateX(500px);\n}\n\n.no-display {\n\tdisplay: none;\n}\n\n.no-pointer-events {\n\tpointer-events: none;\n}\n\n.menu-item-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 1rem 1.25rem 1rem 1.25rem;\n\tborder-bottom: 1px solid var(--divider-color);\n\tcursor: pointer;\n}\n\n.menu-item-container:nth-child(1) {\n\tmargin-top: 3rem;\n}\n\n.menu-item-container svg {\n\theight: 1rem;\n}\n\n.menu-item {\n\tfont-size: 1.2rem;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.tasks-area::-webkit-scrollbar {\n\twidth: 12px;\n}\n\n.tasks-area::-webkit-scrollbar-thumb {\n\tbackground: rgb(202, 230, 249);\n}\n\n.tasks-area::-webkit-scrollbar-thumb:hover {\n\tbackground: rgb(156, 200, 230);\n}\n\n.tasks-area::-webkit-scrollbar-track {\n\tbackground: rgb(255, 255, 255);\n}\n\n.tasks-area h2 {\n\tfont-size: 1.55rem;\n\tmargin: 1.3rem 4rem;\n\tcolor: #043584;\n\ttext-align: left;\n}\n\n.task-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t/* align-items: center; */\n\tbackground-color: #e3f0ff;\n\tmargin: 0.75rem 1rem 0.75rem 0;\n\n\tborder-radius: 5px;\n\tborder-bottom: 1px solid #c4d5f0;\n\tcursor: pointer;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\t-webkit-animation: slide-in 1.8s ease-out forwards;\n\tanimation: slide-in 1.8s ease-out forwards;\n}\n\n.animate-out {\n\t-webkit-animation: slide-out 1s ease-in-out forwards;\n\tanimation: slide-out 1s ease-in-out forwards;\n}\n\n@-webkit-keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes slide-in {\n\t0% {\n\t\tbackground-color: #2a85df;\n\t\t-webkit-transform: translateX(-2rem);\n\t\ttransform: translateX(-2rem);\n\t\topacity: 0.2;\n\t}\n\n\t90% {\n\t\tbackground-color: #e3f0ff;\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n}\n\n@-webkit-keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes slide-out {\n\t0% {\n\t\t-webkit-transform: translateX(0rem);\n\t\ttransform: translateX(0rem);\n\t\topacity: 1;\n\t}\n\n\t100% {\n\t\t-webkit-transform: translateX(-100vw);\n\t\ttransform: translateX(-100vw);\n\t\topacity: 0;\n\t}\n}\n\n.check-container {\n\twidth: 2.35rem;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tpadding-left: 0.5rem;\n\tpadding-right: 1rem;\n\tborder-right: 2px solid #ffffff;\n}\n\n.text-container {\n\twidth: calc(100% - 2.35rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\t-ms-flex-wrap: wrap;\n\tflex-wrap: wrap;\n\tpadding: 1rem 0;\n}\n\n.task-button-area {\n\tmargin: auto 1rem auto auto;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tgap: 1rem;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n}\n\n.task-container p {\n\tmargin: 0 0.5rem 0 2rem;\n\tmax-width: 60%;\n\tfont-size: 1.2rem;\n\tpointer-events: none;\n}\n\n.task-container button {\n\t/* margin: auto 0.5rem; */\n\tborder: none;\n\tbackground: rgb(255, 255, 255);\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-size: 1rem;\n\tpadding: 0.3rem 0.75rem;\n\tborder-radius: 10px;\n\t-webkit-transition: all 0.2s ease-in-out;\n\t-o-transition: all 0.2s ease-in-out;\n\ttransition: all 0.2s ease-in-out;\n}\n\n.task-container label {\n\tposition: relative;\n\tmargin-left: 0.5rem;\n\tbottom: 4px;\n\tcursor: pointer;\n}\n\n.task-container input[type=\"checkbox\"] {\n\tvisibility: hidden;\n\tmargin: 0;\n}\n\n.task-container span {\n\tposition: absolute;\n\tleft: 0;\n\theight: 1.75rem;\n\twidth: 1.75rem;\n\tbackground-color: var(--white);\n\tborder-radius: 50%;\n}\n\n.task-container input:checked ~ span {\n\tbackground-color: #266abe;\n}\n\n.task-container input:checked ~ span::after {\n\tdisplay: inline-block;\n\tz-index: 1;\n}\n\n.task-container span::after {\n\tposition: relative;\n\tz-index: -1;\n\tleft: 0.75rem;\n\tcontent: \"\";\n\twidth: 0.35rem;\n\theight: 1.1rem;\n\tborder: 1px solid rgb(255, 255, 255);\n\tborder-width: 0 4px 4px 0;\n\t-webkit-transform: rotate(45deg);\n\t-ms-transform: rotate(45deg);\n\ttransform: rotate(45deg);\n}\n\n.details-info-container {\n\tmargin-top: 0.5rem;\n}\n\n.back-arrow {\n\tposition: absolute;\n\tright: 0;\n\ttop: 1.2rem;\n\twidth: 1.25rem;\n\tmargin-right: 1rem;\n\tpadding: 0.25rem;\n\tborder-radius: 50%;\n\tbackground-color: #bc3939;\n\tborder: 2px solid #fff;\n}\n\n.details-divider {\n\theight: 2px;\n\tbackground-color: #b2d5fc;\n\tmargin-top: 4.3rem;\n\tborder: none;\n\tmargin-left: 1.5rem;\n\tmargin-right: 1rem;\n}\n\n.details-divider2 {\n\theight: 2px;\n\tbackground-color: #ffffff;\n\tborder: none;\n\tmargin-left: 1.5rem;\n\tmargin-right: 1rem;\n\tmargin-bottom: 2.25rem;\n}\n\n.details-title {\n\tpadding: 1.5rem;\n\tfont-size: 1.75rem;\n\t/* text-transform: uppercase; */\n\ttext-align: left;\n\tcolor: #043584;\n\tmargin-right: 1rem;\n\tmargin-left: 1.5rem;\n\tmargin-top: 2.25rem;\n\tmargin-bottom: 2.25rem;\n\tmax-width: 90%;\n\tbackground: #fff;\n\tborder-radius: 5px;\n\tfont-weight: bold;\n}\n\n.project,\n.priority,\n.due-date {\n\tdisplay: block;\n\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #bc3939;\n\tbackground: var(--white);\n\tmargin: 1rem 1rem 1rem 1.5rem;\n\tpadding: 0.65rem 1rem;\n\tborder-radius: 5px;\n}\n\n.due-date {\n\tmargin-bottom: 2.25rem;\n}\n\n.project {\n\tmargin-top: 2.25rem;\n}\n\n.project-priority-text {\n\tcolor: #043584;\n}\n\n.details-description {\n\tmax-width: 90%;\n\tmargin-left: 1.5rem;\n\tmargin-right: 1rem;\n\tcolor: #043584;\n\tbackground: #fff;\n\tpadding: 0.65rem 1rem;\n\tfont-size: 1rem;\n\tline-height: 1.75rem;\n\tborder-radius: 5px;\n\tmin-height: 100px;\n}\n\n.desc-title {\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n}\n\n.due-text {\n\tdisplay: inline-block;\n\tfont-size: 0.85rem;\n\tfont-weight: bold;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.5px;\n\tcolor: #043584;\n\tbackground: var(--white);\n\tline-height: normal;\n\tpadding: 0.2rem 0.8rem;\n\tborder-radius: 5px;\n}\n\n.details-edit-button {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 1.2rem;\n\tcolor: #043584;\n\tfont-family: Varela Round;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin-left: 1.5rem;\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #ffffff;\n\tcursor: pointer;\n}\n\n[contenteditable]:focus {\n\toutline: 0px solid transparent;\n}\n\n.editable {\n\tborder: 1px solid red;\n}\n\n/*FORM AREA*/\n\n.container-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 6;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n}\n\n.form-container {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 11;\n\twidth: 100%;\n\theight: calc(100% - 8rem);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: center;\n\t-ms-flex-pack: center;\n\tjustify-content: center;\n\t-webkit-box-align: start;\n\t-ms-flex-align: start;\n\talign-items: flex-start;\n\tpadding: 4rem 0;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content {\n\tcolor: white;\n\tbackground: -o-linear-gradient(45deg, #0d3562, #266abe);\n\tbackground: linear-gradient(45deg, #0d3562, #266abe);\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t-ms-flex-direction: column;\n\tflex-direction: column;\n\tpadding: 0.5rem 1rem 2rem 1rem;\n\tgap: 1rem;\n\tborder-radius: 0.75rem;\n\twidth: max(25vw, 300px);\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-title-container {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\t-webkit-box-align: center;\n\t-ms-flex-align: center;\n\talign-items: center;\n\tborder-bottom: 2px solid #45caff;\n\tmargin: 0.5rem 0;\n}\n\n.form-title {\n\tfont-size: 1.1rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n}\n\n.close-button {\n\tfont-size: 1.1rem;\n\tcolor: #ffffff;\n\twidth: 1.7em;\n\theight: 1.7em;\n\tborder: none;\n\tborder-radius: 50%;\n\tbackground: #092d59;\n\tpadding: 0.2rem;\n\t-webkit-transition: all 0.3s ease-in-out;\n\t-o-transition: all 0.3s ease-in-out;\n\ttransition: all 0.3s ease-in-out;\n}\n\n.form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content textarea {\n\twidth: 100%;\n\theight: 4rem;\n\tmargin: 0.5rem 0 0.3rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tresize: none;\n\tfont-family: Varela Round;\n}\n\n.form-content input[type=\"date\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.form-content fieldset {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-pack: justify;\n\t-ms-flex-pack: justify;\n\tjustify-content: space-between;\n\tborder: 2px solid #fff;\n\tborder-radius: 0.5rem;\n\tpadding-bottom: 1rem;\n\tmargin-bottom: 0.75rem;\n}\n\n.form-content legend {\n\tpadding: 0.5rem;\n}\n\n.form-content input[type=\"radio\"] {\n\taccent-color: #45caff;\n}\n\n.form-container select {\n\theight: 2rem;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\tfont-family: Varela Round;\n}\n\n.form-content option {\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n}\n\n.submit-button {\n\theight: 2.5rem;\n\tbackground: #45caff;\n\tborder-radius: 0.5rem;\n\tborder: none;\n\tfont-family: Varela Round;\n\tfont-size: 1.2rem;\n\tmargin-top: 1rem;\n\t-webkit-transition: all 0.3s ease-out;\n\t-o-transition: all 0.3s ease-out;\n\ttransition: all 0.3s ease-out;\n}\n\n/*Project Form*/\n\n.project-area {\n\tmargin-top: 3rem;\n\theight: auto;\n\tpadding: 0;\n}\n\n.project-button {\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 0.5rem;\n\tmargin: 3rem 1.5rem 1rem 1.5rem;\n\twidth: 10rem;\n\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\tcolor: #fff;\n\tfont-size: 1rem;\n\tfont-family: Varela Round;\n\ttransition: 0.3s all ease-in-out;\n}\n\n.project-form-content {\n\tpadding-top: 2.5rem;\n\ttransition: all 0.3s ease-in-out;\n\ttransform: scale(0);\n}\n\n.project-form-content input[type=\"text\"] {\n\twidth: 100%;\n\tmargin: 0.5rem 0;\n\tpadding: 0.5rem;\n\t-webkit-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder: none;\n\tborder-radius: 0.5rem;\n\theight: 2rem;\n\tfont-family: Varela Round;\n}\n\n.project-heading {\n\tpadding: 1rem 1.5rem;\n\tmargin: 0;\n\tfont-size: 1.2rem;\n\tfont-weight: bold;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tborder-top: 1px solid var(--divider-color);\n\tborder-bottom: 1px solid var(--divider-color);\n\t/* background-color: #eff4fa; */\n}\n\n.project-div {\n\tpadding: 1rem 1rem 1rem 3rem;\n\tfont-size: 1.1rem;\n\tborder: 1px solid var(--divider-color);\n\tcursor: pointer;\n\ttransition: all 0.2s ease-out;\n}\n\n/* .tasks-overlay {\n\tposition: absolute;\n\ttop: 0;\n\tz-index: 4;\n\twidth: 100vw;\n\theight: 100vh;\n\tbackground: black;\n\topacity: 0.7;\n\ttransition: all 0.3s ease-in-out;\n\tmargin: 0;\n} */\n\n@media only screen and (min-width: 768px) {\n\t.task-container:hover {\n\t\tbackground-color: #9dc7f5;\n\t}\n\n\t.modify-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #0f58cd;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.delete-button:hover {\n\t\tpadding: 0.3rem 1.5rem;\n\t\tbackground-color: #bc3939;\n\t\tcolor: #fff;\n\t\tfont-weight: bold;\n\t}\n\n\t.task-container span:hover {\n\t\tbackground-color: #266abe;\n\t}\n\n\t.header-button:hover {\n\t\tpadding: 0.55rem 3rem 0.55rem 2.5rem;\n\t}\n\n\t.header-menu img:hover {\n\t\t-webkit-transform: rotate(360deg) scale(1.5);\n\t\t-ms-transform: rotate(360deg) scale(1.5);\n\t\ttransform: rotate(360deg) scale(1.5);\n\t}\n\n\t.menu-item-container:hover {\n\t\t/* background: linear-gradient(90deg, var(--logo-mid-blue), var(--logo-blue)); */\n\t\tcolor: var(--white);\n\t\t/* background: linear-gradient(225deg, var(--logo-blue), #043584); */\n\t\tbackground: -o-linear-gradient(45deg, #043584, #0f58cd);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.menu-item-container:hover .menu-item {\n\t\t-webkit-transform: translateX(10px);\n\t\t-ms-transform: translateX(10px);\n\t\ttransform: translateX(10px);\n\t}\n\n\t.project-div:hover {\n\t\tcolor: var(--white);\n\t\tbackground: linear-gradient(45deg, #043584, #0f58cd);\n\t}\n\n\t.hamburger:hover {\n\t\tborder-radius: 5px;\n\t\t-webkit-transform: scale(1.25) translateX(5px);\n\t\t-ms-transform: scale(1.25) translateX(5px);\n\t\ttransform: scale(1.25) translateX(5px);\n\t}\n\n\t.back-arrow:hover {\n\t\t-webkit-transform: scale(1.25);\n\t\t-ms-transform: scale(1.25);\n\t\ttransform: scale(1.25);\n\t\t-webkit-transition: all 0.3s ease-out;\n\t\t-o-transition: all 0.3s ease-out;\n\t\ttransition: all 0.3s ease-out;\n\t}\n\n\t.close-button:hover {\n\t\tfont-weight: bold;\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.submit-button:hover {\n\t\tbackground: #edea2b;\n\t\theight: 3rem;\n\t}\n\n\t.submit-button:active {\n\t\tbackground: #266abe;\n\t}\n\n\t.close-button:active {\n\t\tbackground: #7c190a;\n\t}\n\n\t.details-edit-button:hover {\n\t\tbackground: #bc3939;\n\t\tcolor: #fff;\n\t}\n\n\t.details-edit-button:focus {\n\t\tbackground: #871b1b;\n\t\tcolor: #fff;\n\t}\n\n\t.project-button:hover {\n\t\twidth: 12rem;\n\t}\n}\n\n@media only screen and (max-width: 768px) {\n\t.menu-area {\n\t\twidth: 275px;\n\t\tposition: absolute;\n\t}\n}\n\n@media only screen and (max-width: 550px) {\n\t.logo-area p {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.logo-area img {\n\t\theight: 1.3rem;\n\t}\n\n\t.header-button {\n\t\tfont-size: 1.2rem;\n\t}\n\n\t.header-menu img {\n\t\tdisplay: none;\n\t}\n\n\t.details-area {\n\t\tmax-width: 265px;\n\t\tmin-width: 50px;\n\t}\n\n\t.task-container p {\n\t\tleft: 2rem;\n\t}\n\n\t.task-button-area {\n\t\tmargin: auto 1.5rem;\n\t}\n\n\t.task-container button {\n\t\t/* margin-bottom: 1rem; */\n\t\tfont-size: 0.9rem;\n\t\tpadding: 0.3rem 0.55rem;\n\t}\n\n\t.close-button {\n\t\tbackground: #c92a12;\n\t\tcolor: #fff;\n\t}\n\n\t.container-overlay {\n\t\theight: 115dvh;\n\t}\n\n\t.check-container {\n\t\t-webkit-box-align: start;\n\t\t-ms-flex-align: start;\n\t\talign-items: flex-start;\n\t\tborder-right: none;\n\t}\n\n\t.task-container span {\n\t\tmargin-top: 1.5rem;\n\t}\n}\n"],"sourceRoot":""}]);
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
		"All Tasks (General)",
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

const createProjectMenu = () => {
	const menuArea = document.querySelector(".menu-area");
	const projectArea = document.createElement("div");
	const projectHeading = document.createElement("p");
	const addProjectButton = document.createElement("button");

	menuArea.append(projectArea, addProjectButton);
	projectArea.append(projectHeading);

	addProjectButton.innerText = "+ Add New Project";
	projectHeading.innerText = "Projects";

	projectArea.classList.add("project-area");
	projectHeading.classList.add("project-heading");
	addProjectButton.classList.add("project-button");

	addProjectButton.addEventListener("click", openProjectForm);
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

const addProject = () => {
	const projectName = document.querySelector("#project-title").value;
	const projectArea = document.querySelector(".project-area");
	const projectDiv = document.createElement("div");
	projectArea.append(projectDiv);
	projectDiv.classList.add("project-div");
	projectDiv.innerText = "# " + projectName;
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
/* harmony export */   "modifyTaskData": () => (/* binding */ modifyTaskData),
/* harmony export */   "removeTaskData": () => (/* binding */ removeTaskData),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");


//Data storage array;
let tasks = [
	{
		name: "Just-Do-It App - Guide",
		desc: "Insert instruction on how to use the app",
		date: "15/03/2023",
		priority: "high",
		project: "General",
		taskId: 5000,
	},
];

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
	} else if (formAction == "add-project") {
		(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.addProject)();
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
/* harmony import */ var _pub_sub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pub-sub */ "./src/pub-sub.js");





const createInterface = () => {
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHeader)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createHamburger)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createDashboardStructure)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createSideMenu)();
	(0,_create_home__WEBPACK_IMPORTED_MODULE_1__.createProjectMenu)();
	(0,_create_task_panel__WEBPACK_IMPORTED_MODULE_2__.renderTaskHeading)();
	_pub_sub__WEBPACK_IMPORTED_MODULE_3__["default"].publish("task-added", {
		name: "Just-Do-It App - Guide",
		desc: "Insert instruction on how to use the app",
		date: "15/03/2023",
		priority: "high",
		project: "General",
		taskId: 5000,
	});
};

window.addEventListener("load", createInterface);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sY0FBYyxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQSxzQkFBc0IscUNBQXFDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFNBQVM7QUFDckU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsaUVBQWM7QUFDaEI7QUFDQSxHQUFHO0FBQ0gsRUFBRSxpRUFBYztBQUNoQjtBQUNBLEdBQUc7QUFDSCxFQUFFLHdEQUFVO0FBQ1o7QUFDQTtBQUNBOztBQUVpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxT2xDO0FBQzRCO0FBQ1M7QUFDcEI7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsT0FBTztBQUNuRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsY0FBYyxvREFBSztBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUUsa0VBQVc7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSSwyREFBWSxFQUFFO0FBQ25DLE1BQU0sb0RBQUs7QUFDWCxHQUFHLG9FQUFhLENBQUMsb0RBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksMkRBQVksRUFBRTtBQUNuQyxNQUFNLG9EQUFLO0FBQ1gsR0FBRyw2REFBVSxDQUFDLG9EQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDLHdEQUFjO0FBQ2Y7O0FBRUEsMERBQWdCO0FBQ2hCLDBEQUFnQixpQkFBaUIsNkRBQWM7QUFDL0MsMERBQWdCOztBQUV5Qjs7Ozs7Ozs7Ozs7Ozs7O0FDNUd6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakN0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBT0U7QUFDaUM7QUFDekI7O0FBRS9CO0FBQ0EsQ0FBQywwREFBWTtBQUNiLENBQUMsNkRBQWU7QUFDaEIsQ0FBQyxzRUFBd0I7QUFDekIsQ0FBQyw0REFBYztBQUNmLENBQUMsK0RBQWlCO0FBQ2xCLENBQUMscUVBQWlCO0FBQ2xCLENBQUMsd0RBQWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLWRldGFpbHMtcGFuZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtaG9tZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvLy4vc3JjL2NyZWF0ZS10YXNrLWRhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9jcmVhdGUtdGFzay1mb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvY3JlYXRlLXRhc2stcGFuZWwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby8uL3NyYy9wdWItc3ViLmpzIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcHJvamVjdC10by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Byb2plY3QtdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiogUHJlZml4ZWQgYnkgaHR0cHM6Ly9hdXRvcHJlZml4ZXIuZ2l0aHViLmlvXFxuKiBQb3N0Q1NTOiB2OC40LjE0LFxcbiogQXV0b3ByZWZpeGVyOiB2MTAuNC43XFxuKiBCcm93c2VyczogbGFzdCA0IHZlcnNpb25cXG4qL1xcblxcbjpyb290IHtcXG5cXHRmb250LWZhbWlseTogXFxcIlZhcmVsYSBSb3VuZFxcXCIsIHNhbnMtc2VyaWY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0LS1kaXZpZGVyLWNvbG9yOiAjZjFmMWYxO1xcblxcdC0tbG9nby1waW5rOiAjZmYxYjZiO1xcblxcdC0tbG9nby1ibHVlOiAjNDVjYWZmO1xcblxcdC0tbG9nby1taWQtYmx1ZTogIzAwNjFmZjtcXG5cXHQtLWxvZ28tZ3JlZW46ICM3M2ZmMDA7XFxuXFx0LS1kYXJrLW1vZGUtYmc6ICMyMzIzMjM7XFxuXFx0LS13aGl0ZTogI2ZmZjtcXG5cXHQtLW9mZi13aGl0ZTogI2Y1ZjVmNTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5sb2dvLWFyZWEsXFxuLmhlYWRlci1tZW51IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xcbn1cXG5cXG4ubG9nby1hcmVhIHAge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLmxvZ28tYXJlYSBpbWcge1xcblxcdGhlaWdodDogMi4yNXJlbTtcXG59XFxuXFxuLmhlYWRlci1tZW51IGEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oZWFkZXItbWVudSBpbWcge1xcblxcdGhlaWdodDogMS41cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDJyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhlYWRlci1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmc6IDAuMzVyZW0gMS41cmVtIDAuMzVyZW0gMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGx1cyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIERBU0hCT0FSRCBBUkVBKi9cXG5cXG4uZGFzaC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2MnB4KTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5tZW51LWFyZWEge1xcblxcdHdpZHRoOiAzNTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiA2O1xcbn1cXG5cXG4udGFza3MtYXJlYSB7XFxuXFx0LyogbWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gNzIwcHgpOyAqL1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogY2FsYygxMDBkdmggLSA2OHB4KTtcXG5cXHRvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHQvKiBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgKi9cXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGV0YWlscy1hcmVhIHtcXG5cXHRtaW4td2lkdGg6IDQwMHB4O1xcblxcdG1heC13aWR0aDogNDUwcHg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGJvcmRlci1sZWZ0OiAwLjI1cmVtIHNvbGlkIHdoaXRlO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNjEsIDE0MCwgMC42KTtcXG5cXHQtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHotaW5kZXg6IDU7XFxufVxcblxcbi5oYW1idXJnZXIge1xcblxcdHdpZHRoOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDVyZW07XFxuXFx0ei1pbmRleDogMTA7XFxufVxcblxcbi5oaWRlLXNpZGUtbWVudSB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNTBweCk7XFxufVxcblxcbi5oaWRlLWRldGFpbHMtcGFuZWwge1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcbn1cXG5cXG4ubm8tZGlzcGxheSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5vLXBvaW50ZXItZXZlbnRzIHtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAxcmVtIDEuMjVyZW07XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnUtaXRlbS1jb250YWluZXI6bnRoLWNoaWxkKDEpIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciBzdmcge1xcblxcdGhlaWdodDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMTJweDtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMzAsIDI0OSk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDE1NiwgMjAwLCAyMzApO1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRhc2tzLWFyZWEgaDIge1xcblxcdGZvbnQtc2l6ZTogMS41NXJlbTtcXG5cXHRtYXJnaW46IDEuM3JlbSA0cmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0bWFyZ2luOiAwLjc1cmVtIDFyZW0gMC43NXJlbSAwO1xcblxcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2M0ZDVmMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4gMS44cyBlYXNlLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLWluIDEuOHMgZWFzZS1vdXQgZm9yd2FyZHM7XFxufVxcblxcbi5hbmltYXRlLW91dCB7XFxuXFx0LXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG5cXHRhbmltYXRpb246IHNsaWRlLW91dCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluIHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzJhODVkZjtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAwLjI7XFxuXFx0fVxcblxcblxcdDkwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4NWRmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdG9wYWNpdHk6IDAuMjtcXG5cXHR9XFxuXFxuXFx0OTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuXFx0MCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG5cXG5cXHQxMDAlIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwdncpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyIHtcXG5cXHR3aWR0aDogMi4zNXJlbTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAycHggc29saWQgI2ZmZmZmZjtcXG59XFxuXFxuLnRleHQtY29udGFpbmVyIHtcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMi4zNXJlbSk7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtd3JhcDogd3JhcDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0cGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4udGFzay1idXR0b24tYXJlYSB7XFxuXFx0bWFyZ2luOiBhdXRvIDFyZW0gYXV0byBhdXRvO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuXFx0LW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgcCB7XFxuXFx0bWFyZ2luOiAwIDAuNXJlbSAwIDJyZW07XFxuXFx0bWF4LXdpZHRoOiA2MCU7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBidXR0b24ge1xcblxcdC8qIG1hcmdpbjogYXV0byAwLjVyZW07ICovXFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjNyZW0gMC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBsYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0Ym90dG9tOiA0cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdGhlaWdodDogMS43NXJlbTtcXG5cXHR3aWR0aDogMS43NXJlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyNjZhYmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3Bhbjo6YWZ0ZXIge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3Bhbjo6YWZ0ZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR6LWluZGV4OiAtMTtcXG5cXHRsZWZ0OiAwLjc1cmVtO1xcblxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcblxcdHdpZHRoOiAwLjM1cmVtO1xcblxcdGhlaWdodDogMS4xcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG5cXHRib3JkZXItd2lkdGg6IDAgNHB4IDRweCAwO1xcblxcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcblxcdC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cXG4uZGV0YWlscy1pbmZvLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uYmFjay1hcnJvdyB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAwO1xcblxcdHRvcDogMS4ycmVtO1xcblxcdHdpZHRoOiAxLjI1cmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzOTM5O1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5kZXRhaWxzLWRpdmlkZXIge1xcblxcdGhlaWdodDogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiMmQ1ZmM7XFxuXFx0bWFyZ2luLXRvcDogNC4zcmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuXFxuLmRldGFpbHMtZGl2aWRlcjIge1xcblxcdGhlaWdodDogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlIHtcXG5cXHRwYWRkaW5nOiAxLjVyZW07XFxuXFx0Zm9udC1zaXplOiAxLjc1cmVtO1xcblxcdC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHRtYXJnaW4tdG9wOiAyLjI1cmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxuXFx0bWF4LXdpZHRoOiA5MCU7XFxuXFx0YmFja2dyb3VuZDogI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LFxcbi5wcmlvcml0eSxcXG4uZHVlLWRhdGUge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcblxcdGZvbnQtc2l6ZTogMC44NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHRjb2xvcjogI2JjMzkzOTtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bWFyZ2luOiAxcmVtIDFyZW0gMXJlbSAxLjVyZW07XFxuXFx0cGFkZGluZzogMC42NXJlbSAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmR1ZS1kYXRlIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjI1cmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFx0bWFyZ2luLXRvcDogMi4yNXJlbTtcXG59XFxuXFxuLnByb2plY3QtcHJpb3JpdHktdGV4dCB7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxufVxcblxcbi5kZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRtYXgtd2lkdGg6IDkwJTtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdHBhZGRpbmc6IDAuNjVyZW0gMXJlbTtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4uZGVzYy10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbn1cXG5cXG4uZHVlLXRleHQge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LXNpemU6IDAuODVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuXFx0cGFkZGluZzogMC4ycmVtIDAuOHJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5kZXRhaWxzLWVkaXQtYnV0dG9uIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0bGVmdDogMDtcXG5cXHR0b3A6IDEuMnJlbTtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbltjb250ZW50ZWRpdGFibGVdOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5lZGl0YWJsZSB7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4vKkZPUk0gQVJFQSovXFxuXFxuLmNvbnRhaW5lci1vdmVybGF5IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdHotaW5kZXg6IDY7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZDogYmxhY2s7XFxuXFx0b3BhY2l0eTogMC43O1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogMTE7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA4cmVtKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcblxcdC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRwYWRkaW5nOiA0cmVtIDA7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBkMzU2MiwgIzI2NmFiZSk7XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGQzNTYyLCAjMjY2YWJlKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMXJlbSAycmVtIDFyZW07XFxuXFx0Z2FwOiAxcmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuXFx0d2lkdGg6IG1heCgyNXZ3LCAzMDBweCk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tdGl0bGUtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0NWNhZmY7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcblxcdHdpZHRoOiAxLjdlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0YmFja2dyb3VuZDogIzA5MmQ1OTtcXG5cXHRwYWRkaW5nOiAwLjJyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgdGV4dGFyZWEge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogNHJlbTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwIDAuM3JlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHJlc2l6ZTogbm9uZTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCBmaWVsZHNldCB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcblxcdC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgbGVnZW5kIHtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0YWNjZW50LWNvbG9yOiAjNDVjYWZmO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgc2VsZWN0IHtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IG9wdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDIuNXJlbTtcXG5cXHRiYWNrZ3JvdW5kOiAjNDVjYWZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRtYXJnaW4tdG9wOiAxcmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxufVxcblxcbi8qUHJvamVjdCBGb3JtKi9cXG5cXG4ucHJvamVjdC1hcmVhIHtcXG5cXHRtYXJnaW4tdG9wOiAzcmVtO1xcblxcdGhlaWdodDogYXV0bztcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvamVjdC1idXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdG1hcmdpbjogM3JlbSAxLjVyZW0gMXJlbSAxLjVyZW07XFxuXFx0d2lkdGg6IDEwcmVtO1xcblxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0dHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGVudCB7XFxuXFx0cGFkZGluZy10b3A6IDIuNXJlbTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG5cXHRwYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0LyogYmFja2dyb3VuZC1jb2xvcjogI2VmZjRmYTsgKi9cXG59XFxuXFxuLnByb2plY3QtZGl2IHtcXG5cXHRwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAzcmVtO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLyogLnRhc2tzLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogNDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRvcGFjaXR5OiAwLjc7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuXFx0bWFyZ2luOiAwO1xcbn0gKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFx0LnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOWRjN2Y1O1xcblxcdH1cXG5cXG5cXHQubW9kaWZ5LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGY1OGNkO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG5cXG5cXHQuZGVsZXRlLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC4zcmVtIDEuNXJlbTtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYmMzOTM5O1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgc3Bhbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1idXR0b246aG92ZXIge1xcblxcdFxcdHBhZGRpbmc6IDAuNTVyZW0gM3JlbSAwLjU1cmVtIDIuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZzpob3ZlciB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNSk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuNSk7XFxuXFx0fVxcblxcblxcdC5tZW51LWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcXG5cXHRcXHQvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWxvZ28tbWlkLWJsdWUpLCB2YXIoLS1sb2dvLWJsdWUpKTsgKi9cXG5cXHRcXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHZhcigtLWxvZ28tYmx1ZSksICMwNDM1ODQpOyAqL1xcblxcdFxcdGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0XFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIgLm1lbnUtaXRlbSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxuXFx0fVxcblxcblxcdC5wcm9qZWN0LWRpdjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdH1cXG5cXG5cXHQuaGFtYnVyZ2VyOmhvdmVyIHtcXG5cXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KSB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcblxcdC5iYWNrLWFycm93OmhvdmVyIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHRcXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdFxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdFxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2VkZWEyYjtcXG5cXHRcXHRoZWlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzI2NmFiZTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbjphY3RpdmUge1xcblxcdFxcdGJhY2tncm91bmQ6ICM3YzE5MGE7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWVkaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYmMzOTM5O1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1lZGl0LWJ1dHRvbjpmb2N1cyB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzg3MWIxYjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHR3aWR0aDogMTJyZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0Lm1lbnUtYXJlYSB7XFxuXFx0XFx0d2lkdGg6IDI3NXB4O1xcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG5cXHQubG9nby1hcmVhIHAge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQubG9nby1hcmVhIGltZyB7XFxuXFx0XFx0aGVpZ2h0OiAxLjNyZW07XFxuXFx0fVxcblxcblxcdC5oZWFkZXItYnV0dG9uIHtcXG5cXHRcXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1tZW51IGltZyB7XFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtYXJlYSB7XFxuXFx0XFx0bWF4LXdpZHRoOiAyNjVweDtcXG5cXHRcXHRtaW4td2lkdGg6IDUwcHg7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRcXHRsZWZ0OiAycmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1idXR0b24tYXJlYSB7XFxuXFx0XFx0bWFyZ2luOiBhdXRvIDEuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0XFx0LyogbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cXG5cXHRcXHRmb250LXNpemU6IDAuOXJlbTtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMC41NXJlbTtcXG5cXHR9XFxuXFxuXFx0LmNsb3NlLWJ1dHRvbiB7XFxuXFx0XFx0YmFja2dyb3VuZDogI2M5MmExMjtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHR9XFxuXFxuXFx0LmNvbnRhaW5lci1vdmVybGF5IHtcXG5cXHRcXHRoZWlnaHQ6IDExNWR2aDtcXG5cXHR9XFxuXFxuXFx0LmNoZWNrLWNvbnRhaW5lciB7XFxuXFx0XFx0LXdlYmtpdC1ib3gtYWxpZ246IHN0YXJ0O1xcblxcdFxcdC1tcy1mbGV4LWFsaWduOiBzdGFydDtcXG5cXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG5cXHRcXHRib3JkZXItcmlnaHQ6IG5vbmU7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBzcGFuIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjVyZW07XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7OztDQUtDOztBQUVEO0NBQ0MsdUNBQXVDO0NBQ3ZDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsd0JBQXdCO0NBQ3hCLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsYUFBYTtDQUNiLHlCQUF5QjtDQUN6QixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLDZDQUE2QztDQUM3QyxZQUFZO0FBQ2I7O0FBRUE7O0NBRUMsb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUNwQixhQUFhO0NBQ2IseUJBQXlCO0NBQ3pCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsU0FBUztBQUNWOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHFCQUFxQjtD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Q3hCOztDQUVBO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjs7Q0FFQTtFQUNDLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtDQUNuQjs7Q0FFQTtFQUNDLGtCQUFrQjtDQUNuQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuKiBQcmVmaXhlZCBieSBodHRwczovL2F1dG9wcmVmaXhlci5naXRodWIuaW9cXG4qIFBvc3RDU1M6IHY4LjQuMTQsXFxuKiBBdXRvcHJlZml4ZXI6IHYxMC40LjdcXG4qIEJyb3dzZXJzOiBsYXN0IDQgdmVyc2lvblxcbiovXFxuXFxuOnJvb3Qge1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiVmFyZWxhIFJvdW5kXFxcIiwgc2Fucy1zZXJpZjtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHQtLWRpdmlkZXItY29sb3I6ICNmMWYxZjE7XFxuXFx0LS1sb2dvLXBpbms6ICNmZjFiNmI7XFxuXFx0LS1sb2dvLWJsdWU6ICM0NWNhZmY7XFxuXFx0LS1sb2dvLW1pZC1ibHVlOiAjMDA2MWZmO1xcblxcdC0tbG9nby1ncmVlbjogIzczZmYwMDtcXG5cXHQtLWRhcmstbW9kZS1iZzogIzIzMjMyMztcXG5cXHQtLXdoaXRlOiAjZmZmO1xcblxcdC0tb2ZmLXdoaXRlOiAjZjVmNWY1O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGhlaWdodDogNjBweDtcXG59XFxuXFxuLmxvZ28tYXJlYSxcXG4uaGVhZGVyLW1lbnUge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtIDEuMjVyZW07XFxufVxcblxcbi5sb2dvLWFyZWEgcCB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9nby1hcmVhIGltZyB7XFxuXFx0aGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG5cXG4uaGVhZGVyLW1lbnUgYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlci1tZW51IGltZyB7XFxuXFx0aGVpZ2h0OiAxLjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMnJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAycmVtO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZzogMC4zNXJlbSAxLjVyZW0gMC4zNXJlbSAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbHVzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogREFTSEJPQVJEIEFSRUEqL1xcblxcbi5kYXNoLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuXFx0LXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuXFx0LW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXHRnYXA6IDFyZW07XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDYycHgpO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lbnUtYXJlYSB7XFxuXFx0d2lkdGg6IDM1MHB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IDY7XFxufVxcblxcbi50YXNrcy1hcmVhIHtcXG5cXHQvKiBtaW4td2lkdGg6IGNhbGMoMTAwdncgLSA3MjBweCk7ICovXFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcblxcdC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcblxcdC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBjYWxjKDEwMGR2aCAtIDY4cHgpO1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdC8qIG1hcmdpbi1yaWdodDogMC41cmVtOyAqL1xcblxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxuXFx0dHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5kZXRhaWxzLWFyZWEge1xcblxcdG1pbi13aWR0aDogNDAwcHg7XFxuXFx0bWF4LXdpZHRoOiA0NTBweDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Ym9yZGVyLWxlZnQ6IDAuMjVyZW0gc29saWQgd2hpdGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCA2MSwgMTQwLCAwLjYpO1xcblxcdC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0ei1pbmRleDogNTtcXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNXJlbTtcXG5cXHR6LWluZGV4OiAxMDtcXG59XFxuXFxuLmhpZGUtc2lkZS1tZW51IHtcXG5cXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzUwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM1MHB4KTtcXG59XFxuXFxuLmhpZGUtZGV0YWlscy1wYW5lbCB7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAwcHgpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MDBweCk7XFxufVxcblxcbi5uby1kaXNwbGF5IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubm8tcG9pbnRlci1ldmVudHMge1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0cGFkZGluZzogMXJlbSAxLjI1cmVtIDFyZW0gMS4yNXJlbTtcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lcjpudGgtY2hpbGQoMSkge1xcblxcdG1hcmdpbi10b3A6IDNyZW07XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyIHN2ZyB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtIHtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAxMnB4O1xcbn1cXG5cXG4udGFza3MtYXJlYTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6IHJnYigyMDIsIDIzMCwgMjQ5KTtcXG59XFxuXFxuLnRhc2tzLWFyZWE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kOiByZ2IoMTU2LCAyMDAsIDIzMCk7XFxufVxcblxcbi50YXNrcy1hcmVhOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udGFza3MtYXJlYSBoMiB7XFxuXFx0Zm9udC1zaXplOiAxLjU1cmVtO1xcblxcdG1hcmdpbjogMS4zcmVtIDRyZW07XFxuXFx0Y29sb3I6ICMwNDM1ODQ7XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UzZjBmZjtcXG5cXHRtYXJnaW46IDAuNzVyZW0gMXJlbSAwLjc1cmVtIDA7XFxuXFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRkNWYwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbiAxLjhzIGVhc2Utb3V0IGZvcndhcmRzO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtaW4gMS44cyBlYXNlLW91dCBmb3J3YXJkcztcXG59XFxuXFxuLmFuaW1hdGUtb3V0IHtcXG5cXHQtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcblxcdGFuaW1hdGlvbjogc2xpZGUtb3V0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4ge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmE4NWRmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycmVtKTtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdG9wYWNpdHk6IDAuMjtcXG5cXHR9XFxuXFxuXFx0OTAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMGZmO1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcmVtKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuXFx0MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMyYTg1ZGY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJyZW0pO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnJlbSk7XFxuXFx0XFx0b3BhY2l0eTogMC4yO1xcblxcdH1cXG5cXG5cXHQ5MCUge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNlM2YwZmY7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG5cXHQwJSB7XFxuXFx0XFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHJlbSk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDByZW0pO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcblxcblxcdDEwMCUge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDB2dyk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblxcbi5jaGVjay1jb250YWluZXIge1xcblxcdHdpZHRoOiAyLjM1cmVtO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZmZmZmZmO1xcbn1cXG5cXG4udGV4dC1jb250YWluZXIge1xcblxcdHdpZHRoOiBjYWxjKDEwMCUgLSAyLjM1cmVtKTtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXJlbTtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHQtbXMtZmxleC13cmFwOiB3cmFwO1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRwYWRkaW5nOiAxcmVtIDA7XFxufVxcblxcbi50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRtYXJnaW46IGF1dG8gMXJlbSBhdXRvIGF1dG87XFxuXFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuXFx0ZGlzcGxheTogLW1zLWZsZXhib3g7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0LXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG5cXHQtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBwIHtcXG5cXHRtYXJnaW46IDAgMC41cmVtIDAgMnJlbTtcXG5cXHRtYXgtd2lkdGg6IDYwJTtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGJ1dHRvbiB7XFxuXFx0LyogbWFyZ2luOiBhdXRvIDAuNXJlbTsgKi9cXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuM3JlbSAwLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGxhYmVsIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG5cXHRib3R0b206IDRweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIgc3BhbiB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGxlZnQ6IDA7XFxuXFx0aGVpZ2h0OiAxLjc1cmVtO1xcblxcdHdpZHRoOiAxLjc1cmVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzI2NmFiZTtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiBzcGFuOjphZnRlciB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciBzcGFuOjphZnRlciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHotaW5kZXg6IC0xO1xcblxcdGxlZnQ6IDAuNzVyZW07XFxuXFx0Y29udGVudDogXFxcIlxcXCI7XFxuXFx0d2lkdGg6IDAuMzVyZW07XFxuXFx0aGVpZ2h0OiAxLjFyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcblxcdGJvcmRlci13aWR0aDogMCA0cHggNHB4IDA7XFxuXFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuXFx0LW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG5cXHR0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbi5kZXRhaWxzLWluZm8tY29udGFpbmVyIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5iYWNrLWFycm93IHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0dG9wOiAxLjJyZW07XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuMjVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiYzM5Mzk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmRldGFpbHMtZGl2aWRlciB7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2IyZDVmYztcXG5cXHRtYXJnaW4tdG9wOiA0LjNyZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uZGV0YWlscy1kaXZpZGVyMiB7XFxuXFx0aGVpZ2h0OiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuNXJlbTtcXG5cXHRtYXJnaW4tcmlnaHQ6IDFyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcXG59XFxuXFxuLmRldGFpbHMtdGl0bGUge1xcblxcdHBhZGRpbmc6IDEuNXJlbTtcXG5cXHRmb250LXNpemU6IDEuNzVyZW07XFxuXFx0LyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cXG5cXHR0ZXh0LWFsaWduOiBsZWZ0O1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXHRtYXJnaW4tbGVmdDogMS41cmVtO1xcblxcdG1hcmdpbi10b3A6IDIuMjVyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcXG5cXHRtYXgtd2lkdGg6IDkwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZmO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3QsXFxuLnByaW9yaXR5LFxcbi5kdWUtZGF0ZSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFxuXFx0Zm9udC1zaXplOiAwLjg1cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcblxcdGNvbG9yOiAjYmMzOTM5O1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRtYXJnaW46IDFyZW0gMXJlbSAxcmVtIDEuNXJlbTtcXG5cXHRwYWRkaW5nOiAwLjY1cmVtIDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uZHVlLWRhdGUge1xcblxcdG1hcmdpbi1ib3R0b206IDIuMjVyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG5cXHRtYXJnaW4tdG9wOiAyLjI1cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1wcmlvcml0eS10ZXh0IHtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG59XFxuXFxuLmRldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdG1heC13aWR0aDogOTAlO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAxcmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGJhY2tncm91bmQ6ICNmZmY7XFxuXFx0cGFkZGluZzogMC42NXJlbSAxcmVtO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0bWluLWhlaWdodDogMTAwcHg7XFxufVxcblxcbi5kZXNjLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDAuODVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG5cXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XFxufVxcblxcbi5kdWUtdGV4dCB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGZvbnQtc2l6ZTogMC44NXJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG5cXHRjb2xvcjogIzA0MzU4NDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcXG5cXHRwYWRkaW5nOiAwLjJyZW0gMC44cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmRldGFpbHMtZWRpdC1idXR0b24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMS4ycmVtO1xcblxcdGNvbG9yOiAjMDQzNTg0O1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuXFx0cGFkZGluZzogMC41cmVtIDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuW2NvbnRlbnRlZGl0YWJsZV06Zm9jdXMge1xcblxcdG91dGxpbmU6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmVkaXRhYmxlIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi8qRk9STSBBUkVBKi9cXG5cXG4uY29udGFpbmVyLW92ZXJsYXkge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0ei1pbmRleDogNjtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRvcGFjaXR5OiAwLjc7XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiAxMTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IGNhbGMoMTAwJSAtIDhyZW0pO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcblxcdC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuXFx0LW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdHBhZGRpbmc6IDRyZW0gMDtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMGQzNTYyLCAjMjY2YWJlKTtcXG5cXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwZDM1NjIsICMyNjZhYmUpO1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG5cXHQtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG5cXHQtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAxcmVtIDJyZW0gMXJlbTtcXG5cXHRnYXA6IDFyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC43NXJlbTtcXG5cXHR3aWR0aDogbWF4KDI1dncsIDMwMHB4KTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS10aXRsZS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xcblxcdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0LXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcXG5cXHQtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHQtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcblxcdC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzQ1Y2FmZjtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4uZm9ybS10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Y29sb3I6ICNmZmZmZmY7XFxuXFx0d2lkdGg6IDEuN2VtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHRiYWNrZ3JvdW5kOiAjMDkyZDU5O1xcblxcdHBhZGRpbmc6IDAuMnJlbTtcXG5cXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luOiAwLjVyZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG5cXHRoZWlnaHQ6IDJyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB0ZXh0YXJlYSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiA0cmVtO1xcblxcdG1hcmdpbjogMC41cmVtIDAgMC4zcmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0cmVzaXplOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IGZpZWxkc2V0IHtcXG5cXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcXG5cXHRkaXNwbGF5OiAtbXMtZmxleGJveDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XFxuXFx0LW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym9yZGVyOiAycHggc29saWQgI2ZmZjtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDFyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBsZWdlbmQge1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRhY2NlbnQtY29sb3I6ICM0NWNhZmY7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciBzZWxlY3Qge1xcblxcdGhlaWdodDogMnJlbTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQgb3B0aW9uIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcblxcdGhlaWdodDogMi41cmVtO1xcblxcdGJhY2tncm91bmQ6ICM0NWNhZmY7XFxuXFx0Ym9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRmb250LWZhbWlseTogVmFyZWxhIFJvdW5kO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxuXFx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHQtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcXG59XFxuXFxuLypQcm9qZWN0IEZvcm0qL1xcblxcbi5wcm9qZWN0LWFyZWEge1xcblxcdG1hcmdpbi10b3A6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAzcmVtIDEuNXJlbSAxcmVtIDEuNXJlbTtcXG5cXHR3aWR0aDogMTByZW07XFxuXFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Zm9udC1mYW1pbHk6IFZhcmVsYSBSb3VuZDtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1jb250ZW50IHtcXG5cXHRwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMCk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tY29udGVudCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdG1hcmdpbjogMC41cmVtIDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFx0aGVpZ2h0OiAycmVtO1xcblxcdGZvbnQtZmFtaWx5OiBWYXJlbGEgUm91bmQ7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcblxcdHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRsZXR0ZXItc3BhY2luZzogMXB4O1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuXFx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWRpdmlkZXItY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcXG5cXHQvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmNGZhOyAqL1xcbn1cXG5cXG4ucHJvamVjdC1kaXYge1xcblxcdHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDNyZW07XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tZGl2aWRlci1jb2xvcik7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG4vKiAudGFza3Mtb3ZlcmxheSB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHR6LWluZGV4OiA0O1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdG9wYWNpdHk6IDAuNztcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG5cXHRtYXJnaW46IDA7XFxufSAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQudGFzay1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICM5ZGM3ZjU7XFxuXFx0fVxcblxcblxcdC5tb2RpZnktYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwZjU4Y2Q7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0fVxcblxcblxcdC5kZWxldGUtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRwYWRkaW5nOiAwLjNyZW0gMS41cmVtO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNiYzM5Mzk7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0fVxcblxcblxcdC50YXNrLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2YWJlO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLWJ1dHRvbjpob3ZlciB7XFxuXFx0XFx0cGFkZGluZzogMC41NXJlbSAzcmVtIDAuNTVyZW0gMi41cmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nOmhvdmVyIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjUpO1xcblxcdFxcdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS41KTtcXG5cXHR9XFxuXFxuXFx0Lm1lbnUtaXRlbS1jb250YWluZXI6aG92ZXIge1xcblxcdFxcdC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbG9nby1taWQtYmx1ZSksIHZhcigtLWxvZ28tYmx1ZSkpOyAqL1xcblxcdFxcdGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxuXFx0XFx0LyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgdmFyKC0tbG9nby1ibHVlKSwgIzA0MzU4NCk7ICovXFxuXFx0XFx0YmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDQzNTg0LCAjMGY1OGNkKTtcXG5cXHRcXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwNDM1ODQsICMwZjU4Y2QpO1xcblxcdH1cXG5cXG5cXHQubWVudS1pdGVtLWNvbnRhaW5lcjpob3ZlciAubWVudS1pdGVtIHtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXG5cXHR9XFxuXFxuXFx0LnByb2plY3QtZGl2OmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzA0MzU4NCwgIzBmNThjZCk7XFxuXFx0fVxcblxcblxcdC5oYW1idXJnZXI6aG92ZXIge1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRcXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlWCg1cHgpO1xcblxcdFxcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMjUpIHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHR9XFxuXFxuXFx0LmJhY2stYXJyb3c6aG92ZXIge1xcblxcdFxcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHRcXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcblxcdFxcdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0XFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0XFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XFxuXFx0fVxcblxcblxcdC5jbG9zZS1idXR0b246aG92ZXIge1xcblxcdFxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdFxcdGJhY2tncm91bmQ6ICNjOTJhMTI7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjZWRlYTJiO1xcblxcdFxcdGhlaWdodDogM3JlbTtcXG5cXHR9XFxuXFxuXFx0LnN1Ym1pdC1idXR0b246YWN0aXZlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjMjY2YWJlO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uOmFjdGl2ZSB7XFxuXFx0XFx0YmFja2dyb3VuZDogIzdjMTkwYTtcXG5cXHR9XFxuXFxuXFx0LmRldGFpbHMtZWRpdC1idXR0b246aG92ZXIge1xcblxcdFxcdGJhY2tncm91bmQ6ICNiYzM5Mzk7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0fVxcblxcblxcdC5kZXRhaWxzLWVkaXQtYnV0dG9uOmZvY3VzIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjODcxYjFiO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQucHJvamVjdC1idXR0b246aG92ZXIge1xcblxcdFxcdHdpZHRoOiAxMnJlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQubWVudS1hcmVhIHtcXG5cXHRcXHR3aWR0aDogMjc1cHg7XFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xcblxcdC5sb2dvLWFyZWEgcCB7XFxuXFx0XFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0fVxcblxcblxcdC5sb2dvLWFyZWEgaW1nIHtcXG5cXHRcXHRoZWlnaHQ6IDEuM3JlbTtcXG5cXHR9XFxuXFxuXFx0LmhlYWRlci1idXR0b24ge1xcblxcdFxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdH1cXG5cXG5cXHQuaGVhZGVyLW1lbnUgaW1nIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQuZGV0YWlscy1hcmVhIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDI2NXB4O1xcblxcdFxcdG1pbi13aWR0aDogNTBweDtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHAge1xcblxcdFxcdGxlZnQ6IDJyZW07XFxuXFx0fVxcblxcblxcdC50YXNrLWJ1dHRvbi1hcmVhIHtcXG5cXHRcXHRtYXJnaW46IGF1dG8gMS41cmVtO1xcblxcdH1cXG5cXG5cXHQudGFzay1jb250YWluZXIgYnV0dG9uIHtcXG5cXHRcXHQvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xcblxcdFxcdGZvbnQtc2l6ZTogMC45cmVtO1xcblxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjU1cmVtO1xcblxcdH1cXG5cXG5cXHQuY2xvc2UtYnV0dG9uIHtcXG5cXHRcXHRiYWNrZ3JvdW5kOiAjYzkyYTEyO1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdH1cXG5cXG5cXHQuY29udGFpbmVyLW92ZXJsYXkge1xcblxcdFxcdGhlaWdodDogMTE1ZHZoO1xcblxcdH1cXG5cXG5cXHQuY2hlY2stY29udGFpbmVyIHtcXG5cXHRcXHQtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XFxuXFx0XFx0LW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcblxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcblxcdFxcdGJvcmRlci1yaWdodDogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LnRhc2stY29udGFpbmVyIHNwYW4ge1xcblxcdFxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiYWNrIGZyb20gXCIuL0ltYWdlcy9hcnJvdy5wbmdcIjtcbmltcG9ydCB7IG1vZGlmeUZvcm0gfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1mb3JtXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckRldGFpbHMob2JqLCB0YXNrSW5kZXgpIHtcblx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblx0Y29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblx0Y29uc3QgZGV0YWlsc0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBiYWNrQXJyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgZGV0YWlsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRjb25zdCBkaXZpZGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblx0Y29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGRpdmlkZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG5cdGRldGFpbHNBcmVhLmFwcGVuZChkaXZpZGVyLCBkZXRhaWxzSW5mb0NvbnRhaW5lcik7XG5cdGRldGFpbHNJbmZvQ29udGFpbmVyLmFwcGVuZChcblx0XHRiYWNrQXJyb3csXG5cdFx0ZWRpdEJ1dHRvbixcblx0XHRkZXRhaWxzVGl0bGUsXG5cdFx0ZGl2aWRlcjIsXG5cdFx0cHJvamVjdCxcblx0XHRwcmlvcml0eSxcblx0XHRkdWVEYXRlLFxuXHRcdGRpdmlkZXIzLFxuXHRcdGRlc2NyaXB0aW9uXG5cdCk7XG5cblx0ZGV0YWlsc0luZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtaW5mby1jb250YWluZXJcIik7XG5cdGRpdmlkZXIuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGl2aWRlclwiKTtcblx0YmFja0Fycm93LmNsYXNzTGlzdC5hZGQoXCJiYWNrLWFycm93XCIpO1xuXHRlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWVkaXQtYnV0dG9uXCIpO1xuXHRkZXRhaWxzVGl0bGUuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtdGl0bGVcIik7XG5cdGRpdmlkZXIyLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRpdmlkZXIyXCIpO1xuXHRwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXHRwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIik7XG5cdGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlXCIpO1xuXHRkaXZpZGVyMy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1kaXZpZGVyMlwiKTtcblx0ZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRldGFpbHMtZGVzY3JpcHRpb25cIik7XG5cblx0YmFja0Fycm93LnNldEF0dHJpYnV0ZShcInNyY1wiLCBiYWNrKTtcblxuXHRlZGl0QnV0dG9uLmlubmVyVGV4dCA9IFwiRWRpdCBEZXRhaWxzXCI7XG5cdGRldGFpbHNUaXRsZS5pbm5lclRleHQgPSBvYmpbXCJuYW1lXCJdO1xuXHRwcm9qZWN0LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInByb2plY3QtcHJpb3JpdHktdGV4dFwiPlByb2plY3QmbmJzcCZuYnNwJm5ic3B8Jm5ic3AmbmJzcDwvc3Bhbj4gJHtvYmpbXCJwcm9qZWN0XCJdfWA7XG5cdHByaW9yaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cInByb2plY3QtcHJpb3JpdHktdGV4dFwiPlByaW9yaXR5Jm5ic3AmbmJzcCZuYnNwfCZuYnNwJm5ic3A8L3NwYW4+ICR7b2JqW1wicHJpb3JpdHlcIl19YDtcblx0ZHVlRGF0ZS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwcm9qZWN0LXByaW9yaXR5LXRleHRcIj5EdWUgRGF0ZSZuYnNwJm5ic3AmbmJzcHwmbmJzcCZuYnNwPC9zcGFuPiAke29ialtcImRhdGVcIl19YDtcblx0ZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwicHJvamVjdC1wcmlvcml0eS10ZXh0IGRlc2MtdGl0bGVcIj5EZXNjcmlwdGlvbjwvc3Bhbj48YnI+JHtvYmpbXCJkZXNjXCJdfWA7XG5cblx0YmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGVhckRldGFpbHMpO1xuXHRlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y2xlYXJEZXRhaWxzKCk7XG5cdFx0bW9kaWZ5Rm9ybShvYmosIHRhc2tJbmRleCk7XG5cdH0pO1xuXG59XG5cbmNvbnN0IGNsZWFyRGV0YWlscyA9ICgpID0+IHtcblx0Y29uc3QgZGV0YWlsc0luZm9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiLmRldGFpbHMtaW5mby1jb250YWluZXJcIlxuXHQpO1xuXHRjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWRpdmlkZXJcIik7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRpZiAoZGV0YWlsc0luZm9Db250YWluZXIpIHtcblx0XHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHRcdHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRkaXZpZGVyLnJlbW92ZSgpO1xuXHRcdFx0ZGV0YWlsc0luZm9Db250YWluZXIucmVtb3ZlKCk7XG5cdFx0fSwgMjUwKTtcblx0fVxufTtcblxuY29uc3Qgc2hvd0RldGFpbHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tZGlzcGxheVwiKTtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0XHR0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXHR9LCAxMCk7XG59O1xuXG5jb25zdCBlZGl0RGV0YWlscyA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtdGl0bGVcIik7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWRlc2NyaXB0aW9uXCIpO1xuXHRjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0XCIpO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG5cdGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRhdGVcIik7XG5cdGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wcmlvcml0eS10ZXh0XCIpO1xuXG5cdHRpdGxlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG5cdGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG5cdHByb2plY3Quc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcblx0cHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcblx0ZHVlLnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XG5cdGxhYmVscy5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJmYWxzZVwiKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckRldGFpbHMsIGNsZWFyRGV0YWlscywgc2hvd0RldGFpbHMgfTtcbiIsImltcG9ydCBsb2dvQmx1ZSBmcm9tIFwiLi9JbWFnZXMvVGFza2llLWxvZ28tZGVlcC1ibHVlLnBuZ1wiO1xuaW1wb3J0IGdpdGh1YlNpZ24gZnJvbSBcIi4vSW1hZ2VzL2dpdGh1Yi1zaWduLnBuZ1wiO1xuaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSBcIi4vSW1hZ2VzL2J1cmdlci1tZW51LnN2Z1wiO1xuaW1wb3J0IHsgc2hvd0Zvcm0sIGNsb3NlRm9ybSwgc3VibWl0Rm9ybSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWZvcm1cIjtcbmltcG9ydCB7IGNsZWFyRGV0YWlscyB9IGZyb20gXCIuL2NyZWF0ZS1kZXRhaWxzLXBhbmVsXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhhbWJ1cmdlcigpIHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQoaGFtYnVyZ2VyKTtcblx0aGFtYnVyZ2VyLnNldEF0dHJpYnV0ZShcInNyY1wiLCBidXJnZXJNZW51KTtcblx0aGFtYnVyZ2VyLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJcIik7XG5cblx0aGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblx0XHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cdFx0Y29uc3QgZGV0YWlsc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtYXJlYVwiKTtcblxuXHRcdGNvbnN0IGNvbXBTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKG1lbnVBcmVhKTtcblx0XHRjb25zdCBjaGVja0Rpc3BsYXlTdGF0ZSA9IGNvbXBTdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcblxuXHRcdGlmIChjaGVja0Rpc3BsYXlTdGF0ZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC5hZGQoXCJuby1kaXNwbGF5XCIpO1xuXHRcdFx0fSwgMjAwKTtcblx0XHRcdG1lbnVBcmVhLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlLXNpZGUtbWVudVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0fSwgMTApO1xuXHRcdH1cblxuXHRcdGNsZWFyRGV0YWlscygpO1xuXHR9KTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG5cdFx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPD0gNzY4KSB7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1zaWRlLW1lbnVcIik7XG5cdFx0XHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibm8tZGlzcGxheVwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLWRpc3BsYXlcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bWVudUFyZWEuY2xhc3NMaXN0LnJlbW92ZShcImhpZGUtc2lkZS1tZW51XCIpO1xuXHRcdFx0fSwgMTApO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0Ly9HZW5lcmFsIGVsZW1lbnRzIHJlcXVpcmVkIGZvciBoZWFkZXJcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IGxvZ29BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IGdpdExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblx0Y29uc3QgZ2l0TG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGNvbnN0IGhlYWRlck5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdC8vQnVpbGQgaGVhZGVyIHN0cnVjdHVyZVxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChoZWFkZXJDb250YWluZXIpO1xuXHRoZWFkZXJDb250YWluZXIuYXBwZW5kKGxvZ29BcmVhLCBoZWFkZXJNZW51KTtcblx0bG9nb0FyZWEuYXBwZW5kKGxvZ29JbWcsIGxvZ29UZXh0KTtcblx0aGVhZGVyTWVudS5hcHBlbmQoZ2l0TGluaywgaGVhZGVyTmV3VGFza0J1dHRvbik7XG5cdGdpdExpbmsuYXBwZW5kKGdpdExvZ28pO1xuXG5cdC8vRmlsbC1vdXQgZWxlbWVudHNcblx0bG9nb0ltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgbG9nb0JsdWUpO1xuXHRsb2dvVGV4dC5pbm5lclRleHQgPSBcIkp1c3QtRG8tSXRcIjtcblx0Z2l0TGluay5zZXRBdHRyaWJ1dGUoXG5cdFx0XCJocmVmXCIsXG5cdFx0XCJodHRwczovL2dpdGh1Yi5jb20vS3dhZHdvLUZpcmVtcG9uZy1Cb2FreWUvUHJvamVjdC1Uby1Eb1wiXG5cdCk7XG5cdGdpdExpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXHRnaXRMb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBnaXRodWJTaWduKTtcblx0aGVhZGVyTmV3VGFza0J1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJwbHVzXCI+Kzwvc3Bhbj4gVGFza2A7XG5cblx0Ly9Bc3NpZ24gQ1NTIGNsYXNzZXNcblx0aGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGFpbmVyXCIpO1xuXHRsb2dvQXJlYS5jbGFzc0xpc3QuYWRkKFwibG9nby1hcmVhXCIpO1xuXHRoZWFkZXJNZW51LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItbWVudVwiKTtcblx0aGVhZGVyTmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWJ1dHRvblwiKTtcblxuXHQvL0V2ZW50IGxpc3RlbmVyIGZvciBuZXcgdGFzayBidXR0b25cblx0aGVhZGVyTmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEYXNoYm9hcmRTdHJ1Y3R1cmUoKSB7XG5cdC8vR2VuZXJhbCBlbGVtZW50cyByZXF1aXJlZCBmb3IgZGFzaGJvYXJkXG5cdGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGFpbmVyXCIpO1xuXHRjb25zdCBkYXNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cdGNvbnN0IG1lbnVBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuXG5cdC8vQnVpbGQgZGFzaGJvYXJkIHN0cnVjdHVyZVxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChkYXNoQ29udGFpbmVyKTtcblx0ZGFzaENvbnRhaW5lci5hcHBlbmQobWVudUFyZWEsIHRhc2tzQXJlYSwgZGV0YWlsc0FyZWEpO1xuXG5cdC8vQXNzaWduIENTUyBjbGFzc2VzXG5cdGRhc2hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhc2gtY29udGFpbmVyXCIpO1xuXHRtZW51QXJlYS5jbGFzc0xpc3QuYWRkKFwibWVudS1hcmVhXCIpO1xuXHR0YXNrc0FyZWEuY2xhc3NMaXN0LmFkZChcInRhc2tzLWFyZWFcIik7XG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWFyZWFcIiwgXCJuby1kaXNwbGF5XCIsIFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaWRlTWVudSgpIHtcblx0Y29uc3QgbWVudUFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYXJlYVwiKTtcblx0Y29uc3QgbWVudUl0ZW1zID0gW1xuXHRcdFwiQWxsIFRhc2tzIChHZW5lcmFsKVwiLFxuXHRcdFwiUGFzdCBEdWVcIixcblx0XHRcIkR1ZSB0b2RheVwiLFxuXHRcdFwiRHVlIHRoaXMgd2Vla1wiLFxuXHRcdFwiQ29tcGxldGVkXCIsXG5cdF07XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblxuXHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGxldCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0bGV0IG1lbnVJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG5cdFx0XHRcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG5cdFx0XHRcInN2Z1wiXG5cdFx0KTtcblx0XHRsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRcdG1lbnVJdGVtLmlubmVyVGV4dCA9IGl0ZW07XG5cdFx0bWVudUl0ZW1JbWFnZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiY3VycmVudENvbG9yXCIpO1xuXHRcdG1lbnVJdGVtSW1hZ2Uuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblx0XHRtZW51SXRlbUltYWdlLmlubmVySFRNTCA9IGA8cGF0aCBkPVwiTTEyIDJDNi41IDIgMiA2LjUgMiAxMlM2LjUgMjIgMTIgMjIgMjIgMTcuNSAyMiAxMiAxNy41IDIgMTIgMk0xMCAxN0w1IDEyTDYuNDEgMTAuNTlMMTAgMTQuMTdMMTcuNTkgNi41OEwxOSA4TDEwIDE3WlwiIC8+YDtcblxuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW0tY29udGFpbmVyXCIpO1xuXHRcdG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cblx0XHRtZW51QXJlYS5hcHBlbmQobWVudUl0ZW1Db250YWluZXIpO1xuXHRcdG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZChtZW51SXRlbUltYWdlLCBtZW51SXRlbSk7XG5cdH0pO1xuXG5cdG1lbnVBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcImhpZGUtZGV0YWlscy1wYW5lbFwiKTtcblx0XHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZGV0YWlsc0FyZWEuY2xhc3NMaXN0LmFkZChcIm5vLWRpc3BsYXlcIik7XG5cdFx0fSwgMzAwKTtcblx0fSk7XG59XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RNZW51ID0gKCkgPT4ge1xuXHRjb25zdCBtZW51QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1hcmVhXCIpO1xuXHRjb25zdCBwcm9qZWN0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHByb2plY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdG1lbnVBcmVhLmFwcGVuZChwcm9qZWN0QXJlYSwgYWRkUHJvamVjdEJ1dHRvbik7XG5cdHByb2plY3RBcmVhLmFwcGVuZChwcm9qZWN0SGVhZGluZyk7XG5cblx0YWRkUHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBcIisgQWRkIE5ldyBQcm9qZWN0XCI7XG5cdHByb2plY3RIZWFkaW5nLmlubmVyVGV4dCA9IFwiUHJvamVjdHNcIjtcblxuXHRwcm9qZWN0QXJlYS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1hcmVhXCIpO1xuXHRwcm9qZWN0SGVhZGluZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkaW5nXCIpO1xuXHRhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcblxuXHRhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuUHJvamVjdEZvcm0pO1xufTtcblxuY29uc3Qgb3BlblByb2plY3RGb3JtID0gKCkgPT4ge1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRhaW5lclwiKTtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lck92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHByb2plY3RGb3JtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXHRjb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHByb2plY3RTdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRjb25zdCBkZXRhaWxzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy1hcmVhXCIpO1xuXHRjb25zdCB0YXNrc0FyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWFyZWFcIik7XG5cblx0cHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lck92ZXJsYXksIHByb2plY3RGb3JtQ29udGFpbmVyKTtcblx0cHJvamVjdEZvcm1Db250YWluZXIuYXBwZW5kKHByb2plY3RGb3JtQ29udGVudCk7XG5cdHByb2plY3RGb3JtQ29udGVudC5hcHBlbmQoXG5cdFx0cHJvamVjdFRpdGxlTGFiZWwsXG5cdFx0cHJvamVjdFRpdGxlSW5wdXQsXG5cdFx0cHJvamVjdFN1Ym1pdEJ1dHRvblxuXHQpO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItb3ZlcmxheVwiKTtcblx0cHJvamVjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXHRwcm9qZWN0Rm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGVudFwiLCBcInByb2plY3QtZm9ybS1jb250ZW50XCIpO1xuXHRwcm9qZWN0U3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnV0dG9uXCIsIFwic3VibWl0LXByb2plY3QtYnV0dG9uXCIpO1xuXHRkZXRhaWxzQXJlYS5jbGFzc0xpc3QuYWRkKFwiaGlkZS1kZXRhaWxzLXBhbmVsXCIpO1xuXHR0YXNrc0FyZWEuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXBvaW50ZXItZXZlbnRzXCIpO1xuXG5cdHByb2plY3RUaXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiUHJvamVjdCBOYW1lXCI7XG5cdHByb2plY3RTdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJDcmVhdGUgUHJvamVjdFwiO1xuXG5cdHByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCBuYW1lXCIpO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblx0cHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuXHRwcm9qZWN0VGl0bGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cblx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHRwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHByb2plY3RGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHRcdHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0XHRwcm9qZWN0Rm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHR9LCAyMDApO1xuXG5cdHByb2plY3RTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1hY3Rpb25cIiwgXCJhZGQtcHJvamVjdFwiKTtcblxuXHRwcm9qZWN0Rm9ybUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcblx0cHJvamVjdEZvcm1Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgc3VibWl0Rm9ybSk7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuXHRjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcblx0Y29uc3QgcHJvamVjdEFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtYXJlYVwiKTtcblx0Y29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHByb2plY3RBcmVhLmFwcGVuZChwcm9qZWN0RGl2KTtcblx0cHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kaXZcIik7XG5cdHByb2plY3REaXYuaW5uZXJUZXh0ID0gXCIjIFwiICsgcHJvamVjdE5hbWU7XG59O1xuXG5leHBvcnQge1xuXHRjcmVhdGVIZWFkZXIsXG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSxcblx0Y3JlYXRlSGFtYnVyZ2VyLFxuXHRjcmVhdGVTaWRlTWVudSxcblx0Y3JlYXRlUHJvamVjdE1lbnUsXG5cdGFkZFByb2plY3Rcbn07XG4iLCJpbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1Yi1zdWJcIjtcblxuLy9EYXRhIHN0b3JhZ2UgYXJyYXk7XG5sZXQgdGFza3MgPSBbXG5cdHtcblx0XHRuYW1lOiBcIkp1c3QtRG8tSXQgQXBwIC0gR3VpZGVcIixcblx0XHRkZXNjOiBcIkluc2VydCBpbnN0cnVjdGlvbiBvbiBob3cgdG8gdXNlIHRoZSBhcHBcIixcblx0XHRkYXRlOiBcIjE1LzAzLzIwMjNcIixcblx0XHRwcmlvcml0eTogXCJoaWdoXCIsXG5cdFx0cHJvamVjdDogXCJHZW5lcmFsXCIsXG5cdFx0dGFza0lkOiA1MDAwLFxuXHR9LFxuXTtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRhc2sgSURcbmNvbnN0IGlkR2VuZXJhdG9yID0gKCkgPT4ge1xuXHRsZXQgaWROdW1iZXIgPSAxMDA7XG5cdGNvbnN0IGdldElkTnVtYmVyID0gKCkgPT4gaWROdW1iZXI7XG5cdGNvbnN0IGluY3JlYXNlSWROdW1iZXIgPSAoKSA9PiAoaWROdW1iZXIgKz0gNSk7XG5cdHJldHVybiB7XG5cdFx0Z2V0SWROdW1iZXIsXG5cdFx0aW5jcmVhc2VJZE51bWJlcixcblx0fTtcbn07XG5cbi8vSW5zdGFuY2Ugb2YgaWRlbnRpdHlcbmNvbnN0IHRhc2tJZGVudGl0eU51bWJlciA9IGlkR2VuZXJhdG9yKCk7XG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGFzayBpdGVtIGRhdGFcbmNvbnN0IGNyZWF0ZVRhc2tEYXRhID0gKCkgPT4ge1xuXHRjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpLnZhbHVlO1xuXHRjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NcIikudmFsdWU7XG5cdGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZHVlXCIpLnZhbHVlO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0J2lucHV0W25hbWU9XCJ0YXNrLXByaW9yaXR5XCJdOmNoZWNrZWQnXG5cdCkudmFsdWU7XG5cdGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpLnZhbHVlO1xuXHRjb25zdCB0YXNrSWQgPSB0YXNrSWRlbnRpdHlOdW1iZXIuZ2V0SWROdW1iZXIoKTtcblxuXHRjb25zdCB0YXNrT2JqZWN0ID0geyBuYW1lLCBkZXNjLCBkYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgdGFza0lkIH07XG5cblx0dGFza0lkZW50aXR5TnVtYmVyLmluY3JlYXNlSWROdW1iZXIoKTtcblx0c3RvcmVUYXNrRGF0YSh0YXNrT2JqZWN0KTtcblx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLWFkZGVkXCIsIHRhc2tPYmplY3QpO1xufTtcblxuLy9GdW5jdGlvbiB0byBzdG9yZSBkYXRhXG5jb25zdCBzdG9yZVRhc2tEYXRhID0gKG9iaikgPT4ge1xuXHR0YXNrcy5wdXNoKG9iaik7XG59O1xuXG5jb25zdCByZW1vdmVUYXNrRGF0YSA9IChrZXkpID0+IHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0YXNrc1tpXVtcInRhc2tJZFwiXSA9PSBrZXkpIHtcblx0XHRcdHRhc2tzLnNwbGljZShpLCAxKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IG1vZGlmeVRhc2tEYXRhID0gKGluZGV4KSA9PiB7XG5cdHRhc2tzW2luZGV4XVtcIm5hbWVcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIikudmFsdWU7XG5cdHRhc2tzW2luZGV4XVtcImRlc2NcIl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY1wiKS52YWx1ZTtcblx0dGFza3NbaW5kZXhdW1wiZGF0ZVwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWVcIikudmFsdWU7XG5cdHRhc2tzW2luZGV4XVtcInByaW9yaXR5XCJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHQnaW5wdXRbbmFtZT1cInRhc2stcHJpb3JpdHlcIl06Y2hlY2tlZCdcblx0KS52YWx1ZTtcblx0dGFza3NbaW5kZXhdW1wicHJvamVjdFwiXSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG5cblx0Y29uc3QgbmFtZVByb3AgPSB0YXNrc1tpbmRleF1bXCJuYW1lXCJdO1xuXHRjb25zdCBpZFByb3AgPSB0YXNrc1tpbmRleF1bXCJ0YXNrSWRcIl07XG5cblx0cHViU3ViLnB1Ymxpc2goXCJ0YXNrLW1vZGlmaWVkXCIsIGlkUHJvcCwgbmFtZVByb3ApO1xufTtcblxuZXhwb3J0IHsgdGFza3MsIGNyZWF0ZVRhc2tEYXRhLCByZW1vdmVUYXNrRGF0YSwgbW9kaWZ5VGFza0RhdGEgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tEYXRhLCBtb2RpZnlUYXNrRGF0YSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWRhdGFcIjtcbmltcG9ydCB7IGFkZFByb2plY3QgfSBmcm9tIFwiLi9jcmVhdGUtaG9tZVwiO1xuXG5mdW5jdGlvbiB0YXNrRm9ybSgpIHtcblx0Y29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250YWluZXJcIik7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblx0Y29uc3QgZm9ybVRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0Y29uc3QgdGFza1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrRGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRBcmVhXCIpO1xuXHRjb25zdCB0YXNrRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tEdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgcHJpb3JpdHlGaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKTtcblx0Y29uc3QgcHJpb3JpdHlMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGVnZW5kXCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlMYWJlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5TGFiZWxNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUxhYmVsSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0Y29uc3QgdGFza1ByaW9yaXR5SW5wdXRMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tQcmlvcml0eUlucHV0TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRjb25zdCB0YXNrUHJpb3JpdHlJbnB1dEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdGNvbnN0IHRhc2tQcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGNvbnN0IHRhc2tQcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblx0Y29uc3QgZ2VuZXJhbE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cdGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuXHRwcm9qZWN0Q29udGFpbmVyLmFwcGVuZCh0YXNrRm9ybUNvbnRhaW5lciwgcHJvamVjdENvbnRhaW5lck92ZXJsYXkpO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmQodGFza0Zvcm1Db250ZW50KTtcblx0dGFza0Zvcm1Db250ZW50LmFwcGVuZChcblx0XHRmb3JtVGl0bGVDb250YWluZXIsXG5cdFx0dGFza1RpdGxlTGFiZWwsXG5cdFx0dGFza0Rlc2NMYWJlbCxcblx0XHR0YXNrRHVlTGFiZWwsXG5cdFx0cHJpb3JpdHlGaWVsZHNldCxcblx0XHR0YXNrUHJvamVjdExhYmVsLFxuXHRcdHRhc2tQcm9qZWN0U2VsZWN0LFxuXHRcdHN1Ym1pdEJ1dHRvblxuXHQpO1xuXHRmb3JtVGl0bGVDb250YWluZXIuYXBwZW5kKGZvcm1UaXRsZSwgY2xvc2UpO1xuXG5cdGZvcm1UaXRsZS5pbm5lclRleHQgPSBcIk5ldyBUYXNrXCI7XG5cdGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuXHR0YXNrVGl0bGVMYWJlbC5pbm5lclRleHQgPSBcIlRhc2sgbmFtZVwiO1xuXHR0YXNrRGVzY0xhYmVsLmlubmVyVGV4dCA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuXHR0YXNrRHVlTGFiZWwuaW5uZXJUZXh0ID0gXCJUYXNrIER1ZSBCeVwiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbExvdy5pbm5lclRleHQgPSBcIkxvd1wiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbE1lZGl1bS5pbm5lclRleHQgPSBcIk1lZGl1bVwiO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guaW5uZXJUZXh0ID0gXCJIaWdoXCI7XG5cdHByaW9yaXR5TGVnZW5kLmlubmVyVGV4dCA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG5cdHRhc2tQcm9qZWN0TGFiZWwuaW5uZXJUZXh0ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XG5cdGdlbmVyYWxPcHRpb24uaW5uZXJUZXh0ID0gXCJHZW5lcmFsXCI7XG5cdHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdCBUYXNrXCI7XG5cblx0dGFza1RpdGxlTGFiZWwuYXBwZW5kKHRhc2tUaXRsZUlucHV0KTtcblx0dGFza0Rlc2NMYWJlbC5hcHBlbmQodGFza0Rlc2NJbnB1dCk7XG5cdHRhc2tEdWVMYWJlbC5hcHBlbmQodGFza0R1ZUlucHV0KTtcblx0cHJpb3JpdHlGaWVsZHNldC5hcHBlbmQoXG5cdFx0cHJpb3JpdHlMZWdlbmQsXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxMb3csXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxNZWRpdW0sXG5cdFx0dGFza1ByaW9yaXR5TGFiZWxIaWdoXG5cdCk7XG5cdHRhc2tQcmlvcml0eUxhYmVsTG93LmFwcGVuZCh0YXNrUHJpb3JpdHlJbnB1dExvdyk7XG5cdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLmFwcGVuZCh0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bSk7XG5cdHRhc2tQcmlvcml0eUxhYmVsSGlnaC5hcHBlbmQodGFza1ByaW9yaXR5SW5wdXRIaWdoKTtcblx0dGFza1Byb2plY3RTZWxlY3QuYXBwZW5kKGdlbmVyYWxPcHRpb24pO1xuXG5cdHByb2plY3RDb250YWluZXJPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXItb3ZlcmxheVwiKTtcblx0dGFza0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXHR0YXNrRm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGVudFwiKTtcblx0Zm9ybVRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlLWNvbnRhaW5lclwiKTtcblx0Y2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcblx0Zm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlXCIpO1xuXHRzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idXR0b25cIik7XG5cblx0dGFza1RpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay10aXRsZVwiKTtcblx0dGFza0Rlc2NMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrLWR1ZVwiKTtcblx0dGFza1ByaW9yaXR5TGFiZWxMb3cuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1wcmlvcml0eS1sb3dcIik7XG5cdHRhc2tQcmlvcml0eUxhYmVsTWVkaXVtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJpb3JpdHktbWVkaXVtXCIpO1xuXHR0YXNrUHJpb3JpdHlMYWJlbEhpZ2guc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFzay1wcmlvcml0eS1oaWdoXCIpO1xuXHR0YXNrUHJvamVjdExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2stcHJvamVjdFwiKTtcblxuXHR0YXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stdGl0bGVcIik7XG5cdHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stZHVlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktbG93XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2stcHJpb3JpdHktbWVkaXVtXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dEhpZ2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrLXByaW9yaXR5LWhpZ2hcIik7XG5cdHRhc2tQcm9qZWN0U2VsZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFzay1wcm9qZWN0XCIpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXRpdGxlXCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLWRlc2NcIik7XG5cdHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1kdWVcIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcmlvcml0eVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0YXNrLXByaW9yaXR5XCIpO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFzay1wcm9qZWN0XCIpO1xuXG5cdHRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXHR0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0QXJlYVwiKTtcblx0dGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dExvdy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TWVkaXVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibG93XCIpO1xuXHR0YXNrUHJpb3JpdHlJbnB1dE1lZGl1bS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1lZGl1bVwiKTtcblx0dGFza1ByaW9yaXR5SW5wdXRIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaGlnaFwiKTtcblx0Z2VuZXJhbE9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIkdlbmVyYWxcIik7XG5cblx0dGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCB0b2RheSk7XG5cblx0dGFza1RpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrRHVlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHR0YXNrUHJvamVjdFNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cdHRhc2tQcmlvcml0eUlucHV0TG93LnJlcXVpcmVkID0gdHJ1ZTtcblxuXHRjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtKTtcblx0dGFza0Zvcm1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybSk7XG5cdHRhc2tGb3JtQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdEZvcm0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oZSkge1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRlbnRcIik7XG5cdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG5cdGNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1wcm9qZWN0LWJ1dHRvblwiKTtcblxuXHRpZiAoZS50YXJnZXQgPT0gdGFza0Zvcm1Db250YWluZXIgfHwgZS50YXJnZXQgPT0gY2xvc2VCdXR0b24pIHtcblx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdFx0dGFza0Zvcm1Db250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHRcdHRhc2tGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHByb2plY3RDb250YWluZXJPdmVybGF5LnJlbW92ZSgpO1xuXHRcdFx0dGFza0Zvcm1Db250YWluZXIucmVtb3ZlKCk7XG5cdFx0XHR0YXNrRm9ybUNvbnRlbnQucmVtb3ZlKCk7XG5cdFx0fSwgMzAwKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG5cdGNvbnN0IHByb2plY3RDb250YWluZXJPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItb3ZlcmxheVwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuXHRjb25zdCB0YXNrRm9ybUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGVudFwiKTtcblxuXHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblx0dGFza0Zvcm1Db250ZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMClcIjtcblxuXHR0YXNrRm9ybUNvbnRlbnQucmVzZXQoKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRwcm9qZWN0Q29udGFpbmVyT3ZlcmxheS5yZW1vdmUoKTtcblx0XHR0YXNrRm9ybUNvbnRhaW5lci5yZW1vdmUoKTtcblx0XHR0YXNrRm9ybUNvbnRlbnQucmVtb3ZlKCk7XG5cdH0sIDMwMCk7XG59XG5cbmZ1bmN0aW9uIHNob3dGb3JtKCkge1xuXHR0YXNrRm9ybSgpO1xuXHRjb25zdCBwcm9qZWN0Q29udGFpbmVyT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLW92ZXJsYXlcIik7XG5cdGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgdGFza0Zvcm1Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWNvbnRlbnRcIik7XG5cdGNvbnN0IGRldGFpbHNBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWFyZWFcIik7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpO1xuXG5cdGRldGFpbHNBcmVhLmNsYXNzTGlzdC5hZGQoXCJoaWRlLWRldGFpbHMtcGFuZWxcIik7XG5cdHRhc2tzQXJlYS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tcG9pbnRlci1ldmVudHNcIik7XG5cblx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwKVwiO1xuXHR0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cdHRhc2tGb3JtQ29udGVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDApXCI7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0cHJvamVjdENvbnRhaW5lck92ZXJsYXkuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHRcdHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcblx0XHR0YXNrRm9ybUNvbnRlbnQuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xuXHR9LCAyMDApO1xuXG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiLCBcImNyZWF0ZVwiKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZ5Rm9ybSh7IG5hbWUsIGRlc2MsIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0IH0sIGluZGV4KSB7XG5cdHNob3dGb3JtKCk7XG5cdGNvbnN0IF9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xuXHRjb25zdCBfZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjXCIpO1xuXHRjb25zdCBfZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kdWVcIik7XG5cdGNvbnN0IF9wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLXByaW9yaXR5LSR7cHJpb3JpdHl9YCk7XG5cdGNvbnN0IF9wcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcblx0Y29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpO1xuXG5cdF9uYW1lLnZhbHVlID0gbmFtZTtcblx0X2Rlc2MudmFsdWUgPSBkZXNjO1xuXHRfZGF0ZS52YWx1ZSA9IGRhdGU7XG5cdF9wcmlvcml0eS5jaGVja2VkID0gdHJ1ZTtcblx0X3Byb2plY3QudmFsdWUgPSBwcm9qZWN0O1xuXHRzdWJtaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJNb2RpZnkgVGFza1wiO1xuXG5cdHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGlvblwiLCBcIm1vZGlmeVwiKTtcblx0c3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsIGluZGV4KTtcbn1cblxuZnVuY3Rpb24gc3VibWl0Rm9ybShlKSB7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRjb25zdCBmb3JtQWN0aW9uID0gZS50YXJnZXRcblx0XHQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpXG5cdFx0LmdldEF0dHJpYnV0ZShcImRhdGEtYWN0aW9uXCIpO1xuXG5cdGNvbnN0IHRhc2tJbmRleCA9IGUudGFyZ2V0XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKVxuXHRcdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblxuXHRpZiAoZm9ybUFjdGlvbiA9PSBcImNyZWF0ZVwiKSB7XG5cdFx0Y3JlYXRlVGFza0RhdGEoKTtcblx0XHRyZXNldEZvcm0oKTtcblx0fSBlbHNlIGlmIChmb3JtQWN0aW9uID09IFwibW9kaWZ5XCIpIHtcblx0XHRtb2RpZnlUYXNrRGF0YSh0YXNrSW5kZXgpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9IGVsc2UgaWYgKGZvcm1BY3Rpb24gPT0gXCJhZGQtcHJvamVjdFwiKSB7XG5cdFx0YWRkUHJvamVjdCgpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9XG59XG5cbmV4cG9ydCB7IHRhc2tGb3JtLCBjbG9zZUZvcm0sIHNob3dGb3JtLCBtb2RpZnlGb3JtLCBzdWJtaXRGb3JtIH07XG4iLCJpbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1Yi1zdWJcIjtcbmltcG9ydCB7IHRhc2tzLCByZW1vdmVUYXNrRGF0YSB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLWRhdGFcIjtcbmltcG9ydCB7IHJlbmRlckRldGFpbHMsIHNob3dEZXRhaWxzIH0gZnJvbSBcIi4vY3JlYXRlLWRldGFpbHMtcGFuZWxcIjtcbmltcG9ydCB7IG1vZGlmeUZvcm0gfSBmcm9tIFwiLi9jcmVhdGUtdGFzay1mb3JtXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tIZWFkaW5nKGRhdGEgPSBcIkFsbCBUYXNrc1wiKSB7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblxuXHR0YXNrc0FyZWEuYXBwZW5kKGhlYWRpbmcpO1xuXHRoZWFkaW5nLmlubmVyVGV4dCA9IGRhdGE7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2sob2JqKSB7XG5cdGNvbnN0IHRhc2tzQXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtYXJlYVwiKTtcblx0Y29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IGNoZWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGNvbnN0IHRhc2tDaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRjb25zdCB0YXNrQ2hlY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y29uc3QgdGFza0NoZWNrU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCB0YXNrQnV0dG9uc0FyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb25zdCB0YXNrRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5cdHRhc2tzQXJlYS5hcHBlbmQodGFza0NvbnRhaW5lcik7XG5cdHRhc2tDb250YWluZXIuYXBwZW5kKGNoZWNrQ29udGFpbmVyLCB0ZXh0Q29udGFpbmVyKTtcblx0Y2hlY2tDb250YWluZXIuYXBwZW5kKHRhc2tDaGVja0xhYmVsKTtcblx0dGV4dENvbnRhaW5lci5hcHBlbmQodGFza05hbWUsIHRhc2tCdXR0b25zQXJlYSk7XG5cdHRhc2tDaGVja0xhYmVsLmFwcGVuZCh0YXNrQ2hlY2tJbnB1dCwgdGFza0NoZWNrU3Bhbik7XG5cdHRhc2tCdXR0b25zQXJlYS5hcHBlbmQodGFza0VkaXQsIHRhc2tEZWxldGUpO1xuXG5cdHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuXHRjaGVja0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2stY29udGFpbmVyXCIpO1xuXHR0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRhaW5lclwiKTtcblx0dGV4dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCBvYmpbXCJ0YXNrSWRcIl0pO1xuXHR0YXNrQ2hlY2tTcGFuLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1zcGFuXCIpO1xuXHR0YXNrQ2hlY2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cdHRhc2tCdXR0b25zQXJlYS5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b24tYXJlYVwiKTtcblx0dGFza0VkaXQuY2xhc3NMaXN0LmFkZChcIm1vZGlmeS1idXR0b25cIik7XG5cdHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idXR0b25cIik7XG5cblx0dGFza05hbWUuaW5uZXJUZXh0ID0gb2JqW1wibmFtZVwiXTtcblx0dGFza0VkaXQuaW5uZXJUZXh0ID0gXCJNb2RpZnlcIjtcblx0dGFza0RlbGV0ZS5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xuXG5cdHRleHRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRleHRDb250YWluZXJFdmVudENvbnRyb2xsZXIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNb2RpZmllZFRhc2soaWRQcm9wLCBuYW1lUHJvcCkge1xuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEta2V5PVwiJHtpZFByb3B9XCJdYCk7XG5cdGNvbnN0IHRhc2tOYW1lID0gdGV4dENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwicFwiKTtcblxuXHR0YXNrTmFtZS5pbm5lclRleHQgPSBuYW1lUHJvcDtcbn1cblxuY29uc3QgdGV4dENvbnRhaW5lckV2ZW50Q29udHJvbGxlciA9IChlKSA9PiB7XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gXCJtb2RpZnktYnV0dG9uXCIpIHtcblx0XHRtb2RpZnlUYXNrKGUpO1xuXHRcdHJldHVybjtcblx0fSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QudmFsdWUgPT0gXCJkZWxldGUtYnV0dG9uXCIpIHtcblx0XHRkZWxldGVUYXNrKGUpO1xuXHRcdGNvbnNvbGUubG9nKHRhc2tzKTtcblx0XHRyZXR1cm47XG5cdH0gZWxzZSB7XG5cdFx0c2VsZWN0VGFzayhlKTtcblx0XHRzaG93RGV0YWlscygpO1xuXHR9XG59O1xuXG5jb25zdCBzZWxlY3RUYXNrID0gKGUpID0+IHtcblx0Y29uc3Qgb2JqS2V5ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIik7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAodGFza3NbaV1bXCJ0YXNrSWRcIl0gPT0gb2JqS2V5KSB7XG5cdFx0XHRyZW5kZXJEZXRhaWxzKHRhc2tzW2ldLCBpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cbn07XG5cbmNvbnN0IG1vZGlmeVRhc2sgPSAoZSkgPT4ge1xuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZS5jb21wb3NlZFBhdGgoKVsyXTtcblx0Y29uc3Qgb2JqS2V5ID0gdGV4dENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuXHRcdGlmICh0YXNrc1tpXVtcInRhc2tJZFwiXSA9PSBvYmpLZXkpIHtcblx0XHRcdG1vZGlmeUZvcm0odGFza3NbaV0sIGkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0fVxufTtcblxuY29uc3QgZGVsZXRlVGFzayA9IChlKSA9PiB7XG5cdGNvbnN0IHRhc2tDb250YWluZXIgPSBlLmNvbXBvc2VkUGF0aCgpWzNdO1xuXHRjb25zdCB0ZXh0Q29udGFpbmVyID0gZS5jb21wb3NlZFBhdGgoKVsyXTtcblx0Y29uc3Qgb2JqS2V5ID0gdGV4dENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiKTtcblx0dGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS1vdXRcIik7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdHRhc2tDb250YWluZXIucmVtb3ZlKCk7XG5cdH0sIDEwMDApO1xuXG5cdHB1YlN1Yi5wdWJsaXNoKFwidGFzay1yZW1vdmVkXCIsIG9iaktleSk7XG59O1xuXG5wdWJTdWIuc3Vic2NyaWJlKFwidGFzay1hZGRlZFwiLCByZW5kZXJUYXNrKTtcbnB1YlN1Yi5zdWJzY3JpYmUoXCJ0YXNrLXJlbW92ZWRcIiwgcmVtb3ZlVGFza0RhdGEpO1xucHViU3ViLnN1YnNjcmliZShcInRhc2stbW9kaWZpZWRcIiwgcmVuZGVyTW9kaWZpZWRUYXNrKTtcblxuZXhwb3J0IHsgcmVuZGVyVGFza0hlYWRpbmcsIHJlbmRlclRhc2sgfTtcbiIsImNsYXNzIFB1YlN1YiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMudHJhY2tlciA9IHtcblx0XHRcdC8va2V5OiBhY3Rpdml0eU5hbWUsIHZhbHVlOiBbZnVuY3NdXG5cdFx0fTtcblx0fVxuXHRzdWJzY3JpYmUoYWN0aXZpdHlOYW1lLCBmdW5jKSB7XG5cdFx0aWYgKHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdKSB7XG5cdFx0XHR0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXS5wdXNoKGZ1bmMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXSA9IFtmdW5jXTtcblx0XHR9XG5cdH1cblxuXHR1bnN1YnNjcmliZShhY3Rpdml0eU5hbWUsIGZ1bmMpIHtcblx0XHRjb25zdCBmdW5jQXJyYXkgPSB0aGlzLnRyYWNrZXJbYWN0aXZpdHlOYW1lXTtcblx0XHRjb25zdCBmdW5jSW5kZXggPSBmdW5jQXJyYXkuaW5kZXhPZihmdW5jKTtcblx0XHRpZiAoZnVuY0luZGV4ID4gLTEpIHtcblx0XHRcdGZ1bmNBcnJheS5zcGxpY2UoZnVuY0luZGV4LCAxKTtcblx0XHR9XG5cdH1cblxuXHRwdWJsaXNoKGFjdGl2aXR5TmFtZSwgLi4uYXJncykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMudHJhY2tlclthY3Rpdml0eU5hbWVdKSkge1xuXHRcdFx0dGhpcy50cmFja2VyW2FjdGl2aXR5TmFtZV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpdGVtLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IHB1YlN1YiA9IG5ldyBQdWJTdWIoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHViU3ViO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuXHRjcmVhdGVIZWFkZXIsXG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSxcblx0Y3JlYXRlSGFtYnVyZ2VyLFxuXHRjcmVhdGVTaWRlTWVudSxcblx0Y3JlYXRlUHJvamVjdE1lbnUsXG59IGZyb20gXCIuL2NyZWF0ZS1ob21lXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrSGVhZGluZyB9IGZyb20gXCIuL2NyZWF0ZS10YXNrLXBhbmVsXCI7XG5pbXBvcnQgcHViU3ViIGZyb20gXCIuL3B1Yi1zdWJcIjtcblxuY29uc3QgY3JlYXRlSW50ZXJmYWNlID0gKCkgPT4ge1xuXHRjcmVhdGVIZWFkZXIoKTtcblx0Y3JlYXRlSGFtYnVyZ2VyKCk7XG5cdGNyZWF0ZURhc2hib2FyZFN0cnVjdHVyZSgpO1xuXHRjcmVhdGVTaWRlTWVudSgpO1xuXHRjcmVhdGVQcm9qZWN0TWVudSgpO1xuXHRyZW5kZXJUYXNrSGVhZGluZygpO1xuXHRwdWJTdWIucHVibGlzaChcInRhc2stYWRkZWRcIiwge1xuXHRcdG5hbWU6IFwiSnVzdC1Eby1JdCBBcHAgLSBHdWlkZVwiLFxuXHRcdGRlc2M6IFwiSW5zZXJ0IGluc3RydWN0aW9uIG9uIGhvdyB0byB1c2UgdGhlIGFwcFwiLFxuXHRcdGRhdGU6IFwiMTUvMDMvMjAyM1wiLFxuXHRcdHByaW9yaXR5OiBcImhpZ2hcIixcblx0XHRwcm9qZWN0OiBcIkdlbmVyYWxcIixcblx0XHR0YXNrSWQ6IDUwMDAsXG5cdH0pO1xufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGNyZWF0ZUludGVyZmFjZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=