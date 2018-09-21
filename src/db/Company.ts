export enum SupportLevel {
  DIAMOND = 'DIAMOND',
  PLATINUM = 'PLATINUM',
  GOLD = 'GOLD',
  ETC = 'ETC',
  NONE = 'NONE',
}

export class Company {
  public name: string;
  public level: SupportLevel;
  public link: string;
  public logo?: string;

  constructor(_: Company) {
    Object.assign(this, _);
  }

  public isLevelDiamond?() {
    return this.level === SupportLevel.DIAMOND;
  }

  public isLevelPlatinum?() {
    return this.level === SupportLevel.PLATINUM;
  }

  public isLevelGold?() {
    return this.level === SupportLevel.GOLD;
  }

  public isLevelEtc?() {
    return this.level === SupportLevel.ETC;
  }
}

export const companyList = [
  new Company({
    name: '우아한 형제들',
    level: SupportLevel.DIAMOND,
    link: 'https://www.woowahan.com',
    logo: 'static/images/company/woowabros/logo.png',
  }),
  new Company({
    name: '네이버',
    level: SupportLevel.PLATINUM,
    link: 'https://www.navercorp.com/ko/index.nhn',
    logo: 'static/images/company/naver/logo.png',
  }),
  new Company({
    name: 'KAKAO',
    level: SupportLevel.PLATINUM,
    link: 'https://www.kakaocorp.com',
    logo: 'static/images/company/kakao/logo.png',
  }),
  new Company({
    name: '토스',
    level: SupportLevel.PLATINUM,
    link: 'https://toss.im/',
    logo: 'static/images/company/toss/logo-v2.png',
  }),
  new Company({
    name: 'Studio XID',
    level: SupportLevel.PLATINUM,
    link: 'https://www.protopie.io',
    logo: 'static/images/company/studio-xid/logo.png',
  }),
  new Company({
    name: '네이버 웹툰',
    level: SupportLevel.PLATINUM,
    link: 'https://www.webtoons.com/',
    logo: 'static/images/company/webtoons/logo.png',
  }),
  new Company({
    name: 'NCSOFT',
    level: SupportLevel.GOLD,
    link: 'http://kr.ncsoft.com/korean',
    logo: 'static/images/company/ncsoft/logo-v2.png',
  }),
  new Company({
    name: '엔테크서비스',
    level: SupportLevel.GOLD,
    link: 'https://www.nts-corp.com/',
    logo: 'static/images/company/nts/logo.png',
  }),
  new Company({
    name: 'Jet Brains',
    level: SupportLevel.ETC,
    link: 'https://www.jetbrains.com/',
    logo: 'static/images/company/jetbrains/logo.png',
  }),
  new Company({
    name: '인사이트',
    level: SupportLevel.ETC,
    link: 'http://www.insightbook.co.kr/',
    logo: 'static/images/company/insight/logo.png',
  }),
  new Company({
    name: '클로바',
    level: SupportLevel.ETC,
    link: 'https://clova.ai',
    logo: 'static/images/company/clova/logo.png',
  }),
  new Company({
    name: '레진엔터테인먼트',
    level: SupportLevel.NONE,
    link: 'https://www.lezhin.com/',
  }),
  new Company({
    name: '코드스쿼드',
    level: SupportLevel.NONE,
    link: 'https://codesquad.kr/',
  }),
  new Company({
    name: '카카오뱅크',
    level: SupportLevel.NONE,
    link: 'https://www.kakaobank.com/',
  }),
  new Company({
    name: '미미박스',
    level: SupportLevel.NONE,
    link: 'https://www.memebox.com/',
  }),
  new Company({
    name: '중앙일보',
    level: SupportLevel.NONE,
    link: 'https://joongang.joins.com',
  }),
  new Company({
    name: '엔젤스윙',
    level: SupportLevel.NONE,
    link: 'https://angelswing.io',
  }),
  new Company({
    name: '바닐라코딩',
    level: SupportLevel.NONE,
    link: 'https://www.vanillacoding.co',
  }),
  new Company({
    name: '원티드',
    level: SupportLevel.NONE,
    link: 'https://www.wanted.co.kr/',
    logo: 'static/images/company/wanted/logo.png',
  }),
];

export const getCompanyByName = (name = '') => {
  return companyList.filter(c => c.name === name)[0];
};
