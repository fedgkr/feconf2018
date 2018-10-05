webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FooterSection/FooterSection.tsx":
/*!****************************************************!*\
  !*** ./components/FooterSection/FooterSection.tsx ***!
  \****************************************************/
/*! exports provided: FooterSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSection", function() { return FooterSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _values_Const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values/Const */ "./values/Const.ts");
/* harmony import */ var _service_ga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/ga.service */ "./components/service/ga.service.ts");
/* harmony import */ var _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterSection.scss */ "./components/FooterSection/FooterSection.scss");
/* harmony import */ var _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FooterSection_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var FooterSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FooterSection, _React$Component);

  function FooterSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FooterSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FooterSection)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onIntersecting", function (entries) {
      entries.forEach(function (_ref) {
        var target = _ref.target,
            intersectionRatio = _ref.intersectionRatio;

        if (intersectionRatio >= 0.4) {
          target.classList.add(_FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.appear);
        } else {
          target.classList.remove(_FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.appear);
        }
      });
    });

    return _this;
  }

  _createClass(FooterSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        threshold: 0.4
      };
      var io = new IntersectionObserver(this.onIntersecting, options);
      io.observe(this.wrapper);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FooterSection,
        ref: function ref(el) {
          return _this2.wrapper = el;
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Content
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Title
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Enjoy Experience Everywhere!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "FEConf 2018\uC740 \uC5EC\uB7EC\uBD84\uC758 \uCC38\uC5EC\uB97C \uAE30\uB2E4\uB9BD\uB2C8\uB2E4.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _values_Const__WEBPACK_IMPORTED_MODULE_1__["CONST"].JOIN_LINK,
        onClick: function onClick() {
          return _service_ga_service__WEBPACK_IMPORTED_MODULE_2__["GAService"].joinClick(_service_ga_service__WEBPACK_IMPORTED_MODULE_2__["JOIN_LINK_TYPE"].BOTTOM);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Button
      }, "\uC9C0\uAE08 \uB4F1\uB85D\uD558\uB7EC \uAC00\uAE30")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut1,
        src: "static/images/pages/footer/cut1.png",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut2,
        src: "static/images/pages/footer/cut2.png",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut3,
        src: "static/images/pages/footer/cut3.png",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut4,
        src: "static/images/pages/footer/cut4.png",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut5,
        src: "static/images/pages/footer/cut5.png",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut6,
        src: "static/images/pages/footer/cut6.png",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _FooterSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ImageCut7,
        src: "static/images/pages/footer/cut7.png",
        "aria-hidden": "true"
      })));
    }
  }]);

  return FooterSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.3d04fa1a0f608f809709.hot-update.js.map