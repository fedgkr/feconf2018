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
  presentDesc: string
  track: number
  order: number
  company: Company
}

export const generateSpeakerList = () => {
  return ArrayUtils.createNArray(14).map((idx) => {
    const ran = Math.floor(Math.random() * companyList.length)
    return new Speaker({
      name: '문주영',
      profileImage: 'static/images/speaker/01.jpeg',
      presentTitle: '가즈아앙',
      presentDesc: '프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다. 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다. 프론트엔드를 개발하며 마주했던 치열한 고민과 깊은 인사이트를 공유하며 여러분과 함께 성장하고 싶습니다.',
      track: Math.floor(Math.random() * 2) + 1,
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
