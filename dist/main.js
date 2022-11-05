/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\nhtml {\n  -moz-tab-size: 4;\n  tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n  font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n}\n\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n  text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}", "",{"version":3,"sources":["webpack://./node_modules/modern-normalize/modern-normalize.css"],"names":[],"mappings":"AAAA,8FAAA;AAEA;;;CAAA;AAKA;;CAAA;AAIA;;;EAGC,sBAAA;AAFD;;AAKA;;CAAA;AAIA;EACC,gBAAA;EACA,WAAA;AAHD;;AAMA;;;CAAA;AAKA;EACC,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;AAJD;;AAOA;;;CAAA;AAKA;;CAAA;AAIA;EACC,SAAA;AAND;;AASA;;CAAA;AAIA;EACC,8HACC;AARF;;AAmBA;;;CAAA;AAKA;;;CAAA;AAKA;EACC,SAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AAlBD;;AAqBA;;;CAAA;AAKA;;CAAA;AAIA;EACC,iCAAA;AApBD;;AAuBA;;CAAA;AAIA;;EAEC,mBAAA;AArBD;;AAwBA;;;CAAA;AAKA;;;;EAIC,wFACC,EAKW,MAAA;EACZ,cAAA,EAAA,MAAA;AA5BD;;AA+BA;;CAAA;AAIA;EACC,cAAA;AA7BD;;AAgCA;;CAAA;AAIA;;EAEC,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AA9BD;;AAiCA;EACC,eAAA;AA9BD;;AAiCA;EACC,WAAA;AA9BD;;AAiCA;;;CAAA;AAKA;;;CAAA;AAKA;EACC,cAAA,EAAA,MAAA;EACA,qBAAA,EAAA,MAAA;AAhCD;;AAmCA;;;CAAA;AAKA;;;CAAA;AAKA;;;;;EAKC,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AAlCD;;AAqCA;;;CAAA;AAKA;SACS,MAAA;EACR,oBAAA;AAnCD;;AAsCA;;CAAA;AAIA;;;;EAIC,0BAAA;AApCD;;AAuCA;;CAAA;AAIA;EACC,kBAAA;EACA,UAAA;AArCD;;AAwCA;;CAAA;AAIA;EACC,8BAAA;AAtCD;;AAyCA;;;CAAA;AAKA;EACC,gBAAA;AAvCD;;AA0CA;;CAAA;AAIA;EACC,UAAA;AAxCD;;AA2CA;;CAAA;AAIA;EACC,wBAAA;AAzCD;;AA4CA;;CAAA;AAIA;;EAEC,YAAA;AA1CD;;AA6CA;;;CAAA;AAKA;EACC,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AA3CD;;AA8CA;;CAAA;AAIA;EACC,wBAAA;AA5CD;;AA+CA;;;CAAA;AAKA;EACC,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AA7CD;;AAgDA;;;CAAA;AAKA;;CAAA;AAIA;EACC,kBAAA;AA/CD","sourcesContent":["/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #cbd5e1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n#head {\n  user-select: none;\n  color: white;\n  width: 100%;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 2ch;\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: #fc4a1a;\n  -webkit-user-drag: none;\n}\n\n#winner-overlay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: 200ms ease-in;\n  transform: scale(0);\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 3;\n  pointer-events: none;\n}\n#winner-overlay.active {\n  z-index: 3;\n  transform: scale(1);\n  pointer-events: all;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#winner-overlay #winner-name {\n  color: white;\n  margin: 1rem;\n  font-size: 7rem;\n}\n#winner-overlay #resetButton {\n  cursor: pointer;\n  border-radius: 100vmax;\n  border: none;\n  font-weight: bold;\n  font-size: 3rem;\n  padding: 0;\n  margin: 0;\n  width: 20rem;\n  height: 5rem;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.45);\n  transition: 200ms ease-in;\n  z-index: 4;\n}\n#winner-overlay #resetButton:hover {\n  transform: scale(1.1);\n}\n\n#foot {\n  user-select: none;\n  height: 50px;\n  width: 100%;\n  margin-top: auto;\n  background-color: #f7b733;\n  -webkit-user-drag: none;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n#foot a {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n#foot a img {\n  height: 70%;\n  transition: 300ms ease-in;\n}\n#foot a img:hover {\n  transform: rotate(360deg);\n}\n\n#content {\n  display: flex;\n  align-items: center;\n  gap: 3rem;\n}\n\n.instructions-cont {\n  position: relative;\n  width: 300px;\n  height: 100px;\n}\n.instructions-cont .instructions {\n  position: absolute;\n  margin: 2rem 0;\n  padding: 0;\n  z-index: -1;\n  opacity: 1;\n  transition: 300ms ease-out;\n}\n.instructions-cont .instructions.active {\n  opacity: 0;\n}\n.instructions-cont .slider {\n  height: 100%;\n  width: 100%;\n  background-color: #cbd5e1;\n  transition: 700ms ease-in;\n}\n.instructions-cont .slider.active {\n  transform: translate(300px);\n}\n\n.board {\n  background-color: #dfdce3;\n  display: grid;\n  border: 1px solid black;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n.board:first-of-type .cell {\n  cursor: default;\n}\n.board:nth-of-type(even) .cell:not(.hit, .missed, .sunk):hover {\n  background-color: grey;\n}\n.board .cell {\n  border: 1px solid black;\n  user-select: none;\n  cursor: pointer;\n}\n.board .cell .ship-cell {\n  width: 100%;\n  height: 100%;\n}\n.board .cell .ship-cell[data-shipcell=\"2\"] {\n  background-color: #a3e635;\n}\n.board .cell .ship-cell[data-shipcell=\"3\"] {\n  background-color: #4ade80;\n}\n.board .cell .ship-cell[data-shipcell=\"4\"] {\n  background-color: #2dd4bf;\n}\n.board .cell .ship-cell[data-shipcell=\"5\"] {\n  background-color: #818cf8;\n}\n.board .cell.hit {\n  cursor: default;\n  background-color: red;\n}\n.board .cell.hit .ship-cell {\n  background-color: inherit;\n}\n.board .cell.hit.explode {\n  background-image: url(\"https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif\");\n  background-size: 100% 100%;\n}\n.board .cell.hit.explode .ship-cell {\n  background-image: inherit;\n  background-size: inherit;\n}\n.board .cell.missed {\n  background-color: #0077ff;\n}\n.board .cell.sunk {\n  cursor: default;\n  background-image: url(\"https://cdn-icons-png.flaticon.com/512/3389/3389149.png\");\n  background-size: 100% 100%;\n}\n.board .cell.sunk .ship-cell {\n  background-image: inherit;\n  background-size: inherit;\n}\n.board .cell.blocked {\n  background-image: url(\"https://cdn-icons-png.flaticon.com/512/718/718672.png\");\n  background-size: 100% 100%;\n}\n.board .cell.dragHover {\n  background-color: grey;\n}\n\n.all-ships {\n  -webkit-user-drag: none;\n  border-radius: 15px;\n  border: 2px solid black;\n  width: 375px;\n  height: 425px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: center;\n  background-color: #dfdce3;\n  position: relative;\n  align-items: flex-start;\n  padding: 3rem 1rem 1rem 1rem;\n  transition: 200ms ease-out;\n}\n.all-ships.fade-out {\n  transform: scale(0);\n}\n.all-ships.vertical {\n  flex-direction: row;\n  align-items: center;\n  gap: 1rem;\n}\n.all-ships #axis-btn {\n  user-select: none;\n  position: absolute;\n  top: 1rem;\n  background-color: orangered;\n  font-weight: bold;\n  font-size: 1.4rem;\n  cursor: pointer;\n  border: none;\n  border-radius: 100vmax;\n  align-self: center;\n  width: 50%;\n  height: 40px;\n  justify-self: center;\n  transition: 200ms ease-in transform;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.all-ships #axis-btn:hover {\n  transform: scale(1.1);\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n.all-ships .ship-container {\n  display: flex;\n  cursor: pointer;\n}\n.all-ships .ship-container.vertical {\n  flex-direction: column;\n}\n.all-ships .ship-container[data-ship] .ship-cell {\n  border: 1px solid black;\n  background-color: inherit;\n  width: 50px;\n  height: 50px;\n}\n.all-ships .ship-container[data-ship=\"2\"] {\n  border: 1px solid black;\n  background-color: #a3e635;\n}\n.all-ships .ship-container[data-ship=\"3\"] {\n  border: 1px solid black;\n  background-color: #4ade80;\n}\n.all-ships .ship-container[data-ship=\"4\"] {\n  border: 1px solid black;\n  background-color: #2dd4bf;\n}\n.all-ships .ship-container[data-ship=\"5\"] {\n  border: 1px solid black;\n  background-color: #818cf8;\n}\n.all-ships .ship-container.dragging {\n  visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["body {\r\n  background-color: #cbd5e1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n#head {\r\n  user-select: none;\r\n  color: white;\r\n  width: 100%;\r\n  height: 75px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  letter-spacing: 2ch;\r\n  font-size: 3rem;\r\n  font-weight: bold;\r\n  background-color: #fc4a1a;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n#winner-overlay {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  transition: 200ms ease-in;\r\n  transform: scale(0);\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 3;\r\n  pointer-events: none;\r\n\r\n  &.active{\r\n    z-index: 3;\r\n    transform: scale(1);\r\n    pointer-events: all;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n  }\r\n  #winner-name {\r\n    color: white;\r\n    margin: 1rem;\r\n    font-size: 7rem;\r\n  }\r\n\r\n  #resetButton {\r\n    cursor: pointer;\r\n    border-radius: 100vmax;\r\n    border: none;\r\n    font-weight: bold;\r\n    font-size: 3rem;\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 20rem;\r\n    height: 5rem;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.45);\r\n    transition: 200ms ease-in;\r\n    z-index: 4;\r\n    &:hover {\r\n      transform: scale(1.1);\r\n    }  \r\n  }\r\n}\r\n\r\n#foot {\r\n  user-select: none;\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: auto;\r\n  background-color: #f7b733;\r\n  -webkit-user-drag: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-content: center;\r\n  a {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    img {\r\n      height: 70%;\r\n      transition: 300ms ease-in;\r\n\r\n      &:hover {\r\n        transform: rotate(360deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 3rem;\r\n}\r\n\r\n.instructions-cont {\r\n  position: relative;\r\n  width: 300px;\r\n  height: 100px;\r\n  .instructions {\r\n    position: absolute;\r\n    margin: 2rem 0;\r\n    padding: 0;\r\n    z-index: -1;\r\n    opacity: 1;\r\n    transition: 300ms ease-out;\r\n    &.active {\r\n      opacity: 0;\r\n    }\r\n  }\r\n  .slider {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #cbd5e1;\r\n    transition: 700ms ease-in;\r\n    &.active {\r\n      transform: translate(300px);\r\n    }\r\n  }\r\n}\r\n\r\n.board {\r\n  background-color: #dfdce3;\r\n  display: grid;\r\n  border: 1px solid black;\r\n  width: 500px;\r\n  height: 500px;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  &:first-of-type {\r\n    .cell {\r\n      cursor: default;\r\n    }\r\n  }\r\n  &:nth-of-type(even) {\r\n    .cell:not(.hit, .missed, .sunk):hover {\r\n      background-color: grey;\r\n    }\r\n  }\r\n  \r\n  .cell {\r\n    border: 1px solid black;\r\n    user-select: none;\r\n    cursor: pointer;\r\n    .ship-cell {\r\n      width: 100%;\r\n      height: 100%;\r\n      &[data-shipcell=\"2\"] {\r\n        background-color: #a3e635;\r\n      }\r\n      &[data-shipcell=\"3\"] {\r\n        background-color: #4ade80;\r\n      }\r\n      &[data-shipcell=\"4\"] {\r\n        background-color: #2dd4bf;\r\n      }\r\n      &[data-shipcell=\"5\"] {\r\n        background-color: #818cf8;\r\n      }\r\n    }\r\n    &.hit {\r\n      cursor: default;\r\n      background-color: red;\r\n      .ship-cell {\r\n        background-color: inherit;\r\n      }\r\n      &.explode {\r\n        background-image: url('https://i.gifer.com/origin/a0/a07ad08920f303f655251b1a0b353b86_w200.gif');\r\n        background-size: 100% 100%;\r\n        .ship-cell {\r\n          background-image: inherit;\r\n          background-size: inherit;\r\n        }\r\n      }\r\n    }\r\n    &.missed {\r\n      background-color: #0077ff;\r\n    }\r\n    &.sunk {\r\n      cursor: default;\r\n      background-image: url('https://cdn-icons-png.flaticon.com/512/3389/3389149.png');\r\n      background-size: 100% 100%;\r\n      .ship-cell {\r\n        background-image: inherit;\r\n        background-size: inherit;\r\n      }\r\n    }\r\n    &.blocked {\r\n      background-image: url('https://cdn-icons-png.flaticon.com/512/718/718672.png');\r\n      background-size: 100% 100%;\r\n    }\r\n    &.dragHover {\r\n        background-color: grey;\r\n    }\r\n  }\r\n}\r\n\r\n.all-ships {\r\n  -webkit-user-drag: none;\r\n  border-radius: 15px;\r\n  border: 2px solid black;\r\n  width: 375px;\r\n  height: 425px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  background-color: #dfdce3;\r\n  position: relative;\r\n  align-items: flex-start;\r\n  padding: 3rem 1rem 1rem 1rem;\r\n  transition: 200ms ease-out;\r\n  &.fade-out {\r\n    transform: scale(0);\r\n  }\r\n  &.vertical {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1rem;\r\n  }\r\n  #axis-btn {\r\n    user-select: none;\r\n    position: absolute;\r\n    top: 1rem;\r\n    background-color: orangered;    \r\n    font-weight: bold;\r\n    font-size: 1.4rem;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 100vmax;\r\n    align-self: center;\r\n    width: 50%;\r\n    height: 40px;\r\n    justify-self: center;\r\n    transition: 200ms ease-in transform;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\r\n    &:hover {\r\n      transform: scale(1.1);\r\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\r\n    }\r\n  }\r\n  .ship-container {\r\n    display: flex;\r\n    cursor: pointer;\r\n    &.vertical {\r\n      flex-direction: column;\r\n    }\r\n    &[data-ship] .ship-cell{\r\n        border: 1px solid black;\r\n        background-color: inherit;\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n    &[data-ship=\"2\"] {\r\n      border: 1px solid black;\r\n      background-color: #a3e635;\r\n    }\r\n    &[data-ship=\"3\"] {\r\n      border: 1px solid black;\r\n      background-color: #4ade80;\r\n    }\r\n    &[data-ship=\"4\"] {\r\n      border: 1px solid black;\r\n      background-color: #2dd4bf;\r\n    }\r\n    &[data-ship=\"5\"] {\r\n      border: 1px solid black;\r\n      background-color: #818cf8;\r\n    }\r\n    &.dragging {\r\n        visibility: hidden;\r\n    }\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/*!************************************************************!*\
  !*** ./node_modules/modern-normalize/modern-normalize.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./modern-normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/modern-normalize/modern-normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_sass_loader_dist_cjs_js_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/computer.js":
/*!****************************!*\
  !*** ./src/js/computer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Computer)
/* harmony export */ });
class Computer {
  usedTiles = [];

  adjacentTiles = [];

  makeMove() {
    let tile = {
      x: null, y: null, hit: false, axis: null, sunk: false,
    };

    if (this.usedTiles.length > 0) {
      tile = this.usedTiles[this.usedTiles.length - 1];
    }

    if (this.adjacentTiles.length === 0 || this.usedTiles.length === 0) {
      let randX = Math.floor(Math.random() * 10);
      let randY = Math.floor(Math.random() * 10);
      tile = {
        x: randX, y: randY, hit: false, axis: null, sunk: false,
      };
      while (this.checkIfUsed(randX, randY, this.usedTiles)) {
        randX = Math.floor(Math.random() * 10);
        randY = Math.floor(Math.random() * 10);
        tile = {
          x: randX, y: randY, hit: false, axis: null, sunk: false,
        };
      }
      this.usedTiles.push(tile);

      return tile;
    }

    if (tile.axis === null && tile.hit) {
      const adjTile = this.adjacentTiles.shift();
      this.usedTiles.push(adjTile);
      return adjTile;
    }

    if (tile.axis !== null && tile.hit) {
      this.filterByAxis(tile.axis);
      const adjTile = this.adjacentTiles.shift();
      this.usedTiles.push(adjTile);
      return adjTile;
    }

    if (tile.axis !== null && !tile.hit) {
      const adjTile = this.adjacentTiles.shift();
      this.usedTiles.push(adjTile);
      return adjTile;
    }

    return null;
  }

  checkIfUsed(x, y, arr) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].x === x && arr[index].y === y) {
        return true;
      }
    }
    return false;
  }

  updateLastTileHit() {
    const lastTile = this.usedTiles[this.usedTiles.length - 1];
    lastTile.hit = true;

    const leftTile = {
      x: lastTile.x - 1, y: lastTile.y, hit: false, axis: 'x', sunk: false,
    };
    const rightTile = {
      x: lastTile.x + 1, y: lastTile.y, hit: false, axis: 'x', sunk: false,
    };
    const topTile = {
      x: lastTile.x, y: lastTile.y - 1, hit: false, axis: 'y', sunk: false,
    };
    const bottomTile = {
      x: lastTile.x, y: lastTile.y + 1, hit: false, axis: 'y', sunk: false,
    };

    this.adjacentTiles.push(leftTile, topTile, rightTile, bottomTile);
    this.removeOutOfBounds();

    let result = [];
    result = this.adjacentTiles.filter((tile) => !this.checkIfUsed(tile.x, tile.y, this.usedTiles));

    this.adjacentTiles = result;
  }

  updateLastTileSunk() {
    this.usedTiles[this.usedTiles.length - 1].sunk = true;
    this.usedTiles[this.usedTiles.length - 1].hit = true;
    this.adjacentTiles = [];
  }

  filterByAxis(axis) {
    const result = this.adjacentTiles.filter((tile) => tile.axis === axis);
    this.adjacentTiles = result;
  }

  removeOutOfBounds() {
    const result = this.adjacentTiles.filter((tile) => tile.x >= 0 && tile.y >= 0
    && tile.x <= 9 && tile.y <= 9);
    this.adjacentTiles = result;
  }

  reset() {
    this.adjacentTiles = [];
    this.usedTiles = [];
  }
}


/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computer */ "./src/js/computer.js");




const computerPlayer = new _computer__WEBPACK_IMPORTED_MODULE_2__["default"]();
const board = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
const computerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
computerBoard.randomBoard();
let pageClone = null;

function initialize() {
  createBoardDOM();
  createShipGridCells();
  setUpAxisButton();
  computerPlayer.reset();
  resetDOM();
}

function resetDOM() {
  const page = document.querySelector('#content');
  const resetButton = document.querySelector('#resetButton');
  resetButton.addEventListener('click', buttonResetGame);
  pageClone = page.cloneNode(true);

  const title = document.querySelector('.instructions');
  title.classList.remove('active');
  title.innerText = 'PLACE YOUR SHIPS';

  const slider = document.querySelector('.slider');
  slider.classList.add('active');
}

function createBoardDOM(isComputerBoard = false) {
  const computerBoardDOM = document.createElement('div');
  const boardDOM = document.querySelector('.board');
  computerBoardDOM.classList.add('board');
  if (!isComputerBoard) {
    boardDOM.addEventListener('dragleave', dragLeave);
  }

  const boardToLoop = isComputerBoard ? computerBoard : board;

  boardToLoop.board.forEach((element) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-x', element.posX);
    gridCell.setAttribute('data-y', element.posY);
    if (!isComputerBoard) {
      gridCell.addEventListener('dragenter', dragEnter);
      gridCell.addEventListener('dragover', dragOver);
      gridCell.addEventListener('drop', dragDrop);
      gridCell.addEventListener('hitPlayerTileEvent', function handler(e) {
        clickTileToHit(e, board, boardDOM, handler);
      });
      boardDOM.appendChild(gridCell);
    } else {
      gridCell.addEventListener('click', function handler(e) {
        clickTileToHit(e, computerBoard, computerBoardDOM, handler, boardDOM, true);
      });
      computerBoardDOM.appendChild(gridCell);
    }
  });

  if (isComputerBoard) {
    return computerBoardDOM;
  }
  return false;
}

function createShipGridCells() {
  const shipList = document.querySelectorAll('.ship-container');

  shipList.forEach((shipContainer) => {
    shipContainer.addEventListener('dragstart', dragStart);
    shipContainer.addEventListener('dragend', dragEnd);

    const sizeOfShip = parseInt(shipContainer.getAttribute('data-ship'), 10);

    for (let index = 0; index < sizeOfShip; index++) {
      const shipCell = document.createElement('div');
      shipCell.classList.add('ship-cell');
      shipCell.setAttribute('data-shipcell', sizeOfShip);
      shipContainer.appendChild(shipCell);
    }
  });
}

function setUpAxisButton() {
  const axisButton = document.querySelector('#axis-btn');
  const ships = document.querySelectorAll('.ship-container');
  const allShips = document.querySelector('.all-ships');
  axisButton.innerText = 'ROTATE';
  axisButton.setAttribute('data-axis', 'x');

  axisButton.addEventListener('click', () => {
    if (axisButton.getAttribute('data-axis') === 'x') {
      axisButton.setAttribute('data-axis', 'y');
      allShips.classList.add('vertical');
      ships.forEach((cell) => {
        cell.classList.add('vertical');
      });
    } else {
      axisButton.setAttribute('data-axis', 'x');
      allShips.classList.remove('vertical');
      ships.forEach((cell) => {
        cell.classList.remove('vertical');
      });
    }
  });
}

function clickTileToHit(e, boardToAttack, boardDOM, func, playerBoardDOM, isComputer = false) {
  const coordX = parseInt(e.target.getAttribute('data-x'), 10);
  const coordY = parseInt(e.target.getAttribute('data-y'), 10);
  if (boardToAttack.receiveAttack(coordX, coordY)) {
    e.target.classList.add('hit', 'explode');
    const index = boardToAttack.findTileIndex(coordX, coordY);
    if (boardToAttack.board[index].ship.sunk === true) {
      const allHitTiles = boardDOM.querySelectorAll('.cell.hit');
      allHitTiles.forEach((cell) => {
        const xHitIndex = parseInt(cell.getAttribute('data-x'), 10);
        const yHitIndex = parseInt(cell.getAttribute('data-y'), 10);
        const indexHitTile = boardToAttack.findTileIndex(xHitIndex, yHitIndex);

        if (boardToAttack.board[indexHitTile].ship.sunk === true) {
          cell.classList.remove('hit');
          cell.classList.add('sunk');
        }
      });
    }
    setTimeout(() => {
      e.target.classList.remove('explode');
    }, 550);
  } else {
    e.target.classList.add('missed');
  }

  if (computerBoard.allShipsSunk()) {
    displayWinner('player');
    return;
  }

  if (board.allShipsSunk()) {
    displayWinner('computer');
    return;
  }

  if (isComputer) {
    const coordObj = computerPlayer.makeMove();
    const x = coordObj.x.toString();
    const y = coordObj.y.toString();
    const tileToAttack = playerBoardDOM.querySelector(`[data-x='${x}'][data-y='${y}']`);
    tileToAttack.dispatchEvent(new CustomEvent('hitPlayerTileEvent'));
    if (tileToAttack.classList.contains('hit')) {
      computerPlayer.updateLastTileHit();
    }
    if (tileToAttack.classList.contains('sunk')) {
      computerPlayer.updateLastTileSunk();
    }
  }

  e.target.removeEventListener('click', func);
}

function displayWinner(winner) {
  const overlay = document.querySelector('#winner-overlay');
  overlay.classList.add('active');
  const nameToDisplay = document.querySelector('#winner-name');
  nameToDisplay.innerText = winner === 'player' ? 'YOU WIN!' : 'YOU LOST!';
  const slider = document.querySelector('.slider');
  slider.classList.remove('active');
}

function buttonResetGame(e) {
  const overlay = document.querySelector('#winner-overlay');
  overlay.classList.remove('active');
  const contentToReplace = document.querySelector('#content');

  const cellsToDeleteShip = pageClone.querySelectorAll('.ship-cell');
  const cellsToDeleteBoard = pageClone.querySelectorAll('.cell');

  for (let i = 0; i < cellsToDeleteShip.length; i++) {
    cellsToDeleteShip[i].remove();
  }

  for (let i = 0; i < cellsToDeleteBoard.length; i++) {
    cellsToDeleteBoard[i].remove();
  }

  contentToReplace.replaceWith(pageClone);

  board.reset();
  computerBoard.reset();
  computerBoard.randomBoard();
  initialize();
}

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-ship'));
  e.dataTransfer.effectAllowed = 'move';
  setTimeout(() => {
    e.target.classList.add('dragging');
  }, 0);
}

function dragEnd(e) {
  e.preventDefault();
  if (!e.target.classList.contains('.ship-cell')) {
    e.target.classList.remove('dragging');
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  const hoveredCells = document.querySelectorAll('.dragHover');
  const cellsWithBlockedImage = document.querySelectorAll('.blocked');
  cellsWithBlockedImage.forEach((cell) => {
    cell.classList.remove('blocked');
  });

  hoveredCells.forEach((cell) => {
    cell.classList.remove('dragHover');
  });

  const draggedCell = document.querySelector('.dragging');
  const shipSize = parseInt(draggedCell.getAttribute('data-ship'), 10);

  const coords = {
    x: e.target.getAttribute('data-x'),
    y: e.target.getAttribute('data-y'),
  };

  const axisButton = document.querySelector('#axis-btn');
  const axisToUse = axisButton.getAttribute('data-axis');

  let oppositeAxis;
  if (axisToUse === 'x') {
    oppositeAxis = 'y';
  } else {
    oppositeAxis = 'x';
  }

  const cellsInDirection = document.querySelectorAll(`[data-${oppositeAxis}='${coords[oppositeAxis]}']`);

  const cellsAfterCurrent = 9 - coords[axisToUse];
  const cellsBeforeCurrent = coords[axisToUse] - 1;
  const cellsToChange = [];

  if (cellsAfterCurrent >= shipSize - 1) {
    for (let index = 0; index < cellsInDirection.length; index++) {
      if (parseInt(cellsInDirection[index].getAttribute(`data-${axisToUse}`), 10) > coords[axisToUse]) {
        cellsToChange.push(cellsInDirection[index]);
      }
    }
  } else if (cellsBeforeCurrent >= shipSize - 1) {
    for (let index = 0; index < cellsInDirection.length; index++) {
      if (parseInt(cellsInDirection[index].getAttribute(`data-${axisToUse}`), 10) < coords[axisToUse]) {
        cellsToChange.push(cellsInDirection[index]);
      }
    }
    cellsToChange.reverse();
  }

  cellsToChange.splice(0 + shipSize - 1);

  let isCellUsed = false;
  let cellsToRemoveHover;

  e.target.classList.add('dragHover');

  for (let i = 0; i < cellsToChange.length; i++) {
    if (cellsToChange[i].classList.contains('used')) {
      isCellUsed = true;
      cellsToRemoveHover = document.querySelectorAll('.dragHover');
      break;
    } else {
      cellsToChange[i].classList.add('dragHover');
    }
  }

  if (isCellUsed) {
    cellsToRemoveHover.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
    e.target.classList.add('blocked');
  }
}

function dragDrop(e) {
  e.preventDefault();
  const blockedCell = document.querySelector('.blocked');
  if (blockedCell) {
    blockedCell.classList.remove('blocked');
  } else {
    const shipID = e.dataTransfer.getData('text');
    const shipObj = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](parseInt(shipID, 10));
    const shipDOMElement = document.querySelector(`[data-ship='${shipID}']`);
    const hoveredCells = document.querySelectorAll('.dragHover');
    const shipCell = shipDOMElement.firstChild;

    for (let i = 0; i < hoveredCells.length; i++) {
      hoveredCells[i].appendChild(shipCell.cloneNode(true));
      hoveredCells[i].classList.add('used');
      hoveredCells[i].removeEventListener('dragenter', dragEnter, false);
      hoveredCells[i].removeEventListener('dragover', dragOver, false);
      hoveredCells[i].removeEventListener('drop', dragDrop, false);
      const x = parseInt(hoveredCells[i].getAttribute('data-x'), 10);
      const y = parseInt(hoveredCells[i].getAttribute('data-y'), 10);
      board.place(shipObj, x, y);
    }

    shipDOMElement.remove();

    const remainingShips = document.querySelectorAll('.ship-container');
    if (remainingShips.length === 0) {
      const title = document.querySelector('.instructions');
      title.classList.add('active');
      const computerBoardDOM = createBoardDOM(true);
      const allShipsContainer = document.querySelector('.all-ships');
      setTimeout(() => {
        allShipsContainer.replaceWith(computerBoardDOM);
      }, 210);
      allShipsContainer.classList.add('fade-out');
    }
  }
}

function dragLeave(e) {
  if (e.target.id === 'board') {
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) => {
      cell.classList.remove('dragHover');
    });
  }
}


/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


class GameBoard {
  board = [];

  hitCount = 0;

  totalShipTiles = 0;

  constructor() {
    this.init();
  }

  init() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board.push({
          posX: j,
          posY: i,
          hit: false,
          ship: null,
        });
      }
    }
  }

  reset() {
    this.board = [];
    this.init();
  }

  findTileIndex(x, y) {
    const index = this.board.findIndex((e) => {
      if (e.posX === x && e.posY === y) {
        return e;
      }
    });
    return index;
  }

  place(ship, coordX, coordY) {
    const index = this.findTileIndex(coordX, coordY);
    if (this.board[index].ship === null) {
      this.board[index].ship = ship;
      this.totalShipTiles += 1;
    }
  }

  receiveAttack(x, y) {
    const index = this.findTileIndex(x, y);

    if (!this.board[index].hit) {
      this.board[index].hit = true;
      if (this.board[index].ship != null) {
        this.board[index].ship.hit();
        this.hitCount += 1;
        return true;
      }
    }
    return false;
  }

  allShipsSunk() {
    if (this.hitCount === this.totalShipTiles && this.totalShipTiles !== 0) {
      return true;
    }
    return false;
  }

  randomBoard() {
    const myShips = [new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](2), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](3), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](4), new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](5)];
    let tilesToUse = [];

    while (myShips.length !== 0) {
      const ship = myShips.pop();
      let randX = Math.floor(Math.random() * 10);
      let randY = Math.floor(Math.random() * 10);
      let rollAxis = Math.floor(Math.random() * 2);
      let randCoordToUse = rollAxis === 1 ? randY : randX;
      let keyToUse = rollAxis === 1 ? 'posY' : 'posX';
      for (let index = 0; index < this.board.length; index++) {
        if (this.board[index][keyToUse] === randCoordToUse) {
          tilesToUse.push(this.board[index]);
        }
        if (tilesToUse.length === 10) {
          let flag = false;
          let freeCells = [];
          for (let j = 0; j < tilesToUse.length; j++) {
            if (tilesToUse[j].ship === null && flag === false) {
              freeCells.push(tilesToUse[j]);
            }
            if (tilesToUse[j].ship !== null && flag === false) {
              freeCells = [];
            }
            if (freeCells.length === ship.size && flag === false) {
              flag = true;
              freeCells.forEach((tile) => {
                this.place(ship, tile.posX, tile.posY);
              });
              break;
            }
            if (j === tilesToUse.length - 1 && flag === false) {
              randX = Math.floor(Math.random() * 10);
              randY = Math.floor(Math.random() * 10);
              rollAxis = Math.floor(Math.random() * 2);
              randCoordToUse = rollAxis === 1 ? randY : randX;
              keyToUse = rollAxis === 1 ? 'posY' : 'posX';
              index = 0;
            }
          }
          tilesToUse = [];
        }
      }
    }
  }
}


/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  sunk = false;

  size = 0;

  hitCount = 0;

  constructor(size) {
    this.size = size;
  }

  hit() {
    this.hitCount += 1;
    if (this.hitCount === this.size) {
      this.sunk = true;
    }
  }

  isSunk() {
    return this.sunk;
  }
}


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modern-normalize/modern-normalize.css */ "./node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ "./src/styles.scss");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display */ "./src/js/display.js");
// eslint-disable-next-line import/no-extraneous-dependencies




(0,_display__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsK0JBQStCLGdDQUFnQyxvQkFBb0IsNkJBQTZCLDhCQUE4QiwwQkFBMEIsb0JBQW9CLEtBQUssZUFBZSx3QkFBd0IsbUJBQW1CLGtC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Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUMrQztBQUN2QjtBQUNXO0FBQ25DO0FBQ0Esb0RBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL21vZGVybi1ub3JtYWxpemUvbW9kZXJuLW5vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9tb2Rlcm4tbm9ybWFsaXplL21vZGVybi1ub3JtYWxpemUuY3NzPzJjMTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5odG1sIHtcXG4gIC1tb3otdGFiLXNpemU6IDQ7XFxuICB0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIjtcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuYWJiclt0aXRsZV0ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBNZW5sbywgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4qL1xcbmJ1dHRvbixcXG5bdHlwZT1idXR0b25dLFxcblt0eXBlPXJlc2V0XSxcXG5bdHlwZT1zdWJtaXRdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcblJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4qL1xcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuW3R5cGU9c2VhcmNoXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuSW50ZXJhY3RpdmVcXG49PT09PT09PT09PVxcbiovXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw4RkFBQTtBQUVBOzs7Q0FBQTtBQUtBOztDQUFBO0FBSUE7OztFQUdDLHNCQUFBO0FBRkQ7O0FBS0E7O0NBQUE7QUFJQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtBQUhEOztBQU1BOzs7Q0FBQTtBQUtBO0VBQ0MsaUJBQUEsRUFBQSxNQUFBO0VBQ0EsOEJBQUEsRUFBQSxNQUFBO0FBSkQ7O0FBT0E7OztDQUFBO0FBS0E7O0NBQUE7QUFJQTtFQUNDLFNBQUE7QUFORDs7QUFTQTs7Q0FBQTtBQUlBO0VBQ0MsOEhBQ0M7QUFSRjs7QUFtQkE7OztDQUFBO0FBS0E7OztDQUFBO0FBS0E7RUFDQyxTQUFBLEVBQUEsTUFBQTtFQUNBLGNBQUEsRUFBQSxNQUFBO0FBbEJEOztBQXFCQTs7O0NBQUE7QUFLQTs7Q0FBQTtBQUlBO0VBQ0MsaUNBQUE7QUFwQkQ7O0FBdUJBOztDQUFBO0FBSUE7O0VBRUMsbUJBQUE7QUFyQkQ7O0FBd0JBOzs7Q0FBQTtBQUtBOzs7O0VBSUMsd0ZBQ0MsRUFLVyxNQUFBO0VBQ1osY0FBQSxFQUFBLE1BQUE7QUE1QkQ7O0FBK0JBOztDQUFBO0FBSUE7RUFDQyxjQUFBO0FBN0JEOztBQWdDQTs7Q0FBQTtBQUlBOztFQUVDLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQTlCRDs7QUFpQ0E7RUFDQyxlQUFBO0FBOUJEOztBQWlDQTtFQUNDLFdBQUE7QUE5QkQ7O0FBaUNBOzs7Q0FBQTtBQUtBOzs7Q0FBQTtBQUtBO0VBQ0MsY0FBQSxFQUFBLE1BQUE7RUFDQSxxQkFBQSxFQUFBLE1BQUE7QUFoQ0Q7O0FBbUNBOzs7Q0FBQTtBQUtBOzs7Q0FBQTtBQUtBOzs7OztFQUtDLG9CQUFBLEVBQUEsTUFBQTtFQUNBLGVBQUEsRUFBQSxNQUFBO0VBQ0EsaUJBQUEsRUFBQSxNQUFBO0VBQ0EsU0FBQSxFQUFBLE1BQUE7QUFsQ0Q7O0FBcUNBOzs7Q0FBQTtBQUtBO1NBQ1MsTUFBQTtFQUNSLG9CQUFBO0FBbkNEOztBQXNDQTs7Q0FBQTtBQUlBOzs7O0VBSUMsMEJBQUE7QUFwQ0Q7O0FBdUNBOztDQUFBO0FBSUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7QUFyQ0Q7O0FBd0NBOztDQUFBO0FBSUE7RUFDQyw4QkFBQTtBQXRDRDs7QUF5Q0E7OztDQUFBO0FBS0E7RUFDQyxnQkFBQTtBQXZDRDs7QUEwQ0E7O0NBQUE7QUFJQTtFQUNDLFVBQUE7QUF4Q0Q7O0FBMkNBOztDQUFBO0FBSUE7RUFDQyx3QkFBQTtBQXpDRDs7QUE0Q0E7O0NBQUE7QUFJQTs7RUFFQyxZQUFBO0FBMUNEOztBQTZDQTs7O0NBQUE7QUFLQTtFQUNDLDZCQUFBLEVBQUEsTUFBQTtFQUNBLG9CQUFBLEVBQUEsTUFBQTtBQTNDRDs7QUE4Q0E7O0NBQUE7QUFJQTtFQUNDLHdCQUFBO0FBNUNEOztBQStDQTs7O0NBQUE7QUFLQTtFQUNDLDBCQUFBLEVBQUEsTUFBQTtFQUNBLGFBQUEsRUFBQSxNQUFBO0FBN0NEOztBQWdEQTs7O0NBQUE7QUFLQTs7Q0FBQTtBQUlBO0VBQ0Msa0JBQUE7QUEvQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG1vZGVybi1ub3JtYWxpemUgdjEuMS4wIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUgKi9cXG5cXG4vKlxcbkRvY3VtZW50XFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblVzZSBhIGJldHRlciBib3ggbW9kZWwgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0LW1vei10YWItc2l6ZTogNDtcXG5cXHR0YWItc2l6ZTogNDtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZWN0aW9uc1xcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5SZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbkltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuKi9cXG5cXG5ib2R5IHtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSwgLyogRmlyZWZveCBzdXBwb3J0cyB0aGlzIGJ1dCBub3QgeWV0IGBzeXN0ZW0tdWlgICovXFxuXFx0XFx0J1NlZ29lIFVJJyxcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0SGVsdmV0aWNhLFxcblxcdFxcdEFyaWFsLFxcblxcdFxcdHNhbnMtc2VyaWYsXFxuXFx0XFx0J0FwcGxlIENvbG9yIEVtb2ppJyxcXG5cXHRcXHQnU2Vnb2UgVUkgRW1vamknO1xcbn1cXG5cXG4vKlxcbkdyb3VwaW5nIGNvbnRlbnRcXG49PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuKi9cXG5cXG5ociB7XFxuXFx0aGVpZ2h0OiAwOyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuMS4gSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4yLiBDb3JyZWN0IHRoZSBvZGQgJ2VtJyBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0dWktbW9ub3NwYWNlLFxcblxcdFxcdFNGTW9uby1SZWd1bGFyLFxcblxcdFxcdENvbnNvbGFzLFxcblxcdFxcdCdMaWJlcmF0aW9uIE1vbm8nLFxcblxcdFxcdE1lbmxvLFxcblxcdFxcdG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG5QcmV2ZW50ICdzdWInIGFuZCAnc3VwJyBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuVGFidWxhciBkYXRhXFxuPT09PT09PT09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4qL1xcblxcbnRhYmxlIHtcXG5cXHR0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcblxcdGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkZvcm1zXFxuPT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbjEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuKi9cXG5cXG46Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsICc6aW52YWxpZCcgc3R5bGVzIGluIEZpcmVmb3guXFxuU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczN1xcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuXFx0Ym94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dCAnZmllbGRzZXQnIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmxlZ2VuZCB7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gJ2luaGVyaXQnIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuXFx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG5cXHRkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2hlYWQge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogMmNoO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmM0YTFhO1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxufVxcblxcbiN3aW5uZXItb3ZlcmxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgei1pbmRleDogMztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4jd2lubmVyLW92ZXJsYXkuYWN0aXZlIHtcXG4gIHotaW5kZXg6IDM7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuI3dpbm5lci1vdmVybGF5ICN3aW5uZXItbmFtZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDFyZW07XFxuICBmb250LXNpemU6IDdyZW07XFxufVxcbiN3aW5uZXItb3ZlcmxheSAjcmVzZXRCdXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdm1heDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XFxuICB6LWluZGV4OiA0O1xcbn1cXG4jd2lubmVyLW92ZXJsYXkgI3Jlc2V0QnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI2Zvb3Qge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiNzMzO1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNmb290IGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNmb290IGEgaW1nIHtcXG4gIGhlaWdodDogNzAlO1xcbiAgdHJhbnNpdGlvbjogMzAwbXMgZWFzZS1pbjtcXG59XFxuI2Zvb3QgYSBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtY29udCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG4uaW5zdHJ1Y3Rpb25zLWNvbnQgLmluc3RydWN0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcXG59XFxuLmluc3RydWN0aW9ucy1jb250IC5pbnN0cnVjdGlvbnMuYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5pbnN0cnVjdGlvbnMtY29udCAuc2xpZGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXG4gIHRyYW5zaXRpb246IDcwMG1zIGVhc2UtaW47XFxufVxcbi5pbnN0cnVjdGlvbnMtY29udCAuc2xpZGVyLmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMDBweCk7XFxufVxcblxcbi5ib2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkY2UzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcbi5ib2FyZDpmaXJzdC1vZi10eXBlIC5jZWxsIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmJvYXJkOm50aC1vZi10eXBlKGV2ZW4pIC5jZWxsOm5vdCguaGl0LCAubWlzc2VkLCAuc3Vuayk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLmJvYXJkIC5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ib2FyZCAuY2VsbCAuc2hpcC1jZWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYm9hcmQgLmNlbGwgLnNoaXAtY2VsbFtkYXRhLXNoaXBjZWxsPVxcXCIyXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXG59XFxuLmJvYXJkIC5jZWxsIC5zaGlwLWNlbGxbZGF0YS1zaGlwY2VsbD1cXFwiM1xcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxufVxcbi5ib2FyZCAuY2VsbCAuc2hpcC1jZWxsW2RhdGEtc2hpcGNlbGw9XFxcIjRcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkNGJmO1xcbn1cXG4uYm9hcmQgLmNlbGwgLnNoaXAtY2VsbFtkYXRhLXNoaXBjZWxsPVxcXCI1XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxOGNmODtcXG59XFxuLmJvYXJkIC5jZWxsLmhpdCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5ib2FyZCAuY2VsbC5oaXQgLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG4uYm9hcmQgLmNlbGwuaGl0LmV4cGxvZGUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2kuZ2lmZXIuY29tL29yaWdpbi9hMC9hMDdhZDA4OTIwZjMwM2Y2NTUyNTFiMWEwYjM1M2I4Nl93MjAwLmdpZlxcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcbi5ib2FyZCAuY2VsbC5oaXQuZXhwbG9kZSAuc2hpcC1jZWxsIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XFxufVxcbi5ib2FyZCAuY2VsbC5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdmZjtcXG59XFxuLmJvYXJkIC5jZWxsLnN1bmsge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL2Nkbi1pY29ucy1wbmcuZmxhdGljb24uY29tLzUxMi8zMzg5LzMzODkxNDkucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLmJvYXJkIC5jZWxsLnN1bmsgLnNoaXAtY2VsbCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBpbmhlcml0O1xcbn1cXG4uYm9hcmQgLmNlbGwuYmxvY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzcxOC83MTg2NzIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLmJvYXJkIC5jZWxsLmRyYWdIb3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG4uYWxsLXNoaXBzIHtcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDM3NXB4O1xcbiAgaGVpZ2h0OiA0MjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkY2UzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbSAxcmVtO1xcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQ7XFxufVxcbi5hbGwtc2hpcHMuZmFkZS1vdXQge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuLmFsbC1zaGlwcy52ZXJ0aWNhbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuLmFsbC1zaGlwcyAjYXhpcy1idG4ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwdm1heDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4gdHJhbnNmb3JtO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5hbGwtc2hpcHMgI2F4aXMtYnRuOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMSkgMCAwKTtcXG59XFxuLmFsbC1zaGlwcyAuc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFsbC1zaGlwcyAuc2hpcC1jb250YWluZXIudmVydGljYWwge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFsbC1zaGlwcyAuc2hpcC1jb250YWluZXJbZGF0YS1zaGlwXSAuc2hpcC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG4uYWxsLXNoaXBzIC5zaGlwLWNvbnRhaW5lcltkYXRhLXNoaXA9XFxcIjJcXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcbi5hbGwtc2hpcHMgLnNoaXAtY29udGFpbmVyW2RhdGEtc2hpcD1cXFwiM1xcXCJdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXG59XFxuLmFsbC1zaGlwcyAuc2hpcC1jb250YWluZXJbZGF0YS1zaGlwPVxcXCI0XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkNGJmO1xcbn1cXG4uYWxsLXNoaXBzIC5zaGlwLWNvbnRhaW5lcltkYXRhLXNoaXA9XFxcIjVcXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MThjZjg7XFxufVxcbi5hbGwtc2hpcHMgLnNoaXAtY29udGFpbmVyLmRyYWdnaW5nIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQ0o7QUFDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBQUo7QUFDSTtFQUNFLHFCQUFBO0FBQ047O0FBSUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFERjtBQUVFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUFKO0FBQ0k7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFDTjtBQUNNO0VBQ0UseUJBQUE7QUFDUjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFGRjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUVJO0VBQ0UsVUFBQTtBQUFOO0FBR0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUVJO0VBQ0UsMkJBQUE7QUFBTjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLG1DQUFBO0FBRkY7QUFJSTtFQUNFLGVBQUE7QUFGTjtBQU1JO0VBQ0Usc0JBQUE7QUFKTjtBQVFFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMTjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU1NO0VBQ0UseUJBQUE7QUFKUjtBQU9JO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FBTE47QUFNTTtFQUNFLHlCQUFBO0FBSlI7QUFNTTtFQUNFLGdHQUFBO0VBQ0EsMEJBQUE7QUFKUjtBQUtRO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUhWO0FBT0k7RUFDRSx5QkFBQTtBQUxOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsZ0ZBQUE7RUFDQSwwQkFBQTtBQUxOO0FBTU07RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBSlI7QUFPSTtFQUNFLDhFQUFBO0VBQ0EsMEJBQUE7QUFMTjtBQU9JO0VBQ0ksc0JBQUE7QUFMUjs7QUFVQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQVBGO0FBUUU7RUFDRSxtQkFBQTtBQU5KO0FBUUU7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQU5KO0FBUUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHlDQUFBO0FBTko7QUFPSTtFQUNFLHFCQUFBO0VBQ0EseURBQUE7QUFMTjtBQVFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFOSjtBQU9JO0VBQ0Usc0JBQUE7QUFMTjtBQU9JO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTFI7QUFPSTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFMTjtBQU9JO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQUxOO0FBT0k7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBTE47QUFPSTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFMTjtBQU9JO0VBQ0ksa0JBQUE7QUFMUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNoZWFkIHtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJjaDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNGExYTtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jd2lubmVyLW92ZXJsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDM7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG5cXHJcXG4gICYuYWN0aXZle1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB9XFxyXFxuICAjd2lubmVyLW5hbWUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3Jlc2V0QnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDIwcmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbjtcXHJcXG4gICAgei1pbmRleDogNDtcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICB9ICBcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3Qge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiNzMzO1xcclxcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIGhlaWdodDogNzAlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW47XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9ucy1jb250IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICAuaW5zdHJ1Y3Rpb25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xcclxcbiAgICAmLmFjdGl2ZSB7XFxyXFxuICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgLnNsaWRlciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIHRyYW5zaXRpb246IDcwMG1zIGVhc2UtaW47XFxyXFxuICAgICYuYWN0aXZlIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMDBweCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRjZTM7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICAgIC5jZWxsIHtcXHJcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICY6bnRoLW9mLXR5cGUoZXZlbikge1xcclxcbiAgICAuY2VsbDpub3QoLmhpdCwgLm1pc3NlZCwgLnN1bmspOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jZWxsIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIC5zaGlwLWNlbGwge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAmW2RhdGEtc2hpcGNlbGw9XFxcIjJcXFwiXSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmW2RhdGEtc2hpcGNlbGw9XFxcIjNcXFwiXSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFkZTgwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmW2RhdGEtc2hpcGNlbGw9XFxcIjRcXFwiXSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkNGJmO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmW2RhdGEtc2hpcGNlbGw9XFxcIjVcXFwiXSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4Y2Y4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgICAmLmhpdCB7XFxyXFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgICAuc2hpcC1jZWxsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICYuZXhwbG9kZSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaS5naWZlci5jb20vb3JpZ2luL2EwL2EwN2FkMDg5MjBmMzAzZjY1NTI1MWIxYTBiMzUzYjg2X3cyMDAuZ2lmJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gICAgICAgIC5zaGlwLWNlbGwge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBpbmhlcml0O1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgICYubWlzc2VkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3N2ZmO1xcclxcbiAgICB9XFxyXFxuICAgICYuc3VuayB7XFxyXFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMzM4OS8zMzg5MTQ5LnBuZycpO1xcclxcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbiAgICAgIC5zaGlwLWNlbGwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogaW5oZXJpdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgJi5ibG9ja2VkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzcxOC83MTg2NzIucG5nJyk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5kcmFnSG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXNoaXBzIHtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgd2lkdGg6IDM3NXB4O1xcclxcbiAgaGVpZ2h0OiA0MjVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkY2UzO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAzcmVtIDFyZW0gMXJlbSAxcmVtO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1vdXQ7XFxyXFxuICAmLmZhZGUtb3V0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG4gIH1cXHJcXG4gICYudmVydGljYWwge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuICAjYXhpcy1idG4ge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgICAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbiB0cmFuc2Zvcm07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuc2hpcC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICYudmVydGljYWwge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgJltkYXRhLXNoaXBdIC5zaGlwLWNlbGx7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAmW2RhdGEtc2hpcD1cXFwiMlxcXCJdIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcclxcbiAgICB9XFxyXFxuICAgICZbZGF0YS1zaGlwPVxcXCIzXFxcIl0ge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxyXFxuICAgIH1cXHJcXG4gICAgJltkYXRhLXNoaXA9XFxcIjRcXFwiXSB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXHJcXG4gICAgfVxcclxcbiAgICAmW2RhdGEtc2hpcD1cXFwiNVxcXCJdIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4Y2Y4O1xcclxcbiAgICB9XFxyXFxuICAgICYuZHJhZ2dpbmcge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wdXRlciB7XHJcbiAgdXNlZFRpbGVzID0gW107XHJcblxyXG4gIGFkamFjZW50VGlsZXMgPSBbXTtcclxuXHJcbiAgbWFrZU1vdmUoKSB7XHJcbiAgICBsZXQgdGlsZSA9IHtcclxuICAgICAgeDogbnVsbCwgeTogbnVsbCwgaGl0OiBmYWxzZSwgYXhpczogbnVsbCwgc3VuazogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnVzZWRUaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRpbGUgPSB0aGlzLnVzZWRUaWxlc1t0aGlzLnVzZWRUaWxlcy5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5hZGphY2VudFRpbGVzLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnVzZWRUaWxlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgbGV0IHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xyXG4gICAgICBsZXQgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIHRpbGUgPSB7XHJcbiAgICAgICAgeDogcmFuZFgsIHk6IHJhbmRZLCBoaXQ6IGZhbHNlLCBheGlzOiBudWxsLCBzdW5rOiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgICAgd2hpbGUgKHRoaXMuY2hlY2tJZlVzZWQocmFuZFgsIHJhbmRZLCB0aGlzLnVzZWRUaWxlcykpIHtcclxuICAgICAgICByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICByYW5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgICB0aWxlID0ge1xyXG4gICAgICAgICAgeDogcmFuZFgsIHk6IHJhbmRZLCBoaXQ6IGZhbHNlLCBheGlzOiBudWxsLCBzdW5rOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXNlZFRpbGVzLnB1c2godGlsZSk7XHJcblxyXG4gICAgICByZXR1cm4gdGlsZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGlsZS5heGlzID09PSBudWxsICYmIHRpbGUuaGl0KSB7XHJcbiAgICAgIGNvbnN0IGFkalRpbGUgPSB0aGlzLmFkamFjZW50VGlsZXMuc2hpZnQoKTtcclxuICAgICAgdGhpcy51c2VkVGlsZXMucHVzaChhZGpUaWxlKTtcclxuICAgICAgcmV0dXJuIGFkalRpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpbGUuYXhpcyAhPT0gbnVsbCAmJiB0aWxlLmhpdCkge1xyXG4gICAgICB0aGlzLmZpbHRlckJ5QXhpcyh0aWxlLmF4aXMpO1xyXG4gICAgICBjb25zdCBhZGpUaWxlID0gdGhpcy5hZGphY2VudFRpbGVzLnNoaWZ0KCk7XHJcbiAgICAgIHRoaXMudXNlZFRpbGVzLnB1c2goYWRqVGlsZSk7XHJcbiAgICAgIHJldHVybiBhZGpUaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aWxlLmF4aXMgIT09IG51bGwgJiYgIXRpbGUuaGl0KSB7XHJcbiAgICAgIGNvbnN0IGFkalRpbGUgPSB0aGlzLmFkamFjZW50VGlsZXMuc2hpZnQoKTtcclxuICAgICAgdGhpcy51c2VkVGlsZXMucHVzaChhZGpUaWxlKTtcclxuICAgICAgcmV0dXJuIGFkalRpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjaGVja0lmVXNlZCh4LCB5LCBhcnIpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnIubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChhcnJbaW5kZXhdLnggPT09IHggJiYgYXJyW2luZGV4XS55ID09PSB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxhc3RUaWxlSGl0KCkge1xyXG4gICAgY29uc3QgbGFzdFRpbGUgPSB0aGlzLnVzZWRUaWxlc1t0aGlzLnVzZWRUaWxlcy5sZW5ndGggLSAxXTtcclxuICAgIGxhc3RUaWxlLmhpdCA9IHRydWU7XHJcblxyXG4gICAgY29uc3QgbGVmdFRpbGUgPSB7XHJcbiAgICAgIHg6IGxhc3RUaWxlLnggLSAxLCB5OiBsYXN0VGlsZS55LCBoaXQ6IGZhbHNlLCBheGlzOiAneCcsIHN1bms6IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJpZ2h0VGlsZSA9IHtcclxuICAgICAgeDogbGFzdFRpbGUueCArIDEsIHk6IGxhc3RUaWxlLnksIGhpdDogZmFsc2UsIGF4aXM6ICd4Jywgc3VuazogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG9wVGlsZSA9IHtcclxuICAgICAgeDogbGFzdFRpbGUueCwgeTogbGFzdFRpbGUueSAtIDEsIGhpdDogZmFsc2UsIGF4aXM6ICd5Jywgc3VuazogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYm90dG9tVGlsZSA9IHtcclxuICAgICAgeDogbGFzdFRpbGUueCwgeTogbGFzdFRpbGUueSArIDEsIGhpdDogZmFsc2UsIGF4aXM6ICd5Jywgc3VuazogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuYWRqYWNlbnRUaWxlcy5wdXNoKGxlZnRUaWxlLCB0b3BUaWxlLCByaWdodFRpbGUsIGJvdHRvbVRpbGUpO1xyXG4gICAgdGhpcy5yZW1vdmVPdXRPZkJvdW5kcygpO1xyXG5cclxuICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgIHJlc3VsdCA9IHRoaXMuYWRqYWNlbnRUaWxlcy5maWx0ZXIoKHRpbGUpID0+ICF0aGlzLmNoZWNrSWZVc2VkKHRpbGUueCwgdGlsZS55LCB0aGlzLnVzZWRUaWxlcykpO1xyXG5cclxuICAgIHRoaXMuYWRqYWNlbnRUaWxlcyA9IHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxhc3RUaWxlU3VuaygpIHtcclxuICAgIHRoaXMudXNlZFRpbGVzW3RoaXMudXNlZFRpbGVzLmxlbmd0aCAtIDFdLnN1bmsgPSB0cnVlO1xyXG4gICAgdGhpcy51c2VkVGlsZXNbdGhpcy51c2VkVGlsZXMubGVuZ3RoIC0gMV0uaGl0ID0gdHJ1ZTtcclxuICAgIHRoaXMuYWRqYWNlbnRUaWxlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyQnlBeGlzKGF4aXMpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYWRqYWNlbnRUaWxlcy5maWx0ZXIoKHRpbGUpID0+IHRpbGUuYXhpcyA9PT0gYXhpcyk7XHJcbiAgICB0aGlzLmFkamFjZW50VGlsZXMgPSByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZW1vdmVPdXRPZkJvdW5kcygpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYWRqYWNlbnRUaWxlcy5maWx0ZXIoKHRpbGUpID0+IHRpbGUueCA+PSAwICYmIHRpbGUueSA+PSAwXHJcbiAgICAmJiB0aWxlLnggPD0gOSAmJiB0aWxlLnkgPD0gOSk7XHJcbiAgICB0aGlzLmFkamFjZW50VGlsZXMgPSByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuYWRqYWNlbnRUaWxlcyA9IFtdO1xyXG4gICAgdGhpcy51c2VkVGlsZXMgPSBbXTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcbmltcG9ydCBDb21wdXRlciBmcm9tICcuL2NvbXB1dGVyJztcclxuXHJcbmNvbnN0IGNvbXB1dGVyUGxheWVyID0gbmV3IENvbXB1dGVyKCk7XHJcbmNvbnN0IGJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG5jb25zdCBjb21wdXRlckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG5jb21wdXRlckJvYXJkLnJhbmRvbUJvYXJkKCk7XHJcbmxldCBwYWdlQ2xvbmUgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICBjcmVhdGVCb2FyZERPTSgpO1xyXG4gIGNyZWF0ZVNoaXBHcmlkQ2VsbHMoKTtcclxuICBzZXRVcEF4aXNCdXR0b24oKTtcclxuICBjb21wdXRlclBsYXllci5yZXNldCgpO1xyXG4gIHJlc2V0RE9NKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlc2V0RE9NKCkge1xyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2V0QnV0dG9uJyk7XHJcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBidXR0b25SZXNldEdhbWUpO1xyXG4gIHBhZ2VDbG9uZSA9IHBhZ2UuY2xvbmVOb2RlKHRydWUpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbnMnKTtcclxuICB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICB0aXRsZS5pbm5lclRleHQgPSAnUExBQ0UgWU9VUiBTSElQUyc7XHJcblxyXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXInKTtcclxuICBzbGlkZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkRE9NKGlzQ29tcHV0ZXJCb2FyZCA9IGZhbHNlKSB7XHJcbiAgY29uc3QgY29tcHV0ZXJCb2FyZERPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGJvYXJkRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XHJcbiAgY29tcHV0ZXJCb2FyZERPTS5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gIGlmICghaXNDb21wdXRlckJvYXJkKSB7XHJcbiAgICBib2FyZERPTS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnTGVhdmUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm9hcmRUb0xvb3AgPSBpc0NvbXB1dGVyQm9hcmQgPyBjb21wdXRlckJvYXJkIDogYm9hcmQ7XHJcblxyXG4gIGJvYXJkVG9Mb29wLmJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICBncmlkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIGVsZW1lbnQucG9zWCk7XHJcbiAgICBncmlkQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIGVsZW1lbnQucG9zWSk7XHJcbiAgICBpZiAoIWlzQ29tcHV0ZXJCb2FyZCkge1xyXG4gICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnRW50ZXIpO1xyXG4gICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdPdmVyKTtcclxuICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWdEcm9wKTtcclxuICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcignaGl0UGxheWVyVGlsZUV2ZW50JywgZnVuY3Rpb24gaGFuZGxlcihlKSB7XHJcbiAgICAgICAgY2xpY2tUaWxlVG9IaXQoZSwgYm9hcmQsIGJvYXJkRE9NLCBoYW5kbGVyKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGJvYXJkRE9NLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gaGFuZGxlcihlKSB7XHJcbiAgICAgICAgY2xpY2tUaWxlVG9IaXQoZSwgY29tcHV0ZXJCb2FyZCwgY29tcHV0ZXJCb2FyZERPTSwgaGFuZGxlciwgYm9hcmRET00sIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgY29tcHV0ZXJCb2FyZERPTS5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0NvbXB1dGVyQm9hcmQpIHtcclxuICAgIHJldHVybiBjb21wdXRlckJvYXJkRE9NO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNoaXBHcmlkQ2VsbHMoKSB7XHJcbiAgY29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jb250YWluZXInKTtcclxuXHJcbiAgc2hpcExpc3QuZm9yRWFjaCgoc2hpcENvbnRhaW5lcikgPT4ge1xyXG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnU3RhcnQpO1xyXG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ0VuZCk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZU9mU2hpcCA9IHBhcnNlSW50KHNoaXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnKSwgMTApO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaXplT2ZTaGlwOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xyXG4gICAgICBzaGlwQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcGNlbGwnLCBzaXplT2ZTaGlwKTtcclxuICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVwQXhpc0J1dHRvbigpIHtcclxuICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F4aXMtYnRuJyk7XHJcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jb250YWluZXInKTtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtc2hpcHMnKTtcclxuICBheGlzQnV0dG9uLmlubmVyVGV4dCA9ICdST1RBVEUnO1xyXG4gIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnLCAneCcpO1xyXG5cclxuICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGF4aXNCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnKSA9PT0gJ3gnKSB7XHJcbiAgICAgIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnLCAneScpO1xyXG4gICAgICBhbGxTaGlwcy5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICBzaGlwcy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnLCAneCcpO1xyXG4gICAgICBhbGxTaGlwcy5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICBzaGlwcy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xpY2tUaWxlVG9IaXQoZSwgYm9hcmRUb0F0dGFjaywgYm9hcmRET00sIGZ1bmMsIHBsYXllckJvYXJkRE9NLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcclxuICBjb25zdCBjb29yZFggPSBwYXJzZUludChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XHJcbiAgY29uc3QgY29vcmRZID0gcGFyc2VJbnQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xyXG4gIGlmIChib2FyZFRvQXR0YWNrLnJlY2VpdmVBdHRhY2soY29vcmRYLCBjb29yZFkpKSB7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnLCAnZXhwbG9kZScpO1xyXG4gICAgY29uc3QgaW5kZXggPSBib2FyZFRvQXR0YWNrLmZpbmRUaWxlSW5kZXgoY29vcmRYLCBjb29yZFkpO1xyXG4gICAgaWYgKGJvYXJkVG9BdHRhY2suYm9hcmRbaW5kZXhdLnNoaXAuc3VuayA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBhbGxIaXRUaWxlcyA9IGJvYXJkRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsLmhpdCcpO1xyXG4gICAgICBhbGxIaXRUaWxlcy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeEhpdEluZGV4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgeUhpdEluZGV4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhIaXRUaWxlID0gYm9hcmRUb0F0dGFjay5maW5kVGlsZUluZGV4KHhIaXRJbmRleCwgeUhpdEluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGJvYXJkVG9BdHRhY2suYm9hcmRbaW5kZXhIaXRUaWxlXS5zaGlwLnN1bmsgPT09IHRydWUpIHtcclxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XHJcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGxvZGUnKTtcclxuICAgIH0sIDU1MCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbXB1dGVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcclxuICAgIGRpc3BsYXlXaW5uZXIoJ3BsYXllcicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XHJcbiAgICBkaXNwbGF5V2lubmVyKCdjb21wdXRlcicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQ29tcHV0ZXIpIHtcclxuICAgIGNvbnN0IGNvb3JkT2JqID0gY29tcHV0ZXJQbGF5ZXIubWFrZU1vdmUoKTtcclxuICAgIGNvbnN0IHggPSBjb29yZE9iai54LnRvU3RyaW5nKCk7XHJcbiAgICBjb25zdCB5ID0gY29vcmRPYmoueS50b1N0cmluZygpO1xyXG4gICAgY29uc3QgdGlsZVRvQXR0YWNrID0gcGxheWVyQm9hcmRET00ucXVlcnlTZWxlY3RvcihgW2RhdGEteD0nJHt4fSddW2RhdGEteT0nJHt5fSddYCk7XHJcbiAgICB0aWxlVG9BdHRhY2suZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2hpdFBsYXllclRpbGVFdmVudCcpKTtcclxuICAgIGlmICh0aWxlVG9BdHRhY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSkge1xyXG4gICAgICBjb21wdXRlclBsYXllci51cGRhdGVMYXN0VGlsZUhpdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRpbGVUb0F0dGFjay5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bmsnKSkge1xyXG4gICAgICBjb21wdXRlclBsYXllci51cGRhdGVMYXN0VGlsZVN1bmsoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuYyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXaW5uZXIod2lubmVyKSB7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXItb3ZlcmxheScpO1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgY29uc3QgbmFtZVRvRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5uZXItbmFtZScpO1xyXG4gIG5hbWVUb0Rpc3BsYXkuaW5uZXJUZXh0ID0gd2lubmVyID09PSAncGxheWVyJyA/ICdZT1UgV0lOIScgOiAnWU9VIExPU1QhJztcclxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyJyk7XHJcbiAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBidXR0b25SZXNldEdhbWUoZSkge1xyXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2lubmVyLW92ZXJsYXknKTtcclxuICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGNvbnN0IGNvbnRlbnRUb1JlcGxhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuICBjb25zdCBjZWxsc1RvRGVsZXRlU2hpcCA9IHBhZ2VDbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jZWxsJyk7XHJcbiAgY29uc3QgY2VsbHNUb0RlbGV0ZUJvYXJkID0gcGFnZUNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2VsbHNUb0RlbGV0ZVNoaXAubGVuZ3RoOyBpKyspIHtcclxuICAgIGNlbGxzVG9EZWxldGVTaGlwW2ldLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjZWxsc1RvRGVsZXRlQm9hcmQubGVuZ3RoOyBpKyspIHtcclxuICAgIGNlbGxzVG9EZWxldGVCb2FyZFtpXS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGNvbnRlbnRUb1JlcGxhY2UucmVwbGFjZVdpdGgocGFnZUNsb25lKTtcclxuXHJcbiAgYm9hcmQucmVzZXQoKTtcclxuICBjb21wdXRlckJvYXJkLnJlc2V0KCk7XHJcbiAgY29tcHV0ZXJCb2FyZC5yYW5kb21Cb2FyZCgpO1xyXG4gIGluaXRpYWxpemUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcclxuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnKSk7XHJcbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdFbmQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnLnNoaXAtY2VsbCcpKSB7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xyXG4gICAgY29uc3QgaG92ZXJlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdIb3ZlcicpO1xyXG4gICAgaG92ZXJlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnSG92ZXInKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ092ZXIoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaG92ZXJlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdIb3ZlcicpO1xyXG4gIGNvbnN0IGNlbGxzV2l0aEJsb2NrZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9ja2VkJyk7XHJcbiAgY2VsbHNXaXRoQmxvY2tlZEltYWdlLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZCcpO1xyXG4gIH0pO1xyXG5cclxuICBob3ZlcmVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnSG92ZXInKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZHJhZ2dlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcclxuICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGRyYWdnZWRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJyksIDEwKTtcclxuXHJcbiAgY29uc3QgY29vcmRzID0ge1xyXG4gICAgeDogZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSxcclxuICAgIHk6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15JyksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNheGlzLWJ0bicpO1xyXG4gIGNvbnN0IGF4aXNUb1VzZSA9IGF4aXNCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnKTtcclxuXHJcbiAgbGV0IG9wcG9zaXRlQXhpcztcclxuICBpZiAoYXhpc1RvVXNlID09PSAneCcpIHtcclxuICAgIG9wcG9zaXRlQXhpcyA9ICd5JztcclxuICB9IGVsc2Uge1xyXG4gICAgb3Bwb3NpdGVBeGlzID0gJ3gnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2VsbHNJbkRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7b3Bwb3NpdGVBeGlzfT0nJHtjb29yZHNbb3Bwb3NpdGVBeGlzXX0nXWApO1xyXG5cclxuICBjb25zdCBjZWxsc0FmdGVyQ3VycmVudCA9IDkgLSBjb29yZHNbYXhpc1RvVXNlXTtcclxuICBjb25zdCBjZWxsc0JlZm9yZUN1cnJlbnQgPSBjb29yZHNbYXhpc1RvVXNlXSAtIDE7XHJcbiAgY29uc3QgY2VsbHNUb0NoYW5nZSA9IFtdO1xyXG5cclxuICBpZiAoY2VsbHNBZnRlckN1cnJlbnQgPj0gc2hpcFNpemUgLSAxKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHNJbkRpcmVjdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBhcnNlSW50KGNlbGxzSW5EaXJlY3Rpb25baW5kZXhdLmdldEF0dHJpYnV0ZShgZGF0YS0ke2F4aXNUb1VzZX1gKSwgMTApID4gY29vcmRzW2F4aXNUb1VzZV0pIHtcclxuICAgICAgICBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbHNJbkRpcmVjdGlvbltpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjZWxsc0JlZm9yZUN1cnJlbnQgPj0gc2hpcFNpemUgLSAxKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHNJbkRpcmVjdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBhcnNlSW50KGNlbGxzSW5EaXJlY3Rpb25baW5kZXhdLmdldEF0dHJpYnV0ZShgZGF0YS0ke2F4aXNUb1VzZX1gKSwgMTApIDwgY29vcmRzW2F4aXNUb1VzZV0pIHtcclxuICAgICAgICBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbHNJbkRpcmVjdGlvbltpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjZWxsc1RvQ2hhbmdlLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIGNlbGxzVG9DaGFuZ2Uuc3BsaWNlKDAgKyBzaGlwU2l6ZSAtIDEpO1xyXG5cclxuICBsZXQgaXNDZWxsVXNlZCA9IGZhbHNlO1xyXG4gIGxldCBjZWxsc1RvUmVtb3ZlSG92ZXI7XHJcblxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdIb3ZlcicpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzVG9DaGFuZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChjZWxsc1RvQ2hhbmdlW2ldLmNsYXNzTGlzdC5jb250YWlucygndXNlZCcpKSB7XHJcbiAgICAgIGlzQ2VsbFVzZWQgPSB0cnVlO1xyXG4gICAgICBjZWxsc1RvUmVtb3ZlSG92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ0hvdmVyJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbHNUb0NoYW5nZVtpXS5jbGFzc0xpc3QuYWRkKCdkcmFnSG92ZXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc0NlbGxVc2VkKSB7XHJcbiAgICBjZWxsc1RvUmVtb3ZlSG92ZXIuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdIb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdibG9ja2VkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmFnRHJvcChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGJsb2NrZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2NrZWQnKTtcclxuICBpZiAoYmxvY2tlZENlbGwpIHtcclxuICAgIGJsb2NrZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrZWQnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2hpcElEID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dCcpO1xyXG4gICAgY29uc3Qgc2hpcE9iaiA9IG5ldyBTaGlwKHBhcnNlSW50KHNoaXBJRCwgMTApKTtcclxuICAgIGNvbnN0IHNoaXBET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2hpcD0nJHtzaGlwSUR9J11gKTtcclxuICAgIGNvbnN0IGhvdmVyZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnSG92ZXInKTtcclxuICAgIGNvbnN0IHNoaXBDZWxsID0gc2hpcERPTUVsZW1lbnQuZmlyc3RDaGlsZDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdmVyZWRDZWxscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBob3ZlcmVkQ2VsbHNbaV0uYXBwZW5kQ2hpbGQoc2hpcENlbGwuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgICAgaG92ZXJlZENlbGxzW2ldLmNsYXNzTGlzdC5hZGQoJ3VzZWQnKTtcclxuICAgICAgaG92ZXJlZENlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdFbnRlciwgZmFsc2UpO1xyXG4gICAgICBob3ZlcmVkQ2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3ZlciwgZmFsc2UpO1xyXG4gICAgICBob3ZlcmVkQ2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWdEcm9wLCBmYWxzZSk7XHJcbiAgICAgIGNvbnN0IHggPSBwYXJzZUludChob3ZlcmVkQ2VsbHNbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xyXG4gICAgICBjb25zdCB5ID0gcGFyc2VJbnQoaG92ZXJlZENlbGxzW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcclxuICAgICAgYm9hcmQucGxhY2Uoc2hpcE9iaiwgeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hpcERPTUVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgY29uc3QgcmVtYWluaW5nU2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jb250YWluZXInKTtcclxuICAgIGlmIChyZW1haW5pbmdTaGlwcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb25zJyk7XHJcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICBjb25zdCBjb21wdXRlckJvYXJkRE9NID0gY3JlYXRlQm9hcmRET00odHJ1ZSk7XHJcbiAgICAgIGNvbnN0IGFsbFNoaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1zaGlwcycpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBhbGxTaGlwc0NvbnRhaW5lci5yZXBsYWNlV2l0aChjb21wdXRlckJvYXJkRE9NKTtcclxuICAgICAgfSwgMjEwKTtcclxuICAgICAgYWxsU2hpcHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmFkZS1vdXQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYWdMZWF2ZShlKSB7XHJcbiAgaWYgKGUudGFyZ2V0LmlkID09PSAnYm9hcmQnKSB7XHJcbiAgICBjb25zdCBob3ZlcmVkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ0hvdmVyJyk7XHJcbiAgICBob3ZlcmVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdIb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gIGJvYXJkID0gW107XHJcblxyXG4gIGhpdENvdW50ID0gMDtcclxuXHJcbiAgdG90YWxTaGlwVGlsZXMgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICB0aGlzLmJvYXJkLnB1c2goe1xyXG4gICAgICAgICAgcG9zWDogaixcclxuICAgICAgICAgIHBvc1k6IGksXHJcbiAgICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgICAgc2hpcDogbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcblxyXG4gIGZpbmRUaWxlSW5kZXgoeCwgeSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmJvYXJkLmZpbmRJbmRleCgoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5wb3NYID09PSB4ICYmIGUucG9zWSA9PT0geSkge1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleDtcclxuICB9XHJcblxyXG4gIHBsYWNlKHNoaXAsIGNvb3JkWCwgY29vcmRZKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFRpbGVJbmRleChjb29yZFgsIGNvb3JkWSk7XHJcbiAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmJvYXJkW2luZGV4XS5zaGlwID0gc2hpcDtcclxuICAgICAgdGhpcy50b3RhbFNoaXBUaWxlcyArPSAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZmluZFRpbGVJbmRleCh4LCB5KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuYm9hcmRbaW5kZXhdLmhpdCkge1xyXG4gICAgICB0aGlzLmJvYXJkW2luZGV4XS5oaXQgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF0uc2hpcCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcC5oaXQoKTtcclxuICAgICAgICB0aGlzLmhpdENvdW50ICs9IDE7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIGlmICh0aGlzLmhpdENvdW50ID09PSB0aGlzLnRvdGFsU2hpcFRpbGVzICYmIHRoaXMudG90YWxTaGlwVGlsZXMgIT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByYW5kb21Cb2FyZCgpIHtcclxuICAgIGNvbnN0IG15U2hpcHMgPSBbbmV3IFNoaXAoMiksIG5ldyBTaGlwKDMpLCBuZXcgU2hpcCgzKSwgbmV3IFNoaXAoNCksIG5ldyBTaGlwKDUpXTtcclxuICAgIGxldCB0aWxlc1RvVXNlID0gW107XHJcblxyXG4gICAgd2hpbGUgKG15U2hpcHMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIGNvbnN0IHNoaXAgPSBteVNoaXBzLnBvcCgpO1xyXG4gICAgICBsZXQgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgIGxldCByYW5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcclxuICAgICAgbGV0IHJvbGxBeGlzID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgIGxldCByYW5kQ29vcmRUb1VzZSA9IHJvbGxBeGlzID09PSAxID8gcmFuZFkgOiByYW5kWDtcclxuICAgICAgbGV0IGtleVRvVXNlID0gcm9sbEF4aXMgPT09IDEgPyAncG9zWScgOiAncG9zWCc7XHJcbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XVtrZXlUb1VzZV0gPT09IHJhbmRDb29yZFRvVXNlKSB7XHJcbiAgICAgICAgICB0aWxlc1RvVXNlLnB1c2godGhpcy5ib2FyZFtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGlsZXNUb1VzZS5sZW5ndGggPT09IDEwKSB7XHJcbiAgICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgbGV0IGZyZWVDZWxscyA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aWxlc1RvVXNlLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aWxlc1RvVXNlW2pdLnNoaXAgPT09IG51bGwgJiYgZmxhZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBmcmVlQ2VsbHMucHVzaCh0aWxlc1RvVXNlW2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGlsZXNUb1VzZVtqXS5zaGlwICE9PSBudWxsICYmIGZsYWcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgZnJlZUNlbGxzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZyZWVDZWxscy5sZW5ndGggPT09IHNoaXAuc2l6ZSAmJiBmbGFnID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGZyZWVDZWxscy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlKHNoaXAsIHRpbGUucG9zWCwgdGlsZS5wb3NZKTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaiA9PT0gdGlsZXNUb1VzZS5sZW5ndGggLSAxICYmIGZsYWcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgICAgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICAgICAgICAgICAgcm9sbEF4aXMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICAgICAgICByYW5kQ29vcmRUb1VzZSA9IHJvbGxBeGlzID09PSAxID8gcmFuZFkgOiByYW5kWDtcclxuICAgICAgICAgICAgICBrZXlUb1VzZSA9IHJvbGxBeGlzID09PSAxID8gJ3Bvc1knIDogJ3Bvc1gnO1xyXG4gICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGlsZXNUb1VzZSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcclxuICBzdW5rID0gZmFsc2U7XHJcblxyXG4gIHNpemUgPSAwO1xyXG5cclxuICBoaXRDb3VudCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNpemUpIHtcclxuICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgfVxyXG5cclxuICBoaXQoKSB7XHJcbiAgICB0aGlzLmhpdENvdW50ICs9IDE7XHJcbiAgICBpZiAodGhpcy5oaXRDb3VudCA9PT0gdGhpcy5zaXplKSB7XHJcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1N1bmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdW5rO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXHJcbmltcG9ydCAnbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xyXG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL2Rpc3BsYXknO1xyXG5cclxuaW5pdGlhbGl6ZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=