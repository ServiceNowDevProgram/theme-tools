webpackHotUpdate_N_E("pages/color-generator",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_cx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cx */ \"./lib/cx.js\");\nvar _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/components/Input.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Input(_ref) {\n  var type = _ref.type,\n      name = _ref.name,\n      label = _ref.label,\n      value = _ref.value,\n      placeholder = _ref.placeholder,\n      _ref$onChange = _ref.onChange,\n      _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,\n      _ref$layout = _ref.layout,\n      layout = _ref$layout === void 0 ? 'vertical' : _ref$layout;\n\n  return __jsx(\"div\", {\n    className: Object(_lib_cx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      flex: true,\n      'items-center': layout === 'horizontal',\n      'flex-col': layout === 'vertical'\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 3\n    }\n  }, __jsx(\"label\", {\n    className: Object(_lib_cx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n      'mb-2': layout === 'vertical',\n      'mr-2': layout === 'horizontal'\n    }),\n    htmlFor: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }, label), __jsx(\"input\", {\n    name: name,\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: type,\n    defaultValue: value || '',\n    onChange: function onChange(e) {\n      _onChange(e.target.value || undefined);\n    },\n    placeholder: placeholder,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }));\n}\n\n_c = Input;\nInput.PropTypes = {\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['text', 'number']),\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['vertical', 'horizontal'])\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qcz80ZmI1Il0sIm5hbWVzIjpbIklucHV0IiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImxheW91dCIsImN4IiwiZmxleCIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJQcm9wVHlwZXMiLCJvbmVPZiIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FRRztBQUFBLE1BUEZDLElBT0UsUUFQRkEsSUFPRTtBQUFBLE1BTkZDLElBTUUsUUFORkEsSUFNRTtBQUFBLE1BTEZDLEtBS0UsUUFMRkEsS0FLRTtBQUFBLE1BSkZDLEtBSUUsUUFKRkEsS0FJRTtBQUFBLE1BSEZDLFdBR0UsUUFIRkEsV0FHRTtBQUFBLDJCQUZGQyxRQUVFO0FBQUEsTUFGRkEsU0FFRSw4QkFGUyxZQUFNLENBQUUsQ0FFakI7QUFBQSx5QkFERkMsTUFDRTtBQUFBLE1BREZBLE1BQ0UsNEJBRE8sVUFDUDs7QUFDRixTQUNDO0FBQ0MsYUFBUyxFQUFFQyx1REFBRSxDQUFDO0FBQ2JDLFVBQUksRUFBRSxJQURPO0FBRWIsc0JBQWdCRixNQUFNLEtBQUssWUFGZDtBQUdiLGtCQUFZQSxNQUFNLEtBQUs7QUFIVixLQUFELENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DO0FBQ0MsYUFBUyxFQUFFQyx1REFBRSxDQUFDO0FBQ2IsY0FBUUQsTUFBTSxLQUFLLFVBRE47QUFFYixjQUFRQSxNQUFNLEtBQUs7QUFGTixLQUFELENBRGQ7QUFLQyxXQUFPLEVBQUVMLElBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FQyxLQU5GLENBTkQsRUFjQztBQUNDLFFBQUksRUFBRUQsSUFEUDtBQUVDLGFBQVMsRUFBQyw4SkFGWDtBQUdDLFFBQUksRUFBRUQsSUFIUDtBQUlDLGdCQUFZLEVBQUVHLEtBQUssSUFBSSxFQUp4QjtBQUtDLFlBQVEsRUFBRSxrQkFBQ00sQ0FBRCxFQUFPO0FBQ2hCSixlQUFRLENBQUNJLENBQUMsQ0FBQ0MsTUFBRixDQUFTUCxLQUFULElBQWtCUSxTQUFuQixDQUFSO0FBQ0EsS0FQRjtBQVFDLGVBQVcsRUFBRVAsV0FSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEQsQ0FERDtBQTJCQTs7S0FwQ1FMLEs7QUFzQ1RBLEtBQUssQ0FBQ2EsU0FBTixHQUFrQjtBQUNqQlosTUFBSSxFQUFFWSxpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQUMsTUFBRCxFQUFTLFFBQVQsQ0FBaEIsQ0FEVztBQUVqQlosTUFBSSxFQUFFVyxpREFBUyxDQUFDRSxNQUZDO0FBR2pCWixPQUFLLEVBQUVVLGlEQUFTLENBQUNFLE1BSEE7QUFJakJYLE9BQUssRUFBRVMsaURBQVMsQ0FBQ0UsTUFKQTtBQUtqQlYsYUFBVyxFQUFFUSxpREFBUyxDQUFDRSxNQUxOO0FBTWpCVCxVQUFRLEVBQUVPLGlEQUFTLENBQUNHLElBTkg7QUFPakJULFFBQU0sRUFBRU0saURBQVMsQ0FBQ0MsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxZQUFiLENBQWhCO0FBUFMsQ0FBbEI7QUFVZWQsb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3ggZnJvbSAnLi4vbGliL2N4JztcblxuZnVuY3Rpb24gSW5wdXQoe1xuXHR0eXBlLFxuXHRuYW1lLFxuXHRsYWJlbCxcblx0dmFsdWUsXG5cdHBsYWNlaG9sZGVyLFxuXHRvbkNoYW5nZSA9ICgpID0+IHt9LFxuXHRsYXlvdXQgPSAndmVydGljYWwnLFxufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT17Y3goe1xuXHRcdFx0XHRmbGV4OiB0cnVlLFxuXHRcdFx0XHQnaXRlbXMtY2VudGVyJzogbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdCdmbGV4LWNvbCc6IGxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcblx0XHRcdH0pfT5cblx0XHRcdDxsYWJlbFxuXHRcdFx0XHRjbGFzc05hbWU9e2N4KHtcblx0XHRcdFx0XHQnbWItMic6IGxheW91dCA9PT0gJ3ZlcnRpY2FsJyxcblx0XHRcdFx0XHQnbXItMic6IGxheW91dCA9PT0gJ2hvcml6b250YWwnLFxuXHRcdFx0XHR9KX1cblx0XHRcdFx0aHRtbEZvcj17bmFtZX0+XG5cdFx0XHRcdHtsYWJlbH1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0bmFtZT17bmFtZX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTEgcHgtMiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCJcblx0XHRcdFx0dHlwZT17dHlwZX1cblx0XHRcdFx0ZGVmYXVsdFZhbHVlPXt2YWx1ZSB8fCAnJ31cblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0b25DaGFuZ2UoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTtcblx0XHRcdFx0fX1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuSW5wdXQuUHJvcFR5cGVzID0ge1xuXHR0eXBlOiBQcm9wVHlwZXMub25lT2YoWyd0ZXh0JywgJ251bWJlciddKSxcblx0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0bGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblx0b25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXHRsYXlvdXQ6IFByb3BUeXBlcy5vbmVPZihbJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Input.js\n");

/***/ })

})