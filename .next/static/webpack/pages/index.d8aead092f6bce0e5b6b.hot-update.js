webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = getValues('salarioMensal');\n    var percentualAporte = getValues('percentualAporte');\n    var aporteMensal = parseInt(percentualAporte) * parseFloat(salarioMensal) / 100;\n\n    if (aporteMensal) {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(aporteMensal.toString()));\n      var rendaRestante = parseFloat(salarioMensal) - aporteMensal;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    className: errors.salarioMensal ? 'money inpt-error' : 'money',\n    type: \"text\",\n    name: \"salarioMensal\",\n    onChange: onChangeRemunaration,\n    ref: register({\n      required: true\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxlength: \"3\",\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"aporteMensal\",\n    ref: register(),\n    placeholder: \"R$ 0,00\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"Renda Restante\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    type: \"text\",\n    name: \"rendaRestante\",\n    ref: register(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Calcular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"ZikeEyNXaU47RVRLi22lM1+NDpk=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2FsY0Fwb3J0ZU1lbnNhbCIsInNhbGFyaW9NZW5zYWwiLCJwZXJjZW50dWFsQXBvcnRlIiwiYXBvcnRlTWVuc2FsIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwibWFza01vbmV5IiwidG9TdHJpbmciLCJyZW5kYVJlc3RhbnRlIiwib25DaGFuZ2VSZW11bmFyYXRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1heExlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQUEsaUJBUTNCQywrREFBTyxFQVJvQjtBQUFBLE1BRTdCQyxPQUY2QixZQUU3QkEsT0FGNkI7QUFBQSxNQUc3QkMsWUFINkIsWUFHN0JBLFlBSDZCO0FBQUEsTUFJN0JDLFFBSjZCLFlBSTdCQSxRQUo2QjtBQUFBLE1BSzdCQyxRQUw2QixZQUs3QkEsUUFMNkI7QUFBQSxNQU03QkMsTUFONkIsWUFNN0JBLE1BTjZCO0FBQUEsTUFPN0JDLFNBUDZCLFlBTzdCQSxTQVA2Qjs7QUFVL0IsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFzQjtBQUNyQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDRCxHQUZEOztBQUlBLFdBQVNHLGdCQUFULEdBQTRCO0FBQzFCLFFBQU1DLGFBQWEsR0FBR04sU0FBUyxDQUFDLGVBQUQsQ0FBL0I7QUFDQSxRQUFNTyxnQkFBZ0IsR0FB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S0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLEVBRUU7QUFDRSxlQUFXLEVBQUMsU0FEZDtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsUUFBSSxFQUFDLGVBSFA7QUFJRSxPQUFHLEVBQUVBLFFBQVEsRUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FWRixDQTFCRixFQThDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUNGLENBREYsQ0FERjtBQW9ERCxDQXRGRDs7R0FBTUosUTtVQVFBQyx1RDs7O0tBUkFELFE7QUF3RlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IG1hc2tNb25leSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFrc01vbmV5J1xuXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XG4gIHNhbGFyaW9NZW5zYWw6IG51bWJlclxuICBwZXJjZW50dWFsQXBvcnRlOiBudW1iZXJcbiAgYXBvcnRlTWVuc2FsOiBudW1iZXJcbiAgcmVuZGFSZXN0YW50ZTogbnVtYmVyXG59XG5cbmNvbnN0IEZvcm1DYWxjOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIGNvbnRyb2wsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBnZXRWYWx1ZXNcbiAgfSA9IHVzZUZvcm08SUZvcm1JbnB1dD4oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElGb3JtSW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgZnVuY3Rpb24gY2FsY0Fwb3J0ZU1lbnNhbCgpIHtcbiAgICBjb25zdCBzYWxhcmlvTWVuc2FsID0gZ2V0VmFsdWVzKCdzYWxhcmlvTWVuc2FsJylcbiAgICBjb25zdCBwZXJjZW50dWFsQXBvcnRlID0gZ2V0VmFsdWVzKCdwZXJjZW50dWFsQXBvcnRlJylcbiAgICBjb25zdCBhcG9ydGVNZW5zYWwgPVxuICAgICAgKHBhcnNlSW50KHBlcmNlbnR1YWxBcG9ydGUpICogcGFyc2VGbG9hdChzYWxhcmlvTWVuc2FsKSkvMTAwXG5cbiAgICBpZiAoYXBvcnRlTWVuc2FsKSB7XG4gICAgICBzZXRWYWx1ZSgnYXBvcnRlTWVuc2FsJywgbWFza01vbmV5KGFwb3J0ZU1lbnNhbC50b1N0cmluZygpKSlcbiAgICAgIGNvbnN0IHJlbmRhUmVzdGFudGUgPSBwYXJzZUZsb2F0KHNhbGFyaW9NZW5zYWwpIC0gYXBvcnRlTWVuc2FsXG4gICAgICBzZXRWYWx1ZSgncmVuZGFSZXN0YW50ZScsIG1hc2tNb25leShyZW5kYVJlc3RhbnRlLnRvU3RyaW5nKCkpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRWYWx1ZSgnYXBvcnRlTWVuc2FsJywgbWFza01vbmV5KCcwMDAnKSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVJlbXVuYXJhdGlvbihlKSB7XG4gICAgc2V0VmFsdWUoJ3NhbGFyaW9NZW5zYWwnLCBtYXNrTW9uZXkoZS50YXJnZXQudmFsdWUpKVxuICAgIGNhbGNBcG9ydGVNZW5zYWwoKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+U2Fsw6FyaW8gTWVuc2FsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5zYWxhcmlvTWVuc2FsID8gJ21vbmV5IGlucHQtZXJyb3InIDogJ21vbmV5J31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwic2FsYXJpb01lbnNhbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJlbXVuYXJhdGlvbn1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlBlcmNlbnR1YWwgZGUgQXBvcnRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhsZW5ndGg9XCIzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMucGVyY2VudHVhbEFwb3J0ZSAmJiAnaW5wdC1lcnJvcid9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnR1YWxBcG9ydGVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2FsY0Fwb3J0ZU1lbnNhbH1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPkFwb3J0ZSBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFwb3J0ZU1lbnNhbFwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5SZW5kYSBSZXN0YW50ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGFSZXN0YW50ZVwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FsY3VsYXJcIiAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})