webpackHotUpdate("static/development/pages/index.js",{

/***/ "./db/Speaker.ts":
/*!***********************!*\
  !*** ./db/Speaker.ts ***!
  \***********************/
/*! exports provided: Speaker, generateSpeakerList, speakerList, getNOrderSpeakers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speaker", function() { return Speaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSpeakerList", function() { return generateSpeakerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "speakerList", function() { return speakerList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNOrderSpeakers", function() { return getNOrderSpeakers; });
/* harmony import */ var _utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/ArrayUtils */ "./utils/ArrayUtils.ts");
/* harmony import */ var _Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company */ "./db/Company.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Speaker = function Speaker(_) {
  _classCallCheck(this, Speaker);

  Object.assign(this, _);
};
var generateSpeakerList = function generateSpeakerList() {
  return _utils_ArrayUtils__WEBPACK_IMPORTED_MODULE_0__["ArrayUtils"].createNArray(14).map(function (idx) {
    var ran = Math.floor(Math.random() * _Company__WEBPACK_IMPORTED_MODULE_1__["companyList"].length);
    return new Speaker({
      name: '문주영',
      profileImage: 'static/images/speaker/01.jpeg',
      presentTitle: 'Redux-thunk에서 Redux-saga로 이사하기',
      presentDesc: '프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다. 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다. 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.',
      track: Math.floor(Math.random() * 2) + 1,
      order: Math.floor(idx / 2) + 1,
      company: _Company__WEBPACK_IMPORTED_MODULE_1__["companyList"][ran]
    });
  });
};
var speakerList = [new Speaker({
  name: 'Ken Huh',
  profileImage: 'static/images/speaker/hea_guenhang.jpg',
  presentTitle: '미국개발자 vs 한국개발자',
  presentDesc: 'Currently teaching at Vanilla Coding. Former Frontend Team Lead at Nike World Headquarters in Oregon, United States.',
  link: 'https://drive.google.com/file/d/1QaaXIFU6-rIOrwlaAWxCOa4BFnMAVcJo/view',
  videoLink: 'https://www.youtube.com/watch?v=xbdFnay429E',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('바닐라코딩'),
  track: 1,
  order: 1
}), new Speaker({
  name: '서재원',
  profileImage: 'static/images/speaker/seo_jaewon.jpg',
  presentTitle: 'TC39 스펙에 대한 주관적 참견 시점',
  presentDesc: '저와 애증의 관계인 자바스크립트의 미래를 만들어 본 경험을 여러분들과 나누기 위해 온 중학생입니다.',
  link: 'https://drive.google.com/file/d/1Fu04-zNnaUGWjEC3z8hSiG_Si62lfrbd/view',
  videoLink: 'https://www.youtube.com/watch?v=x4jaA3MMGSQ',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('엔젤스윙'),
  track: 2,
  order: 1
}), new Speaker({
  name: '이민규',
  profileImage: 'static/images/speaker/lee_minkyu.jpg',
  presentTitle: 'Redux-Saga - 제너레이터, 사이드이펙트, 채널',
  presentDesc: 'FE 개발자입니다. 책임있는 개발 문화, 깔끔한 코드를 좋아합니다.',
  link: 'https://drive.google.com/file/d/1ttAVFSIo_2VANI-KIJIn0Sv2NUOKJI4m/view?usp=sharing',
  videoLink: 'https://www.youtube.com/watch?v=UxpREAHZ7Ck&index=5&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('토스'),
  track: 1,
  order: 2
}), new Speaker({
  name: '고재도',
  profileImage: 'static/images/speaker/ko_jaedo.png',
  presentTitle: '복붙없이 우리팀에 딱 맞는 엥귤러 프로젝트 만들기',
  presentDesc: '카카오뱅크에서 빅데이터 소프트웨어 엔지니어로 일하고 있고 Google Developer Expert로써 Angular와 웹 기술 전파를 하고 있습니다. 웹 기술, 빅데이터, 실시간 처리 분야에 관심이 많고 많은 개발자들을 만나 지식 공유와 개발자 커뮤니티 발전에 힘쓰고 싶습니다.',
  link: 'https://docs.google.com/presentation/d/1bSZtzXDsnFtvNK96oJb3RkVuA_1pcYoTWqY4vdH9BjY/edit?usp=sharing',
  videoLink: 'https://www.youtube.com/watch?v=xZzXPO6UqVw',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('카카오뱅크'),
  track: 2,
  order: 2
}), new Speaker({
  name: '전기환',
  profileImage: 'static/images/speaker/jeon_kihwan.jpg',
  presentTitle: '생각보다 쉬운 webGL (feat. three.js)',
  presentDesc: "중앙일보 디지털 콘텐트 랩에서 프론트 개발을 맡고 있습니다. 재밌고 신선한 콘텐트를 만들기 위해 기획 및 디자인도 종종하는 디발자입니다. 최근에는 three.js 를 사용하여 '그 곳 판문점'이라는 콘텐트를 만들었습니다.",
  link: 'https://docs.google.com/presentation/d/1dAX9mid8tf2JaVGusy6rN_GeZPHcI3M9sY9Q2z02huU/edit?usp=sharing',
  videoLink: 'https://www.youtube.com/watch?v=b3vP6wfpqWE&index=4&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('중앙일보'),
  track: 1,
  order: 3
}), new Speaker({
  name: '박승현',
  profileImage: 'static/images/speaker/park_seounghyeon.jpg',
  presentTitle: 'React Component와 D3 Object를 유기적으로 연결하는 전략',
  presentDesc: 'Memebox에서 웹 개발자로 일하고 있으며, 더 우아한 표현들과 기법으로 제품을 생산하기 위해 고민합니다. 현대 웹 프론트엔드 기술의 개방성과 역동성의 매력에 빠진 예술가입니다.',
  link: 'https://drive.google.com/file/d/1Aq0iQd4LbryuOlSEHy-hATWJq8VDcAT2/view?usp=sharing',
  videoLink: 'https://www.youtube.com/watch?v=_z_6H4x2XDg&index=10&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('미미박스'),
  track: 2,
  order: 3
}), new Speaker({
  name: '이상진',
  profileImage: 'static/images/speaker/lee_sangjin.jpg',
  presentTitle: '웹폰트의 사용과 최적화',
  presentDesc: '현재 엔테크서비스(NTS)에서 지식iN UI개발 업무를 하고 있습니다. 모션그래픽 디자인, 애니메이션 등을 적용한 인터렉티브 웹 UI개발에 관심이 많고 Interactive Developer가 꿈인 UI개발자입니다.',
  link: 'https://slides.com/sangjinlee/webconf-2018-5',
  videoLink: 'https://www.youtube.com/watch?v=4YCBBoSg2fk&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE&index=3',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('엔테크서비스'),
  track: 1,
  order: 4
}), new Speaker({
  name: '최연규',
  profileImage: 'static/images/speaker/choi_younkue.jpg',
  presentTitle: '한 편의 애니메이션같은 CSS',
  presentDesc: 'CSS Animation으로 생각보다 많은 것을 표현할 수 있고 여러분의 눈을 재밌게 할 수 있습니다. 만들 땐 만들더라도 재미있게 만들어보는 건 어떨까요?',
  link: 'https://slides.com/daybrush/cssmotiongraphic',
  videoLink: 'https://www.youtube.com/watch?v=-rvFrDQuNMg&index=9&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('네이버'),
  track: 2,
  order: 4
}), new Speaker({
  name: '윤지수',
  profileImage: 'static/images/speaker/yun_jisu.jpg',
  presentTitle: '개발자를 위한 UX programming',
  presentDesc: '바닐라 자바스크립트를 사랑하며, 훌륭한 UI개발자를 양성하기 위해 코드스쿼드에서 열일 중입니다.',
  link: 'https://drive.google.com/file/d/1o_-B1SIpIEKim7JUkqtG_MlKS2C2plSs/view',
  videoLink: 'https://www.youtube.com/watch?v=lRt3ecDm8AI&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE&index=2',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('코드스쿼드'),
  track: 1,
  order: 5
}), new Speaker({
  name: '임형주',
  profileImage: 'static/images/speaker/im_hyeongju.jpg',
  presentTitle: '자체 polyfill.io 서버 구축하여 프론트엔드 최적화하기',
  presentDesc: '레진코믹스에서 소프트웨어 엔지니어로 일하고 있고 웹기술, 클라우드 아키텍처에 관심이 많은 일인입니다.',
  link: 'https://slides.com/odyss/deck-8#/',
  videoLink: 'https://www.youtube.com/watch?v=8GcVBTBI4Ew&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE&index=8',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('레진엔터테인먼트'),
  track: 2,
  order: 5
}), new Speaker({
  name: '김아름',
  profileImage: 'static/images/speaker/kim_ahreum.jpg',
  presentTitle: 'Front-End 프로젝트의 Test code 작성 경험기',
  presentDesc: '퍼블리싱 위주의 업무를 하다가 제대로 된 프론트엔드 개발을 하고 싶어 퇴사한 이후, 충분히 고민하고 마음대로 틀려보는 개발을 하며 성장하고 있습니다. 그러던 중 테스트 코드를 처음 작성하며 느꼈던 경험들을 개인 블로그에 적어 올린 것이 계기가 되어 발표할 기회를 얻게 되었습니다.',
  link: 'https://www.slideshare.net/ahreumkim393/feconf-2018-frontend-test-code',
  videoLink: 'https://www.youtube.com/watch?v=siArVmGejGo&index=1&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE',
  track: 1,
  order: 6
}), new Speaker({
  name: '강동욱',
  profileImage: 'static/images/speaker/kang_dongwook.jpg',
  presentTitle: '은밀하게 신속하게 React 포팅 성공기',
  presentDesc: '회사 내에 React 또는 자바스크립트 프레임워크 도입을 고민하고 계신 분들에게 도움이 되었으면 좋겠습니다. 원티드가 jQuery 기반의 초기 구조에서 어떻게 React 기반으로 재작성할 수 있었고 더 나아가 서버렌더링까지 적용할 수 있었는지 과정을 공유합니다.',
  link: 'static/file/FJTR.pdf',
  videoLink: 'https://www.youtube.com/watch?v=UV_JN8g36fQ&index=7&list=PLZl3coZhX98oeg76bUDTagfySnBJin3FE',
  company: Object(_Company__WEBPACK_IMPORTED_MODULE_1__["getCompanyByName"])('원티드'),
  track: 2,
  order: 6
})];
var getNOrderSpeakers = function getNOrderSpeakers(order) {
  return speakerList.filter(function (speaker) {
    return speaker.order === order;
  });
};

/***/ })

})
//# sourceMappingURL=index.js.12d6252bb3346b4027e3.hot-update.js.map