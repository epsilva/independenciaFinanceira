webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n  };\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"salarioMensal\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref) {\n      var onChange = _ref.onChange,\n          value = _ref.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"percentualAporte\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref2) {\n      var onChange = _ref2.onChange,\n          value = _ref2.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"aporteMensal\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref3) {\n      var onChange = _ref3.onChange,\n          value = _ref3.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"rendaNecessaria\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref4) {\n      var onChange = _ref4.onChange,\n          value = _ref4.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"PsgB5qan6lUNxVpDDKYmMV8TKfo=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVNBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFDR0MsK0RBQU8sRUFEVjtBQUFBLE1BQ3ZCQyxPQUR1QixZQUN2QkEsT0FEdUI7QUFBQSxNQUNkQyxZQURjLFlBQ2RBLFlBRGM7O0FBRy9CLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBc0I7QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFRixZQUFZLENBQUNDLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsZUFEUDtBQUVFLFdBQU8sRUFBRUYsT0FGWDtBQUdFLGdCQUFZLEVBQUMsRUFIZjtBQUlFLFVBQU0sRUFBRTtBQUFBLFVBQUdNLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFVBQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLGFBQ047QUFBTyxnQkFBUSxFQUFFRCxRQUFqQjtBQUEyQixhQUFLLEVBQUVDLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFETTtBQUFBLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBU0UsTUFBQywwREFBRDtBQUNFLFFBQUksRUFBQyxrQkFEUDtBQUVFLFdBQU8sRUFBRVAsT0FGWDtBQUdFLGdCQUFZLEVBQUMsRUFIZjtBQUlFLFVBQU0sRUFBRTtBQUFBLFVBQUdNLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLGFBQ047QUFBTyxnQkFBUSxFQUFFRCxRQUFqQjtBQUEyQixhQUFLLEVBQUVDLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFETTtBQUFBLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBaUJFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsY0FEUDtBQUVFLFdBQU8sRUFBRVAsT0FGWDtBQUdFLGdCQUFZLEVBQUMsRUFIZjtBQUlFLFVBQU0sRUFBRTtBQUFBLFVBQUdNLFFBQUgsU0FBR0EsUUFBSDtBQUFBLFVBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLGFBQ047QUFBTyxnQkFBUSxFQUFFRCxRQUFqQjtBQUEyQixhQUFLLEVBQUVDLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFETTtBQUFBLEtBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCRixFQXlCRSxNQUFDLDBEQUFEO0FBQ0UsUUFBSSxFQUFDLGlCQURQO0FBRUUsV0FBTyxFQUFFUCxPQUZYO0FBR0UsZ0JBQVksRUFBQyxFQUhmO0FBSUUsVUFBTSxFQUFFO0FBQUEsVUFBR00sUUFBSCxTQUFHQSxRQUFIO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsYUFDTjtBQUFPLGdCQUFRLEVBQUVELFFBQWpCO0FBQTJCLGFBQUssRUFBRUMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURNO0FBQUEsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekJGLEVBaUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDRixDQURGLENBREY7QUF1Q0QsQ0E5Q0Q7O0dBQU1ULFE7VUFDOEJDLHVEOzs7S0FEOUJELFE7QUFnRFNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCdcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJ1xuXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XG4gIHNhbGFyaW9NZW5zYWw6IG51bWJlclxuICBwZXJjZW50dWFsQXBvcnRlOiBudW1iZXJcbiAgYXBvcnRlTWVuc2FsOiBudW1iZXJcbiAgcmVuZGFOZWNlc3NhcmlhOiBudW1iZXJcbn1cblxuY29uc3QgRm9ybUNhbGM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbnRyb2wsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxJRm9ybUlucHV0PigpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgbmFtZT1cInNhbGFyaW9NZW5zYWxcIlxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICBuYW1lPVwicGVyY2VudHVhbEFwb3J0ZVwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgIG5hbWU9XCJhcG9ydGVNZW5zYWxcIlxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICBuYW1lPVwicmVuZGFOZWNlc3NhcmlhXCJcbiAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXG4gICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkNoYW5nZX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ2FsY1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})