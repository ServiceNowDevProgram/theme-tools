webpackHotUpdate_N_E("pages/complimentary-colors",{

/***/ "./pages/complimentary-colors/index.js":
/*!*********************************************!*\
  !*** ./pages/complimentary-colors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color-generator/generateColors */ \"./lib/color-generator/generateColors.js\");\n/* harmony import */ var _components_CopyValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CopyValue */ \"./components/CopyValue.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/complimentary-colors/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'complimentary-colors',\n  href: \"/complimentary-colors\",\n  label: 'Complimentary Colors'\n}];\nvar selectedPath = 'complimentary-colors';\n\nvar renderGeneratedColors = function renderGeneratedColors(baseColor, variations) {\n  var colors = Object(_lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_5__[\"getComplimentaryColors\"])(baseColor, variations);\n\n  if (colors && colors.length) {\n    return colors.map(function (color, i) {\n      return __jsx(\"div\", {\n        className: \"flex-1\",\n        title: color.name,\n        key: color.hex + i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 5\n        }\n      }, __jsx(\"div\", {\n        style: {\n          height: '80px',\n          backgroundColor: color.hex\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }\n      }), __jsx(_components_CopyValue__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        value: color.hex,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 6\n        }\n      }, __jsx(\"small\", {\n        style: {\n          fontSize: '10px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 7\n        }\n      }, color.hex)));\n    });\n  } else {\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 4\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: '#f5f5f5'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }\n    }));\n  }\n};\n\nvar ComplimentaryColors = function ComplimentaryColors() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#66a0ce'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('5'),\n      variations = _useState2[0],\n      setVariations = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var urlParams = new URLSearchParams(window.location.search);\n    var base = urlParams.get('baseColor');\n    var vars = urlParams.get('variations');\n\n    if (base && vars) {\n      setBaseColor(base);\n      setVariations(vars);\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var searchParams = new URLSearchParams();\n    searchParams.set('baseColor', baseColor);\n    searchParams.set('variations', variations);\n    var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();\n    window.history.replaceState({\n      path: newurl\n    }, '', newurl);\n  }, [baseColor, variations]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 3\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: \"Complimentary Colors\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 4\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-4 gap-4 mb-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: baseColor,\n    label: \"Base color\",\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    position: \"middle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 6\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Variations\",\n    value: variations,\n    onChange: function onChange(value) {\n      return setVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 6\n    }\n  })), __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 5\n    }\n  }, renderGeneratedColors(baseColor, variations))));\n};\n\n_s(ComplimentaryColors, \"DeWwk2i9qRgwpB+5O5M1EOu443g=\");\n\n_c = ComplimentaryColors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComplimentaryColors);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComplimentaryColors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGxpbWVudGFyeS1jb2xvcnMvaW5kZXguanM/OGY4MiJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJyZW5kZXJHZW5lcmF0ZWRDb2xvcnMiLCJiYXNlQ29sb3IiLCJ2YXJpYXRpb25zIiwiY29sb3JzIiwiZ2V0Q29tcGxpbWVudGFyeUNvbG9ycyIsImxlbmd0aCIsIm1hcCIsImNvbG9yIiwiaSIsIm5hbWUiLCJoZXgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsIkNvbXBsaW1lbnRhcnlDb2xvcnMiLCJ1c2VTdGF0ZSIsInNldEJhc2VDb2xvciIsInNldFZhcmlhdGlvbnMiLCJ1c2VFZmZlY3QiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImJhc2UiLCJnZXQiLCJ2YXJzIiwic2VhcmNoUGFyYW1zIiwic2V0IiwibmV3dXJsIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNaO0FBQUNDLElBQUUsRUFBRSxhQUFMO0FBQW9CQyxNQUFJLEVBQUUsY0FBMUI7QUFBMENDLE9BQUssRUFBRTtBQUFqRCxDQURZLEVBRVo7QUFDQ0YsSUFBRSxFQUFFLHNCQURMO0FBRUNDLE1BQUkseUJBRkw7QUFHQ0MsT0FBSyxFQUFFO0FBSFIsQ0FGWSxDQUFiO0FBUUEsSUFBTUMsWUFBWSxHQUFHLHNCQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLFNBQUQsRUFBWUMsVUFBWixFQUEyQjtBQUN4RCxNQUFNQyxNQUFN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LWNvbG9ycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBCYXNlQ29sb3JQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlQ29sb3JQaWNrZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IHtnZXRDb21wbGltZW50YXJ5Q29sb3JzfSBmcm9tICcuLi8uLi9saWIvY29sb3ItZ2VuZXJhdG9yL2dlbmVyYXRlQ29sb3JzJztcbmltcG9ydCBDb3B5VmFsdWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db3B5VmFsdWUnO1xuXG5jb25zdCBwYXRoID0gW1xuXHR7aWQ6ICdjb2xvci10b29scycsIGhyZWY6ICcvY29sb3ItdG9vbHMnLCBsYWJlbDogJ0NvbG9yIFRvb2xzJ30sXG5cdHtcblx0XHRpZDogJ2NvbXBsaW1lbnRhcnktY29sb3JzJyxcblx0XHRocmVmOiBgL2NvbXBsaW1lbnRhcnktY29sb3JzYCxcblx0XHRsYWJlbDogJ0NvbXBsaW1lbnRhcnkgQ29sb3JzJyxcblx0fSxcbl07XG5jb25zdCBzZWxlY3RlZFBhdGggPSAnY29tcGxpbWVudGFyeS1jb2xvcnMnO1xuXG5jb25zdCByZW5kZXJHZW5lcmF0ZWRDb2xvcnMgPSAoYmFzZUNvbG9yLCB2YXJpYXRpb25zKSA9PiB7XG5cdGNvbnN0IGNvbG9ycyA9IGdldENvbXBsaW1lbnRhcnlDb2xvcnMoYmFzZUNvbG9yLCB2YXJpYXRpb25zKTtcblxuXHRpZiAoY29sb3JzICYmIGNvbG9ycy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gY29sb3JzLm1hcCgoY29sb3IsIGkpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgdGl0bGU9e2NvbG9yLm5hbWV9IGtleT17Y29sb3IuaGV4ICsgaX0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmhleH19PjwvZGl2PlxuXHRcdFx0XHRcdDxDb3B5VmFsdWUgdmFsdWU9e2NvbG9yLmhleH0+XG5cdFx0XHRcdFx0XHQ8c21hbGwgc3R5bGU9e3tmb250U2l6ZTogJzEwcHgnfX0+e2NvbG9yLmhleH08L3NtYWxsPlxuXHRcdFx0XHRcdDwvQ29weVZhbHVlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNSd9fT48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbmNvbnN0IENvbXBsaW1lbnRhcnlDb2xvcnMgPSAoKSA9PiB7XG5cdGNvbnN0IFtiYXNlQ29sb3IsIHNldEJhc2VDb2xvcl0gPSB1c2VTdGF0ZSgnIzY2YTBjZScpO1xuXHRjb25zdCBbdmFyaWF0aW9ucywgc2V0VmFyaWF0aW9uc10gPSB1c2VTdGF0ZSgnNScpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcblx0XHRjb25zdCBiYXNlID0gdXJsUGFyYW1zLmdldCgnYmFzZUNvbG9yJyk7XG5cdFx0Y29uc3QgdmFycyA9IHVybFBhcmFtcy5nZXQoJ3ZhcmlhdGlvbnMnKTtcblxuXHRcdGlmIChiYXNlICYmIHZhcnMpIHtcblx0XHRcdHNldEJhc2VDb2xvcihiYXNlKTtcblx0XHRcdHNldFZhcmlhdGlvbnModmFycyk7XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cdFx0c2VhcmNoUGFyYW1zLnNldCgnYmFzZUNvbG9yJywgYmFzZUNvbG9yKTtcblx0XHRzZWFyY2hQYXJhbXMuc2V0KCd2YXJpYXRpb25zJywgdmFyaWF0aW9ucyk7XG5cblx0XHRsZXQgbmV3dXJsID1cblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArXG5cdFx0XHQnLy8nICtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ob3N0ICtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArXG5cdFx0XHQnPycgK1xuXHRcdFx0c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCk7XG5cdFx0d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHtwYXRoOiBuZXd1cmx9LCAnJywgbmV3dXJsKTtcblx0fSwgW2Jhc2VDb2xvciwgdmFyaWF0aW9uc10pO1xuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFBhZ2VIZWFkZXJcblx0XHRcdFx0bGFiZWw9XCJDb21wbGltZW50YXJ5IENvbG9yc1wiXG5cdFx0XHRcdHBhdGg9e3BhdGh9XG5cdFx0XHRcdHNlbGVjdGVkUGF0aD17c2VsZWN0ZWRQYXRofVxuXHRcdFx0XHR3aWRlXG5cdFx0XHQvPlxuXHRcdFx0PFBhZ2Ugd2lkZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC00IG1iLTVcIj5cblx0XHRcdFx0XHQ8QmFzZUNvbG9yUGlja2VyXG5cdFx0XHRcdFx0XHR2YWx1ZT17YmFzZUNvbG9yfVxuXHRcdFx0XHRcdFx0bGFiZWw9XCJCYXNlIGNvbG9yXCJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoY29sb3IpID0+IHNldEJhc2VDb2xvcihjb2xvcil9XG5cdFx0XHRcdFx0XHRwb3NpdGlvbj1cIm1pZGRsZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdGxhYmVsPVwiVmFyaWF0aW9uc1wiXG5cdFx0XHRcdFx0XHR2YWx1ZT17dmFyaWF0aW9uc31cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldFZhcmlhdGlvbnModmFsdWUpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdFx0XHR7cmVuZGVyR2VuZXJhdGVkQ29sb3JzKGJhc2VDb2xvciwgdmFyaWF0aW9ucyl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9QYWdlPlxuXHRcdDwvRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGltZW50YXJ5Q29sb3JzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/complimentary-colors/index.js\n");

/***/ })

})