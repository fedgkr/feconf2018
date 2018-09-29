webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SponsorsSection/SponsorsSection.tsx":
/*!********************************************************!*\
  !*** ./components/SponsorsSection/SponsorsSection.tsx ***!
  \********************************************************/
/*! exports provided: SponsorsSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsSection", function() { return SponsorsSection; });
/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classcat */ "../node_modules/classcat/src/index.js");
/* harmony import */ var db_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! db/Company */ "./db/Company.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApparentSection_ApparentSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApparentSection/ApparentSection */ "./components/ApparentSection/ApparentSection.tsx");
/* harmony import */ var _components_SponsorLogo_SponsorLogo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SponsorLogo/SponsorLogo */ "./components/SponsorsSection/components/SponsorLogo/SponsorLogo.tsx");
/* harmony import */ var _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SponsorsSection.scss */ "./components/SponsorsSection/SponsorsSection.scss");
/* harmony import */ var _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var diamondSponsors = db_Company__WEBPACK_IMPORTED_MODULE_1__["companyList"].filter(function (c) {
  return c.isLevelDiamond();
});
var platinumSponsors = db_Company__WEBPACK_IMPORTED_MODULE_1__["companyList"].filter(function (c) {
  return c.isLevelPlatinum();
});
var goldSponsors = db_Company__WEBPACK_IMPORTED_MODULE_1__["companyList"].filter(function (c) {
  return c.isLevelGold();
});
var etcSponsors = db_Company__WEBPACK_IMPORTED_MODULE_1__["companyList"].filter(function (c) {
  return c.isLevelEtc();
});

var SponsorsSection = function SponsorsSection() {
  var _cc, _cc2, _cc3, _cc4;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SponsorsSection,
    id: "sponsors"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ApparentSection_ApparentSection__WEBPACK_IMPORTED_MODULE_3__["ApparentSection"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Content
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Title
  }, "SPONSORS"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Desc
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "\uC2A4\uD3F0\uC11C\uC758 \uC18C\uC911\uD55C \uD6C4\uC6D0\uACFC \uC5EC\uB7EC\uBD84\uC758 \uCC38\uC5EC\uAC00 FEConf 2018\uB97C \uB9CC\uB4ED\uB2C8\uB2E4."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, " \uACE0\uB9D9\uC2B5\uB2C8\uB2E4.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SponsorsWrap
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_0__["default"])((_cc = {}, _defineProperty(_cc, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelWrap, true), _defineProperty(_cc, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Diamond, true), _cc))
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelTitle
  }, "DIAMOND"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SponsorList
  }, diamondSponsors.map(function (c, idx) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SponsorLogo_SponsorLogo__WEBPACK_IMPORTED_MODULE_4__["SponsorLogo"], {
      key: idx,
      company: c
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_0__["default"])((_cc2 = {}, _defineProperty(_cc2, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelWrap, true), _defineProperty(_cc2, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Platinum, true), _cc2))
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelTitle
  }, "PLATINUM"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SponsorList
  }, platinumSponsors.map(function (c, idx) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SponsorLogo_SponsorLogo__WEBPACK_IMPORTED_MODULE_4__["SponsorLogo"], {
      key: idx,
      company: c
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_0__["default"])((_cc3 = {}, _defineProperty(_cc3, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelWrap, true), _defineProperty(_cc3, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Gold, true), _cc3))
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelTitle
  }, "GOLD"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SponsorList
  }, goldSponsors.map(function (c, idx) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SponsorLogo_SponsorLogo__WEBPACK_IMPORTED_MODULE_4__["SponsorLogo"], {
      key: idx,
      company: c
    });
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: Object(classcat__WEBPACK_IMPORTED_MODULE_0__["default"])((_cc4 = {}, _defineProperty(_cc4, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelWrap, true), _defineProperty(_cc4, _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.Etc, true), _cc4))
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.LevelTitle
  }, "ETC"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: _SponsorsSection_scss__WEBPACK_IMPORTED_MODULE_5___default.a.SponsorList
  }, etcSponsors.map(function (c, idx) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SponsorLogo_SponsorLogo__WEBPACK_IMPORTED_MODULE_4__["SponsorLogo"], {
      key: idx,
      company: c
    });
  })))))));
};



/***/ })

})
//# sourceMappingURL=index.js.a3bb0b25a0155ab3a75d.hot-update.js.map