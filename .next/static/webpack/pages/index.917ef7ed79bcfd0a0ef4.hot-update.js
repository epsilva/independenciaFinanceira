webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseInt(getValues('percentualAporte')) / 100;\n    var aporteMensal = parseFloat(percentualAporte * salarioMensal);\n    console.log(salarioMensal);\n    console.log(aporteMensal);\n\n    if (aporteMensal) {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])((aporteMensal * 100).toString()));\n      var rendaRestante = salarioMensal - aporteMensal;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('aporteMensal', undefined);\n    setValue('rendaRestante', undefined);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    className: errors.salarioMensal && 'inpt-error',\n    type: \"text\",\n    name: \"salarioMensal\",\n    onChange: onChangeRemunaration,\n    ref: register({\n      required: true\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: \"3\",\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"aporteMensal\",\n    ref: register(),\n    placeholder: \"R$ 0,00\",\n    disabled: true,\n    style: {\n      color: '#fff'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 13\n    }\n  }, \"Renda Restante\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    type: \"text\",\n    name: \"rendaRestante\",\n    ref: register(),\n    disabled: true,\n    style: {\n      color: '#fff'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Calcular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"button\",\n    value: \"Limpar\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"ZikeEyNXaU47RVRLi22lM1+NDpk=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2FsY0Fwb3J0ZU1lbnNhbCIsInNhbGFyaW9NZW5zYWwiLCJwYXJzZUZsb2F0IiwidG9TdHJpbmciLCJyZXBsYWNlIiwicGVyY2VudHVhbEFwb3J0ZSIsInBhcnNlSW50IiwiYXBvcnRlTWVuc2FsIiwibWFza01vbmV5IiwicmVuZGFSZXN0YW50ZSIsIm9uQ2hhbmdlUmVtdW5hcmF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VMaW1wYXIiLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFRM0JDLCtEQUFPLEVBUm9CO0FBQUEsTUFFN0JDLE9BRjZCLFlBRTdCQSxPQUY2QjtBQUFBLE1BRzdCQyxZQUg2QixZQUc3QkEsWUFINkI7QUFBQSxNQUk3QkMsUUFKNkIsWUFJN0JBLFFBSjZCO0FBQUEsTUFLN0JDLFFBTDZCLFlBSzdCQSxRQUw2QjtBQUFBLE1BTTdCQyxNQU42QixZQU03QkEsTUFONkI7QUFBQSxNQU83QkMsU0FQNkIsWUFPN0JBLFNBUDZCOztBQVUvQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQXNCO0FBQ3JDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBRkQ7O0FBSUEsV0FBU0csZ0JBQVQsR0FBNEI7QUFDMUIsUUFBTUMsYUFBYSxH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O0FBQW9DLFdBQU8sRUFBRUosY0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5ERixDQURGLENBREY7QUF5REQsQ0F4R0Q7O0dBQU0xQixRO1VBUUFDLHVEOzs7S0FSQUQsUTtBQTBHU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQ2FsYy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbHVtbiB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgbWFza01vbmV5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYWtzTW9uZXknXG5cbmludGVyZmFjZSBJRm9ybUlucHV0IHtcbiAgc2FsYXJpb01lbnNhbDogbnVtYmVyXG4gIHBlcmNlbnR1YWxBcG9ydGU6IG51bWJlclxuICBhcG9ydGVNZW5zYWw6IG51bWJlclxuICByZW5kYVJlc3RhbnRlOiBudW1iZXJcbn1cblxuY29uc3QgRm9ybUNhbGM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JzLFxuICAgIGdldFZhbHVlc1xuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0PigpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQXBvcnRlTWVuc2FsKCkge1xuICAgIGNvbnN0IHNhbGFyaW9NZW5zYWwgPSBwYXJzZUZsb2F0KFxuICAgICAgZ2V0VmFsdWVzKCdzYWxhcmlvTWVuc2FsJykudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgKVxuICAgIGNvbnN0IHBlcmNlbnR1YWxBcG9ydGUgPSBwYXJzZUludChnZXRWYWx1ZXMoJ3BlcmNlbnR1YWxBcG9ydGUnKSkgLyAxMDBcbiAgICBjb25zdCBhcG9ydGVNZW5zYWwgPSBwYXJzZUZsb2F0KHBlcmNlbnR1YWxBcG9ydGUgKiBzYWxhcmlvTWVuc2FsKVxuXG4gICAgY29uc29sZS5sb2coc2FsYXJpb01lbnNhbClcblxuICAgIGNvbnNvbGUubG9nKGFwb3J0ZU1lbnNhbClcblxuICAgIGlmIChhcG9ydGVNZW5zYWwpIHtcbiAgICAgIHNldFZhbHVlKCdhcG9ydGVNZW5zYWwnLCBtYXNrTW9uZXkoKGFwb3J0ZU1lbnNhbCAqIDEwMCkudG9TdHJpbmcoKSkpXG4gICAgICBjb25zdCByZW5kYVJlc3RhbnRlID0gc2FsYXJpb01lbnNhbCAtIGFwb3J0ZU1lbnNhbFxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkocmVuZGFSZXN0YW50ZS50b1N0cmluZygpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFsdWUoJ2Fwb3J0ZU1lbnNhbCcsIG1hc2tNb25leSgnMDAwJykpXG4gICAgICBzZXRWYWx1ZSgncmVuZGFSZXN0YW50ZScsIG1hc2tNb25leSgnMDAwJykpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VSZW11bmFyYXRpb24oZSkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgbWFza01vbmV5KGUudGFyZ2V0LnZhbHVlKSlcbiAgICBjYWxjQXBvcnRlTWVuc2FsKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlTGltcGFyKCkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdwZXJjZW50dWFsQXBvcnRlJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdhcG9ydGVNZW5zYWwnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCB1bmRlZmluZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5TYWzDoXJpbyBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUiQgMCwwMFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnNhbGFyaW9NZW5zYWwgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmlvTWVuc2FsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtdW5hcmF0aW9ufVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UGVyY2VudHVhbCBkZSBBcG9ydGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5wZXJjZW50dWFsQXBvcnRlICYmICdpbnB0LWVycm9yJ31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudHVhbEFwb3J0ZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjYWxjQXBvcnRlTWVuc2FsfVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+QXBvcnRlIE1lbnNhbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYXBvcnRlTWVuc2FsXCJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyNmZmYnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UmVuZGEgUmVzdGFudGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUiQgMCwwMFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInJlbmRhUmVzdGFudGVcIlxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FsY3VsYXJcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTGltcGFyXCIgb25DbGljaz17b25DaGFuZ2VMaW1wYXJ9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})