webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/independenciaFinanceira/src/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      parceiro = _useState[0],\n      setParceiro = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function load() {\n      return _load.apply(this, arguments);\n    }\n\n    function _load() {\n      _load = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.github.com/users/hugos94');\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setParceiro({\n                  avatar: data.avatar_url,\n                  url: data.html_url,\n                  name: data.name\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _load.apply(this, arguments);\n    }\n\n    load();\n  }, []);\n\n  function scrollFunction() {\n    console.log(document);\n\n    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {\n      document.getElementById('header').style.background = 'transparent';\n    } else {\n      document.getElementById('header').style.background = '#000';\n    }\n  }\n\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    onScroll: scrollFunction,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerIntro\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    className: \"descricao\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, \"Aqui diponibilizamos algumas ferramentas que auxiliam simula\\xE7\\xF5es de investimentos\"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    href: \"/formcalc\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  }, \"Entre e fa\\xE7a sua simula\\xE7\\xE3o.\")))), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"DivPage\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, \"Existem v\\xE1rios m\\xF3tivos dos quais voc\\xEA deveria ao menos pensar em investir seu dinheiro. Por exemplo:\")), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"ContainerDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"Por que investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, \"Seu dinheiro ir\\xE1 trabalhar por voc\\xEA. \"), \"Claro, que a curto prazo possa ser que n\\xE3o tenha grandes retornos, mas se voc\\xEA tiver consist\\xEAncia e pesist\\xEAncia, no longo prazo haver\\xE1 um \\\"pote de ouro\\\" esperando por voc\\xEA.\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, \"Que tal ter liberdade financeira? \"), \"Quem \\xE9 que n\\xE3o deseja ter a t\\xE3o sonhada liberdade financeira? Ou voc\\xEA deseja trabalhar por toda a sua vida?\")), __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardDesc\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(\"strong\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"Quando devo come\\xE7ar a investir?\"), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, \"J\\xE1 pensou nisso? Que tal come\\xE7ar agora? \"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }), \"\\\"O melhor momento foi h\\xE1 uns 20 ou 30 anos. O segundo melhor momento \\xE9 agora.\\\" - Prov\\xE9rbio chin\\xEAs.\"), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 11\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 11\n    }\n  }, __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, \"Ent\\xE3o, o que voc\\xEA est\\xE1 esperando?\")))));\n};\n\n_s(Home, \"1ECvvNcJnnLoTUcHzADrF60SxT8=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInBhcmNlaXJvIiwic2V0UGFyY2Vpcm8iLCJ1c2VFZmZlY3QiLCJsb2FkIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXZhdGFyIiwiYXZhdGFyX3VybCIsInVybCIsImh0bWxfdXJsIiwibmFtZSIsInNjcm9sbEZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBU0E7O0FBUUEsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLEVBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUUzQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQ0MsSUFERDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrTEFDZDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDeUJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSxzQ0FBVixDQUR6Qjs7QUFBQTtBQUFBO0FBQ1VDLG9CQURWLG9CQUNVQSxJQURWO0FBRUVMLDJCQUFXLENBQUM7QUFDVk0sd0JBQU0sRUFBRUQsSUFBSSxDQUFDRSxVQURIO0FBRVZDLHFCQUFHLEVBQUVILElBQUksQ0FBQ0ksUUFGQTtBQUdWQyxzQkFBSSxFQUFFTCxJQUFJLENBQUNLO0FBSEQsaUJBQUQsQ0FBWDs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURjO0FBQUE7QUFBQTs7QUFVZFIsUUFBSTtBQUNMLEdBWFEsRUFXTixFQVhNLENBQVQ7O0FBYUEsV0FBU1MsY0FBVCxHQUEwQjtBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVo7O0FBQ0EsUUFDRUEsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsR0FBMEIsRUFBMUIsSUFDQUYsUUFBUSxDQUFDRyxlQUFULENBQXlCRCxTQUF6QixHQUFxQyxFQUZ2QyxFQUdFO0FBQ0FGLGNBQVEsQ0FBQ0ksY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsQ0FBd0NDLFVBQXhDLEdBQXFELGFBQXJEO0FBQ0QsS0FMRCxNQUtPO0FBQ0xOLGNBQVEsQ0FBQ0ksY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsQ0FBd0NDLFVBQXhDLEdBQXFELE1BQXJEO0FBQ0Q7QUFDRjs7QUFFRCxTQUNFLE1BQUMsNERBQUQ7QUFBVyxZQUFRLEVBQUVULGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtGQURGLEVBS0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRDQURGLENBREYsQ0FMRixDQURGLEVBWUUsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxSEFERixDQVpGLEVBa0JFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLE9BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFERixxTUFGRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLDRIQVRGLENBREYsRUFpQkUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsT0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNEQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLHFIQUZGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREYsQ0FURixDQWpCRixDQWxCRixDQURGO0FBK0RELENBMUZEOztHQUFNZCxJOztLQUFBQSxJO0FBNEZTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1hdmF0YXInXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIERpdlBhZ2UsXG4gIENhcmQsXG4gIENvbnRhaW5lckludHJvLFxuICBDb250YWluZXJEZXNjLFxuICBDYXJkRGVzY1xufSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZSdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbnRlcmZhY2UgUGFyY2Vpcm8ge1xuICBhdmF0YXI6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn1cblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtwYXJjZWlybywgc2V0UGFyY2Vpcm9dID0gdXNlU3RhdGU8UGFyY2Vpcm8+KClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkKCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvaHVnb3M5NCcpXG4gICAgICBzZXRQYXJjZWlybyh7XG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXJfdXJsLFxuICAgICAgICB1cmw6IGRhdGEuaHRtbF91cmwsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkKClcbiAgfSwgW10pXG5cbiAgZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coZG9jdW1lbnQpXG4gICAgaWYgKFxuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPiA1MCB8fFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IDUwXG4gICAgKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJykuc3R5bGUuYmFja2dyb3VuZCA9ICd0cmFuc3BhcmVudCdcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpLnN0eWxlLmJhY2tncm91bmQgPSAnIzAwMCdcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgb25TY3JvbGw9e3Njcm9sbEZ1bmN0aW9ufT5cbiAgICAgIDxDb250YWluZXJJbnRybz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpY2FvXCI+XG4gICAgICAgICAgQXF1aSBkaXBvbmliaWxpemFtb3MgYWxndW1hcyBmZXJyYW1lbnRhcyBxdWUgYXV4aWxpYW0gc2ltdWxhw6fDtWVzIGRlXG4gICAgICAgICAgaW52ZXN0aW1lbnRvc1xuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvZm9ybWNhbGNcIj5cbiAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgIDxoMz5FbnRyZSBlIGZhw6dhIHN1YSBzaW11bGHDp8Ojby48L2gzPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Db250YWluZXJJbnRybz5cbiAgICAgIDxEaXZQYWdlPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBFeGlzdGVtIHbDoXJpb3MgbcOzdGl2b3MgZG9zIHF1YWlzIHZvY8OqIGRldmVyaWEgYW8gbWVub3MgcGVuc2FyIGVtXG4gICAgICAgICAgaW52ZXN0aXIgc2V1IGRpbmhlaXJvLiBQb3IgZXhlbXBsbzpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9EaXZQYWdlPlxuICAgICAgPENvbnRhaW5lckRlc2M+XG4gICAgICAgIDxDYXJkRGVzYz5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cInRpdGxlXCI+UG9yIHF1ZSBpbnZlc3Rpcj88L3N0cm9uZz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+U2V1IGRpbmhlaXJvIGlyw6EgdHJhYmFsaGFyIHBvciB2b2PDqi4gPC9zdHJvbmc+XG4gICAgICAgICAgICBDbGFybywgcXVlIGEgY3VydG8gcHJhem8gcG9zc2Egc2VyIHF1ZSBuw6NvIHRlbmhhIGdyYW5kZXMgcmV0b3Jub3MsXG4gICAgICAgICAgICBtYXMgc2Ugdm9jw6ogdGl2ZXIgY29uc2lzdMOqbmNpYSBlIHBlc2lzdMOqbmNpYSwgbm8gbG9uZ28gcHJhem8gaGF2ZXLDoVxuICAgICAgICAgICAgdW0gXCJwb3RlIGRlIG91cm9cIiBlc3BlcmFuZG8gcG9yIHZvY8OqLlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+UXVlIHRhbCB0ZXIgbGliZXJkYWRlIGZpbmFuY2VpcmE/IDwvc3Ryb25nPlxuICAgICAgICAgICAgUXVlbSDDqSBxdWUgbsOjbyBkZXNlamEgdGVyIGEgdMOjbyBzb25oYWRhIGxpYmVyZGFkZSBmaW5hbmNlaXJhPyBPdVxuICAgICAgICAgICAgdm9jw6ogZGVzZWphIHRyYWJhbGhhciBwb3IgdG9kYSBhIHN1YSB2aWRhP1xuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9DYXJkRGVzYz5cblxuICAgICAgICA8Q2FyZERlc2M+XG4gICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0aXRsZVwiPlF1YW5kbyBkZXZvIGNvbWXDp2FyIGEgaW52ZXN0aXI/PC9zdHJvbmc+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPkrDoSBwZW5zb3Ugbmlzc28/IFF1ZSB0YWwgY29tZcOnYXIgYWdvcmE/IDwvc3Ryb25nPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBcIk8gbWVsaG9yIG1vbWVudG8gZm9pIGjDoSB1bnMgMjAgb3UgMzAgYW5vcy4gTyBzZWd1bmRvIG1lbGhvciBtb21lbnRvXG4gICAgICAgICAgICDDqSBhZ29yYS5cIiAtIFByb3bDqXJiaW8gY2hpbsOqcy5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPkVudMOjbywgbyBxdWUgdm9jw6ogZXN0w6EgZXNwZXJhbmRvPzwvc3Ryb25nPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9DYXJkRGVzYz5cbiAgICAgIDwvQ29udGFpbmVyRGVzYz5cblxuICAgICAgey8qIDxEaXZQYWdlPlBhcmNlaXJvczwvRGl2UGFnZT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3RldG9maWkudmVyY2VsLmFwcFwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgcm91bmRcbiAgICAgICAgICBuYW1lPXtwYXJjZWlybz8ubmFtZX1cbiAgICAgICAgICBzaXplPVwiNjBcIlxuICAgICAgICAgIGluaXRpYWxzPVwiMlwiXG4gICAgICAgICAgc3JjPXtwYXJjZWlybz8uYXZhdGFyfVxuICAgICAgICAvPlxuICAgICAgPC9hPiAqL31cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})