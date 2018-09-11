export enum SupportLevel {
  DIAMOND = 'DIAMOND',
  PLATINUM = 'PLATINUM',
  GOLD = 'GOLD',
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
}

const companyListData = [
  {
    name: 'NAVER',
    level: SupportLevel.GOLD,
    link: 'https://www.navercorp.com/ko/index.nhn',
    logo: 'static/images/company/naver/logo.png',
  },
  {
    name: 'KAKAO',
    level: SupportLevel.PLATINUM,
    link: 'https://www.kakaocorp.com',
    logo: 'static/images/company/kakao/logo.png',
  },
  {
    name: 'NCSOFT',
    level: SupportLevel.GOLD,
    link: 'http://kr.ncsoft.com/korean',
    logo: 'static/images/company/ncsoft/logo.png',
  },
  {
    name: 'LINE',
    level: SupportLevel.GOLD,
    link: 'https://linepluscorp.com',
    logo: 'static/images/company/line/logo.png',
  },
  {
    name: '우아한 형제들',
    level: SupportLevel.DIAMOND,
    link: 'https://www.woowahan.com',
    logo: 'static/images/company/woowabros/logo.png',
  },
  {
    name: 'Studio XID',
    level: SupportLevel.PLATINUM,
    link: 'https://www.protopie.io',
    logo: 'static/images/company/studio-xid/logo.png',
  },
];

export const generateCompanyList = () => {
  return companyListData.map(company => {
    return new Company(company);
  });
};

export const companyList = generateCompanyList();
