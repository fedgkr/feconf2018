webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/GlobalNotice/GlobalNotice.tsx":
/*!**************************************************!*\
  !*** ./components/GlobalNotice/GlobalNotice.tsx ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var GlobalNotice = function GlobalNotice() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var components_GlobalNotice_GlobalNotice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/GlobalNotice/GlobalNotice */ "./components/GlobalNotice/GlobalNotice.tsx");
/* harmony import */ var components_FixedButton_FixedButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/FixedButton/FixedButton */ "./components/FixedButton/FixedButton.tsx");
/* harmony import */ var components_FooterSection_FooterSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/FooterSection/FooterSection */ "./components/FooterSection/FooterSection.tsx");
/* harmony import */ var components_HeroSection_HeroSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/HeroSection/HeroSection */ "./components/HeroSection/HeroSection.tsx");
/* harmony import */ var components_IntroSection_IntroSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/IntroSection/IntroSection */ "./components/IntroSection/IntroSection.tsx");
/* harmony import */ var components_ScheduleSection_ScheduleSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ScheduleSection/ScheduleSection */ "./components/ScheduleSection/ScheduleSection.tsx");
/* harmony import */ var components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Sidebar/Sidebar */ "./components/Sidebar/Sidebar.tsx");
/* harmony import */ var components_SpeakerInfo_SpeakerInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/SpeakerInfo/SpeakerInfo */ "./components/SpeakerInfo/SpeakerInfo.tsx");
/* harmony import */ var components_SpeakersSection_SpeakersSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/SpeakersSection/SpeakersSection */ "./components/SpeakersSection/SpeakersSection.tsx");
/* harmony import */ var components_SponsorsSection_SponsorsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/SponsorsSection/SponsorsSection */ "./components/SponsorsSection/SponsorsSection.tsx");
/* harmony import */ var db_Etc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! db/Etc */ "./db/Etc.ts");
/* harmony import */ var db_Speaker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! db/Speaker */ "./db/Speaker.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styles/index.scss */ "./styles/index.scss");
/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styles_main_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styles/main.scss */ "./styles/main.scss");
/* harmony import */ var styles_main_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(styles_main_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var utils_WindowUtils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/WindowUtils */ "./utils/WindowUtils.ts");
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



















var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndexPage, _React$Component);

  function IndexPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, IndexPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(IndexPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      appWidth: utils_WindowUtils__WEBPACK_IMPORTED_MODULE_16__["WindowUtils"].getWidth(),
      sidebarOpened: false,
      selectedSpeaker: void 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSetSidebarOpen", function (open, speaker) {
      if (!open) {
        document.body.classList.remove('fixed');

        _this.setState({
          sidebarOpened: false
        });
      }

      if (open && speaker) {
        document.body.classList.add('fixed');
        requestAnimationFrame(function () {
          _this.setState({
            selectedSpeaker: speaker,
            sidebarOpened: true
          });
        });
      }
    });

    return _this;
  }

  _createClass(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('resize', function () {
        _this2.setState({
          appWidth: utils_WindowUtils__WEBPACK_IMPORTED_MODULE_16__["WindowUtils"].getWidth()
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          appWidth = _this$state.appWidth,
          sidebarOpened = _this$state.sidebarOpened,
          selectedSpeaker = _this$state.selectedSpeaker;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("title", null, "Welcome to FEConf 2018 - FEConf Korea"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "description",
        content: "2018 FEConf Korea \uD589\uC0AC\uC758 \uC77C\uC815 \uBC0F \uC2A4\uD53C\uCEE4 \uADF8\uB9AC\uACE0 \uAC01 \uC138\uC158\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uC62C\uD574 \uB450\uBC88\uC9F8 \uC5F4\uB9AC\uB294 FEConf! \uB9CE\uC740 \uAD00\uC2EC\uACFC \uC131\uC6D0 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "keywords",
        content: "\uD504\uB860\uD2B8\uC5D4\uB4DC,\uD504\uB860\uD2B8\uC5D4\uB4DC\uAC1C\uBC1C\uC790,\uD504\uB860\uD2B8\uC5D4\uB4DC\uAC1C\uBC1C\uC790\uADF8\uB8F9,\uAC1C\uBC1C\uC790,\uD504\uB85C\uADF8\uB798\uBA38,\uB9C8\uD06C\uC5C5,\uB514\uC790\uC774\uB108,\uCEE8\uD37C\uB7F0\uC2A4,\uC774\uBCA4\uD2B8,\uC11C\uC6B8,\uCF54\uC5D1\uC2A4,FrontEnd,Developer,Programmer,Markup,Designer,Conference,Event,Seoul,COEX"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        property: "og:url",
        content: "https://2018.feconf.kr/"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        property: "og:type",
        content: "website"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        property: "og:title",
        content: "2018 FEConf Korea"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        property: "og:description",
        content: "FEConf 2018 \uCEE8\uD37C\uB7F0\uC2A4 \uD589\uC0AC\uC758 \uC77C\uC815 \uBC0F \uC2A4\uD53C\uCEE4 \uADF8\uB9AC\uACE0 \uAC01 \uC138\uC158\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uC62C\uD574 \uB450\uBC88\uC9F8 \uC5F4\uB9AC\uB294 FEConf! \uB9CE\uC740 \uAD00\uC2EC\uACFC \uC131\uC6D0 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        property: "og:image",
        content: "https://fedgkr.github.io/feconf2018/static/images/logo/share@2x.png"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "twitter:title",
        content: "2018 FEConf Korea"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "twitter:description",
        content: "FEConf 2018 \uCEE8\uD37C\uB7F0\uC2A4 \uD589\uC0AC\uC758 \uC77C\uC815 \uBC0F \uC2A4\uD53C\uCEE4 \uADF8\uB9AC\uACE0 \uAC01 \uC138\uC158\uC744 \uC18C\uAC1C\uD569\uB2C8\uB2E4. \uC62C\uD574 \uB450\uBC88\uC9F8 \uC5F4\uB9AC\uB294 FEConf! \uB9CE\uC740 \uAD00\uC2EC\uACFC \uC131\uC6D0 \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "twitter:creator",
        content: "@codemilli"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "twitter:image",
        content: "https://fedgkr.github.io/feconf2018/static/images/logo/share@2x.png"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "ie=edge"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("link", {
        rel: "icon",
        href: "static/favicon.ico"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("link", {
        rel: "stylesheet",
        href: "static/styles/normalize.css"
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: "\n            @font-face {\n                font-family: 'Spoqa Han Sans';\n                font-weight: 700;\n                src: local('Spoqa Han Sans Bold'),\n                url('static/fonts/SpoqaHanSans/SpoqaHanSansBold.woff2') format('woff2'),\n                url('static/fonts/SpoqaHanSans/SpoqaHanSansBold.woff') format('woff'),\n                url('static/fonts/SpoqaHanSans/SpoqaHanSansBold.ttf') format('truetype');\n            }\n            @font-face {\n                font-family: 'Spoqa Han Sans';\n                font-weight: 400;\n                src: local('Spoqa Han Sans Regular'),\n                url('static/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff2') format('woff2'),\n                url('static/fonts/SpoqaHanSans/SpoqaHanSansRegular.woff') format('woff'),\n                url('static/fonts/SpoqaHanSans/SpoqaHanSansRegular.ttf') format('truetype');\n            }\n          "
        }
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n                ga('create', 'UA-68676515-5', 'auto');\n                ga('send', 'pageview');\n              "
        }
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("article", {
        className: styles_index_scss__WEBPACK_IMPORTED_MODULE_14___default.a.Content
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_GlobalNotice_GlobalNotice__WEBPACK_IMPORTED_MODULE_0__["GlobalNotice"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_HeroSection_HeroSection__WEBPACK_IMPORTED_MODULE_3__["HeroSection"], {
        deadline: db_Etc__WEBPACK_IMPORTED_MODULE_10__["EtcData"].deadline,
        appWidth: appWidth
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_IntroSection_IntroSection__WEBPACK_IMPORTED_MODULE_4__["IntroSection"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_SpeakersSection_SpeakersSection__WEBPACK_IMPORTED_MODULE_8__["SpeakersSection"], {
        appWidth: appWidth,
        speakerList: db_Speaker__WEBPACK_IMPORTED_MODULE_11__["speakerList"],
        selectSpeaker: this.onSetSidebarOpen
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_ScheduleSection_ScheduleSection__WEBPACK_IMPORTED_MODULE_5__["ScheduleSection"], {
        appWidth: appWidth,
        speakerList: db_Speaker__WEBPACK_IMPORTED_MODULE_11__["speakerList"],
        selectSpeaker: this.onSetSidebarOpen
      }), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_SponsorsSection_SponsorsSection__WEBPACK_IMPORTED_MODULE_9__["SponsorsSection"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_FooterSection_FooterSection__WEBPACK_IMPORTED_MODULE_2__["FooterSection"], null), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_FixedButton_FixedButton__WEBPACK_IMPORTED_MODULE_1__["FixedButton"], null)), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["Sidebar"], {
        open: sidebarOpened,
        closeSidebar: this.onSetSidebarOpen
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(components_SpeakerInfo_SpeakerInfo__WEBPACK_IMPORTED_MODULE_7__["SpeakerInfo"], {
        speaker: selectedSpeaker,
        selectSpeaker: this.onSetSidebarOpen
      })));
    }
  }]);

  return IndexPage;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.9228ac9fd136022ba0dd.hot-update.js.map