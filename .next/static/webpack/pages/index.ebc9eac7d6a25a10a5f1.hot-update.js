webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/independenciaFinanceira/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      parceiro = _useState[0],\n      setParceiro = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function load() {\n      return _load.apply(this, arguments);\n    }\n\n    function _load() {\n      _load = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.github.com/users/hugos94');\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setParceiro({\n                  avatar: data.avatar_url,\n                  url: data.html_url,\n                  name: data.name\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _load.apply(this, arguments);\n    }\n\n    load();\n  }, []);\n\n  function scrollFunction() {\n    console.log(document.scrollingElement.scrollTop);\n\n    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {\n      document.getElementById('header').style.background = 'transparent';\n    } else {\n      document.getElementById('header').style.background = '#000';\n    }\n  }\n\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    onScroll: scrollFunction,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerIntro\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"descricao\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Aqui diponibilizamos algumas ferramentas que auxiliam simula\\xE7\\xF5es de investimentos\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/formcalc\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Entre e fa\\xE7a sua simula\\xE7\\xE3o.\")))), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivPage\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Existem v\\xE1rios m\\xF3tivos dos quais voc\\xEA deveria ao menos pensar em investir seu dinheiro. Por exemplo:\")), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"Por que investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Seu dinheiro ir\\xE1 trabalhar por voc\\xEA. \"), \"Claro, que a curto prazo possa ser que n\\xE3o tenha grandes retornos, mas se voc\\xEA tiver consist\\xEAncia e pesist\\xEAncia, no longo prazo haver\\xE1 um \\\"pote de ouro\\\" esperando por voc\\xEA.\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Que tal ter liberdade financeira? \"), \"Quem \\xE9 que n\\xE3o deseja ter a t\\xE3o sonhada liberdade financeira? Ou voc\\xEA deseja trabalhar por toda a sua vida?\")), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Quando devo come\\xE7ar a investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"J\\xE1 pensou nisso? Que tal come\\xE7ar agora? \"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }), \"\\\"O melhor momento foi h\\xE1 uns 20 ou 30 anos. O segundo melhor momento \\xE9 agora.\\\" - Prov\\xE9rbio chin\\xEAs.\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Ent\\xE3o, o que voc\\xEA est\\xE1 esperando?\")))));\n};\n\n_s(Home, \"1ECvvNcJnnLoTUcHzADrF60SxT8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhcmNlaXJvIiwic2V0UGFyY2Vpcm8iLCJ1c2VFZmZlY3QiLCJsb2FkIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXZhdGFyIiwiYXZhdGFyX3VybCIsInVybCIsImh0bWxfdXJsIiwibmFtZSIsInNjcm9sbEZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50Iiwic2Nyb2xsaW5nRWxlbWVudCIsInNjcm9sbFRvcCIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQVNBOztBQVFBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxFQURiO0FBQUEsTUFDcEJDLFFBRG9CO0FBQUEsTUFDVkMsV0FEVTs7QUFFM0JDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLElBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsK0xBQ2Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsc0NBQVYsQ0FEekI7O0FBQUE7QUFBQTtBQUNVQyxvQkFEVixvQkFDVUEsSUFEVjtBQUVFTCwyQkFBVyxDQUFDO0FBQ1ZNLHdCQUFNLEVBQUVELElBQUksQ0FBQ0UsVUFESDtBQUVWQyxxQkFBRyxFQUFFSCxJQUFJLENBQUNJLFFBRkE7QUFHVkMsc0JBQUksRUFBRUwsSUFBSSxDQUFDSztBQUhELGlCQUFELENBQVg7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBVWRSLFFBQUk7QUFDTCxHQVhRLEVBV04sRUFYTSxDQUFUOztBQWFBLFdBQVNTLGNBQVQsR0FBMEI7QUFDeEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFRLENBQUNDLGdCQUFULENBQTBCQyxTQUF0Qzs7QUFDQSxRQUNFRixRQUFRLENBQUNHLElBQVQsQ0FBY0QsU0FBZCxHQUEwQixFQUExQixJQUNBRixRQUFRLENBQUNJLGVBQVQsQ0FBeUJGLFNBQXpCLEdBQXFDLEVBRnZDLEVBR0U7QUFDQUYsY0FBUSxDQUFDSyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxDQUF3Q0MsVUFBeEMsR0FBcUQsYUFBckQ7QUFDRCxLQUxELE1BS087QUFDTFAsY0FBUSxDQUFDSyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxDQUF3Q0MsVUFBeEMsR0FBcUQsTUFBckQ7QUFDRDtBQUNGOztBQUVELFNBQ0UsTUFBQyw0REFBRDtBQUFXLFlBQVEsRUFBRVYsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFDLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBREYsRUFLRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNENBREYsQ0FERixDQUxGLENBREYsRUFZRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFIQURGLENBWkYsRUFrQkUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQURGLHFNQUZGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsNEhBVEYsQ0FERixFQWlCRSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLGFBQVMsRUFBQyxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0RBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYscUhBRkYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsRUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFERixDQVRGLENBakJGLENBbEJGLENBREY7QUErREQsQ0ExRkQ7O0dBQU1kLEk7O0tBQUFBLEk7QUE0RlNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgRGl2UGFnZSxcbiAgQ2FyZCxcbiAgQ29udGFpbmVySW50cm8sXG4gIENvbnRhaW5lckRlc2MsXG4gIENhcmREZXNjXG59IGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmludGVyZmFjZSBQYXJjZWlybyB7XG4gIGF2YXRhcjogc3RyaW5nXG4gIHVybDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xufVxuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3BhcmNlaXJvLCBzZXRQYXJjZWlyb10gPSB1c2VTdGF0ZTxQYXJjZWlybz4oKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9odWdvczk0JylcbiAgICAgIHNldFBhcmNlaXJvKHtcbiAgICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhcl91cmwsXG4gICAgICAgIHVybDogZGF0YS5odG1sX3VybCxcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxvYWQoKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiBzY3JvbGxGdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcClcbiAgICBpZiAoXG4gICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDUwIHx8XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNTBcbiAgICApIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50J1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuc3R5bGUuYmFja2dyb3VuZCA9ICcjMDAwJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBvblNjcm9sbD17c2Nyb2xsRnVuY3Rpb259PlxuICAgICAgPENvbnRhaW5lckludHJvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmljYW9cIj5cbiAgICAgICAgICBBcXVpIGRpcG9uaWJpbGl6YW1vcyBhbGd1bWFzIGZlcnJhbWVudGFzIHF1ZSBhdXhpbGlhbSBzaW11bGHDp8O1ZXMgZGVcbiAgICAgICAgICBpbnZlc3RpbWVudG9zXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9mb3JtY2FsY1wiPlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPGgzPkVudHJlIGUgZmHDp2Egc3VhIHNpbXVsYcOnw6NvLjwvaDM+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0NvbnRhaW5lckludHJvPlxuICAgICAgPERpdlBhZ2U+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIEV4aXN0ZW0gdsOhcmlvcyBtw7N0aXZvcyBkb3MgcXVhaXMgdm9jw6ogZGV2ZXJpYSBhbyBtZW5vcyBwZW5zYXIgZW1cbiAgICAgICAgICBpbnZlc3RpciBzZXUgZGluaGVpcm8uIFBvciBleGVtcGxvOlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0RpdlBhZ2U+XG4gICAgICA8Q29udGFpbmVyRGVzYz5cbiAgICAgICAgPENhcmREZXNjPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGl0bGVcIj5Qb3IgcXVlIGludmVzdGlyPzwvc3Ryb25nPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz5TZXUgZGluaGVpcm8gaXLDoSB0cmFiYWxoYXIgcG9yIHZvY8OqLiA8L3N0cm9uZz5cbiAgICAgICAgICAgIENsYXJvLCBxdWUgYSBjdXJ0byBwcmF6byBwb3NzYSBzZXIgcXVlIG7Do28gdGVuaGEgZ3JhbmRlcyByZXRvcm5vcyxcbiAgICAgICAgICAgIG1hcyBzZSB2b2PDqiB0aXZlciBjb25zaXN0w6puY2lhIGUgcGVzaXN0w6puY2lhLCBubyBsb25nbyBwcmF6byBoYXZlcsOhXG4gICAgICAgICAgICB1bSBcInBvdGUgZGUgb3Vyb1wiIGVzcGVyYW5kbyBwb3Igdm9jw6ouXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz5RdWUgdGFsIHRlciBsaWJlcmRhZGUgZmluYW5jZWlyYT8gPC9zdHJvbmc+XG4gICAgICAgICAgICBRdWVtIMOpIHF1ZSBuw6NvIGRlc2VqYSB0ZXIgYSB0w6NvIHNvbmhhZGEgbGliZXJkYWRlIGZpbmFuY2VpcmE/IE91XG4gICAgICAgICAgICB2b2PDqiBkZXNlamEgdHJhYmFsaGFyIHBvciB0b2RhIGEgc3VhIHZpZGE/XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0NhcmREZXNjPlxuXG4gICAgICAgIDxDYXJkRGVzYz5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRpdGxlXCI+UXVhbmRvIGRldm8gY29tZcOnYXIgYSBpbnZlc3Rpcj88L3N0cm9uZz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+SsOhIHBlbnNvdSBuaXNzbz8gUXVlIHRhbCBjb21lw6dhciBhZ29yYT8gPC9zdHJvbmc+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIFwiTyBtZWxob3IgbW9tZW50byBmb2kgaMOhIHVucyAyMCBvdSAzMCBhbm9zLiBPIHNlZ3VuZG8gbWVsaG9yIG1vbWVudG9cbiAgICAgICAgICAgIMOpIGFnb3JhLlwiIC0gUHJvdsOpcmJpbyBjaGluw6pzLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+RW50w6NvLCBvIHF1ZSB2b2PDqiBlc3TDoSBlc3BlcmFuZG8/PC9zdHJvbmc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L0NhcmREZXNjPlxuICAgICAgPC9Db250YWluZXJEZXNjPlxuXG4gICAgICB7LyogPERpdlBhZ2U+UGFyY2Vpcm9zPC9EaXZQYWdlPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGV0b2ZpaS52ZXJjZWwuYXBwXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxBdmF0YXJcbiAgICAgICAgICByb3VuZFxuICAgICAgICAgIG5hbWU9e3BhcmNlaXJvPy5uYW1lfVxuICAgICAgICAgIHNpemU9XCI2MFwiXG4gICAgICAgICAgaW5pdGlhbHM9XCIyXCJcbiAgICAgICAgICBzcmM9e3BhcmNlaXJvPy5hdmF0YXJ9XG4gICAgICAgIC8+XG4gICAgICA8L2E+ICovfVxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})