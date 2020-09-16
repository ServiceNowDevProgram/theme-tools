webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      preFilteredRows = _ref2$column.preFilteredRows,\n      setFilter = _ref2$column.setFilter;\n  var count = preFilteredRows.length;\n  return __jsx(\"input\", {\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 3\n    }\n  });\n}\n\n_c3 = DefaultColumnFilter;\n\nfunction Table(_ref3) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref3.columns,\n      data = _ref3.data;\n\n  // Use the state and functions returned from useTable to build your UI\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-top py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 9\n        }\n      }, column.render('Header')), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c4 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      }\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue'\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_5__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c5 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"Table\");\n$RefreshReg$(_c5, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsImNvdW50IiwibGVuZ3RoIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsInVzZVRhYmxlIiwidXNlRmlsdGVycyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwiY2FuRmlsdGVyIiwiRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJIb29rc1BhZ2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImZpbHRlciIsImZhbGxiYWNrcyIsImpvaW4iLCJjb2xvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRDtBQUFBLFNBQVcsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFpQkEsS0FBSyxDQUFDQyxRQUF2QixDQUFYO0FBQUEsQ0FBZDs7S0FBTUYsSzs7QUFFTixTQUFTRyxr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QVEsRUFBRSxrQkFBQ3BDLEdBQUQ7QUFBQSxlQUFTQSxHQUFHLENBQUNzQyxTQUFKLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBVDtBQUFBO0FBRlgsS0F0QkssRUEwQkw7QUFDQ0osWUFBTSxFQUFFLGVBRFQ7QUFFQ0MsY0FBUSxFQUFFO0FBRlgsS0ExQkssQ0FBTjtBQUFBLEdBRGUsRUFnQ2YsRUFoQ2UsQ0FBaEI7QUFtQ0EsU0FDQyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELENBREQsRUFJQztBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkQsRUFLQyxNQUFDLEtBQUQ7QUFBTyxXQUFPLEVBQUV0QixPQUFoQjtBQUF5QixRQUFJLEVBQUUwQiw4Q0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBREQsQ0FERDtBQVdBOztJQS9DdUJOLFM7O01BQUFBLFMiLCJmaWxlIjoiLi9wYWdlcy9ob29rcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHt1c2VUYWJsZSwgdXNlRmlsdGVycywgdXNlR2xvYmFsRmlsdGVyfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vZGF0YS9jb2xvcnMuanNvbic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBOb1NzciA9IChwcm9wcykgPT4gPFJlYWN0LkZyYWdtZW50Pntwcm9wcy5jaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PjtcblxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcblx0Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZH0sXG59KSB7XG5cdC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXG5cdC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3Ncblx0Y29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KCk7XG5cdFx0cHJlRmlsdGVyZWRSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuXHRcdFx0b3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV07XG5cdH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSk7XG5cdC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMiBwci04IHJvdW5kZWQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcblx0XHRcdFx0dmFsdWU9e2ZpbHRlclZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cblx0XHRcdFx0e29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcblx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XG5cdFx0XHRcdFx0XHR7b3B0aW9ufVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgdGV4dC1ncmF5LTcwMFwiPlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxuXHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIiAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtcblx0Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHByZUZpbHRlcmVkUm93cywgc2V0RmlsdGVyfSxcbn0pIHtcblx0Y29uc3QgY291bnQgPSBwcmVGaWx0ZXJlZFJvd3MubGVuZ3RoO1xuXG5cdHJldHVybiAoXG5cdFx0PGlucHV0XG5cdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XG5cdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0c2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7IC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcblx0XHRcdH19XG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gVGFibGUoe2NvbHVtbnMsIGRhdGF9KSB7XG5cdC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcblx0Y29uc3Qge1xuXHRcdGdldFRhYmxlUHJvcHMsXG5cdFx0Z2V0VGFibGVCb2R5UHJvcHMsXG5cdFx0aGVhZGVyR3JvdXBzLFxuXHRcdHJvd3MsXG5cdFx0cHJlcGFyZVJvdyxcblx0fSA9IHVzZVRhYmxlKFxuXHRcdHtcblx0XHRcdGNvbHVtbnMsXG5cdFx0XHRkYXRhLFxuXHRcdH0sXG5cdFx0dXNlRmlsdGVyc1xuXHRcdC8vIHVzZUdsb2JhbEZpbHRlclxuXHQpO1xuXG5cdC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcblx0cmV0dXJuIChcblx0XHQ8dGFibGVcblx0XHRcdGNsYXNzTmFtZT1cInRleHQtbGVmdCB3LWZ1bGwgYm9yZGVyIGJvcmRlci1jb2xsYXBzZVwiXG5cdFx0XHR7Li4uZ2V0VGFibGVQcm9wcygpfT5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0e2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwKSA9PiAoXG5cdFx0XHRcdFx0PHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0e2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW4pID0+IChcblx0XHRcdFx0XHRcdFx0PHRoXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tdG9wIHB5LTQgcHgtNiBiZy1ncmV5LWxpZ2h0ZXN0IGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC14cyB0ZXh0LWdyZXktZGFyayBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0ey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIFJlbmRlciB0aGUgY29sdW1ucyBmaWx0ZXIgVUkgKi99XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb2x1bW4uY2FuRmlsdGVyICYmIGNvbHVtbi5GaWx0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvdGg+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuXHRcdFx0XHR7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuXHRcdFx0XHRcdHByZXBhcmVSb3cocm93KTtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdHtyb3cuY2VsbHMubWFwKChjZWxsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LXhzIHB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NlbGwucmVuZGVyKCdDZWxsJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9va3NQYWdlKCkge1xuXHRjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ1NDU1MgVmFyaWFibGUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ3Njc3NWYXJpYWJsZScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnQ1NTIEN1c3RvbSBQcm9wZXJ0eScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnY3VzdG9tUHJvcGVydHknLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdEhlYWRlcjogJ0dyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTdWJncm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc3ViZ3JvdXAnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnRmFsbGJhY2tzJyxcblx0XHRcdFx0YWNjZXNzb3I6IChyb3cpID0+IHJvdy5mYWxsYmFja3Muam9pbignLCAnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0RlZmF1bHQgVmFsdWUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W11cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxOb1Nzcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5WYXJpYWJsZXMgfCBUaGVtZSBUb29sczwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTZcIj5UaGVtZSBWYXJpYWJsZXMgU2VhcmNoPC9oMT5cblx0XHRcdFx0PFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2NvbG9yc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})