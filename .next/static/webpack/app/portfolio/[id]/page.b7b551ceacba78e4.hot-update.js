"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/portfolio/[id]/page",{

/***/ "(app-pages-browser)/./app/components/layouts/header/index.js":
/*!************************************************!*\
  !*** ./app/components/layouts/header/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEmpty */ \"(app-pages-browser)/./node_modules/lodash/isEmpty.js\");\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isArray */ \"(app-pages-browser)/./node_modules/lodash/isArray.js\");\n/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_utils_miscellaneous_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/utils/miscellaneous.js */ \"(app-pages-browser)/./src/utils/miscellaneous.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = (param)=>{\n    let { data } = param;\n    _s();\n    const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle } = data;\n    const [isMenuVisible, setMenuVisibility] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: siteTitle\n                }, void 0, false, {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"main-header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"header-inner flex justify-center py-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"header-inner-data flex justify-around items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/\",\n                                    children: siteLogoUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        className: \"mr-2\",\n                                        src: siteLogoUrl,\n                                        alt: \"\".concat(siteTitle, \" logo\"),\n                                        width: \"800\",\n                                        height: \"800\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 5\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TailwindIcon, {}, void 0, false, {\n                                        fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 9\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"navbar flex\",\n                                    children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_4___default()(headerMenuItems) && headerMenuItems.length ? headerMenuItems.map((menuItem, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"mr-2 ml-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                href: \"https://nick-next-appv-1.vercel.app/about\",\n                                                dangerouslySetInnerHTML: {\n                                                    __html: menuItem.title\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, menuItem === null || menuItem === void 0 ? void 0 : menuItem.ID, false, {\n                                            fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 10\n                                        }, undefined)) : null\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\xampp\\\\htdocs\\\\nick\\\\nick-next-app\\\\app\\\\components\\\\layouts\\\\header\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Header, \"ONYu+YrDjriBlcB59X2zxoWzwLM=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNnQztBQUNIO0FBQ0E7QUFDYTtBQUFBO0FBQ2dDO0FBRzFFLE1BQU1NLFNBQVM7UUFBQyxFQUFFQyxJQUFJLEVBQUU7O0lBR3RCLE1BQU0sRUFBRUMsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLFdBQVcsRUFBRUMsU0FBUyxFQUFFLEdBQUdKO0lBRXJFLE1BQU0sQ0FBQ0ssZUFBZUMsa0JBQWtCLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXBELHFCQUNFOzswQkFDRSw4REFBQ0Msa0RBQUlBOzBCQUNILDRFQUFDYTs4QkFBT0g7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDSTtnQkFBT0MsV0FBVTswQkFDaEIsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDZCxrREFBSUE7b0NBQUNnQixNQUFLOzhDQUdyQlIsNEJBQ0EsOERBQUNTO3dDQUFJSCxXQUFVO3dDQUFPSSxLQUFNVjt3Q0FBY1csS0FBTSxHQUFlLE9BQVhWLFdBQVc7d0NBQy9EVyxPQUFNO3dDQUNGQyxRQUFPOzs7OztrRUFDUCw4REFBQ0M7Ozs7Ozs7Ozs7OENBS0ssOERBQUNDO29DQUFHVCxXQUFVOzhDQUNaLENBQUViLHFEQUFPQSxDQUFFSyxvQkFBcUJBLGdCQUFnQmtCLE1BQU0sR0FBR2xCLGdCQUFnQm1CLEdBQUcsQ0FBRSxDQUFDQyxVQUFVQyxzQkFDaEcsOERBQUNDOzRDQUF3QmQsV0FBVTtzREFDMUIsNEVBQUNkLGtEQUFJQTtnREFBQ2dCLE1BQUs7Z0RBQ0xhLHlCQUEwQjtvREFBRUMsUUFBUUosU0FBU2QsS0FBSztnREFBQzs7Ozs7OzJDQUZ4RGMscUJBQUFBLCtCQUFBQSxTQUFVSyxFQUFFOzs7O3lEQUtqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZDtHQTVDTTNCO0tBQUFBO0FBOENOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2xheW91dHMvaGVhZGVyL2luZGV4LmpzP2Q0MDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQge3VzZVN0YXRlfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBpc0VtcHR5ICwgaXNBcnJheX0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtnZXRQYXRoTmFtZUZyb21Vcmx9IGZyb20gXCIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvbWlzY2VsbGFuZW91cy5qc1wiO1xuXG5cbmNvbnN0IEhlYWRlciA9ICh7IGRhdGEgfSkgPT4ge1xuICAgXG5cbiAgY29uc3QgeyBoZWFkZXJNZW51SXRlbXMsIHNpdGVEZXNjcmlwdGlvbiwgc2l0ZUxvZ29VcmwsIHNpdGVUaXRsZSB9ID0gZGF0YTtcblxuICBjb25zdCBbaXNNZW51VmlzaWJsZSwgc2V0TWVudVZpc2liaWxpdHldID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWlubmVyIGZsZXgganVzdGlmeS1jZW50ZXIgcHktNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbm5lci1kYXRhIGZsZXgganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG5cbiAgICAgICAge1xuXHRcdFx0XHRzaXRlTG9nb1VybCA/IChcblx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJtci0yXCIgc3JjPXsgc2l0ZUxvZ29VcmwgfSBhbHQ9eyBgJHsgc2l0ZVRpdGxlIH0gbG9nb2AgfVxuXHRcdFx0XHR3aWR0aD1cIjgwMFwiXG4gICAgICAgIGhlaWdodD1cIjgwMFwiLz5cblx0XHRcdFx0KSA6IDxUYWlsd2luZEljb24vPlxuXHRcdFx0ICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyIGZsZXhcIj5cbiAgICAgICAgICAgICAgeyAhIGlzRW1wdHkoIGhlYWRlck1lbnVJdGVtcyApICYmIGhlYWRlck1lbnVJdGVtcy5sZW5ndGggPyBoZWFkZXJNZW51SXRlbXMubWFwKCAobWVudUl0ZW0sIGluZGV4ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17IG1lbnVJdGVtPy5JRCB9IGNsYXNzTmFtZT1cIm1yLTIgbWwtMlwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbmljay1uZXh0LWFwcHYtMS52ZXJjZWwuYXBwL2Fib3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXsgeyBfX2h0bWw6IG1lbnVJdGVtLnRpdGxlIH0gfT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0KSApIDogbnVsbCB9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJMaW5rIiwiaXNFbXB0eSIsImlzQXJyYXkiLCJnZXRQYXRoTmFtZUZyb21VcmwiLCJIZWFkZXIiLCJkYXRhIiwiaGVhZGVyTWVudUl0ZW1zIiwic2l0ZURlc2NyaXB0aW9uIiwic2l0ZUxvZ29VcmwiLCJzaXRlVGl0bGUiLCJpc01lbnVWaXNpYmxlIiwic2V0TWVudVZpc2liaWxpdHkiLCJ0aXRsZSIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIlRhaWx3aW5kSWNvbiIsInVsIiwibGVuZ3RoIiwibWFwIiwibWVudUl0ZW0iLCJpbmRleCIsImxpIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/layouts/header/index.js\n"));

/***/ })

});