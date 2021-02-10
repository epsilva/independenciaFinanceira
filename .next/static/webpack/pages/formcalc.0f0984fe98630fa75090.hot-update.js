webpackHotUpdate_N_E("pages/formcalc",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\n/* harmony import */ var _components_maskDecimal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/maskDecimal */ \"./src/components/maskDecimal.tsx\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/List */ \"./src/components/FormCalc/components/List/index.tsx\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Cards */ \"./src/components/FormCalc/components/Cards/index.tsx\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\n/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ \"./node_modules/@material-ui/core/esm/InputAdornment/index.js\");\n/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/TrendingUp */ \"./node_modules/@material-ui/icons/TrendingUp.js\");\n/* harmony import */ var _material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Money */ \"./node_modules/@material-ui/icons/Money.js\");\n/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('00,00'),\n      aporteMensal = _useState2[0],\n      setAporteMensal = _useState2[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])({\n    defaultValues: {\n      salarioMensal: null,\n      percentualAporte: null,\n      rendimentoAnual: null\n    }\n  }),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues,\n      control = _useForm.control;\n\n  var onSubmit = function onSubmit(data) {\n    var redimentoMensal = Math.pow(1 + data.rendimentoAnual / 100, 1 / 12) - 1;\n    var listaTemp = [];\n\n    for (var i = 0; i < 360; i++) {\n      if (i === 0) {\n        listaTemp.push({\n          mes: i + 1,\n          rendimento: 0,\n          valorInicial: 0,\n          aporteFinal: parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'))\n        });\n      } else {\n        var aporteMe = parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'));\n        var rendimentoAtual = listaTemp[i - 1].aporteFinal * redimentoMensal;\n        listaTemp.push({\n          mes: i + 1,\n          valorInicial: listaTemp[i - 1].aporteFinal,\n          rendimento: rendimentoAtual,\n          aporteFinal: aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual\n        });\n      }\n    }\n\n    setLista(listaTemp);\n  };\n\n  function calcAporteMensal(e) {\n    if (e.target.name === 'percentualAporte') {\n      setValue('percentualAporte', Object(_components_maskDecimal__WEBPACK_IMPORTED_MODULE_5__[\"maskDecimal\"])(e.target.value));\n    }\n\n    if (e.target.name === 'rendimentoAnual') {\n      setValue('rendimentoAnual', Object(_components_maskDecimal__WEBPACK_IMPORTED_MODULE_5__[\"maskDecimal\"])(e.target.value));\n    }\n\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseFloat(getValues('percentualAporte').toString().replace(',', '.')) / 100;\n    var aporteMensal = percentualAporte * salarioMensal;\n\n    if (aporteMensal) {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(Number(aporteMensal).toFixed(2).toString()));\n    } else {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal(undefined);\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('rendaRestante', undefined);\n    setValue('rendimentoAnual', undefined);\n    setAporteMensal('0,00');\n    setLista([]);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"salarioMensal\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        error: errors.salarioMensal !== undefined,\n        id: \"standard-basic\",\n        size: \"small\",\n        fullWidth: true,\n        label: \"Sal\\xE1rio Mensal\",\n        onChange: onChangeRemunaration,\n        placeholder: \"0,00\",\n        inputRef: register({\n          required: 'Campo obrigatório'\n        }),\n        InputProps: {\n          name: 'salarioMensal',\n          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            position: \"start\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 124,\n              columnNumber: 23\n            }\n          }, \"R$\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"percentualAporte\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        error: errors.percentualAporte !== undefined,\n        id: \"standard-basic\",\n        label: \"Percentual do Aporte\",\n        onChange: calcAporteMensal,\n        placeholder: \"100%\",\n        size: \"small\",\n        fullWidth: true,\n        inputRef: register({\n          required: 'Campo obrigatório',\n          maxLength: 6\n        }),\n        inputProps: {\n          maxLength: 6,\n          name: 'percentualAporte'\n        },\n        InputProps: {\n          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            position: \"start\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 23\n            }\n          }, __jsx(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_11___default.a, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 25\n            }\n          }))\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 164,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 165,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 166,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"h2\", {\n    style: {\n      color: '#000'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 167,\n      columnNumber: 13\n    }\n  }, \"R$ \", aporteMensal)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 169,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"rendimentoAnual\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        error: errors.rendimentoAnual !== undefined,\n        id: \"standard-basic\",\n        label: \"Rendimento Anual\",\n        onChange: calcAporteMensal,\n        placeholder: \"100%\",\n        inputRef: register({\n          required: 'Campo obrigatório',\n          maxLength: 6\n        }),\n        size: \"small\",\n        fullWidth: true,\n        inputProps: {\n          maxLength: 6\n        },\n        InputProps: {\n          name: 'rendimentoAnual',\n          startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n            position: \"start\",\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 192,\n              columnNumber: 23\n            }\n          }, __jsx(_material_ui_icons_TrendingUp__WEBPACK_IMPORTED_MODULE_10___default.a, {\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 193,\n              columnNumber: 25\n            }\n          }))\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 174,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 170,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    style: {\n      justifyContent: 'flex-end'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 202,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    type: \"submit\",\n    style: {\n      marginRight: '8px'\n    },\n    fullWidth: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 203,\n      columnNumber: 11\n    }\n  }, \"Calcular\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: \"button\",\n    variant: \"contained\",\n    onClick: onChangeLimpar,\n    fullWidth: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 212,\n      columnNumber: 11\n    }\n  }, \"Limpar\"))), lista.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 11\n    }\n  }), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(FormCalc, \"AyYBhUwi1oYKFC66GmPYQ1Esf2M=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VTdGF0ZSIsImxpc3RhIiwic2V0TGlzdGEiLCJhcG9ydGVNZW5zYWwiLCJzZXRBcG9ydGVNZW5zYWwiLCJ1c2VGb3JtIiwiZGVmYXVsdFZhbHVlcyIsInNhbGFyaW9NZW5zYWwiLCJwZXJjZW50dWFsQXBvcnRlIiwicmVuZGltZW50b0FudWFsIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsImNvbnRyb2wiLCJvblN1Ym1pdCIsImRhdGEiLCJyZWRpbWVudG9NZW5zYWwiLCJsaXN0YVRlbXAiLCJpIiwicHVzaCIsIm1lcyIsInJlbmRpbWVudG8iLCJ2YWxvckluaWNpYWwiLCJhcG9ydGVGaW5hbCIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJhcG9ydGVNZSIsInJlbmRpbWVudG9BdHVhbCIsImNhbGNBcG9ydGVNZW5zYWwiLCJlIiwidGFyZ2V0IiwibmFtZSIsIm1hc2tEZWNpbWFsIiwidmFsdWUiLCJtYXNrTW9uZXkiLCJOdW1iZXIiLCJ0b0ZpeGVkIiwib25DaGFuZ2VSZW11bmFyYXRpb24iLCJ1bmRlZmluZWQiLCJvbkNoYW5nZUxpbXBhciIsInJlcXVpcmVkIiwic3RhcnRBZG9ybm1lbnQiLCJtYXhMZW5ndGgiLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luUmlnaHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQWdCLEVBQWhCLENBREg7QUFBQSxNQUN4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O0FBSUUsU0FBSyxFQUFFO0FBQUVDLGlCQUFXLEVBQUU7QUFBZixLQUpUO0FBS0UsYUFBUyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFVRSxNQUFDLGdFQUFEO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxXQUFPLEVBQUMsV0FGVjtBQUdFLFdBQU8sRUFBRU4sY0FIWDtBQUlFLGFBQVMsTUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkYsQ0FuR0YsQ0FERixFQXdIR3pDLEtBQUssQ0FBQ2dELE1BQU4sR0FBZSxDQUFmLElBQ0MsbUVBQ0UsTUFBQyx5REFBRDtBQUFPLFNBQUssRUFBRWhELEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F6SEosQ0FERjtBQWlJRCxDQXZORDs7R0FBTUYsUTtVQVVBTSx1RDs7O0tBVkFOLFE7QUF5TlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUZvcm0sIENvbnRyb2xsZXIgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IG1hc2tNb25leSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFrc01vbmV5J1xuaW1wb3J0IHsgbWFza0RlY2ltYWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL21hc2tEZWNpbWFsJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgQ2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL0NhcmRzJ1xuaW1wb3J0IHsgSVN0YXRlTGlzdGEsIElGb3JtSW5wdXQgfSBmcm9tICcuLi90eXBlcydcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50J1xuaW1wb3J0IFRyZW5kaW5nVXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9UcmVuZGluZ1VwJ1xuaW1wb3J0IE1vbmV5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9uZXknXG5cbmNvbnN0IEZvcm1DYWxjOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2xpc3RhLCBzZXRMaXN0YV0gPSB1c2VTdGF0ZTxJU3RhdGVMaXN0YVtdPihbXSlcbiAgY29uc3QgW2Fwb3J0ZU1lbnNhbCwgc2V0QXBvcnRlTWVuc2FsXSA9IHVzZVN0YXRlKCcwMCwwMCcpXG4gIGNvbnN0IHtcbiAgICBoYW5kbGVTdWJtaXQsXG4gICAgcmVnaXN0ZXIsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JzLFxuICAgIGdldFZhbHVlcyxcbiAgICBjb250cm9sXG4gIH0gPSB1c2VGb3JtPElGb3JtSW5wdXQ+KHtcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICBzYWxhcmlvTWVuc2FsOiBudWxsLFxuICAgICAgcGVyY2VudHVhbEFwb3J0ZTogbnVsbCxcbiAgICAgIHJlbmRpbWVudG9BbnVhbDogbnVsbFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBJRm9ybUlucHV0KSA9PiB7XG4gICAgY29uc3QgcmVkaW1lbnRvTWVuc2FsOiBudW1iZXIgPVxuICAgICAgKDEgKyBkYXRhLnJlbmRpbWVudG9BbnVhbCAvIDEwMCkgKiogKDEgLyAxMikgLSAxXG4gICAgY29uc3QgbGlzdGFUZW1wOiBJU3RhdGVMaXN0YVtdID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM2MDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICBsaXN0YVRlbXAucHVzaCh7XG4gICAgICAgICAgbWVzOiBpICsgMSxcbiAgICAgICAgICByZW5kaW1lbnRvOiAwLFxuICAgICAgICAgIHZhbG9ySW5pY2lhbDogMCxcbiAgICAgICAgICBhcG9ydGVGaW5hbDogcGFyc2VGbG9hdChcbiAgICAgICAgICAgIGFwb3J0ZU1lbnNhbC50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhcG9ydGVNZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgYXBvcnRlTWVuc2FsLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgICAgICApXG4gICAgICAgIGNvbnN0IHJlbmRpbWVudG9BdHVhbDogbnVtYmVyID1cbiAgICAgICAgICBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsICogcmVkaW1lbnRvTWVuc2FsXG4gICAgICAgIGxpc3RhVGVtcC5wdXNoKHtcbiAgICAgICAgICBtZXM6IGkgKyAxLFxuICAgICAgICAgIHZhbG9ySW5pY2lhbDogbGlzdGFUZW1wW2kgLSAxXS5hcG9ydGVGaW5hbCxcbiAgICAgICAgICByZW5kaW1lbnRvOiByZW5kaW1lbnRvQXR1YWwsXG4gICAgICAgICAgYXBvcnRlRmluYWw6IGFwb3J0ZU1lICsgbGlzdGFUZW1wW2kgLSAxXS5hcG9ydGVGaW5hbCArIHJlbmRpbWVudG9BdHVhbFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgICBzZXRMaXN0YShsaXN0YVRlbXApXG4gIH1cblxuICBmdW5jdGlvbiBjYWxjQXBvcnRlTWVuc2FsKGUpIHtcbiAgICBpZiAoZS50YXJnZXQubmFtZSA9PT0gJ3BlcmNlbnR1YWxBcG9ydGUnKSB7XG4gICAgICBzZXRWYWx1ZSgncGVyY2VudHVhbEFwb3J0ZScsIG1hc2tEZWNpbWFsKGUudGFyZ2V0LnZhbHVlKSlcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0Lm5hbWUgPT09ICdyZW5kaW1lbnRvQW51YWwnKSB7XG4gICAgICBzZXRWYWx1ZSgncmVuZGltZW50b0FudWFsJywgbWFza0RlY2ltYWwoZS50YXJnZXQudmFsdWUpKVxuICAgIH1cblxuICAgIGNvbnN0IHNhbGFyaW9NZW5zYWw6IG51bWJlciA9IHBhcnNlRmxvYXQoXG4gICAgICBnZXRWYWx1ZXMoJ3NhbGFyaW9NZW5zYWwnKS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICApXG4gICAgY29uc3QgcGVyY2VudHVhbEFwb3J0ZTogbnVtYmVyID1cbiAgICAgIHBhcnNlRmxvYXQoZ2V0VmFsdWVzKCdwZXJjZW50dWFsQXBvcnRlJykudG9TdHJpbmcoKS5yZXBsYWNlKCcsJywgJy4nKSkgL1xuICAgICAgMTAwXG4gICAgY29uc3QgYXBvcnRlTWVuc2FsOiBudW1iZXIgPSBwZXJjZW50dWFsQXBvcnRlICogc2FsYXJpb01lbnNhbFxuXG4gICAgaWYgKGFwb3J0ZU1lbnNhbCkge1xuICAgICAgc2V0QXBvcnRlTWVuc2FsKG1hc2tNb25leShOdW1iZXIoYXBvcnRlTWVuc2FsKS50b0ZpeGVkKDIpLnRvU3RyaW5nKCkpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBcG9ydGVNZW5zYWwobWFza01vbmV5KCcwMDAnKSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVJlbXVuYXJhdGlvbihlKSB7XG4gICAgc2V0VmFsdWUoJ3NhbGFyaW9NZW5zYWwnLCBtYXNrTW9uZXkoZS50YXJnZXQudmFsdWUpKVxuICAgIGNhbGNBcG9ydGVNZW5zYWwodW5kZWZpbmVkKVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VMaW1wYXIoKSB7XG4gICAgc2V0VmFsdWUoJ3NhbGFyaW9NZW5zYWwnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3BlcmNlbnR1YWxBcG9ydGUnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3JlbmRpbWVudG9BbnVhbCcsIHVuZGVmaW5lZClcbiAgICBzZXRBcG9ydGVNZW5zYWwoJzAsMDAnKVxuICAgIHNldExpc3RhKFtdKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgICBuYW1lPVwic2FsYXJpb01lbnNhbFwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMuc2FsYXJpb01lbnNhbCAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhbMOhcmlvIE1lbnNhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSZW11bmFyYXRpb259XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjAsMDBcIlxuICAgICAgICAgICAgICAgICAgaW5wdXRSZWY9e3JlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdDYW1wbyBvYnJpZ2F0w7NyaW8nXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ3NhbGFyaW9NZW5zYWwnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+UiQ8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgICBuYW1lPVwicGVyY2VudHVhbEFwb3J0ZVwiXG4gICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XG4gICAgICAgICAgICAgIHJlbmRlcj17KCkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGVycm9yPXtlcnJvcnMucGVyY2VudHVhbEFwb3J0ZSAhPT0gdW5kZWZpbmVkfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBlcmNlbnR1YWwgZG8gQXBvcnRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjYWxjQXBvcnRlTWVuc2FsfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnQ2FtcG8gb2JyaWdhdMOzcmlvJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2LFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncGVyY2VudHVhbEFwb3J0ZSdcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50OiAoXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb25leUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPkFwb3J0ZSBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAnIzAwMCcgfX0+UiQge2Fwb3J0ZU1lbnNhbH08L2gyPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8Q29udHJvbGxlclxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGltZW50b0FudWFsXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgZXJyb3I9e2Vycm9ycy5yZW5kaW1lbnRvQW51YWwgIT09IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgICAgIGlkPVwic3RhbmRhcmQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZW5kaW1lbnRvIEFudWFsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjYWxjQXBvcnRlTWVuc2FsfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgIGlucHV0UmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnQ2FtcG8gb2JyaWdhdMOzcmlvJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgSW5wdXRQcm9wcz17e1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAncmVuZGltZW50b0FudWFsJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ6IChcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nVXBJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3cgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogJzhweCcgfX1cbiAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbGN1bGFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2hhbmdlTGltcGFyfVxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgPlxuICAgICAgICAgICAgTGltcGFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICB7bGlzdGEubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPENhcmRzIGxpc3RhPXtsaXN0YX0gLz5cbiAgICAgICAgICA8TGlzdCBsaXN0YT17bGlzdGF9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})