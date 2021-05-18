webpackHotUpdate_N_E("pages/color-generator-advanced",{

/***/ "./components/colors/ColorSwatch.js":
/*!******************************************!*\
  !*** ./components/colors/ColorSwatch.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CopyValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CopyValue */ \"./components/CopyValue.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/components/colors/ColorSwatch.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ColorSwatch = function ColorSwatch(_ref) {\n  var items = _ref.items;\n  return __jsx(\"div\", {\n    className: \"flex\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 3\n    }\n  }, items && items.length ? items.map(function (color) {\n    var num = color.name.split('--');\n    num = num[num.length - 1];\n    return __jsx(\"div\", {\n      className: \"flex-1\",\n      title: color.name,\n      key: color.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }, __jsx(\"div\", {\n      style: {\n        height: '80px',\n        backgroundColor: color.hex\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 8\n      }\n    }), __jsx(_CopyValue__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      value: color.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 8\n      }\n    }, __jsx(\"small\", {\n      style: {\n        fontSize: '10px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }, num)), __jsx(_CopyValue__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      value: color.hex,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 8\n      }\n    }, __jsx(\"small\", {\n      style: {\n        fontSize: '10px'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }\n    }, color.hex)));\n  }) : __jsx(\"div\", {\n    className: \"flex-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: {\n      height: '80px',\n      backgroundColor: '#f5f5f5'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 6\n    }\n  })));\n};\n\n_c = ColorSwatch;\nColorSwatch.propTypes = {\n  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    hex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n  }))\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorSwatch);\n\nvar _c;\n\n$RefreshReg$(_c, \"ColorSwatch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xvcnMvQ29sb3JTd2F0Y2guanM/YmYxMyJdLCJuYW1lcyI6WyJDb2xvclN3YXRjaCIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwiY29sb3IiLCJudW0iLCJuYW1lIiwic3BsaXQiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZXgiLCJmb250U2l6ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFhO0FBQUEsTUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ2hDLFNBQ0M7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VBLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxNQUFmLEdBQ0FELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLEtBQUQsRUFBVztBQUNwQixRQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxLQUFYLENBQWlCLElBQWpCLENBQVY7QUFDQUYsT0FBRyxHQUFHQSxHQUFHLENBQUNBLEdBQUcsQ0FBQ0gsTUFBSixHQUFhLENBQWQsQ0FBVDtBQUNBLFdBQ0M7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUF3QixXQUFLLEVBQUVFLEtBQUssQ0FBQ0UsSUFBckM7QUFBMkMsU0FBRyxFQUFFRixLQUFLLENBQUNFLElBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFLLFdBQUssRUFBRTtBQUFDRSxjQUFNLEVBQUUsTUFBVDtBQUFpQkMsdUJBQWUsRUFBRUwsS0FBSyxDQUFDTTtBQUF4QyxPQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxFQUVDLE1BQUMsa0RBQUQ7QUFBVyxXQUFLLEVBQUVOLEtBQUssQ0FBQ0UsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQU8sV0FBSyxFQUFFO0FBQUNLLGdCQUFRLEVBQUU7QUFBWCxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUNOLEdBQW5DLENBREQsQ0FGRCxFQUtDLE1BQUMsa0RBQUQ7QUFBVyxXQUFLLEVBQUVELEtBQUssQ0FBQ00sR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQU8sV0FBSyxFQUFFO0FBQUNDLGdCQUFRLEVBQUU7QUFBWCxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUNQLEtBQUssQ0FBQ00sR0FBekMsQ0FERCxDQUxELENBREQ7QUFXQSxHQWRELENBREEsR0FpQkE7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxTQUFLLEVBQUU7QUFBQ0YsWUFBTSxFQUFFLE1BQVQ7QUFBaUJDLHFCQUFlLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FsQkYsQ0FERDtBQXlCQSxDQTFCRDs7S0FBTVQsVztBQTRCTkEsV0FBVyxDQUFDWSxTQUFaLEdBQXdCO0FBQ3ZCWCxPQUFLLEVBQUVZLGlEQUFTLENBQUNDLE9BQVYsQ0FDTkQsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQjtBQUNmVCxRQUFJLEVBQUVPLGlEQUFTLENBQUNHLE1BREQ7QUFFZk4sT0FBRyxFQUFFRyxpREFBUyxDQUFDRztBQUZBLEdBQWhCLENBRE07QUFEZ0IsQ0FBeEI7QUFTZWhCLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb2xvcnMvQ29sb3JTd2F0Y2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3B5VmFsdWUgZnJvbSAnLi4vQ29weVZhbHVlJztcblxuY29uc3QgQ29sb3JTd2F0Y2ggPSAoe2l0ZW1zfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuXHRcdFx0e2l0ZW1zICYmIGl0ZW1zLmxlbmd0aCA/IChcblx0XHRcdFx0aXRlbXMubWFwKChjb2xvcikgPT4ge1xuXHRcdFx0XHRcdGxldCBudW0gPSBjb2xvci5uYW1lLnNwbGl0KCctLScpO1xuXHRcdFx0XHRcdG51bSA9IG51bVtudW0ubGVuZ3RoIC0gMV07XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCIgdGl0bGU9e2NvbG9yLm5hbWV9IGtleT17Y29sb3IubmFtZX0+XG5cdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc4MHB4JywgYmFja2dyb3VuZENvbG9yOiBjb2xvci5oZXh9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PENvcHlWYWx1ZSB2YWx1ZT17Y29sb3IubmFtZX0+XG5cdFx0XHRcdFx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4J319PntudW19PC9zbWFsbD5cblx0XHRcdFx0XHRcdFx0PC9Db3B5VmFsdWU+XG5cdFx0XHRcdFx0XHRcdDxDb3B5VmFsdWUgdmFsdWU9e2NvbG9yLmhleH0+XG5cdFx0XHRcdFx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7Zm9udFNpemU6ICcxMHB4J319Pntjb2xvci5oZXh9PC9zbWFsbD5cblx0XHRcdFx0XHRcdFx0PC9Db3B5VmFsdWU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnODBweCcsIGJhY2tncm91bmRDb2xvcjogJyNmNWY1ZjUnfX0+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbkNvbG9yU3dhdGNoLnByb3BUeXBlcyA9IHtcblx0aXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFxuXHRcdFByb3BUeXBlcy5zaGFwZSh7XG5cdFx0XHRuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdFx0aGV4OiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdH0pXG5cdCksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclN3YXRjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/colors/ColorSwatch.js\n");

/***/ })

})