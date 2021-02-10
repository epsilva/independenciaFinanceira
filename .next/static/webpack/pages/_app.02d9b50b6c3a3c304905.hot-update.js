webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Menu/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Menu/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _use_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-dimensions */ \"./src/components/Menu/use-dimensions.tsx\");\n/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuToggle */ \"./src/components/Menu/MenuToggle.tsx\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation */ \"./src/components/Menu/Navigation.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./src/components/Menu/styles.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/esdraspinheiro/Documents/Projetos/next-independencia-financeira/src/components/Menu/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar sidebar = {\n  open: function open() {\n    var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;\n    return {\n      clipPath: \"circle(\".concat(height * 2 + 200, \"px at 40px 40px)\"),\n      transition: {\n        type: 'spring',\n        stiffness: 20,\n        restDelta: 2\n      }\n    };\n  },\n  closed: {\n    clipPath: 'circle(30px at 40px 40px)',\n    transition: {\n      delay: 0.5,\n      type: 'spring',\n      stiffness: 400,\n      damping: 40\n    }\n  }\n};\n\nvar Menu = function Menu() {\n  _s();\n\n  var _useCycle = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useCycle\"])(false, true),\n      _useCycle2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useCycle, 2),\n      isOpen = _useCycle2[0],\n      toggleOpen = _useCycle2[1];\n\n  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useDimensions = Object(_use_dimensions__WEBPACK_IMPORTED_MODULE_3__[\"useDimensions\"])(containerRef),\n      height = _useDimensions.height;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!isOpen) {\n      setTimeout(function () {\n        setOpen(isOpen);\n      }, 1000);\n    } else {\n      setOpen(isOpen);\n    }\n  }, [isOpen]);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__[\"Nav\"], {\n    style: {\n      position: isOpen ? 'inherit' : 'absolute'\n    },\n    initial: false,\n    animate: isOpen ? 'open' : 'closed',\n    custom: height,\n    ref: containerRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"background\",\n    variants: sidebar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_5__[\"Navigation\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }), __jsx(_MenuToggle__WEBPACK_IMPORTED_MODULE_4__[\"MenuToggle\"], {\n    toggle: function toggle() {\n      return toggleOpen();\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Menu, \"l8L65OCkXxnRGYXL0sqRZHxtqH0=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useCycle\"], _use_dimensions__WEBPACK_IMPORTED_MODULE_3__[\"useDimensions\"]];\n});\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3g/ODdjNSJdLCJuYW1lcyI6WyJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJNZW51IiwidXNlQ3ljbGUiLCJpc09wZW4iLCJ0b2dnbGVPcGVuIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwidXNlRGltZW5zaW9ucyIsInVzZVN0YXRlIiwic2V0T3BlbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxNQUFJLEVBQUU7QUFBQSxRQUFDQyxNQUFELHVFQUFVLElBQVY7QUFBQSxXQUFvQjtBQUN4QkMsY0FBUSxtQkFBWUQsTUFBTSxHQUFHLENBQVQsR0FBYSxHQUF6QixxQkFEZ0I7QUFFeEJFLGdCQUFVLEVBQUU7QUFDVkMsWUFBSSxFQUFFLFFBREk7QUFFVkMsaUJBQVMsRUFBRSxFQUZEO0FBR1ZDLGlCQUFTLEVBQUU7QUFIRDtBQUZZLEtBQXBCO0FBQUEsR0FEUTtBQVNkQyxRQUFNLEVBQUU7QUFDTkwsWUFBUSxFQUFFLDJCQURKO0FBRU5DLGNBQVUsRUFBRTtBQUNWSyxXQUFLLEVBQUUsR0FERztBQUVWSixVQUFJLEVBQUUsUUFGSTtBQUdWQyxlQUFTLEVBQUUsR0FIRDtBQUlWSSxhQUFPLEVBQUU7QUFKQztBQUZOO0FBVE0sQ0FBaEI7O0FBb0JBLElBQU1DLElBQWMsR0FBRyxTQUFqQkEsSUFBaUIsR0FBTTtBQUFBOztBQUFBLGtCQUNFQyw4REFBUSxDQUFDLEtBQUQsRUFBUSxJQUFSLENBRFY7QUFBQTtBQUFBLE1BQ3BCQyxNQURvQjtBQUFBLE1BQ1pDLFVBRFk7O0FBRTNCLE1BQU1DLFlBQVksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTNCOztBQUYyQix1QkFHUkMscUVBQWEsQ0FBQ0YsWUFBRCxDQUhMO0FBQUEsTUFHbkJiLE1BSG1CLGtCQUduQkEsTUFIbUI7O0FBQUEsa0JBSUhnQixzREFBUSxDQUFDLEtBQUQsQ0FKTDtBQUFBLE1BSXBCakIsSUFKb0I7QUFBQSxNQUlka0IsT0FKYzs7QUFNM0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ1AsTUFBTCxFQUFhO0FBQ1hRLGdCQUFVLENBQUMsWUFBTTtBQUNmRixlQUFPLENBQUNOLE1BQUQsQ0FBUDtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxLQUpELE1BSU87QUFDTE0sYUFBTyxDQUFDTixNQUFELENBQVA7QUFDRDtBQUNGLEdBUlEsRUFRTixDQUFDQSxNQUFELENBUk0sQ0FBVDtBQVVBLFNBQ0UsTUFBQywyQ0FBRDtBQUNFLFNBQUssRUFBRTtBQUNMUyxjQUFRLEVBQUVULE1BQU0sR0FBRyxTQUFILEdBQWU7QUFEMUIsS0FEVDtBQUlFLFdBQU8sRUFBRSxLQUpYO0FBS0UsV0FBTyxFQUFFQSxNQUFNLEdBQUcsTUFBSCxHQUFZLFFBTDdCO0FBTUUsVUFBTSxFQUFFWCxNQU5WO0FBT0UsT0FBRyxFQUFFYSxZQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTRSxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGFBQVMsRUFBQyxZQUF0QjtBQUFtQyxZQUFRLEVBQUVmLE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQyxzREFBRDtBQUFZLFVBQU0sRUFBRTtBQUFBLGFBQU1jLFVBQVUsRUFBaEI7QUFBQSxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsQ0FERjtBQWVELENBL0JEOztHQUFNSCxJO1VBQ3lCQyxzRCxFQUVWSyw2RDs7O0tBSGZOLEk7QUFpQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUN5Y2xlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHVzZURpbWVuc2lvbnMgfSBmcm9tICcuL3VzZS1kaW1lbnNpb25zJ1xuaW1wb3J0IHsgTWVudVRvZ2dsZSB9IGZyb20gJy4vTWVudVRvZ2dsZSdcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICcuL05hdmlnYXRpb24nXG5pbXBvcnQgeyBOYXYgfSBmcm9tICcuL3N0eWxlcydcblxuY29uc3Qgc2lkZWJhciA9IHtcbiAgb3BlbjogKGhlaWdodCA9IDEwMDApID0+ICh7XG4gICAgY2xpcFBhdGg6IGBjaXJjbGUoJHtoZWlnaHQgKiAyICsgMjAwfXB4IGF0IDQwcHggNDBweClgLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgc3RpZmZuZXNzOiAyMCxcbiAgICAgIHJlc3REZWx0YTogMlxuICAgIH1cbiAgfSksXG4gIGNsb3NlZDoge1xuICAgIGNsaXBQYXRoOiAnY2lyY2xlKDMwcHggYXQgNDBweCA0MHB4KScsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgZGVsYXk6IDAuNSxcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgc3RpZmZuZXNzOiA0MDAsXG4gICAgICBkYW1waW5nOiA0MFxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBNZW51OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSlcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHsgaGVpZ2h0IH0gPSB1c2VEaW1lbnNpb25zKGNvbnRhaW5lclJlZilcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldE9wZW4oaXNPcGVuKVxuICAgICAgfSwgMTAwMClcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0T3Blbihpc09wZW4pXG4gICAgfVxuICB9LCBbaXNPcGVuXSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBpc09wZW4gPyAnaW5oZXJpdCcgOiAnYWJzb2x1dGUnXG4gICAgICB9fVxuICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgIGN1c3RvbT17aGVpZ2h0fVxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgPlxuICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIHZhcmlhbnRzPXtzaWRlYmFyfSAvPlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxNZW51VG9nZ2xlIHRvZ2dsZT17KCkgPT4gdG9nZ2xlT3BlbigpfSAvPlxuICAgIDwvTmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/index.tsx\n");

/***/ })

})