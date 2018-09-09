import cc from 'classcat';
import { Speaker } from 'db/Speaker';
import React from 'react';
import css from './SessionPair.scss';

interface SessionPairProps {
  time: string;
  speakerList: Speaker[];
  noSpeaker?: boolean;
  content?: string;
}

/**
 * define SessionPair class inherits React.Component
 * @React View Component
 */
export class SessionPair extends React.Component<SessionPairProps> {
  /**
   * SessionPair class constructor method
   * @constructs
   * @param {SessionProps} props
   */
  constructor(props: SessionPairProps) {
    super(props);
  }

  /**
   * SessionPair React Component render method
   * @returns {JSX.Element}
   */
  public render() {
    const { speakerList, time, noSpeaker = false, content = '' } = this.props;
    return (
      <div
        className={cc({
          [css.SessionPair]: true,
          [css.noSpeaker]: noSpeaker,
        })}
      >
        <div>
          {speakerList.map((speaker, idx) => {
            return (
              <div key={idx} className={css.SessionItem}>
                <div className={css.Title}>{speaker.presentTitle}</div>
                <div className={css.Name}>{speaker.name}</div>
              </div>
            );
          })}
          <div className="clear" />
        </div>
        <div className={css.TimeIndicator}>
          <div className={css.Indicator} />
          <div className={css.Time}>{time}</div>
          {noSpeaker ? <div className={css.LaunchTitle}>{content}</div> : null}
        </div>
        <div className={css.Line} />
      </div>
    );
  }
}
