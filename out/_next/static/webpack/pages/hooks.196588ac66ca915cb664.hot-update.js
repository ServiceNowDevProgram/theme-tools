webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      preFilteredRows = _ref2$column.preFilteredRows,\n      setFilter = _ref2$column.setFilter;\n  var count = preFilteredRows.length;\n  return __jsx(\"input\", {\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 3\n    }\n  });\n}\n\n_c3 = DefaultColumnFilter;\n\nfunction Table(_ref3) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref3.columns,\n      data = _ref3.data;\n\n  // Use the state and functions returned from useTable to build your UI\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-top py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 9\n        }\n      }, column.render('Header')), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c4 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      }\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue'\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 168,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_5__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c5 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"Table\");\n$RefreshReg$(_c5, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImNvdW50IiwibGVuZ3RoIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInVzZVRhYmxlIiwidXNlRmlsdGVycyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwiY2FuRmlsdGVyIiwiRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJIb29rc1BhZ2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImZpbHRlciIsImZhbGxiYWNrcyIsImpvaW4iLCJjb2xvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkEsS0FBSyxDQUFDQyxRQUF2QixDQUFYO0FBQUEsQ0FBZDs7S0FBTUYsSzs7QUFFTixTQUFTRyxr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QUFBLGVBQVNBLEdBQUcsQ0FBQ3NDLFNBQUosQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFUO0FBQUE7QUFGWCxLQXJCSyxFQXlCTDtBQUNDSixZQUFNLEVBQUUsZUFEVDtBQUVDQyxjQUFRLEVBQUU7QUFGWCxLQXpCSyxDQUFOO0FBQUEsR0FEZSxFQStCZixFQS9CZSxDQUFoQjtBQWtDQSxTQUNDLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsQ0FERCxFQUlDO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRCxFQUtDLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRXRCLE9BQWhCO0FBQXlCLFFBQUksRUFBRTBCLDhDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERCxDQUREO0FBV0E7O0lBOUN1Qk4sUzs7TUFBQUEsUyIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge3VzZVRhYmxlLCB1c2VGaWx0ZXJzLCB1c2VHbG9iYWxGaWx0ZXJ9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9kYXRhL2NvbG9ycy5qc29uJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IE5vU3NyID0gKHByb3BzKSA9PiA8UmVhY3QuRnJhZ21lbnQ+e3Byb3BzLmNoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+O1xuXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xuXHRjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkfSxcbn0pIHtcblx0Ly8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcblx0Ly8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xuXHRjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKTtcblx0XHRwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG5cdFx0XHRvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXTtcblx0fSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKTtcblx0Ly8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxuXHRcdFx0XHR7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxuXHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cblx0XHRcdFx0XHRcdHtvcHRpb259XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiB0ZXh0LWdyYXktNzAwXCI+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXG5cdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNOS4yOTMgMTIuOTVsLjcwNy43MDdMMTUuNjU3IDhsLTEuNDE0LTEuNDE0TDEwIDEwLjgyOCA1Ljc1NyA2LjU4NiA0LjM0MyA4elwiIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xuXHRjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXJ9LFxufSkge1xuXHRjb25zdCBjb3VudCA9IHByZUZpbHRlcmVkUm93cy5sZW5ndGg7XG5cblx0cmV0dXJuIChcblx0XHQ8aW5wdXRcblx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cblx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuXHRcdFx0fX1cblx0XHQvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YX0pIHtcblx0Ly8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxuXHRjb25zdCB7XG5cdFx0Z2V0VGFibGVQcm9wcyxcblx0XHRnZXRUYWJsZUJvZHlQcm9wcyxcblx0XHRoZWFkZXJHcm91cHMsXG5cdFx0cm93cyxcblx0XHRwcmVwYXJlUm93LFxuXHR9ID0gdXNlVGFibGUoXG5cdFx0e1xuXHRcdFx0Y29sdW1ucyxcblx0XHRcdGRhdGEsXG5cdFx0fSxcblx0XHR1c2VGaWx0ZXJzXG5cdFx0Ly8gdXNlR2xvYmFsRmlsdGVyXG5cdCk7XG5cblx0Ly8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuXHRyZXR1cm4gKFxuXHRcdDx0YWJsZVxuXHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1sZWZ0IHctZnVsbCBib3JkZXIgYm9yZGVyLWNvbGxhcHNlXCJcblx0XHRcdHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHR7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXApID0+IChcblx0XHRcdFx0XHQ8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHR7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8dGhcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi10b3AgcHktNCBweC02IGJnLWdyZXktbGlnaHRlc3QgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtZ3JleS1kYXJrIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7LyogUmVuZGVyIHRoZSBjb2x1bW5zIGZpbHRlciBVSSAqL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NvbHVtbi5jYW5GaWx0ZXIgJiYgY29sdW1uLkZpbHRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG5cdFx0XHRcdHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG5cdFx0XHRcdFx0cHJlcGFyZVJvdyhyb3cpO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0e3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQteHMgcHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb29rc1BhZ2UoKSB7XG5cdGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnU0NTUyBWYXJpYWJsZScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc2Nzc1ZhcmlhYmxlJyxcblx0XHRcdFx0RmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnQ1NTIEN1c3RvbSBQcm9wZXJ0eScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnY3VzdG9tUHJvcGVydHknLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdEhlYWRlcjogJ0dyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTdWJncm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc3ViZ3JvdXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnRmFsbGJhY2tzJyxcblx0XHRcdFx0YWNjZXNzb3I6IChyb3cpID0+IHJvdy5mYWxsYmFja3Muam9pbignLCAnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0RlZmF1bHQgVmFsdWUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W11cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxOb1Nzcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5WYXJpYWJsZXMgfCBUaGVtZSBUb29sczwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTZcIj5UaGVtZSBWYXJpYWJsZXMgU2VhcmNoPC9oMT5cblx0XHRcdFx0PFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2NvbG9yc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})