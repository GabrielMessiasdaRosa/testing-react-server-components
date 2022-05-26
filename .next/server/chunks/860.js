"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ "./src/components/box.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X2": () => (/* binding */ Row),
/* harmony export */   "sg": () => (/* binding */ Column)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const _Row = (props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        ...props,
        className: `flex flex-row ${props.className || ""}`
    });
};
const _Column = (props, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        ...props,
        className: `flex flex-col ${props.className || ""}`
    });
};
const _Box = (props, ref)=>{
    return /*#__PURE__*/ _jsx("div", {
        ref: ref,
        ...props
    });
};
const Box = /*#__PURE__*/ (/* unused pure expression or super */ null && (React.forwardRef(_Box)));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Box)));
const Row = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_Row);
const Column = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_Column);


/***/ }),

/***/ "./src/components/button.client.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "baseButtonActiveVariantClassMap": () => (/* binding */ baseButtonActiveVariantClassMap),
  "baseButtonVariantClassMap": () => (/* binding */ baseButtonVariantClassMap),
  "default": () => (/* binding */ button_client)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("react");
// EXTERNAL MODULE: ./src/components/box.tsx
var box = __webpack_require__("./src/components/box.tsx");
;// CONCATENATED MODULE: ./src/assets/spinner.svg
/* harmony default export */ const spinner = ({"src":"/_next/static/media/spinner.ab32196e.svg","height":38,"width":38});
;// CONCATENATED MODULE: ./src/components/spinner.tsx


function Spinner({ size ="md" , color ="gray-700"  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(spinner, {
        className: `text-${color} ${sizeMap[size]}`
    });
}
/* harmony default export */ const components_spinner = (Spinner);
const sizeMap = {
    xs: "w-4 h-4",
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
    xl: "w-8 h-8"
};

;// CONCATENATED MODULE: ./src/components/button.client.tsx




const Button = ({ children , size ="md" , type ="button" , variant ="solid" , className ="" , pending =false , disabled =false , onClick ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        type: type,
        className: `
      ${baseButtonClasses}
      ${sizeClassMap[size]} 
      ${baseButtonVariantClassMap[variant]} 
      ${pending ? pendingBaseButtonClasses : disabled ? disabledBaseButtonClasses : baseButtonActiveVariantClassMap[variant]} 
      ${className} 
      `,
        onClick: pending || disabled ? (event)=>event?.preventDefault() : onClick,
        disabled: disabled,
        children: [
            pending && /*#__PURE__*/ jsx_runtime_.jsx(box/* Column */.sg, {
                className: "absolute inset-0 items-center justify-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_spinner, {
                    size: size,
                    color: "gray-50"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(box/* Row */.X2, {
                className: `items-center justify-center ${pending ? "invisible" : ""}`,
                children: children
            })
        ]
    });
};
/* harmony default export */ const button_client = (Button);
const baseButtonClasses = `relative uppercase justify-center items-center rounded-lg font-medium focus:outline-none transition`;
const disabledBaseButtonClasses = `cursor-not-allowed opacity-50`;
const pendingBaseButtonClasses = `cursor-wait`;
const sizeClassMap = {
    xl: `px-10 min-h-14 text-md py-xs`,
    lg: `px-8 min-h-12 text-sm py-xs`,
    md: `px-4 min-h-10 text-sm py-xs`,
    sm: `px-3 min-h-8 text-xs py-1`,
    xs: `px-2 min-h-6 text-xs py-0.5`
};
const baseButtonVariantClassMap = {
    solid: {
        primary: `text-white bg-primary-500 shadow`,
        accent: `text-white bg-accent-500 shadow`,
        secondary: `text-gray-600 bg-gray-100`,
        danger: `text-white bg-danger-500 shadow`,
        warning: `text-white bg-warning-500 shadow`,
        success: `text-white bg-success-500 shadow`,
        info: `text-white bg-info-400 shadow`,
        undefined: `text-gray-700 bg-gray-100 shadow`
    },
    outline: {
        primary: `border border-primary-500 text-primary-500 bg-white`,
        accent: `border border-accent-300 text-accent-500 bg-white`,
        danger: `border border-danger-500 text-danger-500 bg-white`,
        warning: `border border-warning-500 text-warning-500 bg-white`,
        success: `border border-success-500 text-success-500 bg-white`,
        info: `border border-info-500 text-info-500 bg-white`,
        undefined: `border border-gray-300 text-gray-700 bg-white`
    },
    ghost: {
        primary: `text-primary-500 bg-primary-500 bg-opacity-5`,
        accent: `text-accent-500 bg-accent-500 bg-opacity-5`,
        danger: `text-danger-500 bg-danger-500 bg-opacity-5`,
        warning: `text-warning-500 bg-warning-500 bg-opacity-5`,
        success: `text-success-500 bg-success-500 bg-opacity-5`,
        info: `text-info-500 bg-info-500 bg-opacity-5`,
        undefined: `text-gray-50`
    }
};
const baseButtonActiveVariantClassMap = {
    solid: {
        primary: `hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-800 focus:ring focus:ring-primary-200`,
        secondary: `hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 focus:ring focus:ring-gray-400 shadow-md`,
        accent: `hover:bg-accent-600 focus:bg-accent-600 active:bg-accent-800 focus:ring focus:ring-accent-200`,
        danger: `hover:bg-danger-600 focus:bg-danger-600 active:bg-danger-800 focus:ring focus:ring-danger-200`,
        warning: `hover:bg-warning-500 focus:bg-warning-500 active:bg-warning-600 focus:ring focus:ring-warning-200`,
        success: `hover:bg-success-400 focus:bg-success-400 active:bg-success-600 focus:ring focus:ring-success-200`,
        info: `hover:bg-info-500 focus:bg-info-500 active:bg-info-600 focus:ring focus:ring-info-200`,
        undefined: `hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 focus:ring focus:ring-gray-400`
    },
    outline: {
        primary: `hover:bg-primary-50 focus:bg-primary-50 active:bg-primary-100 focus:ring focus:ring-primary-200`,
        accent: `hover:bg-accent-50 focus:bg-accent-50 active:bg-accent-100 focus:ring focus:ring-accent-200`,
        danger: `hover:bg-danger-50 focus:bg-danger-50 active:bg-danger-100 focus:ring focus:ring-danger-200`,
        warning: `hover:bg-warning-50 focus:bg-warning-50 active:bg-warning-100 focus:ring focus:ring-warning-200`,
        success: `hover:bg-success-50 focus:bg-success-50 active:bg-success-100 focus:ring focus:ring-success-200`,
        info: `hover:bg-info-50 focus:bg-info-50 active:bg-info-100 focus:ring focus:ring-info-200`,
        undefined: `hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200 focus:ring focus:ring-gray-300`
    },
    ghost: {
        primary: `hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-15 focus:ring focus:ring-primary-200`,
        accent: `hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-15 focus:ring focus:ring-accent-200`,
        danger: `hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-15 focus:ring focus:ring-danger-200`,
        warning: `hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-15 focus:ring focus:ring-warning-200`,
        success: `hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-15 focus:ring focus:ring-success-200`,
        info: `hover:bg-opacity-10 focus:bg-opacity-10 active:bg-opacity-15 focus:ring focus:ring-info-200`,
        undefined: `hover:bg-opacity-15 focus:bg-opacity-15 active:bg-opacity-20 focus:ring focus:ring-gray-300`
    }
};


/***/ })

};
;