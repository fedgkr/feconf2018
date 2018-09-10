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
          <div className={css.Time}>{time}</div>
          <div className={css.Line} />
        </div>
        {speaker && (
          <div className={css.Speaker}>
            <div className={css.Title}>{speaker.presentTitle}</div>
            <div className={css.Name}>{speaker.name}</div>
          </div>
        )}
        {noSpeaker ? <div className={css.LaunchTitle}>{content}</div> : null}
        <div className="clear" />
      </div>
    );
  }
}
