webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ScheduleSection/components/TrackList/TrackList.tsx":
/*!***********************************************************************!*\
  !*** ./components/ScheduleSection/components/TrackList/TrackList.tsx ***!
  \***********************************************************************/
/*! exports provided: TrackList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackList", function() { return TrackList; });
/* harmony import */ var db_Etc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! db/Etc */ "./db/Etc.ts");
/* harmony import */ var db_Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db/Speaker */ "./db/Speaker.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SessionItem/SessionItem */ "./components/ScheduleSection/components/SessionItem/SessionItem.tsx");
/* harmony import */ var _TrackList_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TrackList.scss */ "./components/ScheduleSection/components/TrackList/TrackList.scss");
/* harmony import */ var _TrackList_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_TrackList_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var TrackList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TrackList, _React$Component);

  function TrackList() {
    _classCallCheck(this, TrackList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TrackList).apply(this, arguments));
  }

  _createClass(TrackList, [{
    key: "render",
    value: function render() {
      var selectSpeaker = this.props.selectSpeaker;
      var trackList = [1, 2];
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: _TrackList_scss__WEBPACK_IMPORTED_MODULE_4___default.a.TrackList
      }, trackList.map(function (track) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
          key: track
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: _TrackList_scss__WEBPACK_IMPORTED_MODULE_4___default.a.Label
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "Track ", track), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
          className: _TrackList_scss__WEBPACK_IMPORTED_MODULE_4___default.a.SessionWrap
        }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[1],
          speaker: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(1)[track - 1],
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[2],
          speaker: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(2)[track - 1],
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime.launch,
          noSpeaker: true,
          content: "\uC810\uC2EC",
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[3],
          speaker: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(3)[track - 1],
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[4],
          speaker: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(4)[track - 1],
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime.break,
          noSpeaker: true,
          content: "Break Time",
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[5],
          speaker: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(5)[track - 1],
          selectSpeaker: selectSpeaker
        }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SessionItem_SessionItem__WEBPACK_IMPORTED_MODULE_3__["SessionItem"], {
          time: db_Etc__WEBPACK_IMPORTED_MODULE_0__["EtcData"].sessionOrderMappingTime[6],
          speaker: Object(db_Speaker__WEBPACK_IMPORTED_MODULE_1__["getNOrderSpeakers"])(6)[track - 1],
          selectSpeaker: selectSpeaker
        })));
      }));
    }
  }]);

  return TrackList;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.260b05d45063e5d2f851.hot-update.js.map