webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Menu/styles.tsx":
/*!****************************************!*\
  !*** ./src/components/Menu/styles.tsx ***!
  \****************************************/
/*! exports provided: Container, IconPaceHolder, TextPlaceHolder, Li, Nav, Ul, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconPaceHolder\", function() { return IconPaceHolder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextPlaceHolder\", function() { return TextPlaceHolder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Li\", function() { return Li; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ul\", function() { return Ul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-9mwtiz-0\"\n})([\"\"]);\nvar IconPaceHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__IconPaceHolder\",\n  componentId: \"sc-9mwtiz-1\"\n})([\"width:40px;height:40px;border-radius:50%;flex:40px 0;margin-right:20px;\"]);\nvar TextPlaceHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__TextPlaceHolder\",\n  componentId: \"sc-9mwtiz-2\"\n})([\"border-radius:5px;width:100%;flex:1;color:#000;\"]);\nvar Li = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].li).withConfig({\n  displayName: \"styles__Li\",\n  componentId: \"sc-9mwtiz-3\"\n})([\"list-style:none;margin-bottom:20px;display:flex;align-items:center;cursor:pointer;\"]);\nvar Nav = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].nav).withConfig({\n  displayName: \"styles__Nav\",\n  componentId: \"sc-9mwtiz-4\"\n})([\"position:\", \";top:0;left:0;bottom:0;width:300px;ul{position:\", \";}.background{position:inherit;top:0;left:0;bottom:0;width:300px;background:#fff;-webkit-box-shadow:0px 10px 13px -7px #000000,5px 5px 15px 5px rgba(0,0,0,0);box-shadow:0px 10px 13px -7px #000000,5px 5px 15px 5px rgba(0,0,0,0);}\"], function (props) {\n  return props.openNav ? 'inherit' : 'absolute';\n}, function (props) {\n  return props.openNav ? 'absolute' : 'initial';\n});\nvar Ul = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].ul).withConfig({\n  displayName: \"styles__Ul\",\n  componentId: \"sc-9mwtiz-5\"\n})([\"padding:25px;top:100px;width:100%;\"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__Button\",\n  componentId: \"sc-9mwtiz-6\"\n})([\"outline:none;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:pointer;position:absolute;top:18px;left:15px;width:50px;height:50px;border-radius:50%;background:transparent;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9zdHlsZXMudHN4P2MyNTgiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSWNvblBhY2VIb2xkZXIiLCJUZXh0UGxhY2VIb2xkZXIiLCJMaSIsIm1vdGlvbiIsImxpIiwiTmF2IiwibmF2IiwicHJvcHMiLCJvcGVuTmF2IiwiVWwiLCJ1bCIsIkJ1dHRvbiIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR08sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWY7QUFFQSxJQUFNQyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0VBQXBCO0FBUUEsSUFBTUUsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFyQjtBQU9BLElBQU1HLEVBQUUsR0FBR0osaUVBQU0sQ0FBQ0ssb0RBQU0sQ0FBQ0MsRUFBUixDQUFUO0FBQUE7QUFBQTtBQUFBLDBGQUFSO0FBUUEsSUFBTUMsR0FBRyxHQUFHUCxpRUFBTSxDQUFDSyxvREFBTSxDQUFDRyxHQUFSLENBQVQ7QUFBQTtBQUFBO0FBQUEsNlNBQ0YsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixTQUFoQixHQUE0QixVQUFqQztBQUFBLENBREgsRUFRQSxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLFVBQWhCLEdBQTZCLFNBQWxDO0FBQUEsQ0FSTCxDQUFUO0FBd0JBLElBQU1DLEVBQUUsR0FBR1gsaUVBQU0sQ0FBQ0ssb0RBQU0sQ0FBQ08sRUFBUixDQUFUO0FBQUE7QUFBQTtBQUFBLDBDQUFSO0FBTUEsSUFBTUMsTUFBTSxHQUFHYix5REFBTSxDQUFDYyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlOQUFaIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9zdHlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBTdHlsZWRGdW5jdGlvbiB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IFN0eWxlZCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgXG5cbmV4cG9ydCBjb25zdCBJY29uUGFjZUhvbGRlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleDogNDBweCAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0UGxhY2VIb2xkZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogIzAwMDtcbmBcblxuZXhwb3J0IGNvbnN0IExpID0gc3R5bGVkKG1vdGlvbi5saSlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZChtb3Rpb24ubmF2KTxTdHlsZWQ+YFxuICBwb3NpdGlvbjogJHtwcm9wcyA9PiAocHJvcHMub3Blbk5hdiA/ICdpbmhlcml0JyA6ICdhYnNvbHV0ZScpfTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAzMDBweDtcblxuICB1bCB7XG4gICAgcG9zaXRpb246ICR7cHJvcHMgPT4gKHByb3BzLm9wZW5OYXYgPyAnYWJzb2x1dGUnIDogJ2luaXRpYWwnKX07XG4gIH1cblxuICAuYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGluaGVyaXQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtN3B4ICMwMDAwMDAsXG4gICAgICA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtN3B4ICMwMDAwMDAsIDVweCA1cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwKTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgVWwgPSBzdHlsZWQobW90aW9uLnVsKWBcbiAgcGFkZGluZzogMjVweDtcbiAgdG9wOiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMTVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Menu/styles.tsx\n");

/***/ })

})