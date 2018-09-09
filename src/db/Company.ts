export enum SupportLevel {
  DIAMOND = 'DIAMOND',
  PLATINUM = 'PLATINUM',
  GOLD = 'GOLD',
  NONE = 'NONE',
}

export class Company {
  constructor(_: Company) {
    Object.assign(this, _)
  }

  name: string
  level: SupportLevel
  logo?: string
}

const companyListData = [{
  name: 'NAVER',
  level: SupportLevel.GOLD,
  logo: '/static/images/company/ncsoft/logo.gif',
},{
  name: 'KAKAO',
  level: SupportLevel.PLATINUM,
  logo: '/static/images/company/kakao/logo.jpg',
},{
  name: 'NCSOFT',
  level: SupportLevel.GOLD,
  logo: '/static/images/company/ncsoft/logo.gif',
},{
  name: 'LINE',
  level: SupportLevel.GOLD,
  logo: '/static/images/company/ncsoft/logo.gif',
},{
  name: '우아한 형제들',
  level: SupportLevel.DIAMOND,
  logo: '/static/images/company/woowabros/logo.jpg',
},{
  name: 'Studio XID',
  level: SupportLevel.PLATINUM,
  logo: '/static/images/company/studio-xid/logo.jpg',
}]

export const generateCompanyList = () => {
  return companyListData.map((company) => {
    return new Company(company)
  })
}

export const companyList = generateCompanyList()
