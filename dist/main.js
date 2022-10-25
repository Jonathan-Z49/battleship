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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: #cbd5e1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n\n#head {\n  user-select: none;\n  color: white;\n  margin-bottom: auto;\n  width: 100%;\n  height: 75px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  letter-spacing: 2ch;\n  font-size: 3rem;\n  font-weight: bold;\n  background-color: #fc4a1a;\n  -webkit-user-drag: none;\n}\n\n#foot {\n  user-select: none;\n  height: 50px;\n  width: 100%;\n  margin-top: auto;\n  background-color: #f7b733;\n  -webkit-user-drag: none;\n}\n\n#content {\n  display: flex;\n  gap: 3rem;\n}\n\n#board {\n  display: grid;\n  border: 1px solid black;\n  width: 500px;\n  height: 500px;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n#board .cell {\n  border: 1px solid black;\n}\n#board .cell.blocked {\n  background-image: url(\"https://cdn-icons-png.flaticon.com/512/718/718672.png\");\n  background-size: 100% 100%;\n}\n#board .cell.dragHover {\n  background-color: grey;\n}\n#board .cell .ship-cell {\n  width: 100%;\n  height: 100%;\n}\n#board .cell .ship-cell[data-shipcell=\"2\"] {\n  background-color: #a3e635;\n}\n#board .cell .ship-cell[data-shipcell=\"3\"] {\n  background-color: #4ade80;\n}\n#board .cell .ship-cell[data-shipcell=\"4\"] {\n  background-color: #2dd4bf;\n}\n#board .cell .ship-cell[data-shipcell=\"5\"] {\n  background-color: #818cf8;\n}\n\n.all-ships {\n  -webkit-user-drag: none;\n  border-radius: 15px;\n  border: 2px solid black;\n  width: 375px;\n  height: 425px;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: center;\n  background-color: #dfdce3;\n  position: relative;\n  align-items: flex-start;\n  padding: 3rem 1rem 1rem 1rem;\n}\n.all-ships.vertical {\n  flex-direction: row;\n  align-items: center;\n  gap: 1rem;\n}\n.all-ships #axis-btn {\n  user-select: none;\n  position: absolute;\n  top: 1rem;\n  background-color: orangered;\n  font-weight: bold;\n  font-size: 1.4rem;\n  cursor: pointer;\n  border: none;\n  border-radius: 100vmax;\n  align-self: center;\n  width: 50%;\n  height: 40px;\n  justify-self: center;\n  transition: 200ms ease-in transform;\n  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.all-ships #axis-btn:hover {\n  transform: scale(1.1);\n  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\n}\n.all-ships .ship-container {\n  display: flex;\n  cursor: pointer;\n}\n.all-ships .ship-container.vertical {\n  flex-direction: column;\n}\n.all-ships .ship-container[data-ship] .ship-cell {\n  border: 1px solid black;\n  background-color: inherit;\n  width: 50px;\n  height: 50px;\n}\n.all-ships .ship-container[data-ship=\"2\"] {\n  border: 1px solid black;\n  background-color: #a3e635;\n}\n.all-ships .ship-container[data-ship=\"3\"] {\n  border: 1px solid black;\n  background-color: #4ade80;\n}\n.all-ships .ship-container[data-ship=\"4\"] {\n  border: 1px solid black;\n  background-color: #2dd4bf;\n}\n.all-ships .ship-container[data-ship=\"5\"] {\n  border: 1px solid black;\n  background-color: #818cf8;\n}\n.all-ships .ship-container.dragging {\n  visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAAA;EACE,yBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AACF;;AAEA;EACE,iBAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,uBAAA;AACF;;AAEA;EACE,iBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,uBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,sCAAA;EACA,mCAAA;AACF;AAAE;EACE,uBAAA;AAEJ;AADI;EACE,8EAAA;EACA,0BAAA;AAGN;AADI;EACI,sBAAA;AAGR;AADI;EACE,WAAA;EACA,YAAA;AAGN;AAFM;EACE,yBAAA;AAIR;AAFM;EACE,yBAAA;AAIR;AAFM;EACE,yBAAA;AAIR;AAFM;EACE,yBAAA;AAIR;;AAEA;EACE,uBAAA;EACA,mBAAA;EACA,uBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,uBAAA;EACA,4BAAA;AACF;AAAE;EACE,mBAAA;EACA,mBAAA;EACA,SAAA;AAEJ;AAAE;EACE,iBAAA;EACA,kBAAA;EACA,SAAA;EACA,2BAAA;EACA,iBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,oBAAA;EACA,mCAAA;EACA,yCAAA;AAEJ;AADI;EACE,qBAAA;EACA,yDAAA;AAGN;AAAE;EACE,aAAA;EACA,eAAA;AAEJ;AADI;EACE,sBAAA;AAGN;AADI;EACI,uBAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;AAGR;AADI;EACE,uBAAA;EACA,yBAAA;AAGN;AADI;EACE,uBAAA;EACA,yBAAA;AAGN;AADI;EACE,uBAAA;EACA,yBAAA;AAGN;AADI;EACE,uBAAA;EACA,yBAAA;AAGN;AADI;EACI,kBAAA;AAGR","sourcesContent":["body {\r\n  background-color: #cbd5e1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n#head {\r\n  user-select: none;\r\n  color: white;\r\n  margin-bottom: auto;\r\n  width: 100%;\r\n  height: 75px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  letter-spacing: 2ch;\r\n  font-size: 3rem;\r\n  font-weight: bold;\r\n  background-color: #fc4a1a;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n#foot {\r\n  user-select: none;\r\n  height: 50px;\r\n  width: 100%;\r\n  margin-top: auto;\r\n  background-color: #f7b733;\r\n  -webkit-user-drag: none;\r\n}\r\n\r\n#content {\r\n  display: flex;\r\n  gap: 3rem;\r\n}\r\n\r\n#board {\r\n  display: grid;\r\n  border: 1px solid black;\r\n  width: 500px;\r\n  height: 500px;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  .cell {\r\n    border: 1px solid black;\r\n    &.blocked {\r\n      background-image: url('https://cdn-icons-png.flaticon.com/512/718/718672.png');\r\n      background-size: 100% 100%;\r\n    }\r\n    &.dragHover {\r\n        background-color: grey;\r\n    }\r\n    .ship-cell {\r\n      width: 100%;\r\n      height: 100%;\r\n      &[data-shipcell=\"2\"] {\r\n        background-color: #a3e635;\r\n      }\r\n      &[data-shipcell=\"3\"] {\r\n        background-color: #4ade80;\r\n      }\r\n      &[data-shipcell=\"4\"] {\r\n        background-color: #2dd4bf;\r\n      }\r\n      &[data-shipcell=\"5\"] {\r\n        background-color: #818cf8;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.all-ships {\r\n  -webkit-user-drag: none;\r\n  border-radius: 15px;\r\n  border: 2px solid black;\r\n  width: 375px;\r\n  height: 425px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  justify-content: center;\r\n  background-color: #dfdce3;\r\n  position: relative;\r\n  align-items: flex-start;\r\n  padding: 3rem 1rem 1rem 1rem;\r\n  &.vertical {\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 1rem;\r\n  }\r\n  #axis-btn {\r\n    user-select: none;\r\n    position: absolute;\r\n    top: 1rem;\r\n    background-color: orangered;    \r\n    font-weight: bold;\r\n    font-size: 1.4rem;\r\n    cursor: pointer;\r\n    border: none;\r\n    border-radius: 100vmax;\r\n    align-self: center;\r\n    width: 50%;\r\n    height: 40px;\r\n    justify-self: center;\r\n    transition: 200ms ease-in transform;\r\n    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\r\n    &:hover {\r\n      transform: scale(1.1);\r\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);\r\n    }\r\n  }\r\n  .ship-container {\r\n    display: flex;\r\n    cursor: pointer;\r\n    &.vertical {\r\n      flex-direction: column;\r\n    }\r\n    &[data-ship] .ship-cell{\r\n        border: 1px solid black;\r\n        background-color: inherit;\r\n        width: 50px;\r\n        height: 50px;\r\n    }\r\n    &[data-ship=\"2\"] {\r\n      border: 1px solid black;\r\n      background-color: #a3e635;\r\n    }\r\n    &[data-ship=\"3\"] {\r\n      border: 1px solid black;\r\n      background-color: #4ade80;\r\n    }\r\n    &[data-ship=\"4\"] {\r\n      border: 1px solid black;\r\n      background-color: #2dd4bf;\r\n    }\r\n    &[data-ship=\"5\"] {\r\n      border: 1px solid black;\r\n      background-color: #818cf8;\r\n    }\r\n    &.dragging {\r\n        visibility: hidden;\r\n    }\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialize)
/* harmony export */ });
/* harmony import */ var _dragdrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragdrop */ "./src/js/dragdrop.js");


function createBoardDOM(Gameboard) {
  const boardDOM = document.querySelector('#board');
  boardDOM.addEventListener('dragleave', _dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragLeave);
  Gameboard.board.forEach((element) => {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.setAttribute('data-x', element.posX);
    gridCell.setAttribute('data-y', element.posY);
    gridCell.addEventListener('dragenter', _dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragEnter);
    gridCell.addEventListener('dragover', _dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragOver);
    gridCell.addEventListener('drop', _dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragDrop);
    boardDOM.appendChild(gridCell);
  });
}

function createShipGridCells() {
  const shipList = document.querySelectorAll('.ship-container');

  shipList.forEach((shipContainer) => {
    shipContainer.addEventListener('dragstart', _dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragStart);
    shipContainer.addEventListener('dragend', _dragdrop__WEBPACK_IMPORTED_MODULE_0__.dragEnd);

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
  axisButton.innerText = 'X-AXIS';
  axisButton.setAttribute('data-axis', 'x');

  axisButton.addEventListener('click', () => {
    if (axisButton.getAttribute('data-axis') === 'x') {
      axisButton.setAttribute('data-axis', 'y');
      axisButton.innerText = 'Y-AXIS';
      allShips.classList.add('vertical');
      ships.forEach((cell) => {
        cell.classList.add('vertical');
      });
    } else {
      axisButton.setAttribute('data-axis', 'x');
      axisButton.innerText = 'X-AXIS';
      allShips.classList.remove('vertical');
      ships.forEach((cell) => {
        cell.classList.remove('vertical');
      });
    }
  });
}

function initialize(Gameboard) {
  createBoardDOM(Gameboard);
  createShipGridCells();
  setUpAxisButton();
}


/***/ }),

/***/ "./src/js/dragdrop.js":
/*!****************************!*\
  !*** ./src/js/dragdrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragDrop": () => (/* binding */ dragDrop),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "dragEnter": () => (/* binding */ dragEnter),
/* harmony export */   "dragLeave": () => (/* binding */ dragLeave),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragStart": () => (/* binding */ dragStart)
/* harmony export */ });
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
    console.log('drop');
    blockedCell.classList.remove('blocked');
  }
  const shipID = e.dataTransfer.getData('text');
  const shipDOMElement = document.querySelector(`[data-ship='${shipID}']`);
  const hoveredCells = document.querySelectorAll('.dragHover');
  const shipCell = shipDOMElement.firstChild;

  for (let i = 0; i < hoveredCells.length; i++) {
    hoveredCells[i].appendChild(shipCell.cloneNode(true));
    hoveredCells[i].classList.add('used');
    hoveredCells[i].removeEventListener('dragenter', dragEnter, false);
    hoveredCells[i].removeEventListener('dragover', dragOver, false);
    hoveredCells[i].removeEventListener('drop', dragDrop, false);
  }

  shipDOMElement.remove();
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
class GameBoard {
  board = [];

  shipList = [];

  constructor() {
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
      this.shipList.push(ship);
    }
  }

  receiveAttack(x, y) {
    const index = this.findTileIndex(x, y);

    if (!this.board[index].hit) {
      this.board[index].hit = true;
      if (this.board[index].ship != null) {
        this.board[index].ship.hit();
      }
    }
  }

  allShipsSunk() {
    for (let index = 0; index < this.shipList.length; index++) {
      if (!this.shipList[index].isSunk()) {
        return false;
      }
    }
    return true;
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");
// eslint-disable-next-line import/no-extraneous-dependencies





const myBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_3__["default"]();
(0,_display__WEBPACK_IMPORTED_MODULE_2__["default"])(myBoard);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4QkFBOEI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQytDO0FBQ3ZCO0FBQ1c7QUFDQztBQUNwQztBQUNBLG9CQUFvQixrREFBUztBQUM3QixvREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvbW9kZXJuLW5vcm1hbGl6ZS9tb2Rlcm4tbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL21vZGVybi1ub3JtYWxpemUvbW9kZXJuLW5vcm1hbGl6ZS5jc3M/MmMxNCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9qcy9kcmFnZHJvcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyoqXFxuVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZSAob3BpbmlvbmF0ZWQpLlxcbiovXFxuaHRtbCB7XFxuICAtbW96LXRhYi1zaXplOiA0O1xcbiAgdGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCI7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5UZXh0LWxldmVsIHNlbWFudGljc1xcbj09PT09PT09PT09PT09PT09PT09XFxuKi9cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcbmFiYnJbdGl0bGVdIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgTWVubG8sIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuRm9ybXNcXG49PT09PVxcbiovXFxuLyoqXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuKi9cXG5idXR0b24sXFxuW3R5cGU9YnV0dG9uXSxcXG5bdHlwZT1yZXNldF0sXFxuW3R5cGU9c3VibWl0XSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4qL1xcbjo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG5SZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuKi9cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgJzppbnZhbGlkJyBzdHlsZXMgaW4gRmlyZWZveC5cXG5TZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3XFxuKi9cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblt0eXBlPXNlYXJjaF0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byAnaW5oZXJpdCcgaW4gU2FmYXJpLlxcbiovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkludGVyYWN0aXZlXFxuPT09PT09PT09PT1cXG4qL1xcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL21vZGVybi1ub3JtYWxpemUvbW9kZXJuLW5vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsOEZBQUE7QUFFQTs7O0NBQUE7QUFLQTs7Q0FBQTtBQUlBOzs7RUFHQyxzQkFBQTtBQUZEOztBQUtBOztDQUFBO0FBSUE7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUFIRDs7QUFNQTs7O0NBQUE7QUFLQTtFQUNDLGlCQUFBLEVBQUEsTUFBQTtFQUNBLDhCQUFBLEVBQUEsTUFBQTtBQUpEOztBQU9BOzs7Q0FBQTtBQUtBOztDQUFBO0FBSUE7RUFDQyxTQUFBO0FBTkQ7O0FBU0E7O0NBQUE7QUFJQTtFQUNDLDhIQUNDO0FBUkY7O0FBbUJBOzs7Q0FBQTtBQUtBOzs7Q0FBQTtBQUtBO0VBQ0MsU0FBQSxFQUFBLE1BQUE7RUFDQSxjQUFBLEVBQUEsTUFBQTtBQWxCRDs7QUFxQkE7OztDQUFBO0FBS0E7O0NBQUE7QUFJQTtFQUNDLGlDQUFBO0FBcEJEOztBQXVCQTs7Q0FBQTtBQUlBOztFQUVDLG1CQUFBO0FBckJEOztBQXdCQTs7O0NBQUE7QUFLQTs7OztFQUlDLHdGQUNDLEVBS1csTUFBQTtFQUNaLGNBQUEsRUFBQSxNQUFBO0FBNUJEOztBQStCQTs7Q0FBQTtBQUlBO0VBQ0MsY0FBQTtBQTdCRDs7QUFnQ0E7O0NBQUE7QUFJQTs7RUFFQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUE5QkQ7O0FBaUNBO0VBQ0MsZUFBQTtBQTlCRDs7QUFpQ0E7RUFDQyxXQUFBO0FBOUJEOztBQWlDQTs7O0NBQUE7QUFLQTs7O0NBQUE7QUFLQTtFQUNDLGNBQUEsRUFBQSxNQUFBO0VBQ0EscUJBQUEsRUFBQSxNQUFBO0FBaENEOztBQW1DQTs7O0NBQUE7QUFLQTs7O0NBQUE7QUFLQTs7Ozs7RUFLQyxvQkFBQSxFQUFBLE1BQUE7RUFDQSxlQUFBLEVBQUEsTUFBQTtFQUNBLGlCQUFBLEVBQUEsTUFBQTtFQUNBLFNBQUEsRUFBQSxNQUFBO0FBbENEOztBQXFDQTs7O0NBQUE7QUFLQTtTQUNTLE1BQUE7RUFDUixvQkFBQTtBQW5DRDs7QUFzQ0E7O0NBQUE7QUFJQTs7OztFQUlDLDBCQUFBO0FBcENEOztBQXVDQTs7Q0FBQTtBQUlBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0FBckNEOztBQXdDQTs7Q0FBQTtBQUlBO0VBQ0MsOEJBQUE7QUF0Q0Q7O0FBeUNBOzs7Q0FBQTtBQUtBO0VBQ0MsZ0JBQUE7QUF2Q0Q7O0FBMENBOztDQUFBO0FBSUE7RUFDQyxVQUFBO0FBeENEOztBQTJDQTs7Q0FBQTtBQUlBO0VBQ0Msd0JBQUE7QUF6Q0Q7O0FBNENBOztDQUFBO0FBSUE7O0VBRUMsWUFBQTtBQTFDRDs7QUE2Q0E7OztDQUFBO0FBS0E7RUFDQyw2QkFBQSxFQUFBLE1BQUE7RUFDQSxvQkFBQSxFQUFBLE1BQUE7QUEzQ0Q7O0FBOENBOztDQUFBO0FBSUE7RUFDQyx3QkFBQTtBQTVDRDs7QUErQ0E7OztDQUFBO0FBS0E7RUFDQywwQkFBQSxFQUFBLE1BQUE7RUFDQSxhQUFBLEVBQUEsTUFBQTtBQTdDRDs7QUFnREE7OztDQUFBO0FBS0E7O0NBQUE7QUFJQTtFQUNDLGtCQUFBO0FBL0NEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuXFxuaHIge1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG49PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNoZWFkIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiAyY2g7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYzRhMWE7XFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXG59XFxuXFxuI2Zvb3Qge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdiNzMzO1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNyZW07XFxufVxcblxcbiNib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuI2JvYXJkIC5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jYm9hcmQgLmNlbGwuYmxvY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzcxOC83MTg2NzIucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuI2JvYXJkIC5jZWxsLmRyYWdIb3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4jYm9hcmQgLmNlbGwgLnNoaXAtY2VsbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuI2JvYXJkIC5jZWxsIC5zaGlwLWNlbGxbZGF0YS1zaGlwY2VsbD1cXFwiMlxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhM2U2MzU7XFxufVxcbiNib2FyZCAuY2VsbCAuc2hpcC1jZWxsW2RhdGEtc2hpcGNlbGw9XFxcIjNcXFwiXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFkZTgwO1xcbn1cXG4jYm9hcmQgLmNlbGwgLnNoaXAtY2VsbFtkYXRhLXNoaXBjZWxsPVxcXCI0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXG59XFxuI2JvYXJkIC5jZWxsIC5zaGlwLWNlbGxbZGF0YS1zaGlwY2VsbD1cXFwiNVxcXCJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MThjZjg7XFxufVxcblxcbi5hbGwtc2hpcHMge1xcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogMzc1cHg7XFxuICBoZWlnaHQ6IDQyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmRjZTM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHBhZGRpbmc6IDNyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcbi5hbGwtc2hpcHMudmVydGljYWwge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVxcbi5hbGwtc2hpcHMgI2F4aXMtYnRuIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluIHRyYW5zZm9ybTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG4uYWxsLXNoaXBzICNheGlzLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpIDAgMCk7XFxufVxcbi5hbGwtc2hpcHMgLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hbGwtc2hpcHMgLnNoaXAtY29udGFpbmVyLnZlcnRpY2FsIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hbGwtc2hpcHMgLnNoaXAtY29udGFpbmVyW2RhdGEtc2hpcF0gLnNoaXAtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLmFsbC1zaGlwcyAuc2hpcC1jb250YWluZXJbZGF0YS1zaGlwPVxcXCIyXFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcbn1cXG4uYWxsLXNoaXBzIC5zaGlwLWNvbnRhaW5lcltkYXRhLXNoaXA9XFxcIjNcXFwiXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxufVxcbi5hbGwtc2hpcHMgLnNoaXAtY29udGFpbmVyW2RhdGEtc2hpcD1cXFwiNFxcXCJdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXG59XFxuLmFsbC1zaGlwcyAuc2hpcC1jb250YWluZXJbZGF0YS1zaGlwPVxcXCI1XFxcIl0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4Y2Y4O1xcbn1cXG4uYWxsLXNoaXBzIC5zaGlwLWNvbnRhaW5lci5kcmFnZ2luZyB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtBQUNGO0FBQUU7RUFDRSx1QkFBQTtBQUVKO0FBREk7RUFDRSw4RUFBQTtFQUNBLDBCQUFBO0FBR047QUFESTtFQUNJLHNCQUFBO0FBR1I7QUFESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR047QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7QUFGTTtFQUNFLHlCQUFBO0FBSVI7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQ0Y7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBRUo7QUFBRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7QUFFSjtBQURJO0VBQ0UscUJBQUE7RUFDQSx5REFBQTtBQUdOO0FBQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUVKO0FBREk7RUFDRSxzQkFBQTtBQUdOO0FBREk7RUFDSSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHUjtBQURJO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQUdOO0FBREk7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FBR047QUFESTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUFHTjtBQURJO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtBQUdOO0FBREk7RUFDSSxrQkFBQTtBQUdSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2hlYWQge1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDc1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJjaDtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjNGExYTtcXHJcXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdCB7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2I3MzM7XFxyXFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2JvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgLmNlbGwge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgJi5ibG9ja2VkIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzcxOC83MTg2NzIucG5nJyk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgJi5kcmFnSG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgfVxcclxcbiAgICAuc2hpcC1jZWxsIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgJltkYXRhLXNoaXBjZWxsPVxcXCIyXFxcIl0ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzZTYzNTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJltkYXRhLXNoaXBjZWxsPVxcXCIzXFxcIl0ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhZGU4MDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJltkYXRhLXNoaXBjZWxsPVxcXCI0XFxcIl0ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJltkYXRhLXNoaXBjZWxsPVxcXCI1XFxcIl0ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzgxOGNmODtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1zaGlwcyB7XFxyXFxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIHdpZHRoOiAzNzVweDtcXHJcXG4gIGhlaWdodDogNDI1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGNlMztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgcGFkZGluZzogM3JlbSAxcmVtIDFyZW0gMXJlbTtcXHJcXG4gICYudmVydGljYWwge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICB9XFxyXFxuICAjYXhpcy1idG4ge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZXJlZDsgICAgXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHZtYXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbiB0cmFuc2Zvcm07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSAwIDApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAuc2hpcC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICYudmVydGljYWwge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgJltkYXRhLXNoaXBdIC5zaGlwLWNlbGx7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAmW2RhdGEtc2hpcD1cXFwiMlxcXCJdIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNlNjM1O1xcclxcbiAgICB9XFxyXFxuICAgICZbZGF0YS1zaGlwPVxcXCIzXFxcIl0ge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWRlODA7XFxyXFxuICAgIH1cXHJcXG4gICAgJltkYXRhLXNoaXA9XFxcIjRcXFwiXSB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZDRiZjtcXHJcXG4gICAgfVxcclxcbiAgICAmW2RhdGEtc2hpcD1cXFwiNVxcXCJdIHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4Y2Y4O1xcclxcbiAgICB9XFxyXFxuICAgICYuZHJhZ2dpbmcge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2Rlcm4tbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBkcmFnZHJvcCBmcm9tICcuL2RyYWdkcm9wJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkRE9NKEdhbWVib2FyZCkge1xyXG4gIGNvbnN0IGJvYXJkRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyk7XHJcbiAgYm9hcmRET00uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ2Ryb3AuZHJhZ0xlYXZlKTtcclxuICBHYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgZWxlbWVudC5wb3NYKTtcclxuICAgIGdyaWRDZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgZWxlbWVudC5wb3NZKTtcclxuICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWdkcm9wLmRyYWdFbnRlcik7XHJcbiAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWdkcm9wLmRyYWdPdmVyKTtcclxuICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnZHJvcC5kcmFnRHJvcCk7XHJcbiAgICBib2FyZERPTS5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNoaXBHcmlkQ2VsbHMoKSB7XHJcbiAgY29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jb250YWluZXInKTtcclxuXHJcbiAgc2hpcExpc3QuZm9yRWFjaCgoc2hpcENvbnRhaW5lcikgPT4ge1xyXG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnZHJvcC5kcmFnU3RhcnQpO1xyXG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ2Ryb3AuZHJhZ0VuZCk7XHJcblxyXG4gICAgY29uc3Qgc2l6ZU9mU2hpcCA9IHBhcnNlSW50KHNoaXBDb250YWluZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnKSwgMTApO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzaXplT2ZTaGlwOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IHNoaXBDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtY2VsbCcpO1xyXG4gICAgICBzaGlwQ2VsbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2hpcGNlbGwnLCBzaXplT2ZTaGlwKTtcclxuICAgICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFVwQXhpc0J1dHRvbigpIHtcclxuICBjb25zdCBheGlzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F4aXMtYnRuJyk7XHJcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcC1jb250YWluZXInKTtcclxuICBjb25zdCBhbGxTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtc2hpcHMnKTtcclxuICBheGlzQnV0dG9uLmlubmVyVGV4dCA9ICdYLUFYSVMnO1xyXG4gIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnLCAneCcpO1xyXG5cclxuICBheGlzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgaWYgKGF4aXNCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnKSA9PT0gJ3gnKSB7XHJcbiAgICAgIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnLCAneScpO1xyXG4gICAgICBheGlzQnV0dG9uLmlubmVyVGV4dCA9ICdZLUFYSVMnO1xyXG4gICAgICBhbGxTaGlwcy5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICBzaGlwcy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF4aXNCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnLCAneCcpO1xyXG4gICAgICBheGlzQnV0dG9uLmlubmVyVGV4dCA9ICdYLUFYSVMnO1xyXG4gICAgICBhbGxTaGlwcy5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICBzaGlwcy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZShHYW1lYm9hcmQpIHtcclxuICBjcmVhdGVCb2FyZERPTShHYW1lYm9hcmQpO1xyXG4gIGNyZWF0ZVNoaXBHcmlkQ2VsbHMoKTtcclxuICBzZXRVcEF4aXNCdXR0b24oKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcclxuICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNoaXAnKSk7XHJcbiAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnRW5kKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJy5zaGlwLWNlbGwnKSkge1xyXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcclxuICAgIGNvbnN0IGhvdmVyZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnSG92ZXInKTtcclxuICAgIGhvdmVyZWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XHJcbiAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ0hvdmVyJyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0VudGVyKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaG92ZXJlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdIb3ZlcicpO1xyXG4gIGNvbnN0IGNlbGxzV2l0aEJsb2NrZWRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9ja2VkJyk7XHJcbiAgY2VsbHNXaXRoQmxvY2tlZEltYWdlLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZCcpO1xyXG4gIH0pO1xyXG5cclxuICBob3ZlcmVkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnSG92ZXInKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZHJhZ2dlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJhZ2dpbmcnKTtcclxuICBjb25zdCBzaGlwU2l6ZSA9IHBhcnNlSW50KGRyYWdnZWRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1zaGlwJyksIDEwKTtcclxuXHJcbiAgY29uc3QgY29vcmRzID0ge1xyXG4gICAgeDogZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSxcclxuICAgIHk6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS15JyksXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXhpc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNheGlzLWJ0bicpO1xyXG4gIGNvbnN0IGF4aXNUb1VzZSA9IGF4aXNCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWF4aXMnKTtcclxuXHJcbiAgbGV0IG9wcG9zaXRlQXhpcztcclxuICBpZiAoYXhpc1RvVXNlID09PSAneCcpIHtcclxuICAgIG9wcG9zaXRlQXhpcyA9ICd5JztcclxuICB9IGVsc2Uge1xyXG4gICAgb3Bwb3NpdGVBeGlzID0gJ3gnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2VsbHNJbkRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7b3Bwb3NpdGVBeGlzfT0nJHtjb29yZHNbb3Bwb3NpdGVBeGlzXX0nXWApO1xyXG5cclxuICBjb25zdCBjZWxsc0FmdGVyQ3VycmVudCA9IDkgLSBjb29yZHNbYXhpc1RvVXNlXTtcclxuICBjb25zdCBjZWxsc0JlZm9yZUN1cnJlbnQgPSBjb29yZHNbYXhpc1RvVXNlXSAtIDE7XHJcbiAgY29uc3QgY2VsbHNUb0NoYW5nZSA9IFtdO1xyXG5cclxuICBpZiAoY2VsbHNBZnRlckN1cnJlbnQgPj0gc2hpcFNpemUgLSAxKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHNJbkRpcmVjdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBhcnNlSW50KGNlbGxzSW5EaXJlY3Rpb25baW5kZXhdLmdldEF0dHJpYnV0ZShgZGF0YS0ke2F4aXNUb1VzZX1gKSwgMTApID4gY29vcmRzW2F4aXNUb1VzZV0pIHtcclxuICAgICAgICBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbHNJbkRpcmVjdGlvbltpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBlbHNlIGlmIChjZWxsc0JlZm9yZUN1cnJlbnQgPj0gc2hpcFNpemUgLSAxKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2VsbHNJbkRpcmVjdGlvbi5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgaWYgKHBhcnNlSW50KGNlbGxzSW5EaXJlY3Rpb25baW5kZXhdLmdldEF0dHJpYnV0ZShgZGF0YS0ke2F4aXNUb1VzZX1gKSwgMTApIDwgY29vcmRzW2F4aXNUb1VzZV0pIHtcclxuICAgICAgICBjZWxsc1RvQ2hhbmdlLnB1c2goY2VsbHNJbkRpcmVjdGlvbltpbmRleF0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjZWxsc1RvQ2hhbmdlLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIGNlbGxzVG9DaGFuZ2Uuc3BsaWNlKDAgKyBzaGlwU2l6ZSAtIDEpO1xyXG5cclxuICBsZXQgaXNDZWxsVXNlZCA9IGZhbHNlO1xyXG4gIGxldCBjZWxsc1RvUmVtb3ZlSG92ZXI7XHJcblxyXG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdIb3ZlcicpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNlbGxzVG9DaGFuZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChjZWxsc1RvQ2hhbmdlW2ldLmNsYXNzTGlzdC5jb250YWlucygndXNlZCcpKSB7XHJcbiAgICAgIGlzQ2VsbFVzZWQgPSB0cnVlO1xyXG4gICAgICBjZWxsc1RvUmVtb3ZlSG92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ0hvdmVyJyk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbHNUb0NoYW5nZVtpXS5jbGFzc0xpc3QuYWRkKCdkcmFnSG92ZXInKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChpc0NlbGxVc2VkKSB7XHJcbiAgICBjZWxsc1RvUmVtb3ZlSG92ZXIuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdIb3ZlcicpO1xyXG4gICAgfSk7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdibG9ja2VkJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhZ0Ryb3AoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBibG9ja2VkQ2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9ja2VkJyk7XHJcbiAgaWYgKGJsb2NrZWRDZWxsKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZHJvcCcpO1xyXG4gICAgYmxvY2tlZENlbGwuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tlZCcpO1xyXG4gIH1cclxuICBjb25zdCBzaGlwSUQgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0Jyk7XHJcbiAgY29uc3Qgc2hpcERPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaGlwPScke3NoaXBJRH0nXWApO1xyXG4gIGNvbnN0IGhvdmVyZWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnSG92ZXInKTtcclxuICBjb25zdCBzaGlwQ2VsbCA9IHNoaXBET01FbGVtZW50LmZpcnN0Q2hpbGQ7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG92ZXJlZENlbGxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBob3ZlcmVkQ2VsbHNbaV0uYXBwZW5kQ2hpbGQoc2hpcENlbGwuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIGhvdmVyZWRDZWxsc1tpXS5jbGFzc0xpc3QuYWRkKCd1c2VkJyk7XHJcbiAgICBob3ZlcmVkQ2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ0VudGVyLCBmYWxzZSk7XHJcbiAgICBob3ZlcmVkQ2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3ZlciwgZmFsc2UpO1xyXG4gICAgaG92ZXJlZENlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnRHJvcCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2hpcERPTUVsZW1lbnQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xyXG4gIGlmIChlLnRhcmdldC5pZCA9PT0gJ2JvYXJkJykge1xyXG4gICAgY29uc3QgaG92ZXJlZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWdIb3ZlcicpO1xyXG4gICAgaG92ZXJlZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcclxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnSG92ZXInKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xyXG4gIGJvYXJkID0gW107XHJcblxyXG4gIHNoaXBMaXN0ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xyXG4gICAgICAgIHRoaXMuYm9hcmQucHVzaCh7XHJcbiAgICAgICAgICBwb3NYOiBqLFxyXG4gICAgICAgICAgcG9zWTogaSxcclxuICAgICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgICBzaGlwOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kVGlsZUluZGV4KHgsIHkpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ib2FyZC5maW5kSW5kZXgoKGUpID0+IHtcclxuICAgICAgaWYgKGUucG9zWCA9PT0geCAmJiBlLnBvc1kgPT09IHkpIHtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5kZXg7XHJcbiAgfVxyXG5cclxuICBwbGFjZShzaGlwLCBjb29yZFgsIGNvb3JkWSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRUaWxlSW5kZXgoY29vcmRYLCBjb29yZFkpO1xyXG4gICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5ib2FyZFtpbmRleF0uc2hpcCA9IHNoaXA7XHJcbiAgICAgIHRoaXMuc2hpcExpc3QucHVzaChzaGlwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbmRUaWxlSW5kZXgoeCwgeSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmJvYXJkW2luZGV4XS5oaXQpIHtcclxuICAgICAgdGhpcy5ib2FyZFtpbmRleF0uaGl0ID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdLnNoaXAuaGl0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsbFNoaXBzU3VuaygpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnNoaXBMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoIXRoaXMuc2hpcExpc3RbaW5kZXhdLmlzU3VuaygpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xyXG5pbXBvcnQgJ21vZGVybi1ub3JtYWxpemUvbW9kZXJuLW5vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9kaXNwbGF5JztcclxuaW1wb3J0IEdhbWVCb2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XHJcblxyXG5jb25zdCBteUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xyXG5pbml0aWFsaXplKG15Qm9hcmQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=