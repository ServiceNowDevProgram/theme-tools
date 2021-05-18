webpackHotUpdate_N_E("pages/color-generator-advanced",{

/***/ "./pages/color-generator-advanced/index.js":
/*!*************************************************!*\
  !*** ./pages/color-generator-advanced/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_Toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Toggle */ \"./components/Toggle.js\");\n/* harmony import */ var _lib_color_generator_generateColorsP__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/color-generator/generateColorsP */ \"./lib/color-generator/generateColorsP.js\");\n/* harmony import */ var _lib_common_copy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/common/copy */ \"./lib/common/copy.js\");\n/* harmony import */ var _lib_cx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../lib/cx */ \"./lib/cx.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _components_colors_ColorRangeGenerator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/colors/ColorRangeGenerator */ \"./components/colors/ColorRangeGenerator.js\");\n/* harmony import */ var _data_color_formulas__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../data/color-formulas */ \"./data/color-formulas.js\");\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/pages/color-generator-advanced/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\nvar path = [{\n  id: 'colors',\n  href: '/colors',\n  label: 'Colors'\n}, {\n  id: 'color-generator-advanced',\n  href: '/color-generator-advanced',\n  label: 'Color Generator Advanced (BETA)'\n}];\nvar selectedPath = 'color-generator-advanced';\n\nvar ColorGeneratorAdvanced = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ColorGeneratorAdvanced, _Component);\n\n  var _super = _createSuper(ColorGeneratorAdvanced);\n\n  function ColorGeneratorAdvanced(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ColorGeneratorAdvanced);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"copyColors\", function () {\n      var out = {};\n\n      _this.state.colors.forEach(function (color) {\n        console.log(color);\n        var newColor = Object(_lib_color_generator_generateColorsP__WEBPACK_IMPORTED_MODULE_12__[\"generateColorScale\"])({\n          hook: color.hook,\n          color: color.light.baseColor,\n          lightVariations: Number(color.light.lightVariations),\n          lightPercentage: Number(color.light.lightPercentage),\n          lightSaturation: Number(color.light.lightSaturation),\n          darkVariations: Number(color.light.darkVariations),\n          darkPercentage: Number(color.light.darkPercentage),\n          darkSaturation: Number(color.light.darkSaturation),\n          isDark: color.light.isReverse,\n          startIndex: Number(color.light.startIndex),\n          includeEnds: color.light.includeEnds\n        });\n        newColor.forEach(function (c) {\n          out[c.name] = c.rgb;\n        });\n\n        if (color.derived && color.derived.length) {\n          color.derived.forEach(function (c) {\n            c.group.forEach(function (group) {\n              out[group.hook] = group.color;\n            });\n          });\n        }\n      });\n\n      Object(_lib_common_copy__WEBPACK_IMPORTED_MODULE_13__[\"copyObject\"])(out);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_this), \"updateColors\", function (id, newColorObj) {\n      var newColorFormulas = _this.state.colors.map(function (color) {\n        if (color.label === id) {\n          color.light = _objectSpread(_objectSpread({}, color.light), newColorObj);\n        }\n\n        return color;\n      });\n\n      _this.setState({\n        colors: newColorFormulas\n      });\n    });\n\n    _this.state = {\n      isDark: false,\n      colors: Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_data_color_formulas__WEBPACK_IMPORTED_MODULE_17__[\"colorFormulas\"])\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ColorGeneratorAdvanced, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var isDark = this.state.isDark;\n      return __jsx(\"div\", {\n        className: Object(_lib_cx__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default.a.dark, isDark)),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 4\n        }\n      }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        label: \"Color Generator Advanced (BETA)\",\n        path: path,\n        selectedPath: selectedPath,\n        wide: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 5\n        }\n      }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        wide: true,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 5\n        }\n      }, __jsx(\"div\", {\n        className: \"mb-8 flex flex-row-reverse items-center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 6\n        }\n      }, __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 7\n        }\n      }, __jsx(\"button\", {\n        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-auto mb-2\",\n        onClick: this.copyColors,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 8\n        }\n      }, \"Copy Colors Json\"), __jsx(_components_Toggle__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        label: \"Dark Mode\",\n        onChange: function onChange() {\n          return _this2.setState({\n            isDark: !isDark,\n            isHighContrast: false\n          });\n        },\n        checked: isDark,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 8\n        }\n      }))), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 6\n        }\n      }, _data_color_formulas__WEBPACK_IMPORTED_MODULE_17__[\"colorFormulas\"].map(function (color) {\n        return __jsx(\"div\", {\n          key: color.label,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 9\n          }\n        }, __jsx(_components_colors_ColorRangeGenerator__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n          label: color.label,\n          baseColor: color.light.color,\n          lightVariations: color.light.lightVariations,\n          lightPercentage: color.light.lightPercentage,\n          lightSaturation: color.light.lightSaturation,\n          darkVariations: color.light.darkVariations,\n          darkPercentage: color.light.darkPercentage,\n          darkSaturation: color.light.darkSaturation,\n          hook: color.hook,\n          startIndex: color.light.startIndex,\n          includeEnds: color.light.includeEnds,\n          onChange: _this2.updateColors,\n          derived: color.light.derived,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 10\n          }\n        }));\n      }))));\n    }\n  }]);\n\n  return ColorGeneratorAdvanced;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColorGeneratorAdvanced);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29sb3ItZ2VuZXJhdG9yLWFkdmFuY2VkL2luZGV4LmpzPzdhN2YiXSwibmFtZXMiOlsicGF0aCIsImlkIiwiaHJlZiIsImxhYmVsIiwic2VsZWN0ZWRQYXRoIiwiQ29sb3JHZW5lcmF0b3JBZHZhbmNlZCIsInByb3BzIiwib3V0Iiwic3RhdGUiLCJjb2xvcnMiLCJmb3JFYWNoIiwiY29sb3IiLCJjb25zb2xlIiwibG9nIiwibmV3Q29sb3IiLCJnZW5lcmF0ZUNvbG9yU2NhbGUiLCJob29rIiwibGlnaHQiLCJiYXNlQ29sb3IiLCJsaWdodFZhcmlhdGlvbnMiLCJOdW1iZXIiLCJsaWdodFBlcmNlbnRhZ2UiLCJsaWdodFNhdHVyYXRpb24iLCJkYXJrVmFyaWF0aW9ucyIsImRhcmtQZXJjZW50YWdlIiwiZGFya1NhdHVyYXRpb24iLCJpc0RhcmsiLCJpc1JldmVyc2UiLCJzdGFydEluZGV4IiwiaW5jbHVkZUVuZHMiLCJjIiwibmFtZSIsInJnYiIsImRlcml2ZWQiLCJsZW5ndGgiLCJncm91cCIsImNvcHlPYmplY3QiLCJuZXdDb2xvck9iaiIsIm5ld0NvbG9yRm9ybXVsYXMiLCJtYXAiLCJzZXRTdGF0ZSIsImNvbG9yRm9ybXVsYXMiLCJjeCIsInN0eWxlcyIsImRhcmsiLCJjb3B5Q29sb3JzIiwiaXNIaWdoQ29udHJhc3QiLCJ1cGRhdGVDb2xvcnMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNaO0FBQUNDLElBQUUsRUFBRSxRQUFMO0FBQWVDLE1BQUksRUFBRSxTQUFyQjtBQUFnQ0MsT0FBSyxFQUFFO0FBQXZDLENBRFksRUFFWjtBQUNDRixJQUFFLEVBQUUsMEJBREw7QUFFQ0MsTUFBSSxFQUFFLDJCQUZQ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QUQsRUFBVztBQUM3QixlQUNDO0FBQUssYUFBRyxFQUFFQSxLQUFLLENBQUNSLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDQyxNQUFDLCtFQUFEO0FBQ0MsZUFBSyxFQUFFUSxLQUFLLENBQUNSLEtBRGQ7QUFFQyxtQkFBUyxFQUFFUSxLQUFLLENBQUNNLEtBQU4sQ0FBWU4sS0FGeEI7QUFHQyx5QkFBZSxFQUFFQSxLQUFLLENBQUNNLEtBQU4sQ0FBWUUsZUFIOUI7QUFJQyx5QkFBZSxFQUFFUixLQUFLLENBQUNNLEtBQU4sQ0FBWUksZUFKOUI7QUFLQyx5QkFBZSxFQUFFVixLQUFLLENBQUNNLEtBQU4sQ0FBWUssZUFMOUI7QUFNQyx3QkFBYyxFQUFFWCxLQUFLLENBQUNNLEtBQU4sQ0FBWU0sY0FON0I7QUFPQyx3QkFBYyxFQUFFWixLQUFLLENBQUNNLEtBQU4sQ0FBWU8sY0FQN0I7QUFRQyx3QkFBYyxFQUFFYixLQUFLLENBQUNNLEtBQU4sQ0FBWVEsY0FSN0I7QUFTQyxjQUFJLEVBQUVkLEtBQUssQ0FBQ0ssSUFUYjtBQVVDLG9CQUFVLEVBQUVMLEtBQUssQ0FBQ00sS0FBTixDQUFZVyxVQVZ6QjtBQVdDLHFCQUFXLEVBQUVqQixLQUFLLENBQUNNLEtBQU4sQ0FBWVksV0FYMUI7QUFZQyxrQkFBUSxFQUFFLE1BQUksQ0FBQ2tCLFlBWmhCO0FBYUMsaUJBQU8sRUFBRXBDLEtBQUssQ0FBQ00sS0FBTixDQUFZZ0IsT0FidEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURELENBREQ7QUFtQkEsT0FwQkEsQ0FERixDQWpCRCxDQVZELENBREQ7QUFzREE7Ozs7RUFoSG1DZSwrQzs7QUFtSHRCM0MscUZBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2xvci1nZW5lcmF0b3ItYWR2YW5jZWQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUGFnZUhlYWRlcic7XG5pbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2UnO1xuaW1wb3J0IFRvZ2dsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RvZ2dsZSc7XG5pbXBvcnQge2dlbmVyYXRlQ29sb3JTY2FsZX0gZnJvbSAnLi4vLi4vbGliL2NvbG9yLWdlbmVyYXRvci9nZW5lcmF0ZUNvbG9yc1AnO1xuaW1wb3J0IHtjb3B5T2JqZWN0fSBmcm9tICcuLi8uLi9saWIvY29tbW9uL2NvcHknO1xuaW1wb3J0IGN4IGZyb20gJy4uLy4uL2xpYi9jeCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IENvbG9yUmFuZ2VHZW5lcmF0b3IgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2xvcnMvQ29sb3JSYW5nZUdlbmVyYXRvcic7XG5pbXBvcnQge2NvbG9yRm9ybXVsYXN9IGZyb20gJy4uLy4uL2RhdGEvY29sb3ItZm9ybXVsYXMnO1xuXG5jb25zdCBwYXRoID0gW1xuXHR7aWQ6ICdjb2xvcnMnLCBocmVmOiAnL2NvbG9ycycsIGxhYmVsOiAnQ29sb3JzJ30sXG5cdHtcblx0XHRpZDogJ2NvbG9yLWdlbmVyYXRvci1hZHZhbmNlZCcsXG5cdFx0aHJlZjogJy9jb2xvci1nZW5lcmF0b3ItYWR2YW5jZWQnLFxuXHRcdGxhYmVsOiAnQ29sb3IgR2VuZXJhdG9yIEFkdmFuY2VkIChCRVRBKScsXG5cdH0sXG5dO1xuY29uc3Qgc2VsZWN0ZWRQYXRoID0gJ2NvbG9yLWdlbmVyYXRvci1hZHZhbmNlZCc7XG5jbGFzcyBDb2xvckdlbmVyYXRvckFkdmFuY2VkIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNEYXJrOiBmYWxzZSxcblx0XHRcdGNvbG9yczogWy4uLmNvbG9yRm9ybXVsYXNdLFxuXHRcdH07XG5cdH1cblxuXHRjb3B5Q29sb3JzID0gKCkgPT4ge1xuXHRcdGNvbnN0IG91dCA9IHt9O1xuXHRcdHRoaXMuc3RhdGUuY29sb3JzLmZvckVhY2goKGNvbG9yKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhjb2xvcilcblx0XHRcdGNvbnN0IG5ld0NvbG9yID0gZ2VuZXJhdGVDb2xvclNjYWxlKHtcblx0XHRcdFx0aG9vazogY29sb3IuaG9vayxcblx0XHRcdFx0Y29sb3I6IGNvbG9yLmxpZ2h0LmJhc2VDb2xvcixcblx0XHRcdFx0bGlnaHRWYXJpYXRpb25zOiBOdW1iZXIoY29sb3IubGlnaHQubGlnaHRWYXJpYXRpb25zKSxcblx0XHRcdFx0bGlnaHRQZXJjZW50YWdlOiBOdW1iZXIoY29sb3IubGlnaHQubGlnaHRQZXJjZW50YWdlKSxcblx0XHRcdFx0bGlnaHRTYXR1cmF0aW9uOiBOdW1iZXIoY29sb3IubGlnaHQubGlnaHRTYXR1cmF0aW9uKSxcblx0XHRcdFx0ZGFya1ZhcmlhdGlvbnM6IE51bWJlcihjb2xvci5saWdodC5kYXJrVmFyaWF0aW9ucyksXG5cdFx0XHRcdGRhcmtQZXJjZW50YWdlOiBOdW1iZXIoY29sb3IubGlnaHQuZGFya1BlcmNlbnRhZ2UpLFxuXHRcdFx0XHRkYXJrU2F0dXJhdGlvbjogTnVtYmVyKGNvbG9yLmxpZ2h0LmRhcmtTYXR1cmF0aW9uKSxcblx0XHRcdFx0aXNEYXJrOiBjb2xvci5saWdodC5pc1JldmVyc2UsXG5cdFx0XHRcdHN0YXJ0SW5kZXg6IE51bWJlcihjb2xvci5saWdodC5zdGFydEluZGV4KSxcblx0XHRcdFx0aW5jbHVkZUVuZHM6IGNvbG9yLmxpZ2h0LmluY2x1ZGVFbmRzLFxuXHRcdFx0fSk7XG5cdFx0XHRuZXdDb2xvci5mb3JFYWNoKChjKSA9PiB7XG5cdFx0XHRcdG91dFtjLm5hbWVdID0gYy5yZ2I7XG5cdFx0XHR9KTtcblx0XHRcdGlmIChjb2xvci5kZXJpdmVkICYmIGNvbG9yLmRlcml2ZWQubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbG9yLmRlcml2ZWQuZm9yRWFjaChjID0+IHtcblx0XHRcdFx0XHRjLmdyb3VwLmZvckVhY2goZ3JvdXAgPT4ge1xuXHRcdFx0XHRcdFx0b3V0W2dyb3VwLmhvb2tdID0gZ3JvdXAuY29sb3I7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRjb3B5T2JqZWN0KG91dCk7XG5cdH07XG5cblx0dXBkYXRlQ29sb3JzID0gKGlkLCBuZXdDb2xvck9iaikgPT4ge1xuXHRcdGNvbnN0IG5ld0NvbG9yRm9ybXVsYXMgPSB0aGlzLnN0YXRlLmNvbG9ycy5tYXAoKGNvbG9yKSA9PiB7XG5cdFx0XHRpZiAoY29sb3IubGFiZWwgPT09IGlkKSB7XG5cdFx0XHRcdGNvbG9yLmxpZ2h0ID0ge1xuXHRcdFx0XHRcdC4uLmNvbG9yLmxpZ2h0LFxuXHRcdFx0XHRcdC4uLm5ld0NvbG9yT2JqLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvbG9yO1xuXHRcdH0pO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2NvbG9yczogbmV3Q29sb3JGb3JtdWxhc30pO1xuXHR9O1xuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7aXNEYXJrfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2N4KHtcblx0XHRcdFx0XHRbc3R5bGVzLmRhcmtdOiBpc0RhcmssXG5cdFx0XHRcdH0pfT5cblx0XHRcdFx0PFBhZ2VIZWFkZXJcblx0XHRcdFx0XHRsYWJlbD1cIkNvbG9yIEdlbmVyYXRvciBBZHZhbmNlZCAoQkVUQSlcIlxuXHRcdFx0XHRcdHBhdGg9e3BhdGh9XG5cdFx0XHRcdFx0c2VsZWN0ZWRQYXRoPXtzZWxlY3RlZFBhdGh9XG5cdFx0XHRcdFx0d2lkZVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8UGFnZSB3aWRlPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItOCBmbGV4IGZsZXgtcm93LXJldmVyc2UgaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMSBweC0yIHJvdW5kZWQgbWwtYXV0byBtYi0yXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmNvcHlDb2xvcnN9PlxuXHRcdFx0XHRcdFx0XHRcdENvcHkgQ29sb3JzIEpzb25cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxUb2dnbGVcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIkRhcmsgTW9kZVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtpc0Rhcms6ICFpc0RhcmssIGlzSGlnaENvbnRyYXN0OiBmYWxzZX0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9e2lzRGFya31cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7Y29sb3JGb3JtdWxhcy5tYXAoKGNvbG9yKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2NvbG9yLmxhYmVsfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb2xvclJhbmdlR2VuZXJhdG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtjb2xvci5sYWJlbH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFzZUNvbG9yPXtjb2xvci5saWdodC5jb2xvcn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGlnaHRWYXJpYXRpb25zPXtjb2xvci5saWdodC5saWdodFZhcmlhdGlvbnN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxpZ2h0UGVyY2VudGFnZT17Y29sb3IubGlnaHQubGlnaHRQZXJjZW50YWdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRsaWdodFNhdHVyYXRpb249e2NvbG9yLmxpZ2h0LmxpZ2h0U2F0dXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGFya1ZhcmlhdGlvbnM9e2NvbG9yLmxpZ2h0LmRhcmtWYXJpYXRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXJrUGVyY2VudGFnZT17Y29sb3IubGlnaHQuZGFya1BlcmNlbnRhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhcmtTYXR1cmF0aW9uPXtjb2xvci5saWdodC5kYXJrU2F0dXJhdGlvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aG9vaz17Y29sb3IuaG9va31cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhcnRJbmRleD17Y29sb3IubGlnaHQuc3RhcnRJbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aW5jbHVkZUVuZHM9e2NvbG9yLmxpZ2h0LmluY2x1ZGVFbmRzfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17dGhpcy51cGRhdGVDb2xvcnN9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlcml2ZWQ9e2NvbG9yLmxpZ2h0LmRlcml2ZWR9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvUGFnZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JHZW5lcmF0b3JBZHZhbmNlZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/color-generator-advanced/index.js\n");

/***/ })

})