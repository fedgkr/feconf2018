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
}

const companyListData = [{
  name: 'NAVER',
  level: SupportLevel.GOLD,
},{
  name: 'KAKAO',
  level: SupportLevel.PLATINUM,
},{
  name: 'NCSOFT',
  level: SupportLevel.GOLD,
},{
  name: 'LINE',
  level: SupportLevel.GOLD,
},{
  name: '우아한 형제들',
  level: SupportLevel.DIAMOND,
},{
  name: 'Studio XID',
  level: SupportLevel.PLATINUM,
}]

export const generateCompanyList = () => {
  return companyListData.map((company) => {
    return new Company(company)
  })
}

export const companyList = generateCompanyList()
