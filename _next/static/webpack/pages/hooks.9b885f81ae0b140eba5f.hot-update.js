webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      setFilter = _ref2$column.setFilter;\n  return __jsx(\"input\", {\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: \"text\",\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    placeholder: \"Search for value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 3\n    }\n  });\n}\n\n_c3 = DefaultColumnFilter;\n\nfunction ExistsColumnFilter(_ref3) {\n  var _ref3$column = _ref3.column,\n      _ref3$column$filterVa = _ref3$column.filterValue,\n      filterValue = _ref3$column$filterVa === void 0 ? false : _ref3$column$filterVa,\n      setFilter = _ref3$column.setFilter;\n  return __jsx(\"label\", {\n    className: \"block text-gray-700  flex items-center h-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 3\n    }\n  }, __jsx(\"input\", {\n    className: \"mr-2 leading-tight\",\n    type: \"checkbox\",\n    checked: filterValue,\n    onChange: function onChange(e) {\n      setFilter(!filterValue);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 4\n    }\n  }), __jsx(\"span\", {\n    className: \"text-xs font-normal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }\n  }, \"Exists\"));\n}\n\n_c4 = ExistsColumnFilter;\n\nfunction Table(_ref4) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref4.columns,\n      data = _ref4.data;\n  var filterTypes = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return {\n      // Add a new fuzzyTextFilterFn filter type.\n      exists: function exists(rows, id, filterValue) {\n        if (!filterValue) return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rows);\n        return rows.filter(function (row) {\n          var rowValue = row.values[id];\n          console.log(rowValue);\n          return (rowValue || '') !== '';\n        });\n      }\n    };\n  }, []);\n\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data,\n    filterTypes: filterTypes\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 9\n        }\n      }, column.render('Header')), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"btpGsulPp45/dKsKn7x/8KrGdQs=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c5 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var _this4 = this;\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      },\n      Filter: ExistsColumnFilter,\n      filter: 'exists'\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      Filter: DefaultColumnFilter,\n      filter: 'includes',\n      Cell: function Cell(_ref5) {\n        var value = _ref5.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_5__[\"isValidHexColor\"])(value)) {\n          console.log('no');\n          return String(value);\n        }\n\n        console.log('yes');\n        return __jsx(\"div\", {\n          className: \"flex items-center\",\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 205,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-gray-500 mr-1\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 206,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 219,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 220,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 221,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 222,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_6__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c6 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"ExistsColumnFilter\");\n$RefreshReg$(_c5, \"Table\");\n$RefreshReg$(_c6, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsIkV4aXN0c0NvbHVtbkZpbHRlciIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJmaWx0ZXJUeXBlcyIsImV4aXN0cyIsInJvd3MiLCJmaWx0ZXIiLCJyb3dWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VUYWJsZSIsInVzZUZpbHRlcnMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGFibGVCb2R5UHJvcHMiLCJoZWFkZXJHcm91cHMiLCJwcmVwYXJlUm93IiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwiY2FuRmlsdGVyIiwiRmlsdGVyIiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJIb29rc1BhZ2UiLCJIZWFkZXIiLCJhY2Nlc3NvciIsImZhbGxiYWNrcyIsImpvaW4iLCJDZWxsIiwiaXNWYWxpZEhleENvbG9yIiwiU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUFXLE1BQUMs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QUFoQjtBQTJEQSxTQUNDLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsQ0FERCxFQUlDO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRCxFQUtDLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRVEsT0FBaEI7QUFBeUIsUUFBSSxFQUFFbUMsOENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELENBREQ7QUFXQTs7SUF2RXVCVCxTOztNQUFBQSxTIiwiZmlsZSI6Ii4vcGFnZXMvaG9va3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlVGFibGUsIHVzZUZpbHRlcnMsIHVzZUdsb2JhbEZpbHRlcn0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IHtpc1ZhbGlkSGV4Q29sb3J9IGZyb20gJy4uLy4uL2xpYi9jb2xvcic7XG5pbXBvcnQgY29sb3JzIGZyb20gJy4vZGF0YS9jb2xvcnMuanNvbic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5jb25zdCBOb1NzciA9IChwcm9wcykgPT4gPFJlYWN0LkZyYWdtZW50Pntwcm9wcy5jaGlsZHJlbn08L1JlYWN0LkZyYWdtZW50PjtcblxuZnVuY3Rpb24gU2VsZWN0Q29sdW1uRmlsdGVyKHtcblx0Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHNldEZpbHRlciwgcHJlRmlsdGVyZWRSb3dzLCBpZH0sXG59KSB7XG5cdC8vIENhbGN1bGF0ZSB0aGUgb3B0aW9ucyBmb3IgZmlsdGVyaW5nXG5cdC8vIHVzaW5nIHRoZSBwcmVGaWx0ZXJlZFJvd3Ncblx0Y29uc3Qgb3B0aW9ucyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBuZXcgU2V0KCk7XG5cdFx0cHJlRmlsdGVyZWRSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuXHRcdFx0b3B0aW9ucy5hZGQocm93LnZhbHVlc1tpZF0pO1xuXHRcdH0pO1xuXHRcdHJldHVybiBbLi4ub3B0aW9ucy52YWx1ZXMoKV07XG5cdH0sIFtpZCwgcHJlRmlsdGVyZWRSb3dzXSk7XG5cdC8vIFJlbmRlciBhIG11bHRpLXNlbGVjdCBib3hcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG5cdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdGNsYXNzTmFtZT1cImJsb2NrIGFwcGVhcmFuY2Utbm9uZSB3LWZ1bGwgYmctZ3JheS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHB5LTEgcHgtMiBwci04IHJvdW5kZWQgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcblx0XHRcdFx0dmFsdWU9e2ZpbHRlclZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj5BbGw8L29wdGlvbj5cblx0XHRcdFx0e29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IChcblx0XHRcdFx0XHQ8b3B0aW9uIGtleT17aX0gdmFsdWU9e29wdGlvbn0+XG5cdFx0XHRcdFx0XHR7b3B0aW9ufVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LXktMCByaWdodC0wIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgdGV4dC1ncmF5LTcwMFwiPlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZmlsbC1jdXJyZW50IGgtNCB3LTRcIlxuXHRcdFx0XHRcdHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuXHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjAgMjBcIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIiAvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0Q29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyfX0pIHtcblx0cmV0dXJuIChcblx0XHQ8aW5wdXRcblx0XHRcdGNsYXNzTmFtZT1cImJnLWdyYXktMjAwIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMSBweC0yIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIlxuXHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0dmFsdWU9e2ZpbHRlclZhbHVlIHx8ICcnfVxuXHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdHNldEZpbHRlcihlLnRhcmdldC52YWx1ZSB8fCB1bmRlZmluZWQpOyAvLyBTZXQgdW5kZWZpbmVkIHRvIHJlbW92ZSB0aGUgZmlsdGVyIGVudGlyZWx5XG5cdFx0XHR9fVxuXHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIHZhbHVlXCJcblx0XHQvPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBFeGlzdHNDb2x1bW5GaWx0ZXIoe2NvbHVtbjoge2ZpbHRlclZhbHVlID0gZmFsc2UsIHNldEZpbHRlcn19KSB7XG5cdHJldHVybiAoXG5cdFx0PGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgIGZsZXggaXRlbXMtY2VudGVyIGgtNlwiPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdGNsYXNzTmFtZT1cIm1yLTIgbGVhZGluZy10aWdodFwiXG5cdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdGNoZWNrZWQ9e2ZpbHRlclZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHtcblx0XHRcdFx0XHRzZXRGaWx0ZXIoIWZpbHRlclZhbHVlKTtcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsXCI+RXhpc3RzPC9zcGFuPlxuXHRcdDwvbGFiZWw+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIFRhYmxlKHtjb2x1bW5zLCBkYXRhfSkge1xuXHRjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXG5cdFx0KCkgPT4gKHtcblx0XHRcdC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cblx0XHRcdGV4aXN0czogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xuXHRcdFx0XHRpZiAoIWZpbHRlclZhbHVlKSByZXR1cm4gWy4uLnJvd3NdO1xuXHRcdFx0XHRyZXR1cm4gcm93cy5maWx0ZXIoKHJvdykgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG5cdFx0XHRcdFx0Y29uc29sZS5sb2cocm93VmFsdWUpO1xuXHRcdFx0XHRcdHJldHVybiAocm93VmFsdWUgfHwgJycpICE9PSAnJztcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdH0pLFxuXHRcdFtdXG5cdCk7XG5cblx0Y29uc3Qge1xuXHRcdGdldFRhYmxlUHJvcHMsXG5cdFx0Z2V0VGFibGVCb2R5UHJvcHMsXG5cdFx0aGVhZGVyR3JvdXBzLFxuXHRcdHJvd3MsXG5cdFx0cHJlcGFyZVJvdyxcblx0fSA9IHVzZVRhYmxlKFxuXHRcdHtcblx0XHRcdGNvbHVtbnMsXG5cdFx0XHRkYXRhLFxuXHRcdFx0ZmlsdGVyVHlwZXMsXG5cdFx0fSxcblx0XHR1c2VGaWx0ZXJzXG5cdFx0Ly8gdXNlR2xvYmFsRmlsdGVyXG5cdCk7XG5cblx0Ly8gUmVuZGVyIHRoZSBVSSBmb3IgeW91ciB0YWJsZVxuXHRyZXR1cm4gKFxuXHRcdDx0YWJsZVxuXHRcdFx0Y2xhc3NOYW1lPVwidGV4dC1sZWZ0IHRhYmxlLWZpeGVkIHctZnVsbCBib3JkZXIgYm9yZGVyLWNvbGxhcHNlXCJcblx0XHRcdHsuLi5nZXRUYWJsZVByb3BzKCl9PlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHR7aGVhZGVyR3JvdXBzLm1hcCgoaGVhZGVyR3JvdXApID0+IChcblx0XHRcdFx0XHQ8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHR7aGVhZGVyR3JvdXAuaGVhZGVycy5tYXAoKGNvbHVtbikgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8dGhcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGlnbi1ib3R0b20gcHktNCBweC02IGJnLWdyZXktbGlnaHRlc3QgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXhzIHRleHQtZ3JleS1kYXJrIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHR7LyogUmVuZGVyIHRoZSBjb2x1bW5zIGZpbHRlciBVSSAqL31cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0e2NvbHVtbi5jYW5GaWx0ZXIgJiYgY29sdW1uLkZpbHRlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGNvbHVtbi5yZW5kZXIoJ0ZpbHRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDogbnVsbH1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC90aD5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG5cdFx0XHRcdHtyb3dzLm1hcCgocm93LCBpKSA9PiB7XG5cdFx0XHRcdFx0cHJlcGFyZVJvdyhyb3cpO1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8dHIgey4uLnJvdy5nZXRSb3dQcm9wcygpfT5cblx0XHRcdFx0XHRcdFx0e3Jvdy5jZWxscy5tYXAoKGNlbGwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInRleHQteHMgcHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLmNlbGwuZ2V0Q2VsbFByb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Y2VsbC5yZW5kZXIoJ0NlbGwnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb29rc1BhZ2UoKSB7XG5cdGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnU0NTUyBWYXJpYWJsZScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc2Nzc1ZhcmlhYmxlJyxcblx0XHRcdFx0RmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdDU1MgQ3VzdG9tIFByb3BlcnR5Jyxcblx0XHRcdFx0YWNjZXNzb3I6ICdjdXN0b21Qcm9wZXJ0eScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdEhlYWRlcjogJ0dyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTdWJncm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc3ViZ3JvdXAnLFxuXHRcdFx0XHRGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnRmFsbGJhY2tzJyxcblx0XHRcdFx0YWNjZXNzb3I6IChyb3cpID0+IHJvdy5mYWxsYmFja3Muam9pbignLCAnKSxcblx0XHRcdFx0RmlsdGVyOiBFeGlzdHNDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2V4aXN0cycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdEZWZhdWx0IFZhbHVlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0XHRGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdFx0Q2VsbDogKHt2YWx1ZX0pID0+IHtcblx0XHRcdFx0XHRpZiAoIWlzVmFsaWRIZXhDb2xvcih2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdubycpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIFN0cmluZyh2YWx1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCd5ZXMnKTtcblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQtZnVsbCBpbmxpbmUtYmxvY2sgYm9yZGVyIGJvcmRlci1ncmF5LTUwMCBtci0xXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdmFsdWV9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PE5vU3NyPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPlZhcmlhYmxlcyB8IFRoZW1lIFRvb2xzPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItNlwiPlRoZW1lIFZhcmlhYmxlcyBTZWFyY2g8L2gxPlxuXHRcdFx0XHQ8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17Y29sb3JzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Ob1Nzcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})