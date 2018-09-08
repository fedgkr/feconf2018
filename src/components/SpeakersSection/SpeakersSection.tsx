import React from 'react'
import css from './SpeakersSection.scss'
import {Speaker} from "../../db/Speaker";
import {CONST} from "../../values/Const";
import {SpeakersRow} from "./components/SpeakersRow/SpeakersRow";

interface SpeakersSectionProps {
  appWidth: number
  speakerList: Speaker[]
}

interface SpeakersSectionState {
}

export class SpeakersSection extends React.Component<SpeakersSectionProps, SpeakersSectionState> {
  constructor(props: SpeakersSectionProps) {
    super(props)
  }

  getRowList(speakerList, num: number) {
    return speakerList.reduce((acc, speaker, idx) => {
      const curRow = Math.floor(idx / num)

      if (!acc[curRow]) {
        acc[curRow] = []
      }

      acc[curRow].push(speaker)
      return acc
    }, [])
  }

  render() {
    const {appWidth, speakerList} = this.props
    const num = appWidth > CONST.TABLET_WIDTH ? 4 : 3
    const rowList = this.getRowList(speakerList, num)
    return (
      <div className={css.SpeakersSection} id="speakers">
        <div className={css.Content}>
          <div className={css.Title}>SPEAKERS</div>
          <div className={css.SpeakersWrap}>
            {rowList.map((speakerList, idx) => (
               <SpeakersRow
                 key={idx}
                 speakerList={speakerList}
                 num={num}
               />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
