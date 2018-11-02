import { EtcData } from 'db/Etc';
import { Speaker } from 'db/Speaker';
import React, { MouseEvent } from 'react';
import css from './SpeakerInfo.scss';

interface SpeakerInfoProps {
  speaker: Speaker;
  selectSpeaker: (o: boolean, s?: Speaker) => void;
}

export class SpeakerInfo extends React.Component<SpeakerInfoProps> {
  public render() {
    const { speaker } = this.props;
    return !speaker ? null : (
      <section className={css.SpeakerInfo}>
        <div className={css.CloseBtn}>
          <a href="#" onClick={this.handleClickClose}>
            <img src="static/images/general/close@2x.png" alt="close" />
          </a>
        </div>
        <div className={css.SpeakerWrap}>
          <div className={css.Profile}>
            <div className={css.Image}>
              <img src={speaker.profileImage} alt="profile image" />
            </div>
            <div className={css.Text}>
              <div className={css.Name}>
                <span>{speaker.name}</span>
              </div>
              {speaker.company ? (
                <div className={css.Company}>
                  <a target="_blank" href={speaker.company.link}>
                    {speaker.company.name}
                  </a>
                </div>
              ) : null}
            </div>
            <div className="clear" />
          </div>
          <div className={css.Present}>
            <div className={css.Title}>
              <span>{speaker.presentTitle}</span>{'  '}
              {speaker.link ? <a href={speaker.link}>[Link]</a> : null}
            </div>
            <div className={css.Track}>
              <span>
                Track {speaker.track} | {EtcData.sessionOrderMappingTime[speaker.order]}
              </span>
            </div>
            <div className={css.Desc}>
              <span>{speaker.presentDesc}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  private handleClickClose = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    this.props.selectSpeaker(false);
  };
}
