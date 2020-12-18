webpackHotUpdate_N_E("pages/complimentary-colors",{

/***/ "./pages/complimentary-colors/index.js":
/*!*********************************************!*\
  !*** ./pages/complimentary-colors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/complimentary-colors/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'complimentary-colors',\n  href: \"/complimentary-colors\",\n  label: 'Complimentary Colors'\n}];\nvar selectedPath = 'complimentary-colors';\n\nvar ComplimentaryColors = function ComplimentaryColors() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#ffffff'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: \"Complimentary Colors\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-4 gap-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: baseColor,\n    label: \"Base color\",\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    position: \"middle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(ComplimentaryColors, \"KEVQlSXqQfFGsRKeLXcgVRDunyw=\");\n\n_c = ComplimentaryColors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComplimentaryColors);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComplimentaryColors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGxpbWVudGFyeS1jb2xvcnMvaW5kZXguanM/OGY4MiJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJDb21wbGltZW50YXJ5Q29sb3JzIiwidXNlU3RhdGUiLCJiYXNlQ29sb3IiLCJzZXRCYXNlQ29sb3IiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNaO0FBQUNDLElBQUUsRUFBRSxhQUFMO0FBQW9CQyxNQUFJLEVBQUUsY0FBMUI7QUFBMENDLE9BQUssRUFBRTtBQUFqRCxDQURZLEVBRVo7QUFBQ0YsSUFBRSxFQUFFLHNCQUFMO0FBQTZCQyxNQUFJLHlCQUFqQztBQUE0REMsT0FBSyxFQUFFO0FBQW5FLENBRlksQ0FBYjtBQUlBLElBQU1DLFlBQVksR0FBRyxzQkFBckI7O0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFNO0FBQUE7O0FBQUEsa0JBRUVDLHNEQUFRLENBQUMsU0FBRCxDQUZWO0FBQUEsTUFFekJDLFNBRnlCO0FBQUEsTUFFZEMsWUFGYzs7QUFJaEMsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0YsU0FBSyxFQUFDLHNCQURKO0FBRUYsUUFBSSxFQUFFUixJQUZKO0FBR0YsZ0JBQVksRUFBRUksWUFIWjtBQUlGLFFBQUksTUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRSxNQUFDLHdEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRUcsU0FEVDtBQUVFLFNBQUssRUFBQyxZQUZSO0FBR0UsWUFBUSxFQUFFLGtCQUFBRSxLQUFLO0FBQUEsYUFBSUQsWUFBWSxDQUFDQyxLQUFELENBQWhCO0FBQUEsS0FIakI7QUFJRSxZQUFRLEVBQUMsUUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURGLENBUEYsQ0FERjtBQW9CRCxDQXhCRDs7R0FBTUosbUI7O0tBQUFBLG1CO0FBMEJTQSxrRkFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBsaW1lbnRhcnktY29sb3JzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IEJhc2VDb2xvclBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VDb2xvclBpY2tlcic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dCc7XG5cbmNvbnN0IHBhdGggPSBbXG5cdHtpZDogJ2NvbG9yLXRvb2xzJywgaHJlZjogJy9jb2xvci10b29scycsIGxhYmVsOiAnQ29sb3IgVG9vbHMnfSxcblx0e2lkOiAnY29tcGxpbWVudGFyeS1jb2xvcnMnLCBocmVmOiBgL2NvbXBsaW1lbnRhcnktY29sb3JzYCwgbGFiZWw6ICdDb21wbGltZW50YXJ5IENvbG9ycyd9LFxuXTtcbmNvbnN0IHNlbGVjdGVkUGF0aCA9ICdjb21wbGltZW50YXJ5LWNvbG9ycyc7XG5cbmNvbnN0IENvbXBsaW1lbnRhcnlDb2xvcnMgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2Jhc2VDb2xvciwgc2V0QmFzZUNvbG9yXSA9IHVzZVN0YXRlKCcjZmZmZmZmJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8UGFnZUhlYWRlclxuXHRcdFx0XHRsYWJlbD1cIkNvbXBsaW1lbnRhcnkgQ29sb3JzXCJcblx0XHRcdFx0cGF0aD17cGF0aH1cblx0XHRcdFx0c2VsZWN0ZWRQYXRoPXtzZWxlY3RlZFBhdGh9XG5cdFx0XHRcdHdpZGVcblx0XHRcdC8+XG4gICAgICA8UGFnZSB3aWRlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTRcIj5cbiAgICAgICAgICA8QmFzZUNvbG9yUGlja2VyXG4gICAgICAgICAgICB2YWx1ZT17YmFzZUNvbG9yfVxuICAgICAgICAgICAgbGFiZWw9XCJCYXNlIGNvbG9yXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiBzZXRCYXNlQ29sb3IoY29sb3IpfVxuICAgICAgICAgICAgcG9zaXRpb249XCJtaWRkbGVcIiAvPlxuICAgICAgICAgICAgPElucHV0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9QYWdlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGltZW50YXJ5Q29sb3JzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/complimentary-colors/index.js\n");

/***/ })

})