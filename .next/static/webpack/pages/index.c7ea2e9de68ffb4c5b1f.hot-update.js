webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/independenciaFinanceira/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      parceiro = _useState[0],\n      setParceiro = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function load() {\n      return _load.apply(this, arguments);\n    }\n\n    function _load() {\n      _load = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.github.com/users/hugos94');\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setParceiro({\n                  avatar: data.avatar_url,\n                  url: data.html_url,\n                  name: data.name\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _load.apply(this, arguments);\n    }\n\n    load();\n  }, []);\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerIntro\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"descricao\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, \"Aqui diponibilizamos algumas ferramentas que auxiliam simula\\xE7\\xF5es de investimentos\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/formcalc\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Entre e fa\\xE7a sua simula\\xE7\\xE3o.\")))), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, \"Por que investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Existem v\\xE1rios m\\xF3tivos dos quais voc\\xEA deveria ao menos pensar em investir seu dinheiro. Por exemplo:\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, \"Seu dinheiro ir\\xE1 trabalhar por voc\\xEA.\"), \"Claro, que a curto prazo possa ser que n\\xE3o tenha grandes retornos, mas se voc\\xEA tiver consist\\xEAncia e pesist\\xEAncia, no longo prazo haver\\xE1 um \\\"pote de ouro\\\" esperando por voc\\xEA.\")));\n};\n\n_s(Home, \"1ECvvNcJnnLoTUcHzADrF60SxT8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhcmNlaXJvIiwic2V0UGFyY2Vpcm8iLCJ1c2VFZmZlY3QiLCJsb2FkIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXZhdGFyIiwiYXZhdGFyX3VybCIsInVybCIsImh0bWxfdXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQVFBLElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxFQURiO0FBQUEsTUFDcEJDLFFBRG9CO0FBQUEsTUFDVkMsV0FEVTs7QUFFM0JDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0NDLElBREQ7QUFBQTtBQUFBOztBQUFBO0FBQUEsK0xBQ2Q7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3lCQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsc0NBQVYsQ0FEekI7O0FBQUE7QUFBQTtBQUNVQyxvQkFEVixvQkFDVUEsSUFEVjtBQUVFTCwyQkFBVyxDQUFDO0FBQ1ZNLHdCQUFNLEVBQUVELElBQUksQ0FBQ0UsVUFESDtBQUVWQyxxQkFBRyxFQUFFSCxJQUFJLENBQUNJLFFBRkE7QUFHVkMsc0JBQUksRUFBRUwsSUFBSSxDQUFDSztBQUhELGlCQUFELENBQVg7O0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEYztBQUFBO0FBQUE7O0FBVWRSLFFBQUk7QUFDTCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtGQURGLEVBS0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURGLENBREYsQ0FMRixDQURGLEVBWUUsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUhBRkYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFERixxTUFORixDQVpGLENBREY7QUF1Q0QsQ0F0REQ7O0dBQU1MLEk7O0tBQUFBLEk7QUF3RFNBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcbmltcG9ydCB7IENvbnRhaW5lciwgRGl2UGFnZSwgQ2FyZCwgQ29udGFpbmVySW50cm8sIENvbnRhaW5lckRlc2MgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgUGFyY2Vpcm8ge1xuICBhdmF0YXI6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYXJjZWlybywgc2V0UGFyY2Vpcm9dID0gdXNlU3RhdGU8UGFyY2Vpcm8+KClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvaHVnb3M5NCcpXG4gICAgICBzZXRQYXJjZWlybyh7XG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXJfdXJsLFxuICAgICAgICB1cmw6IGRhdGEuaHRtbF91cmwsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lckludHJvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmljYW9cIj5cbiAgICAgICAgICBBcXVpIGRpcG9uaWJpbGl6YW1vcyBhbGd1bWFzIGZlcnJhbWVudGFzIHF1ZSBhdXhpbGlhbSBzaW11bGHDp8O1ZXMgZGVcbiAgICAgICAgICBpbnZlc3RpbWVudG9zXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9mb3JtY2FsY1wiPlxuICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgPHNwYW4+RW50cmUgZSBmYcOnYSBzdWEgc2ltdWxhw6fDo28uPC9zcGFuPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Db250YWluZXJJbnRybz5cbiAgICAgIDxDb250YWluZXJEZXNjPlxuICAgICAgICA8c3Ryb25nPlBvciBxdWUgaW52ZXN0aXI/PC9zdHJvbmc+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIEV4aXN0ZW0gdsOhcmlvcyBtw7N0aXZvcyBkb3MgcXVhaXMgdm9jw6ogZGV2ZXJpYSBhbyBtZW5vcyBwZW5zYXIgZW1cbiAgICAgICAgICBpbnZlc3RpciBzZXUgZGluaGVpcm8uIFBvciBleGVtcGxvOlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzdHJvbmc+U2V1IGRpbmhlaXJvIGlyw6EgdHJhYmFsaGFyIHBvciB2b2PDqi48L3N0cm9uZz5cbiAgICAgICAgICBDbGFybywgcXVlIGEgY3VydG8gcHJhem8gcG9zc2Egc2VyIHF1ZSBuw6NvIHRlbmhhIGdyYW5kZXMgcmV0b3Jub3MsIG1hc1xuICAgICAgICAgIHNlIHZvY8OqIHRpdmVyIGNvbnNpc3TDqm5jaWEgZSBwZXNpc3TDqm5jaWEsIG5vIGxvbmdvIHByYXpvIGhhdmVyw6EgdW0gXCJwb3RlIGRlIG91cm9cIlxuICAgICAgICAgIGVzcGVyYW5kbyBwb3Igdm9jw6ouXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvQ29udGFpbmVyRGVzYz5cblxuICAgICAgey8qIDxEaXZQYWdlPlBhcmNlaXJvczwvRGl2UGFnZT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3RldG9maWkudmVyY2VsLmFwcFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBuYW1lPXtwYXJjZWlybz8ubmFtZX1cbiAgICAgICAgICBzaXplPVwiNjBcIlxuICAgICAgICAgIGluaXRpYWxzPVwiMlwiXG4gICAgICAgICAgc3JjPXtwYXJjZWlybz8uYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgPC9hPiAqL31cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})