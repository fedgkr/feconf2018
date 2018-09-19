import cc from 'classcat';
import { Speaker } from 'db/Speaker';
import React, { MouseEvent } from 'react';
import css from './SpeakerProfile.scss';

interface SpeakerProps {
  speaker: Speaker;
  isLast: boolean;
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

export class SpeakerProfile extends React.Component<SpeakerProps> {
  public render() {
    const { speaker, isLast } = this.props;
    return (
      <a
        className={cc({
          [css.SpeakerProfile]: true,
          [css.isLast]: isLast,
        })}
        onClick={this.handleClickSpeaker}
        href="#"
      >
        <div className={css.ContentWrap}>
          <div className={css.ImageWrap}>
            <img src={speaker.profileImage} alt={`Speaker ${speaker.name} Image`} />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              overflow="visible"
              id="progress"
            >
              <circle fill="none" stroke="#a821d2" strokeWidth="2" strokeDasharray="341" cx="50" cy="50" r="51" />
            </svg>
          </div>
          <div className={css.Name}>
            <span>{speaker.name}</span>
          </div>
          {speaker.company ? (
            <div className={css.Company}>
              <span>{speaker.company.name}</span>
            </div>
          ) : null}
        </div>
      </a>
    );
  }

  private handleClickSpeaker = (e: MouseEvent) => {
    e.preventDefault();
    this.props.selectSpeaker(true, this.props.speaker);
  };
}
