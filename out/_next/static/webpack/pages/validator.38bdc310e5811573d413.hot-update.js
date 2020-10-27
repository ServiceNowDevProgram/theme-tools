webpackHotUpdate_N_E("pages/validator",{

/***/ "./pages/validator/index.js":
/*!**********************************!*\
  !*** ./pages/validator/index.js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ValidatorPage; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"./node_modules/react-dom/server.browser.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageHeader */ \"./components/PageHeader.js\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Page */ \"./components/Page.js\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Select */ \"./components/Select.js\");\n/* harmony import */ var _lib_jsonAst__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/jsonAst */ \"./lib/jsonAst.js\");\n/* harmony import */ var _lib_cx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/cx */ \"./lib/cx.js\");\n/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tippy.js */ \"./node_modules/tippy.js/dist/tippy.esm.js\");\n/* harmony import */ var _lib_validateRules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/validateRules */ \"./lib/validateRules/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/validator/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar CodeMirror = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var mod;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! react-codemirror2 */ \"./node_modules/react-codemirror2/index.js\", 7));\n\n          case 2:\n            mod = _context.sent;\n            _context.next = 5;\n            return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! codemirror/mode/javascript/javascript */ \"./node_modules/codemirror/mode/javascript/javascript.js\", 7));\n\n          case 5:\n            return _context.abrupt(\"return\", mod.Controlled);\n\n          case 6:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function _c() {\n    return _ref.apply(this, arguments);\n  };\n}(), {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-codemirror2 */ \"./node_modules/react-codemirror2/index.js\"), /*require.resolve*/(/*! codemirror/mode/javascript/javascript */ \"./node_modules/codemirror/mode/javascript/javascript.js\")];\n    },\n    modules: ['react-codemirror2', 'codemirror/mode/javascript/javascript']\n  }\n});\n_c2 = CodeMirror;\nvar fakeData = JSON.stringify({\n  '--now-color--primary-0': '1,1,1'\n}, null, '  ');\n\nfunction toElement(jsx) {\n  var string = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_3__[\"renderToString\"])(jsx);\n  var wrapper = document.createElement('DIV');\n  wrapper.innerHTML = string;\n  return wrapper.children[0];\n}\n\nfunction makeMarker(message) {\n  var jsx = __jsx(\"div\", {\n    className: \"w-2 h-2 bg-red-600 rounded-full relative\",\n    style: {\n      top: '6px',\n      left: '10px'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 3\n    }\n  });\n\n  var el = toElement(jsx);\n  Object(tippy_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(el, {\n    content: message\n  });\n  return el;\n}\n\nvar __N_SSG = true;\nfunction ValidatorPage(_ref2) {\n  _s();\n\n  var _this = this;\n\n  var data = _ref2.data;\n  var path = [{\n    id: 'validator',\n    href: '/validator',\n    label: 'Validator'\n  }];\n  var selectedPath = 'validator';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      validationRun = _useState[0],\n      setValidationRun = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(fakeData),\n      code = _useState2[0],\n      setCode = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      syntaxError = _useState3[0],\n      setSyntaxError = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      lintErrors = _useState4[0],\n      setLintErrors = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      editor = _useState5[0],\n      setEditor = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(data.releases.slice(-1)[0]),\n      selectedRelease = _useState6[0],\n      setSelectedRelease = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (editor) {\n      window.editor = editor;\n    }\n  }, [editor]);\n  var releaseItems = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return data.releases.map(function (id) {\n      return {\n        id: id,\n        label: id\n      };\n    }).reverse();\n  }, []);\n\n  function runValidation() {\n    editor.clearGutter('codelinemarkers');\n    var syntax = _lib_jsonAst__WEBPACK_IMPORTED_MODULE_8__[\"default\"].invalid(code);\n\n    if (syntax) {\n      setSyntaxError(syntax);\n      setLintErrors([]);\n      if (!validationRun) setValidationRun(true);\n      return;\n    }\n\n    var formattedCode = JSON.stringify(JSON.parse(code), null, '  ');\n    setCode(formattedCode);\n    setTimeout(function () {\n      var result = Object(_lib_validateRules__WEBPACK_IMPORTED_MODULE_11__[\"runRules\"])(formattedCode, {\n        release: selectedRelease\n      }, data);\n      result.errors.forEach(function (_ref3) {\n        var node = _ref3.node,\n            message = _ref3.message;\n        var line = node.loc.start.line - 1;\n        editor.setGutterMarker(line, 'codelinemarkers', makeMarker(message));\n      });\n      setSyntaxError(null);\n      setLintErrors(result.errors);\n      if (!validationRun) setValidationRun(true);\n    });\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 3\n    }\n  }, __jsx(_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    label: \"Validator\",\n    path: path,\n    selectedPath: selectedPath,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 4\n    }\n  }), __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"flex items-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 6\n    }\n  }, __jsx(_components_Select__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    label: \"Release\",\n    items: releaseItems,\n    selected: selectedRelease,\n    onSelect: function onSelect(id) {\n      return setSelectedRelease(id);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"flex items-center ml-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 7\n    }\n  }, validationRun && __jsx(\"div\", {\n    className: \"mr-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"inline-block w-3 h-3 rounded rounded-full bg-green-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 10\n    }\n  })), __jsx(\"button\", {\n    className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n    onClick: runValidation,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 8\n    }\n  }, \"Validate\")))), CodeMirror && __jsx(\"div\", {\n    className: Object(_lib_cx__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n      'border-2': true,\n      'p-1': true,\n      'border-white': true,\n      'border-red-500': syntaxError || lintErrors.length > 0\n    }),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 6\n    }\n  }, __jsx(CodeMirror, {\n    value: code,\n    options: {\n      mode: 'application/json',\n      theme: 'material',\n      lineNumbers: true,\n      gutters: ['CodeMirror-linenumbers', 'codelinemarkers']\n    },\n    onBeforeChange: function onBeforeChange(editor, data, value) {\n      setCode(value);\n    },\n    onChange: function onChange(editor, data, value) {},\n    editorDidMount: function editorDidMount(instance) {\n      return setEditor(instance);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    className: \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 147,\n      columnNumber: 5\n    }\n  }, syntaxError && __jsx(\"div\", {\n    className: \"text-red-800\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 8\n    }\n  }, \"\\u274C Invalid JSON, fix the problems identified below:\"), __jsx(\"div\", {\n    className: \"bg-gray-400 text-xs p-4 mt-2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 8\n    }\n  }, __jsx(\"pre\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 9\n    }\n  }, __jsx(\"code\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 10\n    }\n  }, syntaxError.message)))), !syntaxError && __jsx(\"div\", {\n    className: \"text-green-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 8\n    }\n  }, \"\\u2705 JSON syntax is valid\")), lintErrors.length > 0 && __jsx(\"div\", {\n    className: \"text-red-800\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 8\n    }\n  }, \"\\u274C Found \", lintErrors.length, ' ', lintErrors.length === 1 ? 'error' : 'errors', \":\"), lintErrors.map(function (_ref4) {\n    var node = _ref4.node,\n        message = _ref4.message,\n        part = _ref4.part,\n        fix = _ref4.fix;\n    return __jsx(\"div\", {\n      className: \"bg-gray-400 text-xs p-4 mt-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 10\n      }\n    }, __jsx(\"code\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 11\n      }\n    }, node.loc.start.line, \": \", node.key.raw, \": \", node.value.raw, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 176,\n        columnNumber: 12\n      }\n    }), \"ERROR IN \", part.toUpperCase(), \": \", message, fix && __jsx(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 179,\n        columnNumber: 13\n      }\n    }, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 180,\n        columnNumber: 14\n      }\n    }), \"SUGGESTED FIX: \\\"\", node[part].value, \"\\\" \", '>', \" \\\"\", fix, \"\\\"\")));\n  })), !syntaxError && lintErrors.length === 0 && __jsx(\"div\", {\n    className: \"text-green-600\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"font-semibold\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 8\n    }\n  }, \"\\u2705 Found no errors\")))));\n}\n\n_s(ValidatorPage, \"5SX92DVovhhrrlD71FI6BfmWxZo=\");\n\n_c3 = ValidatorPage;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CodeMirror$dynamic\");\n$RefreshReg$(_c2, \"CodeMirror\");\n$RefreshReg$(_c3, \"ValidatorPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdmFsaWRhdG9yL2luZGV4LmpzPzBlOGUiXSwibmFtZXMiOlsiQ29kZU1pcnJvciIsImR5bmFtaWMiLCJtb2QiLCJDb250cm9sbGVkIiwic3NyIiwiZmFrZURhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidG9FbGVtZW50IiwianN4Iiwic3RyaW5nIiwicmVuZGVyVG9TdHJpbmciLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2hpbGRyZW4iLCJtYWtlTWFya2VyIiwibWVzc2FnZSIsInRvcCIsImxlZnQiLCJlbCIsInRpcHB5IiwiY29udGVudCIsIlZhbGlkYXRvclBhZ2UiLCJkYXRhIiwicGF0aCIsImlkIiwiaHJlZiIsImxhYmVsIiwic2VsZWN0ZWRQYXRoIiwidXNlU3RhdGUiLCJ2YWxpZGF0aW9uUnVuIiwic2V0VmFsaWRhdGlvblJ1biIsImNvZGUiLCJzZXRDb2RlIiwic3ludGF4RXJyb3IiLCJzZXRTeW50YXhFcnJvciIsImxpbnRFcnJvcnMiLCJzZXRMaW50RXJyb3JzIiwiZWRpdG9yIiwic2V0RWRpdG9yIiwicmVsZWFzZXMiLCJzbGljZSIsInNlbGVjdGVkUmVsZWFzZSIsInNldFNlbGVjdGVkUmVsZWFzZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsInJlbGVhc2VJdGVtcyIsIlJlYWN0IiwidXNlTWVtbyIsIm1hcCIsInJldmVyc2UiLCJydW5WYWxpZGF0aW9uIiwiY2xlYXJHdXR0ZXIiLCJzeW50YXgiLCJqc29uQXN0IiwiaW52YWxpZCIsImZvcm1hdHRlZENvZGUiLCJwYXJzZSIsInNldFRpbWVvdXQiLCJyZXN1bHQiLCJydW5SdWxlcyIsInJlbGVhc2UiLCJlcnJvcnMiLCJmb3JFYWNoIiwibm9kZSIsImxpbmUiLCJsb2MiLCJzdGFydCIsInNldEd1dHRlck1hcmtlciIsImN4IiwibGVuZ3RoIiwibW9kZSIsInRoZW1lIiwibGluZU51bWJlcnMiLCJndXR0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L3ZhbGlkYXRvci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlclRvU3RyaW5nfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BhZ2VIZWFkZXInO1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdlJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWxlY3QnO1xuaW1wb3J0IGpzb25Bc3QgZnJvbSAnLi4vLi4vbGliL2pzb25Bc3QnO1xuaW1wb3J0IGN4IGZyb20gJy4uLy4uL2xpYi9jeCc7XG5pbXBvcnQgdGlwcHkgZnJvbSAndGlwcHkuanMnO1xuaW1wb3J0IHtydW5SdWxlc30gZnJvbSAnLi4vLi4vbGliL3ZhbGlkYXRlUnVsZXMnO1xuXG5jb25zdCBDb2RlTWlycm9yID0gZHluYW1pYyhcblx0YXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IG1vZCA9IGF3YWl0IGltcG9ydCgncmVhY3QtY29kZW1pcnJvcjInKTtcblx0XHRhd2FpdCBpbXBvcnQoJ2NvZGVtaXJyb3IvbW9kZS9qYXZhc2NyaXB0L2phdmFzY3JpcHQnKTtcblx0XHRyZXR1cm4gbW9kLkNvbnRyb2xsZWQ7XG5cdH0sXG5cdHtzc3I6IGZhbHNlfVxuKTtcblxuY29uc3QgZmFrZURhdGEgPSBKU09OLnN0cmluZ2lmeShcblx0e1xuXHRcdCctLW5vdy1jb2xvci0tcHJpbWFyeS0wJzogJzEsMSwxJyxcblx0fSxcblx0bnVsbCxcblx0JyAgJ1xuKTtcblxuZnVuY3Rpb24gdG9FbGVtZW50KGpzeCkge1xuXHRjb25zdCBzdHJpbmcgPSByZW5kZXJUb1N0cmluZyhqc3gpO1xuXHRjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG5cdHdyYXBwZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuXHRyZXR1cm4gd3JhcHBlci5jaGlsZHJlblswXTtcbn1cblxuZnVuY3Rpb24gbWFrZU1hcmtlcihtZXNzYWdlKSB7XG5cdGNvbnN0IGpzeCA9IChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJ3LTIgaC0yIGJnLXJlZC02MDAgcm91bmRlZC1mdWxsIHJlbGF0aXZlXCJcblx0XHRcdHN0eWxlPXt7dG9wOiAnNnB4JywgbGVmdDogJzEwcHgnfX0+PC9kaXY+XG5cdCk7XG5cdGNvbnN0IGVsID0gdG9FbGVtZW50KGpzeCk7XG5cdHRpcHB5KGVsLCB7Y29udGVudDogbWVzc2FnZX0pO1xuXHRyZXR1cm4gZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbGlkYXRvclBhZ2Uoe2RhdGF9KSB7XG5cdGNvbnN0IHBhdGggPSBbe2lkOiAndmFsaWRhdG9yJywgaHJlZjogJy92YWxpZGF0b3InLCBsYWJlbDogJ1ZhbGlkYXRvcid9XTtcblx0Y29uc3Qgc2VsZWN0ZWRQYXRoID0gJ3ZhbGlkYXRvcic7XG5cblx0Y29uc3QgW3ZhbGlkYXRpb25SdW4sIHNldFZhbGlkYXRpb25SdW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKGZha2VEYXRhKTtcblx0Y29uc3QgW3N5bnRheEVycm9yLCBzZXRTeW50YXhFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW2xpbnRFcnJvcnMsIHNldExpbnRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xuXHRjb25zdCBbZWRpdG9yLCBzZXRFZGl0b3JdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtzZWxlY3RlZFJlbGVhc2UsIHNldFNlbGVjdGVkUmVsZWFzZV0gPSB1c2VTdGF0ZShcblx0XHRkYXRhLnJlbGVhc2VzLnNsaWNlKC0xKVswXVxuXHQpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGVkaXRvcikge1xuXHRcdFx0d2luZG93LmVkaXRvciA9IGVkaXRvcjtcblx0XHR9XG5cdH0sIFtlZGl0b3JdKTtcblxuXHRjb25zdCByZWxlYXNlSXRlbXMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IGRhdGEucmVsZWFzZXMubWFwKChpZCkgPT4gKHtpZCwgbGFiZWw6IGlkfSkpLnJldmVyc2UoKSxcblx0XHRbXVxuXHQpO1xuXG5cdGZ1bmN0aW9uIHJ1blZhbGlkYXRpb24oKSB7XG5cdFx0ZWRpdG9yLmNsZWFyR3V0dGVyKCdjb2RlbGluZW1hcmtlcnMnKTtcblxuXHRcdGNvbnN0IHN5bnRheCA9IGpzb25Bc3QuaW52YWxpZChjb2RlKTtcblx0XHRpZiAoc3ludGF4KSB7XG5cdFx0XHRzZXRTeW50YXhFcnJvcihzeW50YXgpO1xuXHRcdFx0c2V0TGludEVycm9ycyhbXSk7XG5cdFx0XHRpZiAoIXZhbGlkYXRpb25SdW4pIHNldFZhbGlkYXRpb25SdW4odHJ1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZm9ybWF0dGVkQ29kZSA9IEpTT04uc3RyaW5naWZ5KEpTT04ucGFyc2UoY29kZSksIG51bGwsICcgICcpO1xuXHRcdHNldENvZGUoZm9ybWF0dGVkQ29kZSk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IHJ1blJ1bGVzKGZvcm1hdHRlZENvZGUsIHtyZWxlYXNlOiBzZWxlY3RlZFJlbGVhc2V9LCBkYXRhKTtcblx0XHRcdHJlc3VsdC5lcnJvcnMuZm9yRWFjaCgoe25vZGUsIG1lc3NhZ2V9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxpbmUgPSBub2RlLmxvYy5zdGFydC5saW5lIC0gMTtcblx0XHRcdFx0ZWRpdG9yLnNldEd1dHRlck1hcmtlcihsaW5lLCAnY29kZWxpbmVtYXJrZXJzJywgbWFrZU1hcmtlcihtZXNzYWdlKSk7XG5cdFx0XHR9KTtcblx0XHRcdHNldFN5bnRheEVycm9yKG51bGwpO1xuXHRcdFx0c2V0TGludEVycm9ycyhyZXN1bHQuZXJyb3JzKTtcblx0XHRcdGlmICghdmFsaWRhdGlvblJ1bikgc2V0VmFsaWRhdGlvblJ1bih0cnVlKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0PFBhZ2VIZWFkZXIgbGFiZWw9XCJWYWxpZGF0b3JcIiBwYXRoPXtwYXRofSBzZWxlY3RlZFBhdGg9e3NlbGVjdGVkUGF0aH0gLz5cblx0XHRcdDxQYWdlPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8U2VsZWN0XG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiUmVsZWFzZVwiXG5cdFx0XHRcdFx0XHRcdGl0ZW1zPXtyZWxlYXNlSXRlbXN9XG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtzZWxlY3RlZFJlbGVhc2V9XG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsoaWQpID0+IHNldFNlbGVjdGVkUmVsZWFzZShpZCl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdHt2YWxpZGF0aW9uUnVuICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1yLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTMgaC0zIHJvdW5kZWQgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTYwMFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtydW5WYWxpZGF0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRWYWxpZGF0ZVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e0NvZGVNaXJyb3IgJiYgKFxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y3goe1xuXHRcdFx0XHRcdFx0XHQnYm9yZGVyLTInOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHQncC0xJzogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0J2JvcmRlci13aGl0ZSc6IHRydWUsXG5cdFx0XHRcdFx0XHRcdCdib3JkZXItcmVkLTUwMCc6IHN5bnRheEVycm9yIHx8IGxpbnRFcnJvcnMubGVuZ3RoID4gMCxcblx0XHRcdFx0XHRcdH0pfT5cblx0XHRcdFx0XHRcdDxDb2RlTWlycm9yXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXtjb2RlfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdFx0XHRcdFx0bW9kZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lOiAnbWF0ZXJpYWwnLFxuXHRcdFx0XHRcdFx0XHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdGd1dHRlcnM6IFsnQ29kZU1pcnJvci1saW5lbnVtYmVycycsICdjb2RlbGluZW1hcmtlcnMnXSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0b25CZWZvcmVDaGFuZ2U9eyhlZGl0b3IsIGRhdGEsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0Q29kZSh2YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZWRpdG9yLCBkYXRhLCB2YWx1ZSkgPT4ge319XG5cdFx0XHRcdFx0XHRcdGVkaXRvckRpZE1vdW50PXsoaW5zdGFuY2UpID0+IHNldEVkaXRvcihpbnN0YW5jZSl9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cblx0XHRcdFx0XHR7c3ludGF4RXJyb3IgJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC04MDBcIj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdOKdjCBJbnZhbGlkIEpTT04sIGZpeCB0aGUgcHJvYmxlbXMgaWRlbnRpZmllZCBiZWxvdzpcblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktNDAwIHRleHQteHMgcC00IG10LTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cHJlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGNvZGU+e3N5bnRheEVycm9yLm1lc3NhZ2V9PC9jb2RlPlxuXHRcdFx0XHRcdFx0XHRcdDwvcHJlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFzeW50YXhFcnJvciAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7inIUgSlNPTiBzeW50YXggaXMgdmFsaWQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtsaW50RXJyb3JzLmxlbmd0aCA+IDAgJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC04MDBcIj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdOKdjCBGb3VuZCB7bGludEVycm9ycy5sZW5ndGh9eycgJ31cblx0XHRcdFx0XHRcdFx0XHR7bGludEVycm9ycy5sZW5ndGggPT09IDEgPyAnZXJyb3InIDogJ2Vycm9ycyd9OlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdHtsaW50RXJyb3JzLm1hcCgoe25vZGUsIG1lc3NhZ2UsIHBhcnQsIGZpeH0pID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMCB0ZXh0LXhzIHAtNCBtdC0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxjb2RlPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtub2RlLmxvYy5zdGFydC5saW5lfToge25vZGUua2V5LnJhd306IHtub2RlLnZhbHVlLnJhd31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFUlJPUiBJTiB7cGFydC50b1VwcGVyQ2FzZSgpfToge21lc3NhZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2ZpeCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTVUdHRVNURUQgRklYOiBcIntub2RlW3BhcnRdLnZhbHVlfVwiIHsnPid9IFwie2ZpeH1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2NvZGU+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0eyFzeW50YXhFcnJvciAmJiBsaW50RXJyb3JzLmxlbmd0aCA9PT0gMCAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNjAwXCI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj7inIUgRm91bmQgbm8gZXJyb3JzPC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1BhZ2U+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXHRjb25zdCBkYXRhID0gcmVxdWlyZSgnLi4vLi4vZGF0YS9ob29rcy5qc29uJyk7XG5cdHJldHVybiB7cHJvcHM6IHtkYXRhfX07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/validator/index.js\n");

/***/ })

})