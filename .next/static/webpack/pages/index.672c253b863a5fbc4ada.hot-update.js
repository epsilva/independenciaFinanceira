webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = getValues('salarioMensal');\n    var percentualAporte = getValues('percentualAporte');\n    var aporteMensal = parseInt(percentualAporte) / 100 * parseFloat(salarioMensal) * 100;\n\n    if (aporteMensal) {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(aporteMensal.toString()));\n      var rendaRestante = parseFloat(salarioMensal) - parseFloat(aporteMensal / 100);\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('aporteMensal', undefined);\n    setValue('rendaRestante', undefined);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    className: errors.salarioMensal && 'inpt-error',\n    type: \"text\",\n    name: \"salarioMensal\",\n    onChange: onChangeRemunaration,\n    ref: register({\n      required: true\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: \"3\",\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"aporteMensal\",\n    ref: register(),\n    placeholder: \"R$ 0,00\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Renda Restante\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    type: \"text\",\n    name: \"rendaRestante\",\n    ref: register(),\n    disabled: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Calcular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"button\",\n    value: \"Limpar\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"ZikeEyNXaU47RVRLi22lM1+NDpk=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2FsY0Fwb3J0ZU1lbnNhbCIsInNhbGFyaW9NZW5zYWwiLCJwZXJjZW50dWFsQXBvcnRlIiwiYXBvcnRlTWVuc2FsIiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwibWFza01vbmV5IiwidG9TdHJpbmciLCJyZW5kYVJlc3RhbnRlIiwib25DaGFuZ2VSZW11bmFyYXRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUxpbXBhciIsInVuZGVmaW5lZCIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVNBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxpQkFRM0JDLCtEQUFPLEVBUm9CO0FBQUEsTUFFN0JDLE9BRjZCLFlBRTdCQSxPQUY2QjtBQUFBLE1BRzdCQyxZQUg2QixZQUc3QkEsWUFINkI7QUFBQSxNQUk3QkMsUUFKNkIsWUFJN0JBLFFBSjZCO0FBQUEsTUFLN0JDLFFBTDZCLFlBSzdCQSxRQUw2QjtBQUFBLE1BTTdCQyxNQU42QixZQU03QkEsTUFONkI7QUFBQSxNQU83QkMsU0FQNkIsWUFPN0JBLFNBUDZCOztBQVUvQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQXNCO0FBQ3JDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEdBRkQ7O0FBSUEsV0FBU0csZ0JBQVQsR0FBNEI7QUFDMUIsUUFBTUMsYUFBYSxHQUFHTixTQUFTLENBQUMsZUFB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QTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFDLGNBRlA7QUFHRSxPQUFHLEVBQUV4QixRQUFRLEVBSGY7QUFJRSxlQUFXLEVBQUMsU0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVVFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUNFLGVBQVcsRUFBQyxTQURkO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxRQUFJLEVBQUMsZUFIUDtBQUlFLE9BQUcsRUFBRUEsUUFBUSxFQUpmO0FBS0UsWUFBUSxNQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVZGLENBMUJGLEVBK0NFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQ0YsRUFnREU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsUUFBM0I7QUFBb0MsV0FBTyxFQUFFcUIsY0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhERixDQURGLENBREY7QUFzREQsQ0FoR0Q7O0dBQU16QixRO1VBUUFDLHVEOzs7S0FSQUQsUTtBQWtHU0EsdUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQ2FsYy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbHVtbiB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgbWFza01vbmV5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYWtzTW9uZXknXG5cbmludGVyZmFjZSBJRm9ybUlucHV0IHtcbiAgc2FsYXJpb01lbnNhbDogbnVtYmVyXG4gIHBlcmNlbnR1YWxBcG9ydGU6IG51bWJlclxuICBhcG9ydGVNZW5zYWw6IG51bWJlclxuICByZW5kYVJlc3RhbnRlOiBudW1iZXJcbn1cblxuY29uc3QgRm9ybUNhbGM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7XG4gICAgY29udHJvbCxcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JzLFxuICAgIGdldFZhbHVlc1xuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0PigpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQXBvcnRlTWVuc2FsKCkge1xuICAgIGNvbnN0IHNhbGFyaW9NZW5zYWwgPSBnZXRWYWx1ZXMoJ3NhbGFyaW9NZW5zYWwnKVxuICAgIGNvbnN0IHBlcmNlbnR1YWxBcG9ydGUgPSBnZXRWYWx1ZXMoJ3BlcmNlbnR1YWxBcG9ydGUnKVxuICAgIGNvbnN0IGFwb3J0ZU1lbnNhbCA9XG4gICAgICAocGFyc2VJbnQocGVyY2VudHVhbEFwb3J0ZSkgLyAxMDApICogcGFyc2VGbG9hdChzYWxhcmlvTWVuc2FsKSAqIDEwMFxuXG4gICAgaWYgKGFwb3J0ZU1lbnNhbCkge1xuICAgICAgc2V0VmFsdWUoJ2Fwb3J0ZU1lbnNhbCcsIG1hc2tNb25leShhcG9ydGVNZW5zYWwudG9TdHJpbmcoKSkpXG4gICAgICBjb25zdCByZW5kYVJlc3RhbnRlID1cbiAgICAgICAgcGFyc2VGbG9hdChzYWxhcmlvTWVuc2FsKSAtIHBhcnNlRmxvYXQoYXBvcnRlTWVuc2FsIC8gMTAwKVxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkocmVuZGFSZXN0YW50ZS50b1N0cmluZygpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VmFsdWUoJ2Fwb3J0ZU1lbnNhbCcsIG1hc2tNb25leSgnMDAwJykpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VSZW11bmFyYXRpb24oZSkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgbWFza01vbmV5KGUudGFyZ2V0LnZhbHVlKSlcbiAgICBjYWxjQXBvcnRlTWVuc2FsKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlTGltcGFyKCkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdwZXJjZW50dWFsQXBvcnRlJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdhcG9ydGVNZW5zYWwnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCB1bmRlZmluZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5TYWzDoXJpbyBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUiQgMCwwMFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnNhbGFyaW9NZW5zYWwgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmlvTWVuc2FsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtdW5hcmF0aW9ufVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UGVyY2VudHVhbCBkZSBBcG9ydGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5wZXJjZW50dWFsQXBvcnRlICYmICdpbnB0LWVycm9yJ31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudHVhbEFwb3J0ZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtjYWxjQXBvcnRlTWVuc2FsfVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+QXBvcnRlIE1lbnNhbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYXBvcnRlTWVuc2FsXCJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlJlbmRhIFJlc3RhbnRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZW5kYVJlc3RhbnRlXCJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3RlcigpfVxuICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDYWxjdWxhclwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJMaW1wYXJcIiBvbkNsaWNrPXtvbkNoYW5nZUxpbXBhcn0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ2FsY1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})