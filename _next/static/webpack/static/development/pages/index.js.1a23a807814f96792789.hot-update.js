webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/service/ga.service.ts":
/*!******************************************!*\
  !*** ./components/service/ga.service.ts ***!
  \******************************************/
/*! exports provided: GA_CATEGORY, GA_ACTION, JOIN_LINK_TYPE, GAService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_CATEGORY", function() { return GA_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_ACTION", function() { return GA_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOIN_LINK_TYPE", function() { return JOIN_LINK_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAService", function() { return GAService; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GA_CATEGORY;

(function (GA_CATEGORY) {
  GA_CATEGORY["LINK"] = "LINK";
})(GA_CATEGORY || (GA_CATEGORY = {}));

var GA_ACTION;

(function (GA_ACTION) {
  GA_ACTION["CLICK_LINK"] = "CLICK_LINK";
  GA_ACTION["CLICK_SPONSOR"] = "CLICK_SPONSOR";
})(GA_ACTION || (GA_ACTION = {}));

var JOIN_LINK_TYPE;

(function (JOIN_LINK_TYPE) {
  JOIN_LINK_TYPE["TOP"] = "TOP";
  JOIN_LINK_TYPE["INTRO"] = "INTRO";
  JOIN_LINK_TYPE["BOTTOM"] = "BOTTOM";
  JOIN_LINK_TYPE["MOBILE"] = "MOBILE";
})(JOIN_LINK_TYPE || (JOIN_LINK_TYPE = {}));

var GAService =
/*#__PURE__*/
function () {
  function GAService() {
    _classCallCheck(this, GAService);
  }

  _createClass(GAService, null, [{
    key: "joinClick",
    value: function joinClick(position) {
      window.ga('send', 'event', GA_CATEGORY.LINK, GA_ACTION.CLICK_LINK, position);
    }
  }, {
    key: "sponsorClick",
    value: function sponsorClick(company) {
      window.ga('send', 'event', GA_CATEGORY.LINK, GA_ACTION.CLICK_SPONSOR, company.name);
    }
  }]);

  return GAService;
}();

/***/ }),

/***/ "./values/Const.ts":
/*!*************************!*\
  !*** ./values/Const.ts ***!
  \*************************/
/*! exports provided: CONST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONST", function() { return CONST; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CONST = function CONST() {
  _classCallCheck(this, CONST);
};

_defineProperty(CONST, "TABLET_WIDTH", 1024);

_defineProperty(CONST, "MOBILE_WIDTH", 640);

_defineProperty(CONST, "JOIN_LINK", 'https://meetgo.kr/#/userEventDetail/feconf2018');

/***/ })

})
//# sourceMappingURL=index.js.1a23a807814f96792789.hot-update.js.map