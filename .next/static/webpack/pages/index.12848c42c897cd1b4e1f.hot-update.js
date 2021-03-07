webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/independenciaFinanceira/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      parceiro = _useState[0],\n      setParceiro = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function load() {\n      return _load.apply(this, arguments);\n    }\n\n    function _load() {\n      _load = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.github.com/users/hugos94');\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setParceiro({\n                  avatar: data.avatar_url,\n                  url: data.html_url,\n                  name: data.name\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _load.apply(this, arguments);\n    }\n\n    load();\n  }, []);\n\n  function scrollFunction() {\n    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {\n      console.log(document.getElementById('header'));\n    } else {\n      console.log(document.getElementById('header'));\n    }\n  }\n\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    onScroll: scrollFunction,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerIntro\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"descricao\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, \"Aqui diponibilizamos algumas ferramentas que auxiliam simula\\xE7\\xF5es de investimentos\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/formcalc\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, \"Entre e fa\\xE7a sua simula\\xE7\\xE3o.\")))), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivPage\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"Existem v\\xE1rios m\\xF3tivos dos quais voc\\xEA deveria ao menos pensar em investir seu dinheiro. Por exemplo:\")), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, \"Por que investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, \"Seu dinheiro ir\\xE1 trabalhar por voc\\xEA. \"), \"Claro, que a curto prazo possa ser que n\\xE3o tenha grandes retornos, mas se voc\\xEA tiver consist\\xEAncia e pesist\\xEAncia, no longo prazo haver\\xE1 um \\\"pote de ouro\\\" esperando por voc\\xEA.\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Que tal ter liberdade financeira? \"), \"Quem \\xE9 que n\\xE3o deseja ter a t\\xE3o sonhada liberdade financeira? Ou voc\\xEA deseja trabalhar por toda a sua vida?\")), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, \"Quando devo come\\xE7ar a investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, \"J\\xE1 pensou nisso? Que tal come\\xE7ar agora? \"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }), \"\\\"O melhor momento foi h\\xE1 uns 20 ou 30 anos. O segundo melhor momento \\xE9 agora.\\\" - Prov\\xE9rbio chin\\xEAs.\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 13\n    }\n  }, \"Ent\\xE3o, o que voc\\xEA est\\xE1 esperando?\")))));\n};\n\n_s(Home, \"1ECvvNcJnnLoTUcHzADrF60SxT8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhcmNlaXJvIiwic2V0UGFyY2Vpcm8iLCJ1c2VFZmZlY3QiLCJsb2FkIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXZhdGFyIiwiYXZhdGFyX3VybCIsInVybCIsImh0bWxfdXJsIiwibmFtZSIsInNjcm9sbEZ1bmN0aW9uIiwiZG9jdW1lbnQiLCJib2R5Iiwic2Nyb2xsVG9wIiwiZG9jdW1lbnRFbGVtZW50IiwiY29uc29sZSIsImxvZyIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBU0E7O0FBUUEsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLEVBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUUzQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsSUFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrTEFDZDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxzQ0FBVixDQUR6Qjs7QUFBQTtBQUFBO0FBQ1VDLG9CQURWLG9CQUNVQSxJQURWO0FBRUVMLDJCQUFXLENBQUM7QUFDVk0sd0JBQU0sRUFBRUQsSUFBSSxDQUFDRSxVQURIO0FBRVZDLHFCQUFHLEVBQUVILElBQUksQ0FBQ0ksUUFGQTtBQUdWQyxzQkFBSSxFQUFFTCxJQUFJLENBQUNLO0FBSEQsaUJBQUQsQ0FBWDs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFVZFIsUUFBSTtBQUNMLEdBWFEsRUFXTixFQVhNLENBQVQ7O0FBYUEsV0FBU1MsY0FBVCxHQUEwQjtBQUN4QixRQUNFQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsU0FBZCxHQUEwQixFQUExQixJQUNBRixRQUFRLENBQUNHLGVBQVQsQ0FBeUJELFNBQXpCLEdBQXFDLEVBRnZDLEVBR0U7QUFDQUUsYUFBTyxDQUFDQyxHQUFSLENBQVlMLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixRQUF4QixDQUFaO0FBQ0QsS0FMRCxNQUtPO0FBQ0xGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBWjtBQUNEO0FBQ0Y7O0FBRUQsU0FDRSxNQUFDLDREQUFEO0FBQVcsWUFBUSxFQUFFUCxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRkFERixFQUtFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERixDQURGLENBTEYsQ0FERixFQVlFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBREYsQ0FaRixFQWtCRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbURBREYscU1BRkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERiw0SEFURixDQURGLEVBaUJFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzREFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixxSEFGRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQURGLENBVEYsQ0FqQkYsQ0FsQkYsQ0FERjtBQStERCxDQXpGRDs7R0FBTWQsSTs7S0FBQUEsSTtBQTJGU0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBBdmF0YXIgZnJvbSAncmVhY3QtYXZhdGFyJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBEaXZQYWdlLFxuICBDYXJkLFxuICBDb250YWluZXJJbnRybyxcbiAgQ29udGFpbmVyRGVzYyxcbiAgQ2FyZERlc2Ncbn0gZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW50ZXJmYWNlIFBhcmNlaXJvIHtcbiAgYXZhdGFyOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbcGFyY2Vpcm8sIHNldFBhcmNlaXJvXSA9IHVzZVN0YXRlPFBhcmNlaXJvPigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2h1Z29zOTQnKVxuICAgICAgc2V0UGFyY2Vpcm8oe1xuICAgICAgICBhdmF0YXI6IGRhdGEuYXZhdGFyX3VybCxcbiAgICAgICAgdXJsOiBkYXRhLmh0bWxfdXJsLFxuICAgICAgICBuYW1lOiBkYXRhLm5hbWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgbG9hZCgpXG4gIH0sIFtdKVxuXG4gIGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xuICAgIGlmIChcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gNTAgfHxcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA1MFxuICAgICkge1xuICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIG9uU2Nyb2xsPXtzY3JvbGxGdW5jdGlvbn0+XG4gICAgICA8Q29udGFpbmVySW50cm8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaWNhb1wiPlxuICAgICAgICAgIEFxdWkgZGlwb25pYmlsaXphbW9zIGFsZ3VtYXMgZmVycmFtZW50YXMgcXVlIGF1eGlsaWFtIHNpbXVsYcOnw7VlcyBkZVxuICAgICAgICAgIGludmVzdGltZW50b3NcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8TGluayBocmVmPVwiL2Zvcm1jYWxjXCI+XG4gICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8aDM+RW50cmUgZSBmYcOnYSBzdWEgc2ltdWxhw6fDo28uPC9oMz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvQ29udGFpbmVySW50cm8+XG4gICAgICA8RGl2UGFnZT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgRXhpc3RlbSB2w6FyaW9zIG3Ds3Rpdm9zIGRvcyBxdWFpcyB2b2PDqiBkZXZlcmlhIGFvIG1lbm9zIHBlbnNhciBlbVxuICAgICAgICAgIGludmVzdGlyIHNldSBkaW5oZWlyby4gUG9yIGV4ZW1wbG86XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvRGl2UGFnZT5cbiAgICAgIDxDb250YWluZXJEZXNjPlxuICAgICAgICA8Q2FyZERlc2M+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0aXRsZVwiPlBvciBxdWUgaW52ZXN0aXI/PC9zdHJvbmc+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPlNldSBkaW5oZWlybyBpcsOhIHRyYWJhbGhhciBwb3Igdm9jw6ouIDwvc3Ryb25nPlxuICAgICAgICAgICAgQ2xhcm8sIHF1ZSBhIGN1cnRvIHByYXpvIHBvc3NhIHNlciBxdWUgbsOjbyB0ZW5oYSBncmFuZGVzIHJldG9ybm9zLFxuICAgICAgICAgICAgbWFzIHNlIHZvY8OqIHRpdmVyIGNvbnNpc3TDqm5jaWEgZSBwZXNpc3TDqm5jaWEsIG5vIGxvbmdvIHByYXpvIGhhdmVyw6FcbiAgICAgICAgICAgIHVtIFwicG90ZSBkZSBvdXJvXCIgZXNwZXJhbmRvIHBvciB2b2PDqi5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPlF1ZSB0YWwgdGVyIGxpYmVyZGFkZSBmaW5hbmNlaXJhPyA8L3N0cm9uZz5cbiAgICAgICAgICAgIFF1ZW0gw6kgcXVlIG7Do28gZGVzZWphIHRlciBhIHTDo28gc29uaGFkYSBsaWJlcmRhZGUgZmluYW5jZWlyYT8gT3VcbiAgICAgICAgICAgIHZvY8OqIGRlc2VqYSB0cmFiYWxoYXIgcG9yIHRvZGEgYSBzdWEgdmlkYT9cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvQ2FyZERlc2M+XG5cbiAgICAgICAgPENhcmREZXNjPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGl0bGVcIj5RdWFuZG8gZGV2byBjb21lw6dhciBhIGludmVzdGlyPzwvc3Ryb25nPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz5Kw6EgcGVuc291IG5pc3NvPyBRdWUgdGFsIGNvbWXDp2FyIGFnb3JhPyA8L3N0cm9uZz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgXCJPIG1lbGhvciBtb21lbnRvIGZvaSBow6EgdW5zIDIwIG91IDMwIGFub3MuIE8gc2VndW5kbyBtZWxob3IgbW9tZW50b1xuICAgICAgICAgICAgw6kgYWdvcmEuXCIgLSBQcm92w6lyYmlvIGNoaW7DqnMuXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz5FbnTDo28sIG8gcXVlIHZvY8OqIGVzdMOhIGVzcGVyYW5kbz88L3N0cm9uZz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvQ2FyZERlc2M+XG4gICAgICA8L0NvbnRhaW5lckRlc2M+XG5cbiAgICAgIHsvKiA8RGl2UGFnZT5QYXJjZWlyb3M8L0RpdlBhZ2U+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly90ZXRvZmlpLnZlcmNlbC5hcHBcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPEF2YXRhclxuICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgbmFtZT17cGFyY2Vpcm8/Lm5hbWV9XG4gICAgICAgICAgc2l6ZT1cIjYwXCJcbiAgICAgICAgICBpbml0aWFscz1cIjJcIlxuICAgICAgICAgIHNyYz17cGFyY2Vpcm8/LmF2YXRhcn1cbiAgICAgICAgLz5cbiAgICAgIDwvYT4gKi99XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})