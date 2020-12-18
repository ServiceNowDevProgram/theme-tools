webpackHotUpdate_N_E("pages/color-range",{

/***/ "./pages/color-range/index.js":
/*!************************************!*\
  !*** ./pages/color-range/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\n/* harmony import */ var _components_CopyValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CopyValue */ \"./components/CopyValue.js\");\n/* harmony import */ var _lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/color-generator/generateColors */ \"./lib/color-generator/generateColors.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/color-range/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'color-range',\n  href: \"/color-range\",\n  label: 'Color Range'\n}];\nvar selectedPath = 'color-range';\n\nvar renderGeneratedColors = function renderGeneratedColors(baseColor, lightVariations, lightPercentage, darkVariations, darkPercentage) {\n  var colors = Object(_lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_6__[\"generateColorRange\"])({\n    color: baseColor,\n    lightVariations: Number(lightVariations),\n    lightPercentage: Number(lightPercentage),\n    darkVariations: Number(darkVariations),\n    darkPercentage: Number(darkPercentage)\n  });\n\n  if (colors && colors.length) {\n    return colors.map(function (color) {\n      return __jsx(\"div\", {\n        className: \"flex-1\",\n        title: color.name,\n        key: color.name,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        style: {\n          height: '80px',\n          backgroundColor: color.hex\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }\n      }), __jsx(_components_CopyValue__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        value: color.hex,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }\n      }, __jsx(\"small\", {\n        style: {\n          fontSize: '10px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }\n      }, color.hex)));\n    });\n  } else {\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: '#f5f5f5'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }));\n  }\n};\n\nvar ColorRange = function ColorRange() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#1e856d'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('3'),\n      lightVariations = _useState2[0],\n      setLightVariations = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('.95'),\n      lightPercentage = _useState3[0],\n      setLightPercentage = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('3'),\n      darkVariations = _useState4[0],\n      setDarkVariations = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('.95'),\n      darkPercentage = _useState5[0],\n      setDarkPercentage = _useState5[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var urlParams = new URLSearchParams(window.location.search);\n    var base = urlParams.get('baseColor');\n    var lightV = urlParams.get('lightVariations');\n    var lightP = urlParams.get('lightPercentage');\n    var darkV = urlParams.get('darkVariations');\n    var darkP = urlParams.get('darkPercentage');\n\n    if (base && lightV && lightP && darkV && darkP) {\n      setBaseColor(base);\n      setLightVariations(lightV);\n      setLightPercentage(lightP);\n      setDarkVariations(darkV);\n      setDarkPercentage(darkP);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var searchParams = new URLSearchParams();\n    searchParams.set('baseColor', baseColor);\n    searchParams.set('lightVariations', lightVariations);\n    searchParams.set('lightPercentage', lightPercentage);\n    searchParams.set('darkVariations', darkVariations);\n    searchParams.set('darkPercentage', darkPercentage);\n    var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();\n    window.history.replaceState({\n      path: newurl\n    }, '', newurl);\n  }, [baseColor, lightVariations, lightPercentage, darkVariations, darkPercentage]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    label: \"Color Range\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"flex mb-8\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 9\n    }\n  }, renderGeneratedColors(baseColor, lightVariations, lightPercentage, darkVariations, darkPercentage)), __jsx(\"div\", {\n    className: \"grid grid-cols-5 gap-4\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Light Variations\",\n    value: lightVariations,\n    placeholder: \"3\",\n    onChange: function onChange(value) {\n      return setLightVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Light Percentage\",\n    value: lightPercentage,\n    placeholder: \".95\",\n    onChange: function onChange(value) {\n      return setLightPercentage(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }), __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Base Color\",\n    value: baseColor,\n    position: \"middle\",\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Dark Variations\",\n    value: darkVariations,\n    placeholder: \"3\",\n    onChange: function onChange(value) {\n      return setDarkVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Dark Percentage\",\n    value: darkPercentage,\n    placeholder: \".95\",\n    onChange: function onChange(value) {\n      return setDarkPercentage(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(ColorRange, \"RHm3fEoFQK94yXCGHzVNeMKtNzo=\");\n\n_c = ColorRange;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorRange);\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorRange\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sb3ItcmFuZ2UvaW5kZXguanM/NTI2MyJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJyZW5kZXJHZW5lcmF0ZWRDb2xvcnMiLCJiYXNlQ29sb3IiLCJsaWdodFZhcmlhdGlvbnMiLCJsaWdodFBlcmNlbnRhZ2UiLCJkYXJrVmFyaWF0aW9ucyIsImRhcmtQZXJjZW50YWdlIiwiY29sb3JzIiwiZ2VuZXJhdGVDb2xvclJhbmdlIiwiY29sb3IiLCJOdW1iZXIiLCJsZW5ndGgiLCJtYXAiLCJuYW1lIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiaGV4IiwiZm9udFNpemUiLCJDb2xvclJhbmdlIiwidXNlU3RhdGUiLCJzZXRCYXNlQ29sb3IiLCJzZXRMaWdodFZhcmlhdGlvbnMiLCJzZXRMaWdodFBlcmNlbnRhZ2UiLCJzZXREYXJrVmFyaWF0aW9ucyIsInNldERhcmtQZXJjZW50YWdlIiwidXNlRWZmZWN0IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJiYXNlIiwiZ2V0IiwibGlnaHRWIiwibGlnaHRQIiwiZGFya1YiLCJkYXJrUCIsInNlYXJjaFBhcmFtcyIsInNldCIsIm5ld3VybCIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUFDQyxJQUFFLEVBQUUsYUFBTDtBQUFvQkMsTUFBSSxFQUFFLGNBQTFCO0FBQTBDQyxPQUFLLEVBQUU7QUFBakQsQ0FEVyxFQUVYO0FBQUNGLElBQUUsRUFBRSxhQUFMO0FBQW9CQyxNQUFJLGdCQUF4QjtBQUEwQ0Ms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QUFJRSxZQUFRLEVBQUUsa0JBQUEwQyxLQUFLO0FBQUEsYUFBSXhCLGtCQUFrQixDQUFDd0IsS0FBRCxDQUF0QjtBQUFBLEtBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVdFLE1BQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUMsWUFEUjtBQUVFLFNBQUssRUFBRTVDLFNBRlQ7QUFHRSxZQUFRLEVBQUMsUUFIWDtBQUlFLFlBQVEsRUFBRSxrQkFBQU8sS0FBSztBQUFBLGFBQUlXLFlBQVksQ0FBQ1gsS0FBRCxDQUFoQjtBQUFBLEtBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLGlCQURSO0FBRUUsU0FBSyxFQUFFSixjQUZUO0FBR0UsZUFBVyxFQUFDLEdBSGQ7QUFJRSxZQUFRLEVBQUUsa0JBQUF5QyxLQUFLO0FBQUEsYUFBSXZCLGlCQUFpQixDQUFDdUIsS0FBRCxDQUFyQjtBQUFBLEtBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsRUFxQkUsTUFBQyx5REFBRDtBQUNFLFNBQUssRUFBQyxpQkFEUjtBQUVFLFNBQUssRUFBRXhDLGNBRlQ7QUFHRSxlQUFXLEVBQUMsS0FIZDtBQUlFLFlBQVEsRUFBRSxrQkFBQXdDLEtBQUs7QUFBQSxhQUFJdEIsaUJBQWlCLENBQUNzQixLQUFELENBQXJCO0FBQUEsS0FKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCRixDQUpGLENBUEYsQ0FERjtBQTBDRCxDQXBGRDs7R0FBTTVCLFU7O0tBQUFBLFU7QUF3RlNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29sb3ItcmFuZ2UvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCBCYXNlQ29sb3JQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlQ29sb3JQaWNrZXInO1xuaW1wb3J0IENvcHlWYWx1ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvcHlWYWx1ZSc7XG5cbmltcG9ydCB7IGdlbmVyYXRlQ29sb3JSYW5nZSB9IGZyb20gJy4uLy4uL2xpYi9jb2xvci1nZW5lcmF0b3IvZ2VuZXJhdGVDb2xvcnMnO1xuXG5jb25zdCBwYXRoID0gW1xuICB7aWQ6ICdjb2xvci10b29scycsIGhyZWY6ICcvY29sb3ItdG9vbHMnLCBsYWJlbDogJ0NvbG9yIFRvb2xzJ30sXG4gIHtpZDogJ2NvbG9yLXJhbmdlJywgaHJlZjogYC9jb2xvci1yYW5nZWAsIGxhYmVsOiAnQ29sb3IgUmFuZ2UnfVxuXTtcbmNvbnN0IHNlbGVjdGVkUGF0aCA9ICdjb2xvci1yYW5nZSc7XG5cbmNvbnN0IHJlbmRlckdlbmVyYXRlZENvbG9ycyA9IChiYXNlQ29sb3IsIGxpZ2h0VmFyaWF0aW9ucywgbGlnaHRQZXJjZW50YWdlLCBkYXJrVmFyaWF0aW9ucywgZGFya1BlcmNlbnRhZ2UpID0+IHtcbiAgY29uc3QgY29sb3JzID0gZ2VuZXJhdGVDb2xvclJhbmdlKHtcbiAgICBjb2xvcjogYmFzZUNvbG9yLFxuICAgIGxpZ2h0VmFyaWF0aW9uczogTnVtYmVyKGxpZ2h0VmFyaWF0aW9ucyksXG4gICAgbGlnaHRQZXJjZW50YWdlOiBOdW1iZXIobGlnaHRQZXJjZW50YWdlKSxcbiAgICBkYXJrVmFyaWF0aW9uczogTnVtYmVyKGRhcmtWYXJpYXRpb25zKSxcbiAgICBkYXJrUGVyY2VudGFnZTogTnVtYmVyKGRhcmtQZXJjZW50YWdlKVxuICB9KTtcblxuICBpZiAoY29sb3JzICYmIGNvbG9ycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY29sb3JzLm1hcCgoY29sb3IpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgdGl0bGU9e2NvbG9yLm5hbWV9IGtleT17Y29sb3IubmFtZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmhleH19PjwvZGl2PlxuICAgICAgICAgIDxDb3B5VmFsdWUgdmFsdWU9e2NvbG9yLmhleH0+XG4gICAgICAgICAgICA8c21hbGwgc3R5bGU9e3tmb250U2l6ZTogJzEwcHgnfX0+e2NvbG9yLmhleH08L3NtYWxsPlxuICAgICAgICAgIDwvQ29weVZhbHVlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNSd9fT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IENvbG9yUmFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYXNlQ29sb3IsIHNldEJhc2VDb2xvcl0gPSB1c2VTdGF0ZSgnIzFlODU2ZCcpO1xuICBjb25zdCBbbGlnaHRWYXJpYXRpb25zLCBzZXRMaWdodFZhcmlhdGlvbnNdID0gdXNlU3RhdGUoJzMnKTtcbiAgY29uc3QgW2xpZ2h0UGVyY2VudGFnZSwgc2V0TGlnaHRQZXJjZW50YWdlXSA9IHVzZVN0YXRlKCcuOTUnKTtcbiAgY29uc3QgW2RhcmtWYXJpYXRpb25zLCBzZXREYXJrVmFyaWF0aW9uc10gPSB1c2VTdGF0ZSgnMycpO1xuICBjb25zdCBbZGFya1BlcmNlbnRhZ2UsIHNldERhcmtQZXJjZW50YWdlXSA9IHVzZVN0YXRlKCcuOTUnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cdFx0Y29uc3QgYmFzZSA9IHVybFBhcmFtcy5nZXQoJ2Jhc2VDb2xvcicpO1xuXHRcdGNvbnN0IGxpZ2h0ViA9IHVybFBhcmFtcy5nZXQoJ2xpZ2h0VmFyaWF0aW9ucycpO1xuXHRcdGNvbnN0IGxpZ2h0UCA9IHVybFBhcmFtcy5nZXQoJ2xpZ2h0UGVyY2VudGFnZScpO1xuXHRcdGNvbnN0IGRhcmtWID0gdXJsUGFyYW1zLmdldCgnZGFya1ZhcmlhdGlvbnMnKTtcblx0XHRjb25zdCBkYXJrUCA9IHVybFBhcmFtcy5nZXQoJ2RhcmtQZXJjZW50YWdlJyk7XG5cblx0XHRpZiAoYmFzZSAmJiBsaWdodFYgJiYgbGlnaHRQICYmIGRhcmtWICYmIGRhcmtQKSB7XG4gICAgICBzZXRCYXNlQ29sb3IoYmFzZSk7XG4gICAgICBzZXRMaWdodFZhcmlhdGlvbnMobGlnaHRWKTtcbiAgICAgIHNldExpZ2h0UGVyY2VudGFnZShsaWdodFApO1xuICAgICAgc2V0RGFya1ZhcmlhdGlvbnMoZGFya1YpO1xuICAgICAgc2V0RGFya1BlcmNlbnRhZ2UoZGFya1ApO1xuXHRcdH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuXHRcdHNlYXJjaFBhcmFtcy5zZXQoJ2Jhc2VDb2xvcicsIGJhc2VDb2xvcik7XG5cdFx0c2VhcmNoUGFyYW1zLnNldCgnbGlnaHRWYXJpYXRpb25zJywgbGlnaHRWYXJpYXRpb25zKTtcblx0XHRzZWFyY2hQYXJhbXMuc2V0KCdsaWdodFBlcmNlbnRhZ2UnLCBsaWdodFBlcmNlbnRhZ2UpO1xuXHRcdHNlYXJjaFBhcmFtcy5zZXQoJ2RhcmtWYXJpYXRpb25zJywgZGFya1ZhcmlhdGlvbnMpO1xuXHRcdHNlYXJjaFBhcmFtcy5zZXQoJ2RhcmtQZXJjZW50YWdlJywgZGFya1BlcmNlbnRhZ2UpO1xuXG5cdFx0bGV0IG5ld3VybCA9XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgK1xuXHRcdFx0Jy8vJyArXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaG9zdCArXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgK1xuXHRcdFx0Jz8nICtcblx0XHRcdHNlYXJjaFBhcmFtcy50b1N0cmluZygpO1xuXHRcdHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7cGF0aDogbmV3dXJsfSwgJycsIG5ld3VybCk7XG4gIH0sIFtiYXNlQ29sb3IsIGxpZ2h0VmFyaWF0aW9ucywgbGlnaHRQZXJjZW50YWdlLCBkYXJrVmFyaWF0aW9ucywgZGFya1BlcmNlbnRhZ2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQYWdlSGVhZGVyXG5cdFx0XHRcdFx0bGFiZWw9XCJDb2xvciBSYW5nZVwiXG5cdFx0XHRcdFx0cGF0aD17cGF0aH1cblx0XHRcdFx0XHRzZWxlY3RlZFBhdGg9e3NlbGVjdGVkUGF0aH1cblx0XHRcdFx0XHR3aWRlXG5cdFx0XHQvPlxuICAgICAgPFBhZ2Ugd2lkZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLThcIj5cbiAgICAgICAgICB7cmVuZGVyR2VuZXJhdGVkQ29sb3JzKGJhc2VDb2xvciwgbGlnaHRWYXJpYXRpb25zLCBsaWdodFBlcmNlbnRhZ2UsIGRhcmtWYXJpYXRpb25zLCBkYXJrUGVyY2VudGFnZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTUgZ2FwLTRcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIGxhYmVsPVwiTGlnaHQgVmFyaWF0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17bGlnaHRWYXJpYXRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRMaWdodFZhcmlhdGlvbnModmFsdWUpfSAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJMaWdodCBQZXJjZW50YWdlXCJcbiAgICAgICAgICAgIHZhbHVlPXtsaWdodFBlcmNlbnRhZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi45NVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0TGlnaHRQZXJjZW50YWdlKHZhbHVlKX0gLz5cbiAgICAgICAgICA8QmFzZUNvbG9yUGlja2VyXG4gICAgICAgICAgICBsYWJlbD1cIkJhc2UgQ29sb3JcIlxuICAgICAgICAgICAgdmFsdWU9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwibWlkZGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiBzZXRCYXNlQ29sb3IoY29sb3IpfSAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbGFiZWw9XCJEYXJrIFZhcmlhdGlvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e2RhcmtWYXJpYXRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIzXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXREYXJrVmFyaWF0aW9ucyh2YWx1ZSl9IC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBsYWJlbD1cIkRhcmsgUGVyY2VudGFnZVwiXG4gICAgICAgICAgICB2YWx1ZT17ZGFya1BlcmNlbnRhZ2V9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi45NVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0RGFya1BlcmNlbnRhZ2UodmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JSYW5nZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/color-range/index.js\n");

/***/ })

})