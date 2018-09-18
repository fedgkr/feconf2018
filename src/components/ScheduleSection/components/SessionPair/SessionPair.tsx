import cc from 'classcat';
import { Speaker } from 'db/Speaker';
import React, { MouseEvent } from 'react';
import css from './SessionPair.scss';

interface SessionPairProps {
  time: string;
  speakerList: Speaker[];
  noSpeaker?: boolean;
  content?: string;
  selectSpeaker: (o: boolean, s: Speaker) => void;
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
          {speakerList.map((speaker, idx) => (
            <div key={idx} className={css.SessionItem}>
              <div className={css.Title}>
                <span>{speaker.presentTitle}</span>
              </div>
              <div className={css.Name}>
                <a href="#" onClick={e => this.handleClickSelect(e, speaker)}>
                  {speaker.name}
                </a>
              </div>
            </div>
          ))}
          <div className="clear" />
        </div>
        <div className={css.TimeIndicator}>
          <div className={css.Indicator} />
          <div className={css.Time}>
            <span>{time}</span>
          </div>
          {noSpeaker ? (
            <div className={css.LaunchTitle}>
              <span>{content}</span>
            </div>
          ) : null}
        </div>
        <div className={css.Line} />
      </div>
    );
  }

  private handleClickSelect(e: MouseEvent<HTMLAnchorElement>, s: Speaker) {
    e.preventDefault();
    this.props.selectSpeaker(true, s);
  }
}
