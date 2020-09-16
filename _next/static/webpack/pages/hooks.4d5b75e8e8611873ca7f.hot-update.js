webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      preFilteredRows = _ref2$column.preFilteredRows,\n      setFilter = _ref2$column.setFilter;\n  return __jsx(\"input\", {\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: \"text\",\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    placeholder: \"Search for value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 3\n    }\n  });\n}\n\n_c3 = DefaultColumnFilter;\n\nfunction ExistsColumnFilter(_ref3) {\n  var _ref3$column = _ref3.column,\n      filterValue = _ref3$column.filterValue,\n      preFilteredRows = _ref3$column.preFilteredRows,\n      setFilter = _ref3$column.setFilter;\n  return __jsx(\"input\", {\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: \"text\",\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    placeholder: \"Search for value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 3\n    }\n  });\n}\n\n_c4 = ExistsColumnFilter;\n\nfunction Table(_ref4) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref4.columns,\n      data = _ref4.data;\n\n  // Use the state and functions returned from useTable to build your UI\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-top py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 9\n        }\n      }, column.render('Header')), console.log(column), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 127,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c5 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      }\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue'\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 186,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 189,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 191,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_5__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 192,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c6 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"ExistsColumnFilter\");\n$RefreshReg$(_c5, \"Table\");\n$RefreshReg$(_c6, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsIkV4aXN0c0NvbHVtbkZpbHRlciIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJjYW5GaWx0ZXIiLCJGaWx0ZXIiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkhvb2tzUGFnZSIsIkhlYWRlciIsImFjY2Vzc29yIiwiZmlsdGVyIiwiZmFsbGJhY2tzIiwiam9pbiIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FBVyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCQSxLQUFLLENBQUNDLFFBQXZCLENBQVg7QUFBQSxDQUFkOztLQUFNRixLOztBQUVOLFNBQVNHLGtCQUFULE9BRUc7QUFBQTs7QUFBQTs7QUFBQSx5QkFERkMsTUFDRTtBQUFBLE1BRE9DLFdBQ1AsZUFET0EsV0FDUDtBQUFBLE1BRG9CQyxTQUNwQixlQURvQkEsU0FDcEI7QUFBQSxNQUQrQkMsZUFDL0IsZUFEK0JBLGVBQy9CO0FBQUEsTUFEZ0RDLEVBQ2hELGVBRGdEQSxFQUNoRDtBQUNGO0FBQ0E7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE9BQU4sQ0FBYyxZQUFNO0FBQ25DLFFBQU1GLE9BQU8sR0FBRyxJQUFJRyxHQUFKLEVBQWhCO0FBQ0FMLG1CQUFlLENBQUNNLE9BQWhCLENBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUNoQ0wsYUFBTyxDQUFDTSxHQUFSLENBQVlELEdBQUcsQ0FBQ0UsTUFBSixDQUFXUixFQUFYLENBQVo7QUFDQSxLQUZEO0FBR0Esd0dBQVdDLE9BQU8sQ0FBQ08sTUFBUixFQUFYO0FBQ0EsR0FOZSxFQU1iLENBQUNSLEVBQUQsRUFBS0QsZUFBTCxDQU5hLENBQWhCLENBSEUsQ0FVRjs7QUFDQSxTQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLDRLQURYO0FBRUMsU0FBSyxFQUFFRixXQUZSO0FBR0MsWUFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQU87QUFDaEJYLGVBQVMsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsSUFBa0JDLFNBQW5CLENBQVQ7QUFDQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FORCxFQU9FWCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLENBQVQ7QUFBQSxXQUNaO0FBQVEsU0FBRyxFQUFFQSxDQUFiO0FBQWdCLFdBQUssRUFBRUQsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQSxNQURGLENBRFk7QUFBQSxHQUFaLENBUEYsQ0FERCxFQWNDO0FBQUssYUFBUyxFQUFDLHFGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBQyxzQkFEWDtBQUVDLFNBQUssRUFBQyw0QkFGUDtBQUdDLFdBQU8sRUFBQyxXQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQztBQUFNLEtBQUMsRUFBQyw0RUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FERCxDQWRELENBREQ7QUF5QkE7O0dBdENRbkIsa0I7O01BQUFBLGtCOztBQXdDVCxTQUFTcUIsbUJBQVQsUUFFRztBQUFBLDJCQURGcEIsTUFDRTtBQUFBLE1BRE9DLFdBQ1AsZ0JBRE9BLFdBQ1A7QUFBQSxNQURvQkUsZUFDcEIsZ0JBRG9CQSxlQUNwQjtBQUFBLE1BRHFDRCxTQUNyQyxnQkFEcUNBLFNBQ3JDO0FBQ0YsU0FDQztBQUNDLGFBQVMsRUFBQyxxS0FEWDtBQUVDLFFBQUksRUFBQyxNQUZOO0FBR0MsU0FBSyxFQUFFRCxXQUFXLElBQUksRUFIdkI7QUFJQyxZQUFRLEVBQUUsa0JBQUNZLENBQUQsRUFBTztBQUNoQlgsZUFBUyxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxJQUFrQkMsU0FBbkIsQ0FBVCxDQURnQixDQUN3QjtBQUN4QyxLQU5GO0FBT0MsZUFBVyxFQUFDLGtCQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQVdBOztNQWRRSSxtQjs7QUFnQlQsU0FBU0Msa0JBQVQsUUFFRztBQUFBLDJCQURGckIsTUFDRTtBQUFBLE1BRE9DLFdBQ1AsZ0JBRE9BLFdBQ1A7QUFBQSxNQURvQkUsZUFDcEIsZ0JBRG9CQSxlQUNwQjtBQUFBLE1BRHFDRCxTQUNyQyxnQkFEcUNBLFNBQ3JDO0FBQ0YsU0FDQztBQUNDLGFBQVMsRUFBQyxxS0FEWDtBQUVDLFFBQUksRUFBQyxNQUZOO0FBR0MsU0FBSyxFQUFFRCxXQUFXLElBQUksRUFIdkI7QUFJQyxZQUFRLEVBQUUsa0JBQUNZLENBQUQsRUFBTztBQUNoQlgsZUFBUyxDQUFDVyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxJQUFrQkMsU0FBbkIsQ0FBVCxDQURnQixDQUN3QjtBQUN4QyxLQU5GO0FBT0MsZUFBVyxFQUFDLGtCQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERDtBQVdBOztNQWRRSyxrQjs7QUFnQlQsU0FBU0MsS0FBVCxRQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQWhCQyxPQUFnQixTQUFoQkEsT0FBZ0I7QUFBQSxNQUFQQyxJQUFPLFNBQVBBLElBQU87O0FBQy9CO0FBRCtCLGtCQVEzQkMsNERBQVEsQ0FDWDtBQUNDRixXQUFPLEVBQVBBLE9BREQ7QUFFQ0MsUUFBSSxFQUFKQTtBQUZELEdBRFcsRUFLWEUsc0RBTFcsQ0FNWDtBQU5XLEdBUm1CO0FBQUEsTUFHOUJDLGFBSDhCLGFBRzlCQSxhQUg4QjtBQUFBLE1BSTlCQyxpQkFKOEIsYUFJOUJBLGlCQUo4QjtBQUFBLE1BSzlCQyxZQUw4QixhQUs5QkEsWUFMOEI7QUFBQSxNQU05QkMsSUFOOEIsYUFNOUJBLElBTjhCO0FBQUEsTUFPOUJDLFVBUDhCLGFBTzlCQSxVQVA4QixFQWlCL0I7OztBQUNBLFNBQ0M7QUFDQyxhQUFTLEVBQUM7QUFEWCxLQUVLSixhQUFhLEVBRmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VFLFlBQVksQ0FBQ1osR0FBYixDQUFpQixVQUFDZSxXQUFEO0FBQUEsV0FDakIsbUdBQVFBLFdBQVcsQ0FBQ0MsbUJBQVosRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0VELFdBQVcsQ0FBQ0UsT0FBWixDQUFvQmpCLEdBQXBCLENBQXdCLFVBQUNqQixNQUFEO0FBQUEsYUFDeEI7QUFDQyxpQkFBUyxFQUFDO0FBRFgsU0FFS0EsTUFBTSxDQUFDbUMsY0FBUCxFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFHQztBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCbkMsTUFBTSxDQUFDb0MsTUFBUCxDQUFjLFFBQWQsQ0FBdkIsQ0FIRCxFQUtFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWXRDLE1BQVosQ0FMRixFQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRUEsTUFBTSxDQUFDdUMsU0FBUCxJQUFvQnZDLE1BQU0sQ0FBQ3dDLE1BQTNCLEdBQ0V4QyxNQUFNLENBQUNvQyxNQUFQLENBQWMsUUFBZCxDQURGLEdBRUUsSUFISixDQU5ELENBRHdCO0FBQUEsS0FBeEIsQ0FERixDQURpQjtBQUFBLEdBQWpCLENBREYsQ0FIRCxFQXVCQyxzR0FBV1IsaUJBQWlCLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRUUsSUFBSSxDQUFDYixHQUFMLENBQVMsVUFBQ1AsR0FBRCxFQUFNUyxDQUFOLEVBQVk7QUFDckJZLGNBQVUsQ0FBQ3JCLEdBQUQsQ0FBVjtBQUNBLFdBQ0MsbUdBQVFBLEdBQUcsQ0FBQytCLFdBQUosRUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0UvQixHQUFHLENBQUNnQyxLQUFKLENBQVV6QixHQUFWLENBQWMsVUFBQzBCLElBQUQsRUFBVTtBQUN4QixhQUNDO0FBQ0MsaUJBQVMsRUFBQztBQURYLFNBRUtBLElBQUksQ0FBQ0MsWUFBTCxFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFHRUQsSUFBSSxDQUFDUCxNQUFMLENBQVksTUFBWixDQUhGLENBREQ7QUFPQSxLQVJBLENBREYsQ0FERDtBQWFBLEdBZkEsQ0FERixDQXZCRCxDQUREO0FBNENBOztJQTlEUWQsSztVQVFKRyxvRDs7O01BUklILEs7QUFnRU0sU0FBU3VCLFNBQVQsR0FBcUI7QUFBQTs7QUFDbkMsTUFBTXRCLE9BQU8sR0FBR2pCLDRDQUFLLENBQUNDLE9BQU4sQ0FDZjtBQUFBLFdBQU0sQ0FDTDtBQUNDdUMsWUFBTSxFQUFFLGVBRFQ7QUFFQ0MsY0FBUSxFQUFFLGNBRlg7QUFHQ1AsWUFBTSxFQUFFcEIsbUJBSFQ7QUFJQzRCLFlBQU0sRUFBRTtBQUpULEtBREssRUFPTDtBQUNDRixZQUFNLEVBQUUscUJBRFQ7QUFFQ0MsY0FBUSxFQUFFLGdCQUZYO0FBR0NQLFlBQU0sRUFBRXBCLG1CQUhUO0FBSUM0QixZQUFNLEVBQUU7QUFKVCxLQVBLLEVBYUw7QUFDQztBQUNBRixZQUFNLEVBQUUsT0FGVDtBQUdDQyxjQUFRLEVBQUUsT0FIWDtBQUlDUCxZQUFNLEVBQUV6QyxrQkFKVDtBQUtDaUQsWUFBTSxFQUFFO0FBTFQsS0FiSyxFQW9CTDtBQUNDRixZQUFNLEVBQUUsVUFEVDtBQUVDQyxjQUFRLEVBQUUsVUFGWDtBQUdDUCxZQUFNLEVBQUV6QyxrQkFIVDtBQUlDaUQsWUFBTSxFQUFFO0FBSlQsS0FwQkssRUEwQkw7QUFDQ0YsWUFBTSxFQUFFLFdBRFQ7QUFFQ0MsY0FBUSxFQUFFLGtCQUFDckMsR0FBRDtBQUFBLGVBQVNBLEdBQUcsQ0FBQ3VDLFNBQUosQ0FBY0MsSUFBZCxDQUFtQixJQUFuQixDQUFUO0FBQUE7QUFGWCxLQTFCSyxFQThCTDtBQUNDSixZQUFNLEVBQUUsZUFEVDtBQUVDQyxjQUFRLEVBQUU7QUFGWCxLQTlCSyxDQUFOO0FBQUEsR0FEZSxFQW9DZixFQXBDZSxDQUFoQjtBQXVDQSxTQUNDLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsQ0FERCxFQUlDO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRCxFQUtDLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRXhCLE9BQWhCO0FBQXlCLFFBQUksRUFBRTRCLDhDQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERCxDQUREO0FBV0E7O0lBbkR1Qk4sUzs7TUFBQUEsUyIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge3VzZVRhYmxlLCB1c2VGaWx0ZXJzLCB1c2VHbG9iYWxGaWx0ZXJ9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9kYXRhL2NvbG9ycy5qc29uJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IE5vU3NyID0gKHByb3BzKSA9PiA8UmVhY3QuRnJhZ21lbnQ+e3Byb3BzLmNoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+O1xuXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xuXHRjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkfSxcbn0pIHtcblx0Ly8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcblx0Ly8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xuXHRjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKTtcblx0XHRwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG5cdFx0XHRvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXTtcblx0fSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKTtcblx0Ly8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxuXHRcdFx0XHR7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxuXHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cblx0XHRcdFx0XHRcdHtvcHRpb259XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiB0ZXh0LWdyYXktNzAwXCI+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXG5cdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNOS4yOTMgMTIuOTVsLjcwNy43MDdMMTUuNjU3IDhsLTEuNDE0LTEuNDE0TDEwIDEwLjgyOCA1Ljc1NyA2LjU4NiA0LjM0MyA4elwiIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe1xuXHRjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgcHJlRmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXJ9LFxufSkge1xuXHRyZXR1cm4gKFxuXHRcdDxpbnB1dFxuXHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0xIHB4LTIgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMFwiXG5cdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XG5cdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0c2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7IC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcblx0XHRcdH19XG5cdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdmFsdWVcIlxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIEV4aXN0c0NvbHVtbkZpbHRlcih7XG5cdGNvbHVtbjoge2ZpbHRlclZhbHVlLCBwcmVGaWx0ZXJlZFJvd3MsIHNldEZpbHRlcn0sXG59KSB7XG5cdHJldHVybiAoXG5cdFx0PGlucHV0XG5cdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTEgcHgtMiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCJcblx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cblx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuXHRcdFx0fX1cblx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB2YWx1ZVwiXG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gVGFibGUoe2NvbHVtbnMsIGRhdGF9KSB7XG5cdC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcblx0Y29uc3Qge1xuXHRcdGdldFRhYmxlUHJvcHMsXG5cdFx0Z2V0VGFibGVCb2R5UHJvcHMsXG5cdFx0aGVhZGVyR3JvdXBzLFxuXHRcdHJvd3MsXG5cdFx0cHJlcGFyZVJvdyxcblx0fSA9IHVzZVRhYmxlKFxuXHRcdHtcblx0XHRcdGNvbHVtbnMsXG5cdFx0XHRkYXRhLFxuXHRcdH0sXG5cdFx0dXNlRmlsdGVyc1xuXHRcdC8vIHVzZUdsb2JhbEZpbHRlclxuXHQpO1xuXG5cdC8vIFJlbmRlciB0aGUgVUkgZm9yIHlvdXIgdGFibGVcblx0cmV0dXJuIChcblx0XHQ8dGFibGVcblx0XHRcdGNsYXNzTmFtZT1cInRleHQtbGVmdCB0YWJsZS1maXhlZCB3LWZ1bGwgYm9yZGVyIGJvcmRlci1jb2xsYXBzZVwiXG5cdFx0XHR7Li4uZ2V0VGFibGVQcm9wcygpfT5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0e2hlYWRlckdyb3Vwcy5tYXAoKGhlYWRlckdyb3VwKSA9PiAoXG5cdFx0XHRcdFx0PHRyIHsuLi5oZWFkZXJHcm91cC5nZXRIZWFkZXJHcm91cFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0e2hlYWRlckdyb3VwLmhlYWRlcnMubWFwKChjb2x1bW4pID0+IChcblx0XHRcdFx0XHRcdFx0PHRoXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxpZ24tdG9wIHB5LTQgcHgtNiBiZy1ncmV5LWxpZ2h0ZXN0IGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC14cyB0ZXh0LWdyZXktZGFyayBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0ey4uLmNvbHVtbi5nZXRIZWFkZXJQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj57Y29sdW1uLnJlbmRlcignSGVhZGVyJyl9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIFJlbmRlciB0aGUgY29sdW1ucyBmaWx0ZXIgVUkgKi99XG5cdFx0XHRcdFx0XHRcdFx0e2NvbnNvbGUubG9nKGNvbHVtbil9XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdHtjb2x1bW4uY2FuRmlsdGVyICYmIGNvbHVtbi5GaWx0ZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PyBjb2x1bW4ucmVuZGVyKCdGaWx0ZXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6IG51bGx9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvdGg+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHkgey4uLmdldFRhYmxlQm9keVByb3BzKCl9PlxuXHRcdFx0XHR7cm93cy5tYXAoKHJvdywgaSkgPT4ge1xuXHRcdFx0XHRcdHByZXBhcmVSb3cocm93KTtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdHtyb3cuY2VsbHMubWFwKChjZWxsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LXhzIHB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2NlbGwucmVuZGVyKCdDZWxsJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9va3NQYWdlKCkge1xuXHRjb25zdCBjb2x1bW5zID0gUmVhY3QudXNlTWVtbyhcblx0XHQoKSA9PiBbXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ1NDU1MgVmFyaWFibGUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ3Njc3NWYXJpYWJsZScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnQ1NTIEN1c3RvbSBQcm9wZXJ0eScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnY3VzdG9tUHJvcGVydHknLFxuXHRcdFx0XHRGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIChcImdlbmVyaWNcInxcImNhdGVnb3J5XCJ8XCJzcGVjaWZpY1wiKVxuXHRcdFx0XHRIZWFkZXI6ICdHcm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnZ3JvdXAnLFxuXHRcdFx0XHRGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnU3ViZ3JvdXAnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ3N1Ymdyb3VwJyxcblx0XHRcdFx0RmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0ZhbGxiYWNrcycsXG5cdFx0XHRcdGFjY2Vzc29yOiAocm93KSA9PiByb3cuZmFsbGJhY2tzLmpvaW4oJywgJyksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdEZWZhdWx0IFZhbHVlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Tm9Tc3I+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+VmFyaWFibGVzIHwgVGhlbWUgVG9vbHM8L3RpdGxlPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi02XCI+VGhlbWUgVmFyaWFibGVzIFNlYXJjaDwvaDE+XG5cdFx0XHRcdDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtjb2xvcnN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L05vU3NyPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})