webpackHotUpdate_N_E("pages/color-generator",{

/***/ "./components/BaseColorPicker.js":
/*!***************************************!*\
  !*** ./components/BaseColorPicker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Input */ \"./components/Input.js\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-color */ \"./node_modules/react-color/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bryant.yu/Desktop/serviceNow/code/theme-tools/components/BaseColorPicker.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar BaseColorPicker = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(BaseColorPicker, _Component);\n\n  var _super = _createSuper(BaseColorPicker);\n\n  function BaseColorPicker() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, BaseColorPicker);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      isColorPickerOpen: false\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(BaseColorPicker, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$props = this.props,\n          name = _this$props.name,\n          label = _this$props.label,\n          value = _this$props.value,\n          _onChange = _this$props.onChange;\n      return __jsx(\"div\", {\n        className: \"flex items-end\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 7\n        }\n      }, __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        type: \"text\",\n        name: name,\n        label: label,\n        value: value,\n        onChange: function onChange(value) {\n          return _onChange(value);\n        },\n        placeholder: \"#000000\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }\n      }), __jsx(\"button\", {\n        style: {\n          height: '30px',\n          width: '100px',\n          backgroundColor: value\n        },\n        className: \"ml-2\",\n        onClick: function onClick() {\n          return _this2.setState({\n            isColorPickerOpen: !_this2.state.isColorPickerOpen\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 9\n        }\n      }), this.state.isColorPickerOpen ? __jsx(react_color__WEBPACK_IMPORTED_MODULE_9__[\"SketchPicker\"], {\n        color: value,\n        onChange: function onChange(c) {\n          return _onChange(c.hex);\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 42\n        }\n      }) : null);\n    }\n  }]);\n\n  return BaseColorPicker;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\nBaseColorPicker.propTypes = {\n  name: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,\n  label: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,\n  value: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired,\n  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseColorPicker);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXNlQ29sb3JQaWNrZXIuanM/YjYxZSJdLCJuYW1lcyI6WyJCYXNlQ29sb3JQaWNrZXIiLCJpc0NvbG9yUGlja2VyT3BlbiIsInByb3BzIiwibmFtZSIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwic2V0U3RhdGUiLCJzdGF0ZSIsImMiLCJoZXgiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxlOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNJO0FBQ05DLHVCQUFpQixFQUFFO0FBRGIsSzs7Ozs7Ozs2QkFLQztBQUFBOztBQUFBLHdCQUNrQyxLQUFLQyxLQUR2QztBQUFBLFVBQ0NDLElBREQsZUFDQ0EsSUFERDtBQUFBLFVBQ09DLEtBRFAsZUFDT0EsS0FEUDtBQUFBLFVBQ2NDLEtBRGQsZUFDY0EsS0FEZDtBQUFBLFVBQ3FCQyxTQURyQixlQUNxQkEsUUFEckI7QUFHUCxhQUNFO0FBQUssaUJBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyx5REFBRDtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsWUFBSSxFQUFFSCxJQUZSO0FBR0UsYUFBSyxFQUFFQyxLQUhUO0FBSUUsYUFBSyxFQUFFQyxLQUpUO0FBS0UsZ0JBQVEsRUFBRSxrQkFBQ0EsS0FBRDtBQUFBLGlCQUNSQyxTQUFRLENBQUNELEtBQUQsQ0FEQTtBQUFBLFNBTFo7QUFRRSxtQkFBVyxFQUFDLFNBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBV0U7QUFDRSxhQUFLLEVBQUU7QUFBQ0UsZ0JBQU0sRUFBRSxNQUFUO0FBQWlCQyxlQUFLLEVBQUUsT0FBeEI7QUFBaUNDLHlCQUFlLEVBQUVKO0FBQWxELFNBRFQ7QUFFRSxpQkFBUyxFQUFDLE1BRlo7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNLLFFBQUwsQ0FBYztBQUFDVCw2QkFBaUIsRUFBRSxDQUFDLE1BQUksQ0FBQ1UsS0FBTCxDQUFXVjtBQUFoQyxXQUFkLENBQU47QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFYRixFQWtCSSxLQUFLVSxLQUFMLENBQVdWLGlCQUFYLEdBQStCLE1BQUMsd0RBQUQ7QUFBYyxhQUFLLEVBQUVJLEtBQXJCO0FBQTRCLGdCQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxpQkFBT04sU0FBUSxDQUFDTSxDQUFDLENBQUNDLEdBQUgsQ0FBZjtBQUFBLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsR0FBa0csSUFsQnRHLENBREY7QUF5QkQ7Ozs7RUFsQzJCQywrQzs7QUF1QzlCZCxlQUFlLENBQUNlLFNBQWhCLEdBQTRCO0FBQzFCWixNQUFJLEVBQUVhLGtEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREc7QUFFMUJkLE9BQUssRUFBRVksa0RBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGRTtBQUcxQmIsT0FBSyxFQUFFVyxrREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUhFO0FBSTFCWixVQUFRLEVBQUVVLGtEQUFTLENBQUNHO0FBSk0sQ0FBNUI7QUFPZW5CLDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CYXNlQ29sb3JQaWNrZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCB7IFNrZXRjaFBpY2tlciB9IGZyb20gJ3JlYWN0LWNvbG9yJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEJhc2VDb2xvclBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzQ29sb3JQaWNrZXJPcGVuOiBmYWxzZVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBsYWJlbCwgdmFsdWUsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1lbmRcIj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxuICAgICAgICAgICAgb25DaGFuZ2UodmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiIzAwMDAwMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBzdHlsZT17e2hlaWdodDogJzMwcHgnLCB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiB2YWx1ZX19XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWwtMlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7aXNDb2xvclBpY2tlck9wZW46ICF0aGlzLnN0YXRlLmlzQ29sb3JQaWNrZXJPcGVufSl9PlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5pc0NvbG9yUGlja2VyT3BlbiA/IDxTa2V0Y2hQaWNrZXIgY29sb3I9e3ZhbHVlfSBvbkNoYW5nZT17KGMpID0+IG9uQ2hhbmdlKGMuaGV4KX0gLz4gOiBudWxsXG4gICAgICAgIH1cblxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbkJhc2VDb2xvclBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29sb3JQaWNrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BaseColorPicker.js\n");

/***/ })

})