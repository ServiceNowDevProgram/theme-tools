webpackHotUpdate_N_E("pages/color-generator-advanced",{

/***/ "./data/color-formulas.js":
/*!********************************!*\
  !*** ./data/color-formulas.js ***!
  \********************************/
/*! exports provided: colorFormulas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorFormulas\", function() { return colorFormulas; });\nvar colorFormulas = [{\n  label: 'Neutrals',\n  hook: 'now-color--neutral',\n  light: {\n    color: '#4F5664',\n    lightVariations: '10',\n    lightPercentage: '0.95',\n    lightSaturation: '1',\n    darkVariations: '9',\n    darkPercentage: '0.9',\n    darkSaturation: '1',\n    startIndex: '0',\n    includeEnds: true\n  }\n}, {\n  label: 'Primary',\n  hook: 'now-color--primary',\n  light: {\n    color: '#4F52BD',\n    lightPercentage: '0.74',\n    lightVariations: '1',\n    darkPercentage: '0.65',\n    darkVariations: '2'\n  }\n}, {\n  label: 'Secondary',\n  hook: 'now-color--secondary',\n  light: {\n    color: '#4F52BD',\n    lightPercentage: '0.74',\n    lightVariations: '1',\n    darkPercentage: '0.65',\n    darkVariations: '2'\n  },\n  dark: {\n    color: '#4F52BD',\n    lightPercentage: '0.95',\n    lightVariations: '3',\n    lightSaturation: '1',\n    darkPercentage: '0.65',\n    darkVariations: '0',\n    darkSaturation: '1'\n  }\n}, {\n  label: 'Selection Primary',\n  hook: 'now-color_selection--primary',\n  light: {\n    color: '#007B58',\n    lightPercentage: '0.85',\n    lightVariations: '2',\n    darkPercentage: '0.5',\n    darkVariations: '2'\n  },\n  dark: {\n    color: '#007B58',\n    lightPercentage: '0.75',\n    lightVariations: '3',\n    lightSaturation: '1',\n    darkPercentage: '0.25',\n    darkVariations: '1',\n    darkSaturation: '1'\n  }\n}, {\n  label: 'Selection Secondary',\n  hook: 'now-color_selection--secondary',\n  light: {\n    color: '#4F52BD',\n    lightPercentage: '0.74',\n    lightVariations: '2',\n    darkPercentage: '0.65',\n    darkVariations: '2'\n  },\n  dark: {\n    color: '#4F52BD',\n    lightPercentage: '0.75',\n    lightVariations: '3',\n    darkPercentage: '0.25',\n    darkSaturation: '0.25',\n    darkVariations: '1'\n  }\n}, {\n  label: 'Interactive',\n  hook: 'now-color--interactive',\n  light: {\n    color: '#4F52BD',\n    lightPercentage: '0.74',\n    lightVariations: '2',\n    darkPercentage: '0.7',\n    darkVariations: '2'\n  },\n  dark: {\n    color: '#4F52BD',\n    lightPercentage: '0.75',\n    lightVariations: '3',\n    lightSaturation: '1',\n    darkPercentage: '0.25',\n    darkVariations: '1',\n    darkSaturation: '0.25'\n  }\n}, {\n  label: 'Link',\n  hook: 'now-color--link',\n  light: {\n    color: '#3C59E7',\n    lightPercentage: '0.32',\n    lightVariations: '1',\n    darkPercentage: '0.63',\n    darkVariations: '2',\n    startIndex: '1'\n  },\n  dark: {\n    color: '#3C59E7',\n    lightPercentage: '0.75',\n    lightVariations: '3',\n    lightSaturation: '1',\n    darkPercentage: '0.25',\n    darkVariations: '0',\n    darkSaturation: '0.25',\n    startIndex: '1'\n  }\n}, {\n  label: 'Focus',\n  hook: 'now-color--focus',\n  light: {\n    color: '#3C59E7',\n    lightPercentage: '0.3',\n    lightVariations: '1',\n    darkPercentage: '0.63',\n    darkVariations: '1',\n    startIndex: '1'\n  },\n  dark: {\n    color: '#3C59E7',\n    lightPercentage: '0.75',\n    lightVariations: '2',\n    lightSaturation: '1',\n    darkPercentage: '0.63',\n    darkVariations: '0',\n    startIndex: '1'\n  }\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9jb2xvci1mb3JtdWxhcy5qcz9jODViIl0sIm5hbWVzIjpbImNvbG9yRm9ybXVsYXMiLCJsYWJlbCIsImhvb2siLCJsaWdodCIsImNvbG9yIiwibGlnaHRWYXJpYXRpb25zIiwibGlnaHRQZXJjZW50YWdlIiwibGlnaHRTYXR1cmF0aW9uIiwiZGFya1ZhcmlhdGlvbnMiLCJkYXJrUGVyY2VudGFnZSIsImRhcmtTYXR1cmF0aW9uIiwic3RhcnRJbmRleCIsImluY2x1ZGVFbmRzIiwiZGFyayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLElBQU1BLGFBQWEsR0FBRyxDQUM1QjtBQUNDQyxPQUFLLEVBQUUsVUFEUjtBQUVDQyxNQUFJLEVBQUUsb0JBRlA7QUFHQ0MsT0FBSyxFQUFFO0FBQ05DLFNBQUssRUFBRSxTQUREO0FBRU5DLG1CQUFlLEVBQUUsSUFGWDtBQUdOQyxtQkFBZSxFQUFFLE1BSFg7QUFJTkMsbUJBQWUsRUFBRSxHQUpYO0FBS05DLGtCQUFjLEVBQUUsR0FMVjtBQU1OQyxrQkFBYyxFQUFFLEtBTlY7QUFPTkMsa0JBQWMsRUFBRSxHQVBWO0FBUU5DLGNBQVUsRUFBRSxHQVJOO0FBU05DLGVBQVcsRUFBRTtBQVRQO0FBSFIsQ0FENEIsRUFnQjVCO0FBQ0NYLE9BQUssRUFBRSxTQURSO0FBRUNDLE1BQUksRUFBRSxvQkFGUDtBQUdDQyxPQUFLLEVBQUU7QUFDTkMsU0FBSyxFQUFFLFNBREQ7QUFFTkUsbUJBQWUsRUFBRSxNQUZYO0FBR05ELG1CQUFlLEVBQUUsR0FIWDtBQUlOSSxrQkFBYyxFQUFFLE1BSlY7QUFLTkQsa0JBQWMsRUFBRTtBQUxWO0FBSFIsQ0FoQjRCLEVBMkI1QjtBQUNDUCxPQUFLLEVBQUUsV0FEUjtBQUVDQyxNQUFJLEVBQUUsc0JBRlA7QUFHQ0MsT0FBSyxFQUFFO0FBQ05DLFNBQUssRUFBRSxTQUREO0FBRU5FLG1CQUFlLEVBQUUsTUFGWDtBQUdORCxtQkFBZSxFQUFFLEdBSFg7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S0FGWDtBQUdORCxtQkFBZSxFQUFFLEdBSFg7QUFJTkksa0JBQWMsRUFBRSxNQUpWO0FBS05ELGtCQUFjLEVBQUUsR0FMVjtBQU1ORyxjQUFVLEVBQUU7QUFOTixHQUhSO0FBV0NFLE1BQUksRUFBRTtBQUNMVCxTQUFLLEVBQUUsU0FERjtBQUVMRSxtQkFBZSxFQUFFLE1BRlo7QUFHTEQsbUJBQWUsRUFBRSxHQUhaO0FBSUxFLG1CQUFlLEVBQUUsR0FKWjtBQUtMRSxrQkFBYyxFQUFFLE1BTFg7QUFNTEQsa0JBQWMsRUFBRSxHQU5YO0FBT0xHLGNBQVUsRUFBRTtBQVBQO0FBWFAsQ0FoSTRCLENBQXRCIiwiZmlsZSI6Ii4vZGF0YS9jb2xvci1mb3JtdWxhcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb2xvckZvcm11bGFzID0gW1xuXHR7XG5cdFx0bGFiZWw6ICdOZXV0cmFscycsXG5cdFx0aG9vazogJ25vdy1jb2xvci0tbmV1dHJhbCcsXG5cdFx0bGlnaHQ6IHtcblx0XHRcdGNvbG9yOiAnIzRGNTY2NCcsXG5cdFx0XHRsaWdodFZhcmlhdGlvbnM6ICcxMCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjk1Jyxcblx0XHRcdGxpZ2h0U2F0dXJhdGlvbjogJzEnLFxuXHRcdFx0ZGFya1ZhcmlhdGlvbnM6ICc5Jyxcblx0XHRcdGRhcmtQZXJjZW50YWdlOiAnMC45Jyxcblx0XHRcdGRhcmtTYXR1cmF0aW9uOiAnMScsXG5cdFx0XHRzdGFydEluZGV4OiAnMCcsXG5cdFx0XHRpbmNsdWRlRW5kczogdHJ1ZVxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnUHJpbWFyeScsXG5cdFx0aG9vazogJ25vdy1jb2xvci0tcHJpbWFyeScsXG5cdFx0bGlnaHQ6IHtcblx0XHRcdGNvbG9yOiAnIzRGNTJCRCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjc0Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzEnLFxuXHRcdFx0ZGFya1BlcmNlbnRhZ2U6ICcwLjY1Jyxcblx0XHRcdGRhcmtWYXJpYXRpb25zOiAnMidcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ1NlY29uZGFyeScsXG5cdFx0aG9vazogJ25vdy1jb2xvci0tc2Vjb25kYXJ5Jyxcblx0XHRsaWdodDoge1xuXHRcdFx0Y29sb3I6ICcjNEY1MkJEJyxcblx0XHRcdGxpZ2h0UGVyY2VudGFnZTogJzAuNzQnLFxuXHRcdFx0bGlnaHRWYXJpYXRpb25zOiAnMScsXG5cdFx0XHRkYXJrUGVyY2VudGFnZTogJzAuNjUnLFxuXHRcdFx0ZGFya1ZhcmlhdGlvbnM6ICcyJyxcblx0XHR9LFxuXHRcdGRhcms6IHtcblx0XHRcdGNvbG9yOiAnIzRGNTJCRCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjk1Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzMnLFxuXHRcdFx0bGlnaHRTYXR1cmF0aW9uOiAnMScsXG5cdFx0XHRkYXJrUGVyY2VudGFnZTogJzAuNjUnLFxuXHRcdFx0ZGFya1ZhcmlhdGlvbnM6ICcwJyxcblx0XHRcdGRhcmtTYXR1cmF0aW9uOiAnMSdcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ1NlbGVjdGlvbiBQcmltYXJ5Jyxcblx0XHRob29rOiAnbm93LWNvbG9yX3NlbGVjdGlvbi0tcHJpbWFyeScsXG5cdFx0bGlnaHQ6IHtcblx0XHRcdGNvbG9yOiAnIzAwN0I1OCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjg1Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzInLFxuXHRcdFx0ZGFya1BlcmNlbnRhZ2U6ICcwLjUnLFxuXHRcdFx0ZGFya1ZhcmlhdGlvbnM6ICcyJ1xuXHRcdH0sXG5cdFx0ZGFyazoge1xuXHRcdFx0Y29sb3I6ICcjMDA3QjU4Jyxcblx0XHRcdGxpZ2h0UGVyY2VudGFnZTogJzAuNzUnLFxuXHRcdFx0bGlnaHRWYXJpYXRpb25zOiAnMycsXG5cdFx0XHRsaWdodFNhdHVyYXRpb246ICcxJyxcblx0XHRcdGRhcmtQZXJjZW50YWdlOiAnMC4yNScsXG5cdFx0XHRkYXJrVmFyaWF0aW9uczogJzEnLFxuXHRcdFx0ZGFya1NhdHVyYXRpb246ICcxJ1xuXHRcdH1cblx0fSxcblx0e1xuXHRcdGxhYmVsOiAnU2VsZWN0aW9uIFNlY29uZGFyeScsXG5cdFx0aG9vazogJ25vdy1jb2xvcl9zZWxlY3Rpb24tLXNlY29uZGFyeScsXG5cdFx0bGlnaHQ6IHtcblx0XHRcdGNvbG9yOiAnIzRGNTJCRCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjc0Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzInLFxuXHRcdFx0ZGFya1BlcmNlbnRhZ2U6ICcwLjY1Jyxcblx0XHRcdGRhcmtWYXJpYXRpb25zOiAnMidcblx0XHR9LFxuXHRcdGRhcms6IHtcblx0XHRcdGNvbG9yOiAnIzRGNTJCRCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjc1Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzMnLFxuXHRcdFx0ZGFya1BlcmNlbnRhZ2U6ICcwLjI1Jyxcblx0XHRcdGRhcmtTYXR1cmF0aW9uOiAnMC4yNScsXG5cdFx0XHRkYXJrVmFyaWF0aW9uczogJzEnXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdJbnRlcmFjdGl2ZScsXG5cdFx0aG9vazogJ25vdy1jb2xvci0taW50ZXJhY3RpdmUnLFxuXHRcdGxpZ2h0OiB7XG5cdFx0XHRjb2xvcjogJyM0RjUyQkQnLFxuXHRcdFx0bGlnaHRQZXJjZW50YWdlOiAnMC43NCcsXG5cdFx0XHRsaWdodFZhcmlhdGlvbnM6ICcyJyxcblx0XHRcdGRhcmtQZXJjZW50YWdlOiAnMC43Jyxcblx0XHRcdGRhcmtWYXJpYXRpb25zOiAnMidcblx0XHR9LFxuXHRcdGRhcms6IHtcblx0XHRcdGNvbG9yOiAnIzRGNTJCRCcsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjc1Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzMnLFxuXHRcdFx0bGlnaHRTYXR1cmF0aW9uOiAnMScsXG5cdFx0XHRkYXJrUGVyY2VudGFnZTogJzAuMjUnLFxuXHRcdFx0ZGFya1ZhcmlhdGlvbnM6ICcxJyxcblx0XHRcdGRhcmtTYXR1cmF0aW9uOiAnMC4yNSdcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRsYWJlbDogJ0xpbmsnLFxuXHRcdGhvb2s6ICdub3ctY29sb3ItLWxpbmsnLFxuXHRcdGxpZ2h0OiB7XG5cdFx0XHRjb2xvcjogJyMzQzU5RTcnLFxuXHRcdFx0bGlnaHRQZXJjZW50YWdlOiAnMC4zMicsXG5cdFx0XHRsaWdodFZhcmlhdGlvbnM6ICcxJyxcblx0XHRcdGRhcmtQZXJjZW50YWdlOiAnMC42MycsXG5cdFx0XHRkYXJrVmFyaWF0aW9uczogJzInLFxuXHRcdFx0c3RhcnRJbmRleDogJzEnXG5cdFx0fSxcblx0XHRkYXJrOiB7XG5cdFx0XHRjb2xvcjogJyMzQzU5RTcnLFxuXHRcdFx0bGlnaHRQZXJjZW50YWdlOiAnMC43NScsXG5cdFx0XHRsaWdodFZhcmlhdGlvbnM6ICczJyxcblx0XHRcdGxpZ2h0U2F0dXJhdGlvbjogJzEnLFxuXHRcdFx0ZGFya1BlcmNlbnRhZ2U6ICcwLjI1Jyxcblx0XHRcdGRhcmtWYXJpYXRpb25zOiAnMCcsXG5cdFx0XHRkYXJrU2F0dXJhdGlvbjogJzAuMjUnLFxuXHRcdFx0c3RhcnRJbmRleDogJzEnXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0bGFiZWw6ICdGb2N1cycsXG5cdFx0aG9vazogJ25vdy1jb2xvci0tZm9jdXMnLFxuXHRcdGxpZ2h0OiB7XG5cdFx0XHRjb2xvcjogJyMzQzU5RTcnLFxuXHRcdFx0bGlnaHRQZXJjZW50YWdlOiAnMC4zJyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzEnLFxuXHRcdFx0ZGFya1BlcmNlbnRhZ2U6ICcwLjYzJyxcblx0XHRcdGRhcmtWYXJpYXRpb25zOiAnMScsXG5cdFx0XHRzdGFydEluZGV4OiAnMSdcblx0XHR9LFxuXHRcdGRhcms6IHtcblx0XHRcdGNvbG9yOiAnIzNDNTlFNycsXG5cdFx0XHRsaWdodFBlcmNlbnRhZ2U6ICcwLjc1Jyxcblx0XHRcdGxpZ2h0VmFyaWF0aW9uczogJzInLFxuXHRcdFx0bGlnaHRTYXR1cmF0aW9uOiAnMScsXG5cdFx0XHRkYXJrUGVyY2VudGFnZTogJzAuNjMnLFxuXHRcdFx0ZGFya1ZhcmlhdGlvbnM6ICcwJyxcblx0XHRcdHN0YXJ0SW5kZXg6ICcxJ1xuXHRcdH1cblx0fVxuXTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/color-formulas.js\n");

/***/ })

})