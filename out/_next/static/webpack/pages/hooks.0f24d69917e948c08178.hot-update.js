webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectFilter(_ref) {\n  var _this2 = this;\n\n  var value = _ref.value,\n      setValue = _ref.setValue,\n      options = _ref.options;\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: value,\n    onChange: function onChange(e) {\n      setValue(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_c2 = SelectFilter;\n\nfunction getOptions(columns, columnId) {\n  console.log(columns);\n  console.log(columnId);\n} // function DefaultColumnFilter({column: {filterValue, setFilter}}) {\n// \treturn (\n// \t\t<input\n// \t\t\tclassName=\"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n// \t\t\ttype=\"text\"\n// \t\t\tvalue={filterValue || ''}\n// \t\t\tonChange={(e) => {\n// \t\t\t\tsetFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n// \t\t\t}}\n// \t\t\tplaceholder=\"Search for value\"\n// \t\t/>\n// \t);\n// }\n// function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {\n// \treturn (\n// \t\t<label className=\"block text-gray-700  flex items-center h-6\">\n// \t\t\t<input\n// \t\t\t\tclassName=\"mr-2 leading-tight\"\n// \t\t\t\ttype=\"checkbox\"\n// \t\t\t\tchecked={filterValue}\n// \t\t\t\tonChange={(e) => {\n// \t\t\t\t\tsetFilter(!filterValue);\n// \t\t\t\t}}\n// \t\t\t/>\n// \t\t\t<span className=\"text-xs font-normal\">Exists</span>\n// \t\t</label>\n// \t);\n// }\n\n\nfunction Table(_ref2) {\n  _s();\n\n  var _this3 = this;\n\n  var columns = _ref2.columns,\n      data = _ref2.data,\n      onFilterChange = _ref2.onFilterChange,\n      controlledFilters = _ref2.filters;\n\n  // const filterTypes = React.useMemo(\n  // \t() => ({\n  // \t\t// Add a new fuzzyTextFilterFn filter type.\n  // \t\texists: (rows, id, filterValue) => {\n  // \t\t\tif (!filterValue) return [...rows];\n  // \t\t\treturn rows.filter((row) => {\n  // \t\t\t\tconst rowValue = row.values[id];\n  // \t\t\t\treturn (rowValue || '') !== '';\n  // \t\t\t});\n  // \t\t},\n  // \t}),\n  // \t[]\n  // );\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 8\n        }\n      }), column.render('Header'));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c3 = Table;\nfunction HooksPage() {\n  _s2();\n\n  var _this4 = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({}),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  var columns = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {\n    return [{\n      id: 'scssVariable',\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'customProperty',\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty' // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      id: 'group',\n      Header: 'Group',\n      accessor: 'group' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'subgroup',\n      Header: 'Subgroup',\n      accessor: 'subgroup' // Filter: SelectColumnFilter,\n      // filter: 'includes',\n\n    }, {\n      id: 'fallbacks',\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      } // Filter: ExistsColumnFilter,\n      // filter: 'exists',\n\n    }, {\n      id: 'defaultValue',\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      // Filter: DefaultColumnFilter,\n      // filter: 'includes',\n      Cell: function Cell(_ref3) {\n        var value = _ref3.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_5__[\"isValidHexColor\"])(value)) {\n          return String(value);\n        }\n\n        return __jsx(\"div\", {\n          className: \"flex items-center\",\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 195,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-gray-600 mr-1\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 196,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 5\n    }\n  }, __jsx(SelectFilter, {\n    value: filters.group,\n    setValue: setFilters,\n    options: getOptions(columns, 'group'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 216,\n      columnNumber: 6\n    }\n  })), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_6__,\n    onFilterChange: function onFilterChange(x) {\n      console.log(x); // // if (JSON.stringify(x.filters) !== JSON.stringify(params.filters)) {\n      // if (x.filters !== params.filters) {\n      // \tsetFilters(x);\n      // }\n    } // onFilterChange={setParams}\n    ,\n    filters: filters,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s2(HooksPage, \"7VUlpGoJp3HhBNQpbSk79DmsrAw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c4 = HooksPage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectFilter\");\n$RefreshReg$(_c3, \"Table\");\n$RefreshReg$(_c4, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RGaWx0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib3B0aW9ucyIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiZ2V0T3B0aW9ucyIsImNvbHVtbnMiLCJjb2x1bW5JZCIsImNvbnNvbGUiLCJsb2ciLCJUYWJsZSIsImRhdGEiLCJvbkZpbHRlckNoYW5nZSIsImNvbnRyb2xsZWRGaWx0ZXJzIiwiZmlsdGVycyIsInVzZVRhYmxlIiwiZ2V0VGFibGVQcm9wcyIsImdldFRhYmxlQm9keVByb3BzIiwiaGVhZGVyR3JvdXBzIiwicm93cyIsInByZXBhcmVSb3ciLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiY29sdW1uIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJyb3ciLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkhvb2tzUGFnZSIsInVzZVN0YXRlIiwic2V0RmlsdGVycyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlTWVtbyIsImlkIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJmYWxsYmFja3MiLCJqb2luIiwiQ2VsbCIsImlzVmFsaWRIZXhDb2xvciIsIlN0cmluZyIsImJhY2tncm91bmRDb2xvciIsImdyb3VwIiwiY29sb3JzIiwieCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkEs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWkQsQ0FERCxDQUREO0FBOEJBOztJQWxHdUJrQixTO1VBR1JJLHFEOzs7TUFIUUosUyIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZVRhYmxlLCB1c2VGaWx0ZXJzLCB1c2VHbG9iYWxGaWx0ZXJ9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7aXNWYWxpZEhleENvbG9yfSBmcm9tICcuLi8uLi9saWIvY29sb3InO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2RhdGEvY29sb3JzLmpzb24nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTm9Tc3IgPSAocHJvcHMpID0+IDxSZWFjdC5GcmFnbWVudD57cHJvcHMuY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XG5cbmZ1bmN0aW9uIFNlbGVjdEZpbHRlcih7dmFsdWUsIHNldFZhbHVlLCBvcHRpb25zfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxuXHRcdFx0XHRcdFx0e29wdGlvbn1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDBcIj5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gZ2V0T3B0aW9ucyhjb2x1bW5zLCBjb2x1bW5JZCkge1xuXHRjb25zb2xlLmxvZyhjb2x1bW5zKTtcblx0Y29uc29sZS5sb2coY29sdW1uSWQpO1xufVxuXG4vLyBmdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyfX0pIHtcbi8vIFx0cmV0dXJuIChcbi8vIFx0XHQ8aW5wdXRcbi8vIFx0XHRcdGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMSBweC0yIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIlxuLy8gXHRcdFx0dHlwZT1cInRleHRcIlxuLy8gXHRcdFx0dmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxuLy8gXHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG4vLyBcdFx0XHRcdHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpOyAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XG4vLyBcdFx0XHR9fVxuLy8gXHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHZhbHVlXCJcbi8vIFx0XHQvPlxuLy8gXHQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBFeGlzdHNDb2x1bW5GaWx0ZXIoe2NvbHVtbjoge2ZpbHRlclZhbHVlID0gZmFsc2UsIHNldEZpbHRlcn19KSB7XG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgIGZsZXggaXRlbXMtY2VudGVyIGgtNlwiPlxuLy8gXHRcdFx0PGlucHV0XG4vLyBcdFx0XHRcdGNsYXNzTmFtZT1cIm1yLTIgbGVhZGluZy10aWdodFwiXG4vLyBcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG4vLyBcdFx0XHRcdGNoZWNrZWQ9e2ZpbHRlclZhbHVlfVxuLy8gXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcbi8vIFx0XHRcdFx0XHRzZXRGaWx0ZXIoIWZpbHRlclZhbHVlKTtcbi8vIFx0XHRcdFx0fX1cbi8vIFx0XHRcdC8+XG4vLyBcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsXCI+RXhpc3RzPC9zcGFuPlxuLy8gXHRcdDwvbGFiZWw+XG4vLyBcdCk7XG4vLyB9XG5cbmZ1bmN0aW9uIFRhYmxlKHtjb2x1bW5zLCBkYXRhLCBvbkZpbHRlckNoYW5nZSwgZmlsdGVyczogY29udHJvbGxlZEZpbHRlcnN9KSB7XG5cdC8vIGNvbnN0IGZpbHRlclR5cGVzID0gUmVhY3QudXNlTWVtbyhcblx0Ly8gXHQoKSA9PiAoe1xuXHQvLyBcdFx0Ly8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxuXHQvLyBcdFx0ZXhpc3RzOiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XG5cdC8vIFx0XHRcdGlmICghZmlsdGVyVmFsdWUpIHJldHVybiBbLi4ucm93c107XG5cdC8vIFx0XHRcdHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiB7XG5cdC8vIFx0XHRcdFx0Y29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcblx0Ly8gXHRcdFx0XHRyZXR1cm4gKHJvd1ZhbHVlIHx8ICcnKSAhPT0gJyc7XG5cdC8vIFx0XHRcdH0pO1xuXHQvLyBcdFx0fSxcblx0Ly8gXHR9KSxcblx0Ly8gXHRbXVxuXHQvLyApO1xuXG5cdGNvbnN0IHtcblx0XHRnZXRUYWJsZVByb3BzLFxuXHRcdGdldFRhYmxlQm9keVByb3BzLFxuXHRcdGhlYWRlckdyb3Vwcyxcblx0XHRyb3dzLFxuXHRcdHByZXBhcmVSb3csXG5cdH0gPSB1c2VUYWJsZSh7XG5cdFx0Y29sdW1ucyxcblx0XHRkYXRhLFxuXHR9KTtcblxuXHQvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlXG5cdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGFibGUtZml4ZWQgdy1mdWxsIGJvcmRlciBib3JkZXItY29sbGFwc2VcIlxuXHRcdFx0ey4uLmdldFRhYmxlUHJvcHMoKX0+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4gKFxuXHRcdFx0XHRcdDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cblx0XHRcdFx0XHRcdHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDx0aFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJvdHRvbSBweS00IHB4LTYgYmctZ3JleS1saWdodGVzdCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1ncmV5LWRhcmsgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfVxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cblx0XHRcdFx0e3Jvd3MubWFwKChyb3csIGkpID0+IHtcblx0XHRcdFx0XHRwcmVwYXJlUm93KHJvdyk7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHR7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC14cyBweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvb2tzUGFnZSgpIHtcblx0Y29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoe30pO1xuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdzY3NzVmFyaWFibGUnLFxuXHRcdFx0XHRIZWFkZXI6ICdTQ1NTIFZhcmlhYmxlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzY3NzVmFyaWFibGUnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGlkOiAnY3VzdG9tUHJvcGVydHknLFxuXHRcdFx0XHRIZWFkZXI6ICdDU1MgQ3VzdG9tIFByb3BlcnR5Jyxcblx0XHRcdFx0YWNjZXNzb3I6ICdjdXN0b21Qcm9wZXJ0eScsXG5cdFx0XHRcdC8vIEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdGlkOiAnZ3JvdXAnLFxuXHRcdFx0XHRIZWFkZXI6ICdHcm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnZ3JvdXAnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0Ly8gZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdzdWJncm91cCcsXG5cdFx0XHRcdEhlYWRlcjogJ1N1Ymdyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzdWJncm91cCcsXG5cdFx0XHRcdC8vIEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRpZDogJ2ZhbGxiYWNrcycsXG5cdFx0XHRcdEhlYWRlcjogJ0ZhbGxiYWNrcycsXG5cdFx0XHRcdGFjY2Vzc29yOiAocm93KSA9PiByb3cuZmFsbGJhY2tzLmpvaW4oJywgJyksXG5cdFx0XHRcdC8vIEZpbHRlcjogRXhpc3RzQ29sdW1uRmlsdGVyLFxuXHRcdFx0XHQvLyBmaWx0ZXI6ICdleGlzdHMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0aWQ6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0XHRIZWFkZXI6ICdEZWZhdWx0IFZhbHVlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0XHQvLyBGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdC8vIGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdFx0Q2VsbDogKHt2YWx1ZX0pID0+IHtcblx0XHRcdFx0XHRpZiAoIWlzVmFsaWRIZXhDb2xvcih2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBTdHJpbmcodmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQtZnVsbCBpbmxpbmUtYmxvY2sgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCBtci0xXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdmFsdWV9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PE5vU3NyPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPlZhcmlhYmxlcyB8IFRoZW1lIFRvb2xzPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItNlwiPlRoZW1lIFZhcmlhYmxlcyBTZWFyY2g8L2gxPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxTZWxlY3RGaWx0ZXJcblx0XHRcdFx0XHRcdHZhbHVlPXtmaWx0ZXJzLmdyb3VwfVxuXHRcdFx0XHRcdFx0c2V0VmFsdWU9e3NldEZpbHRlcnN9XG5cdFx0XHRcdFx0XHRvcHRpb25zPXtnZXRPcHRpb25zKGNvbHVtbnMsICdncm91cCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8VGFibGVcblx0XHRcdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxuXHRcdFx0XHRcdGRhdGE9e2NvbG9yc31cblx0XHRcdFx0XHRvbkZpbHRlckNoYW5nZT17KHgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0XHRcdFx0Ly8gLy8gaWYgKEpTT04uc3RyaW5naWZ5KHguZmlsdGVycykgIT09IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5maWx0ZXJzKSkge1xuXHRcdFx0XHRcdFx0Ly8gaWYgKHguZmlsdGVycyAhPT0gcGFyYW1zLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRcdC8vIFx0c2V0RmlsdGVycyh4KTtcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8vIG9uRmlsdGVyQ2hhbmdlPXtzZXRQYXJhbXN9XG5cdFx0XHRcdFx0ZmlsdGVycz17ZmlsdGVyc31cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})