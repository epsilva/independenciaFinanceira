webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Menu/Navigation.tsx":
/*!********************************************!*\
  !*** ./src/components/Menu/Navigation.tsx ***!
  \********************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Navigation\", function() { return Navigation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/Menu/MenuItem.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/Menu/styles.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/Menu/Navigation.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar variants = {\n  open: {\n    transition: {\n      staggerChildren: 0.07,\n      delayChildren: 0.2\n    }\n  },\n  closed: {\n    transition: {\n      staggerChildren: 0.05,\n      staggerDirection: -1\n    }\n  }\n};\nvar Navigation = function Navigation(_ref) {\n  var toggle = _ref.toggle;\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"AnimateSharedLayout\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Ul\"], {\n    variants: variants,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, itemIds.map(function (menu) {\n    return __jsx(\"div\", {\n      onClick: toggle,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }\n    }, __jsx(_MenuItem__WEBPACK_IMPORTED_MODULE_2__[\"MenuItem\"], {\n      menu: menu,\n      key: menu.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }\n    }));\n  })));\n};\n_c = Navigation;\nvar itemIds = [{\n  id: 1,\n  rota: '/',\n  titulo: 'Home'\n}, {\n  id: 2,\n  rota: '/formcalc',\n  titulo: 'Independência Financeira'\n}];\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9OYXZpZ2F0aW9uLnRzeD9lMGZlIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwib3BlbiIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkZWxheUNoaWxkcmVuIiwiY2xvc2VkIiwic3RhZ2dlckRpcmVjdGlvbiIsIk5hdmlnYXRpb24iLCJ0b2dnbGUiLCJpdGVtSWRzIiwibWFwIiwibWVudSIsImlkIiwicm90YSIsInRpdHVsbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNmQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFO0FBQUVDLHFCQUFlLEVBQUUsSUFBbkI7QUFBeUJDLG1CQUFhLEVBQUU7QUFBeEM7QUFEUixHQURTO0FBSWZDLFFBQU0sRUFBRTtBQUNOSCxjQUFVLEVBQUU7QUFBRUMscUJBQWUsRUFBRSxJQUFuQjtBQUF5Qkcsc0JBQWdCLEVBQUUsQ0FBQztBQUE1QztBQUROO0FBSk8sQ0FBakI7QUFTTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLFNBQ3hCLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMENBQUQ7QUFBSSxZQUFRLEVBQUVSLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFBQyxJQUFJO0FBQUEsV0FDZjtBQUFLLGFBQU8sRUFBRUgsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFVLFVBQUksRUFBRUcsSUFBaEI7QUFBc0IsU0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURlO0FBQUEsR0FBaEIsQ0FESCxDQURGLENBRHdCO0FBQUEsQ0FBbkI7S0FBTUwsVTtBQVliLElBQU1FLE9BQU8sR0FBRyxDQUNkO0FBQ0VHLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxHQUZSO0FBR0VDLFFBQU0sRUFBRTtBQUhWLENBRGMsRUFNZDtBQUNFRixJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsV0FGUjtBQUdFQyxRQUFNLEVBQUU7QUFIVixDQU5jLENBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9OYXZpZ2F0aW9uLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVNoYXJlZExheW91dCB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vTWVudUl0ZW0nXG5pbXBvcnQgeyBVbCB9IGZyb20gJy4vc3R5bGVzJ1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgb3Blbjoge1xuICAgIHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjA3LCBkZWxheUNoaWxkcmVuOiAwLjIgfVxuICB9LFxuICBjbG9zZWQ6IHtcbiAgICB0cmFuc2l0aW9uOiB7IHN0YWdnZXJDaGlsZHJlbjogMC4wNSwgc3RhZ2dlckRpcmVjdGlvbjogLTEgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKHsgdG9nZ2xlIH0pID0+IChcbiAgPEFuaW1hdGVTaGFyZWRMYXlvdXQ+XG4gICAgPFVsIHZhcmlhbnRzPXt2YXJpYW50c30+XG4gICAgICB7aXRlbUlkcy5tYXAobWVudSA9PiAoXG4gICAgICAgIDxkaXYgb25DbGljaz17dG9nZ2xlfT5cbiAgICAgICAgICA8TWVudUl0ZW0gbWVudT17bWVudX0ga2V5PXttZW51LmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvVWw+XG4gIDwvQW5pbWF0ZVNoYXJlZExheW91dD5cbilcblxuY29uc3QgaXRlbUlkcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHJvdGE6ICcvJyxcbiAgICB0aXR1bG86ICdIb21lJ1xuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgcm90YTogJy9mb3JtY2FsYycsXG4gICAgdGl0dWxvOiAnSW5kZXBlbmTDqm5jaWEgRmluYW5jZWlyYSdcbiAgfVxuXVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/Navigation.tsx\n");

/***/ })

})