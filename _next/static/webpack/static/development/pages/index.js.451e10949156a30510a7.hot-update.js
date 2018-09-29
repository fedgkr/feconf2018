webpackHotUpdate("static/development/pages/index.js",{

/***/ "./db/Company.ts":
/*!***********************!*\
  !*** ./db/Company.ts ***!
  \***********************/
/*! exports provided: SupportLevel, Company, companyList, getCompanyByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportLevel", function() { return SupportLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "companyList", function() { return companyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompanyByName", function() { return getCompanyByName; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SupportLevel;

(function (SupportLevel) {
  SupportLevel["DIAMOND"] = "DIAMOND";
  SupportLevel["PLATINUM"] = "PLATINUM";
  SupportLevel["GOLD"] = "GOLD";
  SupportLevel["ETC"] = "ETC";
  SupportLevel["NONE"] = "NONE";
})(SupportLevel || (SupportLevel = {}));

var Company =
/*#__PURE__*/
function () {
  function Company(_) {
    _classCallCheck(this, Company);

    Object.assign(this, _);
  }

  _createClass(Company, [{
    key: "isLevelDiamond",
    value: function isLevelDiamond() {
      return this.level === SupportLevel.DIAMOND;
    }
  }, {
    key: "isLevelPlatinum",
    value: function isLevelPlatinum() {
      return this.level === SupportLevel.PLATINUM;
    }
  }, {
    key: "isLevelGold",
    value: function isLevelGold() {
      return this.level === SupportLevel.GOLD;
    }
  }, {
    key: "isLevelEtc",
    value: function isLevelEtc() {
      return this.level === SupportLevel.ETC;
    }
  }]);

  return Company;
}();
var companyList = [new Company({
  name: '우아한 형제들',
  level: SupportLevel.DIAMOND,
  link: 'https://www.woowahan.com',
  logo: 'static/images/company/woowabros/logo.png'
}), new Company({
  name: '네이버',
  level: SupportLevel.PLATINUM,
  link: 'https://www.navercorp.com/ko/index.nhn',
  logo: 'static/images/company/naver/logo.png'
}), new Company({
  name: 'KAKAO',
  level: SupportLevel.PLATINUM,
  link: 'https://www.kakaocorp.com',
  logo: 'static/images/company/kakao/logo.png'
}), new Company({
  name: '토스',
  level: SupportLevel.PLATINUM,
  link: 'https://toss.im/',
  logo: 'static/images/company/toss/logo-v2.png'
}), new Company({
  name: 'Studio XID',
  level: SupportLevel.PLATINUM,
  link: 'https://www.protopie.io',
  logo: 'static/images/company/studio-xid/logo.png'
}), new Company({
  name: '네이버 웹툰',
  level: SupportLevel.PLATINUM,
  link: 'https://www.webtoons.com/',
  logo: 'static/images/company/webtoons/logo.png'
}), new Company({
  name: 'NCSOFT',
  level: SupportLevel.GOLD,
  link: 'http://kr.ncsoft.com/korean',
  logo: 'static/images/company/ncsoft/logo-v2.png'
}), new Company({
  name: '엔테크서비스',
  level: SupportLevel.GOLD,
  link: 'https://www.nts-corp.com/',
  logo: 'static/images/company/nts/logo.png'
}), new Company({
  name: 'Jet Brains',
  level: SupportLevel.ETC,
  link: 'https://www.jetbrains.com/',
  logo: 'static/images/company/jetbrains/logo.png'
}), new Company({
  name: '인사이트',
  level: SupportLevel.ETC,
  link: 'http://www.insightbook.co.kr/',
  logo: 'static/images/company/insight/logo.png'
}), new Company({
  name: '클로바',
  level: SupportLevel.NONE,
  link: 'https://clova.ai',
  logo: 'static/images/company/clova/logo.png'
}), new Company({
  name: '레진엔터테인먼트',
  level: SupportLevel.NONE,
  link: 'https://www.lezhin.com/'
}), new Company({
  name: '코드스쿼드',
  level: SupportLevel.NONE,
  link: 'https://codesquad.kr/'
}), new Company({
  name: '카카오뱅크',
  level: SupportLevel.NONE,
  link: 'https://www.kakaobank.com/'
}), new Company({
  name: '미미박스',
  level: SupportLevel.NONE,
  link: 'https://www.memebox.com/'
}), new Company({
  name: '중앙일보',
  level: SupportLevel.NONE,
  link: 'https://news.joins.com/digitalspecial/list'
}), new Company({
  name: '엔젤스윙',
  level: SupportLevel.NONE,
  link: 'https://angelswing.io'
}), new Company({
  name: '바닐라코딩',
  level: SupportLevel.NONE,
  link: 'https://www.vanillacoding.co'
}), new Company({
  name: '원티드',
  level: SupportLevel.NONE,
  link: 'https://www.wanted.co.kr/',
  logo: 'static/images/company/wanted/logo.png'
})];
var getCompanyByName = function getCompanyByName() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return companyList.filter(function (c) {
    return c.name === name;
  })[0];
};

/***/ })

})
//# sourceMappingURL=index.js.451e10949156a30510a7.hot-update.js.map