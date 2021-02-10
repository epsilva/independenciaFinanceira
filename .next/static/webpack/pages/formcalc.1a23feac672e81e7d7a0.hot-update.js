webpackHotUpdate_N_E("pages/formcalc",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/List */ \"./src/components/FormCalc/components/List/index.tsx\");\n/* harmony import */ var _components_Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Cards */ \"./src/components/FormCalc/components/Cards/index.tsx\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ \"./node_modules/@material-ui/core/esm/TextField/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('0,00'),\n      aporteMensal = _useState2[0],\n      setAporteMensal = _useState2[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues,\n      control = _useForm.control;\n\n  var onSubmit = function onSubmit(data) {\n    var redimentoMensal = Math.pow(1 + data.rendimentoAnual / 100, 1 / 12) - 1;\n    var listaTemp = [];\n\n    for (var i = 0; i < 360; i++) {\n      if (i === 0) {\n        listaTemp.push({\n          mes: i + 1,\n          rendimento: 0,\n          valorInicial: 0,\n          aporteFinal: parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'))\n        });\n      } else {\n        var aporteMe = parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'));\n        var rendimentoAtual = listaTemp[i - 1].aporteFinal * redimentoMensal;\n        listaTemp.push({\n          mes: i + 1,\n          valorInicial: listaTemp[i - 1].aporteFinal,\n          rendimento: rendimentoAtual,\n          aporteFinal: aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual\n        });\n      }\n    }\n\n    console.log(listaTemp);\n    setLista(listaTemp);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseInt(getValues('percentualAporte').toString()) / 100;\n    var aporteMensal = percentualAporte * salarioMensal;\n\n    if (aporteMensal) {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])((aporteMensal * 100).toString()));\n      var rendaRestante = (salarioMensal - aporteMensal) * 100;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])('000'));\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_4__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('rendaRestante', undefined);\n    setValue('rendimentoAnual', undefined);\n    setAporteMensal('0,00');\n    setLista([]);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"Controller\"], {\n    name: \"salarionMensal\",\n    control: control,\n    render: function render() {\n      return __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"standard-basic\",\n        label: \"Sal\\xE1rio Mensal\",\n        onChange: onChangeRemunaration,\n        placeholder: \"R$ 0,00\",\n        required: true,\n        error: true,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }\n      });\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"h2\", {\n    style: {\n      color: '#000'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 13\n    }\n  }, \"R$ \", aporteMensal)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }\n  }, \"Rendimento Anual\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.rendimentoAnual && 'inpt-error',\n    type: \"text\",\n    name: \"rendimentoAnual\",\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n    style: {\n      justifyContent: 'flex-end'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    type: \"submit\",\n    style: {\n      marginRight: '8px'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 11\n    }\n  }, \"Calcular\"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    type: \"button\",\n    variant: \"contained\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 154,\n      columnNumber: 11\n    }\n  }, \"Limpar\"))), lista.length > 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Cards__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 161,\n      columnNumber: 11\n    }\n  }), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 162,\n      columnNumber: 11\n    }\n  })));\n};\n\n_s(FormCalc, \"xfp3Z3oxvqyUW6wjeF8V+QZtvI0=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VTdGF0ZSIsImxpc3RhIiwic2V0TGlzdGEiLCJhcG9ydGVNZW5zYWwiLCJzZXRBcG9ydGVNZW5zYWwiLCJ1c2VGb3JtIiwiaGFuZGxlU3VibWl0IiwicmVnaXN0ZXIiLCJzZXRWYWx1ZSIsImVycm9ycyIsImdldFZhbHVlcyIsImNvbnRyb2wiLCJvblN1Ym1pdCIsImRhdGEiLCJyZWRpbWVudG9NZW5zYWwiLCJyZW5kaW1lbnRvQW51YWwiLCJsaXN0YVRlbXAiLCJpIiwicHVzaCIsIm1lcyIsInJlbmRpbWVudG8iLCJ2YWxvckluaWNpYWwiLCJhcG9ydGVGaW5hbCIsInBhcnNlRmxvYXQiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJhcG9ydGVNZSIsInJlbmRpbWVudG9BdHVhbCIsImNvbnNvbGUiLCJsb2ciLCJjYWxjQXBvcnRlTWVuc2FsIiwic2FsYXJpb01lbnNhbCIsInBlcmNlbnR1YWxBcG9ydGUiLCJwYXJzZUludCIsIm1hc2tNb25leSIsInJlbmRhUmVzdGFudGUiLCJvbkNoYW5nZVJlbXVuYXJhdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlTGltcGFyIiwidW5kZWZpbmVkIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJjb2xvciIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luUmlnaHQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsUUFBa0IsR0FBRyxTQUFyQkEsUUFBcUIsR0FBTTtBQUFBOztBQUFBLGtCQUNMQyxzREFBUSxDQUFnQixFQUFoQixDQURIO0FBQUEsTUFDeEJDLEtBRHdCO0FBQUEsTUFDakJDLFFBRGlCOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLE1BQUQsQ0FGakI7QUFBQSxNQUV4QkcsWUFGd0I7QUFBQSxNQUVWQyxlQUZVOztBQUFBLGlCQVUzQkMsK0RBQU8sRUFWb0I7QUFBQSxNQUk3QkMsWUFKNkIsWUFJN0JBLFlBSjZCO0FBQUEsTUFLN0JDLFFBTDZCLFlBSzdCQSxRQUw2QjtBQUFBLE1BTTdCQyxRQU42QixZQU03QkEsUUFONkI7QUFBQSxNQU83QkMsTUFQNkIsWUFPN0JBLE1BUDZCO0FBQUEsTUFRN0JDLFNBUjZCLFlBUTdCQSxTQVI2QjtBQUFBLE1BUzdCQyxPQVQ2QixZQVM3QkEsT0FUNkI7O0FBWS9CLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBc0I7QUFDckMsUUFBTUMsZUFBdUIsR0FDM0IsU0FBQyxJQUFJRCxJQUFJLENBQUNFLGVBQUwsR0FBdUIsR0FBNUIsRUFBcUMsSUFBSSxFQUF6QyxJQUErQyxDQURqRDtBQUVBLFFBQU1DLFNBQXdCLEdBQUcsRUFBakM7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzVCLFVBQUlBLENBQUMsS0FBSyxDQUFWLEVBQWE7QUFDWEQsaUJBQVMsQ0FBQ0UsSUFBVixDQUFlO0FBQ2JDLGFBQUcsRUFBRUYsQ0FBQyxHQUFHLENBREk7QUFFYkcsb0JBQVUsRUFBRSxDQUZDO0FBR2JDLHNCQUFZLEVBQUUsQ0FIRDtBQUliQyxxQkFBVyxFQUFFQyxVQUFVLENBQ3JCcEIsWUFBWSxDQUFDcUIsUUFBYixHQUF3QkMsT0FBeEIsQ0FBZ0MsR0FBaEMsRUFBcUMsRUFBckMsRUFBeUNBLE9BQXpDLENBQWlELEdBQWpELEVBQXNELEdBQXRELENBRHFCO0FBSlYsU0FBZjtBQVFELE9BVEQsTUFTTztBQUNMLFlBQU1DLFFBQVEsR0FBR0gsVUFBVSxDQUN6QnBCLFlBQVksQ0FBQ3FCLFFBQWIsR0FBd0JDLE9BQXhCLENBQWdDLEdBQWhDLEVBQXFDLEVBQXJDLEVBQXlDQSxPQUF6QyxDQUFpRCxHQUFqRCxFQUFzRCxHQUF0RCxDQUR5QixDQUEzQjtBQUdBLFlBQU1FLGVBQXVCLEdBQzNCWCxTQUFTLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQVQsQ0FBaUJLLFdBQWpCLEdBQStCUixlQURqQztBQUVBRSxpQkFBUyxDQUFDRSxJQUFWLENBQWU7QUFDYkMsYUFBRyxFQUFFRixDQUFDLEdBQUcsQ0FESTtBQUViSSxzQkFBWSxFQUFFTCxTQUFTLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQVQsQ0FBaUJLLFdBRmxCO0FBR2JGLG9CQUFVLEVBQUVPLGVBSEM7QUFJYkwscUJBQVcsRUFBRUksUUFBUSxHQUFHVixTQUFTLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQVQsQ0FBaUJLLFdBQTVCLEdBQTBDSztBQUoxQyxTQUFmO0FBTUQ7QUFDRjs7QUFDREMsV0FBTyxDQUFDQyxHQUFSLENBQVliLFNBQVo7QUFDQWQsWUFBUSxDQUFDYyxTQUFELENBQVI7QUFDRCxHQTlCRDs7QUFnQ0EsV0FBU2MsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBTUMsYUFBcUIsR0FBR1IsVUFBVSxDQUN0Q2IsU0FBUyxDQUFDLGVBQUQsQ0FBVCxDQUEyQmMsUUFBM0IsR0FBc0NDLE9BQXRDLENBQThDLEdBQTlDLEVBQW1ELEVBQW5ELEVBQXVEQSxPQUF2RCxDQUErRCxHQUEvRCxFQUFvRSxHQUFwRSxDQURzQyxDQUF4QztBQUdBLFFBQU1PLGdCQUF3QixHQUM1QkMsUUFBUSxDQUFDdkIsU0FBUyxDQUFDLGtCQUFELENBQVQsQ0FBOEJjLFFBQTlCLEVBQUQsQ0FBUixHQUFxRCxHQUR2RDtBQUVBLFFBQU1yQixZQUFvQixHQUFHNkIsZ0JBQWdCLEdBQUdELGFBQWhEOztBQUVBLFFBQUk1QixZQUFKLEVBQWtCO0FBQ2hCQyxxQkFBZSxDQUFDOEIsdUVBQVMsQ0FBQyxDQUFDL0IsWUFBWSxHQUFHLEdBQWhCLEVBQXFCcUIsUUFBckIsRUFBRCxDQUFWLENBQWY7QUFDQSxVQUFNVyxhQUFhLEdBQUcsQ0FBQ0osYUFBYSxHQUFHNUIsWUFBakIsSUFBaUMsR0FBdkQ7QUFDQUssY0FBUSxDQUFDLGVBQUQsRUFBa0IwQix1RUFBUyxDQUFDQyxhQUFhLENBQUNYLFFBQWQsRUFBRCxDQUEzQixDQUFSO0FBQ0QsS0FKRCxNQUlPO0FBQ0xwQixxQkFBZSxDQUFDOEIsdUVBQVMsQ0FBQyxLQUFELENBQVYsQ0FBZjtBQUNBMUIsY0FBUSxDQUFDLGVBQUQsRUFBa0IwQix1RUFBUyxDQUFDLEtBQUQsQ0FBM0IsQ0FBUjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0Usb0JBQVQsQ0FBOEJDLENBQTlCLEVBQWlDO0FBQy9CN0IsWUFBUSxDQUFDLGVBQUQsRUFBa0IwQix1RUFBUyxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUEzQixDQUFSO0FBQ0FULG9CQUFnQjtBQUNqQjs7QUFFRCxXQUFTVSxjQUFULEdBQTBCO0FBQ3hCaEMsWUFBUSxDQUFDLGVBQUQsRUFBa0JpQyxTQUFsQixDQUFSO0FBQ0FqQyxZQUFRLENBQUMsa0JBQUQsRUFBcUJpQyxTQUFyQixDQUFSO0FBQ0FqQyxZQUFRLENBQUMsZUFBRCxFQUFrQmlDLFNBQWxCLENBQVI7QUFDQWpDLFlBQVEsQ0FBQyxpQkFBRCxFQUFvQmlDLFNBQXBCLENBQVI7QUFDQXJDLG1CQUFlLENBQUMsTUFBRCxDQUFmO0FBQ0FGLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDs7QUFFRCxTQUNFO0FBQU0sWUFBUSxFQUFFSSxZQUFZLENBQUNNLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxRQUFJLEVBQUMsZ0JBRFA7QUFFRSxXQUFPLEVBQUVELE9BRlg7QUFHRSxVQUFNLEVBQUU7QUFBQSxhQUNOLE1BQUMsbUVBQUQ7QUFDRSxVQUFFLEVBQUMsZ0JBREw7QUFFRSxhQUFLLEVBQUMsbUJBRlI7QUFHRSxnQkFBUSxFQUFFeUIsb0JBSFo7QUFJRSxtQkFBVyxFQUFDLFNBSmQ7QUFLRSxnQkFBUSxNQUxWO0FBTUUsYUFBSyxNQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFETTtBQUFBLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUF5QkUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFO0FBQ0UsZUFBVyxFQUFDLE1BRGQ7QUFFRSxhQUFTLEVBQUUsQ0FGYjtBQUdFLGFBQVMsRUFBRTNCLE1BQU0sQ0FBQ3VCLGdCQUFQLElBQTJCLFlBSHhDO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxRQUFJLEVBQUMsa0JBTFA7QUFNRSxZQUFRLEVBQUVGLGdCQU5aO0FBT0UsT0FBRyxFQUFFdkIsUUFBUSxDQUFDO0FBQUVtQyxjQUFRLEVBQUUsSUFBWjtBQUFrQkMsZUFBUyxFQUFFO0FBQTdCLEtBQUQsQ0FQZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F6QkYsQ0FERixFQXVDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBSSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQWtDekMsWUFBbEMsQ0FGRixDQURGLEVBS0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQ0UsZUFBVyxFQUFDLE1BRGQ7QUFFRSxhQUFTLEVBQUUsQ0FGYjtBQUdFLGFBQVMsRUFBRU0sTUFBTSxDQUFDTSxlQUFQLElBQTBCLFlBSHZDO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxRQUFJLEVBQUMsaUJBTFA7QUFNRSxPQUFHLEVBQUVSLFFBQVEsQ0FBQztBQUFFbUMsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGVBQVMsRUFBRTtBQUE3QixLQUFELENBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsQ0F2Q0YsRUF3REUsTUFBQywyQ0FBRDtBQUFLLFNBQUssRUFBRTtBQUFFRSxvQkFBYyxFQUFFO0FBQWxCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFDRSxXQUFPLEVBQUMsV0FEVjtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUU7QUFBRUMsaUJBQVcsRUFBRTtBQUFmLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQVNFLE1BQUMsZ0VBQUQ7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixXQUFPLEVBQUMsV0FBOUI7QUFBMEMsV0FBTyxFQUFFTixjQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEYsQ0F4REYsQ0FERixFQXVFR3ZDLEtBQUssQ0FBQzhDLE1BQU4sR0FBZSxDQUFmLElBQ0MsbUVBQ0UsTUFBQyx5REFBRDtBQUFPLFNBQUssRUFBRTlDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLFNBQUssRUFBRUEsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0F4RUosQ0FERjtBQWdGRCxDQTVKRDs7R0FBTUYsUTtVQVVBTSx1RDs7O0tBVkFOLFE7QUE4SlNBLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sdW1uIH0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBtYXNrTW9uZXkgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL01ha3NNb25leSdcbmltcG9ydCBMaXN0IGZyb20gJy4vY29tcG9uZW50cy9MaXN0J1xuaW1wb3J0IENhcmRzIGZyb20gJy4vY29tcG9uZW50cy9DYXJkcydcbmltcG9ydCB7IElTdGF0ZUxpc3RhLCBJRm9ybUlucHV0IH0gZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcblxuY29uc3QgRm9ybUNhbGM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbbGlzdGEsIHNldExpc3RhXSA9IHVzZVN0YXRlPElTdGF0ZUxpc3RhW10+KFtdKVxuICBjb25zdCBbYXBvcnRlTWVuc2FsLCBzZXRBcG9ydGVNZW5zYWxdID0gdXNlU3RhdGUoJzAsMDAnKVxuICBjb25zdCB7XG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBnZXRWYWx1ZXMsXG4gICAgY29udHJvbFxuICB9ID0gdXNlRm9ybTxJRm9ybUlucHV0PigpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YTogSUZvcm1JbnB1dCkgPT4ge1xuICAgIGNvbnN0IHJlZGltZW50b01lbnNhbDogbnVtYmVyID1cbiAgICAgICgxICsgZGF0YS5yZW5kaW1lbnRvQW51YWwgLyAxMDApICoqICgxIC8gMTIpIC0gMVxuICAgIGNvbnN0IGxpc3RhVGVtcDogSVN0YXRlTGlzdGFbXSA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNjA7IGkrKykge1xuICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgbGlzdGFUZW1wLnB1c2goe1xuICAgICAgICAgIG1lczogaSArIDEsXG4gICAgICAgICAgcmVuZGltZW50bzogMCxcbiAgICAgICAgICB2YWxvckluaWNpYWw6IDAsXG4gICAgICAgICAgYXBvcnRlRmluYWw6IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBhcG9ydGVNZW5zYWwudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXBvcnRlTWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgIGFwb3J0ZU1lbnNhbC50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICAgICAgKVxuICAgICAgICBjb25zdCByZW5kaW1lbnRvQXR1YWw6IG51bWJlciA9XG4gICAgICAgICAgbGlzdGFUZW1wW2kgLSAxXS5hcG9ydGVGaW5hbCAqIHJlZGltZW50b01lbnNhbFxuICAgICAgICBsaXN0YVRlbXAucHVzaCh7XG4gICAgICAgICAgbWVzOiBpICsgMSxcbiAgICAgICAgICB2YWxvckluaWNpYWw6IGxpc3RhVGVtcFtpIC0gMV0uYXBvcnRlRmluYWwsXG4gICAgICAgICAgcmVuZGltZW50bzogcmVuZGltZW50b0F0dWFsLFxuICAgICAgICAgIGFwb3J0ZUZpbmFsOiBhcG9ydGVNZSArIGxpc3RhVGVtcFtpIC0gMV0uYXBvcnRlRmluYWwgKyByZW5kaW1lbnRvQXR1YWxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2cobGlzdGFUZW1wKVxuICAgIHNldExpc3RhKGxpc3RhVGVtcClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNBcG9ydGVNZW5zYWwoKSB7XG4gICAgY29uc3Qgc2FsYXJpb01lbnNhbDogbnVtYmVyID0gcGFyc2VGbG9hdChcbiAgICAgIGdldFZhbHVlcygnc2FsYXJpb01lbnNhbCcpLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKS5yZXBsYWNlKCcsJywgJy4nKVxuICAgIClcbiAgICBjb25zdCBwZXJjZW50dWFsQXBvcnRlOiBudW1iZXIgPVxuICAgICAgcGFyc2VJbnQoZ2V0VmFsdWVzKCdwZXJjZW50dWFsQXBvcnRlJykudG9TdHJpbmcoKSkgLyAxMDBcbiAgICBjb25zdCBhcG9ydGVNZW5zYWw6IG51bWJlciA9IHBlcmNlbnR1YWxBcG9ydGUgKiBzYWxhcmlvTWVuc2FsXG5cbiAgICBpZiAoYXBvcnRlTWVuc2FsKSB7XG4gICAgICBzZXRBcG9ydGVNZW5zYWwobWFza01vbmV5KChhcG9ydGVNZW5zYWwgKiAxMDApLnRvU3RyaW5nKCkpKVxuICAgICAgY29uc3QgcmVuZGFSZXN0YW50ZSA9IChzYWxhcmlvTWVuc2FsIC0gYXBvcnRlTWVuc2FsKSAqIDEwMFxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkocmVuZGFSZXN0YW50ZS50b1N0cmluZygpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXBvcnRlTWVuc2FsKG1hc2tNb25leSgnMDAwJykpXG4gICAgICBzZXRWYWx1ZSgncmVuZGFSZXN0YW50ZScsIG1hc2tNb25leSgnMDAwJykpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VSZW11bmFyYXRpb24oZSkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgbWFza01vbmV5KGUudGFyZ2V0LnZhbHVlKSlcbiAgICBjYWxjQXBvcnRlTWVuc2FsKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlTGltcGFyKCkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdwZXJjZW50dWFsQXBvcnRlJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdyZW5kYVJlc3RhbnRlJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdyZW5kaW1lbnRvQW51YWwnLCB1bmRlZmluZWQpXG4gICAgc2V0QXBvcnRlTWVuc2FsKCcwLDAwJylcbiAgICBzZXRMaXN0YShbXSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgbmFtZT1cInNhbGFyaW9uTWVuc2FsXCJcbiAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cbiAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhbMOhcmlvIE1lbnNhbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VSZW11bmFyYXRpb259XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUiQgMCwwMFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnNhbGFyaW9NZW5zYWwgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmlvTWVuc2FsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtdW5hcmF0aW9ufVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlBlcmNlbnR1YWwgZGUgQXBvcnRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnBlcmNlbnR1YWxBcG9ydGUgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50dWFsQXBvcnRlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NhbGNBcG9ydGVNZW5zYWx9XG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAzIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5BcG9ydGUgTWVuc2FsPC9sYWJlbD5cbiAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJyMwMDAnIH19PlIkIHthcG9ydGVNZW5zYWx9PC9oMj5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlJlbmRpbWVudG8gQW51YWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17M31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMucmVuZGltZW50b0FudWFsICYmICdpbnB0LWVycm9yJ31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGltZW50b0FudWFsXCJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdyBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnOHB4JyB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbGN1bGFyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e29uQ2hhbmdlTGltcGFyfT5cbiAgICAgICAgICAgIExpbXBhclxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAge2xpc3RhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkcyBsaXN0YT17bGlzdGF9IC8+XG4gICAgICAgICAgPExpc3QgbGlzdGE9e2xpc3RhfSAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1DYWxjXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})