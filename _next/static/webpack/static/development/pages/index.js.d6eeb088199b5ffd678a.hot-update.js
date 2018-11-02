webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SpeakerInfo/SpeakerInfo.tsx":
/*!************************************************!*\
  !*** ./components/SpeakerInfo/SpeakerInfo.tsx ***!
  \************************************************/
/*! exports provided: SpeakerInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerInfo", function() { return SpeakerInfo; });
/* harmony import */ var db_Etc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! db/Etc */ "./db/Etc.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpeakerInfo.scss */ "./components/SpeakerInfo/SpeakerInfo.scss");
/* harmony import */ var _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2__);
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




var SpeakerInfo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SpeakerInfo, _React$Component);

  function SpeakerInfo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SpeakerInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SpeakerInfo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClickClose", function (e) {
      e.preventDefault();

      _this.props.selectSpeaker(false);
    });

    return _this;
  }

  _createClass(SpeakerInfo, [{
    key: "render",
    value: function render() {
      var speaker = this.props.speaker;
      return !speaker ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SpeakerInfo
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.CloseBtn
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#",
        onClick: this.handleClickClose
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "static/images/general/close@2x.png",
        alt: "close"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.SpeakerWrap
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Profile
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Image
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: speaker.profileImage,
        alt: "profile image"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Text
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Name
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, speaker.name)), speaker.company ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Company
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        target: "_blank",
        href: speaker.company.link
      }, speaker.company.name)) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "clear"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Present
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Title
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, speaker.presentTitle), "\xA0", speaker.link ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: speaker.link
      }, "[ Link ]") : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Track
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Track ", speaker.track, " | ", db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[speaker.order])), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _SpeakerInfo_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Desc
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, speaker.presentDesc)))));
    }
  }]);

  return SpeakerInfo;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.d6eeb088199b5ffd678a.hot-update.js.map