webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, DivPage, Card, ContainerIntro, ContainerDesc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DivPage\", function() { return DivPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerIntro\", function() { return ContainerIntro; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerDesc\", function() { return ContainerDesc; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/wallpaper.jpg */ \"./src/assets/wallpaper.jpg\");\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"heizgz-0\"\n})([\"width:100%;flex:1 1 100%;display:flex;flex-direction:column;overflow:auto;height:100vh;position:relative;background:#fff;background-repeat:no-repeat;background-origin:initial;align-items:center;h1{font-size:24px;font-family:sans-serif;font-weight:600;font-style:normal;text-transform:uppercase;letter-spacing:0.13em;}\"]);\nvar DivPage = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__DivPage\",\n  componentId: \"heizgz-1\"\n})([\"width:100%;height:40px;display:flex;align-items:center;justify-content:center;background:#6a66f4;color:#fff;margin-top:20%;margin-bottom:20px;\"]);\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Card\",\n  componentId: \"heizgz-2\"\n})([\"padding:20px;box-shadow:0px 10px 13px -7px #000000;height:60px;display:flex;align-items:center;flex-direction:column;justify-content:center;color:#fff;background:#2093f7;cursor:pointer;width:20%;@media only screen and (max-width:900px){width:100%;}margin-top:20px;:hover{background:#6a66f4;}a{text-decoration:none;}border-radius:4px;\"]);\nvar ContainerIntro = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__ContainerIntro\",\n  componentId: \"heizgz-3\"\n})([\"min-height:100vh;max-width:100%;display:flex;flex-wrap:wrap;justify-content:center;text-align:center !important;align-items:center;background-image:url(\", \");background-repeat:no-repeat;background-size:cover;@media only screen and (max-width:767px){font-size:32px;background-repeat:no-repeat;background-position-x:center;background-size:150% 100%;}span.descricao{font-weight:600;color:#fff;font-family:'Poppins',sans-serif;font-size:52px;@media only screen and (max-width:767px){font-size:32px;}}\"], _assets_wallpaper_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar ContainerDesc = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__ContainerDesc\",\n  componentId: \"heizgz-4\"\n})([\"width:100%;flex:1 1 100%;display:flex;flex-direction:column;position:relative;background:#fff;background-repeat:no-repeat;background-origin:initial;align-items:center;padding:20px;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRGl2UGFnZSIsIkNhcmQiLCJDb250YWluZXJJbnRybyIsImJhY2siLCJDb250YWluZXJEZXNjIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxxVUFBZjtBQXVCQSxJQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsc0pBQWI7QUFXQSxJQUFNRSxJQUFJLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEscVZBQVY7QUEwQkEsSUFBTUcsY0FBYyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHlmQVFESSw2REFSQyxDQUFwQjtBQThCQSxJQUFNQyxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNExBQW5CIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBiYWNrIGZyb20gJy4uLy4uL2Fzc2V0cy93YWxscGFwZXIuanBnJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMTNlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRGl2UGFnZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNmE2NmY0O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuYFxuZXhwb3J0IGNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC03cHggIzAwMDAwMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICMyMDkzZjc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIwJTtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzZhNjZmNDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBib3JkZXItcmFkaXVzOiA0cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJJbnRybyA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtiYWNrfSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTUwJSAxMDAlO1xuICB9XG5cbiAgc3Bhbi5kZXNjcmljYW8ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDUycHg7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyRGVzYyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLW9yaWdpbjogaW5pdGlhbDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbmBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})