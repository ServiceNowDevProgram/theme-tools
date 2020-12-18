webpackHotUpdate_N_E("pages/color-range",{

/***/ "./pages/color-range/index.js":
/*!************************************!*\
  !*** ./pages/color-range/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/color-range/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'color-range',\n  href: \"/color-range\",\n  label: 'Color Range'\n}];\nvar selectedPath = 'color-range';\n\nvar ColorRange = function ColorRange() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#000000'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(3),\n      lightVariation = _useState2[0],\n      setLightVariations = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(.95),\n      lightPercentage = _useState3[0],\n      setLightPercentage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(3),\n      darkVariation = _useState4[0],\n      setDarkVariations = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(.95),\n      darkPercentage = _useState5[0],\n      setDarkPercentage = _useState5[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    label: \"Color Range\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-4\",\n    style: {\n      height: '80px',\n      backgroundColor: '#f5f5f5'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"grid grid-cols-5 gap-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Light Variations\",\n    value: lightVariations,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Light Percentage\",\n    value: lightPercentage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }), __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Base Color\",\n    value: baseColor,\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Dark Variations\",\n    value: darkVariations,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Dark Percentage\",\n    value: darkPercentage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ColorRange, \"hKpxH41CCSpF48bvKxZg2hXT8aA=\");\n\n_c = ColorRange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorRange);\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorRange\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sb3ItcmFuZ2UvaW5kZXguanM/NTI2MyJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJDb2xvclJhbmdlIiwidXNlU3RhdGUiLCJiYXNlQ29sb3IiLCJzZXRCYXNlQ29sb3IiLCJsaWdodFZhcmlhdGlvbiIsInNldExpZ2h0VmFyaWF0aW9ucyIsImxpZ2h0UGVyY2VudGFnZSIsInNldExpZ2h0UGVyY2VudGFnZSIsImRhcmtWYXJpYXRpb24iLCJzZXREYXJrVmFyaWF0aW9ucyIsImRhcmtQZXJjZW50YWdlIiwic2V0RGFya1BlcmNlbnRhZ2UiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaWdodFZhcmlhdGlvbnMiLCJjb2xvciIsImRhcmtWYXJpYXRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFBQ0MsSUFBRSxFQUFFLGFBQUw7QUFBb0JDLE1BQUksRUFBRSxjQUExQjtBQUEwQ0MsT0FBSyxFQUFFO0FBQWpELENBRFcsRUFFWDtBQUFDRixJQUFFLEVBQUUsYUFBTDtBQUFvQkMsTUFBSSxnQkFBeEI7QUFBMENDLE9BQUssRUFBRTtBQUFqRCxDQUZXLENBQWI7QUFJQSxJQUFNQyxZQUFZLEdBQUcsYUFBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLFNBQUQsQ0FEbkI7QUFBQSxNQUNoQkMsU0FEZ0I7QUFBQSxNQUNMQyxZQURLOztBQUFBLG1CQUVzQkYsc0RBQVEsQ0FBQyxDQUFELENBRjlCO0FBQUEsTUFFaEJHLGNBRmdCO0FBQUEsTUFFQUMsa0JBRkE7O0FBQUEsbUJBR3VCSixzREFBUSxDQUFDLEdBQUQsQ0FIL0I7QUFBQSxNQUdoQkssZUFIZ0I7QUFBQSxNQUdDQyxrQkFIRDs7QUFBQSxtQkFJb0JOLHNEQUFRLENBQUMsQ0FBRCxDQUo1QjtBQUFBLE1BSWhCTyxhQUpnQjtBQUFBLE1BSURDLGlCQUpDOztBQUFBLG1CQUtxQlIsc0RBQVEsQ0FBQyxHQUFELENBTDdCO0FBQUEsTUFLaEJTLGNBTGdCO0FBQUEsTUFLQUMsaUJBTEE7O0FBT3ZCLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNELFNBQUssRUFBQyxhQURMO0FBRUQsUUFBSSxFQUFFaEIsSUFGTDtBQUdELGdCQUFZLEVBQUVJLFlBSGI7QUFJRCxRQUFJLE1BSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyx3REFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsTUFEWjtBQUVFLFNBQUssRUFBRTtBQUNMYSxZQUFNLEVBQUUsTUFESDtBQUVMQyxxQkFBZSxFQUFFO0FBRlosS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFPLFNBQUssRUFBQyxrQkFBYjtBQUFnQyxTQUFLLEVBQUVDLGVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMseURBQUQ7QUFBTyxTQUFLLEVBQUMsa0JBQWI7QUFBZ0MsU0FBSyxFQUFFUixlQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFDLFlBRFI7QUFFRSxTQUFLLEVBQUVKLFNBRlQ7QUFHRSxZQUFRLEVBQUUsa0JBQUFhLEtBQUs7QUFBQSxhQUFJWixZQUFZLENBQUNZLEtBQUQsQ0FBaEI7QUFBQSxLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsRUFPRSxNQUFDLHlEQUFEO0FBQU8sU0FBSyxFQUFDLGlCQUFiO0FBQStCLFNBQUssRUFBRUMsY0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyx5REFBRDtBQUFPLFNBQUssRUFBQyxpQkFBYjtBQUErQixTQUFLLEVBQUVOLGNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQVBGLENBUEYsQ0FERjtBQTRCRCxDQW5DRDs7R0FBTVYsVTs7S0FBQUEsVTtBQXVDU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xvci1yYW5nZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IEJhc2VDb2xvclBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VDb2xvclBpY2tlcic7XG5cbmNvbnN0IHBhdGggPSBbXG4gIHtpZDogJ2NvbG9yLXRvb2xzJywgaHJlZjogJy9jb2xvci10b29scycsIGxhYmVsOiAnQ29sb3IgVG9vbHMnfSxcbiAge2lkOiAnY29sb3ItcmFuZ2UnLCBocmVmOiBgL2NvbG9yLXJhbmdlYCwgbGFiZWw6ICdDb2xvciBSYW5nZSd9XG5dO1xuY29uc3Qgc2VsZWN0ZWRQYXRoID0gJ2NvbG9yLXJhbmdlJztcblxuY29uc3QgQ29sb3JSYW5nZSA9ICgpID0+IHtcbiAgY29uc3QgW2Jhc2VDb2xvciwgc2V0QmFzZUNvbG9yXSA9IHVzZVN0YXRlKCcjMDAwMDAwJyk7XG4gIGNvbnN0IFtsaWdodFZhcmlhdGlvbiwgc2V0TGlnaHRWYXJpYXRpb25zXSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbbGlnaHRQZXJjZW50YWdlLCBzZXRMaWdodFBlcmNlbnRhZ2VdID0gdXNlU3RhdGUoLjk1KTtcbiAgY29uc3QgW2RhcmtWYXJpYXRpb24sIHNldERhcmtWYXJpYXRpb25zXSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbZGFya1BlcmNlbnRhZ2UsIHNldERhcmtQZXJjZW50YWdlXSA9IHVzZVN0YXRlKC45NSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8UGFnZUhlYWRlclxuXHRcdFx0XHRcdGxhYmVsPVwiQ29sb3IgUmFuZ2VcIlxuXHRcdFx0XHRcdHBhdGg9e3BhdGh9XG5cdFx0XHRcdFx0c2VsZWN0ZWRQYXRoPXtzZWxlY3RlZFBhdGh9XG5cdFx0XHRcdFx0d2lkZVxuXHRcdFx0Lz5cbiAgICAgIDxQYWdlIHdpZGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1JyxcbiAgICAgICAgICB9fT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC00XCI+XG4gICAgICAgICAgPElucHV0IGxhYmVsPVwiTGlnaHQgVmFyaWF0aW9uc1wiIHZhbHVlPXtsaWdodFZhcmlhdGlvbnN9IC8+XG4gICAgICAgICAgPElucHV0IGxhYmVsPVwiTGlnaHQgUGVyY2VudGFnZVwiIHZhbHVlPXtsaWdodFBlcmNlbnRhZ2V9IC8+XG4gICAgICAgICAgPEJhc2VDb2xvclBpY2tlclxuICAgICAgICAgICAgbGFiZWw9XCJCYXNlIENvbG9yXCJcbiAgICAgICAgICAgIHZhbHVlPXtiYXNlQ29sb3J9XG4gICAgICAgICAgICBvbkNoYW5nZT17Y29sb3IgPT4gc2V0QmFzZUNvbG9yKGNvbG9yKX0gLz5cbiAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJEYXJrIFZhcmlhdGlvbnNcIiB2YWx1ZT17ZGFya1ZhcmlhdGlvbnN9IC8+XG4gICAgICAgICAgPElucHV0IGxhYmVsPVwiRGFyayBQZXJjZW50YWdlXCIgdmFsdWU9e2RhcmtQZXJjZW50YWdlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JSYW5nZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/color-range/index.js\n");

/***/ })

})