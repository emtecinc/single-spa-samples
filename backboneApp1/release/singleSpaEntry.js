(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (exports, _singleSpaBackbone) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.unmount = exports.mount = exports.bootstrap = undefined;

	var _singleSpaBackbone2 = _interopRequireDefault(_singleSpaBackbone);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var backBoneLifecycles = (0, _singleSpaBackbone2.default)({
		BasePath: 'app4',
		AppWithRequire: {
			IsDataMain: true,
			AppPath: 'src/app',
			RequireJsPath: 'lib/require.js'
		},
		DomElementSetter: domElementSetter
	});

	var bootstrap = exports.bootstrap = [backBoneLifecycles.bootstrap];

	var mount = exports.mount = [backBoneLifecycles.mount];

	var unmount = exports.unmount = [backBoneLifecycles.unmount];

	function domElementSetter() {

		//use the same element to render into in the backbone app
		var el = document.getElementById('shell-container');
		if (!el) {
			el = document.createElement('div');
			el.id = 'shell-container';
			document.body.appendChild(el);
		}
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (exports, _singleSpaBackboneLoader, _singleSpaBackboneUnloader) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = singleSpaBackbone;

	var _singleSpaBackboneUnloader2 = _interopRequireDefault(_singleSpaBackboneUnloader);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
		return typeof obj;
	} : function (obj) {
		return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var defaultOptions = {
		BasePath: null,
		AppWithRequire: null,
		AppSimple: null,
		DomElementSetter: null,
		ScriptElementRef: null
	};

	function singleSpaBackbone(userOptions) {

		if ((typeof userOptions === 'undefined' ? 'undefined' : _typeof(userOptions)) !== 'object') {
			throw new Error('configuration object is not passed as parameter');
		}

		var options = _extends({}, defaultOptions, userOptions);

		if (!options.BasePath) {
			throw new Error('BasePath parameter is required');
		}

		var basePath = options.BasePath;
		var length = basePath.length;

		if (length === 0) {
			throw new Error('BasePath parameter cannot be empty');
		} else {
			if (length > 1 && basePath.charAt(length - 1) === '/') {
				options.BasePath = basePath.substring(0, length - 2);
			}
		}

		if (options.AppWithRequire && options.AppSimple) {
			throw new Error('Either AppWithRequire or AppSimple parameter can be passed at a time');
		}

		if (!options.AppWithRequire && !options.AppSimple) {
			throw new Error('Either AppWithRequire or AppSimple parameter need to be passed');
		}

		if (!options.AppSimple && options.AppWithRequire && _typeof(options.AppWithRequire) !== 'object') {
			throw new Error('AppWithRequire parameter is expecting an object which is not supplied. It needs IsDataMain, AppPath, RequireJsPath parameter and optionally DependenciesJsPaths');
		}

		if (!options.AppWithRequire && options.AppSimple && _typeof(options.AppSimple) !== 'object') {
			throw new Error('AppSimple parameter is expecting an object which is not supplied. It needs AppPath, BackboneJsPath and optionally DependenciesJsPaths');
		}

		if (options.AppWithRequire) {

			if (typeof options.AppWithRequire.IsDataMain !== 'boolean') {
				throw new Error('AppWithRequire.IsDataMain parameter is required and expects a boolean value');
			}

			if (typeof options.AppWithRequire.AppPath !== 'string') {
				throw new Error('AppWithRequire.AppPath parameter is required and expects a string value');
			}

			if (typeof options.AppWithRequire.RequireJsPath !== 'string') {
				throw new Error('AppWithRequire.RequireJsPath parameter is required and expects a string value');
			}

			if (options.AppWithRequire.DependenciesJsPaths && typeof options.AppWithRequire.DependenciesJsPaths !== 'array') {
				throw new Error('AppWithRequire.DependenciesJsPaths parameter expects an array');
			}
		}

		if (options.AppSimple) {

			if (typeof options.AppSimple.AppPath !== 'string') {
				throw new Error('AppSimple.AppPath parameter is required and expects a string value');
			}

			if (typeof options.AppSimple.BackboneJsPath !== 'string') {
				throw new Error('AppSimple.BackboneJsPath parameter is required and expects a string value');
			}

			if (options.AppSimple.DependenciesJsPaths && typeof options.AppSimple.DependenciesJsPaths !== 'array') {
				throw new Error('AppSimple.DependenciesJsPaths parameter expects an array');
			}
		}

		return {
			bootstrap: bootstrap.bind(null, options),
			mount: mount.bind(null, options),
			unmount: unmount.bind(null, options)
		};
	}

	function bootstrap(options) {
		return Promise.resolve();
	}

	function mount(options) {
		var promise = null;
		if (options.AppWithRequire) promise = (0, _singleSpaBackboneLoader.loadBackboneAppWithRequireJs)(options.BasePath, options.AppWithRequire, options.ScriptElementRef, options.DomElementSetter);else if (options.AppSimple) promise = (0, _singleSpaBackboneLoader.loadBackboneAppSimple)(options.BasePath, options.AppSimple, options.ScriptElementRef, options.DomElementSetter);

		promise.then(function (result) {
			if (result) options.ScriptElement = result;
		});
		return promise;
	}

	function unmount(options) {
		return (0, _singleSpaBackboneUnloader2.default)();
	}
});

//# sourceMappingURL=single-spa-backbone.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.loadBackboneAppWithRequireJs = loadBackboneAppWithRequireJs;
	exports.loadBackboneAppSimple = loadBackboneAppSimple;
	// MIT License

	// Copyright (c) 2019 Emtec Inc

	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:

	// The above copyright notice and this permission notice shall be included in all
	// copies or substantial portions of the Software.

	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	// SOFTWARE.

	//Loads a backbone application using require js
	function loadBackboneAppWithRequireJs(basePath, appOptions, scriptElementRef, callbackDomElementSetter) {
		return new Promise(function (resolve, reject) {

			if (callbackDomElementSetter) callbackDomElementSetter();

			var script = loadApp();

			function loadApp() {

				if (scriptElementRef && document.head.hasChildNodes(scriptElementRef)) {
					try {
						if (!Backbone.History.started) Backbone.history.start();
						Backbone.history.navigate(basePath, true);
					} catch (err) {
						reject(err);
					}

					return scriptElementRef;
				} else {
					//Load dependant scripts
					if (appOptions.DependenciesJsPaths) addDependencyScriptElements(basePath, appOptions.DependenciesJsPaths, reject);
					//Load require js script
					return addRequireJs(basePath, appOptions.AppPath, appOptions.RequireJsPath, appOptions.IsDataMain, reject);
				}
			}

			resolve(script);
		});
	}

	//Loads a backbone application using Backbone, Underscore (which is the only hard dependency of Backbone as per official documentation)
	function loadBackboneAppSimple(basePath, appOptions, scriptElementRef, callbackDomElementSetter) {
		return new Promise(function (resolve, reject) {

			if (callbackDomElementSetter) callbackDomElementSetter();

			var script = loadApp();

			function loadApp() {

				if (scriptElementRef && document.head.hasChildNodes(scriptElementRef)) {
					try {
						if (!Backbone.History.started) Backbone.history.start();
						Backbone.history.navigate(basePath, true);
					} catch (err) {
						reject(err);
					}

					return scriptElementRef;
				} else {
					//Load dependency scripts
					if (appOptions.DependenciesJsPaths) addDependencyScriptElements(basePath, appOptions.DependenciesJsPaths, reject);
					//load backbone script
					addScriptElement(basePath, appOptions.BackboneJsPath, reject);
					//Load app script
					return addScriptElement(basePath, appOptions.AppPath, reject);
				}
			}

			resolve(script);
		});
	}

	//Injects a require js script element to the DOM
	function addRequireJs(basePath, appPath, requireJsPath, isDataMain, reject) {

		var lengthRequireJsPath = requireJsPath.length;
		if (lengthRequireJsPath === 0) {
			reject('requireJsPath parameter cannot be empty');
		} else {
			if (lengthRequireJsPath > 1 && requireJsPath.charAt(0) === '/') {
				requireJsPath = basePath + requireJsPath;
			} else {
				requireJsPath = basePath + '/' + requireJsPath;
			}
		}

		var lengthAppPath = appPath.length;
		if (lengthAppPath === 0) {
			reject('appPath parameter cannot be empty');
		} else {
			if (lengthAppPath > 1 && appPath.charAt(0) === '/') {
				appPath = basePath + appPath;
			} else {
				appPath = basePath + '/' + appPath;
			}
		}

		var scriptElementRequireJs = document.createElement('script');
		scriptElementRequireJs.src = requireJsPath;
		if (isDataMain === true) {
			scriptElementRequireJs.setAttribute('data-main', appPath);
		}
		scriptElementRequireJs.onerror = reject;
		document.head.appendChild(scriptElementRequireJs);

		if (isDataMain === false) {
			var scriptElementAppJs = document.createElement('script');
			scriptElementAppJs.src = appPath;
			scriptElementAppJs.onerror = reject;
			document.head.appendChild(scriptElementAppJs);
		}

		return scriptElementRequireJs;
	}

	//Injects the dependency scripts to the DOM
	function addDependencyScriptElements(basePath, vendorPaths, reject) {
		vendorPaths.array.forEach(function (scriptPath) {
			addScriptElement(basePath, scriptPath, reject);
		});
	}

	function addScriptElement(basePath, scriptPath, reject) {

		var lengthScriptPath = scriptPath.length;
		if (lengthScriptPath === 0) {
			reject('scriptPath parameter cannot be empty');
		} else {
			if (lengthScriptPath > 1 && scriptPath.charAt(0) === '/') {
				scriptPath = basePath + scriptPath;
			} else {
				scriptPath = basePath + '/' + scriptPath;
			}
		}

		var scriptElement = document.createElement('script');
		scriptElement.src = scriptPath;
		scriptElement.onerror = reject;
		document.head.appendChild(scriptElement);
		return scriptElement;
	}
});

//# sourceMappingURL=single-spa-backbone-loader.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = unloadBackboneApp;
    // MIT License

    // Copyright (c) 2019 Emtec Inc

    // Permission is hereby granted, free of charge, to any person obtaining a copy
    // of this software and associated documentation files (the "Software"), to deal
    // in the Software without restriction, including without limitation the rights
    // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    // copies of the Software, and to permit persons to whom the Software is
    // furnished to do so, subject to the following conditions:

    // The above copyright notice and this permission notice shall be included in all
    // copies or substantial portions of the Software.

    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    // SOFTWARE.

    function unloadBackboneApp() {
        return new Promise(function (resolve, reject) {
            try {
                if (Backbone.History.started) Backbone.history.stop();
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }
});

//# sourceMappingURL=single-spa-backbone-unloader.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=singleSpaEntry.js.map