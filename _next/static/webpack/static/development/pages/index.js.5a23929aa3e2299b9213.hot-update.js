webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FixedButton/FixedButton.tsx":
/*!************************************************!*\
  !*** ./components/FixedButton/FixedButton.tsx ***!
  \************************************************/
/*! exports provided: FixedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedButton", function() { return FixedButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _values_Const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../values/Const */ "./values/Const.ts");
/* harmony import */ var _service_ga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/ga.service */ "./components/service/ga.service.ts");
/* harmony import */ var _FixedButton_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FixedButton.scss */ "./components/FixedButton/FixedButton.scss");
/* harmony import */ var _FixedButton_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FixedButton_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var FixedButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FixedButton, _React$Component);

  function FixedButton() {
    _classCallCheck(this, FixedButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(FixedButton).apply(this, arguments));
  }

  _createClass(FixedButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var doc = document.scrollingElement || document.documentElement;
      window.addEventListener('scroll', function () {
        console.log(doc.scrollTop);

        if (doc.scrollTop > 100) {
          _this.anchor.classList.add(_FixedButton_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Show);
        } else {
          _this.anchor.classList.remove(_FixedButton_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Show);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _FixedButton_scss__WEBPACK_IMPORTED_MODULE_3___default.a.FixedButton
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _values_Const__WEBPACK_IMPORTED_MODULE_1__["CONST"].JOIN_LINK,
        ref: function ref(el) {
          return _this2.anchor = el;
        },
        onClick: function onClick() {
          return _service_ga_service__WEBPACK_IMPORTED_MODULE_2__["GAService"].joinClick(_service_ga_service__WEBPACK_IMPORTED_MODULE_2__["JOIN_LINK_TYPE"].INTRO);
        }
      }, "\uB4F1\uB85D\uD558\uAE30"));
    }
  }]);

  return FixedButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.5a23929aa3e2299b9213.hot-update.js.map