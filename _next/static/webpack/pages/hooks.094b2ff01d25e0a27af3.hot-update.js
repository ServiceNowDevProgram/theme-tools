webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      setFilter = _ref2$column.setFilter;\n  return __jsx(\"input\", {\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: \"text\",\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    placeholder: \"Search for value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 3\n    }\n  });\n} // function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {\n// \treturn (\n// \t\t<label class=\"md:w-2/3 block text-gray-500 font-bold\">\n// \t\t<input class=\"mr-2 leading-tight\" type=\"checkbox\" checked={filterValue} onInput={(e) => {\n// \t\t\te.preventDefault();\n// \t\t\tsetFilter(!filterValue);\n// \t\t}}>\n// \t\t<span class=\"text-sm\">\n// \tExists\n// \t\t</span>\n// \t</label>\n// \t);\n// }\n\n\n_c3 = DefaultColumnFilter;\n\nfunction Table(_ref3) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref3.columns,\n      data = _ref3.data;\n\n  // Use the state and functions returned from useTable to build your UI\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-top py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 9\n        }\n      }, column.render('Header')), console.log(column), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"BRs0edRtsZL02vNVUHB0LAcCqcE=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c4 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      }\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue'\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 183,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 184,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 185,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 187,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_5__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 188,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c5 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"Table\");\n$RefreshReg$(_c5, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJyb3dzIiwicHJlcGFyZVJvdyIsImhlYWRlckdyb3VwIiwiZ2V0SGVhZGVyR3JvdXBQcm9wcyIsImhlYWRlcnMiLCJnZXRIZWFkZXJQcm9wcyIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJjYW5GaWx0ZXIiLCJGaWx0ZXIiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkhvb2tzUGFnZSIsIkhlYWRlciIsImFjY2Vzc29yIiwiZmlsdGVyIiwiZmFsbGJhY2tzIiwiam9pbiIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FBVyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlCQSxLQUFLLENBQUNDLFFBQXZCLENBQVg7QUFBQSxDQUFkOztLQUFNRixLOztBQUVOLFNBQVNHLGtCQUFULE9BRUc7QUFBQTs7QUFBQTs7QUFBQSx5QkFERkMsTUFDRTtBQUFBLE1BRE9DLFdBQ1AsZUFET0EsV0FDUDtBQUFBLE1BRG9CQyxTQUNwQixlQURvQkEsU0FDcEI7QUFBQSxNQUQrQkMsZUFDL0IsZUFEK0JBLGVBQy9CO0FBQUEsTUFEZ0RDLEVBQ2hELGVBRGdEQSxFQUNoRDtBQUNGO0FBQ0E7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE9BQU4sQ0FBYyxZQUFNO0FBQ25DLFFBQU1GLE9BQU8sR0FBRyxJQUFJRyxHQUFKLEVBQWhCO0FBQ0FMLG1CQUFlLENBQUNNLE9BQWhCLENBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUNoQ0wsYUFBTyxDQUFDTSxHQUFSLENBQVlELEdBQUcsQ0FBQ0UsTUFBSixDQUFXUixFQUFYLENBQVo7QUFDQSxLQUZEO0FBR0Esd0dBQVdDLE9BQU8sQ0FBQ08sTUFBUixFQUFYO0FBQ0EsR0FOZSxFQU1iLENBQUNSLEVBQUQsRUFBS0QsZUFBTCxDQU5hLENBQWhCLENBSEUsQ0FVRjs7QUFDQSxTQUNDO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsYUFBUyxFQUFDLDRLQURYO0FBRUMsU0FBSyxFQUFFRixXQUZSO0FBR0MsWUFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQU87QUFDaEJYLGVBQVMsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsSUFBa0JDLFNBQW5CLENBQVQ7QUFDQSxLQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FORCxFQU9FWCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLENBQVQ7QUFBQSxXQUNaO0FBQVEsU0FBRyxFQUFFQSxDQUFiO0FBQWdCLFdBQUssRUFBRUQsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFQSxNQURGLENBRFk7QUFBQSxHQUFaLENBUEYsQ0FERCxFQWNDO0FBQUssYUFBUyxFQUFDLHFGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUNDLGFBQVMsRUFBQyxzQkFEWDtBQUVDLFNBQUssRUFBQyw0QkFGUDtBQUdDLFdBQU8sRUFBQyxXQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJQztBQUFNLEtBQUMsRUFBQyw0RUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsQ0FERCxDQWRELENBREQ7QUF5QkE7O0dBdENRbkIsa0I7O01BQUFBLGtCOztBQXdDVCxTQUFTcUIsbUJBQVQsUUFBaUU7QUFBQSwyQkFBbkNwQixNQUFtQztBQUFBLE1BQTFCQyxXQUEwQixnQkFBMUJBLFdBQTBCO0FBQUEsTUFBYkMsU0FBYSxnQkFBYkEsU0FBYTtBQUNoRSxTQUNDO0FBQ0MsYUFBUyxFQUFDLHFLQURYO0FBRUMsUUFBSSxFQUFDLE1BRk47QUFHQyxTQUFLLEVBQUVELFdBQVcsSUFBSSxFQUh2QjtBQUlDLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRCxFQUFPO0FBQ2hCWCxlQUFTLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULElBQWtCQyxTQUFuQixDQUFULENBRGdCLENBQ3dCO0FBQ3hDLEtBTkY7QUFPQyxlQUFXLEVBQUMsa0JBUGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUREO0FBV0EsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7TUExQlNJLG1COztBQTRCVCxTQUFTQyxLQUFULFFBQWdDO0FBQUE7O0FBQUE7O0FBQUEsTUFBaEJDLE9BQWdCLFNBQWhCQSxPQUFnQjtBQUFBLE1BQVBDLElBQU8sU0FBUEEsSUFBTzs7QUFDL0I7QUFEK0Isa0JBUTNCQyw0REFBUSxDQUNYO0FBQ0NGLFdBQU8sRUFBUEEsT0FERDtBQUVDQyxRQUFJLEVBQUpBO0FBRkQsR0FEVyxFQUtYRSxzREFMVyxDQU1YO0FBTlcsR0FSbUI7QUFBQSxNQUc5QkMsYUFIOEIsYUFHOUJBLGFBSDhCO0FBQUEsTUFJOUJDLGlCQUo4QixhQUk5QkEsaUJBSjhCO0FBQUEsTUFLOUJDLFlBTDhCLGFBSzlCQSxZQUw4QjtBQUFBLE1BTTlCQyxJQU44QixhQU05QkEsSUFOOEI7QUFBQSxNQU85QkMsVUFQOEIsYUFPOUJBLFVBUDhCLEVBaUIvQjs7O0FBQ0EsU0FDQztBQUNDLGFBQVMsRUFBQztBQURYLEtBRUtKLGFBQWEsRUFGbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUUsWUFBWSxDQUFDWCxHQUFiLENBQWlCLFVBQUNjLFdBQUQ7QUFBQSxXQUNqQixtR0FBUUEsV0FBVyxDQUFDQyxtQkFBWixFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDRUQsV0FBVyxDQUFDRSxPQUFaLENBQW9CaEIsR0FBcEIsQ0FBd0IsVUFBQ2pCLE1BQUQ7QUFBQSxhQUN4QjtBQUNDLGlCQUFTLEVBQUM7QUFEWCxTQUVLQSxNQUFNLENBQUNrQyxjQUFQLEVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUdDO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBdUJsQyxNQUFNLENBQUNtQyxNQUFQLENBQWMsUUFBZCxDQUF2QixDQUhELEVBS0VDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZckMsTUFBWixDQUxGLEVBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFQSxNQUFNLENBQUNzQyxTQUFQLElBQW9CdEMsTUFBTSxDQUFDdUMsTUFBM0IsR0FDRXZDLE1BQU0sQ0FBQ21DLE1BQVAsQ0FBYyxRQUFkLENBREYsR0FFRSxJQUhKLENBTkQsQ0FEd0I7QUFBQSxLQUF4QixDQURGLENBRGlCO0FBQUEsR0FBakIsQ0FERixDQUhELEVBdUJDLHNHQUFXUixpQkFBaUIsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFRSxJQUFJLENBQUNaLEdBQUwsQ0FBUyxVQUFDUCxHQUFELEVBQU1TLENBQU4sRUFBWTtBQUNyQlcsY0FBVSxDQUFDcEIsR0FBRCxDQUFWO0FBQ0EsV0FDQyxtR0FBUUEsR0FBRyxDQUFDOEIsV0FBSixFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDRTlCLEdBQUcsQ0FBQytCLEtBQUosQ0FBVXhCLEdBQVYsQ0FBYyxVQUFDeUIsSUFBRCxFQUFVO0FBQ3hCLGFBQ0M7QUFDQyxpQkFBUyxFQUFDO0FBRFgsU0FFS0EsSUFBSSxDQUFDQyxZQUFMLEVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUdFRCxJQUFJLENBQUNQLE1BQUwsQ0FBWSxNQUFaLENBSEYsQ0FERDtBQU9BLEtBUkEsQ0FERixDQUREO0FBYUEsR0FmQSxDQURGLENBdkJELENBREQ7QUE0Q0E7O0lBOURRZCxLO1VBUUpHLG9EOzs7TUFSSUgsSztBQWdFTSxTQUFTdUIsU0FBVCxHQUFxQjtBQUFBOztBQUNuQyxNQUFNdEIsT0FBTyxHQUFHaEIsNENBQUssQ0FBQ0MsT0FBTixDQUNmO0FBQUEsV0FBTSxDQUNMO0FBQ0NzQyxZQUFNLEVBQUUsZUFEVDtBQUVDQyxjQUFRLEVBQUUsY0FGWDtBQUdDUCxZQUFNLEVBQUVuQixtQkFIVDtBQUlDMkIsWUFBTSxFQUFFO0FBSlQsS0FESyxFQU9MO0FBQ0NGLFlBQU0sRUFBRSxxQkFEVDtBQUVDQyxjQUFRLEVBQUUsZ0JBRlg7QUFHQ1AsWUFBTSxFQUFFbkIsbUJBSFQ7QUFJQzJCLFlBQU0sRUFBRTtBQUpULEtBUEssRUFhTDtBQUNDO0FBQ0FGLFlBQU0sRUFBRSxPQUZUO0FBR0NDLGNBQVEsRUFBRSxPQUhYO0FBSUNQLFlBQU0sRUFBRXhDLGtCQUpUO0FBS0NnRCxZQUFNLEVBQUU7QUFMVCxLQWJLLEVBb0JMO0FBQ0NGLFlBQU0sRUFBRSxVQURUO0FBRUNDLGNBQVEsRUFBRSxVQUZYO0FBR0NQLFlBQU0sRUFBRXhDLGtCQUhUO0FBSUNnRCxZQUFNLEVBQUU7QUFKVCxLQXBCSyxFQTBCTDtBQUNDRixZQUFNLEVBQUUsV0FEVDtBQUVDQyxjQUFRLEVBQUUsa0JBQUNwQyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDc0MsU0FBSixDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQVQ7QUFBQTtBQUZYLEtBMUJLLEVBOEJMO0FBQ0NKLFlBQU0sRUFBRSxlQURUO0FBRUNDLGNBQVEsRUFBRTtBQUZYLEtBOUJLLENBQU47QUFBQSxHQURlLEVBb0NmLEVBcENlLENBQWhCO0FBdUNBLFNBQ0MsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERCxDQURELEVBSUM7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUpELEVBS0MsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFeEIsT0FBaEI7QUFBeUIsUUFBSSxFQUFFNEIsOENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELENBREQ7QUFXQTs7SUFuRHVCTixTOztNQUFBQSxTIiwiZmlsZSI6Ii4vcGFnZXMvaG9va3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlVGFibGUsIHVzZUZpbHRlcnMsIHVzZUdsb2JhbEZpbHRlcn0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2RhdGEvY29sb3JzLmpzb24nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTm9Tc3IgPSAocHJvcHMpID0+IDxSZWFjdC5GcmFnbWVudD57cHJvcHMuY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XG5cbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XG5cdGNvbHVtbjoge2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWR9LFxufSkge1xuXHQvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xuXHQvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXG5cdGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IFNldCgpO1xuXHRcdHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKChyb3cpID0+IHtcblx0XHRcdG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldO1xuXHR9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pO1xuXHQvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuXHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTIgcHItOCByb3VuZGVkIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG5cdFx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0c2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxuXHRcdFx0XHRcdFx0e29wdGlvbn1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDBcIj5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHNldEZpbHRlcn19KSB7XG5cdHJldHVybiAoXG5cdFx0PGlucHV0XG5cdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTEgcHgtMiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCJcblx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cblx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuXHRcdFx0fX1cblx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB2YWx1ZVwiXG5cdFx0Lz5cblx0KTtcbn1cblxuLy8gZnVuY3Rpb24gRXhpc3RzQ29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSA9IGZhbHNlLCBzZXRGaWx0ZXJ9fSkge1xuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDxsYWJlbCBjbGFzcz1cIm1kOnctMi8zIGJsb2NrIHRleHQtZ3JheS01MDAgZm9udC1ib2xkXCI+XG4vLyBcdFx0PGlucHV0IGNsYXNzPVwibXItMiBsZWFkaW5nLXRpZ2h0XCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17ZmlsdGVyVmFsdWV9IG9uSW5wdXQ9eyhlKSA9PiB7XG4vLyBcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4vLyBcdFx0XHRzZXRGaWx0ZXIoIWZpbHRlclZhbHVlKTtcbi8vIFx0XHR9fT5cbi8vIFx0XHQ8c3BhbiBjbGFzcz1cInRleHQtc21cIj5cbi8vIFx0RXhpc3RzXG4vLyBcdFx0PC9zcGFuPlxuLy8gXHQ8L2xhYmVsPlxuLy8gXHQpO1xuLy8gfVxuXG5mdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YX0pIHtcblx0Ly8gVXNlIHRoZSBzdGF0ZSBhbmQgZnVuY3Rpb25zIHJldHVybmVkIGZyb20gdXNlVGFibGUgdG8gYnVpbGQgeW91ciBVSVxuXHRjb25zdCB7XG5cdFx0Z2V0VGFibGVQcm9wcyxcblx0XHRnZXRUYWJsZUJvZHlQcm9wcyxcblx0XHRoZWFkZXJHcm91cHMsXG5cdFx0cm93cyxcblx0XHRwcmVwYXJlUm93LFxuXHR9ID0gdXNlVGFibGUoXG5cdFx0e1xuXHRcdFx0Y29sdW1ucyxcblx0XHRcdGRhdGEsXG5cdFx0fSxcblx0XHR1c2VGaWx0ZXJzXG5cdFx0Ly8gdXNlR2xvYmFsRmlsdGVyXG5cdCk7XG5cblx0Ly8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuXHRyZXR1cm4gKFxuXHRcdDx0YWJsZVxuXHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRhYmxlLWZpeGVkIHctZnVsbCBib3JkZXIgYm9yZGVyLWNvbGxhcHNlXCJcblx0XHRcdHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHR7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXApID0+IChcblx0XHRcdFx0XHQ8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHR7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8dGhcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi10b3AgcHktNCBweC02IGJnLWdyZXktbGlnaHRlc3QgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtZ3JleS1kYXJrIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7LyogUmVuZGVyIHRoZSBjb2x1bW5zIGZpbHRlciBVSSAqL31cblx0XHRcdFx0XHRcdFx0XHR7Y29uc29sZS5sb2coY29sdW1uKX1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NvbHVtbi5jYW5GaWx0ZXIgJiYgY29sdW1uLkZpbHRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG5cdFx0XHRcdHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG5cdFx0XHRcdFx0cHJlcGFyZVJvdyhyb3cpO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0e3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQteHMgcHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb29rc1BhZ2UoKSB7XG5cdGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnU0NTUyBWYXJpYWJsZScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc2Nzc1ZhcmlhYmxlJyxcblx0XHRcdFx0RmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdDU1MgQ3VzdG9tIFByb3BlcnR5Jyxcblx0XHRcdFx0YWNjZXNzb3I6ICdjdXN0b21Qcm9wZXJ0eScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdEhlYWRlcjogJ0dyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTdWJncm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc3ViZ3JvdXAnLFxuXHRcdFx0XHRGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnRmFsbGJhY2tzJyxcblx0XHRcdFx0YWNjZXNzb3I6IChyb3cpID0+IHJvdy5mYWxsYmFja3Muam9pbignLCAnKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0RlZmF1bHQgVmFsdWUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W11cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxOb1Nzcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5WYXJpYWJsZXMgfCBUaGVtZSBUb29sczwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTZcIj5UaGVtZSBWYXJpYWJsZXMgU2VhcmNoPC9oMT5cblx0XHRcdFx0PFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2NvbG9yc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})