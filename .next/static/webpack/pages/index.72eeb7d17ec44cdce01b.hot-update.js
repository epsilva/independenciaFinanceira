webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n  };\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    ref: register({\n      maxLength: {\n        value: 2,\n        message: 'error message'\n      }\n    }),\n    name: \"salarioMensal\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref) {\n      var onChange = _ref.onChange,\n          value = _ref.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        onKeyPress: onChangeRemunaration,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"percentualAporte\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref2) {\n      var onChange = _ref2.onChange,\n          value = _ref2.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"aporteMensal\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref3) {\n      var onChange = _ref3.onChange,\n          value = _ref3.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Renda Necess\\xE1ria\"), __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"rendaNecessaria\",\n    control: control,\n    defaultValue: \"\",\n    render: function render(_ref4) {\n      var onChange = _ref4.onChange,\n          value = _ref4.value;\n      return __jsx(\"input\", {\n        onChange: onChange,\n        value: value,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"RPGhLoqxFJsxjTVk7DoP3BppvL4=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2VSZW11bmFyYXRpb24iLCJlIiwibWFza01vbmV5IiwidGFyZ2V0IiwidmFsdWUiLCJtYXhMZW5ndGgiLCJtZXNzYWdlIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGlCQUN1QkMsK0RBQU8sRUFEOUI7QUFBQSxNQUN2QkMsT0FEdUIsWUFDdkJBLE9BRHVCO0FBQUEsTUFDZEMsWUFEYyxZQUNkQSxZQURjO0FBQUEsTUFDQUMsUUFEQSxZQUNBQSxRQURBO0FBQUEsTUFDVUMsUUFEVixZQUNVQSxRQURWOztBQUcvQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQXNCO0FBQ3JDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBRkQ7O0FBSUEsV0FBU0csb0JBQVQsQ0FBOEJDLENBQTlCLEVBQWlDO0FBQy9CTixZQUFRLENBQUMsZUFBRCxFQUFrQk8sdUVBQVMsQ0FBQ0QsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBM0IsQ0FBUjtBQUNEOztBQUVELFNBQ0U7QUFBTSxZQUFRLEVBQUVYLFlBQVksQ0FBQ0csUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhERixDQURGLENBREY7QUE4REQsQ0F6RUQ7O0dBQU1kLFE7VUFDa0RDLHVEOzs7S0FEbERELFE7QUEyRVNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IG1hc2tNb25leSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFrc01vbmV5J1xuXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XG4gIHNhbGFyaW9NZW5zYWw6IG51bWJlclxuICBwZXJjZW50dWFsQXBvcnRlOiBudW1iZXJcbiAgYXBvcnRlTWVuc2FsOiBudW1iZXJcbiAgcmVuZGFOZWNlc3NhcmlhOiBudW1iZXJcbn1cblxuY29uc3QgRm9ybUNhbGM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbnRyb2wsIGhhbmRsZVN1Ym1pdCwgcmVnaXN0ZXIsIHNldFZhbHVlIH0gPSB1c2VGb3JtPElGb3JtSW5wdXQ+KClcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBJRm9ybUlucHV0KSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUmVtdW5hcmF0aW9uKGUpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIG1hc2tNb25leShlLnRhcmdldC52YWx1ZSkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5TYWzDoXJpbyBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiB7IHZhbHVlOiAyLCBtZXNzYWdlOiAnZXJyb3IgbWVzc2FnZScgfVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgbmFtZT1cInNhbGFyaW9NZW5zYWxcIlxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgICByZW5kZXI9eyh7IG9uQ2hhbmdlLCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtvbkNoYW5nZVJlbXVuYXJhdGlvbn1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlBlcmNlbnR1YWwgZGUgQXBvcnRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50dWFsQXBvcnRlXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+QXBvcnRlIE1lbnNhbDwvbGFiZWw+XG4gICAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgICBuYW1lPVwiYXBvcnRlTWVuc2FsXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5SZW5kYSBOZWNlc3PDoXJpYTwvbGFiZWw+XG4gICAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGFOZWNlc3NhcmlhXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcbiAgICAgICAgICAgICAgcmVuZGVyPXsoeyBvbkNoYW5nZSwgdmFsdWUgfSkgPT4gKFxuICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25DaGFuZ2V9IHZhbHVlPXt2YWx1ZX0gLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ }),

/***/ "./src/components/MaksMoney.tsx":
/*!**************************************!*\
  !*** ./src/components/MaksMoney.tsx ***!
  \**************************************/
/*! exports provided: maskMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maskMoney\", function() { return maskMoney; });\nvar maskMoney = function maskMoney(value) {\n  var v = value.replace(/\\D/g, '');\n  v = \"\".concat((v / 100).toFixed(2));\n  v = v.replace('.', ',');\n  v = v.replace(/(\\d)(\\d{3})(\\d{3}),/g, '$1.$2.$3,');\n  v = v.replace(/(\\d)(\\d{3}),/g, '$1.$2,');\n  return v;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFrc01vbmV5LnRzeD8zY2RjIl0sIm5hbWVzIjpbIm1hc2tNb25leSIsInZhbHVlIiwidiIsInJlcGxhY2UiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsS0FBSyxFQUFJO0FBQ2hDLE1BQUlDLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWMsS0FBZCxFQUFxQixFQUFyQixDQUFSO0FBQ0FELEdBQUMsYUFBTSxDQUFDQSxDQUFDLEdBQUcsR0FBTCxFQUFVRSxPQUFWLENBQWtCLENBQWxCLENBQU4sQ0FBRDtBQUNBRixHQUFDLEdBQUdBLENBQUMsQ0FBQ0MsT0FBRixDQUFVLEdBQVYsRUFBZSxHQUFmLENBQUo7QUFDQUQsR0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxzQkFBVixFQUFrQyxXQUFsQyxDQUFKO0FBQ0FELEdBQUMsR0FBR0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsZUFBVixFQUEyQixRQUEzQixDQUFKO0FBRUEsU0FBT0QsQ0FBUDtBQUNELENBUk0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWtzTW9uZXkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG1hc2tNb25leSA9IHZhbHVlID0+IHtcbiAgbGV0IHYgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpXG4gIHYgPSBgJHsodiAvIDEwMCkudG9GaXhlZCgyKX1gXG4gIHYgPSB2LnJlcGxhY2UoJy4nLCAnLCcpXG4gIHYgPSB2LnJlcGxhY2UoLyhcXGQpKFxcZHszfSkoXFxkezN9KSwvZywgJyQxLiQyLiQzLCcpXG4gIHYgPSB2LnJlcGxhY2UoLyhcXGQpKFxcZHszfSksL2csICckMS4kMiwnKVxuXG4gIHJldHVybiB2XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MaksMoney.tsx\n");

/***/ })

})