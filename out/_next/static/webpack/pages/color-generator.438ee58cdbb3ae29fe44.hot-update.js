webpackHotUpdate_N_E("pages/color-generator",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_cx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cx */ \"./lib/cx.js\");\nvar _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/components/Input.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Input(_ref) {\n  var _ref$layout = _ref.layout,\n      layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,\n      type = _ref.type,\n      name = _ref.name,\n      label = _ref.label,\n      value = _ref.value,\n      _ref$onChange = _ref.onChange,\n      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,\n      placeholder = _ref.placeholder,\n      disabled = _ref.disabled;\n\n  return __jsx(\"div\", {\n    className: Object(_lib_cx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      flex: true,\n      'items-center': layout === 'horizontal',\n      'flex-col': layout === 'vertical'\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(\"label\", {\n    className: Object(_lib_cx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      'mb-1': layout === 'vertical',\n      'mr-2': layout === 'horizontal',\n      label: true\n    }),\n    htmlFor: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }, label), __jsx(\"input\", {\n    name: name,\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: type,\n    value: value || '',\n    onChange: function onChange(e) {\n      _onChange(e.target.value || undefined);\n    },\n    disabled: disabled,\n    placeholder: placeholder,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }\n  }));\n}\n\n_c = Input;\nInput.propTypes = {\n  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['vertical', 'horizontal']),\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['text', 'number', 'password']),\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0IiwibGF5b3V0IiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiY3giLCJmbGV4IiwiZSIsInRhcmdldCIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FTRztBQUFBLHlCQVJGQyxNQVFFO0FBQUEsTUFSRkEsTUFRRSw0QkFSTyxVQVFQO0FBQUEsTUFQRkMsSUFPRSxRQVBGQSxJQU9FO0FBQUEsTUFORkMsSUFNRSxRQU5GQSxJQU1FO0FBQUEsTUFMRkMsS0FLRSxRQUxGQSxLQUtFO0FBQUEsTUFKRkMsS0FJRSxRQUpGQSxLQUlFO0FBQUEsMkJBSEZDLFFBR0U7QUFBQSxNQUhGQSxTQUdFLDhCQUhTLFlBQU0sQ0FBRSxDQUdqQjtBQUFBLE1BRkRDLFdBRUMsUUFGREEsV0FFQztBQUFBLE1BRERDLFFBQ0MsUUFEREEsUUFDQzs7QUFDRixTQUNDO0FBQ0MsYUFBUyxFQUFFQyx1REFBRSxDQUFDO0FBQ2JDLFVBQUksRUFBRSxJQURPO0FBRWIsc0JBQWdCVCxNQUFNLEtBQUssWUFGZDtBQUdiLGtCQUFZQSxNQUFNLEtBQUs7QUFIVixLQUFELENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DO0FBQ0MsYUFBUyxFQUFFUSx1REFBRSxDQUFDO0FBQ2IsY0FBUVIsTUFBTSxLQUFLLFVBRE47QUFFYixjQUFRQSxNQUFNLEtBQUssWUFGTjtBQUdiRyxXQUFLLEVBQUU7QUFITSxLQUFELENBRGQ7QUFNQyxXQUFPLEVBQUVELElBTlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FQyxLQVBGLENBTkQsRUFlQztBQUNDLFFBQUksRUFBRUQsSUFEUDtBQUVDLGFBQVMsRUFBQyw4SkFGWDtBQUdDLFFBQUksRUFBRUQsSUFIUDtBQUlDLFNBQUssRUFBRUcsS0FBSyxJQUFJLEVBSmpCO0FBS0MsWUFBUSxFQUFFLGtCQUFDTSxDQUFELEVBQU87QUFDaEJMLGVBQVEsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNQLEtBQVQsSUFBa0JRLFNBQW5CLENBQVI7QUFDSSxLQVBOO0FBUUssWUFBUSxFQUFFTCxRQVJmO0FBU0MsZUFBVyxFQUFFRCxXQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmRCxDQUREO0FBNkJBOztLQXZDUVAsSztBQXlDVEEsS0FBSyxDQUFDYyxTQUFOLEdBQWtCO0FBQ2pCYixRQUFNLEVBQUVjLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUFoQixDQURTO0FBRWpCZCxNQUFJLEVBQUVhLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixDQUFoQixDQUZXO0FBR2pCYixNQUFJLEVBQUVZLGlEQUFTLENBQUNFLE1BSEM7QUFJakJiLE9BQUssRUFBRVcsaURBQVMsQ0FBQ0UsTUFKQTtBQUtqQlosT0FBSyxFQUFFVSxpREFBUyxDQUFDRSxNQUxBO0FBTWpCWCxVQUFRLEVBQUVTLGlEQUFTLENBQUNHLElBTkg7QUFPaEJYLGFBQVcsRUFBRVEsaURBQVMsQ0FBQ0UsTUFQUDtBQVFoQlQsVUFBUSxFQUFFTyxpREFBUyxDQUFDSTtBQVJKLENBQWxCO0FBV2VuQixvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSW5wdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjeCBmcm9tICcuLi9saWIvY3gnO1xuXG5mdW5jdGlvbiBJbnB1dCh7XG5cdGxheW91dCA9ICd2ZXJ0aWNhbCcsXG5cdHR5cGUsXG5cdG5hbWUsXG5cdGxhYmVsLFxuXHR2YWx1ZSxcblx0b25DaGFuZ2UgPSAoKSA9PiB7fSxcbiAgcGxhY2Vob2xkZXIsXG4gIGRpc2FibGVkXG59KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtjeCh7XG5cdFx0XHRcdGZsZXg6IHRydWUsXG5cdFx0XHRcdCdpdGVtcy1jZW50ZXInOiBsYXlvdXQgPT09ICdob3Jpem9udGFsJyxcblx0XHRcdFx0J2ZsZXgtY29sJzogbGF5b3V0ID09PSAndmVydGljYWwnLFxuXHRcdFx0fSl9PlxuXHRcdFx0PGxhYmVsXG5cdFx0XHRcdGNsYXNzTmFtZT17Y3goe1xuXHRcdFx0XHRcdCdtYi0xJzogbGF5b3V0ID09PSAndmVydGljYWwnLFxuXHRcdFx0XHRcdCdtci0yJzogbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0bGFiZWw6IHRydWUsXG5cdFx0XHRcdH0pfVxuXHRcdFx0XHRodG1sRm9yPXtuYW1lfT5cblx0XHRcdFx0e2xhYmVsfVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRuYW1lPXtuYW1lfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMSBweC0yIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIlxuXHRcdFx0XHR0eXBlPXt0eXBlfVxuXHRcdFx0XHR2YWx1ZT17dmFsdWUgfHwgJyd9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdG9uQ2hhbmdlKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG4gICAgICAgIH19XG4gICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuXHRsYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXSksXG5cdHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ3Bhc3N3b3JkJ10pLFxuXHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcblx0dmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})