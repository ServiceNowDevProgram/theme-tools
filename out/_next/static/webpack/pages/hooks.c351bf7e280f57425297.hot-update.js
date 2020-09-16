webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/get */ \"./node_modules/lodash/get.js\");\n/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isString */ \"./node_modules/lodash/isString.js\");\n/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_9__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectFilter(_ref) {\n  var _this2 = this;\n\n  var value = _ref.value,\n      setValue = _ref.setValue,\n      options = _ref.options;\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: value,\n    onChange: function onChange(e) {\n      setValue(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_c2 = SelectFilter;\n\nfunction access(accessor, row) {\n  if (lodash_isString__WEBPACK_IMPORTED_MODULE_9___default()(accessor)) {\n    return lodash_get__WEBPACK_IMPORTED_MODULE_8___default()(row, accessor);\n  }\n}\n\nfunction getOptions(columns, columnId, data) {\n  var column = columns.find(function (x) {\n    return x.id === columnId;\n  });\n  var options = [];\n\n  var _iterator = _createForOfIteratorHelper(data),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return data.map(function (x) {\n    return access(column.accessor, x);\n  });\n  var value = access(column.accessor);\n  console.log(column);\n  console.log(columnId);\n  return [];\n} // function DefaultColumnFilter({column: {filterValue, setFilter}}) {\n// \treturn (\n// \t\t<input\n// \t\t\tclassName=\"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n// \t\t\ttype=\"text\"\n// \t\t\tvalue={filterValue || ''}\n// \t\t\tonChange={(e) => {\n// \t\t\t\tsetFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n// \t\t\t}}\n// \t\t\tplaceholder=\"Search for value\"\n// \t\t/>\n// \t);\n// }\n// function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {\n// \treturn (\n// \t\t<label className=\"block text-gray-700  flex items-center h-6\">\n// \t\t\t<input\n// \t\t\t\tclassName=\"mr-2 leading-tight\"\n// \t\t\t\ttype=\"checkbox\"\n// \t\t\t\tchecked={filterValue}\n// \t\t\t\tonChange={(e) => {\n// \t\t\t\t\tsetFilter(!filterValue);\n// \t\t\t\t}}\n// \t\t\t/>\n// \t\t\t<span className=\"text-xs font-normal\">Exists</span>\n// \t\t</label>\n// \t);\n// }\n\n\nfunction Table(_ref2) {\n  _s();\n\n  var _this3 = this;\n\n  var columns = _ref2.columns,\n      data = _ref2.data,\n      onFilterChange = _ref2.onFilterChange,\n      controlledFilters = _ref2.filters;\n\n  // const filterTypes = React.useMemo(\n  // \t() => ({\n  // \t\t// Add a new fuzzyTextFilterFn filter type.\n  // \t\texists: (rows, id, filterValue) => {\n  // \t\t\tif (!filterValue) return [...rows];\n  // \t\t\treturn rows.filter((row) => {\n  // \t\t\t\tconst rowValue = row.values[id];\n  // \t\t\t\treturn (rowValue || '') !== '';\n  // \t\t\t});\n  // \t\t},\n  // \t}),\n  // \t[]\n  // );\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 8\n        }\n      }), column.render('Header'));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c3 = Table;\nfunction HooksPage() {\n  _s2();\n\n  var _this4 = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return [{\n      id: 'scssVariable',\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'customProperty',\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      id: 'group',\n      Header: 'Group',\n      accessor: 'group' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'subgroup',\n      Header: 'Subgroup',\n      accessor: 'subgroup' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'fallbacks',\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      } // Filter: ExistsColumnFilter,\n      // filter: 'exists',\n\n    }, {\n      id: 'defaultValue',\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n      Cell: function Cell(_ref3) {\n        var value = _ref3.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_5__[\"isValidHexColor\"])(value)) {\n          return String(value);\n        }\n\n        return __jsx(\"div\", {\n          className: \"flex items-center\",\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 210,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-gray-600 mr-1\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 211,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 226,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 227,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 229,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 230,\n      columnNumber: 5\n    }\n  }, __jsx(SelectFilter, {\n    value: filters.group,\n    setValue: setFilters,\n    options: getOptions(columns, 'group', _data_colors_json__WEBPACK_IMPORTED_MODULE_6__),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 231,\n      columnNumber: 6\n    }\n  })), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_6__,\n    onFilterChange: function onFilterChange(x) {\n      console.log(x); // // if (JSON.stringify(x.filters) !== JSON.stringify(params.filters)) {\n      // if (x.filters !== params.filters) {\n      // \tsetFilters(x);\n      // }\n    } // onFilterChange={setParams}\n    ,\n    filters: filters,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s2(HooksPage, \"7VUlpGoJp3HhBNQpbSk79DmsrAw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c4 = HooksPage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectFilter\");\n$RefreshReg$(_c3, \"Table\");\n$RefreshReg$(_c4, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RGaWx0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib3B0aW9ucyIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiYWNjZXNzIiwiYWNjZXNzb3IiLCJyb3ciLCJpc1N0cmluZyIsImdldCIsImdldE9wdGlvbnMiLCJjb2x1bW5zIiwiY29sdW1uSWQiLCJkYXRhIiwiY29sdW1uIiwiZmluZCIsIngiLCJpZCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwiVGFibGUiLCJvbkZpbHRlckNoYW5nZSIsImNvbnRyb2xsZWRGaWx0ZXJzIiwiZmlsdGVycyIsInVzZVRhYmxlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkhvb2tzUGFnZSIsInVzZVN0YXRlIiwic2V0RmlsdGVycyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlTWVtbyIsIkhlYWRlciIsImZhbGxiYWNrcyIsImpvaW4iLCJDZWxsIiwiaXNWYWxpZEhleENvbG9yIiwiU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiZ3JvdXAiLCJjb2xvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUFXLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaUJBLEtBQUssQ0FBQ0MsUUFBdkIsQ0FBWDtBQUFBLENBQWQ7O0tBQU1GLEs7O0FBRU4sU0FBU0csWUFBVCxPQUFrRDtBQUFBOztBQUFBLE1BQTNCQyxLQUEyQixRQUEzQkEsS0FBMkI7QUFBQSxNQUFwQkMsUUFBb0IsUUFBcEJBLFFBQW9CO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBQ2pELFNBQ0M7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxhQUFTLEVBQUMsNEtBRFg7QUFFQyxTQUFLLEVBQUVGLEtBRlI7QUFHQyxZQUFRLEVBQUUsa0JBQUNHLENBQUQsRUFBTztBQUNoQkYsY0FBUSxDQUFDRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0osS0FBVCxJQUFrQkssU0FBbkIsQ0FBUjtBQUNBLEtBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DO0FBQVEsU0FBSyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQU5ELEVBT0VILE9BQU8sQ0FBQ0ksR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsQ0FBVDtBQUFBLFdBQ1o7QUFBUSxTQUFHLEVBQUVBLENBQWI7QUFBZ0IsV0FBSyxFQUFFRCxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VBLE1BREYsQ0FEWTtBQUFBLEdBQVosQ0FQRixDQURELEVBY0M7QUFBSyxhQUFTLEVBQUMscUZBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLHNCQURYO0FBRUMsU0FBSyxFQUFDLDRCQUZQO0FBR0MsV0FBTyxFQUFDLFdBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlDO0FBQU0sS0FBQyxFQUFDLDRFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxDQURELENBZEQsQ0FERDtBQXlCQTs7TUExQlFSLFk7O0FBNEJULFNBQVNVLE1BQVQsQ0FBZ0JDLFFBQWhCLEVBQTBCQyxHQUExQixFQUErQjtBQUM5QixNQUFJQyxzREFBUSxDQUFDRixRQUFELENBQVosRUFBd0I7QUFDdkIsV0FBT0csaURBQUcsQ0FBQ0YsR0FBRCxFQUFNRCxRQUFOLENBQVY7QUFDQTtBQUNEOztBQUVELFNBQVNJLFVBQVQsQ0FBb0JDLE9BQXBCLEVBQTZCQyxRQUE3QixFQUF1Q0MsSUFBdkMsRUFBNkM7QUFDNUMsTUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxVQUFDQyxDQUFEO0FBQUEsV0FBT0EsQ0FBQyxDQUFDQyxFQUFGLEtBQVNMLFFBQWhCO0FBQUEsR0FBYixDQUFmO0FBQ0EsTUFBTWQsT0FBTyxHQUFHLEVBQWhCOztBQUY0Qyw2Q0FHekJlLElBSHlCO0FBQUE7O0FBQUE7QUFHNUMsd0RBQXlCO0FBQUEsVUFBZEssSUFBYztBQUN4QjtBQUoyQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUs1QyxTQUFPTCxJQUFJLENBQUNYLEdBQUwsQ0FBUyxVQUFDYyxDQUFEO0FBQUEsV0FBT1gsTUFBTSxDQUFDUyxNQUFNLENBQUNSLFFBQVIsRUFBa0JVLENBQWxCLENBQWI7QUFBQSxHQUFULENBQVA7QUFDQSxNQUFNcEIsS0FBSyxHQUFHUyxNQUFNLENBQUNTLE1BQU0sQ0FBQ1IsUUFBUixDQUFwQjtBQUNBYSxTQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBWjtBQUNBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWVIsUUFBWjtBQUNBLFNBQU8sRUFBUDtBQUNBLEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsS0FBVCxRQUE0RTtBQUFBOztBQUFBOztBQUFBLE1BQTVEVixPQUE0RCxTQUE1REEsT0FBNEQ7QUFBQSxNQUFuREUsSUFBbUQsU0FBbkRBLElBQW1EO0FBQUEsTUFBN0NTLGNBQTZDLFNBQTdDQSxjQUE2QztBQUFBLE1BQXBCQyxpQkFBb0IsU0FBN0JDLE9BQTZCOztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWIyRSxrQkFxQnZFQyw0REFBUSxDQUFDO0FBQ1pkLFdBQU8sRUFBUEEsT0FEWTtBQUVaRSxRQUFJLEVBQUpBO0FBRlksR0FBRCxDQXJCK0Q7QUFBQSxNQWdCMUVhLGFBaEIwRSxhQWdCMUVBLGFBaEIwRTtBQUFBLE1BaUIxRUMsaUJBakIwRSxhQWlCMUVBLGlCQWpCMEU7QUFBQSxNQWtCMUVDLFlBbEIwRSxhQWtCMUVBLFlBbEIwRTtBQUFBLE1BbUIxRUMsSUFuQjBFLGFBbUIxRUEsSUFuQjBFO0FBQUEsTUFvQjFFQyxVQXBCMEUsYUFvQjFFQSxVQXBCMEUsRUEwQjNFOzs7QUFDQSxTQUNDO0FBQ0MsYUFBUyxFQUFDO0FBRFgsS0FFS0osYUFBYSxFQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFRSxZQUFZLENBQUMxQixHQUFiLENBQWlCLFVBQUM2QixXQUFEO0FBQUEsV0FDakIsbUdBQVFBLFdBQVcsQ0FBQ0MsbUJBQVosRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0VELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQi9CLEdBQXBCLENBQXdCLFVBQUNZLE1BQUQ7QUFBQSxhQUN4QjtBQUNDLGlCQUFTLEVBQUM7QUFEWCxTQUVLQSxNQUFNLENBQUNvQixjQUFQLEVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUdFcEIsTUFBTSxDQUFDcUIsTUFBUCxDQUFjLFFBQWQsQ0FIRixDQUR3QjtBQUFBLEtBQXhCLENBREYsQ0FEaUI7QUFBQSxHQUFqQixDQURGLENBSEQsRUFnQkMsc0dBQVdSLGlCQUFpQixFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0VFLElBQUksQ0FBQzNCLEdBQUwsQ0FBUyxVQUFDSyxHQUFELEVBQU1ILENBQU4sRUFBWTtBQUNyQjBCLGNBQVUsQ0FBQ3ZCLEdBQUQsQ0FBVjtBQUNBLFdBQ0MsbUdBQVFBLEdBQUcsQ0FBQzZCLFdBQUosRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0U3QixHQUFHLENBQUM4QixLQUFKLENBQVVuQyxHQUFWLENBQWMsVUFBQ29DLElBQUQsRUFBVTtBQUN4QixhQUNDO0FBQ0MsaUJBQVMsRUFBQztBQURYLFNBRUtBLElBQUksQ0FBQ0MsWUFBTCxFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFHRUQsSUFBSSxDQUFDSCxNQUFMLENBQVksTUFBWixDQUhGLENBREQ7QUFPQSxLQVJBLENBREYsQ0FERDtBQWFBLEdBZkEsQ0FERixDQWhCRCxDQUREO0FBcUNBOztHQWhFUWQsSztVQXFCSkksb0Q7OztNQXJCSUosSztBQWtFTSxTQUFTbUIsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFDLEVBQUQsQ0FESDtBQUFBLE1BQzVCakIsT0FENEI7QUFBQSxNQUNuQmtCLFVBRG1COztBQUduQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsTUFBTWpDLE9BQU8sR0FBR2tDLDRDQUFLLENBQUNDLE9BQU4sQ0FDZjtBQUFBLFdBQU0sQ0FDTDtBQUNDN0IsUUFBRSxFQUFFLGNBREw7QUFFQzhCLFlBQU0sRUFBRSxlQUZUO0FBR0N6QyxjQUFRLEVBQUUsY0FIWCxDQUlDO0FBQ0E7O0FBTEQsS0FESyxFQVFMO0FBQ0NXLFFBQUUsRUFBRSxnQkFETDtBQUVDOEIsWUFBTSxFQUFFLHFCQUZUO0FBR0N6QyxjQUFRLEVBQUUsZ0JBSFgsQ0FJQztBQUNBOztBQUxELEtBUkssRUFlTDtBQUNDO0FBQ0FXLFFBQUUsRUFBRSxPQUZMO0FBR0M4QixZQUFNLEVBQUUsT0FIVDtBQUlDekMsY0FBUSxFQUFFLE9BSlgsQ0FLQztBQUNBOztBQU5ELEtBZkssRUF1Qkw7QUFDQ1csUUFBRSxFQUFFLFVBREw7QUFFQzhCLFlBQU0sRUFBRSxVQUZUO0FBR0N6QyxjQUFRLEVBQUUsVUFIWCxDQUlDO0FBQ0E7O0FBTEQsS0F2QkssRUE4Qkw7QUFDQ1csUUFBRSxFQUFFLFdBREw7QUFFQzhCLFlBQU0sRUFBRSxXQUZUO0FBR0N6QyxjQUFRLEVBQUUsa0JBQUNDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUN5QyxTQUFKLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBVDtBQUFBLE9BSFgsQ0FJQztBQUNBOztBQUxELEtBOUJLLEVBcUNMO0FBQ0NoQyxRQUFFLEVBQUUsY0FETDtBQUVDOEIsWUFBTSxFQUFFLGVBRlQ7QUFHQ3pDLGNBQVEsRUFBRSxjQUhYO0FBSUM7QUFDQTtBQUNBNEMsVUFBSSxFQUFFLHFCQUFhO0FBQUEsWUFBWHRELEtBQVcsU0FBWEEsS0FBVzs7QUFDbEIsWUFBSSxDQUFDdUQsa0VBQWUsQ0FBQ3ZELEtBQUQsQ0FBcEIsRUFBNkI7QUFDNUIsaUJBQU93RCxNQUFNLENBQUN4RCxLQUFELENBQWI7QUFDQTs7QUFFRCxlQUNDO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFDQyxtQkFBUyxFQUFDLCtEQURYO0FBRUMsZUFBSyxFQUFFO0FBQUN5RCwyQkFBZSxFQUFFekQ7QUFBbEIsV0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQsRUFJRUEsS0FKRixDQUREO0FBUUE7QUFuQkYsS0FyQ0ssQ0FBTjtBQUFBLEdBRGUsRUE0RGYsRUE1RGUsQ0FBaEI7QUErREEsU0FDQyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELENBREQsRUFJQztBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkQsRUFLQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxZQUFEO0FBQ0MsU0FBSyxFQUFFNEIsT0FBTyxDQUFDOEIsS0FEaEI7QUFFQyxZQUFRLEVBQUVaLFVBRlg7QUFHQyxXQUFPLEVBQUVoQyxVQUFVLENBQUNDLE9BQUQsRUFBVSxPQUFWLEVBQW1CNEMsOENBQW5CLENBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUxELEVBWUMsTUFBQyxLQUFEO0FBQ0MsV0FBTyxFQUFFNUMsT0FEVjtBQUVDLFFBQUksRUFBRTRDLDhDQUZQO0FBR0Msa0JBQWMsRUFBRSx3QkFBQ3ZDLENBQUQsRUFBTztBQUN0QkcsYUFBTyxDQUFDQyxHQUFSLENBQVlKLENBQVosRUFEc0IsQ0FFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRGLENBVUM7QUFWRDtBQVdDLFdBQU8sRUFBRVEsT0FYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkQsQ0FERCxDQUREO0FBOEJBOztJQWxHdUJnQixTO1VBR1JJLHFEOzs7TUFIUUosUyIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZVRhYmxlLCB1c2VGaWx0ZXJzLCB1c2VHbG9iYWxGaWx0ZXJ9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7aXNWYWxpZEhleENvbG9yfSBmcm9tICcuLi8uLi9saWIvY29sb3InO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2RhdGEvY29sb3JzLmpzb24nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnbG9kYXNoL2lzU3RyaW5nJztcblxuY29uc3QgTm9Tc3IgPSAocHJvcHMpID0+IDxSZWFjdC5GcmFnbWVudD57cHJvcHMuY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XG5cbmZ1bmN0aW9uIFNlbGVjdEZpbHRlcih7dmFsdWUsIHNldFZhbHVlLCBvcHRpb25zfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxuXHRcdFx0XHRcdFx0e29wdGlvbn1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDBcIj5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gYWNjZXNzKGFjY2Vzc29yLCByb3cpIHtcblx0aWYgKGlzU3RyaW5nKGFjY2Vzc29yKSkge1xuXHRcdHJldHVybiBnZXQocm93LCBhY2Nlc3Nvcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhjb2x1bW5zLCBjb2x1bW5JZCwgZGF0YSkge1xuXHRjb25zdCBjb2x1bW4gPSBjb2x1bW5zLmZpbmQoKHgpID0+IHguaWQgPT09IGNvbHVtbklkKTtcblx0Y29uc3Qgb3B0aW9ucyA9IFtdO1xuXHRmb3IgKGNvbnN0IGl0ZW0gb2YgZGF0YSkge1xuXHR9XG5cdHJldHVybiBkYXRhLm1hcCgoeCkgPT4gYWNjZXNzKGNvbHVtbi5hY2Nlc3NvciwgeCkpO1xuXHRjb25zdCB2YWx1ZSA9IGFjY2Vzcyhjb2x1bW4uYWNjZXNzb3IpO1xuXHRjb25zb2xlLmxvZyhjb2x1bW4pO1xuXHRjb25zb2xlLmxvZyhjb2x1bW5JZCk7XG5cdHJldHVybiBbXTtcbn1cblxuLy8gZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHNldEZpbHRlcn19KSB7XG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGlucHV0XG4vLyBcdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTEgcHgtMiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCJcbi8vIFx0XHRcdHR5cGU9XCJ0ZXh0XCJcbi8vIFx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cbi8vIFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuLy8gXHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuLy8gXHRcdFx0fX1cbi8vIFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB2YWx1ZVwiXG4vLyBcdFx0Lz5cbi8vIFx0KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gRXhpc3RzQ29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSA9IGZhbHNlLCBzZXRGaWx0ZXJ9fSkge1xuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwICBmbGV4IGl0ZW1zLWNlbnRlciBoLTZcIj5cbi8vIFx0XHRcdDxpbnB1dFxuLy8gXHRcdFx0XHRjbGFzc05hbWU9XCJtci0yIGxlYWRpbmctdGlnaHRcIlxuLy8gXHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuLy8gXHRcdFx0XHRjaGVja2VkPXtmaWx0ZXJWYWx1ZX1cbi8vIFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG4vLyBcdFx0XHRcdFx0c2V0RmlsdGVyKCFmaWx0ZXJWYWx1ZSk7XG4vLyBcdFx0XHRcdH19XG4vLyBcdFx0XHQvPlxuLy8gXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW5vcm1hbFwiPkV4aXN0czwvc3Bhbj5cbi8vIFx0XHQ8L2xhYmVsPlxuLy8gXHQpO1xuLy8gfVxuXG5mdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YSwgb25GaWx0ZXJDaGFuZ2UsIGZpbHRlcnM6IGNvbnRyb2xsZWRGaWx0ZXJzfSkge1xuXHQvLyBjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXG5cdC8vIFx0KCkgPT4gKHtcblx0Ly8gXHRcdC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cblx0Ly8gXHRcdGV4aXN0czogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xuXHQvLyBcdFx0XHRpZiAoIWZpbHRlclZhbHVlKSByZXR1cm4gWy4uLnJvd3NdO1xuXHQvLyBcdFx0XHRyZXR1cm4gcm93cy5maWx0ZXIoKHJvdykgPT4ge1xuXHQvLyBcdFx0XHRcdGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG5cdC8vIFx0XHRcdFx0cmV0dXJuIChyb3dWYWx1ZSB8fCAnJykgIT09ICcnO1xuXHQvLyBcdFx0XHR9KTtcblx0Ly8gXHRcdH0sXG5cdC8vIFx0fSksXG5cdC8vIFx0W11cblx0Ly8gKTtcblxuXHRjb25zdCB7XG5cdFx0Z2V0VGFibGVQcm9wcyxcblx0XHRnZXRUYWJsZUJvZHlQcm9wcyxcblx0XHRoZWFkZXJHcm91cHMsXG5cdFx0cm93cyxcblx0XHRwcmVwYXJlUm93LFxuXHR9ID0gdXNlVGFibGUoe1xuXHRcdGNvbHVtbnMsXG5cdFx0ZGF0YSxcblx0fSk7XG5cblx0Ly8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuXHRyZXR1cm4gKFxuXHRcdDx0YWJsZVxuXHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRhYmxlLWZpeGVkIHctZnVsbCBib3JkZXIgYm9yZGVyLWNvbGxhcHNlXCJcblx0XHRcdHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHR7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXApID0+IChcblx0XHRcdFx0XHQ8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHR7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8dGhcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1ib3R0b20gcHktNCBweC02IGJnLWdyZXktbGlnaHRlc3QgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtZ3JleS1kYXJrIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdHtjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX1cblx0XHRcdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG5cdFx0XHRcdHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG5cdFx0XHRcdFx0cHJlcGFyZVJvdyhyb3cpO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0e3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQteHMgcHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb29rc1BhZ2UoKSB7XG5cdGNvbnN0IFtmaWx0ZXJzLCBzZXRGaWx0ZXJzXSA9IHVzZVN0YXRlKHt9KTtcblxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXHRjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnc2Nzc1ZhcmlhYmxlJyxcblx0XHRcdFx0SGVhZGVyOiAnU0NTUyBWYXJpYWJsZScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc2Nzc1ZhcmlhYmxlJyxcblx0XHRcdFx0Ly8gRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2N1c3RvbVByb3BlcnR5Jyxcblx0XHRcdFx0SGVhZGVyOiAnQ1NTIEN1c3RvbSBQcm9wZXJ0eScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnY3VzdG9tUHJvcGVydHknLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIChcImdlbmVyaWNcInxcImNhdGVnb3J5XCJ8XCJzcGVjaWZpY1wiKVxuXHRcdFx0XHRpZDogJ2dyb3VwJyxcblx0XHRcdFx0SGVhZGVyOiAnR3JvdXAnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2dyb3VwJyxcblx0XHRcdFx0Ly8gRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnc3ViZ3JvdXAnLFxuXHRcdFx0XHRIZWFkZXI6ICdTdWJncm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc3ViZ3JvdXAnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdmYWxsYmFja3MnLFxuXHRcdFx0XHRIZWFkZXI6ICdGYWxsYmFja3MnLFxuXHRcdFx0XHRhY2Nlc3NvcjogKHJvdykgPT4gcm93LmZhbGxiYWNrcy5qb2luKCcsICcpLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IEV4aXN0c0NvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnZXhpc3RzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnZGVmYXVsdFZhbHVlJyxcblx0XHRcdFx0SGVhZGVyOiAnRGVmYXVsdCBWYWx1ZScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnZGVmYXVsdFZhbHVlJyxcblx0XHRcdFx0Ly8gRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHRcdENlbGw6ICh7dmFsdWV9KSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFpc1ZhbGlkSGV4Q29sb3IodmFsdWUpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidy00IGgtNCByb3VuZGVkLWZ1bGwgaW5saW5lLWJsb2NrIGJvcmRlciBib3JkZXItZ3JheS02MDAgbXItMVwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHt2YWx1ZX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W11cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxOb1Nzcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5WYXJpYWJsZXMgfCBUaGVtZSBUb29sczwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTZcIj5UaGVtZSBWYXJpYWJsZXMgU2VhcmNoPC9oMT5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8U2VsZWN0RmlsdGVyXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZmlsdGVycy5ncm91cH1cblx0XHRcdFx0XHRcdHNldFZhbHVlPXtzZXRGaWx0ZXJzfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17Z2V0T3B0aW9ucyhjb2x1bW5zLCAnZ3JvdXAnLCBjb2xvcnMpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8VGFibGVcblx0XHRcdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxuXHRcdFx0XHRcdGRhdGE9e2NvbG9yc31cblx0XHRcdFx0XHRvbkZpbHRlckNoYW5nZT17KHgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0XHRcdFx0Ly8gLy8gaWYgKEpTT04uc3RyaW5naWZ5KHguZmlsdGVycykgIT09IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5maWx0ZXJzKSkge1xuXHRcdFx0XHRcdFx0Ly8gaWYgKHguZmlsdGVycyAhPT0gcGFyYW1zLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRcdC8vIFx0c2V0RmlsdGVycyh4KTtcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8vIG9uRmlsdGVyQ2hhbmdlPXtzZXRQYXJhbXN9XG5cdFx0XHRcdFx0ZmlsdGVycz17ZmlsdGVyc31cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})