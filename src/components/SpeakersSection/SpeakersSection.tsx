import React from 'react'
import css from './SpeakersSection.scss'
import {Speaker} from "../../db/Speaker";
import {SpeakerProfile} from "./components/Speaker/SpeakerProfile";
import {CONST} from "../../values/Const";

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
            {rowList.map((speakerList, idx) =>
              <div key={idx} className={css.SpeakersRow}>
                <>
                  {speakerList.map((speaker, idx) =>
                    <SpeakerProfile
                      key={idx}
                      speaker={speaker}
                      isLast={(idx + 1) % num === 0}
                    />
                  )}
                  <div className="clear" />
                </>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
