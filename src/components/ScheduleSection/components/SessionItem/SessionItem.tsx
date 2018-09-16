import { Speaker } from 'db/Speaker';
import React from 'react';
import css from './SessionItem.scss';

interface SessionItemProps {
  time: string;
  speaker?: Speaker;
  noSpeaker?: boolean;
  content?: string;
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
              <span>{speaker.name}</span>
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
}
