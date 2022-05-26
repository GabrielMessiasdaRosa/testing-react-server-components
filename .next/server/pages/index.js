"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Home = ()=>{\n    const { 0: pokemons , 1: setPokemons  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const getPokemonDitto = async ()=>{\n            const res = await fetch(\"https://pokeapi.co/api/v2/pokemon/ditto\");\n            const data = await res.json();\n            console.log(\"data\", data);\n            setPokemons(data);\n        };\n        getPokemonDitto();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-w-96 min-h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl\",\n                children: pokemons?.name\n            }, void 0, false, {\n                fileName: \"/home/motivado/80-lines/artigo/artigo-pensando-em-react-2/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-96 h-96\",\n                src: `${pokemons?.sprites?.front_default}`\n            }, void 0, false, {\n                fileName: \"/home/motivado/80-lines/artigo/artigo-pensando-em-react-2/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/motivado/80-lines/artigo/artigo-pensando-em-react-2/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUN3QztBQUV4QyxNQUFNRSxJQUFJLEdBQWEsSUFBTTtJQUMzQixNQUFNLEVBSlIsR0FJU0MsUUFBUSxHQUpqQixHQUltQkMsV0FBVyxNQUFJSCwrQ0FBUSxFQUFPO0lBQy9DRCxzREFBZSxDQUFDLElBQU07UUFDcEIsTUFBTU0sZUFBZSxHQUFHLFVBQVk7WUFDbEMsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztZQUNsRSxNQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFJLEVBQUU7WUFDN0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sRUFBRUgsSUFBSSxDQUFDLENBQUM7WUFDMUJMLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDLENBQUM7U0FDbkI7UUFDREgsZUFBZSxFQUFFLENBQUM7S0FDbkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBCQUNoQyw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLFVBQVU7MEJBQUVYLFFBQVEsRUFBRWEsSUFBSTs7Ozs7eUJBQUs7MEJBRTVDLDhEQUFDQyxLQUFHO2dCQUNGSCxTQUFTLEVBQUMsV0FBVztnQkFDckJJLEdBQUcsRUFBRSxDQUFDLEVBQUVmLFFBQVEsRUFBRWdCLE9BQU8sRUFBRUMsYUFBYSxDQUFDLENBQUM7Ozs7O3lCQUNyQzs7Ozs7O2lCQUNILENBQ047Q0FDSDtBQUVELGlFQUFlbEIsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJ0aWdvLXBlbnNhbmRvLWVtLXJlYWN0Ly4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGU8YW55PigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFBva2Vtb25EaXR0byA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL2RpdHRvXCIpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgICBzZXRQb2tlbW9ucyhkYXRhKTtcbiAgICB9O1xuICAgIGdldFBva2Vtb25EaXR0bygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTk2IG1pbi1oLTk2XCI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPntwb2tlbW9ucz8ubmFtZX08L3A+XG5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwidy05NiBoLTk2XCJcbiAgICAgICAgc3JjPXtgJHtwb2tlbW9ucz8uc3ByaXRlcz8uZnJvbnRfZGVmYXVsdH1gfVxuICAgICAgPjwvaW1nPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSG9tZSIsInBva2Vtb25zIiwic2V0UG9rZW1vbnMiLCJ1c2VFZmZlY3QiLCJnZXRQb2tlbW9uRGl0dG8iLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJuYW1lIiwiaW1nIiwic3JjIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();