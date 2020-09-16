webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectFilter(_ref) {\n  var _this2 = this;\n\n  var value = _ref.value,\n      setValue = _ref.setValue,\n      options = _ref.options;\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: value,\n    onChange: function onChange(e) {\n      setValue(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_c2 = SelectFilter;\n\nfunction getOptions(columns, columnId) {\n  console.log(columns);\n  console.log(columnId);\n  return [];\n} // function DefaultColumnFilter({column: {filterValue, setFilter}}) {\n// \treturn (\n// \t\t<input\n// \t\t\tclassName=\"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n// \t\t\ttype=\"text\"\n// \t\t\tvalue={filterValue || ''}\n// \t\t\tonChange={(e) => {\n// \t\t\t\tsetFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n// \t\t\t}}\n// \t\t\tplaceholder=\"Search for value\"\n// \t\t/>\n// \t);\n// }\n// function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {\n// \treturn (\n// \t\t<label className=\"block text-gray-700  flex items-center h-6\">\n// \t\t\t<input\n// \t\t\t\tclassName=\"mr-2 leading-tight\"\n// \t\t\t\ttype=\"checkbox\"\n// \t\t\t\tchecked={filterValue}\n// \t\t\t\tonChange={(e) => {\n// \t\t\t\t\tsetFilter(!filterValue);\n// \t\t\t\t}}\n// \t\t\t/>\n// \t\t\t<span className=\"text-xs font-normal\">Exists</span>\n// \t\t</label>\n// \t);\n// }\n\n\nfunction Table(_ref2) {\n  _s();\n\n  var _this3 = this;\n\n  var columns = _ref2.columns,\n      data = _ref2.data,\n      onFilterChange = _ref2.onFilterChange,\n      controlledFilters = _ref2.filters;\n\n  // const filterTypes = React.useMemo(\n  // \t() => ({\n  // \t\t// Add a new fuzzyTextFilterFn filter type.\n  // \t\texists: (rows, id, filterValue) => {\n  // \t\t\tif (!filterValue) return [...rows];\n  // \t\t\treturn rows.filter((row) => {\n  // \t\t\t\tconst rowValue = row.values[id];\n  // \t\t\t\treturn (rowValue || '') !== '';\n  // \t\t\t});\n  // \t\t},\n  // \t}),\n  // \t[]\n  // );\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 8\n        }\n      }), column.render('Header'));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c3 = Table;\nfunction HooksPage() {\n  _s2();\n\n  var _this4 = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return [{\n      id: 'scssVariable',\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'customProperty',\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      id: 'group',\n      Header: 'Group',\n      accessor: 'group' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'subgroup',\n      Header: 'Subgroup',\n      accessor: 'subgroup' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'fallbacks',\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      } // Filter: ExistsColumnFilter,\n      // filter: 'exists',\n\n    }, {\n      id: 'defaultValue',\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n      Cell: function Cell(_ref3) {\n        var value = _ref3.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_5__[\"isValidHexColor\"])(value)) {\n          return String(value);\n        }\n\n        return __jsx(\"div\", {\n          className: \"flex items-center\",\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 196,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-gray-600 mr-1\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 197,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 213,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 5\n    }\n  }, __jsx(SelectFilter, {\n    value: filters.group,\n    setValue: setFilters,\n    options: getOptions(columns, 'group'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 217,\n      columnNumber: 6\n    }\n  })), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_6__,\n    onFilterChange: function onFilterChange(x) {\n      console.log(x); // // if (JSON.stringify(x.filters) !== JSON.stringify(params.filters)) {\n      // if (x.filters !== params.filters) {\n      // \tsetFilters(x);\n      // }\n    } // onFilterChange={setParams}\n    ,\n    filters: filters,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 223,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s2(HooksPage, \"7VUlpGoJp3HhBNQpbSk79DmsrAw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c4 = HooksPage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectFilter\");\n$RefreshReg$(_c3, \"Table\");\n$RefreshReg$(_c4, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RGaWx0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib3B0aW9ucyIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiZ2V0T3B0aW9ucyIsImNvbHVtbnMiLCJjb2x1bW5JZCIsImNvbnNvbGUiLCJsb2ciLCJUYWJsZSIsImRhdGEiLCJvbkZpbHRlckNoYW5nZSIsImNvbnRyb2xsZWRGaWx0ZXJzIiwiZmlsdGVycyIsInVzZVRhYmxlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkhvb2tzUGFnZSIsInVzZVN0YXRlIiwic2V0RmlsdGVycyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlTWVtbyIsImlkIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJmYWxsYmFja3MiLCJqb2luIiwiQ2VsbCIsImlzVmFsaWRIZXhDb2xvciIsIlN0cmluZyIsImJhY2tncm91bmRDb2xvciIsImdyb3VwIiwiY29sb3JzIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkEs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TyxFQUFFcEMsT0FYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkQsQ0FERCxDQUREO0FBOEJBOztJQWxHdUJrQixTO1VBR1JJLHFEOzs7TUFIUUosUyIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZVRhYmxlLCB1c2VGaWx0ZXJzLCB1c2VHbG9iYWxGaWx0ZXJ9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7aXNWYWxpZEhleENvbG9yfSBmcm9tICcuLi8uLi9saWIvY29sb3InO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2RhdGEvY29sb3JzLmpzb24nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTm9Tc3IgPSAocHJvcHMpID0+IDxSZWFjdC5GcmFnbWVudD57cHJvcHMuY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XG5cbmZ1bmN0aW9uIFNlbGVjdEZpbHRlcih7dmFsdWUsIHNldFZhbHVlLCBvcHRpb25zfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxuXHRcdFx0XHRcdFx0e29wdGlvbn1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDBcIj5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhjb2x1bW5zLCBjb2x1bW5JZCkge1xuXHRjb25zb2xlLmxvZyhjb2x1bW5zKTtcblx0Y29uc29sZS5sb2coY29sdW1uSWQpO1xuXHRyZXR1cm4gW107XG59XG5cbi8vIGZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe2NvbHVtbjoge2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJ9fSkge1xuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDxpbnB1dFxuLy8gXHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0xIHB4LTIgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMFwiXG4vLyBcdFx0XHR0eXBlPVwidGV4dFwiXG4vLyBcdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XG4vLyBcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcbi8vIFx0XHRcdFx0c2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7IC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcbi8vIFx0XHRcdH19XG4vLyBcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdmFsdWVcIlxuLy8gXHRcdC8+XG4vLyBcdCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIEV4aXN0c0NvbHVtbkZpbHRlcih7Y29sdW1uOiB7ZmlsdGVyVmFsdWUgPSBmYWxzZSwgc2V0RmlsdGVyfX0pIHtcbi8vIFx0cmV0dXJuIChcbi8vIFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCAgZmxleCBpdGVtcy1jZW50ZXIgaC02XCI+XG4vLyBcdFx0XHQ8aW5wdXRcbi8vIFx0XHRcdFx0Y2xhc3NOYW1lPVwibXItMiBsZWFkaW5nLXRpZ2h0XCJcbi8vIFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcbi8vIFx0XHRcdFx0Y2hlY2tlZD17ZmlsdGVyVmFsdWV9XG4vLyBcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuLy8gXHRcdFx0XHRcdHNldEZpbHRlcighZmlsdGVyVmFsdWUpO1xuLy8gXHRcdFx0XHR9fVxuLy8gXHRcdFx0Lz5cbi8vIFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ub3JtYWxcIj5FeGlzdHM8L3NwYW4+XG4vLyBcdFx0PC9sYWJlbD5cbi8vIFx0KTtcbi8vIH1cblxuZnVuY3Rpb24gVGFibGUoe2NvbHVtbnMsIGRhdGEsIG9uRmlsdGVyQ2hhbmdlLCBmaWx0ZXJzOiBjb250cm9sbGVkRmlsdGVyc30pIHtcblx0Ly8gY29uc3QgZmlsdGVyVHlwZXMgPSBSZWFjdC51c2VNZW1vKFxuXHQvLyBcdCgpID0+ICh7XG5cdC8vIFx0XHQvLyBBZGQgYSBuZXcgZnV6enlUZXh0RmlsdGVyRm4gZmlsdGVyIHR5cGUuXG5cdC8vIFx0XHRleGlzdHM6IChyb3dzLCBpZCwgZmlsdGVyVmFsdWUpID0+IHtcblx0Ly8gXHRcdFx0aWYgKCFmaWx0ZXJWYWx1ZSkgcmV0dXJuIFsuLi5yb3dzXTtcblx0Ly8gXHRcdFx0cmV0dXJuIHJvd3MuZmlsdGVyKChyb3cpID0+IHtcblx0Ly8gXHRcdFx0XHRjb25zdCByb3dWYWx1ZSA9IHJvdy52YWx1ZXNbaWRdO1xuXHQvLyBcdFx0XHRcdHJldHVybiAocm93VmFsdWUgfHwgJycpICE9PSAnJztcblx0Ly8gXHRcdFx0fSk7XG5cdC8vIFx0XHR9LFxuXHQvLyBcdH0pLFxuXHQvLyBcdFtdXG5cdC8vICk7XG5cblx0Y29uc3Qge1xuXHRcdGdldFRhYmxlUHJvcHMsXG5cdFx0Z2V0VGFibGVCb2R5UHJvcHMsXG5cdFx0aGVhZGVyR3JvdXBzLFxuXHRcdHJvd3MsXG5cdFx0cHJlcGFyZVJvdyxcblx0fSA9IHVzZVRhYmxlKHtcblx0XHRjb2x1bW5zLFxuXHRcdGRhdGEsXG5cdH0pO1xuXG5cdC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcblx0cmV0dXJuIChcblx0XHQ8dGFibGVcblx0XHRcdGNsYXNzTmFtZT1cInRleHQtbGVmdCB0YWJsZS1maXhlZCB3LWZ1bGwgYm9yZGVyIGJvcmRlci1jb2xsYXBzZVwiXG5cdFx0XHR7Li4uZ2V0VGFibGVQcm9wcygpfT5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0e2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwKSA9PiAoXG5cdFx0XHRcdFx0PHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0e2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW4pID0+IChcblx0XHRcdFx0XHRcdFx0PHRoXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tYm90dG9tIHB5LTQgcHgtNiBiZy1ncmV5LWxpZ2h0ZXN0IGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC14cyB0ZXh0LWdyZXktZGFyayBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0ey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0XHR7Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9XG5cdFx0XHRcdFx0XHRcdDwvdGg+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuXHRcdFx0XHR7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuXHRcdFx0XHRcdHByZXBhcmVSb3cocm93KTtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdHtyb3cuY2VsbHMubWFwKChjZWxsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LXhzIHB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NlbGwucmVuZGVyKCdDZWxsJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9va3NQYWdlKCkge1xuXHRjb25zdCBbZmlsdGVycywgc2V0RmlsdGVyc10gPSB1c2VTdGF0ZSh7fSk7XG5cblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cblx0Y29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG5cdFx0KCkgPT4gW1xuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ3Njc3NWYXJpYWJsZScsXG5cdFx0XHRcdEhlYWRlcjogJ1NDU1MgVmFyaWFibGUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ3Njc3NWYXJpYWJsZScsXG5cdFx0XHRcdC8vIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdjdXN0b21Qcm9wZXJ0eScsXG5cdFx0XHRcdEhlYWRlcjogJ0NTUyBDdXN0b20gUHJvcGVydHknLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2N1c3RvbVByb3BlcnR5Jyxcblx0XHRcdFx0Ly8gRmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyAoXCJnZW5lcmljXCJ8XCJjYXRlZ29yeVwifFwic3BlY2lmaWNcIilcblx0XHRcdFx0aWQ6ICdncm91cCcsXG5cdFx0XHRcdEhlYWRlcjogJ0dyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdncm91cCcsXG5cdFx0XHRcdC8vIEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ3N1Ymdyb3VwJyxcblx0XHRcdFx0SGVhZGVyOiAnU3ViZ3JvdXAnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ3N1Ymdyb3VwJyxcblx0XHRcdFx0Ly8gRmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnZmFsbGJhY2tzJyxcblx0XHRcdFx0SGVhZGVyOiAnRmFsbGJhY2tzJyxcblx0XHRcdFx0YWNjZXNzb3I6IChyb3cpID0+IHJvdy5mYWxsYmFja3Muam9pbignLCAnKSxcblx0XHRcdFx0Ly8gRmlsdGVyOiBFeGlzdHNDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2V4aXN0cycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHRcdEhlYWRlcjogJ0RlZmF1bHQgVmFsdWUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHRcdC8vIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0XHRDZWxsOiAoe3ZhbHVlfSkgPT4ge1xuXHRcdFx0XHRcdGlmICghaXNWYWxpZEhleENvbG9yKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctNCBoLTQgcm91bmRlZC1mdWxsIGlubGluZS1ibG9jayBib3JkZXIgYm9yZGVyLWdyYXktNjAwIG1yLTFcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiB2YWx1ZX19PjwvZGl2PlxuXHRcdFx0XHRcdFx0XHR7dmFsdWV9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Tm9Tc3I+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+VmFyaWFibGVzIHwgVGhlbWUgVG9vbHM8L3RpdGxlPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi02XCI+VGhlbWUgVmFyaWFibGVzIFNlYXJjaDwvaDE+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PFNlbGVjdEZpbHRlclxuXHRcdFx0XHRcdFx0dmFsdWU9e2ZpbHRlcnMuZ3JvdXB9XG5cdFx0XHRcdFx0XHRzZXRWYWx1ZT17c2V0RmlsdGVyc31cblx0XHRcdFx0XHRcdG9wdGlvbnM9e2dldE9wdGlvbnMoY29sdW1ucywgJ2dyb3VwJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxUYWJsZVxuXHRcdFx0XHRcdGNvbHVtbnM9e2NvbHVtbnN9XG5cdFx0XHRcdFx0ZGF0YT17Y29sb3JzfVxuXHRcdFx0XHRcdG9uRmlsdGVyQ2hhbmdlPXsoeCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coeCk7XG5cdFx0XHRcdFx0XHQvLyAvLyBpZiAoSlNPTi5zdHJpbmdpZnkoeC5maWx0ZXJzKSAhPT0gSlNPTi5zdHJpbmdpZnkocGFyYW1zLmZpbHRlcnMpKSB7XG5cdFx0XHRcdFx0XHQvLyBpZiAoeC5maWx0ZXJzICE9PSBwYXJhbXMuZmlsdGVycykge1xuXHRcdFx0XHRcdFx0Ly8gXHRzZXRGaWx0ZXJzKHgpO1xuXHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Ly8gb25GaWx0ZXJDaGFuZ2U9e3NldFBhcmFtc31cblx0XHRcdFx0XHRmaWx0ZXJzPXtmaWx0ZXJzfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Ob1Nzcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})