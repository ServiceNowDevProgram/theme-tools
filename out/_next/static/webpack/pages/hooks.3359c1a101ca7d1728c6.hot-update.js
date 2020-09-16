webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$(),\n    _s3 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  _s();\n\n  var _this2 = this;\n\n  var _ref$column = _ref.column,\n      filterValue = _ref$column.filterValue,\n      setFilter = _ref$column.setFilter,\n      preFilteredRows = _ref$column.preFilteredRows,\n      id = _ref$column.id;\n  // Calculate the options for filtering\n  // using the preFilteredRows\n  var options = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    var options = new Set();\n    preFilteredRows.forEach(function (row) {\n      options.add(row.values[id]);\n    });\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options.values());\n  }, [id, preFilteredRows]); // Render a multi-select box\n\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: filterValue,\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 6\n    }\n  }))));\n}\n\n_s(SelectColumnFilter, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n\n_c2 = SelectColumnFilter;\n\nfunction DefaultColumnFilter(_ref2) {\n  var _ref2$column = _ref2.column,\n      filterValue = _ref2$column.filterValue,\n      setFilter = _ref2$column.setFilter;\n  return __jsx(\"input\", {\n    className: \"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\",\n    type: \"text\",\n    value: filterValue || '',\n    onChange: function onChange(e) {\n      setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n    },\n    placeholder: \"Search for value\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 3\n    }\n  });\n}\n\n_c3 = DefaultColumnFilter;\n\nfunction ExistsColumnFilter(_ref3) {\n  var _ref3$column = _ref3.column,\n      _ref3$column$filterVa = _ref3$column.filterValue,\n      filterValue = _ref3$column$filterVa === void 0 ? false : _ref3$column$filterVa,\n      setFilter = _ref3$column.setFilter;\n  return __jsx(\"label\", {\n    className: \"block text-gray-700  flex items-center h-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 3\n    }\n  }, __jsx(\"input\", {\n    className: \"mr-2 leading-tight\",\n    type: \"checkbox\",\n    checked: filterValue,\n    onChange: function onChange(e) {\n      e.preventDefault();\n      setFilter(!filterValue);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 4\n    }\n  }), __jsx(\"span\", {\n    \"class\": \"text-xs font-normal\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }\n  }, \"Exists\"));\n}\n\n_c4 = ExistsColumnFilter;\n\nfunction Table(_ref4) {\n  _s2();\n\n  var _this3 = this;\n\n  var columns = _ref4.columns,\n      data = _ref4.data;\n  var filterTypes = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return {\n      // Add a new fuzzyTextFilterFn filter type.\n      \"boolean\": function boolean(rows, id, filterValue) {\n        return rows.filter(function (row) {\n          var rowValue = row.values[id];\n          console.log(rowValue);\n          return rowValue !== undefined;\n        });\n      }\n    };\n  }, []);\n\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"])({\n    columns: columns,\n    data: data\n  }, react_table__WEBPACK_IMPORTED_MODULE_4__[\"useFilters\"] // useGlobalFilter\n  ),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow; // Render the UI for your table\n\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 9\n        }\n      }, column.render('Header')), console.log(column), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s2(Table, \"btpGsulPp45/dKsKn7x/8KrGdQs=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_4__[\"useTable\"]];\n});\n\n_c5 = Table;\nfunction HooksPage() {\n  _s3();\n\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      },\n      Filter: ExistsColumnFilter,\n      filter: 'toggle'\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 204,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 205,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 207,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_5__,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 208,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s3(HooksPage, \"erkfbBpUuAY09jdvhSOqc0XsEHQ=\");\n\n_c6 = HooksPage;\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"DefaultColumnFilter\");\n$RefreshReg$(_c4, \"ExistsColumnFilter\");\n$RefreshReg$(_c5, \"Table\");\n$RefreshReg$(_c6, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJjb2x1bW4iLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlciIsInByZUZpbHRlcmVkUm93cyIsImlkIiwib3B0aW9ucyIsIlJlYWN0IiwidXNlTWVtbyIsIlNldCIsImZvckVhY2giLCJyb3ciLCJhZGQiLCJ2YWx1ZXMiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiRGVmYXVsdENvbHVtbkZpbHRlciIsIkV4aXN0c0NvbHVtbkZpbHRlciIsInByZXZlbnREZWZhdWx0IiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsImZpbHRlclR5cGVzIiwicm93cyIsImZpbHRlciIsInJvd1ZhbHVlIiwiY29uc29sZSIsImxvZyIsInVzZVRhYmxlIiwidXNlRmlsdGVycyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInByZXBhcmVSb3ciLCJoZWFkZXJHcm91cCIsImdldEhlYWRlckdyb3VwUHJvcHMiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyUHJvcHMiLCJyZW5kZXIiLCJjYW5GaWx0ZXIiLCJGaWx0ZXIiLCJnZXRSb3dQcm9wcyIsImNlbGxzIiwiY2VsbCIsImdldENlbGxQcm9wcyIsIkhvb2tzUGFnZSIsIkhlYWRlciIsImFjY2Vzc29yIiwiZmFsbGJhY2tzIiwiam9pbiIsImNvbG9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFEO0FBQUEsU0FBVyxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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TDtBQUNDc0IsWUFBTSxFQUFFLFVBRFQ7QUFFQ0MsY0FBUSxFQUFFLFVBRlg7QUFHQ1AsWUFBTSxFQUFFN0Msa0JBSFQ7QUFJQzZCLFlBQU0sRUFBRTtBQUpULEtBcEJLLEVBMEJMO0FBQ0NzQixZQUFNLEVBQUUsV0FEVDtBQUVDQyxjQUFRLEVBQUUsa0JBQUN6QyxHQUFEO0FBQUEsZUFBU0EsR0FBRyxDQUFDMEMsU0FBSixDQUFjQyxJQUFkLENBQW1CLElBQW5CLENBQVQ7QUFBQSxPQUZYO0FBR0NULFlBQU0sRUFBRXZCLGtCQUhUO0FBSUNPLFlBQU0sRUFBRTtBQUpULEtBMUJLLEVBZ0NMO0FBQ0NzQixZQUFNLEVBQUUsZUFEVDtBQUVDQyxjQUFRLEVBQUUsY0FGWDtBQUdDUCxZQUFNLEVBQUV4QixtQkFIVDtBQUlDUSxZQUFNLEVBQUU7QUFKVCxLQWhDSyxDQUFOO0FBQUEsR0FEZSxFQXdDZixFQXhDZSxDQUFoQjtBQTJDQSxTQUNDLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREQsQ0FERCxFQUlDO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFKRCxFQUtDLE1BQUMsS0FBRDtBQUFPLFdBQU8sRUFBRUosT0FBaEI7QUFBeUIsUUFBSSxFQUFFOEIsOENBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURELENBREQ7QUFXQTs7SUF2RHVCTCxTOztNQUFBQSxTIiwiZmlsZSI6Ii4vcGFnZXMvaG9va3MvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlVGFibGUsIHVzZUZpbHRlcnMsIHVzZUdsb2JhbEZpbHRlcn0gZnJvbSAncmVhY3QtdGFibGUnO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2RhdGEvY29sb3JzLmpzb24nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTm9Tc3IgPSAocHJvcHMpID0+IDxSZWFjdC5GcmFnbWVudD57cHJvcHMuY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XG5cbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7XG5cdGNvbHVtbjoge2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXIsIHByZUZpbHRlcmVkUm93cywgaWR9LFxufSkge1xuXHQvLyBDYWxjdWxhdGUgdGhlIG9wdGlvbnMgZm9yIGZpbHRlcmluZ1xuXHQvLyB1c2luZyB0aGUgcHJlRmlsdGVyZWRSb3dzXG5cdGNvbnN0IG9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcblx0XHRjb25zdCBvcHRpb25zID0gbmV3IFNldCgpO1xuXHRcdHByZUZpbHRlcmVkUm93cy5mb3JFYWNoKChyb3cpID0+IHtcblx0XHRcdG9wdGlvbnMuYWRkKHJvdy52YWx1ZXNbaWRdKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gWy4uLm9wdGlvbnMudmFsdWVzKCldO1xuXHR9LCBbaWQsIHByZUZpbHRlcmVkUm93c10pO1xuXHQvLyBSZW5kZXIgYSBtdWx0aS1zZWxlY3QgYm94XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuXHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRjbGFzc05hbWU9XCJibG9jayBhcHBlYXJhbmNlLW5vbmUgdy1mdWxsIGJnLWdyYXktMjAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBweS0xIHB4LTIgcHItOCByb3VuZGVkIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG5cdFx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0c2V0RmlsdGVyKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxuXHRcdFx0XHRcdFx0e29wdGlvbn1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDBcIj5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHNldEZpbHRlcn19KSB7XG5cdHJldHVybiAoXG5cdFx0PGlucHV0XG5cdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTEgcHgtMiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCJcblx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cblx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuXHRcdFx0fX1cblx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB2YWx1ZVwiXG5cdFx0Lz5cblx0KTtcbn1cblxuZnVuY3Rpb24gRXhpc3RzQ29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSA9IGZhbHNlLCBzZXRGaWx0ZXJ9fSkge1xuXHRyZXR1cm4gKFxuXHRcdDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwICBmbGV4IGl0ZW1zLWNlbnRlciBoLTZcIj5cblx0XHRcdDxpbnB1dFxuXHRcdFx0XHRjbGFzc05hbWU9XCJtci0yIGxlYWRpbmctdGlnaHRcIlxuXHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRjaGVja2VkPXtmaWx0ZXJWYWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHNldEZpbHRlcighZmlsdGVyVmFsdWUpO1xuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC14cyBmb250LW5vcm1hbFwiPkV4aXN0czwvc3Bhbj5cblx0XHQ8L2xhYmVsPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YX0pIHtcblx0Y29uc3QgZmlsdGVyVHlwZXMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+ICh7XG5cdFx0XHQvLyBBZGQgYSBuZXcgZnV6enlUZXh0RmlsdGVyRm4gZmlsdGVyIHR5cGUuXG5cdFx0XHRib29sZWFuOiAocm93cywgaWQsIGZpbHRlclZhbHVlKSA9PiB7XG5cdFx0XHRcdHJldHVybiByb3dzLmZpbHRlcigocm93KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qgcm93VmFsdWUgPSByb3cudmFsdWVzW2lkXTtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyb3dWYWx1ZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJvd1ZhbHVlICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHR9KSxcblx0XHRbXVxuXHQpO1xuXG5cdGNvbnN0IHtcblx0XHRnZXRUYWJsZVByb3BzLFxuXHRcdGdldFRhYmxlQm9keVByb3BzLFxuXHRcdGhlYWRlckdyb3Vwcyxcblx0XHRyb3dzLFxuXHRcdHByZXBhcmVSb3csXG5cdH0gPSB1c2VUYWJsZShcblx0XHR7XG5cdFx0XHRjb2x1bW5zLFxuXHRcdFx0ZGF0YSxcblx0XHR9LFxuXHRcdHVzZUZpbHRlcnNcblx0XHQvLyB1c2VHbG9iYWxGaWx0ZXJcblx0KTtcblxuXHQvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlXG5cdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGFibGUtZml4ZWQgdy1mdWxsIGJvcmRlciBib3JkZXItY29sbGFwc2VcIlxuXHRcdFx0ey4uLmdldFRhYmxlUHJvcHMoKX0+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4gKFxuXHRcdFx0XHRcdDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cblx0XHRcdFx0XHRcdHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDx0aFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJvdHRvbSBweS00IHB4LTYgYmctZ3JleS1saWdodGVzdCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1ncmV5LWRhcmsgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxuXHRcdFx0XHRcdFx0XHRcdHtjb25zb2xlLmxvZyhjb2x1bW4pfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29sdW1uLmNhbkZpbHRlciAmJiBjb2x1bW4uRmlsdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gY29sdW1uLnJlbmRlcignRmlsdGVyJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cblx0XHRcdFx0e3Jvd3MubWFwKChyb3csIGkpID0+IHtcblx0XHRcdFx0XHRwcmVwYXJlUm93KHJvdyk7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHR7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC14cyBweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvb2tzUGFnZSgpIHtcblx0Y29uc3QgY29sdW1ucyA9IFJlYWN0LnVzZU1lbW8oXG5cdFx0KCkgPT4gW1xuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTQ1NTIFZhcmlhYmxlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzY3NzVmFyaWFibGUnLFxuXHRcdFx0XHRGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0NTUyBDdXN0b20gUHJvcGVydHknLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2N1c3RvbVByb3BlcnR5Jyxcblx0XHRcdFx0RmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyAoXCJnZW5lcmljXCJ8XCJjYXRlZ29yeVwifFwic3BlY2lmaWNcIilcblx0XHRcdFx0SGVhZGVyOiAnR3JvdXAnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2dyb3VwJyxcblx0XHRcdFx0RmlsdGVyOiBTZWxlY3RDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ1N1Ymdyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdzdWJncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdGYWxsYmFja3MnLFxuXHRcdFx0XHRhY2Nlc3NvcjogKHJvdykgPT4gcm93LmZhbGxiYWNrcy5qb2luKCcsICcpLFxuXHRcdFx0XHRGaWx0ZXI6IEV4aXN0c0NvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAndG9nZ2xlJyxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdEhlYWRlcjogJ0RlZmF1bHQgVmFsdWUnLFxuXHRcdFx0XHRhY2Nlc3NvcjogJ2RlZmF1bHRWYWx1ZScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRdLFxuXHRcdFtdXG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8Tm9Tc3I+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+VmFyaWFibGVzIHwgVGhlbWUgVG9vbHM8L3RpdGxlPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBtYi02XCI+VGhlbWUgVmFyaWFibGVzIFNlYXJjaDwvaDE+XG5cdFx0XHRcdDxUYWJsZSBjb2x1bW5zPXtjb2x1bW5zfSBkYXRhPXtjb2xvcnN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L05vU3NyPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})