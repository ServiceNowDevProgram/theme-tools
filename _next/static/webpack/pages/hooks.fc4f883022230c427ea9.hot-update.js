webpackHotUpdate_N_E("pages/hooks",{

/***/ "./pages/hooks/index.js":
/*!******************************!*\
  !*** ./pages/hooks/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HooksPage; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/color */ \"./lib/color.js\");\n/* harmony import */ var _data_colors_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\");\nvar _data_colors_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/colors.json */ \"./pages/hooks/data/colors.json\", 1);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.leonard/code/repos/next-theme-tools/pages/hooks/index.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar NoSsr = function NoSsr(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 26\n    }\n  }, props.children);\n};\n\n_c = NoSsr;\n\nfunction SelectColumnFilter(_ref) {\n  var _this2 = this;\n\n  var value = _ref.value,\n      setValue = _ref.setValue,\n      options = _ref.options;\n  return __jsx(\"div\", {\n    className: \"relative\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }, __jsx(\"select\", {\n    className: \"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n    value: value,\n    onChange: function onChange(e) {\n      setValue(e.target.value || undefined);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 4\n    }\n  }, __jsx(\"option\", {\n    value: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, \"All\"), options.map(function (option, i) {\n    return __jsx(\"option\", {\n      key: i,\n      value: option,\n      __self: _this2,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 6\n      }\n    }, option);\n  })), __jsx(\"div\", {\n    className: \"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 4\n    }\n  }, __jsx(\"svg\", {\n    className: \"fill-current h-4 w-4\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 20 20\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(\"path\", {\n    d: \"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 6\n    }\n  }))));\n} // function DefaultColumnFilter({column: {filterValue, setFilter}}) {\n// \treturn (\n// \t\t<input\n// \t\t\tclassName=\"bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n// \t\t\ttype=\"text\"\n// \t\t\tvalue={filterValue || ''}\n// \t\t\tonChange={(e) => {\n// \t\t\t\tsetFilter(e.target.value || undefined); // Set undefined to remove the filter entirely\n// \t\t\t}}\n// \t\t\tplaceholder=\"Search for value\"\n// \t\t/>\n// \t);\n// }\n// function ExistsColumnFilter({column: {filterValue = false, setFilter}}) {\n// \treturn (\n// \t\t<label className=\"block text-gray-700  flex items-center h-6\">\n// \t\t\t<input\n// \t\t\t\tclassName=\"mr-2 leading-tight\"\n// \t\t\t\ttype=\"checkbox\"\n// \t\t\t\tchecked={filterValue}\n// \t\t\t\tonChange={(e) => {\n// \t\t\t\t\tsetFilter(!filterValue);\n// \t\t\t\t}}\n// \t\t\t/>\n// \t\t\t<span className=\"text-xs font-normal\">Exists</span>\n// \t\t</label>\n// \t);\n// }\n\n\n_c2 = SelectColumnFilter;\n\nfunction Table(_ref2) {\n  _s();\n\n  var _this3 = this;\n\n  var columns = _ref2.columns,\n      data = _ref2.data,\n      onFilterChange = _ref2.onFilterChange,\n      controlledFilters = _ref2.filters;\n\n  // const filterTypes = React.useMemo(\n  // \t() => ({\n  // \t\t// Add a new fuzzyTextFilterFn filter type.\n  // \t\texists: (rows, id, filterValue) => {\n  // \t\t\tif (!filterValue) return [...rows];\n  // \t\t\treturn rows.filter((row) => {\n  // \t\t\t\tconst rowValue = row.values[id];\n  // \t\t\t\treturn (rowValue || '') !== '';\n  // \t\t\t});\n  // \t\t},\n  // \t}),\n  // \t[]\n  // );\n  var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_5__[\"useTable\"])({\n    columns: columns,\n    data: data,\n    filterTypes: filterTypes,\n    // manualFilters: true,\n    initialState: {\n      filters: controlledFilters\n    },\n    useControlledState: function useControlledState(state) {\n      console.log('useControlledState');\n      console.log(state); // const vp = viewParams;\n      // return React.useMemo(\n      // \t() => ({\n      // \t\t...state,\n      // \t\t...vp,\n      // \t}),\n      // \t[state, vp]\n      // );\n\n      return react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          filters: controlledFilters\n        });\n      }, [state, controlledFilters]);\n    }\n  }),\n      getTableProps = _useTable.getTableProps,\n      getTableBodyProps = _useTable.getTableBodyProps,\n      headerGroups = _useTable.headerGroups,\n      rows = _useTable.rows,\n      prepareRow = _useTable.prepareRow,\n      state = _useTable.state;\n\n  console.log('Table');\n  console.log(state.filters);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log('change');\n    onFilterChange(state.filters);\n  }, [onFilterChange, state.filters]); // Render the UI for your table\n\n  return __jsx(\"table\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"text-left table-fixed w-full border border-collapse\"\n  }, getTableProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 3\n    }\n  }), __jsx(\"thead\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 4\n    }\n  }, headerGroups.map(function (headerGroup) {\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headerGroup.getHeaderGroupProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 6\n      }\n    }), headerGroup.headers.map(function (column) {\n      return __jsx(\"th\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"align-bottom py-4 px-6 bg-grey-lightest font-bold uppercase text-xs text-grey-dark border-b border-grey-light\"\n      }, column.getHeaderProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 8\n        }\n      }), __jsx(\"div\", {\n        className: \"mb-2\",\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 9\n        }\n      }, column.render('Header')), __jsx(\"div\", {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 140,\n          columnNumber: 9\n        }\n      }, column.canFilter && column.Filter ? column.render('Filter') : null));\n    }));\n  })), __jsx(\"tbody\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, getTableBodyProps(), {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 4\n    }\n  }), rows.map(function (row, i) {\n    prepareRow(row);\n    return __jsx(\"tr\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, row.getRowProps(), {\n      __self: _this3,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 7\n      }\n    }), row.cells.map(function (cell) {\n      return __jsx(\"td\", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        className: \"text-xs py-4 px-6 border-b border-grey-light\"\n      }, cell.getCellProps(), {\n        __self: _this3,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 10\n        }\n      }), cell.render('Cell'));\n    }));\n  })));\n}\n\n_s(Table, \"HMfFKh9o0JvO3/ChxL4V0SDitKM=\", false, function () {\n  return [react_table__WEBPACK_IMPORTED_MODULE_5__[\"useTable\"]];\n});\n\n_c3 = Table;\nfunction HooksPage() {\n  _s2();\n\n  var _this4 = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      filters = _useState[0],\n      setFilters = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var columns = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [{\n      Header: 'SCSS Variable',\n      accessor: 'scssVariable',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'CSS Custom Property',\n      accessor: 'customProperty',\n      Filter: DefaultColumnFilter,\n      filter: 'includes'\n    }, {\n      // (\"generic\"|\"category\"|\"specific\")\n      Header: 'Group',\n      accessor: 'group',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Subgroup',\n      accessor: 'subgroup',\n      Filter: SelectColumnFilter,\n      filter: 'includes'\n    }, {\n      Header: 'Fallbacks',\n      accessor: function accessor(row) {\n        return row.fallbacks.join(', ');\n      },\n      Filter: ExistsColumnFilter,\n      filter: 'exists'\n    }, {\n      Header: 'Default Value',\n      accessor: 'defaultValue',\n      Filter: DefaultColumnFilter,\n      filter: 'includes',\n      Cell: function Cell(_ref3) {\n        var value = _ref3.value;\n\n        if (!Object(_lib_color__WEBPACK_IMPORTED_MODULE_6__[\"isValidHexColor\"])(value)) {\n          return String(value);\n        }\n\n        return __jsx(\"div\", {\n          className: \"flex items-center\",\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 221,\n            columnNumber: 7\n          }\n        }, __jsx(\"div\", {\n          className: \"w-4 h-4 rounded-full inline-block border border-gray-600 mr-1\",\n          style: {\n            backgroundColor: value\n          },\n          __self: _this4,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 222,\n            columnNumber: 8\n          }\n        }), value);\n      }\n    }];\n  }, []);\n  return __jsx(NoSsr, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 235,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 4\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 238,\n      columnNumber: 6\n    }\n  }, \"Variables | Theme Tools\")), __jsx(\"h1\", {\n    className: \"text-3xl mb-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 240,\n      columnNumber: 5\n    }\n  }, \"Theme Variables Search\"), __jsx(Table, {\n    columns: columns,\n    data: _data_colors_json__WEBPACK_IMPORTED_MODULE_7__,\n    onFilterChange: function onFilterChange(x) {\n      console.log(x); // // if (JSON.stringify(x.filters) !== JSON.stringify(params.filters)) {\n      // if (x.filters !== params.filters) {\n      // \tsetFilters(x);\n      // }\n    } // onFilterChange={setParams}\n    ,\n    filters: filters,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 241,\n      columnNumber: 5\n    }\n  })));\n}\n\n_s2(HooksPage, \"lVupq4sgiEn7aRSuYIGWNkeOc0U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c4 = HooksPage;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"NoSsr\");\n$RefreshReg$(_c2, \"SelectColumnFilter\");\n$RefreshReg$(_c3, \"Table\");\n$RefreshReg$(_c4, \"HooksPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9va3MvaW5kZXguanM/NTI5YiJdLCJuYW1lcyI6WyJOb1NzciIsInByb3BzIiwiY2hpbGRyZW4iLCJTZWxlY3RDb2x1bW5GaWx0ZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib3B0aW9ucyIsImUiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJtYXAiLCJvcHRpb24iLCJpIiwiVGFibGUiLCJjb2x1bW5zIiwiZGF0YSIsIm9uRmlsdGVyQ2hhbmdlIiwiY29udHJvbGxlZEZpbHRlcnMiLCJmaWx0ZXJzIiwidXNlVGFibGUiLCJmaWx0ZXJUeXBlcyIsImluaXRpYWxTdGF0ZSIsInVzZUNvbnRyb2xsZWRTdGF0ZSIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwidXNlTWVtbyIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwidXNlRWZmZWN0IiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwiY2FuRmlsdGVyIiwiRmlsdGVyIiwicm93IiwiZ2V0Um93UHJvcHMiLCJjZWxscyIsImNlbGwiLCJnZXRDZWxsUHJvcHMiLCJIb29rc1BhZ2UiLCJ1c2VTdGF0ZSIsInNldEZpbHRlcnMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJhY2Nlc3NvciIsIkRlZmF1bHRDb2x1bW5GaWx0ZXIiLCJmaWx0ZXIiLCJmYWxsYmFja3MiLCJqb2luIiwiRXhpc3RzQ29sdW1uRmlsdGVyIiwiQ2VsbCIsImlzVmFsaWRIZXhDb2xvciIsIlN0cmluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9ycyIsIngiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0M7QUFDQyxtQkFBUyxFQUFDLCtEQURYO0FBRUMsZUFBSyxFQUFFO0FBQUMwRCwyQkFBZSxFQUFFMUQ7QUFBbEIsV0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQsRUFJRUEsS0FKRixDQUREO0FBUUE7QUFsQkYsS0FoQ0ssQ0FBTjtBQUFBLEdBRGUsRUFzRGYsRUF0RGUsQ0FBaEI7QUF5REEsU0FDQyxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURELENBREQsRUFJQztBQUFJLGFBQVMsRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBSkQsRUFLQyxNQUFDLEtBQUQ7QUFDQyxXQUFPLEVBQUVVLE9BRFY7QUFFQyxRQUFJLEVBQUVpRCw4Q0FGUDtBQUdDLGtCQUFjLEVBQUUsd0JBQUNDLENBQUQsRUFBTztBQUN0QnhDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZdUMsQ0FBWixFQURzQixDQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBVEYsQ0FVQztBQVZEO0FBV0MsV0FBTyxFQUFFOUMsT0FYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FERCxDQUREO0FBdUJBOztJQXJGdUI2QixTO1VBR1JJLHFEOzs7TUFIUUosUyIsImZpbGUiOiIuL3BhZ2VzL2hvb2tzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge3VzZVRhYmxlLCB1c2VGaWx0ZXJzLCB1c2VHbG9iYWxGaWx0ZXJ9IGZyb20gJ3JlYWN0LXRhYmxlJztcbmltcG9ydCB7aXNWYWxpZEhleENvbG9yfSBmcm9tICcuLi8uLi9saWIvY29sb3InO1xuaW1wb3J0IGNvbG9ycyBmcm9tICcuL2RhdGEvY29sb3JzLmpzb24nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgTm9Tc3IgPSAocHJvcHMpID0+IDxSZWFjdC5GcmFnbWVudD57cHJvcHMuY2hpbGRyZW59PC9SZWFjdC5GcmFnbWVudD47XG5cbmZ1bmN0aW9uIFNlbGVjdENvbHVtbkZpbHRlcih7dmFsdWUsIHNldFZhbHVlLCBvcHRpb25zfSkge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cblx0XHRcdDxzZWxlY3Rcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYmxvY2sgYXBwZWFyYW5jZS1ub25lIHctZnVsbCBiZy1ncmF5LTIwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcHktMSBweC0yIHByLTggcm91bmRlZCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuXHRcdFx0XHRcdHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlIHx8IHVuZGVmaW5lZCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG5cdFx0XHRcdHtvcHRpb25zLm1hcCgob3B0aW9uLCBpKSA9PiAoXG5cdFx0XHRcdFx0PG9wdGlvbiBrZXk9e2l9IHZhbHVlPXtvcHRpb259PlxuXHRcdFx0XHRcdFx0e29wdGlvbn1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBpbnNldC15LTAgcmlnaHQtMCBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JheS03MDBcIj5cblx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZpbGwtY3VycmVudCBoLTQgdy00XCJcblx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG5cdFx0XHRcdFx0PHBhdGggZD1cIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCIgLz5cblx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLy8gZnVuY3Rpb24gRGVmYXVsdENvbHVtbkZpbHRlcih7Y29sdW1uOiB7ZmlsdGVyVmFsdWUsIHNldEZpbHRlcn19KSB7XG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGlucHV0XG4vLyBcdFx0XHRjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTEgcHgtMiB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCJcbi8vIFx0XHRcdHR5cGU9XCJ0ZXh0XCJcbi8vIFx0XHRcdHZhbHVlPXtmaWx0ZXJWYWx1ZSB8fCAnJ31cbi8vIFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4ge1xuLy8gXHRcdFx0XHRzZXRGaWx0ZXIoZS50YXJnZXQudmFsdWUgfHwgdW5kZWZpbmVkKTsgLy8gU2V0IHVuZGVmaW5lZCB0byByZW1vdmUgdGhlIGZpbHRlciBlbnRpcmVseVxuLy8gXHRcdFx0fX1cbi8vIFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciB2YWx1ZVwiXG4vLyBcdFx0Lz5cbi8vIFx0KTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gRXhpc3RzQ29sdW1uRmlsdGVyKHtjb2x1bW46IHtmaWx0ZXJWYWx1ZSA9IGZhbHNlLCBzZXRGaWx0ZXJ9fSkge1xuLy8gXHRyZXR1cm4gKFxuLy8gXHRcdDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwICBmbGV4IGl0ZW1zLWNlbnRlciBoLTZcIj5cbi8vIFx0XHRcdDxpbnB1dFxuLy8gXHRcdFx0XHRjbGFzc05hbWU9XCJtci0yIGxlYWRpbmctdGlnaHRcIlxuLy8gXHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuLy8gXHRcdFx0XHRjaGVja2VkPXtmaWx0ZXJWYWx1ZX1cbi8vIFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiB7XG4vLyBcdFx0XHRcdFx0c2V0RmlsdGVyKCFmaWx0ZXJWYWx1ZSk7XG4vLyBcdFx0XHRcdH19XG4vLyBcdFx0XHQvPlxuLy8gXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW5vcm1hbFwiPkV4aXN0czwvc3Bhbj5cbi8vIFx0XHQ8L2xhYmVsPlxuLy8gXHQpO1xuLy8gfVxuXG5mdW5jdGlvbiBUYWJsZSh7Y29sdW1ucywgZGF0YSwgb25GaWx0ZXJDaGFuZ2UsIGZpbHRlcnM6IGNvbnRyb2xsZWRGaWx0ZXJzfSkge1xuXHQvLyBjb25zdCBmaWx0ZXJUeXBlcyA9IFJlYWN0LnVzZU1lbW8oXG5cdC8vIFx0KCkgPT4gKHtcblx0Ly8gXHRcdC8vIEFkZCBhIG5ldyBmdXp6eVRleHRGaWx0ZXJGbiBmaWx0ZXIgdHlwZS5cblx0Ly8gXHRcdGV4aXN0czogKHJvd3MsIGlkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xuXHQvLyBcdFx0XHRpZiAoIWZpbHRlclZhbHVlKSByZXR1cm4gWy4uLnJvd3NdO1xuXHQvLyBcdFx0XHRyZXR1cm4gcm93cy5maWx0ZXIoKHJvdykgPT4ge1xuXHQvLyBcdFx0XHRcdGNvbnN0IHJvd1ZhbHVlID0gcm93LnZhbHVlc1tpZF07XG5cdC8vIFx0XHRcdFx0cmV0dXJuIChyb3dWYWx1ZSB8fCAnJykgIT09ICcnO1xuXHQvLyBcdFx0XHR9KTtcblx0Ly8gXHRcdH0sXG5cdC8vIFx0fSksXG5cdC8vIFx0W11cblx0Ly8gKTtcblxuXHRjb25zdCB7XG5cdFx0Z2V0VGFibGVQcm9wcyxcblx0XHRnZXRUYWJsZUJvZHlQcm9wcyxcblx0XHRoZWFkZXJHcm91cHMsXG5cdFx0cm93cyxcblx0XHRwcmVwYXJlUm93LFxuXHRcdHN0YXRlLFxuXHR9ID0gdXNlVGFibGUoe1xuXHRcdGNvbHVtbnMsXG5cdFx0ZGF0YSxcblx0XHRmaWx0ZXJUeXBlcyxcblx0XHQvLyBtYW51YWxGaWx0ZXJzOiB0cnVlLFxuXHRcdGluaXRpYWxTdGF0ZToge2ZpbHRlcnM6IGNvbnRyb2xsZWRGaWx0ZXJzfSxcblx0XHR1c2VDb250cm9sbGVkU3RhdGU6IChzdGF0ZSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ3VzZUNvbnRyb2xsZWRTdGF0ZScpO1xuXHRcdFx0Y29uc29sZS5sb2coc3RhdGUpO1xuXHRcdFx0Ly8gY29uc3QgdnAgPSB2aWV3UGFyYW1zO1xuXHRcdFx0Ly8gcmV0dXJuIFJlYWN0LnVzZU1lbW8oXG5cdFx0XHQvLyBcdCgpID0+ICh7XG5cdFx0XHQvLyBcdFx0Li4uc3RhdGUsXG5cdFx0XHQvLyBcdFx0Li4udnAsXG5cdFx0XHQvLyBcdH0pLFxuXHRcdFx0Ly8gXHRbc3RhdGUsIHZwXVxuXHRcdFx0Ly8gKTtcblx0XHRcdHJldHVybiBSZWFjdC51c2VNZW1vKFxuXHRcdFx0XHQoKSA9PiAoe1xuXHRcdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRcdGZpbHRlcnM6IGNvbnRyb2xsZWRGaWx0ZXJzLFxuXHRcdFx0XHR9KSxcblx0XHRcdFx0W3N0YXRlLCBjb250cm9sbGVkRmlsdGVyc11cblx0XHRcdCk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc29sZS5sb2coJ1RhYmxlJyk7XG5cdGNvbnNvbGUubG9nKHN0YXRlLmZpbHRlcnMpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ2NoYW5nZScpO1xuXHRcdG9uRmlsdGVyQ2hhbmdlKHN0YXRlLmZpbHRlcnMpO1xuXHR9LCBbb25GaWx0ZXJDaGFuZ2UsIHN0YXRlLmZpbHRlcnNdKTtcblxuXHQvLyBSZW5kZXIgdGhlIFVJIGZvciB5b3VyIHRhYmxlXG5cdHJldHVybiAoXG5cdFx0PHRhYmxlXG5cdFx0XHRjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgdGFibGUtZml4ZWQgdy1mdWxsIGJvcmRlciBib3JkZXItY29sbGFwc2VcIlxuXHRcdFx0ey4uLmdldFRhYmxlUHJvcHMoKX0+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdHtoZWFkZXJHcm91cHMubWFwKChoZWFkZXJHcm91cCkgPT4gKFxuXHRcdFx0XHRcdDx0ciB7Li4uaGVhZGVyR3JvdXAuZ2V0SGVhZGVyR3JvdXBQcm9wcygpfT5cblx0XHRcdFx0XHRcdHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcCgoY29sdW1uKSA9PiAoXG5cdFx0XHRcdFx0XHRcdDx0aFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsaWduLWJvdHRvbSBweS00IHB4LTYgYmctZ3JleS1saWdodGVzdCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdGV4dC1ncmV5LWRhcmsgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5jb2x1bW4uZ2V0SGVhZGVyUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+e2NvbHVtbi5yZW5kZXIoJ0hlYWRlcicpfTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdHsvKiBSZW5kZXIgdGhlIGNvbHVtbnMgZmlsdGVyIFVJICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7Y29sdW1uLmNhbkZpbHRlciAmJiBjb2x1bW4uRmlsdGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD8gY29sdW1uLnJlbmRlcignRmlsdGVyJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0OiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5IHsuLi5nZXRUYWJsZUJvZHlQcm9wcygpfT5cblx0XHRcdFx0e3Jvd3MubWFwKChyb3csIGkpID0+IHtcblx0XHRcdFx0XHRwcmVwYXJlUm93KHJvdyk7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDx0ciB7Li4ucm93LmdldFJvd1Byb3BzKCl9PlxuXHRcdFx0XHRcdFx0XHR7cm93LmNlbGxzLm1hcCgoY2VsbCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidGV4dC14cyBweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4uY2VsbC5nZXRDZWxsUHJvcHMoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtjZWxsLnJlbmRlcignQ2VsbCcpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvb2tzUGFnZSgpIHtcblx0Y29uc3QgW2ZpbHRlcnMsIHNldEZpbHRlcnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cdGNvbnN0IGNvbHVtbnMgPSBSZWFjdC51c2VNZW1vKFxuXHRcdCgpID0+IFtcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnU0NTUyBWYXJpYWJsZScsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc2Nzc1ZhcmlhYmxlJyxcblx0XHRcdFx0RmlsdGVyOiBEZWZhdWx0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdDU1MgQ3VzdG9tIFByb3BlcnR5Jyxcblx0XHRcdFx0YWNjZXNzb3I6ICdjdXN0b21Qcm9wZXJ0eScsXG5cdFx0XHRcdEZpbHRlcjogRGVmYXVsdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gKFwiZ2VuZXJpY1wifFwiY2F0ZWdvcnlcInxcInNwZWNpZmljXCIpXG5cdFx0XHRcdEhlYWRlcjogJ0dyb3VwJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdncm91cCcsXG5cdFx0XHRcdEZpbHRlcjogU2VsZWN0Q29sdW1uRmlsdGVyLFxuXHRcdFx0XHRmaWx0ZXI6ICdpbmNsdWRlcycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdTdWJncm91cCcsXG5cdFx0XHRcdGFjY2Vzc29yOiAnc3ViZ3JvdXAnLFxuXHRcdFx0XHRGaWx0ZXI6IFNlbGVjdENvbHVtbkZpbHRlcixcblx0XHRcdFx0ZmlsdGVyOiAnaW5jbHVkZXMnLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0SGVhZGVyOiAnRmFsbGJhY2tzJyxcblx0XHRcdFx0YWNjZXNzb3I6IChyb3cpID0+IHJvdy5mYWxsYmFja3Muam9pbignLCAnKSxcblx0XHRcdFx0RmlsdGVyOiBFeGlzdHNDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2V4aXN0cycsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRIZWFkZXI6ICdEZWZhdWx0IFZhbHVlJyxcblx0XHRcdFx0YWNjZXNzb3I6ICdkZWZhdWx0VmFsdWUnLFxuXHRcdFx0XHRGaWx0ZXI6IERlZmF1bHRDb2x1bW5GaWx0ZXIsXG5cdFx0XHRcdGZpbHRlcjogJ2luY2x1ZGVzJyxcblx0XHRcdFx0Q2VsbDogKHt2YWx1ZX0pID0+IHtcblx0XHRcdFx0XHRpZiAoIWlzVmFsaWRIZXhDb2xvcih2YWx1ZSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBTdHJpbmcodmFsdWUpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTQgaC00IHJvdW5kZWQtZnVsbCBpbmxpbmUtYmxvY2sgYm9yZGVyIGJvcmRlci1ncmF5LTYwMCBtci0xXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17e2JhY2tncm91bmRDb2xvcjogdmFsdWV9fT48L2Rpdj5cblx0XHRcdFx0XHRcdFx0e3ZhbHVlfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XSxcblx0XHRbXVxuXHQpO1xuXG5cdHJldHVybiAoXG5cdFx0PE5vU3NyPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPlZhcmlhYmxlcyB8IFRoZW1lIFRvb2xzPC90aXRsZT5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWItNlwiPlRoZW1lIFZhcmlhYmxlcyBTZWFyY2g8L2gxPlxuXHRcdFx0XHQ8VGFibGVcblx0XHRcdFx0XHRjb2x1bW5zPXtjb2x1bW5zfVxuXHRcdFx0XHRcdGRhdGE9e2NvbG9yc31cblx0XHRcdFx0XHRvbkZpbHRlckNoYW5nZT17KHgpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHgpO1xuXHRcdFx0XHRcdFx0Ly8gLy8gaWYgKEpTT04uc3RyaW5naWZ5KHguZmlsdGVycykgIT09IEpTT04uc3RyaW5naWZ5KHBhcmFtcy5maWx0ZXJzKSkge1xuXHRcdFx0XHRcdFx0Ly8gaWYgKHguZmlsdGVycyAhPT0gcGFyYW1zLmZpbHRlcnMpIHtcblx0XHRcdFx0XHRcdC8vIFx0c2V0RmlsdGVycyh4KTtcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8vIG9uRmlsdGVyQ2hhbmdlPXtzZXRQYXJhbXN9XG5cdFx0XHRcdFx0ZmlsdGVycz17ZmlsdGVyc31cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTm9Tc3I+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/hooks/index.js\n");

/***/ })

})