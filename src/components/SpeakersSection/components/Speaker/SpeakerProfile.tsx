import cc from 'classcat';
import { Speaker } from 'db/Speaker';
import React from 'react';
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
      <div
        className={cc({
          [css.SpeakerProfile]: true,
          [css.isLast]: isLast,
        })}
        onClick={this.handleClickSpeaker}
      >
        <div className={css.ContentWrap}>
          <div className={css.ImageWrap}>
            <img src={speaker.profileImage} alt={`Speaker ${speaker.name} Image`} />
          </div>
          <div className={css.Company}>
            <span>{speaker.company.name}</span>
          </div>
          <div className={css.Name}>{speaker.name}</div>
        </div>
      </div>
    );
  }

  private handleClickSpeaker = () => {
    this.props.selectSpeaker(true, this.props.speaker);
  };
}
