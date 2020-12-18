webpackHotUpdate_N_E("pages/complimentary-colors",{

/***/ "./pages/complimentary-colors/index.js":
/*!*********************************************!*\
  !*** ./pages/complimentary-colors/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/BaseColorPicker */ \"./components/BaseColorPicker.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color-generator/generateColors */ \"./lib/color-generator/generateColors.js\");\n/* harmony import */ var _components_CopyValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/CopyValue */ \"./components/CopyValue.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/complimentary-colors/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar path = [{\n  id: 'color-tools',\n  href: '/color-tools',\n  label: 'Color Tools'\n}, {\n  id: 'complimentary-colors',\n  href: \"/complimentary-colors\",\n  label: 'Complimentary Colors'\n}];\nvar selectedPath = 'complimentary-colors';\n\nvar renderGeneratedColors = function renderGeneratedColors(baseColor, variations) {\n  var colors = Object(_lib_color_generator_generateColors__WEBPACK_IMPORTED_MODULE_5__[\"getComplimentaryColors\"])(baseColor, variations);\n\n  if (colors && colors.length) {\n    return colors.map(function (color) {\n      return __jsx(\"div\", {\n        className: \"flex-1\",\n        title: color.name,\n        key: color.hex,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 5\n        }\n      }, __jsx(\"div\", {\n        style: {\n          height: '80px',\n          backgroundColor: color.hex\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 6\n        }\n      }), __jsx(_components_CopyValue__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        value: color.hex,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }\n      }, __jsx(\"small\", {\n        style: {\n          fontSize: '10px'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 7\n        }\n      }, color.hex)));\n    });\n  } else {\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 4\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: '#f5f5f5'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }\n    }));\n  }\n};\n\nvar ComplimentaryColors = function ComplimentaryColors() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('#66a0ce'),\n      baseColor = _useState[0],\n      setBaseColor = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('3'),\n      variations = _useState2[0],\n      setVariations = _useState2[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: \"Complimentary Colors\",\n    path: path,\n    selectedPath: selectedPath,\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    wide: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"grid grid-cols-4 gap-4 mb-5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_components_BaseColorPicker__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: baseColor,\n    label: \"Base color\",\n    onChange: function onChange(color) {\n      return setBaseColor(color);\n    },\n    position: \"middle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Variations\",\n    value: variations,\n    onChange: function onChange(value) {\n      return setVariations(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, renderGeneratedColors(baseColor, variations))));\n};\n\n_s(ComplimentaryColors, \"Sf8RdVw1zgnGSN9RIivBObaoMx8=\");\n\n_c = ComplimentaryColors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComplimentaryColors);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComplimentaryColors\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcGxpbWVudGFyeS1jb2xvcnMvaW5kZXguanM/OGY4MiJdLCJuYW1lcyI6WyJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJyZW5kZXJHZW5lcmF0ZWRDb2xvcnMiLCJiYXNlQ29sb3IiLCJ2YXJpYXRpb25zIiwiY29sb3JzIiwiZ2V0Q29tcGxpbWVudGFyeUNvbG9ycyIsImxlbmd0aCIsIm1hcCIsImNvbG9yIiwibmFtZSIsImhleCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiQ29tcGxpbWVudGFyeUNvbG9ycyIsInVzZVN0YXRlIiwic2V0QmFzZUNvbG9yIiwic2V0VmFyaWF0aW9ucyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1o7QUFBQ0MsSUFBRSxFQUFFLGFBQUw7QUFBb0JDLE1BQUksRUFBRSxjQUExQjtBQUEwQ0MsT0FBSyxFQUFFO0FBQWpELENBRFksRUFFWjtBQUFDRixJQUFFLEVBQUUsc0JBQUw7QUFBNkJDLE1BQUkseUJBQWpDO0FBQTREQyxPQUFLLEVBQUU7QUFBbkUsQ0FGWSxDQUFiO0FBSUEsSUFBTUMsWUFBWSxHQUFHLHNCQUFyQjs7QUFFQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQzdCQyxTQUQ2QixFQUU1QkMsVUFGNEIsRUFHekI7QUFDSCxNQUFNQyxNQUFNLEdBQUdDLGtHQUFzQixDQUFDSCxTQUFELEVBQVlDLFVBQVosQ0FBckM7O0FBRUQsTUFBSUMsTUFBTSxJQUFJQSxNQUFNLENBQUNFLE1BQXJCLEVBQTZCO0FBQzVCLFdBQU9GLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLEtBQUQsRUFBVztBQUM1QixhQUNDO0FBQUssaUJBQVMsRUFBQyxRQUFmO0FBQXdCLGFBQUssRUFBRUEsS0FBSyxDQUFDQyxJQUFyQztBQUEyQyxXQUFHLEVBQUVELEtBQUssQ0FBQ0UsR0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUUsTUFBVDtBQUFpQkMseUJBQWUsRUFBRUosS0FBSyxDQUFDRTtBQUF4QyxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxFQUVDLE1BQUMsNkRBQUQ7QUFBVyxhQUFLLEVBQUVGLEtBQUssQ0FBQ0UsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQU8sYUFBSyxFQUFFO0FBQUNHLGtCQUFRLEVBQUU7QUFBWCxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBbUNMLEtBQUssQ0FBQ0UsR0FBekMsQ0FERCxDQUZELENBREQ7QUFRQSxLQVRNLENBQVA7QUFVQSxHQVhELE1BV087QUFDTixXQUNDO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUssV0FBSyxFQUFFO0FBQUNDLGNBQU0sRUFBRSxNQUFUO0FBQWlCQyx1QkFBZSxFQUFFO0FBQWxDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELENBREQ7QUFLQTtBQUNELENBeEJEOztBQTBCQSxJQUFNRSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFBQTs7QUFBQSxrQkFFRUMsc0RBQVEsQ0FBQyxTQUFELENBRlY7QUFBQSxNQUV6QmIsU0FGeUI7QUFBQSxNQUVkYyxZQUZjOztBQUFBLG1CQUdJRCxzREFBUSxDQUFDLEdBQUQsQ0FIWjtBQUFBLE1BR3pCWixVQUh5QjtBQUFBLE1BR2JjLGFBSGE7O0FBS2hDLFNBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUNGLFNBQUssRUFBQyxzQkFESjtBQUVGLFFBQUksRUFBRXJCLElBRko7QUFHRixnQkFBWSxFQUFFSSxZQUhaO0FBSUYsUUFBSSxNQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU9FLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFRSxTQURUO0FBRUUsU0FBSyxFQUFDLFlBRlI7QUFHRSxZQUFRLEVBQUUsa0JBQUFNLEtBQUs7QUFBQSxhQUFJUSxZQUFZLENBQUNSLEtBQUQsQ0FBaEI7QUFBQSxLQUhqQjtBQUlFLFlBQVEsRUFBQyxRQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1JLE1BQUMseURBQUQ7QUFBTyxTQUFLLEVBQUMsWUFBYjtBQUEwQixTQUFLLEVBQUVMLFVBQWpDO0FBQTZDLFlBQVEsRUFBRSxrQkFBQWUsS0FBSztBQUFBLGFBQUlELGFBQWEsQ0FBQ0MsS0FBRCxDQUFqQjtBQUFBLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dqQixxQkFBcUIsQ0FBQ0MsU0FBRCxFQUFZQyxVQUFaLENBRHhCLENBVEYsQ0FQRixDQURGO0FBd0JELENBN0JEOztHQUFNVyxtQjs7S0FBQUEsbUI7QUErQlNBLGtGQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcGxpbWVudGFyeS1jb2xvcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyJztcbmltcG9ydCBQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZSc7XG5pbXBvcnQgQmFzZUNvbG9yUGlja2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFzZUNvbG9yUGlja2VyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCB7IGdldENvbXBsaW1lbnRhcnlDb2xvcnMgfSBmcm9tICcuLi8uLi9saWIvY29sb3ItZ2VuZXJhdG9yL2dlbmVyYXRlQ29sb3JzJztcbmltcG9ydCBDb3B5VmFsdWUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db3B5VmFsdWUnO1xuXG5jb25zdCBwYXRoID0gW1xuXHR7aWQ6ICdjb2xvci10b29scycsIGhyZWY6ICcvY29sb3ItdG9vbHMnLCBsYWJlbDogJ0NvbG9yIFRvb2xzJ30sXG5cdHtpZDogJ2NvbXBsaW1lbnRhcnktY29sb3JzJywgaHJlZjogYC9jb21wbGltZW50YXJ5LWNvbG9yc2AsIGxhYmVsOiAnQ29tcGxpbWVudGFyeSBDb2xvcnMnfSxcbl07XG5jb25zdCBzZWxlY3RlZFBhdGggPSAnY29tcGxpbWVudGFyeS1jb2xvcnMnO1xuXG5jb25zdCByZW5kZXJHZW5lcmF0ZWRDb2xvcnMgPSAoXG5cdGJhc2VDb2xvcixcbiAgdmFyaWF0aW9uc1xuKSA9PiB7XG4gIGNvbnN0IGNvbG9ycyA9IGdldENvbXBsaW1lbnRhcnlDb2xvcnMoYmFzZUNvbG9yLCB2YXJpYXRpb25zKTtcblxuXHRpZiAoY29sb3JzICYmIGNvbG9ycy5sZW5ndGgpIHtcblx0XHRyZXR1cm4gY29sb3JzLm1hcCgoY29sb3IpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgdGl0bGU9e2NvbG9yLm5hbWV9IGtleT17Y29sb3IuaGV4fT5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnODBweCcsIGJhY2tncm91bmRDb2xvcjogY29sb3IuaGV4fX0+PC9kaXY+XG5cdFx0XHRcdFx0PENvcHlWYWx1ZSB2YWx1ZT17Y29sb3IuaGV4fT5cblx0XHRcdFx0XHRcdDxzbWFsbCBzdHlsZT17e2ZvbnRTaXplOiAnMTBweCd9fT57Y29sb3IuaGV4fTwvc21hbGw+XG5cdFx0XHRcdFx0PC9Db3B5VmFsdWU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cblx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1J319PjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufTtcblxuY29uc3QgQ29tcGxpbWVudGFyeUNvbG9ycyA9ICgpID0+IHtcblxuICBjb25zdCBbYmFzZUNvbG9yLCBzZXRCYXNlQ29sb3JdID0gdXNlU3RhdGUoJyM2NmEwY2UnKTtcbiAgY29uc3QgW3ZhcmlhdGlvbnMsIHNldFZhcmlhdGlvbnNdID0gdXNlU3RhdGUoJzMnKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQYWdlSGVhZGVyXG5cdFx0XHRcdGxhYmVsPVwiQ29tcGxpbWVudGFyeSBDb2xvcnNcIlxuXHRcdFx0XHRwYXRoPXtwYXRofVxuXHRcdFx0XHRzZWxlY3RlZFBhdGg9e3NlbGVjdGVkUGF0aH1cblx0XHRcdFx0d2lkZVxuXHRcdFx0Lz5cbiAgICAgIDxQYWdlIHdpZGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNCBtYi01XCI+XG4gICAgICAgICAgPEJhc2VDb2xvclBpY2tlclxuICAgICAgICAgICAgdmFsdWU9e2Jhc2VDb2xvcn1cbiAgICAgICAgICAgIGxhYmVsPVwiQmFzZSBjb2xvclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17Y29sb3IgPT4gc2V0QmFzZUNvbG9yKGNvbG9yKX1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwibWlkZGxlXCIgLz5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlZhcmlhdGlvbnNcIiB2YWx1ZT17dmFyaWF0aW9uc30gb25DaGFuZ2U9e3ZhbHVlID0+IHNldFZhcmlhdGlvbnModmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAge3JlbmRlckdlbmVyYXRlZENvbG9ycyhiYXNlQ29sb3IsIHZhcmlhdGlvbnMpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9QYWdlPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wbGltZW50YXJ5Q29sb3JzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/complimentary-colors/index.js\n");

/***/ })

})