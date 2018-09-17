
        __NEXT_REGISTER_CHUNK('src_components_HeroSection_components_SpaceShuttle_SpaceShuttle_fa40add2ee34bfdd8d017a31871cc4da', function() {
      webpackJsonp([6],{

/***/ "../node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./components/HeroSection/components/SpaceShuttle/SpaceShuttle.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".SpaceShuttle-2bLaS {\n  position: absolute;\n  width: 577px;\n  left: 400px;\n  bottom: -94px;\n  font-size: 0;\n  z-index: 2;\n  pointer-events: none; }\n  .SpaceShuttle-2bLaS .Shuttle-1bXUz {\n    width: 100%; }\n  .SpaceShuttle-2bLaS .Star-1jhti {\n    position: absolute;\n    z-index: -1; }\n    .SpaceShuttle-2bLaS .Star-1jhti.Shiny-2HbpC {\n      -webkit-animation-name: shiny-1pknw;\n              animation-name: shiny-1pknw;\n      -webkit-animation-iteration-count: infinite;\n              animation-iteration-count: infinite;\n      -webkit-animation-timing-function: ease-in-out;\n              animation-timing-function: ease-in-out; }\n    .SpaceShuttle-2bLaS .Star-1jhti > img {\n      width: 100%; }\n  .SpaceShuttle-2bLaS .Star1-UIam2 {\n    left: 12%;\n    top: 15%;\n    width: 3.8%; }\n  .SpaceShuttle-2bLaS .Star2-1_zNt {\n    left: 29%;\n    top: 23%;\n    width: 5%; }\n  .SpaceShuttle-2bLaS .Star3-3SJW6 {\n    left: 18.6%;\n    top: 42.7%;\n    width: 3.2%; }\n  .SpaceShuttle-2bLaS .Star4-1IdXw {\n    left: 75.3%;\n    top: 21%;\n    width: 2.2%; }\n  .SpaceShuttle-2bLaS .Star5-3Tt0q {\n    left: 81%;\n    top: 35.3%;\n    width: 4.6%; }\n  .SpaceShuttle-2bLaS .Star6-2eLx8 {\n    left: 91%;\n    top: 20%;\n    width: 2.3%; }\n  @media (max-width: 640px) {\n    .SpaceShuttle-2bLaS {\n      width: 70%;\n      left: auto;\n      right: -40px;\n      bottom: -72px;\n      z-index: 2; } }\n\n@-webkit-keyframes shiny-1pknw {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes shiny-1pknw {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", "", {"version":3,"sources":["/Users/hckrmoon/git/hckrmoon/feconf2018/src/components/HeroSection/components/SpaceShuttle/SpaceShuttle.scss"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,aAAa;EACb,WAAW;EACX,qBAAqB,EAAE;EACvB;IACE,YAAY,EAAE;EAChB;IACE,mBAAmB;IACnB,YAAY,EAAE;IACd;MACE,oCAA8B;cACtB,4BAAsB;MAC9B,4CAA4C;cACpC,oCAAoC;MAC5C,+CAA+C;cACvC,uCAAuC,EAAE;IACnD;MACE,YAAY,EAAE;EAClB;IACE,UAAU;IACV,SAAS;IACT,YAAY,EAAE;EAChB;IACE,UAAU;IACV,SAAS;IACT,UAAU,EAAE;EACd;IACE,YAAY;IACZ,WAAW;IACX,YAAY,EAAE;EAChB;IACE,YAAY;IACZ,SAAS;IACT,YAAY,EAAE;EAChB;IACE,UAAU;IACV,WAAW;IACX,YAAY,EAAE;EAChB;IACE,UAAU;IACV,SAAS;IACT,YAAY,EAAE;EAChB;IACE;MACE,WAAW;MACX,WAAW;MACX,aAAa;MACb,cAAc;MACd,WAAW,EAAE,EAAE;;AAErB;EACE;IACE,WAAW;IACX,4BAA4B;YACpB,oBAAoB,EAAE;EAChC;IACE,WAAW;IACX,8BAA8B;YACtB,sBAAsB,EAAE;EAClC;IACE,WAAW;IACX,4BAA4B;YACpB,oBAAoB,EAAE,EAAE;;AAEpC;EACE;IACE,WAAW;IACX,4BAA4B;YACpB,oBAAoB,EAAE;EAChC;IACE,WAAW;IACX,8BAA8B;YACtB,sBAAsB,EAAE;EAClC;IACE,WAAW;IACX,4BAA4B;YACpB,oBAAoB,EAAE,EAAE","file":"SpaceShuttle.scss","sourcesContent":[".SpaceShuttle {\n  position: absolute;\n  width: 577px;\n  left: 400px;\n  bottom: -94px;\n  font-size: 0;\n  z-index: 2;\n  pointer-events: none; }\n  .SpaceShuttle .Shuttle {\n    width: 100%; }\n  .SpaceShuttle .Star {\n    position: absolute;\n    z-index: -1; }\n    .SpaceShuttle .Star.Shiny {\n      -webkit-animation-name: shiny;\n              animation-name: shiny;\n      -webkit-animation-iteration-count: infinite;\n              animation-iteration-count: infinite;\n      -webkit-animation-timing-function: ease-in-out;\n              animation-timing-function: ease-in-out; }\n    .SpaceShuttle .Star > img {\n      width: 100%; }\n  .SpaceShuttle .Star1 {\n    left: 12%;\n    top: 15%;\n    width: 3.8%; }\n  .SpaceShuttle .Star2 {\n    left: 29%;\n    top: 23%;\n    width: 5%; }\n  .SpaceShuttle .Star3 {\n    left: 18.6%;\n    top: 42.7%;\n    width: 3.2%; }\n  .SpaceShuttle .Star4 {\n    left: 75.3%;\n    top: 21%;\n    width: 2.2%; }\n  .SpaceShuttle .Star5 {\n    left: 81%;\n    top: 35.3%;\n    width: 4.6%; }\n  .SpaceShuttle .Star6 {\n    left: 91%;\n    top: 20%;\n    width: 2.3%; }\n  @media (max-width: 640px) {\n    .SpaceShuttle {\n      width: 70%;\n      left: auto;\n      right: -40px;\n      bottom: -72px;\n      z-index: 2; } }\n\n@-webkit-keyframes shiny {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes shiny {\n  0% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); }\n  50% {\n    opacity: 0;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"SpaceShuttle": "SpaceShuttle-2bLaS",
	"Shuttle": "Shuttle-1bXUz",
	"Star": "Star-1jhti",
	"Shiny": "Shiny-2HbpC",
	"shiny": "shiny-1pknw",
	"Star1": "Star1-UIam2",
	"Star2": "Star2-1_zNt",
	"Star3": "Star3-3SJW6",
	"Star4": "Star4-1IdXw",
	"Star5": "Star5-3Tt0q",
	"Star6": "Star6-2eLx8"
};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1537175421860");
          });
      }
    }
  

/***/ }),

/***/ "./components/HeroSection/components/SpaceShuttle/SpaceShuttle.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceShuttle", function() { return SpaceShuttle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classcat__ = __webpack_require__("../node_modules/classcat/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss__ = __webpack_require__("./components/HeroSection/components/SpaceShuttle/SpaceShuttle.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_ArrayUtils__ = __webpack_require__("./utils/ArrayUtils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_WindowUtils__ = __webpack_require__("./utils/WindowUtils.ts");
var _jsxFileName = "/Users/hckrmoon/git/hckrmoon/feconf2018/src/components/HeroSection/components/SpaceShuttle/SpaceShuttle.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var starPosition = {
  0: {
    left: 12 / 100,
    top: 15 / 100
  },
  1: {
    left: 29 / 100,
    top: 23 / 100
  },
  2: {
    left: 18.6 / 100,
    top: 42.7 / 100
  },
  3: {
    left: 73.5 / 100,
    top: 21 / 100
  },
  4: {
    left: 81 / 100,
    top: 35.3 / 100
  },
  5: {
    left: 91 / 100,
    top: 20 / 100
  }
};
var SpaceShuttle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SpaceShuttle, _React$Component);

  function SpaceShuttle() {
    _classCallCheck(this, SpaceShuttle);

    return _possibleConstructorReturn(this, (SpaceShuttle.__proto__ || Object.getPrototypeOf(SpaceShuttle)).apply(this, arguments));
  }

  _createClass(SpaceShuttle, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var appWidth = __WEBPACK_IMPORTED_MODULE_4__utils_WindowUtils__["a" /* WindowUtils */].getWidth();
      var isMobile = __WEBPACK_IMPORTED_MODULE_4__utils_WindowUtils__["a" /* WindowUtils */].isMobileSize();
      var width = isMobile ? appWidth * 0.7 : 577;
      var height = width * 0.96;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss___default.a.SpaceShuttle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        className: __WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss___default.a.Shuttle,
        src: "static/images/pages/hero/shuttle.png",
        alt: "Hero Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), __WEBPACK_IMPORTED_MODULE_3__utils_ArrayUtils__["a" /* ArrayUtils */].createNArray(6).map(function (i) {
        var _cc;

        var order = i + 1; // const style = this.getRandomAnimationProp()

        var pos = starPosition[i];
        var originX = pos ? (0.5 - pos.left) * width : 0;
        var originY = pos ? (0.8 - pos.top) * height : 0;
        var style = {
          transform: "translate3d(".concat(originX, "px, ").concat(originY, "px, 0)")
        };
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: order,
          className: Object(__WEBPACK_IMPORTED_MODULE_1_classcat__["a" /* default */])((_cc = {}, _defineProperty(_cc, __WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss___default.a.Star, true), _defineProperty(_cc, __WEBPACK_IMPORTED_MODULE_2__SpaceShuttle_scss___default.a["Star".concat(order)], true), _cc)),
          style: style,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          src: "static/images/pages/hero/star-".concat(order, ".png"),
          alt: "Star Image ".concat(order),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }));
      }));
    }
  }, {
    key: "getRandomAnimationProp",
    value: function getRandomAnimationProp() {
      return {
        animationDelay: "".concat(1 + Math.random() * 3, "s"),
        animationDuration: "".concat(2 + Math.random() * 3, "s")
      };
    }
  }]);

  return SpaceShuttle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/***/ })

})
        })
      ;
//# sourceMappingURL=src_components_HeroSection_components_SpaceShuttle_SpaceShuttle_fa40add2ee34bfdd8d017a31871cc4da.js.map