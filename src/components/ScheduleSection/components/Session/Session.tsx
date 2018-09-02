import React from 'react'
import cc from 'classcat'
import css from './Session.scss'
import {Speaker} from "../../../../db/Speaker";

interface SessionProps {
  time: string
  speakerList: Speaker[]
  noSpeaker?: boolean
  content?: string
}

interface SessionState {
}

/**
 * define Session class inherits React.Component
 * @React View Component
 */
export class Session extends React.Component<SessionProps, SessionState> {

  /**
   * Session class constructor method
   * @constructs
   * @param {SessionProps} props
   */
  constructor(props: SessionProps) {
    super(props)
  }

  /**
   * Session React Component render method
   * @returns {JSX.Element}
   */
  render() {
    const {speakerList, time, noSpeaker = false, content = ''} = this.props
    return (
      <div className={cc({
        [css.Session]: true,
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
