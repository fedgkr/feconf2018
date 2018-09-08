import React from 'react'
import cc from 'classcat'
import css from './SessionPair.scss'
import {Speaker} from "../../../../db/Speaker";

interface SessionPairProps {
  time: string
  speakerList: Speaker[]
  noSpeaker?: boolean
  content?: string
}

interface SessionPairState {
}

/**
 * define SessionPair class inherits React.Component
 * @React View Component
 */
export class SessionPair extends React.Component<SessionPairProps, SessionPairState> {

  /**
   * SessionPair class constructor method
   * @constructs
   * @param {SessionProps} props
   */
  constructor(props: SessionPairProps) {
    super(props)
  }

  /**
   * SessionPair React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {speakerList, time, noSpeaker = false, content = ''} = this.props
    return (
      <div className={cc({
        [css.SessionPair]: true,
        [css.noSpeaker]: noSpeaker,
      })}>
        <div>
          {speakerList.map((speaker, idx) => {
            return (
              <div
                key={idx}
                className={css.SessionItem}
              >
                <div className={css.Title}>
                  {speaker.presentTitle}
                </div>
                <div className={css.Name}>
                  {speaker.name}
                </div>
              </div>
            )
          })}
          <div className="clear" />
        </div>
        <div className={css.TimeIndicator}>
          <div className={css.Indicator} />
          <div className={css.Time}>
            {time}
          </div>
          {noSpeaker ?
            <div className={css.LaunchTitle}>
              {content}
            </div> : null}
        </div>
        <div className={css.Line} />
      </div>
    )
  }
}
