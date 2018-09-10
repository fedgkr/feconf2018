import { Speaker } from 'db/Speaker';
import React from 'react';
import { CONST } from 'values/Const';
import { SpeakersRow } from './components/SpeakersRow/SpeakersRow';
import css from './SpeakersSection.scss';

interface SpeakersSectionProps {
  appWidth: number;
  speakerList: Speaker[];
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

export class SpeakersSection extends React.Component<SpeakersSectionProps> {
  public getRowList(speakerList, num: number) {
    return speakerList.reduce((acc, speaker, idx) => {
      const curRow = Math.floor(idx / num);

      if (!acc[curRow]) {
        acc[curRow] = [];
      }

      acc[curRow].push(speaker);
      return acc;
    }, []);
  }

  public render() {
    const { appWidth, speakerList, selectSpeaker } = this.props;
    const num = appWidth > CONST.TABLET_WIDTH ? 4 : 3;
    const rowList = this.getRowList(speakerList, num);
    return (
      <div className={css.SpeakersSection} id="speakers">
        <div className={css.Content}>
          <div className={css.Title}>SPEAKERS</div>
          <div className={css.SpeakersWrap}>
            {rowList.map((list, idx) => (
              <SpeakersRow key={idx} speakerList={list} num={num} selectSpeaker={selectSpeaker} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
