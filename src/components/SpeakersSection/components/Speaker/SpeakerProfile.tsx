import React from 'react'
import cc from 'classcat'
import {Speaker} from "db/Speaker";
import css from './SpeakerProfile.scss'

interface SpeakerProps {
  speaker: Speaker
  isLast: boolean
  selectSpeaker: (o: boolean, s: Speaker) => void
}

interface SpeakerState {
}

export class SpeakerProfile extends React.Component<SpeakerProps, SpeakerState> {
  constructor(props: SpeakerProps) {
    super(props)
  }

  render() {
    const {speaker, isLast, selectSpeaker} = this.props
    return (
      <div
        className={cc({
          [css.SpeakerProfile]: true,
          [css.isLast]: isLast,
        })}
        onClick={() => selectSpeaker(true, speaker)}
      >
        <div className={css.ContentWrap}>
          <div className={css.ImageWrap}>
            <img src={speaker.profileImage} alt={`Speaker ${speaker.name} Image`} />
          </div>
          <div className={css.Company}>
            {speaker.company.name}
          </div>
          <div className={css.Name}>
            {speaker.name}
          </div>
        </div>
      </div>
    )
  }
}
