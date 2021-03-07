webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
false,

/***/ "./node_modules/framer-motion/node_modules/popmotion/dist/popmotion.es.js":
false,

/***/ "./node_modules/framesync/dist/framesync.es.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
false,

/***/ "./node_modules/tslib/tslib.es6.js":
false,

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-avatar */ \"./node_modules/react-avatar/es/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ \"./node_modules/@material-ui/core/esm/Tooltip/index.js\");\n\n\n\nvar _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/independenciaFinanceira/src/components/Header/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nfunction Header() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function load() {\n      return _load.apply(this, arguments);\n    }\n\n    function _load() {\n      _load = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var _yield$axios$get, data;\n\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://api.github.com/users/epsilva');\n\n              case 2:\n                _yield$axios$get = _context.sent;\n                data = _yield$axios$get.data;\n                setUser({\n                  avatar: data.avatar_url,\n                  url: data.html_url,\n                  name: data.name\n                });\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _load.apply(this, arguments);\n    }\n\n    load();\n  }, []);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"HeaderContainer\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Ferramentas do Investidor\")), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    title: \"Entre em contato\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: user === null || user === void 0 ? void 0 : user.url,\n    target: \"_blank\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(react_avatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    size: \"60\",\n    name: (user === null || user === void 0 ? void 0 : user.name) || 'Esdras Pinheiro',\n    src: user === null || user === void 0 ? void 0 : user.avatar,\n    round: true,\n    initials: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Header, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9hZWViIl0sIm5hbWVzIjpbIkhlYWRlciIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJ1c2VFZmZlY3QiLCJsb2FkIiwiYXhpb3MiLCJnZXQiLCJkYXRhIiwiYXZhdGFyIiwiYXZhdGFyX3VybCIsInVybCIsImh0bWxfdXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFRQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLEVBRGhCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBR2hCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxhQUNDQyxJQUREO0FBQUE7QUFBQTs7QUFBQTtBQUFBLCtMQUNkO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN5QkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLHNDQUFWLENBRHpCOztBQUFBO0FBQUE7QUFDVUMsb0JBRFYsb0JBQ1VBLElBRFY7QUFFRUwsdUJBQU8sQ0FBQztBQUNOTSx3QkFBTSxFQUFFRCxJQUFJLENBQUNFLFVBRFA7QUFFTkMscUJBQUcsRUFBRUgsSUFBSSxDQUFDSSxRQUZKO0FBR05DLHNCQUFJLEVBQUVMLElBQUksQ0FBQ0s7QUFITCxpQkFBRCxDQUFQOztBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRGM7QUFBQTtBQUFBOztBQVVkUixRQUFJO0FBQ0wsR0FYUSxFQVdOLEVBWE0sQ0FBVDtBQWFBLFNBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsbUVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixDQURGLEVBS0UsTUFBQyxpRUFBRDtBQUFTLFNBQUssRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVILElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFUyxHQUFmO0FBQW9CLFVBQU0sRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBQyxJQURQO0FBRUUsUUFBSSxFQUFFLENBQUFULElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFVyxJQUFOLEtBQWMsaUJBRnRCO0FBR0UsT0FBRyxFQUFFWCxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRU8sTUFIYjtBQUlFLFNBQUssTUFKUDtBQUtFLFlBQVEsRUFBQyxHQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBTEYsQ0FERjtBQW1CRDs7R0FuQ1FULE07O0tBQUFBLE07QUFxQ01BLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcidcbmltcG9ydCB7IEhlYWRlckNvbnRhaW5lciB9IGZyb20gJy4vc3R5bGVzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBUb29sdGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2x0aXAnXG5cbmludGVyZmFjZSBVc2VyIHtcbiAgbmFtZTogc3RyaW5nXG4gIHVybDogc3RyaW5nXG4gIGF2YXRhcjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2Vwc2lsdmEnKVxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXJfdXJsLFxuICAgICAgICB1cmw6IGRhdGEuaHRtbF91cmwsXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsb2FkKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZGVyQ29udGFpbmVyPlxuICAgICAgPD5cbiAgICAgICAgey8qIDxNZW51IC8+ICovfVxuICAgICAgICA8aDM+RmVycmFtZW50YXMgZG8gSW52ZXN0aWRvcjwvaDM+XG4gICAgICA8Lz5cbiAgICAgIDxUb29sdGlwIHRpdGxlPVwiRW50cmUgZW0gY29udGF0b1wiPlxuICAgICAgICA8YSBocmVmPXt1c2VyPy51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgIHNpemU9XCI2MFwiXG4gICAgICAgICAgICBuYW1lPXt1c2VyPy5uYW1lIHx8ICdFc2RyYXMgUGluaGVpcm8nfVxuICAgICAgICAgICAgc3JjPXt1c2VyPy5hdmF0YXJ9XG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgaW5pdGlhbHM9XCIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgPC9IZWFkZXJDb250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/components/Menu/MenuItem.tsx":
false,

/***/ "./src/components/Menu/MenuToggle.tsx":
false,

/***/ "./src/components/Menu/Navigation.tsx":
false,

/***/ "./src/components/Menu/index.tsx":
false,

/***/ "./src/components/Menu/styles.tsx":
false,

/***/ "./src/components/Menu/use-dimensions.tsx":
false

})