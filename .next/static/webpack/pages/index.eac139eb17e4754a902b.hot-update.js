webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n    var redimentoMensal = 1 + Math.pow(parseFloat('rendimentoAnual'), 1 / 12);\n    var listaTemp = [];\n\n    for (var i = 0; i < 360; i++) {\n      if (i === 0) {\n        listaTemp.push({\n          valorInicial: '000',\n          aporteFinal: data.aporteMensal\n        });\n      } else {\n        listaTemp({\n          valorInicial: listaTemp[i - 1].aporteFinal,\n          rendimento: listaTemp[i - 1].aporteFinal * (redimentoMensal / 100),\n          aporteFinal: data.aporteMensal + listaTemp[i - 1].aporteFinal + listaTemp[i - 1].aporteFinal * (redimentoMensal / 100)\n        });\n      }\n    }\n\n    console.log(listaTemp);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseInt(getValues('percentualAporte')) / 100;\n    var aporteMensal = parseFloat(percentualAporte * salarioMensal);\n\n    if (aporteMensal) {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])((aporteMensal * 100).toString()));\n      var rendaRestante = (salarioMensal - aporteMensal) * 100;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('aporteMensal', undefined);\n    setValue('rendaRestante', undefined);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    className: errors.salarioMensal && 'inpt-error',\n    type: \"text\",\n    name: \"salarioMensal\",\n    onChange: onChangeRemunaration,\n    ref: register({\n      required: true\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }, \"Rendomento Anual\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.rendimentoAnual && 'inpt-error',\n    type: \"text\",\n    name: \"rendimentoAnual\",\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 119,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"aporteMensal\",\n    ref: register(),\n    placeholder: \"R$ 0,00\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 13\n    }\n  }, \"Renda Restante\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    type: \"text\",\n    name: \"rendaRestante\",\n    ref: register(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Calcular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 137,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"button\",\n    value: \"Limpar\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"t2adw0LPsTXWYzXbrLxNZQNmS0g=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VTdGF0ZSIsImxpc3RhIiwic2V0TGlzdGEiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVkaW1lbnRvTWVuc2FsIiwicGFyc2VGbG9hdCIsImxpc3RhVGVtcCIsImkiLCJwdXNoIiwidmFsb3JJbmljaWFsIiwiYXBvcnRlRmluYWwiLCJhcG9ydGVNZW5zYWwiLCJyZW5kaW1lbnRvIiwiY2FsY0Fwb3J0ZU1lbnNhbCIsInNhbGFyaW9NZW5zYWwiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJwZXJjZW50dWFsQXBvcnRlIiwicGFyc2VJbnQiLCJtYXNrTW9uZXkiLCJyZW5kYVJlc3RhbnRlIiwib25DaGFuZ2VSZW11bmFyYXRpb24iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvbkNoYW5nZUxpbXBhciIsInVuZGVmaW5lZCIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwicmVuZGltZW50b0FudWFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQVVBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxFQUFELENBREg7QUFBQSxNQUN4QkMsS0FEd0I7QUFBQSxNQUNqQkMsUUFEaUI7O0FBQUEsaUJBUzNCQywrREFBTyxFQVRvQjtBQUFBLE1BRzdCQyxPQUg2QixZQUc3QkEsT0FINkI7QUFBQSxNQUk3QkMsWUFKNkIsWUFJN0JBLFlBSjZCO0FBQUEsTUFLN0JDLFFBTDZCLFlBSzdCQSxRQUw2QjtBQUFBLE1BTTdCQyxRQU42QixZQU03QkEsUUFONkI7QUFBQSxN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QSxRQUFRLEVBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBVkYsQ0FyQ0YsRUF5REU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpERixFQTBERTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxRQUEzQjtBQUFvQyxXQUFPLEVBQUU2QixjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMURGLENBREYsQ0FERjtBQWdFRCxDQWhJRDs7R0FBTXBDLFE7VUFTQUksdUQ7OztLQVRBSixRO0FBa0lTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm1DYWxjL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IG1hc2tNb25leSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFrc01vbmV5J1xuXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XG4gIHNhbGFyaW9NZW5zYWw6IG51bWJlclxuICBwZXJjZW50dWFsQXBvcnRlOiBudW1iZXJcbiAgYXBvcnRlTWVuc2FsOiBudW1iZXJcbiAgcmVuZGFSZXN0YW50ZTogbnVtYmVyXG4gIHJlbmRpbWVudG9BbnVhbDogbnVtYmVyXG59XG5cbmNvbnN0IEZvcm1DYWxjOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2xpc3RhLCBzZXRMaXN0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3Qge1xuICAgIGNvbnRyb2wsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBnZXRWYWx1ZXNcbiAgfSA9IHVzZUZvcm08SUZvcm1JbnB1dD4oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElGb3JtSW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIGNvbnN0IHJlZGltZW50b01lbnNhbCA9IDEgKyBwYXJzZUZsb2F0KCdyZW5kaW1lbnRvQW51YWwnKSAqKiAoMSAvIDEyKVxuICAgIGNvbnN0IGxpc3RhVGVtcCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNjA7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgbGlzdGFUZW1wLnB1c2goe1xuICAgICAgICAgIHZhbG9ySW5pY2lhbDogJzAwMCcsXG4gICAgICAgICAgYXBvcnRlRmluYWw6IGRhdGEuYXBvcnRlTWVuc2FsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0YVRlbXAoe1xuICAgICAgICAgIHZhbG9ySW5pY2lhbDogbGlzdGFUZW1wW2kgLSAxXS5hcG9ydGVGaW5hbCxcbiAgICAgICAgICByZW5kaW1lbnRvOiBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsICogKHJlZGltZW50b01lbnNhbCAvIDEwMCksXG4gICAgICAgICAgYXBvcnRlRmluYWw6XG4gICAgICAgICAgICBkYXRhLmFwb3J0ZU1lbnNhbCArXG4gICAgICAgICAgICBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsICtcbiAgICAgICAgICAgIGxpc3RhVGVtcFtpIC0gMV0uYXBvcnRlRmluYWwgKiAocmVkaW1lbnRvTWVuc2FsIC8gMTAwKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhsaXN0YVRlbXApXG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQXBvcnRlTWVuc2FsKCkge1xuICAgIGNvbnN0IHNhbGFyaW9NZW5zYWwgPSBwYXJzZUZsb2F0KFxuICAgICAgZ2V0VmFsdWVzKCdzYWxhcmlvTWVuc2FsJykudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgKVxuICAgIGNvbnN0IHBlcmNlbnR1YWxBcG9ydGUgPSBwYXJzZUludChnZXRWYWx1ZXMoJ3BlcmNlbnR1YWxBcG9ydGUnKSkgLyAxMDBcbiAgICBjb25zdCBhcG9ydGVNZW5zYWwgPSBwYXJzZUZsb2F0KHBlcmNlbnR1YWxBcG9ydGUgKiBzYWxhcmlvTWVuc2FsKVxuXG4gICAgaWYgKGFwb3J0ZU1lbnNhbCkge1xuICAgICAgc2V0VmFsdWUoJ2Fwb3J0ZU1lbnNhbCcsIG1hc2tNb25leSgoYXBvcnRlTWVuc2FsICogMTAwKS50b1N0cmluZygpKSlcbiAgICAgIGNvbnN0IHJlbmRhUmVzdGFudGUgPSAoc2FsYXJpb01lbnNhbCAtIGFwb3J0ZU1lbnNhbCkgKiAxMDBcbiAgICAgIHNldFZhbHVlKCdyZW5kYVJlc3RhbnRlJywgbWFza01vbmV5KHJlbmRhUmVzdGFudGUudG9TdHJpbmcoKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZhbHVlKCdhcG9ydGVNZW5zYWwnLCBtYXNrTW9uZXkoJzAwMCcpKVxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkoJzAwMCcpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUmVtdW5hcmF0aW9uKGUpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIG1hc2tNb25leShlLnRhcmdldC52YWx1ZSkpXG4gICAgY2FsY0Fwb3J0ZU1lbnNhbCgpXG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZUxpbXBhcigpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgncGVyY2VudHVhbEFwb3J0ZScsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgnYXBvcnRlTWVuc2FsJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdyZW5kYVJlc3RhbnRlJywgdW5kZWZpbmVkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+U2Fsw6FyaW8gTWVuc2FsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5zYWxhcmlvTWVuc2FsICYmICdpbnB0LWVycm9yJ31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwic2FsYXJpb01lbnNhbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJlbXVuYXJhdGlvbn1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlBlcmNlbnR1YWwgZGUgQXBvcnRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnBlcmNlbnR1YWxBcG9ydGUgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50dWFsQXBvcnRlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NhbGNBcG9ydGVNZW5zYWx9XG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAzIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlJlbmRvbWVudG8gQW51YWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17M31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMucmVuZGltZW50b0FudWFsICYmICdpbnB0LWVycm9yJ31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGltZW50b0FudWFsXCJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPkFwb3J0ZSBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFwb3J0ZU1lbnNhbFwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5SZW5kYSBSZXN0YW50ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGFSZXN0YW50ZVwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FsY3VsYXJcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTGltcGFyXCIgb25DbGljaz17b25DaGFuZ2VMaW1wYXJ9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})