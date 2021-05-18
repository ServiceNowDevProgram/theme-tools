webpackHotUpdate_N_E("pages/color-generator-p",{

/***/ "./components/colors/ColorSwatch.js":
/*!******************************************!*\
  !*** ./components/colors/ColorSwatch.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CopyValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CopyValue */ \"./components/CopyValue.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/components/colors/ColorSwatch.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ColorSwatch = function ColorSwatch(_ref) {\n  var items = _ref.items,\n      hideName = _ref.hideName;\n  return __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, items && items.length ? items.map(function (color) {\n    var name = color.name.split('-');\n    name = name[name.length - 1];\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      title: color.name,\n      key: color.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: color.hex\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 8\n      }\n    }), !hideName ? __jsx(_CopyValue__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      value: color.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 22\n      }\n    }, __jsx(\"small\", {\n      style: {\n        fontSize: '10px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }, name)) : null, __jsx(_CopyValue__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      value: color.hex,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 8\n      }\n    }, __jsx(\"small\", {\n      style: {\n        fontSize: '10px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }\n    }, color.hex)));\n  }) : __jsx(\"div\", {\n    className: \"flex-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: '80px',\n      backgroundColor: '#f5f5f5'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 6\n    }\n  })));\n};\n\n_c = ColorSwatch;\nColorSwatch.propTypes = {\n  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    hex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  })),\n  hideName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwatch);\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorSwatch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xvcnMvQ29sb3JTd2F0Y2guanM/YmYxMyJdLCJuYW1lcyI6WyJDb2xvclN3YXRjaCIsIml0ZW1zIiwiaGlkZU5hbWUiLCJsZW5ndGgiLCJtYXAiLCJjb2xvciIsIm5hbWUiLCJzcGxpdCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImhleCIsImZvbnRTaXplIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXVCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUMxQyxTQUNDO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsTUFBZixHQUNBRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxLQUFELEVBQVc7QUFDcEIsUUFBSUMsSUFBSSxHQUFHRCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBWCxDQUFpQixHQUFqQixDQUFYO0FBQ0FELFFBQUksR0FBR0EsSUFBSSxDQUFDQSxJQUFJLENBQUNILE1BQUwsR0FBYyxDQUFmLENBQVg7QUFDQSxXQUNDO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBd0IsV0FBSyxFQUFFRSxLQUFLLENBQUNDLElBQXJDO0FBQTJDLFNBQUcsRUFBRUQsS0FBSyxDQUFDQyxJQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBSyxXQUFLLEVBQUU7QUFBQ0UsY0FBTSxFQUFFLE1BQVQ7QUFBaUJDLHVCQUFlLEVBQUVKLEtBQUssQ0FBQ0s7QUFBeEMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsRUFFRSxDQUFDUixRQUFELEdBQWEsTUFBQyxrREFBRDtBQUFXLFdBQUssRUFBRUcsS0FBSyxDQUFDQyxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ2I7QUFBTyxXQUFLLEVBQUU7QUFBQ0ssZ0JBQVEsRUFBRTtBQUFYLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQ0wsSUFBbkMsQ0FEYSxDQUFiLEdBRWUsSUFKakIsRUFLQyxNQUFDLGtEQUFEO0FBQVcsV0FBSyxFQUFFRCxLQUFLLENBQUNLLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFPLFdBQUssRUFBRTtBQUFDQyxnQkFBUSxFQUFFO0FBQVgsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1DTixLQUFLLENBQUNLLEdBQXpDLENBREQsQ0FMRCxDQUREO0FBV0EsR0FkRCxDQURBLEdBaUJBO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssU0FBSyxFQUFFO0FBQUNGLFlBQU0sRUFBRSxNQUFUO0FBQWlCQyxxQkFBZSxFQUFFO0FBQWxDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBbEJGLENBREQ7QUF5QkEsQ0ExQkQ7O0tBQU1ULFc7QUE0Qk5BLFdBQVcsQ0FBQ1ksU0FBWixHQUF3QjtBQUN2QlgsT0FBSyxFQUFFWSxpREFBUyxDQUFDQyxPQUFWLENBQ05ELGlEQUFTLENBQUNFLEtBQVYsQ0FBZ0I7QUFDZlQsUUFBSSxFQUFFTyxpREFBUyxDQUFDRyxNQUREO0FBRWZOLE9BQUcsRUFBRUcsaURBQVMsQ0FBQ0c7QUFGQSxHQUFoQixDQURNLENBRGdCO0FBT3ZCZCxVQUFRLEVBQUVXLGlEQUFTLENBQUNHO0FBUEcsQ0FBeEI7QUFVZWhCLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb2xvcnMvQ29sb3JTd2F0Y2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3B5VmFsdWUgZnJvbSAnLi4vQ29weVZhbHVlJztcblxuY29uc3QgQ29sb3JTd2F0Y2ggPSAoe2l0ZW1zLCBoaWRlTmFtZX0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cblx0XHRcdHtpdGVtcyAmJiBpdGVtcy5sZW5ndGggPyAoXG5cdFx0XHRcdGl0ZW1zLm1hcCgoY29sb3IpID0+IHtcblx0XHRcdFx0XHRsZXQgbmFtZSA9IGNvbG9yLm5hbWUuc3BsaXQoJy0nKTtcblx0XHRcdFx0XHRuYW1lID0gbmFtZVtuYW1lLmxlbmd0aCAtIDFdO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiIHRpdGxlPXtjb2xvci5uYW1lfSBrZXk9e2NvbG9yLm5hbWV9PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnODBweCcsIGJhY2tncm91bmRDb2xvcjogY29sb3IuaGV4fX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHshaGlkZU5hbWUgPyAoPENvcHlWYWx1ZSB2YWx1ZT17Y29sb3IubmFtZX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4J319PntuYW1lfTwvc21hbGw+XG5cdFx0XHRcdFx0XHRcdDwvQ29weVZhbHVlPikgOiBudWxsfVxuXHRcdFx0XHRcdFx0XHQ8Q29weVZhbHVlIHZhbHVlPXtjb2xvci5oZXh9PlxuXHRcdFx0XHRcdFx0XHRcdDxzbWFsbCBzdHlsZT17e2ZvbnRTaXplOiAnMTBweCd9fT57Y29sb3IuaGV4fTwvc21hbGw+XG5cdFx0XHRcdFx0XHRcdDwvQ29weVZhbHVlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17e2hlaWdodDogJzgwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjVmNWY1J319PjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5Db2xvclN3YXRjaC5wcm9wVHlwZXMgPSB7XG5cdGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihcblx0XHRQcm9wVHlwZXMuc2hhcGUoe1xuXHRcdFx0bmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblx0XHRcdGhleDogUHJvcFR5cGVzLnN0cmluZyxcblx0XHR9KVxuXHQpLFxuXHRoaWRlTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JTd2F0Y2g7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/colors/ColorSwatch.js\n");

/***/ })

})