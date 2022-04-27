webpackHotUpdate_N_E("pages/nav-formula",{

/***/ "./pages/nav-formula/index.js":
/*!************************************!*\
  !*** ./pages/nav-formula/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.js\");\n/* harmony import */ var _lib_color_generator_generateColorsP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/color-generator/generateColorsP */ \"./lib/color-generator/generateColorsP.js\");\n\n\n\nvar _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/nav-formula/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar CodeMirror = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = /*#__PURE__*/function () {\n  var _ref = Object(_Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var mod;\n    return _Users_bryant_yu_Desktop_serviceNow_code_theme_tools_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! react-codemirror2 */ \"./node_modules/react-codemirror2/index.js\", 7));\n\n          case 2:\n            mod = _context.sent;\n            _context.next = 5;\n            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! codemirror/mode/javascript/javascript */ \"./node_modules/codemirror/mode/javascript/javascript.js\", 7));\n\n          case 5:\n            return _context.abrupt(\"return\", mod.Controlled);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function _c() {\n    return _ref.apply(this, arguments);\n  };\n}(), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-codemirror2 */ \"./node_modules/react-codemirror2/index.js\"), /*require.resolve*/(/*! codemirror/mode/javascript/javascript */ \"./node_modules/codemirror/mode/javascript/javascript.js\")];\n    },\n    modules: ['react-codemirror2', 'codemirror/mode/javascript/javascript']\n  }\n});\n_c2 = CodeMirror;\nvar path = [{\n  id: 'colors',\n  href: '/colors',\n  label: 'Colors'\n}, {\n  id: 'nav-formula',\n  href: \"/nav-formula\",\n  label: 'Nav Formula'\n}];\nvar selectedPath = 'nav-formula';\n\nvar NavFormula = function NavFormula() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      brandPrimary = _useState[0],\n      setBrandPrimary = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n      json = _useState2[0],\n      setJson = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (Object(_lib_color_generator_generateColorsP__WEBPACK_IMPORTED_MODULE_7__[\"isHex\"])(brandPrimary)) {\n      setJson(Object(_lib_color_generator_generateColorsP__WEBPACK_IMPORTED_MODULE_7__[\"getNavHooksFromBrandPrimary\"])(brandPrimary));\n    }\n  }, [brandPrimary]);\n  console.log(json);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 3\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    label: \"Nav Formula\",\n    path: path,\n    selectedPath: selectedPath,\n    size: \"xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 4\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    size: \"xl\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 6\n    }\n  }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    placeholder: \"Brand Primary\",\n    value: brandPrimary,\n    onChange: function onChange(value) {\n      return setBrandPrimary(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 6\n    }\n  }))));\n};\n\n_s(NavFormula, \"mBQ7LTX+T6cytVVDvcLOGbXCGUA=\");\n\n_c3 = NavFormula;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavFormula);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CodeMirror$dynamic\");\n$RefreshReg$(_c2, \"CodeMirror\");\n$RefreshReg$(_c3, \"NavFormula\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmF2LWZvcm11bGEvaW5kZXguanM/YjU0OSJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZHluYW1pYyIsIm1vZCIsIkNvbnRyb2xsZWQiLCJzc3IiLCJwYXRoIiwiaWQiLCJocmVmIiwibGFiZWwiLCJzZWxlY3RlZFBhdGgiLCJOYXZGb3JtdWxhIiwidXNlU3RhdGUiLCJicmFuZFByaW1hcnkiLCJzZXRCcmFuZFByaW1hcnkiLCJqc29uIiwic2V0SnNvbiIsInVzZUVmZmVjdCIsImlzSGV4IiwiZ2V0TmF2SG9va3NGcm9tQnJhbmRQcmltYXJ5IiwiY29uc29sZSIsImxvZyIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MsbURBQU87QUFBQSxvV0FDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbUIsd0pBRG5COztBQUFBO0FBQ09DLGVBRFA7QUFBQTtBQUFBLG1CQUVPLDBMQUZQOztBQUFBO0FBQUEsNkNBR1FBLEdBQUcsQ0FBQ0MsVUFIWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUR5Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU16QjtBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FKMEIsb0VBSTFCLHVCQUhjLHNHQUdkO0FBQUE7QUFBQSxjQUowQixtQkFJMUIsRUFIYyx1Q0FHZDtBQUFBO0FBQUEsQ0FOeUIsQ0FBMUI7TUFBTUosVTtBQVNOLElBQU1LLElBQUksR0FBRyxDQUNaO0FBQUNDLElBQUUsRUFBRSxRQUFMO0FBQWVDLE1BQUksRUFBRSxTQUFyQjtBQUFnQ0MsT0FBSyxFQUFFO0FBQXZDLENBRFksRUFFWjtBQUFDRixJQUFFLEVBQUUsYUFBTDtBQUFvQkMsTUFBSSxnQkFBeEI7QUFBMENDLE9BQUssRUFBRTtBQUFqRCxDQUZZLENBQWI7QUFLQSxJQUFNQyxZQUFZLEdBQUcsYUFBckI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNnQkMsc0RBQVEsQ0FBQyxFQUFELENBRHhCO0FBQUEsTUFDakJDLFlBRGlCO0FBQUEsTUFDSEMsZUFERzs7QUFBQSxtQkFFQUYsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVqQkcsSUFGaUI7QUFBQSxNQUVYQyxPQUZXOztBQUl4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBSUMsa0ZBQUssQ0FBQ0wsWUFBRCxDQUFULEVBQXlCO0FBQ3hCRyxhQUFPLENBQUNHLHdHQUEyQixDQUFDTixZQUFELENBQTVCLENBQVA7QUFDQTtBQUNELEdBSlEsRUFJTixDQUFDQSxZQUFELENBSk0sQ0FBVDtBQU1BTyxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sSUFBWjtBQUVBLFNBQ0MsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw4REFBRDtBQUNDLFNBQUssRUFBQyxhQURQO0FBRUMsUUFBSSxFQUFFVCxJQUZQO0FBR0MsZ0JBQVksRUFBRUksWUFIZjtBQUlDLFFBQUksRUFBQyxJQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQU9FLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQUMseURBQUQ7QUFDQyxlQUFXLEVBQUMsZUFEYjtBQUVDLFNBQUssRUFBRUcsWUFGUjtBQUdDLFlBQVEsRUFBRSxrQkFBQVMsS0FBSztBQUFBLGFBQUlSLGVBQWUsQ0FBQ1EsS0FBRCxDQUFuQjtBQUFBLEtBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxDQURELENBUEYsQ0FERDtBQW1DQSxDQS9DRDs7R0FBTVgsVTs7TUFBQUEsVTtBQWlEU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9uYXYtZm9ybXVsYS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlSGVhZGVyJztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0JztcblxuaW1wb3J0IHsgZ2V0TmF2SG9va3NGcm9tQnJhbmRQcmltYXJ5LCBpc0hleCB9IGZyb20gJy4uLy4uL2xpYi9jb2xvci1nZW5lcmF0b3IvZ2VuZXJhdGVDb2xvcnNQJztcblxuY29uc3QgQ29kZU1pcnJvciA9IGR5bmFtaWMoXG5cdGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBtb2QgPSBhd2FpdCBpbXBvcnQoJ3JlYWN0LWNvZGVtaXJyb3IyJyk7XG5cdFx0YXdhaXQgaW1wb3J0KCdjb2RlbWlycm9yL21vZGUvamF2YXNjcmlwdC9qYXZhc2NyaXB0Jyk7XG5cdFx0cmV0dXJuIG1vZC5Db250cm9sbGVkO1xuXHR9LFxuXHR7c3NyOiBmYWxzZX1cbik7XG5cbmNvbnN0IHBhdGggPSBbXG5cdHtpZDogJ2NvbG9ycycsIGhyZWY6ICcvY29sb3JzJywgbGFiZWw6ICdDb2xvcnMnfSxcblx0e2lkOiAnbmF2LWZvcm11bGEnLCBocmVmOiBgL25hdi1mb3JtdWxhYCwgbGFiZWw6ICdOYXYgRm9ybXVsYSd9LFxuXTtcblxuY29uc3Qgc2VsZWN0ZWRQYXRoID0gJ25hdi1mb3JtdWxhJztcblxuY29uc3QgTmF2Rm9ybXVsYSA9ICgpID0+IHtcblx0Y29uc3QgW2JyYW5kUHJpbWFyeSwgc2V0QnJhbmRQcmltYXJ5XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2pzb24sIHNldEpzb25dID0gdXNlU3RhdGUoe30pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlzSGV4KGJyYW5kUHJpbWFyeSkpIHtcblx0XHRcdHNldEpzb24oZ2V0TmF2SG9va3NGcm9tQnJhbmRQcmltYXJ5KGJyYW5kUHJpbWFyeSkpO1xuXHRcdH1cblx0fSwgW2JyYW5kUHJpbWFyeV0pO1xuXG5cdGNvbnNvbGUubG9nKGpzb24pXG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8UGFnZUhlYWRlclxuXHRcdFx0XHRsYWJlbD1cIk5hdiBGb3JtdWxhXCJcblx0XHRcdFx0cGF0aD17cGF0aH1cblx0XHRcdFx0c2VsZWN0ZWRQYXRoPXtzZWxlY3RlZFBhdGh9XG5cdFx0XHRcdHNpemU9XCJ4bFwiXG5cdFx0XHQgLz5cblx0XHRcdCA8UGFnZSBzaXplPVwieGxcIj5cblx0XHRcdFx0IDxkaXY+XG5cblx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQnJhbmQgUHJpbWFyeVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17YnJhbmRQcmltYXJ5fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3ZhbHVlID0+IHNldEJyYW5kUHJpbWFyeSh2YWx1ZSl9IC8+XG5cdFx0XHRcdFx0XHR7Lyoge0NvZGVNaXJyb3IgJiYgPENvZGVNaXJyb3Jcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibXQtOFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtqc29ufVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdFx0XHRcdFx0bW9kZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lOiAnbWF0ZXJpYWwnLFxuXHRcdFx0XHRcdFx0XHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGd1dHRlcnM6IFsnQ29kZU1pcnJvci1saW5lbnVtYmVycycsICdjb2RlbGluZW1hcmtlcnMnXSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0c21hcnRJbmRlbnRcblx0XHRcdFx0XHRcdFx0b25CZWZvcmVDaGFuZ2U9eyhlZGl0b3IsIGRhdGEsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRzZWxlY3RlZFRoZW1lOiB7Li4uc2VsZWN0ZWRUaGVtZSwgdGhlbWU6IHZhbHVlfSxcblx0XHRcdFx0XHRcdFx0XHQvLyB9KTtcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+fSAqL31cblx0XHRcdFx0IDwvZGl2PlxuXHRcdFx0IDwvUGFnZT5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkZvcm11bGE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/nav-formula/index.js\n");

/***/ })

})