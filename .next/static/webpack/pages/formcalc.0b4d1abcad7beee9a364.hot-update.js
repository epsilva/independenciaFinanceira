webpackHotUpdate_N_E("pages/formcalc",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/List */ \"./src/components/FormCalc/components/List/index.tsx\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Cards */ \"./src/components/FormCalc/components/Cards/index.tsx\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('0,00'),\n      aporteMensal = _useState2[0],\n      setAporteMensal = _useState2[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues,\n      control = _useForm.control;\n\n  var onSubmit = function onSubmit(data) {\n    var redimentoMensal = Math.pow(1 + data.rendimentoAnual / 100, 1 / 12) - 1;\n    var listaTemp = [];\n\n    for (var i = 0; i < 360; i++) {\n      if (i === 0) {\n        listaTemp.push({\n          mes: i + 1,\n          rendimento: 0,\n          valorInicial: 0,\n          aporteFinal: parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'))\n        });\n      } else {\n        var aporteMe = parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'));\n        var rendimentoAtual = listaTemp[i - 1].aporteFinal * redimentoMensal;\n        listaTemp.push({\n          mes: i + 1,\n          valorInicial: listaTemp[i - 1].aporteFinal,\n          rendimento: rendimentoAtual,\n          aporteFinal: aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual\n        });\n      }\n    }\n\n    console.log(listaTemp);\n    setLista(listaTemp);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseInt(getValues('percentualAporte').toString()) / 100;\n    var aporteMensal = percentualAporte * salarioMensal;\n\n    if (aporteMensal) {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])((aporteMensal * 100).toString()));\n      var rendaRestante = (salarioMensal - aporteMensal) * 100;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])('000'));\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('rendaRestante', undefined);\n    setValue('rendimentoAnual', undefined);\n    setAporteMensal('0,00');\n    setLista([]);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"salarionMensal\",\n    control: control,\n    rules: {\n      required: true\n    },\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"standard-basic\",\n        label: \"Sal\\xE1rio Mensal\",\n        onChange: onChangeRemunaration,\n        placeholder: \"R$ 0,00\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"h2\", {\n    style: {\n      color: '#000'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, \"R$ \", aporteMensal)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, \"Rendimento Anual\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.rendimentoAnual && 'inpt-error',\n    type: \"text\",\n    name: \"rendimentoAnual\",\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    style: {\n      justifyContent: 'flex-end'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    type: \"submit\",\n    style: {\n      marginRight: '8px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 11\n    }\n  }, \"Calcular\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: \"button\",\n    variant: \"contained\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 11\n    }\n  }, \"Limpar\"))), lista.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 11\n    }\n  }), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(FormCalc, \"xfp3Z3oxvqyUW6wjeF8V+QZtvI0=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VTdGF0ZSIsImxpc3RhIiwic2V0TGlzdGEiLCJhcG9ydGVNZW5zYWwiLCJzZXRBcG9ydGVNZW5zYWwiLCJ1c2VGb3JtIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsImNvbnRyb2wiLCJvblN1Ym1pdCIsImRhdGEiLCJyZWRpbWVudG9NZW5zYWwiLCJyZW5kaW1lbnRvQW51YWwiLCJsaXN0YVRlbXAiLCJpIiwicHVzaCIsIm1lcyIsInJlbmRpbWVudG8iLCJ2YWxvckluaWNpYWwiLCJhcG9ydGVGaW5hbCIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJhcG9ydGVNZSIsInJlbmRpbWVudG9BdHVhbCIsImNvbnNvbGUiLCJsb2ciLCJjYWxjQXBvcnRlTWVuc2FsIiwic2FsYXJpb01lbnNhbCIsInBlcmNlbnR1YWxBcG9ydGUiLCJwYXJzZUludCIsIm1hc2tNb25leSIsInJlbmRhUmVzdGFudGUiLCJvbkNoYW5nZVJlbXVuYXJhdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlTGltcGFyIiwidW5kZWZpbmVkIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luUmlnaHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFnQixFQUFoQixDQURIO0FBQUEsTUFDeEJDLEtBRHdCO0FBQUEsTUFDakJDLFFBRGlCOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLE1BQUQs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBdkVKLENBREY7QUErRUQsQ0EzSkQ7O0dBQU1GLFE7VUFVQU0sdUQ7OztLQVZBTixRO0FBNkpTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm1DYWxjL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbHVtbiB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IHsgbWFza01vbmV5IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NYWtzTW9uZXknXG5pbXBvcnQgTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvTGlzdCdcbmltcG9ydCBDYXJkcyBmcm9tICcuL2NvbXBvbmVudHMvQ2FyZHMnXG5pbXBvcnQgeyBJU3RhdGVMaXN0YSwgSUZvcm1JbnB1dCB9IGZyb20gJy4uL3R5cGVzJ1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXG5cbmNvbnN0IEZvcm1DYWxjOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2xpc3RhLCBzZXRMaXN0YV0gPSB1c2VTdGF0ZTxJU3RhdGVMaXN0YVtdPihbXSlcbiAgY29uc3QgW2Fwb3J0ZU1lbnNhbCwgc2V0QXBvcnRlTWVuc2FsXSA9IHVzZVN0YXRlKCcwLDAwJylcbiAgY29uc3Qge1xuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZWdpc3RlcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvcnMsXG4gICAgZ2V0VmFsdWVzLFxuICAgIGNvbnRyb2xcbiAgfSA9IHVzZUZvcm08SUZvcm1JbnB1dD4oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElGb3JtSW5wdXQpID0+IHtcbiAgICBjb25zdCByZWRpbWVudG9NZW5zYWw6IG51bWJlciA9XG4gICAgICAoMSArIGRhdGEucmVuZGltZW50b0FudWFsIC8gMTAwKSAqKiAoMSAvIDEyKSAtIDFcbiAgICBjb25zdCBsaXN0YVRlbXA6IElTdGF0ZUxpc3RhW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzYwOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGxpc3RhVGVtcC5wdXNoKHtcbiAgICAgICAgICBtZXM6IGkgKyAxLFxuICAgICAgICAgIHJlbmRpbWVudG86IDAsXG4gICAgICAgICAgdmFsb3JJbmljaWFsOiAwLFxuICAgICAgICAgIGFwb3J0ZUZpbmFsOiBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgYXBvcnRlTWVuc2FsLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFwb3J0ZU1lID0gcGFyc2VGbG9hdChcbiAgICAgICAgICBhcG9ydGVNZW5zYWwudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgcmVuZGltZW50b0F0dWFsOiBudW1iZXIgPVxuICAgICAgICAgIGxpc3RhVGVtcFtpIC0gMV0uYXBvcnRlRmluYWwgKiByZWRpbWVudG9NZW5zYWxcbiAgICAgICAgbGlzdGFUZW1wLnB1c2goe1xuICAgICAgICAgIG1lczogaSArIDEsXG4gICAgICAgICAgdmFsb3JJbmljaWFsOiBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsLFxuICAgICAgICAgIHJlbmRpbWVudG86IHJlbmRpbWVudG9BdHVhbCxcbiAgICAgICAgICBhcG9ydGVGaW5hbDogYXBvcnRlTWUgKyBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsICsgcmVuZGltZW50b0F0dWFsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGxpc3RhVGVtcClcbiAgICBzZXRMaXN0YShsaXN0YVRlbXApXG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQXBvcnRlTWVuc2FsKCkge1xuICAgIGNvbnN0IHNhbGFyaW9NZW5zYWw6IG51bWJlciA9IHBhcnNlRmxvYXQoXG4gICAgICBnZXRWYWx1ZXMoJ3NhbGFyaW9NZW5zYWwnKS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICApXG4gICAgY29uc3QgcGVyY2VudHVhbEFwb3J0ZTogbnVtYmVyID1cbiAgICAgIHBhcnNlSW50KGdldFZhbHVlcygncGVyY2VudHVhbEFwb3J0ZScpLnRvU3RyaW5nKCkpIC8gMTAwXG4gICAgY29uc3QgYXBvcnRlTWVuc2FsOiBudW1iZXIgPSBwZXJjZW50dWFsQXBvcnRlICogc2FsYXJpb01lbnNhbFxuXG4gICAgaWYgKGFwb3J0ZU1lbnNhbCkge1xuICAgICAgc2V0QXBvcnRlTWVuc2FsKG1hc2tNb25leSgoYXBvcnRlTWVuc2FsICogMTAwKS50b1N0cmluZygpKSlcbiAgICAgIGNvbnN0IHJlbmRhUmVzdGFudGUgPSAoc2FsYXJpb01lbnNhbCAtIGFwb3J0ZU1lbnNhbCkgKiAxMDBcbiAgICAgIHNldFZhbHVlKCdyZW5kYVJlc3RhbnRlJywgbWFza01vbmV5KHJlbmRhUmVzdGFudGUudG9TdHJpbmcoKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFwb3J0ZU1lbnNhbChtYXNrTW9uZXkoJzAwMCcpKVxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkoJzAwMCcpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUmVtdW5hcmF0aW9uKGUpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIG1hc2tNb25leShlLnRhcmdldC52YWx1ZSkpXG4gICAgY2FsY0Fwb3J0ZU1lbnNhbCgpXG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZUxpbXBhcigpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgncGVyY2VudHVhbEFwb3J0ZScsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgncmVuZGFSZXN0YW50ZScsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgncmVuZGltZW50b0FudWFsJywgdW5kZWZpbmVkKVxuICAgIHNldEFwb3J0ZU1lbnNhbCgnMCwwMCcpXG4gICAgc2V0TGlzdGEoW10pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxDb250cm9sbGVyXG4gICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmlvbk1lbnNhbFwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJ1bGVzPXt7IHJlcXVpcmVkOiB0cnVlIH19XG4gICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYWzDoXJpbyBNZW5zYWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtdW5hcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMuc2FsYXJpb01lbnNhbCAmJiAnaW5wdC1lcnJvcid9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInNhbGFyaW9NZW5zYWxcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSZW11bmFyYXRpb259XG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UGVyY2VudHVhbCBkZSBBcG9ydGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17M31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMucGVyY2VudHVhbEFwb3J0ZSAmJiAnaW5wdC1lcnJvcid9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnR1YWxBcG9ydGVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2FsY0Fwb3J0ZU1lbnNhbH1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPkFwb3J0ZSBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0+UiQge2Fwb3J0ZU1lbnNhbH08L2gyPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UmVuZGltZW50byBBbnVhbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5yZW5kaW1lbnRvQW51YWwgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZW5kaW1lbnRvQW51YWxcIlxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2FsY3VsYXJcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17b25DaGFuZ2VMaW1wYXJ9PlxuICAgICAgICAgICAgTGltcGFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7bGlzdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmRzIGxpc3RhPXtsaXN0YX0gLz5cbiAgICAgICAgICA8TGlzdCBsaXN0YT17bGlzdGF9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})