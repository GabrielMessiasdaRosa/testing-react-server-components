"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_motivado_80_lines_artigo_artigo_pensando_em_react_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_motivado_80_lines_artigo_artigo_pensando_em_react_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_motivado_80_lines_artigo_artigo_pensando_em_react_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), pokemons = ref1[0], setPokemons = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        var getPokemonDitto = function() {\n            var _ref = _asyncToGenerator(_home_motivado_80_lines_artigo_artigo_pensando_em_react_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var res, data;\n                return _home_motivado_80_lines_artigo_artigo_pensando_em_react_2_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return fetch(\"https://pokeapi.co/api/v2/pokemon/pikachu\");\n                        case 2:\n                            res = _ctx.sent;\n                            _ctx.next = 5;\n                            return res.json();\n                        case 5:\n                            data = _ctx.sent;\n                            console.log(\"data\", data);\n                            setPokemons(data);\n                        case 8:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getPokemonDitto() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getPokemonDitto();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-w-96 min-h-96\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-2xl\",\n                children: pokemons === null || pokemons === void 0 ? void 0 : pokemons.name\n            }, void 0, false, {\n                fileName: \"/home/motivado/80-lines/artigo/artigo-pensando-em-react-2/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                className: \"w-96 h-96\",\n                src: \"\".concat(pokemons === null || pokemons === void 0 ? void 0 : (ref = pokemons.sprites) === null || ref === void 0 ? void 0 : ref.front_default)\n            }, void 0, false, {\n                fileName: \"/home/motivado/80-lines/artigo/artigo-pensando-em-react-2/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/motivado/80-lines/artigo/artigo-pensando-em-react-2/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3Qzs7QUFFeEMsSUFBTUUsSUFBSSxHQUFhLFdBQU07UUFrQmJDLEdBQWlCOztJQWpCL0IsSUFBZ0NGLElBQWUsR0FBZkEsK0NBQVEsRUFBTyxFQUpqRCxRQUlpQixHQUFpQkEsSUFBZSxHQUFoQyxFQUpqQixXQUk4QixHQUFJQSxJQUFlLEdBQW5CO0lBQzVCRCxzREFBZSxDQUFDLFdBQU07UUFDcEIsSUFBTU0sZUFBZTt1QkFBRywwTUFBWTtvQkFDNUJDLEdBQUcsRUFDSEMsSUFBSTs7Ozs7bUNBRFFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQzs7NEJBQTlERixHQUFHLFlBQTJEOzttQ0FDakRBLEdBQUcsQ0FBQ0csSUFBSSxFQUFFOzs0QkFBdkJGLElBQUksWUFBbUI7NEJBQzdCRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVKLElBQUksQ0FBQyxDQUFDOzRCQUMxQkosV0FBVyxDQUFDSSxJQUFJLENBQUMsQ0FBQzs7Ozs7O2FBQ25COzRCQUxLRixlQUFlOzs7V0FLcEI7UUFDREEsZUFBZSxFQUFFLENBQUM7S0FDbkIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7OzBCQUNoQyw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLFVBQVU7MEJBQUVYLFFBQVEsYUFBUkEsUUFBUSxXQUFNLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsUUFBUSxDQUFFYSxJQUFJOzs7OztxQkFBSzswQkFFNUMsOERBQUNDLEtBQUc7Z0JBQ0ZILFNBQVMsRUFBQyxXQUFXO2dCQUNyQkksR0FBRyxFQUFFLEVBQUMsQ0FBbUMsT0FBakNmLFFBQVEsYUFBUkEsUUFBUSxXQUFTLEdBQWpCQSxLQUFBQSxDQUFpQixHQUFqQkEsQ0FBQUEsR0FBaUIsR0FBakJBLFFBQVEsQ0FBRWdCLE9BQU8sY0FBakJoQixHQUFpQixjQUFqQkEsS0FBQUEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVpQixhQUFhLENBQUU7Ozs7O3FCQUNyQzs7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0dBdEJLbEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBd0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtwb2tlbW9ucywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGU8YW55PigpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldFBva2Vtb25EaXR0byA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL3Bpa2FjaHVcIik7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICAgIHNldFBva2Vtb25zKGRhdGEpO1xuICAgIH07XG4gICAgZ2V0UG9rZW1vbkRpdHRvKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctOTYgbWluLWgtOTZcIj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsXCI+e3Bva2Vtb25zPy5uYW1lfTwvcD5cblxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LTk2IGgtOTZcIlxuICAgICAgICBzcmM9e2Ake3Bva2Vtb25zPy5zcHJpdGVzPy5mcm9udF9kZWZhdWx0fWB9XG4gICAgICA+PC9pbWc+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwicG9rZW1vbnMiLCJzZXRQb2tlbW9ucyIsInVzZUVmZmVjdCIsImdldFBva2Vtb25EaXR0byIsInJlcyIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm5hbWUiLCJpbWciLCJzcmMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});