/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./.quasar/app.js":
/*!************************!*\
  !*** ./.quasar/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quasar_src_vue_plugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quasar/src/vue-plugin.js */ \"./node_modules/quasar/src/vue-plugin.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var app_src_App_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/src/App.vue */ \"./src/App.vue\");\n/* harmony import */ var app_src_stores_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/src/stores/index */ \"./src/stores/index.js\");\n/* harmony import */ var app_src_router_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/src/router/index */ \"./src/router/index.js\");\n/**\n * THIS FILE IS GENERATED AUTOMATICALLY.\n * DO NOT EDIT.\n *\n * You are probably looking on adding startup/initialization code.\n * Use \"quasar new boot <name>\" and add it there.\n * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:\n * boot: ['file', ...] // do not add \".js\" extension to it.\n *\n * Boot files are your \"main.js\"\n **/\n\n\n\n\n\n\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(createAppFn, quasarUserOptions) {\n  // Create the app instance.\n  // Here we inject into it the Quasar UI, the router & possibly the store.\n  const app = createAppFn(app_src_App_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  app.config.performance = true;\n  app.use(quasar_src_vue_plugin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], quasarUserOptions);\n  const store = typeof app_src_stores_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function' ? await (0,app_src_stores_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}) : app_src_stores_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  app.use(store);\n  const router = (0,vue__WEBPACK_IMPORTED_MODULE_1__.markRaw)(typeof app_src_router_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"] === 'function' ? await (0,app_src_router_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n    store\n  }) : app_src_router_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n  // make router instance available in store\n\n  store.use(({\n    store\n  }) => {\n    store.router = router;\n  });\n\n  // Expose the app, the router and the store.\n  // Note that we are not mounting the app here, since bootstrapping will be\n  // different depending on whether we are in a browser or on the server.\n  return {\n    app,\n    store,\n    router\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi8ucXVhc2FyL2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBR0E7QUFLQTtBQUtBO0FBTUE7QUFFQTtBQUFBOztBQUtBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vLnF1YXNhci9hcHAuanM/OTk5MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRISVMgRklMRSBJUyBHRU5FUkFURUQgQVVUT01BVElDQUxMWS5cbiAqIERPIE5PVCBFRElULlxuICpcbiAqIFlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBvbiBhZGRpbmcgc3RhcnR1cC9pbml0aWFsaXphdGlvbiBjb2RlLlxuICogVXNlIFwicXVhc2FyIG5ldyBib290IDxuYW1lPlwiIGFuZCBhZGQgaXQgdGhlcmUuXG4gKiBPbmUgYm9vdCBmaWxlIHBlciBjb25jZXJuLiBUaGVuIHJlZmVyZW5jZSB0aGUgZmlsZShzKSBpbiBxdWFzYXIuY29uZmlnLmpzID4gYm9vdDpcbiAqIGJvb3Q6IFsnZmlsZScsIC4uLl0gLy8gZG8gbm90IGFkZCBcIi5qc1wiIGV4dGVuc2lvbiB0byBpdC5cbiAqXG4gKiBCb290IGZpbGVzIGFyZSB5b3VyIFwibWFpbi5qc1wiXG4gKiovXG5cblxuXG5pbXBvcnQgeyBRdWFzYXIgfSBmcm9tICdxdWFzYXInXG5pbXBvcnQgeyBtYXJrUmF3IH0gZnJvbSAndnVlJ1xuaW1wb3J0IFJvb3RDb21wb25lbnQgZnJvbSAnYXBwL3NyYy9BcHAudnVlJ1xuXG5pbXBvcnQgY3JlYXRlU3RvcmUgZnJvbSAnYXBwL3NyYy9zdG9yZXMvaW5kZXgnXG5pbXBvcnQgY3JlYXRlUm91dGVyIGZyb20gJ2FwcC9zcmMvcm91dGVyL2luZGV4J1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChjcmVhdGVBcHBGbiwgcXVhc2FyVXNlck9wdGlvbnMpIHtcbiAgLy8gQ3JlYXRlIHRoZSBhcHAgaW5zdGFuY2UuXG4gIC8vIEhlcmUgd2UgaW5qZWN0IGludG8gaXQgdGhlIFF1YXNhciBVSSwgdGhlIHJvdXRlciAmIHBvc3NpYmx5IHRoZSBzdG9yZS5cbiAgY29uc3QgYXBwID0gY3JlYXRlQXBwRm4oUm9vdENvbXBvbmVudClcblxuICBcbiAgYXBwLmNvbmZpZy5wZXJmb3JtYW5jZSA9IHRydWVcbiAgXG5cbiAgYXBwLnVzZShRdWFzYXIsIHF1YXNhclVzZXJPcHRpb25zKVxuXG4gIFxuXG4gIFxuICAgIGNvbnN0IHN0b3JlID0gdHlwZW9mIGNyZWF0ZVN0b3JlID09PSAnZnVuY3Rpb24nXG4gICAgICA/IGF3YWl0IGNyZWF0ZVN0b3JlKHt9KVxuICAgICAgOiBjcmVhdGVTdG9yZVxuXG4gICAgXG4gICAgICBhcHAudXNlKHN0b3JlKVxuXG4gICAgICBcbiAgICBcbiAgXG5cbiAgY29uc3Qgcm91dGVyID0gbWFya1JhdyhcbiAgICB0eXBlb2YgY3JlYXRlUm91dGVyID09PSAnZnVuY3Rpb24nXG4gICAgICA/IGF3YWl0IGNyZWF0ZVJvdXRlcih7c3RvcmV9KVxuICAgICAgOiBjcmVhdGVSb3V0ZXJcbiAgKVxuXG4gIFxuICAgIC8vIG1ha2Ugcm91dGVyIGluc3RhbmNlIGF2YWlsYWJsZSBpbiBzdG9yZVxuICAgIFxuICAgICAgc3RvcmUudXNlKCh7IHN0b3JlIH0pID0+IHsgc3RvcmUucm91dGVyID0gcm91dGVyIH0pXG4gICAgXG4gIFxuXG4gIC8vIEV4cG9zZSB0aGUgYXBwLCB0aGUgcm91dGVyIGFuZCB0aGUgc3RvcmUuXG4gIC8vIE5vdGUgdGhhdCB3ZSBhcmUgbm90IG1vdW50aW5nIHRoZSBhcHAgaGVyZSwgc2luY2UgYm9vdHN0cmFwcGluZyB3aWxsIGJlXG4gIC8vIGRpZmZlcmVudCBkZXBlbmRpbmcgb24gd2hldGhlciB3ZSBhcmUgaW4gYSBicm93c2VyIG9yIG9uIHRoZSBzZXJ2ZXIuXG4gIHJldHVybiB7XG4gICAgYXBwLFxuICAgIHN0b3JlLFxuICAgIHJvdXRlclxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./.quasar/app.js\n");

/***/ }),

/***/ "./.quasar/client-entry.js":
/*!*********************************!*\
  !*** ./.quasar/client-entry.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _quasar_extras_roboto_font_roboto_font_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @quasar/extras/roboto-font/roboto-font.css */ \"./node_modules/@quasar/extras/roboto-font/roboto-font.css\");\n/* harmony import */ var _quasar_extras_roboto_font_roboto_font_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_quasar_extras_roboto_font_roboto_font_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _quasar_extras_material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @quasar/extras/material-icons/material-icons.css */ \"./node_modules/@quasar/extras/material-icons/material-icons.css\");\n/* harmony import */ var _quasar_extras_material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_quasar_extras_material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var quasar_dist_quasar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quasar/dist/quasar.css */ \"./node_modules/quasar/dist/quasar.css\");\n/* harmony import */ var quasar_dist_quasar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quasar_dist_quasar_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var src_css_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/css/app.css */ \"./src/css/app.css\");\n/* harmony import */ var src_css_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(src_css_app_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.js */ \"./.quasar/app.js\");\n/* harmony import */ var _quasar_user_options_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quasar-user-options.js */ \"./.quasar/quasar-user-options.js\");\n/**\n * THIS FILE IS GENERATED AUTOMATICALLY.\n * DO NOT EDIT.\n *\n * You are probably looking on adding startup/initialization code.\n * Use \"quasar new boot <name>\" and add it there.\n * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:\n * boot: ['file', ...] // do not add \".js\" extension to it.\n *\n * Boot files are your \"main.js\"\n **/\n\n\n\n\n\n// We load Quasar stylesheet file\n\n\n\n\nconsole.info('[Quasar] Running SPA.');\nconst publicPath = ``;\nasync function start({\n  app,\n  router,\n  store\n}, bootFiles) {\n  let hasRedirected = false;\n  const getRedirectUrl = url => {\n    try {\n      return router.resolve(url).href;\n    } catch (err) {}\n    return Object(url) === url ? null : url;\n  };\n  const redirect = url => {\n    hasRedirected = true;\n    if (typeof url === 'string' && /^https?:\\/\\//.test(url)) {\n      window.location.href = url;\n      return;\n    }\n    const href = getRedirectUrl(url);\n\n    // continue if we didn't fail to resolve the url\n    if (href !== null) {\n      window.location.href = href;\n      window.location.reload();\n    }\n  };\n  const urlPath = window.location.href.replace(window.location.origin, '');\n  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {\n    try {\n      await bootFiles[i]({\n        app,\n        router,\n        store,\n        ssrContext: null,\n        redirect,\n        urlPath,\n        publicPath\n      });\n    } catch (err) {\n      if (err && err.url) {\n        redirect(err.url);\n        return;\n      }\n      console.error('[Quasar] boot error:', err);\n      return;\n    }\n  }\n  if (hasRedirected === true) {\n    return;\n  }\n  app.use(router);\n  app.mount('#q-app');\n}\n(0,_app_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(vue__WEBPACK_IMPORTED_MODULE_0__.createApp, _quasar_user_options_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]).then(app => {\n  // eventually remove this when Cordova/Capacitor/Electron support becomes old\n  const [method, mapFn] = Promise.allSettled !== void 0 ? ['allSettled', bootFiles => bootFiles.map(result => {\n    if (result.status === 'rejected') {\n      console.error('[Quasar] boot error:', result.reason);\n      return;\n    }\n    return result.value.default;\n  })] : ['all', bootFiles => bootFiles.map(entry => entry.default)];\n  return Promise[method]([Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! boot/axios */ \"./src/boot/axios.js\"))]).then(bootFiles => {\n    const boot = mapFn(bootFiles).filter(entry => typeof entry === 'function');\n    start(app, boot);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi8ucXVhc2FyL2NsaWVudC1lbnRyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBUUE7QUFFQTs7QUFLQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBT0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBUUE7QUFPQTtBQUVBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBS0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2RhZ2VyYXJkY2xhcmEvLi8ucXVhc2FyL2NsaWVudC1lbnRyeS5qcz8yZjM5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVEhJUyBGSUxFIElTIEdFTkVSQVRFRCBBVVRPTUFUSUNBTExZLlxuICogRE8gTk9UIEVESVQuXG4gKlxuICogWW91IGFyZSBwcm9iYWJseSBsb29raW5nIG9uIGFkZGluZyBzdGFydHVwL2luaXRpYWxpemF0aW9uIGNvZGUuXG4gKiBVc2UgXCJxdWFzYXIgbmV3IGJvb3QgPG5hbWU+XCIgYW5kIGFkZCBpdCB0aGVyZS5cbiAqIE9uZSBib290IGZpbGUgcGVyIGNvbmNlcm4uIFRoZW4gcmVmZXJlbmNlIHRoZSBmaWxlKHMpIGluIHF1YXNhci5jb25maWcuanMgPiBib290OlxuICogYm9vdDogWydmaWxlJywgLi4uXSAvLyBkbyBub3QgYWRkIFwiLmpzXCIgZXh0ZW5zaW9uIHRvIGl0LlxuICpcbiAqIEJvb3QgZmlsZXMgYXJlIHlvdXIgXCJtYWluLmpzXCJcbiAqKi9cblxuXG5pbXBvcnQgeyBjcmVhdGVBcHAgfSBmcm9tICd2dWUnXG5cblxuXG5cblxuXG5cbmltcG9ydCAnQHF1YXNhci9leHRyYXMvcm9ib3RvLWZvbnQvcm9ib3RvLWZvbnQuY3NzJ1xuXG5pbXBvcnQgJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zL21hdGVyaWFsLWljb25zLmNzcydcblxuXG5cblxuLy8gV2UgbG9hZCBRdWFzYXIgc3R5bGVzaGVldCBmaWxlXG5pbXBvcnQgJ3F1YXNhci9kaXN0L3F1YXNhci5jc3MnXG5cblxuXG5cbmltcG9ydCAnc3JjL2Nzcy9hcHAuY3NzJ1xuXG5cbmltcG9ydCBjcmVhdGVRdWFzYXJBcHAgZnJvbSAnLi9hcHAuanMnXG5pbXBvcnQgcXVhc2FyVXNlck9wdGlvbnMgZnJvbSAnLi9xdWFzYXItdXNlci1vcHRpb25zLmpzJ1xuXG5cblxuXG5cblxuY29uc29sZS5pbmZvKCdbUXVhc2FyXSBSdW5uaW5nIFNQQS4nKVxuXG5cblxuY29uc3QgcHVibGljUGF0aCA9IGBgXG5cblxuYXN5bmMgZnVuY3Rpb24gc3RhcnQgKHtcbiAgYXBwLFxuICByb3V0ZXJcbiAgLCBzdG9yZVxufSwgYm9vdEZpbGVzKSB7XG4gIFxuXG4gIFxuICBsZXQgaGFzUmVkaXJlY3RlZCA9IGZhbHNlXG4gIGNvbnN0IGdldFJlZGlyZWN0VXJsID0gdXJsID0+IHtcbiAgICB0cnkgeyByZXR1cm4gcm91dGVyLnJlc29sdmUodXJsKS5ocmVmIH1cbiAgICBjYXRjaCAoZXJyKSB7fVxuXG4gICAgcmV0dXJuIE9iamVjdCh1cmwpID09PSB1cmxcbiAgICAgID8gbnVsbFxuICAgICAgOiB1cmxcbiAgfVxuICBjb25zdCByZWRpcmVjdCA9IHVybCA9PiB7XG4gICAgaGFzUmVkaXJlY3RlZCA9IHRydWVcblxuICAgIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJyAmJiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhyZWYgPSBnZXRSZWRpcmVjdFVybCh1cmwpXG5cbiAgICAvLyBjb250aW51ZSBpZiB3ZSBkaWRuJ3QgZmFpbCB0byByZXNvbHZlIHRoZSB1cmxcbiAgICBpZiAoaHJlZiAhPT0gbnVsbCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9XG4gIH1cblxuICBjb25zdCB1cmxQYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ub3JpZ2luLCAnJylcblxuICBmb3IgKGxldCBpID0gMDsgaGFzUmVkaXJlY3RlZCA9PT0gZmFsc2UgJiYgaSA8IGJvb3RGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBib290RmlsZXNbaV0oe1xuICAgICAgICBhcHAsXG4gICAgICAgIHJvdXRlcixcbiAgICAgICAgc3RvcmUsXG4gICAgICAgIHNzckNvbnRleHQ6IG51bGwsXG4gICAgICAgIHJlZGlyZWN0LFxuICAgICAgICB1cmxQYXRoLFxuICAgICAgICBwdWJsaWNQYXRoXG4gICAgICB9KVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyICYmIGVyci51cmwpIHtcbiAgICAgICAgcmVkaXJlY3QoZXJyLnVybClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tRdWFzYXJdIGJvb3QgZXJyb3I6JywgZXJyKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1JlZGlyZWN0ZWQgPT09IHRydWUpIHtcbiAgICByZXR1cm5cbiAgfVxuICBcblxuICBhcHAudXNlKHJvdXRlcilcbiAgXG5cbiAgXG5cbiAgICBcblxuICAgIFxuICAgICAgYXBwLm1vdW50KCcjcS1hcHAnKVxuICAgIFxuXG4gICAgXG5cbiAgXG5cbn1cblxuY3JlYXRlUXVhc2FyQXBwKGNyZWF0ZUFwcCwgcXVhc2FyVXNlck9wdGlvbnMpXG5cbiAgLnRoZW4oYXBwID0+IHtcbiAgICAvLyBldmVudHVhbGx5IHJlbW92ZSB0aGlzIHdoZW4gQ29yZG92YS9DYXBhY2l0b3IvRWxlY3Ryb24gc3VwcG9ydCBiZWNvbWVzIG9sZFxuICAgIGNvbnN0IFsgbWV0aG9kLCBtYXBGbiBdID0gUHJvbWlzZS5hbGxTZXR0bGVkICE9PSB2b2lkIDBcbiAgICAgID8gW1xuICAgICAgICAnYWxsU2V0dGxlZCcsXG4gICAgICAgIGJvb3RGaWxlcyA9PiBib290RmlsZXMubWFwKHJlc3VsdCA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdyZWplY3RlZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tRdWFzYXJdIGJvb3QgZXJyb3I6JywgcmVzdWx0LnJlYXNvbilcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0LnZhbHVlLmRlZmF1bHRcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICAgIDogW1xuICAgICAgICAnYWxsJyxcbiAgICAgICAgYm9vdEZpbGVzID0+IGJvb3RGaWxlcy5tYXAoZW50cnkgPT4gZW50cnkuZGVmYXVsdClcbiAgICAgIF1cblxuICAgIHJldHVybiBQcm9taXNlWyBtZXRob2QgXShbXG4gICAgICBcbiAgICAgIGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJlYWdlclwiICovICdib290L2F4aW9zJylcbiAgICAgIFxuICAgIF0pLnRoZW4oYm9vdEZpbGVzID0+IHtcbiAgICAgIGNvbnN0IGJvb3QgPSBtYXBGbihib290RmlsZXMpLmZpbHRlcihlbnRyeSA9PiB0eXBlb2YgZW50cnkgPT09ICdmdW5jdGlvbicpXG4gICAgICBzdGFydChhcHAsIGJvb3QpXG4gICAgfSlcbiAgfSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./.quasar/client-entry.js\n");

/***/ }),

/***/ "./.quasar/quasar-user-options.js":
/*!****************************************!*\
  !*** ./.quasar/quasar-user-options.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * THIS FILE IS GENERATED AUTOMATICALLY.\n * DO NOT EDIT.\n *\n * You are probably looking on adding startup/initialization code.\n * Use \"quasar new boot <name>\" and add it there.\n * One boot file per concern. Then reference the file(s) in quasar.config.js > boot:\n * boot: ['file', ...] // do not add \".js\" extension to it.\n *\n * Boot files are your \"main.js\"\n **/\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  config: {\n    \"screen\": {\n      \"bodyClasses\": true\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi8ucXVhc2FyL3F1YXNhci11c2VyLW9wdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2RhZ2VyYXJkY2xhcmEvLi8ucXVhc2FyL3F1YXNhci11c2VyLW9wdGlvbnMuanM/ZTk0NiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRISVMgRklMRSBJUyBHRU5FUkFURUQgQVVUT01BVElDQUxMWS5cbiAqIERPIE5PVCBFRElULlxuICpcbiAqIFlvdSBhcmUgcHJvYmFibHkgbG9va2luZyBvbiBhZGRpbmcgc3RhcnR1cC9pbml0aWFsaXphdGlvbiBjb2RlLlxuICogVXNlIFwicXVhc2FyIG5ldyBib290IDxuYW1lPlwiIGFuZCBhZGQgaXQgdGhlcmUuXG4gKiBPbmUgYm9vdCBmaWxlIHBlciBjb25jZXJuLiBUaGVuIHJlZmVyZW5jZSB0aGUgZmlsZShzKSBpbiBxdWFzYXIuY29uZmlnLmpzID4gYm9vdDpcbiAqIGJvb3Q6IFsnZmlsZScsIC4uLl0gLy8gZG8gbm90IGFkZCBcIi5qc1wiIGV4dGVuc2lvbiB0byBpdC5cbiAqXG4gKiBCb290IGZpbGVzIGFyZSB5b3VyIFwibWFpbi5qc1wiXG4gKiovXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgeyBjb25maWc6IHtcInNjcmVlblwiOntcImJvZHlDbGFzc2VzXCI6dHJ1ZX19IH1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./.quasar/quasar-user-options.js\n");

/***/ }),

/***/ "./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({\n  name: 'App'\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAtd2VicGFjay9saWIvd2VicGFjay9sb2FkZXIuanMudHJhbnNmb3JtLXF1YXNhci1pbXBvcnRzLmpzIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAtd2VicGFjay9saWIvd2VicGFjay9sb2FkZXIudnVlLmF1dG8taW1wb3J0LXF1YXNhci5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVsxXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2RhZ2VyYXJkY2xhcmEvLi9zcmMvQXBwLnZ1ZT8zZGZkIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHJvdXRlci12aWV3IC8+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnQXBwJ1xufSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_view);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAtd2VicGFjay9saWIvd2VicGFjay9sb2FkZXIuanMudHJhbnNmb3JtLXF1YXNhci1pbXBvcnRzLmpzIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwLXdlYnBhY2svbGliL3dlYnBhY2svbG9hZGVyLnZ1ZS5hdXRvLWltcG9ydC1xdWFzYXIuanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMV0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL0FwcC52dWU/M2RmZCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxyb3V0ZXItdmlldyAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FwcCdcbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ }),

/***/ "./src/boot/axios.js":
/*!***************************!*\
  !*** ./src/boot/axios.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quasar/wrappers */ \"./node_modules/quasar/wrappers/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n\n// Be careful when using SSR for cross-request state pollution\n// due to creating a Singleton instance here;\n// If any client changes this (global) instance, it might be a\n// good idea to move this instance creation inside of the\n// \"export default () => {}\" function below (which runs individually\n// for each client)\nconst api = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n  baseURL: 'https://api.example.com'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__.boot)(({\n  app\n}) => {\n  // for use inside Vue files (Options API) through this.$axios and this.$api\n\n  app.config.globalProperties.$axios = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)\n  //       so you won't necessarily have to import axios in each vue file\n\n  app.config.globalProperties.$api = api;\n  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)\n  //       so you can easily perform requests against your app's API\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYm9vdC9heGlvcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2RhZ2VyYXJkY2xhcmEvLi9zcmMvYm9vdC9heGlvcy5qcz83NThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3QgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbi8vIEJlIGNhcmVmdWwgd2hlbiB1c2luZyBTU1IgZm9yIGNyb3NzLXJlcXVlc3Qgc3RhdGUgcG9sbHV0aW9uXG4vLyBkdWUgdG8gY3JlYXRpbmcgYSBTaW5nbGV0b24gaW5zdGFuY2UgaGVyZTtcbi8vIElmIGFueSBjbGllbnQgY2hhbmdlcyB0aGlzIChnbG9iYWwpIGluc3RhbmNlLCBpdCBtaWdodCBiZSBhXG4vLyBnb29kIGlkZWEgdG8gbW92ZSB0aGlzIGluc3RhbmNlIGNyZWF0aW9uIGluc2lkZSBvZiB0aGVcbi8vIFwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge31cIiBmdW5jdGlvbiBiZWxvdyAod2hpY2ggcnVucyBpbmRpdmlkdWFsbHlcbi8vIGZvciBlYWNoIGNsaWVudClcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7IGJhc2VVUkw6ICdodHRwczovL2FwaS5leGFtcGxlLmNvbScgfSlcblxuZXhwb3J0IGRlZmF1bHQgYm9vdCgoeyBhcHAgfSkgPT4ge1xuICAvLyBmb3IgdXNlIGluc2lkZSBWdWUgZmlsZXMgKE9wdGlvbnMgQVBJKSB0aHJvdWdoIHRoaXMuJGF4aW9zIGFuZCB0aGlzLiRhcGlcblxuICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJGF4aW9zID0gYXhpb3NcbiAgLy8gXiBeIF4gdGhpcyB3aWxsIGFsbG93IHlvdSB0byB1c2UgdGhpcy4kYXhpb3MgKGZvciBWdWUgT3B0aW9ucyBBUEkgZm9ybSlcbiAgLy8gICAgICAgc28geW91IHdvbid0IG5lY2Vzc2FyaWx5IGhhdmUgdG8gaW1wb3J0IGF4aW9zIGluIGVhY2ggdnVlIGZpbGVcblxuICBhcHAuY29uZmlnLmdsb2JhbFByb3BlcnRpZXMuJGFwaSA9IGFwaVxuICAvLyBeIF4gXiB0aGlzIHdpbGwgYWxsb3cgeW91IHRvIHVzZSB0aGlzLiRhcGkgKGZvciBWdWUgT3B0aW9ucyBBUEkgZm9ybSlcbiAgLy8gICAgICAgc28geW91IGNhbiBlYXNpbHkgcGVyZm9ybSByZXF1ZXN0cyBhZ2FpbnN0IHlvdXIgYXBwJ3MgQVBJXG59KVxuXG5leHBvcnQgeyBhcGkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/boot/axios.js\n");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quasar/wrappers */ \"./node_modules/quasar/wrappers/index.mjs\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n/*\n * If not building with SSR mode, you can\n * directly export the Router instantiation;\n *\n * The function below can be async too; either use\n * async/await or return a Promise which resolves\n * with the Router instance.\n */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__.route)(function /* { store, ssrContext } */\n() {\n  const createHistory =  false ? 0 :  false ? 0 : vue_router__WEBPACK_IMPORTED_MODULE_2__.createWebHashHistory;\n  const Router = (0,vue_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({\n    // scrollBehavior: () => ({ left: 0, top: 0 }),\n    scrollBehavior: (to, from, savedPosition) => {\n      console.log(\"to = \", to);\n      console.log(\"from = \", from);\n      console.log(\"savedPosition = \", savedPosition);\n      if (savedPosition) {\n        return savedPosition;\n      }\n      if (to.hash) {\n        return {\n          el: to.hash,\n          top: 74.77,\n          behavior: 'smooth'\n        };\n      }\n      return {\n        left: 0,\n        top: 0\n      };\n    },\n    routes: _routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    // Leave this as is and make changes in quasar.conf.js instead!\n    // quasar.conf.js -> build -> vueRouterMode\n    // quasar.conf.js -> build -> publicPath\n    history: createHistory( false ? 0 : \"\")\n  });\n  return Router;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL3JvdXRlci9pbmRleC5qcz9hMThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvdXRlIH0gZnJvbSAncXVhc2FyL3dyYXBwZXJzJ1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVXZWJIaXN0b3J5LCBjcmVhdGVXZWJIYXNoSGlzdG9yeSB9IGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG4vKlxuICogSWYgbm90IGJ1aWxkaW5nIHdpdGggU1NSIG1vZGUsIHlvdSBjYW5cbiAqIGRpcmVjdGx5IGV4cG9ydCB0aGUgUm91dGVyIGluc3RhbnRpYXRpb247XG4gKlxuICogVGhlIGZ1bmN0aW9uIGJlbG93IGNhbiBiZSBhc3luYyB0b287IGVpdGhlciB1c2VcbiAqIGFzeW5jL2F3YWl0IG9yIHJldHVybiBhIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXNcbiAqIHdpdGggdGhlIFJvdXRlciBpbnN0YW5jZS5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZShmdW5jdGlvbiAoLyogeyBzdG9yZSwgc3NyQ29udGV4dCB9ICovKSB7XG4gIGNvbnN0IGNyZWF0ZUhpc3RvcnkgPSBwcm9jZXNzLmVudi5TRVJWRVJcbiAgICA/IGNyZWF0ZU1lbW9yeUhpc3RvcnlcbiAgICA6IChwcm9jZXNzLmVudi5WVUVfUk9VVEVSX01PREUgPT09ICdoaXN0b3J5JyA/IGNyZWF0ZVdlYkhpc3RvcnkgOiBjcmVhdGVXZWJIYXNoSGlzdG9yeSlcblxuICBjb25zdCBSb3V0ZXIgPSBjcmVhdGVSb3V0ZXIoe1xuICAgIC8vIHNjcm9sbEJlaGF2aW9yOiAoKSA9PiAoeyBsZWZ0OiAwLCB0b3A6IDAgfSksXG4gICAgc2Nyb2xsQmVoYXZpb3I6ICh0bywgZnJvbSwgc2F2ZWRQb3NpdGlvbikgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJ0byA9IFwiLCB0bylcbiAgICAgIGNvbnNvbGUubG9nKFwiZnJvbSA9IFwiLCBmcm9tKVxuICAgICAgY29uc29sZS5sb2coXCJzYXZlZFBvc2l0aW9uID0gXCIsIHNhdmVkUG9zaXRpb24pXG4gICAgICBcbiAgICAgIFxuICAgICAgaWYgKHNhdmVkUG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHNhdmVkUG9zaXRpb247XG4gICAgICB9XG4gICAgICBpZiAodG8uaGFzaCkge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgZWw6IHRvLmhhc2gsIHRvcDogNzQuNzcsICBiZWhhdmlvcjogJ3Ntb290aCcgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGxlZnQ6IDAsIHRvcDogMCB9OyAgXG4gICAgfSxcbiAgICByb3V0ZXMsXG5cbiAgICAvLyBMZWF2ZSB0aGlzIGFzIGlzIGFuZCBtYWtlIGNoYW5nZXMgaW4gcXVhc2FyLmNvbmYuanMgaW5zdGVhZCFcbiAgICAvLyBxdWFzYXIuY29uZi5qcyAtPiBidWlsZCAtPiB2dWVSb3V0ZXJNb2RlXG4gICAgLy8gcXVhc2FyLmNvbmYuanMgLT4gYnVpbGQgLT4gcHVibGljUGF0aFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUhpc3RvcnkocHJvY2Vzcy5lbnYuTU9ERSA9PT0gJ3NzcicgPyB2b2lkIDAgOiBwcm9jZXNzLmVudi5WVUVfUk9VVEVSX0JBU0UpXG4gIH0pXG5cbiAgcmV0dXJuIFJvdXRlclxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst routes = [{\n  path: '/',\n  component: () => Promise.all(/*! import() */[__webpack_require__.e(\"vendor\"), __webpack_require__.e(\"src_layouts_MainLayout_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! layouts/MainLayout.vue */ \"./src/layouts/MainLayout.vue\")),\n  children: [{\n    path: '',\n    component: () => Promise.all(/*! import() */[__webpack_require__.e(\"vendor\"), __webpack_require__.e(\"src_pages_IndexPage_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/IndexPage.vue */ \"./src/pages/IndexPage.vue\"))\n  }]\n},\n// Always leave this as last one,\n// but you can also remove it\n{\n  path: '/:catchAll(.*)*',\n  component: () => Promise.all(/*! import() */[__webpack_require__.e(\"vendor\"), __webpack_require__.e(\"src_pages_ErrorNotFound_vue\")]).then(__webpack_require__.bind(__webpack_require__, /*! pages/ErrorNotFound.vue */ \"./src/pages/ErrorNotFound.vue\"))\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL3JvdXRlcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL3JvdXRlci9yb3V0ZXMuanM/ZDA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZScpLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgncGFnZXMvSW5kZXhQYWdlLnZ1ZScpIH1cbiAgICBdXG4gIH0sXG5cbiAgLy8gQWx3YXlzIGxlYXZlIHRoaXMgYXMgbGFzdCBvbmUsXG4gIC8vIGJ1dCB5b3UgY2FuIGFsc28gcmVtb3ZlIGl0XG4gIHtcbiAgICBwYXRoOiAnLzpjYXRjaEFsbCguKikqJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgncGFnZXMvRXJyb3JOb3RGb3VuZC52dWUnKVxuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router/routes.js\n");

/***/ }),

/***/ "./src/stores/index.js":
/*!*****************************!*\
  !*** ./src/stores/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quasar/wrappers */ \"./node_modules/quasar/wrappers/index.mjs\");\n/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ \"./node_modules/pinia/dist/pinia.mjs\");\n\n\n\n/*\n * If not building with SSR mode, you can\n * directly export the Store instantiation;\n *\n * The function below can be async too; either use\n * async/await or return a Promise which resolves\n * with the Store instance.\n */\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,quasar_wrappers__WEBPACK_IMPORTED_MODULE_0__.store)(( /* { ssrContext } */\n) => {\n  const pinia = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.createPinia)();\n\n  // You can add Pinia plugins here\n  // pinia.use(SomePiniaPlugin)\n\n  return pinia;\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL3N0b3Jlcy9pbmRleC5qcz9hNDdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0b3JlIH0gZnJvbSAncXVhc2FyL3dyYXBwZXJzJ1xuaW1wb3J0IHsgY3JlYXRlUGluaWEgfSBmcm9tICdwaW5pYSdcblxuLypcbiAqIElmIG5vdCBidWlsZGluZyB3aXRoIFNTUiBtb2RlLCB5b3UgY2FuXG4gKiBkaXJlY3RseSBleHBvcnQgdGhlIFN0b3JlIGluc3RhbnRpYXRpb247XG4gKlxuICogVGhlIGZ1bmN0aW9uIGJlbG93IGNhbiBiZSBhc3luYyB0b287IGVpdGhlciB1c2VcbiAqIGFzeW5jL2F3YWl0IG9yIHJldHVybiBhIFByb21pc2Ugd2hpY2ggcmVzb2x2ZXNcbiAqIHdpdGggdGhlIFN0b3JlIGluc3RhbmNlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlKCgvKiB7IHNzckNvbnRleHQgfSAqLykgPT4ge1xuICBjb25zdCBwaW5pYSA9IGNyZWF0ZVBpbmlhKClcblxuICAvLyBZb3UgY2FuIGFkZCBQaW5pYSBwbHVnaW5zIGhlcmVcbiAgLy8gcGluaWEudXNlKFNvbWVQaW5pYVBsdWdpbilcblxuICByZXR1cm4gcGluaWFcbn0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stores/index.js\n");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./src/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/App.vue\"]])\n/* hot reload */\nif (true) {\n  __exports__.__hmrId = \"7ba5bd90\"\n  const api = __VUE_HMR_RUNTIME__\n  module.hot.accept()\n  if (!api.createRecord('7ba5bd90', __exports__)) {\n    api.reload('7ba5bd90', __exports__)\n  }\n  \n  module.hot.accept(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ \"./src/App.vue?vue&type=template&id=7ba5bd90\");\n(() => {\n    api.rerender('7ba5bd90', _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render)\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnZ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL0FwcC52dWU/ZTVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiYTViZDkwXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcInNyYy9BcHAudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjdiYTViZDkwXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnN2JhNWJkOTAnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc3YmE1YmQ5MCcsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3YmE1YmQ5MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.vue\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./src/css/app.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./src/css/app.css ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* app global css */\\n\\n\\n\\n@font-face {\\n  font-family: 'TT Commons Pro Expanded';\\n  src: local('Fontspring-DEMO-tt_commons_pro_expanded_regular.otf') format('opentype');\\n  font-weight: normal;\\n  font-style: normal;\\n\\n}\\n\\n\\n/* body{\\n  font-size: calc(1em + 1vw);\\n} */\\n\\n\\n\\n.titol{\\n  font-family: 'PT Serif', 'Courier New', Arial, Helvetica, sans-serif;\\n  text-align: center;\\n  font-weight: bold;\\n  color:#4e6146;\\n  font-size: 140%;\\n};\\n\\n\\n\\n\\n\\n\\n/* xs <= 599.99px \\n@media screen and (max-width: 599.99px) {\\n  .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;   \\n    background-color: #ff0000;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 20px;\\n  };\\n\\n  .tarjeta{\\n    font-size: 20px;\\n  }; \\n\\n}\\n*/\\n\\n\\nbody.screen--xl {\\n\\n}\\n\\n\\n\\n/* */\\nbody.screen--xl {\\n  .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #ff00ea; */\\n    font-size: 40px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 40px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 40px;\\n  };\\n\\n}\\n\\n\\nbody.screen--lg {\\n  .menuFont .q-btn__content{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #003cff; */\\n    font-size: 34px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 34px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 34px;\\n  };  \\n}\\n\\n\\n\\nbody.screen--md {\\n  .menuFont .q-btn__content{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #00ff15; */\\n    font-size: 25px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 30px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 30px;\\n  };  \\n\\n}\\n\\n\\nbody.screen--sm {\\n  .menuFont, .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #f3ff45; */\\n    font-size: 24px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 24px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 24px;\\n  };  \\n\\n}\\n\\n\\n\\nbody.screen--xs {\\n  .menuFont, .q-list--bordered, .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif; \\n    color: #76766b;   \\n    /* background-color: #ff0000; */\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 14px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    font-size: 20px;\\n    color: #76766b;  \\n  };  \\n\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* xs <= 599.99px \\n@media screen and (max-width: 599.99px) {\\n  .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;   \\n    background-color: #ff0000;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 20px;\\n  };\\n\\n  .tarjeta{\\n    font-size: 20px;\\n  }; \\n}\\n*/\\n\\n\\n/* md = entre 599.99px i 1439.99px \\n@media screen and (max-width: 1439.99px) and (min-width: 600px){\\n  .tarjeta {\\n    font-size: 34px;\\n  };\\n  .menuFont{\\n    font-size: 54px;\\n    color:blue;\\n  };\\n  \\n\\n}\\n*/\\n\\n\\n/* lg >= 1440px \\n@media screen and (min-width: 1440px) {\\n  .tarjeta{\\n    font-size: 44px;\\n  };\\n\\n  .menuFont{\\n    font-size: 44px;\\n    \\n  };\\n\\n\\n}\\n*/\\n\\n\\n\\n\\n\\n\\n\\n\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/css/app.css\"],\"names\":[],\"mappings\":\"AAAA,mBAAmB;;;;AAInB;EACE,sCAAsC;EACtC,oFAAoF;EACpF,mBAAmB;EACnB,kBAAkB;;AAEpB;;;AAMA;;GAEG;;;;AAIH;EACE,oEAAoE;EACpE,kBAAkB;EAClB,iBAAiB;EACjB,aAAa;EACb,eAAe;AACjB,CAAA;;;;;;;AAOA;;;;;;;;;;;;;;;;;;CAkBC;;;AAGD;;AAEA;;;;AAIA,IAAI;AACJ;EACE;IACE,mFAAmF;IACnF,cAAc;IACd,+BAA+B;IAC/B,eAAe;EACjB,CAAA;;EAEA;IACE,mFAAmF;IACnF,cAAc;IACd,eAAe;EACjB,CAAA;;EAEA;IACE,qEAAqE;IACrE,aAAa;IACb,eAAe;EACjB,CAAA;;AAEF;;;AAGA;EACE;IACE,mFAAmF;IACnF,cAAc;IACd,+BAA+B;IAC/B,eAAe;EACjB,CAAA;;EAEA;IACE,mFAAmF;IACnF,cAAc;IACd,eAAe;EACjB,CAAA;;EAEA;IACE,qEAAqE;IACrE,aAAa;IACb,eAAe;EACjB,CAAA;AACF;;;;AAIA;EACE;IACE,mFAAmF;IACnF,cAAc;IACd,+BAA+B;IAC/B,eAAe;EACjB,CAAA;;EAEA;IACE,mFAAmF;IACnF,cAAc;IACd,eAAe;EACjB,CAAA;;EAEA;IACE,qEAAqE;IACrE,aAAa;IACb,eAAe;EACjB,CAAA;;AAEF;;;AAGA;EACE;IACE,mFAAmF;IACnF,cAAc;IACd,+BAA+B;IAC/B,eAAe;EACjB,CAAA;;EAEA;IACE,mFAAmF;IACnF,cAAc;IACd,eAAe;EACjB,CAAA;;EAEA;IACE,qEAAqE;IACrE,aAAa;IACb,eAAe;EACjB,CAAA;;AAEF;;;;AAIA;EACE;IACE,mFAAmF;IACnF,cAAc;IACd,+BAA+B;EACjC,CAAA;;EAEA;IACE,mFAAmF;IACnF,cAAc;IACd,eAAe;EACjB,CAAA;;EAEA;IACE,qEAAqE;IACrE,eAAe;IACf,cAAc;EAChB,CAAA;;AAEF;;;;;;;;;;;;;;;;;;;;;;;;AAwBA;;;;;;;;;;;;;;;;;CAiBC;;;AAGD;;;;;;;;;;;;CAYC;;;AAGD;;;;;;;;;;;;;CAaC\",\"sourcesContent\":[\"/* app global css */\\n\\n\\n\\n@font-face {\\n  font-family: 'TT Commons Pro Expanded';\\n  src: local('Fontspring-DEMO-tt_commons_pro_expanded_regular.otf') format('opentype');\\n  font-weight: normal;\\n  font-style: normal;\\n\\n}\\n\\n\\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');\\n\\n\\n/* body{\\n  font-size: calc(1em + 1vw);\\n} */\\n\\n\\n\\n.titol{\\n  font-family: 'PT Serif', 'Courier New', Arial, Helvetica, sans-serif;\\n  text-align: center;\\n  font-weight: bold;\\n  color:#4e6146;\\n  font-size: 140%;\\n};\\n\\n\\n\\n\\n\\n\\n/* xs <= 599.99px \\n@media screen and (max-width: 599.99px) {\\n  .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;   \\n    background-color: #ff0000;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 20px;\\n  };\\n\\n  .tarjeta{\\n    font-size: 20px;\\n  }; \\n\\n}\\n*/\\n\\n\\nbody.screen--xl {\\n\\n}\\n\\n\\n\\n/* */\\nbody.screen--xl {\\n  .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #ff00ea; */\\n    font-size: 40px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 40px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 40px;\\n  };\\n\\n}\\n\\n\\nbody.screen--lg {\\n  .menuFont .q-btn__content{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #003cff; */\\n    font-size: 34px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 34px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 34px;\\n  };  \\n}\\n\\n\\n\\nbody.screen--md {\\n  .menuFont .q-btn__content{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #00ff15; */\\n    font-size: 25px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 30px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 30px;\\n  };  \\n\\n}\\n\\n\\nbody.screen--sm {\\n  .menuFont, .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    /* background-color: #f3ff45; */\\n    font-size: 24px;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 24px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    color:#76766b;\\n    font-size: 24px;\\n  };  \\n\\n}\\n\\n\\n\\nbody.screen--xs {\\n  .menuFont, .q-list--bordered, .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif; \\n    color: #76766b;   \\n    /* background-color: #ff0000; */\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 14px;\\n  };\\n\\n  .tarjeta{\\n    font-family: 'Open Sans', 'Courier New', Arial, Helvetica, sans-serif;\\n    font-size: 20px;\\n    color: #76766b;  \\n  };  \\n\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n/* xs <= 599.99px \\n@media screen and (max-width: 599.99px) {\\n  .menuFont .q-btn__content {\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;   \\n    background-color: #ff0000;\\n  };\\n\\n  .compteEnrere{\\n    font-family: 'TT Commons Pro Expanded', 'Courier New', Arial, Helvetica, sans-serif;\\n    color: #76766b;    \\n    font-size: 20px;\\n  };\\n\\n  .tarjeta{\\n    font-size: 20px;\\n  }; \\n}\\n*/\\n\\n\\n/* md = entre 599.99px i 1439.99px \\n@media screen and (max-width: 1439.99px) and (min-width: 600px){\\n  .tarjeta {\\n    font-size: 34px;\\n  };\\n  .menuFont{\\n    font-size: 54px;\\n    color:blue;\\n  };\\n  \\n\\n}\\n*/\\n\\n\\n/* lg >= 1440px \\n@media screen and (min-width: 1440px) {\\n  .tarjeta{\\n    font-size: 44px;\\n  };\\n\\n  .menuFont{\\n    font-size: 44px;\\n    \\n  };\\n\\n\\n}\\n*/\\n\\n\\n\\n\\n\\n\\n\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsxXSEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuL3NyYy9jc3MvYXBwLmNzcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JvZGFnZXJhcmRjbGFyYS8uL3NyYy9jc3MvYXBwLmNzcz8yOTM2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZmFtaWx5PVBUK1NlcmlmOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBhcHAgZ2xvYmFsIGNzcyAqL1xcblxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCc7XFxuICBzcmM6IGxvY2FsKCdGb250c3ByaW5nLURFTU8tdHRfY29tbW9uc19wcm9fZXhwYW5kZWRfcmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbn1cXG5cXG5cXG4vKiBib2R5e1xcbiAgZm9udC1zaXplOiBjYWxjKDFlbSArIDF2dyk7XFxufSAqL1xcblxcblxcblxcbi50aXRvbHtcXG4gIGZvbnQtZmFtaWx5OiAnUFQgU2VyaWYnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjojNGU2MTQ2O1xcbiAgZm9udC1zaXplOiAxNDAlO1xcbn07XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogeHMgPD0gNTk5Ljk5cHggXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5Ljk5cHgpIHtcXG4gIC5tZW51Rm9udCAucS1idG5fX2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDtcXG4gIH07XFxuXFxuICAuY29tcHRlRW5yZXJle1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9O1xcblxcbiAgLnRhcmpldGF7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH07IFxcblxcbn1cXG4qL1xcblxcblxcbmJvZHkuc2NyZWVuLS14bCB7XFxuXFxufVxcblxcblxcblxcbi8qICovXFxuYm9keS5zY3JlZW4tLXhsIHtcXG4gIC5tZW51Rm9udCAucS1idG5fX2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMGVhOyAqL1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICB9O1xcblxcbiAgLmNvbXB0ZUVucmVyZXtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgICBcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgfTtcXG5cXG4gIC50YXJqZXRhe1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiM3Njc2NmI7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH07XFxuXFxufVxcblxcblxcbmJvZHkuc2NyZWVuLS1sZyB7XFxuICAubWVudUZvbnQgLnEtYnRuX19jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzY2ZmOyAqL1xcbiAgICBmb250LXNpemU6IDM0cHg7XFxuICB9O1xcblxcbiAgLmNvbXB0ZUVucmVyZXtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgICBcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgfTtcXG5cXG4gIC50YXJqZXRhe1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiM3Njc2NmI7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gIH07ICBcXG59XFxuXFxuXFxuXFxuYm9keS5zY3JlZW4tLW1kIHtcXG4gIC5tZW51Rm9udCAucS1idG5fX2NvbnRlbnR7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMGZmMTU7ICovXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gIH07XFxuXFxuICAuY29tcHRlRW5yZXJle1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9O1xcblxcbiAgLnRhcmpldGF7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6Izc2NzY2YjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfTsgIFxcblxcbn1cXG5cXG5cXG5ib2R5LnNjcmVlbi0tc20ge1xcbiAgLm1lbnVGb250LCAubWVudUZvbnQgLnEtYnRuX19jb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgICBcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2YzZmY0NTsgKi9cXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfTtcXG5cXG4gIC5jb21wdGVFbnJlcmV7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH07XFxuXFxuICAudGFyamV0YXtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjojNzY3NjZiO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9OyAgXFxuXFxufVxcblxcblxcblxcbmJvZHkuc2NyZWVuLS14cyB7XFxuICAubWVudUZvbnQsIC5xLWxpc3QtLWJvcmRlcmVkLCAubWVudUZvbnQgLnEtYnRuX19jb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxcbiAgICBjb2xvcjogIzc2NzY2YjsgICBcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMDsgKi9cXG4gIH07XFxuXFxuICAuY29tcHRlRW5yZXJle1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9O1xcblxcbiAgLnRhcmpldGF7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogIzc2NzY2YjsgIFxcbiAgfTsgIFxcblxcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiB4cyA8PSA1OTkuOTlweCBcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xcbiAgLm1lbnVGb250IC5xLWJ0bl9fY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbiAgfTtcXG5cXG4gIC5jb21wdGVFbnJlcmV7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH07XFxuXFxuICAudGFyamV0YXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfTsgXFxufVxcbiovXFxuXFxuXFxuLyogbWQgPSBlbnRyZSA1OTkuOTlweCBpIDE0MzkuOTlweCBcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDM5Ljk5cHgpIGFuZCAobWluLXdpZHRoOiA2MDBweCl7XFxuICAudGFyamV0YSB7XFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gIH07XFxuICAubWVudUZvbnR7XFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXG4gICAgY29sb3I6Ymx1ZTtcXG4gIH07XFxuICBcXG5cXG59XFxuKi9cXG5cXG5cXG4vKiBsZyA+PSAxNDQwcHggXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XFxuICAudGFyamV0YXtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgfTtcXG5cXG4gIC5tZW51Rm9udHtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICBcXG4gIH07XFxuXFxuXFxufVxcbiovXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9hcHAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1CQUFtQjs7OztBQUluQjtFQUNFLHNDQUFzQztFQUN0QyxvRkFBb0Y7RUFDcEYsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7OztBQU1BOztHQUVHOzs7O0FBSUg7RUFDRSxvRUFBb0U7RUFDcEUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtBQUNqQixDQUFBOzs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCQzs7O0FBR0Q7O0FBRUE7Ozs7QUFJQSxJQUFJO0FBQ0o7RUFDRTtJQUNFLG1GQUFtRjtJQUNuRixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7RUFDakIsQ0FBQTs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixjQUFjO0lBQ2QsZUFBZTtFQUNqQixDQUFBOztFQUVBO0lBQ0UscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixlQUFlO0VBQ2pCLENBQUE7O0FBRUY7OztBQUdBO0VBQ0U7SUFDRSxtRkFBbUY7SUFDbkYsY0FBYztJQUNkLCtCQUErQjtJQUMvQixlQUFlO0VBQ2pCLENBQUE7O0VBRUE7SUFDRSxtRkFBbUY7SUFDbkYsY0FBYztJQUNkLGVBQWU7RUFDakIsQ0FBQTs7RUFFQTtJQUNFLHFFQUFxRTtJQUNyRSxhQUFhO0lBQ2IsZUFBZTtFQUNqQixDQUFBO0FBQ0Y7Ozs7QUFJQTtFQUNFO0lBQ0UsbUZBQW1GO0lBQ25GLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZUFBZTtFQUNqQixDQUFBOztFQUVBO0lBQ0UsbUZBQW1GO0lBQ25GLGNBQWM7SUFDZCxlQUFlO0VBQ2pCLENBQUE7O0VBRUE7SUFDRSxxRUFBcUU7SUFDckUsYUFBYTtJQUNiLGVBQWU7RUFDakIsQ0FBQTs7QUFFRjs7O0FBR0E7RUFDRTtJQUNFLG1GQUFtRjtJQUNuRixjQUFjO0lBQ2QsK0JBQStCO0lBQy9CLGVBQWU7RUFDakIsQ0FBQTs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixjQUFjO0lBQ2QsZUFBZTtFQUNqQixDQUFBOztFQUVBO0lBQ0UscUVBQXFFO0lBQ3JFLGFBQWE7SUFDYixlQUFlO0VBQ2pCLENBQUE7O0FBRUY7Ozs7QUFJQTtFQUNFO0lBQ0UsbUZBQW1GO0lBQ25GLGNBQWM7SUFDZCwrQkFBK0I7RUFDakMsQ0FBQTs7RUFFQTtJQUNFLG1GQUFtRjtJQUNuRixjQUFjO0lBQ2QsZUFBZTtFQUNqQixDQUFBOztFQUVBO0lBQ0UscUVBQXFFO0lBQ3JFLGVBQWU7SUFDZixjQUFjO0VBQ2hCLENBQUE7O0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQkM7OztBQUdEOzs7Ozs7Ozs7Ozs7Q0FZQzs7O0FBR0Q7Ozs7Ozs7Ozs7Ozs7Q0FhQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBhcHAgZ2xvYmFsIGNzcyAqL1xcblxcblxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCc7XFxuICBzcmM6IGxvY2FsKCdGb250c3ByaW5nLURFTU8tdHRfY29tbW9uc19wcm9fZXhwYW5kZWRfcmVndWxhci5vdGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcblxcbn1cXG5cXG5cXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZmYW1pbHk9UFQrU2VyaWY6aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcblxcbi8qIGJvZHl7XFxuICBmb250LXNpemU6IGNhbGMoMWVtICsgMXZ3KTtcXG59ICovXFxuXFxuXFxuXFxuLnRpdG9se1xcbiAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZicsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiM0ZTYxNDY7XFxuICBmb250LXNpemU6IDE0MCU7XFxufTtcXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiB4cyA8PSA1OTkuOTlweCBcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTkuOTlweCkge1xcbiAgLm1lbnVGb250IC5xLWJ0bl9fY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xcbiAgfTtcXG5cXG4gIC5jb21wdGVFbnJlcmV7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH07XFxuXFxuICAudGFyamV0YXtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfTsgXFxuXFxufVxcbiovXFxuXFxuXFxuYm9keS5zY3JlZW4tLXhsIHtcXG5cXG59XFxuXFxuXFxuXFxuLyogKi9cXG5ib2R5LnNjcmVlbi0teGwge1xcbiAgLm1lbnVGb250IC5xLWJ0bl9fY29udGVudCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNmZjAwZWE7ICovXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gIH07XFxuXFxuICAuY29tcHRlRW5yZXJle1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICB9O1xcblxcbiAgLnRhcmpldGF7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6Izc2NzY2YjtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgfTtcXG5cXG59XFxuXFxuXFxuYm9keS5zY3JlZW4tLWxnIHtcXG4gIC5tZW51Rm9udCAucS1idG5fX2NvbnRlbnR7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDNjZmY7ICovXFxuICAgIGZvbnQtc2l6ZTogMzRweDtcXG4gIH07XFxuXFxuICAuY29tcHRlRW5yZXJle1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICBmb250LXNpemU6IDM0cHg7XFxuICB9O1xcblxcbiAgLnRhcmpldGF7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6Izc2NzY2YjtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgfTsgIFxcbn1cXG5cXG5cXG5cXG5ib2R5LnNjcmVlbi0tbWQge1xcbiAgLm1lbnVGb250IC5xLWJ0bl9fY29udGVudHtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgICBcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwZmYxNTsgKi9cXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgfTtcXG5cXG4gIC5jb21wdGVFbnJlcmV7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gIH07XFxuXFxuICAudGFyamV0YXtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjojNzY3NjZiO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9OyAgXFxuXFxufVxcblxcblxcbmJvZHkuc2NyZWVuLS1zbSB7XFxuICAubWVudUZvbnQsIC5tZW51Rm9udCAucS1idG5fX2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICM3Njc2NmI7ICAgIFxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmZjQ1OyAqL1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICB9O1xcblxcbiAgLmNvbXB0ZUVucmVyZXtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgICBcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfTtcXG5cXG4gIC50YXJqZXRhe1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiM3Njc2NmI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH07ICBcXG5cXG59XFxuXFxuXFxuXFxuYm9keS5zY3JlZW4tLXhzIHtcXG4gIC5tZW51Rm9udCwgLnEtbGlzdC0tYm9yZGVyZWQsIC5tZW51Rm9udCAucS1idG5fX2NvbnRlbnQge1xcbiAgICBmb250LWZhbWlseTogJ1RUIENvbW1vbnMgUHJvIEV4cGFuZGVkJywgJ0NvdXJpZXIgTmV3JywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgIFxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwOyAqL1xcbiAgfTtcXG5cXG4gIC5jb21wdGVFbnJlcmV7XFxuICAgIGZvbnQtZmFtaWx5OiAnVFQgQ29tbW9ucyBQcm8gRXhwYW5kZWQnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzc2NzY2YjsgICAgXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gIH07XFxuXFxuICAudGFyamV0YXtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCAnQ291cmllciBOZXcnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgXFxuICB9OyAgXFxuXFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIHhzIDw9IDU5OS45OXB4IFxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OS45OXB4KSB7XFxuICAubWVudUZvbnQgLnEtYnRuX19jb250ZW50IHtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XFxuICB9O1xcblxcbiAgLmNvbXB0ZUVucmVyZXtcXG4gICAgZm9udC1mYW1pbHk6ICdUVCBDb21tb25zIFBybyBFeHBhbmRlZCcsICdDb3VyaWVyIE5ldycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjNzY3NjZiOyAgICBcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgfTtcXG5cXG4gIC50YXJqZXRhe1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9OyBcXG59XFxuKi9cXG5cXG5cXG4vKiBtZCA9IGVudHJlIDU5OS45OXB4IGkgMTQzOS45OXB4IFxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzkuOTlweCkgYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcXG4gIC50YXJqZXRhIHtcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcbiAgfTtcXG4gIC5tZW51Rm9udHtcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcbiAgICBjb2xvcjpibHVlO1xcbiAgfTtcXG4gIFxcblxcbn1cXG4qL1xcblxcblxcbi8qIGxnID49IDE0NDBweCBcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcXG4gIC50YXJqZXRhe1xcbiAgICBmb250LXNpemU6IDQ0cHg7XFxuICB9O1xcblxcbiAgLm1lbnVGb250e1xcbiAgICBmb250LXNpemU6IDQ0cHg7XFxuICAgIFxcbiAgfTtcXG5cXG5cXG59XFxuKi9cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./src/css/app.css\n");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./App.vue?vue&type=script&lang=js */ \"./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=script&lang=js\");\n //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL0FwcC52dWU/NDAzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwLXdlYnBhY2svbGliL3dlYnBhY2svbG9hZGVyLmpzLnRyYW5zZm9ybS1xdWFzYXItaW1wb3J0cy5qcyEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0yLnVzZVswXSEuLi9ub2RlX21vZHVsZXMvQHF1YXNhci9hcHAtd2VicGFjay9saWIvd2VicGFjay9sb2FkZXIudnVlLmF1dG8taW1wb3J0LXF1YXNhci5qcz8/cnVsZVNldFswXS51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMV0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9AcXVhc2FyL2FwcC13ZWJwYWNrL2xpYi93ZWJwYWNrL2xvYWRlci5qcy50cmFuc2Zvcm0tcXVhc2FyLWltcG9ydHMuanMhLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi4vbm9kZV9tb2R1bGVzL0BxdWFzYXIvYXBwLXdlYnBhY2svbGliL3dlYnBhY2svbG9hZGVyLnZ1ZS5hdXRvLWltcG9ydC1xdWFzYXIuanM/P3J1bGVTZXRbMF0udXNlWzBdIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzFdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_quasar_app_webpack_lib_webpack_loader_js_transform_quasar_imports_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_2_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_quasar_app_webpack_lib_webpack_loader_vue_auto_import_quasar_js_ruleSet_0_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!../node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./App.vue?vue&type=template&id=7ba5bd90 */ "./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/App.vue?vue&type=template&id=7ba5bd90");


/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./app.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./src/css/app.css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"17248fd2\", content, false, {\"sourceMap\":true});\n// Hot Module Replacement\nif(true) {\n // When the styles change, update the <style> tags\n if(!content.locals) {\n   module.hot.accept(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./app.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./src/css/app.css\", function() {\n     var newContent = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./app.css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./src/css/app.css\");\n     if(newContent.__esModule) newContent = newContent.default;\n     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n     update(newContent);\n   });\n }\n // When the module is disposed, remove the <style> tags\n module.hot.dispose(function() { update(); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL2FwcC5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9kYWdlcmFyZGNsYXJhLy4vc3JjL2Nzcy9hcHAuY3NzPzlmMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuL2FwcC5jc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTcyNDhmZDJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOnRydWV9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC05LnVzZVsyXSEuL2FwcC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtOS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTkudXNlWzJdIS4vYXBwLmNzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/css/app.css\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("7202f64e2113f9a444a3")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bodagerardclara:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		globalThis["webpackHotUpdatebodagerardclara"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkbodagerardclara"] = globalThis["webpackChunkbodagerardclara"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=warn&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true")))
/******/ 	__webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./node_modules/webpack/hot/dev-server.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./.quasar/client-entry.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;