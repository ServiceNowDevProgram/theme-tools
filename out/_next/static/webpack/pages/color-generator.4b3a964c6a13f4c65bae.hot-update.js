webpackHotUpdate_N_E("pages/color-generator",{

/***/ "./components/BaseColorPicker.js":
/*!***************************************!*\
  !*** ./components/BaseColorPicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/components/BaseColorPicker.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar BaseColorPicker = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(BaseColorPicker, _Component);\n\n  var _super = _createSuper(BaseColorPicker);\n\n  function BaseColorPicker() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BaseColorPicker);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      isColorPickerOpen: false\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BaseColorPicker, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          name = _this$props.name,\n          label = _this$props.label,\n          value = _this$props.value,\n          _onChange = _this$props.onChange;\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 7\n        }\n      }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        type: \"text\",\n        name: name,\n        label: label,\n        value: value,\n        onChange: function onChange(value) {\n          return _onChange(value);\n        },\n        placeholder: \"#000000\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        style: {\n          height: '30px',\n          width: '100px',\n          backgroundColor: {\n            value: value\n          }\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }\n      }));\n    }\n  }]);\n\n  return BaseColorPicker;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nBaseColorPicker.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,\n  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseColorPicker);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXNlQ29sb3JQaWNrZXIuanM/YjYxZSJdLCJuYW1lcyI6WyJCYXNlQ29sb3JQaWNrZXIiLCJpc0NvbG9yUGlja2VyT3BlbiIsInByb3BzIiwibmFtZSIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyx1QkFBaUIsRUFBRTtBQURiLEs7Ozs7Ozs7NkJBS0M7QUFBQSx3QkFDa0MsS0FBS0MsS0FEdkM7QUFBQSxVQUNDQyxJQURELGVBQ0NBLElBREQ7QUFBQSxVQUNPQyxLQURQLGVBQ09BLEtBRFA7QUFBQSxVQUNjQyxLQURkLGVBQ2NBLEtBRGQ7QUFBQSxVQUNxQkMsU0FEckIsZUFDcUJBLFFBRHJCO0FBR1AsYUFDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLHlEQUFEO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxZQUFJLEVBQUVILElBRlI7QUFHRSxhQUFLLEVBQUVDLEtBSFQ7QUFJRSxhQUFLLEVBQUVDLEtBSlQ7QUFLRSxnQkFBUSxFQUFFLGtCQUFDQSxLQUFEO0FBQUEsaUJBQ1JDLFNBQVEsQ0FBQ0QsS0FBRCxDQURBO0FBQUEsU0FMWjtBQVFFLG1CQUFXLEVBQUMsU0FSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFXRTtBQUFLLGFBQUssRUFBRTtBQUFDRSxnQkFBTSxFQUFFLE1BQVQ7QUFBaUJDLGVBQUssRUFBRSxPQUF4QjtBQUFpQ0MseUJBQWUsRUFBRTtBQUFDSixpQkFBSyxFQUFMQTtBQUFEO0FBQWxELFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVhGLENBREY7QUFrQkQ7Ozs7RUEzQjJCSywrQzs7QUFnQzlCVixlQUFlLENBQUNXLFNBQWhCLEdBQTRCO0FBQzFCUixNQUFJLEVBQUVTLGtEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREc7QUFFMUJWLE9BQUssRUFBRVEsa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGRTtBQUcxQlQsT0FBSyxFQUFFTyxrREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhFO0FBSTFCUixVQUFRLEVBQUVNLGtEQUFTLENBQUNHO0FBSk0sQ0FBNUI7QUFPZWYsOEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhc2VDb2xvclBpY2tlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IHsgU2tldGNoUGlja2VyIH0gZnJvbSAncmVhY3QtY29sb3InO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQmFzZUNvbG9yUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNDb2xvclBpY2tlck9wZW46IGZhbHNlXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG5hbWUsIGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XG4gICAgICAgICAgICBvbkNoYW5nZSh2YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIjMDAwMDAwXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzMwcHgnLCB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiB7dmFsdWV9fX0+PC9kaXY+XG5cblxuICAgICAgICB7LyogPFNrZXRjaFBpY2tlciBjb2xvcj17YmFzZUNvbG9yIHx8ICcnfSBvbkNoYW5nZT17KGMpID0+IHRoaXMudXBkYXRlQmFzZUNvbG9yKGNvbG9ySWQsIGMuaGV4KX0gLz4gKi99XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIClcbiAgfVxufVxuXG5cblxuQmFzZUNvbG9yUGlja2VyLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VDb2xvclBpY2tlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BaseColorPicker.js\n");

/***/ })

})