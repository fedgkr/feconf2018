import { ArrayUtils } from '../utils/ArrayUtils';
import {Company, companyList, getCompanyByName} from './Company';

export class Speaker {
  public name: string;
  public profileImage: string;
  public presentTitle: string;
  public presentDesc: string;
  public track: number;
  public order: number;
  public company?: Company;
  constructor(_: Speaker) {
    Object.assign(this, _);
  }
}

export const generateSpeakerList = () => {
  return ArrayUtils.createNArray(14).map(idx => {
    const ran = Math.floor(Math.random() * companyList.length);
    return new Speaker({
      name: '문주영',
      profileImage: 'static/images/speaker/01.jpeg',
      presentTitle: 'Redux-thunk에서 Redux-saga로 이사하기',
      presentDesc:
        '프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다. 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다. 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.',
      track: Math.floor(Math.random() * 2) + 1,
      order: Math.floor(idx / 2) + 1,
      company: companyList[ran],
    });
  });
};

export const speakerList = [
  new Speaker({
    name: 'Ken Huh',
    profileImage: 'static/images/speaker/hea_guenhang.jpg',
    presentTitle: '미국개발자vs한국개발자',
    presentDesc:
      'Currently teaching at Vanilla Coding. Former Frontend Team Lead at Nike World Headquarters in Oregon, United States.',
    track: 1,
    order: 1,
  }),
  new Speaker({
    name: '서재원',
    profileImage: 'static/images/speaker/seo_jaewon.jpg',
    presentTitle: '주관적 참견시점',
    presentDesc:
      '실용적인 기술보다 학문적인 기술을 좋아하는 동네 아저씨입니다. 자바스크립트 표준에 대한 이야기와 며몇 프로포절에 참견을 한 경험을 들려드립니다.',
    track: 2,
    order: 1,
  }),
  new Speaker({
    name: '이민규',
    profileImage: 'static/images/speaker/lee_minkyu.jpg',
    presentTitle: 'Redux-Saga - 제너레이터, 사이드이펙트, 채널',
    presentDesc: 'FE 개발자입니다. 책임있는 개발 문화, 깔끔한 코드를 좋아합니다.',
    company: getCompanyByName('Toss'),
    track: 1,
    order: 2,
  }),
  new Speaker({
    name: '고재도',
    profileImage: 'static/images/speaker/ko_jaedo.png',
    presentTitle: '봇붙없이 우리팀에 딱 맞는 엥귤러 프로젝트 만들기',
    presentDesc:
      '카카오뱅크에서 빅데이터 소프트웨어 엔지니어로 일하고 있고 Google Developer Expert로써 Angular와 웹 기술 전파를 하고 있습니다. 웹 기술, 빅데이터, 실시간 처리 분야에 관심이 많고 많은 개발자들을 만나 지식 공유와 개발자 커뮤니티 발전에 힘쓰고 싶습니다.',
    company: getCompanyByName('카카오뱅크'),
    track: 2,
    order: 2,
  }),
  new Speaker({
    name: '전기환',
    profileImage: 'static/images/speaker/jeon_kihwan.jpg',
    presentTitle: '실무에서 WebGL, three.js 사용하기',
    presentDesc:
      "중앙일보 디지털 콘텐트 랩에서 프론트 개발을 맡고 있습니다. 기존 언론사에서는 볼 수 없는 재밌고 신선한 콘텐트를 만들기 위해 기획 및 다자인도 하고 있습니다. 최근에는 three.js를 많이 사용하며 최근에는 '그 곳 판문점'이라는 콘텐트를 만들었습니다.",
    company: getCompanyByName('중앙일보'),
    track: 1,
    order: 3,
  }),
  new Speaker({
    name: '박승현',
    profileImage: 'static/images/speaker/park_seounghyeon.jpg',
    presentTitle: 'React Component와 D3 Object를 유기적으로 연결하는 전략',
    presentDesc:
      'Memebox에서 웹 개발자로 일하고 있으며, 더 우아한 표현들과 기법으로 제품을 생산하기 위해 고민합니다. 현대 웹 프론트엔드 기술의 개방성과 역동성의 매력에 빠진 예술가입니다.',
    company: getCompanyByName('미미박스'),
    track: 2,
    order: 3,
  }),
  new Speaker({
    name: '이상진',
    profileImage: 'static/images/speaker/lee_sangjin.jpg',
    presentTitle: '웹폰트의 사용과 최적화',
    presentDesc:
      '현재 NTS에서 지식iN UI개발 업무를 하고 있습니다. 모션그래픽 디자인, 애니메이션 등을 적용한 인터렉티브 웹 UI개발에 관심이 많고 Interactive Developer가 꿈인 UI개발자입니다.',
    company: getCompanyByName('NTS'),
    track: 1,
    order: 4,
  }),
  new Speaker({
    name: '최연규',
    profileImage: 'static/images/speaker/choi_younkue.jpg',
    presentTitle: '한 편의 애니메이션같은 CSS',
    presentDesc:
      'CSS Animation으로 생각보다 많은 것을 표현할 수 있고 여러분의 눈을 재밌게 할 수 있습니다. 만들 땐 만들더라도 재미있게 만들어보는 건 어떨까요?',
    company: getCompanyByName('NAVER'),
    track: 2,
    order: 4,
  }),
  new Speaker({
    name: '윤지수',
    profileImage: 'static/images/speaker/yun_jisu.jpg',
    presentTitle: '개발자를 위한 UX programming',
    presentDesc: '바닐라 자바스크립트를 사랑하며, 훌륭한 UI개발자를 양성하기 위해 코드스쿼드에서 열일 중입니다.',
    company: getCompanyByName('코드스쿼드'),
    track: 1,
    order: 5,
  }),
  new Speaker({
    name: '임형주',
    profileImage: 'static/images/speaker/blank.png',
    presentTitle: '자체 polyfill.io 서버 구축하여 프런트엔드 최적화하기',
    presentDesc: '',
    company: getCompanyByName('Lezhin Entertainment'),
    track: 2,
    order: 5,
  }),
  new Speaker({
    name: '(TBD)',
    profileImage: 'static/images/speaker/blank.png',
    presentTitle: '',
    presentDesc: '(TBD)',
    track: 2,
    order: 6,
  }),
  new Speaker({
    name: '김아름',
    profileImage: 'static/images/speaker/kim_ahreum.jpg',
    presentTitle: 'Front-End 프로젝트의 Test code 작성 경험기',
    presentDesc:
      '퍼블리싱 위주의 업무를 하다가 제대로 된 프론트엔드 개발을 하고 싶어 퇴사한 이후, 충분히 고민하고 마음대로 틀려보는 개발을 하며 성장하고 있습니다. 그러던 중 테스트 코드를 처음 작성하며 느꼈던 경험들을 개인 블로그에 적어 올린 것이 계기가 되어 발표할 기회를 얻게 되었습니다.',
    track: 1,
    order: 6,
  }),
];

export const getNOrderSpeakers = (order: number) => {
  return speakerList.filter(speaker => speaker.order === order);
};
