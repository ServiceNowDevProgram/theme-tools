webpackHotUpdate_N_E("pages/color-range",{

/***/ "./pages/color-range/index.js":
/*!************************************!*\
  !*** ./pages/color-range/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\n/* harmony import */ var _components_CopyValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CopyValue */ \"./components/CopyValue.js\");\n/* harmony import */ var _lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/color-generator/generateColors */ \"./lib/color-generator/generateColors.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/color-range/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'color-range',\n  href: \"/color-range\",\n  label: 'Color Range'\n}];\nvar selectedPath = 'color-range';\n\nvar renderGeneratedColors = function renderGeneratedColors(colors) {\n  if (colors && colors.length) {\n    return colors.map(function (color) {\n      return __jsx(\"div\", {\n        className: \"flex-1\",\n        title: color.name,\n        key: color.name,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        style: {\n          height: '80px',\n          backgroundColor: color.hex\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }\n      }), __jsx(_components_CopyValue__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        value: color.hex,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }\n      }, __jsx(\"small\", {\n        style: {\n          fontSize: '10px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }\n      }, color.hex)));\n    });\n  } else {\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: '#f5f5f5'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }));\n  }\n};\n\nvar ColorRange = function ColorRange() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#000000'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(3),\n      lightVariations = _useState2[0],\n      setLightVariations = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(.95),\n      lightPercentage = _useState3[0],\n      setLightPercentage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(3),\n      darkVariations = _useState4[0],\n      setDarkVariations = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(.95),\n      darkPercentage = _useState5[0],\n      setDarkPercentage = _useState5[1];\n\n  var colors = Object(_lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_6__[\"generateColorRange\"])({\n    color: baseColor,\n    lightVariations: lightVariations,\n    lightPercentage: lightPercentage,\n    darkVariations: darkVariations,\n    darkPercentage: darkPercentage\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    label: \"Color Range\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, renderGeneratedColors(colors)), __jsx(\"div\", {\n    className: \"grid grid-cols-5 gap-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Light Variations\",\n    value: lightVariations,\n    onChange: function onChange(value) {\n      return setLightVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Light Percentage\",\n    value: lightPercentage,\n    onChange: function onChange(value) {\n      return setLightPercentage(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }), __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Base Color\",\n    value: baseColor,\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Dark Variations\",\n    value: darkVariations,\n    onChange: function onChange(value) {\n      return setDarkVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Dark Percentage\",\n    value: darkPercentage,\n    onChange: function onChange(value) {\n      return setDarkPercentage(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ColorRange, \"JK8ayihzLLHYOY84MAWdnzPrDvc=\");\n\n_c = ColorRange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorRange);\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorRange\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sb3ItcmFuZ2UvaW5kZXguanM/NTI2MyJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJyZW5kZXJHZW5lcmF0ZWRDb2xvcnMiLCJjb2xvcnMiLCJsZW5ndGgiLCJtYXAiLCJjb2xvciIsIm5hbWUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZXgiLCJmb250U2l6ZSIsIkNvbG9yUmFuZ2UiLCJ1c2VTdGF0ZSIsImJhc2VDb2xvciIsInNldEJhc2VDb2xvciIsImxpZ2h0VmFyaWF0aW9ucyIsInNldExpZ2h0VmFyaWF0aW9ucyIsImxpZ2h0UGVyY2VudGFnZSIsInNldExpZ2h0UGVyY2VudGFnZSIsImRhcmtWYXJpYXRpb25zIiwic2V0RGFya1ZhcmlhdGlvbnMiLCJkYXJrUGVyY2VudGFnZSIsInNldERhcmtQZXJjZW50YWdlIiwiZ2VuZXJhdGVDb2xvclJhbmdlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUFDQyxJQUFFLEVBQUUsYUFBTDtBQUFvQkMsTUFBSSxFQUFFLGNBQTFCO0FBQTBDQyxPQUFLLEVBQUU7QUFBakQsQ0FEVyxFQUVYO0FBQUNGLElBQUUsRUFBRSxhQUFMO0FBQW9CQyxNQUFJLGdCQUF4QjtBQUEwQ0MsT0FBSyxFQUFFO0FBQWpELENBRlcsQ0FBYjtBQUlBLElBQU1DLFlBQVksR0FBRyxhQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLE1BQUQsRUFBWTtBQUN4QyxNQUFJQSxNQUFNLElBQUlBLE1BQU0sQ0FBQ0MsTUFBckIsRUFBNkI7QUFDM0IsV0FBT0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQzNCLGFBQ0U7QUFBSyxpQkFB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QUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLGtCQURSO0FBRUUsU0FBSyxFQUFFUCxlQUZUO0FBR0UsWUFBUSxFQUFFLGtCQUFBTyxLQUFLO0FBQUEsYUFBSU4sa0JBQWtCLENBQUNNLEtBQUQsQ0FBdEI7QUFBQSxLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFTRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFDLFlBRFI7QUFFRSxTQUFLLEVBQUVYLFNBRlQ7QUFHRSxZQUFRLEVBQUUsa0JBQUFSLEtBQUs7QUFBQSxhQUFJUyxZQUFZLENBQUNULEtBQUQsQ0FBaEI7QUFBQSxLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFhRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsU0FBSyxFQUFFYyxjQUZUO0FBR0UsWUFBUSxFQUFFLGtCQUFBSyxLQUFLO0FBQUEsYUFBSUosaUJBQWlCLENBQUNJLEtBQUQsQ0FBckI7QUFBQSxLQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFpQkUsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxpQkFEUjtBQUVFLFNBQUssRUFBRUgsY0FGVDtBQUdFLFlBQVEsRUFBRSxrQkFBQUcsS0FBSztBQUFBLGFBQUlGLGlCQUFpQixDQUFDRSxLQUFELENBQXJCO0FBQUEsS0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixDQVZGLENBUEYsQ0FERjtBQTJDRCxDQTFERDs7R0FBTWIsVTs7S0FBQUEsVTtBQThEU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xvci1yYW5nZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IEJhc2VDb2xvclBpY2tlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Jhc2VDb2xvclBpY2tlcic7XG5pbXBvcnQgQ29weVZhbHVlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29weVZhbHVlJztcblxuaW1wb3J0IHsgZ2VuZXJhdGVDb2xvclJhbmdlIH0gZnJvbSAnLi4vLi4vbGliL2NvbG9yLWdlbmVyYXRvci9nZW5lcmF0ZUNvbG9ycyc7XG5cbmNvbnN0IHBhdGggPSBbXG4gIHtpZDogJ2NvbG9yLXRvb2xzJywgaHJlZjogJy9jb2xvci10b29scycsIGxhYmVsOiAnQ29sb3IgVG9vbHMnfSxcbiAge2lkOiAnY29sb3ItcmFuZ2UnLCBocmVmOiBgL2NvbG9yLXJhbmdlYCwgbGFiZWw6ICdDb2xvciBSYW5nZSd9XG5dO1xuY29uc3Qgc2VsZWN0ZWRQYXRoID0gJ2NvbG9yLXJhbmdlJztcblxuY29uc3QgcmVuZGVyR2VuZXJhdGVkQ29sb3JzID0gKGNvbG9ycykgPT4ge1xuICBpZiAoY29sb3JzICYmIGNvbG9ycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY29sb3JzLm1hcCgoY29sb3IpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgdGl0bGU9e2NvbG9yLm5hbWV9IGtleT17Y29sb3IubmFtZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmhleH19PjwvZGl2PlxuICAgICAgICAgIDxDb3B5VmFsdWUgdmFsdWU9e2NvbG9yLmhleH0+XG4gICAgICAgICAgICA8c21hbGwgc3R5bGU9e3tmb250U2l6ZTogJzEwcHgnfX0+e2NvbG9yLmhleH08L3NtYWxsPlxuICAgICAgICAgIDwvQ29weVZhbHVlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNSd9fT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IENvbG9yUmFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYXNlQ29sb3IsIHNldEJhc2VDb2xvcl0gPSB1c2VTdGF0ZSgnIzAwMDAwMCcpO1xuICBjb25zdCBbbGlnaHRWYXJpYXRpb25zLCBzZXRMaWdodFZhcmlhdGlvbnNdID0gdXNlU3RhdGUoMyk7XG4gIGNvbnN0IFtsaWdodFBlcmNlbnRhZ2UsIHNldExpZ2h0UGVyY2VudGFnZV0gPSB1c2VTdGF0ZSguOTUpO1xuICBjb25zdCBbZGFya1ZhcmlhdGlvbnMsIHNldERhcmtWYXJpYXRpb25zXSA9IHVzZVN0YXRlKDMpO1xuICBjb25zdCBbZGFya1BlcmNlbnRhZ2UsIHNldERhcmtQZXJjZW50YWdlXSA9IHVzZVN0YXRlKC45NSk7XG5cbiAgY29uc3QgY29sb3JzID0gZ2VuZXJhdGVDb2xvclJhbmdlKHtcbiAgICBjb2xvcjogYmFzZUNvbG9yLFxuICAgIGxpZ2h0VmFyaWF0aW9ucyxcbiAgICBsaWdodFBlcmNlbnRhZ2UsXG4gICAgZGFya1ZhcmlhdGlvbnMsXG4gICAgZGFya1BlcmNlbnRhZ2VcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8UGFnZUhlYWRlclxuXHRcdFx0XHRcdGxhYmVsPVwiQ29sb3IgUmFuZ2VcIlxuXHRcdFx0XHRcdHBhdGg9e3BhdGh9XG5cdFx0XHRcdFx0c2VsZWN0ZWRQYXRoPXtzZWxlY3RlZFBhdGh9XG5cdFx0XHRcdFx0d2lkZVxuXHRcdFx0Lz5cbiAgICAgIDxQYWdlIHdpZGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIHtyZW5kZXJHZW5lcmF0ZWRDb2xvcnMoY29sb3JzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWItNFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGhlaWdodDogJzgwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsXG4gICAgICAgICAgfX0+PC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTUgZ2FwLTRcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiTGlnaHQgVmFyaWF0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17bGlnaHRWYXJpYXRpb25zfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldExpZ2h0VmFyaWF0aW9ucyh2YWx1ZSl9IC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkxpZ2h0IFBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e2xpZ2h0UGVyY2VudGFnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRMaWdodFBlcmNlbnRhZ2UodmFsdWUpfSAvPlxuICAgICAgICAgIDxCYXNlQ29sb3JQaWNrZXJcbiAgICAgICAgICAgIGxhYmVsPVwiQmFzZSBDb2xvclwiXG4gICAgICAgICAgICB2YWx1ZT17YmFzZUNvbG9yfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2NvbG9yID0+IHNldEJhc2VDb2xvcihjb2xvcil9IC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkRhcmsgVmFyaWF0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17ZGFya1ZhcmlhdGlvbnN9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0RGFya1ZhcmlhdGlvbnModmFsdWUpfSAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJEYXJrIFBlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgdmFsdWU9e2RhcmtQZXJjZW50YWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldERhcmtQZXJjZW50YWdlKHZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1BhZ2U+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUmFuZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/color-range/index.js\n");

/***/ })

})