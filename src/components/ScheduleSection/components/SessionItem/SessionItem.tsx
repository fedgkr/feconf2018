import { Speaker } from 'db/Speaker';
import React, { MouseEvent } from 'react';
import css from './SessionItem.scss';

interface SessionItemProps {
  time: string;
  speaker?: Speaker;
  noSpeaker?: boolean;
  content?: string;
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

export class SessionItem extends React.Component<SessionItemProps> {
  public render() {
    const { time, speaker, noSpeaker, content } = this.props;
    return (
      <div className={css.SessionItem}>
        <div className={css.TimeIndicator}>
          <div className={css.Indicator} />
          <div className={css.Time}>
            <span>{time}</span>
          </div>
          <div className={css.Line} />
        </div>
        {speaker && (
          <div className={css.Speaker}>
            <div className={css.Title}>
              <span>{speaker.presentTitle}</span>
            </div>
            <div className={css.Name}>
              <a href="#" onClick={e => this.handleClickSelect(e, speaker)}>
                {speaker.name}
              </a>
            </div>
          </div>
        )}
        {noSpeaker ? (
          <div className={css.LaunchTitle}>
            <span>{content}</span>
          </div>
        ) : null}
        <div className="clear" />
      </div>
    );
  }

  private handleClickSelect(e: MouseEvent<HTMLAnchorElement>, s: Speaker) {
    e.preventDefault();
    this.props.selectSpeaker(true, s);
  }
}
