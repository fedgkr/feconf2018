webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ScheduleSection/components/TrackPair/TrackPair.tsx":
/*!***********************************************************************!*\
  !*** ./components/ScheduleSection/components/TrackPair/TrackPair.tsx ***!
  \***********************************************************************/
/*! exports provided: TrackPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackPair", function() { return TrackPair; });
/* harmony import */ var db_Etc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! db/Etc */ "./db/Etc.ts");
/* harmony import */ var db_Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db/Speaker */ "./db/Speaker.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SessionPair/SessionPair */ "./components/ScheduleSection/components/SessionPair/SessionPair.tsx");
/* harmony import */ var _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackPair.scss */ "./components/ScheduleSection/components/TrackPair/TrackPair.scss");
/* harmony import */ var _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TrackPair_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TrackPair =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TrackPair, _React$Component);

  function TrackPair() {
    _classCallCheck(this, TrackPair);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrackPair).apply(this, arguments));
  }

  _createClass(TrackPair, [{
    key: "render",
    value: function render() {
      var selectSpeaker = this.props.selectSpeaker;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TrackPair
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4___default.a.LabelWrap
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Label
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Track 1"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\uC624\uB514\uD1A0\uB9AC\uC6C0")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Label
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Track 2"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\uCEE8\uD37C\uB7F0\uC2A4\uB8F8")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "clear"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _TrackPair_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SessionWrap
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[1],
        speakerList: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(1),
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[2],
        speakerList: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(2),
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime.launch,
        speakerList: [],
        noSpeaker: true,
        content: "\uC810\uC2EC",
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[3],
        speakerList: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(3),
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[4],
        speakerList: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(4),
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime.break,
        speakerList: [],
        noSpeaker: true,
        content: "Break Time",
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[5],
        speakerList: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(5),
        selectSpeaker: selectSpeaker
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionPair_SessionPair__WEBPACK_IMPORTED_MODULE_3__["SessionPair"], {
        time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[6],
        speakerList: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(6),
        selectSpeaker: selectSpeaker
      })));
    }
  }]);

  return TrackPair;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.ab5b73095f1043d5f193.hot-update.js.map