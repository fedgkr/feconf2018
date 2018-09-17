import { Speaker } from 'db/Speaker';
import React from 'react';
import { CONST } from 'values/Const';
import { ApparentSection } from '../ApparentSection/ApparentSection';
import { SpeakersRow } from './components/SpeakersRow/SpeakersRow';
import css from './SpeakersSection.scss';

interface SpeakersSectionProps {
  appWidth: number;
  speakerList: Speaker[];
  selectSpeaker: (o: boolean, s: Speaker) => void;
}

export class SpeakersSection extends React.Component<SpeakersSectionProps> {
  public content: HTMLElement;

  public componentDidMount() {
    new IntersectionObserver(this.onIntersecting, { threshold: [0, 0.2] }).observe(this.content);
  }

  public render() {
    const { appWidth, speakerList, selectSpeaker } = this.props;
    const num = appWidth > CONST.TABLET_WIDTH ? 4 : 3;
    const rowList = this.getRowList(speakerList, num);
    return (
      <section className={css.SpeakersSection} id="speakers">
        <ApparentSection>
          <div className={css.Content} ref={el => (this.content = el)}>
            <h2 className={css.Title}>SPEAKERS</h2>
            <div className={css.SpeakersWrap}>
              {rowList.map((list, idx) => (
                <SpeakersRow key={idx} speakerList={list} num={num} selectSpeaker={selectSpeaker} />
              ))}
            </div>
          </div>
        </ApparentSection>
      </section>
    );
  }

  private getRowList(speakerList, num: number) {
    return speakerList.reduce((acc, speaker, idx) => {
      const curRow = Math.floor(idx / num);

      if (!acc[curRow]) {
        acc[curRow] = [];
      }

      acc[curRow].push(speaker);
      return acc;
    }, []);
  }

  private onIntersecting = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ target, intersectionRatio }) => {
      if (intersectionRatio > 0.2) {
        target.classList.add(css.appear);
      } else if (intersectionRatio <= 0) {
        target.classList.remove(css.appear);
      }
    });
  };
}
