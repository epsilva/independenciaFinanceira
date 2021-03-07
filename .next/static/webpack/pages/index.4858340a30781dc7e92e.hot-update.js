webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, DivPage, Card, ContainerIntro, ContainerDesc, CardDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivPage\", function() { return DivPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerIntro\", function() { return ContainerIntro; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerDesc\", function() { return ContainerDesc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardDesc\", function() { return CardDesc; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/wallpaper.jpg */ \"./src/assets/wallpaper.jpg\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100%;flex:1 1 100%;display:flex;flex-direction:column;overflow:auto;height:100vh;position:relative;background:#fff;background-repeat:no-repeat;background-origin:initial;align-items:center;h1{font-size:24px;font-family:sans-serif;font-weight:600;font-style:normal;text-transform:uppercase;letter-spacing:0.13em;}\"]);\nvar DivPage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivPage\",\n  componentId: \"heizgz-1\"\n})([\"width:100%;min-height:80px;display:flex;align-items:center;justify-content:center;background:#6a66f4;color:#fff;\"]);\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Card\",\n  componentId: \"heizgz-2\"\n})([\"padding:20px;box-shadow:0px 10px 13px -7px #000000;height:60px;display:flex;align-items:center;flex-direction:column;justify-content:center;color:#fff;background:#2093f7;cursor:pointer;width:20%;@media only screen and (max-width:900px){width:100%;}margin-top:20px;:hover{background:#6a66f4;}a{text-decoration:none;}border-radius:4px;\"]);\nvar ContainerIntro = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__ContainerIntro\",\n  componentId: \"heizgz-3\"\n})([\"min-height:100vh;max-width:100%;display:flex;flex-wrap:wrap;justify-content:center;text-align:center !important;align-items:center;background-image:url(\", \");background-repeat:no-repeat;background-size:cover;@media only screen and (max-width:767px){font-size:32px;background-repeat:no-repeat;background-position-x:center;background-size:150% 100%;}span.descricao{font-weight:600;color:#fff;font-family:'Poppins',sans-serif;font-size:52px;@media only screen and (max-width:767px){font-size:32px;}}\"], _assets_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar ContainerDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__ContainerDesc\",\n  componentId: \"heizgz-4\"\n})([\"margin:20px 0;display:grid;grid-template-columns:repeat(3,1fr);\"]);\nvar CardDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__CardDesc\",\n  componentId: \"heizgz-5\"\n})([\"display:flex;align-items:center;flex-direction:column;justify-content:space-between;background:#2093f7;margin:20px;border-radius:4px;padding:20px;color:#fff;strong{color:#000;}strong.title{font-size:24px;margin-bottom:8px;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRGl2UGFnZSIsIkNhcmQiLCJDb250YWluZXJJbnRybyIsImJhY2siLCJDb250YWluZXJEZXNjIiwiQ2FyZERlc2MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscVVBQWY7QUF1QkEsSUFBTUMsT0FBTyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdIQUFiO0FBV0EsSUFBTUUsSUFBSSxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHFWQUFWO0FBMEJBLElBQU1HLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx5ZkFRREksNkRBUkMsQ0FBcEI7QUE4QkEsSUFBTUMsYUFBYSxHQUFHTix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVFQUFuQjtBQU1BLElBQU1NLFFBQVEsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1T0FBZCIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYmFjayBmcm9tICcuLi8uLi9hc3NldHMvd2FsbHBhcGVyLmpwZydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGluaXRpYWw7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjEzZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IERpdlBhZ2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM2YTY2ZjQ7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXG5gXG5leHBvcnQgY29uc3QgQ2FyZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTdweCAjMDAwMDAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzIwOTNmNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMjAlO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNmE2NmY0O1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckludHJvID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2t9KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxNTAlIDEwMCU7XG4gIH1cblxuICBzcGFuLmRlc2NyaWNhbyB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNTJweDtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJEZXNjID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkRGVzYyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogIzIwOTNmNztcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICBzdHJvbmcudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})