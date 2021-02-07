webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/List */ \"./src/components/FormCalc/components/List/index.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('0,00'),\n      aporteMensal = _useState2[0],\n      setAporteMensal = _useState2[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues;\n\n  var onSubmit = function onSubmit(data) {\n    var redimentoMensal = parseFloat(Math.pow(1 + parseFloat(data.rendimentoAnual) / 100, 1 / 12) - 1);\n    var listaTemp = [];\n\n    for (var i = 0; i < 360; i++) {\n      if (i === 0) {\n        listaTemp.push({\n          rendimento: 0,\n          valorInicial: '000',\n          aporteFinal: parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'))\n        });\n      } else {\n        var aporteMe = parseFloat(aporteMensal.toString().replace('.', '').replace(',', '.'));\n        var rendimentoAtual = parseFloat(listaTemp[i - 1].aporteFinal * redimentoMensal);\n        listaTemp.push({\n          valorInicial: listaTemp[i - 1].aporteFinal,\n          rendimento: rendimentoAtual,\n          aporteFinal: aporteMe + listaTemp[i - 1].aporteFinal + rendimentoAtual\n        });\n      }\n    }\n\n    setLista(listaTemp);\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseInt(getValues('percentualAporte')) / 100;\n    var aporteMensal = parseFloat(percentualAporte * salarioMensal);\n\n    if (aporteMensal) {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])((aporteMensal * 100).toString()));\n      var rendaRestante = (salarioMensal - aporteMensal) * 100;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setAporteMensal(Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('aporteMensal', undefined);\n    setValue('rendaRestante', undefined);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    className: errors.salarioMensal && 'inpt-error',\n    type: \"text\",\n    name: \"salarioMensal\",\n    onChange: onChangeRemunaration,\n    ref: register({\n      required: true\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"h1\", {\n    style: {\n      color: '#FFF'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, \"R$ \", aporteMensal)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }, \"Rendimento Anual\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.rendimentoAnual && 'inpt-error',\n    type: \"text\",\n    name: \"rendimentoAnual\",\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Calcular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"button\",\n    value: \"Limpar\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 9\n    }\n  })), __jsx(_components_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    lista: lista,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(FormCalc, \"53+YS4yVu0hQeh+unpBy3I1lXJo=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VTdGF0ZSIsImxpc3RhIiwic2V0TGlzdGEiLCJhcG9ydGVNZW5zYWwiLCJzZXRBcG9ydGVNZW5zYWwiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJyZWRpbWVudG9NZW5zYWwiLCJwYXJzZUZsb2F0IiwicmVuZGltZW50b0FudWFsIiwibGlzdGFUZW1wIiwiaSIsInB1c2giLCJyZW5kaW1lbnRvIiwidmFsb3JJbmljaWFsIiwiYXBvcnRlRmluYWwiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJhcG9ydGVNZSIsInJlbmRpbWVudG9BdHVhbCIsImNhbGNBcG9ydGVNZW5zYWwiLCJzYWxhcmlvTWVuc2FsIiwicGVyY2VudHVhbEFwb3J0ZSIsInBhcnNlSW50IiwibWFza01vbmV5IiwicmVuZGFSZXN0YW50ZSIsIm9uQ2hhbmdlUmVtdW5hcmF0aW9uIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25DaGFuZ2VMaW1wYXIiLCJ1bmRlZmluZWQiLCJyZXF1aXJlZCIsIm1heExlbmd0aCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLFFBQWtCLEdBQUcsU0FBckJBLFFBQXFCLEdBQU07QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBZ0IsRUFBaEIsQ0FESDtBQUFBLE1BQ3hCQyxLQUR3QjtBQUFBLE1BQ2pCQyxRQURpQjs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxNQUFELENBRmpCO0FBQUEsTUFFeEJHLFlBRndCO0FBQUEsTUFFVkMsZUFGVTs7QUFBQSxpQkFVM0JDLCtEQUFPLEVBVm9CO0FBQUEsTUFJN0JDLE9B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QUVSLFFBQVEsQ0FBQztBQUFFK0IsY0FBUSxFQUFFLElBQVo7QUFBa0JDLGVBQVMsRUFBRTtBQUE3QixLQUFELENBTmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBTEYsQ0ExQkYsRUEyQ0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsVUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDRixFQTRDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxRQUEzQjtBQUFvQyxXQUFPLEVBQUVILGNBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1Q0YsQ0FERixFQStDRSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFFcEMsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0NGLENBREY7QUFtREQsQ0EzSEQ7O0dBQU1GLFE7VUFVQU0sdUQ7OztLQVZBTixRO0FBNkhTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm1DYWxjL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IG1hc2tNb25leSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFrc01vbmV5J1xuaW1wb3J0IExpc3QgZnJvbSAnLi9jb21wb25lbnRzL0xpc3QnXG5pbXBvcnQgeyBJU3RhdGVMaXN0YSwgSUZvcm1JbnB1dCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5jb25zdCBGb3JtQ2FsYzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtsaXN0YSwgc2V0TGlzdGFdID0gdXNlU3RhdGU8SVN0YXRlTGlzdGFbXT4oW10pXG4gIGNvbnN0IFthcG9ydGVNZW5zYWwsIHNldEFwb3J0ZU1lbnNhbF0gPSB1c2VTdGF0ZSgnMCwwMCcpXG4gIGNvbnN0IHtcbiAgICBjb250cm9sLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICByZWdpc3RlcixcbiAgICBzZXRWYWx1ZSxcbiAgICBlcnJvcnMsXG4gICAgZ2V0VmFsdWVzXG4gIH0gPSB1c2VGb3JtPElGb3JtSW5wdXQ+KClcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhOiBJRm9ybUlucHV0KSA9PiB7XG4gICAgY29uc3QgcmVkaW1lbnRvTWVuc2FsID0gcGFyc2VGbG9hdChcbiAgICAgICgxICsgcGFyc2VGbG9hdChkYXRhLnJlbmRpbWVudG9BbnVhbCkgLyAxMDApICoqICgxIC8gMTIpIC0gMVxuICAgIClcbiAgICBjb25zdCBsaXN0YVRlbXAgPSBbXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzYwOyBpKyspIHtcbiAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgIGxpc3RhVGVtcC5wdXNoKHtcbiAgICAgICAgICByZW5kaW1lbnRvOiAwLFxuICAgICAgICAgIHZhbG9ySW5pY2lhbDogJzAwMCcsXG4gICAgICAgICAgYXBvcnRlRmluYWw6IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICBhcG9ydGVNZW5zYWwudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJywnLCAnLicpXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYXBvcnRlTWUgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgIGFwb3J0ZU1lbnNhbC50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICAgICAgKVxuICAgICAgICBjb25zdCByZW5kaW1lbnRvQXR1YWwgPSBwYXJzZUZsb2F0KFxuICAgICAgICAgIGxpc3RhVGVtcFtpIC0gMV0uYXBvcnRlRmluYWwgKiByZWRpbWVudG9NZW5zYWxcbiAgICAgICAgKVxuICAgICAgICBsaXN0YVRlbXAucHVzaCh7XG4gICAgICAgICAgdmFsb3JJbmljaWFsOiBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsLFxuICAgICAgICAgIHJlbmRpbWVudG86IHJlbmRpbWVudG9BdHVhbCxcbiAgICAgICAgICBhcG9ydGVGaW5hbDogYXBvcnRlTWUgKyBsaXN0YVRlbXBbaSAtIDFdLmFwb3J0ZUZpbmFsICsgcmVuZGltZW50b0F0dWFsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICAgIHNldExpc3RhKGxpc3RhVGVtcClcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNBcG9ydGVNZW5zYWwoKSB7XG4gICAgY29uc3Qgc2FsYXJpb01lbnNhbCA9IHBhcnNlRmxvYXQoXG4gICAgICBnZXRWYWx1ZXMoJ3NhbGFyaW9NZW5zYWwnKS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICApXG4gICAgY29uc3QgcGVyY2VudHVhbEFwb3J0ZSA9IHBhcnNlSW50KGdldFZhbHVlcygncGVyY2VudHVhbEFwb3J0ZScpKSAvIDEwMFxuICAgIGNvbnN0IGFwb3J0ZU1lbnNhbCA9IHBhcnNlRmxvYXQocGVyY2VudHVhbEFwb3J0ZSAqIHNhbGFyaW9NZW5zYWwpXG5cbiAgICBpZiAoYXBvcnRlTWVuc2FsKSB7XG4gICAgICBzZXRBcG9ydGVNZW5zYWwobWFza01vbmV5KChhcG9ydGVNZW5zYWwgKiAxMDApLnRvU3RyaW5nKCkpKVxuICAgICAgY29uc3QgcmVuZGFSZXN0YW50ZSA9IChzYWxhcmlvTWVuc2FsIC0gYXBvcnRlTWVuc2FsKSAqIDEwMFxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkocmVuZGFSZXN0YW50ZS50b1N0cmluZygpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXBvcnRlTWVuc2FsKG1hc2tNb25leSgnMDAwJykpXG4gICAgICBzZXRWYWx1ZSgncmVuZGFSZXN0YW50ZScsIG1hc2tNb25leSgnMDAwJykpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VSZW11bmFyYXRpb24oZSkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgbWFza01vbmV5KGUudGFyZ2V0LnZhbHVlKSlcbiAgICBjYWxjQXBvcnRlTWVuc2FsKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlTGltcGFyKCkge1xuICAgIHNldFZhbHVlKCdzYWxhcmlvTWVuc2FsJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdwZXJjZW50dWFsQXBvcnRlJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdhcG9ydGVNZW5zYWwnLCB1bmRlZmluZWQpXG4gICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCB1bmRlZmluZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5TYWzDoXJpbyBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUiQgMCwwMFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnNhbGFyaW9NZW5zYWwgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJzYWxhcmlvTWVuc2FsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUmVtdW5hcmF0aW9ufVxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UGVyY2VudHVhbCBkZSBBcG9ydGU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTAwJVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17M31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtlcnJvcnMucGVyY2VudHVhbEFwb3J0ZSAmJiAnaW5wdC1lcnJvcid9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cInBlcmNlbnR1YWxBcG9ydGVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2FsY0Fwb3J0ZU1lbnNhbH1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlLCBtYXhMZW5ndGg6IDMgfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPkFwb3J0ZSBNZW5zYWw8L2xhYmVsPlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiAnI0ZGRicgfX0+UiQge2Fwb3J0ZU1lbnNhbH08L2gxPlxuICAgICAgICAgIDwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+UmVuZGltZW50byBBbnVhbDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5yZW5kaW1lbnRvQW51YWwgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJyZW5kaW1lbnRvQW51YWxcIlxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6IHRydWUsIG1heExlbmd0aDogMyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2FsY3VsYXJcIiAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTGltcGFyXCIgb25DbGljaz17b25DaGFuZ2VMaW1wYXJ9IC8+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxMaXN0IGxpc3RhPXtsaXN0YX0gLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNhbGNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})