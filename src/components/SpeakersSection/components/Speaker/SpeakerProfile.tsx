import React from 'react'
import cc from 'classcat'
import css from './SpeakerProfile.scss'
import {Speaker} from "../../../../db/Speaker";

interface SpeakerProps {
  speaker: Speaker
  isLast: boolean
}

interface SpeakerState {
}

export class SpeakerProfile extends React.Component<SpeakerProps, SpeakerState> {
  constructor(props: SpeakerProps) {
    super(props)
  }

  render() {
    const {speaker, isLast} = this.props
    return (
      <div className={cc({
        [css.SpeakerProfile]: true,
        [css.isLast]: isLast,
      })}>
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
