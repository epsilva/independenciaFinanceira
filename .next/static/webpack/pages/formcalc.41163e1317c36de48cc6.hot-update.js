webpackHotUpdate_N_E("pages/formcalc",{

/***/ "./src/components/FormCalcPorSalario/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/FormCalcPorSalario/index.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalcPorSalario/styles.ts\");\n/* harmony import */ var _MaksMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MaksMoney */ \"./src/components/MaksMoney.tsx\");\n/* harmony import */ var _MaskDecimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MaskDecimal */ \"./src/components/MaskDecimal.tsx\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/List */ \"./src/components/FormCalcPorSalario/components/List/index.tsx\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Cards */ \"./src/components/FormCalcPorSalario/components/Cards/index.tsx\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"./node_modules/@material-ui/core/esm/InputAdornment/index.js\");\n/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/TrendingUp */ \"./node_modules/@material-ui/icons/TrendingUp.js\");\n/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Money */ \"./node_modules/@material-ui/icons/Money.js\");\n/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Info */ \"./src/components/Info/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalcPorSalario/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar FormCalcPorSalario = function FormCalcPorSalario() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('0,00'),\n      aporteMensal = _useState2[0],\n      setAporteMensal = _useState2[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])({\n    defaultValues: {\n      salarioMensal: null,\n      percentualAporte: null,\n      rendimentoAnual: null\n    }\n  }),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues,\n      control = _useForm.control;\n\n  var onSubmit = function onSubmit(data) {\n    var rendimentoAnual = parseFloat(data.rendimentoAnual.toString().replace(',', '.'));\n    var redimentoMensal = Math.pow(1 + rendimentoAnual / 100, 1 / 12) - 1;\n    console.log(redimentoMensal);\n    var listaTemp = [];\n\n    for (var i = 0; i < 360; i++) {\n      if (i === 0) {\n        listaTemp.push({\n          mes: i + 1,\n          rendimento: 0,\n          valorInicial: 0,\n          aporteFinal: parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'))\n        });\n      } else {\n        var aporteMe = parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'));\n        var rendimentoAtual = listaTemp[i - 1].aporteFinal * redimentoMensal;\n        listaTemp.push({\n          mes: i + 1,\n          valorInicial: listaTemp[i - 1].aporteFinal,\n          rendimento: rendimentoAtual,\n          aporteFinal: aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual\n        });\n      }\n    }\n\n    setLista(listaTemp);\n  };\n\n  function calcAporteMensal(e) {\n    if ((e === null || e === void 0 ? void 0 : e.target.name) === 'percentualAporte') {\n      setValue('percentualAporte', Object(_MaskDecimal__WEBPACK_IMPORTED_MODULE_5__[\"maskDecimal\"])(e === null || e === void 0 ? void 0 : e.target.value));\n    }\n\n    if ((e === null || e === void 0 ? void 0 : e.target.name) === 'rendimentoAnual') {\n      setValue('rendimentoAnual', Object(_MaskDecimal__WEBPACK_IMPORTED_MODULE_5__[\"maskDecimal\"])(e === null || e === void 0 ? void 0 : e.target.value));\n    }\n\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseFloat(getValues('percentualAporte').toString().replace(',', '.')) / 100;\n    var aporteMensal = percentualAporte * salarioMensal;\n\n    if (aporteMensal) {\n      setAporteMensal(Object(_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(Number(aporteMensal).toFixed(2).toString()));\n    } else {\n      setAporteMensal(Object(_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal(undefined);\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('rendimentoAnual', undefined);\n    setAporteMensal('0,00');\n    setLista([]);\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    onChangeLimpar();\n  }, []);\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }\n  }, localStorage.getItem('showInfoIndependencia') && __jsx(_Info__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 13\n    }\n  }, \"Teste\")), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"salarioMensal\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        error: errors.salarioMensal !== undefined,\n        id: \"standard-basic\",\n        size: \"small\",\n        fullWidth: true,\n        label: \"Sal\\xE1rio Mensal\",\n        onChange: onChangeRemunaration,\n        placeholder: \"0,00\",\n        inputRef: register({\n          required: 'Campo obrigatório'\n        }),\n        InputProps: {\n          name: 'salarioMensal',\n          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            position: \"start\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 23\n            }\n          }, \"R$\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"percentualAporte\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        error: errors.percentualAporte !== undefined,\n        id: \"standard-basic\",\n        label: \"Percentual do Aporte\",\n        onChange: calcAporteMensal,\n        placeholder: \"100%\",\n        size: \"small\",\n        fullWidth: true,\n        inputRef: register({\n          required: 'Campo obrigatório',\n          maxLength: 6\n        }),\n        inputProps: {\n          maxLength: 6,\n          name: 'percentualAporte'\n        },\n        InputProps: {\n          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            position: \"start\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 23\n            }\n          }, __jsx(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11___default.a, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 25\n            }\n          }))\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 148,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 176,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 177,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 178,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"h2\", {\n    style: {\n      color: '#000'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 179,\n      columnNumber: 13\n    }\n  }, \"R$ \", aporteMensal)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 181,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"rendimentoAnual\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        error: errors.rendimentoAnual !== undefined,\n        id: \"standard-basic\",\n        label: \"Rendimento Anual\",\n        onChange: calcAporteMensal,\n        placeholder: \"100%\",\n        inputRef: register({\n          required: 'Campo obrigatório',\n          maxLength: 6\n        }),\n        size: \"small\",\n        fullWidth: true,\n        inputProps: {\n          maxLength: 6\n        },\n        InputProps: {\n          name: 'rendimentoAnual',\n          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            position: \"start\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 204,\n              columnNumber: 23\n            }\n          }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default.a, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 205,\n              columnNumber: 25\n            }\n          }))\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 186,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 182,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    style: {\n      justifyContent: 'flex-end'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 214,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    type: \"submit\",\n    style: {\n      marginRight: '8px'\n    },\n    fullWidth: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 11\n    }\n  }, \"Calcular\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: \"button\",\n    variant: \"contained\",\n    onClick: onChangeLimpar,\n    fullWidth: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 11\n    }\n  }, \"Limpar\"))), lista.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 236,\n      columnNumber: 11\n    }\n  }), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 237,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(FormCalcPorSalario, \"StqTcAr6RbmuZrJe6zLCnEKVV8A=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalcPorSalario;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalcPorSalario);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalcPorSalario\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGNQb3JTYWxhcmlvL2luZGV4LnRzeD84MjBhIl0sIm5hbWVzIjpbIkZvcm1DYWxjUG9yU2FsYXJpbyIsInVzZVN0YXRlIiwibGlzdGEiLCJzZXRMaXN0YSIsImFwb3J0ZU1lbnNhbCIsInNldEFwb3J0ZU1lbnNhbCIsInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwic2FsYXJpb01lbnNhbCIsInBlcmNlbnR1YWxBcG9ydGUiLCJyZW5kaW1lbnRvQW51YWwiLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsInNldFZhbHVlIiwiZXJyb3JzIiwiZ2V0VmFsdWVzIiwiY29udHJvbCIsIm9uU3VibWl0IiwiZGF0YSIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJyZWRpbWVudG9NZW5zYWwiLCJjb25zb2xlIiwibG9nIiwibGlzdGFUZW1wIiwiaSIsInB1c2giLCJtZXMiLCJyZW5kaW1lbnRvIiwidmFsb3JJbmljaWFsIiwiYXBvcnRlRmluYWwiLCJhcG9ydGVNZSIsInJlbmRpbWVudG9BdHVhbCIsImNhbGNBcG9ydGVNZW5zYWwiLCJlIiwidGFyZ2V0IiwibmFtZSIsIm1hc2tEZWNpbWFsIiwidmFsdWUiLCJtYXNrTW9uZXkiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwib25DaGFuZ2VSZW11bmFyYXRpb24iLCJ1bmRlZmluZWQiLCJvbkNoYW5nZUxpbXBhciIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZXF1aXJlZCIsInN0YXJ0QWRvcm5tZW50IiwibWF4TGVuZ3RoIiwiY29sb3IiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpblJpZ2h0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEs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QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBOUhKLENBREY7QUFzSUQsQ0FsT0Q7O0dBQU1GLGtCO1VBVUFNLHVEOzs7S0FWQU4sa0I7QUFvT1NBLGlGQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGNQb3JTYWxhcmlvL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sdW1uIH0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBtYXNrTW9uZXkgfSBmcm9tICcuLi9NYWtzTW9uZXknXG5pbXBvcnQgeyBtYXNrRGVjaW1hbCB9IGZyb20gJy4uL01hc2tEZWNpbWFsJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL0NhcmRzJ1xuaW1wb3J0IHsgSVN0YXRlTGlzdGEsIElGb3JtSW5wdXQgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50J1xuaW1wb3J0IFRyZW5kaW5nVXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmVuZGluZ1VwJ1xuaW1wb3J0IE1vbmV5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXknXG5pbXBvcnQgSW5mbyBmcm9tICcuLi9JbmZvJ1xuXG5jb25zdCBGb3JtQ2FsY1BvclNhbGFyaW86IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbbGlzdGEsIHNldExpc3RhXSA9IHVzZVN0YXRlPElTdGF0ZUxpc3RhW10+KFtdKVxuICBjb25zdCBbYXBvcnRlTWVuc2FsLCBzZXRBcG9ydGVNZW5zYWxdID0gdXNlU3RhdGUoJzAsMDAnKVxuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgY29udHJvbFxuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0Pih7XG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgc2FsYXJpb01lbnNhbDogbnVsbCxcbiAgICAgIHBlcmNlbnR1YWxBcG9ydGU6IG51bGwsXG4gICAgICByZW5kaW1lbnRvQW51YWw6IG51bGxcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dCkgPT4ge1xuICAgIGNvbnN0IHJlbmRpbWVudG9BbnVhbCA9IHBhcnNlRmxvYXQoXG4gICAgICBkYXRhLnJlbmRpbWVudG9BbnVhbC50b1N0cmluZygpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgKVxuICAgIGNvbnN0IHJlZGltZW50b01lbnNhbDogbnVtYmVyID0gKDEgKyByZW5kaW1lbnRvQW51YWwgLyAxMDApICoqICgxIC8gMTIpIC0gMVxuICAgIGNvbnNvbGUubG9nKHJlZGltZW50b01lbnNhbClcbiAgICBjb25zdCBsaXN0YVRlbXA6IElTdGF0ZUxpc3RhW10gPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzYwOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGxpc3RhVGVtcC5wdXNoKHtcbiAgICAgICAgICBtZXM6IGkgKyAxLFxuICAgICAgICAgIHJlbmRpbWVudG86IDAsXG4gICAgICAgICAgdmFsb3JJbmljaWFsOiAwLFxuICAgICAgICAgIGFwb3J0ZUZpbmFsOiBwYXJzZUZsb2F0KFxuICAgICAgICAgICAgYXBvcnRlTWVuc2FsLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFwb3J0ZU1lID0gcGFyc2VGbG9hdChcbiAgICAgICAgICBhcG9ydGVNZW5zYWwudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgcmVuZGltZW50b0F0dWFsOiBudW1iZXIgPVxuICAgICAgICAgIGxpc3RhVGVtcFtpIC0gMV0uYXBvcnRlRmluYWwgKiByZWRpbWVudG9NZW5zYWxcbiAgICAgICAgbGlzdGFUZW1wLnB1c2goe1xuICAgICAgICAgIG1lczogaSArIDEsXG4gICAgICAgICAgdmFsb3JJbmljaWFsOiBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsLFxuICAgICAgICAgIHJlbmRpbWVudG86IHJlbmRpbWVudG9BdHVhbCxcbiAgICAgICAgICBhcG9ydGVGaW5hbDogYXBvcnRlTWUgKyBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsICsgcmVuZGltZW50b0F0dWFsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHNldExpc3RhKGxpc3RhVGVtcClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNBcG9ydGVNZW5zYWwoZSkge1xuICAgIGlmIChlPy50YXJnZXQubmFtZSA9PT0gJ3BlcmNlbnR1YWxBcG9ydGUnKSB7XG4gICAgICBzZXRWYWx1ZSgncGVyY2VudHVhbEFwb3J0ZScsIG1hc2tEZWNpbWFsKGU/LnRhcmdldC52YWx1ZSkpXG4gICAgfVxuICAgIGlmIChlPy50YXJnZXQubmFtZSA9PT0gJ3JlbmRpbWVudG9BbnVhbCcpIHtcbiAgICAgIHNldFZhbHVlKCdyZW5kaW1lbnRvQW51YWwnLCBtYXNrRGVjaW1hbChlPy50YXJnZXQudmFsdWUpKVxuICAgIH1cblxuICAgIGNvbnN0IHNhbGFyaW9NZW5zYWw6IG51bWJlciA9IHBhcnNlRmxvYXQoXG4gICAgICBnZXRWYWx1ZXMoJ3NhbGFyaW9NZW5zYWwnKS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICApXG4gICAgY29uc3QgcGVyY2VudHVhbEFwb3J0ZTogbnVtYmVyID1cbiAgICAgIHBhcnNlRmxvYXQoZ2V0VmFsdWVzKCdwZXJjZW50dWFsQXBvcnRlJykudG9TdHJpbmcoKS5yZXBsYWNlKCcsJywgJy4nKSkgL1xuICAgICAgMTAwXG4gICAgY29uc3QgYXBvcnRlTWVuc2FsOiBudW1iZXIgPSBwZXJjZW50dWFsQXBvcnRlICogc2FsYXJpb01lbnNhbFxuXG4gICAgaWYgKGFwb3J0ZU1lbnNhbCkge1xuICAgICAgc2V0QXBvcnRlTWVuc2FsKG1hc2tNb25leShOdW1iZXIoYXBvcnRlTWVuc2FsKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBcG9ydGVNZW5zYWwobWFza01vbmV5KCcwMDAnKSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVJlbXVuYXJhdGlvbihlKSB7XG4gICAgc2V0VmFsdWUoJ3NhbGFyaW9NZW5zYWwnLCBtYXNrTW9uZXkoZS50YXJnZXQudmFsdWUpKVxuICAgIGNhbGNBcG9ydGVNZW5zYWwodW5kZWZpbmVkKVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VMaW1wYXIoKSB7XG4gICAgc2V0VmFsdWUoJ3NhbGFyaW9NZW5zYWwnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3BlcmNlbnR1YWxBcG9ydGUnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3JlbmRpbWVudG9BbnVhbCcsIHVuZGVmaW5lZClcbiAgICBzZXRBcG9ydGVNZW5zYWwoJzAsMDAnKVxuICAgIHNldExpc3RhKFtdKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkNoYW5nZUxpbXBhcigpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAge2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaG93SW5mb0luZGVwZW5kZW5jaWEnKSAmJiAoXG4gICAgICAgICAgPEluZm8+XG4gICAgICAgICAgICA8aDE+VGVzdGU8L2gxPlxuICAgICAgICAgIDwvSW5mbz5cbiAgICAgICAgKX1cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgbmFtZT1cInNhbGFyaW9NZW5zYWxcIlxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnNhbGFyaW9NZW5zYWwgIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTYWzDoXJpbyBNZW5zYWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtdW5hcmF0aW9ufVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIwLDAwXCJcbiAgICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnQ2FtcG8gb2JyaWdhdMOzcmlvJ1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdzYWxhcmlvTWVuc2FsJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlIkPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnR1YWxBcG9ydGVcIlxuICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxuICAgICAgICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBlcnJvcj17ZXJyb3JzLnBlcmNlbnR1YWxBcG9ydGUgIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQZXJjZW50dWFsIGRvIEFwb3J0ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2FsY0Fwb3J0ZU1lbnNhbH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0NhbXBvIG9icmlnYXTDs3JpbycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNlxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3BlcmNlbnR1YWxBcG9ydGUnXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5BcG9ydGUgTWVuc2FsPC9sYWJlbD5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19PlIkIHthcG9ydGVNZW5zYWx9PC9oMj5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgbmFtZT1cInJlbmRpbWVudG9BbnVhbFwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucmVuZGltZW50b0FudWFsICE9PSB1bmRlZmluZWR9XG4gICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVuZGltZW50byBBbnVhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y2FsY0Fwb3J0ZU1lbnNhbH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFJlZj17cmVnaXN0ZXIoe1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0NhbXBvIG9icmlnYXTDs3JpbycsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNlxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBpbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogNlxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3JlbmRpbWVudG9BbnVhbCcsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ1VwSWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH19PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc4cHgnIH19XG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDYWxjdWxhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNoYW5nZUxpbXBhcn1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgID5cbiAgICAgICAgICAgIExpbXBhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge2xpc3RhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkcyBsaXN0YT17bGlzdGF9IC8+XG4gICAgICAgICAgPExpc3QgbGlzdGE9e2xpc3RhfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjUG9yU2FsYXJpb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FormCalcPorSalario/index.tsx\n");

/***/ })

})