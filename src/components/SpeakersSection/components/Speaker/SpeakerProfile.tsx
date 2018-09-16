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
          </div>
          {speaker.company ? (
            <div className={css.Company}>
              <span>{speaker.company.name}</span>
            </div>
          ) : null}
          <div className={css.Name}>
            <span>{speaker.name}</span>
          </div>
        </div>
      </a>
    );
  }

  private handleClickSpeaker = (e: MouseEvent) => {
    e.preventDefault();
    this.props.selectSpeaker(true, this.props.speaker);
  };
}
