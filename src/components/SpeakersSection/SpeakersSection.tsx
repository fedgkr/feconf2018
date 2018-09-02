import React from 'react'
import css from './SpeakersSection.scss'
import {Speaker} from "../../db/Speaker";
import {SpeakerProfile} from "./components/Speaker/SpeakerProfile";

interface SpeakersSectionProps {
  speakerList: Speaker[]
}

interface SpeakersSectionState {
}

export class SpeakersSection extends React.Component<SpeakersSectionProps, SpeakersSectionState> {
  constructor(props: SpeakersSectionProps) {
    super(props)
  }

  render() {
    const {speakerList} = this.props
    return (
      <div className={css.SpeakersSection}>
        <div className={css.Content}>
          <div className={css.Title}>SPEAKERS</div>
          <div className={css.SpeakersWrap}>
            {speakerList.map((speaker, idx) => {
              return (
                <SpeakerProfile
                  key={idx}
                  speaker={speaker}
                  isLast={(idx + 1) % 4 === 0}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
