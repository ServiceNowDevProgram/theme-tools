webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isString */ \"./node_modules/lodash/isString.js\");\n/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectFilter(_ref) {\n  var _this2 = this;\n\n  var value = _ref.value,\n      setValue = _ref.setValue,\n      options = _ref.options;\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: value,\n    onChange: function onChange(e) {\n      setValue(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_c2 = SelectFilter;\n\nfunction access(accessor, row) {\n  if (lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(accessor)) {\n    return lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(row, accessor);\n  }\n}\n\nfunction getOptions(columns, columnId, data) {\n  var column = columns.find(function (x) {\n    return x.id === columnId;\n  });\n  var options = [];\n\n  var _iterator = _createForOfIteratorHelper(data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      var value = access(column.accessor, item);\n      if (!options.includes(value)) options.push(value);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return options;\n} // function DefaultColumnFilter({column: {filterValue, setFilter}}) {\n// \treturn (\n// \t\t<input\n// \t\t\tclassName=\"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n// \t\t\ttype=\"text\"\n// \t\t\tvalue={filterValue || ''}\n// \t\t\tonChange={(e) => {\n// \t\t\t\tsetFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n// \t\t\t}}\n// \t\t\tplaceholder=\"Search for value\"\n// \t\t/>\n// \t);\n// }\n// function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {\n// \treturn (\n// \t\t<label className=\"block text-gray-700  flex items-center h-6\">\n// \t\t\t<input\n// \t\t\t\tclassName=\"mr-2 leading-tight\"\n// \t\t\t\ttype=\"checkbox\"\n// \t\t\t\tchecked={filterValue}\n// \t\t\t\tonChange={(e) => {\n// \t\t\t\t\tsetFilter(!filterValue);\n// \t\t\t\t}}\n// \t\t\t/>\n// \t\t\t<span className=\"text-xs font-normal\">Exists</span>\n// \t\t</label>\n// \t);\n// }\n\n\nfunction Table(_ref2) {\n  _s();\n\n  var _this3 = this;\n\n  var columns = _ref2.columns,\n      data = _ref2.data,\n      onFilterChange = _ref2.onFilterChange,\n      controlledFilters = _ref2.filters;\n\n  // const filterTypes = React.useMemo(\n  // \t() => ({\n  // \t\t// Add a new fuzzyTextFilterFn filter type.\n  // \t\texists: (rows, id, filterValue) => {\n  // \t\t\tif (!filterValue) return [...rows];\n  // \t\t\treturn rows.filter((row) => {\n  // \t\t\t\tconst rowValue = row.values[id];\n  // \t\t\t\treturn (rowValue || '') !== '';\n  // \t\t\t});\n  // \t\t},\n  // \t}),\n  // \t[]\n  // );\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 8\n        }\n      }), column.render('Header'));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c3 = Table;\nfunction HooksPage() {\n  _s2();\n\n  var _this4 = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return [{\n      id: 'scssVariable',\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'customProperty',\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      id: 'group',\n      Header: 'Group',\n      accessor: 'group' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'subgroup',\n      Header: 'Subgroup',\n      accessor: 'subgroup' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'fallbacks',\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      } // Filter: ExistsColumnFilter,\n      // filter: 'exists',\n\n    }, {\n      id: 'defaultValue',\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n      Cell: function Cell(_ref3) {\n        var value = _ref3.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_5__[\"isValidHexColor\"])(value)) {\n          return String(value);\n        }\n\n        return __jsx(\"div\", {\n          className: \"flex items-center\",\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 208,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-gray-600 mr-1\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 209,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  var groupOptions = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return getOptions(columns, 'group', _data_colors_json__WEBPACK_IMPORTED_MODULE_6__);\n  }, [columns, _data_colors_json__WEBPACK_IMPORTED_MODULE_6__]);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 228,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 232,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 233,\n      columnNumber: 5\n    }\n  }, __jsx(SelectFilter, {\n    value: filters.group,\n    setValue: setFilters,\n    options: getOptions(columns, 'group', _data_colors_json__WEBPACK_IMPORTED_MODULE_6__),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 234,\n      columnNumber: 6\n    }\n  })), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_6__,\n    onFilterChange: function onFilterChange(x) {\n      console.log(x); // // if (JSON.stringify(x.filters) !== JSON.stringify(params.filters)) {\n      // if (x.filters !== params.filters) {\n      // \tsetFilters(x);\n      // }\n    } // onFilterChange={setParams}\n    ,\n    filters: filters,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s2(HooksPage, \"+OpCooOHfXT/hau7piHGs2w/bzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c4 = HooksPage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectFilter\");\n$RefreshReg$(_c3, \"Table\");\n$RefreshReg$(_c4, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RGaWx0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib3B0aW9ucyIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiYWNjZXNzIiwiYWNjZXNzb3IiLCJyb3ciLCJpc1N0cmluZyIsImdldCIsImdldE9wdGlvbnMiLCJjb2x1bW5zIiwiY29sdW1uSWQiLCJkYXRhIiwiY29sdW1uIiwiZmluZCIsIngiLCJpZCIsIml0ZW0iLCJpbmNsdWRlcyIsInB1c2giLCJUYWJsZSIsIm9uRmlsdGVyQ2hhbmdlIiwiY29udHJvbGxlZEZpbHRlcnMiLCJmaWx0ZXJzIiwidXNlVGFibGUiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSG9va3NQYWdlIiwidXNlU3RhdGUiLCJzZXRGaWx0ZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VNZW1vIiwiSGVhZGVyIiwiZmFsbGJhY2tzIiwiam9pbiIsIkNlbGwiLCJpc1ZhbGlkSGV4Q29sb3IiLCJTdHJpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJncm91cE9wdGlvbnMiLCJjb2xvcnMiLCJncm91cCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxT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anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7dXNlVGFibGUsIHVzZUZpbHRlcnMsIHVzZUdsb2JhbEZpbHRlcn0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHtpc1ZhbGlkSGV4Q29sb3J9IGZyb20gJy4uLy4uL2xpYi9jb2xvcic7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vZGF0YS9jb2xvcnMuanNvbic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnO1xuXG5jb25zdCBOb1NzciA9IChwcm9wcykgPT4gPFJlYWN0LkZyYWdtZW50Pntwcm9wcy5jaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PjtcblxuZnVuY3Rpb24gU2VsZWN0RmlsdGVyKHt2YWx1ZSwgc2V0VmFsdWUsIG9wdGlvbnN9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuXHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTIgcHItOCByb3VuZGVkIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG5cdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0c2V0VmFsdWUoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cblx0XHRcdFx0e29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcblx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XG5cdFx0XHRcdFx0XHR7b3B0aW9ufVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgdGV4dC1ncmF5LTcwMFwiPlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxuXHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIiAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBhY2Nlc3MoYWNjZXNzb3IsIHJvdykge1xuXHRpZiAoaXNTdHJpbmcoYWNjZXNzb3IpKSB7XG5cdFx0cmV0dXJuIGdldChyb3csIGFjY2Vzc29yKTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zKGNvbHVtbnMsIGNvbHVtbklkLCBkYXRhKSB7XG5cdGNvbnN0IGNvbHVtbiA9IGNvbHVtbnMuZmluZCgoeCkgPT4geC5pZCA9PT0gY29sdW1uSWQpO1xuXHRjb25zdCBvcHRpb25zID0gW107XG5cdGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBhY2Nlc3MoY29sdW1uLmFjY2Vzc29yLCBpdGVtKTtcblx0XHRpZiAoIW9wdGlvbnMuaW5jbHVkZXModmFsdWUpKSBvcHRpb25zLnB1c2godmFsdWUpO1xuXHR9XG5cdHJldHVybiBvcHRpb25zO1xufVxuXG4vLyBmdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyfX0pIHtcbi8vIFx0cmV0dXJuIChcbi8vIFx0XHQ8aW5wdXRcbi8vIFx0XHRcdGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMSBweC0yIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIlxuLy8gXHRcdFx0dHlwZT1cInRleHRcIlxuLy8gXHRcdFx0dmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxuLy8gXHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG4vLyBcdFx0XHRcdHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpOyAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XG4vLyBcdFx0XHR9fVxuLy8gXHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHZhbHVlXCJcbi8vIFx0XHQvPlxuLy8gXHQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBFeGlzdHNDb2x1bW5GaWx0ZXIoe2NvbHVtbjoge2ZpbHRlclZhbHVlID0gZmFsc2UsIHNldEZpbHRlcn19KSB7XG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgIGZsZXggaXRlbXMtY2VudGVyIGgtNlwiPlxuLy8gXHRcdFx0PGlucHV0XG4vLyBcdFx0XHRcdGNsYXNzTmFtZT1cIm1yLTIgbGVhZGluZy10aWdodFwiXG4vLyBcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG4vLyBcdFx0XHRcdGNoZWNrZWQ9e2ZpbHRlclZhbHVlfVxuLy8gXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcbi8vIFx0XHRcdFx0XHRzZXRGaWx0ZXIoIWZpbHRlclZhbHVlKTtcbi8vIFx0XHRcdFx0fX1cbi8vIFx0XHRcdC8+XG4vLyBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsXCI+RXhpc3RzPC9zcGFuPlxuLy8gXHRcdDwvbGFiZWw+XG4vLyBcdCk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRhYmxlKHtjb2x1bW5zLCBkYXRhLCBvbkZpbHRlckNoYW5nZSwgZmlsdGVyczogY29udHJvbGxlZEZpbHRlcnN9KSB7XG5cdC8vIGNvbnN0IGZpbHRlclR5cGVzID0gUmVhY3QudXNlTWVtbyhcblx0Ly8gXHQoKSA9PiAoe1xuXHQvLyBcdFx0Ly8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxuXHQvLyBcdFx0ZXhpc3RzOiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XG5cdC8vIFx0XHRcdGlmICghZmlsdGVyVmFsdWUpIHJldHVybiBbLi4ucm93c107XG5cdC8vIFx0XHRcdHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiB7XG5cdC8vIFx0XHRcdFx0Y29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gKHJvd1ZhbHVlIHx8ICcnKSAhPT0gJyc7XG5cdC8vIFx0XHRcdH0pO1xuXHQvLyBcdFx0fSxcblx0Ly8gXHR9KSxcblx0Ly8gXHRbXVxuXHQvLyApO1xuXG5cdGNvbnN0IHtcblx0XHRnZXRUYWJsZVByb3BzLFxuXHRcdGdldFRhYmxlQm9keVByb3BzLFxuXHRcdGhlYWRlckdyb3Vwcyxcblx0XHRyb3dzLFxuXHRcdHByZXBhcmVSb3csXG5cdH0gPSB1c2VUYWJsZSh7XG5cdFx0Y29sdW1ucyxcblx0XHRkYXRhLFxuXHR9KTtcblxuXHQvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlXG5cdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGFibGUtZml4ZWQgdy1mdWxsIGJvcmRlciBib3JkZXItY29sbGFwc2VcIlxuXHRcdFx0ey4uLmdldFRhYmxlUHJvcHMoKX0+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4gKFxuXHRcdFx0XHRcdDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cblx0XHRcdFx0XHRcdHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDx0aFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJvdHRvbSBweS00IHB4LTYgYmctZ3JleS1saWdodGVzdCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1ncmV5LWRhcmsgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cblx0XHRcdFx0e3Jvd3MubWFwKChyb3csIGkpID0+IHtcblx0XHRcdFx0XHRwcmVwYXJlUm93KHJvdyk7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHR7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC14cyBweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvb2tzUGFnZSgpIHtcblx0Y29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe30pO1xuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdzY3NzVmFyaWFibGUnLFxuXHRcdFx0XHRIZWFkZXI6ICdTQ1NTIFZhcmlhYmxlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzY3NzVmFyaWFibGUnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnY3VzdG9tUHJvcGVydHknLFxuXHRcdFx0XHRIZWFkZXI6ICdDU1MgQ3VzdG9tIFByb3BlcnR5Jyxcblx0XHRcdFx0YWNjZXNzb3I6ICdjdXN0b21Qcm9wZXJ0eScsXG5cdFx0XHRcdC8vIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdGlkOiAnZ3JvdXAnLFxuXHRcdFx0XHRIZWFkZXI6ICdHcm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnZ3JvdXAnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdzdWJncm91cCcsXG5cdFx0XHRcdEhlYWRlcjogJ1N1Ymdyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzdWJncm91cCcsXG5cdFx0XHRcdC8vIEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2ZhbGxiYWNrcycsXG5cdFx0XHRcdEhlYWRlcjogJ0ZhbGxiYWNrcycsXG5cdFx0XHRcdGFjY2Vzc29yOiAocm93KSA9PiByb3cuZmFsbGJhY2tzLmpvaW4oJywgJyksXG5cdFx0XHRcdC8vIEZpbHRlcjogRXhpc3RzQ29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdleGlzdHMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0XHRIZWFkZXI6ICdEZWZhdWx0IFZhbHVlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdFx0Q2VsbDogKHt2YWx1ZX0pID0+IHtcblx0XHRcdFx0XHRpZiAoIWlzVmFsaWRIZXhDb2xvcih2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBTdHJpbmcodmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQtZnVsbCBpbmxpbmUtYmxvY2sgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCBtci0xXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdmFsdWV9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXVxuXHQpO1xuXG5cdGNvbnN0IGdyb3VwT3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oXG5cdFx0KCkgPT4gZ2V0T3B0aW9ucyhjb2x1bW5zLCAnZ3JvdXAnLCBjb2xvcnMpLFxuXHRcdFtjb2x1bW5zLCBjb2xvcnNdXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Tm9Tc3I+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+VmFyaWFibGVzIHwgVGhlbWUgVG9vbHM8L3RpdGxlPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi02XCI+VGhlbWUgVmFyaWFibGVzIFNlYXJjaDwvaDE+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlbGVjdEZpbHRlclxuXHRcdFx0XHRcdFx0dmFsdWU9e2ZpbHRlcnMuZ3JvdXB9XG5cdFx0XHRcdFx0XHRzZXRWYWx1ZT17c2V0RmlsdGVyc31cblx0XHRcdFx0XHRcdG9wdGlvbnM9e2dldE9wdGlvbnMoY29sdW1ucywgJ2dyb3VwJywgY29sb3JzKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFRhYmxlXG5cdFx0XHRcdFx0Y29sdW1ucz17Y29sdW1uc31cblx0XHRcdFx0XHRkYXRhPXtjb2xvcnN9XG5cdFx0XHRcdFx0b25GaWx0ZXJDaGFuZ2U9eyh4KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh4KTtcblx0XHRcdFx0XHRcdC8vIC8vIGlmIChKU09OLnN0cmluZ2lmeSh4LmZpbHRlcnMpICE9PSBKU09OLnN0cmluZ2lmeShwYXJhbXMuZmlsdGVycykpIHtcblx0XHRcdFx0XHRcdC8vIGlmICh4LmZpbHRlcnMgIT09IHBhcmFtcy5maWx0ZXJzKSB7XG5cdFx0XHRcdFx0XHQvLyBcdHNldEZpbHRlcnMoeCk7XG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvLyBvbkZpbHRlckNoYW5nZT17c2V0UGFyYW1zfVxuXHRcdFx0XHRcdGZpbHRlcnM9e2ZpbHRlcnN9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L05vU3NyPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})