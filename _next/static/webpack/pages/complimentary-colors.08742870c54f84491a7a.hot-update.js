webpackHotUpdate_N_E("pages/complimentary-colors",{

/***/ "./pages/complimentary-colors/index.js":
/*!*********************************************!*\
  !*** ./pages/complimentary-colors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color-generator/generateColors */ \"./lib/color-generator/generateColors.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/complimentary-colors/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'complimentary-colors',\n  href: \"/complimentary-colors\",\n  label: 'Complimentary Colors'\n}];\nvar selectedPath = 'complimentary-colors';\n\nvar renderGeneratedColors = function renderGeneratedColors(baseColor, variations) {\n  var colors = Object(_lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_5__[\"getComplimentaryColors\"])(baseColor, variations);\n\n  if (colors && colors.length) {\n    return colors.map(function (color) {\n      return __jsx(\"div\", {\n        className: \"flex-1\",\n        title: color.name,\n        key: color.name,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 5\n        }\n      }, __jsx(\"div\", {\n        style: {\n          height: '80px',\n          backgroundColor: color.hex\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 6\n        }\n      }), __jsx(CopyValue, {\n        value: color.hex,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 6\n        }\n      }, __jsx(\"small\", {\n        style: {\n          fontSize: '10px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 7\n        }\n      }, color.hex)));\n    });\n  } else {\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 4\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: '#f5f5f5'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 5\n      }\n    }));\n  }\n};\n\nvar ComplimentaryColors = function ComplimentaryColors() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#ffffff'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('2'),\n      variations = _useState2[0],\n      setVariations = _useState2[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: \"Complimentary Colors\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-4 gap-4 mb-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: baseColor,\n    label: \"Base color\",\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    position: \"middle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Variations\",\n    value: variations,\n    onChange: function onChange(value) {\n      return setVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, renderGeneratedColors(baseColor, variations))));\n};\n\n_s(ComplimentaryColors, \"c1uUa40U5VCmC1VWppcPkxztGMw=\");\n\n_c = ComplimentaryColors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComplimentaryColors);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComplimentaryColors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGxpbWVudGFyeS1jb2xvcnMvaW5kZXguanM/OGY4MiJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJyZW5kZXJHZW5lcmF0ZWRDb2xvcnMiLCJiYXNlQ29sb3IiLCJ2YXJpYXRpb25zIiwiY29sb3JzIiwiZ2V0Q29tcGxpbWVudGFyeUNvbG9ycyIsImxlbmd0aCIsIm1hcCIsImNvbG9yIiwibmFtZSIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImhleCIsImZvbnRTaXplIiwiQ29tcGxpbWVudGFyeUNvbG9ycyIsInVzZVN0YXRlIiwic2V0QmFzZUNvbG9yIiwic2V0VmFyaWF0aW9ucyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1o7QUFBQ0MsSUFBRSxFQUFFLGFBQUw7QUFBb0JDLE1BQUksRUFBRSxjQUExQjtBQUEwQ0MsT0FBSyxFQUFFO0FBQWpELENBRFksRUFFWjtBQUFDRixJQUFFLEVBQUUsc0JBQUw7QUFBNkJDLE1BQUkseUJBQWpDO0FBQTREQyxPQUFLLEVBQUU7QUFBbkUsQ0FGWSxDQUFiO0FBSUEsSUFBTUMsWUFBWSxHQUFHLHNCQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQzdCQyxTQUQ2QixFQUU1QkMsVUFGNEIsRUFHekI7QUFDSCxNQUFNQyxNQUFNLEdBQUdDLGtHQUFzQixDQUFDSCxTQUFELEVBQVlDLFVBQVosQ0FBckM7O0FBRUQsTUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNFLE1BQXJCLEVBQTZCO0FBQzVCLFdBQU9GLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUM1QixhQUNDO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQXdCLGFBQUssRUFBRUEsS0FBSyxDQUFDQyxJQUFyQztBQUEyQyxXQUFHLEVBQUVELEtBQUssQ0FBQ0MsSUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUUsTUFBVDtBQUFpQkMseUJBQWUsRUFBRUgsS0FBSyxDQUFDSTtBQUF4QyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQUVDLE1BQUMsU0FBRDtBQUFXLGFBQUssRUFBRUosS0FBSyxDQUFDSSxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBTyxhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBRTtBQUFYLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFtQ0wsS0FBSyxDQUFDSSxHQUF6QyxDQURELENBRkQsQ0FERDtBQVFBLEtBVE0sQ0FBUDtBQVVBLEdBWEQsTUFXTztBQUNOLFdBQ0M7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSyxXQUFLLEVBQUU7QUFBQ0YsY0FBTSxFQUFFLE1BQVQ7QUFBaUJDLHVCQUFlLEVBQUU7QUFBbEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsQ0FERDtBQUtBO0FBQ0QsQ0F4QkQ7O0FBMEJBLElBQU1HLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUFBOztBQUFBLGtCQUVFQyxzREFBUSxDQUFDLFNBQUQsQ0FGVjtBQUFBLE1BRXpCYixTQUZ5QjtBQUFBLE1BRWRjLFlBRmM7O0FBQUEsbUJBR0lELHNEQUFRLENBQUMsR0FBRCxDQUhaO0FBQUEsTUFHekJaLFVBSHlCO0FBQUEsTUFHYmMsYUFIYTs7QUFLaEMsU0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQ0YsU0FBSyxFQUFDLHNCQURKO0FBRUYsUUFBSSxFQUFFckIsSUFGSjtBQUdGLGdCQUFZLEVBQUVJLFlBSFo7QUFJRixRQUFJLE1BSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyx3REFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsbUVBQUQ7QUFDRSxTQUFLLEVBQUVFLFNBRFQ7QUFFRSxTQUFLLEVBQUMsWUFGUjtBQUdFLFlBQVEsRUFBRSxrQkFBQU0sS0FBSztBQUFBLGFBQUlRLFlBQVksQ0FBQ1IsS0FBRCxDQUFoQjtBQUFBLEtBSGpCO0FBSUUsWUFBUSxFQUFDLFFBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBT0ksTUFBQyx5REFBRDtBQUFPLFNBQUssRUFBQyxZQUFiO0FBQTBCLFNBQUssRUFBRUwsVUFBakM7QUFBNkMsWUFBUSxFQUFFLGtCQUFBZSxLQUFLO0FBQUEsYUFBSUQsYUFBYSxDQUFDQyxLQUFELENBQWpCO0FBQUEsS0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBREYsRUFVRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2pCLHFCQUFxQixDQUFDQyxTQUFELEVBQVlDLFVBQVosQ0FEeEIsQ0FWRixDQVBGLENBREY7QUF5QkQsQ0E5QkQ7O0dBQU1XLG1COztLQUFBQSxtQjtBQWdDU0Esa0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wbGltZW50YXJ5LWNvbG9ycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBCYXNlQ29sb3JQaWNrZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYXNlQ29sb3JQaWNrZXInO1xuaW1wb3J0IElucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IHsgZ2V0Q29tcGxpbWVudGFyeUNvbG9ycyB9IGZyb20gJy4uLy4uL2xpYi9jb2xvci1nZW5lcmF0b3IvZ2VuZXJhdGVDb2xvcnMnO1xuXG5jb25zdCBwYXRoID0gW1xuXHR7aWQ6ICdjb2xvci10b29scycsIGhyZWY6ICcvY29sb3ItdG9vbHMnLCBsYWJlbDogJ0NvbG9yIFRvb2xzJ30sXG5cdHtpZDogJ2NvbXBsaW1lbnRhcnktY29sb3JzJywgaHJlZjogYC9jb21wbGltZW50YXJ5LWNvbG9yc2AsIGxhYmVsOiAnQ29tcGxpbWVudGFyeSBDb2xvcnMnfSxcbl07XG5jb25zdCBzZWxlY3RlZFBhdGggPSAnY29tcGxpbWVudGFyeS1jb2xvcnMnO1xuXG5jb25zdCByZW5kZXJHZW5lcmF0ZWRDb2xvcnMgPSAoXG5cdGJhc2VDb2xvcixcbiAgdmFyaWF0aW9uc1xuKSA9PiB7XG4gIGNvbnN0IGNvbG9ycyA9IGdldENvbXBsaW1lbnRhcnlDb2xvcnMoYmFzZUNvbG9yLCB2YXJpYXRpb25zKTtcblxuXHRpZiAoY29sb3JzICYmIGNvbG9ycy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gY29sb3JzLm1hcCgoY29sb3IpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgdGl0bGU9e2NvbG9yLm5hbWV9IGtleT17Y29sb3IubmFtZX0+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLmhleH19PjwvZGl2PlxuXHRcdFx0XHRcdDxDb3B5VmFsdWUgdmFsdWU9e2NvbG9yLmhleH0+XG5cdFx0XHRcdFx0XHQ8c21hbGwgc3R5bGU9e3tmb250U2l6ZTogJzEwcHgnfX0+e2NvbG9yLmhleH08L3NtYWxsPlxuXHRcdFx0XHRcdDwvQ29weVZhbHVlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNSd9fT48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn07XG5cbmNvbnN0IENvbXBsaW1lbnRhcnlDb2xvcnMgPSAoKSA9PiB7XG5cbiAgY29uc3QgW2Jhc2VDb2xvciwgc2V0QmFzZUNvbG9yXSA9IHVzZVN0YXRlKCcjZmZmZmZmJyk7XG4gIGNvbnN0IFt2YXJpYXRpb25zLCBzZXRWYXJpYXRpb25zXSA9IHVzZVN0YXRlKCcyJylcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQYWdlSGVhZGVyXG5cdFx0XHRcdGxhYmVsPVwiQ29tcGxpbWVudGFyeSBDb2xvcnNcIlxuXHRcdFx0XHRwYXRoPXtwYXRofVxuXHRcdFx0XHRzZWxlY3RlZFBhdGg9e3NlbGVjdGVkUGF0aH1cblx0XHRcdFx0d2lkZVxuXHRcdFx0Lz5cbiAgICAgIDxQYWdlIHdpZGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNCBtYi01XCI+XG5cbiAgICAgICAgICA8QmFzZUNvbG9yUGlja2VyXG4gICAgICAgICAgICB2YWx1ZT17YmFzZUNvbG9yfVxuICAgICAgICAgICAgbGFiZWw9XCJCYXNlIGNvbG9yXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtjb2xvciA9PiBzZXRCYXNlQ29sb3IoY29sb3IpfVxuICAgICAgICAgICAgcG9zaXRpb249XCJtaWRkbGVcIiAvPlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVmFyaWF0aW9uc1wiIHZhbHVlPXt2YXJpYXRpb25zfSBvbkNoYW5nZT17dmFsdWUgPT4gc2V0VmFyaWF0aW9ucyh2YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICB7cmVuZGVyR2VuZXJhdGVkQ29sb3JzKGJhc2VDb2xvciwgdmFyaWF0aW9ucyl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICA8L1BhZ2U+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBsaW1lbnRhcnlDb2xvcnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/complimentary-colors/index.js\n");

/***/ })

})