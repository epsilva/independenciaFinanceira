webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n  };\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"salarioMensal\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref) {\n      var onChange = _ref.onChange,\n          value = _ref.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Percentual de Aporte\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"percentualAporte\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref2) {\n      var onChange = _ref2.onChange,\n          value = _ref2.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"Aporte Mensal\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"aporteMensal\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref3) {\n      var onChange = _ref3.onChange,\n          value = _ref3.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Renda Necess\\xE1ria\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"rendaNecessaria\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref4) {\n      var onChange = _ref4.onChange,\n          value = _ref4.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"PsgB5qan6lUNxVpDDKYmMV8TKfo=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQVNBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFDR0MsK0RBQU8sRUFEVjtBQUFBLE1BQ3ZCQyxPQUR1QixZQUN2QkEsT0FEdUI7QUFBQSxNQUNkQyxZQURjLFlBQ2RBLFlBRGM7O0FBRy9CLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBc0I7QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0QsR0FGRDs7QUFJQSxTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sWUFBUSxFQUFFRixZQUFZLENBQUNDLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRSxNQUFDLDBEQUFEO0FBQ0UsUUFBSSxFQUFDLGVBRFA7QUFFRSxXQUFPLEVBQUVGLE9BRlg7QUFHRSxnQkFBWSxFQUFDLEVBSGY7QUFJRSxVQUFNLEVBQUU7QUFBQSxVQUFHTSxRQUFILFFBQUdBLFFBQUg7QUFBQSxVQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxhQUNOO0FBQU8sZ0JBQVEsRUFBRUQsUUFBakI7QUFBMkIsYUFBSyxFQUFFQyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRE07QUFBQSxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVkYsRUFXRSxNQUFDLDBEQUFEO0FBQ0UsUUFBSSxFQUFDLGtCQURQO0FBRUUsV0FBTyxFQUFFUCxPQUZYO0FBR0UsZ0JBQVksRUFBQyxFQUhmO0FBSUUsVUFBTSxFQUFFO0FBQUEsVUFBR00sUUFBSCxTQUFHQSxRQUFIO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsYUFDTjtBQUFPLGdCQUFRLEVBQUVELFFBQWpCO0FBQTJCLGFBQUssRUFBRUMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURNO0FBQUEsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkYsRUFvQkUsTUFBQywwREFBRDtBQUNFLFFBQUksRUFBQyxjQURQO0FBRUUsV0FBTyxFQUFFUCxPQUZYO0FBR0UsZ0JBQVksRUFBQyxFQUhmO0FBSUUsVUFBTSxFQUFFO0FBQUEsVUFBR00sUUFBSCxTQUFHQSxRQUFIO0FBQUEsVUFBYUMsS0FBYixTQUFhQSxLQUFiO0FBQUEsYUFDTjtBQUFPLGdCQUFRLEVBQUVELFFBQWpCO0FBQTJCLGFBQUssRUFBRUMsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURNO0FBQUEsS0FKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJGLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBNUJGLEVBNkJFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsaUJBRFA7QUFFRSxXQUFPLEVBQUVQLE9BRlg7QUFHRSxnQkFBWSxFQUFDLEVBSGY7QUFJRSxVQUFNLEVBQUU7QUFBQSxVQUFHTSxRQUFILFNBQUdBLFFBQUg7QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxhQUNOO0FBQU8sZ0JBQVEsRUFBRUQsUUFBakI7QUFBMkIsYUFBSyxFQUFFQyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRE07QUFBQSxLQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsRUFxQ0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckNGLENBREYsQ0FERjtBQTJDRCxDQWxERDs7R0FBTVQsUTtVQUM4QkMsdUQ7OztLQUQ5QkQsUTtBQW9EU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQ2FsYy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0J1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9zdHlsZXMnXG5cbmludGVyZmFjZSBJRm9ybUlucHV0IHtcbiAgc2FsYXJpb01lbnNhbDogbnVtYmVyXG4gIHBlcmNlbnR1YWxBcG9ydGU6IG51bWJlclxuICBhcG9ydGVNZW5zYWw6IG51bWJlclxuICByZW5kYU5lY2Vzc2FyaWE6IG51bWJlclxufVxuXG5jb25zdCBGb3JtQ2FsYzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29udHJvbCwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtPElGb3JtSW5wdXQ+KClcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBJRm9ybUlucHV0KSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgPGxhYmVsPlNhbMOhcmlvIE1lbnNhbDwvbGFiZWw+XG4gICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgbmFtZT1cInNhbGFyaW9NZW5zYWxcIlxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPlBlcmNlbnR1YWwgZGUgQXBvcnRlPC9sYWJlbD5cbiAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICBuYW1lPVwicGVyY2VudHVhbEFwb3J0ZVwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+QXBvcnRlIE1lbnNhbDwvbGFiZWw+XG4gICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgbmFtZT1cImFwb3J0ZU1lbnNhbFwiXG4gICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgIHJlbmRlcj17KHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IChcbiAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+UmVuZGEgTmVjZXNzw6FyaWE8L2xhYmVsPlxuICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgIG5hbWU9XCJyZW5kYU5lY2Vzc2FyaWFcIlxuICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uQ2hhbmdlfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})