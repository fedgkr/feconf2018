import { EtcData } from 'db/Etc';
import { Speaker } from 'db/Speaker';
import React from 'react';
import css from './SpeakerInfo.scss';

interface SpeakerInfoProps {
  speaker: Speaker;
  selectSpeaker: (o: boolean, s?: Speaker) => void;
}

export class SpeakerInfo extends React.Component<SpeakerInfoProps> {
  public render() {
    const { speaker } = this.props;
    return !speaker ? null : (
      <div className={css.SpeakerInfo}>
        <div className={css.CloseBtn}>
          <a href="#" onClick={this.handleClickClose}>
            <img src="static/images/general/close-x.png" alt="close" />
          </a>
        </div>
        <div className={css.SpeakerWrap}>
          <div className={css.Profile}>
            <div className={css.Image}>
              <img src={speaker.profileImage} alt="profile image" />
            </div>
            <div className={css.Text}>
              <div className={css.Company}>{speaker.company.name}</div>
              <div className={css.Name}>{speaker.name}</div>
            </div>
            <div className="clear" />
          </div>
          <div className={css.Present}>
            <div className={css.Title}>{speaker.presentTitle}</div>
            <div className={css.Track}>
              Track {speaker.track} | {EtcData.sessionOrderMappingTime[speaker.order]}
            </div>
            <div className={css.Desc}>{speaker.presentDesc}</div>
          </div>
        </div>
      </div>
    );
  }

  private handleClickClose = () => {
    this.props.selectSpeaker(false);
  };
}
