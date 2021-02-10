webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Menu/styles.tsx":
/*!****************************************!*\
  !*** ./src/components/Menu/styles.tsx ***!
  \****************************************/
/*! exports provided: Container, IconPaceHolder, TextPlaceHolder, Li, Nav, Ul, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconPaceHolder\", function() { return IconPaceHolder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextPlaceHolder\", function() { return TextPlaceHolder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Li\", function() { return Li; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Nav\", function() { return Nav; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ul\", function() { return Ul; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-9mwtiz-0\"\n})([\"\"]);\nvar IconPaceHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__IconPaceHolder\",\n  componentId: \"sc-9mwtiz-1\"\n})([\"width:40px;height:40px;border-radius:50%;flex:40px 0;margin-right:20px;\"]);\nvar TextPlaceHolder = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"styles__TextPlaceHolder\",\n  componentId: \"sc-9mwtiz-2\"\n})([\"border-radius:5px;width:100%;flex:1;color:#000;\"]);\nvar Li = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].li).withConfig({\n  displayName: \"styles__Li\",\n  componentId: \"sc-9mwtiz-3\"\n})([\"list-style:none;margin-bottom:20px;display:flex;align-items:center;cursor:pointer;div.outline{position:absolute;top:-20px;left:-20px;right:-20px;bottom:-20px;border:10px solid white;border-radius:50%;}\"]);\nvar Nav = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].nav).withConfig({\n  displayName: \"styles__Nav\",\n  componentId: \"sc-9mwtiz-4\"\n})([\"position:\", \";top:0;left:0;bottom:0;width:300px;ul{position:\", \";display:\", \";}.background{position:inherit;top:0;left:0;bottom:0;width:300px;background:#fff;-webkit-box-shadow:0px 10px 13px -7px #000000,5px 5px 15px 5px rgba(0,0,0,0);box-shadow:0px 10px 13px -7px #000000,5px 5px 15px 5px rgba(0,0,0,0);}\"], function (props) {\n  return props.openNav ? 'inherit' : 'absolute';\n}, function (props) {\n  return props.openNav ? 'absolute' : 'initial';\n}, function (props) {\n  return props.openNav ? 'block' : 'none';\n});\nvar Ul = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].ul).withConfig({\n  displayName: \"styles__Ul\",\n  componentId: \"sc-9mwtiz-5\"\n})([\"padding:25px;top:100px;width:100%;\"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__Button\",\n  componentId: \"sc-9mwtiz-6\"\n})([\"outline:none;border:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;cursor:pointer;position:absolute;top:18px;left:15px;width:50px;height:50px;border-radius:50%;background:transparent;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudS9zdHlsZXMudHN4P2MyNTgiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiSWNvblBhY2VIb2xkZXIiLCJUZXh0UGxhY2VIb2xkZXIiLCJMaSIsIm1vdGlvbiIsImxpIiwiTmF2IiwibmF2IiwicHJvcHMiLCJvcGVuTmF2IiwiVWwiLCJ1bCIsIkJ1dHRvbiIsImJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR08sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLFFBQWY7QUFFQSxJQUFNQyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsK0VBQXBCO0FBUUEsSUFBTUUsZUFBZSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVEQUFyQjtBQU9BLElBQU1HLEVBQUUsR0FBR0osaUVBQU0sQ0FBQ0ssb0RBQU0sQ0FBQ0MsRUFBUixDQUFUO0FBQUE7QUFBQTtBQUFBLGlOQUFSO0FBa0JBLElBQU1DLEdBQUcsR0FBR1AsaUVBQU0sQ0FBQ0ssb0RBQU0sQ0FBQ0csR0FBUixDQUFUO0FBQUE7QUFBQTtBQUFBLDBUQUNGLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLE9BQU4sR0FBZ0IsU0FBaEIsR0FBNEIsVUFBakM7QUFBQSxDQURILEVBUUEsVUFBQUQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixVQUFoQixHQUE2QixTQUFsQztBQUFBLENBUkwsRUFTRCxVQUFBRCxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxPQUFOLEdBQWdCLE9BQWhCLEdBQTBCLE1BQS9CO0FBQUEsQ0FUSixDQUFUO0FBeUJBLElBQU1DLEVBQUUsR0FBR1gsaUVBQU0sQ0FBQ0ssb0RBQU0sQ0FBQ08sRUFBUixDQUFUO0FBQUE7QUFBQTtBQUFBLDBDQUFSO0FBTUEsSUFBTUMsTUFBTSxHQUFHYix5REFBTSxDQUFDYyxNQUFWO0FBQUE7QUFBQTtBQUFBLHlOQUFaIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudS9zdHlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBTdHlsZWRGdW5jdGlvbiB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IFN0eWxlZCB9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBgXG5cbmV4cG9ydCBjb25zdCBJY29uUGFjZUhvbGRlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmxleDogNDBweCAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0UGxhY2VIb2xkZXIgPSBzdHlsZWQuZGl2YFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICBjb2xvcjogIzAwMDtcbmBcblxuZXhwb3J0IGNvbnN0IExpID0gc3R5bGVkKG1vdGlvbi5saSlgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBkaXYub3V0bGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGJvdHRvbTogLTIwcHg7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkKG1vdGlvbi5uYXYpPFN0eWxlZD5gXG4gIHBvc2l0aW9uOiAke3Byb3BzID0+IChwcm9wcy5vcGVuTmF2ID8gJ2luaGVyaXQnIDogJ2Fic29sdXRlJyl9O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDMwMHB4O1xuXG4gIHVsIHtcbiAgICBwb3NpdGlvbjogJHtwcm9wcyA9PiAocHJvcHMub3Blbk5hdiA/ICdhYnNvbHV0ZScgOiAnaW5pdGlhbCcpfTtcbiAgICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5vcGVuTmF2ID8gJ2Jsb2NrJyA6ICdub25lJyl9O1xuICB9XG5cbiAgLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBpbmhlcml0O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLFxuICAgICAgNXB4IDVweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwLCA1cHggNXB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFVsID0gc3R5bGVkKG1vdGlvbi51bClgXG4gIHBhZGRpbmc6IDI1cHg7XG4gIHRvcDogMTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE4cHg7XG4gIGxlZnQ6IDE1cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/styles.tsx\n");

/***/ })

})