webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MaksMoney.tsx":
/*!**************************************!*\
  !*** ./src/components/MaksMoney.tsx ***!
  \**************************************/
/*! exports provided: maskMoney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"maskMoney\", function() { return maskMoney; });\nvar maskMoney = function maskMoney(value) {\n  var v = value.replace(/\\D/g, '');\n  v = \"\".concat((v / 100).toFixed(2));\n  v = v.replace('.', ',');\n  v = v.replace(/(\\d)(\\d{3})(\\d{3}),/g, '$1.$2.$3,');\n  v = v.replace(/(\\d)(\\d{3}),/g, '$1.$2,');\n  return 'R$' + v;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFrc01vbmV5LnRzeD8zY2RjIl0sIm5hbWVzIjpbIm1hc2tNb25leSIsInZhbHVlIiwidiIsInJlcGxhY2UiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQUMsS0FBSyxFQUFJO0FBQ2hDLE1BQUlDLENBQUMsR0FBR0QsS0FBSyxDQUFDRSxPQUFOLENBQWMsS0FBZCxFQUFxQixFQUFyQixDQUFSO0FBQ0FELEdBQUMsYUFBTSxDQUFDQSxDQUFDLEdBQUcsR0FBTCxFQUFVRSxPQUFWLENBQWtCLENBQWxCLENBQU4sQ0FBRDtBQUNBRixHQUFDLEdBQUdBLENBQUMsQ0FBQ0MsT0FBRixDQUFVLEdBQVYsRUFBZSxHQUFmLENBQUo7QUFDQUQsR0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxzQkFBVixFQUFrQyxXQUFsQyxDQUFKO0FBQ0FELEdBQUMsR0FBR0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsZUFBVixFQUEyQixRQUEzQixDQUFKO0FBRUEsU0FBTyxPQUFPRCxDQUFkO0FBQ0QsQ0FSTSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01ha3NNb25leS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFza01vbmV5ID0gdmFsdWUgPT4ge1xuICBsZXQgdiA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJylcbiAgdiA9IGAkeyh2IC8gMTAwKS50b0ZpeGVkKDIpfWBcbiAgdiA9IHYucmVwbGFjZSgnLicsICcsJylcbiAgdiA9IHYucmVwbGFjZSgvKFxcZCkoXFxkezN9KShcXGR7M30pLC9nLCAnJDEuJDIuJDMsJylcbiAgdiA9IHYucmVwbGFjZSgvKFxcZCkoXFxkezN9KSwvZywgJyQxLiQyLCcpXG5cbiAgcmV0dXJuICdSJCcgKyB2XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MaksMoney.tsx\n");

/***/ })

})