webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/FormCalc/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/FormCalc/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/FormCalc/styles.ts\");\n/* harmony import */ var _components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/MaksMoney */ \"./src/components/MaksMoney.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/FormCalc/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar FormCalc = function FormCalc() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      lista = _useState[0],\n      setLista = _useState[1];\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"])(),\n      control = _useForm.control,\n      handleSubmit = _useForm.handleSubmit,\n      register = _useForm.register,\n      setValue = _useForm.setValue,\n      errors = _useForm.errors,\n      getValues = _useForm.getValues;\n\n  var onSubmit = function onSubmit(data) {\n    console.log(data);\n    Array(2).forEach(function (el) {\n      alert(el);\n    });\n  };\n\n  function calcAporteMensal() {\n    var salarioMensal = parseFloat(getValues('salarioMensal').toString().replace('.', '').replace(',', '.'));\n    var percentualAporte = parseInt(getValues('percentualAporte')) / 100;\n    var aporteMensal = parseFloat(percentualAporte * salarioMensal);\n    console.log(salarioMensal);\n    console.log(aporteMensal);\n\n    if (aporteMensal) {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])((aporteMensal * 100).toString()));\n      var rendaRestante = (salarioMensal - aporteMensal) * 100;\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(rendaRestante.toString()));\n    } else {\n      setValue('aporteMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n      setValue('rendaRestante', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])('000'));\n    }\n  }\n\n  function onChangeRemunaration(e) {\n    setValue('salarioMensal', Object(_components_MaksMoney__WEBPACK_IMPORTED_MODULE_3__[\"maskMoney\"])(e.target.value));\n    calcAporteMensal();\n  }\n\n  function onChangeLimpar() {\n    setValue('salarioMensal', undefined);\n    setValue('percentualAporte', undefined);\n    setValue('aporteMensal', undefined);\n    setValue('rendaRestante', undefined);\n  }\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }, \"Sal\\xE1rio Mensal\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    className: errors.salarioMensal && 'inpt-error',\n    type: \"text\",\n    name: \"salarioMensal\",\n    onChange: onChangeRemunaration,\n    ref: register({\n      required: true\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Percentual de Aporte\"), __jsx(\"input\", {\n    placeholder: \"100%\",\n    maxLength: 3,\n    className: errors.percentualAporte && 'inpt-error',\n    type: \"text\",\n    name: \"percentualAporte\",\n    onChange: calcAporteMensal,\n    ref: register({\n      required: true,\n      maxLength: 3\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Aporte Mensal\"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"aporteMensal\",\n    ref: register(),\n    placeholder: \"R$ 0,00\",\n    disabled: true,\n    style: {\n      color: '#fff'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Column\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 11\n    }\n  }, __jsx(\"label\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 13\n    }\n  }, \"Renda Restante\"), __jsx(\"input\", {\n    placeholder: \"R$ 0,00\",\n    type: \"text\",\n    name: \"rendaRestante\",\n    ref: register(),\n    disabled: true,\n    style: {\n      color: '#fff'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 13\n    }\n  }))), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Calcular\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"button\",\n    value: \"Limpar\",\n    onClick: onChangeLimpar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(FormCalc, \"t2adw0LPsTXWYzXbrLxNZQNmS0g=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_1__[\"useForm\"]];\n});\n\n_c = FormCalc;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FormCalc);\n\nvar _c;\n\n$RefreshReg$(_c, \"FormCalc\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybUNhbGMvaW5kZXgudHN4PzQ3ZTQiXSwibmFtZXMiOlsiRm9ybUNhbGMiLCJ1c2VTdGF0ZSIsImxpc3RhIiwic2V0TGlzdGEiLCJ1c2VGb3JtIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJnZXRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiQXJyYXkiLCJmb3JFYWNoIiwiZWwiLCJhbGVydCIsImNhbGNBcG9ydGVNZW5zYWwiLCJzYWxhcmlvTWVuc2FsIiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwicmVwbGFjZSIsInBlcmNlbnR1YWxBcG9ydGUiLCJwYXJzZUludCIsImFwb3J0ZU1lbnNhbCIsIm1hc2tNb25leSIsInJlbmRhUmVzdGFudGUiLCJvbkNoYW5nZVJlbXVuYXJhdGlvbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlTGltcGFyIiwidW5kZWZpbmVkIiwicmVxdWlyZWQiLCJtYXhMZW5ndGgiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxJQUFNQSxRQUFrQixHQUFHLFNBQXJCQSxRQUFxQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsRUFBRCxDQURIO0FBQUEsTUFDeEJDLEtBRHdCO0FBQUEsTUFDakJDLFFBRGlCOztBQUFBLGlCQVMzQkMsK0RBQU8sRUFUb0I7QUFBQSxNQUc3QkMsT0FINkIsWUFHN0JBLE9BSDZCO0FBQUEsTUFJN0JDLFlBSjZCLFlBSTdCQSxZQUo2QjtBQUFBLE1BSzdCQyxRQUw2QixZQUs3QkEsUUFMNkI7QUFBQSxNQU03QkMsUUFONkIsWUFNN0JBLFFBTjZCO0FBQUEsTUFPN0JDLE1BUDZCLFlBTzdCQSxNQVA2QjtBQUFBLE1BUTdCQyxTQVI2QixZQVE3QkEsU0FSNkI7O0FBVy9CLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBc0I7QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0FHLFNBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0MsT0FBVCxDQUFpQixVQUFBQyxFQUFFLEVBQUk7QUFDckJDLFdBQUssQ0FBQ0QsRUFBRCxDQUFMO0FBQ0QsS0FGRDtBQUdELEdBTEQ7O0FBT0EsV0FBU0UsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBTUMsYUFBYSxHQUFHQyxVQUFVLENBQzlCWCxTQUFTLENBQUMsZUFBRCxDQUFULENBQTJCWSxRQUEzQixHQUFzQ0MsT0FBdEMsQ0FBOEMsR0FBOUMsRUFBbUQsRUFBbkQsRUFBdURBLE9BQXZELENBQStELEdBQS9ELEVBQW9FLEdBQXBFLENBRDhCLENBQWhDO0FBR0EsUUFBTUMsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ2YsU0FBUyxDQUFDLGtCQUFELENBQVYsQ0FBUixHQUEwQyxHQUFuRTtBQUNBLFFBQU1nQixZQUFZLEdBQUdMLFVBQVUsQ0FBQ0csZ0JBQWdCLEdBQUdKLGFBQXBCLENBQS9CO0FBRUFQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTSxhQUFaO0FBRUFQLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWSxZQUFaOztBQUVBLFFBQUlBLFlBQUosRUFBa0I7QUFDaEJsQixjQUFRLENBQUMsY0FBRCxFQUFpQm1CLHVFQUFTLENBQUMsQ0FBQ0QsWUFBWSxHQUFHLEdBQWhCLEVBQXFCSixRQUFyQixFQUFELENBQTFCLENBQVI7QUFDQSxVQUFNTSxhQUFhLEdBQUcsQ0FBQ1IsYUFBYSxHQUFHTSxZQUFqQixJQUFpQyxHQUF2RDtBQUNBbEIsY0FBUSxDQUFDLGVBQUQsRUFBa0JtQix1RUFBUyxDQUFDQyxhQUFhLENBQUNOLFFBQWQsRUFBRCxDQUEzQixDQUFSO0FBQ0QsS0FKRCxNQUlPO0FBQ0xkLGNBQVEsQ0FBQyxjQUFELEVBQWlCbUIsdUVBQVMsQ0FBQyxLQUFELENBQTFCLENBQVI7QUFDQW5CLGNBQVEsQ0FBQyxlQUFELEVBQWtCbUIsdUVBQVMsQ0FBQyxLQUFELENBQTNCLENBQVI7QUFDRDtBQUNGOztBQUVELFdBQVNFLG9CQUFULENBQThCQyxDQUE5QixFQUFpQztBQUMvQnRCLFlBQVEsQ0FBQyxlQUFELEVBQWtCbUIsdUVBQVMsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBM0IsQ0FBUjtBQUNBYixvQkFBZ0I7QUFDakI7O0FBRUQsV0FBU2MsY0FBVCxHQUEwQjtBQUN4QnpCLFlBQVEsQ0FBQyxlQUFELEVBQWtCMEIsU0FBbEIsQ0FBUjtBQUNBMUIsWUFBUSxDQUFDLGtCQUFELEVBQXFCMEIsU0FBckIsQ0FBUjtBQUNBMUIsWUFBUSxDQUFDLGNBQUQsRUFBaUIwQixTQUFqQixDQUFSO0FBQ0ExQixZQUFRLENBQUMsZUFBRCxFQUFrQjBCLFNBQWxCLENBQVI7QUFDRDs7QUFFRCxTQUNFO0FBQU0sWUFBUSxFQUFFNUIsWUFBWSxDQUFDSyxRQUFELENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFDRSxlQUFXLEVBQUMsU0FEZDtBQUVFLGFBQVMsRUFBRUYsTUFBTSxDQUFDVyxhQUFQLElBQXdCLFlBRnJDO0FBR0UsUUFBSSxFQUFDLE1BSFA7QUFJRSxRQUFJLEVBQUMsZUFKUDtBQUtFLFlBQVEsRUFBRVMsb0JBTFo7QUFNRSxPQUFHLEVBQUV0QixRQUFRLENBQUM7QUFBRTRCLGNBQVEsRUFBRTtBQUFaLEtBQUQsQ0FOZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVlFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUNFLGVBQVcsRUFBQyxNQURkO0FBRUUsYUFBUyxFQUFFLENBRmI7QUFHRSxhQUFTLEVBQUUxQixNQUFNLENBQUNlLGdCQUFQLElBQTJCLFlBSHhDO0FBSUUsUUFBSSxFQUFDLE1BSlA7QUFLRSxRQUFJLEVBQUMsa0JBTFA7QUFNRSxZQUFRLEVBQUVMLGdCQU5aO0FBT0UsT0FBRyxFQUFFWixRQUFRLENBQUM7QUFBRTRCLGNBQVEsRUFBRSxJQUFaO0FBQWtCQyxlQUFTLEVBQUU7QUFBN0IsS0FBRCxDQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVpGLENBREYsRUEwQkUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUMsY0FGUDtBQUdFLE9BQUcsRUFBRTdCLFFBQVEsRUFIZjtBQUlFLGVBQVcsRUFBQyxTQUpkO0FBS0UsWUFBUSxNQUxWO0FBTUUsU0FBSyxFQUFFO0FBQUU4QixXQUFLLEVBQUU7QUFBVCxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBWUUsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixFQUVFO0FBQ0UsZUFBVyxFQUFDLFNBRGQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFFBQUksRUFBQyxlQUhQO0FBSUUsT0FBRyxFQUFFOUIsUUFBUSxFQUpmO0FBS0UsWUFBUSxNQUxWO0FBTUUsU0FBSyxFQUFFO0FBQUU4QixXQUFLLEVBQUU7QUFBVCxLQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVpGLENBMUJGLEVBa0RFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLFVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsREYsRUFtREU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsUUFBM0I7QUFBb0MsV0FBTyxFQUFFSixjQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkRGLENBREYsQ0FERjtBQXlERCxDQTVHRDs7R0FBTWpDLFE7VUFTQUksdUQ7OztLQVRBSixRO0FBOEdTQSx1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm1DYWxjL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlRm9ybSwgQ29udHJvbGxlciB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2x1bW4gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IG1hc2tNb25leSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFrc01vbmV5J1xuXG5pbnRlcmZhY2UgSUZvcm1JbnB1dCB7XG4gIHNhbGFyaW9NZW5zYWw6IG51bWJlclxuICBwZXJjZW50dWFsQXBvcnRlOiBudW1iZXJcbiAgYXBvcnRlTWVuc2FsOiBudW1iZXJcbiAgcmVuZGFSZXN0YW50ZTogbnVtYmVyXG59XG5cbmNvbnN0IEZvcm1DYWxjOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2xpc3RhLCBzZXRMaXN0YV0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3Qge1xuICAgIGNvbnRyb2wsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIHJlZ2lzdGVyLFxuICAgIHNldFZhbHVlLFxuICAgIGVycm9ycyxcbiAgICBnZXRWYWx1ZXNcbiAgfSA9IHVzZUZvcm08SUZvcm1JbnB1dD4oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGE6IElGb3JtSW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIEFycmF5KDIpLmZvckVhY2goZWwgPT4ge1xuICAgICAgYWxlcnQoZWwpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNBcG9ydGVNZW5zYWwoKSB7XG4gICAgY29uc3Qgc2FsYXJpb01lbnNhbCA9IHBhcnNlRmxvYXQoXG4gICAgICBnZXRWYWx1ZXMoJ3NhbGFyaW9NZW5zYWwnKS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykucmVwbGFjZSgnLCcsICcuJylcbiAgICApXG4gICAgY29uc3QgcGVyY2VudHVhbEFwb3J0ZSA9IHBhcnNlSW50KGdldFZhbHVlcygncGVyY2VudHVhbEFwb3J0ZScpKSAvIDEwMFxuICAgIGNvbnN0IGFwb3J0ZU1lbnNhbCA9IHBhcnNlRmxvYXQocGVyY2VudHVhbEFwb3J0ZSAqIHNhbGFyaW9NZW5zYWwpXG5cbiAgICBjb25zb2xlLmxvZyhzYWxhcmlvTWVuc2FsKVxuXG4gICAgY29uc29sZS5sb2coYXBvcnRlTWVuc2FsKVxuXG4gICAgaWYgKGFwb3J0ZU1lbnNhbCkge1xuICAgICAgc2V0VmFsdWUoJ2Fwb3J0ZU1lbnNhbCcsIG1hc2tNb25leSgoYXBvcnRlTWVuc2FsICogMTAwKS50b1N0cmluZygpKSlcbiAgICAgIGNvbnN0IHJlbmRhUmVzdGFudGUgPSAoc2FsYXJpb01lbnNhbCAtIGFwb3J0ZU1lbnNhbCkgKiAxMDBcbiAgICAgIHNldFZhbHVlKCdyZW5kYVJlc3RhbnRlJywgbWFza01vbmV5KHJlbmRhUmVzdGFudGUudG9TdHJpbmcoKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZhbHVlKCdhcG9ydGVNZW5zYWwnLCBtYXNrTW9uZXkoJzAwMCcpKVxuICAgICAgc2V0VmFsdWUoJ3JlbmRhUmVzdGFudGUnLCBtYXNrTW9uZXkoJzAwMCcpKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlUmVtdW5hcmF0aW9uKGUpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIG1hc2tNb25leShlLnRhcmdldC52YWx1ZSkpXG4gICAgY2FsY0Fwb3J0ZU1lbnNhbCgpXG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZUxpbXBhcigpIHtcbiAgICBzZXRWYWx1ZSgnc2FsYXJpb01lbnNhbCcsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgncGVyY2VudHVhbEFwb3J0ZScsIHVuZGVmaW5lZClcbiAgICBzZXRWYWx1ZSgnYXBvcnRlTWVuc2FsJywgdW5kZWZpbmVkKVxuICAgIHNldFZhbHVlKCdyZW5kYVJlc3RhbnRlJywgdW5kZWZpbmVkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2x1bW4+XG4gICAgICAgICAgICA8bGFiZWw+U2Fsw6FyaW8gTWVuc2FsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlIkIDAsMDBcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Vycm9ycy5zYWxhcmlvTWVuc2FsICYmICdpbnB0LWVycm9yJ31cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwic2FsYXJpb01lbnNhbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVJlbXVuYXJhdGlvbn1cbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPlxuICAgICAgICAgICAgPGxhYmVsPlBlcmNlbnR1YWwgZGUgQXBvcnRlPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEwMCVcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17ZXJyb3JzLnBlcmNlbnR1YWxBcG9ydGUgJiYgJ2lucHQtZXJyb3InfVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwZXJjZW50dWFsQXBvcnRlXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NhbGNBcG9ydGVNZW5zYWx9XG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSwgbWF4TGVuZ3RoOiAzIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5BcG9ydGUgTWVuc2FsPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJhcG9ydGVNZW5zYWxcIlxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUiQgMCwwMFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnI2ZmZicgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj5cbiAgICAgICAgICAgIDxsYWJlbD5SZW5kYSBSZXN0YW50ZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSJCAwLDAwXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwicmVuZGFSZXN0YW50ZVwiXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgZGlzYWJsZWRcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDYWxjdWxhclwiIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJMaW1wYXJcIiBvbkNsaWNrPXtvbkNoYW5nZUxpbXBhcn0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ2FsY1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FormCalc/index.tsx\n");

/***/ })

})