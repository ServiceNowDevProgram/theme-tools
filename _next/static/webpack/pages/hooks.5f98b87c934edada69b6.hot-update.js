webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      setFilter = _ref2$column.setFilter;\n  return __jsx(\"input\", {\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: \"text\",\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    placeholder: \"Search for value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }\n  });\n}\n\n_c3 = DefaultColumnFilter;\n\nfunction ExistsColumnFilter(_ref3) {\n  var _ref3$column = _ref3.column,\n      _ref3$column$filterVa = _ref3$column.filterValue,\n      filterValue = _ref3$column$filterVa === void 0 ? false : _ref3$column$filterVa,\n      setFilter = _ref3$column.setFilter;\n  return __jsx(\"label\", {\n    className: \"block text-gray-700  flex items-center h-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 3\n    }\n  }, __jsx(\"input\", {\n    className: \"mr-2 leading-tight\",\n    type: \"checkbox\",\n    checked: filterValue,\n    onChange: function onChange(e) {\n      setFilter(!filterValue);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 4\n    }\n  }), __jsx(\"span\", {\n    className: \"text-xs font-normal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }\n  }, \"Exists\"));\n}\n\n_c4 = ExistsColumnFilter;\n\nfunction Table(_ref4) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref4.columns,\n      data = _ref4.data;\n  var filterTypes = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return {\n      // Add a new fuzzyTextFilterFn filter type.\n      exists: function exists(rows, id, filterValue) {\n        if (!filterValue) return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rows);\n        return rows.filter(function (row) {\n          var rowValue = row.values[id];\n          console.log(rowValue);\n          return (rowValue || '') !== '';\n        });\n      }\n    };\n  }, []);\n\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data,\n    filterTypes: filterTypes\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 9\n        }\n      }, column.render('Header')), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"btpGsulPp45/dKsKn7x/8KrGdQs=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c5 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var _this4 = this;\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      },\n      Filter: ExistsColumnFilter,\n      filter: 'exists'\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      Filter: DefaultColumnFilter,\n      filter: 'includes',\n      Cell: function Cell(_ref5) {\n        var value = _ref5.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_5__[\"isValidHexColor\"])(value)) {\n          console.log('no');\n          return String(value);\n        }\n\n        console.log('yes');\n        return __jsx(\"div\", {\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 205,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-color-grey-100\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 206,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_6__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c6 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"ExistsColumnFilter\");\n$RefreshReg$(_c5, \"Table\");\n$RefreshReg$(_c6, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsIkV4aXN0c0NvbHVtbkZpbHRlciIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJmaWx0ZXJUeXBlcyIsImV4aXN0cyIsInJvd3MiLCJmaWx0ZXIiLCJyb3dWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJwcmVwYXJlUm93IiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwiY2FuRmlsdGVyIiwiRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJIb29rc1BhZ2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImZhbGxiYWNrcyIsImpvaW4iLCJDZWxsIiwiaXNWYWxpZEhleENvbG9yIiwiU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUFXLE1BQUMs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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERCxDQURELEVBSUM7QUFBSSxhQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUpELEVBS0MsTUFBQyxLQUFEO0FBQU8sV0FBTyxFQUFFUSxPQUFoQjtBQUF5QixRQUFJLEVBQUVtQyw4Q0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBREQsQ0FERDtBQVdBOztJQXZFdUJULFM7O01BQUFBLFMiLCJmaWxlIjoiLi9wYWdlcy9ob29rcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHt1c2VUYWJsZSwgdXNlRmlsdGVycywgdXNlR2xvYmFsRmlsdGVyfSBmcm9tICdyZWFjdC10YWJsZSc7XG5pbXBvcnQge2lzVmFsaWRIZXhDb2xvcn0gZnJvbSAnLi4vLi4vbGliL2NvbG9yJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnLi9kYXRhL2NvbG9ycy5qc29uJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IE5vU3NyID0gKHByb3BzKSA9PiA8UmVhY3QuRnJhZ21lbnQ+e3Byb3BzLmNoaWxkcmVufTwvUmVhY3QuRnJhZ21lbnQ+O1xuXG5mdW5jdGlvbiBTZWxlY3RDb2x1bW5GaWx0ZXIoe1xuXHRjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyLCBwcmVGaWx0ZXJlZFJvd3MsIGlkfSxcbn0pIHtcblx0Ly8gQ2FsY3VsYXRlIHRoZSBvcHRpb25zIGZvciBmaWx0ZXJpbmdcblx0Ly8gdXNpbmcgdGhlIHByZUZpbHRlcmVkUm93c1xuXHRjb25zdCBvcHRpb25zID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG5cdFx0Y29uc3Qgb3B0aW9ucyA9IG5ldyBTZXQoKTtcblx0XHRwcmVGaWx0ZXJlZFJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG5cdFx0XHRvcHRpb25zLmFkZChyb3cudmFsdWVzW2lkXSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIFsuLi5vcHRpb25zLnZhbHVlcygpXTtcblx0fSwgW2lkLCBwcmVGaWx0ZXJlZFJvd3NdKTtcblx0Ly8gUmVuZGVyIGEgbXVsdGktc2VsZWN0IGJveFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPkFsbDwvb3B0aW9uPlxuXHRcdFx0XHR7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4gKFxuXHRcdFx0XHRcdDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9ufT5cblx0XHRcdFx0XHRcdHtvcHRpb259XG5cdFx0XHRcdFx0PC9vcHRpb24+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHgtMiB0ZXh0LWdyYXktNzAwXCI+XG5cdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmaWxsLWN1cnJlbnQgaC00IHctNFwiXG5cdFx0XHRcdFx0eG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG5cdFx0XHRcdFx0dmlld0JveD1cIjAgMCAyMCAyMFwiPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNOS4yOTMgMTIuOTVsLjcwNy43MDdMMTUuNjU3IDhsLTEuNDE0LTEuNDE0TDEwIDEwLjgyOCA1Ljc1NyA2LjU4NiA0LjM0MyA4elwiIC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIERlZmF1bHRDb2x1bW5GaWx0ZXIoe2NvbHVtbjoge2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJ9fSkge1xuXHRyZXR1cm4gKFxuXHRcdDxpbnB1dFxuXHRcdFx0Y2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0xIHB4LTIgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMFwiXG5cdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHR2YWx1ZT17ZmlsdGVyVmFsdWUgfHwgJyd9XG5cdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0c2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7IC8vIFNldCB1bmRlZmluZWQgdG8gcmVtb3ZlIHRoZSBmaWx0ZXIgZW50aXJlbHlcblx0XHRcdH19XG5cdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgdmFsdWVcIlxuXHRcdC8+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIEV4aXN0c0NvbHVtbkZpbHRlcih7Y29sdW1uOiB7ZmlsdGVyVmFsdWUgPSBmYWxzZSwgc2V0RmlsdGVyfX0pIHtcblx0cmV0dXJuIChcblx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCAgZmxleCBpdGVtcy1jZW50ZXIgaC02XCI+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0Y2xhc3NOYW1lPVwibXItMiBsZWFkaW5nLXRpZ2h0XCJcblx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0Y2hlY2tlZD17ZmlsdGVyVmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldEZpbHRlcighZmlsdGVyVmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ub3JtYWxcIj5FeGlzdHM8L3NwYW4+XG5cdFx0PC9sYWJlbD5cblx0KTtcbn1cblxuZnVuY3Rpb24gVGFibGUoe2NvbHVtbnMsIGRhdGF9KSB7XG5cdGNvbnN0IGZpbHRlclR5cGVzID0gUmVhY3QudXNlTWVtbyhcblx0XHQoKSA9PiAoe1xuXHRcdFx0Ly8gQWRkIGEgbmV3IGZ1enp5VGV4dEZpbHRlckZuIGZpbHRlciB0eXBlLlxuXHRcdFx0ZXhpc3RzOiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICghZmlsdGVyVmFsdWUpIHJldHVybiBbLi4ucm93c107XG5cdFx0XHRcdHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyb3dWYWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIChyb3dWYWx1ZSB8fCAnJykgIT09ICcnO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0fSksXG5cdFx0W11cblx0KTtcblxuXHRjb25zdCB7XG5cdFx0Z2V0VGFibGVQcm9wcyxcblx0XHRnZXRUYWJsZUJvZHlQcm9wcyxcblx0XHRoZWFkZXJHcm91cHMsXG5cdFx0cm93cyxcblx0XHRwcmVwYXJlUm93LFxuXHR9ID0gdXNlVGFibGUoXG5cdFx0e1xuXHRcdFx0Y29sdW1ucyxcblx0XHRcdGRhdGEsXG5cdFx0XHRmaWx0ZXJUeXBlcyxcblx0XHR9LFxuXHRcdHVzZUZpbHRlcnNcblx0XHQvLyB1c2VHbG9iYWxGaWx0ZXJcblx0KTtcblxuXHQvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlXG5cdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGFibGUtZml4ZWQgdy1mdWxsIGJvcmRlciBib3JkZXItY29sbGFwc2VcIlxuXHRcdFx0ey4uLmdldFRhYmxlUHJvcHMoKX0+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4gKFxuXHRcdFx0XHRcdDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cblx0XHRcdFx0XHRcdHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDx0aFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJvdHRvbSBweS00IHB4LTYgYmctZ3JleS1saWdodGVzdCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1ncmV5LWRhcmsgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29sdW1uLmNhbkZpbHRlciAmJiBjb2x1bW4uRmlsdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gY29sdW1uLnJlbmRlcignRmlsdGVyJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cblx0XHRcdFx0e3Jvd3MubWFwKChyb3csIGkpID0+IHtcblx0XHRcdFx0XHRwcmVwYXJlUm93KHJvdyk7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHR7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC14cyBweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvb2tzUGFnZSgpIHtcblx0Y29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG5cdFx0KCkgPT4gW1xuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTQ1NTIFZhcmlhYmxlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzY3NzVmFyaWFibGUnLFxuXHRcdFx0XHRGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0NTUyBDdXN0b20gUHJvcGVydHknLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2N1c3RvbVByb3BlcnR5Jyxcblx0XHRcdFx0RmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyAoXCJnZW5lcmljXCJ8XCJjYXRlZ29yeVwifFwic3BlY2lmaWNcIilcblx0XHRcdFx0SGVhZGVyOiAnR3JvdXAnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2dyb3VwJyxcblx0XHRcdFx0RmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ1N1Ymdyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzdWJncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdGYWxsYmFja3MnLFxuXHRcdFx0XHRhY2Nlc3NvcjogKHJvdykgPT4gcm93LmZhbGxiYWNrcy5qb2luKCcsICcpLFxuXHRcdFx0XHRGaWx0ZXI6IEV4aXN0c0NvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnZXhpc3RzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0RlZmF1bHQgVmFsdWUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0XHRDZWxsOiAoe3ZhbHVlfSkgPT4ge1xuXHRcdFx0XHRcdGlmICghaXNWYWxpZEhleENvbG9yKHZhbHVlKSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ25vJyk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gU3RyaW5nKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ3llcycpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQtZnVsbCBpbmxpbmUtYmxvY2sgYm9yZGVyIGJvcmRlci1jb2xvci1ncmV5LTEwMFwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlfX0+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdHt2YWx1ZX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0W11cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxOb1Nzcj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5WYXJpYWJsZXMgfCBUaGVtZSBUb29sczwvdGl0bGU+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTZcIj5UaGVtZSBWYXJpYWJsZXMgU2VhcmNoPC9oMT5cblx0XHRcdFx0PFRhYmxlIGNvbHVtbnM9e2NvbHVtbnN9IGRhdGE9e2NvbG9yc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})