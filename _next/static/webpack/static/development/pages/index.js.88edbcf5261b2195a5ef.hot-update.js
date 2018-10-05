webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/HeroSection/HeroSection.tsx":
/*!************************************************!*\
  !*** ./components/HeroSection/HeroSection.tsx ***!
  \************************************************/
/*! exports provided: HeroSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSection", function() { return HeroSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FlipClock_FlipClock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FlipClock/FlipClock */ "./components/HeroSection/components/FlipClock/FlipClock.tsx");
/* harmony import */ var _components_SpaceShuttle_SpaceShuttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/SpaceShuttle/SpaceShuttle */ "./components/HeroSection/components/SpaceShuttle/SpaceShuttle.tsx");
/* harmony import */ var _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeroSection.scss */ "./components/HeroSection/HeroSection.scss");
/* harmony import */ var _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HeroSection_scss__WEBPACK_IMPORTED_MODULE_3__);
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





var HeroSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeroSection, _React$Component);

  function HeroSection(props) {
    var _this;

    _classCallCheck(this, HeroSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeroSection).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickJoin", function (event) {
      event.preventDefault();
      alert('아직 신청 기간이 아닙니다.');
    });

    _this.state = {
      presentLeft: _this.getLeftTime(Date.now())
    };
    return _this;
  }

  _createClass(HeroSection, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.timer();
    }
  }, {
    key: "render",
    value: function render() {
      var presentLeft = this.state.presentLeft;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.HeroSection
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Content
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Logo
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "static/images/logo/img-logo@2x.png",
        alt: "FEConf 2018"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SocialWrap
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SocialList
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SocialItem
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.facebook.com/groups/webfrontend",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "blind"
      }, "\uD504\uB860\uD2B8\uC5D4\uB4DC\uAC1C\uBC1C\uADF8\uB8F9"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SocialItem
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.facebook.com/feconf.kr",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "blind"
      }, "FEConf \uD398\uC774\uC9C0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.SocialItem
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:feconf@googlegroups.com",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "blind"
      }, "\uC774\uBA54\uC77C"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ClockWrap
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Day
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlipClock_FlipClock__WEBPACK_IMPORTED_MODULE_1__["FlipClock"], {
        title: 'DAY',
        value: presentLeft.days,
        maxValue: 99
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Time
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlipClock_FlipClock__WEBPACK_IMPORTED_MODULE_1__["FlipClock"], {
        title: 'HOUR',
        value: presentLeft.hours,
        maxValue: 23
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TimeDivider
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Circle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Circle
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FlipClock_FlipClock__WEBPACK_IMPORTED_MODULE_1__["FlipClock"], {
        title: 'MINUTE',
        value: presentLeft.minutes,
        maxValue: 59
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SpaceShuttle_SpaceShuttle__WEBPACK_IMPORTED_MODULE_2__["SpaceShuttle"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ButtonWrap
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: this.onClickJoin
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "\uCEE8\uD37C\uB7F0\uC2A4 \uCC38\uAC00\uD558\uAE30")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Background
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TopRight,
        src: "static/images/pages/hero/topright-shade.png",
        alt: "Shade"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: _HeroSection_scss__WEBPACK_IMPORTED_MODULE_3___default.a.BottomLeft,
        src: "static/images/pages/hero/bottomleft-shade.png",
        alt: "Shade"
      })));
    }
  }, {
    key: "timer",
    value: function timer() {
      var _this2 = this;

      window.setTimeout(function () {
        _this2.setState({
          presentLeft: _this2.getLeftTime(Date.now())
        });

        _this2.timer();
      }, 1000);
    }
  }, {
    key: "getLeftTime",
    value: function getLeftTime(date) {
      var deadline = this.props.deadline;
      var t = deadline - date;
      var seconds = Math.floor(t / 1000 % 60);
      var minutes = Math.floor(t / (1000 * 60) % 60);
      var hours = Math.floor(t / (1000 * 60 * 60) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
  }]);

  return HeroSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.88edbcf5261b2195a5ef.hot-update.js.map