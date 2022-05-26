"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ "./src/pages/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("react");
// EXTERNAL MODULE: ./src/components/box.tsx
var box = __webpack_require__("./src/components/box.tsx");
// EXTERNAL MODULE: ./src/components/button.client.tsx + 2 modules
var button_client = __webpack_require__("./src/components/button.client.tsx");
;// CONCATENATED MODULE: ./src/home-page/index.tsx




const HomePage = ({})=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(box/* Column */.sg, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "You clicked zero times"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                fallback: "Loading...",
                children: /*#__PURE__*/ jsx_runtime_.jsx(button_client["default"], {
                    onClick: ()=>console.log("CLICK!"),
                    children: "Click me"
                })
            })
        ]
    });
};
/* harmony default export */ const home_page = (HomePage);

;// CONCATENATED MODULE: ./src/pages/home-page.server.tsx



const HomePageRoute = ({})=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Suspense, {
            fallback: "Loading...",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(home_page, {}),
                ";"
            ]
        })
    });
};
/* harmony default export */ const home_page_server = (HomePageRoute);

;// CONCATENATED MODULE: ./src/pages/index.tsx



const Home = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
            fallback: "Loading...",
            children: /*#__PURE__*/ jsx_runtime_.jsx(home_page_server, {})
        })
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ "react":
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [860], () => (__webpack_exec__("./src/pages/index.tsx")));
module.exports = __webpack_exports__;

})();