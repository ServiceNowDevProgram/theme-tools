webpackHotUpdate_N_E("pages/validator",{

/***/ "./lib/validateRules/duplicates.js":
/*!*****************************************!*\
  !*** ./lib/validateRules/duplicates.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rule; });\n/* harmony import */ var _normalizePropertyName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../normalizePropertyName */ \"./lib/normalizePropertyName.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction rule(_ref) {\n  var ast = _ref.ast,\n      report = _ref.report;\n\n  var _iterator = _createForOfIteratorHelper(ast.children),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var node = _step.value;\n      var key = node.key;\n      var longKey = Object(_normalizePropertyName__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key.value);\n      var shortKey = longKey.replace(/^--now-/, '');\n      var isLongKey = longKey === key.value;\n      var dupes = ast.children.filter(function (x) {\n        return x !== node && Object(_normalizePropertyName__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x.key.value) === longKey;\n      });\n\n      if (dupes.length) {\n        if (dupes.length === 1 && dupes[0].key.value !== key.value) {\n          report(node).key.error(\"Hook is defined twice, once using shorthand syntax (\".concat(shortKey, \") and once using longhand syntax (\").concat(longKey, \"). Delete one of the definitions.\"));\n        }\n      }\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3ZhbGlkYXRlUnVsZXMvZHVwbGljYXRlcy5qcz9hNmFlIl0sIm5hbWVzIjpbInJ1bGUiLCJhc3QiLCJyZXBvcnQiLCJjaGlsZHJlbiIsIm5vZGUiLCJrZXkiLCJsb25nS2V5Iiwibm9ybWFsaXplUHJvcGVydHlOYW1lIiwidmFsdWUiLCJzaG9ydEtleSIsInJlcGxhY2UiLCJpc0xvbmdLZXkiLCJkdXBlcyIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUE2QjtBQUFBLE1BQWRDLEdBQWMsUUFBZEEsR0FBYztBQUFBLE1BQVRDLE1BQVMsUUFBVEEsTUFBUzs7QUFBQSw2Q0FDeEJELEdBQUcsQ0FBQ0UsUUFEb0I7QUFBQTs7QUFBQTtBQUFBO0FBQUEsVUFDaENDLElBRGdDO0FBQUEsVUFFbkNDLEdBRm1DLEdBRTVCRCxJQUY0QixDQUVuQ0MsR0FGbUM7QUFHMUMsVUFBTUMsT0FBTyxHQUFHQyxzRUFBcUIsQ0FBQ0YsR0FBRyxDQUFDRyxLQUFMLENBQXJDO0FBQ0EsVUFBTUMsUUFBUSxHQUFHSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsU0FBaEIsRUFBMkIsRUFBM0IsQ0FBakI7QUFDQSxVQUFNQyxTQUFTLEdBQUdMLE9BQU8sS0FBS0QsR0FBRyxDQUFDRyxLQUFsQztBQUVBLFVBQU1JLEtBQUssR0FBR1gsR0FBRyxDQUFDRSxRQUFKLENBQWFVLE1BQWIsQ0FDYixVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxLQUFLVixJQUFOLElBQWNHLHNFQUFxQixDQUFDTyxDQUFDLENBQUNULEdBQUYsQ0FBTUcsS0FBUCxDQUFyQixLQUF1Q0YsT0FBNUQ7QUFBQSxPQURhLENBQWQ7O0FBR0EsVUFBSU0sS0FBSyxDQUFDRyxNQUFWLEVBQWtCO0FBQ2pCLFlBQUlILEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFqQixJQUFzQkgsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTUCxHQUFULENBQWFHLEtBQWIsS0FBdUJILEdBQUcsQ0FBQ0csS0FBckQsRUFBNEQ7QUFDM0ROLGdCQUFNLENBQUNFLElBQUQsQ0FBTixDQUFhQyxHQUFiLENBQWlCVyxLQUFqQiwrREFDd0RQLFFBRHhELCtDQUNxR0gsT0FEckc7QUFHQTtBQUNEO0FBaEJ5Qzs7QUFDM0Msd0RBQWlDO0FBQUE7QUFnQmhDO0FBakIwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0IzQyIsImZpbGUiOiIuL2xpYi92YWxpZGF0ZVJ1bGVzL2R1cGxpY2F0ZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9ybWFsaXplUHJvcGVydHlOYW1lIGZyb20gJy4uL25vcm1hbGl6ZVByb3BlcnR5TmFtZSc7XG5pbXBvcnQge2tleXN9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJ1bGUoe2FzdCwgcmVwb3J0fSkge1xuXHRmb3IgKGNvbnN0IG5vZGUgb2YgYXN0LmNoaWxkcmVuKSB7XG5cdFx0Y29uc3Qge2tleX0gPSBub2RlO1xuXHRcdGNvbnN0IGxvbmdLZXkgPSBub3JtYWxpemVQcm9wZXJ0eU5hbWUoa2V5LnZhbHVlKTtcblx0XHRjb25zdCBzaG9ydEtleSA9IGxvbmdLZXkucmVwbGFjZSgvXi0tbm93LS8sICcnKTtcblx0XHRjb25zdCBpc0xvbmdLZXkgPSBsb25nS2V5ID09PSBrZXkudmFsdWU7XG5cblx0XHRjb25zdCBkdXBlcyA9IGFzdC5jaGlsZHJlbi5maWx0ZXIoXG5cdFx0XHQoeCkgPT4geCAhPT0gbm9kZSAmJiBub3JtYWxpemVQcm9wZXJ0eU5hbWUoeC5rZXkudmFsdWUpID09PSBsb25nS2V5LFxuXHRcdCk7XG5cdFx0aWYgKGR1cGVzLmxlbmd0aCkge1xuXHRcdFx0aWYgKGR1cGVzLmxlbmd0aCA9PT0gMSAmJiBkdXBlc1swXS5rZXkudmFsdWUgIT09IGtleS52YWx1ZSkge1xuXHRcdFx0XHRyZXBvcnQobm9kZSkua2V5LmVycm9yKFxuXHRcdFx0XHRcdGBIb29rIGlzIGRlZmluZWQgdHdpY2UsIG9uY2UgdXNpbmcgc2hvcnRoYW5kIHN5bnRheCAoJHtzaG9ydEtleX0pIGFuZCBvbmNlIHVzaW5nIGxvbmdoYW5kIHN5bnRheCAoJHtsb25nS2V5fSkuIERlbGV0ZSBvbmUgb2YgdGhlIGRlZmluaXRpb25zLmAsXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/validateRules/duplicates.js\n");

/***/ })

})