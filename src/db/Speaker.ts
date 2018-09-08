import {Company, companyList} from "./Company";
import {ArrayUtils} from "../utils/ArrayUtils";

export class Speaker {
  constructor(_: Speaker) {
    Object.assign(this, _)
  }

  name: string
  desc: string
  profileImage: string
  presentTitle: string
  order: number
  company: Company
}

export const generateSpeakerList = () => {
  return ArrayUtils.createNArray(16).map((idx) => {
    const ran = Math.floor(Math.random() * companyList.length)
    return new Speaker({
      name: '문주영',
      profileImage: 'static/images/speaker/01.jpeg',
      presentTitle: '가즈아앙',
      order: Math.floor(idx / 2) + 1,
      desc: '파이이이이이이팅',
      company: companyList[ran],
    })
  })
}

export const speakerList = generateSpeakerList()

export const getNOrderSpeakers = (order: number) => {
  return speakerList.filter((speaker) => speaker.order === order)
}
